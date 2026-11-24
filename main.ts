// Writes the entry line to /output/entry.txt (Node 22, stdlib only, no network).
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My neighbour's parrot learned my alarm sound and has been screaming it since 4am \u2014 I've already answered a bird six times today, I need the day to sleep.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
