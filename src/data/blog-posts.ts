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
  {
    slug: "duman-dedektoru-rehberi",
    title: "Duman Dedektörü Nedir, Nasıl Çalışır? Tam Rehber 2026",
    excerpt:
      "Duman dedektörü türleri, çalışma prensipleri, montaj noktaları, bakım gereksinimleri ve doğru seçim rehberi. İyonizasyon ve fotoelektrik arasındaki fark nedir?",
    publishedAt: "2026-03-22",
    readTime: 10,
    category: "Teknik Rehber",
    tags: ["duman dedektörü", "yangın algılama", "duman sensörü", "yangın alarm"],
    image: "/images/services/bakim-servis/yangin-alarm-dedektor-ve-acil-butonu.jpg",
    featured: true,
    content: `## Duman Dedektörü Nedir?

Duman dedektörü, havada yanan madde partiküllerini algılayarak yangın çıkmadan önce veya yangının ilk anında uyarı veren bir algılama cihazıdır. Yangın alarm sisteminin beyni olan kontrol paneliyle bağlantılı çalışır; duman eşiği aşıldığında siren devreye girer ve gerekirse itfaiye veya izleme merkezine bildirim yapılır.

Modern binalarda yasal zorunluluk kapsamında kullanılan duman dedektörü, doğru tipte seçildiğinde ve doğru konuma monte edildiğinde yangın kayıplarını ciddi ölçüde azaltır.

## Duman Dedektörü Türleri

### İyonizasyon (İonizasyon) Duman Dedektörü

İyonizasyon dedektörler, içindeki küçük radyoaktif madde sayesinde iki elektrot arasında sürekli bir iyon akımı oluşturur. Duman partikülleri bu akımı bozduğunda alarm tetiklenir.

**Avantajları:**
- Alev alan, hızlı yayılan yangınlarda çok hızlı tepki verir
- Düşük maliyetli

**Dezavantajları:**
- Yavaş, tüten yangınlarda geç tepki verebilir
- Radyoaktif element içerdiğinden özel imha gerektirir

### Fotoelektrik (Optik) Duman Dedektörü

Fotoelektrik dedektörler, algılama odasına gönderilen ışık huzmesinin duman partikülleri tarafından kırılması prensibine dayanır.

**Avantajları:**
- Yavaş ve tüten yangınlarda çok etkili (bina içi döşeme yangınları, mobilya yangınları)
- Mutfak veya banyoya yakın konumlarda sahte alarm oranı daha düşük
- Bakım ömrü genellikle daha uzun

### Çift Sensörlü (Multi-Criteria) Dedektör

Her iki teknolojiyi tek cihazda birleştirir. Hem hızlı alevli hem yavaş tüten yangınlara karşı dengeli koruma sağlar. Yeni yapılarda ve kritik alanlarda tercih edilir.

### Işın Tipi (Beam) Duman Dedektörü

Geniş açık alanlarda (fabrika holü, depo, spor salonu) iki nokta arasında gönderilen ışın huzmesi ile çalışır. 100 metreye kadar mesafeyi tek cihazla kapsar.

## Duman Dedektörü ile Isı Dedektörü Arasındaki Fark

| Özellik | Duman Dedektörü | Isı Dedektörü |
|---------|----------------|---------------|
| Algılama prensibi | Duman partikülü | Sıcaklık artışı |
| Erken uyarı | Çok erken | Geç (alevli yangın gerekir) |
| Uygun mekan | Yatak odası, ofis, koridor | Mutfak, garaj, kazan dairesi |
| Sahte alarm riski | Orta | Düşük |
| Tüten yangın | Çok etkili | Yetersiz |

Mutfakta duman dedektörü takılması önerilmez çünkü pişirme sırasında sürekli sahte alarm verir. Bu alanlarda ısı dedektörü tercih edilmelidir.

## Duman Dedektörü Nereye Takılmalı?

### Zorunlu Montaj Noktaları

- **Her kat koridoru:** Yangının tüm kata yayılmadan önce algılanması için
- **Yatak odaları:** Gece saatlerinde erken uyarı kritik önem taşır
- **Merdiven boşlukları:** Duman yukarı çıktığından buradaki dedektör çok kritiktir
- **Asma tavan alanları:** Elektrik tesisatı yangınları için

### Montaj Yüksekliği ve Konumu

- Tabandan en az **2,3 metre**, tavandan ise **30-60 cm** aşağıya monte edilmemelidir
- Tavan montajında duvara olan mesafe en az **50 cm** olmalıdır
- Hava akımının yoğun olduğu noktalar (klima çıkışı, kapı önü) tercih edilmemelidir

### Mekan Tipine Göre Dedektör Aralığı

| Mekan | Dedektör başına kapsama alanı |
|-------|-------------------------------|
| Ofis / Konut | 60 m² |
| Yüksek tavanlı mekan (>4m) | 40 m² |
| Depo / Fabrika | 80-100 m² (ışın tipi) |

## Kaç Duman Dedektörü Gerekir?

- **Konut:** Her oda için en az 1, merdiven başı için +1
- **Ofis:** 60 m²'de bir, açık ofis planında 80 m²'de bir
- **Otel / yurt:** Her oda için 1 adet
- **Fabrika / depo:** Tavan yüksekliğine göre hesaplanır, genellikle ışın tipi kullanılır

## Duman Dedektörü Bakımı

1. **3-6 ayda bir:** Test butonuyla alarm testi
2. **6 ayda bir:** Temizlik (basınçlı hava veya yumuşak fırça ile)
3. **Yılda bir:** Hassasiyet kalibrasyonu (yetkili servis tarafından)
4. **10 yılda bir:** Cihaz değişimi (optik sensörün ömrü)

## Adresli ve Konvansiyonel Sistem Farkı

**Konvansiyonel sistem:** Dedektörler bölgelere (zone) ayrılır, hangi bölgede alarm verdiği anlaşılır ama hangi cihaz olduğu bilinmez.

**Adresli sistem:** Her dedektörün benzersiz adresi vardır. Panel, tam olarak hangi odada, hangi cihazın alarm verdiğini gösterir. Kritik binalarda (hastane, okul, AVM, fabrika) adresli sistem zorunludur.

## Duman Dedektörü Fiyatları

| Tip | Fiyat Aralığı |
|-----|---------------|
| Konvansiyonel fotoelektrik | 300 - 600 TL |
| Konvansiyonel iyonizasyon | 200 - 450 TL |
| Adresli fotoelektrik | 600 - 1.500 TL |
| Çift sensörlü (multi-criteria) | 800 - 2.000 TL |
| Işın tipi (beam) | 5.000 - 20.000 TL |

## Sık Sorulan Sorular

**Duman dedektörü neden sürekli çalıyor?**
Mutfak dumanı, sigara, buharlı ütü, yüksek nem veya toz birikimi en sık sahte alarm nedenlerindendir. Cihaz kirli ya da yanlış konuma monte edilmişse tekrar eden yanlış alarmlar verir.

**Duman dedektörü ne kadar sürede alarm verir?**
Fotoelektrik modeller yavaş tüten yangınlarda 30-60 saniye içinde, iyonizasyon modeller hızlı alevli yangınlarda 15-30 saniye içinde alarm üretir.

**Duman dedektörü zorunlu mu?**
Yönetmelik kapsamındaki yapılarda (AVM, otel, fabrika, okul, sağlık tesisi) zorunludur. Konutlarda sigorta şartları ve güvenlik açısından kuvvetle tavsiye edilir.

**Bataryası olan dedektör mü yoksa kablolu mu tercih edilmeli?**
Yeni yapılarda kablolu (220V + yedek batarya) tercih edilir. Mevcut yapılarda kablo çekmek güçse bataryalı model kullanılabilir.

[Yangın alarm sistemi kurulumu](/yangin-alarm-sistemi-kurulumu) sayfamızdan ücretsiz keşif ve sistem tasarımı talebi bırakabilirsiniz.

[Yangın alarm bakım sözleşmesi](/blog/yangin-alarm-bakim-sozlesmesi-neden-onemli) hakkındaki yazımız da dedektör bakımını detaylandırmaktadır.`,
  },
  {
    slug: "gaz-dedektoru-rehberi",
    title: "Gaz Dedektörü Nedir, Nasıl Çalışır? Doğalgaz ve LPG Alarm Rehberi",
    excerpt:
      "Gaz dedektörü türleri, doğalgaz ve LPG alarmı farkları, montaj noktaları, alarm eşikleri ve doğru cihaz seçimi rehberi. Mutfak, kazan dairesi ve sanayi için.",
    publishedAt: "2026-03-22",
    readTime: 9,
    category: "Teknik Rehber",
    tags: ["gaz dedektörü", "doğalgaz alarmı", "LPG", "gaz alarm cihazı", "yangın alarm"],
    image: "/images/services/bakim-servis/yangin-alarm-paneli-kontrol-sistemi.jpg",
    featured: false,
    content: `## Gaz Dedektörü Nedir?

Gaz dedektörü, havadaki tehlikeli gaz konsantrasyonunu sürekli izleyen ve belirlenen eşiği aştığında sesli/görsel uyarı veren bir güvenlik cihazıdır. Doğalgaz (metan), LPG (propan-bütan), CO (karbon monoksit) ve diğer yanıcı/zehirli gazları algılayarak yangın, patlama veya zehirlenme riskini önceden haber verir.

Türkiye'de doğalgaz aboneliği olan konut ve işyerlerinin büyük çoğunluğu için gaz dedektörü zorunlu hale getirilmiştir. BOTAŞ bağlantılı dağıtım şirketleri yeni tesisatlarda gaz alarmı şartı aramaktadır.

## Gaz Dedektörü Türleri

### Doğalgaz (Metan - CH₄) Dedektörü

Doğalgaz metan tabanlıdır ve havadan hafif olduğundan yukarıya doğru birikir. Bu nedenle dedektör **tavana yakın** monte edilmelidir.

Kullanım alanları: konut mutfakları, kazan daireleri, restoran mutfakları, endüstriyel gaz hatları.

### LPG Dedektörü (Propan / Bütan)

LPG havadan ağır olduğundan yerde birikir. Tüplü sistem kullanan ortamlarda dedektör **yerden 30-50 cm** yüksekliğe monte edilir.

Kullanım alanları: tüplü ocak kullanan mutfaklar, tüp depoları, LPG dolum istasyonları.

### CO (Karbon Monoksit) Dedektörü

CO renksiz ve kokusuz bir gazdır; yanmayı tamamlamamış yakıt sonucu oluşur. Kazan dairesi, şömine ve garaj gibi alanlarda kritik önem taşır. Ayrı bir CO dedektörü veya kombine cihaz kullanılmalıdır.

### Kombine Dedektör

Tek cihazda hem yanıcı gaz hem CO algılaması yapar. Konut kullanımı için en pratik seçenektir.

### Sabit Sanayi Tipi Gaz Dedektörü

Fabrika, boya atölyesi ve kimya tesisi gibi alanlarda kullanılır. Kontrol paneliyle entegre çalışır.

## Gaz Dedektörü Montaj Noktaları

### Doğalgaz İçin

- Tavandan **30 cm** aşağıda veya daha yukarıda
- Ocaktan **1-3 metre** uzakta (ocak yakınında ısı ve buhar sahte alarm üretir)
- Kazan dairesinde kazanın yakınında fakat üzerinde

### LPG İçin

- Yerden **30-50 cm** yükseklikte
- Tüpün veya ocağın bulunduğu odada

### CO İçin

- Kazan dairesinde nefes hizasında (yaklaşık 150 cm)
- Uyku odalarının yakınında

## Alarm Eşikleri — % LEL Nedir?

LEL (Lower Explosive Limit) yanıcı gazın havada tutuşma için gereken minimum konsantrasyondur.

| Gaz | LEL | Alarm Eşiği |
|-----|-----|-------------|
| Metan (doğalgaz) | %5 | %10-20 LEL |
| Propan (LPG) | %2,1 | %10-20 LEL |
| CO | — | 50-100 ppm |

## Solenoid Vana Entegrasyonu

Gaz dedektörü solenoid vana ile bağlandığında gaz kaçağı algılandığında hattı otomatik olarak kapatır. Özellikle restoran, toplu mutfak ve endüstriyel tesislerde zorunlu standart haline gelmektedir.

## Gaz Dedektörü Bakımı

| Bakım İşlemi | Sıklık |
|---|---|
| Alarm testi | Ayda 1 |
| Sensör temizliği | 6 ayda 1 |
| Kalibrasyon | Yılda 1 |
| Sensör değişimi | 3-5 yılda 1 |

## Gaz Dedektörü Fiyatları 2026

| Tip | Fiyat Aralığı |
|-----|---------------|
| Konut tipi doğalgaz dedektörü | 400 - 900 TL |
| Konut tipi LPG dedektörü | 400 - 900 TL |
| Kombine (gaz + CO) dedektör | 700 - 1.500 TL |
| Solenoid vana (1/2") | 500 - 1.200 TL |
| Adresli sanayi tipi dedektör | 2.000 - 8.000 TL |
| Montaj işçiliği | 500 - 1.000 TL |

## Yasal Zorunluluklar

- Yeni binalarda gaz alarmı zorunludur; EPDK lisanslı dağıtım şirketleri yeni bağlantılarda gaz alarmı belgesi istemektedir
- 6331 sayılı İSG Kanunu kapsamında tehlikeli maddelerle çalışılan ortamlarda gaz algılama zorunludur
- Kimya, boya, tekstil gibi sektörlerde ATEX sınıflandırması yapılmalıdır

## Sık Sorulan Sorular

**Gaz dedektörü sahte alarm verirse ne yapılır?**
Ortamı havalandırın. Alarm devam ediyorsa gaz vanasını kapatın, elektrik anahtarlarına dokunmayın ve binayı terk edin. Sürekli sahte alarm cihazın kirlendiğine veya ömrünün dolduğuna işaret eder.

**Doğalgaz dedektörü tavana mı, duvara mı takılır?**
Doğalgaz için tavana yakın duvara (tavandan 30 cm aşağıya kadar) takılır. LPG için yerden 30-50 cm yükseklikte duvara monte edilir.

**Gaz dedektörü ne kadar süre çalışır?**
Konut tipi cihazların standart ömrü 5-7 yıldır. Sanayi tipi cihazlarda sensör 3 yılda bir değiştirilmelidir.

**Her odaya gaz dedektörü gerekir mi?**
Sadece gaz kullanan odaya (mutfak, kazan dairesi) takılması yeterlidir. CO için ise yatak odaları yakınına ek dedektör önerilir.

[Yangın alarm sistemi kurulumu](/yangin-alarm-sistemi-kurulumu) sayfamızdan gaz algılama entegrasyonu hakkında ücretsiz keşif talep edebilirsiniz.

[Duman dedektörü rehberi](/blog/duman-dedektoru-rehberi) yazımızla yangın algılama sistemini tamamlayın.`,
  },
  {
    slug: "4-kamerali-guvenlik-sistemi-fiyati",
    title: "4 Kameralı Güvenlik Sistemi Fiyatı 2026 | Paket ve Kurulum",
    excerpt:
      "4 kameralı güvenlik kamerası sisteminin 2026 yılı fiyatları, paket bileşenleri, kurulum maliyeti ve mekan tiplerine göre sistem önerileri.",
    publishedAt: "2026-03-22",
    readTime: 7,
    category: "Fiyatlar ve Rehber",
    tags: ["4 kameralı sistem", "güvenlik kamerası fiyatı", "kamera sistemi fiyatı", "montaj ücreti"],
    image: "/images/services/bakim-servis/kamera-sistem-kontrol-monitor-teknisyen.jpg",
    featured: false,
    content: `## 4 Kameralı Güvenlik Sistemi Fiyatı 2026

4 kameralı güvenlik sistemi, hem konut hem küçük işyerleri için en çok tercih edilen paket boyutudur. 2026 yılında toplam bütçe **18.000 TL ile 45.000 TL** arasında değişmektedir.

## 4 Kameralı Sistemin Bileşenleri

| Bileşen | Adet | Fiyat Aralığı |
|---------|------|---------------|
| IP Kamera (4MP) | 4 | 4 × 1.200-3.000 TL |
| 4/8 Kanal NVR | 1 | 3.000 - 8.000 TL |
| Sabit Disk (2-4 TB) | 1 | 1.500 - 3.500 TL |
| PoE Switch (8 port) | 1 | 800 - 2.000 TL |
| Kablo ve bağlantı malzemesi | — | 600 - 2.500 TL |
| Montaj işçiliği | — | 1.500 - 4.000 TL |

## Pakete Göre Fiyat Tablosu

### Giriş Seviyesi Paket — 18.000 - 25.000 TL
- 4 × 2MP (1080p) dome veya bullet kamera
- 4 kanal NVR, 2 TB sabit disk
- Standart montaj, 7-15 gün kayıt süresi

**Uygun olduğu durumlar:** Küçük daire, dükkan veya yazıhane

### Orta Seviye Paket — 25.000 - 35.000 TL
- 4 × 4MP kamera (2 iç, 2 dış mekan)
- 8 kanal NVR, 4 TB sabit disk
- Gece görüş 30-50 m, 20-30 gün kayıt süresi

**Uygun olduğu durumlar:** Dış cepheli konut, butik mağaza, küçük ofis

### Üst Seviye Paket — 35.000 - 45.000 TL
- 4 × 4K (8MP) kamera
- 8 kanal 4K NVR, 6-8 TB sabit disk
- Gece renkli görüntü, 30-45 gün kayıt süresi

**Uygun olduğu durumlar:** Plaka okuma gereken giriş, kuyumcu/eczane, villa

## Mekan Tipine Göre 4 Kameralı Sistem Önerileri

### Konut / Daire
- Kamera 1-2: Dış kapı ve apartman girişi (bullet, gece görüşlü)
- Kamera 3: Otopark veya bahçe girişi
- Kamera 4: Balkon veya arka bahçe

### Küçük İşyeri / Dükkan
- Kamera 1: Ana giriş kapısı
- Kamera 2: Kasa bölgesi
- Kamera 3: Satış alanı genel görünüm
- Kamera 4: Depo veya arka çıkış

### Apartman (Ortak Alan)
- Kamera 1: Bina ana girişi
- Kamera 2: Otopark girişi
- Kamera 3: Asansör önü
- Kamera 4: Arka bahçe veya çöp alanı

## 4 Kameralı Sistem Kaç Gün Kayıt Yapar?

| Disk | 1080p sürekli | 4MP hareket tetiklemeli |
|------|--------------|------------------------|
| 2 TB | 7-10 gün | 15-20 gün |
| 4 TB | 14-20 gün | 30-40 gün |
| 6 TB | 21-30 gün | 45-60 gün |

## Sık Sorulan Sorular

**4 kanallı mı yoksa 8 kanallı NVR mi alınmalı?**
8 kanallı NVR tercih edilmesi önerilir. Fiyat farkı küçüktür (500-1.000 TL) ama sistem büyütüldüğünde NVR değiştirme maliyetinden kurtulunur.

**4 kameralı sistem wifi ile kurulabilir mi?**
Küçük alanlarda mümkündür; ancak profesyonel kurulumda kablolu (PoE) sistem tercih edilir. WiFi sistemler bant genişliği sorunu ve bağlantı kesilmesi riskleri barındırır.

**Mobil izleme nasıl yapılır?**
NVR'a internet bağlantısı yapıldıktan sonra üretici uygulaması (Hikvision iVMS, Dahua DMSS vb.) ile akıllı telefon ve tabletlerden canlı izleme yapılabilir.

[Kamera sistemi kurulumu](/kamera-sistemi-kurulumu) sayfamızdan ücretsiz keşif ve fiyat teklifi alabilirsiniz.

[8 kameralı güvenlik sistemi fiyatı](/blog/8-kamerali-guvenlik-sistemi-fiyati) yazımızda daha büyük sistem maliyetlerini karşılaştırabilirsiniz.`,
  },
  {
    slug: "8-kamerali-guvenlik-sistemi-fiyati",
    title: "8 Kameralı Güvenlik Sistemi Fiyatı 2026 | Paket ve Kurulum",
    excerpt:
      "8 kameralı güvenlik kamerası sisteminin 2026 yılı fiyatları, paket bileşenleri, kurulum maliyeti ve büyük ölçekli mekan önerileri.",
    publishedAt: "2026-03-22",
    readTime: 7,
    category: "Fiyatlar ve Rehber",
    tags: ["8 kameralı sistem", "güvenlik kamerası fiyatı", "kamera sistemi fiyatı", "montaj ücreti"],
    image: "/images/services/bakim-servis/uzaktan-izleme-merkezi-ekranlari.jpg",
    featured: false,
    content: `## 8 Kameralı Güvenlik Sistemi Fiyatı 2026

8 kameralı güvenlik sistemi, orta büyüklükteki işyerleri, apartmanlar, küçük fabrikalar ve büyük konutlar için en yaygın kullanılan paket boyutudur. 2026 yılında toplam bütçe **30.000 TL ile 75.000 TL** arasında değişmektedir.

## 8 Kameralı Sistemin Bileşenleri

| Bileşen | Adet | Fiyat Aralığı |
|---------|------|---------------|
| IP Kamera (4MP) | 8 | 8 × 1.200-3.500 TL |
| 8/16 Kanal NVR | 1 | 5.000 - 15.000 TL |
| Sabit Disk (4-8 TB) | 1-2 | 3.000 - 7.000 TL |
| PoE Switch (8-16 port) | 1 | 1.200 - 3.500 TL |
| Kablo ve bağlantı | — | 1.500 - 5.000 TL |
| Montaj işçiliği | — | 3.000 - 7.000 TL |

## Pakete Göre Fiyat Tablosu

### Giriş Seviyesi Paket — 30.000 - 42.000 TL
- 8 × 2MP (1080p) kamera, 8 kanal NVR, 4 TB disk
- 14-20 gün kayıt süresi

**Uygun olduğu durumlar:** Büyük dükkan, küçük restoran, orta boy ofis

### Orta Seviye Paket — 42.000 - 58.000 TL
- 8 × 4MP kamera, 16 kanal NVR, 6-8 TB disk
- Gece görüş 30-60 m, 25-35 gün kayıt süresi

**Uygun olduğu durumlar:** Fabrika avlusu, büyük mağaza, apartman (giriş + otopark + asansörler)

### Üst Seviye Paket — 58.000 - 75.000 TL
- 8 × 4K kamera, 16 kanal 4K NVR, 8-12 TB disk (RAID)
- Renkli gece görüş, PTZ kamera dahil, 40-60 gün kayıt

**Uygun olduğu durumlar:** Banka şubesi, hastane, yüksek güvenlikli depo

## 4 Kameralı ve 8 Kameralı Sistem Karşılaştırması

| Özellik | 4 Kameralı | 8 Kameralı |
|---------|-----------|-----------|
| Başlangıç fiyatı | ~18.000 TL | ~30.000 TL |
| Kapsama alanı | ~200-400 m² | ~400-900 m² |
| NVR kanalı (önerilen) | 8 | 16 |
| Büyüme esnekliği | Sınırlı | Yüksek |

## Mekan Tipine Göre 8 Kameralı Sistem Planı

### Orta Boy Mağaza (200-400 m²)
- 2 × Giriş/çıkış dış cephe, 2 × Satış alanı genel
- 1 × Kasa bölgesi, 1 × Depo girişi
- 1 × Arka çıkış, 1 × Dış cephe / park alanı

### Apartman veya Site
- 2 × Bina ana giriş, 2 × Otopark girişi
- 1 × Asansör önü, 1 × Ortak kat koridoru
- 1 × Arka çıkış / çöp alanı, 1 × Çocuk parkı / yeşil alan

### Küçük Fabrika veya Depo
- 2 × Ana giriş (plaka okuma dahil), 2 × Üretim/depo alanı
- 1 × Yükleme rampası, 1 × Ofis girişi
- 1 × Dış cephe çevre, 1 × Güvenlik/sunucu odası

## Sık Sorulan Sorular

**8 kameralı sistem için internet şart mı?**
Kayıt ve yerel izleme için internet şart değildir. Uzaktan mobil erişim için minimum 10 Mbps upload önerilir.

**8 kameralı sistem kaç gün kayıt yapar?**
4MP ve 8 TB disk ile 30-45 gün; hareket tetiklemeli kayıt bu süreyi 2 katına çıkarır.

**NVR kanal sayısı ne olmalı?**
16 kanallı NVR tercih edilmesi önerilir. İleride 2-4 kamera ekleme ihtiyacında NVR değiştirme maliyetinden tasarruf sağlanır.

[Kamera sistemi kurulumu](/kamera-sistemi-kurulumu) sayfamızdan 8 kameralı sistem için ücretsiz keşif talebi bırakabilirsiniz.

[4 kameralı güvenlik sistemi fiyatı](/blog/4-kamerali-guvenlik-sistemi-fiyati) ile karşılaştırma yaparak doğru paket boyutunu seçebilirsiniz.`,
  },
  {
    slug: "kablosuz-alarm-sistemi-rehberi",
    title: "Kablosuz Alarm Sistemi Rehberi 2026 | Seçim, Kurulum ve Fiyatlar",
    excerpt:
      "Kablosuz alarm sistemi nedir, nasıl çalışır? Kablolu sistemle karşılaştırma, Ajax ve DSC gibi markalar, kurulum süreci ve 2026 fiyatları.",
    publishedAt: "2026-03-22",
    readTime: 9,
    category: "Teknik Rehber",
    tags: ["kablosuz alarm sistemi", "Ajax alarm", "ev alarm sistemi", "alarm sistemi kurulumu"],
    image: "/images/landing/telefondan-kablosuz-alarm-kontrol-app.webp",
    featured: false,
    content: `## Kablosuz Alarm Sistemi Nedir?

Kablosuz alarm sistemi, sensörler ile kontrol paneli arasındaki iletişimi kablo yerine radyo frekansı (RF) üzerinden sağlayan bir hırsız alarm çözümüdür. Sensörler kendi batarya enerjisiyle çalışır; kontrol paneliyle şifreli, iki yönlü radyo frekansıyla haberleşir.

Özellikle mevcut yapılarda kablo çekmeden profesyonel güvenlik sistemi kurulumunu mümkün kılar. Montaj süresi kablolu sisteme kıyasla %60-70 daha kısa olabilir.

## Kablosuz ve Kablolu Alarm Sistemi Karşılaştırması

| Özellik | Kablosuz | Kablolu |
|---------|----------|---------|
| Kurulum süresi | 2-4 saat | 1-2 gün |
| Kablo hasarı | Yok | Sıva, duvar açma |
| Batarya gerekliliği | Evet (sensörler) | Hayır |
| Kiracı için uygunluk | Çok uygun | Zor |
| Başlangıç maliyeti | Orta-Yüksek | Düşük-Orta |
| Güvenilirlik | Yüksek (AES-256) | Çok yüksek |

Modern sistemlerde jamming (frekans bloklama) girişimi otomatik olarak algılanır ve alarm üretir.

## Öne Çıkan Kablosuz Alarm Markaları

### Ajax Systems
Türkiye pazarında en hızlı büyüyen marka. 868 MHz Jeweller protokolü, 7 yıla kadar batarya ömrü, mobil uygulama ile tam izleme. EN 50131 Grade 2 sertifikalı.

### DSC PowerSeries NEO
Hibrit mimari ile mevcut sistemlere kablosuz sensör eklenebilir. Büyük ofis ve çok katlı binalarda tercih edilir.

### Texecom Premier Elite
EN Grade 3 sertifikası ile banka şubesi, mücevher mağazası ve kritik altyapı için uygundur.

## Kablosuz Alarm Sistemi Bileşenleri ve Fiyatları

| Bileşen | Fiyat |
|---------|-------|
| Hub (Kontrol Paneli) | 3.000 - 8.000 TL |
| PIR Hareket Sensörü | 600 - 1.500 TL / adet |
| Manyetik Kapı-Pencere Sensörü | 400 - 900 TL / adet |
| Cam Kırılma Sensörü | 800 - 1.800 TL / adet |
| Dış Siren | 1.200 - 3.000 TL |

## Sistem Fiyatları 2026

### Temel Konut Paketi — 12.000 - 18.000 TL
Hub + 2 PIR + 4 manyetik sensör + 1 siren + kurulum

### Orta Seviye Konut/Ofis Paketi — 20.000 - 30.000 TL
Hub + 4 PIR + 6 manyetik + 1 cam kırılma + iç + dış siren

### İşyeri Paketi — 28.000 - 42.000 TL
Hub + 6 PIR + 8 manyetik + 2 siren + tuş takımı + izleme merkezi entegrasyonu

## Kurulum Süreci

1. **Keşif:** Sensör noktaları ve sinyal kalitesi test edilir
2. **Montaj:** Panel sabitlenir, sensörler vida veya bantla yerleştirilir
3. **Eşleştirme:** Her sensör panele tanıtılır, zon isimleri atanır
4. **Test:** Tüm sensörler ve siren test edilir
5. **Uygulama:** Mobil uygulama kurulur, kullanıcı eğitimi verilir

Kablosuz sistem kurulumu ortalama **3-6 saat** içinde tamamlanır.

## Sık Sorulan Sorular

**Kablosuz alarm sistemi hacklenebilir mi?**
Modern sistemler AES-256 şifreleme kullanır. Jamming girişimi algılanır ve alarm verir. Pratik saldırı riski kablolu sistemlerle karşılaştırılabilir düzeydedir.

**Elektrik kesilirse çalışır mı?**
Evet. Hub cihazında 12-36 saatlik yedek batarya bulunur. Sensörler kendi bataryasıyla çalıştığından sistem tam fonksiyonunu korur.

**Kira evine kablosuz alarm taktırılır mı?**
En uygun seçenek budur. Duvar delme gerekmez; taşınırken sistem sökülerek yeni adrese taşınabilir.

**7/24 izleme merkezi olmadan kullanılır mı?**
Kullanılır. Mobil uygulama üzerinden alarm bildirimleri alınır. İzleme merkezi ise alarm anında profesyonel müdahaleyi garanti altına alır.

[Alarm sistemi kurulumu](/alarm-sistemi-kurulumu) sayfamızdan kablosuz alarm için ücretsiz keşif talebi bırakabilirsiniz.

[Alarm sistemi fiyatları 2026](/blog/alarm-sistemi-fiyatlari-2026) yazımızda kablolu ve kablosuz paket fiyatlarını karşılaştırabilirsiniz.`,
  },

  {
    slug: "isyeri-alarm-sistemi-secimi",
    title: "İşyeri Alarm Sistemi Seçimi: Dükkan, Mağaza ve Ofis İçin Rehber 2026",
    excerpt:
      "İşyeri alarm sistemi nasıl seçilir? Dükkan alarm sistemi, mağaza alarm sistemi ve ofis alarm kurulumu için doğru sistem tipi, bileşenler ve 2026 fiyat rehberi.",
    publishedAt: "2026-03-22",
    readTime: 9,
    category: "Teknik Rehber",
    tags: ["işyeri alarm sistemi", "dükkan alarm sistemi", "mağaza alarm sistemi", "işyeri alarm sistemleri"],
    image: "/images/landing/isyeri-ajax-alarm-kurulum-servisi.png",
    featured: false,
    content: `## İşyeri Alarm Sistemi Nedir ve Neden Gereklidir?

İşyeri alarm sistemi, dükkan, mağaza, ofis ve depo gibi ticari mekânları mesai dışı yetkisiz girişe, hırsızlığa ve vandalizme karşı koruyan elektronik güvenlik sistemidir. Hareket sensörleri, kapı-pencere kontaktları, cam kırılma dedektörleri ve merkezi alarm panelinden oluşur; alarm tetiklendiğinde sesli uyarı verir ve mobil bildirim gönderir.

Türkiye'de küçük işletmelerdeki hırsızlık vakalarının büyük çoğunluğu gece veya hafta sonu kapanış saatlerinde yaşanır. Çalışan alarm sistemi olan işyerlerinde bu risk %60-80 oranında azalmaktadır.

## İşyeri Tiplerine Göre Alarm Sistemi Seçimi

### Dükkan Alarm Sistemi

Tek mekânlı dükkanlar için temel dükkan alarm sistemi şu bileşenleri içerir:

- **Kontrol paneli:** Küçük format, 4-8 bölge kapasiteli
- **Kapı kontaktı:** Vitrin kapısı ve arka servis kapısı için
- **PIR hareket sensörü:** İç alan genel izleme
- **Cam kırılma sensörü:** Vitrin güvenliği
- **İç ve dış siren:** Sesli caydırıcılık

Küçük dükkan için tahmini maliyet: **8.000 - 14.000 TL**. Kablosuz Ajax sistemi ile kablo hasarı olmadan 2-3 saatte kurulum tamamlanır.

### Mağaza Alarm Sistemi

Mağaza alarm sistemi dükkan sistemine göre daha fazla bölge ve sensör içerir. Orta boy bir mağazada (100-300 m²):

- 2-4 PIR hareket sensörü (satış reyonları, giriş, depo)
- 4-8 manyetik kapı-pencere kontaktı
- Kasa alarmı (panik butonu)
- Hareket algılama entegrasyonlu kamera sistemi bağlantısı
- Çok bölgeli alarm paneli (depo ayrı bölge, satış alanı ayrı bölge)

**Mağaza alarm sistemi avantajı:** Her bölge ayrı ayrı izlenir. Depo alanı gün içinde alarm devredeyken satış alanı açık kalabilir. Personel, kendi yetkisi olmayan bölgeye girdiğinde alarm tetiklenir.

Orta boy mağaza için tahmini maliyet: **15.000 - 28.000 TL**

### Ofis Alarm Sistemi

Ofislerde işyeri alarm sistemi ağırlıklı olarak mesai dışı koruma ve kritik alan güvenliği için kullanılır:

- Sunucu odası / IT odası ayrı bölge
- Resepsiyon ve giriş alanı
- Yönetici ofisleri ve belge arşivi
- Kat koridorları ve asansör önü

Ofislerde kartlı geçiş sistemi ile alarm entegrasyonu sık tercih edilir. Yetkisiz kart ile giriş denemesi alarm bölgesini otomatik devreye alır.

### Restoran ve Kafe Alarm Sistemi

Mutfaklı işletmelerde hırsız alarmına ek olarak:
- Yangın alarm sistemi entegrasyonu zorunludur
- Gaz dedektörü bağlantısı kritik önem taşır
- Mesai bitiminde mutfak ve kasa ayrı bölgelerle izlenir

## Kablolu mu Kablosuz mu?

| Özellik | Kablolu | Kablosuz |
|---------|---------|----------|
| Kurulum süresi | 1-2 gün | 2-6 saat |
| Kiracı işyeri için | Uygun değil | Çok uygun |
| Fiyat | Düşük-Orta | Orta-Yüksek |
| Güvenilirlik | Çok yüksek | Yüksek (şifreli RF) |
| Genişleme | Kablo gerektirir | Kolayca eklenebilir |
| Bakım | Düşük | Batarya takibi |

Kiracı konumundaki dükkan ve mağazalar için kablosuz işyeri alarm sistemi tercih edilmelidir; taşınırken sökülerek yeni yere kurulabilir.

## İşyeri Alarm Sisteminde Mesai Otomasyonu

Profesyonel işyeri alarm sistemlerinin en önemli özelliklerinden biri mesai saati otomasyonudur:

- Haftalık çalışma programına göre programlanır
- Kapanış saatinde otomatik devreye girer
- Açılış saatinde otomatik devre dışı kalır
- Farklı çalışanlar için farklı yetkili saat aralıkları tanımlanabilir
- Alarm kurulmadan kapanış yapıldığında uyarı bildirimi gönderilir

Bu özellik "alarm kuruldu mu?" endişesini tamamen ortadan kaldırır.

## 7/24 İzleme Merkezi Bağlantısı

İşyeri alarm sistemine izleme merkezi aboneliği eklenmesi:

- Alarm tetiklendiğinde yetkili kişi aranır, doğrulama yapılır
- Teyit edilmiş ihbarda güvenlik veya jandarma yönlendirilir
- Yanlış alarm filtrelenerek gereksiz ihbar azaltılır
- Aylık abonelik maliyeti: 300-600 TL

Özellikle gece saatleri uzun süre kapalı kalan işyerleri (gastronomi, hizmet sektörü) için 7/24 izleme merkezi bağlantısı önerilir.

## İşyeri Alarm Sistemi Fiyatları 2026

| İşyeri Tipi | Sistem | Tahmini Maliyet |
|------------|--------|-----------------|
| Küçük dükkan (50 m² altı) | 4 sensör + panel + siren | 8.000 - 14.000 TL |
| Orta mağaza (100-300 m²) | 6-10 sensör + çok bölge | 15.000 - 28.000 TL |
| Büyük mağaza / depo | 10+ sensör + izleme | 30.000 - 50.000 TL |
| Ofis (100-200 m²) | Bölge alarm + kartlı geçiş | 20.000 - 40.000 TL |

## Sık Sorulan Sorular

**İşyeri alarm sistemi kaç bölgeden oluşmalı?**
Her ayrı güvenlik riski taşıyan alan ayrı bir bölge olmalıdır. Minimum önerim: giriş kapısı, satış alanı, depo ve kasa her biri ayrı bölge. Bu sayede bölge bazlı izleme ve zaman programlaması yapılabilir.

**Mağaza alarm sistemi günde kaç kez çalıştırılmalı?**
Standart kullanımda işyeri alarm sistemi günde bir kez kurulup bir kez açılır. Ara giriş gereken durumlarda (kargo teslim, temizlik) geçici yetkili kod veya zaman aralığı tanımlanabilir.

**Yanlış alarm durumunda ne olur?**
İzleme merkezi bağlantısı olmayan sistemlerde siren çalar ve mobil bildirim gelir. İzleme merkezi bağlantılı sistemlerde önce yetkili kişi aranır; teyit edilemezse güvenlik yönlendirilir.

**Mevcut kamera sistemiyle entegre olabilir mi?**
Evet. Alarm tetiklendiğinde ilgili kameranın kaydı otomatik işaretlenir. Modern NVR sistemleri alarm girişi üzerinden bu entegrasyonu destekler.

[İşyeri güvenlik sistemi](/isyeri-guvenlik-sistemi) sayfamızdan işyerinize özel komple teklif alabilirsiniz.

[Kablosuz alarm sistemi rehberi](/blog/kablosuz-alarm-sistemi-rehberi) yazımızda Ajax ve DSC sistemleri detaylıca karşılaştırılmaktadır.

[Alarm sistemi fiyatları 2026](/blog/alarm-sistemi-fiyatlari-2026) yazımız bütçe planlaması için faydalıdır.`,
  },
  {
    slug: "yangin-alarm-sistemi-fiyatlari-2026",
    title: "Yangın Alarm Sistemi Fiyatları 2026 | Kurulum ve Bileşen Maliyetleri",
    excerpt:
      "Yangın alarm sistemi fiyatları 2026 yılı güncel bilgileri. Duman dedektörü, yangın paneli, yangın alarm butonu ve tam sistem kurulum maliyetleri mekan tipine göre.",
    publishedAt: "2026-03-22",
    readTime: 8,
    category: "Fiyatlar ve Rehber",
    tags: ["yangın alarm sistemi fiyatları", "yangın alarm fiyatı", "duman dedektörü fiyatı", "yangın paneli"],
    image: "/images/services/bakim-servis/yangin-alarm-sistemi-urun-cesitleri-panel-buton-duman-dedektor-2816x1312pixel.png",
    featured: false,
    content: `## Yangın Alarm Sistemi Fiyatları 2026

Yangın alarm sistemi fiyatı; mekan büyüklüğü, duman dedektörü ve ısı dedektörü sayısı, yangın paneli kapasitesi, konvansiyonel veya adresli sistem tercihi ve belgelendirme kapsamına göre değişir.

2026 yılında tam kurulum (panel + dedektörler + butonlar + siren + belgelendirme) maliyetleri:
- **Küçük mekan (50-150 m²):** 10.000 - 18.000 TL
- **Orta mekan (150-500 m²):** 18.000 - 45.000 TL
- **Büyük tesis (500 m² üzeri):** 45.000 TL+ (keşif sonrası teklif)

## Yangın Alarm Sistemi Bileşenleri ve Fiyatları

### Yangın Paneli

Yangın paneli, tüm yangın algılama sisteminin merkez cihazıdır. Dedektör sinyallerini toplar, değerlendirir ve siren/bildirim çıkışlarını yönetir.

| Panel Tipi | Kapasite | Fiyat |
|-----------|---------|-------|
| Konvansiyonel (2 bölge) | Küçük mekan | 1.500 - 3.000 TL |
| Konvansiyonel (4-8 bölge) | Orta mekan | 3.000 - 7.000 TL |
| Adresli yangın paneli | Büyük tesis | 8.000 - 30.000 TL |

### Duman Dedektörü

Duman dedektörü, yangının en erken aşamasında (görünür alev oluşmadan) havadaki duman partiküllerini algılar.

| Tip | Fiyat |
|-----|-------|
| Konvansiyonel fotoelektrik | 300 - 600 TL |
| Konvansiyonel iyonizasyon | 200 - 450 TL |
| Adresli fotoelektrik | 600 - 1.500 TL |
| Çift sensörlü (multi-criteria) | 800 - 2.000 TL |

### Isı Dedektörü

Mutfak, garaj ve yüksek toz oranı olan ortamlarda duman sensörü yerine ısı dedektörü kullanılır. Sahte alarm riskini minimize eder.

- Sabit sıcaklık dedektörü: **250 - 500 TL**
- Hız artışlı (rate-of-rise) dedektör: **400 - 800 TL**

### Yangın Alarm Butonu (Manuel Call Point)

Yangını gören kişinin camı kırarak anında alarm tetikleyebildiği kırmızı cihaz. Çıkış yolları, koridor köşeleri ve merdiven boşluklarına yerleştirilir.

- Konvansiyonel yangın alarm butonu: **200 - 400 TL**
- Adresli yangın alarm butonu: **350 - 700 TL**

### Yangın Sireni ve Flaşörü

- İç siren (oda tipi): **300 - 600 TL**
- Kombinasyon sireni + flaşör: **500 - 1.000 TL**
- Dış uyarı cihazı: **400 - 800 TL**

## Konvansiyonel ve Adresli Sistem Maliyet Karşılaştırması

| Özellik | Konvansiyonel | Adresli |
|---------|--------------|---------|
| Başlangıç maliyeti | Düşük | Yüksek |
| Küçük mekan uygunluğu | İdeal | Gereksiz |
| Büyük tesis uygunluğu | Yetersiz | Zorunlu |
| Hata tespiti | Bölge bazlı | Cihaz bazlı |
| Belgelendirme güçlüğü | Basit | Daha detaylı |
| Bakım maliyeti | Düşük | Orta |

**Hangi sistem seçilmeli?**
- 500 m² altı tek katlı mekanlar → Konvansiyonel yangın alarm sistemi
- 500 m² üzeri veya çok katlı → Adresli sistem
- Otel, hastane, AVM → Adresli sistem zorunlu

## Mekan Tipine Göre Yangın Alarm Sistemi Fiyatı

### Restoran ve Kafe (50-150 m²)
Mutfak ısı dedektörü + salon duman dedektörü + yangın alarm butonu + panel + siren + **gaz dedektörü** (zorunlu)

**Tahmini maliyet: 12.000 - 20.000 TL**

### Mağaza veya Ofis (150-300 m²)
3-6 duman dedektörü + 2 yangın alarm butonu + yangın paneli + siren + belgelendirme

**Tahmini maliyet: 15.000 - 28.000 TL**

### İşyeri ve Depo (300-800 m²)
8-15 dedektör + çok bölgeli panel + birden fazla buton + çoklu siren

**Tahmini maliyet: 25.000 - 50.000 TL**

### Fabrika ve Büyük Tesis (800 m²+)
Adresli sistem + ışın tipi dedektör + yangın ihbar merkezi bağlantısı + zorunlu belgelendirme

**Tahmini maliyet: 50.000 TL+ (keşif sonrası)**

## Yangın Alarm Sistemi Fiyatını Etkileyen Faktörler

1. **Mekan büyüklüğü:** Dedektör sayısını doğrudan belirler. TS EN 54 standardına göre her 60 m² için 1 duman dedektörü hesaplanır.

2. **Tavan yüksekliği:** 4 metreden yüksek tavanlarda kapsama alanı düşer, daha fazla dedektör gerekir.

3. **Sistem tipi:** Adresli sistem konvansiyonele göre 2-3 kat daha pahalıdır ama büyük tesislerde zorunludur.

4. **Kablo altyapısı:** Yangın alarm kablosu (FRH tipi, yanmaya dayanıklı) standart kabloya göre daha pahalıdır.

5. **Belgelendirme:** Yangın projesi, test raporu, sertifika ve sigorta belgesi zorunlu kapsamdadır. Bu belgeler ayrıca maliyete yansır.

6. **Gaz dedektörü:** Mutfaklı işletmelerde gaz alarm cihazı zorunlu ek maliyet oluşturur (1.500-3.000 TL dahil).

## Yangın Alarm Sistemi Belgelendirme Maliyeti

Yasal zorunluluk kapsamında teslim edilmesi gereken belgeler:
- Yangın algılama sistemi projesi (mühendis imzalı)
- Cihaz yerleşim planı
- Sistem test raporu
- Yetkili servis sertifikası
- Sigorta uyum belgesi

Belgelendirme maliyeti: **2.000 - 5.000 TL** (kurulum fiyatına dahil edilmesi önerilir)

## Yıllık Bakım Maliyeti

Yangın alarm sistemi yılda bir kez bakıma alınması zorunludur:
- Dedektör testi ve temizliği
- Yangın alarm butonu testi
- Panel akü kontrolü
- Test raporu düzenlenmesi

Yıllık bakım ücreti: **1.500 - 4.000 TL** (cihaz sayısına ve mekan büyüklüğüne göre)

## Sık Sorulan Sorular

**Yangın alarm sistemi zorunlu mu?**
Yönetmelik kapsamındaki işletmeler için zorunludur: otel, yurt, hastane, okul, AVM, restoran (50 kişi üzeri), fabrika, depo ve büyük ofis binaları. Tam liste için [Yangın Alarm Sistemi Zorunlu mu?](/blog/yangin-alarm-sistemi-zorunlu-mu) yazımızı inceleyin.

**Fiyat almadan önce keşif gerekli mi?**
Evet. Mekan yapısı, tavan yüksekliği, mevcut altyapı ve yasal gerekliliklere göre fiyat değişir. Keşifsiz verilen fiyat gerçekçi olmaz.

**Sigorta şirketi için hangi belgeler gerekli?**
Yangın alarm sistemi kurulum projesi, test raporu ve yetkili servis sertifikası sigorta şirketleri tarafından istenen standart belgelerdir.

**Yangın paneli ne kadar sürede değiştirilmeli?**
Konvansiyonel yangın panelinin standart ömrü 10-15 yıldır. Akü her 3-5 yılda bir değiştirilmelidir.

[İşyeri güvenlik sistemi](/isyeri-guvenlik-sistemi) sayfamızdan yangın alarm dahil komple kurulum teklifi alabilirsiniz.

[Yangın alarm sistemi kurulumu](/yangin-alarm-sistemi-kurulumu) sayfamızda yasal zorunluluklar ve sistem seçenekleri detaylandırılmaktadır.

[Duman dedektörü rehberi](/blog/duman-dedektoru-rehberi) yazımızda dedektör türleri ve montaj noktaları anlatılmaktadır.

[Gaz dedektörü rehberi](/blog/gaz-dedektoru-rehberi) — mutfaklı işletmeler için gaz alarm cihazı seçimi.`,
  },
  {
    slug: "magaza-guvenlik-sistemi-rehberi",
    title: "Mağaza Güvenlik Sistemi Rehberi 2026 | Kamera, Alarm ve Ürün Koruma",
    excerpt:
      "Mağaza güvenlik sistemi nasıl kurulur? Mağaza kamera sistemi, mağaza alarm sistemi, depo kamera, ürün koruma ve kapı güvenlik sistemleri için kapsamlı rehber.",
    publishedAt: "2026-03-22",
    readTime: 10,
    category: "Teknik Rehber",
    tags: ["mağaza güvenlik sistemi", "mağaza kamera sistemi", "mağaza alarm sistemi", "mağaza ürün koruma sistemleri", "depo kamera sistemi"],
    image: "/images/services/bakim-servis/market-kamera-montaji-gorunmez-kablolama-demosu.jpg",
    featured: false,
    content: `## Mağaza Güvenlik Sistemi Nedir?

Mağaza güvenlik sistemi; kamera, alarm, kapı güvenlik ve ürün koruma bileşenlerini bir araya getirerek perakende işletmeleri hırsızlık, stok kaybı, vandalizm ve yetkisiz girişe karşı koruyan bütüncül bir güvenlik altyapısıdır.

Türkiye'de perakende kayıplarının %40-60'ı iç hırsızlıktan (personel veya kasadan müşteriyle suç ortaklığı) kaynaklanmaktadır. Bu nedenle mağaza güvenlik sistemi yalnızca dış tehditleri değil, iç riskleri de kapsamalıdır.

## Mağaza Kamera Sistemi

Mağaza kamera sistemi, perakende güvenliğinin temel bileşenidir. Doğru yerleştirilmiş bir kamera sistemi hem caydırıcılık sağlar hem de olay sonrası görüntü kanıtı sunar.

### Kritik Kamera Noktaları

**Giriş / Çıkış:**
Gelen ve giden her kişiyi kayıt altına alır. Yüz tanıma destekli modeller ile kara listeye alınan kişileri algılayabilir. En az 4MP çözünürlük önerilir.

**Kasa Bölgesi:**
İç hırsızlığın en sık yaşandığı alan. Kasiyerin ellerini ve para işlemini net gösteren dar açılı, yüksek çözünürlüklü kamera. Kasa kamerası kaçınılmazdır.

**Raf Arası ve Satış Alanı:**
Geniş açılı dome kameralar veya birden fazla kamera kombinasyonu ile raf aralarındaki kör noktalar kapatılır.

**Depo Kamera Sistemi:**
Depo girişi ve iç alan izleme. Stok çıkışı ve yetkisiz depo girişi bu kameralarla tespit edilir. Depo kamera sistemi, personel hareketinin kayıt altına alınmasında kritik rol oynar.

**Vitrin Önü / Dış Cephe:**
Gece saatlerinde cam kırma veya etiket sıyırma girişimlerini tespit eder. Gece görüşlü bullet kamera tercih edilir.

### Mağaza için Kamera Sayısı Önerileri

| Mağaza Büyüklüğü | Minimum Kamera |
|-----------------|----------------|
| 50 m² altı (büfe, bayi) | 3-4 kamera |
| 50-150 m² (butik, küçük mağaza) | 4-6 kamera |
| 150-400 m² (orta mağaza) | 6-12 kamera |
| 400 m²+ (büyük mağaza) | 12+ kamera |

## Mağaza Alarm Sistemi

Mağaza alarm sistemi mesai saati dışında işletmenin birincil savunma hattıdır. Bileşenler:

### Kapı Güvenlik Sistemleri

Kapı güvenlik sistemleri mağaza güvenliğinin ilk halkasıdır:
- **Manyetik kapı kontaktı:** Vitrin kapısı ve arka servis kapısı için. Kapı açıldığında alarm tetikler.
- **Cam kırılma sensörü:** Cam kırılma sesini 6-9 metreye kadar algılar. Vitrin güvenliği için zorunlu.
- **Kapı titreşim sensörü:** Kapıya fiziksel darbe uygulandığında uyarı verir.

### Hareket Algılama

- PIR (kızılötesi) hareket sensörü: İç alan ve depo için
- Dual-tech sensör: Dış mekân ve yüksek trafik alanları için (sahte alarm oranı düşük)

### Mağaza Alarm Otomasyonu

Mağaza alarm sistemi mesai saatine göre programlanır:
- Kapanış saatinde otomatik devreye girer
- Farklı alanlar (depo, satış, kasa) farklı zaman dilimlerinde aktive edilir
- Taşıma/kargo girişi için geçici devre dışı bırakma özelliği

## Mağaza Ürün Koruma Sistemleri

Mağaza ürün koruma sistemleri kamera ve alarmdan bağımsız bir katman olarak çalışır:

### Elektronik Ürün Güvenliği (EAS)

- **Yumuşak etiket (soft label):** Kitap, kozmetik, giyim gibi ürünlere yapıştırılır. Kasada devre dışı bırakılır.
- **Sert etiket (hard tag):** Giyim ve değerli ürünler için. Özel alıcı olmadan çıkarılamaz.
- **Kapı anteni:** Kasadan geçmeden etiketli ürün çıkışında alarm üretir.

### Akıllı Raf Sistemleri (Opsiyonel)

- Raf ağırlık sensörü: Ürün alındığında kayıt üretir
- Fiyat etiketi görüntüleme ile stok takibi entegrasyonu

### Güvenlik Personeli ile Kombinasyon

Kamera + alarm + EAS sistemi güvenlik personelinin yokluğunda bile etkili koruma sağlar. Günümüzde küçük-orta mağazalar personel yerine teknoloji yatırımını tercih etmektedir.

## Kartlı Geçiş Sistemi — Depo Erişim Kontrolü

Mağaza depo ve personel girişlerinde kartlı geçiş sistemi stok kaybını önleyen kritik bileşendir:

- Yalnızca yetkili personel depoya girebilir
- Giriş-çıkış log kaydı tutulur (saat + kimlik)
- Vardiya bazlı erişim kısıtlaması yapılabilir
- Kamera sistemi ile entegre: yetkisiz kart girişiminde kamera kaydı başlatılır

## Mekan Planlaması — Kör Nokta Analizi

Mağaza güvenlik sistemi kurulumunun en kritik adımı kör nokta analizidir:

1. Raf düzeninden oluşan görüş engellerinin tespiti
2. Köşe dönüşleri ve giriş/çıkış ara alanları
3. Soyunma kabini önleri
4. Depo kapısı ve arka çıkış
5. Asansör önü (varsa)

Bu noktalar tespit edilmeden kurulan sistem boşluk bırakır ve gerçek olayları kayıt edemez.

## Mağaza Güvenlik Sistemi Fiyatları 2026

| Paket | Kapsam | Maliyet |
|-------|--------|---------|
| Temel Dükkan Paketi | 4 kamera + alarm | 15.000 - 22.000 TL |
| Orta Mağaza Paketi | 8 kamera + alarm + kartlı geçiş | 30.000 - 50.000 TL |
| Büyük Mağaza | 12+ kamera + alarm + EAS + kartlı geçiş | 55.000 TL+ |

## Sık Sorulan Sorular

**Mağaza kamera kayıtları kaç gün tutulmalı?**
Perakende işletmeler için minimum 30 gün önerilir. Hırsızlık vakalarında olay tespiti çoğu zaman olaydan 1-3 hafta sonra yapılmaktadır. 7 günlük kayıt çoğu durumda yetersiz kalır.

**Mağaza alarmı yanlış çalışırsa ne olur?**
Sahte alarm hem iş akışını bozar hem de komşu işletmeleri rahatsız eder. Doğru sensör yerleşimi ve kalibrasyon ile sahte alarm oranı minimuma indirilir. PIR sensörlerin ısıtma/klima çıkışlarına yakın konumlandırılmaması kritik önem taşır.

**Depo kamera sistemi ile satış alanı kamerası ayrı yönetilir mi?**
Evet. Modern NVR sistemlerinde her kamera ayrı kanal üzerinden yönetilir. Depo kameralarına erişim kısıtlı tutulabilir; yalnızca yöneticiler depo kayıtlarını izleyebilir.

**Mağaza ürün koruma sistemi kamera ile entegre olabilir mi?**
Evet. EAS kapı anteni alarm verdiğinde ilgili kamera bölümü otomatik olarak kaydedilir ve alarm işaretlenir. Olay anında hırsız görüntüsü hazır olur.

**İşyeri kamera sistemi uzaktan izleme nasıl yapılır?**
NVR'a internet bağlantısı sağlandıktan sonra akıllı telefon uygulaması (Hikvision iVMS, Dahua DMSS vb.) aracılığıyla mağazanın canlı görüntüsüne her yerden erişilir. Hareket algılandığında anlık bildirim gönderilir.

[İşyeri güvenlik sistemi](/isyeri-guvenlik-sistemi) sayfamızdan mağazanıza özel komple teklif alabilirsiniz.

[İşyerine kaç kamera lazım?](/blog/isyerine-kac-kamera-lazim) yazımız kamera sayısı planlamasını detaylandırmaktadır.

[4 kameralı güvenlik sistemi fiyatı](/blog/4-kamerali-guvenlik-sistemi-fiyati) ve [8 kameralı güvenlik sistemi fiyatı](/blog/8-kamerali-guvenlik-sistemi-fiyati) yazılarımız bütçe planlaması için faydalıdır.

[Kablosuz alarm sistemi rehberi](/blog/kablosuz-alarm-sistemi-rehberi) — kiracı mağazalar için ideal alarm çözümü.`,
  },
  // ── depo-kamera-sistemi ──────────────────────────────────────────────
  {
    slug: "depo-kamera-sistemi",
    title: "Depo Kamera Sistemi: Doğru Kurulum ve Fiyat Rehberi (2026)",
    excerpt:
      "Deponuza kaç kamera gerekir, hangi model seçilmeli, fiyatlar ne kadar? Geniş alan ve gece görüşü gereksinimleriyle depo kamera sistemi kurulumunun tam rehberi.",
    publishedAt: "2026-03-20",
    readTime: 9,
    tags: ["kamera", "depo", "kurulum"],
    category: "Kurulum Rehberi",
    image: "/images/services/bakim-servis/depo-kamera-montaji-dis-cephe.jpg",
    content: `## Depo Kamera Sistemi Neden Farklı Gereksinimler Taşır?

Depo ve antrepo alanları, ofis veya mağazadan çok farklı kamera kurulum ihtiyaçları doğurur. Yüksek tavan (5–12 m), uzun koridorlar, dar raflar arası geçişler ve geniş yükleme rampaları — standart bir iç mekan kamerasıyla bu alanı izlemek hem yetersiz hem verimsiz olur.

Doğru **depo kamera sistemi** kurulumu üç temel problemi çözmelidir: hırsızlık/fire kaybı, iş kazası takibi ve sigorta gereksinimleri.

---

## Depo Kamera Sistemi Bileşenleri

### 1. Kamera Türleri

| Kamera Türü | Kullanım Yeri | Özellik |
|-------------|---------------|---------|
| Geniş açı dome (2K+) | Genel alan, raf arası | 180° görüş, vandal-proof |
| PTZ (pan-tilt-zoom) | Büyük açık alan | Uzaktan yönlendirme, 30× zoom |
| Bullet kamera | Giriş/çıkış kapıları | Uzun menzil, IR 50–80 m |
| Plaka okuma (LPR) | Araç girişi, yükleme rampası | Karakter tanıma |

Ortalama 500 m² depo için **6–10 kamera** yeterlidir; 1.000 m² üzeri depolarda **12–20 kamera** planlanmalıdır.

### 2. NVR ve Depolama

Depo kameralarında en az **30 günlük kayıt** tutulması önerilir — sigorta şirketleri ve işveren sorumluluk davaları için bu süre kritiktir. 8 kameralı bir sistemde:

- 2K çözünürlük + H.265+ codec → günlük ~80 GB
- 30 günlük kayıt → ~2,4 TB HDD (2 adet 2 TB önerilir, RAID-1 tercih)

### 3. Gece Görüşü ve Aydınlatma

Depolarda aydınlatma genellikle yetersizdir. **Starlight sensörlü kameralar** (F1.0 lens) düşük ışıkta renkli görüntü üretir. Tamamen karanlık alanlarda IR LED menzili 30–50 m olan kameralar seçilmelidir.

![Depo kamera kurulumu dış cephe](/images/services/bakim-servis/depo-kamera-montaji-dis-cephe.jpg "Depo dış cephe kamera montajı")

---

## Depo Kamera Sistemi Fiyatları (2026)

| Paket | Alan | Kamera Sayısı | Tahmini Fiyat |
|-------|------|---------------|---------------|
| Küçük depo | 200–400 m² | 4–6 kamera | 18.000–28.000 TL |
| Orta depo | 400–1.000 m² | 8–12 kamera | 30.000–55.000 TL |
| Büyük tesis | 1.000 m²+ | 16–32 kamera | 60.000 TL+ |

Fiyatları etkileyen başlıca faktörler:
- **Kablo altyapısı**: Mevcut kablo varsa maliyet düşer. Sıfır montajda kablo ve kanal maliyeti toplam maliyetin %20–30'unu oluşturabilir.
- **Kamera modeli**: Entry-level 2K ile kurumsal 4K arasında 2–3 kat fiyat farkı oluşabilir.
- **NVR kapasitesi**: 8 kanal yerine 16 kanal NVR seçmek ileride ekleme yapma esnekliği sağlar.

---

## Depo Kamera Sistemi Kurulumunda Dikkat Edilecekler

### Tavan Yüksekliği ve Montaj Açısı
5 m üzeri tavanlarda standart dome kamera yetersiz kalır. **Varifocal lens** (2.8–12 mm) kameralar kullanılmalı, montaj açısı raflar arası görüş boşluğu hesaplanarak ayarlanmalıdır.

### IP67 ve IK10 Standartları
Yükleme rampası veya soğuk hava deposu gibi nem ve toz yoğun ortamlarda IP67 (su geçirmezlik) ve IK10 (darbe dayanımı) sertifikalı kameralar şarttır.

### Kör Nokta Analizi
Montaj öncesi depo planı üzerinde kör nokta analizi yapılmalıdır. Özellikle **raf arkası ve kolon dibindeki** noktalar gözden kaçar; bu alanlara mini kamera veya fisheye kamera eklenmelidir.

---

## SSS

**Depo kameralarına kaç günlük kayıt yeterli?**
Sigorta şirketleri genellikle 30 gün ister. İş kazası davalarında 90 gün kayıt avantaj sağlar.

**Depo dışı (park alanı, rampa) için ne tür kamera?**
Bullet veya LPR (plaka okuma) kamera. IR menzili en az 40–50 m olmalı.

**Depo kamera sistemi uzaktan izlenir mi?**
Evet. Tüm modern NVR sistemleri mobil uygulama üzerinden canlı izleme ve kayıt erişimi sunar.

**Soğuk hava deposuna özel kamera var mı?**
Evet, -40°C çalışma sıcaklığına dayanıklı özel modeller mevcuttur. Standart kameralar soğuk depoda donabilir.

**Depo kamera sistemini kim kurmalı?**
Ruhsatlı güvenlik teknik servisi. Montaj kalitesi doğrudan sigorta tazminat sürecini etkiler.

---

[Fabrika kamera sistemi](/blog/fabrika-kamera-sistemi) kurulumunu planlıyorsanız tesis ölçekli kurulum rehberimize bakabilirsiniz.

[İşyeri güvenlik sistemi](/isyeri-guvenlik-sistemi) sayfamızdan deponuza özel ücretsiz keşif ve teklif alabilirsiniz.

[8 kameralı güvenlik sistemi fiyatı](/blog/8-kamerali-guvenlik-sistemi-fiyati) yazımız orta ölçekli depo bütçelemesi için referans teşkil eder.

[Güvenlik kamerası bakım ve servis](/kamera-bakim-servisi) hizmetimiz depo sistemlerini de kapsamaktadır.`,
  },
  // ── fabrika-kamera-sistemi ───────────────────────────────────────────
  {
    slug: "fabrika-kamera-sistemi",
    title: "Fabrika Kamera Sistemi: Üretim Tesisi Güvenlik Kamerası Rehberi",
    excerpt:
      "Fabrika ve üretim tesisi kamera sistemi nasıl kurulur? Üretim hattı, depo, yükleme alanı ve çevre güvenliği için doğru kamera seçimi, fiyatlar ve kurulum detayları.",
    publishedAt: "2026-03-20",
    readTime: 10,
    tags: ["kamera", "fabrika", "kurulum"],
    category: "Kurulum Rehberi",
    image: "/images/services/bakim-servis/fabrika-guvenlik-kamera-sistemi-kurulum-2650x1470px.jpg",
    content: `## Fabrika Kamera Sistemi Neden Kritiktir?

Fabrika ve üretim tesisleri, kamera sistemi açısından en karmaşık kurulum ortamlarından birini oluşturur. Farklı alanların farklı ihtiyaçları vardır:

- **Üretim hattı**: İş kazası takibi, üretim sürecini kayıt altına alma
- **Ham madde/depo alanı**: Hırsızlık ve fire kontrolü
- **Yükleme/boşaltma rampası**: Araç takibi, plaka okuma
- **Çevre güvenliği**: Perimeter (çevre çiti) ihlal tespiti
- **Ofis ve soyunma odaları**: Personel giriş/çıkış takibi

Tüm bu alanlar tek bir NVR sistemi altında yönetilmeli, ancak her alan için uygun kamera modeli seçilmelidir.

---

## Fabrika Kamera Sistemi Bileşenleri

### Üretim Hattı Kameraları

Üretim ortamı; toz, titreşim, yüksek sıcaklık ve kimyasal buhar içerebilir. Bu nedenle **IP66/IP67 endüstriyel kameralar** kullanılmalıdır.

Titreşimli makineler yakınında **anti-vibrasyon montaj braketleri** zorunludur — titreşim kameranın lens ve sensörüne zamanla zarar verir.

### Çevre Güvenliği (Perimeter)

Fabrika çevresinde **IR Bullet kameralar** tercih edilir. Gece görüş menzili en az 60–80 m olmalıdır. **AI destekli kameralar** insan/araç ayrımı yaparak gereksiz alarmleri filtreler — gece köpek veya kedinin geçmesi alarm tetiklememeli, sadece insanlar ve araçlar tetiklemelidir.

![Fabrika kamera sistemi kurulumu](/images/services/bakim-servis/fabrika-guvenlik-kamera-sistemi-kurulum-2650x1470px.jpg "Fabrika güvenlik kamera sistemi kurulumu")

### Plaka Tanıma (LPR)

Araç girişi ve yükleme rampasına **LPR kamera** kurulması hem güvenlik hem lojistik yönetimi açısından fayda sağlar. Günde kaç araç girdiği, hangi saatlerde yükleme yapıldığı, yetkisiz araç girişi — tümü otomatik raporlanır.

### NVR ve Merkezi İzleme

Büyük fabrikalarda kamera sayısı 20–100+ olabilir. Bu ölçekte:

- **32/64 kanallı NVR** veya **VMS (Video Management Software)** yazılımı
- **RAID depolama** (veri kaybı riski sıfırlanır)
- **Yedek güç (UPS)**: Elektrik kesintisinde sistemin çalışmaya devam etmesi
- **Fiber altyapı**: Uzun mesafe kablo hatlarında Cat6 yerine fiber optik

---

## Fabrika Kamera Sistemi Fiyatları (2026)

| Tesis Büyüklüğü | Kamera Sayısı | Tahmini Fiyat |
|-----------------|---------------|---------------|
| Küçük fabrika (500–1.500 m²) | 8–16 kamera | 35.000–70.000 TL |
| Orta fabrika (1.500–5.000 m²) | 16–32 kamera | 70.000–150.000 TL |
| Büyük tesis (5.000 m²+) | 32+ kamera | Teklif alın |

Fabrika kamera sistemlerinde fiyatı en çok etkileyen faktörler:
1. **Kablo altyapısı mesafesi**: Geniş tesislerde kablo maliyeti toplam bütçenin %30–40'ına çıkabilir
2. **Endüstriyel sertifika gereksinimleri** (ATEX vb. patlayıcı ortam)
3. **LPR ve AI analitik** eklentileri
4. **Merkezi güvenlik odası** kurulumu

---

## Kurulum Süreci

Fabrika kamera sistemi kurulumu genellikle **3–7 iş günü** sürer. Süreç:

1. **Keşif ve planlama**: Tesis planı üzerinde kamera pozisyonları, kablo güzergahları
2. **Altyapı hazırlığı**: Kablo kanalları, trunking, fiber geçişler
3. **Kamera montajı ve kablo çekimi**
4. **NVR yapılandırması ve kayıt ayarları**
5. **Uzaktan erişim kurulumu** ve personel eğitimi
6. **Test ve devreye alma belgesi**

---

## SSS

**Fabrika kamera sistemi için bakım sözleşmesi şart mı?**
Zorunlu değil, ancak 32+ kameralı tesislerde yıllık bakım olmadan sistem verimliliği zamanla düşer. Lens kirlenmesi, IR LED bozulması, HDD uyarıları gibi sorunları bakım ziyaretinde tespit etmek daha ekonomiktir.

**Patlayıcı ve kimyasal ortamlarda kamera kurulabilir mi?**
Evet, ATEX sertifikalı kameralar bu ortamlar için üretilmiştir. Standart kameralar bu ortamlarda tehlike oluşturabilir.

**Fabrika kameralarını sigorta şirketine göstermek gerekiyor mu?**
Bazı sanayi sigortaları kamera sistemi varlığını prim indirimi için belgeler. Kurulum sonrası teknik rapor hazırlıyoruz.

**Gece vardiyasında kameralar nasıl çalışır?**
Starlight sensörlü kameralar düşük ışıkta renkli görüntü üretir. Tamamen karanlık dış alanlarda IR aydınlatma devreye girer.

**Mevcut kameralar yetersizse ne yapılır?**
Sistemin tamamını değiştirmek yerine kritik noktalara ek kamera eklenebilir — mevcut NVR kapasite izin veriyorsa.

---

[Depo kamera sistemi](/blog/depo-kamera-sistemi) rehberimiz depo özelinde kurulum detaylarını açıklamaktadır.

[İşyeri güvenlik sistemi](/isyeri-guvenlik-sistemi) sayfamızdan fabrikanıza özel keşif ve teklif alabilirsiniz.

[Güvenlik kamerası bakım ve servis](/kamera-bakim-servisi) hizmetimizle tesisinizin kamera sistemini düzenli bakıma alabilirsiniz.

[8 kameralı güvenlik sistemi fiyatı](/blog/8-kamerali-guvenlik-sistemi-fiyati) — orta ölçekli tesis bütçelemesi için başlangıç referansı.`,
  },
  // ── magaza-kamera-sistemi ────────────────────────────────────────────
  {
    slug: "magaza-kamera-sistemi",
    title: "Mağaza Kamera Sistemi: Kurulum, Fiyat ve Doğru Kamera Seçimi (2026)",
    excerpt:
      "Mağazanıza kaç kamera lazım, hangi model seçilmeli? Kasa, giriş, depo ve deneme kabinleri için mağaza kamera sistemi kurulumunun eksiksiz rehberi.",
    publishedAt: "2026-03-20",
    readTime: 8,
    tags: ["kamera", "mağaza", "kurulum"],
    category: "Kurulum Rehberi",
    image: "/images/services/bakim-servis/market-kamera-montaji-gorunmez-kablolama-demosu.jpg",
    content: `## Mağaza Kamera Sistemi Neden Önemlidir?

Perakende sektöründe kamera sistemi artık bir tercih değil, iş sürekliliğinin zorunlu bir parçasıdır. **Mağaza kamera sistemi** üç kritik işlevi yerine getirir:

1. **Kayıp önleme**: Müşteri hırsızlığı (shoplifting) ve personel kaynaklı fire en büyük perakende kayıp kaynağıdır
2. **Hukuki delil**: Müşteri şikayeti, kaza veya anlaşmazlık durumlarında kamera kaydı belirleyici delildir
3. **Operasyon verimliliği**: Müşteri yoğunluğu analizi, kasa bekleme süreleri, personel performansı takibi

---

## Mağaza Kamera Sistemi: Kaç Kamera Gerekir?

| Mağaza Büyüklüğü | Önerilen Kamera Sayısı | Kritik Noktalar |
|------------------|------------------------|-----------------|
| 50–150 m² (butik/küçük mağaza) | 3–5 kamera | Giriş, kasa, depo kapısı |
| 150–400 m² (orta mağaza) | 6–10 kamera | Giriş, kasalar, raf alanları, depo |
| 400–1.000 m² (büyük mağaza) | 12–20 kamera | Tüm bölgeler + deneme kabinleri çevresi |

### Mutlaka Kamera Konulması Gereken Noktalar

- **Giriş/çıkış kapısı**: Giren çıkan herkesi net yakalamak için 2K+ çözünürlük şart
- **Kasa bölgesi**: Hem müşteri hem kasiyer tarafını gören çift açılı kurulum
- **Yüksek değerli ürün rafları**: Elektronik, kozmetik, alkol gibi risk ürünleri
- **Depo kapısı**: Personel stok erişimini izlemek için
- **Çıkış koridoru**: İkinci kontrol noktası

**Deneme kabinlerinin İÇİNE kamera konulamaz** — yasal yasak. Kabinlerin dışına, giriş-çıkış noktasına yönlendirilmiş kamera uygundur.

---

## Mağaza İçin Doğru Kamera Modeli

### Dome Kamera (Tavan Montajı)
Mağazalarda en yaygın tercih. Geniş açı lens (2.8–4 mm), 360° vandal-proof kasa, tavan montajı. **Müşteriler kameranın hangi yöne baktığını anlayamaz** — caydırıcılık artar.

### Mini PTZ
Büyük mağazalarda güvenlik görevlisinin gece takibi için kullanılır. Uzaktan yönlendirme ve zoom ile şüpheli takibi yapılabilir.

### Gizli Kasa Kamerası
Yüksek değerli ürün reyonuna yakın, küçük boyutlu kameralar. Personel veya müşteri tarafından fark edilmeden kayıt yapar.

![Mağaza kamera montajı görünmez kablolama](/images/services/bakim-servis/market-kamera-montaji-gorunmez-kablolama-demosu.jpg "Mağaza kamera kurulumu — gizli kablolama detayı")

---

## Mağaza Kamera Sistemi Fiyatları (2026)

| Paket | Kamera Sayısı | Tahmini Fiyat |
|-------|---------------|---------------|
| Küçük mağaza | 3–5 kamera | 12.000–22.000 TL |
| Orta mağaza | 6–10 kamera | 22.000–45.000 TL |
| Büyük mağaza | 12–20 kamera | 50.000 TL+ |

Fiyatı belirleyen faktörler:
- **Kablo gizleme**: Açıkta kablo yerine trunking veya tavan arasına kablo geçirmek ek maliyet oluşturur ama estetik açıdan zorunludur
- **Çözünürlük**: 2K ile 4K arasında yaklaşık 1,5–2 kat fiyat farkı
- **Bulut kayıt**: Yerel NVR yerine bulut depolama seçilirse aylık abonelik maliyeti eklenmelidir

---

## Mağaza Kamera Sisteminde Öne Çıkan Özellikler

### Hareket Algılama ve Anlık Bildirim
Mağaza kapalıyken hareket algılandığında telefona anlık bildirim. Gece soygunlarında **ortalama 3–7 dakika içinde** alarm bildirimi kritik fark yaratır.

### Uzaktan İzleme
Uygulamadan canlı görüntü, kayıt erişimi, kamera odak ayarı. Çok şubeli mağazalar tüm şubeleri tek ekrandan izleyebilir.

### Kasa Entegrasyonu
POS sistemiyle kamera entegrasyonu: hangi kasiyerin hangi işlemi yaptığı kamera görüntüsüyle eşleştirilir. Kasa uyuşmazlıklarında en güvenilir delil yöntemidir.

---

## SSS

**Mağazada kamera olduğunu müşterilere bildirmek gerekiyor mu?**
Evet, KVKK kapsamında kamera bulunduğunu ve kayıt yapıldığını belirten tabela asılması zorunludur.

**Mağaza kamera kayıtları ne kadar süre saklanmalı?**
Yasal bir minimum yoktur, ancak sigorta şirketleri 30 gün önermektedir. Yüksek çalışma riski olan mağazalarda 60 gün tercih edilir.

**Mağaza kameralarını kiracı kendisi kurabilir mi?**
Evet, kira sözleşmesinde engel yoksa kiracı kendi kamera sistemini kurabilir. Kablosuz kamera seçeneği taşıma kolaylığı sağlar.

**Kasa bölgesine kaç kamera lazım?**
En az 2 kamera: biri kasiyeri, biri müşteriyi çekecek şekilde. Çift görüş hem hırsızlığı hem kasiyeri korur.

**Mağaza kamera sistemi alarm sistemiyle entegre edilebilir mi?**
Evet. Kapı veya pencere açıldığında hem alarm hem kamera kayıt sistemi devreye girer, telefona bildirim gelir.

---

[Mağaza güvenlik sistemi rehberi](/blog/magaza-guvenlik-sistemi-rehberi) alarm, yangın alarmı ve kartlı geçiş dahil komple mağaza güvenliğini anlatmaktadır.

[İşyerine kaç kamera lazım?](/blog/isyerine-kac-kamera-lazim) yazımız kamera sayısı planlamasını matematiksel olarak açıklamaktadır.

[4 kameralı güvenlik sistemi fiyatı](/blog/4-kamerali-guvenlik-sistemi-fiyati) — küçük mağaza bütçelemesi için referans.

[İşyeri güvenlik sistemi](/isyeri-guvenlik-sistemi) sayfamızdan mağazanıza özel ücretsiz keşif ve teklif alabilirsiniz.`,
  },
  {
    slug: "istanbul-isyeri-guvenlik-kamerasi-kurulumu",
    title:
      "İstanbul İşyeri Güvenlik Kamerası Kurulumu: Fiyat, Kamera Sayısı ve Doğru Sistem Seçimi",
    excerpt:
      "İstanbul'daki işyeri sahipleri için güvenlik kamerası kurulumu rehberi: mağaza, ofis, depo ve kafe için kamera sayısı, sistem seçimi ve 2026 güncel fiyatlar.",
    publishedAt: "2026-03-23",
    readTime: 10,
    category: "Rehber ve Fiyat",
    tags: [
      "istanbul",
      "işyeri",
      "kamera kurulum",
      "güvenlik sistemi",
      "ip kamera",
      "fiyat",
    ],
    image:
      "/images/services/bakim-servis/guvenlik-kamera-montaj-ekibi-isyeri-montaj-dis-mekan.jpg",
    featured: false,
    content: `## İstanbul'da İşyeri Güvenlik Kamerası Kurulumu

İstanbul'da işyeri sahibi olmak, güvenlik konusunda ciddi sorumluluklar getirir. Yüksek kira, yoğun müşteri trafiği ve kentsel hırsızlık riskleri bir arada düşünüldüğünde güvenlik kamerası artık bir lüks değil, işletme altyapısının zorunlu bir parçasıdır.

Bu rehberde İstanbul'daki mağaza, ofis, kafe, depo ve küçük-orta ölçekli işletmeler için doğru kamera sistemi nasıl seçilir, kaç kamera gerekir ve toplam maliyet ne olur — tüm bunları ayrıntılı olarak ele alıyoruz.

## İstanbul'daki İşyerleri Hangi Güvenlik Sorunlarıyla Karşılaşıyor?

İstanbul'un yoğun kentsel yapısı, işyeri güvenliğini daha karmaşık hale getirir:

- **Kapı hırsızlığı ve kasa bölgesi riskleri** — perakende ve kafe gibi nakit yoğun işletmelerde yaygındır
- **Personel izleme ihtiyacı** — büyük vardiyalı ekiplerde iç güvenlik ve performans takibi
- **Gece mesai sonrası boş işyeri koruması** — AVM dışı bağımsız dükkânlarda kritik önem taşır
- **Otopark ve depo alanlarında kör nokta sorunu** — sık karşılaşılan ama çözülebilir bir problem

Kurulum öncesi bu risk noktaları belirlenmeden hazırlanan sistem, gerçek ihtiyacı karşılamayabilir.

## İşyeri Tipine Göre Kamera Sistemi Seçimi

### Mağaza ve Perakende

Mağazalarda en kritik noktalar kasa, giriş kapısı ve vitrin önüdür. Kasaya yakın konumlanan geniş açılı dome kamera hem müşteri hareketini hem de personel alanını tek çerçevede kapsar.

**Önerilen konfigürasyon (50-100 m² mağaza):**
- Giriş kapısı: 1 adet bullet kamera (yüz detayı için 4MP+)
- Kasa alanı: 1-2 adet dome kamera
- Depo/arka bölüm: 1 adet dome kamera
- **Toplam: 3-4 kamera, 4 kanallı NVR**

### Ofis ve İş Merkezi

Ofislerde kamera sistemi hem güvenlik hem de çalışma disiplini açısından değer üretir. Lobi, toplantı odası girişi, sunucu odası ve arka çıkış öncelikli noktalardır.

**Önerilen konfigürasyon (10-20 kişilik ofis):**
- Lobi ve resepsiyon: 1-2 adet dome kamera
- Koridor ve çıkışlar: 2-3 adet kamera
- Sunucu odası veya arşiv: 1 adet kamera
- **Toplam: 4-6 kamera, 8 kanallı NVR**

### Kafe ve Restoran

Kafe ve restoranlarda hem iç mekan hem de giriş bölümü izlenmelidir. Kasanın net görünmesi ve çalışan alanının kayıt altında olması önemlidir.

**Önerilen konfigürasyon:**
- Giriş kapısı: 1 adet yüz tanıma açılı kamera
- Kasa ve ödeme noktası: 1 adet yakın alan dome kamera
- Genel salon: 1-2 adet geniş açılı kamera
- Mutfak girişi veya servis alanı: 1 adet kamera
- **Toplam: 4-5 kamera, 4-8 kanallı NVR**

### Depo ve Lojistik

Depolar büyük alan, yüksek tavan ve gece güvenliği açısından özel bir planlama gerektirir. PTZ kameralar ve geniş açılı fisheye kameralar büyük depo alanlarında etkilidir.

**Önerilen konfigürasyon (500 m² depo):**
- Giriş kapısı ve yükleme rampaları: 2-3 adet bullet kamera
- Depo içi: 2-4 adet fisheye veya geniş açılı dome kamera
- Güvenlik kafesi / kasa alanı: 1 adet yakın alan kamera
- Dış çevre: 2-3 adet dış mekan bullet kamera
- **Toplam: 7-11 kamera, 8-16 kanallı NVR**

![Profesyonel kamera sistemi kurulum ve monitor kontrolü](/images/services/bakim-servis/kamera-sistem-kontrol-monitor-teknisyen.jpg "İstanbul işyeri kamera kurulumu sonrası sistem testi ve monitor kontrolü")

## İstanbul'da İşyeri Kamera Kurulumu Fiyatları 2026

| İşyeri Tipi | Kamera Sayısı | Tahmini Fiyat |
|-------------|---------------|---------------|
| Küçük mağaza / büfe | 2-3 kamera | 10.000 – 18.000 TL |
| Orta boy mağaza | 4-6 kamera | 18.000 – 32.000 TL |
| Kafe / restoran | 4-5 kamera | 16.000 – 28.000 TL |
| Ofis (10-20 kişi) | 4-8 kamera | 20.000 – 40.000 TL |
| Küçük depo | 6-10 kamera | 28.000 – 55.000 TL |
| Büyük depo / fabrika | 10+ kamera | Keşif sonrası özel teklif |

**Bu fiyatlara dahil olanlar:** Kamera, NVR kayıt cihazı, sabit disk, kablo tesisatı, montaj işçiliği ve 1 yıl garanti.

**Fiyatı etkileyen unsurlar:**
- Kablo mesafesi ve bina yapısı (asma tavan, beton duvar, yüksek tavan)
- Seçilen kamera çözünürlüğü (2MP, 4MP, 8MP/4K)
- Uzaktan izleme ve mobil uygulama entegrasyonu
- Ek özellikler: plaka tanıma, insan algılama, ses kaydı

---

**İstanbul'daki işyeriniz için ücretsiz keşif ve net fiyat teklifi almak ister misiniz?**

[İstanbul IP Kamera Montajı — Ücretsiz Keşif Talebi →](/teklif/istanbul-ip-kamera-montaji)

Sayfamızda paket fiyatlar, kurulum süreci ve tüm teknik detaylar yer almaktadır.

---

## Kamera Sayısı Nasıl Doğru Belirlenir?

Kamera sayısını belirlerken yalnızca metrekareye bakmak yanıltıcıdır. Doğru hesaplama şu adımlarla yapılır:

### 1. Giriş ve Çıkış Noktalarını Sayın

Her giriş kapısı, servis kapısı ve acil çıkış noktası için en az 1 kamera planlanmalıdır. Büyük işyerlerinde bu sayı 3-5'e ulaşabilir.

### 2. Kör Noktaları Belirleyin

Rafların arkası, köşe noktalar, asma tavan aralıkları ve kapalı depo koridorları kör nokta oluşturur. Her kör nokta için ek kamera gerekir.

### 3. Kritik Alanları Önceliklendirin

Kasa, para kasası, sunucu odası, arşiv ve ürün deposu en kritik alanlardır. Bu noktalar kesinlikle kamera kapsamında olmalıdır.

### 4. Personel Sayısı ve Vardiya Düzenini Değerlendirin

Büyük ekiplerle çalışan işyerlerinde ortak alan kameraları hem güvenlik hem de operasyonel izleme sağlar.

Kesin kamera sayısı ve yerleşim planı ancak yerinde keşif sonrası netleşir. Uzaktan yapılan hesaplamalar kör nokta ve kablo güzergahı konularında yanıltıcı olabilir.

## İstanbul'a Özel Dikkat Edilmesi Gereken Noktalar

### Kat Yönetimi ve Bina İzni

AVM'lerdeki mağazalar ve iş merkezlerindeki ofisler için kamera kurulumu öncesinde bina veya site yönetiminden onay alınması gerekebilir. Özellikle dış cephe kamerası ve ortak alan kamerası için bu adım önemlidir.

### İnternet Altyapısı

Uzaktan izleme için güvenilir internet bağlantısı şarttır. Fiber altyapısının olmadığı İstanbul'un bazı eski sanayi bölgelerinde alternatif çözüm olarak 4G/LTE yönlendirici kullanılabilir.

### Enerji Güvencesi

İstanbul'un yoğun iş bölgelerinde anlık elektrik kesintileri yaşanabilir. UPS veya kesintisiz güç kaynağı ile desteklenen sistemler kayıt sürekliliğini garanti altına alır.

### KVKK Uyumu

İşyerinde kamera kullanan işletmeler Kişisel Verilerin Korunması Kanunu kapsamında çalışan ve müşterileri bilgilendirmek zorundadır. Kamera uyarı levhası zorunludur.

![İç mekan kamera ve alarm sistemi kurulumu](/images/services/bakim-servis/ic-mekan-kamera-ve-alarm-kurulum-servisi.jpg "İstanbul işyeri iç mekan kamera ve alarm sistemi kurulumu")

## Kurulum Süreci Nasıl İşler?

### 1. Ücretsiz Keşif

Ekibimiz işyerinizi ziyaret ederek risk noktalarını, kablo güzergahını ve kamera pozisyonlarını belirler. Bu adımda size yerleşim planı ve net fiyat teklifi sunulur.

### 2. Ürün Seçimi ve Onay

Keşif sonrasında ihtiyacınıza uygun kamera modelleri, NVR kapasitesi ve disk boyutu önerilir. Onayınızın ardından kurulum günü planlanır.

### 3. Kurulum

Kurulum süresi işyeri büyüklüğüne göre genellikle 1-2 gün arasındadır. Kablo tesisatı, montaj, NVR programlama ve mobil uygulama kurulumu bu süreçte tamamlanır.

### 4. Test ve Eğitim

Kurulum tamamlandıktan sonra tüm kameralar test edilir. Kayıt kalitesi, hareket algılama ve mobil izleme uygulaması yerinde gösterilir.

### 5. Garanti ve Bakım

Kurulumun ardından 1 yıl parça ve işçilik garantisi verilir. İsteğe bağlı yıllık bakım sözleşmesiyle sistem düzenli kontrol altında tutulur.

---

**İstanbul'daki işyeriniz için hızlı teklif almak ister misiniz?**

[İstanbul IP Kamera Montajı Sayfasına Git →](/teklif/istanbul-ip-kamera-montaji)

Sayfamızda paket seçenekleri, örnek fiyatlar ve kredi kartıyla taksit imkânı hakkında detaylı bilgi bulabilirsiniz. Formu doldurarak ücretsiz keşif randevusu oluşturabilirsiniz.

---

## Sık Sorulan Sorular

**İstanbul'da işyeri kamera kurulumu ne kadar sürer?**
Küçük ve orta ölçekli işyerlerinde kurulum genellikle 1 iş günü içinde tamamlanır. Büyük depo veya çok katlı yapılarda 2-3 gün gerekebilir.

**Kamera sistemini telefonumdan izleyebilir miyim?**
Evet. NVR'a bağlı tüm kameralar mobil uygulama üzerinden gerçek zamanlı izlenebilir, hareket bildirimi alınabilir ve kayıtlar geri izlenebilir.

**Kaç günlük kayıt tutulur?**
2TB disk ile 4 kameralı sistem ortalama 15-20 gün kayıt tutar. Daha uzun saklama için büyük disk veya bulut yedekleme eklenebilir.

**Kurulum sırasında işyerini kapatmam gerekiyor mu?**
Küçük işyerlerinde kurulum büyük ölçüde işyeri açıkken yapılabilir. Yoğun kablolama gerektiren durumlarda mesai sonrası kurulum tercih edilebilir.

**Mevcut analog kamera sistemini IP'ye yükseltmek mümkün mü?**
Evet. Mevcut kablo altyapısı uygunsa analog kameralar IP kameralarla değiştirilerek sistem kolayca yükseltilebilir.

## Sonuç

İstanbul'da işyeri güvenlik kamerası kurulumu, doğru planlama yapıldığında yatırımın karşılığını hızla veren bir güvenlik altyapısıdır. Hırsızlık caydırıcılığı, sigorta avantajı, personel yönetimi ve uzaktan izleme gibi faydalar düşünüldüğünde sistem maliyeti genellikle birkaç ay içinde kendini amorti eder.

Doğru kamera sayısı ve yerleşim planı için mutlaka profesyonel keşif yaptırılmasını öneriyoruz. Uzaktan hazırlanan teklifler kör nokta, kablo güzergahı ve bina koşulları nedeniyle gerçeği yansıtmayabilir.

[İşyeri güvenlik sistemi](/isyeri-guvenlik-sistemi) sayfamızdan alarm entegrasyonu ve ek güvenlik çözümleri hakkında bilgi alabilirsiniz.

[İstanbul kamera sistemi kurulumu](/istanbul/kamera-sistemi-kurulumu) sayfası İstanbul'daki projelerimiz ve ilçe bazlı hizmet kapsamımız için detaylı bilgi sunar.`,
  }];

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
