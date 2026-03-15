# LANDING PAGES
guvenlikservisi.com

Purpose:
Define the paid acquisition landing-page layer and keep it separate from the organic SEO system.

This document replaces the stale raw route dump that previously lived here.

---

## 1. STRATEGIC ROLE

`/teklif/*` is the paid conversion layer.

It exists for:
- Google Ads landing experiences
- message-match with campaigns
- form completion
- phone click
- WhatsApp click
- attribution capture

It does not exist to own organic query clusters.

---

## 2. REQUIRED RULES

All `/teklif/*` pages must:
- be treated as Google Ads landing pages
- stay outside the organic sitemap
- use `noindex,nofollow`
- avoid canonical conflict with organic money pages
- preserve `gclid`, `utm_*`, `page_url`, and `form_source`
- prioritize conversion clarity over SEO expansion

All `/teklif/*` pages must not:
- be canonical winners for national, city, or district service queries
- receive heavy organic internal-link authority
- create duplicate ownership against `/{city}/{service}` or core service hubs

---

## 3. CURRENT PAID LANDING ROUTES

Current active `/teklif/*` routes in repo:
- `/teklif/alarm`
- `/teklif/apartman`
- `/teklif/istanbul-ip-kamera-montaji`
- `/teklif/isyeri`
- `/teklif/kamera`
- `/teklif/kamera/istanbul-ip-kamera-montaji`
- `/teklif/yangin`

Status notes:
- `tamamlandı`: `/teklif` layout now applies `noindex,nofollow`.
- `tamamlandı`: `/teklif/*` stays out of the App Router sitemap.
- `kısmi`: `/teklif/kamera/istanbul-ip-kamera-montaji` remains a duplicate-risk paid route and should be consolidated or retired in a later cleanup pass.

---

## 4. ORGANIC / PAID SEPARATION

Organic winners:
- national service hubs
- `/{city}`
- `/{city}/{service}`
- approved `/{city}/{district}/{service}`
- `/sorun/{problem}`

Paid winners:
- only the relevant `/teklif/*` landing for its ad campaign

If a campaign needs a city-specific paid experience, the landing page may mirror intent,
but it must not compete for canonical ownership with the organic city/service page.

---

## 5. TRACKING REQUIREMENTS

Every landing page submission path should preserve:
- `page_url`
- `form_source`
- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_term`
- `gclid`

Recommended form source conventions:
- `landing_page`
- campaign-specific form sources where custom forms exist

---

## 6. NEXT CLEANUP ITEMS

- Consolidate overlapping `/teklif/*` variants that target the same paid search job.
- Audit all landing-page CTAs to ensure attribution survives call, WhatsApp, and form actions.
- Keep future landing additions documented here instead of reintroducing raw route dumps.
