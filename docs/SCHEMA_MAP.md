# SCHEMA MAP

## 1. Kisa yonetici ozeti

Repo icinde schema mimarisi uc katmana dagiliyor:

- `src/lib/schema.ts`: tekrar kullanilan JSON-LD util'leri
- sayfa icinde inline tanimlanan JSON-LD objeleri
- `FAQSection`, `ServicePageTemplate`, `LandingPageTemplate` gibi component/template seviyesinde dolayli schema uretimi

Kodda gorunen mevcut durum:

- Static service sayfalari (`ServicePageTemplate` kullananlar) en tutarli grup: `LocalBusiness + Service + BreadcrumbList + AggregateRating + FAQPage`
- Programmatic SEO rotalari (`/[city]`, `/[city]/[service]`) schema uretiyor ama `Service` schema kullanmiyor; servis niyetli sayfalar `LocalBusiness` ile temsil ediliyor
- `LandingPageTemplate` kullanan bircok `/teklif/*` sayfasi yalnizca `FAQPage` uretiyor; servis/breadcrumb/business schema yok
- `bakim-servis-uzaktan-izleme` ve `/teklif/alarm` gibi uzun landing sayfalarinda gorunur FAQ olmasina ragmen kodda `FAQPage` schema yok
- `istanbul-guvenlik-sistemi-kurulumu` sayfasinda ayni FAQ icerigi iki farkli yoldan schema'ya donusturuluyor: `generateFAQSchema(...)` ve `FAQSection`
- URL standardi daginik: `siteConfig.url` non-`www`, bazi inline schema ve metadata alanlari `www`
- Kod tabaninda yaygin encoding bozulmasi var; schema string'lerine de yansiyor

## 2. Schema ureten dosyalar listesi

### Global ve ortak ureticiler

- `src/lib/schema.ts`
- `src/components/sections/FAQSection.tsx`
- `src/components/templates/ServicePageTemplate.tsx`
- `src/components/templates/LandingPageTemplate.tsx`

### Route seviyesinde schema ureten dosyalar

- `src/app/page.tsx`
- `src/app/alarm-sistemi-kurulumu/page.tsx`
- `src/app/apartman-site-guvenlik-sistemi/page.tsx`
- `src/app/bakim-servis-uzaktan-izleme/page.tsx`
- `src/app/blog/page.tsx`
- `src/app/blog/[slug]/page.tsx`
- `src/app/fabrika-depo-guvenlik-sistemi/page.tsx`
- `src/app/hakkimizda/page.tsx`
- `src/app/iletisim/page.tsx`
- `src/app/istanbul-guvenlik-sistemi-kurulumu/page.tsx`
- `src/app/isyeri-guvenlik-sistemi/page.tsx`
- `src/app/kamera-sistemi-kurulumu/page.tsx`
- `src/app/kartli-gecis-ve-turnike-sistemi/page.tsx`
- `src/app/paketler-ve-fiyatlandirma/page.tsx`
- `src/app/teklif/alarm/page.tsx`
- `src/app/teklif/apartman/page.tsx`
- `src/app/teklif/istanbul-ip-kamera-montaji/page.tsx`
- `src/app/teklif/isyeri/page.tsx`
- `src/app/teklif/kamera/page.tsx`
- `src/app/teklif/kamera/istanbul-ip-kamera-montaji/page.tsx`
- `src/app/teklif/yangin/page.tsx`
- `src/app/yangin-alarm-sistemi-kurulumu/page.tsx`
- `src/app/[city]/page.tsx`
- `src/app/[city]/[service]/page.tsx`

## 3. Her dosya icin schema haritasi

