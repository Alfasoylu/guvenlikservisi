# INTERNAL LINK ENGINE

## Kisa ozet

Bu degisiklikle programmatic SEO agi icin city hub ve city/service sayfalari arasina yeni bir internal linking katmani eklendi.

Ana hedefler:

- `/<city>` sayfalarindan `/<city>/<service>` sayfalarina daha guclu ve intent odakli link vermek
- `/<city>/<service>` sayfalarindan ayni sehirdeki diger hizmet sayfalarina linklemek
- `/<city>/<service>` sayfalarindan ayni hizmetin diger sehir varyasyonlarina yatay link vermek
- city/service aginin crawl kesfini ve otorite dagilimini guclendirmek

## Hangi sayfalara ne eklendi?

### `src/app/[city]/page.tsx`

Eklenen/gelistirilen mantik:

- mevcut service grid daha acik intent tasiyan bir blok haline getirildi
- her kart gercek `/<city>/<service>` route'una baglaniyor
- anchor text yapisi:
  - `{city.name} {service.name}`
- kart aciklamalari da sehir + hizmet kombinasyonunu tekrarliyor

Sonuc:

- city hub sayfasi artik tum city/service alt sayfalarina daha belirgin ve daha zengin icerikli ic link veriyor

### `src/app/[city]/[service]/page.tsx`

Eklenen yeni bloklar:

1. Sehir hub geri link bloku
   - ornek anchor: `{city.name} guvenlik sistemleri sayfasina don`
   - hedef: `/<city>`

2. Ayni sehirde ilgili diger hizmetler
   - mevcut sehirdeki diger tum servis sayfalarina link veriyor
   - anchor yapisi:
     - `{city.name} {otherService.name}`

3. Ayni hizmetin diger sehir sayfalari
   - mevcut sehir haric diger sehirlerden en fazla 12 link gosteriyor
   - anchor yapisi:
     - `{otherCity.name} {service.name}`

Sonuc:

- her city/service sayfasi hem dikey olarak city hub'a, hem yatay olarak ayni hizmetin diger sehirlerine, hem de ayni sehirdeki diger hizmetlere baglanmis oldu

## Internal link mantigi

### Link tipi 1: City hub -> city/service

Kaynak:

- `src/data/services.ts`

Uretim:

- mevcut sehir slug'i ile tum service slug'lari birlestiriliyor
- her link `/${city.slug}/${service.slug}` formatinda uretiliyor

Amac:

- sehir sayfasini merkezi hub haline getirmek
- botun city seviyesinden tum servis alt sayfalarina kolay inmesini saglamak

### Link tipi 2: City/service -> city hub geri baglantisi

Kaynak:

- aktif route parametresi `city.slug`

Uretim:

- tek net geri link: `/${city.slug}`

Amac:

- city/service sayfalarini yalniz birer leaf page olmaktan cikarmak
- botun ve kullanicinin sehir hub'a donmesini kolaylastirmak

### Link tipi 3: City/service -> ayni sehirde diger servisler

Kaynak:

- `src/data/services.ts`

Uretim:

- aktif service slug'i haric tum service'ler filtreleniyor
- hedef format: `/${city.slug}/${otherService.slug}`

Amac:

- ayni sehir altindaki servis cluster'ini birbirine baglamak
- internal relevance ve topic adjacency sinyalini guclendirmek

### Link tipi 4: City/service -> ayni hizmetin diger sehirleri

Kaynak:

- `src/data/cities.ts`

Uretim:

- aktif city haric diger sehirler filtreleniyor
- ilk 12 sehir gosteriliyor
- hedef format: `/${otherCity.slug}/${service.slug}`

Amac:

- ayni service cluster'i icinde yatay crawl patikasi acmak
- botun ayni hizmetin tum sehir varyasyonlarini daha hizli kesfetmesini saglamak

## Reusable component

Eklenen ortak component:

- `src/components/InternalLinkSection.tsx`

Ne yapiyor:

- baslik
- aciklama
- kart/grid yapisi
- gercek `Link` nesneleri

