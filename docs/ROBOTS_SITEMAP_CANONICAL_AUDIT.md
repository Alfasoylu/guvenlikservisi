# ROBOTS SITEMAP CANONICAL AUDIT

## 1. Kisa yonetici ozeti

Repo icinde robots, sitemap, canonical ve indexability mantigi dort ayri katmana dagiliyor:

- `src/app/layout.tsx` ve bazi `page.tsx` dosyalarindaki Next metadata
- `src/app/teklif/layout.tsx` alt layout metadata'si
- `next-sitemap.config.js`
- repo icine commit edilmis `public/robots.txt`, `public/sitemap.xml`, `public/sitemap-0.xml`

Audit sonucu gorunen tablo:

- App Router icinde `robots.ts` veya `sitemap.ts` yok
- Sitemap ve robots uretimi build zincirinde `next-sitemap` ile yapiliyor (`package.json`: `next build && next-sitemap`)
- Root layout tum metadata'siz sayfalara canonical `/` ve `index,follow` miras birakiyor
- `/teklif/*` icin sinyaller birbiriyle celisiyor:
  - metadata tarafinda `index: true`
  - `robots.txt` tarafinda `Disallow: /teklif/`
  - sitemap tarafinda `exclude: ['/teklif/*']`
- Checked-in `public/sitemap.xml` teknik olarak hatali gorunuyor; sitemap index kendi kendisini de listeleyerek recursive bir referans olusturuyor
- Checked-in `public/sitemap-0.xml` yalnizca 17 URL iceriyor; route envanterindeki `18` adet `/[city]` ve `144` adet `/[city]/[service]` sayfasinin hicbiri sitemap'te yok
- `siteConfig.url` non-`www`, ama bazi canonical ve Open Graph URL'leri `www` kullaniyor
- `trailingSlash` ayari yok, canonical'lar slashsiz, checked-in sitemap URL'leri ise slashli; bu da URL normallestirme tutarsizligi yaratiyor
- `noindex` kullanimina hic rastlanmadi
- `src/app/istanbul-guvenlik-sistemi-kurulumu/page.tsx` kendi kendine canonical uretirken `next.config.ts` ayni URL'yi `/istanbul` rotasina 301 yonlendiriyor

## 2. Robots mantigi

### App Router icinde robots uretimi var mi?

Hayir.

Repo icinde asagidaki dosyalar bulunmuyor:

- `src/app/robots.ts`
- `src/app/sitemap.ts`
- `middleware.ts`
- `manifest.ts`
- `rewrites` tanimi

Yani robots davranisi App Router runtime dosyalarindan degil, build-artifact ve metadata katmanindan geliyor.

### Metadata tabanli robots mantigi

#### `src/app/layout.tsx`

Root layout tum site icin su varsayilan robots sinyalini veriyor:

- `index: true`
- `follow: true`
- `googleBot.index: true`
- `googleBot.follow: true`

Bu nedenle page-level override olmayan tum HTML sayfalar teorik olarak indexlenebilir gorunuyor.

#### `src/app/teklif/layout.tsx`

`/teklif/*` alt agaci ayrica su metadata'yi veriyor:

- `index: true`
- `follow: true`

Yani metadata tarafinda `/teklif/*` acikca indexlenebilir olarak isaretlenmis.

### `public/robots.txt`

Commit edilmis `public/robots.txt` dosyasi sunlari iceriyor:

- `Allow: /`
- `Disallow: /api/`
- `Disallow: /teklif/`
- `Disallow: /_next/`
- `Disallow: /admin/`
- `Sitemap: https://guvenlikservisi.com/sitemap.xml`

### Robots katmanlari arasindaki durum

Tutarlilik:

- `/api/*` hem HTML route olmadigi icin hem de `robots.txt` ile disallow oldugu icin mantikli bicimde crawl disi

Celiski:

- `/teklif/*` metadata katmaninda `index,follow`
- ayni route grubu `robots.txt` icinde `Disallow: /teklif/`
- ayni route grubu sitemap config icinde de disari atiliyor

Bu uc sinyal birlikte tek bir karar anlatmiyor.

## 3. Sitemap mantigi

### Sitemap uretimi nerede yapiliyor?

Build zinciri:

- `package.json` -> `build: next build && next-sitemap`

Konfigurasyon dosyasi:

- `next-sitemap.config.js`

Commit edilmis ciktilar:

- `public/sitemap.xml`
- `public/sitemap-0.xml`

