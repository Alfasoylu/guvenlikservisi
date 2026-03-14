import type { BlogPost } from "@/data/blog-posts";
import {
    getAllProgrammaticKeywords,
    getProgrammaticKeywordBySlug,
    type ProgrammaticKeyword,
} from "./programmatic-keywords";

const internalLinks = `
[Kamera sistemi kurulumu](/kamera-sistemi-kurulumu) sayfamızdan ücretsiz keşif ve teklif talebinde bulunabilirsiniz.

[İstanbul kamera sistemi kurulumu](/istanbul/kamera-sistemi-kurulumu) sayfası İstanbul'daki projeler için detaylı bilgi sunar.

[Alarm sistemi kurulumu](/alarm-sistemi-kurulumu) sayfamızdan alarm çözümleri hakkında bilgi alabilirsiniz.

[Kartlı geçiş sistemi kurulumu](/kartli-gecis-sistemi-kurulumu) sayfamızdan geçiş kontrol sistemleri için teklif isteyebilirsiniz.`;

interface ContentGenerator {
    content: string;
    faq: { question: string; answer: string }[];
    excerpt: string;
    readTime: number;
}

// ---------------------------------------------------------------------------
// Camera system size content generators
// ---------------------------------------------------------------------------

function generateCameraSizeContent(kw: ProgrammaticKeyword): ContentGenerator {
    const countMatch = kw.slug.match(/^(\d+)/);
    const count = countMatch ? parseInt(countMatch[1], 10) : 4;

    const isSmall = count <= 4;
    const isMedium = count > 4 && count <= 8;
    const isLarge = count > 8;

    const venueSmall = "ev, daire, küçük dükkan veya ofis";
    const venueMedium = "orta büyüklükte mağaza, restoran, ofis veya apartman";
    const venueLarge = "büyük işyeri, fabrika, depo, site veya çok katlı bina";

    const venue = isSmall ? venueSmall : isMedium ? venueMedium : venueLarge;

    const priceRangeLow = isSmall
        ? "10.000 - 18.000"
        : isMedium
            ? "22.000 - 38.000"
            : "35.000 - 65.000";

    const priceRangeHigh = isSmall
        ? "18.000 - 28.000"
        : isMedium
            ? "38.000 - 55.000"
            : "55.000 - 100.000";

    const diskSize = isSmall ? "2TB" : isMedium ? "4TB" : "6-8TB";
    const recordDays = isSmall ? "30-45" : isMedium ? "25-35" : "15-25";

    const content = `## ${count} Kameralı Güvenlik Sistemi Fiyatı 2026

${count} kameralı güvenlik sistemi, ${venue} gibi alanlar için en çok tercih edilen yapılardan biridir. Bu rehberde ${count} kameralı bir sistemin toplam maliyetini, hangi bileşenlerden oluştuğunu, fiyatı etkileyen faktörleri ve doğru sistem seçimini detaylı olarak ele alıyoruz.

Fiyat hesabı sadece kamera adedine bakılarak yapılamaz. Kamera çözünürlüğü, kayıt cihazı, sabit disk kapasitesi, kablolama uzunluğu, montaj zorluğu ve ek özellikler toplam maliyeti doğrudan belirler.

## ${count} Kameralı Sistem Nerelerde Kullanılır?

${count} kameralı sistem ${venue} gibi mekanlarda yaygın olarak tercih edilir. Bu kamera sayısı, alanın giriş çıkış noktalarını, kritik bölgelerini ve ortak alanlarını yeterli kapsamayla izlemeye olanak tanır.

### Tipik Kullanım Alanları

${isSmall ? `- Daire veya müstakil ev girişi ve çevresi
- Küçük dükkan veya ofis: giriş, kasa ve genel alan
- Depo girişi ve iç alan
- Otopark veya bahçe girişi` : isMedium ? `- Orta büyüklükte mağaza: giriş, kasa, raf ve depo
- Restoran: müşteri alanı, kasa, mutfak girişi, giriş
- Ofis: resepsiyon, koridor, sunucu odası, giriş
- Apartman: giriş, otopark, asansör önü, merdiven boşluğu` : `- Büyük mağaza veya AVM: çok sayıda giriş, kat ve depo
- Fabrika: üretim alanı, yükleme, çevre, giriş
- Site: blok girişleri, otopark, çevre hattı
- Depo: iç alan, yükleme-boşaltma, çevre`}

## Sistem Bileşenleri ve Fiyatları

${count} kameralı bir güvenlik sistemi aşağıdaki bileşenlerden oluşur. Her bileşenin kalitesi ve kapasitesi toplam fiyatı etkiler.

### Kameralar

Kamera tipi, çözünürlüğü ve iç/dış mekan kullanımı fiyatı belirler. ${count} kamera için toplam kamera maliyeti çözünürlüğe göre değişir.

- **2MP (1080p) kameralar:** Adet başı 800 - 1.800 TL → Toplam: **${count * 800} - ${count * 1800} TL**
- **4MP (2K) kameralar:** Adet başı 1.500 - 3.500 TL → Toplam: **${count * 1500} - ${count * 3500} TL**
- **4K (8MP) kameralar:** Adet başı 3.000 - 6.000 TL → Toplam: **${count * 3000} - ${count * 6000} TL**

### NVR Kayıt Cihazı

${isSmall ? "4 kanallı" : isMedium ? "8 kanallı" : "16 kanallı"} NVR kayıt cihazı bu sistem için yeterlidir. Gelecekte kamera eklemek isterseniz bir üst kanal sayısı tercih edilebilir.

- **Standart NVR:** 2.500 - 5.000 TL
- **Profesyonel NVR:** 5.000 - 12.000 TL

### Sabit Disk

${count} kameralı sistem için **${diskSize}** sabit disk önerilir. Bu kapasite ile yaklaşık **${recordDays} gün** kayıt tutulabilir.

- **${diskSize} güvenlik serisi disk:** ${isSmall ? "1.500 - 3.000" : isMedium ? "2.500 - 5.000" : "4.000 - 8.000"} TL

### Kablolama ve Altyapı

PoE (Power over Ethernet) altyapı ile tek kablo hem veri hem enerji taşır. Kablo mesafesi ve montaj alanı maliyeti değiştirir.

- **PoE switch + kablolama:** ${isSmall ? "1.000 - 3.000" : isMedium ? "2.000 - 5.000" : "3.500 - 8.000"} TL

### Montaj İşçiliği

Kamera başına montaj ücreti genellikle **500 - 1.500 TL** arasındadır. Yüksek tavan, dış cephe veya uzun kablo mesafesi maliyeti artırabilir.

- **${count} kamera montaj ücreti:** ${count * 500} - ${count * 1500} TL

## Toplam Fiyat Özeti

### Standart Paket (2MP)

- ${count} adet 2MP IP kamera
- ${isSmall ? "4" : isMedium ? "8" : "16"} kanallı NVR
- ${diskSize} güvenlik serisi sabit disk
- PoE switch ve kablolama
- Montaj ve devreye alma

**Toplam:** ${priceRangeLow} TL

### Profesyonel Paket (4MP)

- ${count} adet 4MP IP kamera
- ${isSmall ? "4-8" : isMedium ? "8-16" : "16-32"} kanallı NVR
- ${diskSize} güvenlik serisi sabit disk
- PoE switch ve kablolama
- Montaj, mobil erişim ve devreye alma

**Toplam:** ${priceRangeHigh} TL

## Fiyatı Etkileyen Faktörler

### Kamera Çözünürlüğü

2MP ile 4K arasında ciddi fiyat farkı vardır. Her kamera için 4K gerekmeyebilir. Giriş noktalarında yüksek çözünürlük, iç mekanda 2MP yeterli olabilir.

### İç ve Dış Mekan Farkı

Dış mekan kameralarının vandal-proof kasa, IP67 koruma ve uzun IR mesafesi gerektirmesi fiyatı artırır. İç mekan kameralarında bu ihtiyaçlar daha düşüktür.

### Kablo Mesafesi

Kısa mesafeli kurulumlar daha düşük maliyetlidir. Uzun kablo çekimleri veya bina dışı geçişler malzeme ve işçilik maliyetini artırır.

### Mevcut Altyapı

Bina içinde Cat5e veya Cat6 kablo altyapısı varsa yeniden kablo çekme maliyeti düşer. Sıfırdan kablolama ciddi ek maliyet oluşturabilir.

### Montaj Zorluğu

Yüksek tavan, asma tavan, dış cephe, tuğla veya beton duvar gibi koşullar montaj süresini ve dolayısıyla maliyetini artırır.

### Gece Görüş İhtiyacı

Standart IR gece görüş çoğu kamerada mevcuttur. Ancak renkli gece görüş (starlight, ColorVu) veya uzun mesafe IR ihtiyacı daha yüksek maliyetli kamera gerektirir.

## Doğru Kamera Seçimi Nasıl Yapılır?

${count} kameralı sistem için doğru kamera seçimi mekan tipine, izleme amacına ve bütçeye göre değişir.

### Dome Kamera

İç mekanda tavana montaj için idealdir. Kompakt yapısı ve geniş açısı ile ${isSmall ? "dükkan, ofis" : isMedium ? "mağaza, restoran, ofis" : "büyük alan, kat, koridor"} gibi alanlarda sık tercih edilir.

### Bullet Kamera

Dış mekanda çevre güvenliği, giriş noktaları ve uzun mesafe izleme için uygundur. Görünür yapısı caydırıcı etki de yaratır.

### PTZ Kamera

${isLarge ? "Büyük projelerde geniş alanları tek kamerayla taramak için PTZ kamera değerlendirilebilir. Uzaktan döndürme ve zoom yapma kapasitesi vardır." : "Bu sistem boyutunda genellikle sabit kameralar yeterlidir. Ancak geniş bir dış alan varsa PTZ kamera bir seçenek olabilir."}

## ${count} Kamera Yeterli mi?

Kamera sayısının yeterli olup olmadığı alanın büyüklüğüne, kör nokta durumuna ve izleme amacına bağlıdır. ${count} kamera ${isSmall ? "küçük alanlar için genellikle yeterlidir. Ancak birden fazla katı olan veya geniş dış alanı bulunan mekanlar için daha fazla kamera gerekebilir" : isMedium ? "orta ölçekli projeler için iyi bir başlangıçtır. Ancak çok katlı yapılar veya geniş sahalar için ek kamera ihtiyacı doğabilir" : "büyük projeler için güçlü bir yapıdır. Ancak çok geniş sahalar veya çok katlı binalar için proje bazlı değerlendirme gerekir"}.

Kesin kamera sayısı sahada keşif yapılarak belirlenir. Kör nokta analizi, giriş-çıkış noktaları ve kritik alanlar profesyonel keşifle tespit edilir.

## Kurulum Süreci

### 1. Keşif ve Planlama

Profesyonel ekip alanı yerinde inceler. Kamera noktaları, kablo güzergahı ve sistem yapısı belirlenir.

### 2. Teklif ve Onay

Keşif sonrası yazılı teklif hazırlanır. Kamera modelleri, bileşen listesi ve toplam maliyet netleştirilir.

### 3. Kurulum ve Montaj

Kamera montajı, kablolama, NVR kurulumu ve disk takılımı yapılır. PoE altyapı ile tek kablo çözümü uygulanır.

### 4. Devreye Alma

Tüm kameralar test edilir. Gece görüş, kayıt kalitesi ve hareket algılama kontrol edilir. Mobil uygulama ile uzaktan erişim kurulur.

### 5. Kullanıcı Teslimi

Sistem kullanımı gösterilir. Canlı izleme, kayıt erişimi ve hareket bildirimi ayarları aktif hale getirilir.

## Sonuç

${count} kameralı güvenlik sistemi ${venue} gibi mekanlar için uygun maliyetli ve etkili bir çözümdür. Doğru fiyat keşif sonrası netleşir çünkü kamera modeli, altyapı durumu ve montaj koşulları her projede farklıdır.

${internalLinks}`;

    return {
        content,
        readTime: isSmall ? 8 : isMedium ? 9 : 10,
        excerpt: `${count} kameralı güvenlik sistemi fiyatı ne kadar? 2026 güncel fiyatlar, sistem bileşenleri, paket seçenekleri ve kurulum maliyeti rehberi.`,
        faq: [
            {
                question: `${count} kameralı sistem ne kadar tutar?`,
                answer: `Standart 2MP paket ${priceRangeLow} TL, profesyonel 4MP paket ${priceRangeHigh} TL arasındadır. Kesin fiyat keşif sonrası belirlenir.`,
            },
            {
                question: `${count} kamera yeterli mi?`,
                answer: `${count} kamera ${venue} gibi alanlar için genellikle ${isSmall ? "yeterlidir" : "iyi bir başlangıçtır"}. Kesin sayı alanın keşifi ile belirlenir.`,
            },
            {
                question: "Sonradan kamera eklenebilir mi?",
                answer:
                    "Evet. NVR kanal kapasitesi yeterliyse ve altyapı uygunsa ek kamera rahatlıkla eklenebilir.",
            },
        ],
    };
}

