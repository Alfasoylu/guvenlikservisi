# GuvenlikServisi Master Backlog

Bu backlog tek kişilik hızlı execution için hazırlandı. Mantık şudur:

1. Önce para getiren sistem kurulur.
2. Sonra reklam trafiği ölçülür ve optimize edilir.
3. Sonra landing page ağı büyütülür.
4. Sonra SEO motoru inşa edilir.
5. En son marketplace modeline geçilir.

Kullanım kuralı:
- Tamamlanan görevlerin kutusunu işaretle.
- Her yeni sohbette sadece tamamlanan backlog ID'lerini yaz.
- Yeni görev eklenirse bu dosyada ekle, sohbet içinde kaybetme.

---

## P0 — Lead Engine ve Ads-Ready Altyapı

### Lead Capture Foundation
- [x] BL-01 Google Sheets webhook ile form lead kayıt altyapısı
- [ ] BL-02 Lead kolon standardı ve veri şeması sabitleme
- [ ] BL-03 Telefon format normalization (örn. 05xx / +90 / 5xx tek formata çekme)
- [ ] BL-04 Duplicate lead detection (aynı telefon, 24 saat içinde)
- [ ] BL-05 Spam protection (honeypot + basit rate-limit)
- [ ] BL-06 Server-side validation güçlendirme
- [ ] BL-07 Lead source normalization (utm/gclid boşsa fallback source üretme)
- [ ] BL-08 Form success / failure logging
- [ ] BL-09 Webhook hata yakalama ve retry stratejisi
- [ ] BL-10 Lead status alanlarının standartlaştırılması
- [ ] BL-11 Sales notes alanı standardı
- [ ] BL-12 İlk operasyon paneli için sheet görünüm standardı

### CRM ve Operasyon Akışı
- [ ] BL-13 Lead pipeline tasarımı (Yeni / Arandı / Teklif / Kazanıldı / Kaybedildi)
- [ ] BL-14 Google Sheets içinde operasyon görünümü oluşturma
- [ ] BL-15 Aranma zamanı / son işlem zamanı sütunları ekleme
- [ ] BL-16 Teklif tutarı sütunu ekleme
- [ ] BL-17 Kaybedilme nedeni sütunu ekleme
- [ ] BL-18 Satış sorumlusu sütunu ekleme
- [ ] BL-19 Günlük lead takip rutini dokümantasyonu
- [ ] BL-20 Lead response SLA tanımı (örn. 5 dakika içinde arama)

### Tracking ve Attribution
- [ ] BL-21 GTM event standardı tanımı
- [ ] BL-22 Form submit success event doğrulama
- [ ] BL-23 WhatsApp click event tracking
- [ ] BL-24 Phone click event tracking
- [ ] BL-25 Scroll depth tracking
- [ ] BL-26 30 saniye engagement event
- [ ] BL-27 Thank-you / success mantığı netleştirme
- [ ] BL-28 Google Ads conversion mapping
- [ ] BL-29 Offline conversion upload planı
- [ ] BL-30 Landing page bazlı CPL raporlama şablonu

### Landing Page CRO
- [ ] BL-31 Hero alanı teklif odaklı revizyon
- [ ] BL-32 Form üstü value proposition sertleştirme
- [ ] BL-33 Trust block (proje sayısı, tecrübe, garanti, cihaz kalitesi)
- [ ] BL-34 Sık sorulan soruların satış itirazlarına göre revizyonu
- [ ] BL-35 Sticky mobile CTA bar optimizasyonu
- [ ] BL-36 Floating WhatsApp CTA
- [ ] BL-37 Click-to-call görünürlüğü artırma
- [ ] BL-38 Form alan sırası dönüşüm testi
- [ ] BL-39 Form mikro metinleri dönüşüm odaklı revizyon
- [ ] BL-40 İlk ekran yüklenme hızı iyileştirme
- [ ] BL-41 Görsel / script ağırlık analizi
- [ ] BL-42 Mobil ilk ekran CTA testi

---

## P1 — Landing Page Expansion

### Şehir Bazlı Ticari Açılış Sayfaları
- [ ] BL-43 /teklif/ankara-ip-kamera-montaji
- [ ] BL-44 /teklif/izmir-ip-kamera-montaji
- [ ] BL-45 /teklif/bursa-ip-kamera-montaji
- [ ] BL-46 /teklif/kocaeli-ip-kamera-montaji
- [ ] BL-47 /teklif/tekirdag-ip-kamera-montaji