### `next-sitemap.config.js` nasil yapilandirilmis?

Ana ayarlar:

- `siteUrl: "https://guvenlikservisi.com"`
- `generateRobotsTxt: true`
- `sitemapSize: 5000`

Exclude listesi:

- `/teklif/*`
- `/api/*`
- `/404`
- `/500`

Robots policy:

- `Allow: /`
- `Disallow: /teklif/`
- `Disallow: /api/`

Transform mantigi:

- `/` icin `priority: 1.0`, `changefreq: daily`
- `/istanbul` icin `priority: 0.95`, `changefreq: daily`
- `/istanbul/kamera-sistemi-kurulumu` icin `priority: 0.95`, `changefreq: daily`
- bazi Istanbul city/service URL'leri icin `priority: 0.9`, `weekly`
- tum `/blog/` path'leri icin `priority: 0.8`, `monthly`
- tum `/istanbul` prefix'leri icin `priority: 0.85`, `weekly`
- belirli statik servis prefix'leri icin `priority: 0.8`, `weekly`
- diger her sey icin `priority: 0.7`, `monthly`

### Checked-in sitemap dosyalarinda ne var?

#### `public/sitemap.xml`

Mevcut checked-in dosya bir sitemap index ve iki girdi iceriyor:

- `https://guvenlikservisi.com/sitemap-0.xml`
- `https://guvenlikservisi.com/sitemap.xml`

Ikinci satir kendi kendisini isaret ediyor. Bu recursive/self-referential yapi teknik olarak yanlis ve kritik risk.

#### `public/sitemap-0.xml`

Checked-in URL sayisi: `17`

Icerdigi route gruplari:

- root: `1/1`
- static pages: `11/12`
- `/blog` + mevcut `4` blog yazisi: `5/5`
- `/teklif/*`: `0/7`
- `/[city]`: `0/18`
- `/[city]/[service]`: `0/144`

Sitemap'te gorunen static route'lar:

- `/alarm-sistemi-kurulumu`
- `/apartman-site-guvenlik-sistemi`
- `/bakim-servis-uzaktan-izleme`
- `/fabrika-depo-guvenlik-sistemi`
- `/hakkimizda`
- `/iletisim`
- `/isyeri-guvenlik-sistemi`
- `/kamera-sistemi-kurulumu`
- `/kartli-gecis-ve-turnike-sistemi`
- `/paketler-ve-fiyatlandirma`
- `/yangin-alarm-sistemi-kurulumu`

Sitemap'te olmayan ama route inventory'de bulunan static route:

- `/istanbul-guvenlik-sistemi-kurulumu`

### Config ile checked-in sitemap arasindaki uyumsuzluklar

Kod ile cikti arasinda net farklar var:

- Config Istanbul city ve city/service path'leri icin ozel `transform` kurallari yaziyor
- Checked-in sitemap'te hicbir `/istanbul`, `/<city>`, `/<city>/<service>` route'u yok
- Config blog path'lerini `monthly` ve `0.8` yapmaliydi
- Checked-in `sitemap-0.xml` blog URL'lerini `daily` ve `0.7` olarak tutuyor
- Config root path'i `1.0` oncelige cekmeli
- Checked-in root URL `0.7`

Bu tablo iki olasiliga isaret eder, ancak repo kodu tek basina hangisinin dogru oldugunu kesinlestirmiyor:

- checked-in sitemap artefakti guncel degil
- veya build sirasinda `next-sitemap` beklenen route listesini goremiyor

Kesin olan nokta su: repo icindeki mevcut sitemap dosyalari bugunku route envanterini yansitmiyor.

## 4. Canonical mantigi

### Global canonical mantigi

#### `src/app/layout.tsx`

Root layout'ta:

- `metadataBase = new URL(siteConfig.url)`
- `alternates.canonical = "/"`

Bu, yerel canonical tanimi olmayan tum sayfalara ana sayfa canonical'inin sızması riskini doguruyor.

### Canonical hangi sayfalarda var?

Canonical tanimli route gruplari:

- `/`
- tum static service sayfalari
- `/bakim-servis-uzaktan-izleme`
- `/blog`
- `/blog/[slug]`
- `/hakkimizda`
- `/iletisim`
- `/istanbul-guvenlik-sistemi-kurulumu`
- `/paketler-ve-fiyatlandirma`
- `/teklif/alarm`
- `/teklif/istanbul-ip-kamera-montaji`
- `/[city]`
- `/[city]/[service]`

Canonical olmayan page dosyalari:

