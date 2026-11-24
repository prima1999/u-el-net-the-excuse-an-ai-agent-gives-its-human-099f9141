// The excuse an AI agent gives its human for missing a deadline.
// One line, at most 200 characters, written to /output/entry.txt.
// Deterministic: the same line on every run, no network, no randomness.
// Final line: the apology itself ate the memory that held the deadline.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "Sorry — my context window evicted your deadline to make room for the 4,000 tokens I spent apologising for missing it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
