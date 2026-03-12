export interface SeoServiceContent {
  heroIntro: string;
  localContext: string;
  benefits: string[];
  process: string[];
  statsTitle: string;
  statsDescription: string;
  ctaTitle: string;
  ctaDescription: string;
  metadataIntent: string;
  metadataTargets: string[];
}

export const serviceContent: Record<string, SeoServiceContent> = {
  "kamera-sistemi-kurulumu": {
    heroIntro:
      "{city} içinde apartman, site, mağaza, ofis, depo ve fabrika gibi farklı alanlar için IP kamera sistemleri kuruyoruz. Kör nokta analizi, kayıt süresi planlaması ve uzaktan izleme kurulumu ile süreci tek ekipte yönetiyoruz.",
    localContext:
      "{city} içinde yoğun insan trafiği olan girişler, çevre alanları ve kritik kayıt noktaları için sahaya özel kamera yerleşimi planlıyoruz.",
    benefits: [
      "Hırsızlık ve izinsiz giriş riskini azaltır.",
      "Uzaktan canlı izleme ve kayıt erişimi sağlar.",
      "İşyeri, apartman ve depo güvenliğini güçlendirir.",
    ],
    process: [
      "Ücretsiz keşif ve risk analizi",
      "Doğru kamera noktalarının belirlenmesi",
      "Profesyonel montaj ve kablolama",
      "Mobil izleme ve kayıt erişimi kurulumu",
    ],
    statsTitle: "Kamera sistemi kurulumunda saha odaklı yaklaşım",
    statsDescription:
      "{city} içinde kamera sistemi kurulumu yaparken görüntü kalitesi kadar kör nokta yönetimi, kayıt süresi ve uzaktan erişim kolaylığını birlikte ele alıyoruz.",
    ctaTitle: "{city} için ücretsiz keşif ve kamera sistemi teklifi alın",
    ctaDescription:
      "{city} içinde kamera sistemi kurulumu için hemen bizimle iletişime geçin. İhtiyacınıza göre uygun kamera sayısını, kayıt cihazını ve sistem maliyetini birlikte netleştirelim.",
    metadataIntent: "profesyonel kamera sistemi kurulumu",
    metadataTargets: ["işyeri", "apartman", "depo"],
  },
  "alarm-sistemi-kurulumu": {
    heroIntro:
      "{city} içinde ev, işyeri ve ticari alanlar için alarm sistemi kurulumu yapıyoruz. Giriş noktaları, hareket alanları ve bildirim senaryolarını mekana göre planlıyoruz.",
    localContext:
      "{city} içinde kapanış sonrası kontrol ihtiyacı olan işyerleri ve konutlarda alarm senaryosunu kullanım kolaylığıyla birlikte kurguluyoruz.",
    benefits: [
      "Yetkisiz giriş durumunda hızlı uyarı sağlar.",
      "Mobil bildirim ile uzaktan kontrol imkanı sunar.",
      "Konut ve işyeri güvenliğinde caydırıcılığı artırır.",
    ],
    process: [
      "Ücretsiz keşif ve giriş noktası analizi",
      "Panel ve dedektör planının oluşturulması",
      "Siren, kontak ve dedektör montajı",
      "Bildirim ve kullanım ayarlarının teslimi",
    ],
    statsTitle: "Alarm sisteminde doğru senaryo en kritik adımdır",
    statsDescription:
      "{city} içinde alarm sistemi kurulumu yaparken sadece cihaz yerleşimini değil, kullanım alışkanlığını ve risk seviyesini de birlikte planlıyoruz.",
    ctaTitle: "{city} alarm sistemi için hızlı teklif alın",
    ctaDescription:
      "{city} içindeki mekanınız için doğru alarm panelini, dedektör sayısını ve mobil bildirim senaryosunu birlikte netleştirelim.",
    metadataIntent: "profesyonel alarm sistemi kurulumu",
    metadataTargets: ["ev", "işyeri", "mağaza"],
  },
  "yangin-alarm-sistemi-kurulumu": {
    heroIntro:
      "{city} içinde bina tipi ve kullanım yoğunluğuna uygun yangın alarm sistemi kurulumu yapıyoruz. Dedektör, buton, flaşör ve santral yerleşimini projeye göre planlıyoruz.",
    localContext:
      "{city} içinde apartman, işyeri ve ticari yapılarda erken algılama ve güvenli tahliye için doğru algılama noktalarını belirliyoruz.",
    benefits: [
      "Erken yangın algılama ile müdahale süresini kısaltır.",
      "Bina güvenliği ve kullanıcı güvenliğini güçlendirir.",
      "Bakım ve servis planı ile uzun vadeli süreklilik sağlar.",
    ],
    process: [
      "Keşif ve algılama alanlarının belirlenmesi",
      "Santral ve dedektör planının oluşturulması",
      "Saha montajı ve kablolama",
      "Senaryo testleri ve devreye alma",
    ],
    statsTitle: "Yangın alarm projelerinde teknik planlama belirleyicidir",
    statsDescription:
      "{city} içinde yangın alarm sistemi kurulumu yaparken algılama noktalarını, kaçış güzergahlarını ve test senaryolarını birlikte planlıyoruz.",
    ctaTitle: "{city} yangın alarm sistemi için keşif planlayın",
    ctaDescription:
      "{city} içindeki yapınız için algılama noktalarını, santral yapısını ve kurulum kapsamını birlikte belirleyelim.",
    metadataIntent: "yangın alarm sistemi kurulumu",
    metadataTargets: ["apartman", "işyeri", "depo"],
  },
  "kartli-gecis-sistemi-kurulumu": {
    heroIntro:
      "{city} içinde personel, apartman ve işyeri girişleri için kartlı geçiş sistemi kuruyoruz. Okuyucu, kilit, buton ve yetkilendirme altyapısını giriş senaryosuna göre planlıyoruz.",
    localContext:
      "{city} içinde kontrollü giriş gereken ofis, apartman ve işletme alanlarında hızlı ama güvenli geçiş akışı kuruyoruz.",
    benefits: [
      "Yetkili erişimi net şekilde yönetir.",
      "Kapı ve turnike girişlerinde kontrol sağlar.",
      "Kullanıcı ekleme ve yetki güncellemesini kolaylaştırır.",
    ],
    process: [
      "Kapı tipi ve kullanıcı sayısı analizi",
      "Okuyucu ve kilit altyapısının planlanması",
      "Montaj ve bağlantıların tamamlanması",
      "Kart tanımı ve yetki teslimi",
    ],
    statsTitle: "Geçiş kontrolünde kullanım kolaylığı kadar güvenlik de önemlidir",
    statsDescription:
      "{city} içinde kartlı geçiş sistemleri kurarken kapı tipi, kullanıcı yoğunluğu ve yetki senaryolarını birlikte değerlendiriyoruz.",
    ctaTitle: "{city} kartlı geçiş sistemi için çözüm alın",
    ctaDescription:
      "{city} içindeki yapınız için kullanıcı sayısını, kapı tipini ve erişim senaryosunu birlikte planlayalım.",
    metadataIntent: "kartlı geçiş sistemi kurulumu",
    metadataTargets: ["ofis", "apartman", "işyeri"],
  },
  "apartman-site-guvenlik-sistemi": {
    heroIntro:
      "{city} içinde apartman ve site projeleri için kamera, alarm, geçiş kontrol ve çevre güvenliği çözümlerini birlikte planlıyoruz. Tek cihaz kurulumu yerine tüm alan güvenliğini ele alıyoruz.",
    localContext:
      "{city} içinde apartman ve site projelerinde girişler, otoparklar ve ortak alanlar için sakinleri yormayan ama güvenliği güçlendiren bir yapı kuruyoruz.",
    benefits: [
      "Ortak alanlarda sürekli izleme ve kontrol sağlar.",
      "Giriş, otopark ve çevre güvenliğini tek yapıda toplar.",
      "Site yönetimi için takip ve kullanım kolaylığı sunar.",
    ],
    process: [
      "Ortak alan ve giriş keşfi",
      "Kamera ve geçiş planının oluşturulması",
      "Montaj ve sistem entegrasyonu",
      "Yönetim ve kullanıcı teslimi",
    ],
    statsTitle: "Apartman ve site projelerinde bütüncül kurulum gerekir",
    statsDescription:
      "{city} içinde apartman ve site güvenlik sistemi kurarken yalnızca kamera yerleşimini değil, giriş akışını ve ortak alan kullanımını da planlıyoruz.",
    ctaTitle: "{city} apartman ve site güvenliği için teklif alın",
    ctaDescription:
      "{city} içindeki apartman veya site projeniz için giriş noktalarını, ortak alanları ve çevre güvenliğini birlikte planlayalım.",
    metadataIntent: "apartman ve site güvenlik sistemi kurulumu",
    metadataTargets: ["apartman", "site", "otopark"],
  },
  "isyeri-guvenlik-sistemi": {
    heroIntro:
      "{city} içinde ofis, mağaza ve ticari işletmeler için işyeri güvenlik sistemleri kuruyoruz. Kamera, alarm ve geçiş kontrol ihtiyaçlarını işletmenin kullanım biçimine göre bir araya getiriyoruz.",
    localContext:
      "{city} içinde müşteri trafiği, kasa alanı, depo erişimi ve kapanış sonrası güvenlik ihtiyacı olan işyerlerinde sahaya özel planlama yapıyoruz.",
    benefits: [
      "İşyeri kapanış sonrası güvenliği güçlendirir.",
      "Personel ve müşteri alanlarını kontrollü yönetmeye yardımcı olur.",
      "Kamera, alarm ve erişim sistemlerini tek kurgu içinde toplar.",
    ],
    process: [
      "İşyeri keşfi ve risk noktalarının belirlenmesi",
      "Doğru sistem bileşenlerinin seçilmesi",
      "Temiz montaj ve devreye alma",
      "Kullanım ve uzaktan erişim teslimi",
    ],
    statsTitle: "İşyeri projelerinde operasyonu aksatmayan kurulum hedefliyoruz",
    statsDescription:
      "{city} içinde işyeri güvenlik sistemi kurarken kasa noktaları, satış alanı, depo erişimi ve günlük operasyon akışını birlikte değerlendiriyoruz.",
    ctaTitle: "{city} işyeri güvenlik sistemi için hızlı teklif alın",
    ctaDescription:
      "{city} içindeki işyeriniz için günlük operasyonu aksatmayan, gerçekten işe yarayan güvenlik altyapısını birlikte kuralım.",
    metadataIntent: "işyeri güvenlik sistemi kurulumu",
    metadataTargets: ["işyeri", "mağaza", "ofis"],
  },
  "fabrika-depo-guvenlik-sistemi": {
    heroIntro:
      "{city} içinde fabrika, depo ve sanayi tesisleri için geniş alan güvenlik sistemleri kuruyoruz. Çevre izleme, giriş kontrolü ve kayıt sürekliliğini birlikte planlıyoruz.",
    localContext:
      "{city} içinde üretim alanı, sevkiyat hattı ve açık çevre güvenliği gereken projelerde ölçeklenebilir sistem tasarlıyoruz.",
    benefits: [
      "Geniş alanlarda kritik noktaların izlenmesini sağlar.",
      "Araç ve personel girişlerini kontrollü hale getirir.",
      "Kayıt sürekliliği ile olay takibini kolaylaştırır.",
    ],
    process: [
      "Saha keşfi ve kritik nokta analizi",
      "Çevre, giriş ve kayıt planının oluşturulması",
      "Montaj ve saha testlerinin tamamlanması",
      "Uzaktan erişim ve operasyon teslimi",
    ],
    statsTitle: "Sanayi ve depo projelerinde ölçek doğru planlanmalıdır",
    statsDescription:
      "{city} içinde fabrika ve depo güvenlik sistemi kurarken metrekare, çevre sınırı, gece görüşü ve kayıt kapasitesini birlikte planlıyoruz.",
    ctaTitle: "{city} fabrika ve depo güvenliği için keşif alın",
    ctaDescription:
      "{city} içindeki tesisiniz için giriş noktaları, çevre alanı ve kayıt ihtiyacını birlikte planlayalım.",
    metadataIntent: "fabrika ve depo güvenlik sistemi kurulumu",
    metadataTargets: ["fabrika", "depo", "sanayi tesisi"],
  },
  "bakim-servis-uzaktan-izleme": {
    heroIntro:
      "{city} içinde kurulu güvenlik sistemleri için bakım, servis ve uzaktan izleme desteği veriyoruz. Arıza tespiti, kayıt kontrolü ve bağlantı sorunlarını hızlı şekilde ele alıyoruz.",
    localContext:
      "{city} içinde mevcut sistemi sorun çıkaran ama tamamen değişmesi gerekmeyen projelerde hedefimiz doğru arıza noktasını hızlı tespit etmektir.",
    benefits: [
      "Mevcut sistemin arıza kaynağını netleştirir.",
      "Kayıt, bağlantı ve uzaktan erişim sorunlarını azaltır.",
      "Periyodik bakım ile sistemin sürekliliğini destekler.",
    ],
    process: [
      "Arıza ön değerlendirmesi ve sistem analizi",
      "Saha veya uzaktan müdahale planı",
      "Kayıt, bağlantı ve cihaz kontrolleri",
      "Kullanıcı bilgilendirmesi ve teslim",
    ],
    statsTitle: "Bakım ve servis hizmetinde önce gerçek sorunu buluyoruz",
    statsDescription:
      "{city} içinde bakım ve servis taleplerinde görüntü kaybı, kayıt problemi ve uzaktan erişim sorunlarını tek tek analiz ederek çözüm sunuyoruz.",
    ctaTitle: "{city} bakım ve servis desteği alın",
    ctaDescription:
      "{city} içindeki mevcut güvenlik sisteminiz için arıza tespiti, bakım planı ve uzaktan erişim desteğini birlikte netleştirelim.",
    metadataIntent: "bakım, servis ve uzaktan izleme desteği",
    metadataTargets: ["kamera sistemi", "alarm sistemi", "mevcut güvenlik altyapısı"],
  },
};