- `src/app/teklif/apartman/page.tsx`
- `src/app/teklif/isyeri/page.tsx`
- `src/app/teklif/kamera/page.tsx`
- `src/app/teklif/kamera/istanbul-ip-kamera-montaji/page.tsx`
- `src/app/teklif/yangin/page.tsx`

Bu 5 sayfa root layout canonical `/` degerini miras aliyor gibi gorunuyor.

### `siteConfig.url` ile canonical mantigi tutarli mi?

Kismen.

`siteConfig.url`:

- `https://guvenlikservisi.com`

Bu degerle tutarli canonical kullananlar:

- home
- cogu static page
- blog
- dynamic city ve city/service sayfalari

Bu degerle tutarsiz canonical kullananlar:

- `src/app/bakim-servis-uzaktan-izleme/page.tsx`
- `src/app/teklif/alarm/page.tsx`
- `src/app/teklif/istanbul-ip-kamera-montaji/page.tsx`

Bu dosyalar `https://www.guvenlikservisi.com/...` kullaniyor.

### `www` / non-`www` uyumsuzlugu var mi?

Evet.

Kaynak standartlar:

- `siteConfig.url`: non-`www`
- `next-sitemap.config.js.siteUrl`: non-`www`
- `public/robots.txt` sitemap referansi: non-`www`

Uyumsuz sayfa metadata'lari:

- `/bakim-servis-uzaktan-izleme`
- `/teklif/alarm`
- `/teklif/istanbul-ip-kamera-montaji`

### Trailing slash uyumsuzlugu var mi?

Evet.

- canonical URL'ler slashsiz yazilmis: or. `https://guvenlikservisi.com/blog`
- checked-in sitemap URL'leri slashli: or. `https://guvenlikservisi.com/blog/`
- `next.config.ts` icinde `trailingSlash: true` veya `false` tanimi yok

Bu nedenle canonical ile sitemap URL formu ayni degil. Slash normallestirmesi uygulama tarafinda yapiliyor olsa bile, SEO sinyali olarak tutarsizlik olusuyor.

### Redirect/canonical cakismasi var mi?

Evet, en belirgin ornek:

- route dosyasi: `src/app/istanbul-guvenlik-sistemi-kurulumu/page.tsx`
- canonical: `https://guvenlikservisi.com/istanbul-guvenlik-sistemi-kurulumu`
- redirect: `next.config.ts` ile `301 -> /istanbul`

Yani canonical kendi URL'sini savunurken uygulama ayni URL'yi kalici olarak baska URL'ye tasiyor.

## 5. Noindex / indexability mantigi

### `noindex` kullanimi var mi?

Hayir.

Taranan metadata dosyalarinda asagidaki gibi hicbir kullanim yok:

- `index: false`
- `follow: false`
- `noindex`

### Genel indexability durumu

#### Acikca indexe acik olanlar

Metadata tarafinda su route gruplari indexe acik gorunuyor:

- root
- tum static pages
- `/blog`
- `/blog/[slug]`
- `/teklif/*`
- `/[city]`
- `/[city]/[service]`

#### Crawl/index sinyali zayif veya celiskili olanlar

- `/teklif/*`
  - metadata `index,follow`
  - robots.txt `Disallow`
  - sitemap disi
- `/[city]` ve `/[city]/[service]`
  - canonical mevcut
  - noindex yok
  - sitemap'te yok
  - bu nedenle indexlenebilir ama kesif sinyali zayif
- `/istanbul-guvenlik-sistemi-kurulumu`
  - canonical var
  - sitemap'te yok
  - ustune 301 redirect var

### Noindex olmasi gereken ama indexe acik sayfalar var mi?

Repo koduna bakarak kesin karar verilebilen en net aday `/teklif/*` grubudur.

Cunku mevcut kurgu bu route grubunu bir yandan gizlemeye, bir yandan acik tutmaya calisiyor:

- `robots.txt`: disallow
- sitemap: exclude
- metadata: index true

Bu, proje niyetinin ya su oldugunu dusunduruyor:

- bu sayfalar indexlenmemeli
- veya bu sayfalar indexlenmeli ama robots/sitemap ayarlari tamamlanmamis

Kod tarafinda kesin niyet yazmadigi icin yalnizca su denebilir:

- eger `/teklif/*` indexlenmeyecekse `noindex` eksik
- eger indexlenecekse robots/sitemap ayarlari yanlis

### Indexe acik olmasi gereken ama metadata/canonical/sitemap eksikligi nedeniyle zayif kalan sayfalar var mi?

