# SITEMAP ENGINE

## Ozet

Bu repo artik sitemap'i `next-sitemap` ile degil, Next.js App Router metadata route'u olan `src/app/sitemap.ts` uzerinden uretiyor.

Uretim tipi:

- `export default function sitemap(): MetadataRoute.Sitemap`

Temel amac:

- Google botun tum SEO odakli landing ve programmatic route'lari kesfetmesini saglamak
- `cities.ts` ve `services.ts` veri kaynaklarini kullanarak `/<city>` ve `/<city>/<service>` URL agini dinamik uretmek
- checked-in `public/sitemap-0.xml` gibi stale artefaktlara bagimliligi bitirmek

## Kaynaklar

Sitemap su veri kaynaklarini kullaniyor:

- `src/data/site-config.ts`
  - temel domain: `siteConfig.url`
- `src/data/blog-posts.ts`
  - `/blog/[slug]` URL'leri
- `src/data/cities.ts`
  - `/<city>` URL'leri
- `src/data/services.ts`
  - `/<city>/<service>` kombinasyonlari

Ayrica sitemap motoru icinde iki statik dizi var:

- `staticServiceRoutes`
- `teklifRoutes`

Bunlar repo icindeki mevcut gercek route'lara gore tanimlandi.

## Kapsanan URL gruplari

### Ana URL'ler

- `/`
- `/blog`

Not:

- Kullanici isteginde `/teklif` de geciyordu ancak repoda `src/app/teklif/page.tsx` olmadigi icin gercek bir `/teklif` route'u yok.
- Bu nedenle sitemap'e 404 uretecek hayali bir URL eklenmedi.
- Bunun yerine mevcut `/teklif/*` landing page'leri sitemap'e dahil edildi.

### Static service pages

Su route'lar sitemap'e dahil:

- `/alarm-sistemi-kurulumu`
- `/apartman-site-guvenlik-sistemi`
- `/bakim-servis-uzaktan-izleme`
- `/fabrika-depo-guvenlik-sistemi`
- `/isyeri-guvenlik-sistemi`
- `/kamera-sistemi-kurulumu`
- `/kartli-gecis-ve-turnike-sistemi`
- `/yangin-alarm-sistemi-kurulumu`

Bilerek dahil edilmeyen route:

- `/istanbul-guvenlik-sistemi-kurulumu`

Sebep:

- `next.config.ts` bu URL'yi kalici olarak `/istanbul` rotasina yonlendiriyor
- redirect veren URL'yi sitemap'e koymak yerine hedef canonical route'un sitemap'te olmasi daha dogru

### Blog detay URL'leri

`src/data/blog-posts.ts` icindeki her slug icin:

- `/blog/[slug]`

### Teklif landing page'leri

- `/teklif/alarm`
- `/teklif/apartman`
- `/teklif/istanbul-ip-kamera-montaji`
- `/teklif/isyeri`
- `/teklif/kamera`
- `/teklif/kamera/istanbul-ip-kamera-montaji`
- `/teklif/yangin`

### Programmatic city URL'leri

`src/data/cities.ts` icindeki her sehir icin:

- `/<city>`

### Programmatic city + service URL'leri

`src/data/cities.ts` x `src/data/services.ts`

Uretilen kombinasyon:

- `city count * service count`
- mevcut repo verisine gore: `18 * 8 = 144` URL

## Priority ve changefreq mantigi

Sitemap'te kullanilan mantik:

- `/`
  - `priority: 1.0`
  - `changeFrequency: daily`
- `/blog`
  - `priority: 0.8`
  - `changeFrequency: weekly`
- static service pages
  - `priority: 0.85`
  - `changeFrequency: weekly`
- `/teklif/*`
  - `priority: 0.85`
  - `changeFrequency: weekly`
- `/blog/[slug]`
  - `priority: 0.75`
  - `changeFrequency: monthly`
  - `lastModified`: `updatedAt` varsa o, yoksa `publishedAt`
- `/<city>`
  - `priority: 0.7`
  - `changeFrequency: weekly`
- `/<city>/<service>`
  - `priority: 0.9`
  - `changeFrequency: weekly`

## Eski sistem nasil devre disi birakildi?

Asagidaki degisiklikler yapildi:

- `src/app/sitemap.ts` eklendi
- `package.json` icindeki build script su hale getirildi:
  - eski: `next build && next-sitemap`
  - yeni: `next build`
- `next-sitemap.config.js` kaldirildi
- stale artefaktlar kaldirildi:
  - `public/sitemap.xml`
  - `public/sitemap-0.xml`

Bu sayede sitemap artik checked-in XML dosyalarindan degil, Next.js tarafinda runtime/build-time metadata route'undan servis edilecek.

## Beklenen sonuc

Yeni sitemap motoru su SEO yuzeyini kapsar:

- home
- blog liste
- blog detay yazilari
- static service pages
- teklif landing page'leri
- city pages
- city/service pages

Boylece Google bot programmatic SEO agini sitemap uzerinden kesfedebilir.
