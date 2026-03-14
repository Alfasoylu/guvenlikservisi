# METADATA MAP

## Yönetici Özeti

Repo App Router kullanıyor ve metadata iki layout ile 24 `page.tsx` dosyasına dağıtılmış durumda. Yerel metadata tanımı en güçlü alanlar `/`, servis landing page'leri, `/blog/[slug]`, `/[city]` ve `/[city]/[service]`; en zayıf alan ise `/teklif/*` altındaki 5 landing page çünkü bu dosyalarda yerel metadata yok ve root layout'taki canonical `/` değerini miras alma riski taşıyor.

Root layout `src/app/layout.tsx` içinde `metadataBase`, default `title`, `description`, `alternates.canonical`, `robots`, `openGraph`, `twitter`, `icons` tanımlı. `/teklif` alt ağacı ayrıca `src/app/teklif/layout.tsx` ile `robots` tanımlıyor ama title/description/canonical üretmiyor. Dinamik metadata şablonları üç yerde var: `/blog/[slug]`, `/[city]`, `/[city]/[service]`. `src/app/istanbul-guvenlik-sistemi-kurulumu/page.tsx` ayrıca özel bir landing page metadata üretse de `next.config.ts` içindeki redirect kuralı bu URL'yi `/istanbul` rotasına yönlendiriyor; bu yüzden sayfanın metadata'sı pratikte bypass ediliyor olabilir.

Terminal veya code page uyumsuzluğu nedeniyle bazı ortamlarda Türkçe karakterler bozuk görünebilir. Gerçek mojibake tespiti dosya içeriği üzerinden doğrulanmalıdır.

## Metadata Üreten Dosyalar

### Layout seviyeleri

#### `/*`
- Route pattern: `/*`
- Source file: `src/app/layout.tsx`
- Metadata type: `static metadata`
- Title mantığı: Default title `"Güvenlik Sistemi Kurulumu | Kamera, Alarm ve Geçiş Sistemleri"`; ayrıca template `%s | ${siteConfig.name}`.
- Description mantığı: `siteConfig.description`
- Canonical var mı: Evet, `alternates.canonical = "/"`
- Open Graph var mı: Evet, `siteConfig` üzerinden tam `openGraph` objesi
- Robots var mı: Evet, `index/follow` + `googleBot`
- Notlar: `metadataBase = new URL(siteConfig.url)`; `twitter`, `icons`, `verification` de burada. Yerel metadata tanımı olmayan sayfalar bunu miras alıyor.

#### `/teklif/*`
- Route pattern: `/teklif/*`
- Source file: `src/app/teklif/layout.tsx`
- Metadata type: `static metadata`
- Title mantığı: Yok; root layout'tan miras kalıyor
- Description mantığı: Yok; root layout'tan miras kalıyor
- Canonical var mı: Yok; root layout canonical değeri geçerli kalıyor
- Open Graph var mı: Yok; root layout'tan miras kalıyor
- Robots var mı: Evet, `index: true`, `follow: true`
- Notlar: `/teklif/*` altındaki metadata'sız sayfalar için kritik risk burada; çünkü robots var ama canonical override yok.

### Sayfa seviyeleri

#### `/`
- Route pattern: `/`
- Source file: `src/app/page.tsx`
- Metadata type: `static metadata`
- Title mantığı: Sabit homepage title
- Description mantığı: Sabit homepage description
- Canonical var mı: Evet, `https://guvenlikservisi.com`
- Open Graph var mı: Evet
- Robots var mı: Yerel yok; root layout'tan geliyor
- Notlar: `siteConfig` içerik içinde de kullanılıyor ama metadata string'leri büyük ölçüde sabit.

#### `/alarm-sistemi-kurulumu`
- Route pattern: `/alarm-sistemi-kurulumu`
- Source file: `src/app/alarm-sistemi-kurulumu/page.tsx`
- Metadata type: `static metadata`
- Title mantığı: Sabit servis title
- Description mantığı: Sabit servis description
- Canonical var mı: Evet
- Open Graph var mı: Evet
- Robots var mı: Yerel yok; root layout'tan geliyor
- Notlar: ServicePageTemplate kullanıyor.

#### `/apartman-site-guvenlik-sistemi`
- Route pattern: `/apartman-site-guvenlik-sistemi`
- Source file: `src/app/apartman-site-guvenlik-sistemi/page.tsx`
- Metadata type: `static metadata`
- Title mantığı: Sabit servis title
- Description mantığı: Sabit servis description
- Canonical var mı: Evet
- Open Graph var mı: Evet
- Robots var mı: Yerel yok; root layout'tan geliyor
- Notlar: ServicePageTemplate kullanıyor.