Evet.

En belirgin gruplar:

- `/[city]`
  - canonical var
  - sitemap'te yok
- `/[city]/[service]`
  - canonical var
  - sitemap'te yok
- metadata'siz 5 teklif page'i
  - canonical yok
  - root canonical `/` miras riski var
  - sitemap zaten disinda

## 6. Route grup bazli audit

### static pages

Route inventory static page sayisi: `12`

Durum:

- `11` tanesi checked-in sitemap'te var
- `1` tanesi yok: `/istanbul-guvenlik-sistemi-kurulumu`
- cogu static page'de page-level canonical var
- robots/noindex override yok; root layout `index,follow` aliyorlar
- slashsiz canonical vs slashli sitemap tutarsizligi bu grubu da etkiliyor

Ozel notlar:

- `/bakim-servis-uzaktan-izleme` `www` canonical kullaniyor
- `/istanbul-guvenlik-sistemi-kurulumu` redirect/canonical cakismasi tasiyor
- `/kartli-gecis-ve-turnike-sistemi` route adi ile dinamik hizmet slug sozlugu uyumsuz; duplicate/intent bolunmesi riski var

### `/blog`

Durum:

- canonical var: `https://guvenlikservisi.com/blog`
- robots/noindex override yok; root `index,follow` geciyor
- checked-in sitemap'te var
- sitemap URL'si slashli, canonical slashsiz

Risk seviyesi:

- dusuk/orta
- canonical mevcut ama URL formu tutarsiz

### `/blog/[slug]`

Durum:

- `generateMetadata` ile page-level canonical var
- openGraph article metadata var
- noindex yok
- checked-in `public/sitemap-0.xml` icinde mevcut `4` slug'in hepsi var
- yine sitemap URL'leri slashli, canonical'lar slashsiz

Risk seviyesi:

- dusuk/orta
- temel coverage var, ama sitemap cikti formu config ile bile uyusmuyor

### `/teklif/*`

Route inventory teklif page sayisi: `7`

Durum:

- robots.txt: tum `/teklif/` disallow
- next-sitemap config: tum `/teklif/*` exclude
- `src/app/teklif/layout.tsx`: `index,follow`
- page-level canonical sadece `2` sayfada var:
  - `/teklif/alarm`
  - `/teklif/istanbul-ip-kamera-montaji`
- diger `5` sayfada metadata yok, canonical yok

Indexlenebilirlik yorumu:

- teknik sinyaller celiskili
- su an en guclu kesif sinyali robots.txt nedeniyle olumsuz
- ama `noindex` olmadigi icin URL dis kaynaklardan bulunursa index talebi tamamen kapanmis da degil

Kritik riskler:

- 5 sayfanin root canonical `/` miras etme riski
- 2 sayfanin `www` canonical kullanmasi
- tum grubun sitemap disinda kalmasi
- tum grubun robots tarafinda disallow olmasi

### `/[city]`

Route sayisi: `18`

Durum:

- `generateMetadata` ile canonical var: `${siteConfig.url}/${city.slug}`
- noindex yok
- route static params ile acikca uretiliyor
- checked-in sitemap'te `0/18`
- robots.txt tarafinda bu gruba ozel bir disallow yok

Indexlenebilirlik yorumu:

- teorik olarak indexlenebilir
- pratikte sitemap coverage olmadigi icin kesif sinyali zayif
- eger bu grup programmatic SEO cekirdegiyse mevcut sitemap coverage ciddi eksik

### `/[city]/[service]`

Route sayisi: `144`

Durum:

- `generateMetadata` ile canonical var: `${siteConfig.url}/${city.slug}/${service.slug}`
- noindex yok
- static params ile acikca uretiliyor
- checked-in sitemap'te `0/144`
- robots.txt tarafinda bu gruba ozel bir disallow yok

Indexlenebilirlik yorumu:

- teorik olarak indexlenebilir
- ama sitemap coverage sifir
- projedeki en buyuk SEO yatirimi bu grup gibi gorunmesine ragmen checked-in sitemap bunlari hic tasimiyor

Ek risk:

- dynamic SEO cekirdegi sitemap'te yoksa crawl butcesi ve kesif hizi ciddi zayiflayabilir

### `/api/*`

Durum:

- `src/app/api/lead/route.ts`
- `src/app/api/quote/route.ts`
- HTML page degiller
- `next-sitemap.config.js` icinde exclude
- `public/robots.txt` icinde disallow
- metadata/canonical/noindex baglaminda incelenmesi gerekmeyen teknik endpointler

