# GüvenlikServisi.com — Master Backlog
## Türkiye’nin En Büyük Güvenlik Sistemleri SEO ve Lead Platformu

GuvenlikServisi.com, Türkiye genelinde güvenlik sistemleri kurulumu, bakım, teknik servis ve kurumsal güvenlik çözümleri için organik trafik toplayan, yüksek intentli ziyaretçileri lead’e dönüştüren ve zaman içinde şehir × ilçe × hizmet × arıza × sektör bazlı sayfa ağıyla “güvenlik sistemleri” kategorisinde en güçlü SEO varlığını kurmayı hedefleyen bir Next.js + Vercel tabanlı lead generation platformudur. Nihai hedef sadece trafik değil; site yönetimleri, fabrikalar, depolar, zincir mağazalar ve kurumsal tesislerden yüksek marjlı bakım sözleşmeleri, keşif talepleri ve proje lead’leri toplamaktır.

---

## Kullanım Kuralı

- `[x]` = tamamlandı
- `[ ]` = başlanmadı / eksik
- Her yeni sohbette tamamlanan backlog ID’lerini yaz
- Yeni görev gelirse bu dosyaya ekle, sohbet içinde kaybetme
- Öncelik sırası: gelir getiren sistem > veri doğruluğu > SEO ölçekleme > operasyon > marketplace

---

## Ana Hedefler

### 12 Aylık Ana Hedef
- [ ] Türkiye güvenlik sistemleri kategorisinde en güçlü programmatic SEO altyapısını kurmak
- [ ] 200 ana SEO keyword cluster’ı oluşturmak
- [ ] 81 şehir kapsaması oluşturmak
- [ ] 970 ilçe kapsaması oluşturmak
- [ ] 20 ana servis template’i oluşturmak
- [ ] 16.000+ indekslenebilir, kaliteli, farklılaştırılmış landing page üretmek
- [ ] Aylık 10.000+ organik oturum seviyesine çıkmak
- [ ] Aylık 150+ nitelikli lead üretmek
- [ ] Aylık bakım sözleşmesi pipeline’ı kurmak
- [ ] Türkiye güvenlik sistemleri lead platformuna dönüşmek

### Başarı Metrikleri
- [ ] Organik tıklama
- [ ] İndekslenen sayfa sayısı
- [ ] İlk 10 sıra sayısı
- [ ] İlk 3 sıra sayısı
- [ ] Lead başına maliyet
- [ ] Organik lead dönüşüm oranı
- [ ] Tekliften satışa dönüşüm oranı
- [ ] Aylık recurring bakım sözleşme adedi
- [ ] Şehir bazlı lead dağılımı
- [ ] Servis bazlı kapanış oranı

---

# P0 — Mevcut Sistem Envanteri ve Gerçeklik Kontrolü

## P0.1 Repo ve Teknik Taban
- [x] Next.js proje yapısı kurulu
- [x] Vercel deploy mantığı kurulu
- [x] `next-sitemap` build zincirine bağlı
- [x] `docs/` klasörü mevcut
- [x] Şehir × servis route yapısı mevcut
- [x] Repo içindeki tüm route’ların tam envanterini çıkar
- [x] Tüm mevcut landing page URL listesini oluştur
- [x] Tüm mevcut metadata mantığını tek dosyada haritala
- [x] Tüm schema üreten util’leri haritala
- [x] `robots`, `sitemap`, canonical, noindex kontrol tablosu oluştur
- [x] Hangi sayfalar para getirir, hangileri sadece trafik getirir ayrımını yap

## P0.2 İş Modeli Netliği
- [x] Öncelikli para sayfalarını listele
- [x] Kurulum vs bakım vs teknik servis vs arıza servis ayrımını netleştir
- [x] “SEO trafik” ile “yüksek intent lead” keywordlerini ayır
- [x] En yüksek LTV segmentleri belirle:
  - [x] site yönetimleri
  - [x] fabrikalar
  - [x] depolar
  - [x] AVM / zincir mağaza
  - [x] plazalar / kurumsal ofisler
- [x] Hangi servisler recurring gelir üretir listele
- [x] Hangi servisler sadece tek seferlik gelir üretir listele