Nerede kullaniliyor:

- `src/app/[city]/page.tsx`
- `src/app/[city]/[service]/page.tsx`

Bu abstraction amacli minimal tutuldu; gereksiz state veya ekstra prop karmasasi eklenmedi.

## Crawl faydasi

Bu katmanin beklenen SEO etkileri:

- city hub sayfalari, alt servis sayfalarinin daha guclu kesif noktasi haline gelir
- city/service sayfalari artik tek yonlu degil, cok yonlu ic link dugumleri olur
- ayni service cluster'i sehirler arasinda baglandigi icin bot yeni sehir varyasyonlarini daha hizli bulur
- ayni sehirdeki servis cluster'i birbirine baglandigi icin crawl depth azalir
- anchor text'ler generic degil, dogrudan city + service intent tasidigi icin anlamsal sinyal guclenir

## Hangi link tipleri eklendi?

- city hub -> city/service
- city/service -> city hub
- city/service -> ayni sehirde diger servisler
- city/service -> ayni hizmetin diger sehirleri
- blog -> ilgili hizmet sayfalari (yapisal section)
- blog -> ilgili city/service para sayfalari (yapisal section)
- blog -> ilgili hizmet sayfalari (inline content linkleri)
- /sorun/\* -> ilgili hizmet sayfalari (relatedServiceLinks)
- national service hub -> city/service para sayfalari (yapisal cityServiceLinks section)

## Blog -> Para Sayfalari Link Katmani

### Eklenen mantik

`src/app/blog/[slug]/page.tsx` dosyasina "Ilgili Hizmetlerimiz" adli yapisal bir section eklendi.

Bu section:

- blog yazisinin `tags` alanini kullanarak ilgili hizmet sayfalarini belirler
- tag-to-service mapping ile national service hub ve Istanbul city/service para sayfalarina link verir
- maksimum 6 link gosterir, dedup edilmis
- hicbir tag eslesmezse fallback olarak kamera, alarm ve bakim sayfalarini gosterir
- makale CTA'si ile FAQ arasina yerlestirilmistir

### Link tipi: Blog -> national service hubs + city/service para sayfalari

Kaynak:

- blog post `tags` alani

Uretim:

- tag bazli eslestirme ile hedef servis URL'leri secilir
- ornek: `kamera` tag'i -> `/kamera-sistemi-kurulumu` + `/istanbul/kamera-sistemi-kurulumu`

Amac:

- bilgilendirici icerikten ticari sayfalara otorite akisi saglamak
- blog okuyucularini donusum sayfasina yonlendirmek
- crawl kesfini bilgilendirici -> ticari yonde guclendirmek

## National Service Hub -> City/Service Link Katmani

### Eklenen mantik

`ServicePageTemplate` kullanan 6 ulusal hub sayfasina `cityServiceLinks` alani eklendi.
`ServiceHubTemplate` kullanan 4 sayfada zaten `cityLinksSection` mevcuttu.
`bakim-servis-uzaktan-izleme` custom sayfasinda zaten hardcoded city/service linkleri vardi.

Toplam 11 ulusal hub sayfasi artik ilgili city/service para sayfalarina yapisal link veriyor.

### Etkilenen sayfalar (ServicePageTemplate — yeni eklenen)

- `/kamera-sistemi-kurulumu` -> 18 sehir icin `/{city}/kamera-sistemi-kurulumu`
- `/alarm-sistemi-kurulumu` -> 18 sehir icin `/{city}/alarm-sistemi-kurulumu`
- `/yangin-alarm-sistemi-kurulumu` -> 18 sehir icin `/{city}/yangin-alarm-sistemi-kurulumu`
- `/apartman-site-guvenlik-sistemi` -> 18 sehir icin `/{city}/apartman-site-guvenlik-sistemi`
- `/isyeri-guvenlik-sistemi` -> 18 sehir icin `/{city}/isyeri-guvenlik-sistemi`
- `/fabrika-depo-guvenlik-sistemi` -> 18 sehir icin `/{city}/fabrika-depo-guvenlik-sistemi`

