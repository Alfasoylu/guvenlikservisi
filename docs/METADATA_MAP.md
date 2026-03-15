# METADATA MAP
guvenlikservisi.com

Purpose:
Document the current metadata governance and keep it aligned with the national lead-engine strategy.

This file is a living source of truth, not a stale one-time audit snapshot.

---

## 1. CURRENT STATUS

### `tamamlandı`
- App Router metadata is active at layout and page level.
- `/{city}` and `/{city}/{service}` route families generate route-aware metadata.
- `/teklif/*` layout applies `noindex,nofollow`.
- `/teklif/*` pages are outside sitemap strategy.
- Istanbul city/service organic winners now belong to `/{city}/{service}`, not legacy one-off Istanbul URLs.
- Legacy `/istanbul-ip-kamera-montaji`, `/istanbul-kamera-bakim-servisi`, and `/istanbul-kamera-teknik-servis` URLs now redirect and canonicalize to the `/{city}/{service}` winner model.

### `kısmi`
- Root layout still defines a global homepage canonical; this is safe for pages with explicit canonical but remains risky if a new page ships without route-level metadata.
- Some static service/support pages still use page-local metadata instead of a fully centralized metadata factory.
- Legacy static Istanbul pages still exist in repo as redirect losers and should eventually be retired or reduced.
- The remaining legacy Istanbul loser pages now use redirect-only implementations instead of serving duplicate content.

### open issues
- legacy redirect families still exist in repo and should continue shrinking as one-off exceptions are retired.
- Metadata documentation for every single page instance is intentionally not repeated here; route-family governance is the source of truth.

---

## 2. LAYOUT-LEVEL METADATA

### Root layout
File:
- `src/app/layout.tsx`

Current role:
- defines `metadataBase`
- defines global default title/description
- defines default robots for indexable organic pages
- defines default Open Graph/Twitter values

Governance note:
- This layout should be treated as fallback metadata only.
- Indexable pages should continue to provide route-specific canonical/title/description.

### `/teklif/*` layout
File:
- `src/app/teklif/layout.tsx`

Current role:
- applies `noindex,nofollow`
- keeps paid landing pages outside the organic indexing layer

Governance note:
- `/teklif/*` may still use self-canonical or route-specific canonical values for consistency,
  but these routes are not organic winners.

---

## 3. ROUTE FAMILY GOVERNANCE

### Homepage `/`
- self-canonical homepage winner
- indexable
- organic root authority page

### National service hubs
Examples:
- `/kamera-sistemi-kurulumu`
- `/alarm-sistemi-kurulumu`
- `/yangin-alarm-sistemi-kurulumu`
- `/kartli-gecis-sistemi-kurulumu`

Rules:
- self-canonical
- indexable
- own national service intent

### City hub pages `/{city}`
Rules:
- self-canonical
- indexable
- own city-level discovery / hub intent

### City + service pages `/{city}/{service}`
Rules:
- self-canonical
- indexable
- own local commercial service intent
- Istanbul city/service pages are canonical winners for Istanbul local commercial queries

### District + service pages `/{city}/{district}/{service}`
Rules:
- self-canonical only if approved/indexable
- must not inherit city-page canonical
- must stay aligned with district readiness gates

### Problem pages `/sorun/{problem}`
Rules:
- self-canonical
- indexable when unique and commercially bridgeable

### Blog `/blog/*`
Rules:
- `/blog` self-canonical hub
- `/blog/{slug}` self-canonical article

### Paid landings `/teklif/*`
Rules:
- `noindex,nofollow`
- excluded from sitemap
- not canonical winners for SEO query ownership
- may self-canonicalize for clean page identity, but remain outside organic winner logic

---

## 4. REDIRECT / LOSER GOVERNANCE

Current loser families:
- legacy `/{city}-guvenlik-sistemi-kurulumu`
- legacy one-off Istanbul money-page routes such as `/istanbul-kamera-sistemi-kurulumu`
- legacy one-off Istanbul camera routes such as `/istanbul-ip-kamera-montaji`, `/istanbul-kamera-bakim-servisi`, and `/istanbul-kamera-teknik-servis`
- overlapping paid route `/teklif/kamera/istanbul-ip-kamera-montaji`

Rules:
- redirect losers must not appear in sitemap
- redirect losers must not be treated as primary metadata owners
- docs and code must both recognize `/{city}/{service}` as the Istanbul winner model

---

## 5. HOST / DOMAIN GOVERNANCE

Canonical host strategy in code:
- `https://www.guvenlikservisi.com`

Rules:
- metadata URLs
- sitemap URLs
- robots sitemap reference
- Open Graph URLs
- schema URLs

must all align with this same host strategy.

---

## 6. NEXT PRIORITY

The next metadata-governance cleanup should focus on:
- removing remaining slug ownership splits
- reducing reliance on root fallback canonical behavior
- continuing to move static/legacy exceptions toward centralized route-family rules
