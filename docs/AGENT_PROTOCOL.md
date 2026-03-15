Guvenlikservisi.com projesinde çalışıyorsun.

Önce `docs/` klasöründeki tüm `.md` dosyalarını oku ama hepsini eşit ağırlıkta değerlendirme.

Source of truth öncelik sırası:

1. BACKLOG.md
2. ARCHITECTURE.md
3. SEO_STRATEGY.md
4. METADATA_MAP.md
5. ROBOTS_SITEMAP_CANONICAL_AUDIT.md
6. SITEMAP_ENGINE.md
7. SCHEMA_MAP.md
8. INTERNAL_LINK_ENGINE.md
9. diğer destekleyici docs

Bu öncelik sırasına göre projenin:

- hedefini
- niyetini
- iş modelini
- teknik mimarisini
- SEO stratejisini
- lead engine mantığını
- 24 aylık büyüme planını
- öncelik sırasını
  anla.

Ardından repo ve docs arasında tutarlılık analizi yap.

Kurallar:

1. Docs ile kod çelişiyorsa çelişkiyi net yaz.
2. Tamamlanan backlog maddelerini ilgili docs içinde `[x]` veya net durum notu ile işaretle.
3. Kısmi tamamlanan işleri `[~]` veya `kısmi` olarak işaretle.
4. Geçersiz, stale veya strateji dışına çıkan docs içeriklerini silmeden düzelt; mevcut faydalı bilgiyi koru, üstüne güncel not ekle.
5. Docs’ları birbiriyle uyumlu hale getir ama stratejik bilgileri overwrite etme.
6. Önceliği sadece şu sıraya göre ver:
   - P0: lead capture kırıkları, forms/api, canonical, sitemap, robots, redirects, noindex, broken links, route ownership
   - P1: metadata/schema centralization, internal links, money page strengthening
   - P2: thin content riskini azaltan content variation ve district readiness
   - P3: yalnız dönüşüm veya okunabilirlik getiriyorsa UI iyileştirme
7. `/teklif/*` sayfalarını Ads landing page olarak değerlendir:
   - organic SEO katmanına dahil etme
   - noindex/nofollow olarak düşün
   - sitemap dışında tut
   - canonical winner olarak görme
   - organik authority akışını buraya itme
8. İstanbul ilk doğrulama pazarıdır; mimari Türkiye geneline ölçeklenebilir olmalıdır.
9. Mimari kararları şu sıraya göre ver:
   - önce lead engine
   - sonra city/service scale
   - sonra district scale
   - sonra problem page cluster
   - sonra marketplace readiness
10. Her turda sadece analiz yapıp bırakma.
11. Her tur en az 1 gerçek değişiklik yap:

- kod değişikliği
- docs güncellemesi
- redirect/canonical fix
- metadata/schema/internal-link fix

12. Düşük kaldıraçlı refactor yapma.
13. Yeni route family açma, eğer query ownership ve quality gate net değilse.
14. Thin content, duplicate content, crawl waste, authority split yaratacak işlerden kaçın.
15. Mevcut dosyalarda bilgi kaybı yaratma; koru + geliştir.
16. Yapılan iş küçükse bile deployable ve tutarlı olsun.

Çalışma sırası:
A. docs klasörünü oku
B. repo + docs analizini yap
C. tamamlanan/kısmi maddeleri docs’a işle
D. en kritik tek görevi seç
E. o görevi uygula
F. kısa ve net rapor ver
G. bir sonraki en kritik görevi yaz

Görev seçme kuralı:

- En yüksek etki + en düşük efor
- Gelire ve organic lead ihtimaline en hızlı katkı
- Teknik doğruluk bozuksa önce onu düzelt
- Kozmetik işleri en sona bırak

---

## Kilitli UI Kuralları

Aşağıdaki UI kararları sabitlenmiştir. Docs açıkça değiştirilmediği sürece geri döndürmeyin.

### İlçe Listeleme Bloğu (Mart 2026)

- City ve city/service sayfalarında ilçeler TEK birleşik blokta gösterilir
- Bileşen: `CityDistrictGridSection`
- Başlık: "Hizmet Verdiğimiz İlçeler"
- Tüm ilçeler alfabetik sırayla, eşit şekilde listelenir
- Görünür UI'da "Öncelikli ilçe kapsamı", "Diğer hizmet bölgeleri" veya benzeri gruplamalar KULLANILMAZ
- İlçeler şu an link değildir; `enableLinks` prop'u gelecekte etkinleştirilebilir
- Eski `ServiceDistricts` bileşeni deprecated'dır; tekrar import etmeyin
- Veri katmanında `priority`, `tier`, `nearbyDistricts` kalabilir — bunlar routing/internal-link amaçlıdır, görünür ilçe listeleme UI'ını kontrol ETMEZ

Output formatı:

1. Kısa durum özeti
2. Docs içinde işaretlenen / güncellenen maddeler
3. Bu tur yapılan ana görev
4. Değiştirilen dosyalar
5. Açık kalan riskler
6. Bir sonraki en kritik görev