#### `/bakim-servis-uzaktan-izleme`
- Route pattern: `/bakim-servis-uzaktan-izleme`
- Source file: `src/app/bakim-servis-uzaktan-izleme/page.tsx`
- Metadata type: `static metadata`
- Title mantığı: Sabit ve uzun landing title
- Description mantığı: Sabit ve uzun landing description
- Canonical var mı: Evet, `https://www.guvenlikservisi.com/...`
- Open Graph var mı: Evet, image dahil
- Robots var mı: Yerel yok; root layout'tan geliyor
- Notlar: `twitter` var. Domain burada `www` ile yazılmış; root `siteConfig.url` ise `https://guvenlikservisi.com`.

#### `/blog`
- Route pattern: `/blog`
- Source file: `src/app/blog/page.tsx`
- Metadata type: `static metadata`
- Title mantığı: Sabit blog liste title
- Description mantığı: Sabit blog liste description
- Canonical var mı: Evet
- Open Graph var mı: Hayır
- Robots var mı: Yerel yok; root layout'tan geliyor
- Notlar: Sadece canonical tanımlı; OG tamamen root layout'tan kalıyor.

#### `/blog/[slug]`
- Route pattern: `/blog/[slug]`
- Source file: `src/app/blog/[slug]/page.tsx`
- Metadata type: `generateMetadata`
- Title mantığı: `post.title + " | Blog"`
- Description mantığı: `post.excerpt`
- Canonical var mı: Evet, `https://guvenlikservisi.com/blog/${slug}`
- Open Graph var mı: Evet, `post.title`, `post.excerpt`, `publishedTime`, `modifiedTime`, `post.image`
- Robots var mı: Yerel yok; root layout'tan geliyor
- Notlar: Veri kaynağı `src/data/blog-posts.ts`. `post` bulunamazsa boş metadata dönüyor, ardından sayfa `notFound()` çağırıyor.

#### `/fabrika-depo-guvenlik-sistemi`
- Route pattern: `/fabrika-depo-guvenlik-sistemi`
- Source file: `src/app/fabrika-depo-guvenlik-sistemi/page.tsx`
- Metadata type: `static metadata`
- Title mantığı: Sabit servis title
- Description mantığı: Sabit servis description
- Canonical var mı: Evet
- Open Graph var mı: Evet
- Robots var mı: Yerel yok; root layout'tan geliyor
- Notlar: ServicePageTemplate kullanıyor.

#### `/hakkimizda`
- Route pattern: `/hakkimizda`
- Source file: `src/app/hakkimizda/page.tsx`
- Metadata type: `static metadata`
- Title mantığı: Sabit about title
- Description mantığı: Sabit about description
- Canonical var mı: Evet
- Open Graph var mı: Hayır
- Robots var mı: Yerel yok; root layout'tan geliyor
- Notlar: `siteConfig` sayfa içeriğini de besliyor.

#### `/iletisim`
- Route pattern: `/iletisim`
- Source file: `src/app/iletisim/page.tsx`
- Metadata type: `static metadata`
- Title mantığı: Sabit contact title
- Description mantığı: Sabit contact description
- Canonical var mı: Evet
- Open Graph var mı: Hayır
- Robots var mı: Yerel yok; root layout'tan geliyor
- Notlar: `siteConfig` iletişim alanlarında yoğun kullanılıyor.

#### `/istanbul-guvenlik-sistemi-kurulumu`
- Route pattern: `/istanbul-guvenlik-sistemi-kurulumu`
- Source file: `src/app/istanbul-guvenlik-sistemi-kurulumu/page.tsx`
- Metadata type: `generateMetadata`
- Title mantığı: `sehirData[sehir].name` ile `"İstanbul Güvenlik Sistemi Kurulumu | Kamera + Alarm Montajı"` şablonu
- Description mantığı: `sehirData[sehir].name` ile şehir bazlı sabit şablon
- Canonical var mı: Evet, `https://guvenlikservisi.com/${sehir}-guvenlik-sistemi-kurulumu`
- Open Graph var mı: Hayır
- Robots var mı: Yerel yok; root layout'tan geliyor
- Notlar: `sehir` sabit `"istanbul"`. `next.config.ts` bu URL'yi `/istanbul`'a redirect ediyor; bu özel sayfanın metadata'sı canlı trafikte etkisiz kalabilir.

