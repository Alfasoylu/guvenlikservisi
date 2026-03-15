# ROBOTS SITEMAP CANONICAL AUDIT
guvenlikservisi.com

Purpose:
Define the intended technical SEO governance for the 24-month growth plan.

This document is a target-state audit reference.
It should guide implementation and future audits.

---

## 1. GOVERNANCE PRINCIPLE

Robots, sitemap, canonical, redirects, metadata, and internal links must tell the same story.

If these layers disagree, Google gets mixed signals and growth slows.

Core policy:
- organic route families must be crawlable and strategically indexable
- paid landing pages under `/teklif/*` must stay outside organic SEO growth
- duplicate or legacy losers must not remain indexable competitors

---

## 2. ROBOTS POLICY

### Indexable organic route families
These should generally be allowed and indexable when quality thresholds are met:
- `/`
- national service hubs
- `/{city}`
- `/{city}/{service}`
- approved `/{city}/{district}/{service}`
- `/sorun/{problem}`
- `/blog`
- `/blog/{slug}`

### Non-indexable route families
These should not participate in organic indexing:
- `/teklif/*`
- API routes
- admin or internal utility areas if added later

### `/teklif/*` policy
Required:
- `noindex,nofollow`
- excluded from sitemap
- not treated as canonical owners
- not fed by organic internal-link authority beyond unavoidable shared UI

---

## 3. SITEMAP POLICY

Sitemap must include:
- homepage
- national service hubs
- city pages
- city/service pages
- approved district/service pages
- problem pages
- blog list and blog posts
- approved support pages that are organic assets

Sitemap must exclude:
- `/teklif/*`
- API routes
- redirect-only legacy URLs
- temporary or experimental pages
- low-quality route families not ready for indexing

Rules:
- no recursive sitemap references
- no stale checked-in sitemap artifacts
- no duplicate URL emissions
- canonical winner URLs only

---

## 4. CANONICAL POLICY

Every indexable page must have a deliberate canonical.

### Canonical owners by intent
- national service intent -> national service hub
- city + service intent -> `/{city}/{service}`
- district + service intent -> `/{city}/{district}/{service}`
- problem intent -> `/sorun/{problem}`
- article intent -> `/blog/{slug}`

### Canonical anti-patterns to avoid
- homepage canonical inherited by child pages
- self-canonicalized losing duplicate URLs
- redirected URLs treated as canonical winners
- district pages canonicalizing to city pages unless they should not be indexable
- `/teklif/*` behaving like organic canonical winners

---

## 5. REDIRECT POLICY

Redirects should be used to eliminate:
- legacy service slugs
- legacy city slugs
- duplicate Istanbul losers
- outdated one-off paths that overlap with canonical route families

Rules:
- if a loser has meaningful equity, 301 it to the winner
- do not keep redirecting loser URLs in sitemap
- do not keep internal links pointing at loser URLs
- metadata and schema must align with the destination ownership model

---

## 6. DOMAIN NORMALIZATION

The platform must use one normalized public domain strategy.

Rules:
- one canonical host only
- no mixed `www` and non-`www` canonical output
- OG URLs, schema URLs, sitemap URLs, and canonical URLs must match the same host strategy

---

## 7. TRAILING SLASH POLICY

Choose one URL normalization strategy and keep it consistent.

Rules:
- canonical URLs, sitemap URLs, redirects, internal links, and schema URLs must agree
- do not let the site produce mixed trailing-slash ownership signals

---

## 8. INTERNAL LINK GOVERNANCE

Internal links must support canonical winners.

Required:
- internal links should point directly to winner URLs
- do not keep legacy or loser routes in menus or internal-link blocks
- do not leak major organic authority into `/teklif/*`

---

## 9. ISTANBUL GOVERNANCE

Istanbul is the first major validation city and must have clean ownership.

Required:
- Istanbul exact-match city/service commercial queries must belong to `/{city}/{service}`
- district pages support parent Istanbul service pages
- duplicate static one-off Istanbul competitor URLs must not stay live as organic competitors

---

## 10. DISTRICT PAGE GOVERNANCE

District pages are not automatically entitled to indexation.

Before scaling district pages:
- district content depth must exist
- local differentiation must exist
- parent-child internal linking must exist
- canonical ownership logic must be clean

If not ready:
- delay expansion
- keep rollout controlled

---

## 11. PROBLEM PAGE GOVERNANCE

Problem pages should be indexable when they provide:
- unique problem definition
- cause breakdown
- solution path
- service routing value

They must not become low-value duplicates of blog posts or service pages.

---

## 12. REQUIRED AUDIT CHECKS GOING FORWARD

Regular audit should verify:
- no mojibake / encoding corruption in metadata
- no duplicate canonicals
- no `/teklif/*` in sitemap
- no `/teklif/*` organic indexing leakage
- no loser URLs in internal links
- no mixed domain outputs
- no stale sitemap outputs
- no district-page explosion without quality controls

---

## 13. 24-MONTH PLAN ALIGNMENT

### Months 1-3
Fix robots, sitemap, canonical, redirect, and encoding issues.

### Months 4-6
Protect Istanbul winners and roll out controlled district indexing.

### Months 7-12
Scale winner logic to the 18-city layer.

### Months 13-24
Keep governance tight while national city, district, problem, and marketplace-ready layers expand.

This audit standard exists to protect scale.
