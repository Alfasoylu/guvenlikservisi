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
const legacyLoserPaths = blockedSitemapFragments.filter((fragment) =>
  fragment.startsWith("/istanbul-"),
);
const problemPagesPath = path.join(workspaceRoot, "src", "data", "seo", "problem-pages.ts");
const sourceFilesToAudit = [
  problemPagesPath,
  path.join(workspaceRoot, "src", "data", "seo", "problem-routing.ts"),
  path.join(workspaceRoot, "src", "data", "seo", "istanbul-trust-layer.ts"),
  path.join(workspaceRoot, "src", "data", "seo", "istanbul-district-support.ts"),
  path.join(workspaceRoot, "src", "data", "seo", "istanbul-money-pages.ts"),
  path.join(workspaceRoot, "src", "lib", "routes.ts"),
  path.join(workspaceRoot, "src", "lib", "canonical.ts"),
];
const problemSlugRefFilesToAudit = [
  path.join(workspaceRoot, "src", "data", "internal-links.ts"),
  path.join(workspaceRoot, "src", "app", "blog", "[slug]", "page.tsx"),
];
const allowedLegacyLoserFiles = new Set([
  path.join(workspaceRoot, "src", "lib", "routes.ts"),
  path.join(workspaceRoot, "src", "lib", "canonical.ts"),
]);

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

function readTextFile(filePath) {
  if (!fs.existsSync(filePath)) {
    fail(`expected source file not found: ${filePath}`);
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

for (const filePath of sourceFilesToAudit) {
  const contents = readTextFile(filePath);

  for (const legacyLoserPath of legacyLoserPaths) {
    if (!contents.includes(legacyLoserPath)) {
      continue;
    }

    if (allowedLegacyLoserFiles.has(filePath)) {
      continue;
    }

    fail(`legacy Istanbul loser leaked into organic source layer: ${filePath}`);
  }
}

// Problem slug registry — extract active slugs from problem-pages.ts
const problemPagesContent = readTextFile(problemPagesPath);
const activeProblemSlugs = [...problemPagesContent.matchAll(/slug:\s*["']([^"']+)["']/g)]
  .map((m) => m[1])
  .filter((slug) => slug !== "string"); // exclude TypeScript type annotation

// Verify sitemap /sorun/* URLs use only active slugs
for (const url of sitemapUrls) {
  const match = url.match(/\/sorun\/([^/?#]+)/);
  if (match) {
    const slug = match[1];
    if (!activeProblemSlugs.includes(slug)) {
      fail(`/sorun/ URL in sitemap uses unknown or retired slug: ${url}`);
    }
  }
}

// Verify /sorun/ href references in source files use only active slugs
for (const filePath of problemSlugRefFilesToAudit) {
  if (!fs.existsSync(filePath)) continue;
  const contents = fs.readFileSync(filePath, "utf8");
  const refs = [...contents.matchAll(/\/sorun\/([a-z0-9-]+)/g)].map((m) => m[1]);
  for (const ref of refs) {
    if (!activeProblemSlugs.includes(ref)) {
      fail(
        `stale /sorun/ slug reference in ${path.basename(filePath)}: /sorun/${ref} — add a redirect or update the reference`,
      );
    }
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
  `SEO governance check passed: ${sitemapUrls.length} sitemap URLs verified, no /teklif/* or legacy loser leaks found, ${activeProblemSlugs.length} active problem slugs validated.`,
);
