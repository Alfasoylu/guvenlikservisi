# ARCHITECTURE
guvenlikservisi.com

Goal:
Build Turkey’s leading security systems lead engine, then evolve it into a national security systems lead marketplace over 24 months.

This document defines the architecture required to support:

- organic lead generation
- paid acquisition landing pages
- national city/service expansion
- district-level scale
- problem-intent SEO capture
- future installer onboarding
- future lead routing and marketplace operations

---

## 1. STRATEGIC PRODUCT MODEL

The platform evolves in 3 layers:

### Layer 1 — Lead Engine
Collect and convert inbound demand from SEO and Ads.

### Layer 2 — National Programmatic SEO Platform
Scale city × service × district × problem pages without thin-content collapse.

### Layer 3 — Lead Marketplace
Allow installer firms to register, define coverage areas, and receive leads.

The architecture must support all 3 layers.
It is acceptable to implement them in stages.
It is not acceptable to block future marketplace evolution with short-term code decisions.

---

## 2. CORE PRODUCT PRINCIPLE

Architecture = national  
Validation = Istanbul first

This means:
- data models must be designed for Turkey scale
- route families must be designed for Turkey scale
- content systems must be reusable nationally
- Istanbul is the first deep market, not a one-off exception

---

## 2.5 TECHNICAL STACK ARCHITECTURE

The platform is implemented using a modern React-based server-rendered architecture.

Core stack:

- Next.js (App Router)
- React
- TypeScript
- TailwindCSS
- Vercel deployment

Supporting tooling:

- Node runtime APIs
- API routes
- Google Sheets webhook storage (early stage lead storage)
- email notifications for lead alerts

The stack is intentionally simple in early phases to optimize for:

- fast iteration
- SEO stability
- operational simplicity

Future phases may introduce:

- database-backed lead storage
- background jobs for lead routing
- partner dashboards
- internal admin tools

---

## 2.6 PROJECT FOLDER ARCHITECTURE

The repository follows a layered architecture separating routing, UI, data, and infrastructure logic.

Core structure:

- `src/app/` → Next.js route layer
- `src/components/` → reusable UI components and sections
- `src/components/templates/` → reusable page templates
- `src/data/` → business taxonomy and structured SEO data
- `src/data/seo/` → SEO dictionaries and structured content models
- `src/lib/` → reusable helpers (SEO, canonical, routing, lead handling)
- `public/images/` → service and marketing images
- `docs/` → architecture, governance, and strategy documentation

Key rules:

- Route logic belongs in `src/app`
- Reusable UI belongs in `src/components`
- Business taxonomy belongs in `src/data`
- SEO helpers belong in `src/lib`
- Page files should not contain business taxonomy directly

---

## 2.7 RUNTIME INFRASTRUCTURE

Current runtime infrastructure:

Deployment:
- Vercel

Runtime services:

- `/api/lead`
- `/api/quote`
- lead validation
- spam protection
- attribution capture

Lead storage (early stage):

- Google Sheets webhook
- email notifications
- manual sales workflow

Future runtime evolution:

- database-backed lead storage
- lead assignment system
- installer routing logic
- partner dashboards
- billing and monetization modules

---

## 3. ROUTE LAYERS

### A. Root and support
- `/`
- `/hakkimizda`
- `/iletisim`
- `/paketler-ve-fiyatlandirma`

### B. National service hubs
- `/kamera-sistemi-kurulumu`
- `/alarm-sistemi-kurulumu`
- `/yangin-alarm-sistemi-kurulumu`
- `/kartli-gecis-sistemi-kurulumu`
- `/apartman-site-guvenlik-sistemi`
- `/isyeri-guvenlik-sistemi`
- `/fabrika-depo-guvenlik-sistemi`
- `/bakim-servis-uzaktan-izleme`

Role:
National authority + support + internal linking.

### C. City hub pages
- `/{city}`

Role:
Local authority hub + internal discovery node.

### D. City + service pages
- `/{city}/{service}`

Role:
Primary organic money pages.

### E. District + service pages
- `/{city}/{district}/{service}`

Role:
Hyperlocal support pages.

### F. Problem pages
- `/sorun/{problem}`

Role:
Problem-intent traffic capture and routing into money pages.

### G. Blog
- `/blog`
- `/blog/{slug}`

Role:
Informational support and topical authority.

### H. Paid landing pages
- `/teklif/*`

Role:
Google Ads conversion pages only.
Not part of the organic SEO architecture.

### I. API routes
- `/api/lead`
- `/api/quote`

Role:
Lead intake and validation.

### J. Future marketplace routes
Examples:
- `/firmalar`
- `/firma-kayit`
- `/firma/{slug}`
- `/firma-paneli`
- `/firma-paneli/leadler`
- `/firma-paneli/bolgeler`
- `/firma-paneli/hizmetler`

Role:
Installer onboarding, profile, routing, and monetization layer.

---

## 4. DATA ARCHITECTURE

The platform must be data-driven.

