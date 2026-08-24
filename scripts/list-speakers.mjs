#!/usr/bin/env node
// Lists unique speaker (presenter) names from call-for-papers submissions
// stored in Vercel Blob, for inviting them to a Slack channel.
// Auth mirrors src/actions/callForPaper.ts and scripts/list-submissions.mjs:
// a Vercel OIDC token + BLOB_STORE_ID rather than a static read-write token.

import { readFileSync } from "node:fs";
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

async function main() {
  const submissions = await fetchAll("call-for-papers/");

  const seen = new Set();
  const speakers = [];
  for (const entry of submissions) {
    const name = entry.presenter?.trim();
    if (!name) continue;
    const key = name.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    speakers.push(name);
  }

  speakers.sort((a, b) => a.localeCompare(b));

  console.error(`${speakers.length} unique speaker(s) found:\n`);
  for (const name of speakers) console.log(name);
}

main().catch((err) => {
  console.error("Failed to list speakers:", err.message ?? err);
  process.exit(1);
});
