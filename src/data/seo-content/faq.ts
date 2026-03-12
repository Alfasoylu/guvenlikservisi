export interface SeoFaqItem {
  question: string;
  answer: string;
}

export interface SeoFaqContent {
  title: string;
  items: SeoFaqItem[];
}

export const faqContent: Record<string, SeoFaqContent> = {
  "kamera-sistemi-kurulumu": {
    title: "Sık Sorulan Sorular",
    items: [
      {
        question: "{city} kamera sistemi kurulumu ne kadar sürer?",
        answer:
          "Küçük projelerde aynı gün, orta ve büyük projelerde ise keşif sonrasında 1-3 gün içinde tamamlanır.",
      },
      {
        question: "Kaç kamera gerektiğini nasıl belirliyorsunuz?",
        answer:
          "Alan büyüklüğü, giriş-çıkış noktaları, kör alanlar ve kayıt beklentisine göre keşif sırasında net plan çıkarıyoruz.",
      },
      {
        question: "Uzaktan telefondan izleme kuruluyor mu?",
        answer:
          "Evet. Mobil uygulama ile canlı izleme ve kayıt erişimini kurulum sırasında aktif hale getiriyoruz.",
      },
      {
        question: "Kayıt cihazı ve hard disk dahil mi?",
        answer:
          "Evet. İhtiyaca göre NVR, hard disk ve gerekiyorsa PoE switch dahil tam çözüm hazırlıyoruz.",
      },
    ],
  },
  "alarm-sistemi-kurulumu": {
    title: "Sık Sorulan Sorular",
    items: [
      {
        question: "{city} içinde alarm sistemi için ücretsiz keşif yapıyor musunuz?",
        answer:
          "Evet. Mekanın giriş noktalarını ve risk alanlarını inceleyip uygun alarm senaryosunu keşif aşamasında çıkarıyoruz.",
      },
      {
        question: "Kablosuz alarm mı kablolu alarm mı öneriyorsunuz?",
        answer:
          "Mevcut altyapı, duvar yapısı ve kullanım beklentisine göre karar veriyoruz. Her iki çözüm için de kurulum yapıyoruz.",
      },
      {
        question: "Mobil bildirim ve uzaktan kontrol oluyor mu?",
        answer:
          "Evet. Uyumlu panel ve uygulama altyapısıyla bildirim, kurma ve devre dışı bırakma işlemleri telefondan yönetilebilir.",
      },
    ],
  },
  "yangin-alarm-sistemi-kurulumu": {
    title: "Sık Sorulan Sorular",
    items: [
      {
        question: "{city} içinde yangın alarm sistemi kurulumu yapıyor musunuz?",
        answer:
          "Evet. {city} içinde bina tipine uygun yangın alarm sistemi kurulumu, devreye alma ve bakım desteği sunuyoruz.",
      },
      {
        question: "Dedektör yerleşimini nasıl belirliyorsunuz?",
        answer:
          "Alan kullanımı, tavan yapısı, kaçış güzergahları ve riskli hacimlere göre saha analizi yaparak yerleşimi planlıyoruz.",
      },
      {
        question: "Kurulum sonrası test yapılıyor mu?",
        answer:
          "Evet. Dedektör, buton, siren ve santral senaryolarını tek tek test edip sistemi çalışır durumda teslim ediyoruz.",
      },
    ],
  },
  "kartli-gecis-sistemi-kurulumu": {
    title: "Sık Sorulan Sorular",
    items: [
      {
        question: "{city} içinde kartlı geçiş sistemi kurulumu yapıyor musunuz?",
        answer:
          "Evet. {city} içinde ofis, apartman, işyeri ve kontrollü giriş gereken alanlar için kartlı geçiş sistemleri kuruyoruz.",
      },
      {
        question: "Mevcut kapıya kartlı geçiş sistemi uygulanabilir mi?",
        answer:
          "Çoğu senaryoda evet. Kapı tipi, kilit uyumu ve kullanım yoğunluğunu inceleyip uygun donanımı belirliyoruz.",
      },
      {
        question: "Kullanıcı yetkileri sonradan değiştirilebilir mi?",
        answer:
          "Evet. Sistem kurulumundan sonra kart iptali, yeni kullanıcı ekleme ve yetki güncellemeleri yapılabilir.",
      },
    ],
  },
  "apartman-site-guvenlik-sistemi": {
    title: "Sık Sorulan Sorular",
    items: [
      {
        question: "{city} içinde apartman ve site güvenlik sistemi kurulumu yapıyor musunuz?",
        answer:
          "Evet. {city} içinde apartman ve site projeleri için kamera, geçiş kontrol ve çevre güvenliği çözümleri sunuyoruz.",
      },
      {
        question: "Otopark ve bina girişi aynı sistemde toplanabilir mi?",
        answer:
          "Evet. Uygun projelerde girişler, otoparklar ve ortak alanlar tek kayıt ve izleme yapısında birleştirilebilir.",
      },
      {
        question: "Yönetim için kullanıcı dostu çözüm sunuyor musunuz?",
        answer:
          "Evet. Site yönetimi veya apartman yetkilisi için erişim, izleme ve temel yönetim süreçlerini sade şekilde teslim ediyoruz.",
      },
    ],
  },
  "isyeri-guvenlik-sistemi": {
    title: "Sık Sorulan Sorular",
    items: [
      {
        question: "{city} içinde işyeri güvenlik sistemi kurulumu yapıyor musunuz?",
        answer:
          "Evet. {city} içinde ofis, mağaza ve ticari işletmeler için kamera, alarm ve geçiş kontrol çözümleri kuruyoruz.",
      },
      {
        question: "Kurulum iş saatlerini etkiler mi?",
        answer:
          "Projeye göre planlama yapıyoruz. Uygun senaryolarda montajı etaplayarak iş akışına etkisini minimumda tutuyoruz.",
      },
      {
        question: "Birden fazla güvenlik çözümü birlikte kurulabilir mi?",
        answer:
          "Evet. Kamera, alarm ve giriş kontrol sistemlerini aynı işyeri projesinde birlikte kurgulayabiliyoruz.",
      },
    ],
  },
  "fabrika-depo-guvenlik-sistemi": {
    title: "Sık Sorulan Sorular",
    items: [
      {
        question: "{city} içinde fabrika ve depo güvenlik sistemi kurulumu yapıyor musunuz?",
        answer:
          "Evet. {city} içinde fabrika, depo ve sanayi tesisleri için kamera, çevre güvenliği ve geçiş kontrol çözümleri kuruyoruz.",
      },
      {
        question: "Geniş açık alanlarda güvenlik nasıl planlanıyor?",
        answer:
          "Çevre hatları, giriş kapıları ve gece görüş ihtiyacına göre kamera yerleşimini ve kayıt altyapısını sahaya özel planlıyoruz.",
      },
      {
        question: "Depo ve üretim alanı aynı projede ele alınabilir mi?",
        answer:
          "Evet. Üretim hattı, raf koridorları ve lojistik alanlar tek proje içinde birlikte tasarlanabilir.",
      },
    ],
  },
  "bakim-servis-uzaktan-izleme": {
    title: "Sık Sorulan Sorular",
    items: [
      {
        question: "{city} içinde bakım ve servis hizmeti veriyor musunuz?",
        answer:
          "Evet. {city} içinde mevcut güvenlik sistemleri için bakım, arıza giderme ve uzaktan izleme desteği sağlıyoruz.",
      },
      {
        question: "Kurulu sistem başka bir firmadan olsa da destek olur musunuz?",
        answer:
          "Birçok senaryoda evet. Mevcut altyapıyı inceleyip destek kapsamını keşif veya ön değerlendirme sonrasında netleştiriyoruz.",
      },
      {
        question: "Uzaktan izleme bağlantı sorunları çözülebilir mi?",
        answer:
          "Evet. Uygun sistemlerde modem, uygulama ve cihaz ayarlarını kontrol ederek uzaktan erişim sorunlarını gideriyoruz.",
      },
    ],
  },
};
