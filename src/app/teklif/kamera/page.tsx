import LandingPageTemplate, { LandingPageData } from "@/components/templates/LandingPageTemplate";

const data: LandingPageData = {
  hero: {
    title: "Profesyonel Güvenlik Kamera Kurulumu",
    subtitle:
      "Anahtar teslim montaj + 7/24 uzaktan izleme. Marmara Bölgesi genelinde ücretsiz keşif.",
    ctaLabel: "Ücretsiz Keşif ve Teklif Al",
  },
  problem: {
    title: "İşyeriniz veya Eviniz Gerçekten Güvende mi?",
    cards: [
      {
        icon: "🔓",
        title: "Hırsızlık Riski",
        description:
          "Türkiye'de her 6 dakikada bir hırsızlık vakası yaşanıyor. Güvenlik kamerası caydırıcılığı %60 oranında etkili.",
      },
      {
        icon: "👁️",
        title: "Çalışan Denetimi",
        description:
          "İşyerinizde neler olduğunu bilmiyor musunuz? Uzaktan izleme ile her an kontrol edin.",
      },
      {
        icon: "💰",
        title: "Sigorta İndirimi",
        description:
          "Güvenlik sistemi olan işyerleri sigortada %15-25 indirim alır.",
      },
    ],
  },
  solution: {
    title: "Profesyonel IP Kamera Sistemi Kurulumu",
    description:
      "Yüksek çözünürlüklü IP kamera sistemleri ile işyerinizi ve evinizi 7/24 izleyin. Telefonunuzdan canlı görüntü, kayıt izleme ve anlık bildirim alın.",
    features: [
      "2K/4K çözünürlük",
      "Gece görüşü (IR LED)",
      "Hareket algılama + bildirim",
      "Bulut ve yerel kayıt seçenekleri",
      "Mobil uygulama (iOS + Android)",
      "PoE altyapı (tek kablo)",
    ],
    imagePlaceholder: "Kamera Kurulum Görseli",
  },
  packages: {
    title: "Kamera Sistemi Paketleri",
    items: [
      {
        name: "Başlangıç",
        price: "12.000 TL'den başlayan",
        features: [
          "2-4 Kamera",
          "NVR Kayıt Cihazı",
          "Montaj Dahil",
          "Uzaktan Erişim Kurulumu",
          "1 Yıl Garanti",
        ],
      },
      {
        name: "Standart",
        price: "25.000 TL'den başlayan",
        badge: "En Çok Tercih Edilen",
        highlighted: true,
        features: [
          "4-8 Kamera",
          "NVR Kayıt Cihazı",
          "Montaj Dahil",
          "Uzaktan İzleme (12 ay)",
          "Yılda 1 Bakım Ziyareti",
          "2 Yıl Garanti",
        ],
      },
      {
        name: "Premium",
        price: "Teklif Alın",
        features: [
          "8+ Kamera",
          "NVR + Yedek Depolama",
          "Montaj + Keşif Dahil",
          "Uzaktan İzleme (12 ay)",
          "Yılda 2 Bakım Ziyareti",
          "3 Yıl Garanti",
        ],
      },
    ],
  },
  testimonials: [
    {
      text: "Ofisimize 8 kamera taktırdık, çok memnunuz. Ekip profesyonel, iş temiz ve hızlıydı.",
      name: "Ahmet Y.",
      role: "İstanbul / E-ticaret Şirketi",
      rating: 5,
    },
    {
      text: "Sitemize 16 kamera + kartlı geçiş sistemi kurdular. Uzaktan izleme çok işe yarıyor.",
      name: "Fatma K.",
      role: "Bursa / Site Yöneticisi",
      rating: 5,
    },
    {
      text: "Fabrikamıza komple güvenlik sistemi kurdular. Bakım sözleşmesi de yaptık, çok rahatız.",
      name: "Mehmet S.",
      role: "Kocaeli / Fabrika Müdürü",
      rating: 5,
    },
  ],
  faq: [
    {
      question: "Kamera montajı ne kadar sürer?",
      answer:
        "Konut için ortalama 1 gün, işyeri için 1-3 gün. Proje büyüklüğüne göre keşif sırasında net süre bildirilir.",
    },
    {
      question: "İşyerime kaç kamera lazım?",
      answer:
        "Bu, mekanın büyüklüğüne ve görüş açılarına bağlıdır. Ücretsiz keşifte uzman ekibimiz ihtiyacınızı belirler.",
    },
    {
      question: "Fiyatlar ne kadar?",
      answer:
        "2-4 kameralı konut sistemi 12.000 TL'den, işyeri sistemleri 20.000 TL'den başlar. Keşif sonrası net fiyat oluşur.",
    },
    {
      question: "Garanti var mı?",
      answer:
        "Evet, tüm sistemlere minimum 1 yıl garanti verilir. Bakım sözleşmesi yapanlara garanti otomatik uzar.",
    },
    {
      question: "Telefondan izleyebilir miyim?",
      answer:
        "Evet, kurduğumuz tüm sistemler iOS ve Android'den canlı izleme, kayıt izleme ve bildirim alma özelliği sunar.",
    },
  ],
  cta: {
    title: "Ücretsiz Kamera Kurulum Teklifi Alın",
    subtitle:
      "Formu doldurun, uzman ekibimiz en kısa sürede sizi arasın.",
    defaultService: "kamera",
  },
};

export default function KameraLandingPage() {
  return <LandingPageTemplate data={data} />;
}
