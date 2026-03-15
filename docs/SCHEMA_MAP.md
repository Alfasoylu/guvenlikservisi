# SCHEMA MAP
guvenlikservisi.com

Purpose:
Define which schema types belong to which page systems under the 24-month national growth plan.

Schema must support:
- organic search understanding
- local-commercial clarity
- service intent clarity
- breadcrumb structure
- FAQ extraction where appropriate
- future marketplace extensibility

Schema must not be:
- duplicated carelessly
- contradictory
- fake
- disconnected from visible content

---

## 1. GLOBAL RULES

Use schema only when:
- it matches visible page content
- it supports the actual page intent
- URLs are normalized to canonical outputs

Avoid:
- duplicate schema representing the same thing twice
- fake review or rating claims
- FAQ schema without visible FAQs
- service pages represented only as generic business pages when service schema is clearly appropriate

---

## 2. ROOT PAGE

Route:
- `/`

Preferred schema:
- `LocalBusiness`
- `FAQPage` if visible FAQ exists
- optional `BreadcrumbList` only if visible breadcrumb structure exists

Role:
Brand-level business understanding.

---

## 3. NATIONAL SERVICE HUB PAGES

Routes:
- `/kamera-sistemi-kurulumu`
- `/alarm-sistemi-kurulumu`
- etc.

Preferred schema:
- `Service`
- `LocalBusiness`
- `BreadcrumbList`
- `FAQPage` when visible FAQ exists

Role:
National service authority.

Rule:
Service hubs should clearly look like service pages in schema.

---

## 4. CITY HUB PAGES

Pattern:
- `/{city}`

Preferred schema:
- `LocalBusiness`
- `BreadcrumbList`
- `FAQPage` when visible FAQ exists

Optional:
- localized service-area signals in business/service description if implemented safely

Role:
Local authority hub.

---

## 5. CITY + SERVICE MONEY PAGES

Pattern:
- `/{city}/{service}`

Preferred schema:
- `Service`
- `LocalBusiness`
- `BreadcrumbList`
- `FAQPage` when visible FAQ exists

This is a critical rule:
City/service pages are service-intent money pages and should not rely on `LocalBusiness` alone if the implementation can support clear `Service` schema.

Role:
Primary organic local-commercial service pages.

---

## 6. DISTRICT + SERVICE PAGES

Pattern:
- `/{city}/{district}/{service}`

Preferred schema:
- `Service`
- `LocalBusiness`
- `BreadcrumbList`
- `FAQPage` when visible FAQ exists

Role:
Hyperlocal support pages.

Rule:
Do not overcomplicate district schema.
Keep it clean and aligned with canonical page intent.

---

## 7. PROBLEM PAGES

Pattern:
- `/sorun/{problem}`

Preferred schema:
- `FAQPage` when visible question/answer content exists
- `Article` or `BlogPosting` when the page is structured as a diagnostic article
- `BreadcrumbList`

Role:
Problem-intent explanatory pages that route into service pages.

Rule:
Do not force service schema onto pure problem pages unless the page is truly structured as a service page.

---

## 8. BLOG PAGES

Routes:
- `/blog/{slug}`

Preferred schema:
- `BlogPosting` or `Article`
- `BreadcrumbList`
- `FAQPage` only when visible FAQ exists

Role:
Informational support layer.

---

## 9. PAID LANDING PAGES `/teklif/*`

Preferred schema:
- minimal and only when it supports visible conversion-page content honestly
- often `FAQPage` if a real FAQ is present
- optional `LocalBusiness` if truly appropriate and not misleading

Rules:
- do not overbuild schema on paid landing pages
- they are not organic authority assets
- no fake breadth or irrelevant markup

---

## 10. FUTURE MARKETPLACE PAGES

### Installer profile pages
Potential future schema:
- `LocalBusiness`
- `Organization`
- `Service`
- `BreadcrumbList`

### Directory pages
Potential future schema:
- `CollectionPage`
- `BreadcrumbList`

These should be added only when the marketplace layer is real.

---

## 11. REQUIRED CLEANUP DIRECTION

The long-term goal should be:
- one clear schema helper layer
- one predictable mapping by route family
- no duplicate schema systems drifting apart
- no unsafe aggregate rating defaults

---

## 12. 24-MONTH PLAN ALIGNMENT

### Months 1-3
Normalize schema for existing money pages and eliminate inconsistency.

### Months 4-6
Bring district and problem page schema into a consistent model.

### Months 7-12
Scale city/service and city hub schema across the 18-city layer.

### Months 13-24
Keep schema clean while national district expansion and marketplace foundations are added.

Schema must support scale, not create drift.