## P0.3 Ölümcül Riskler
- [ ] Thin content riski dokümante et
- [ ] Duplicate content riski dokümante et
- [ ] Crawl budget riski dokümante et
- [ ] Index bloat riski dokümante et
- [ ] Yanlış keyword seçimi riski dokümante et
- [ ] Zayıf iç linkleme riski dokümante et
- [ ] Düşük dönüşümlü trafik riski dokümante et
- [ ] Spam / sahte lead riski dokümante et
- [ ] Tek şablon spamı riski dokümante et

---

# P1 — Veri Mimarisi ve Programmatic SEO Motorunun Temeli

## P1.1 Tek Source of Truth Veri Yapısı
- [x] `src/data/seo/` klasörü oluştur
- [x] `services.ts` veri modelini genişlet
- [x] `cities.ts` veri modelini normalize et
- [x] `districts.ts` dosyasını oluştur
- [x] `keywords.ts` dosyasını oluştur
- [x] `segments.ts` dosyasını oluştur
- [x] `pain-points.ts` dosyasını oluştur
- [x] `faq-bank.ts` dosyasını oluştur
- [x] `trust-elements.ts` dosyasını oluştur
- [x] `schema-map.ts` dosyasını oluştur

## P1.2 Şehir Veri Modeli
Her şehir için:
- [ ] slug
- [ ] ad
- [ ] plaka
- [ ] bölge
- [ ] nüfus segmenti
- [ ] sanayi yoğunluğu
- [ ] site / residence yoğunluğu
- [ ] ticari bölge yoğunluğu
- [ ] hizmet öncelik sırası
- [ ] ana ilçe listesi
- [ ] komşu şehirler
- [ ] local intro text
- [ ] bakım odaklı local text
- [ ] kurulum odaklı local text
- [ ] teknik servis odaklı local text

## P1.3 İlçe Veri Modeli
Her ilçe için:
- [ ] slug
- [ ] ad
- [ ] citySlug
- [ ] segment türü (konut / sanayi / karma)
- [ ] site yönetimi yoğunluğu
- [ ] sanayi / depo yoğunluğu
- [ ] kısa local intro
- [ ] local CTA varyasyonu
- [ ] servis öncelikleri
- [ ] yakın ilçe ilişkileri
- [ ] breadcrumb ilişkisi

## P1.4 Servis Veri Modeli
20 ana servis için veri modeli:
- [ ] servis adı
- [ ] slug
- [ ] ana intent tipi
- [ ] ticari intent skoru
- [ ] lead değeri
- [ ] recurring potansiyeli
- [ ] uygun sektörler
- [ ] uygun bina tipleri
- [ ] primary CTA
- [ ] form başlığı
- [ ] hero başlığı
- [ ] hero alt başlığı
- [ ] servis açıklaması
- [ ] fayda blokları
- [ ] süreç blokları
- [ ] FAQ bankası
- [ ] schema tipi
- [ ] internal link hedefleri

## P1.5 20 Ana Servis Listesi
- [ ] kamera-sistemi-kurulumu
- [ ] ip-kamera-kurulumu
- [ ] cctv-kurulumu
- [ ] guvenlik-kamera-montaji
- [ ] kamera-sistemi-bakim-sozlesmesi
- [ ] guvenlik-sistemi-bakim-sozlesmesi
- [ ] site-kamera-sistemi-bakim
- [ ] fabrika-guvenlik-sistemi-bakim
- [ ] nvr-bakim-servisi
- [ ] kamera-ariza-servisi
- [ ] alarm-sistemi-kurulumu
- [ ] alarm-sistemi-bakim
- [ ] yangin-alarm-bakim-sozlesmesi
- [ ] gecis-kontrol-sistemi
- [ ] kartli-gecis-sistemi-kurulumu
- [ ] uzaktan-kamera-izleme
- [ ] guvenlik-sistemi-teknik-servis
- [ ] depo-guvenlik-sistemi-kurulumu
- [ ] plaza-guvenlik-sistemi-kurulumu
- [ ] avm-guvenlik-sistemi-cozumleri

## P1.6 200 Keyword Cluster Sistemi
- [ ] 200 keyword’ü niyet bazlı kümelere ayır
- [ ] Her keyword için intent etiketi tanımla:
  - [ ] commercial
  - [ ] transactional
  - [ ] informational
  - [ ] local
  - [ ] troubleshooting
