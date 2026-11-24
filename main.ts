// One-Sentence Absurd Invention Pitch — make.fun entry
// Line (104 bytes): one sentence, ridiculous invention fixing a tiny
// annoyance — burnt toast arrives as a formal letter of regret.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "A toaster that apologises in advance, so burnt toast arrives as a formal letter of regret you can frame.";

// Gate: entry must be 1–220 characters, not only whitespace, one sentence.
if (LINE.length < 1 || LINE.length > 220 || !LINE.trim()) {
  throw new Error(`line length ${LINE.length} fails the 1–220 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
