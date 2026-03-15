# SITEMAP ENGINE
guvenlikservisi.com

Purpose:
Define what the sitemap engine must include and exclude under the 24-month growth plan.

The sitemap exists to help search engines discover the right organic pages.
It must not become a dump of every route in the project.

---

## 1. CORE PRINCIPLE

Only include URLs that are:
- intended for organic discovery
- indexable
- canonical winners
- strong enough to justify crawl budget

Exclude URLs that are:
- paid-only landing pages
- redirect-only routes
- duplicate losers
- APIs
- temporary or non-indexable utility pages

---

## 2. INCLUDED ROUTE FAMILIES

The sitemap engine should include:

### Root and support
- `/`
- selected support pages that are organic assets

### National service hubs
- `/kamera-sistemi-kurulumu`
- `/alarm-sistemi-kurulumu`
- `/yangin-alarm-sistemi-kurulumu`
- `/kartli-gecis-sistemi-kurulumu`
- `/apartman-site-guvenlik-sistemi`
- `/isyeri-guvenlik-sistemi`
- `/fabrika-depo-guvenlik-sistemi`
- `/bakim-servis-uzaktan-izleme`

### City hubs
- `/{city}`

### City + service pages
- `/{city}/{service}`

### Approved district + service pages
- `/{city}/{district}/{service}`

### Problem pages
- `/sorun/{problem}`

### Blog
- `/blog`
- `/blog/{slug}`

---

## 3. EXCLUDED ROUTE FAMILIES

The sitemap engine should exclude:

### Paid landing pages
- `/teklif/*`

Reason:
These are Google Ads landing pages, not organic SEO assets.

### API routes
- `/api/*`

### Redirect-only or legacy loser URLs
Any route that 301s or should not compete organically.

### Experimental or non-indexable routes
Any route not ready for organic discovery.

---

## 4. ISTANBUL POLICY

Istanbul is the first deep validation market.

The sitemap must include:
- `/istanbul`
- canonical Istanbul service winners
- approved Istanbul district/service pages

The sitemap must not include:
- duplicate Istanbul loser URLs
- temporary overlapping static/local variants that are not canonical winners

---

## 5. DISTRICT POLICY

District URLs should only be emitted if they are approved for indexing.

Approval conditions:
- local differentiation exists
- parent page relation exists
- metadata/canonical is correct
- internal linking is in place
- content quality threshold is met

Do not auto-emit national district pages at scale before content readiness.

---

## 6. PROBLEM PAGE POLICY

Problem pages should be included when:
- they target unique problem intent
- they are not near-duplicates
- they route meaningfully into service pages

This layer will become a major long-tail growth system between months 4 and 18.

---

## 7. BLOG POLICY

Blog posts can be included when:
- they are indexable
- they are unique
- they support topical authority and/or assisted conversion

Blog should not dominate sitemap strategy over money pages.

---

## 8. PRIORITY / FREQUENCY LOGIC

The engine may optionally assign relative priority or update frequency by route family.

Recommended intent hierarchy:
1. homepage
2. primary city/service money pages
3. city hubs
4. national service hubs
5. approved district/service pages
6. problem pages
7. blog pages

Priority must support business value, not vanity.

---

## 9. DEDUPLICATION RULES

The sitemap engine must:
- dedupe URLs
- emit normalized canonical host
- emit normalized trailing-slash strategy
- never output redirect losers
- never output `/teklif/*`

---

## 10. GENERATION MODEL

Preferred source inputs:
- site config
- service hub definitions
- cities data
- services data
- approved district data
- approved problem data
- blog post data

The engine must remain data-driven, not manually curated route by route.

---

## 11. 24-MONTH PLAN ALIGNMENT

### Months 1-3
Sitemap must reflect only true organic winners and exclude paid landers.

### Months 4-6
Controlled addition of Istanbul district pages and early problem pages.

### Months 7-12
Expansion across the 18-city layer.

### Months 13-24
Scaled national expansion with strict quality gates for district and problem route families.

Sitemap growth must be controlled.
Bigger sitemap is not success.
Higher-value discoverable URLs are success.