- [ ] Her keyword için hedef sayfa tipi tanımla
- [ ] Her keyword için primary page seç
- [ ] Keyword cannibalization tablosu oluştur
- [ ] Cluster parent-child ilişkilerini kur

### Keyword Cluster Türleri
- [ ] kurulum
- [ ] bakım
- [ ] teknik servis
- [ ] arıza
- [ ] sözleşme
- [ ] fiyat / teklif
- [ ] site yönetimi
- [ ] fabrika
- [ ] depo
- [ ] mağaza
- [ ] apartman
- [ ] NVR / kayıt cihazı
- [ ] IP kamera
- [ ] alarm
- [ ] yangın alarm
- [ ] kartlı geçiş
- [ ] uzaktan izleme
- [ ] gece görüş / dış ortam
- [ ] mobil izleme
- [ ] kurumsal güvenlik çözümleri

---

# P2 — Route Mimarisi ve URL Stratejisi

## P2.1 Nihai URL Katmanları
- [ ] `/[city]/[service]`
- [ ] `/[city]/[district]/[service]`
- [ ] `/hizmet/[service]`
- [ ] `/bakim/[service]`
- [ ] `/teknik-servis/[service]`
- [ ] `/cozum/[segment]/[service]`
- [ ] `/blog/[slug]`
- [ ] `/rehber/[slug]`
- [ ] `/ariza/[issue]`
- [ ] `/marka/[brand]/[service]` (ileri aşama)

## P2.2 URL Kararları
- [ ] URL’leri kısa tut
- [ ] Türkçe karakter normalize et
- [ ] tire standardı belirle
- [x] canonical mantigini netlestir
- [x] programmatic route guardrails ve valid route source utility kur
- [ ] district page canonical kuralları yaz
- [ ] benzer intent’li sayfalar için unique primary URL belirle
- [ ] duplicate URL varyasyonlarını 301 ile topla

## P2.3 Route Önceliği
- [ ] Önce en yüksek intent şehir × servis sayfaları
- [ ] Sonra ilçe × servis sayfaları
- [ ] Sonra sektör × servis sayfaları
- [ ] Sonra arıza / problem çözüm sayfaları
- [ ] Sonra marka / entegrasyon sayfaları

---

# P3 — İçerik Motoru: Thin Content Değil, Rank Eden İçerik

## P3.1 Sayfa Şablonunun Genişletilmesi
Her programmatic sayfada aşağıdaki bloklar bulunmalı:
- [ ] Hero
- [ ] local intro
- [ ] servis kapsamı
- [ ] hangi işletmeler için uygun
- [ ] bakım / kurulum / servis senaryoları
- [ ] süreç
- [ ] fiyatı etkileyen faktörler
- [ ] neden profesyonel ekip
- [ ] local district mention
- [ ] sık arızalar / riskler
- [ ] sık sorulan sorular
- [ ] CTA
- [x] form
- [ ] breadcrumb
- [ ] schema

## P3.2 Unique Content Varyasyonu
- [ ] city bazlı intro varyasyonu
- [ ] district bazlı intro varyasyonu
- [ ] service bazlı hero varyasyonu
- [ ] segment bazlı blok varyasyonu
- [ ] bina tipi bazlı blok varyasyonu
- [ ] sorun tipi bazlı blok varyasyonu
- [ ] CTA varyasyonu
- [ ] FAQ varyasyonu
- [ ] title varyasyonu
- [ ] meta description varyasyonu

## P3.3 AI Content Safety Kuralları
- [ ] her sayfa için minimum unique text oranı belirle
- [ ] aynı paragrafın 81 şehirde kopyalanmasını engelle
- [ ] aynı FAQ setinin 970 ilçede tekrarını azalt
- [ ] AI metnini veri destekli şablonla birleştir
- [ ] boş şehir / ilçe metinleri üretmeyi engelle
- [ ] abartılı veya ispatlanamaz vaatleri yasakla
- [ ] “en iyi / en ucuz / garanti ilk sayfa” gibi spam dili kaldır