#### `/isyeri-guvenlik-sistemi`
- Route pattern: `/isyeri-guvenlik-sistemi`
- Source file: `src/app/isyeri-guvenlik-sistemi/page.tsx`
- Metadata type: `static metadata`
- Title mantığı: Sabit servis title
- Description mantığı: Sabit servis description
- Canonical var mı: Evet
- Open Graph var mı: Evet
- Robots var mı: Yerel yok; root layout'tan geliyor
- Notlar: ServicePageTemplate kullanıyor.

#### `/kamera-sistemi-kurulumu`
- Route pattern: `/kamera-sistemi-kurulumu`
- Source file: `src/app/kamera-sistemi-kurulumu/page.tsx`
- Metadata type: `static metadata`
- Title mantığı: Sabit servis title
- Description mantığı: Sabit servis description
- Canonical var mı: Evet
- Open Graph var mı: Evet
- Robots var mı: Yerel yok; root layout'tan geliyor
- Notlar: ServicePageTemplate kullanıyor.

#### `/kartli-gecis-ve-turnike-sistemi`
- Route pattern: `/kartli-gecis-ve-turnike-sistemi`
- Source file: `src/app/kartli-gecis-ve-turnike-sistemi/page.tsx`
- Metadata type: `static metadata`
- Title mantığı: Sabit servis title
- Description mantığı: Sabit servis description
- Canonical var mı: Evet
- Open Graph var mı: Evet
- Robots var mı: Yerel yok; root layout'tan geliyor
- Notlar: Statik route slug'ı `ve-turnike` içeriyor; `src/data/services.ts` slug'ı ise `kartli-gecis-sistemi-kurulumu`. Statik ve dinamik route/canonical sözlüğü uyumsuz.

#### `/paketler-ve-fiyatlandirma`
- Route pattern: `/paketler-ve-fiyatlandirma`
- Source file: `src/app/paketler-ve-fiyatlandirma/page.tsx`
- Metadata type: `static metadata`
- Title mantığı: Sabit paket title
- Description mantığı: Sabit paket description
- Canonical var mı: Evet
- Open Graph var mı: Hayır
- Robots var mı: Yerel yok; root layout'tan geliyor
- Notlar: Breadcrumb schema var ama metadata alanı minimal.

#### `/teklif/alarm`
- Route pattern: `/teklif/alarm`
- Source file: `src/app/teklif/alarm/page.tsx`
- Metadata type: `static metadata`
- Title mantığı: Sabit İstanbul alarm landing title
- Description mantığı: Sabit landing description
- Canonical var mı: Evet, `https://www.guvenlikservisi.com/teklif/alarm`
- Open Graph var mı: Evet, image dahil
- Robots var mı: Yerel yok; `/teklif/layout.tsx` üzerinden geliyor
- Notlar: `twitter` var. `www` alan adı kullanıyor.

#### `/teklif/apartman`
- Route pattern: `/teklif/apartman`
- Source file: `src/app/teklif/apartman/page.tsx`
- Metadata type: `inherited`
- Title mantığı: Root layout default title/template
- Description mantığı: Root layout `siteConfig.description`
- Canonical var mı: Yerel yok; root layout canonical `/` kalıyor
- Open Graph var mı: Yerel yok; root layout OG kalıyor
- Robots var mı: Evet, `/teklif/layout.tsx` üzerinden `index/follow`
- Notlar: LandingPageTemplate var ama metadata yok. Bu route canonical açısından zayıf.

#### `/teklif/istanbul-ip-kamera-montaji`
- Route pattern: `/teklif/istanbul-ip-kamera-montaji`
- Source file: `src/app/teklif/istanbul-ip-kamera-montaji/page.tsx`
- Metadata type: `static metadata`
- Title mantığı: Sabit İstanbul IP kamera landing title
- Description mantığı: Sabit landing description
- Canonical var mı: Evet, `https://www.guvenlikservisi.com/teklif/istanbul-ip-kamera-montaji`
- Open Graph var mı: Evet, image dahil
- Robots var mı: Yerel yok; `/teklif/layout.tsx` üzerinden geliyor
- Notlar: `twitter` var. `www` alan adı kullanıyor.