| Route pattern | Source file | Schema type | Nasil uretildigi | Notlar |
| --- | --- | --- | --- | --- |
| `/` | `src/app/page.tsx` | `LocalBusiness`, `AggregateRating`, `FAQPage` | `generateLocalBusinessSchema()`, `generateAggregateRatingSchema()`, ayrica alttaki `FAQSection` icinden `FAQPage` | Home sayfasinda breadcrumb yok. FAQ schema sayfa dosyasinda degil component icinden geliyor. |
| `/alarm-sistemi-kurulumu` | `src/app/alarm-sistemi-kurulumu/page.tsx` | `LocalBusiness`, `Service`, `BreadcrumbList`, `AggregateRating`, `FAQPage` | Sayfa `ServicePageTemplate` render ediyor; template bu dort schema'yi direkt basiyor, `FAQSection` de `FAQPage` ekliyor | En tutarli schema kalibi bu template'te. |
| `/apartman-site-guvenlik-sistemi` | `src/app/apartman-site-guvenlik-sistemi/page.tsx` | `LocalBusiness`, `Service`, `BreadcrumbList`, `AggregateRating`, `FAQPage` | `ServicePageTemplate` | Template tabanli. |
| `/fabrika-depo-guvenlik-sistemi` | `src/app/fabrika-depo-guvenlik-sistemi/page.tsx` | `LocalBusiness`, `Service`, `BreadcrumbList`, `AggregateRating`, `FAQPage` | `ServicePageTemplate` | Template tabanli. |
| `/isyeri-guvenlik-sistemi` | `src/app/isyeri-guvenlik-sistemi/page.tsx` | `LocalBusiness`, `Service`, `BreadcrumbList`, `AggregateRating`, `FAQPage` | `ServicePageTemplate` | Template tabanli. |
| `/kamera-sistemi-kurulumu` | `src/app/kamera-sistemi-kurulumu/page.tsx` | `LocalBusiness`, `Service`, `BreadcrumbList`, `AggregateRating`, `FAQPage` | `ServicePageTemplate` | Template tabanli. |
| `/kartli-gecis-ve-turnike-sistemi` | `src/app/kartli-gecis-ve-turnike-sistemi/page.tsx` | `LocalBusiness`, `Service`, `BreadcrumbList`, `AggregateRating`, `FAQPage` | `ServicePageTemplate` | Metadata/static route slug'i `kartli-gecis-ve-turnike-sistemi`; `services.ts` icindeki dinamik slug `kartli-gecis-sistemi-kurulumu`. Schema ve route sozlugu iki farkli naming kullaniyor. |
| `/yangin-alarm-sistemi-kurulumu` | `src/app/yangin-alarm-sistemi-kurulumu/page.tsx` | `LocalBusiness`, `Service`, `BreadcrumbList`, `AggregateRating`, `FAQPage` | `ServicePageTemplate` | Template tabanli. |
| `/bakim-servis-uzaktan-izleme` | `src/app/bakim-servis-uzaktan-izleme/page.tsx` | `Service` (`provider` icinde `Organization`, `areaServed` icinde `City`) | Sayfa icinde inline `jsonLd` objesi | Gorunur FAQ bolumu var ama `FAQPage` schema yok. Breadcrumb, LocalBusiness ve AggregateRating da yok. Canonical `www` kullaniyor. |
| `/hakkimizda` | `src/app/hakkimizda/page.tsx` | `LocalBusiness`, `BreadcrumbList` | `generateLocalBusinessSchema()` ve `generateBreadcrumbSchema()` | `LocalBusiness` util'i her zaman ana domain `#localbusiness` varligini donuyor; sayfa canonical'i alt sayfa olsa da schema varligi kurumsal/home entity. |
| `/iletisim` | `src/app/iletisim/page.tsx` | `LocalBusiness`, `BreadcrumbList` | `generateLocalBusinessSchema()` ve `generateBreadcrumbSchema()` | Hedef acikca contact page olmasina ragmen `ContactPage` schema yok; sadece genel `LocalBusiness` var. |
| `/paketler-ve-fiyatlandirma` | `src/app/paketler-ve-fiyatlandirma/page.tsx` | `BreadcrumbList`, `FAQPage` | Breadcrumb sayfa icinde, `FAQPage` alttaki `FAQSection` icinden | Fiyat sayfasinda `Service`, `Offer` veya `Product` schema yok. |
| `/blog` | `src/app/blog/page.tsx` | `BreadcrumbList` | `generateBreadcrumbSchema()` | Blog listing icin `CollectionPage` veya `Blog` schema yok. |
| `/blog/[slug]` | `src/app/blog/[slug]/page.tsx` | `Article`, `BreadcrumbList`, `FAQPage` | `generateArticleSchema()`, `generateBreadcrumbSchema()`, eger `blogFaqMap[slug]` doluysa `FAQSection` icinden `FAQPage` | `blog-posts.ts` icindeki 4 slug'in tamaminda FAQ map'i var; pratikte mevcut blog detaylarinin hepsi `FAQPage` aliyor. |
| `/istanbul-guvenlik-sistemi-kurulumu` | `src/app/istanbul-guvenlik-sistemi-kurulumu/page.tsx` | `LocalBusiness`, `BreadcrumbList`, `FAQPage` | `generateLocalBusinessSchema()`, `generateBreadcrumbSchema()`, `generateFAQSchema()` ve ek olarak `FAQSection` | Ayni FAQ icerigi iki kez schema'ya donusuyor. Ayrica `next.config.ts` bu route'u `/istanbul` rotasina redirect ediyor. |
| `/teklif/alarm` | `src/app/teklif/alarm/page.tsx` | `Service` (`provider` icinde `Organization`, `areaServed` icinde `City`) | Sayfa icinde inline `jsonLd` objesi | Sayfada FAQ icerigi var ama `FAQPage` schema yok. Breadcrumb ve LocalBusiness da yok. Canonical `www` kullaniyor. |
| `/teklif/istanbul-ip-kamera-montaji` | `src/app/teklif/istanbul-ip-kamera-montaji/page.tsx` | `Service`, `FAQPage`, `BreadcrumbList`, `Product` + `AggregateRating`, `LocalBusiness` (Service provider altinda) | Tum schema'lar sayfa icinde inline tanimli | En zengin teklif sayfasi bu. Ancak servis sayfasinda puanlama `Product` uzerinden veriliyor; metadata ve breadcrumb URL'leri `www` kullaniyor. |
| `/teklif/apartman` | `src/app/teklif/apartman/page.tsx` | `FAQPage` | Sayfa `LandingPageTemplate` render ediyor; template alttaki `FAQSection` ile schema basiyor | Hizmet, breadcrumb veya business schema yok. |
| `/teklif/isyeri` | `src/app/teklif/isyeri/page.tsx` | `FAQPage` | `LandingPageTemplate` | Yalnizca FAQ schema var. |
| `/teklif/kamera` | `src/app/teklif/kamera/page.tsx` | `FAQPage` | `LandingPageTemplate` | Yalnizca FAQ schema var. |
| `/teklif/kamera/istanbul-ip-kamera-montaji` | `src/app/teklif/kamera/istanbul-ip-kamera-montaji/page.tsx` | `FAQPage` | `LandingPageTemplate` | Ayrica metadata da yok; schema coverage yalnizca FAQ ile sinirli. |
| `/teklif/yangin` | `src/app/teklif/yangin/page.tsx` | `FAQPage` | `LandingPageTemplate` | Yalnizca FAQ schema var. |
| `/[city]` | `src/app/[city]/page.tsx` | `BreadcrumbList`, `FAQPage`, `LocalBusiness` | Tum schema'lar sayfa icinde inline tanimli | `LocalBusiness.address.addressLocality` her sehirde `siteConfig.city` yani Istanbul. Route Ankara olsa da adres Istanbul merkez kaliyor. |
| `/[city]/[service]` | `src/app/[city]/[service]/page.tsx` | `FAQPage`, `BreadcrumbList`, `LocalBusiness` | Tum schema'lar sayfa icinde inline tanimli | Servis niyetli sayfa olmasina ragmen `Service` schema yok. `LocalBusiness` yine Istanbul adresini tasiyor. |

