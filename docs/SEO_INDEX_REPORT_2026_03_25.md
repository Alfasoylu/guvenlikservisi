# SEO İndeksleme Raporu — guvenlikservisi.com
**Tarih:** 25 Mart 2026
**Site Yaşı:** ~15 gün
**Kaynak:** Google Search Console + Repo Analizi

---

## Özet Tablo

| Metrik | Değer |
|---|---|
| Dizine eklenen sayfalar | **25** |
| Dizine eklenmeyen sayfalar | **274** |
| Keşfedildi - dizine eklenmedi | **264** |
| Tarandı - dizine eklenmedi | **2** |
| Yönlendirmeli sayfa | **4** |
| Doğru standart etikete sahip alternatif | **3** |
| Yeniden yönlendirme hatası | **1** |
| www sitemap URL sayısı | **627** |
| non-www sitemap URL sayısı | **269** |

---

## 1. Birincil Neden: Site Henüz 15 Günlük

Bu en büyük ve kaçınılmaz faktördür. Google yeni sitelere sınırlı crawl bütçesi tahsis eder. Güvenilirlik sinyali (backlink, yaş, marketo sinyali) olmayan bir sitede 627 URL'nin tamamının anında indekslenmesi **beklenmemelidir**.

264 sayfanın "Keşfedildi - şu anda dizine eklenmiş değil" statüsü şu anlama gelir:
- Google sitemapi okudu, URL'leri gördü
- Ancak bu sayfaları **taramadı bile** — sıraya aldı
- Sıraya alınan bu sayfalar ancak Google sitenin değerli olduğuna karar verdikçe taranacak

Bu durum kendi başına bir hata değil, **yeni site doğrunu**dur. Ama aşağıdaki teknik sorunlar bu süreci uzatıyor.

---

## 2. İki Sitemap — Kritik Sinyal Kirliliği

**Tespit:**
- `https://www.guvenlikservisi.com/sitemap.xml` → **627 URL** (21 Mar 2026 gönderildi)
- `https://guvenlikservisi.com/sitemap.xml` → **269 URL** (14 Mar 2026 gönderildi)

**Sorun:**
Canonical domain `https://www.guvenlikservisi.com` olarak tanımlı (`src/data/site-config.ts`). Non-www sitemap bu canonical ile çelişiyor. Google iki farklı versiyondan URL taradığında hangi versiyonun kazanan olduğunu çözmek için ekstra kaynak harcıyor.

**Ek Sorun:**
Non-www sitemap'taki 269 URL'nin büyük bölümü eski yapıdan geliyor. Bu URL'lerin bir kısmı 301 ile yönlendirilmiş ama sitemap'ta hâlâ yer alıyor olabilir — bu, `ROBOTS_SITEMAP_CANONICAL_AUDIT.md` ve `SITEMAP_ENGINE.md`'de belgelenen yönetişim kurallarını ihlal eder.

**RISK_ANALYSIS.md Referansı:** Duplicate Content Risk, Crawl Budget Risk

---

## 3. 627 URL — Yeni Site İçin Aşırı Crawl Yükü

**Mevcut URL Dökümü (tahmini):**

| Route Ailesi | Tahmini URL Sayısı |
|---|---|
| Ana sayfa + statik sayfalar | ~15 |
| Ulusal hizmet hub'ları | ~8 |
| Şehir hub'ları (18 şehir) | 18 |
| Şehir × servis (18 × 13) | ~234 |
| İstanbul ilçe × servis | ~312 |
| Blog yazıları | ~15 |
| Problem sayfaları | 12 |
| **Toplam** | **~627** |

**Sorun:**
Sıfır backlink, sıfır domain authority olan 15 günlük bir site için Google'ın günlük crawl bütçesi son derece kısıtlıdır. 627 URL'nin tamamı bu bütçeyle rekabet ettiğinde Google en değerli gördüğü sayfaları önce tarar, gerisini sıraya alır.

**RISK_ANALYSIS.md Referansı:** Crawl Budget Risk — "Medium today, Critical once district and segment route families go live at scale."

Mevcut durumda bu risk "bugünden kritik" seviyesine geldi çünkü İstanbul ilçe sayfaları (312 URL) sitemap'ta var ve yeni site için bu sayı çok yüksek.

---

## 4. Thin Content / Template Sapması Riski — Aktif

**Tespit:**
`src/lib/service-page-factory.ts` içindeki `getSEOContentBlocks(city)` fonksiyonu kamera kurulumuna odaklı genel bloklar üretiyor. Diğer servisler bu fonksiyondan genel içerik miras alıyor.

`src/app/[city]/[service]/page.tsx` içindeki `buildDefaultServiceSpecificContent()` fonksiyonu servis-spesifik derinlik yoksa genel şablona düşüyor.

**Sonuç:**
Google, 234 şehir × servis sayfasını taradığında bunların büyük bölümünün yapısal olarak aynı olduğunu fark edebilir. Bu `RISK_ANALYSIS.md`'de "Thin Content" ve "Template Spam" olarak belgelenmiş en kritik iki risktir.

