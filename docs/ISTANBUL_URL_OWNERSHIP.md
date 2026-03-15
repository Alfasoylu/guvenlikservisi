# ISTANBUL URL OWNERSHIP
guvenlikservisi.com

Purpose:
Define how Istanbul commercial-intent URLs are owned inside the 24-month national growth plan.

Strategic principle:
Istanbul is the first validation market, not the whole product.
The system must be built for Turkey scale, but Istanbul must own the first-wave highest-value commercial queries.

This document exists to prevent:
- query cannibalization
- duplicate Istanbul route families
- weak canonical signals
- static vs dynamic ownership confusion
- district pages outranking city-service money pages by accident

---

## 1. OWNERSHIP MODEL

There are 4 route layers relevant to Istanbul:

1. national service hubs
2. Istanbul city hub
3. Istanbul city + service money pages
4. Istanbul district + service support pages

Ownership hierarchy:

1. National service intent -> national service hub
2. Istanbul city-service commercial intent -> Istanbul city/service page
3. Istanbul district-service hyperlocal intent -> Istanbul district/service page
4. Problem intent -> problem page, then routed into Istanbul service pages when relevant

District pages support Istanbul service pages.
They do not replace them.

---

## 2. CANONICAL WINNERS FOR CORE ISTANBUL COMMERCIAL QUERIES

The following query clusters must be owned by the dynamic Istanbul city/service layer:

| Query cluster | Canonical winner URL | Notes |
|---|---|---|
| istanbul kamera sistemi kurulumu | `/istanbul/kamera-sistemi-kurulumu` | Primary Istanbul money page |
| istanbul alarm sistemi kurulumu | `/istanbul/alarm-sistemi-kurulumu` | Primary Istanbul money page |
| istanbul yangin alarm sistemi kurulumu | `/istanbul/yangin-alarm-sistemi-kurulumu` | Primary Istanbul money page |
| istanbul kartli gecis sistemi kurulumu | `/istanbul/kartli-gecis-sistemi-kurulumu` | Primary Istanbul money page |
| istanbul apartman site guvenlik sistemi | `/istanbul/apartman-site-guvenlik-sistemi` | Segment + city commercial page |
| istanbul isyeri guvenlik sistemi | `/istanbul/isyeri-guvenlik-sistemi` | Segment + city commercial page |
| istanbul fabrika depo guvenlik sistemi | `/istanbul/fabrika-depo-guvenlik-sistemi` | Segment + city commercial page |
| istanbul bakim servis uzaktan izleme | `/istanbul/bakim-servis-uzaktan-izleme` | Recurring-revenue oriented page |

These URLs are part of the national programmatic system and must remain the Istanbul organic winners.

---

## 3. STATIC NATIONAL SERVICE HUBS VS ISTANBUL MONEY PAGES

Static national service hubs are authority pages, not Istanbul local winners.

Examples:

| National authority page | Role |
|---|---|
| `/kamera-sistemi-kurulumu` | national service authority |
| `/alarm-sistemi-kurulumu` | national service authority |
| `/yangin-alarm-sistemi-kurulumu` | national service authority |
| `/kartli-gecis-sistemi-kurulumu` | national service authority |

Rules:

- National service hubs must not try to own Istanbul local-commercial exact match queries.
- Istanbul local-commercial exact match queries must belong to `/istanbul/[service]`.
- National hubs must internally link to Istanbul pages, not compete with them.

---

## 4. LEGACY OR LOSING ISTANBUL URLS

Legacy or losing Istanbul URLs must not remain live indexable competitors.

Examples of losing patterns:
- static one-off Istanbul service URLs that duplicate the dynamic city/service system
- outdated slug variants
- temporary landing-page-style Istanbul SEO URLs outside the main route family

Rule set:
- if a legacy URL has valuable link equity, 301 redirect it to the canonical Istanbul winner
- if it should never rank, do not keep it indexable
- remove it from sitemap
- remove it from internal links
- do not let metadata declare it as a competing canonical owner

---

## 5. ISTANBUL DISTRICT PAGES

District pages exist to capture hyperlocal intent and support the Istanbul service layer.

Examples:
- `/istanbul/besiktas/kamera-sistemi-kurulumu`
- `/istanbul/kadikoy/alarm-sistemi-kurulumu`

Ownership rule:
- district-service queries belong to district pages
- city-service queries belong to city-service pages

District pages must link upward to:
- parent Istanbul city/service page
- relevant city hub where useful

District pages must not be allowed to cannibalize:
- `/istanbul/kamera-sistemi-kurulumu`
- `/istanbul/alarm-sistemi-kurulumu`
- `/istanbul/yangin-alarm-sistemi-kurulumu`
- `/istanbul/kartli-gecis-sistemi-kurulumu`

---

## 6. PROBLEM PAGES AND ISTANBUL OWNERSHIP

Problem pages own problem intent, not city-service commercial intent.

Examples:
- `/sorun/kamera-kayit-yapmiyor`
- `/sorun/kartli-gecis-calismiyor`

Rules:
- problem page ranks for the problem query
- CTA and routing should push Istanbul users into the relevant Istanbul service page
- problem pages should not attempt to own Istanbul installation query clusters

---

## 7. INTERNAL LINKING RULES FOR ISTANBUL OWNERSHIP

Internal links must reinforce the ownership model.

Required patterns:
- `/istanbul` -> links to all major Istanbul service pages
- `/istanbul/[service]` -> links back to `/istanbul`
- `/istanbul/[service]` -> links to relevant Istanbul district pages
- Istanbul district pages -> link back to parent Istanbul service page
- national service hub pages -> link to Istanbul service winners
- problem pages -> link to relevant Istanbul service winners when local routing is appropriate

Do not:
- link organic authority heavily into `/teklif/*`
- link legacy loser URLs
- keep inconsistent anchor text that suggests a loser URL is the primary owner

---

## 8. SITEMAP RULES

The following should be in sitemap:
- `/istanbul`
- `/istanbul/kamera-sistemi-kurulumu`
- `/istanbul/alarm-sistemi-kurulumu`
- `/istanbul/yangin-alarm-sistemi-kurulumu`
- `/istanbul/kartli-gecis-sistemi-kurulumu`
- approved Istanbul district/service pages

The following should not be sitemap winners:
- legacy duplicate Istanbul URLs
- redirected Istanbul loser URLs
- paid landing pages under `/teklif/*`

---

## 9. METADATA RULES

For canonical Istanbul winners:
- canonical must point to the winner URL itself
- title and description must match Istanbul local-commercial intent
- metadata must not accidentally point to a competing static page

For legacy losers:
- do not self-canonicalize if they should redirect
- do not let them stay as silent duplicates

---

## 10. 24-MONTH PLAN ALIGNMENT

Phase alignment:

### Months 1-3
Protect Istanbul money-page ownership and eliminate duplicate signals.

### Months 4-6
Expand controlled Istanbul district support pages.

### Months 7-12
Use Istanbul as the reference model for the other major cities.

### Months 13-24
Keep Istanbul as the strongest city benchmark while the national city and district system expands.

Istanbul remains the first and strongest validation market.
But it must be implemented in a way that becomes the template for Turkey-wide scale, not an exception that breaks future architecture.