// ---------------------------------------------------------------------------
// Building type content generators
// ---------------------------------------------------------------------------

const buildingTypeData: Record<
    string,
    {
        name: string;
        intro: string;
        cameraCount: string;
        areas: string[];
        challenges: string[];
        extras: string[];
        priceRange: string;
    }
> = {
    "site-kamera-sistemi": {
        name: "Site",
        intro:
            "Siteler geniş açık alanları, çok sayıda blok girişi, otoparkı ve ortak mekanları ile kapsamlı kamera planlaması gerektiren yapılardır. Doğru site kamera sistemi hem sakinlerin güvenliğini hem de yönetimin denetim kapasitesini artırır.",
        cameraCount: "blok başına 4-8 kamera + ortak alan kameraları",
        areas: [
            "Blok girişleri ve apartman kapıları",
            "Otopark alanları (açık ve kapalı)",
            "Çocuk oyun alanı ve spor tesisleri",
            "Çevre hattı ve bariyer noktaları",
            "Asansör önleri ve merdiven boşlukları",
            "Yönetim ofisi ve güvenlik kulübesi",
        ],
        challenges: [
            "Geniş alan kapsaması için yüksek kamera sayısı",
            "Açık alan gece görüş ihtiyacı",
            "Uzun kablo mesafeleri",
            "Merkezi izleme altyapısı kurulumu",
            "Çok sayıda NVR ve switch yönetimi",
        ],
        extras: [
            "Plaka tanıma (LPR) sistemi",
            "Merkezi izleme odası",
            "Çevre çit algılama",
        ],
        priceRange: "45.000 - 150.000+",
    },
    "villa-kamera-sistemi": {
        name: "Villa",
        intro:
            "Villalar müstakil yapısı, geniş bahçesi ve çevre alanı nedeniyle ev güvenliğinde en kapsamlı kamera ihtiyacı olan yapı tipidir. Çevre güvenliği, giriş kontrolü ve uzaktan izleme bir arada planlanmalıdır.",
        cameraCount: "6-10 kamera",
        areas: [
            "Ana giriş kapısı ve garaj",
            "Bahçe çevresi ve arka kapı",
            "Havuz alanı ve teras",
            "Evin yan geçişleri",
            "Dış cephe genel görünüm",
        ],
        challenges: [
            "Geniş bahçe ve çevre alanı kapsaması",
            "Dış mekan gece görüş mesafesi",
            "Hava koşullarına dayanıklı kamera ihtiyacı",
            "Estetik montaj beklentisi",
        ],
        extras: [
            "Alarm sistemi entegrasyonu",
            "Kapı zili kamerası (video doorbell)",
            "Havuz ve teras aydınlatma kamerası",
        ],
        priceRange: "25.000 - 65.000",
    },
    "fabrika-kamera-sistemi": {
        name: "Fabrika",
        intro:
            "Fabrikalar üretim alanı, hammadde deposu, yükleme bölgesi ve çevre hattı ile geniş ölçekli güvenlik ihtiyacı olan endüstriyel yapılardır. Kamera sistemi hem güvenlik hem de operasyonel denetim amacıyla kullanılır.",
        cameraCount: "16-64+ kamera",
        areas: [
            "Üretim hatları ve çalışma alanları",
            "Hammadde ve mamul depo bölgeleri",
            "Yükleme ve boşaltma alanları",
            "Personel giriş çıkış noktaları",
            "Çevre hattı ve bariyer noktaları",
            "Kontrol odası ve enerji merkezi",
        ],
        challenges: [
            "Çok geniş alan kapsaması",
            "Toz, nem ve sıcaklık gibi çevre koşulları",
            "Yüksek tavan montajı",
            "Gece çevre güvenliği",
            "Yüksek bant genişliği ihtiyacı",
        ],
        extras: [
            "PTZ kamera ile geniş alan taraması",
            "Termal kamera ile çevre algılama",
            "Plaka tanıma sistemi",
            "Merkezi izleme odası",
        ],
        priceRange: "80.000 - 300.000+",
    },
    "depo-kamera-sistemi": {
        name: "Depo",
        intro:
            "Depolar stok güvenliği, yükleme kontrolü ve personel denetimi açısından etkili kamera sistemi gerektiren yapılardır. Yüksek raflar, geniş alanlar ve yoğun araç trafiği kamera planlamasında özel dikkat gerektirir.",
        cameraCount: "8-32 kamera",
        areas: [
            "Yükleme ve boşaltma kapıları",
            "Raf arası koridorlar",
            "Çıkış noktaları ve sevkiyat alanı",
            "Personel giriş çıkış",
            "Dış çevre ve bariyer",
        ],
        challenges: [
            "Yüksek raf sistemleri arasında kör nokta riski",
            "Geniş ve yüksek tavanlı alanlar",
            "Forklift trafiği ve hareket yoğunluğu",
            "Düşük aydınlatma koşulları",
        ],
        extras: [
            "Stok hareketliliği izleme",
            "Giriş çıkış zaman damgası",
            "Gece görüş odaklı IR kamera",
        ],
        priceRange: "35.000 - 120.000",
    },
    "magaza-kamera-sistemi": {
        name: "Mağaza",
        intro:
            "Mağazalar hırsızlık önleme, kasa güvenliği, müşteri davranış analizi ve personel denetimi gibi birçok amaca hizmet eden kamera sistemi gerektiren ticari alanlardır.",
        cameraCount: "4-12 kamera",
        areas: [
            "Giriş kapısı ve vitrin önü",
            "Kasa ve ödeme alanı",
            "Satış reyonları ve raf bölgeleri",
            "Depo girişi ve arka bölüm",
            "Personel alanları",
        ],
        challenges: [
            "Müşteri alanında estetik montaj ihtiyacı",
            "Kasa alanında yüksek çözünürlük gereksinimi",
            "Değişen aydınlatma koşulları",
            "Geniş raf sistemlerinde kör nokta riski",
        ],
        extras: [
            "Müşteri sayma sistemi",
            "Hırsızlık korelasyon kaydı",
            "POS entegrasyonu (kasa-kamera eşleştirmesi)",
        ],
        priceRange: "15.000 - 45.000",
    },
    "restoran-kamera-sistemi": {
        name: "Restoran ve Kafe",
        intro:
            "Restoranlar ve kafeler müşteri güvenliği, kasa denetimi, mutfak hijyen kontrolü ve operasyonel verimlilik için kamera sistemi kullanır. Hem iç hem dış mekan izleme ihtiyacı olabilir.",
        cameraCount: "4-8 kamera",
        areas: [
            "Giriş kapısı",
            "Kasa ve bar alanı",
            "Müşteri oturma bölgesi",
            "Mutfak girişi ve hazırlık alanı",
            "Depo",
            "Dış mekan oturma alanı (varsa)",
        ],
        challenges: [
            "Buhar ve yağ buharına dayanıklılık (mutfak yakını)",
            "Estetik montaj beklentisi",
            "Değişen aydınlatma koşulları",
            "Dış mekan oturma alanında hava koşulları",
        ],
        extras: [
            "Hijyen denetim kaydı",
            "Müşteri yoğunluk analizi",
            "Garson hizmet kalitesi kontrolü",
        ],
        priceRange: "12.000 - 35.000",
    },
};

