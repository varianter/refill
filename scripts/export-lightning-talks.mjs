#!/usr/bin/env node
// Exports lightning talk submissions from the call-for-papers Vercel Blob
// prefix as a JSON array shaped like the Talk entries used in
// src/utils/schedule/schedule.ts (the `Schedule` type), so they can be
// merged into the schedule by hand.
// Auth mirrors src/actions/callForPaper.ts and scripts/list-submissions.mjs:
// a Vercel OIDC token + BLOB_STORE_ID rather than a static read-write token.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { list, get } from "@vercel/blob";

const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

function loadEnvFile(filename) {
  const filePath = path.join(rootDir, filename);
  let contents;
  try {
    contents = readFileSync(filePath, "utf8");
  } catch {
    return;
  }
  for (const line of contents.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    if (process.env[key] !== undefined) continue;
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    process.env[key] = value.replace(/\\n/g, "\n");
  }
}

loadEnvFile(".env.local");
loadEnvFile(".env");

const oidcToken = process.env.VERCEL_OIDC_TOKEN;
const storeId = process.env.BLOB_STORE_ID;

if (!oidcToken || !storeId) {
  console.error(
    "Missing VERCEL_OIDC_TOKEN or BLOB_STORE_ID. Run `vercel env pull .env.local` or set them in your shell.",
  );
  process.exit(1);
}

const LIGHTNING_TALK_DURATION = "Lightning talk (< 10 min)";

const outPath = process.argv[2] ?? "lightning-talks/lightning-talks.json";

async function fetchJson(blob) {
  const result = await get(blob.url, {
    access: "private",
    oidcToken,
    storeId,
  });
  if (!result) return null;
  const chunks = [];
  for await (const chunk of result.stream) chunks.push(chunk);
  return JSON.parse(Buffer.concat(chunks).toString("utf8"));
}

async function fetchAll(prefix) {
  const submissions = [];
  let cursor;
  do {
    const page = await list({ prefix, cursor, oidcToken, storeId });
    for (const blob of page.blobs) {
      const data = await fetchJson(blob);
      if (data) submissions.push(data);
    }
    cursor = page.hasMore ? page.cursor : undefined;
  } while (cursor);
  submissions.sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1));
  return submissions;
}

// Submissions are sorted newest-first, so keeping the first occurrence per
// title keeps the latest resubmission and drops older duplicates.
function dedupeByTitle(entries) {
  const seen = new Set();
  const unique = [];
  for (const entry of entries) {
    const key = entry.title?.trim().toLowerCase();
    if (key && seen.has(key)) continue;
    if (key) seen.add(key);
    unique.push(entry);
  }
  return unique;
}

// Shapes a submission as a Talk entry (src/utils/schedule/types.ts). Fields
// that the call-for-papers form doesn't collect — location, from/to, and
// discipline — are left as placeholders for whoever merges this into
// schedule.ts. `speaker` holds the raw presenter name rather than a
// SpeakerName enum member, since that mapping also has to happen by hand.
function toTalkEntry(entry, index) {
  return {
    type: "talk",
    id: `lt-${index + 1}`,
    title: entry.title ?? "",
    from: "",
    to: "",
    location: "",
    discipline: null,
    speaker: entry.presenter ?? "",
    talkDescription: entry.description ? [entry.description] : [],
    submittedDuration: entry.duration ?? null,
    submittedAt: entry.timestamp ?? null,
  };
}

async function main() {
  const submissions = await fetchAll("call-for-papers/");
  const lightningTalks = dedupeByTitle(submissions).filter(
    (entry) => entry.duration === LIGHTNING_TALK_DURATION,
  );

  const talks = lightningTalks.map(toTalkEntry);

  const resolvedOutPath = path.resolve(rootDir, outPath);
  mkdirSync(path.dirname(resolvedOutPath), { recursive: true });
  writeFileSync(resolvedOutPath, JSON.stringify(talks, null, 2) + "\n");

  console.error(`Wrote ${talks.length} lightning talks to ${outPath}`);
}

main().catch((err) => {
  console.error("Failed to export lightning talks:", err.message ?? err);
  process.exit(1);
});