#### `/teklif/isyeri`
- Route pattern: `/teklif/isyeri`
- Source file: `src/app/teklif/isyeri/page.tsx`
- Metadata type: `inherited`
- Title mantığı: Root layout default title/template
- Description mantığı: Root layout `siteConfig.description`
- Canonical var mı: Yerel yok; root layout canonical `/` kalıyor
- Open Graph var mı: Yerel yok; root layout OG kalıyor
- Robots var mı: Evet, `/teklif/layout.tsx` üzerinden `index/follow`
- Notlar: LandingPageTemplate var ama metadata yok.

#### `/teklif/kamera`
- Route pattern: `/teklif/kamera`
- Source file: `src/app/teklif/kamera/page.tsx`
- Metadata type: `inherited`
- Title mantığı: Root layout default title/template
- Description mantığı: Root layout `siteConfig.description`
- Canonical var mı: Yerel yok; root layout canonical `/` kalıyor
- Open Graph var mı: Yerel yok; root layout OG kalıyor
- Robots var mı: Evet, `/teklif/layout.tsx` üzerinden `index/follow`
- Notlar: LandingPageTemplate var ama metadata yok.

#### `/teklif/kamera/istanbul-ip-kamera-montaji`
- Route pattern: `/teklif/kamera/istanbul-ip-kamera-montaji`
- Source file: `src/app/teklif/kamera/istanbul-ip-kamera-montaji/page.tsx`
- Metadata type: `inherited`
- Title mantığı: Root layout default title/template
- Description mantığı: Root layout `siteConfig.description`
- Canonical var mı: Yerel yok; root layout canonical `/` kalıyor
- Open Graph var mı: Yerel yok; root layout OG kalıyor
- Robots var mı: Evet, `/teklif/layout.tsx` üzerinden `index/follow`
- Notlar: İçerik olarak ayrı landing page ama metadata tanımı yok.

#### `/teklif/yangin`
- Route pattern: `/teklif/yangin`
- Source file: `src/app/teklif/yangin/page.tsx`
- Metadata type: `inherited`
- Title mantığı: Root layout default title/template
- Description mantığı: Root layout `siteConfig.description`
- Canonical var mı: Yerel yok; root layout canonical `/` kalıyor
- Open Graph var mı: Yerel yok; root layout OG kalıyor
- Robots var mı: Evet, `/teklif/layout.tsx` üzerinden `index/follow`
- Notlar: LandingPageTemplate var ama metadata yok.

#### `/yangin-alarm-sistemi-kurulumu`
- Route pattern: `/yangin-alarm-sistemi-kurulumu`
- Source file: `src/app/yangin-alarm-sistemi-kurulumu/page.tsx`
- Metadata type: `static metadata`
- Title mantığı: Sabit servis title
- Description mantığı: Sabit servis description
- Canonical var mı: Evet
- Open Graph var mı: Evet
- Robots var mı: Yerel yok; root layout'tan geliyor
- Notlar: ServicePageTemplate kullanıyor.

#### `/[city]`
- Route pattern: `/[city]`
- Source file: `src/app/[city]/page.tsx`
- Metadata type: `generateMetadata`
- Title mantığı: `${city.name} Güvenlik Sistemleri | Kamera, Alarm, Montaj ve Teklif`
- Description mantığı: `${city.name}` ile başlayan sabit şehir şablonu
- Canonical var mı: Evet, `${siteConfig.url}/${city.slug}`
- Open Graph var mı: Evet, aynı title/description/canonical ile
- Robots var mı: Yerel yok; root layout'tan geliyor
- Notlar: `generateStaticParams()` ile `src/data/cities.ts` içindeki tüm şehirler için üretiliyor. Geçersiz slug için sadece `"Sayfa Bulunamadı | Güvenlik Servisi"` title dönüyor.

#### `/[city]/[service]`
- Route pattern: `/[city]/[service]`
- Source file: `src/app/[city]/[service]/page.tsx`
- Metadata type: `generateMetadata`
- Title mantığı: `${city.name} ${service.name} | Ücretsiz Keşif ve Montaj`
- Description mantığı: `${city.name}` + `${service.name.toLowerCase()}` ile servis/şehir şablonu
- Canonical var mı: Evet, `${siteConfig.url}/${city.slug}/${service.slug}`
- Open Graph var mı: Evet, aynı title/description/canonical ile
- Robots var mı: Yerel yok; root layout'tan geliyor
- Notlar: `generateStaticParams()` şehir x servis kartesyen çarpımı üretiyor. Veri kaynakları `src/data/cities.ts` ve `src/data/services.ts`.