function generateBuildingTypeContent(kw: ProgrammaticKeyword): ContentGenerator {
    const data = buildingTypeData[kw.slug];
    if (!data) return generateGenericContent(kw);

    const content = `## ${data.name} Kamera Sistemi Kurulumu

${data.intro}

Bu rehberde ${data.name.toLowerCase()} için kamera sistemi planlaması, kamera noktaları, önerilen kamera sayısı, sistem bileşenleri, fiyat aralığı ve kurulum sürecini kapsamlı olarak ele alıyoruz.

## ${data.name} İçin Neden Kamera Sistemi Gerekli?

${data.name} yapılarında kamera sistemi birden fazla amaca hizmet eder. Güvenlik kamerası sadece hırsızlığa karşı değil; operasyonel denetim, olay sonrası inceleme ve caydırıcılık için de kritik öneme sahiptir.

### Caydırıcılık

Görünür kameralar istenmeyen davranışları önleyen en etkili faktördür. ${data.name} yapılarında giriş noktalarına ve kritik alanlara yerleştirilen kameralar potansiyel tehditleri caydırır.

### Olay Sonrası İnceleme

Herhangi bir güvenlik olayında kayıt görüntüleri en güvenilir belgedir. Fotoğraf veya tanık ifadesinden çok daha güçlü kanıt değeri taşır.

### Operasyonel Denetim

${data.name} yapılarında kameralar sadece güvenlik değil, süreç kontrolü, personel denetimi ve müşteri davranışı analizi için de kullanılabilir.

## ${data.name} İçin Kaç Kamera Gerekli?

Standart bir ${data.name.toLowerCase()} projesi için önerilen kamera sayısı: **${data.cameraCount}**

Bu sayı yapının büyüklüğüne, kat sayısına, giriş çıkış noktalarına ve kör nokta durumuna göre değişebilir. Kesin kamera sayısı sahada yapılan profesyonel keşfle belirlenir.

## Kamera Noktaları

${data.name} yapılarında kritik kamera noktaları şunlardır:

${data.areas.map((area) => `- ${area}`).join("\n")}

Her nokta için kamera tipi (dome, bullet, PTZ) ve çözünürlük ayrı ayrı değerlendirilmelidir. İç mekan ve dış mekan kamera ihtiyacı da ayrışır.

## ${data.name} Kamera Sisteminde Zorluklar

${data.name} projelerinde dikkat edilmesi gereken teknik zorluklar:

${data.challenges.map((c) => `- ${c}`).join("\n")}

Profesyonel keşif sırasında bu zorluklar yerinde tespit edilir ve çözüm önerileri sunulur.

## Önerilen Sistem Bileşenleri

### Kameralar

${data.name} için IP kamera sistemi önerilir. PoE (Power over Ethernet) teknolojisi ile tek kablo çözümü hem veri hem enerji taşır.

- **İç mekan kameralar:** Dome tipi, 2MP veya 4MP, IR gece görüş
- **Dış mekan kameralar:** Bullet tipi, 4MP, IP67, 30-50m IR
- **Özel ihtiyaç:** PTZ kamera (geniş alan taraması için)

### NVR Kayıt Cihazı

Kamera sayısına uygun kanal kapasitesinde NVR kayıt cihazı tercih edilmelidir. İleride genişleme planı varsa bir üst kanal sayısı alınabilir.

### Sabit Disk

Kayıt süresi ihtiyacına göre disk kapasitesi planlanmalıdır. ${data.name} yapılarında en az 30 gün kayıt süresi hedeflenmelidir.

### Altyapı

PoE switch, Cat5e/Cat6 kablo, kablo kanalı, montaj aparatları ve gerekli durumlarda fiber optik bağlantı.

## Ek Özellikler ve Entegrasyon

${data.name} projelerinde standart kamera sistemine ek olarak değerlendirilebilecek özellikler:

${data.extras.map((e) => `- ${e}`).join("\n")}

Bu özellikler projenin kapsamına ve bütçesine göre opsiyonel olarak sunulur.

## Fiyat Aralığı

${data.name} kamera sistemi için genel fiyat aralığı: **${data.priceRange} TL**

Bu fiyat kamera sayısı, marka, çözünürlük, altyapı durumu ve montaj koşullarına göre değişir. Kesin fiyat keşif sonrası yazılı teklif ile belirlenir.

[Güvenlik kamerası montaj ücreti 2026](/blog/guvenlik-kamerasi-montaj-ucreti-2026) yazımızda bileşen bazlı fiyatları detaylı olarak paylaşıyoruz.

## Kurulum Süreci

### 1. İhtiyaç Analizi ve Keşif

${data.name} yapısı yerinde incelenir. Alan büyüklüğü, giriş çıkış noktaları, kör noktalar, aydınlatma durumu ve kablo güzergahı tespit edilir.

### 2. Sistem Tasarımı

Kamera noktaları, kamera tipleri, NVR kapasitesi ve altyapı planı oluşturulur. Yazılı teklif hazırlanır.

### 3. Montaj ve Kablolama

Kameralar monte edilir, PoE kablolama yapılır, NVR kurulur ve sabit disk takılır.

### 4. Devreye Alma ve Test

Tüm kameralar test edilir. Gece görüş, kayıt kalitesi, hareket algılama ve mobil erişim kontrol edilir.

### 5. Kullanıcı Eğitimi ve Teslim

Sistem kullanımı gösterilir. Mobil uygulama kurulumu, kayıt erişimi ve bildirim ayarları yapılır.

## ${data.name} Kamera Sisteminde Sık Yapılan Hatalar

- Keşif yapmadan kamera noktası belirlemek
- Dış mekan için iç mekan kamerası kullanmak
- Gece görüş mesafesini göz ardı etmek
- Yetersiz disk kapasitesi ile kısa kayıt süresi kalmak
- Kablolama kalitesini düşük tutmak
- Gelecek genişleme ihtiyacını hesaplamamak

## Sonuç

${data.name} kamera sistemi doğru planlandığında hem güvenliği hem operasyonel verimliliği artırır. Önemli olan profesyonel keşif ile başlamak, ihtiyaca uygun sistem tasarlamak ve kaliteli kurulum yaptırmaktır.

${internalLinks}`;

    return {
        content,
        readTime: 10,
        excerpt: `${data.name} için güvenlik kamera sistemi nasıl kurulur? Kamera sayısı, noktalar, bileşenler, fiyat aralığı ve kurulum süreci rehberi.`,
        faq: [
            {
                question: `${data.name} için kaç kamera gerekir?`,
                answer: `Standart bir ${data.name.toLowerCase()} projesi için ${data.cameraCount} önerilir. Kesin sayı keşif ile belirlenir.`,
            },
            {
                question: `${data.name} kamera sistemi ne kadar tutar?`,
                answer: `${data.name} kamera sistemi genel olarak ${data.priceRange} TL aralığındadır. Fiyat kamera sayısı ve özelliklere göre değişir.`,
            },
            {
                question: "Kurulum ne kadar sürer?",
                answer: `${data.name} projelerinde kurulum süresi kamera sayısına göre 1-5 iş günü arasında değişir. Keşif sonrası net süre belirlenir.`,
            },
        ],
    };
}

// ---------------------------------------------------------------------------
// Technical content generators
// ---------------------------------------------------------------------------

const technicalContentData: Record<
    string,
    {
        intro: string;
        sections: { heading: string; body: string }[];
        faq: { question: string; answer: string }[];
    }
