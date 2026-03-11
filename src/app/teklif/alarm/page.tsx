import LandingPageTemplate, { LandingPageData } from "@/components/templates/LandingPageTemplate";

const data: LandingPageData = {
  hero: {
    title: "İstanbul Alarm Sistemi Kurulumu | Ajax ve Hikvision Alarm Montajı",
    subtitle:
      "İstanbul içi aynı gün alarm sistemi kurulumu. Ajax ve Hikvision marka kablolu ve kablosuz alarm sistemleri, ev, ofis, dükkan, mağaza ve depo için profesyonel montaj, mobil uygulama kontrolü ve 2 yıl garanti.",
    ctaLabel: "Hemen Teklif Al",
  },

  problem: {
    title: "Alarm Sistemi Olmayan Mekan Daha Kolay Hedef Haline Gelir",
    cards: [
      {
        icon: "🚨",
        title: "Hırsızlık ve İzinsiz Giriş Riski",
        description:
          "Alarm sistemi olmayan ev, işyeri, mağaza ve depolarda izinsiz giriş riski daha yüksektir. Olayı geç fark etmek, maddi kaybı büyütür. Erken uyarı veren profesyonel alarm sistemi, riski daha başta azaltır.",
      },
      {
        icon: "📱",
        title: "Olay Anında Telefonunuza Bildirim",
        description:
          "Kapı açılma, hareket algılama, alarm tetiklenmesi ve sistem durumu gibi kritik bilgiler mobil uygulama üzerinden anında size ulaşır. Mekanda olmasanız bile kontrol sizde kalır.",
      },
      {
        icon: "⏱️",
        title: "Geç Kurulan Güvenlik Daha Pahalıya Mal Olur",
        description:
          "Alarm sistemi çoğu zaman olay yaşandıktan sonra akla gelir. Doğru yaklaşım, zarar olmadan önce önlem almaktır. İstanbul içi aynı gün montaj imkanımız ile güvenlik açığını bekletmeden kapatıyoruz.",
      },
    ],
  },

  solution: {
    title: "Ajax ve Hikvision Alarm Sistemleri ile Profesyonel Koruma",
    description:
      "İstanbul’da ev, villa, daire, ofis, dükkan, mağaza, depo, apartman girişi ve işyerleri için Ajax ve Hikvision marka alarm sistemleri kuruyoruz. Mekanın yapısına göre kablolu veya kablosuz alarm sistemi planlıyor, sensör yerleşimini profesyonel şekilde belirliyor, kurulumu yapıyor ve sistemi telefonunuza tanımlayarak teslim ediyoruz.",
    features: [
      "Ajax alarm sistemi kurulumu",
      "Hikvision alarm sistemi kurulumu",
      "Kablolu alarm sistemi çözümleri",
      "Kablosuz alarm sistemi çözümleri",
      "İstanbul içi aynı gün alarm montajı",
      "Ev alarm sistemi kurulumu",
      "İşyeri ve mağaza alarm sistemi kurulumu",
      "Ofis ve depo alarm sistemi planlaması",
      "PIR hareket sensörü desteği",
      "Kapı ve pencere manyetik kontak desteği",
      "İç ortam ve dış ortam siren seçenekleri",
      "Mobil uygulama ile alarm kurma / kapatma",
      "Elektrik kesintisine karşı batarya yedekleme",
      "Uzaktan takip ve anlık bildirim desteği",
      "Mekana özel keşif ve sensör yerleşim planı",
      "2 yıl ürün ve kurulum garantisi",
    ],
    imagePlaceholder: "İstanbul Ajax ve Hikvision Alarm Sistemi Kurulumu",
  },

  packages: {
    title: "İstanbul Alarm Sistemi Paketleri",
    items: [
      {
        name: "Ev ve Daire Alarm Paketi",
        price: "Teklif Alın",
        features: [
          "Ajax veya Hikvision alarm paneli",
          "Daire ve küçük yaşam alanlarına uygun yapı",
          "Hareket sensörü ve kapı kontak planlaması",
          "Kablosuz veya uygun ise kablolu kurulum",
          "İç siren desteği",
          "Mobil uygulama kurulumu",
          "Telefon üzerinden temel kontrol",
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
          "Ajax veya Hikvision alarm kontrol paneli",
          "Giriş, iç alan ve kritik nokta planlaması",
          "Kapı, pencere, kepenk ve geçiş koruması",
          "İç + dış siren seçenekleri",
          "Kablosuz veya hibrit kurulum senaryosu",
          "Mobil uygulama ile uzaktan alarm yönetimi",
          "İstanbul içi aynı gün montaj imkanı",
          "Keşif sonrası doğru sensör konumlandırması",
          "2 Yıl Garanti",
        ],
      },
      {
        name: "Depo / Mağaza / Kurumsal Çözüm",
        price: "Keşif Sonrası Teklif",
        features: [
          "Büyük alanlar için keşif bazlı planlama",
          "Kablolu, kablosuz veya hibrit sistem tasarımı",
          "Çoklu alan ve bölge koruma kurgusu",
          "Sensör, siren ve aksesuar genişletme imkanı",
          "Operasyon alanına uygun güvenlik senaryosu",
          "Telefon üzerinden uzaktan durum takibi",
          "Profesyonel kurulum ve devreye alma",
          "Genişleme ve bakım açısından sürdürülebilir yapı",
          "2 Yıl Garanti",
        ],
      },
    ],
  },

  testimonials: [
    {
      text: "Dükkanımız için Ajax alarm sistemi kuruldu. Aynı gün geldiler, sensör yerlerini doğru planladılar ve uygulamayı telefona kurup tek tek anlattılar.",
      name: "Mehmet K.",
      role: "Şişli / İşletme Sahibi",
      rating: 5,
    },
    {
      text: "Evimiz için kablosuz alarm sistemi yaptırdık. Temiz montaj oldu, kırma dökme olmadı. Uygulama üzerinden alarmı rahatça kontrol ediyoruz.",
      name: "Zeynep A.",
      role: "Kadıköy / Ev Sahibi",
      rating: 5,
    },
    {
      text: "Ofisimiz için Hikvision alarm sistemi kuruldu. Keşif sonrası gerçekten ihtiyacımıza uygun çözüm sundular. Hızlı dönüş ve düzgün işçilik aldık.",
      name: "Onur T.",
      role: "Bakırköy / Ofis",
      rating: 5,
    },
  ],

  faq: [
    {
      question: "İstanbul’da aynı gün alarm sistemi kurulumu yapıyor musunuz?",
      answer:
        "Evet. İstanbul içindeki birçok ilçede yoğunluk ve saat durumuna göre aynı gün alarm montajı yapabiliyoruz. Özellikle acil güvenlik ihtiyacı olan ev, işyeri, dükkan ve ofisler için hızlı planlama sağlıyoruz.",
    },
    {
      question: "Hangi alarm markalarını kullanıyorsunuz?",
      answer:
        "Başlıca Ajax ve Hikvision marka alarm sistemleri kuruyoruz. Kullanım senaryosuna, mekan büyüklüğüne, kablolama durumuna ve bütçeye göre en uygun marka ve sistem yapısını öneriyoruz.",
    },
    {
      question: "Kablolu alarm mı, kablosuz alarm mı daha iyi?",
      answer:
        "Hazır kullanımda olan ev, daire, ofis ve dükkanlarda kablosuz alarm sistemi çoğu zaman daha hızlı ve temiz çözüm sunar. Yeni yapılan, tadilatta olan veya altyapısı uygun yerlerde kablolu alarm sistemi daha stabil ve ekonomik olabilir. En doğru seçim keşif sonrası netleşir.",
    },
    {
      question: "Alarm sistemi telefondan kontrol ediliyor mu?",
      answer:
        "Evet. Kurduğumuz Ajax ve Hikvision alarm sistemleri mobil uygulama ile kontrol edilebilir. Sistemi kurup kapatabilir, alarm geçmişini görebilir, anlık bildirim alabilir ve bazı senaryolarda kullanıcı yetkilerini yönetebilirsiniz.",
    },
    {
      question: "Elektrik kesilirse alarm sistemi çalışmaya devam eder mi?",
      answer:
        "Evet. Sistemlerde yedek batarya bulunduğu için elektrik kesintisinde alarm sistemi belirli süre boyunca çalışmaya devam eder. Bu sayede koruma tamamen devre dışı kalmaz.",
    },
    {
      question: "Ev için alarm sistemi mi, işyeri için alarm sistemi mi farklı kurulur?",
      answer:
        "Evet. Ev alarm sistemi ile işyeri alarm sistemi aynı mantıkta çalışsa da sensör yerleşimi, giriş noktaları, kullanım alışkanlığı ve koruma senaryosu farklıdır. Bu yüzden her mekan için aynı paket değil, ihtiyaca uygun yapı planlanmalıdır.",
    },
    {
      question: "Alarm sistemi kamerayla birlikte kurulabilir mi?",
      answer:
        "Evet. İstenirse alarm sistemi ile güvenlik kamerası sistemi birlikte planlanabilir. Bu kombinasyon daha güçlü güvenlik sağlar çünkü hem erken uyarı alırsınız hem de görüntü kaydı ile olayı doğrulama imkanı elde edersiniz.",
    },
    {
      question: "Kurulum sonrası kullanım desteği veriyor musunuz?",
      answer:
        "Evet. Kurulum tamamlandıktan sonra sistemi nasıl kullanacağınızı gösteriyoruz. Mobil uygulama bağlantısı, alarm kurma-kapatma mantığı ve temel kullanım adımları teslim sırasında anlatılır.",
    },
    {
      question: "Garanti süresi ne kadar?",
      answer:
        "Kurulumunu yaptığımız alarm sistemlerinde 2 yıl ürün ve kurulum garantisi sunuyoruz. Garanti kapsamı kullanılan ürün tipi ve uygulama detayına göre teslim sırasında net şekilde belirtilir.",
    },
    {
      question: "Alarm sistemi fiyatı neye göre değişir?",
      answer:
        "Fiyat; mekanın büyüklüğüne, giriş sayısına, kullanılacak sensör adedine, kablolu veya kablosuz sisteme, siren yapısına ve ek güvenlik ihtiyaçlarına göre değişir. Bu nedenle en doğru fiyat keşif veya ihtiyaç analizi sonrası çıkar.",
    },
  ],

  cta: {
    title: "İstanbul Alarm Sistemi İçin Hemen Teklif Alın",
    subtitle:
      "Ajax ve Hikvision alarm sistemi kurulumu, kablolu ve kablosuz çözümler, aynı gün montaj ve 2 yıl garanti için formu doldurun; ekibimiz sizi arasın.",
    defaultService: "alarm",
  },
};

export default function AlarmLandingPage() {
  return <LandingPageTemplate data={data} />;
}