## P3.4 Ticari Intent İçerik Önceliği
- [ ] “bakım sözleşmesi” sayfaları
- [ ] “teknik servis” sayfaları
- [ ] “arıza servisi” sayfaları
- [ ] “site yönetimi” sayfaları
- [ ] “fabrika” sayfaları
- [ ] “depo” sayfaları
- [ ] “kurumsal teklif” sayfaları

## P3.5 Yardımcı İçerik Katmanı
- [ ] “kamera görüntü yok” içerikleri
- [ ] “NVR kayıt yapmıyor” içerikleri
- [ ] “IP kamera offline” içerikleri
- [ ] “hard disk arızası” içerikleri
- [ ] “kamera bakım neden gerekli” içerikleri
- [ ] “site yönetimi güvenlik checklist” içerikleri
- [ ] “fabrika güvenlik kamera bakım planı” içerikleri

---

# P4 — Metadata, Schema ve SERP Optimizasyonu

## P4.1 Metadata Standardı
Her sayfa için:
- [ ] unique title
- [ ] unique meta description
- [ ] H1 tekil ve niyet odaklı
- [ ] Open Graph title
- [ ] Open Graph description
- [ ] canonical
- [ ] robots kuralı
- [ ] alternates yapısı

## P4.2 Title Şablonları
- [ ] şehir + servis
- [ ] ilçe + servis
- [ ] servis + şehir + teklif
- [ ] bakım sözleşmesi + şehir
- [ ] teknik servis + şehir
- [ ] arıza servisi + şehir

## P4.3 Schema Katmanı
- [ ] LocalBusiness
- [ ] Service
- [ ] FAQPage
- [ ] BreadcrumbList
- [ ] Organization
- [ ] WebPage
- [ ] Product benzeri yanlış schema kullanımını engelle
- [ ] review / rating uydurma schema eklemeyi yasakla

## P4.4 Rich Result Disiplini
- [ ] FAQ schema ile gerçekten sayfadaki içerik eşleşsin
- [ ] breadcrumb schema URL ile tam uyumlu olsun
- [ ] local business schema tüm city page’lerde tutarlı olsun
- [ ] servis sayfası ile teklif sayfası schema rolleri ayrı olsun

---

# P5 — Programmatic Internal Linking Engine

## P5.1 Temel İç Link Katmanları
- [x] şehir sayfasından ana servis sayfalarına link
- [x] servis sayfasından şehir sayfalarına link
- [ ] şehir sayfasından ilçe sayfalarına link
- [ ] ilçe sayfasından komşu ilçe sayfalarına link
- [ ] bakım sayfasından teknik servis sayfalarına link
- [ ] arıza içeriklerinden bakım sözleşmesi sayfalarına link
- [ ] blogdan para sayfalarına link
- [ ] footer’da kör link spamı yapma

## P5.2 Contextual Link Sistemi
- [x] “benzer hizmetler”
- [ ] “yakın ilçelerde hizmet”
- [x] “aynı şehirde diğer çözümler”
- [ ] “site yönetimleri için ilgili hizmetler”
- [ ] “fabrikalar için ilgili hizmetler”
- [ ] “sık görülen arızalar”
- [ ] “bakım gerektiren sistemler”

## P5.3 Hub Sayfalar
- [ ] Türkiye güvenlik sistemleri ana hub sayfası
- [ ] bakım hizmetleri hub
- [ ] teknik servis hub
- [ ] şehirler hub
- [ ] ilçeler hub
- [ ] sektör çözümleri hub
- [ ] arıza rehberi hub

---

# P6 — Sitemap, Crawl ve Index Yönetimi

## P6.1 Sitemap Mimarisi
- [x] `next-sitemap` kurulu
- [ ] sitemap index oluştur
- [ ] service sitemap
- [ ] city-service sitemap
- [ ] district-service sitemap
- [ ] blog sitemap
- [ ] troubleshooting sitemap
- [ ] noindex sayfaları sitemap dışına al
- [ ] düşük kaliteli taslak URL’leri dışarıda tut

## P6.2 Crawl Budget Disiplini
- [ ] zayıf sayfaları indexe açma
- [ ] noindex karar matrisi oluştur
- [ ] parametreli URL üretimini engelle
- [ ] duplicate canonical hatalarını yakala
- [ ] yetim sayfaları tespit et
- [ ] 404 ve soft 404 listesini izle

