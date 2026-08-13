#!/usr/bin/env node
// Lists all registrations and call-for-papers submissions stored in Vercel Blob.
// Auth mirrors src/actions/registration.ts and src/actions/callForPaper.ts:
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

const c = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  cyan: "\x1b[36m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  magenta: "\x1b[35m",
  red: "\x1b[31m",
};

const style = (text, ...codes) => `${codes.join("")}${text}${c.reset}`;

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

function formatTimestamp(ts) {
  if (!ts) return style("unknown", c.dim);
  return new Date(ts).toLocaleString("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function printHeader(title, count) {
  console.log();
  console.log(style(`── ${title} `, c.bold, c.cyan) + style(`(${count})`, c.dim));
  console.log();
}

function truncate(text, maxLength) {
  if (!text) return text;
  return text.length > maxLength ? `${text.slice(0, maxLength - 1)}…` : text;
}

function attendingSummary(entry) {
  const parts = [];
  if (entry.attendingDayProgram) parts.push("day program");
  if (entry.attendingDinner) parts.push("dinner");
  if (entry.attendingSocial) parts.push("social");
  return parts.length > 0 ? parts.join(", ") : style("none", c.dim);
}

// Strips ANSI escape codes so column widths are measured on visible text only.
function visibleLength(text) {
  return text.replace(/\x1b\[[0-9;]*m/g, "").length;
}

function padVisible(text, width) {
  return text + " ".repeat(Math.max(0, width - visibleLength(text)));
}

function printTable(headers, rows) {
  const widths = headers.map((header, col) =>
    Math.max(
      visibleLength(header),
      ...rows.map((row) => visibleLength(row[col] ?? "")),
    ),
  );

  const renderRow = (cells) =>
    "  " + cells.map((cell, col) => padVisible(cell, widths[col])).join("  |  ");

  console.log(renderRow(headers.map((h) => style(h, c.bold))));
  console.log("  " + widths.map((w) => "-".repeat(w)).join("--+--"));
  for (const row of rows) console.log(renderRow(row));
}

function printRegistrations(entries) {
  printHeader("Registrations", entries.length);
  if (entries.length === 0) {
    console.log(style("  No registrations yet.", c.dim));
    return;
  }

  const rows = entries.map((entry) => [
    `${style(entry.name ?? "(no name)", c.bold)} ${style(`(${entry.email ?? "no email"})`, c.dim)}`,
    truncate(entry.dietary, 60) || style("-", c.dim),
    attendingSummary(entry),
  ]);

  printTable(["Name (email)", "Allergies / food preference", "Attending"], rows);
}

function printCallForPapers(entries) {
  printHeader("Call for Papers", entries.length);
  if (entries.length === 0) {
    console.log(style("  No talk submissions yet.", c.dim));
    return;
  }
  entries.forEach((entry, i) => {
    console.log(
      `${style(String(i + 1).padStart(2, " "), c.dim)}  ${style(entry.title ?? "(untitled)", c.bold, c.magenta)}`,
    );
    console.log(
      `      ${style("by", c.dim)} ${entry.presenter ?? "unknown"}   ${style(entry.duration ?? "", c.dim)}   ${style(formatTimestamp(entry.timestamp), c.dim)}`,
    );
    if (entry.description) {
      console.log(`      ${truncate(entry.description, 140)}`);
    }
    console.log();
  });
}

async function main() {
  console.log(style("\nRefill submissions", c.bold));
  console.log(style(`store: ${storeId}`, c.dim));

  const [registrations, callForPapers] = await Promise.all([
    fetchAll("registrations/"),
    fetchAll("call-for-papers/"),
  ]);

  printRegistrations(registrations);
  printCallForPapers(callForPapers);
}

main().catch((err) => {
  console.error(style("\nFailed to list submissions:", c.red), err.message ?? err);
  process.exit(1);
});
