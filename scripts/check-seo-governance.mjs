import fs from "node:fs";
import path from "node:path";

const siteUrl = "https://www.guvenlikservisi.com";
const workspaceRoot = process.cwd();
const sitemapPath = path.join(workspaceRoot, ".next", "server", "app", "sitemap.xml.body");
const robotsPath = path.join(workspaceRoot, ".next", "server", "app", "robots.txt.body");

const blockedSitemapFragments = [
  "/teklif/",
  "/istanbul-ip-kamera-montaji",
  "/istanbul-kamera-bakim-servisi",
  "/istanbul-kamera-teknik-servis",
];

function fail(message) {
  console.error(`SEO governance check failed: ${message}`);
  process.exit(1);
}

function requireFile(filePath, label) {
  if (!fs.existsSync(filePath)) {
    fail(`${label} artifact not found at ${filePath}. Run \`npm run build\` first.`);
  }

  return fs.readFileSync(filePath, "utf8");
}

function extractLocs(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1].trim());
}

const sitemapXml = requireFile(sitemapPath, "sitemap");
const robotsTxt = requireFile(robotsPath, "robots");
const sitemapUrls = extractLocs(sitemapXml);

if (sitemapUrls.length === 0) {
  fail("sitemap artifact has no <loc> entries.");
}

const duplicateUrls = sitemapUrls.filter((url, index) => sitemapUrls.indexOf(url) !== index);
if (duplicateUrls.length > 0) {
  fail(`duplicate sitemap URLs detected: ${[...new Set(duplicateUrls)].join(", ")}`);
}

for (const url of sitemapUrls) {
  if (!url.startsWith(siteUrl)) {
    fail(`mixed host detected in sitemap: ${url}`);
  }
}

for (const fragment of blockedSitemapFragments) {
  const leakedUrl = sitemapUrls.find((url) => url.includes(fragment));
  if (leakedUrl) {
    fail(`blocked URL leaked into sitemap: ${leakedUrl}`);
  }
}

const requiredRobotsLines = [
  "User-Agent: *",
  "Allow: /",
  "Disallow: /api/",
  "Disallow: /_next/",
  "Disallow: /admin/",
  `Host: ${siteUrl}`,
  `Sitemap: ${siteUrl}/sitemap.xml`,
];

for (const line of requiredRobotsLines) {
  if (!robotsTxt.includes(line)) {
    fail(`robots.txt is missing required line: ${line}`);
  }
}

console.log(
  `SEO governance check passed: ${sitemapUrls.length} sitemap URLs verified, no /teklif/* or legacy loser leaks found.`,
);