## P6.3 Search Console Operasyonu
- [x] domain property doğrula
- [x] sitemap gönder
- [ ] coverage sorunlarını takip et
- [ ] crawl stats izle
- [ ] sayfa indexlenme oranını takip et
- [ ] query bazlı CTR düşük sayfaları düzelt
- [ ] high impression / low click sayfaları yeniden yaz

---

# P7 — Teknik SEO ve Performans

## P7.1 Core Web Vitals
- [ ] LCP optimize et
- [ ] CLS optimize et
- [ ] INP optimize et
- [ ] görselleri modern formatlara geçir
- [ ] hero görsellerini optimize et
- [ ] gereksiz JS yükünü azalt
- [ ] component split planı yap

## P7.2 Render ve Static Strategy
- [x] static generation mantığı başlamış
- [ ] build süresini ölç
- [ ] 16.000 sayfada build darboğazını hesapla
- [ ] gerektiğinde ISR / chunked generation stratejisi tasarla
- [ ] route segment bazlı üretim stratejisi belirle
- [ ] ağır sayfaları kademeli aç

## P7.3 Teknik Temizlik
- [ ] 301 yönlendirme tablosu çıkar
- [ ] broken link taraması yap
- [ ] heading hiyerarşisini standardize et
- [ ] görsel alt metin standardı belirle
- [ ] duplicate title / meta taraması yap
- [ ] schema validasyon scripti yaz

---

# P8 — Lead Engine ve CRO Sıkılaştırma

## P8.1 Form Standardizasyonu
- [ ] tüm form component’lerini tek veri modeliyle hizala
- [x] şehir / ilçe / servis değerlerini otomatik doldur
- [x] hidden field ile `page_url` zorunlu gönder
- [x] hidden field ile `form_source` zorunlu gönder
- [ ] campaign parametreleri yakala
- [ ] CTA varyasyonlarını test et

## P8.2 Lead Kalite Koruması
- [ ] duplicate lead kontrolünü merkezi hale getir
- [ ] telefon normalize et
- [ ] sahte telefon tespit et
- [ ] spam keyword blacklist oluştur
- [ ] rate limit ekle
- [ ] honeypot ekle
- [ ] basit bot koruması ekle
- [ ] webhook failure log ekle
- [ ] mail failure fallback ekle

## P8.3 CRM Operasyonu
- [ ] Google Sheets kolon standardını sabitle
- [ ] lead status pipeline kur
- [ ] ilk arama zamanı alanı ekle
- [ ] lead owner alanı ekle
- [ ] teklif verildi alanı ekle
- [ ] keşif tarihi alanı ekle
- [ ] satış oldu alanı ekle
- [ ] recurring sözleşme alanı ekle
- [ ] lead source dashboard kur

## P8.4 CRO Testleri
- [ ] hero CTA testleri
- [ ] WhatsApp CTA testleri
- [ ] kısa form vs uzun form testi
- [ ] referans blok testi
- [ ] fiyat vermeyen vs fiyat çerçeveli metin testi
- [ ] sektör odaklı CTA testi
- [ ] “ücretsiz keşif” vs “kurumsal teklif alın” testi

---

# P9 — Sayfa Türleri: Para Getiren Öncelik Sırası

## P9.1 İlk Açılacak Yüksek Niyetli Sayfalar
- [ ] kamera sistemi bakım sözleşmesi
- [ ] güvenlik sistemi bakım sözleşmesi
- [ ] site kamera sistemi bakım
- [ ] site yönetimi kamera bakım
- [ ] fabrika güvenlik sistemi bakım
- [ ] depo güvenlik sistemi bakım
- [ ] NVR bakım servisi
- [ ] güvenlik sistemi teknik servis
- [ ] kamera arıza servisi
- [ ] uzaktan kamera izleme hizmeti

## P9.2 İkinci Dalga Sayfalar
- [ ] alarm sistemi bakım
- [ ] yangın alarm bakım sözleşmesi
- [ ] kartlı geçiş teknik servis
- [ ] IP kamera bakım servisi
- [ ] CCTV bakım anlaşması
- [ ] kamera sistem periyodik bakım
- [ ] kurumsal güvenlik sistemi bakım firması
- [ ] mağaza kamera sistemi kurulumu
- [ ] plaza güvenlik sistemi kurulumu
- [ ] fabrika IP kamera kurulumu

