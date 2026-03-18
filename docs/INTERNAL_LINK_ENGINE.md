# INTERNAL LINK ENGINE

## Kısa özet

Bu değişiklikle programmatic SEO ağı için city hub ve city/service sayfaları arasına yeni bir internal linking katmanı eklendi.

Ana hedefler:

- `/<city>` sayfalarından `/<city>/<service>` sayfalarına daha güçlü ve intent odaklı link vermek
- `/<city>/<service>` sayfalarından aynı şehirdeki diğer hizmet sayfalarına linklemek
- `/<city>/<service>` sayfalarından aynı hizmetin diğer şehir varyasyonlarına yatay link vermek
- city/service ağının crawl keşfini ve otorite dağılımını güçlendirmek

## Hangi sayfalara ne eklendi?

### `src/app/[city]/page.tsx`

Eklenen/geliştirilen mantık:

- mevcut service grid daha açık intent taşıyan bir blok haline getirildi
- her kart gerçek `/<city>/<service>` route'una bağlanıyor
- anchor text yapısı:
  - `{city.name} {service.name}`
- kart açıklamaları da şehir + hizmet kombinasyonunu tekrarlıyor

Sonuç:

- city hub sayfası artık tüm city/service alt sayfalarına daha belirgin ve daha zengin içerikli iç link veriyor

### `src/app/[city]/[service]/page.tsx`

Eklenen yeni bloklar:

1. Şehir hub geri link bloğu
   - örnek anchor: `{city.name} güvenlik sistemleri sayfasına dön`
   - hedef: `/<city>`

2. Aynı şehirde ilgili diğer hizmetler
   - mevcut şehirdeki diğer tüm servis sayfalarına link veriyor
   - anchor yapısı:
     - `{city.name} {otherService.name}`

3. Aynı hizmetin diğer şehir sayfaları
   - mevcut şehir hariç diğer şehirlerden en fazla 12 link gösteriyor
   - anchor yapısı:
     - `{otherCity.name} {service.name}`

Sonuç:

- her city/service sayfası hem dikey olarak city hub'a, hem yatay olarak aynı hizmetin diğer şehirlerine, hem de aynı şehirdeki diğer hizmetlere bağlanmış oldu

## Internal link mantığı

### Link tipi 1: City hub -> city/service

Kaynak:

- `src/data/services.ts`

Üretim:

- mevcut şehir slug'ı ile tüm service slug'ları birleştiriliyor
- her link `/${city.slug}/${service.slug}` formatında üretiliyor

Amaç:

- şehir sayfasını merkezi hub haline getirmek
- botun city seviyesinden tüm servis alt sayfalarına kolay inmesini sağlamak

### Link tipi 2: City/service -> city hub geri bağlantısı

Kaynak:

- aktif route parametresi `city.slug`

Üretim:

- tek net geri link: `/${city.slug}`

Amaç:

- city/service sayfalarını yalnız birer leaf page olmaktan çıkarmak
- botun ve kullanıcının şehir hub'a dönmesini kolaylaştırmak

### Link tipi 3: City/service -> aynı şehirde diğer servisler

Kaynak:

- `src/data/services.ts`

Üretim:

- aktif service slug'ı hariç tüm service'ler filtreleniyor
- hedef format: `/${city.slug}/${otherService.slug}`

Amaç:

- aynı şehir altındaki servis cluster'ını birbirine bağlamak
- internal relevance ve topic adjacency sinyalini güçlendirmek

### Link tipi 4: City/service -> aynı hizmetin diğer şehirleri

Kaynak:

- `src/data/cities.ts`

Üretim:

- aktif city hariç diğer şehirler filtreleniyor
- ilk 12 şehir gösteriliyor
- hedef format: `/${otherCity.slug}/${service.slug}`

Amaç:

- aynı service cluster'ı içinde yatay crawl patikası açmak
- botun aynı hizmetin tüm şehir varyasyonlarını daha hızlı keşfetmesini sağlamak

## Reusable component

Eklenen ortak component:

- `src/components/InternalLinkSection.tsx`

Ne yapıyor:

- başlık
- açıklama
- kart/grid yapısı
- gerçek `Link` nesneleri

Nerede kullanılıyor:

- `src/app/[city]/page.tsx`
- `src/app/[city]/[service]/page.tsx`

Bu abstraction amaçlı minimal tutuldu; gereksiz state veya ekstra prop karmaşası eklenmedi.

## Crawl faydası

Bu katmanın beklenen SEO etkileri:

- city hub sayfaları, alt servis sayfalarının daha güçlü keşif noktası haline gelir
- city/service sayfaları artık tek yönlü değil, çok yönlü iç link düğümleri olur
- aynı service cluster'ı şehirler arasında bağlandığı için bot yeni şehir varyasyonlarını daha hızlı bulur
- aynı şehirdeki servis cluster'ı birbirine bağlandığı için crawl depth azalır
- anchor text'ler generic değil, doğrudan city + service intent taşıdığı için anlamsal sinyal güçlenir

## Hangi link tipleri eklendi?

- city hub -> city/service
- city/service -> city hub
- city/service -> aynı şehirde diğer servisler
- city/service -> aynı hizmetin diğer şehirleri
- blog -> ilgili hizmet sayfaları (yapısal section)
- blog -> ilgili city/service para sayfaları (yapısal section)
- blog -> ilgili hizmet sayfaları (inline content linkleri)
- /sorun/\* -> ilgili hizmet sayfaları (relatedServiceLinks)
- national service hub -> city/service para sayfaları (yapısal cityServiceLinks section)

## Blog -> Para Sayfaları Link Katmanı

### Eklenen mantık

`src/app/blog/[slug]/page.tsx` dosyasına "İlgili Hizmetlerimiz" adlı yapısal bir section eklendi.

Bu section:

- blog yazısının `tags` alanını kullanarak ilgili hizmet sayfalarını belirler
- tag-to-service mapping ile national service hub ve Istanbul city/service para sayfalarına link verir
- maksimum 6 link gösterir, dedup edilmiş
- hiçbir tag eşleşmezse fallback olarak kamera, alarm ve bakım sayfalarını gösterir
- makale CTA'sı ile FAQ arasına yerleştirilmiştir

### Link tipi: Blog -> national service hubs + city/service para sayfaları

Kaynak:

- blog post `tags` alanı

Üretim:

- tag bazlı eşleştirme ile hedef servis URL'leri seçilir
- örnek: `kamera` tag'i -> `/kamera-sistemi-kurulumu` + `/istanbul/kamera-sistemi-kurulumu`

Amaç:

- bilgilendirici içerikten ticari sayfalara otorite akışı sağlamak
- blog okuyucularını dönüşüm sayfasına yönlendirmek
- crawl keşfini bilgilendirici -> ticari yönde güçlendirmek

## National Service Hub -> City/Service Link Katmanı

### Eklenen mantık

`ServicePageTemplate` kullanan 6 ulusal hub sayfasına `cityServiceLinks` alanı eklendi.
`ServiceHubTemplate` kullanan 4 sayfada zaten `cityLinksSection` mevcuttu.
`bakim-servis-uzaktan-izleme` custom sayfasında zaten hardcoded city/service linkleri vardı.

Toplam 11 ulusal hub sayfası artık ilgili city/service para sayfalarına yapısal link veriyor.

### Etkilenen sayfalar (ServicePageTemplate — yeni eklenen)

- `/kamera-sistemi-kurulumu` -> 18 şehir için `/{city}/kamera-sistemi-kurulumu`
- `/alarm-sistemi-kurulumu` -> 18 şehir için `/{city}/alarm-sistemi-kurulumu`
- `/yangin-alarm-sistemi-kurulumu` -> 18 şehir için `/{city}/yangin-alarm-sistemi-kurulumu`
- `/apartman-site-guvenlik-sistemi` -> 18 şehir için `/{city}/apartman-site-guvenlik-sistemi`
- `/isyeri-guvenlik-sistemi` -> 18 şehir için `/{city}/isyeri-guvenlik-sistemi`
- `/fabrika-depo-guvenlik-sistemi` -> 18 şehir için `/{city}/fabrika-depo-guvenlik-sistemi`

### Render mantığı

- `cityServiceLinks` alanı doluysa, generic "Hizmet Verdiğimiz Şehirler" gridi yerine
  servis-spesifik kart tablı link bloğu render edilir
- Her kart: MapPin icon + "Şehir hizmet sayfası" badge + şehir/servis label + description + CTA
- Grid layout: 3 sütun (md ekranlar)

### Link tipi: National hub -> city/service para sayfaları

Kaynak:

- `cities` array'i (`@/data/cities`)

Üretim:

- `cities.map()` ile 18 şehir x 1 servis = 18 link üretilir
- hedef format: `/${city.slug}/${service-slug}`
- anchor text: `{city.name} {service.name}`

Amaç:

- ulusal hub sayfalarından şehir bazlı para sayfalarına otorite akışı sağlamak
- crawl keşfini ulusal -> yerel yönde güçlendirmek
- kullanıcıyı doğru şehir sayfasına hızlı yönlendirmek

## Sonraki geliştirme fırsatları