> = {
    "poe-kamera-sistemi-nedir": {
        intro:
            "PoE (Power over Ethernet) kamera sistemi, güvenlik kameralarına tek bir Ethernet kablosu üzerinden hem veri hem de elektrik enerjisi ileten teknolojidir. Geleneksel kamera sistemlerinde her kamera için ayrı güç kablosu ve veri kablosu çekilmesi gerekirken, PoE teknolojisi bu ihtiyacı tek kabloya indirger.",
        sections: [
            {
                heading: "PoE Teknolojisi Nasıl Çalışır?",
                body: `PoE teknolojisi IEEE 802.3af ve IEEE 802.3at standartlarına dayanır. PoE switch veya PoE enjektör cihazı, standart Ethernet kablosunun kullanılmayan çiftleri üzerinden DC güç sinyali gönderir.

Kamera tarafında PoE destekli bir cihaz bu gücü alarak çalışır. Böylece kameraya ayrı bir güç adaptörü bağlamaya gerek kalmaz.

### PoE Standartları

- **IEEE 802.3af (PoE):** Cihaz başına 15.4W güç, çoğu IP kamera için yeterli
- **IEEE 802.3at (PoE+):** Cihaz başına 30W güç, PTZ ve ısıtıcılı kameralar için
- **IEEE 802.3bt (PoE++):** Cihaz başına 60-100W güç, özel endüstriyel cihazlar için

### Kablo Mesafesi

PoE teknolojisi standart Cat5e veya Cat6 kablo ile **100 metreye** kadar desteklenir. Bu mesafeyi aşmak için PoE extender cihazı kullanılabilir.`,
            },
            {
                heading: "PoE Kamera Sisteminin Avantajları",
                body: `- **Tek kablo çözümü:** Veri ve enerji aynı kablo üzerinden taşınır, kablolama maliyeti ve karmaşıklığı azalır
- **Kolay kurulum:** Her kamera için ayrı güç hattı çekmeye gerek kalmaz
- **Merkezi yönetim:** PoE switch üzerinden tüm kameraların gücü merkezi olarak yönetilir
- **Uzaktan yeniden başlatma:** Kamera donması veya arızasında switch üzerinden güç kesilebilir ve yeniden verilebilir
- **Maliyet avantajı:** Elektrik tesisatı ve güç adaptörü maliyeti ortadan kalkar
- **Ölçeklenebilirlik:** Yeni kamera eklemek sadece kablo çekmek ve switch portuna bağlamak kadar kolaydır`,
            },
            {
                heading: "PoE Switch Nedir?",
                body: `PoE switch, Ethernet portları üzerinden bağlı cihazlara güç verebilen bir ağ anahtarıdır. Güvenlik kamerası sistemlerinde PoE switch, tüm kameraların beslendiği merkezi güç ve veri dağıtım noktasıdır.

### PoE Switch Seçim Kriterleri

- **Port sayısı:** Kamera sayısına uygun port kapasitesi (genellikle 4, 8, 16, 24 port)
- **Toplam güç bütçesi:** Tüm portların aynı anda besleyebileceği toplam watt değeri
- **Yönetilebilirlik:** Managed switch, VLAN ve QoS desteği sunar
- **Uplink portu:** NVR bağlantısı için gigabit uplink portu`,
            },
            {
                heading: "PoE Kamera Sistemi Kimler İçin Uygun?",
                body: `PoE kamera sistemi hemen hemen her türlü güvenlik projesi için uygundur:

- **Yeni bina projeleri:** Sıfırdan kablolama yapılacaksa PoE en verimli çözümdür
- **Mevcut bina yenileme:** Eski analog sistemden IP kameraya geçişte PoE altyapı dönüşümü önerilir
- **İşyeri ve ofisler:** Mevcut ağ altyapısı üzerinden kamera sistemi kurulabilir
- **Apartman ve siteler:** Merkezi izleme için PoE switch ile tüm kameralar yönetilir
- **Fabrika ve depolar:** Uzun mesafelerde PoE extender ile çözüm sağlanır`,
            },
            {
                heading: "PoE ve Kablosuz Kamera Karşılaştırması",
                body: `PoE kamera ve kablosuz (Wi-Fi) kamera arasında önemli farklar vardır:

- **Güvenilirlik:** PoE kablolu bağlantı ile kesintisiz çalışır. Wi-Fi sinyali duvar, mesafe ve parazit nedeniyle zayıflayabilir.
- **Bant genişliği:** PoE kablolu bağlantı daha yüksek ve kararlı bant genişliği sunar, özellikle çoklu kamera sistemlerinde kritik öneme sahiptir.
- **Güvenlik:** Kablolu bağlantı kablosuz sinyale göre dinlenmeye karşı daha güvenlidir.
- **Güç devamlılığı:** PoE switch üzerinden UPS beslemesiyle kameralar elektrik kesintisinde de çalışmaya devam eder.
- **Kurulum mesafesi:** Wi-Fi kamera sinyal menzili ile sınırlıyken, PoE extender ile 100 metre üzeri mesafeler desteklenir.`,
            },
        ],
        faq: [
            {
                question: "PoE kamera sistemi internetsiz çalışır mı?",
                answer:
                    "Evet. PoE kamera, NVR ve switch yerel ağda çalışır. Uzaktan erişim için internet gerekir ama yerel kayıt ve izleme internetsiz çalışır.",
            },
            {
                question: "PoE switch kaç kamerayı besleyebilir?",
                answer:
                    "Port sayısı ve toplam güç bütçesine bağlıdır. 8 portlu standart PoE switch 8 kamerayı besleyebilir. Büyük projelerde 16 veya 24 portlu switch kullanılır.",
            },
            {
                question: "Mevcut ağ kablosu PoE için kullanılabilir mi?",
                answer:
                    "Cat5e veya üstü kablo PoE için yeterlidir. Eski Cat5 kablo da çalışabilir ancak performans ve mesafe sınırlı olabilir.",
            },
        ],
    },
    "nvr-nedir-ne-ise-yarar": {
        intro:
            "NVR (Network Video Recorder), IP kamera sistemlerinde görüntülerin kaydedildiği, saklandığı ve yönetildiği ağ tabanlı kayıt cihazıdır. Kameralardan gelen dijital görüntü verilerini Ethernet ağı üzerinden alır, sabit diske kaydeder ve kullanıcıya canlı izleme ve kayıt geri oynatma imkanı sunar.",
        sections: [
            {
                heading: "NVR Nasıl Çalışır?",
                body: `NVR cihazı ağ üzerinden IP kameralara bağlanır. Kameralar görüntüyü dijital olarak işler ve ağ protokolleri ile NVR'a iletir. NVR bu veriyi alır, sıkıştırır ve dahili sabit diske kaydeder.

### NVR Çalışma Şeması

1. IP kameralar görüntüyü dijital olarak yakalar ve sıkıştırır
2. Görüntü verisi Ethernet (kablolu) veya Wi-Fi (kablosuz) ile NVR'a iletilir
3. NVR gelen veriyi sabit diske kaydeder
4. Kullanıcı HDMI monitör veya mobil uygulama ile canlı izleme yapar
5. Kayıtlara tarih ve saat bazlı erişim sağlanır`,
            },
            {
                heading: "NVR Cihazı Seçim Kriterleri",
                body: `### Kanal Sayısı

NVR'ın aynı anda kaç kamerayı desteklediğini belirler. Yaygın seçenekler: 4, 8, 16, 32 ve 64 kanal.

İpucu: Mevcut kamera sayısının üzerinde kanal kapasitesi seçmek gelecekteki genişleme için alan bırakır.

### Disk Yuvası Sayısı

NVR'ın kaç sabit disk takılabileceğini belirler. Daha fazla disk yuvası, daha uzun kayıt süresi veya RAID koruması imkanı sunar.

- **1 yuva:** Küçük sistemler, tek disk
- **2 yuva:** Orta sistemler, genişleme veya yedekleme
- **4+ yuva:** Büyük projeler, uzun süreli kayıt

### Çözünürlük Desteği

NVR'ın desteklediği maksimum çözünürlük önemlidir. 4K kamera kullanılacaksa NVR'ın 4K kayıt ve çıkış desteği olmalıdır.

### PoE Dahili NVR

Bazı NVR modelleri dahili PoE switch ile gelir. Bu modellerde kameralar doğrudan NVR'a bağlanır, ayrı PoE switch gerekmez. Küçük ve orta projelerde tavsiye edilir.

### Marka ve Yazılım

NVR yazılımı kullanım kolaylığı, mobil uygulama kalitesi ve analitik özellikleri açısından önemlidir. Hikvision, Dahua ve Reolink yaygın tercihlerdir.`,
            },
            {
                heading: "NVR ile DVR Arasındaki Fark",
                body: `NVR ve DVR benzer göreve sahip kayıt cihazlarıdır ancak farklı kamera teknolojileri ile çalışır.

- **NVR:** IP kameralar ile ağ üzerinden çalışır. Görüntü kamera tarafında işlenir.
- **DVR:** Analog kameralar ile koaksiyel kablo üzerinden çalışır. Görüntü DVR tarafında dijitale çevrilir.

NVR günümüzde yeni projelerin standart tercihidir. Daha yüksek çözünürlük, PoE uyumluluğu ve ölçeklenebilirlik avantajı sunar.`,
            },
            {
                heading: "NVR Fiyat Aralığı",
                body: `NVR fiyatı kanal sayısı, disk yuvası, PoE desteği ve markaya göre değişir.

- **4 kanallı dahili PoE NVR:** 2.500 - 5.000 TL
- **8 kanallı dahili PoE NVR:** 4.000 - 8.000 TL
- **16 kanallı NVR:** 6.000 - 15.000 TL
- **32+ kanallı profesyonel NVR:** 12.000 - 30.000 TL`,
            },
        ],
        faq: [
            {
                question: "NVR ile DVR arasındaki fark nedir?",
                answer:
                    "NVR IP kameralar ile ağ üzerinden, DVR analog kameralar ile koaksiyel kablo üzerinden çalışır. NVR daha yüksek çözünürlük ve PoE desteği sunar.",
            },
            {
                question: "NVR'a kaç kamera bağlanabilir?",
                answer:
                    "NVR'ın kanal kapasitesine bağlıdır. 4, 8, 16, 32 ve 64 kanallı modeller mevcuttur.",
            },
            {
                question: "NVR internetsiz kullanılabilir mi?",
                answer:
                    "Evet. NVR yerel ağda çalışır, kayıt ve canlı izleme internetsiz yapılır. Uzaktan mobil erişim için internet gerekir.",
            },
        ],
    },
    "dvr-ile-nvr-arasindaki-fark": {
        intro:
            "DVR ve NVR güvenlik kamerası sistemlerinde kullanılan iki farklı kayıt cihazı teknolojisidir. DVR (Digital Video Recorder) analog kameralar ile, NVR (Network Video Recorder) ise IP kameralar ile çalışır. Bu rehberde iki teknoloji arasındaki temel farkları, avantajları, dezavantajları ve hangi durumda hangisinin tercih edilmesi gerektiğini detaylı olarak ele alıyoruz.",
        sections: [
            {
                heading: "DVR Nedir?",
                body: `DVR (Digital Video Recorder), analog kameralardan gelen görüntü sinyallerini dijitale çeviren ve sabit diske kaydeden cihazdır.

### DVR Çalışma Prensibi

1. Analog kamera görüntüyü koaksiyel kablo ile DVR'a gönderir
2. DVR içindeki ADC (Analog-Digital Converter) sinyali dijitale çevirir
3. Dijitalleşen görüntü sıkıştırılarak sabit diske kaydedilir
4. Kullanıcı monitör veya ağ üzerinden kayıtlara erişir

### DVR Özellikleri

- Koaksiyel kablo (BNC) bağlantı
- Görüntü işleme DVR tarafında yapılır
- 720p, 1080p çözünürlük desteği
- Her kameraya ayrı güç adaptörü gerekir`,
            },
            {
                heading: "NVR Nedir?",
                body: `NVR (Network Video Recorder), IP kameralardan Ethernet ağı üzerinden gelen dijital görüntü verilerini kaydeden cihazdır.

### NVR Çalışma Prensibi

1. IP kamera görüntüyü kendi içinde dijitale çevirir ve sıkıştırır
2. Dijital veri Ethernet kablosu ile NVR'a iletilir
3. NVR gelen veriyi sabit diske kaydeder
4. Kullanıcı HDMI monitör, web arayüzü veya mobil uygulama ile erişir

### NVR Özellikleri

- Ethernet (Cat5e/Cat6) bağlantı
- Görüntü işleme kamera tarafında yapılır
- 2MP, 4MP, 4K ve üzeri çözünürlük desteği
- PoE ile tek kablo çözümü (veri + güç)`,
            },
            {
                heading: "Teknik Karşılaştırma",
                body: `DVR ve NVR arasındaki temel farklar:

- **Kablo tipi:** DVR koaksiyel, NVR Ethernet
- **Çözünürlük:** DVR 720p-1080p, NVR 2MP-4K+
- **Görüntü işleme:** DVR cihaz tarafında, NVR kamera tarafında
- **Güç:** DVR ayrı güç, NVR PoE (tek kablo)
- **Kablo mesafesi:** DVR 300m, NVR 100m (extender ile artırılabilir)
- **Ölçeklenebilirlik:** DVR sınırlı, NVR esnek
- **Analitik:** DVR temel, NVR gelişmiş

NVR günümüzde yeni projelerin standart tercihi haline gelmiştir. DVR yalnızca mevcut analog altyapıyı koruma senaryolarında değerlendirilebilir.`,
            },
            {
                heading: "Hangisini Tercih Etmeli?",
                body: `### NVR Tercih Edilmeli

- Yeni kurulum projelerinde
- Yüksek çözünürlük gerektiğinde
- PoE avantajından yararlanmak istendiğinde
- Uzaktan mobil erişim kritik olduğunda
- Gelecekte sistem büyütmeyi planlandığında

### DVR Kabul Edilebilir

- Mevcut koaksiyel kablo altyapısı varsa ve değiştirmek istenmiyorsa
- Bütçe çok sınırlıysa ve basit izleme yeterliyse
- Geçici veya kısa süreli projeler için`,
            },
        ],
        faq: [
            {
                question: "DVR'dan NVR'a geçiş mümkün mü?",
                answer:
                    "Evet. Ancak koaksiyel kablolar yerine Ethernet kablo çekilmesi, analog kameraların IP kamera ile değiştirilmesi gerekir.",
            },
            {
                question: "Hangisi daha güvenilir?",
                answer:
                    "Her ikisi de güvenilirdir. Ancak NVR daha yüksek çözünürlük, daha esnek yapı ve daha gelişmiş özellikler sunar.",
            },
            {
                question: "Hibrit DVR/NVR nedir?",
                answer:
                    "Hem analog hem IP kamera girişi olan cihazlardır. Geçiş sürecinde mevcut analog kameraları koruyarak yeni IP kamera eklemek için kullanılır.",
            },
        ],
    },
    "h265-sikistirma-nedir": {
        intro:
            "H.265 (HEVC — High Efficiency Video Coding), güvenlik kamerası sistemlerinde görüntü sıkıştırma için kullanılan ileri düzey bir video codec'tir. Bir önceki nesil H.264 formatına göre aynı görüntü kalitesinde yaklaşık %50 daha az depolama alanı kullanır. Bu sayede aynı sabit disk kapasitesiyle çok daha uzun kayıt süresi elde edilir.",
        sections: [
            {
                heading: "H.265 Nasıl Çalışır?",
                body: `H.265 sıkıştırma, görüntü karelerini daha büyük bloklar halinde analiz ederek tekrarlayan pikselleri daha verimli kodlar. H.264'ün 16x16 piksel blokları yerine 64x64 piksel bloklar kullanır.

### Sıkıştırma Verimliliği

- **H.264:** Standart sıkıştırma, kabul edilebilir veri boyutu
- **H.265:** H.264'e göre %30-50 daha az veri üretir
- **H.265+ (Smart codec):** H.265'e göre de %50-70 daha az veri üretir

### Pratik Etki

4 kameralı 2MP sistem, 2TB disk ile:
- **H.264:** yaklaşık 15-20 gün kayıt
- **H.265:** yaklaşık 25-35 gün kayıt
- **H.265+:** yaklaşık 40-60 gün kayıt`,
            },
            {
                heading: "H.265 ile H.264 Karşılaştırması",
                body: `- **Depolama:** H.265 aynı kalitede %30-50 daha az alan kullanır
- **Bant genişliği:** H.265 ağ üzerinde daha az veri trafiği oluşturur
- **İşlemci yükü:** H.265 kodlama ve çözme aşamasında daha fazla işlem gücü gerektirir
- **Uyumluluk:** Günümüzde çoğu IP kamera ve NVR H.265 destekler
- **Görüntü kalitesi:** Aynı bit hızında H.265 daha iyi kalite sunar`,
            },
            {
                heading: "H.265+ (Smart Codec) Nedir?",
                body: `Hikvision, Dahua gibi markalar H.265 üzerine kendi akıllı sıkıştırma teknolojilerini eklemiştir:

- **Hikvision H.265+:** Sahne değişikliği analizi ile arka plan karelerini daha az veri ile kodlar
- **Dahua Smart H.265+:** Benzer mantıkla hareket olmayan bölgeleri düşük bit hızında kaydeder

Bu teknolojiler standart H.265'e göre ek %50-70 tasarruf sağlayabilir. Özellikle hareket algılama ile birlikte kullanıldığında kayıt süresi dramatik biçimde artar.`,
            },
            {
                heading: "Kamera ve NVR Uyumluluğu",
                body: `H.265 kullanmak için hem kameranın hem NVR'ın bu formatı desteklemesi gerekir. 2020 sonrası üretilmiş çoğu IP kamera ve NVR H.265 desteğine sahiptir.

### Kontrol Edilmesi Gerekenler

- Kamera ayarlarında video codec olarak H.265 veya H.265+ seçilebiliyor mu?
- NVR H.265 akışını kayıt edebiliyor ve geri oynatabilir mi?
- Mobil uygulama H.265 formatını çözebiliyor mu?

Eski model cihazlarda H.265 desteği olmayabilir. Bu durumda firmware güncellemesi veya cihaz yenileme gerekir.`,
            },
            {
                heading: "Mevcut Sistemi H.265'e Yükseltme",
                body: `Mevcut H.264 sistemden H.265'e geçiş mümkündür ancak koşulları vardır:

- Kameralar H.265 desteklemiyorsa yeni kamera gerekir
- NVR H.265 desteklemiyorsa firmware güncelleme veya yeni NVR gerekir
- Geçiş yapıldığında mevcut H.264 kayıtlar etkilenmez, yeni kayıtlar H.265 formatında olur
- Aynı disk üzerinde kayıt süresi otomatik olarak artar`,
            },
        ],
        faq: [
            {
                question: "H.265 kurulum maliyetini artırır mı?",
                answer:
                    "Hayır. Günümüz IP kamraları ve NVR'ları zaten H.265 destekler. Ek maliyet oluşturmaz, aksine disk tasarrufu sağlar.",
            },
            {
                question: "H.265 görüntü kalitesini düşürür mü?",
                answer:
                    "Hayır. Aynı kalitede daha az veri üretir. Doğru yapılandırmada kalite kaybı olmaz.",
            },
            {
                question: "Eski kamera H.265'e güncellenebilir mi?",
                answer:
                    "Donanım destekliyorsa firmware güncellemesi ile mümkün olabilir. Aksi halde yeni kamera gerekir.",
            },
        ],
    },
    "kablosuz-alarm-sistemi-rehberi": {
        intro:
            "Kablosuz alarm sistemi, sensörler, dedektörler ve kontrol paneli arasındaki iletişimi radyo frekansı (RF) sinyalleri ile sağlayan güvenlik sistemidir. Geleneksel kablolu sistemlere kıyasla montaj kolaylığı, esneklik ve mevcut yapılara zarar vermeden kurulum avantajı sunar.",
        sections: [
            {
                heading: "Kablosuz Alarm Sistemi Nasıl Çalışır?",
                body: `Kablosuz alarm sisteminde her sensör kendi piliyle çalışır ve kontrol paneline kablosuz sinyal gönderir. Alarm durumunda panel siren çalar ve GSM, Wi-Fi veya internet üzerinden kullanıcıya bildirim gönderir.

### Sistem Bileşenleri

- **Kontrol paneli:** Sistemin beyni, tüm sensörlerle iletişim kurar
- **Hareket dedektörleri (PIR):** İç mekanda hareket algılar
- **Manyetik kontaklar:** Kapı ve pencere açılmasını algılar
- **Siren:** İç ve dış siren, sesli uyarı sağlar
- **Tuş takımı veya kumanda:** Sistemi kurup devre dışı bırakmak için
- **GSM modülü:** Telefon hattı veya internet kesilse bile alarm iletimi sağlar`,
            },
            {
                heading: "Kablosuz ve Kablolu Alarm Karşılaştırması",
                body: `- **Montaj:** Kablosuzda işçilik ve süre çok daha az, kablolu sistemde kablo çekimi gerekir
- **Mevcut yapı:** Kablosuz sistem mevcut yapıya zarar vermez, kablolu için duvar kanalı gerekebilir
- **Güvenilirlik:** Kablolu sinyal kesilmez ancak kablo sabotajına açıktır. Kablosuz sinyal parazite maruz kalabilir ama anti-jamming teknolojisi ile korunur
- **Pil değişimi:** Kablosuz sensörler pil ile çalışır, 2-5 yıl arasında pil ömrü. Kablolu sistemde pil sorunu yoktur
- **Maliyet:** Kablosuz cihazlar genellikle biraz daha pahalıdır ancak montaj maliyeti düşüktür
- **Genişleme:** Kablosuz sisteme yeni sensör eklemek çok kolaydır`,
            },
            {
                heading: "Kablosuz Alarm Sistemi Fiyatları",
                body: `### Temel Ev Paketi

- Panel + 2 PIR + 4 manyetik + 1 siren + kumanda
- **Fiyat:** 6.000 - 12.000 TL

### Gelişmiş Ev Paketi

- Panel + 4 PIR + 8 manyetik + iç/dış siren + tuş takımı + GSM modül
- **Fiyat:** 12.000 - 20.000 TL

### İşyeri Paketi

- Panel + 6 PIR + 10 manyetik + iç/dış siren + tuş takımı + GSM + internet modül
- **Fiyat:** 18.000 - 30.000 TL`,
            },
            {
                heading: "Kablosuz Alarm Sistemi Kimlere Uygun?",
                body: `- **Kiracılar:** Duvara zarar vermeden kurulum ve taşınırken söküp götürme imkanı
- **Mevcut binalarda yaşayanlar:** Kablo çekmeden alarm sistemi ekleme
- **Küçük işyerleri:** Hızlı kurulum ve düşük montaj maliyeti
- **Yazlık ve ikinci ev sahipleri:** Uzaktan izleme ve bildirim ile kontrol
- **Hızlı çözüm arayanlar:** Aynı gün kurulum ve devreye alma imkanı`,
            },
        ],
        faq: [
            {
                question: "Kablosuz alarm güvenilir mi?",
                answer:
                    "Evet. Modern kablosuz alarm sistemleri şifreli iletişim, anti-jamming ve çift haberleşme (GSM+internet) ile yüksek güvenilirlik sunar.",
            },
            {
                question: "Piller ne kadar süre dayanır?",
                answer:
                    "Sensör pilleri genellikle 2-5 yıl dayanır. Panel düşük pil bildirimi gönderir.",
            },
            {
                question: "Kablosuz alarm sistemi ne kadar tutar?",
                answer:
                    "Temel ev paketi 6.000 - 12.000 TL, gelişmiş paket 12.000 - 20.000 TL, işyeri paketi 18.000 - 30.000 TL aralığındadır.",
            },
        ],
    },
    "isyeri-alarm-sistemi-secimi": {
        intro:
            "İşyeri alarm sistemi seçimi, mekanın büyüklüğüne, risk seviyesine, çalışma saatlerine ve bütçeye bağlı olarak değişir. Doğru alarm sistemi hem hırsızlık girişimlerini engelleyecek caydırıcılık sağlar hem de olay anında hızlı bildirim ile müdahale süresini kısaltır.",
        sections: [
            {
                heading: "İşyeri Alarm Sisteminde Dikkat Edilecek Kriterler",
                body: `### Mekan Büyüklüğü ve Yapısı

Kasadaki küçük bir dükkan ile çok odalı bir ofis veya geniş bir depo tamamen farklı alarm ihtiyaçlarına sahiptir. Oda sayısı, giriş çıkış noktaları ve pencere sayısı sensör ihtiyacını doğrudan belirler.

### Risk Seviyesi

Stokladığınız ürünlerin değeri, bulunduğunuz bölgenin güvenlik profili ve daha önce yaşanmış olaylar risk seviyesini etkiler. Yüksek riskli mekanlar daha kapsamlı alarm sistemi gerektirir.

### Çalışma Saatleri

Gece kapalı olan işyerleri farklı, 7/24 açık alan farklı yapılandırma gerektirir. Mesai saatleri dışında otomatik alarm aktifleştirme planlanmalıdır.

### İzleme Merkezi İhtiyacı

Alarm sinyalini doğrudan güvenlik birimine ileten izleme merkezi bağlantısı profesyonel düzeyde koruma sağlar. Aylık ücret karşılığında 7/24 profesyonel izleme sunulur.`,
            },
            {
                heading: "İşyeri İçin Alarm Sistemi Tipleri",
                body: `### Kablolu Alarm Sistemi

Yeni binalarda veya yeni yapılan tadilatlarda kablolu sistem daha güvenilir ve uzun ömürlü bir çözümdür. Sensörler doğrudan kablo ile panele bağlanır.

### Kablosuz Alarm Sistemi

Mevcut işyerlerine hızlı ve zahmetsiz kurulum için kablosuz sistem önerilir. Duvar kırılmadan montaj yapılır.

### Hibrit Alarm Sistemi

Hem kablolu hem kablosuz sensör girişine sahip paneller mevcuttur. Mevcut kablolu altyapıyı koruyarak yeni kablosuz sensör eklemek için idealdir.`,
            },
            {
                heading: "İşyeri Alarm Sistemi Bileşenleri",
                body: `- **Alarm paneli:** 8-32 zone (bölge) kapasiteli profesyonel panel
- **Hareket dedektörleri:** Mağaza veya ofis iç alanı için PIR sensörler
- **Manyetik kontaklar:** Kapı ve pencereler için açılma algılama
- **Cam kırılma sensörü:** Vitrin ve pencereler için ek koruma
- **Dış siren:** Caydırıcı sesli ve ışıklı uyarı
- **İç siren:** Mekan içi alarm bildirimi
- **GSM/internet modülü:** Çift hatlı bildirim ve uzaktan kontrol
- **Tuş takımı:** Giriş çıkışlarda alarm kurma ve devre dışı bırakma
- **Panik butonu:** Acil durumlarda sessiz bildirim gönderme`,
            },
            {
                heading: "İşyeri Alarm Sistemi Fiyatları",
                body: `### Küçük İşyeri (dükkan, ofis)

- 4-8 zone panel + sensörler + siren + GSM
- **Fiyat:** 8.000 - 15.000 TL

### Orta İşyeri (mağaza, restoran)

- 8-16 zone panel + sensörler + iç/dış siren + GSM/internet + tuş takımı
- **Fiyat:** 15.000 - 25.000 TL

### Büyük İşyeri (depo, fabrika)

- 16-32 zone panel + çok sayıda sensör + çoklu siren + izleme merkezi
- **Fiyat:** 25.000 - 50.000+ TL`,
            },
        ],
        faq: [
            {
                question: "İşyerime kaç sensör gerekir?",
                answer:
                    "Her kapı ve riskli pencere için manyetik kontak, her oda veya bölüm için hareket dedektörü planlanır. Kesin sayı keşif ile belirlenir.",
            },
            {
                question: "Alarm sistemi kamera ile entegre olur mu?",
                answer:
                    "Evet. Modern alarm sistemleri kamera sistemi ile entegre çalışabilir. Alarm tetiklendiğinde ilgili kameranın kaydı işaretlenebilir.",
            },
            {
                question: "İzleme merkezi pahalı mı?",
                answer:
                    "İzleme merkezi aylık 300-800 TL arasında değişir. 7/24 profesyonel izleme ve hızlı müdahale düşünüldüğünde maliyeti makuldür.",
            },
        ],
    },
    "alarm-sistemi-nasil-calisir": {
        intro:
            "Alarm sistemi, sensörler aracılığıyla yetkisiz giriş veya tehlike durumunu algılayan, siren ve bildirimlerle uyaran güvenlik sistemidir. Bu rehberde alarm sisteminin çalışma prensibini, bileşenlerini ve farklı alarm türlerini teknik olarak açıklıyoruz.",
        sections: [
            {
                heading: "Alarm Sistemi Çalışma Prensibi",
                body: `Alarm sistemi temel olarak üç aşamada çalışır:

### 1. Algılama

Sensörler sürekli olarak çevrelerini izler. Hareket dedektörü (PIR) ısı değişimini, manyetik kontak kapı/pencere açılmasını, cam kırılma sensörü titreşimi algılar.

### 2. Sinyal İletimi

Sensör bir tehlike algıladığında kontrol paneline sinyal gönderir. Bu sinyal kablolu veya kablosuz olabilir. Panel sinyali değerlendirir ve alarm durumu tespit eder.

### 3. Bildirim ve Uyarı

Panel alarm durumunu onayladığında siren çalar, GSM veya internet üzerinden kullanıcıya bildirim gönderir. İzleme merkezi bağlantısı varsa güvenlik ekibine de iletilir.`,
            },
            {
                heading: "Alarm Sistemi Bileşenleri",
                body: `### Kontrol Paneli

Sistemin beyni olan panel tüm sensörlerle iletişim kurar, alarm durumlarını yönetir ve bildirim gönderir.

### Hareket Dedektörleri (PIR)

Pasif kızılötesi (PIR) sensörler ısı değişimini algılayarak hareket tespit eder. İç mekanda en yaygın kullanılan sensör tipidir.

### Manyetik Kontaklar

Kapı ve pencere kenarlarına takılır. Kapı veya pencere açıldığında manyetik alan bozulur ve alarm tetiklenir.

### Sirenler

İç siren mekan içindeki kişileri uyarır. Dış siren hem caydırıcı hem de dikkat çekici sesli ve ışıklı uyarı sağlar.

### İletişim Modülleri

- **GSM modülü:** Telefon hattı üzerinden bildirim
- **Internet modülü:** Wi-Fi veya Ethernet üzerinden bildirim
- **Çift hat:** GSM + internet birlikte kullanılması en güvenilir yöntemdir`,
            },
            {
                heading: "Alarm Sistemi Türleri",
                body: `### Hırsız Alarm Sistemi

En yaygın alarm türüdür. Yetkisiz girişi algılar ve bildirim gönderir. Ev, işyeri ve depo güvenliğinde kullanılır.

### Yangın Alarm Sistemi

Duman, ısı veya alev algılayarak yangın tehlikesini bildirir. İşyerlerinde yasal zorunluluk olabilir.

### Gaz Alarm Sistemi

Doğalgaz, LPG veya karbonmonoksit kaçağını algılar. Mutfak, kazan dairesi ve endüstriyel alanlarda kullanılır.

### Panik Alarm Sistemi

Acil durumlarda kullanıcının basmasıyla aktif olan sessiz veya sesli alarm. Banka, kuyumcu ve riskli işletmelerde kullanılır.`,
            },
            {
                heading: "Alarm Sistemi İle Kamera Sistemi Farkı",
                body: `Alarm sistemi ve kamera sistemi farklı amaçlara hizmet eder ve birbirini tamamlar:

- **Alarm sistemi:** Anlık uyarı ve bildirim sağlar, olay anında müdahaleyi hızlandırır
- **Kamera sistemi:** Görüntü kaydı ve canlı izleme sağlar, olay sonrası inceleme imkanı sunar

İdeal güvenlik yapısında her iki sistem birlikte kullanılmalıdır. Alarm tetiklendiğinde kamera kaydı otomatik olarak işaretlenebilir.`,
            },
        ],
        faq: [
            {
                question: "Alarm sistemi elektrik kesilince çalışır mı?",
                answer:
                    "Evet. Alarm panelleri yedek bataryaya sahiptir ve elektrik kesintisinde belirli bir süre çalışmaya devam eder.",
            },
            {
                question: "Alarm sistemi tek başına yeterli mi?",
                answer:
                    "Caydırıcılık ve anlık bildirim için yeterlidir. Ancak görüntü kaydı için kamera sistemi ile birlikte kullanılması önerilir.",
            },
            {
                question: "Alarm sık sık yanlış çalar mı?",
                answer:
                    "Doğru kurulum ve kaliteli sensörlerle yanlış alarm riski minimumdur. Pet toleranslı sensörler evcil hayvan olan ortamlarda önerilir.",
            },
        ],
    },
    "kartli-gecis-sistemi-nedir": {
        intro:
            "Kartlı geçiş sistemi, belirli alanlara erişimi kartlı veya şifreli kimlik doğrulama ile kontrol eden elektronik güvenlik sistemidir. Ofisler, apartmanlar, fabrikalar ve kamu binalarında personel girişi, ziyaretçi kontrolü ve yetkisiz erişim engelleme amacıyla yaygın olarak kullanılır.",
        sections: [
            {
                heading: "Kartlı Geçiş Sistemi Nasıl Çalışır?",
                body: `Kartlı geçiş sistemi üç temel bileşenden oluşur:

### 1. Okuyucu (Reader)

Kapı yanına monte edilen cihaz, kartı veya etiketi okur. Yaygın teknolojiler:
- **Proximity (125 kHz):** Temel okuma, kısa mesafe
- **Mifare (13.56 MHz):** Şifreli, daha güvenli
- **NFC:** Mobil cihaz ile geçiş imkanı
- **Biyometrik:** Parmak izi, yüz tanıma

### 2. Kontrol Ünitesi

Okuyucudan gelen bilgiyi değerlendirir, yetkiyi kontrol eder ve kapı kilidi mekanizmasına komut gönderir.

### 3. Kapı Kilidi

Elektrikli kilit, manyetik kilit (maglock) veya motorlu kilit, kontrol ünitesinden gelen komuta göre kapıyı açar veya kapalı tutar.

### Geçiş Süreci

1. Kullanıcı kartını okuyucuya yaklaştırır
2. Okuyucu kart bilgisini kontrol ünitesine iletir
3. Kontrol ünitesi yetkiyi doğrular
4. Yetki varsa kapı kilidi açılır, yoksa erişim reddedilir
5. Geçiş kaydı (tarih, saat, kart numarası) veritabanına yazılır`,
            },
            {
                heading: "Kartlı Geçiş Sistemi Kullanım Alanları",
                body: `- **Ofis ve işyerleri:** Çalışan girişi, kat erişimi, sunucu odası kontrolü
- **Apartman ve siteler:** Bina girişi, otopark bariyeri, spor tesisi erişimi
- **Fabrika ve tesisler:** Personel giriş çıkış, bölüm erişim kontrolü, mesai takibi
- **Kamu binaları:** Ziyaretçi kontrolü, bölge bazlı yetkilendirme
- **Otel ve konaklama:** Oda kartı, ortak alan erişimi
- **Eğitim kurumları:** Öğrenci ve personel girişi kontrolü`,
            },
            {
                heading: "Kart Türleri ve Teknolojiler",
                body: `### Proximity Kart (125 kHz)

En yaygın ve ekonomik kart tipidir. Kısa mesafeden (3-10 cm) okuma yapar. Güvenlik seviyesi orta düzeydir.

### Mifare Kart (13.56 MHz)

Şifreli iletişim ile daha yüksek güvenlik sunar. Klonlamaya karşı daha dayanıklıdır.

### Anahtarlık (Keyfob)

Kartla aynı teknoloji, farklı form faktörü. Cep veya anahtarlık üzerinde taşıma kolaylığı.

### Mobil Geçiş (NFC/Bluetooth)

Akıllı telefon ile geçiş imkanı. Fiziksel kart ihtiyacını ortadan kaldırır.

### Biyometrik

Parmak izi, yüz tanıma veya avuç içi damar ile kimlik doğrulama. En yüksek güvenlik seviyesi.`,
            },
            {
                heading: "Kartlı Geçiş Sistemi Fiyatları",
                body: `Fiyat kapsam, nokta sayısı ve teknolojiye göre değişir.

- **Tek kapı basit sistem:** 3.000 - 7.000 TL
- **2-4 kapılı ofis sistemi:** 8.000 - 18.000 TL
- **Apartman giriş sistemi:** 5.000 - 12.000 TL
- **Fabrika çok noktalı sistem:** 20.000 - 80.000+ TL
- **Turnike entegrasyonlu sistem:** 25.000 - 100.000+ TL`,
            },
        ],
        faq: [
            {
                question: "Kartlı geçiş sistemi alarm ile entegre edilebilir mi?",
                answer:
                    "Evet. Alarm sistemi ile entegre çalışarak kapı zorlanması durumunda alarm tetiklenebilir.",
            },
            {
                question: "Kart kaybolursa ne olur?",
                answer:
                    "Kaybolan kart yazılım üzerinden anında iptal edilir. Yeni kart hemen tanımlanabilir.",
            },
            {
                question: "Mesai takibi yapılabilir mi?",
                answer:
                    "Evet. Geçiş kayıtları tarih ve saat bazlı tutulur, personel mesai raporları oluşturulabilir.",
            },
        ],
    },
    "turnike-sistemi-fiyatlari": {
        intro:
            "Turnike sistemi, bina veya alan girişlerinde kontrollü geçiş sağlayan mekanik veya elektronik bariyer sistemidir. Kartlı geçiş veya biyometrik kimlik doğrulama ile entegre çalışarak yalnızca yetkili kişilerin geçişine izin verir. Bu rehberde turnike sistem türleri, fiyatları ve doğru seçim kriterlerini inceliyoruz.",
        sections: [
            {
                heading: "Turnike Sistemi Türleri",
                body: `### Tripod Turnike

Üç kollu metal bariyer. En yaygın ve ekonomik turnike tipidir. Ofis, fabrika ve bina girişlerinde sık kullanılır.

- **Fiyat:** 8.000 - 20.000 TL (adet)
- **Geçiş hızı:** Dakikada 25-35 kişi
- **Kullanım alanı:** Ofis, fabrika, kurum girişi

### Kanat Turnike (Speed Gate)

Cam veya metal kanatlarla açılıp kapanan estetik turnike. Ofis binaları, plaza girişleri ve prestijli mekanlar için tercih edilir.

- **Fiyat:** 25.000 - 60.000 TL (çift kanat)
- **Geçiş hızı:** Dakikada 30-45 kişi
- **Kullanım alanı:** Plaza, AVM, prestijli bina

### Boy Turnike (Full Height)

Tam boy bariyer ile yüksek güvenlik sağlar. Stadyum, askeri alan ve endüstriyel tesis girişlerinde kullanılır.

- **Fiyat:** 30.000 - 80.000 TL (adet)
- **Geçiş hızı:** Dakikada 15-25 kişi
- **Kullanım alanı:** Tesis, stadyum, yüksek güvenlik`,
            },
            {
                heading: "Turnike Sistemi Bileşenleri",
                body: `- **Turnike gövdesi:** Mekanik veya motorlu bariyer
- **Kart okuyucu:** Proximity, Mifare veya biyometrik
- **Kontrol ünitesi:** Geçiş yetkisi yönetimi
- **Yazılım:** Raporlama, mesai takibi, ziyaretçi yönetimi
- **Altyapı:** Elektrik bağlantısı, ağ kablolama, zemin montajı`,
            },
            {
                heading: "Turnike Sistemi Seçim Kriterleri",
                body: `### Günlük Geçiş Yoğunluğu

Yoğun geçişli alanlarda hızlı turnike (kanat turnike) tercih edilmelidir.

### Güvenlik Seviyesi

Düşük riskli alanlarda tripod, yüksek güvenlik gerektiren alanlarda boy turnike seçilmelidir.

### Estetik Beklenti

Prestijli bina girişlerinde cam kanat turnike, endüstriyel alanlarda metal tripod tercih edilir.

### Engelli Erişimi

ADA uyumlu geniş geçiş kanatlı turnike veya yan kapı ile engelli erişimi planlanmalıdır.

### Entegrasyon

Kartlı geçiş, biyometri, ziyaretçi yönetimi ve güvenlik kamerası ile entegrasyon kapasitesi kontrol edilmelidir.`,
            },
            {
                heading: "Toplam Sistem Maliyeti",
                body: `Turnike sistemi maliyeti yalnızca turnike gövdesinden ibaret değildir.

### Maliyet Kalemleri

- Turnike gövdesi
- Kart okuyucu ve kartlar
- Kontrol ünitesi ve yazılım
- Elektrik ve ağ altyapısı
- Montaj ve zemin işçiliği
- Yıllık yazılım lisansı (varsa)

### Toplam Fiyat Örnekleri

- **İki tripod turnike + kartlı geçiş:** 25.000 - 50.000 TL
- **İki kanat turnike + kartlı geçiş:** 60.000 - 130.000 TL
- **Tek boy turnike + biyometrik:** 50.000 - 100.000 TL`,
            },
        ],
        faq: [
            {
                question: "Turnike sistemi dış mekana kurulabilir mi?",
                answer:
                    "Evet. Dış mekan için özel koruma sınıfına sahip (IP65+) turnike modelleri mevcuttur.",
            },
            {
                question: "Turnike mesai takibinde kullanılabilir mi?",
                answer:
                    "Evet. Geçiş kayıtları üzerinden personel giriş çıkış saatleri raporlanabilir.",
            },
            {
                question: "Mevcut kartlı geçiş sistemine turnike eklenebilir mi?",
                answer:
                    "Genellikle evet. Mevcut okuyucu ve kontrol ünitesi ile uyumluluk kontrol edilerek entegrasyon yapılabilir.",
            },
        ],
    },
};

