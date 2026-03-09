export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  updatedAt?: string;
  readTime: number;
  category: string;
  tags: string[];
  image?: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "guvenlik-kamerasi-montaj-ucreti-2026",
    title: "Güvenlik Kamerası Montaj Ücreti 2026",
    excerpt:
      "Ev, işyeri ve depo için güvenlik kamerası kurulum maliyeti ne kadar? 2026 yılı güncel fiyatlar, sistem bileşenleri ve montaj ücretleri hakkında kapsamlı rehber.",
    publishedAt: "2026-01-15",
    updatedAt: "2026-03-09",
    readTime: 8,
    category: "Fiyatlar ve Rehber",
    tags: ["kamera", "fiyat", "montaj", "güvenlik kamerası"],
    image: "/images/blog/kamera-fiyat-2026.jpg",
    featured: true,
    content: `## Güvenlik Kamerası Montaj Ücreti 2026

Güvenlik kamerası kurulumu yaptırmayı düşünüyorsanız en kritik soru toplam maliyetin ne olacağıdır. Ancak doğru hesap sadece kamera fiyatına bakılarak yapılamaz. Kamera tipi, kayıt cihazı, sabit disk, kablolama, montaj zorluğu ve istenen görüntü kalitesi toplam fiyatı doğrudan etkiler.

## Kamera Tiplerine Göre Fiyatlar

### Dome Kamera
İç mekanlarda en sık kullanılan modellerdendir. Tavana yakın montajı kolaydır ve mağaza, ofis, apartman içi gibi alanlarda sık tercih edilir.

- Giriş seviyesi: **800 - 1.500 TL**
- Orta seviye: **1.500 - 3.000 TL**
- Üst seviye: **3.000 - 6.000 TL**

### Bullet Kamera
Dış mekanlarda, çevre güvenliğinde ve daha uzun görüş ihtiyacında öne çıkar.

- Giriş seviyesi: **1.000 - 2.000 TL**
- Orta seviye: **2.000 - 4.000 TL**
- Üst seviye: **4.000 - 8.000 TL**

### PTZ Kamera
Büyük sahalar, fabrika çevresi, otopark ve geniş alanlarda kullanılır. Uzaktan döndürme ve zoom yapma avantajı sağlar.

- Standart PTZ: **5.000 - 15.000 TL**
- Profesyonel PTZ: **15.000 - 40.000 TL**

## Toplam Sistem Maliyetini Oluşturan Kalemler

Bir güvenlik kamerası sistemi sadece kameradan ibaret değildir. Sağlıklı çalışan bir kurulum için aşağıdaki parçalar birlikte değerlendirilmelidir.

| Bileşen | Fiyat Aralığı |
|---------|---------------|
| Kamera (adet başı) | 800 - 6.000 TL |
| NVR Kayıt Cihazı | 3.000 - 15.000 TL |
| Sabit Disk (2TB) | 1.500 - 3.000 TL |
| Kablo ve Bağlantı | 500 - 3.000 TL |
| Montaj İşçiliği | 500 - 1.500 TL / kamera |

## Paket Fiyat Örnekleri

### Konut Paketi
- 2 kameralı temel sistem: **12.000 - 18.000 TL**
- 4 kameralı orta seviye sistem: **18.000 - 28.000 TL**

### İşyeri Paketi
- 4 kameralı küçük işyeri: **20.000 - 30.000 TL**
- 8 kameralı orta ölçekli işyeri: **35.000 - 55.000 TL**

### Büyük Projeler
8 ve üzeri kameralı projelerde keşif sonrası özel teklif hazırlanması daha doğrudur. Çünkü kablo mesafesi, saha yapısı ve kör noktalar maliyeti ciddi şekilde değiştirir.

## Fiyatı Etkileyen Ana Unsurlar

### Görüntü Kalitesi
1080p ile 4MP veya 4K sistemler arasında ciddi fiyat farkı oluşur. Daha net görüntü, daha yüksek cihaz maliyeti demektir.

### Kablo Altyapısı
Hazır altyapı varsa maliyet düşer. Sıfırdan kablo çekilecekse işçilik ve malzeme artar.

### Montaj Zorluğu
Asma tavan, yüksek tavan, dış cephe, merdiven boşluğu veya uzun kablo mesafesi gibi durumlar kurulum ücretini artırabilir.

### Ek Özellikler
Yüz tanıma, plaka tanıma, ses kaydı veya gelişmiş analitik gibi özellikler toplam maliyeti yükseltir.

## Sonuç

Doğru fiyat almak için ürünleri tek tek toplamak yerine ihtiyaç analizi yapmak gerekir. Ucuz görünen sistem, yanlış planlama yüzünden sonradan daha pahalıya gelebilir.

[Kamera sistemi kurulumu](/kamera-sistemi-kurulumu) sayfamızdan ücretsiz keşif talebi bırakabilirsiniz.

[Alarm sistemi kurulumu](/alarm-sistemi-kurulumu) sayfası da karşılaştırma için faydalı olabilir.`,
  },
  {
    slug: "isyerine-kac-kamera-lazim",
    title: "İşyerine Kaç Kamera Lazım? Uzman Rehberi",
    excerpt:
      "Mağaza, ofis, restoran ve depo gibi işletmeler için doğru kamera sayısı nasıl belirlenir? Mekan tipine göre pratik hesaplama rehberi.",
    publishedAt: "2026-01-28",
    updatedAt: "2026-03-09",
    readTime: 6,
    category: "Teknik Rehber",
    tags: ["kamera", "işyeri", "kamera sayısı", "rehber"],
    image: "/images/blog/isyeri-kamera-sayisi.jpg",
    featured: true,
    content: `## İşyerine Kaç Kamera Lazım?

İşyerine kurulacak kamera sayısı, sadece metrekareye göre belirlenmez. Giriş çıkış noktaları, kasa alanı, depo, kör noktalar ve çalışma düzeni birlikte değerlendirilmelidir.

## Kamera Sayısını Belirleyen Temel Faktörler

### Mekan Büyüklüğü
Genel yaklaşım olarak her 50-80 m² için en az 1 kamera planlanabilir. Ancak bu sadece başlangıç seviyesinde bir referanstır.

### Kritik Noktalar
Mutlaka izlenmesi gereken alanlar:
- giriş kapıları
- ödeme/kasa alanı
- depo bölgesi
- personel giriş çıkış alanı
- açık ürün rafları veya yüksek riskli noktalar

### Kamera Açısı
Geniş açılı kamera ile daha az kamera kullanılabilir. Ancak detay ihtiyacı varsa dar açılı veya daha yüksek çözünürlüklü sistem gerekebilir.

## Mekan Tipine Göre Örnek Kamera Sayıları

### Küçük Dükkan
**2-4 kamera**
- giriş
- kasa
- satış alanı
- gerekiyorsa arka bölüm

### Orta Boy Mağaza
**4-8 kamera**
- giriş
- kasa
- satış reyonları
- depo girişi

### Restoran / Kafe
**4-6 kamera**
- müşteri alanı
- giriş
- kasa
- mutfak veya servis alanı

### Ofis
**4-8 kamera**
- giriş / resepsiyon
- açık ofis alanı
- kritik oda veya sunucu alanı
- koridorlar

### Büyük Mağaza / Depo
**8-16 kamera**
- satış / operasyon alanları
- giriş çıkışlar
- depo
- dış cephe
- yükleme boşaltma alanları

## Neden Ezbere Kamera Sayısı Vermek Yanlıştır?

Her işyerinin yapısı farklıdır. Kolonlar, raf sistemleri, aynalı yüzeyler, ışık farkları ve kör noktalar teorik hesabı bozar. Bu nedenle keşif yapılmadan verilen rakam çoğu zaman eksik veya gereksiz maliyetli olur.

## Sonuç

Amaç fazla kamera satmak değil, doğru yerlere doğru sayıda kamera koymaktır. Fazla kamera da az kamera kadar kötü olabilir çünkü gereksiz maliyet yaratır.

[Kamera sistemi kurulumu](/kamera-sistemi-kurulumu) sayfamızdan ücretsiz keşif talebi bırakabilirsiniz.

[Güvenlik kamerası montaj ücreti 2026](/blog/guvenlik-kamerasi-montaj-ucreti-2026) yazısı da bütçe planlaması için faydalıdır.`,
  },
  {
    slug: "alarm-sistemi-fiyatlari-2026",
    title: "Alarm Sistemi Fiyatları 2026 | Hırsız Alarm Kurulum Ücreti",
    excerpt:
      "Konut ve işyeri için alarm sistemi kurulum maliyeti ne kadar? 2026 yılı güncel fiyatlar, kablolu-kablosuz farkları ve paket örnekleri.",
    publishedAt: "2026-02-10",
    updatedAt: "2026-03-09",
    readTime: 7,
    category: "Fiyatlar ve Rehber",
    tags: ["alarm", "fiyat", "kurulum", "hırsız alarmı"],
    image: "/images/blog/alarm-sistemi-fiyat-2026.jpg",
    content: `## Alarm Sistemi Fiyatları 2026

Alarm sistemi fiyatı; panel, sensör sayısı, kablolu veya kablosuz tercih, siren yapısı ve haberleşme modülüne göre değişir. Hazır yapılar için kablosuz sistemler avantajlı olabilirken, yeni yapıda kablolu sistem daha verimli olabilir.

## Temel Alarm Sistemi Bileşenleri

### Kontrol Paneli
- küçük panel: **1.500 - 3.000 TL**
- orta panel: **3.000 - 6.000 TL**
- büyük panel: **6.000 - 20.000 TL**

### Hareket Sensörleri
- standart PIR: **300 - 600 TL**
- pet toleranslı PIR: **500 - 1.000 TL**
- çift teknoloji sensör: **800 - 1.500 TL**

### Manyetik Sensörler
- kablolu: **150 - 300 TL**
- kablosuz: **300 - 600 TL**

### Siren ve Haberleşme
- iç siren: **400 - 800 TL**
- dış siren: **800 - 2.000 TL**
- GSM modülü: **500 - 2.000 TL**

## Kablolu ve Kablosuz Alarm Karşılaştırması

| Özellik | Kablolu | Kablosuz |
|---------|---------|----------|
| Başlangıç maliyeti | Düşük-Orta | Orta-Yüksek |
| Montaj işçiliği | Daha yüksek | Daha düşük |
| Sonradan müdahale | Zor | Kolay |
| Hazır yapı için uygunluk | Orta | Yüksek |

## Örnek Paketler

### Temel Konut Paketi
- panel
- 2 hareket sensörü
- 4 manyetik sensör
- 1 siren
- GSM modül

**Toplam:** 8.000 - 12.000 TL

### İşyeri Paketi
- panel
- 4 hareket sensörü
- 8 manyetik sensör
- iç + dış siren
- GSM + internet modül

**Toplam:** 15.000 - 22.000 TL

## Kamera ile Birlikte Kurulum Avantajı

Alarm ve kamera sistemi birlikte planlanırsa hem altyapı hem işçilik daha verimli yönetilir. Birçok projede toplam maliyet avantajı oluşur.

[Alarm sistemi kurulumu](/alarm-sistemi-kurulumu) sayfasından teklif bırakabilirsiniz.

[Yangın alarm sistemi kurulumu](/yangin-alarm-sistemi-kurulumu) ile birlikte kurulum senaryolarını da düşünebilirsiniz.`,
  },
  {
    slug: "yangin-alarm-sistemi-zorunlu-mu",
    title: "Yangın Alarm Sistemi Zorunlu mu? Yasal Zorunluluklar 2026",
    excerpt:
      "Türkiye’de hangi yapı ve işletmeler için yangın alarm sistemi zorunludur? Yasal gereklilikler, riskler ve temel sistem bileşenleri hakkında rehber.",
    publishedAt: "2026-02-25",
    updatedAt: "2026-03-09",
    readTime: 9,
    category: "Yasal Rehber",
    tags: ["yangın", "yasal", "zorunluluk", "yangın alarmı"],
    image: "/images/blog/yangin-alarm-zorunlu-mu.jpg",
    content: `## Yangın Alarm Sistemi Zorunlu mu?

Birçok işletme ve bina yöneticisi için kısa cevap şudur: **Evet, birçok yapı tipi için zorunludur.** Ancak zorunluluğun kapsamı binanın kullanım şekline ve büyüklüğüne göre değişebilir.

## Temel Yasal Dayanaklar

- Binaların Yangından Korunması Hakkında Yönetmelik
- TS EN 54 standartları
- İtfaiye denetimleri
- İş Sağlığı ve Güvenliği mevzuatı

## Hangi Yapılarda Zorunlu Olabilir?

### İşyerleri
- çok çalışanlı işyerleri
- yanıcı veya riskli üretim alanları
- otel, pansiyon, yurt gibi yapılar
- restoran, kafe ve yoğun kullanım alanları
- sağlık yapıları

### Konut Yapıları
- çok katlı apartmanlar
- site ve toplu konut projeleri
- yüksek katlı konut yapıları

### Kamu ve Eğitim Yapıları
- okul ve kurslar
- devlet daireleri
- kültür ve toplu kullanım alanları

## Sistem Olmazsa Ne Gibi Riskler Doğar?

- itfaiye denetimlerinde sorun
- para cezası riski
- ruhsat ve işletme sorunları
- sigorta problemleri
- ciddi can ve mal kaybı riski

## Temel Sistem Bileşenleri

- yangın alarm paneli
- duman dedektörleri
- ısı dedektörleri
- manuel ihbar butonları
- siren ve flaşörler
- proje ve belgelendirme

## Sonuç

Yangın sistemleri “sonra bakarız” denecek alanlardan biri değildir. Özellikle işletmeler için hem hukuki hem operasyonel risk doğurur.

[Yangın alarm sistemi kurulumu](/yangin-alarm-sistemi-kurulumu) sayfasından detaylı teklif alabilirsiniz.

[Bakım, servis ve uzaktan izleme](/bakim-servis-uzaktan-izleme) sayfamız da mevcut sistemlerin kontrolü için faydalı olabilir.`,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

export function getFeaturedBlogPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.featured);
}

export function getRelatedBlogPosts(currentSlug: string, limit = 3): BlogPost[] {
  const currentPost = getBlogPostBySlug(currentSlug);

  if (!currentPost) {
    return blogPosts.slice(0, limit);
  }

  return blogPosts
    .filter((post) => post.slug !== currentSlug)
    .sort((a, b) => {
      const aMatches =
        a.category === currentPost.category ||
        a.tags.some((tag) => currentPost.tags.includes(tag));
      const bMatches =
        b.category === currentPost.category ||
        b.tags.some((tag) => currentPost.tags.includes(tag));

      if (aMatches === bMatches) return 0;
      return aMatches ? -1 : 1;
    })
    .slice(0, limit);
}
