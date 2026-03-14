import fs from "node:fs";
import path from "node:path";

const roots = ["src", "docs"];
const allowedExtensions = new Set([".ts", ".tsx", ".js", ".jsx", ".md", ".json"]);
const mojibakeNeedles = [
  "GÃ¼",
  "Ä°",
  "ÅŸ",
  "Ã§",
  "Ã¶",
  "Ã¼",
  "â€™",
  "â€œ",
  "â€",
  "Ã‡",
  "Ã–",
  "Ãœ",
  "Å",
];

const offenders = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === ".git" || entry.name === ".next" || entry.name === "node_modules") {
      continue;
    }

    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walk(fullPath);
      continue;
    }

    if (!allowedExtensions.has(path.extname(entry.name))) {
      continue;
    }

    const text = fs.readFileSync(fullPath, "utf8");
    const matchedNeedles = mojibakeNeedles.filter((needle) => text.includes(needle));

    if (matchedNeedles.length > 0) {
      offenders.push({
        path: fullPath,
        matchedNeedles,
      });
    }
  }
}

for (const root of roots) {
  if (fs.existsSync(root)) {
    walk(root);
  }
}

if (offenders.length > 0) {
  for (const offender of offenders) {
    console.error(`${offender.path}: ${offender.matchedNeedles.join(", ")}`);
  }

  process.exit(1);
}

console.log("No mojibake patterns found.");