### Render mantigi

- `cityServiceLinks` alani doluysa, generic "Hizmet Verdigimiz Sehirler" gridi yerine
  servis-spesifik kart tabli link blogu render edilir
- Her kart: MapPin icon + "Sehir hizmet sayfasi" badge + sehir/servis label + description + CTA
- Grid layout: 3 sutun (md ekranlar)

### Link tipi: National hub -> city/service para sayfalari

Kaynak:

- `cities` array'i (`@/data/cities`)

Uretim:

- `cities.map()` ile 18 sehir x 1 servis = 18 link uretilir
- hedef format: `/${city.slug}/${service-slug}`
- anchor text: `{city.name} {service.name}`

Amac:

- ulusal hub sayfalarindan sehir bazli para sayfalarina otorite akisi saglamak
- crawl kesfini ulusal -> yerel yonde guclendirmek
- kullaniciyi dogru sehir sayfasina hizli yonlendirmek

## Sonraki gelistirme firsatlari

- sehir bazli populerlik veya ticari oncelige gore diger sehir linklerini dinamik siralamak
- link bloklarina sayfa tipine gore farkli schema veya nav semantigi eklemek
- ileride link secimini Search Console / analytics verisiyle agirliklandirmak

---

## Top Service Page -> Problem / City Hub Katmani

### Eklenen mantik

Ulusal service page ve service hub sayfalarina iki yeni ic link katmani eklendi:

- ilgili problem-intent sayfalarina yonlendiren `problemLinks` / `problemLinksSection`
- one cikan sehir hub sayfalarina yonlendiren `cityHubLinks` / `cityHubLinksSection`

Bu katman, ozellikle en yuksek ticari deger tasiyan ulusal servis sayfalarinda
bilgilendirici sorun niyeti ile sehir hub navigasyonunu ayni template uzerinden
guclendirmek icin eklendi.

### Etkilenen sayfa aileleri

- `ServicePageTemplate` kullanan ulusal servis sayfalari
  - kamera kurulumu
  - alarm kurulumu
  - apartman/site guvenligi
  - isyeri guvenligi
  - fabrika/depo guvenligi
  - yangin alarm kurulumu
- `ServiceHubTemplate` kullanan servis hub sayfalari
  - kamera ariza servisi
  - kamera bakim sozlesmesi
  - uzaktan kamera izleme
  - kartli gecis sistemi kurulumu
- custom money page
  - `bakim-servis-uzaktan-izleme`

### Custom page notu

`bakim-servis-uzaktan-izleme` paylasilan template kullanmadigi icin ayni mantik
sayfa icinde manuel olarak uygulandi:

- il listesi plain text chip yerine gercek `/<city>` city hub linklerine cevrildi
- ilgili `/sorun/*` sayfalarina ayri bir blok eklendi
- mevcut ilgili hizmet ve city/service linkleri korundu
- ek olarak one cikan city hub linkleri eklendi

### Link tipi: Service -> Problem Page

Kaynak:

- `src/data/internal-links.ts`

Uretim:

- servis slug'ina gore ilgili `/sorun/*` URL'leri gruplanir
- template tarafinda ayri bir "sorun sayfalari" blogu olarak render edilir

Amac:

- ticari servis sayfasindan problem-intent cluster'ina gecis vermek
- kullanicinin "kurulum mu lazim, yoksa mevcut sistem arizali mi?" ayrimini hizlandirmak
- servis cluster'i ile sorun cluster'i arasindaki ic link agini guclendirmek

### Link tipi: Service -> City Hub

Kaynak:

- `src/data/internal-links.ts`

Uretim:

- one cikan 5 sehir hub URL'si (`/<city>`) secilir
- servis sayfalarinda ikincil konum navigasyonu olarak render edilir

Amac:

