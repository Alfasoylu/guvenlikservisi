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

## Sonraki gelistirme firsatlari

- sehir bazli populerlik veya ticari oncelige gore diger sehir linklerini dinamik siralamak
- static service page'lerden ilgili city/service kombinasyonlarina secili derin linkler eklemek
- blog yazilarindan ilgili city/service sayfalarina baglanti katmani kurmak
- link bloklarina sayfa tipine gore farkli schema veya nav semantigi eklemek
- ileride link secimini Search Console / analytics verisiyle agirliklandirmak