- şehir bazlı popülerlik veya ticari önceliğe göre diğer şehir linklerini dinamik sıralamak
- link bloklarına sayfa tipine göre farklı schema veya nav semantiği eklemek
- ileride link seçimini Search Console / analytics verisiyle ağırlıklandırmak

---

## Top Service Page -> Problem / City Hub Katmanı

### Eklenen mantık

Ulusal service page ve service hub sayfalarına iki yeni iç link katmanı eklendi:

- ilgili problem-intent sayfalarına yönlendiren `problemLinks` / `problemLinksSection`
- öne çıkan şehir hub sayfalarına yönlendiren `cityHubLinks` / `cityHubLinksSection`

Bu katman, özellikle en yüksek ticari değer taşıyan ulusal servis sayfalarında
bilgilendirici sorun niyeti ile şehir hub navigasyonunu aynı template üzerinden
güçlendirmek için eklendi.

### Etkilenen sayfa aileleri

- `ServicePageTemplate` kullanan ulusal servis sayfaları
  - kamera kurulumu
  - alarm kurulumu
  - apartman/site güvenliği
  - işyeri güvenliği
  - fabrika/depo güvenliği
  - yangın alarm kurulumu
- `ServiceHubTemplate` kullanan servis hub sayfaları
  - kamera arıza servisi
  - kamera bakım sözleşmesi
  - uzaktan kamera izleme
  - kartlı geçiş sistemi kurulumu
- custom money page
  - `bakim-servis-uzaktan-izleme`

### Custom page notu

`bakim-servis-uzaktan-izleme` paylaşılan template kullanmadığı için aynı mantık
sayfa içinde manuel olarak uygulandı:

- il listesi plain text chip yerine gerçek `/<city>` city hub linklerine çevrildi
- ilgili `/sorun/*` sayfalarına ayrı bir blok eklendi
- mevcut ilgili hizmet ve city/service linkleri korundu
- ek olarak öne çıkan city hub linkleri eklendi

### Link tipi: Service -> Problem Page

Kaynak:

- `src/data/internal-links.ts`

Üretim:

- servis slug'ına göre ilgili `/sorun/*` URL'leri gruplanır
- template tarafında ayrı bir "sorun sayfaları" bloğu olarak render edilir

Amaç:

- ticari servis sayfasından problem-intent cluster'ına geçiş vermek
- kullanıcının "kurulum mu lazım, yoksa mevcut sistem arızalı mı?" ayrımını hızlandırmak
- servis cluster'ı ile sorun cluster'ı arasındaki iç link ağını güçlendirmek

### Link tipi: Service -> City Hub

Kaynak:

- `src/data/internal-links.ts`

Üretim:

- öne çıkan 5 şehir hub URL'si (`/<city>`) seçilir
- servis sayfalarında ikincil konum navigasyonu olarak render edilir

Amaç:

- ulusal servis sayfasından şehir hub'lara doğrudan geçiş vermek
- kullanıcının şehir bazlı genel hizmet cluster'ına inmesini kolaylaştırmak
- city hub -> city/service ve service -> city hub arasında daha tutarlı bir iki yönlü bağ kurmak

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

### Yapılan değişiklikler

1. **`/bakim-servis-uzaktan-izleme`**: "Bakım ve Servis Kararını Destekleyen İlgili Sayfalar" bölümü
   eklendi — 4 sibling sayfaya (arıza servisi, bakım sözleşmesi, uzaktan izleme, kamera kurulumu)
   kart bazlı yapısal link veriyor

2. **3 ServiceHubTemplate sayfası** (`kamera-ariza-servisi`, `kamera-sistemi-bakim-sozlesmesi`,
   `uzaktan-kamera-izleme`): `relatedPages` array'lerine `/kamera-sistemi-kurulumu` eklendi —
   install→maintain zinciri tamamlandı

### Cross-link matrisi (güncel)

| FROM / TO                       | bakim-servis | bakim-sozlesmesi | uzaktan-izleme | ariza-servisi | kamera-kurulumu |
| ------------------------------- | :----------: | :--------------: | :------------: | :-----------: | :-------------: |
| bakim-servis-uzaktan-izleme     |      —       |        ✅        |       ✅       |      ✅       |       ✅        |
| kamera-sistemi-bakim-sozlesmesi |      ✅      |        —         |       ✅       |      ✅       |       ✅        |
| uzaktan-kamera-izleme           |      ✅      |        ✅        |       —        |      ✅       |       ✅        |
| kamera-ariza-servisi            |      ✅      |        ✅        |       ✅       |       —       |       ✅        |

Toplam: 16 yeni çapraz link (4 × 4 yön)

---

## İlçe Komşu Link Katmanı

