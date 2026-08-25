#!/usr/bin/env node
// Lists registered participants grouped by office name.
// Matches registrations against the Chewie employee directory by email,
// falling back to name for registrations without a matching email.
// Auth mirrors src/actions/registration.ts and scripts/list-submissions.mjs:
// a Vercel OIDC token + BLOB_STORE_ID rather than a static read-write token.

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { list, get } from "@vercel/blob";

const EMPLOYEES_URL =
  "https://chewie-webapp-ld2ijhpvmb34c.azurewebsites.net/Employees?country=no";

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

async function fetchAllRegistrations() {
  const registrations = [];
  let cursor;
  do {
    const page = await list({ prefix: "registrations/", cursor, oidcToken, storeId });
    for (const blob of page.blobs) {
      const data = await fetchJson(blob);
      if (data) registrations.push(data);
    }
    cursor = page.hasMore ? page.cursor : undefined;
  } while (cursor);
  registrations.sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1));
  return registrations;
}

async function fetchEmployees() {
  const response = await fetch(EMPLOYEES_URL);
  if (!response.ok) {
    throw new Error(`Employees request failed: ${response.status} ${response.statusText}`);
  }
  const data = await response.json();
  return data.employees ?? [];
}

function normalizeEmail(email) {
  return email?.trim().toLowerCase() || undefined;
}

function normalizeName(name) {
  return name?.trim().toLowerCase().replace(/\s+/g, " ") || undefined;
}

// Registrations are sorted newest-first, so keeping the first occurrence per
// email keeps the latest submission and drops older duplicates.
function dedupeByEmail(registrations) {
  const seen = new Set();
  const unique = [];
  for (const entry of registrations) {
    const key = normalizeEmail(entry.email);
    if (key && seen.has(key)) continue;
    if (key) seen.add(key);
    unique.push(entry);
  }
  return unique;
}

async function main() {
  const [registrations, employees] = await Promise.all([
    fetchAllRegistrations(),
    fetchEmployees(),
  ]);

  const byEmail = new Map();
  const byName = new Map();
  for (const employee of employees) {
    const email = normalizeEmail(employee.email);
    if (email) byEmail.set(email, employee);
    const name = normalizeName(employee.name);
    if (name && !byName.has(name)) byName.set(name, employee);
  }

  const officeGroups = new Map();
  const unmatched = [];

  for (const registration of dedupeByEmail(registrations)) {
    const employee =
      byEmail.get(normalizeEmail(registration.email)) ??
      byName.get(normalizeName(registration.name));

    if (!employee) {
      unmatched.push(registration.name ?? registration.email ?? "(unknown)");
      continue;
    }

    const office = employee.officeName ?? "(unknown office)";
    if (!officeGroups.has(office)) officeGroups.set(office, []);
    officeGroups.get(office).push(registration.name ?? employee.name);
  }

  const offices = [...officeGroups.keys()].sort((a, b) => a.localeCompare(b));

  for (const office of offices) {
    const names = officeGroups.get(office).sort((a, b) => a.localeCompare(b));
    console.log(`${office} (${names.length})`);
    for (const name of names) console.log(`  - ${name}`);
    console.log();
  }

  unmatched.sort((a, b) => a.localeCompare(b));
  console.log(`Unmatched (${unmatched.length})`);
  for (const name of unmatched) console.log(`  - ${name}`);
}

main().catch((err) => {
  console.error("Failed to list participants:", err.message ?? err);
  process.exit(1);
});
