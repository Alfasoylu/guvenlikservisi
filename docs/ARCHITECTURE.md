# GuvenlikServisi Architecture Notes
Goal:
Build the largest security systems lead generation platform in Turkey.

## Repo Özeti

Teknoloji:
- Next.js
- React
- TypeScript
- Tailwind
- Vercel dağıtımı
- next-sitemap
- nodemailer

Site şu anda ağırlıklı olarak şu katmanlardan oluşuyor:
1. Şehir ve hizmet sayfaları
2. Landing / teklif sayfaları
3. Blog içerikleri
4. Lead API
5. Sitemap / robots yapılandırması

---

## Bugünkü Mimari

### İçerik Katmanı
- `src/data/cities.ts`
- `src/data/services.ts`
- `src/data/site-config.ts`

### Sayfa Katmanı
- `src/app/[city]/[service]/page.tsx`
- `src/app/teklif/...`
- blog ve diğer statik sayfalar

### Lead Katmanı
- `src/app/api/lead/route.ts`
- form component'leri
- Google Sheets webhook

---

## Mimari Güçlü Taraflar

1. Şehir × hizmet statik üretim mantığı hazır.
2. Landing page mantığı başlamış.
3. GTM / GA kimlikleri config içinde mevcut.
4. Lead API gerçek veri toplamaya başlamış.
5. Google Sheets erken aşama için yeterli operasyon omurgası sunuyor.

---

## Mimari Zayıf Taraflar

1. Şehir verisi ile şehir açıklama / ilçe verisi tam senkron değil.
2. Programmatic sayfalarda içerik varyasyonu sınırlı.
3. Tracking olayları tam sistematik değil.
4. Lead capture katmanında duplicate ve spam koruması eksik.
5. `/teklif/` için robots/index stratejisi net değil.
6. CRM operasyon katmanı hâlâ sheet disipliniyle yönetiliyor.

---

## Mimari Kararlar

### Karar 1 — Önce CRM hafif, sonra ağır
Önce Sheets + disiplin.
Sonra Supabase.

### Karar 2 — Landing ayrı, SEO ayrı ama veri ortak
Landing page içerikleri ads dönüşümü için optimize edilir.
SEO sayfaları uzun kuyruk organik trafik için büyütülür.
Ama ikisi de ortak veri modelini kullanır.

### Karar 3 — Tek source of truth
Görevler ve sistem notları repo içindeki `docs/` klasöründe tutulur.
Docs dışarıda dağılmaz.

---

## Önerilen Docs Klasörü

```txt
docs/
  BACKLOG.md
  LEAD_ENGINE.md
  SEO_STRATEGY.md
  ARCHITECTURE.md
```

Opsiyonel ileri aşama dosyalar:

```txt
docs/
  ADS_PLAN.md
  CONTENT_MAP.md
  SHEET_SCHEMA.md
  SALES_SOP.md
```

---

## Teknik Borç Listesi

- lead validation zayıf
- webhook failure fallback görünürlüğü zayıf
- event naming standardı eksik
- landing page reuse pattern daha modüler olabilir
- district page engine henüz yok
- admin panel henüz yok

---

## Uygulama Sırası

1. Lead engine sıkılaştır
2. Tracking düzgün çalışsın
3. Landing CRO yükselt
4. Kazanan landingleri çoğalt
5. SEO motorunu büyüt
6. Sonra marketplace'e geç

Tersini yapmak zaman kaybı olur.