- ulusal servis sayfasindan sehir hub'lara dogrudan gecis vermek
- kullanicinin sehir bazli genel hizmet cluster'ina inmesini kolaylastirmak
- city hub -> city/service ve service -> city hub arasinda daha tutarli bir iki yonlu bag kurmak

---

## Bakım/Servis Ailesi Cross-Link Katmani

### Eklenen mantik

Bakım, servis ve teknik destek ailesi sayfaları arasına karşılıklı çapraz linkler eklendi.

**Aile sayfaları:**

- `/bakim-servis-uzaktan-izleme` (custom sayfa)
- `/kamera-ariza-servisi` (ServiceHubTemplate)
- `/kamera-sistemi-bakim-sozlesmesi` (ServiceHubTemplate)
- `/uzaktan-kamera-izleme` (ServiceHubTemplate)
- `/kamera-sistemi-kurulumu` (ServicePageTemplate — install→maintain zinciri)

### Yapılan degisiklikler

1. **`/bakim-servis-uzaktan-izleme`**: "Bakım ve Servis Kararını Destekleyen İlgili Sayfalar" bölümü
   eklendi — 4 sibling sayfaya (arıza servisi, bakım sözleşmesi, uzaktan izleme, kamera kurulumu)
   kart bazlı yapısal link veriyor

2. **3 ServiceHubTemplate sayfası** (`kamera-ariza-servisi`, `kamera-sistemi-bakim-sozlesmesi`,
   `uzaktan-kamera-izleme`): `relatedPages` array'lerine `/kamera-sistemi-kurulumu` eklendi —
   install→maintain zinciri tamamlandı

### Cross-link matrisi (guncel)

| FROM / TO                       | bakim-servis | bakim-sozlesmesi | uzaktan-izleme | ariza-servisi | kamera-kurulumu |
| ------------------------------- | :----------: | :--------------: | :------------: | :-----------: | :-------------: |
| bakim-servis-uzaktan-izleme     |      —       |        ✅        |       ✅       |      ✅       |       ✅        |
| kamera-sistemi-bakim-sozlesmesi |      ✅      |        —         |       ✅       |      ✅       |       ✅        |
| uzaktan-kamera-izleme           |      ✅      |        ✅        |       —        |      ✅       |       ✅        |
| kamera-ariza-servisi            |      ✅      |        ✅        |       ✅       |       —       |       ✅        |

Toplam: 16 yeni çapraz link (4 × 4 yön)

---

## İlçe Komşu Link Katmanı

### Eklenen mantik

Istanbul ilçe/servis sayfalarında (`/istanbul/{district}/{service}`) zaten mevcut olan
`nearbyDistricts` komşu link altyapısı, 4 yeni Tier-1 ilçe profili eklenerek genişletildi.

### Mevcut altyapi

`[city]/[district]/[service]/page.tsx` zaten iki tür iç link render ediyor:

- **Aynı ilçe, farklı servis** (`sameDistrictLinks`)
- **Aynı servis, yakın ilçeler** (`nearbyLinks`) — `profile.nearbyDistricts` üzerinden

### Eklenen ilce profilleri

| İlçe       | Komşular                                            |
| ---------- | --------------------------------------------------- |
| Şişli      | beşiktaş, kağıthane, beyoğlu, eyüpsultan            |
| Ümraniye   | ataşehir, sancaktepe, çekmeköy, üsküdar, beykoz     |
| Başakşehir | arnavutköy, esenyurt, bağcılar, sultangazi, avcılar |
| Pendik     | kartal, tuzla, sultanbeyli, sancaktepe, maltepe     |

### Artik calisan reciprocal linkler

- Kadıköy ↔ Ataşehir (önceden de vardı)
- Beşiktaş ↔ Şişli (yeni)
- Ataşehir ↔ Ümraniye (yeni)

### Etki

- 4 yeni ilçe × 3 servis = **12 yeni sayfa** (toplam 348 sayfa)
- 7 Tier-1 ilçe arasında komşuluk bazlı çapraz linkler aktif
- Tier-2/3 ilçe profilleri eklendiğinde komşu linkleri otomatik çalışacak