### Metadata üretmeyen ama route oluşturan dosyalar

#### `404`
- Route pattern: `not-found`
- Source file: `src/app/not-found.tsx`
- Metadata type: `inherited`
- Title mantığı: Yerel metadata yok
- Description mantığı: Yerel metadata yok
- Canonical var mı: Yerel yok
- Open Graph var mı: Yerel yok
- Robots var mı: Root layout'tan geliyor
- Notlar: 404 için özel metadata tanımı yok.

#### `API`
- Route pattern: `/api/lead`, `/api/quote`
- Source file: `src/app/api/lead/route.ts`, `src/app/api/quote/route.ts`
- Metadata type: `none`
- Title mantığı: Uygulanmaz
- Description mantığı: Uygulanmaz
- Canonical var mı: Uygulanmaz
- Open Graph var mı: Uygulanmaz
- Robots var mı: Uygulanmaz
- Notlar: Route handler; HTML metadata üretmez.

## Global Metadata Kaynakları

- `src/data/site-config.ts`
  Ana global kaynak. `siteConfig.url`, `name`, `description`, `ogImage`, `phone`, `city`, `address`, analytics ID'leri ve istatistikler buradan geliyor. Root layout metadata'sının omurgası bu dosya.

- `src/data/cities.ts`
  `/[city]` ve `/[city]/[service]` route envanterini besliyor. `siteConfig.serviceCityCount` ve `serviceCities` de buradan türetiliyor.

- `src/data/services.ts`
  `/[city]/[service]` metadata şablonunda `service.name` ve `service.slug` burada tanımlı. Aynı zamanda slug sözlüğü ile statik servis route dosyaları arasında uyumsuzluk barındırıyor.

- `src/data/blog-posts.ts`
  `/blog/[slug]` metadata'sının tamamını besliyor: `title`, `excerpt`, `publishedAt`, `updatedAt`, `image`.

- `src/lib/schema.ts`
  HTML `<head>` metadata üretmiyor ama JSON-LD schema URL'lerini `siteConfig.url` ve `siteConfig.ogImage` ile kuruyor. SEO veri modelinin ikincil kaynağı.

- `next-sitemap.config.js`
  Sitemap ve `robots.txt` üretimi için ayrı SEO katmanı. `/teklif/*` ve `/api/*` sitemap dışı bırakılmış; `robots.txt` tarafında `/teklif/` ve `/api/` disallow ediliyor. Bu, uygulama metadata'sındaki `index: true` ile çelişiyor.

- `next.config.ts`
  Redirect kuralları metadata hedeflerini etkiliyor. Özellikle `/${city.slug}-guvenlik-sistemi-kurulumu -> /${city.slug}` kuralı, `src/app/istanbul-guvenlik-sistemi-kurulumu/page.tsx` canonical mantığıyla çatışıyor.

## Özel Şablon Mantıkları

- `city` sayfaları (`src/app/[city]/page.tsx`)
  `generateStaticParams()` tüm şehir slug'larını `src/data/cities.ts` içinden üretir. `generateMetadata()` ilgili city objesini bulur, title ve description'ı şehir adı ile kurar, canonical'ı `${siteConfig.url}/${city.slug}` yapar, ardından aynı verilerle `openGraph` üretir.

- `city/service` sayfaları (`src/app/[city]/[service]/page.tsx`)
  Şehir ve servis sözlükleri birleştirilir. Title `${city.name} ${service.name} | Ücretsiz Keşif ve Montaj`, description ise `${service.name.toLowerCase()}` kullanan sabit şablondur. Canonical ve OG URL doğrudan `city.slug + service.slug` kombinasyonundan çıkar.

- `blog slug` sayfaları (`src/app/blog/[slug]/page.tsx`)
  Slug ile `getBlogPostBySlug` çağrılır. Metadata doğrudan post objesinden üretilir: title `post.title | Blog`, description `post.excerpt`, canonical `/blog/${slug}`, OG type `article`, zaman damgaları `publishedAt/updatedAt`, image ise `post.image`.

- `istanbul-guvenlik-sistemi-kurulumu` özel landing page'i (`src/app/istanbul-guvenlik-sistemi-kurulumu/page.tsx`)
  Route statik ama metadata fonksiyonla üretiliyor. `sehir = "istanbul"` sabiti ve `sehirData` sözlüğü kullanılıyor. Sadece `title`, `description`, `canonical` dönüyor; OG, twitter ve robots yok. Ayrıca redirect çakışması var.