## 4. Global schema util ve yardimci dosyalar

### `src/lib/schema.ts`

SEO amacli ortak JSON-LD util katmani burada:

- `generateLocalBusinessSchema()`
  - `@type: LocalBusiness`
  - `@id: ${siteConfig.url}#localbusiness`
  - `areaServed`: `cities.ts` icindeki tum sehirler
  - `address`: merkez adres
  - `openingHoursSpecification`: hafta ici + cumartesi
- `generateServiceSchema({ name, description, url })`
  - `@type: Service`
  - `provider`: `LocalBusiness` referansi
  - `areaServed`: tum sehirler
- `generateFAQSchema(items)`
  - `@type: FAQPage`
- `generateBreadcrumbSchema(items)`
  - `@type: BreadcrumbList`
  - `item` URL'lerini `absoluteUrl(...)` ile absolute'a ceviriyor
- `generateArticleSchema(...)`
  - `@type: Article`
  - `author` ve `publisher` nested `Organization`
  - `mainEntityOfPage` ve `image` absolute URL
- `generateAggregateRatingSchema()`
  - `@type: LocalBusiness`
  - `aggregateRating` nested
- `schemaToString(schema)`
  - Kullanilan bir helper gorunmuyor

### `src/components/sections/FAQSection.tsx`

