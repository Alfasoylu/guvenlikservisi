
# GuvenlikServisi Master Backlog

Bu backlog **tek kişilik hızlı execution** için tasarlanmıştır.

Strateji sırası:

1. Lead Engine kur
2. Ads çalıştır
3. Landing page ağı büyüt
4. SEO motoru kur
5. Data layer kur
6. Marketplace modeline geç

Kullanım kuralı:

- Tamamlanan görevlerin kutusunu işaretle
- Her yeni sohbet başında sadece tamamlanan backlog ID’lerini yaz
- Yeni görev eklenirse bu dosyaya ekle

---

# P0 — Lead Engine ve Ads Ready Sistem

Amaç: Reklam verildiğinde lead kaybedilmemesi

## Lead Capture Foundation

- [x] BL-01 Google Sheets webhook ile form lead kayıt altyapısı
- [x] BL-02 Lead kolon standardı ve veri şeması sabitleme
- [ ] BL-03 Telefon format normalization
- [ ] BL-04 Duplicate lead detection (24 saat)
- [ ] BL-05 Spam protection (honeypot + rate limit)
- [ ] BL-06 Server-side validation güçlendirme
- [ ] BL-07 Lead source normalization
- [ ] BL-08 Form success / failure logging
- [ ] BL-09 Webhook hata yakalama
- [ ] BL-10 Lead status alan standardı
- [ ] BL-11 Sales notes alan standardı

## CRM ve Operasyon Akışı

- [ ] BL-12 Lead pipeline tasarımı
- [ ] BL-13 Google Sheets operasyon görünümü
- [ ] BL-14 Arama zamanı sütunu
- [ ] BL-15 Teklif tutarı sütunu
- [ ] BL-16 Kaybedilme nedeni sütunu
- [ ] BL-17 Satış sorumlusu sütunu
- [ ] BL-18 Günlük lead takip rutini
- [ ] BL-19 Lead response SLA (5 dakika)

## Tracking ve Attribution

- [ ] BL-20 GTM event standardı
- [ ] BL-21 Form submit tracking
- [ ] BL-22 WhatsApp click tracking
- [ ] BL-23 Phone click tracking
- [ ] BL-24 Scroll depth tracking
- [ ] BL-25 30 saniye engagement event
- [ ] BL-26 Thank you logic
- [ ] BL-27 Google Ads conversion mapping
- [ ] BL-28 CPL raporlama şablonu

## Landing Page CRO

- [ ] BL-29 Hero teklif odaklı revizyon
- [ ] BL-30 Form üstü value proposition
- [ ] BL-31 Trust block
- [ ] BL-32 FAQ satış itiraz optimizasyonu
- [ ] BL-33 Sticky mobile CTA
- [ ] BL-34 Floating WhatsApp CTA
- [ ] BL-35 Click to call görünürlüğü
- [ ] BL-36 Form alan sırası test
- [ ] BL-37 Mikro metin optimizasyonu
- [ ] BL-38 İlk ekran hız optimizasyonu
- [ ] BL-39 Script ağırlık analizi
- [ ] BL-40 Mobil CTA testi

---

# P1 — Landing Page Expansion

Amaç: Ads ile ölçeklenebilir lead üretimi

## Şehir Bazlı Landing Pages

- [ ] BL-41 /teklif/ankara-ip-kamera-montaji
- [ ] BL-42 /teklif/izmir-ip-kamera-montaji
- [ ] BL-43 /teklif/bursa-ip-kamera-montaji
- [ ] BL-44 /teklif/kocaeli-ip-kamera-montaji
- [ ] BL-45 /teklif/tekirdag-ip-kamera-montaji

## Hizmet Bazlı Landing Pages

- [ ] BL-46 Alarm sistemi landing
- [ ] BL-47 Yangın alarm landing
- [ ] BL-48 Kartlı geçiş landing
- [ ] BL-49 Bakım ve uzaktan izleme landing

## Kullanım Senaryosu Landing Pages

- [ ] BL-50 Apartman kamera sistemi
- [ ] BL-51 Site kamera sistemi
- [ ] BL-52 Villa kamera sistemi
- [ ] BL-53 Depo kamera sistemi
- [ ] BL-54 Fabrika kamera sistemi
- [ ] BL-55 Mağaza kamera sistemi
- [ ] BL-56 Restoran kamera sistemi

---

# P2 — Programmatic SEO Engine

Amaç: 1000 sayfalık SEO ağı

## Page Type Architecture

- [ ] BL-57 Problem page template
- [ ] BL-58 Service page template
- [ ] BL-59 City page template
- [ ] BL-60 District page template
- [ ] BL-61 Comparison page template

## City Data Layer

- [ ] BL-62 Şehir veri standardı
- [ ] BL-63 Tüm şehir açıklamaları
- [ ] BL-64 Şehir meta standardı
- [ ] BL-65 Şehir schema

## District Engine

- [ ] BL-66 District veri seti
- [ ] BL-67 District page generator
- [ ] BL-68 İlçe meta template
- [ ] BL-69 İlçe içerik blokları

## Problem Pages (trafik motoru)

- [ ] BL-70 Kamera kaç gün kayıt yapar
- [ ] BL-71 IP kamera internet olmadan çalışır mı
- [ ] BL-72 WiFi vs PoE kamera
- [ ] BL-73 Kamera sistemi fiyat hesaplama
- [ ] BL-74 Kamera sistemi nasıl seçilir
- [ ] BL-75 Kamera sistemi neden bulanık
- [ ] BL-76 Kamera görüntüsü telefona nasıl gelir
- [ ] BL-77 Kamera sistemi kaç kamera olmalı
- [ ] BL-78 Kamera sistemi elektrik tüketimi
- [ ] BL-79 Kamera sistemi kurulumu ne kadar sürer

## Comparison Pages

- [ ] BL-80 Hikvision vs Dahua
- [ ] BL-81 WiFi vs PoE kamera
- [ ] BL-82 IP vs Analog kamera
- [ ] BL-83 NVR vs DVR
- [ ] BL-84 4MP vs 8MP kamera

## Internal Linking Engine

- [ ] BL-85 Problem → Service link
- [ ] BL-86 Service → City link
- [ ] BL-87 City → District link
- [ ] BL-88 SEO anchor standardı

## Technical SEO

- [ ] BL-89 Sitemap stratejisi
- [ ] BL-90 /teklif index kararı
- [ ] BL-91 Canonical standardı
- [ ] BL-92 FAQ schema
- [ ] BL-93 LocalBusiness schema
- [ ] BL-94 Breadcrumb schema
- [ ] BL-95 Search Console checklist

---

# P3 — Data Layer ve Ölçekleme

Amaç: Lead verisini iş zekasına çevirmek

- [ ] BL-96 Sheet → Supabase geçiş eşiği
- [ ] BL-97 Supabase veri modeli
- [ ] BL-98 Admin panel MVP
- [ ] BL-99 Lead dashboard
- [ ] BL-100 Kampanya ROAS takibi
- [ ] BL-101 Şehir bazlı kapanış oranı
- [ ] BL-102 Hizmet bazlı kârlılık
- [ ] BL-103 Teklif → satış dönüşüm raporu

---

# P4 — Marketplace Geçişi

Amaç: Lead satış platformu

- [ ] BL-104 Usta kayıt sistemi
- [ ] BL-105 Lead routing motoru
- [ ] BL-106 Lead fiyatlandırma modeli
- [ ] BL-107 Teklif karşılaştırma ekranı
- [ ] BL-108 Referans ve puan sistemi
- [ ] BL-109 Bakım aboneliği
