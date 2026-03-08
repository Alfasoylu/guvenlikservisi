import LandingPageTemplate, { LandingPageData } from "@/components/templates/LandingPageTemplate";

const data: LandingPageData = {
  hero: {
    title: "Profesyonel Alarm Sistemi Kurulumu",
    subtitle:
      "Kablosuz ve kablolu hırsız alarm sistemleri. 7/24 izleme merkezi bağlantısı. Marmara Bölgesi genelinde ücretsiz keşif.",
    ctaLabel: "Ücretsiz Keşif ve Teklif Al",
  },
  problem: {
    title: "Eviniz veya İşyeriniz Korumasız mı?",
    cards: [
      {
        icon: "🚨",
        title: "Hırsızlık Tehdidi",
        description:
          "Alarm sistemi olmayan yapılar, hırsızlara 3 kat daha cazip görünür. Sirenli alarm sistemi dakikalar içinde müdahale sağlar.",
      },
      {
        icon: "📱",
        title: "Anında Bildirim",
        description:
          "İzinsiz giriş anında telefonunuza SMS ve uygulama bildirimi gelir. Siz nerede olursanız olun haberdar olursunuz.",
      },
      {
        icon: "🏛️",
        title: "Yasal Zorunluluk",
        description:
          "Bazı iş yeri sigorta poliçeleri alarm sistemi gerektirir. Sistemsiz işyerleri sigorta tazminatında sorun yaşayabilir.",
      },
    ],
  },
  solution: {
    title: "Akıllı Hırsız Alarm Sistemi",
    description:
      "Kablosuz ve kablolu seçeneklerle her mekana uygun alarm sistemi kuruyoruz. Profesyonel izleme merkezi bağlantısı ile 7/24 koruma.",
    features: [
      "PIR hareket sensörleri",
      "Manyetik kapı/pencere sensörleri",
      "Yüksek desibel siren",
      "GSM + İnternet çift bağlantı",
      "7/24 izleme merkezi opsiyonu",
      "Mobil uygulama kontrolü",
    ],
    imagePlaceholder: "Alarm Kurulum Görseli",
  },
  packages: {
    title: "Alarm Sistemi Paketleri",
    items: [
      {
        name: "Temel Koruma",
        price: "8.000 TL'den başlayan",
        features: [
          "1 Kontrol Paneli",
          "3-5 Sensör",
          "1 Siren",
          "GSM Modül",
          "Mobil Uygulama",
          "1 Yıl Garanti",
        ],
      },
      {
        name: "Tam Koruma",
        price: "18.000 TL'den başlayan",
        badge: "En Çok Tercih Edilen",
        highlighted: true,
        features: [
          "1 Kontrol Paneli",
          "8-12 Sensör",
          "İç + Dış Siren",
          "GSM + İnternet",
          "İzleme Merkezi (12 ay)",
          "Yılda 1 Bakım",
          "2 Yıl Garanti",
        ],
      },
      {
        name: "Kurumsal",
        price: "Teklif Alın",
        features: [
          "Çok Bölgeli Panel",
          "Sınırsız Sensör",
          "İç + Dış + Flaşör",
          "Çift Yedekli Bağlantı",
          "7/24 İzleme Merkezi",
          "Yılda 2 Bakım",
          "3 Yıl Garanti",
        ],
      },
    ],
  },
  testimonials: [
    {
      text: "Dükkanıma alarm sistemi kurdurduk, bir ay sonra gerçekten hırsız girmeye çalıştı, sistem anında devreye girdi.",
      name: "Kemal A.",
      role: "İstanbul / Esnaf",
      rating: 5,
    },
    {
      text: "Evimize kablosuz alarm sistemi yaptırdık. Kurulum çok temiz, hiç kablo görünmüyor.",
      name: "Ayşe M.",
      role: "Bursa / Ev Sahibi",
      rating: 5,
    },
    {
      text: "Ofisimize alarm + kamera birlikte kurdular. İzleme merkezi bağlantısı çok güven veriyor.",
      name: "Hasan T.",
      role: "Kocaeli / Ofis Sahibi",
      rating: 5,
    },
  ],
  faq: [
    {
      question: "Alarm sistemi kurulumu ne kadar sürer?",
      answer:
        "Konut için yarım gün ile 1 gün arasında. İşyeri büyüklüğüne göre 1-2 gün sürebilir.",
    },
    {
      question: "Kablosuz mı kablolu mu tercih etmeliyim?",
      answer:
        "Hazır yapılarda kablosuz, inşaat aşamasındaki yapılarda kablolu daha avantajlıdır. Keşifte uzmanımız en uygun çözümü önerir.",
    },
    {
      question: "İzleme merkezi zorunlu mu?",
      answer:
        "Zorunlu değil. Sadece mobil bildirim alan sistemler de kurabiliyoruz. İzleme merkezi ek güvenlik katmanı sağlar.",
    },
    {
      question: "Elektrik kesintisinde ne olur?",
      answer:
        "Tüm sistemlerimiz yedek batarya ile çalışır. Elektrik kesintisinde 8-24 saat bağımsız çalışmaya devam eder.",
    },
  ],
  cta: {
    title: "Ücretsiz Alarm Sistemi Teklifi Alın",
    subtitle: "Formu doldurun, uzman ekibimiz sizi arasın.",
    defaultService: "alarm",
  },
};

export default function AlarmLandingPage() {
  return <LandingPageTemplate data={data} />;
}
