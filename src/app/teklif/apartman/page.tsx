import LandingPageTemplate, { LandingPageData } from "@/components/templates/LandingPageTemplate";

const data: LandingPageData = {
  hero: {
    title: "Apartman ve Site Güvenlik Sistemi",
    subtitle:
      "Kamera, kartlı geçiş, interkom ve bariyer sistemleri. Site yönetimleri için komple güvenlik çözümü. Anahtar teslim kurulum.",
    ctaLabel: "Ücretsiz Keşif ve Teklif Al",
  },
  problem: {
    title: "Sitenizin Güvenliğinden Emin misiniz?",
    cards: [
      {
        icon: "🏘️",
        title: "Yetkisiz Giriş",
        description:
          "Kartlı geçiş sistemi olmayan sitelerde yetkisiz kişiler kolayca girebilir. Sakinlerin güvenliği tehlike altında olabilir.",
      },
      {
        icon: "📹",
        title: "Kör Noktalar",
        description:
          "Kamera sistemi olmayan ortak alanlarda yaşanan olaylar kayıt altına alınamaz. Hukuki süreçlerde delil sorunu yaşanır.",
      },
      {
        icon: "🔑",
        title: "Anahtar Yönetimi",
        description:
          "Mekanik kilit sistemleri kopyalanabilir. Kartlı geçiş ile her kartı uzaktan devre dışı bırakabilirsiniz.",
      },
    ],
  },
  solution: {
    title: "Komple Site Güvenlik Çözümü",
    description:
      "Giriş kontrolünden park alanına, ortak alanlardan otopark bariyer sistemine kadar sitenizin tüm güvenlik ihtiyacını tek elden karşılıyoruz.",
    features: [
      "Giriş kartlı geçiş sistemi",
      "Yüksek çözünürlüklü kamera ağı",
      "Video interkom sistemi",
      "Araç bariyer ve otopark kontrolü",
      "Yönetim yazılımı dahil",
      "7/24 teknik destek",
    ],
    imagePlaceholder: "Site Güvenlik Görseli",
  },
  packages: {
    title: "Site Güvenlik Paketleri",
    items: [
      {
        name: "Küçük Apartman",
        price: "20.000 TL'den başlayan",
        features: [
          "1 Giriş Kartlı Geçiş",
          "4-8 Kamera",
          "Interkom Sistemi",
          "Yönetici Paneli",
          "1 Yıl Garanti",
        ],
      },
      {
        name: "Orta Site",
        price: "45.000 TL'den başlayan",
        badge: "En Çok Tercih Edilen",
        highlighted: true,
        features: [
          "2-4 Giriş Kartlı Geçiş",
          "16-32 Kamera",
          "Araç Bariyer",
          "Video Interkom",
          "Merkezi Yönetim Yazılımı",
          "7/24 İzleme",
          "2 Yıl Garanti",
        ],
      },
      {
        name: "Büyük Konut Projesi",
        price: "Teklif Alın",
        features: [
          "Çok Kapılı Geçiş Kontrolü",
          "50+ Kamera",
          "LPR Plaka Tanıma",
          "Güvenlik Kulübesi Entegrasyonu",
          "Merkezi Komuta",
          "SLA Garantili Bakım",
          "3 Yıl Garanti",
        ],
      },
    ],
  },
  testimonials: [
    {
      text: "340 daireli sitemize komple güvenlik sistemi kurdurduk. Sakinlerimiz çok memnun, suç olayları sıfırlandı.",
      name: "Zeynep A.",
      role: "İstanbul / Site Yöneticisi",
      rating: 5,
    },
    {
      text: "Apartmanımızın kamera ve kartlı geçiş sistemini yenilediler. Kurulum çok profesyoneldi.",
      name: "Mustafa K.",
      role: "Bursa / Apartman Yöneticisi",
      rating: 5,
    },
    {
      text: "Sitemizdeki araç baiyerini de dahil ettiler. Artık plaka tanıma ile otomatik giriş var, harika.",
      name: "Canan Y.",
      role: "Kocaeli / Site Sakinleri Derneği",
      rating: 5,
    },
  ],
  faq: [
    {
      question: "Kaç daireli siteler için uygun?",
      answer:
        "5 daireli apartmandan 1000 daireli büyük projelere kadar tüm ölçekler için çözüm sunuyoruz.",
    },
    {
      question: "Mevcut interkom sistemi değiştirilebilir mi?",
      answer:
        "Evet, eski analog sistemler modern IP interkom sistemleriyle değiştirilebilir veya entegre edilebilir.",
    },
    {
      question: "Sakinler kendi telefonlarından erişim açabilir mi?",
      answer:
        "Evet, mobil uygulama ile sakinler konuklarına uzaktan kapı açabilir ve kamera görüntülerini izleyebilir.",
    },
    {
      question: "Yönetim yazılımı dahil mi?",
      answer:
        "Evet, tüm sistemlere yönetici paneli dahildir. Kart ekleme/silme, raporlama ve erişim yönetimi yazılımla yapılır.",
    },
  ],
  cta: {
    title: "Site ve Apartman Güvenlik Teklifi Alın",
    subtitle: "Sitenizin ihtiyacına özel çözüm için bizi arayın.",
    defaultService: "hepsi",
  },
};

export default function ApartmanLandingPage() {
  return <LandingPageTemplate data={data} />;
}
