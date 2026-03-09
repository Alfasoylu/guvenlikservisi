import LandingPageTemplate, {
  LandingPageData,
} from "@/components/templates/LandingPageTemplate";

const data: LandingPageData = {
  hero: {
    title: "İstanbul IP Kamera Montajı",
    subtitle:
      "Ev, işyeri, mağaza ve depo için profesyonel IP kamera kurulumu. İstanbul genelinde hızlı keşif, montaj ve uzaktan izleme kurulumu.",
    ctaLabel: "Ücretsiz Keşif ve Teklif Al",
  },

  problem: {
    title: "IP Kamera Kurulumu Yanlış Yapılırsa Sistem İşe Yaramaz",
    cards: [
      {
        icon: "📉",
        title: "Kör Nokta Riski",
        description:
          "Yanlış kamera açısı ve eksik planlama nedeniyle giriş, kasa, depo veya bina çevresi tam izlenemez.",
      },
      {
        icon: "📱",
        title: "Telefondan İzleyememe",
        description:
          "Kurulum sonrası uzaktan izleme düzgün yapılandırılmazsa sistem var gibi görünür ama gerçek kullanımda sorun çıkarır.",
      },
      {
        icon: "🛠️",
        title: "Kablo ve Montaj Hataları",
        description:
          "Düşük kaliteli kablolama, zayıf adaptör seçimi ve hatalı kayıt cihazı kurulumu görüntü ve kayıt problemlerine neden olur.",
      },
    ],
  },

  solution: {
    title: "İstanbul’da Profesyonel IP Kamera Sistemi Kurulumu",
    description:
      "İhtiyaca uygun IP kamera sistemi planlanır, keşif yapılır, uygun görüş açıları belirlenir, kayıt cihazı ve uzaktan erişim ayarlanır. Kurulum sonrası sistem telefonunuzdan canlı ve kayıt izlemeye hazır şekilde teslim edilir.",
    features: [
      "2 MP / 4 MP / 5 MP IP kamera seçenekleri",
      "Gece görüşü ve akıllı hareket algılama",
      "NVR kayıt cihazı kurulumu",
      "Telefondan canlı izleme ve kayıt erişimi",
      "PoE altyapı ile tek kablo çözümü",
      "Ev, ofis, mağaza ve depo için proje bazlı kurulum",
    ],
    imagePlaceholder: "İstanbul IP Kamera Montajı Görseli",
  },

  packages: {
    title: "İstanbul IP Kamera Sistem Paketleri",
    items: [
      {
        name: "Küçük Alan Paketi",
        price: "12.000 TL'den başlayan",
        features: [
          "2-4 IP Kamera",
          "NVR Kayıt Cihazı",
          "Temel montaj dahil",
          "Mobil uygulama kurulumu",
          "Uzaktan izleme ayarı",
          "1 Yıl Garanti",
        ],
      },
      {
        name: "İşyeri Paketi",
        price: "25.000 TL'den başlayan",
        badge: "En Çok Tercih Edilen",
        highlighted: true,
        features: [
          "4-8 IP Kamera",
          "NVR Kayıt Cihazı",
          "Montaj ve devreye alma",
          "Telefon ve tablet erişimi",
          "Kayıt optimizasyonu",
          "1 bakım kontrolü",
          "2 Yıl Garanti",
        ],
      },
      {
        name: "Kurumsal Paket",
        price: "Özel Teklif",
        features: [
          "8+ IP Kamera",
          "NVR + yüksek kapasiteli depolama",
          "Keşif ve proje planlama",
          "Montaj + ince ayar",
          "Çoklu kullanıcı erişimi",
          "Bakım anlaşması opsiyonu",
          "Kurumsal destek",
        ],
      },
    ],
  },

  testimonials: [
    {
      text: "Mağazamıza IP kamera sistemi kuruldu. Görüş açıları doğru planlandı, telefon bağlantısı da sorunsuz çalışıyor.",
      name: "Murat A.",
      role: "İstanbul / Mağaza Sahibi",
      rating: 5,
    },
    {
      text: "Ofis için 6 kameralı sistem yaptırdık. Kurulum hızlıydı, uzaktan izleme ve kayıt erişimi eksiksiz teslim edildi.",
      name: "Selin T.",
      role: "İstanbul / Ofis Yöneticisi",
      rating: 5,
    },
    {
      text: "Depo alanı için IP kamera montajı yaptırdık. Giriş-çıkış ve raf koridorları net şekilde izleniyor.",
      name: "Yusuf K.",
      role: "İstanbul / Depo İşletmecisi",
      rating: 5,
    },
  ],

  faq: [
    {
      question: "İstanbul IP kamera montajı ne kadar sürer?",
      answer:
        "Küçük alanlarda kurulum genelde aynı gün tamamlanır. İşletme ve depo gibi alanlarda sistem büyüklüğüne göre süre 1-3 güne çıkabilir.",
    },
    {
      question: "İstanbul’da hangi bölgelere hizmet veriyorsunuz?",
      answer:
        "Avrupa ve Anadolu Yakası genelinde proje bazlı hizmet veriyoruz. İlçe ve lokasyona göre keşif planlaması yapılır.",
    },
    {
      question: "IP kamera sistemi mi analog kamera sistemi mi daha iyi?",
      answer:
        "Yeni kurulumlarda çoğu durumda IP kamera sistemi daha esnek, daha net görüntülü ve daha gelişmiş uzaktan erişim seçenekleri sunduğu için avantajlıdır.",
    },
    {
      question: "Telefondan canlı izleme kuruluyor mu?",
      answer:
        "Evet. Kurduğumuz IP kamera sistemlerinde telefon üzerinden canlı izleme, kayıt izleme ve bildirim altyapısı ayarlanır.",
    },
    {
      question: "Net fiyat nasıl belirleniyor?",
      answer:
        "Kamera sayısı, kablolama mesafesi, kayıt süresi, görüntü kalitesi ve montaj zorluğuna göre fiyat değişir. En doğru fiyat keşif sonrası çıkar.",
    },
  ],

  cta: {
    title: "İstanbul IP Kamera Montajı İçin Teklif Alın",
    subtitle:
      "Formu doldurun, sistem ihtiyacınızı öğrenip size en uygun kurulum teklifini hazırlayalım.",
    defaultService: "kamera",
  },
};

export default function IstanbulIpKameraMontajiPage() {
  return <LandingPageTemplate data={data} />;
}
