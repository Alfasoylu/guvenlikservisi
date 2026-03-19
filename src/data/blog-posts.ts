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

import { generateProgrammaticPosts } from "@/data/seo/programmatic-posts";

export function getAllBlogPosts(): BlogPost[] {
  return [...blogPosts, ...generateProgrammaticPosts()];
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
    image: "/images/services/bakim-servis/fabrika-guvenlik-kamera-sistemi-kurulum-2650x1470px.jpg",
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

![NVR kayıt cihazı ve sabit disk bakım kontrolü](/images/services/bakim-servis/nvr-kayit-cihazi-bakim-kontrol-harddisk-testi.jpg "NVR kayıt cihazı ve sabit disk — sistemin kritik bileşenleri")

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
    image: "/images/diagrams/isyeri-kamera-sistemi-yerlesim-plani.webp",
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

![İşyeri kamera sistemi yerleşim planı](/images/diagrams/isyeri-kamera-sistemi-yerlesim-plani.webp "İşyeri kamera yerleşim planı — kör nokta analizi ve kapsama alanı")

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
    image: "/images/landing/isyeri-ajax-alarm-kurulum-servisi.png",
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

![İşyeri Ajax alarm kurulum servisi — kablosuz sensör montajı](/images/landing/isyeri-ajax-alarm-kurulum-servisi.png "İşyeri alarm kurulumu — kablosuz Ajax sistemi montajı")

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
    image: "/images/yangin-alarm/yangin-alarm-sistemi-kurulumu-istanbul-hero.webp",
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
  {
    slug: "ip-kamera-mi-analog-kamera-mi",
    title: "IP Kamera mı Analog Kamera mı? Farklar ve Doğru Tercih Rehberi",
    excerpt:
      "IP kamera ve analog kamera arasındaki teknik farklar, avantajlar, dezavantajlar ve mekan tipine göre doğru sistem seçimi rehberi.",
    publishedAt: "2026-03-10",
    readTime: 9,
    category: "Teknik Rehber",
    tags: [
      "ip kamera",
      "analog kamera",
      "kamera karşılaştırma",
      "güvenlik kamerası",
    ],
    image: "/images/landing/ip-kamera-kurulum-detay.webp",
    featured: true,
    content: `## IP Kamera mı Analog Kamera mı?

Güvenlik kamerası seçimi yaparken en sık karşılaşılan soru budur: IP kamera mı yoksa analog kamera mı almalıyım? Her iki sistemin avantajları ve sınırlamaları vardır. Doğru seçim mekan tipine, bütçeye, görüntü kalitesi beklentisine ve uzaktan erişim ihtiyacına bağlı olarak değişir.

Bu rehberde IP ve analog kameraların teknik farklarını, kullanım senaryolarını ve karar verirken dikkat etmeniz gereken noktaları detaylı olarak inceliyoruz.

## Analog Kamera Nedir?

Analog kameralar güvenlik kamerası sektörünün en eski ve en yaygın bilinen teknolojisidir. Görüntü sinyalini koaksiyel kablo üzerinden DVR (Digital Video Recorder) cihazına iletir. DVR cihazı bu sinyali dijitale çevirir ve sabit diske kaydeder.

### Analog Kameranın Özellikleri

- Koaksiyel kablo (BNC bağlantı) ile veri iletimi
- Görüntü çözünürlüğü genellikle 720p veya 1080p seviyesinde
- Kurulum maliyeti genellikle daha düşük
- Kablo mesafesi 300 metreye kadar desteklenebilir
- DVR kayıt cihazı ile çalışır
- Her kamera için ayrı güç kaynağı gerekir

### Analog Kameranın Avantajları

- Daha düşük başlangıç maliyeti
- Basit kurulum süreci
- Uzun kablo mesafelerine uygunluk
- Mevcut koaksiyel altyapı varsa doğrudan kullanılabilir

### Analog Kameranın Dezavantajları

- Görüntü kalitesi sınırlı
- Zoom yapıldığında detay kaybı yaşanır
- Her kameraya ayrı güç kablosu gerekir
- Gelişmiş analitik özellikler sınırlı
- Ölçeklenebilirlik daha zor

## IP Kamera Nedir?

IP kameralar görüntüyü dijital olarak işler ve ağ (Ethernet veya Wi-Fi) üzerinden iletir. NVR (Network Video Recorder) ile çalışır. PoE (Power over Ethernet) teknolojisi sayesinde tek kablo ile hem veri hem enerji taşınabilir.

### IP Kameranın Özellikleri

- Ethernet veya Wi-Fi ile veri iletimi
- 2MP, 4MP, 4K ve üzeri çözünürlük seçenekleri
- PoE ile tek kablo çözümü (veri + enerji)
- NVR kayıt cihazı ile çalışır
- Dahili mikrofon, hoparlör ve analitik desteği
- Uzaktan erişim ve mobil izleme doğrudan desteklenir

### IP Kameranın Avantajları

- Yüksek çözünürlük ve detaylı görüntü
- PoE sayesinde tek kablo ile kurulum
- Gelişmiş analitik: hareket algılama, yüz tanıma, plaka okuma
- Kolay ölçeklenebilirlik ve genişleme
- Mobil uygulama ile uzaktan canlı izleme
- Ses kaydı desteği

### IP Kameranın Dezavantajları

- Başlangıç maliyeti analog sisteme göre daha yüksek
- Ağ altyapısı düzgün yapılmazsa performans düşer
- Kablo mesafesi standart Ethernet ile 100 metre sınırlı (extender ile artırılabilir)
- Bant genişliği ihtiyacı daha yüksek

## Teknik Karşılaştırma Tablosu

| Özellik | Analog Kamera | IP Kamera |
|---------|--------------|-----------|
| Çözünürlük | 720p - 1080p | 2MP - 4K+ |
| Kablo tipi | Koaksiyel | Ethernet (Cat5e/Cat6) |
| Güç | Ayrı adaptör | PoE (tek kablo) |
| Kayıt cihazı | DVR | NVR |
| Uzaktan erişim | Sınırlı | Doğrudan |
| Analitik | Temel | Gelişmiş |
| Kablo mesafesi | 300m | 100m (extender ile artırılabilir) |
| Başlangıç maliyeti | Düşük | Orta-Yüksek |

![IP kamera kurulum detayı — PoE switch ve NVR bağlantısı](/images/landing/ip-kamera-kurulum-detay.webp "IP kamera kurulumunda PoE switch ve NVR bağlantısı")

## Hangi Durumda Analog Kamera Tercih Edilmeli?

- Bütçe çok sınırlı ve detaylı görüntüye gerek yoksa
- Mevcut koaksiyel kablo altyapısı varsa ve değiştirmek istemiyorsanız
- Küçük bir alan için basit izleme yeterli olacaksa
- Uzaktan izleme ihtiyacı yoksa veya çok sınırlıysa

## Hangi Durumda IP Kamera Tercih Edilmeli?

- Yüksek çözünürlükte detaylı görüntü gerekiyorsa
- Mobil uygulama ile uzaktan canlı izleme isteniyorsa
- Tek kablo çözümünün (PoE) avantajından yararlanmak istiyorsanız
- İleride sistemi büyütmeyi planlıyorsanız
- Hareket algılama, yüz tanıma gibi gelişmiş özellikler isteniyorsa
- İşyeri, fabrika veya site gibi profesyonel projelerde

## Mekan Tipine Göre Öneriler

### Küçük Dükkan veya Ofis

2-4 kameralı bir projede IP kamera sistemi maliyeti makul seviyededir ve uzaktan izleme avantajı büyüktür. IP kamera önerilir.

### Mağaza veya Restoran

Müşteri alanı, kasa ve giriş izlemesi için detaylı görüntü önemlidir. IP kamera hem analitik hem kayıt kalitesi açısından daha uygundur.

### Apartman ve Site

Ortak alanlar, otopark ve giriş noktaları için IP kamera sistemi merkezi izleme ve kayıt arşivi açısından çok daha pratiktir. [Apartman kamera sistemi kurulumu](/blog/apartman-kamera-sistemi-kurulumu) yazımızda bu konuyu detaylandırıyoruz.

### Fabrika ve Depo

Geniş alanlarda PTZ kamera ve gece görüş ihtiyacı için IP kamera zorunlu seviyededir. PoE altyapı da kablolama maliyetini düşürür.

### Villa ve Müstakil Ev

Çevre güvenliği ve bahçe izleme için IP kamera gece görüş ve uzaktan erişim avantajı sağlar. [Ev güvenlik kamera sistemi rehberi](/blog/ev-guvenlik-kamera-sistemi-rehberi) yazımız da faydalı olabilir.

## Mevcut Analog Sistem IP Kameraya Dönüştürülebilir mi?

Evet, çoğu durumda mümkündür. Ancak dikkat edilmesi gereken noktalar vardır:

- Mevcut koaksiyel kablolar IP kamera için uygun değildir; yeni Ethernet kablolama gerekir
- DVR yerine NVR kayıt cihazı alınmalıdır
- PoE switch eklenerek tek kablo çözümüne geçilebilir
- Geçiş sürecinde hibrit DVR/NVR cihazları da değerlendirilebilir

## Sonuç ve Tavsiye

Günümüzde yeni kurulum projelerinde IP kamera standart haline gelmiştir. Analog kamera ise yalnızca çok sınırlı bütçe veya mevcut altyapıyı koruma senaryolarında anlamlıdır.

Doğru seçim için alanınızın keşif edilmesi, ihtiyacınızın analiz edilmesi ve bütçenize uygun sistemin planlanması gerekir.

[Kamera sistemi kurulumu](/kamera-sistemi-kurulumu) sayfamızdan ücretsiz keşif ve teklif talebinde bulunabilirsiniz.

[İstanbul kamera sistemi kurulumu](/istanbul/kamera-sistemi-kurulumu) sayfası da İstanbul'daki projeler için detaylı bilgi sunar.`,
  },
  {
    slug: "apartman-kamera-sistemi-kurulumu",
    title: "Apartman Kamera Sistemi Kurulumu Rehberi 2026",
    excerpt:
      "Apartman ve site için kamera sistemi kurulumu nasıl yapılır? Kamera noktaları, kayıt süresi, maliyet ve yönetim onayı süreçleri hakkında kapsamlı rehber.",
    publishedAt: "2026-03-18",
    readTime: 10,
    category: "Teknik Rehber",
    tags: ["apartman", "kamera", "site güvenlik", "apartman kamera"],
    image: "/images/services/bakim-servis/apartman-kamera-montaji-teknisyen-istanbul.jpg",
    featured: false,
    content: `## Apartman Kamera Sistemi Kurulumu

Apartman ve sitelerde güvenlik kamerası kurulumu, bina sakinlerinin güvenliğini artırmanın en etkili yollarından biridir. Giriş kapıları, otopark, asansör önleri ve ortak alanların kamera ile izlenmesi hem caydırıcılık sağlar hem de olay sonrası inceleme imkanı sunar.

Ancak apartman kamera sistemi kurulumu bireysel konut projelerinden farklı dinamiklere sahiptir. Yönetim kararı, bütçe paylaşımı, kamera noktası planlaması ve kayıt yönetimi birlikte düşünülmelidir.

## Apartmanda Kamera Neden Gerekli?

### Caydırıcılık

Görünür kameralar hırsızlık, vandalizm ve istenmeyen davranışları ciddi ölçüde azaltır. Giriş kapısında veya otoparkta kamera olduğunu bilen kişi iki kez düşünür.

### Olay Sonrası İnceleme

Hırsızlık, hasar veya kavga gibi olaylarda kayıt görüntüleri en güvenilir belgedir. Emniyet birimleri de kayıt talep edebilir.

### Paket ve Kargo Takibi

Apartman girişine bırakılan paketlerin kaybolması sık yaşanan bir sorundur. Kamera kaydı bu tür olayları aydınlatır.

### Ortak Alan Denetimi

Asansör kullanımı, otopark düzeni ve çöp alanı gibi ortak alanların denetimi kamerayla kolaylaşır.

## Hangi Noktalara Kamera Konulmalı?

### Bina Girişi

Ana giriş kapısı en kritik kamera noktasıdır. Giren ve çıkan herkesin görüntülenmesi gerekir. Geniş açılı bir kamera bu noktada yeterli olur.

### Otopark

Araç giriş çıkışı ve park alanı izlemesi için en az 2 kamera planlanmalıdır. Gece görüş özelliği burada önemlidir.

### Asansör Önleri

Her kattaki asansör önü özellikle yüksek katlı binalarda kritik noktadır. Mini dome kamera bu alanlar için uygundur.

### Merdiven Boşluğu

Ana giriş katındaki merdiven boşluğu izlenmelidir. Üst katlara erişim kontrol noktası olarak değerlendirilebilir.

### Çatı ve Teras Alanı

Erişime açık çatı veya teras varsa burası da izlenmelidir. Dış mekan kamerası ve gece görüş gerekir.

### Bahçe ve Çevre

Bahçeli apartmanlarda çevre hattı ve arka giriş noktaları da kapsama dahil edilmelidir.

[Kamera sistemi nereye takılır](/blog/kamera-sistemi-nereye-takilir) yazımızda genel yerleşim prensiplerini daha detaylı açıklıyoruz.

## Kaç Kamera Gerekli?

Apartman büyüklüğüne ve yapısına göre kamera sayısı değişir. Genel referans olarak:

- **Küçük apartman (8-16 daire):** 4-6 kamera
- **Orta apartman (16-32 daire):** 6-10 kamera
- **Büyük site (çok bloklu):** blok başına 4-8 kamera + ortak alan kameraları

Kesin kamera sayısı sahada keşif yapılmadan belirlenemez. Kör noktalar, aydınlatma durumu ve bina yapısı sayıyı değiştirir.

## Kayıt Süresi Ne Kadar Olmalı?

Apartmanlarda standart beklenti **en az 30 gün** kayıt süresine sahip olmaktır. Bu süre kamera çözünürlüğü ve sabit disk kapasitesine bağlıdır.

- **4 kamera, 2MP, 2TB disk:** yaklaşık 30-35 gün
- **8 kamera, 4MP, 4TB disk:** yaklaşık 25-30 gün
- **8 kamera, 4MP, 6TB disk:** yaklaşık 40-45 gün

Daha detaylı bilgi için [kamera sistemi kaç gün kayıt yapar](/blog/kamera-sistemi-kac-gun-kayit-yapar) yazımıza bakabilirsiniz.

## Kurulum Süreci Nasıl İşler?

### 1. Yönetim Kararı

Apartman yönetimi veya site yönetimi toplantısında kamera sistemi kurulumu kararı alınır. Kat malikleri kurulu kararı genellikle gereklidir.

### 2. Keşif ve Planlama

Profesyonel bir ekip sahada keşif yapar. Kamera noktaları, kablo güzergahı, kayıt cihazı yeri ve altyapı ihtiyacı belirlenir.

### 3. Teklif ve Onay

Keşif sonrası yazılı teklif hazırlanır. Yönetim onayı ile kuruluma geçilir.

### 4. Montaj ve Kablolama

Kameralar, kayıt cihazı, sabit disk ve gerekli altyapı monte edilir. Kablolama PoE altyapı ile yapılırsa tek kablo yeterli olur.

### 5. Devreye Alma ve Test

Sistem çalışır durumda test edilir. Gece görüş, kayıt kalitesi ve uzaktan erişim kontrol edilir.

### 6. Kullanıcı Teslimi

Yöneticiye veya kapıcıya sistemin kullanımı gösterilir. Mobil uygulama kurulumu yapılır.

## Maliyet ve Bütçe

Apartman kamera sistemi maliyeti kamera sayısı, marka, çözünürlük ve altyapı durumuna bağlıdır. Genel referans olarak:

- **4 kameralı temel sistem:** 15.000 - 22.000 TL
- **8 kameralı orta seviye sistem:** 28.000 - 42.000 TL
- **12+ kameralı büyük proje:** keşif sonrası özel teklif

Bu rakamlar montaj, kablolama, kayıt cihazı ve sabit disk dahil yaklaşık değerlerdir. [Güvenlik kamerası montaj ücreti 2026](/blog/guvenlik-kamerasi-montaj-ucreti-2026) yazımızda fiyatları detaylı olarak analiz ediyoruz.

## KVKK ve Yasal Durum

Apartmanlarda kamera sistemi kurulumunda KVKK (Kişisel Verilerin Korunması Kanunu) kapsamında dikkat edilmesi gereken noktalar vardır:

- Kameraların ortak alanlara yönlendirilmesi gerekir
- Özel mülk alanlarına (daire kapıları, balkonlar) kamera yönlendirilemez
- Kamera kaydı yapıldığına dair uyarı tabelası konulmalıdır
- Kayıtlara erişim yalnızca yetkili kişilerle sınırlandırılmalıdır
- Kat malikleri kurulu kararı ile kurulum yapılması önerilir

## Sık Yapılan Hatalar

- Kamera sayısını alan büyüklüğüne göre değil bütçeye göre belirlemek
- Gece görüş ihtiyacını göz ardı etmek
- Kayıt süresini kısa tutmak
- Kamera yerleşimini keşif yapmadan planlamak
- Uzaktan erişim kurulumunu ihmal etmek
- KVKK uyarı tabelasını koymamak

## Sonuç

Apartman kamera sistemi kurulumu doğru planlandığında hem güvenliği artırır hem de bina değerini yükseltir. Önemli olan doğru noktaları izlemek, yeterli kayıt kapasitesi planlamak ve profesyonel kurulum yaptırmaktır.

[Kamera sistemi kurulumu](/kamera-sistemi-kurulumu) sayfamızdan apartmanınız için ücretsiz keşif talebinde bulunabilirsiniz.

[İstanbul kamera sistemi kurulumu](/istanbul/kamera-sistemi-kurulumu) sayfası İstanbul'daki apartman projeleri için detaylı bilgi sunar.`,
  },
  {
    slug: "kamera-sistemi-kac-gun-kayit-yapar",
    title: "Kamera Sistemi Kaç Gün Kayıt Yapar? Depolama Rehberi",
    excerpt:
      "Güvenlik kamerası kaç gün kayıt yapar? Kayıt süresini etkileyen faktörler, disk kapasitesi hesaplama ve doğru depolama planlaması rehberi.",
    publishedAt: "2026-03-25",
    readTime: 8,
    category: "Teknik Rehber",
    tags: ["kamera", "kayıt süresi", "depolama", "NVR", "sabit disk"],
    image: "/images/services/bakim-servis/nvr-kayit-cihazi-bakim-harddisk-kontrol.jpg",
    featured: false,
    content: `## Kamera Sistemi Kaç Gün Kayıt Yapar?

Güvenlik kamerası alırken en çok sorulan sorulardan biri budur: Sistem kaç gün kayıt tutar? Cevap tek bir rakamla verilemez çünkü kayıt süresi kamera sayısı, çözünürlük, sıkıştırma formatı, kayıt modu ve sabit disk kapasitesine bağlı olarak değişir.

Bu rehberde kayıt süresini etkileyen tüm faktörleri, örnek senaryolarla disk kapasitesi hesaplamayı ve doğru depolama stratejisini anlatıyoruz.

## Kayıt Süresini Etkileyen Temel Faktörler

### 1. Kamera Sayısı

Daha fazla kamera daha fazla veri üretir. 4 kameralı bir sistem ile 16 kameralı bir sistem aynı disk üzerinde çok farklı sürelerde kayıt tutar.

### 2. Görüntü Çözünürlüğü

Çözünürlük arttıkça dosya boyutu büyür. 1080p bir kamera ile 4K bir kamera arasında veri üretimi farkı 3-4 kata kadar çıkabilir.

- **1080p (2MP):** Saatte yaklaşık 3-5 GB
- **2K (4MP):** Saatte yaklaşık 6-10 GB
- **4K (8MP):** Saatte yaklaşık 12-20 GB

Bu değerler kamera sayısına çarpılarak toplam veri üretimi hesaplanır.

### 3. Sıkıştırma Formatı

Modern kameralar H.265+ sıkıştırma kullanır. Bu format eski H.264 formatına göre veri boyutunu yaklaşık **%50** azaltır. Aynı disk kapasitesiyle daha uzun kayıt süresi elde edilir.

- **H.264:** Standart sıkıştırma
- **H.265:** Gelişmiş sıkıştırma (%30-50 tasarruf)
- **H.265+:** Akıllı sıkıştırma (%50-70 tasarruf)

### 4. Kayıt Modu

- **Sürekli kayıt:** 7/24 kayıt alır, en çok disk alanı kullanır
- **Hareket algılama kaydı:** Yalnızca hareket olduğunda kayıt yapar, disk kullanımını %40-70 azaltabilir
- **Programlı kayıt:** Belirli saatlerde kayıt yapar

### 5. Sabit Disk Kapasitesi

Kayıt cihazına takılan sabit diskin kapasitesi doğrudan kayıt süresini belirler. Yaygın kapasiteler:

- **1TB:** Küçük sistemler için
- **2TB:** Standart konut ve küçük işyeri
- **4TB:** Orta ölçekli projeler
- **6TB - 8TB:** Büyük projeler
- **10TB+:** Kurumsal ve uzun süreli kayıt ihtiyaçları

## Örnek Kayıt Süresi Hesaplamaları

### Senaryo 1: Küçük İşyeri

- 4 kamera, 2MP (1080p)
- H.265+ sıkıştırma
- Sürekli kayıt
- 2TB sabit disk

**Tahmini kayıt süresi:** 25-35 gün

### Senaryo 2: Orta Boy Mağaza

- 8 kamera, 4MP (2K)
- H.265+ sıkıştırma
- Sürekli kayıt
- 4TB sabit disk

**Tahmini kayıt süresi:** 18-25 gün

### Senaryo 3: Apartman

- 6 kamera, 2MP (1080p)
- H.265+ sıkıştırma
- Hareket algılama kaydı
- 2TB sabit disk

**Tahmini kayıt süresi:** 40-60 gün

### Senaryo 4: Fabrika

- 16 kamera, 4MP
- H.265 sıkıştırma
- Sürekli kayıt
- 2x 4TB sabit disk (8TB toplam)

**Tahmini kayıt süresi:** 15-22 gün

### Senaryo 5: Villa

- 4 kamera, 4MP
- H.265+ sıkıştırma
- Hareket algılama kaydı
- 2TB sabit disk

**Tahmini kayıt süresi:** 45-60 gün

## Kayıt Süresi Yetmiyorsa Ne Yapılabilir?

### Disk Kapasitesini Artırmak

En basit çözüm daha büyük veya ek sabit disk takmaktır. Çoğu NVR cihazı 2 disk yuvasına sahiptir.

### Sıkıştırma Formatını Güncellemek

Eğer kameralar ve NVR destekliyorsa H.265+ sıkıştırmaya geçmek kayıt süresini ciddi ölçüde artırır.

### Kayıt Modunu Değiştirmek

Sürekli kayıttan hareket algılama kaydına geçmek disk kullanımını dramatik biçimde azaltır. Kritik alanlar sürekli, diğerleri hareket algılama ile kaydedilebilir.

### Çözünürlüğü Optimize Etmek

Her kameranın 4K olması gerekmez. Geniş alan izleme için yüksek çözünürlük, iç mekan koridor görüntüleme için 1080p yeterli olabilir.

### Bulut Yedekleme

Kritik kayıtlar için bulut depolama opsiyonu değerlendirilebilir. Ancak internet hızı ve aylık maliyet hesaba katılmalıdır.

## Disk Seçerken Dikkat Edilecekler

Güvenlik kamerası sistemlerinde standart bilgisayar hard diski kullanılması önerilmez. Özel olarak 7/24 kayıt için tasarlanmış **güvenlik serisi diskler** tercih edilmelidir.

- **WD Purple:** Güvenlik kamerası sistemleri için optimize
- **Seagate SkyHawk:** 7/24 kayıt desteği ve yüksek iş yükü kapasitesi

Bu diskler sürekli yazma operasyonuna dayanıklıdır ve veri bütünlüğünü daha iyi korur.

## NVR ve DVR Disk Kapasitesi Farkı

NVR cihazları genellikle daha geniş disk desteği sunar. Bazı modeller 2-4 disk yuvasına sahiptir ve RAID yapılandırması destekler. DVR cihazlarında ise genellikle 1-2 disk yuvası bulunur.

## Sık Sorulan Sorular

### Kayıtlar otomatik silinir mi?

Evet. Disk dolduğunda en eski kayıtlar otomatik olarak üzerine yazılır. Bu döngüsel kayıt sistemi sayesinde disk hiçbir zaman dolmaz.

### Belirli bir tarihin kaydına nasıl ulaşırım?

NVR arayüzünden tarih ve saat seçerek ilgili kaydı kolayca bulabilirsiniz. Mobil uygulamadan da aynı şekilde erişilebilir.

### Kayıtları USB belleğe aktarabilir miyim?

Evet. Çoğu NVR ve DVR cihazı USB çıkışı üzerinden belirli zaman aralığındaki kayıtları dışa aktarmayı destekler.

## Sonuç

Kayıt süresi planlama, kamera sistemi kurulumunun en kritik adımlarından biridir. Yanlış disk kapasitesi seçimi ya ihtiyaç duyulan kayıtların silinmesine ya da gereksiz maliyete neden olur.

Doğru kayıt süresi hesaplaması için alanınızın keşif edilmesi ve ihtiyaçlarınıza göre sistem planlanması gerekir.

[Kamera sistemi kurulumu](/kamera-sistemi-kurulumu) sayfamızdan ücretsiz keşif talebi bırakabilirsiniz.

[Güvenlik kamerası montaj ücreti 2026](/blog/guvenlik-kamerasi-montaj-ucreti-2026) yazısı da bütçe planlaması için faydalı olabilir.`,
  },
  {
    slug: "gece-goruslu-kamera-nasil-calisir",
    title: "Gece Görüşlü Kamera Nasıl Çalışır? Teknik Rehber",
    excerpt:
      "Gece görüşlü güvenlik kamerası nasıl çalışır? IR, starlight ve renkli gece görüş teknolojileri, kamera mesafesi ve doğru seçim rehberi.",
    publishedAt: "2026-04-02",
    readTime: 8,
    category: "Teknik Rehber",
    tags: ["gece görüş", "IR kamera", "starlight", "güvenlik kamerası"],
    image: "/images/landing/ip-kamera-gece-gorus.png",
    featured: false,
    content: `## Gece Görüşlü Kamera Nasıl Çalışır?

Güvenlik kamerası kurulumunda en sık göz ardı edilen konulardan biri gece görüş performansıdır. Gündüz mükemmel görüntü veren bir kamera, gece tamamen karanlık veya puslu görüntü üretebilir. Bu nedenle gece görüş teknolojisini anlamak doğru kamera seçimi için kritik öneme sahiptir.

Bu rehberde gece görüş teknolojilerini, çalışma prensiplerini, mesafe farklarını ve mekan tipine göre doğru gece görüş kamerası seçimini anlatıyoruz.

## Gece Görüş Teknolojileri

### 1. IR (Infrared / Kızılötesi) Gece Görüş

En yaygın kullanılan gece görüş teknolojisidir. Kameranın etrafındaki IR LED'ler gözle görülmeyen kızılötesi ışık yayar. Bu ışık nesnelerden yansıyarak kamera sensörüne döner ve siyah-beyaz görüntü oluşturur.

**Çalışma prensibi:**
- Ortam ışığı belirli bir seviyenin altına düştüğünde IR LED'ler otomatik devreye girer
- Kamera gündüz modundan gece moduna (siyah-beyaz) geçer
- IR ışığı insan gözüyle görülmez ancak kızılötesi filtresiz kameralarda hafif kırmızı parıltı görülebilir

**IR mesafesi örnekleri:**
- Ekonomik kameralar: 15-20 metre
- Orta segment kameralar: 30-50 metre
- Profesyonel kameralar: 50-80 metre
- Özel IR aydınlatıcılı sistemler: 100+ metre

**Avantajları:**
- Ek aydınlatma gerektirmez
- Çoğu kamerada standart olarak bulunur
- Maliyet eklemez
- Tamamen karanlık ortamda bile çalışır

**Dezavantajları:**
- Görüntü siyah-beyaz olur
- IR mesafesi sınırlıdır
- Yakın nesnelerde IR parlaması (whiteout) oluşabilir
- Cam arkasına konulursa IR yansıması sorun yaratır

### 2. Starlight (Yıldız Işığı) Teknolojisi

Gelişmiş sensör teknolojisi sayesinde çok düşük ışıkta bile renkli görüntü üretebilen kameralardır. 0.001 Lux gibi aşırı düşük ışık seviyelerinde bile çalışabilir.

**Çalışma prensibi:**
- Büyük sensör boyutu ile daha fazla ışık toplar
- Gelişmiş sinyal işleme ile düşük ışıkta gürültüyü azaltır
- Geniş diyafram açıklığına sahip lens kullanır

**Avantajları:**
- Düşük ışıkta renkli görüntü
- Kıyafet rengi ve araç rengi gibi detaylar ayırt edilebilir
- IR'ye göre daha doğal görüntü

**Dezavantajları:**
- Tamamen karanlık ortamda yetersiz kalabilir (minimum ışık gerekir)
- Daha yüksek maliyet
- Lens kalitesi kritik önem taşır

### 3. ColorVu / Renkli Gece Görüş

Hikvision'ın ColorVu teknolojisi gibi çözümler, dahili sıcak beyaz LED aydınlatma ile geceyi gündüze çevirir. F1.0 diyafram açıklığına sahip lens ve gelişmiş sensör kombinasyonu kullanır.

**Çalışma prensibi:**
- Sıcak beyaz LED'ler görünür ışık yayar ve ortamı aydınlatır
- Büyük diyafram açıklığı (F1.0) ile maksimum ışık toplar
- Gelişmiş sensör teknolojisi ile renkli görüntü oluşturur

**Avantajları:**
- Gece de tam renkli görüntü
- Detay ve renk ayrımı mükemmel
- Caydırıcılık etkisi (görünür ışık)

**Dezavantajları:**
- LED ışığı gözle görülür (gizlilik dezavantajı)
- Enerji tüketimi daha yüksek
- Böcek ve toz çekebilir
- Maliyet daha yüksek

### 4. Akıllı IR (Smart IR)

Gelişmiş kameralarda bulunan akıllı IR sistemi, nesneye olan mesafeye göre IR LED yoğunluğunu otomatik ayarlar. Yakın nesnelerde IR gücünü düşürerek parlamayı önler, uzak nesneler için artırır.

## Mekan Tipine Göre Gece Görüş Seçimi

### Dış Mekan (Bahçe, Otopark, Çevre)

Dış mekanda gece görüş mesafesi kritik önem taşır. Minimum 30 metre IR mesafesine sahip kameralar tercih edilmelidir. Geniş alanlarda 50-80 metre gerekebilir.

Sokak lambası veya mevcut aydınlatma varsa starlight kamera renkli görüntü avantajı sağlar. Hiç aydınlatma yoksa IR kamera zorunludur.

### İç Mekan (Ofis, Mağaza, Depo)

İç mekanda genellikle 15-20 metre IR mesafesi yeterlidir. Ancak mağaza veya depo gibi gece tamamen karanlık olan alanlarda yeterli IR gücüne sahip kamera seçilmelidir.

### Apartman Girişi ve Otopark

Apartman girişinde genellikle aydınlatma vardır, bu durumda starlight kamera renkli görüntü avantajı sağlar. Otopark alanında ise aydınlatma seviyesine göre karar verilmelidir. [Apartman kamera sistemi kurulumu](/blog/apartman-kamera-sistemi-kurulumu) yazımızda bu konuyu detaylandırıyoruz.

### Fabrika ve Geniş Saha

Fabrika çevresi ve geniş sahalar için PTZ kamera ve ek IR aydınlatıcı kombinasyonu gerekebilir. 100 metre üzeri mesafelerde lazer IR teknolojisi değerlendirilebilir.

## Gece Görüş Performansını Etkileyen Faktörler

### Lens Kalitesi

Geniş diyafram açıklığına sahip lens daha fazla ışık toplar. F1.0 veya F1.4 lensler gece görüşte büyük fark yaratır.

### Sensör Boyutu

1/2.8 inçlik sensör, 1/3 inçlik sensöre göre daha fazla ışık toplar. Starlight kameralarda sensör boyutu kritik öneme sahiptir.

### Çevre Aydınlatması

Mevcut çevresel aydınlatma gece görüş performansını doğrudan etkiler. Minimum aydınlatma bile starlight kameranın renkli görüntü üretmesine yardımcı olur.

### Kamera Montaj Yüksekliği

Kamera ne kadar yükseğe monte edilirse IR aydınlatma o kadar geniş alana dağılır ve yoğunluğu düşer. Montaj yüksekliği IR mesafesiyle orantılı planlanmalıdır.

### Cam Arkası Sorunu

IR kamera cam arkasına konulduğunda kızılötesi ışık camdan yansıyarak görüntüyü bozar. Cam arkası kullanımda IR kapatılmalı ve dış aydınlatma sağlanmalıdır.

## Sık Yapılan Hatalar

- Gece görüş mesafesini kontrol etmeden kamera almak
- İç mekan kamerasını dış mekanda kullanmak
- Cam arkasına IR kamera koymak
- Aydınlatma durumunu göz ardı etmek
- Tüm kameralar için aynı gece görüş tipini seçmek

## Sonuç

Gece görüş güvenlik kamerasının en kritik performans kriteridir. Doğru teknoloji seçimi mekanın aydınlatma durumuna, izleme mesafesine ve bütçeye göre yapılmalıdır.

Profesyonel keşif sırasında gece aydınlatma testi yapılması en sağlıklı karardır.

[Kamera sistemi kurulumu](/kamera-sistemi-kurulumu) sayfamızdan keşif talebinde bulunabilirsiniz.

[IP kamera mı analog kamera mı](/blog/ip-kamera-mi-analog-kamera-mi) yazımız da kamera seçim sürecinde faydalı olabilir.`,
  },
  {
    slug: "kamera-sistemi-nereye-takilir",
    title: "Kamera Sistemi Nereye Takılır? Yerleşim ve Konum Rehberi",
    excerpt:
      "Güvenlik kamerası nereye takılmalı? Ev, işyeri, apartman ve fabrika için doğru kamera yerleşim noktaları ve montaj prensipleri rehberi.",
    publishedAt: "2026-04-10",
    readTime: 9,
    category: "Teknik Rehber",
    tags: ["kamera yerleşim", "montaj", "kamera konumu", "güvenlik kamerası"],
    image: "/images/services/bakim-servis/guvenlik-kamera-montaj-ekibi-isyeri-montaj-dis-mekan.jpg",
    featured: false,
    content: `## Kamera Sistemi Nereye Takılır?

Güvenlik kamerası kurulumunda en kritik kararlardan biri kameranın nereye monte edileceğidir. Yanlış konuma takılan kamera pahalı bir süs eşyasından farksız hale gelir. Doğru yerleşim ise daha az kamera ile daha geniş ve etkili kapsama sağlar.

Bu rehberde ev, işyeri, apartman ve fabrika gibi farklı mekan tipleri için doğru kamera yerleşim noktalarını, montaj prensiplerini ve sık yapılan hataları detaylı olarak anlatıyoruz.

## Genel Yerleşim Prensipleri

### Giriş-Çıkış Noktaları Önceliklidir

Her yapının ana giriş ve çıkış noktaları en kritik kamera noktalarıdır. Buradan geçen herkesin yüzünün net görüntülenmesi gerekir. Kapının tam karşısına veya yanından açılı şekilde montaj yapılmalıdır.

### Kör Noktaları Minimize Edin

Kör nokta, kameranın göremediği alandır. Her kameranın belirli bir görüş açısı vardır ve bu açının dışında kalan alanlar kör nokta oluşturur. Kameraların birbirinin kör noktasını kapatacak şekilde konumlandırılması ideal yerleşimdir.

### Yüksekliğe Dikkat Edin

Kamera çok alçakta olursa müdahaleye açık hale gelir. Çok yüksekte olursa yüz detayı kaybolur. İdeal montaj yüksekliği genellikle **2.5-4 metre** arasındadır.

### Işık Yönünü Değerlendirin

Kamera doğrudan güneş ışığına veya güçlü ışık kaynağına bakmamalıdır. Karşı ışık görüntüyü karartır. Kamera mümkünse ışık kaynağıyla aynı yönde konumlandırılmalıdır.

### Caydırıcılık ve Gizlilik Dengesi

Görünür kameralar caydırıcı etki yaratır. Gizli kameralar ise farkında olunmadan kayıt alır. Genel güvenlik amaçlı projelerde görünür kamera tercih edilmelidir.

## Mekan Tipine Göre Kamera Noktaları

### Ev ve Villa

**Mutlak kamera noktaları:**
- Ana giriş kapısı (yüz tanıma açısı)
- Bahçe girişi veya garaj kapısı
- Evin arka tarafı ve yan geçişler

**Opsiyonel kamera noktaları:**
- Bahçe çevresi
- Balkon veya teras
- Havuz alanı

Villalarda çevre güvenliği öne çıkar. Dış mekan kameralarının gece görüş mesafesi en az 30 metre olmalıdır. [Ev güvenlik kamera sistemi rehberi](/blog/ev-guvenlik-kamera-sistemi-rehberi) yazımızda konut güvenliğini kapsamlı ele alıyoruz.

### Mağaza ve Dükkan

**Mutlak kamera noktaları:**
- Giriş kapısı (giren çıkan herkes için)
- Kasa alanı (doğrudan kasa üzeri)
- Satış reyonları (genel alan gözetimi)

**Opsiyonel kamera noktaları:**
- Depo girişi
- Personel dinlenme alanı
- Vitrin önü (dış cephe)

Mağazalarda kasa kamerası en kritik noktadır. Para sayımı ve müşteri işlemleri net görüntülenmelidir.

### Ofis

**Mutlak kamera noktaları:**
- Giriş ve resepsiyon alanı
- Koridorlar
- Sunucu odası veya arşiv

**Opsiyonel kamera noktaları:**
- Toplantı odası girişleri
- Açık ofis alanı
- Otopark girişi

Ofislerde KVKK açısından çalışma masaları doğrudan izlenmemelidir. Kameralar ortak alan ve geçiş noktalarına yönlendirilmelidir.

### Apartman ve Site

**Mutlak kamera noktaları:**
- Bina girişi (ana kapı)
- Otopark giriş çıkış
- Asansör önleri (giriş katı)

**Opsiyonel kamera noktaları:**
- Merdiven boşluğu (giriş katı)
- Çatı veya teras erişim noktası
- Çocuk oyun alanı
- Bahçe ve çevre hattı

[Apartman kamera sistemi kurulumu](/blog/apartman-kamera-sistemi-kurulumu) yazımızda apartman projeleri için detaylı rehber sunuyoruz.

### Fabrika ve Depo

**Mutlak kamera noktaları:**
- Yükleme boşaltma alanları
- Ana giriş ve personel girişi
- Depo içi genel görüntüleme
- Çevre hattı ve bariyer noktaları

**Opsiyonel kamera noktaları:**
- Üretim hatları
- Kontrol odası
- Hammadde depo alanları
- Otopark

Fabrika ve depolarda geniş alan kamerası (wide angle) ve PTZ kamera kombinasyonu sık kullanılır. Yüksek tavan montajı özel braketi gerektirebilir.

### Restoran ve Kafe

**Mutlak kamera noktaları:**
- Giriş kapısı
- Kasa alanı
- Mutfak girişi

**Opsiyonel kamera noktaları:**
- Müşteri oturma alanı (genel plan)
- Depo
- Personel girişi

## Montaj Teknikleri ve Dikkat Edilecekler

### Duvar Montajı

En yaygın montaj tipidir. Duvar aparatı ile kamera sabitlenir. Beton, tuğla veya alçıpan duvara göre farklı dübel ve vida kullanılır.

### Tavan Montajı

İç mekanlarda dome kamera tavana doğrudan monte edilir. Asma tavan durumunda özel tavan aparatı gerekir.

### Direk ve Kol Montajı

Dış mekanda duvar yüzeyi yoksa veya kameranın yüksek noktadan bakması isteniyorsa metal direk veya kol (bracket) montajı yapılır.

### Kablo Güzergahı

Kablo güzergahı kamera noktası kadar önemlidir. Kablolar dış mekanda darbeye ve hava koşullarına karşı korunaklı kanal içinde geçirilmelidir. İç mekanda kablo kanalı veya asma tavan üstü kullanılır.

## Sık Yapılan Yerleşim Hataları

- Kamerayı çok yükseğe monte ederek yüz detayını kaybetmek
- Giriş kapısının arkasına kamera koymak (karşısına konulmalı)
- Karşı ışığa bakan kamera konumlandırmak
- Vandal-proof kasa kullanmadan dış mekana monte etmek
- Tüm kameraları aynı noktaya yönlendirmek (kör nokta bırakmak)
- IR kamerayı cam arkasına koymak (yansıma sorunu)
- Kablolama güzergahını düşünmeden kamera noktası belirlemek

## Profesyonel Keşfin Önemi

Kamera yerleşimi kağıt üzerinde planlanabilir ancak en doğru sonuç sahadaki keşifle elde edilir. Keşif sırasında:

- Kör noktalar yerinde tespit edilir
- Işık kaynakları ve yönleri analiz edilir
- Kablolama güzergahı belirlenir
- Montaj yüzeyleri kontrol edilir
- Gece koşulları değerlendirilir

## Sonuç

Doğru noktaya konulmuş az sayıda kamera, yanlış yerlere konulmuş çok sayıda kameradan her zaman daha etkilidir. Yerleşim planlaması keşif ile başlar ve profesyonel deneyim ile netleşir.

[Kamera sistemi kurulumu](/kamera-sistemi-kurulumu) sayfamızdan ücretsiz keşif talebinde bulunabilirsiniz.

[İstanbul kamera sistemi kurulumu](/istanbul/kamera-sistemi-kurulumu) sayfası İstanbul'daki projeler için detaylı bilgi sunar.`,
  },
  {
    slug: "ev-guvenlik-kamera-sistemi-rehberi",
    title: "Ev Güvenlik Kamera Sistemi Rehberi 2026",
    excerpt:
      "Ev için güvenlik kamera sistemi nasıl seçilir? Konut güvenliğinde kamera türleri, kurulum noktaları, maliyet ve uzaktan izleme rehberi.",
    publishedAt: "2026-04-18",
    readTime: 10,
    category: "Teknik Rehber",
    tags: ["ev güvenlik", "konut kamera", "ev kamerası", "güvenlik sistemi"],
    image: "/images/landing/ic-ortam-goruntu-demo.webp",
    featured: false,
    content: `## Ev Güvenlik Kamera Sistemi Rehberi

Ev güvenliği için kamera sistemi kurmak, hırsızlık, vandalizm ve istenmeyen girişlere karşı en etkili önlemlerden biridir. Görüntü kaydı ve uzaktan izleme sayesinde hem caydırıcılık sağlanır hem de evde olmadığınız zamanlarda kontrol imkanı elde edersiniz.

Bu rehberde konut güvenliğinde doğru kamera sistemi seçimini, kurulum noktalarını, maliyeti ve uzaktan izleme seçeneklerini kapsamlı olarak ele alıyoruz.

## Neden Ev İçin Kamera Sistemi?

### Caydırıcılık Etkisi

Araştırmalar görünür güvenlik kamerasının hırsızlık girişimlerini ciddi ölçüde azalttığını göstermektedir. Potansiyel hırsız kamera gördüğünde büyük olasılıkla hedef değiştirir.

### Uzaktan İzleme

Mobil uygulama ile evinizi dünyanın her yerinden canlı izleyebilirsiniz. İş yerindeyken, tatildeyken veya dışarıdayken evinizin durumunu kontrol edebilirsiniz.

### Olay Sonrası Kayıt

Herhangi bir olumsuz durum yaşandığında kayıt görüntüleri hem sizin hem de emniyet güçlerinin en önemli belgesidir.

### Çocuk ve Yaşlı Takibi

Evde çocuğun bakıcıyla olduğu saatlerde veya yaşlı aile bireyi için kamera sistemi güven duygusu sağlar.

### Paket ve Teslimat Kontrolü

Kapıya bırakılan kargo, yemek siparişi veya teslimatları kamera kaydı ile doğrulayabilirsiniz.

## Ev İçin Hangi Kamera Türleri Uygun?

### Dış Mekan Bullet Kamera

Evin çevresi, bahçe girişi, garaj ve arka taraf izlemesi için en uygun kamera tipidir. Hava koşullarına dayanıklı IP66/IP67 koruma sınıfı tercih edilmelidir.

**Özellikler:**
- Gece görüş: 30-50 metre IR mesafesi
- Hava koşullarına dayanıklı
- Görünür konumda caydırıcı etki
- PoE ile tek kablo çözümü

### İç Mekan Dome Kamera

Salon, antre, koridor gibi iç mekan alanları için dome kamera kompakt yapısı ile iyi bir seçimdir. Tavana monte edilerek geniş açı ile alan izlenebilir.

### Kapı Kamerası (Doorbell Camera)

Giriş kapısına monte edilen video kapı zili, kapı önünde kim olduğunu uzaktan görmenizi sağlar. Hareket algılama ve çift yönlü ses özelliği standart olarak gelir.

### PTZ Kamera

Geniş bahçesi olan villalar için pan-tilt-zoom özellikli kamera tek başına geniş alanı tarayabilir. Uzaktan yönlendirme ve zoom yapma imkanı sunar.

## Ev İçin Kaç Kamera Gerekli?

Konut tipi ve evin büyüklüğüne göre kamera sayısı değişir. Genel referans olarak:

### Daire

- **2-3 kamera:** Giriş kapısı + salon veya antre
- Genellikle iç mekan kamerası tercih edilir

### Müstakil Ev

- **4-6 kamera:** Ana giriş, arka kapı, bahçe, garaj
- Dış mekan kameraları ağırlıklı

### Villa

- **6-10 kamera:** Çevre hattı, tüm giriş noktaları, bahçe, otopark
- PTZ kamera ile geniş alan taraması

### Yazlık

- **3-4 kamera:** Giriş, çevre, veranda
- Uzaktan izleme burada özellikle kritik

## Doğru Kamera Seçimi İçin Kriterler

### Çözünürlük

Ev kullanımı için minimum 2MP (1080p) önerilir. Bahçe çevresi ve geniş alan izleme için 4MP daha iyi detay sunar. [IP kamera mı analog kamera mı](/blog/ip-kamera-mi-analog-kamera-mi) yazımızda kamera teknolojilerini karşılaştırıyoruz.

### Gece Görüş

Evin dış cephesinde gece görüş kritik öneme sahiptir. IR mesafesinin en az 30 metre olması önerilir. Aydınlatma varsa starlight kamera renkli gece görüş avantajı sağlar. [Gece görüşlü kamera nasıl çalışır](/blog/gece-goruslu-kamera-nasil-calisir) yazımızda bu konuyu detaylandırıyoruz.

### Hava Koşulları Dayanıklılığı

Dış mekan kameralarında IP66 veya IP67 koruma sınıfı aranmalıdır. Yağmur, toz, sıcak ve soğuğa dayanıklılık şarttır.

### Depolama

Ev kullanımında en az 30 gün kayıt süresi hedeflenmelidir. 4 kamera ve 2TB disk ile bu süre rahatlıkla karşılanır. [Kamera sistemi kaç gün kayıt yapar](/blog/kamera-sistemi-kac-gun-kayit-yapar) yazımızda depolama hesaplamalarını detaylı ele alıyoruz.

### Uzaktan Erişim

Mobil uygulama ile canlı izleme, kayıt erişimi ve hareket bildirimi ev güvenliğinin olmazsa olmazıdır. Hikvision Hik-Connect, Dahua DMSS gibi uygulamalar yaygın kullanılır.

## Maliyet ve Bütçe

Ev kamera sistemi maliyeti kamera sayısına, markaya ve özelliklere göre değişir:

### Daire İçin

- **2 kameralı temel sistem:** 8.000 - 13.000 TL
- **3 kameralı orta sistem:** 12.000 - 18.000 TL

### Müstakil Ev İçin

- **4 kameralı standart sistem:** 15.000 - 24.000 TL
- **6 kameralı genişletilmiş sistem:** 22.000 - 35.000 TL

### Villa İçin

- **8 kameralı profesyonel sistem:** 32.000 - 50.000 TL
- **10+ kameralı özel proje:** keşif sonrası teklif

Fiyatlar montaj, kablolama, NVR ve sabit disk dahil yaklaşık değerlerdir. [Güvenlik kamerası montaj ücreti 2026](/blog/guvenlik-kamerasi-montaj-ucreti-2026) yazımızda güncel fiyatları detaylı paylaşıyoruz.

## Kurulum Süreci

### 1. İhtiyaç Belirleme

Evin tipi, büyüklüğü, çevresi ve özel güvenlik ihtiyaçları değerlendirilir.

### 2. Keşif

Profesyonel ekip sahada keşif yaparak kamera noktalarını, kablo güzergahını ve altyapı ihtiyacını belirler. [Kamera sistemi nereye takılır](/blog/kamera-sistemi-nereye-takilir) yazımız yerleşim prensipleri hakkında detaylı bilgi sunar.

### 3. Sistem Planlaması

Kamera modelleri, NVR, sabit disk kapasitesi ve altyapı malzemeleri ihtiyaca göre planlanır.

### 4. Montaj ve Kablolama

Kameralar monte edilir, kablolama yapılır, NVR kurulur ve sabit disk takılır.

### 5. Devreye Alma

Tüm kameralar test edilir, gece görüş kontrol edilir, kayıt başlatılır ve mobil uygulama kurulumu yapılır.

### 6. Kullanıcı Eğitimi

Ev sahibine canlı izleme, kayıt erişimi, hareket bildirimi ve temel ayarlar gösterilir.

## Ev Kamera Sisteminde Sık Yapılan Hatalar

- İnternetten rastgele kamera alıp kendin tak mantığı ile hareket etmek
- Yalnızca bir kamerayla tüm evi izlemeye çalışmak
- Dış mekan için iç mekan kamerası kullanmak
- Gece görüş mesafesini kontrol etmemek
- Uzaktan erişim için ağ yapılandırmasını ihmal etmek
- Yetersiz disk kapasitesi ile kısa kayıt süresi kalmak
- Kablolama kalitesini düşük tutmak

## Alarm Sistemi ile Birlikte Kullanım

Ev güvenliğinde kamera sistemi tek başına yeterli olmayabilir. Alarm sistemi ile birlikte kullanıldığında güvenlik seviyesi önemli ölçüde artar. Kamera izleme ve kayıt sağlarken, alarm sistemi anlık uyarı ve caydırıcı siren desteği sunar.

[Alarm sistemi kurulumu](/alarm-sistemi-kurulumu) sayfamızdan alarm çözümleri hakkında detaylı bilgi alabilirsiniz.

## Sonuç

Ev güvenlik kamera sistemi doğru planlandığında bütçe dostu ve son derece etkilidir. Önemli olan doğru noktaları izlemek, yeterli kayıt kapasitesi sağlamak ve uzaktan erişimi düzgün kurmaktır.

[Kamera sistemi kurulumu](/kamera-sistemi-kurulumu) sayfamızdan eviniz için ücretsiz keşif talebi bırakabilirsiniz.

[İstanbul kamera sistemi kurulumu](/istanbul/kamera-sistemi-kurulumu) sayfası İstanbul'daki konut projeleri için detaylı bilgi sunar.`,
  },

  // ─── TİCARİ INTENT BLOG YAZILARI ─────────────────────────────────────────

  {
    slug: "fabrika-guvenlik-sistemi-bakim-plani",
    title: "Fabrika Güvenlik Sistemi Bakım Planı: Endüstriyel Tesisler İçin Kapsamlı Rehber",
    excerpt:
      "Fabrikanızdaki güvenlik kamera sistemi, alarm ve erişim kontrolünü ne sıklıkta bakıma almanız gerekiyor? Endüstriyel tesislere özel periyodik bakım planı ve checklist rehberi.",
    publishedAt: "2026-03-12",
    updatedAt: "2026-03-19",
    readTime: 10,
    category: "Teknik Rehber",
    tags: ["fabrika", "bakım sözleşmesi", "güvenlik sistemi", "endüstriyel", "kamera bakım"],
    image: "/images/services/bakim-servis/fabrika-guvenlik-kamera-bakim-servisi.jpg",
    featured: true,
    content: `## Fabrika Güvenlik Sistemi Bakım Planı

Bir fabrikada güvenlik sistemi kurmak, sürecin yalnızca ilk adımıdır. Asıl güvenliği sağlayan şey; sistemi aktif, güncel ve doğru çalışır hâlde tutan periyodik bakım planıdır. Endüstriyel ortamlarda toz, nem, titreşim ve elektrik dalgalanmaları güvenlik ekipmanlarını diğer mekânlara kıyasla çok daha hızlı aşındırır.

Bu rehberde fabrika ortamına özel bakım planını, kontrol sıklıklarını ve dikkat edilmesi gereken kritik noktaları ele alıyoruz.

![Fabrika güvenlik kamera sistemi periyodik bakım servisi](/images/services/bakim-servis/fabrika-guvenlik-kamera-bakim-servisi.jpg "Fabrika ortamında kamera sistemi periyodik bakım")

## Fabrikada Güvenlik Sistemleri Neden Daha Hızlı Bozulur?

Fabrika ortamı güvenlik ekipmanları için özellikle zorlu bir çevredir:

- **Toz ve partikül** — Tekstil, kimya ve metal fabrikalarında hava sürekli toz barındırır. Kamera lensleri kirlenir, fanlar tıkanır, konektörler korozyona uğrar.
- **Nem ve ısı değişimi** — Gece-gündüz sıcaklık farkı kablo yalıtımını zorlar, kamera muhafazalarına nem sızmasına neden olur.
- **Titreşim** — Ağır makine titreşimi kamera montaj vidalarını gevşetir, kablo bağlantılarını zayıflatır.
- **Elektrik dalgalanmaları** — Endüstriyel makineler şebekeye ani yük bindirerek kayıt cihazlarına zarar verir.

Bu koşullar altında standart bakım dönemleri yetmez. Fabrika güvenlik sistemleri için daha sık ve daha kapsamlı bakım programı şarttır.

## Kamera Sistemi Bakım Planı

### Aylık Kontroller

- Kamera görüntüsü canlı takibi — her kameradan net görüntü geliyor mu?
- Lens temizliği — toz birikimi var mı?
- Kayıt cihazı (NVR) disk doluluk oranı kontrolü
- Uzaktan erişim testi — mobil ve masaüstü bağlantısı çalışıyor mu?

### 3 Ayda Bir Kontroller

- Kamera açıları ve montaj vidaları — titreşim kaynaklı kaymalar
- IP67/IP66 muhafaza contaları — nem sızıntısı belirtisi
- PoE switch port kontrolleri — güç besleme kararlılığı
- Hareket algılama ve bölge ayarları doğrulaması

### Yıllık Kapsamlı Bakım

- Tüm kablo bağlantıları ve güzergah kontrolü
- NVR soğutma fanı ve filtre temizliği
- Sabit disk sağlık raporu (SMART testi)
- Firmware ve yazılım güncellemeleri
- Dış ortam kameralarında muhafaza ve contaların yenilenmesi

![Fabrika ve depo güvenlik kamera sistemi yerleşim planı](/images/diagrams/fabrika-depo-guvenlik-kamera-sistemi-yerlesim-plani.webp "Fabrika güvenlik kamera sistemi optimal yerleşim planı diyagramı")

## NVR Kayıt Cihazı Bakımı — En Kritik Adım

Fabrika güvenlik sisteminin beyni NVR'dir. Kameralar mükemmel çalışsa bile NVR bozulursa hiçbir kayıt korunamaz.

![NVR kayıt cihazı bakım ve harddisk kontrolü](/images/services/bakim-servis/nvr-kayit-cihazi-bakim-harddisk-kontrol.jpg "NVR kayıt cihazı harddisk durumu kontrolü ve bakım")

NVR bakımında yapılması gerekenler:

- **Disk sağlık kontrolü** — Fabrika ortamında sabit diskler ömür standardının altında çalışır. SMART test ile disk ömrü tahmin edilmeli ve önceden değiştirilmelidir.
- **Soğutma fanı temizliği** — Tıkanan fan NVR'nin aşırı ısınmasına, otomatik kapanmasına ve disk arızasına yol açar.
- **Güç kaynağı kontrolü** — UPS varsa test; yoksa eklenmesi önerilir.
- **Kayıt düzeni doğrulama** — Kayıt süresi, çözünürlük ve hareket kaydı ayarları fabrika gereksinimlerine göre güncellenir.

## Alarm ve Sensör Bakım Planı

Fabrikadaki alarm sistemi kameralara eşlik etmeli, özellikle dışarıdan izlenmesi zor noktalarda çevre güvenliğini tamamlamalıdır.

### PIR Hareket Sensörleri

- 3 ayda bir hassasiyet testi
- Lens kirliliği kontrolü (toz birikimi hassasiyeti düşürür)
- Montaj açısı ve yükseklik doğrulama

### Kapı/Pencere Kontakları

- Aylık manyetik temas testi
- Conta erozyonu kontrolü (dış ortam kontakları)

### Merkezi Panel Bakımı

- Yıllık batarya değişimi (yedek güç süresi doğrulama)
- Sinyal iletim testi (tüm sensörlerden panel'e)
- GSM/İnternet iletişim testi

## Fabrika İçin Bakım Sözleşmesi Avantajları

Fabrikalar için bakım sözleşmesi ile tek seferlik çağrı arasındaki fark sadece maliyet değildir:

- **Önleyici bakım** — Arızalar olmadan önce tespit edilir; üretim aksatmaz.
- **Öncelikli müdahale** — Sözleşmeli müşterilere acil arızalarda 4 saat içi müdahale garantisi.
- **Belgelenmiş bakım geçmişi** — Sigorta, ISO denetimi ve iş güvenliği belgesi için gereklidir.
- **Sabit yıllık maliyet** — Beklenmedik büyük arıza maliyetlerinin önüne geçer.

[Fabrika güvenlik sistemi bakım sözleşmesi](/istanbul/fabrika-guvenlik-sistemi-bakim) sayfamızdan endüstriyel tesisleriniz için bakım planı ve teklif alabilirsiniz.

## Fabrika Güvenlik Kamera Sistemi Yerleşim Planı

Bakım kadar önemli olan diğer konu, başlangıçta kameraların doğru yerleştirilmesidir. Yanlış yerleştirilen kameralar ne kadar sık bakım yapılırsa yapılsın kör noktaları kapatamaz.

![Fabrika güvenlik sistemi kamera ve alarm sensör yerleşim diyagramı](/images/diagrams/Fabrika-guvenlik-sistemi-yerlesimi-kamera-ve-alarm-sensor-diyagrami.webp "Fabrika güvenlik sistemi kamera ve alarm sensör optimal yerleşim diyagramı")

Endüstriyel tesislerde kamera yerleşim öncelikleri:

- Ana fabrika girişi ve bariyer/turnike noktaları
- Üretim hattı başı ve sonu
- Hammadde ve mamul depolama alanları
- Yükleme-boşaltma rampaları
- Sunucu odası ve elektrik panosu çevresi
- Tesis çevre duvarı ve dış alan

## Kaç Ayda Bir Profesyonel Bakım?

Fabrika tipi ve ortamına göre önerilen bakım sıklıkları:

| Fabrika Tipi | Önerilen Bakım Sıklığı |
|---|---|
| Tekstil / Konfeksiyon | Her 3 ayda bir |
| Kimya / Boya | Her 3 ayda bir |
| Metal / Çelik | Her 6 ayda bir |
| Gıda / İçecek | Her 3 ayda bir |
| Lojistik Depo | Her 6 ayda bir |
| Genel Sanayi | Her 6 ayda bir |

## Sonuç

Fabrika güvenlik sistemi bakımı ihmal edildiğinde sistem çalışıyor görünse de kritik anlarda işe yaramaz hâle gelebilir. Periyodik bakım; olası kamera arızaları, disk kayıpları veya sensör hatalarını üretimi aksatmadan önler.

[Kamera sistemi bakım sözleşmesi](/istanbul/kamera-sistemi-bakim-sozlesmesi) ile fabrikanız için yıllık güvenlik altyapısı sigortası edinin.`,
  },

  {
    slug: "kamera-sistemi-bakim-sozlesmesi-neden-gerekli",
    title: "Kamera Sistemi Bakım Sözleşmesi Neden Gerekli? 7 Kritik Neden",
    excerpt:
      "Güvenlik kamera sisteminizi kurdunuz, peki bakımını kim yapıyor? Bakım sözleşmesi olmayan sistemler neden başarısız olur? İşte 7 somut neden ve bakım planı rehberi.",
    publishedAt: "2026-03-14",
    updatedAt: "2026-03-19",
    readTime: 9,
    category: "Bakım ve Servis",
    tags: ["bakım sözleşmesi", "kamera bakım", "güvenlik sistemi", "periyodik bakım", "NVR"],
    image: "/images/services/bakim-servis/kamera-sistemi-periyodik-bakim-servisi.jpg",
    featured: true,
    content: `## Kamera Sistemi Bakım Sözleşmesi Neden Gerekli?

Güvenlik kamera sistemi kuran çoğu işletme ve site yönetimi, kurulumdan sonra sistemi kendi başına bırakır. "Görüntü geliyor, sistem çalışıyor" algısı ile aylarca, hatta yıllarca hiçbir kontrol yapılmaz. Ta ki olay anında görüntü bulunamaz, disk dolu nedeniyle kayıt yapılmamış olduğu anlaşılır ya da kameralar arızalı çıkana kadar.

Bu senaryoyu yaşamamak için kamera sistemi bakım sözleşmesi kurulumla aynı anda planlanmalıdır.

![Kamera sistemi periyodik bakım hizmeti — teknisyen kamera kontrolü yapıyor](/images/services/bakim-servis/kamera-sistemi-periyodik-bakim-servisi.jpg "Profesyonel kamera sistemi periyodik bakım ve kontrol")

## 1. Diskler Dolunca Kayıt Durur — Kimse Fark Etmez

Güvenlik kamera sistemlerinin en sık yaşanan ve en sessiz arızası budur. NVR üzerindeki sabit disk kapasitesi dolduğunda sistem üzerine yazmaya devam eder; eski kayıtları siler ve en kötü senaryoda kayıt tamamen durabilir.

Bakım sözleşmesi olmayan sistemlerde disk doluluk oranı kimse tarafından takip edilmez. Sonuç: tam ihtiyaç duyulan anda görüntü yok.

**Bakım planında ne yapılır?**

- Aylık disk doluluk kontrolü
- Kayıt süresi optimizasyonu (gereksiz yüksek çözünürlük düşürülür)
- Gerektiğinde disk kapasitesi artırımı önerisi

## 2. Kamera Lensleri Kirlenir, Görüntü Kalitesi Düşer

Özellikle dış ortam kameralarında lens kirliliği, ağ bağlantısı üzerinden monitörden fark edilmesi zor bir problemdir. Görüntü "geliyor" ama net değil; gece görüşü beklenen kaliteyi vermiyor.

Periyodik fiziksel bakımda her kameranın lensı temizlenir, yoğuşma varsa muhafaza incelenir ve nokta testi ile görüntü kalitesi doğrulanır.

![Güvenlik kamera sistemi kontrol ve izleme — teknisyen ekran karşısında](/images/services/bakim-servis/kamera-sistem-kontrol-monitor-teknisyen.jpg "Güvenlik kamera sistemi kontrol ve kayıt doğrulama")

## 3. NVR'daki Yazılım Açıkları Güvenlik Riski Oluşturur

IP kamera sistemleri ağa bağlıdır. Firmware güncellemesi yapılmamış NVR ve kameralar siber saldırılara açık hâle gelir. Özellikle kurumsal ağa bağlı sistemlerde bu risk hem güvenlik sisteminizi hem şirket ağınızı tehdit eder.

Bakım planı kapsamında yazılım ve firmware güncellemeleri düzenli olarak yapılır, açık portlar kapatılır.

## 4. Harddisk Arızaları Sessiz Gerçekleşir

NVR içindeki sabit diskler 7/24 çalışır. Ortalama ömrü 3-5 yıl olan bu diskler, zamanla sağlık puanı düşer ve bir gün tamamen çöker. Çökmeden önce uyarı vermeyebilir.

![NVR kayıt cihazı harddisk bakım ve sağlık testi](/images/services/bakim-servis/nvr-kayit-cihazi-bakim-kontrol-harddisk-testi.jpg "NVR harddisk SMART testi ve bakım kontrolü")

SMART (Self-Monitoring Analysis and Reporting Technology) testi ile diskin ömrü tahmin edilebilir. Bakım planı kapsamında yılda en az bir kez SMART testi yapılır; kritik eşiğe ulaşan diskler arızalanmadan değiştirilir.

## 5. Kamera Açıları Kayar, Kör Nokta Oluşur

Titreşim, rüzgar veya dışarıdan müdahale ile kamera açıları zaman içinde kayar. Ekranda görüntü geliyor ama artık istenen noktayı değil, duvarı ya da tavanı gösteriyor olabilir.

Yerinde bakımda her kameranın görüş alanı kontrol edilir, kayma tespit edildiğinde yeniden konumlandırılır ve sabitlenir.

## 6. Alarm Entegrasyonu ve Hareket Algılama Bozulur

Hareket tetiklemeli kayıt sistemi yanlış ayarlanmış veya bozulmuş hassasiyet nedeniyle gereksiz tetikleniyor ya da hiç tetiklenmiyorsa ciddi güvenlik açığı oluşur. Bakım planında hareket algılama bölgeleri ve hassasiyetler test edilir, ihtiyaca göre yeniden ayarlanır.

## 7. Bakımsız Sistem Sigorta Taleplerinde Geçersiz Sayılabilir

Hırsızlık, yangın veya hasar durumunda sigorta şirketi kamera sistemi kaydı talep edebilir. Bakımsız sistemde ya kayıt yoktur, ya görüntü kalitesi yetersizdir, ya da disk arızalıdır. Bu durumda sigorta tazminatı reddedilebilir.

Düzenli bakım yapıldığını gösteren servis kayıtları sigorta süreçlerinde önemli bir belge işlevi görür.

## Bakım Sözleşmesi Ne Kapsar?

Kapsamlı bir kamera sistemi bakım sözleşmesi şunları içermelidir:

- **Periyodik ziyaret** — 3 veya 6 ayda bir yerinde fiziksel kontrol
- **Uzaktan izleme** — Sistem durumu uzaktan takibi ve anlık uyarılar
- **Acil müdahale garantisi** — Arıza bildiriminden itibaren müdahale süresi (örneğin: 4 saat içi)
- **Yedek parça dahil seçenekler** — Arıza için yedek parça maliyetini kapsayan paketler
- **Raporlama** — Her bakım sonrası yazılı durum raporu

[Kamera sistemi bakım sözleşmesi](/istanbul/kamera-sistemi-bakim-sozlesmesi) sayfamızdan işletmenize özel yıllık bakım planı ve fiyat teklifi alabilirsiniz.

## Bakım Sözleşmesi Olmadan Yaşanan Gerçek Maliyetler

Bakım sözleşmesinin yıllık maliyeti, tek bir disk değişiminin veya acil müdahalenin maliyetiyle karşılaştırıldığında çok daha ekonomiktir:

| Beklenmedik Maliyet | Ortalama Tutar |
|---|---|
| Acil NVR arızası müdahalesi | 2.500 - 8.000 TL |
| Harddisk değişimi (acil) | 3.000 - 6.000 TL |
| Kamera muhafaza değişimi (hasar) | 1.500 - 4.000 TL |
| Firmware kaynaklı veri kaybı kurtarma | Kurtarılamayabilir |

Bakım sözleşmesi bu maliyetlerin büyük bölümünü önler ve tümünü öngörülebilir hale getirir.

![Güvenlik sistemi bakım teknisyen ekip — periyodik ziyaret](/images/services/bakim-servis/guvenlik-sistemi-bakim-teknisyen-ekip.jpg "Güvenlik sistemi periyodik bakım teknisyen ekibi")

## Sonuç

Kamera sistemi bakım sözleşmesi bir lüks değil, sisteminizin sürekli güvenilir çalışmasının temelidir. Özellikle fabrika, site yönetimi, mağaza ve depo gibi güvenlik kamerasına gerçekten ihtiyaç duyulan yerlerde bakımsız sistem, sistem olmaktan farksızdır.

[Bakım ve servis hizmetleri](/bakim-servis-uzaktan-izleme) sayfamızdan bakım paketi seçeneklerini inceleyin ve ücretsiz keşif randevusu alın.`,
  },

  {
    slug: "site-yonetimi-icin-guvenlik-sistemi-rehberi",
    title: "Site Yönetimleri İçin Güvenlik Sistemi Rehberi 2026",
    excerpt:
      "Apartman ve konut sitesi yöneticileri için güvenlik kamera sistemi, interkom ve bakım sözleşmesi rehberi. Hangi sistemler gerekli, nasıl planlanır, maliyetler neler?",
    publishedAt: "2026-03-16",
    updatedAt: "2026-03-19",
    readTime: 11,
    category: "Teknik Rehber",
    tags: ["site yönetimi", "apartman", "kamera bakım", "güvenlik sistemi", "bakım sözleşmesi"],
    image: "/images/services/bakim-servis/site-kamera-sistemi-periyodik-bakim.jpg",
    featured: true,
    content: `## Site Yönetimleri İçin Güvenlik Sistemi Rehberi 2026

Konut sitesi ve apartman yönetimleri, güvenlik sistemini hem sakinlerin huzuru hem de ortak alan güvenliği için kurar. Ancak sistemi doğru planlamak, yalnızca birkaç kamera takmaktan çok daha kapsamlı bir süreçtir. Bu rehberde site yöneticilerinin bilmesi gereken her şeyi ele alıyoruz.

![Apartman ve site kamera sistemi periyodik bakım hizmeti](/images/services/bakim-servis/site-kamera-sistemi-periyodik-bakim.jpg "Konut sitesi kamera sistemi yerinde periyodik bakım")

## Site Güvenlik Sisteminin Temel Bileşenleri

### 1. Giriş Noktası Kamera ve İnterkom Sistemi

Site ana girişi, araç bariyeri ve yaya kapıları sitenin en kritik kontrol noktalarıdır. Bu noktalarda:

- **Full HD veya 4K giriş kamerası** — plaka ve yüz tanıma kalitesinde görüntü
- **Video interkom sistemi** — daire içinden görüntülü ziyaretçi karşılama
- **Araç plaka tanıma (LPR)** — yetkili araçlar için otomatik bariyer açma
- **Hareket tetiklemeli kayıt** — gece saatlerinde güç tasarrufu ile sürekli kayıt

### 2. Otopark Kamera Sistemi

Otopark alanları; araç hasarı, hırsızlık ve güvensiz ortam şikayetlerinin en çok yaşandığı noktalardır.

- Otopark girişinde yüksek çözünürlüklü kamera (plaka okuma)
- Otopark içi her katı kapsayan geniş açılı kameralar
- Gece görüşü zorunlu — otopark aydınlatması genellikle yetersizdir

### 3. Ortak Alan ve Asansör Kameraları

Merdiven boşlukları, asansör içleri ve ortak koridorlar sakinler için sık şikayet noktasıdır. Bu alanlarda dome kameralar tercih edilir; caydırıcı etkisi yüksektir.

### 4. Çevre Güvenlik Sistemi

Sitenin dış çevresi; duvar, tel örgü veya çit boyunca kamera ve sensör ile donatılmalıdır. Özellikle büyük parselli sitelerde:

- Uzun mesafe bullet veya PTZ kameralar
- PIR hareket sensörlü dış çevre alarmı
- Gece görüşlü termal veya IR kameralar

## Site Güvenlik Sistemi Bakım Planı

Sistem kurulduktan sonra bakım ihmal edilirse sakinler şikayetleri artırır, arıza zamanında fark edilmez ve yönetim kurulu hem sakinlerden hem sigorta şirketinden zor durumda kalır.

![Site yönetimi güvenlik merkezi izleme ekranı](/images/services/bakim-servis/site-yonetimi-guvenlik-merkezi-izleme-ekrani.jpg "Site yönetimi merkezi güvenlik kamera izleme ekranı ve kontrol noktası")

### Aylık Kontroller (Yönetim tarafından yapılabilir)

- NVR ekranından tüm kameralara bakış — kayıt geliyor mu?
- Disk doluluk göstergesi kontrolü
- Bariyer ve interkom çalışırlık testi

### 3 Ayda Bir (Profesyonel servis)

- Tüm kamera görüntü kalitesi ve açı testi
- Giriş kamerası lens temizliği
- NVR fan ve bağlantı kontrolü
- İnterkom ses/görüntü kalibrasyonu

### Yıllık (Kapsamlı bakım)

- Kablo güzergah kontrolü ve yenileme gereken noktaların tespiti
- Disk sağlık raporu ve gerekirse değişim
- Firmware güncellemeleri
- Otopark zemine montajlı sensör ve dedektör testi

## Site Güvenlik Sistemi Kaç Kamera Gerektirir?

Site büyüklüğüne ve yapı tipine göre kamera sayısı değişir:

| Site Türü | Minimum Kamera Sayısı |
|---|---|
| 20 daireli küçük site | 6 - 10 kamera |
| 50 daireli orta site | 12 - 20 kamera |
| 100+ daireli büyük site | 20 - 40 kamera |
| Kapalı otoparklı site | +4 - 8 ek kamera |
| Yüzme havuzlu site | +2 - 4 ek kamera |

## Site Yönetiminin En Çok Yaptığı Hatalar

### Hata 1: Sadece Giriş Kamerası Koymak

Site girişine 2-3 kamera koymak ve geri kalanını boş bırakmak en yaygın hatadır. Otopark, merdiven boşlukları ve çevre güvenlik olmadan sakinler yine de güvende hissetmez.

### Hata 2: Bakım Sözleşmesi Yapmamak

Kurulumdan 6 ay sonra kameraların yarısı çalışmıyor, diskler dolu, görüntü kalitesi düşmüş. Bu tablo yönetim değişikliği dönemlerinde çok sık görülür.

### Hata 3: Sistemi Kapora'ya Göre Seçmek

En ucuz teklifi almak kısa vadede cazip görünür. Ancak düşük kaliteli kameralar 1 yılda değiştirilmek zorunda kalınabilir. Toplam sahip olma maliyeti hesaplanırken garanti süresi ve yedek parça bulunabilirliği de değerlendirilmelidir.

![Apartman yöneticisi kamera montaj sonrası memnuniyeti](/images/services/bakim-servis/apartman-yonetimi-kamera-montaj-memnuniyeti.jpg "Apartman site yöneticisi güvenlik kamera sistemi kurulum sonrası")

## Site Yönetimi İçin Bakım Sözleşmesi

Apartman ve konut sitelerinde sakin memnuniyeti doğrudan güvenlik sisteminin güvenilirliğine bağlıdır. Bakım sözleşmesi:

- **Yönetim kurulunu yasal riskten korur** — Bakım ihmalinden doğan zararlar için yasal sorumluluk doğabilir.
- **Sigorta taleplerinde belge sağlar** — Hırsızlık veya hasar sonrası sigorta süreçlerinde bakım geçmişi belgelenmiş olur.
- **Sakin şikayetlerini azaltır** — Düzenli bakımlı sistem daha az arıza, daha az şikayet demektir.
- **Bütçe planlamasını kolaylaştırır** — Yıllık bakım maliyeti öngörülebilir; ani büyük masraf olmaz.

[Site kamera sistemi bakım sözleşmesi](/istanbul/site-kamera-sistemi-bakim) sayfamızdan sitenize özel bakım planı teklifi alabilirsiniz.

## Yasal Zorunluluklar

**KVKK uyarısı:** Kamera sistemleri kişisel veri işler. Sitenizde kamera olduğunu belirten uyarı levhaları asılmalı, kamera görüntülerine erişim yetkisi sınırlandırılmalı ve kayıtlar zorunlu süre dışında silinmelidir.

**Kat Mülkiyeti Kanunu:** Ortak alan güvenlik sistemi için kat malikleri kurulu kararı ve bütçe onayı gerekir. Karar alınmadan yapılan harcamalar yönetici sorumluluğu doğurabilir.

## Sonuç

Site yönetimi için güvenlik sistemi; doğru ekipman seçimi, kapsamlı yerleşim planı ve düzenli bakım sözleşmesiyle birlikte ele alındığında hem sakin memnuniyetini artırır hem yönetim risklerini azaltır.

[Apartman ve site güvenlik sistemi](/istanbul/apartman-site-guvenlik-sistemi) sayfamızdan ücretsiz keşif ve teklif talep edebilirsiniz.`,
  },

  {
    slug: "yangin-alarm-bakim-sozlesmesi-neden-onemli",
    title: "Yangın Alarm Sistemi Bakım Sözleşmesi Neden Önemli? Denetim ve Yasal Yükümlülükler",
    excerpt:
      "Yangın alarm sistemi kurmak yeterli değil — periyodik bakım ve zorunlu yıllık test olmadan sisteminiz hem yasal uyumsuz hem de işlevsiz hale gelir. Kapsamlı rehber.",
    publishedAt: "2026-03-18",
    updatedAt: "2026-03-19",
    readTime: 10,
    category: "Yasal Rehber",
    tags: ["yangın alarm", "bakım sözleşmesi", "yasal zorunluluk", "itfaiye denetimi", "yangın güvenliği"],
    image: "/images/services/bakim-servis/yangin-alarm-paneli-kontrol-sistemi.jpg",
    featured: true,
    content: `## Yangın Alarm Sistemi Bakım Sözleşmesi Neden Önemli?

Yangın alarm sistemi kurmak, yasal yükümlülüğü yerine getirmenin yalnızca ilk adımıdır. Türkiye'deki yangın güvenliği mevzuatı yalnızca sistemi kurmayı değil, sistemi sürekli çalışır hâlde tutmayı da zorunlu kılar. Bakım sözleşmesi olmayan yangın alarm sistemleri itfaiye denetiminde başarısız olur, sigorta taleplerinde geçersiz sayılabilir ve gerçek yangın anında istenildiği gibi çalışmayabilir.

![Yangın alarm paneli kontrol sistemi — periyodik bakım ve test](/images/services/bakim-servis/yangin-alarm-paneli-kontrol-sistemi.jpg "Yangın alarm kontrol paneli periyodik test ve bakım")

## Yasal Zorunluluk: Binaların Yangından Korunması Hakkında Yönetmelik

Türkiye'de yangın alarm sistemleri "Binaların Yangından Korunması Hakkında Yönetmelik" (BYKHY) kapsamında düzenlenmektedir. Bu yönetmeliğe göre:

- Yangın alarm sistemi bulunan yapılarda **yıllık periyodik bakım** zorunludur.
- Bakım ve testler **yetkili servis** tarafından yapılmalı ve belgelenmelidir.
- Denetim sırasında bakım kayıtları ibraz edilemezse idari yaptırım uygulanır.
- Yangın çıkması durumunda bakım ihmali **kusur payı** olarak değerlendirilebilir.

Bu yükümlülükler; oteller, fabrikalar, siteler, AVM'ler, hastaneler, okullar ve kamuya açık 50 kişiyi aşan tüm binalar için geçerlidir.

## İtfaiye Denetimi: Önceden Haber Vermez

İtfaiye denetimleri programsız gerçekleştirilir. Denetimde kontrol edilen başlıca konular:

- Yangın alarm paneli çalışıyor mu?
- Dedektörler aktif ve hassasiyetleri doğru mu?
- Manuel butonlar işlevsel mi?
- Siren ve ışıklı uyarı cihazları çalışıyor mu?
- Bakım kayıt defteri mevcut ve güncel mi?
- Son bakım tarihi 12 ayı aşmış mı?

Herhangi birinde başarısızlık; **işletmenin mühürlenmesine**, **para cezasına** veya işletme izninin geçici olarak askıya alınmasına neden olabilir.

## Yangın Alarm Sistemi Neden Bakımsız Kalınca Bozulur?

### Dedektör Kirlenmesi

Duman dedektörleri zamanla toz, nem ve partikül birikimi nedeniyle hassasiyetini kaybeder. Gerçek duman alarmı vermeyebilir ya da sürekli yanlış alarm üretir.

![Yangın alarm dedektörü ve acil buton bakımı ve kontrolü](/images/services/bakim-servis/yangin-alarm-dedektor-ve-acil-butonu.jpg "Yangın alarm duman dedektörü ve acil buton periyodik test")

### Panel Bataryası

Yangın alarm paneli elektrik kesildiğinde yedek batarya ile çalışır. Bakımsız sistemlerde batarya ömrü biter; elektrik kesildiği anda sistem devre dışı kalır. Bu en kritik anlarda en büyük güvenlik açığıdır.

### Kablo Bütünlüğü

Yangın alarm sistemleri genellikle "açık devre" mantığıyla çalışır — kablo koptuğunda panel hata verir. Ancak bazı arızalar sessiz kalabilir. Yıllık kablo bütünlüğü testi bu tür açıkları tespit eder.

### Manuel Yangın Butonu Hasarı

Yangın butonları (break glass) darbe, vandalizm veya kazayla hasar görebilir. Görsel olarak sağlam görünen bir butonun iç mekanizması çalışmıyor olabilir. Test olmadan bu bilinemez.

## Periyodik Bakım Kapsamı

Kapsamlı bir yangın alarm sistemi bakım sözleşmesi şunları içermelidir:

**6 Ayda Bir Yapılan Kontroller:**

- Tüm dedektörlerin hassasiyet testi (duman enjeksiyonu ile)
- Manuel yangın butonları işlevsellik testi
- Siren ve flaşör çalışma testi
- Panel voltaj ve batarya kontrolü

**Yıllık Kapsamlı Bakım:**

- Panel tam tanılama testi
- Tüm kablo yolları ve bağlantı kontrolleri
- Yedek batarya kapasitesi ölçümü ve gerekirse değişim
- Üretici önerisine göre eski dedektörlerin değişimi
- Bakım tutanağı ve servis raporu düzenlenmesi

![Yangın alarm sistemi kurulumu ve devreye alma](/images/services/bakim-servis/yangin-alarm-sistemi-kurulum.jpg "Profesyonel yangın alarm sistemi kurulumu ve devreye alma süreci")

## Bakım Sözleşmesi Olmadan Sigorta Riski

Yangın durumunda sigorta şirketi hasar tazminatı öncesinde:

- Yangın alarm sisteminin kurulu olup olmadığını
- Sisteme bakım yaptırılıp yaptırılmadığını
- En son bakım tarihini ve kapsamını

sorgular. Bakım belgesi yoksa ya da son bakım 12 ayı aşmışsa sigorta **tazminatı kısmen veya tamamen reddedebilir**.

Bakım sözleşmesi bu belgeli güvenceyi sağlar; her bakımda imzalı servis raporu teslim edilir.

## Fabrika, Depo ve Üretim Tesisleri İçin Özel Durum

Fabrika ortamında yangın alarm sistemi ek risklerle karşı karşıyadır:

- Üretim kaynaklı toz ve buhar yanlış alarmları artırır — hassasiyet ayarı kritiktir
- Sanayi tipi ısı dedektörleri genel amaçlı duman dedektörlerine göre farklı bakım gerektiriri
- Gaz/kimyasal depolama alanlarında özel dedektör tipleri kullanılır
- Acil tahliye yolu aydınlatması ve yangın kapıları ayrı bakım kapsamına girer

[Fabrika ve depo yangın alarm bakım sözleşmesi](/istanbul/yangin-alarm-bakim-sozlesmesi) sayfamızdan endüstriyel tesislerinize özel bakım teklifi alabilirsiniz.

## Yangın Alarm Bakım Sözleşmesi Maliyeti

Yıllık bakım sözleşmesi maliyeti sisteminizin büyüklüğüne göre değişir ancak şu perspektifle değerlendirin: Bir denetimde mühürleme kararı ve ceza tek başına yıllık bakım maliyetinin çok üstünde olabilir. Yangın hasarı ya da hayati kayıp ise parasal karşılığı olmayan bir sonuçtur.

| Tesis Tipi | Yaklaşık Yıllık Bakım |
|---|---|
| Küçük işyeri (1-10 dedektör) | Bakım kapsamına göre belirlenir |
| Orta ölçekli ofis / mağaza | Keşif sonrası teklif |
| Fabrika / büyük depo | Özel fiyatlandırma |
| AVM / otel | Kurumsal anlaşma |

## Sonuç

Yangın alarm sistemi bakım sözleşmesi, "kurallar gereği" değil, gerçekten yangın anında sisteminizin çalışması için zorunludur. Dedektör testi yapmayan, batarya değiştirmeyen ve bakım tutanağı düzenlemeyen bir sistem; yasal açıdan da, güvenlik açısından da değersizdir.

[Yangın alarm sistemi bakım sözleşmesi](/istanbul/yangin-alarm-bakim-sozlesmesi) için bugün keşif randevusu alın; denetim öncesi sisteminizi güvence altına alın.

[Yangın alarm sistemi kurulumu](/teklif/istanbul-yangin-alarm-sistemi-kurulumu) sayfamızdan kurulum teklifi de alabilirsiniz.`,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return getAllBlogPosts().find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return getAllBlogPosts().map((post) => post.slug);
}

export function getFeaturedBlogPosts(): BlogPost[] {
  return getAllBlogPosts().filter((post) => post.featured);
}

export function getRelatedBlogPosts(
  currentSlug: string,
  limit = 3,
): BlogPost[] {
  const allPosts = getAllBlogPosts();
  const currentPost = allPosts.find((p) => p.slug === currentSlug);

  if (!currentPost) {
    return allPosts.slice(0, limit);
  }

  return allPosts
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