### Hizmet Bazlı Landing Pages
- [ ] BL-48 Alarm sistemi landing page
- [ ] BL-49 Yangın alarm landing page
- [ ] BL-50 Kartlı geçiş landing page
- [ ] BL-51 Apartman/site güvenlik landing page
- [ ] BL-52 Fabrika/depo güvenlik landing page
- [ ] BL-53 Bakım ve uzaktan izleme landing page

### Segment / Kullanım Senaryosu Landing Pages
- [ ] BL-54 Apartman için kamera sistemi
- [ ] BL-55 Site için kamera sistemi
- [ ] BL-56 Villa için kamera sistemi
- [ ] BL-57 Depo için kamera sistemi
- [ ] BL-58 Fabrika için kamera sistemi
- [ ] BL-59 Mağaza için kamera sistemi
- [ ] BL-60 Restoran / kafe için kamera sistemi

---

## P2 — Programmatic SEO Engine

### Sayfa Altyapısı
- [ ] BL-61 Şehir verisi standardizasyonu
- [ ] BL-62 Şehir açıklamaları tüm şehirlerde doldurma
- [ ] BL-63 İlçe veri katmanı kurma
- [ ] BL-64 Şehir × hizmet içerik değişkenleri hazırlama
- [ ] BL-65 İnce içerik riskini azaltacak modüler bloklar tasarlama
- [ ] BL-66 Service template derinliğini artırma
- [ ] BL-67 Service page CTA yapısını standardize etme
- [ ] BL-68 Internal link mantığını güçlendirme

### İlçe ve Uzun Kuyruk Sayfalar
- [ ] BL-69 /istanbul/kadikoy/kamera-sistemi-kurulumu gibi district page yapısı
- [ ] BL-70 Öncelikli ilçelerin listesi
- [ ] BL-71 İlçeye özel meta ve schema
- [ ] BL-72 İlçe sayfası içerik bileşenleri

### Topical Authority İçerikleri
- [ ] BL-73 Kamera montajı fiyatı içerik kümesi
- [ ] BL-74 Kaç gün kayıt yapar içerik kümesi
- [ ] BL-75 IP kamera internet olmadan çalışır mı
- [ ] BL-76 PoE vs Wi-Fi kamera karşılaştırma
- [ ] BL-77 NVR vs DVR karşılaştırma
- [ ] BL-78 Hikvision vs Dahua karşılaştırma
- [ ] BL-79 Apartman kamera yasal mı içerik kümesi
- [ ] BL-80 Yangın alarmı zorunluluk içerikleri

### Teknik SEO
- [ ] BL-81 Sitemap stratejisini netleştirme
- [ ] BL-82 /teklif sayfalarının index/noindex kararı
- [ ] BL-83 Canonical yapısı gözden geçirme
- [ ] BL-84 FAQ schema standardı
- [ ] BL-85 LocalBusiness schema standardı
- [ ] BL-86 Breadcrumb schema standardı
- [ ] BL-87 Search Console operasyon checklisti

---

## P3 — Ölçekleme ve Data Layer

- [ ] BL-88 Sheet'ten Supabase'e geçiş eşiği tanımı
- [ ] BL-89 Supabase veri modeli tasarımı
- [ ] BL-90 Admin panel MVP
- [ ] BL-91 Lead performans dashboard'u
- [ ] BL-92 Kampanya bazlı ROAS takibi
- [ ] BL-93 Şehir bazlı kapanış oranı takibi
- [ ] BL-94 Hizmet bazlı kârlılık takibi
- [ ] BL-95 Tekliften satışa dönüşüm raporu

---

## P4 — Marketplace Geçişi (6 Ay Sonrası)

- [ ] BL-96 Usta / bayi kayıt modeli
- [ ] BL-97 Lead routing mantığı
- [ ] BL-98 Lead satış fiyatlandırma modeli
- [ ] BL-99 Teklif karşılaştırma ekranı
- [ ] BL-100 Referans / puan sistemi
- [ ] BL-101 Bakıma dayalı recurring gelir modeli

---

## Notlar
- Öncelik: BL-02 → BL-05 → BL-21 → BL-33 → BL-43 sırası.
- SEO işlerini Ads verisi gelmeden abartma.
- Marketplace'e erken geçmek hata olur.