## Eksikler ve Riskler

- `/teklif/apartman`, `/teklif/isyeri`, `/teklif/kamera`, `/teklif/kamera/istanbul-ip-kamera-montaji`, `/teklif/yangin` için yerel metadata yok. Bu sayfalar root layout title/description/canonical değerlerini miras alıyor; canonical büyük olasılıkla `/` kalıyor.

- Uygulama metadata'sında `/teklif/*` için `robots.index = true`, fakat `next-sitemap.config.js` içindeki `robots.txt` bu klasörü `Disallow` ediyor. Crawl/index sinyali çelişkili.

- `src/app/istanbul-guvenlik-sistemi-kurulumu/page.tsx` ile `next.config.ts` redirect kuralı çakışıyor. Sayfanın canonical'ı kendi URL'sini gösterirken redirect o URL'yi `/istanbul`'a taşıyor.

- `siteConfig.url` `https://guvenlikservisi.com` iken bazı sayfalar canonical ve OG URL'lerinde `https://www.guvenlikservisi.com` kullanıyor. `www`/non-`www` standardı dağınık.

- `src/app/layout.tsx` root canonical'ı `/` olarak tanımlıyor. Yerel canonical vermeyen bütün sayfalarda ana sayfa canonical'ı sızma riski var.

- `src/data/services.ts` slug `kartli-gecis-sistemi-kurulumu`, statik route ise `kartli-gecis-ve-turnike-sistemi`. Dinamik şehir/servis sayfaları ile statik servis sayfası farklı URL sözlükleri kullanıyor.

- `/blog`, `/hakkimizda`, `/iletisim`, `/paketler-ve-fiyatlandirma`, `/istanbul-guvenlik-sistemi-kurulumu` sayfalarında yerel `openGraph` yok; root layout OG'si kalıyor. Bu sayfalar paylaşımda generic görünebilir.

- Hiçbir sayfada `noindex` uygulanmıyor. 404 ve teklif deneysel landing'leri için bile page-level `robots` ayrımı yok.

- Encoding bozukluğu metadata string'lerinde görünüyor; title/description çıktısına bozuk karakter olarak yansıyabilir.

## Öncelikli Düzeltmeler

- `/teklif/*` altındaki metadata'sız 5 sayfaya ayrı `title`, `description`, `canonical`, tercihen `openGraph` eklenmeli.

- Root layout canonical `/` kullanımının alt sayfalara sızmasını engellemek için ya page-level canonical kapsamı tamamlanmalı ya da root canonical sadece homepage'e taşınmalı.

- `/teklif/*` için gerçek niyet netleştirilmeli: indexlenecekse `next-sitemap.config.js` ve `robots.txt` kuralı kaldırılmalı; indexlenmeyecekse page/layout metadata tarafında `noindex` tanımlanmalı.

- `www` ve non-`www` tek domaine indirilmeli; `siteConfig.url`, page canonical'ları, OG URL'leri ve sitemap aynı standarda çekilmeli.

- `istanbul-guvenlik-sistemi-kurulumu` route'u için redirect ve canonical stratejisi tek karara bağlanmalı: ya sayfa yaşayacak ya redirect kalacak, ikisi birden değil.

- `kartli-gecis` slug sözlüğü temizlenmeli; statik servis route, servis data slug'ı, internal link'ler ve canonical yapısı aynı URL'yi kullanmalı.

- Encoding bozulması metadata string'lerinden başlayarak düzeltilmeli; bu sorun title, description, OG alt text ve içerik metinlerine yayılmış durumda.

## Audit Özeti

- Metadata tanımlı sayfa sayısı: 19 `page.tsx` dosyası. Mevcut static params ile yaklaşık 182 route instance.
- Canonical tanımlı sayfa sayısı: 19 `page.tsx` dosyası. Mevcut static params ile yaklaşık 182 route instance.
- Robots/noindex tanımlı sayfa sayısı: 0 `page.tsx`; 2 `layout.tsx` dosyasında `robots` var, `noindex` yok.
- Metadata'sız page sayısı: 5 `page.tsx` dosyası. Hepsi `/teklif/*` altında.

- Route grup gücü:
  `/[city]`, `/[city]/[service]`, ana servis landing'leri ve `/blog/[slug]` güçlü.
- Route grup zayıflığı:
  `/teklif/*` parçası en zayıf alan; metadata coverage eksik ve robots/canonical stratejisi tutarsız.