function generateTechnicalContent(kw: ProgrammaticKeyword): ContentGenerator {
    const data = technicalContentData[kw.slug];
    if (!data) return generateGenericContent(kw);

    const sections = data.sections
        .map((s) => `## ${s.heading}\n\n${s.body}`)
        .join("\n\n");

    const content = `## ${kw.title}

${data.intro}

${sections}

## Sonuç

Doğru bilgiyle doğru çözümü seçmek, güvenlik yatırımının verimini doğrudan artırır. Profesyonel destek ile ihtiyacınıza en uygun sistemi belirleyebilirsiniz.

${internalLinks}`;

    return {
        content,
        readTime: 9,
        excerpt: `${kw.keyword} hakkında kapsamlı teknik rehber. Çalışma prensibi, avantajları, seçim kriterleri ve fiyat bilgileri.`,
        faq: data.faq,
    };
}

// ---------------------------------------------------------------------------
// Generic fallback
// ---------------------------------------------------------------------------

function generateGenericContent(kw: ProgrammaticKeyword): ContentGenerator {
    const content = `## ${kw.title}

${kw.keyword} hakkında bilmeniz gereken her şeyi bu kapsamlı rehberde ele alıyoruz. Doğru sistem seçimi, bileşenler, fiyatlandırma ve kurulum süreci hakkında detaylı bilgi bulacaksınız.

## Konu Hakkında Genel Bilgi

${kw.keyword} konusu güvenlik sektöründe sıkça araştırılan ve doğru bilgiye ulaşmanın kritik olduğu alanlardan biridir. Yanlış bilgi ile yapılan yatırımlar hem bütçeyi hem de güvenlik seviyesini olumsuz etkiler.

## Fiyatı Etkileyen Faktörler

Güvenlik sistemi fiyatları birçok faktöre bağlıdır. Donanım kalitesi, marka, kurulum alanının büyüklüğü, montaj zorluğu ve ek özellikler toplam maliyeti doğrudan etkiler. Her proje benzersizdir ve keşif sonrası doğru fiyatlandırma yapılır.

## Mekan Tipine Göre Çözümler

Her mekan tipi farklı güvenlik ihtiyaçlarına sahiptir. Konut, işyeri, apartman, fabrika ve depo projelerinde sistem yapısı, cihaz seçimi ve kapsam farklılık gösterir.

## Kurulum Süreci

Profesyonel güvenlik sistemi kurulumu keşif, planlama, montaj, test ve devreye alma adımlarından oluşur. Her adımda uzman ekip ile çalışmak kalıcı ve sorunsuz çözüm sağlar.

## Sık Sorulan Sorular

${kw.keyword} konusunda en çok merak edilen soruları aşağıda cevaplıyoruz.

## Sonuç

${kw.keyword} hakkında doğru bilgiye sahip olmak doğru yatırım kararı vermenin ilk adımıdır. Profesyonel keşif ve teklif ile ihtiyacınıza en uygun çözümü belirleyebilirsiniz.

${internalLinks}`;

    return {
        content,
        readTime: 7,
        excerpt: `${kw.keyword} hakkında kapsamlı rehber. Sistem bileşenleri, fiyatlar, kurulum ve sık sorulan sorular.`,
        faq: [
            {
                question: `${kw.keyword} konusunda keşif gerekir mi?`,
                answer:
                    "Evet. Her mekan farklıdır ve doğru sistem tasarımı için profesyonel keşif önerilir.",
            },
            {
                question: "Ücretsiz teklif alabilir miyim?",
                answer:
                    "Evet. İletişim bilgilerinizle birlikte ihtiyacınızı paylaşmanız yeterlidir.",
            },
        ],
    };
}

