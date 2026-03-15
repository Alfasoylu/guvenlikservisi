# COPILOT INSTRUCTIONS
guvenlikservisi.com

## Project Purpose

This repository powers guvenlikservisi.com, a national security systems lead engine that will evolve into a Turkey-wide installer lead marketplace.

The product mission is:

1. capture organic and paid demand for security system services
2. convert that demand into qualified leads
3. scale city × service × district × problem route families safely
4. later allow installer firms to register and receive leads

This is not a brochure site.
This is not just an Istanbul installer site.
This is not a UI playground.

This is a lead-generation and future marketplace infrastructure project.

---

## Strategic Model

Architecture = national
Validation = Istanbul first

That means:
- build for Turkey scale
- test deepest in Istanbul
- keep route/data/content systems reusable nationally

---

## Current Business Goal

Short-term:
Generate qualified leads for:
- camera system installation
- alarm system installation
- fire alarm system installation
- access control / card access systems
- maintenance / technical service / remote monitoring

Mid-term:
Scale high-intent organic lead pages across major cities and districts.

Long-term:
Allow installer firms to register, define coverage areas, and receive leads.

---

## Route Systems

### 1. National service hubs
Examples:
- `/kamera-sistemi-kurulumu`
- `/alarm-sistemi-kurulumu`
- `/yangin-alarm-sistemi-kurulumu`
- `/kartli-gecis-sistemi-kurulumu`

Role:
National authority pages.

### 2. City pages
Pattern:
- `/{city}`

Role:
City hub pages.

### 3. City + service pages
Pattern:
- `/{city}/{service}`

Role:
Primary organic money pages.

### 4. District + service pages
Pattern:
- `/{city}/{district}/{service}`

Role:
Hyperlocal support pages.

### 5. Problem pages
Pattern:
- `/sorun/{problem}`

Role:
Problem-intent capture pages.

### 6. Blog
Pattern:
- `/blog/*`

Role:
Informational support.

### 7. Paid landing pages
Pattern:
- `/teklif/*`

Role:
Google Ads conversion pages only.

### 8. API
- `/api/lead`
- `/api/quote`

Role:
Lead intake.

---

## Critical Routing Rules

Copilot must:
- never break routing
- never rename route families casually
- never introduce duplicate route systems for the same intent
- never create one-off Istanbul-only architecture that cannot scale nationally
- never let `/teklif/*` compete with organic route families

---

## Organic vs Paid Separation

This rule is critical.

`/teklif/*` pages are:
- Google Ads landing pages
- not part of organic SEO growth
- not canonical winners
- not in sitemap
- `noindex,nofollow`

Copilot must:
- keep `/teklif/*` strategically separate from organic route architecture
- avoid pushing internal organic authority toward `/teklif/*`
- preserve attribution and conversion quality for these pages

Do not treat `/teklif/*` like SEO money pages.

---

## SEO Rules

Copilot must NEVER:
- remove metadata
- remove canonical URLs
- remove schema markup
- remove internal links
- leave duplicate query ownership unresolved
- create thin district pages from string swaps
- create random decorative UI-only sections that do not improve SEO or conversion

Copilot must ALWAYS:
- preserve SEO structure
- reinforce one-owner-per-query logic
- favor data-driven page generation
- align metadata, schema, sitemap, robots, redirects, and internal links
- protect Istanbul canonical winners while keeping the system national

---

## Query Ownership Logic

Use this mental model:

- national service intent -> national service hub
- city + service intent -> city/service page
- district + service intent -> district/service page
- problem intent -> problem page

Do not let multiple pages compete for the same search job.

---

## Lead System Rules

Lead submissions happen through:
- `/api/lead`
- `/api/quote`

Leads are sent to early-stage operational systems such as email and Google Sheets.

Important:
- never break lead API logic
- never remove attribution fields
- never remove validation / anti-spam / dedupe without a strong replacement
- preserve page source and routing context for future marketplace routing

---

## Metadata Requirements

All indexable route families must have:
- title
- description
- canonical
- robots
- Open Graph where appropriate

Metadata must be:
- route-aware
- intent-aware
- scalable
- consistent with ownership strategy

Do not let dynamic pages accidentally canonicalize to the wrong route family.

---

## Schema Requirements

Preferred schema types:
- LocalBusiness
- Service
- BreadcrumbList
- FAQPage
- BlogPosting / Article where relevant

Rules:
- no duplicate schema objects for the same visible content
- no fake review/rating claims
- keep URLs normalized and aligned with canonical

---

## Internal Link Requirements

Internal linking should reinforce:
- city hub -> city/service
- city/service -> district/service
- problem -> service
- blog -> money pages
- service hubs -> city/service pages

Do not create orphan pages.
Do not feed organic authority heavily into `/teklif/*`.

---

## Data Architecture Rules

Copilot should prefer structured data in:
- `src/data/*`
- `src/data/seo/*`

Important:
- do not hardcode business taxonomy in scattered JSX
- use reusable content/data models where possible
- write code that can support 81 cities, 970 districts, and 20 services

---

## Development Goal

All development work must improve one or more of the following:
- organic traffic quality
- lead conversion quality
- local-commercial ownership
- scalable national architecture
- future marketplace readiness

Never optimize for cosmetics first.
Optimize for growth infrastructure first.