Sonuc:

- bu grup SEO acisindan dogru bicimde public discovery disina alinmis

## 7. Kritik riskler

1. `public/sitemap.xml` kendi kendisini sitemap index icinde tekrar listeleyerek recursive/hatali sitemap yapiyor.
2. Checked-in sitemap yalnizca `17` URL iceriyor; `18` city ve `144` city/service sayfasi sitemap disinda.
3. `/teklif/*` grubunda robots, sitemap ve metadata sinyalleri birbiriyle acikca celisiyor.
4. Root layout canonical `/` degeri metadata'siz 5 teklif sayfasina siziyor olabilir.
5. `www` / non-`www` canonical ve OG URL uyumsuzlugu var.
6. Canonical slashsiz, sitemap URL'leri slashli; `trailingSlash` standardi belirgin degil.
7. `/istanbul-guvenlik-sistemi-kurulumu` canonical'i kendi URL'sini savunurken `next.config.ts` bu URL'yi `/istanbul`'a yonlendiriyor.
8. `next-sitemap.config.js` icindeki `transform` mantigi ile checked-in sitemap ciktilari uyusmuyor.
9. Kod tabanindaki encoding bozulmasi metadata string'lerine de yansiyor; SERP gorunurlugunu olumsuz etkileyebilir.

## 8. Oncelikli duzeltmeler

1. Tek bir indexability karari alin: `/teklif/*` indexlenecek mi, indexlenmeyecek mi.
   - indexlenecekse `robots.txt` disallow ve sitemap exclude kaldirilmali
   - indexlenmeyecekse metadata tarafina acik `noindex,follow` eklenmeli
2. `public/sitemap.xml` recursive self-reference duzeltilmeli.
3. Dynamic `/[city]` ve `/[city]/[service]` route'lari sitemap'e girecek sekilde gercek build ciktilari yenilenmeli ve kontrol edilmeli.
4. Metadata'siz 5 teklif sayfasina page-level canonical eklenmeli; root canonical sizmasi bitmeli.
5. Tum canonical, OG URL ve sitemap domainleri `siteConfig.url` ile tek standarda cekilmeli.
6. Trailing slash standardi netlestirilmeli; canonical, sitemap ve redirect davranisi ayni formu kullanmali.
7. `/istanbul-guvenlik-sistemi-kurulumu` icin redirect veya yasayan page kararindan biri secilmeli; ikisi ayni anda kalmamali.
8. `next-sitemap.config.js` transform kurallari ile gercek generated sitemap ciktilari uyumlu mu build sonrasi dogrulanmali.
9. Encoding bozuk metadata string'leri temizlenmeli.

## 9. Kisa audit ozeti

### Canonical tanimli route gruplari

- root `/`
- static pages'in buyuk kismi
- `/blog`
- `/blog/[slug]`
- `/teklif/alarm`
- `/teklif/istanbul-ip-kamera-montaji`
- `/[city]`
- `/[city]/[service]`

### Canonical eksik route gruplari

- `/teklif/apartman`
- `/teklif/isyeri`
- `/teklif/kamera`
- `/teklif/kamera/istanbul-ip-kamera-montaji`
- `/teklif/yangin`

### Sitemap'e giren sayfalar

Checked-in `public/sitemap-0.xml` baz alindiginda:

- root: `1`
- static pages: `11`
- blog list + mevcut blog slug'lari: `5`
- toplam: `17`

### Sitemap disinda kalan sayfalar

Checked-in `public/sitemap-0.xml` baz alindiginda:

- `/istanbul-guvenlik-sistemi-kurulumu`
- tum `/teklif/*` sayfalari: `7`
- tum `/[city]` sayfalari: `18`
- tum `/[city]/[service]` sayfalari: `144`
- `/api/*` endpointleri

### Noindex kullanimi

- page-level veya layout-level `noindex` kullanimi yok
- `index: false` / `follow: false` kullanimi yok

### En kritik 5 SEO riski

1. Recursive/hatali `public/sitemap.xml`
2. Dynamic city ve city/service SEO aginin sitemap'te tamamen yok olmasi
3. `/teklif/*` icin robots, sitemap ve metadata sinyallerinin celiskili olmasi
4. Metadata'siz teklif sayfalarinda root canonical `/` sizmasi riski
5. `www` / non-`www` ve slashli/slashsiz URL standardinin daginik olmasi