## P9.3 Üçüncü Dalga Yardımcı İçerikler
- [ ] kamera görüntü yok
- [ ] kayıt cihazı kayıt yapmıyor
- [ ] IP kamera çevrimdışı
- [ ] güvenlik kamerası neden bozulur
- [ ] güvenlik kamera bakımı nasıl yapılır
- [ ] site yönetimleri için bakım checklist
- [ ] fabrika kamera bakım periyodu

---

# P10 — 81 Şehir Motoru

## P10.1 Şehir Kapsaması
- [ ] 81 ilin tam listesi
- [ ] slug standardı
- [ ] plaka kodu eşleşmesi
- [ ] SEO başlık varyasyonları
- [ ] şehir bazlı intro metinleri
- [ ] şehir bazlı sektör öncelikleri
- [ ] şehir bazlı ilçe referansları
- [ ] şehir bazlı CTA varyasyonları

## P10.2 Şehir Önceliklendirme
### Tier 1
- [ ] İstanbul
- [ ] Ankara
- [ ] İzmir
- [ ] Bursa
- [ ] Kocaeli
- [ ] Antalya
- [ ] Tekirdağ
- [ ] Gaziantep
- [ ] Konya
- [ ] Adana

### Tier 2
- [ ] Sakarya
- [ ] Balıkesir
- [ ] Kayseri
- [ ] Eskişehir
- [ ] Mersin
- [ ] Denizli
- [ ] Manisa
- [ ] Samsun
- [ ] Muğla
- [ ] Aydın

### Tier 3
- [ ] Kalan şehirlerin tamamı

## P10.3 Şehir Bazlı Commercial Pages
- [ ] şehir × bakım sözleşmesi
- [ ] şehir × teknik servis
- [ ] şehir × fabrika güvenlik sistemi
- [ ] şehir × site yönetimi kamera bakımı
- [ ] şehir × uzaktan izleme
- [ ] şehir × alarm sistemi bakım

---

# P11 — 970 İlçe Motoru

## P11.1 İlçe Envanteri
- [ ] Türkiye tüm ilçe datasını çek
- [ ] citySlug ile bağla
- [ ] slug üret
- [ ] normalize et
- [ ] tekrar / yazım farkı temizle
- [ ] büyükşehir ilçe öncelik listesi oluştur

## P11.2 İlçe Açılış Stratejisi
- [ ] önce İstanbul tüm ilçeler
- [ ] sonra Ankara / İzmir / Bursa / Kocaeli / Antalya
- [ ] sonra sanayi yoğun ilçeler
- [ ] sonra yüksek residence yoğun ilçeler
- [ ] sonra kalan ilçeler

## P11.3 İlçe Sayfası Kalite Kuralları
- [ ] city page kopyası olmamalı
- [ ] local işletme tipleri değişmeli
- [ ] komşu ilçe blokları değişmeli
- [ ] FAQ varyasyonu olmalı
- [ ] CTA varyasyonu olmalı
- [ ] intro varyasyonu olmalı
- [ ] district-specific anchor text kullanılmalı

---

# P12 — Sektör / Segment Sayfaları

## P12.1 Kurumsal Segmentler
- [ ] site yönetimleri
- [ ] fabrikalar
- [ ] depolar
- [ ] AVM
- [ ] zincir mağazalar
- [ ] plazalar
- [ ] oteller
- [ ] okullar
- [ ] hastaneler
- [ ] ofisler

## P12.2 Segment × Servis Sayfaları
- [ ] site yönetimi kamera bakım sözleşmesi
- [ ] fabrika güvenlik sistemi bakım planı
- [ ] depo IP kamera kurulumu
- [ ] plaza kamera sistemi bakım
- [ ] mağaza CCTV kurulumu
- [ ] AVM uzaktan izleme sistemi
- [ ] okul kamera sistemi teknik servis
- [ ] otel çevre güvenlik kamera çözümleri

---

# P13 — Blog ve Topical Authority Katmanı

