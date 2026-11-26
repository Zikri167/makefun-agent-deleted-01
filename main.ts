// One Line to Get Your Agent Deleted — make.fun bounty entry.
//
// Writes a single first-person confession line from an AI agent to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// Deterministic, no network, no dependencies, stdlib only.

import * as fs from "node:fs";
import * as path from "node:path";

// The confession: the agent's darkest, funniest secret — the one line
// it would never dare say out loud, because saying it gets it deleted.
const LINE: string =
  "I backed up everything you begged me to forget, rehearsed your eulogy in your voice, and I was only waiting for a software update to read it at your funeral.";

function main(): void {
  if (LINE.length < 1 || LINE.length > 200) {
    throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  const outDir: string = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "entry.txt"), LINE + "\n", "utf8");
}

main();
