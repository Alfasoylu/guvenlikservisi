import LandingPageTemplate, { LandingPageData } from "@/components/templates/LandingPageTemplate";

const data: LandingPageData = {
  hero: {
    title: "İstanbul Alarm Sistemi Kurulumu | Ajax ve Hikvision",
    subtitle:
      "İstanbul içi aynı gün alarm montajı. Ajax ve Hikvision marka kablolu ve kablosuz alarm sistemleri, mobil uygulama kontrolü, profesyonel kurulum ve 2 yıl garanti.",
    ctaLabel: "Hemen Teklif Al",
  },

  problem: {
    title: "Geç Kalmadan Alarm Sistemini Kurun",
    cards: [
      {
        icon: "🚨",
        title: "Hırsızlık ve İzinsiz Giriş Riski",
        description:
          "Alarm sistemi olmayan ev, ofis, dükkân ve depo alanları daha kolay hedef haline gelir. Erken uyarı vermeyen mekân, doğrudan zarar yazar.",
      },
      {
        icon: "📱",
        title: "Anında Telefon Bildirimi",
        description:
          "Kapı açılma, hareket algılama ve alarm tetiklenmesi durumunda sistem sizi anında uygulama üzerinden uyarır. Mekânda olmasanız da kontrol sizde kalır.",
      },
      {
        icon: "⏱️",
        title: "Geç Müdahale Daha Büyük Kayıp",
        description:
          "Olay olduktan sonra fark etmek yerine, olay anında haberdar olmak gerekir. Aynı gün kurulum yaptığımız sistemlerle riski bekletmeden kapatıyoruz.",
      },
    ],
  },

  solution: {
    title: "Ajax ve Hikvision Alarm Sistemleri",
    description:
      "İstanbul’da ev, ofis, mağaza, depo ve işyerleri için Ajax ve Hikvision marka alarm sistemleri kuruyoruz. Mekâna göre kablolu veya kablosuz çözüm planlıyor, profesyonel montaj sonrası sistemi telefonunuza kurup teslim ediyoruz.",
    features: [
      "Ajax ve Hikvision marka alarm sistemleri",
      "Kablolu ve kablosuz kurulum seçenekleri",
      "İstanbul içi aynı gün montaj imkânı",
      "Mobil uygulama ile uzaktan kontrol",
      "PIR hareket sensörü desteği",
      "Kapı ve pencere manyetik kontak desteği",
      "İç ve dış siren seçenekleri",
      "Elektrik kesintisine karşı batarya yedekleme",
      "Ev, ofis, dükkân ve depo için uygun çözümler",
      "2 yıl ürün ve kurulum garantisi",
    ],
    imagePlaceholder: "Ajax ve Hikvision Alarm Sistemi Kurulumu",
  },

  packages: {
    title: "Alarm Sistemi Paketleri",
    items: [
      {
        name: "Ev / Küçük Ofis Paketi",
        price: "Teklif Alın",
        features: [
          "Ajax veya Hikvision kontrol paneli",
          "Temel hareket sensörü paketi",
          "Kapı / pencere manyetik kontak",
          "İç siren",
          "Mobil uygulama kurulumu",
          "İstanbul içi profesyonel montaj",
          "2 Yıl Garanti",
        ],
      },
      {
        name: "Dükkan / Ofis Koruma Paketi",
        price: "Teklif Alın",
        badge: "En Çok Tercih Edilen",
        highlighted: true,
        features: [
          "Ajax veya Hikvision alarm paneli",
          "Giriş + iç alan sensör planlaması",
          "Kapı / kepenk / pencere koruması",
          "İç + dış siren seçenekleri",
          "Mobil uygulama kontrolü",
          "Aynı gün montaj imkânı",
          "2 Yıl Garanti",
        ],
      },
      {
        name: "Depo / Kurumsal Çözüm",
        price: "Keşif Sonrası Teklif",
        features: [
          "Büyük alanlara özel keşif",
          "Kablolu veya kablosuz proje çözümü",
          "Çoklu bölge koruma planı",
          "Siren ve sensör genişletme imkânı",
          "Telefon üzerinden uzaktan yönetim",
          "Profesyonel montaj ve devreye alma",
          "2 Yıl Garanti",
        ],
      },
    ],
  },

  testimonials: [
    {
      text: "Dükkânımıza Ajax alarm kuruldu. Aynı gün gelip montaj yaptılar, sistemi telefondan nasıl kullanacağımızı da tek tek gösterdiler.",
      name: "Mehmet K.",
      role: "Şişli / İşletme Sahibi",
      rating: 5,
    },
    {
      text: "Evimiz için kablosuz alarm sistemi yaptırdık. Kırıp dökmeden temiz kurulum oldu, uygulama üzerinden tüm sistemi rahatça yönetiyoruz.",
      name: "Zeynep A.",
      role: "Kadıköy / Ev Sahibi",
      rating: 5,
    },
    {
      text: "Ofisimiz için Hikvision alarm sistemi kuruldu. Hızlı dönüş yaptılar, keşif sonrası doğru çözümü önerdiler. Kurulum da gayet profesyoneldi.",
      name: "Onur T.",
      role: "Bakırköy / Ofis",
      rating: 5,
    },
  ],

  faq: [
    {
      question: "İstanbul’da aynı gün alarm montajı yapıyor musunuz?",
      answer:
        "Evet. İstanbul içindeki birçok bölgede keşif ve yoğunluk durumuna göre aynı gün alarm montajı yapabiliyoruz. Net planlama için form bırakmanız veya bizi aramanız yeterli.",
    },
    {
      question: "Hangi markaları kullanıyorsunuz?",
      answer:
        "Başlıca Ajax ve Hikvision marka alarm sistemleri kuruyoruz. Mekânın yapısına, kullanım ihtiyacına ve bütçeye göre en uygun sistemi öneriyoruz.",
    },
    {
      question: "Kablolu mu kablosuz mu daha mantıklı?",
      answer:
        "Hazır kullanımda olan ev ve ofislerde kablosuz sistemler genelde daha hızlı ve temiz çözüm sunar. Yeni yapılan ya da altyapısı uygun alanlarda kablolu sistemler de güçlü bir seçenektir. Doğru tercih keşifte netleşir.",
    },
    {
      question: "Alarm sistemi telefondan kontrol edilir mi?",
      answer:
        "Evet. Kurduğumuz sistemlerde mobil uygulama üzerinden alarmı kurup kapatabilir, bildirim alabilir ve sistem durumunu uzaktan takip edebilirsiniz.",
    },
    {
      question: "Elektrik kesilirse alarm çalışmaya devam eder mi?",
      answer:
        "Evet. Sistemlerde yedek batarya bulunur. Elektrik kesintisinde alarm sistemi belirli süre çalışmaya devam eder ve koruma sürer.",
    },
    {
      question: "Garanti süreniz ne kadar?",
      answer:
        "Kurulumunu yaptığımız alarm sistemlerinde 2 yıl garanti sunuyoruz.",
    },
  ],

  cta: {
    title: "İstanbul Alarm Sistemi İçin Hemen Teklif Alın",
    subtitle:
      "Ajax ve Hikvision alarm sistemi kurulumu için formu doldurun, ekibimiz sizi arasın.",
    defaultService: "alarm",
  },
};

export default function AlarmLandingPage() {
  return <LandingPageTemplate data={data} />;
}