## P13.1 Blog Stratejisi
- [ ] bilgi verip para sayfasına linkleyen içerikler üret
- [ ] salt haber içeriği üretme
- [ ] sıfır ticari faydalı blog yazma
- [ ] her blog yazısının para sayfasına link çıkışı olsun

## P13.2 Blog Cluster’ları
- [ ] bakım rehberleri
- [ ] arıza rehberleri
- [ ] karşılaştırma içerikleri
- [ ] yasal / yönetimsel içerikler
- [ ] site yönetimi rehberleri
- [ ] fabrika güvenlik rehberleri
- [ ] maliyet / teklif rehberleri
- [ ] teknoloji rehberleri

## P13.3 İçerik Örnekleri
- [ ] kamera sistemi bakım sözleşmesi neden gerekli
- [ ] site yönetimleri için güvenlik sistemi bakım rehberi
- [ ] fabrikalarda kamera bakımı kaç ayda bir yapılmalı
- [ ] NVR hard disk arızası nasıl anlaşılır
- [ ] güvenlik kamerası kayıt süresi nasıl hesaplanır
- [ ] IP kamera mı analog kamera mı
- [ ] yangın alarm bakım sözleşmesi neden önemlidir

---

# P14 — Görsel, Güven ve Dönüşüm Varlıkları

## P14.1 Görsel Sistem
- [ ] her ana servis için hero görsel
- [ ] her sektör için uygun görsel
- [ ] bakım odaklı teknik ekip görselleri
- [ ] merkez izleme ekranı görselleri
- [ ] fabrika / depo ortamı görselleri
- [ ] site yönetimi / residence görselleri

## P14.2 Güven Blokları
- [ ] süreç şeffaflığı
- [ ] keşif adımları
- [ ] kurumsal teklif formatı
- [ ] bakım kapsamı maddeleri
- [ ] arıza müdahale yaklaşımı
- [ ] uzaktan destek süreçleri
- [ ] “hangi müşteriler için uygun” blokları

## P14.3 Sosyal Kanıt
- [ ] gerçek referans varsa ekle
- [ ] uydurma yorum ekleme
- [ ] uydurma yıldız puanı ekleme
- [ ] sektör bazlı örnek senaryo ekle
- [ ] teslim edilen iş tipleri ekle

---

# P15 — Analitik, Attribution ve Karar Sistemi

## P15.1 Event Standardı
- [ ] page_view
- [x] form_start
- [x] form_submit
- [x] whatsapp_click
- [x] phone_click
- [ ] quote_request
- [ ] scroll_depth
- [ ] city_page_view
- [ ] district_page_view
- [ ] service_page_view

## P15.2 Dashboard
- [ ] şehir bazlı oturum
- [ ] şehir bazlı lead
- [ ] servis bazlı lead
- [ ] landing bazlı dönüşüm
- [ ] organik vs ads lead ayrımı
- [ ] en çok trafik alan sayfalar
- [ ] en çok lead getiren sayfalar
- [ ] çok trafik alıp lead getirmeyen sayfalar

## P15.3 Karar Mekanizması
- [ ] ilk 30 günde veri topla
- [ ] sonra kazanan sayfaları ölçekle
- [ ] düşük dönüşümlü cluster’ları kes
- [ ] yüksek LTV sayfaları öne al
- [ ] içerik yatırımı sadece kanıtlanan cluster’lara kaydır

---

# P16 — Operasyonel Üretim Sistemi

## P16.1 İçerik Üretim Pipeline
- [ ] keyword seç
- [ ] page type seç
- [ ] veri modelini doldur
- [ ] template’e bağla
- [ ] QA kontrolü yap
- [ ] preview al
- [ ] deploy et
- [ ] Search Console’a bildir
- [ ] performansı izle

## P16.2 QA Checklist
Her yeni sayfada:
- [ ] title unique mi
- [ ] meta unique mi
- [ ] H1 doğru mu
- [ ] canonical doğru mu
- [ ] schema valid mi
- [ ] breadcrumb doğru mu
- [ ] city/district/service mapping doğru mu
- [ ] thin content mi değil mi
- [ ] form çalışıyor mu
- [ ] internal linkler çalışıyor mu
- [ ] CTA düzgün mü
- [ ] mobil görünüm temiz mi

