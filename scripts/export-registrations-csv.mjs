#!/usr/bin/env node
// Exports all registrations stored in Vercel Blob as CSV.
// Auth mirrors src/actions/registration.ts and scripts/list-submissions.mjs:
// a Vercel OIDC token + BLOB_STORE_ID rather than a static read-write token.

import { readFileSync, writeFileSync } from "node:fs";
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

const outPath = process.argv[2];

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

const CSV_COLUMNS = [
  "name",
  "email",
  "dietary",
  "attendingDayProgram",
  "attendingDinner",
  "attendingSocial",
  "timestamp",
];

function csvEscape(value) {
  const text = value === undefined || value === null ? "" : String(value);
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

function toCsv(entries) {
  const lines = [CSV_COLUMNS.join(",")];
  for (const entry of entries) {
    lines.push(CSV_COLUMNS.map((col) => csvEscape(entry[col])).join(","));
  }
  return lines.join("\n") + "\n";
}

async function main() {
  const registrations = await fetchAll("registrations/");
  const csv = toCsv(registrations);

  if (outPath) {
    writeFileSync(path.resolve(rootDir, outPath), csv);
    console.error(`Wrote ${registrations.length} registrations to ${outPath}`);
  } else {
    process.stdout.write(csv);
  }
}

main().catch((err) => {
  console.error("Failed to export registrations:", err.message ?? err);
  process.exit(1);
});
