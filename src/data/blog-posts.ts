export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  updatedAt?: string;
  readTime: number; // dakika
  category: string;
  tags: string[];
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "guvenlik-kamerasi-montaj-ucreti-2026",
    title: "Güvenlik Kamerası Montaj Ücreti 2026",
    excerpt:
      "İşyeri veya ev için güvenlik kamerası kurulum maliyeti ne kadar? 2026 yılı güncel fiyatlar, kamera tipleri ve kurulum ücretleri hakkında kapsamlı rehber.",
    publishedAt: "2026-01-15",
    readTime: 8,
    category: "Fiyatlar ve Rehber",
    tags: ["kamera", "fiyat", "montaj"],
    content: `## Güvenlik Kamerası Montaj Ücreti 2026: Kapsamlı Rehber

Güvenlik kamerası kurulumu yapmayı düşünüyorsanız, aklınızdaki ilk soru muhtemelen "ne kadar tutar?" olacaktır. Bu rehberde 2026 yılı itibarıyla güncel fiyatları ve fiyatı etkileyen faktörleri detaylıca ele alıyoruz.

## Kamera Tiplerine Göre Fiyatlar

### Dome Kamera (İç Mekan)
İç mekan için en yaygın kamera tipidir. 360 derece görüş açısı sunar, vandal-proof kasası sayesinde müdahaleye karşı dayanıklıdır.

- **Giriş seviyesi (1080p):** 800-1.500 TL
- **Orta seviye (4MP):** 1.500-3.000 TL
- **Üst seviye (4K/8MP):** 3.000-6.000 TL

### Bullet Kamera (Dış Mekan)
Dış mekan ve uzun mesafeli gözetleme için idealdir. IR gece görüşü 30-80 metre arasında değişir.

- **Giriş seviyesi:** 1.000-2.000 TL
- **Orta seviye:** 2.000-4.000 TL
- **Üst seviye:** 4.000-8.000 TL

### PTZ Kamera (Döner)
Uzaktan kontrol edilebilen, zoom yapabilen profesyonel kameralar. Büyük alanlar ve fabrikalar için tercih edilir.

- **Standart PTZ:** 5.000-15.000 TL
- **Profesyonel PTZ:** 15.000-40.000 TL

## Sistem Bileşenlerine Göre Maliyet

Güvenlik kamerası sistemi sadece kameradan ibaret değildir. Toplam maliyet şu bileşenlerden oluşur:

| Bileşen | Fiyat Aralığı |
|---------|---------------|
| Kamera (adet başına) | 800 - 6.000 TL |
| NVR Kayıt Cihazı | 3.000 - 15.000 TL |
| Sabit Disk (2TB) | 1.500 - 3.000 TL |
| Kablo ve Bağlantı | 500 - 3.000 TL |
| Montaj İşçiliği | 500 - 1.500 TL/kamera |

## Paket Fiyat Örnekleri

### Konut Paketi (2-4 Kamera)
- 2 kameralı temel sistem: **12.000 - 18.000 TL**
- 4 kameralı orta seviye: **18.000 - 28.000 TL**

### İşyeri Paketi (4-8 Kamera)
- 4 kameralı küçük işyeri: **20.000 - 30.000 TL**
- 8 kameralı orta işyeri: **35.000 - 55.000 TL**

### Büyük Proje (8+ Kamera)
8 ve üzeri kameralı projeler için keşif sonrası özel teklif hazırlanmaktadır.

## Fiyatı Etkileyen Faktörler

**Kamera kalitesi ve markası:** Hikvision, Dahua gibi dünya markası ürünler daha yüksek fiyatlıdır ancak görüntü kalitesi ve dayanıklılık açısından üstündür.

**Kablo altyapısı:** Mevcut kablo altyapısı varsa maliyet düşer. Yeni kablo çekimi ek maliyet oluşturur.

**Montaj zorluğu:** Yüksek tavanlı mekanlar, asma tavan gibi özel durumlar montaj maliyetini artırır.

**Ek özellikler:** Analitik yazılımlar, yüz tanıma, plaka tanıma sistemleri ek maliyet getirir.

## Ücretsiz Keşiften Yararlanın

Fiyat tahminleri yerine, kesinlikle doğru fiyat almak için [ücretsiz keşif](/kamera-sistemi-kurulumu) hizmetimizden yararlanın. Uzman ekibimiz yerinde inceleme yaparak ihtiyacınıza özel fiyat teklifi sunar.

[Alarm sistemi fiyatları](/alarm-sistemi-kurulumu) için de benzer rehberimizi inceleyebilirsiniz.

## Sıkça Sorulan Sorular`,
    image: "/images/blog/kamera-fiyat-2026.jpg",
  },
  {
    slug: "isyerine-kac-kamera-lazim",
    title: "İşyerine Kaç Kamera Lazım? Uzman Rehberi",
    excerpt:
      "Mağaza, ofis veya restoran için ihtiyaç duyulan kamera sayısını belirleyen faktörler. Mekan tipine göre kamera sayısı hesaplama rehberi.",
    publishedAt: "2026-01-28",
    readTime: 6,
    category: "Teknik Rehber",
    tags: ["kamera", "işyeri", "rehber"],
    content: `## İşyerine Kaç Kamera Lazım? Mekan Tipine Göre Rehber

"İşyerime kaç kamera lazım?" sorusu, güvenlik sistemi kurmayı düşünen her işletme sahibinin aklına gelir. Doğru cevap mekanın büyüklüğüne, düzenine ve güvenlik ihtiyaçlarına göre değişir.

## Kamera Sayısını Belirleyen Faktörler

### 1. Mekan Büyüklüğü
En belirleyici faktördür. Genel kural olarak:
- Her 50-80 m² için 1 standart geniş açılı kamera
- Koridorlar için her 15-20 metreye 1 kamera
- Dış mekan için her 30-50 metreye 1 kamera

### 2. Kritik Noktalar
Büyüklükten bağımsız olarak mutlaka kamera konulması gereken noktalar:
- **Giriş/çıkış kapıları** (her biri için en az 1 kamera)
- **Kasa ve ödeme noktaları**
- **Depo ve stok alanları**
- **Personel giriş çıkış noktaları**

### 3. Görüş Açısı ve Kamera Tipi
- **Geniş açılı kamera (120°+):** Geniş alanlar için, az kamera ile fazla alan kapatılır
- **Dar açılı kamera:** Uzak mesafelerdeki detayları yakalamak için
- **PTZ kamera:** Geniş alanlarda, dönerek izleme için

## Mekan Tipine Göre Kamera Sayısı

### Küçük Dükkan / Büfe (30-80 m²)
**Önerilen:** 2-4 kamera
- 1-2 kamera: İç mekan
- 1 kamera: Giriş kapısı
- 1 kamera: Kasa

### Orta Boy Mağaza (80-200 m²)
**Önerilen:** 4-8 kamera
- 3-5 kamera: Satış alanı
- 1 kamera: Giriş
- 1 kamera: Kasa
- 1 kamera: Depo girişi

### Restoran / Kafe (50-150 m²)
**Önerilen:** 4-6 kamera
- 2-3 kamera: Müşteri alanı
- 1 kamera: Giriş
- 1-2 kamera: Mutfak / Servis alanı

### Ofis (100-300 m²)
**Önerilen:** 4-8 kamera
- Açık ofis alanı: Her 80 m² için 1
- Toplantı odaları: Tercihe bağlı
- Giriş / resepsiyon: 1-2
- Sunucu odası: 1

### Büyük Mağaza / Alışveriş Merkezi Mağazası (200-500 m²)
**Önerilen:** 8-16 kamera
- Satış katı: Bölümlere göre
- Depo: 2-4
- Güvenlik noktaları: 2-4
- Dış cephe: 2-4

## Profesyonel Keşifin Önemi

Kamera sayısını teorik olarak hesaplamak her zaman doğru sonuç vermez. Her mekanın kendine özgü:
- Yapısal engeller (sütunlar, raflar, duvarlar)
- Aydınlatma koşulları
- Kör noktaları

vardır. Bu nedenle [ücretsiz keşif hizmetimizden](/kamera-sistemi-kurulumu) yararlanmanızı öneriyoruz.

[Güvenlik kamerası fiyatları 2026](/blog/guvenlik-kamerasi-montaj-ucreti-2026) hakkında da detaylı bilgi alabilirsiniz.

## Sıkça Sorulan Sorular`,
    image: "/images/blog/isyeri-kamera-sayisi.jpg",
  },
  {
    slug: "alarm-sistemi-fiyatlari-2026",
    title: "Alarm Sistemi Fiyatları 2026 | Hırsız Alarm Kurulum Ücreti",
    excerpt:
      "Konut ve işyeri için hırsız alarm sistemi kurulum maliyeti. 2026 yılı güncel alarm sistemi fiyatları, kablolu vs kablosuz karşılaştırması.",
    publishedAt: "2026-02-10",
    readTime: 7,
    category: "Fiyatlar ve Rehber",
    tags: ["alarm", "fiyat", "kurulum"],
    content: `## Alarm Sistemi Fiyatları 2026: Kapsamlı Fiyat Rehberi

Güvenlik alarm sistemi yaptırmayı düşünüyorsanız, 2026 yılı güncel alarm sistemi fiyatları hakkında doğru bilgiye ihtiyacınız var. Bu rehberde kablolu ve kablosuz alarm sistemlerinin maliyetlerini, fiyatı etkileyen faktörleri ve paket fiyatlarını ele alıyoruz.

## Alarm Sistemi Bileşenleri ve Maliyetleri

### Kontrol Paneli
Alarm sisteminin beynidir. Tüm sensörlerden gelen sinyalleri işler.
- **Küçük panel (4-8 bölge):** 1.500 - 3.000 TL
- **Orta panel (8-16 bölge):** 3.000 - 6.000 TL
- **Büyük panel (32+ bölge):** 6.000 - 20.000 TL

### Hareket Sensörleri (PIR)
- **Standart PIR:** 300 - 600 TL/adet
- **Evcil hayvan toleranslı PIR:** 500 - 1.000 TL/adet
- **Çift teknoloji sensör:** 800 - 1.500 TL/adet

### Manyetik Kapı/Pencere Sensörleri
- **Kablolu:** 150 - 300 TL/adet
- **Kablosuz:** 300 - 600 TL/adet

### Siren
- **İç siren:** 400 - 800 TL
- **Dış siren + flaşör:** 800 - 2.000 TL

### GSM Modülü
- **Temel GSM:** 500 - 1.000 TL
- **GSM + İnternet çift bağlantı:** 1.000 - 2.000 TL

## Kablolu vs Kablosuz: Fiyat Farkı

| Özellik | Kablolu | Kablosuz |
|---------|---------|----------|
| Başlangıç maliyeti | Düşük-Orta | Orta-Yüksek |
| Montaj maliyeti | Yüksek | Düşük |
| Bakım maliyeti | Düşük | Orta (batarya) |
| En uygun durum | İnşaat aşaması | Hazır yapı |

## Paket Fiyatları

### Temel Konut Paketi
- 1 kontrol paneli, 2 PIR sensör, 4 manyetik sensör, 1 siren, GSM modül
- **Toplam:** 8.000 - 12.000 TL

### Tam Koruma Paketi (İşyeri)
- 1 kontrol paneli, 4 PIR sensör, 8 manyetik sensör, iç + dış siren, GSM + İnternet
- **Toplam:** 15.000 - 22.000 TL

### İzleme Merkezi Aboneliği
- Aylık 150 - 300 TL (paket ve operatöre göre değişir)

## Alarm Sistemi ile [Güvenlik Kamerası](/kamera-sistemi-kurulumu) Birlikte Kurulursa?

Alarm ve kamera sistemini aynı anda kurdurduğunuzda hem zaman hem de maliyet tasarrufu sağlarsınız. Ortalama %15-20 indirim uygulanır.

[Yangın alarm sistemi](/yangin-alarm-sistemi-kurulumu) eklenmesi durumunda toplam paket daha da avantajlı hale gelir.

## Sıkça Sorulan Sorular`,
    image: "/images/blog/alarm-sistemi-fiyat-2026.jpg",
  },
  {
    slug: "yangin-alarm-sistemi-zorunlu-mu",
    title: "Yangın Alarm Sistemi Zorunlu mu? Yasal Zorunluluklar 2026",
    excerpt:
      "Türkiye'de hangi binalar için yangın alarm sistemi zorunludur? İşyeri, apartman ve kamu binaları için yasal gereklilikler ve cezalar hakkında kapsamlı bilgi.",
    publishedAt: "2026-02-25",
    readTime: 9,
    category: "Yasal Rehber",
    tags: ["yangın", "yasal", "zorunluluk"],
    content: `## Yangın Alarm Sistemi Zorunlu mu? 2026 Yasal Rehberi

Türkiye'de yangın alarm sistemi yasal zorunluluğu, birçok işletme sahibi ve bina yöneticisi tarafından merak edilen bir konudur. Kısa cevap: **Evet, birçok yapı türü için zorunludur.**

## Yasal Dayanak

Yangın alarm sistemi zorunluluğu şu mevzuatlarla düzenlenmiştir:

- **Binaların Yangından Korunması Hakkında Yönetmelik** (2007, güncelleme 2015)
- **TS EN 54** serisi standartları
- **İl İtfaiye Müdürlüğü** denetimleri
- **İş Sağlığı ve Güvenliği Kanunu** (6331 sayılı)

## Hangi Binalar İçin Zorunlu?

### Kesinlikle Zorunlu Olanlar

**İşyerleri:**
- 50 kişiden fazla çalışanı olan tüm işyerleri
- Kolay yanan/patlayan madde kullanılan tüm işyerleri
- Otel, pansiyon, yurt gibi konaklama tesisleri
- 200 m² üzeri restoran, kafe, bar
- Hastane, klinik, eczane
- Alışveriş merkezleri ve mağazalar

**Konut:**
- 4 kattan fazla apartmanlar
- Site ve toplu konut projeleri
- Yüksek katlı konutlar

**Kamu Binaları:**
- Okul, dershane
- Devlet daireleri
- Kültür merkezleri

### Muaf Olanlar
- Tek katlı müstakil ev
- Çok küçük esnaf işyerleri (10 m² altı)

## Yangın Alarm Sistemi Olmadan Ne Olur?

**İtfaiye denetimi sonrası cezalar:**
- İlk ihlal: Uyarı + süre tanıma
- Devam eden ihlal: 5.000 - 50.000 TL idari para cezası
- İşyeri kapatma kararı

**Sigorta sorunları:**
- Yangın halinde sigorta tazminatı ödenmeyebilir
- Poliçe geçersiz sayılabilir

**Yasal sorumluluk:**
- Yangın nedeniyle oluşan zarar veya kayıp durumunda bina sahibi ve işletmeci hukuki sorumlulukla karşılaşabilir

## Zorunlu Sistem Bileşenleri

Yönetmeliğe uygun bir yangın alarm sistemi şunları içermelidir:

1. **Yangın alarm kontrol paneli**
2. **Duman dedektörleri** (her odada)
3. **Isı dedektörleri** (mutfak gibi alanlarda)
4. **Manuel ihbar butonları** (MİB) — her katta, çıkış yollarında
5. **Sesli uyarı üniteleri** (siren)
6. **Görsel uyarı** (flaşör — işitme engelliler için)
7. **Resmi proje ve belgeler**

## Belgelendirme ve Test

Sistem kurulumu sonrası şu belgeler temin edilmelidir:
- Projelendirilmiş sistem çizimi
- Uygulama belgesi
- Yıllık test ve bakım raporu

[Yangın alarm sistemi kurulumu](/yangin-alarm-sistemi-kurulumu) hizmetimizde tüm belgeler kuruluma dahildir.

## Mevcut Sistemi Yenileme

Eski veya arızalı yangın alarm sistemi olan binalar için sistem yenileme veya modernizasyon da yapıyoruz. [Bakım ve servis hizmetimiz](/bakim-servis-uzaktan-izleme) hakkında bilgi alın.

## Sıkça Sorulan Sorular`,
    image: "/images/blog/yangin-alarm-zorunlu-mu.jpg",
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