**Mevcut Erken Uyarı Sinyalleri (aktif):**
- Birden fazla yapısal olarak aynı sayfanın sıraya alınması ✓
- 2 sayfa "Tarandı - dizine eklenmedi" statüsünde ✓
- 264 sayfa "Keşfedildi - dizine eklenmedi" (Google taramayı erteliyor) ✓

---

## 5. Bakım Odaklı / Kurulum Odaklı Local Text Eksikliği

**BACKLOG.md (P1.2) Referansı:**
```
- [ ] bakım odaklı local text
- [ ] kurulum odaklı local text
- [ ] teknik servis odaklı local text
```

Bu üç backlog kalemi tamamlanmamış. Bu durum şehir sayfalarında yerel farklılaşmayı zayıflatıyor. Aynı şehir introsu, farklı servis türleri için tekrar kullanılıyor → içerik benzersizliği düşüyor → Google indekslemeyi erteliyor.

---

## 6. Yeniden Yönlendirme Hatası (1 Sayfa)

Search Console'da 1 sayfa "Yeniden yönlendirme hatası" statüsünde. Bu sayfa muhtemelen:
- Redirect zinciri (A → B → C) içeren eski bir URL, veya
- `next.config.ts`'deki legacy redirect'lerden birinin kırık hedefi

`ROUTE_INVENTORY.md`'de belgelenen legacy redirect listesiyle karşılaştırılarak tespit edilmeli.

---

## 7. Doğru Standart Etikete Sahip Alternatif Sayfa (3 Sayfa)

3 sayfa canonical başka bir URL'ye işaret ediyor ve Google bu sayfaları kazanan URL üzerinden değerlendiriyor. Bu teknik olarak doğru davranış — `src/lib/canonical.ts`'deki `resolveCanonicalPath()` beklenen şekilde çalışıyor. Ancak bu 3 sayfanın sitemap'ta yer alıp almadığı kontrol edilmeli.

---

## Aksiyon Planı

### ÖNCE (Bu Hafta) — Teknik Engelleri Kaldır

#### A1 — Non-WWW Sitemap'ı Search Console'dan Kaldır
**Kapsam:** Operasyonel (kod değil)
**Yapılacak:** Google Search Console > Site Haritaları > `guvenlikservisi.com/sitemap.xml` → Sil
**Neden:** İki sitemap canonical karışıklığı ve crawl bütçesi israfı yaratıyor. Tek kazanan: `www.guvenlikservisi.com/sitemap.xml`
**Zaman:** 10 dakika

#### A2 — Redirect Hatasını Tespit Et ve Düzelt
**Kapsam:** `next.config.ts` redirect listesi
**Yapılacak:**
1. Search Console > Dizin oluşturma > Sayfa sayısı > "Yeniden yönlendirme hatası" — URL'yi tespit et
2. `next.config.ts`'deki redirect zincirini kontrol et
3. Gerekirse redirect hedefini düzelt veya ara adımı kaldır
**BACKLOG Referansı:** P0.1 — robots, sitemap, canonical, noindex kontrol tablosu

#### A3 — Canonical Alternate Sayfaları Sitemap'tan Çıkar
**Kapsam:** `src/lib/sitemap.ts`
**Yapılacak:** 3 "doğru standart etikete sahip alternatif" sayfanın sitemap'a girip girmediğini `check-seo-governance.mjs` çıktısıyla kontrol et. Giriyor ise `buildSitemapEntries()` filtresine ekle.
**Neden:** Canonical'ı başka yere işaret eden sayfa sitemap'ta olmamalı.

---

### SONRA (Bu Ay) — İçerik Farklılaştırma

#### B1 — En Yüksek Değerli 20 Şehir/Servis Sayfasında İçerik Derinliği Artır
**Kapsam:** `BACKLOG.md P1.2` — bakım/kurulum/teknik servis odaklı local text
**Hangi sayfalar öncelikli:**
- `/istanbul/kamera-sistemi-kurulumu`
- `/istanbul/alarm-sistemi-kurulumu`
- `/istanbul/bakim-servis-uzaktan-izleme`
- `/ankara/kamera-sistemi-kurulumu`
- `/izmir/kamera-sistemi-kurulumu`
- `PAGE_VALUE_MAP.md`'deki ilk 10 money page

**Yapılacak:**
- Şehir özel intro'yu servis tipiyle hizala (kamera kurulum introsu ≠ bakım servisi introsu)
- Her sayfada en az 4/6 içerik bloğu kuralını (`SEO_STRATEGY.md`) uygula
- FAQ bloklarını servis tipine göre farklılaştır (`faq-bank.ts` içinden seçici kullan)

**BACKLOG Referansı:** P1.2 eksik kalemler, P1.3 eksik kalemler