- UI component olmasina ragmen her kullanimda `FAQPage` schema basiyor
- Bu nedenle schema coverage'ini yalnizca sayfa dosyasina bakarak cikarmak yaniltici olur
- `LandingPageTemplate`, `ServicePageTemplate`, home, blog detail, paketler ve `istanbul-guvenlik-sistemi-kurulumu` bu yolla `FAQPage` aliyor

### `src/components/templates/ServicePageTemplate.tsx`

Bu template asagidaki schema setini sabit olarak uretiyor:

- `LocalBusiness`
- `Service`
- `BreadcrumbList`
- `AggregateRating`
- `FAQPage` (`FAQSection` uzerinden)

Bu template'i kullanan route dosyalari:

- `src/app/alarm-sistemi-kurulumu/page.tsx`
- `src/app/apartman-site-guvenlik-sistemi/page.tsx`
- `src/app/fabrika-depo-guvenlik-sistemi/page.tsx`
- `src/app/isyeri-guvenlik-sistemi/page.tsx`
- `src/app/kamera-sistemi-kurulumu/page.tsx`
- `src/app/kartli-gecis-ve-turnike-sistemi/page.tsx`
- `src/app/yangin-alarm-sistemi-kurulumu/page.tsx`

### `src/components/templates/LandingPageTemplate.tsx`

Bu template yalnizca alttaki `FAQSection` sebebiyle `FAQPage` uretir.

Bu template'i kullanan route dosyalari:

- `src/app/teklif/apartman/page.tsx`
- `src/app/teklif/isyeri/page.tsx`
- `src/app/teklif/kamera/page.tsx`
- `src/app/teklif/kamera/istanbul-ip-kamera-montaji/page.tsx`
- `src/app/teklif/yangin/page.tsx`

### `src/data/site-config.ts`

Schema URL, telefon, e-posta, adres, `ogImage` ve merkez sehir bilgisi burada tutuluyor. Non-`www` temel domain burada tanimli:

- `url: "https://guvenlikservisi.com"`

### `src/data/cities.ts` ve `src/data/services.ts`

- `cities.ts`: `areaServed`, dynamic route static params ve city isimleri icin kaynak
- `services.ts`: dynamic `service` slug ve isimleri icin kaynak

### `src/lib/lead-schema.ts`

- Isim olarak `schema` geciyor ama SEO JSON-LD ile ilgili degil
- API lead veri standardi/normalizasyonu icin kullaniliyor

## 5. Eksikler ve riskler

### Kritik eksikler

- `src/app/[city]/[service]/page.tsx` servis niyetli olmasina ragmen `Service` schema uretmiyor
- `src/app/teklif/apartman/page.tsx`, `src/app/teklif/isyeri/page.tsx`, `src/app/teklif/kamera/page.tsx`, `src/app/teklif/kamera/istanbul-ip-kamera-montaji/page.tsx`, `src/app/teklif/yangin/page.tsx` yalnizca `FAQPage` ile sinirli
- `src/app/bakim-servis-uzaktan-izleme/page.tsx` ve `src/app/teklif/alarm/page.tsx` gorunur FAQ bloklari barindirmasina ragmen `FAQPage` schema uretmiyor
- `/blog` listing sayfasinda `Blog` veya `CollectionPage` schema yok
- `/iletisim` sayfasinda `ContactPage` schema yok
- `/paketler-ve-fiyatlandirma` sayfasinda `Offer`, `Product` veya fiyat semantiklerini anlatan daha uygun bir schema yok

### Tutarsizliklar

- `siteConfig.url` non-`www`, ama `bakim-servis-uzaktan-izleme`, `/teklif/alarm`, `/teklif/istanbul-ip-kamera-montaji` gibi sayfalarda inline schema ve metadata URL'leri `www`
- `src/app/[city]/page.tsx` ve `src/app/[city]/[service]/page.tsx` icindeki `LocalBusiness.address` her durumda Istanbul merkez adresini kullaniyor
- `src/app/istanbul-guvenlik-sistemi-kurulumu/page.tsx` schema URL'si kendi route'unu gosterirken `next.config.ts` ayni route'u `/istanbul` rotasina yonlendiriyor
- `src/app/kartli-gecis-ve-turnike-sistemi/page.tsx` ile `src/data/services.ts` ayni hizmet icin farkli slug sozlugu kullaniyor