### Eklenen mantık

Istanbul ilçe/servis sayfalarında (`/istanbul/{district}/{service}`) zaten mevcut olan
`nearbyDistricts` komşu link altyapısı, 4 yeni Tier-1 ilçe profili eklenerek genişletildi.

### Mevcut altyapı

`[city]/[district]/[service]/page.tsx` zaten iki tür iç link render ediyor:

- **Aynı ilçe, farklı servis** (`sameDistrictLinks`)
- **Aynı servis, yakın ilçeler** (`nearbyLinks`) — `profile.nearbyDistricts` üzerinden

> **NOT:** `nearbyDistricts` verisi yalnızca `[city]/[district]/[service]` ilçe/servis rotasında
> komşu ilçe linkleri için kullanılır. Bu veri city veya city/service sayfalarındaki
> ilçe listeleme UI bloğunu KONTROL ETMEZ. Aşağıdaki "İlçe Listeleme UI Modeli" bölümüne bakın.

### Eklenen ilce profilleri

| İlçe       | Komşular                                            |
| ---------- | --------------------------------------------------- |
| Şişli      | beşiktaş, kağıthane, beyoğlu, eyüpsultan            |
| Ümraniye   | ataşehir, sancaktepe, çekmeköy, üsküdar, beykoz     |
| Başakşehir | arnavutköy, esenyurt, bağcılar, sultangazi, avcılar |
| Pendik     | kartal, tuzla, sultanbeyli, sancaktepe, maltepe     |

### Artık çalışan reciprocal linkler

- Kadıköy ↔ Ataşehir (önceden de vardı)
- Beşiktaş ↔ Şişli (yeni)
- Ataşehir ↔ Ümraniye (yeni)

### Etki

- 4 yeni ilçe × 3 servis = **12 yeni sayfa** (toplam 348 sayfa)
- 7 Tier-1 ilçe arasında komşuluk bazlı çapraz linkler aktif
- Tier-2/3 ilçe profilleri eklendiğinde komşu linkleri otomatik çalışacak

---

## İlçe Listeleme UI Modeli (Güncel)

> **DURUM: AKTİF — Mart 2026 itibarıyla**

### Eski model (DEPRECATED — geri dönmeyin)

Eski model şu şekilde çalışıyordu:

- `ServiceDistricts` bileşeni `primaryDistricts` ve `otherDistricts` prop'larını alıyordu
- UI'da "Öncelikli ilçe kapsamı" ve "Diğer hizmet bölgeleri" başlıklarıyla iki ayrı grup gösteriliyordu
- Veri katmanındaki `priority: "primary" | "secondary"` değeri doğrudan UI'a yansıyordu
- Yalnızca sınırlı sayıda (≤8) "diğer ilçe" gösteriliyordu

**Bu model artık kullanılmıyor. Geri döndürmeyin.**

### Yeni model (AKTİF)

Yeni model şu şekilde çalışır:

- `CityDistrictGridSection` bileşeni `districts` prop'u alır
- Başlık: "Hizmet Verdiğimiz İlçeler"
- Şehrin TÜM ilçeleri tek bir grid/blokta gösterilir
- Görünür UI'da ilçe öncelik gruplaması YOKTUR
- "Öncelikli ilçe" / "Diğer ilçe" / "Yakın ilçe" şeklinde UI ayrımı YOKTUR
- İlçeler alfabetik sıralıdır
- İlçeler şu an link DEĞİLDİR (statik `<div>` kartları)
- `enableLinks` prop'u `true` yapılarak gelecekte linkler etkinleştirilebilir

### Veri yapısı

Her ilçe objesi en az şunları içerir:

```ts
{
  name: string; // İlçe adı
  slug: string; // URL-safe slug
  citySlug: string; // Bağlı şehir slug'ı
}
```

### Kullanım alanları

- `src/app/[city]/page.tsx` — şehir hub sayfası
- `src/app/[city]/[service]/page.tsx` — şehir/servis sayfası

### Önemli ayrım

- Veri katmanında `priority`, `tier`, `nearbyDistricts` gibi ilişkiler **kalabilir** (routing, internal linking, SEO stratejisi için)
- Ancak bu veriler city veya city/service sayfalarındaki **görünür ilçe listeleme UI bloğunu** kontrol ETMEZ
- Görünür UI'da tüm ilçeler eşit, tek blok, önceliklendirme etiketi olmadan gösterilir

### Bu kural neden önemli?

- Eski "Öncelikli / Diğer" ayrımı yapay, zayıf ve görsel olarak kırık görünüyordu
- Tek birleşik blok daha temiz, daha güvenilir ve gelecekteki `city × district` routing modeline hazır