// ---------------------------------------------------------------------------
// Content router by keyword slug
// ---------------------------------------------------------------------------

const technicalSlugs = new Set(
    Object.keys(technicalContentData),
);

const buildingTypeSlugs = new Set(
    Object.keys(buildingTypeData),
);

function generateContentForKeyword(kw: ProgrammaticKeyword & { category: string }): ContentGenerator {
    if (kw.slug.match(/^\d+-kamerali/)) {
        return generateCameraSizeContent(kw);
    }
    if (buildingTypeSlugs.has(kw.slug)) {
        return generateBuildingTypeContent(kw);
    }
    if (technicalSlugs.has(kw.slug)) {
        return generateTechnicalContent(kw);
    }
    return generateGenericContent(kw);
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

let _cachedPosts: BlogPost[] | null = null;

export function generateProgrammaticPosts(): BlogPost[] {
    if (_cachedPosts) return _cachedPosts;

    const keywords = getAllProgrammaticKeywords();
    const baseDate = new Date("2026-03-01");

    const posts = keywords.map((kw, index): BlogPost => {
        const kwData = getProgrammaticKeywordBySlug(kw.slug);
        const category = kwData?.category ?? "Rehber";
        const kwWithCategory = { ...kw, category };
        const generated = generateContentForKeyword(kwWithCategory);
        const pubDate = new Date(baseDate);
        pubDate.setDate(pubDate.getDate() + index * 2);

        return {
            slug: kw.slug,
            title: kw.title,
            excerpt: generated.excerpt,
            content: generated.content,
            publishedAt: pubDate.toISOString().slice(0, 10),
            readTime: generated.readTime,
            category,
            tags: getTagsForKeyword(kw),
            featured: false,
        };
    });

    _cachedPosts = posts;
    return posts;
}

export function getProgrammaticFaq(
    slug: string,
): { question: string; answer: string }[] {
    const kw = getProgrammaticKeywordBySlug(slug);
    if (!kw) return [];

    return generateContentForKeyword(kw).faq;
}

function getTagsForKeyword(kw: ProgrammaticKeyword): string[] {
    const tags: string[] = [kw.keyword];
    if (kw.relatedService === "kamera") tags.push("kamera", "güvenlik kamerası");
    if (kw.relatedService === "alarm") tags.push("alarm", "güvenlik alarmı");
    if (kw.relatedService === "kartli-gecis") tags.push("kartlı geçiş", "geçiş kontrol");
    return tags;
}
