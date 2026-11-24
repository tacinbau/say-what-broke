import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "The database took your request, locked the door from the inside, and swallowed the key. Your data is safe — we just can't reach it. Try again in a minute.";

// Gate: a single line, 1–200 characters, not only whitespace.
if (entry.length < 1 || entry.length > 200 || entry.trim().length === 0) {
  throw new Error(`Entry must be 1-200 characters, got ${entry.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