#### B2 — İstanbul İlçe Sayfaları İçin Aşamalı İndeksleme Politikası Uygula
**Kapsam:** `src/data/seo/istanbul-district-content.ts`
**Sorun:** 39 ilçe × 8 servis = 312 potansiyel URL yeni site için çok fazla
**Yapılacak:**
- İlçeleri Tier-1 (7 ilçe) → Tier-2 → Tier-3 olarak sırala (zaten `INTERNAL_LINK_ENGINE.md`'de tanımlı)
- Tier-2 ve Tier-3 ilçeleri geçici olarak `noindex` et veya sitemap'tan çıkar
- Sadece Tier-1 ilçeleri (Beyoğlu, Şişli, Kadıköy, Beşiktaş, Ataşehir, Maltepe, Pendik) aktif indexable tut
**RISK_ANALYSIS.md Referansı:** "Keep future district pages noindex until they have district-specific demand"

#### B3 — Blog İç Link Zincirini Para Sayfalarına Bağla
**Kapsam:** `INTERNAL_LINK_ENGINE.md` — "Blog → national service hubs + Istanbul city/service pages"
**Yapılacak:** Her blog yazısına en az 2 adet şehir/servis money page linki ekle, anchor text'i `seo_keywords.md`'deki commercial intent terimleriyle hizala
**BACKLOG Referansı:** `INTERNAL_LINK_ENGINE.md` blog bağlantı katmanı

---

### ORTA VADE (1–2 Ay) — Otorite İnşa

#### C1 — Google Business Profile Oluştur
**Kapsam:** Off-site (kod dışı)
**Neden:** Local SEO otoritesi ve Google'ın yerel alaka sinyali
**Yapılacak:** Perpa adresini doğrula, hizmet kategorilerini ekle, ilk 10 müşteriden yorum iste

#### C2 — İlk Backlink Seti
**Kapsam:** Off-site (kod dışı)
**Öncelikli kaynaklar:** Sektör dizinleri, istanbul ticaret sicil, TÜRKAK veya benzeri resmi sicil listeleri, yerel basın (güvenlik sektörü)
**Neden:** Domain authority olmadan Google 627 URL'yi indekslemeyecek

#### C3 — Core Web Vitals Kontrolü
**Kapsam:** Performans
**Yapılacak:** PageSpeed Insights ile top 5 money page'i test et. LCP, CLS, INP değerlerini ölç. Next.js 16 + Vercel altyapısı bu konuda güçlü ama kamera/video içerikleri LCP'yi olumsuz etkileyebilir.

---

## Öncelik Matrisi

| Aksiyon | Etki | Çaba | Öncelik |
|---|---|---|---|
| A1 — Non-www sitemap sil | Yüksek | Çok düşük | **HEMEN** |
| A2 — Redirect hatasını düzelt | Orta | Düşük | **HEMEN** |
| A3 — Canonical alternate'leri sitemap'tan çıkar | Orta | Düşük | **BU HAFTA** |
| B2 — İstanbul ilçe noindex politikası | Yüksek | Orta | **BU AY** |
| B1 — Top 20 sayfa içerik derinliği | Yüksek | Yüksek | **BU AY** |
| B3 — Blog iç link zinciri | Orta | Düşük | **BU AY** |
| C1 — Google Business Profile | Yüksek | Düşük | **BU AY** |
| C2 — Backlink seti | Yüksek | Orta | **1-2 AY** |
| C3 — Core Web Vitals | Orta | Orta | **1-2 AY** |

---

## Beklenti Yönetimi

| Zaman Dilimi | Beklenen Durum |
|---|---|
| Şimdi (15. gün) | 25 indekslenen sayfa — normal |
| 30. gün | 50–100 sayfa arası — teknik sorunlar çözülürse |
| 60. gün | 100–200 sayfa — içerik derinliği arttıkça |
| 90. gün | 200–400 sayfa + ilk organik tıklamalar |
| 6. ay | Money page'lerde ilk top-10 sıralamalar |

**Not:** `SEO_STRATEGY.md`'nin "Sert Gerçek" bölümü net söylüyor:
> "Bu proje ilk 6 ayda SEO ile değil, Ads ile para kazanmalı."
> SEO ikinci motordur. 15. günde 264 sayfanın sıraya alınmış olması bir başarısızlık değil, **beklenen sürecin başlangıcıdır**.

---

## Search Console İzleme Planı

Her hafta kontrol edilecek metrikler:

- [ ] İndekslenen sayfa sayısı artışı
- [ ] "Keşfedildi - dizine eklenmedi" sayısının azalması
- [ ] Crawl stats (Ayarlar > Kütük > Tarama istatistikleri) — günlük crawl sayısı
- [ ] URL Denetimi ile top 5 money page'in bireysel durumu
- [ ] Yeni yönlendirme veya canonical hataları

---

*Bu rapor `docs/RISK_ANALYSIS.md`, `docs/BACKLOG.md`, `docs/SEO_STRATEGY.md`, `docs/SITEMAP_ENGINE.md`, `docs/INTERNAL_LINK_ENGINE.md` ve `docs/ROBOTS_SITEMAP_CANONICAL_AUDIT.md` kapsamı dahilindedir.*
