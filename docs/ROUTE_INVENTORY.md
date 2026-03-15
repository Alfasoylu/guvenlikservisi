# ROUTE INVENTORY
guvenlikservisi.com

Purpose:
Define the intended route inventory for the 24-month growth plan.

This document is a strategic route map, not just a snapshot.
It shows which route families exist or are planned and what role each family plays.

---

## 1. ROOT / SUPPORT PAGES

- `/`
- `/hakkimizda`
- `/iletisim`
- `/paketler-ve-fiyatlandirma`

Role:
Brand, support, trust, and direct contact.

---

## 2. NATIONAL SERVICE HUBS

Current / planned authority routes:

- `/kamera-sistemi-kurulumu`
- `/alarm-sistemi-kurulumu`
- `/yangin-alarm-sistemi-kurulumu`
- `/kartli-gecis-sistemi-kurulumu`
- `/apartman-site-guvenlik-sistemi`
- `/isyeri-guvenlik-sistemi`
- `/fabrika-depo-guvenlik-sistemi`
- `/bakim-servis-uzaktan-izleme`

Role:
National service authority + internal linking hub.

---

## 3. CITY HUB PAGES

Pattern:
- `/{city}`

Examples:
- `/istanbul`
- `/ankara`
- `/izmir`
- `/bursa`
- `/kocaeli`

Role:
City authority hub and discovery layer.

24-month plan role:
- first wave: 18 cities
- later: all 81 cities

---

## 4. CITY + SERVICE MONEY PAGES

Pattern:
- `/{city}/{service}`

Examples:
- `/istanbul/kamera-sistemi-kurulumu`
- `/istanbul/alarm-sistemi-kurulumu`
- `/ankara/kamera-sistemi-kurulumu`
- `/izmir/yangin-alarm-sistemi-kurulumu`

Role:
Primary organic money pages.

These are the highest-value SEO routes in the system.

---

## 5. DISTRICT + SERVICE PAGES

Pattern:
- `/{city}/{district}/{service}`

Examples:
- `/istanbul/besiktas/kamera-sistemi-kurulumu`
- `/istanbul/kadikoy/alarm-sistemi-kurulumu`

Role:
Hyperlocal support pages.

Growth plan:
- months 1-6: controlled Istanbul rollout
- months 7-18: selected winning-city rollout
- months 19-24: larger national district backbone, still quality-controlled

---

## 6. PROBLEM PAGES

Pattern:
- `/sorun/{problem}`

Examples:
- `/sorun/kamera-kayit-yapmiyor`
- `/sorun/kartli-gecis-calismiyor`
- `/sorun/nvr-goruntu-gelmiyor`

Role:
Problem-intent capture layer.

These pages route users into service money pages.

---

## 7. BLOG

Routes:
- `/blog`
- `/blog/{slug}`

Role:
Topical authority, educational support, assisted conversion.

---

## 8. PAID LANDING PAGES

Pattern:
- `/teklif/*`

Examples:
- `/teklif/kamera`
- `/teklif/alarm`
- `/teklif/istanbul-ip-kamera-montaji`

Role:
Paid acquisition conversion pages.

Important:
- not part of organic SEO route inventory
- noindex,nofollow
- excluded from sitemap
- not canonical owners

---

## 9. API ROUTES

- `/api/lead`
- `/api/quote`

Role:
Lead ingestion and validation.

---

## 10. UTILITY ROUTES

- `/robots.txt` via App Router metadata route
- `/sitemap.xml` via App Router metadata route
- redirect logic in config layer

Role:
Technical SEO governance.

---

## 11. FUTURE MARKETPLACE ROUTES

Planned family examples:

### Installer directory / discovery
- `/firmalar`
- `/firma/{slug}`

### Installer onboarding
- `/firma-kayit`

### Installer panel
- `/firma-paneli`
- `/firma-paneli/leadler`
- `/firma-paneli/bolgeler`
- `/firma-paneli/hizmetler`
- `/firma-paneli/profil`

Role:
Marketplace operations and monetization layer.

These should only be built when lead volume and routing logic justify them.

---

## 12. ROUTE HIERARCHY

Strategic hierarchy:

1. national service hubs
2. city hubs
3. city/service money pages
4. district/service support pages
5. problem pages
6. blog support
7. paid landing pages (separate paid layer)

---

## 13. ROUTE FAMILY PRIORITY

Development priority order:

1. city/service
2. problem pages
3. district/service
4. city hubs
5. national service hubs
6. blog
7. paid landing pages
8. future marketplace routes

---

## 14. SCALE TARGET

The architecture must support:

- 81 city hub pages
- 81 × priority services city/service pages
- 970 district relations over time
- 200+ problem pages
- future installer route families

Not all routes should be launched at once.
Scale must follow demand, quality, and ownership discipline.