### Tekrarlar

- `src/app/istanbul-guvenlik-sistemi-kurulumu/page.tsx` icinde FAQ iki farkli kanaldan uretiliyor:
  - `generateFAQSchema(faqItems)`
  - `FAQSection`
- `LocalBusiness` + `AggregateRating` bazi sayfalarda ayni `@id` ile iki ayri script olarak donuyor; bu kismen kabul edilebilir ama daginik mimariyi artiriyor

### Yapisal riskler

- Schema mantigi tek yerde toplanmamis; bir kisim util, bir kisim template, bir kisim sayfa icinde inline
- Bu daginiklik ayni route grubunda bile farkli schema kalitesine yol aciyor
- Encoding bozulmasi (`Güvenlik`, `İstanbul` vb.) schema text alanlarina da yansiyor
- Kod tabaninda top-level `Organization`, `WebSite`, `WebPage`, `CollectionPage`, `ContactPage` gibi tamamlayici schema tipleri yok

## 6. Oncelikli duzeltmeler

1. `src/app/[city]/[service]/page.tsx` icin `Service` schema eklenmeli; `LocalBusiness` tek basina birakilmamali.
2. `LandingPageTemplate` tabanli `/teklif/*` sayfalara en azindan `Service + BreadcrumbList + LocalBusiness` katmani eklenmeli.
3. `src/app/bakim-servis-uzaktan-izleme/page.tsx` ve `src/app/teklif/alarm/page.tsx` icin `FAQPage` schema eklenmeli; gorunen FAQ ile JSON-LD hizalanmali.
4. `src/app/istanbul-guvenlik-sistemi-kurulumu/page.tsx` icindeki cift FAQ schema kaldirilmali; tek kaynak secilmeli.
5. URL standardi tek domaine cekilmeli; `schema.ts`, inline schema'lar ve metadata ayni `siteConfig.url` standardini kullanmali.
6. Dynamic city ve city/service sayfalarinda Istanbul merkez adresi ile yerel sehir iddiasi arasindaki gerilim netlestirilmeli; gerekirse `areaServed` odakli model korunup `address` dili yeniden ele alinmali.
7. `kartli-gecis` slug sozlugu static ve dynamic katmanda aynilastirilmali.
8. Uzun vadede schema uretimi tek util/template katmanina tasinmali; inline JSON-LD daginikligi azaltilmali.

## 7. Kisa audit ozeti

### Schema bulunan sayfa gruplari

- static pages
  - Tam kapsamli: ana service landing'leri (`ServicePageTemplate`)
  - Kismi kapsamli: `hakkimizda`, `iletisim`, `paketler-ve-fiyatlandirma`, `bakim-servis-uzaktan-izleme`
- `/blog`
  - `BreadcrumbList`
- `/blog/[slug]`
  - `Article + BreadcrumbList + FAQPage`
- `/teklif/*`
  - karmasik
  - `teklif/alarm`: yalniz `Service`
  - `teklif/istanbul-ip-kamera-montaji`: zengin schema seti
  - diger teklif landing'leri: yalniz `FAQPage`
- `/[city]`
  - `BreadcrumbList + FAQPage + LocalBusiness`
- `/[city]/[service]`
  - `BreadcrumbList + FAQPage + LocalBusiness`

### Schema olmayan sayfa gruplari

- `src/app/not-found.tsx`
- `/api/*` route handler dosyalari
  - `src/app/api/lead/route.ts`
  - `src/app/api/quote/route.ts`

Not:

- Kullaniciya gorunen route gruplari icinde tamamen schemasiz ana sayfa grubu yok; asil sorun "hic schema olmamasi" degil, bazi gruplarda schema'nin asiri zayif kalmasi.

### En kritik eksikler

- Programmatic `/[city]/[service]` sayfalarinda `Service` schema olmamasi
- Bircok `/teklif/*` sayfasinin yalnizca `FAQPage` ile kalmasi
- `bakim-servis-uzaktan-izleme` ve `/teklif/alarm` sayfalarinda gorunur FAQ olmasina ragmen `FAQPage` eksigi
- `www` / non-`www` URL daginikligi
- `istanbul-guvenlik-sistemi-kurulumu` icin cift FAQ schema ve redirect uyusmazligi