Source-of-truth domains include:
- cities
- districts
- services
- segments
- keywords
- pain points
- FAQ banks
- trust elements
- schema mappings
- service hub definitions
- problem library
- future installer coverage data

Preferred organization:
- `src/data/*`
- `src/data/seo/*`
- related reusable helpers in `src/lib/*`

Do not bury business taxonomy inside scattered page files.

---

## 5. PAGE GENERATION PRINCIPLE

Programmatic pages must render from structured data.

Every scalable route family should be driven by:
- route params
- structured content data
- metadata builder
- schema builder
- internal-link rules
- CTA rules

This is required for scaling to:
- 81 cities
- 970 districts
- 20 services
- 200+ problem pages

---

## 6. OWNERSHIP ARCHITECTURE

One search job must have one primary owner URL.

Examples:
- national service intent -> national service hub
- city + service commercial intent -> city/service page
- district + service hyperlocal intent -> district/service page
- problem intent -> problem page

Canonical tags support ownership.
They do not replace strategy.

---

## 7. LEAD CAPTURE ARCHITECTURE

Lead intake must preserve:
- form data
- phone normalization
- spam control
- dedupe checks
- route source
- page source
- UTM
- gclid and click identifiers
- future routing context

Current preferred early-stage operating stack:
- web form / call / WhatsApp
- lead API
- email notification
- Google Sheets webhook / storage
- manual sales follow-up

Future evolution:
- database-backed lead store
- assignment logic
- installer routing
- admin workflow
- billing / monetization signals

---

## 8. INTERNAL LINK ARCHITECTURE

The site must operate as a graph, not isolated pages.

Key link directions:
- city hub -> city/service pages
- city/service -> city hub
- city/service -> relevant district/service pages
- district/service -> parent city/service
- national service hub -> important city/service pages
- problem page -> relevant service pages
- blog -> relevant money pages and problem pages

Do not leak organic authority heavily into `/teklif/*`.

---

## 9. SEO GOVERNANCE ARCHITECTURE

The technical SEO layer must stay aligned across:
- metadata
- canonical
- sitemap
- robots
- redirect rules
- internal links

Required governance:
- no duplicate organic winners
- no paid landing pages in sitemap
- no indexable legacy redirect targets
- no stale checked-in sitemap artifacts
- no domain inconsistency
- no metadata inheritance accidents

---

## 10. SCHEMA ARCHITECTURE

Schema must be centralized and intentional.

Core schema use cases:
- LocalBusiness
- Service
- BreadcrumbList
- FAQPage
- BlogPosting / Article for blog/problem content when relevant

Rules:
- avoid schema duplication
- avoid conflicting helpers
- match visible content
- align schema URLs with canonical URLs

---

## 11. METADATA ARCHITECTURE

Every indexable route family must have its own metadata strategy.

Required:
- title
- description
- canonical
- robots
- OG where appropriate

Route families must not accidentally inherit:
- homepage canonical
- irrelevant default metadata
- wrong query intent

Paid landing pages:
- must be `noindex,nofollow`
- must be excluded from sitemap
- must not be organic canonical owners

---

## 12. DISTRICT SCALE ARCHITECTURE

District pages are a controlled growth layer.

They must not be mass-published without:
- district data depth
- local differentiation
- parent page relation
- CTA logic
- internal linking
- quality threshold

Istanbul can be the first deep district implementation.
But the architecture must be reusable for national district rollout later.

---

## 13. PROBLEM SEO ARCHITECTURE

Problem pages form the issue-intent layer.

A problem page should include:
- symptom definition
- likely causes
- safe checks
- escalation point
- CTA to relevant service
- internal links to relevant city/service pages

This layer will be critical in months 4-18 for scaling long-tail intent.

---

## 14. MARKETPLACE-READINESS ARCHITECTURE

Future marketplace modules should plug into the existing taxonomy.

The architecture must be compatible with:
- installer service types
- installer city coverage
- installer district coverage
- lead matching by service + location
- partner quality scores
- lead status tracking
- billing models

This requires clean:
- city taxonomy
- district taxonomy
- service taxonomy
- source attribution
- lead context

---

## 15. 24-MONTH PHASE ALIGNMENT

### Months 1-3
Technical SEO cleanup, ownership protection, lead integrity.

### Months 4-6
Istanbul district depth, problem pages, initial economics.

### Months 7-12
18-city growth, service-cluster expansion, routing discipline.

### Months 13-18
National district data model, problem SEO expansion, early installer operations.

### Months 19-24
Marketplace-ready routing, installer layer, national city backbone.

---

## 16. WHAT THE ARCHITECTURE MUST AVOID

- UI-first development without business value
- hardcoded one-off city implementations
- duplicate route families for the same intent
- paid landing pages competing with organic pages
- thin district page explosions
- scattered SEO logic
- marketplace dreams without lead-routing foundations

---

## 17. SUCCESS DEFINITION

A healthy architecture is one where:
- Istanbul wins early
- the national system scales cleanly
- organic and paid systems stay strategically separate
- leads are attributed cleanly
- future installer routing can be added without rewriting the whole product

That is the architecture target for guvenlikservisi.com.