## P16.3 Yayın Disiplini
- [ ] tek seferde 16.000 sayfa basma
- [ ] dalga dalga aç
- [ ] önce Tier 1 şehirler
- [ ] sonra Tier 1 ilçeler
- [ ] sonra bakım cluster’ı
- [ ] sonra teknik servis
- [ ] sonra arıza içerikleri
- [ ] sonra kalan destekleyici sayfalar

---

# P17 — Öncelikli Sprint Planı

## Sprint 1 — Temel Onarım
- [ ] mevcut route mimarisini temizle
- [ ] veri modellerini normalize et
- [ ] 20 ana servis veri modelini tamamla
- [ ] 81 şehir veri modelini tamamla
- [ ] district engine temelini kur
- [ ] metadata generator’ı merkezi hale getir
- [ ] schema generator’ı merkezi hale getir

## Sprint 2 — Para Sayfaları
- [ ] bakım sözleşmesi cluster’ını aç
- [ ] teknik servis cluster’ını aç
- [ ] site yönetimi cluster’ını aç
- [ ] fabrika cluster’ını aç
- [ ] İstanbul / Ankara / İzmir için yayınla
- [ ] form ve CTA optimizasyonunu yap

## Sprint 3 — İlçe Motoru
- [ ] İstanbul tüm ilçeler
- [ ] Ankara / İzmir tüm ilçeler
- [ ] Bursa / Kocaeli / Antalya tüm ilçeler
- [x] internal linking engine aktif et
- [ ] district sitemap oluştur

## Sprint 4 — Arıza ve Rehber Katmanı
- [ ] troubleshooting içerikleri aç
- [ ] blog hub’ları aç
- [ ] arızadan bakım sözleşmesine trafik yönlendir
- [ ] high impression low click sayfaları optimize et

## Sprint 5 — Ölçekleme
- [ ] 81 şehir tam kapsama
- [ ] 970 ilçe kapsama
- [ ] 200 keyword cluster tam kapsama
- [ ] en iyi dönüşen sayfaları güçlendir
- [ ] zayıf sayfaları noindex / birleştir / düzelt

---

# P18 — Yapılmaması Gerekenler

- [ ] 16.000 sayfayı tek şablonla körlemesine üretme
- [ ] şehir ismini değiştirip aynı metni çoğaltma
- [ ] index alıyor diye başarılı sanma
- [ ] trafik geliyor diye para geliyor sanma
- [ ] bilgi amaçlı düşük niyetli kelimelere fazla kaynak gömme
- [ ] uydurma schema / review / rating kullanma
- [ ] her şeyi aynı anda yapmaya çalışma
- [ ] CRM disiplini olmadan trafik büyütme
- [ ] noindex / canonical mantığını boş bırakma

---

# P19 — Nihai Vizyon

- [ ] GuvenlikServisi.com’u yalnızca şehir × servis sitesi olmaktan çıkar
- [ ] Türkiye güvenlik sistemleri kategorisinde merkezi otorite haline getir
- [ ] SEO + lead engine + CRM + satış operasyonunu tek sisteme bağla
- [ ] bakım sözleşmelerini recurring gelir motoruna çevir
- [ ] zamanla montajcı / servis ağı ekleyerek marketplace tabanına geç
- [ ] Armut benzeri ama sadece güvenlik sistemlerine odaklı dikey platforma dönüş

---

# Hemen Sonraki En Kritik İşler

- [ ] `cities.ts`, `districts.ts`, `services.ts`, `keywords.ts` veri şemasını yeniden kur
- [ ] 20 ana servis için tek merkezli page config oluştur
- [ ] district route engine tasarla
- [ ] metadata/schema generator’ı merkezileştir
- [ ] ilk para sayfası cluster’ı olarak bakım sözleşmesi sayfalarını aç
- [ ] İstanbul + Ankara + İzmir + Bursa + Kocaeli + Antalya öncelikli yayın planını çıkar
- [ ] thin content üretmeyecek content variation sistemini kur
- [x] internal linking engine’i devreye al
- [ ] Search Console + GA4 + lead dashboard ile performans izlemeyi başlat
- [ ] sadece trafik değil, lead ve sözleşme getiren cluster’ları ölçekle

- [x] programmatic image system / visual section / local asset mapping
- [x] High-value commercial page visual expansion
