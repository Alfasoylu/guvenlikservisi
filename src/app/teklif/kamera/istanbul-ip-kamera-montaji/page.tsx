import LandingPageTemplate, {
  LandingPageData,
} from "@/components/templates/LandingPageTemplate";

const data: LandingPageData = {
  hero: {
    title: "İstanbul IP Kamera Montajı",
    subtitle:
      "Ev, işyeri, mağaza ve depo için profesyonel IP kamera kurulumu. İstanbul genelinde hızlı keşif, doğru ürün seçimi ve uzaktan izlemeye hazır anahtar teslim montaj.",
    ctaLabel: "Hemen Teklif Al",
  },

  problem: {
    title: "Yanlış Kurulan Kamera Sistemi Para Kaybettirir",
    cards: [
      {
        icon: "🎯",
        title: "Kritik Alanlar Görünmez",
        description:
          "Yanlış açı, yanlış lens ve eksik planlama yüzünden giriş, kasa, depo, otopark veya bina çevresi tam izlenemez.",
      },
      {
        icon: "📴",
        title: "Telefondan İzleme Sorunlu Olur",
        description:
          "Kurulum düzgün yapılmazsa uzaktan izleme, kayıt erişimi ve bildirim sistemi stabil çalışmaz.",
      },
      {
        icon: "💸",
        title: "Ucuz Kurulum Sonradan Daha Pahalıya Patlar",
        description:
          "Kalitesiz kablolama, hatalı cihaz seçimi ve eksik altyapı nedeniyle tekrar servis ve ek maliyet çıkar.",
      },
    ],
  },

  solution: {
    title: "İstanbul’da Profesyonel IP Kamera Sistemi Kurulumu",
    description:
      "İhtiyaca göre kamera noktaları belirlenir, kayıt cihazı ve depolama planlanır, kablolama altyapısı hazırlanır ve sistem telefonunuzdan izlemeye hazır şekilde teslim edilir. Amaç sadece kamera takmak değil, çalışan ve güvenilir sistem kurmaktır.",
    features: [
      "2 MP / 4 MP / 5 MP IP kamera seçenekleri",
      "Gece görüşü ve akıllı hareket algılama",
      "NVR kayıt cihazı kurulumu",
      "Mobil uygulama ile canlı ve kayıt izleme",
      "PoE altyapı ile düzenli ve stabil kurulum",
      "Ev, işyeri, mağaza, ofis ve depo çözümleri",
    ],
    imagePlaceholder: "İstanbul IP Kamera Montaj Hizmeti Görseli",
  },

  packages: {
    title: "İstanbul IP Kamera Kurulum Paketleri",
    items: [
      {
        name: "Başlangıç Paket",
        price: "12.000 TL'den başlayan",
        features: [
          "2-4 IP Kamera",
          "NVR kayıt cihazı",
          "Montaj dahil",
          "Mobil uygulama kurulumu",
          "Uzaktan izleme ayarı",
          "1 yıl garanti",
        ],
      },
      {
        name: "İşyeri Paket",
        price: "25.000 TL'den başlayan",
        badge: "En Çok Tercih Edilen",
        highlighted: true,
        features: [
          "4-8 IP Kamera",
          "NVR kayıt cihazı",
          "Montaj ve devreye alma",
          "Telefon + tablet erişimi",
          "Kayıt optimizasyonu",
          "1 bakım kontrolü",
          "2 yıl garanti",
        ],
      },
      {
        name: "Kurumsal Paket",
        price: "Özel Teklif",
        features: [
          "8+ IP Kamera",
          "Yüksek kapasiteli kayıt sistemi",
          "Keşif ve proje planlama",
          "Profesyonel montaj",
          "Çoklu kullanıcı erişimi",
          "Bakım anlaşması opsiyonu",
          "Kurumsal destek",
        ],
      },
    ],
  },

  testimonials: [
    {
      text: "Mağazamız için IP kamera montajı yaptırdık. Görüş açıları doğru ayarlandı, uzaktan izleme sorunsuz çalışıyor.",
      name: "Murat A.",
      role: "İstanbul / Mağaza Sahibi",
      rating: 5,
    },
    {
      text: "Ofisimize 6 kameralı sistem kuruldu. İş temizdi, teslim sonrası telefon bağlantısı da eksiksiz yapıldı.",
      name: "Selin T.",
      role: "İstanbul / Ofis Yöneticisi",
      rating: 5,
    },
    {
      text: "Depo alanı için kurulum yaptırdık. Giriş çıkış ve raf koridorlarını net izleyebiliyoruz.",
      name: "Yusuf K.",
      role: "İstanbul / Depo İşletmecisi",
      rating: 5,
    },
  ],

  faq: [
    {
      question: "İstanbul IP kamera montajı ne kadar sürer?",
      answer:
        "Küçük alanlarda kurulum çoğu zaman aynı gün tamamlanır. Daha büyük projelerde keşif sonrası net süre verilir.",
    },
    {
      question: "İstanbul’un hangi bölgelerine hizmet veriyorsunuz?",
      answer:
        "Avrupa ve Anadolu Yakası genelinde hizmet veriyoruz. İlçe ve proje yapısına göre keşif planlaması yapıyoruz.",
    },
    {
      question: "Telefondan canlı izleme kuruluyor mu?",
      answer:
        "Evet. Kurduğumuz IP kamera sistemleri telefon üzerinden canlı izleme, kayıt izleme ve bildirim altyapısıyla teslim edilir.",
    },
    {
      question: "IP kamera mı analog kamera mı daha mantıklı?",
      answer:
        "Yeni kurulumlarda çoğu işletme ve konutta IP kamera sistemi görüntü kalitesi, ağ yönetimi ve uzaktan erişim açısından daha avantajlıdır.",
    },
    {
      question: "Net fiyat nasıl belirleniyor?",
      answer:
        "Kamera sayısı, kablolama mesafesi, kayıt süresi, çözünürlük ve montaj zorluğuna göre fiyat değişir. En doğru fiyat keşif sonrası verilir.",
    },
  ],

  cta: {
    title: "İstanbul IP Kamera Montajı İçin Hemen Teklif Alın",
    subtitle:
      "Formu doldurun, ihtiyacınıza uygun sistemi belirleyip sizi hızlıca arayalım.",
    defaultService: "kamera",
  },
};

export default function IstanbulIpKameraMontajiPage() {
  return <LandingPageTemplate data={data} />;
}
