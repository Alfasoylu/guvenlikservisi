export interface ServiceContentTemplate {
  title: string;
  intro: string;
  trustBullets: string[];
  processSummary: {
    title: string;
    body: string;
  };
  useCaseTitle: string;
  useCaseDescription: string;
  useCases: string[];
  packageTitle: string;
  packageDescription: string;
  packages: {
    title: string;
    description: string;
  }[];
  cta: {
    title: string;
    description: string;
    primaryLabel: string;
    secondaryLabel: string;
  };
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const serviceContent: Record<string, ServiceContentTemplate> = {
  "kamera-sistemi-kurulumu": {
    title: "Kamera Sistemi Kurulumu",
    intro:
      "{city} içinde apartman, site, mağaza, ofis, depo ve fabrika gibi farklı alanlar için IP kamera sistemleri kuruyoruz. Kör nokta analizi, kayıt süresi planlaması, mobil izleme kurulumu ve devreye alma süreçlerini tek ekipte topluyoruz.",
    trustBullets: [
      "Ücretsiz keşif ile doğru kamera noktasını belirliyoruz.",
      "NVR, hard disk ve ağ altyapısını proje ölçeğine göre planlıyoruz.",
      "Mobil izleme ve temel kullanıcı ayarlarını teslim sırasında tamamlıyoruz.",
    ],
    processSummary: {
      title: "Kurulum süreci nasıl ilerliyor?",
      body:
        "Önce giriş-çıkış noktalarını ve kritik alanları analiz ediyoruz. Sonrasında kamera sayısını, kayıt cihazını ve kablolama planını netleştirip montaj ile devreye alma adımlarını tamamlıyoruz.",
    },
    useCaseTitle: "Kamera sistemini en çok hangi alanlarda kuruyoruz?",
    useCaseDescription:
      "{city} içinde görüş açısı, gece performansı ve kayıt beklentisine göre en sık hizmet verdiğimiz kullanım alanları aşağıdadır.",
    useCases: [
      "Daire ve müstakil ev",
      "Apartman girişleri",
      "Site çevresi ve ortak alanlar",
      "Mağaza ve dükkanlar",
      "Ofis ve işyerleri",
      "Depo ve fabrika alanları",
      "Otopark ve açık alanlar",
      "Villa çevre güvenliği",
    ],
    packageTitle: "Örnek sistem paketleri",
    packageDescription:
      "{city} içinde farklı ölçeklerdeki projeler için sık tercih edilen kamera sistemi kurulum senaryoları.",
    packages: [
      {
        title: "Küçük Alan Paketi",
        description:
          "{city} içinde daire, küçük ofis ve butik işletmeler için 2-4 kameralı sistem kurulumu.",
      },
      {
        title: "Orta Ölçek Paket",
        description:
          "{city} bölgesinde apartman, mağaza ve orta ölçekli işletmeler için 4-8 kameralı sistem.",
      },
      {
        title: "Profesyonel Paket",
        description:
          "{city} içinde depo, fabrika ve büyük alanlar için 8-16 kameralı profesyonel çözüm.",
      },
    ],
    cta: {
      title: "{city} için ücretsiz keşif ve teklif alın",
      description:
        "{city} içinde kamera sistemi kurulumu için hemen bizimle iletişime geçin. İhtiyacınıza göre uygun kamera sayısını, kayıt cihazını ve sistem maliyetini netleştirelim.",
      primaryLabel: "Hemen Ara",
      secondaryLabel: "İletişim Formuna Git",
    },
    faqs: [
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
    title: "Alarm Sistemi Kurulumu",
    intro:
      "{city} içinde ev, işyeri ve ticari alanlar için hırsız alarm sistemleri kuruyoruz. Manyetik kontak, hareket dedektörü, siren, keypad ve mobil bildirim altyapısını senaryoya göre planlıyoruz.",
    trustBullets: [
      "Alan riskine göre doğru dedektör kombinasyonu öneriyoruz.",
      "Kablosuz veya kablolu altyapıyı mekanın durumuna göre seçiyoruz.",
      "Yetkisiz giriş senaryolarını test ederek sistemi teslim ediyoruz.",
    ],
    processSummary: {
      title: "Alarm sistemi kurulumu nasıl planlanır?",
      body:
        "Kapı, pencere, geçiş hattı ve kör alanları inceliyoruz. Ardından panel, dedektör ve siren yerleşimini belirleyip bildirim senaryolarını aktive ediyoruz.",
    },
    useCaseTitle: "Alarm sistemini hangi mekanlarda kuruyoruz?",
    useCaseDescription:
      "{city} içinde güvenlik seviyesi, giriş sayısı ve kullanım düzenine göre farklı mekan tiplerinde alarm sistemi kuruyoruz.",
    useCases: [
      "Daire ve villa girişleri",
      "Küçük ve orta ölçekli ofisler",
      "Mağaza ve showroom alanları",
      "Apartman ortak girişleri",
      "Depo ve stok odaları",
      "Kapanış sonrası kontrol gerektiren işletmeler",
    ],
    packageTitle: "Örnek alarm sistemi paketleri",
    packageDescription:
      "{city} içindeki en yaygın alarm senaryoları için referans paket yapıları aşağıdadır.",
    packages: [
      {
        title: "Temel Konut Paketi",
        description:
          "{city} içinde daire ve küçük konutlar için panel, kontak, dedektör ve dahili siren çözümü.",
      },
      {
        title: "İşyeri Koruma Paketi",
        description:
          "{city} bölgesinde mağaza ve ofisler için çoklu dedektör ve mobil bildirim destekli kurulum.",
      },
      {
        title: "Geniş Alan Paketi",
        description:
          "{city} içinde depo veya çok girişli alanlarda bölümlenebilir alarm senaryoları ve güçlü siren yapısı.",
      },
    ],
    cta: {
      title: "{city} alarm sistemi için hızlı teklif alın",
      description:
        "{city} içindeki mekanınız için doğru alarm panelini, dedektör sayısını ve kullanım senaryosunu birlikte netleştirelim.",
      primaryLabel: "Hemen Ara",
      secondaryLabel: "İletişim Formuna Git",
    },
    faqs: [
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
    title: "Yangın Alarm Sistemi Kurulumu",
    intro:
      "{city} içinde bina tipi ve kullanım yoğunluğuna uygun yangın alarm sistemi kurulumu yapıyoruz. Dedektör, buton, flaşör ve santral yerleşimini teknik gerekliliklere göre planlıyoruz.",
    trustBullets: [
      "Mekanın kullanımına göre dedektör tipini doğru seçiyoruz.",
      "Alarm senaryosunu siren ve bildirim akışıyla birlikte test ediyoruz.",
      "Kurulum sonrası bakım ve servis planına uygun altyapı bırakıyoruz.",
    ],
    processSummary: {
      title: "Yangın alarm sisteminde odak noktamız",
      body:
        "Algılama noktalarını, kaçış güzergahlarını ve kritik hacimleri birlikte değerlendiriyoruz. Sonrasında santral, buton ve siren yerleşimini netleştirip saha testleriyle teslim ediyoruz.",
    },
    useCaseTitle: "Yangın alarm sistemi hangi alanlarda öne çıkıyor?",
    useCaseDescription:
      "{city} içinde erken algılama ve bina güvenliği gerektiren alanlarda yangın alarm sistemleri kuruyoruz.",
    useCases: [
      "Apartman ve site ortak alanları",
      "Ofis katları ve yönetim binaları",
      "Depo ve arşiv alanları",
      "Otel, pansiyon ve konaklama alanları",
      "Üretim ve teknik hacimler",
      "Mağaza ve showroom katları",
    ],
    packageTitle: "Örnek yangın alarm paketleri",
    packageDescription:
      "{city} içindeki tipik bina ölçekleri için referans yangın alarm sistemi kurulumları.",
    packages: [
      {
        title: "Kompakt Bina Paketi",
        description:
          "{city} içinde küçük işletmeler ve apartman ortak alanları için temel algılama ve uyarı çözümü.",
      },
      {
        title: "Kat Bazlı Koruma Paketi",
        description:
          "{city} bölgesinde çok odalı ofis ve ticari alanlar için zon bazlı yangın alarm kurulumu.",
      },
      {
        title: "Geniş Tesis Paketi",
        description:
          "{city} içinde depo, üretim alanı ve çok bölümlü yapılar için ölçeklenebilir yangın alarm çözümü.",
      },
    ],
    cta: {
      title: "{city} yangın alarm sistemi için keşif planlayın",
      description:
        "{city} içindeki yapınız için algılama noktalarını ve uygun sistem mimarisini birlikte belirleyelim.",
      primaryLabel: "Hemen Ara",
      secondaryLabel: "İletişim Formuna Git",
    },
    faqs: [
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
    title: "Kartlı Geçiş ve Turnike Sistemi Kurulumu",
    intro:
      "{city} içinde personel, plaza, ofis, fabrika, depo ve apartman girişleri için kartlı geçiş ve turnike sistemi kuruyoruz. Okuyucu, kilit, buton, turnike, biyometrik doğrulama ve yetkilendirme altyapısını giriş senaryosuna göre planlıyoruz.",
    trustBullets: [
      "Geçiş senaryosuna göre kart, şifre, biyometrik ve turnike kombinasyonlarını öneriyoruz.",
      "Kapı altyapısı ile uyumlu kilit ve aksesuar seçimi yapıyoruz.",
      "Yetki tanımları, PDKS uyumu ve kullanıcı teslim sürecini net şekilde kuruyoruz.",
    ],
    processSummary: {
      title: "Geçiş kontrolünde nasıl ilerliyoruz?",
      body:
        "Kapı tipini, kullanıcı sayısını, turnike ihtiyacını ve raporlama beklentisini inceliyoruz. Buna göre okuyucu, kilit, turnike ve kontrol ünitesi yerleşimini belirleyip yetki kurgusunu teslim ediyoruz.",
    },
    useCaseTitle: "Kartlı geçiş sistemi en çok hangi senaryolarda kullanılıyor?",
    useCaseDescription:
      "{city} içinde giriş kontrolü, personel yönetimi, vardiya takibi ve güvenli alan ayrımı gereken yapılarda kartlı geçiş ve turnike sistemleri kuruyoruz.",
    useCases: [
      "Plaza ve ofis girişleri",
      "Apartman ve site kapıları",
      "Personel devam kontrol ve PDKS noktaları",
      "Depo ve teknik oda girişleri",
      "Turnikeli kurumsal girişler",
      "Vardiyalı fabrika personel geçişleri",
      "Yetkili erişim gerektiren özel alanlar",
    ],
    packageTitle: "Örnek geçiş kontrol paketleri",
    packageDescription:
      "{city} içindeki farklı giriş tipleri için örnek kartlı geçiş, turnike ve PDKS senaryoları.",
    packages: [
      {
        title: "Tek Kapı ve Apartman Girişi Paketi",
        description:
          "{city} içinde küçük ofis, apartman ve teknik oda girişleri için okuyucu, kilit ve kullanıcı tanımlama çözümü.",
      },
      {
        title: "Plaza ve Çok Noktalı Ofis Paketi",
        description:
          "{city} bölgesinde lobi, kat geçişi ve departman bazlı yetkilendirme gereken projeler için merkezi geçiş altyapısı.",
      },
      {
        title: "PDKS ve Turnike Entegre Paket",
        description:
          "{city} içinde personel giriş çıkış takibi, vardiya kontrolü ve ziyaretçi akışı gereken alanlar için turnike ve geçiş kontrol entegrasyonu.",
      },
    ],
    cta: {
      title: "{city} kartlı geçiş ve turnike sistemi için çözüm alın",
      description:
        "{city} içindeki yapınız için kullanıcı sayısını, kapı ve turnike tipini, PDKS veya ziyaretçi yönetimi ihtiyacını birlikte planlayalım.",
      primaryLabel: "Hemen Ara",
      secondaryLabel: "İletişim Formuna Git",
    },
    faqs: [
      {
        question: "{city} içinde kartlı geçiş sistemi kurulumu yapıyor musunuz?",
        answer:
          "Evet. {city} içinde ofis, plaza, apartman, işyeri, fabrika ve kontrollü giriş gereken alanlar için kartlı geçiş ve turnike sistemleri kuruyoruz.",
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
      {
        question: "Turnike ve PDKS entegrasyonu aynı sistem içinde kurulabilir mi?",
        answer:
          "Evet. Uygun projelerde turnike geçişi, personel devam kontrol ve yetki yönetimini aynı altyapı içinde planlayabiliyoruz.",
      },
    ],
  },
  "apartman-site-guvenlik-sistemi": {
    title: "Apartman ve Site Güvenlik Sistemi",
    intro:
      "{city} içinde apartman ve site projeleri için kamera, alarm, geçiş kontrol ve çevre güvenliği çözümlerini birlikte planlıyoruz. Tek bir cihaz kurulumu yerine bütün alan güvenliğini ele alıyoruz.",
    trustBullets: [
      "Giriş, otopark ve ortak alanlar için kapsamlı keşif yapıyoruz.",
      "Yönetim beklentisine göre kamera, interkom ve geçiş yapısını netleştiriyoruz.",
      "Bina sakinlerinin kullanımını zorlaştırmadan güvenliği artırıyoruz.",
    ],
    processSummary: {
      title: "Site ve apartman projelerinde yaklaşımımız",
      body:
        "Yaya ve araç girişlerini, ortak alanları ve çevre sınırlarını birlikte inceliyoruz. Sonrasında kamera, aydınlatma, geçiş ve kayıt yapısını tek projede topluyoruz.",
    },
    useCaseTitle: "Apartman ve site projelerinde öne çıkan alanlar",
    useCaseDescription:
      "{city} içinde çoklu kullanıcı yapısına sahip projelerde güvenlik ihtiyacı genelde aşağıdaki alanlarda yoğunlaşıyor.",
    useCases: [
      "Bina girişleri ve lobi alanları",
      "Otopark giriş ve çıkışları",
      "Asansör önü ve kat holleri",
      "Bahçe, çevre duvarı ve açık alanlar",
      "Site güvenlik noktaları",
      "Teknik oda ve depo alanları",
    ],
    packageTitle: "Örnek apartman ve site paketleri",
    packageDescription:
      "{city} içindeki apartman ve site ölçeklerine göre örnek güvenlik çözümü kurguları.",
    packages: [
      {
        title: "Küçük Apartman Paketi",
        description:
          "{city} içinde tek girişli apartmanlar için temel kamera ve giriş güvenliği çözümü.",
      },
      {
        title: "Orta Ölçek Site Paketi",
        description:
          "{city} bölgesinde blok girişleri, otopark ve ortak alanlar için dengeli güvenlik sistemi kurulumu.",
      },
      {
        title: "Çevre Güvenliği Paketi",
        description:
          "{city} içinde geniş açık alanlı siteler için çevre kamera, kayıt ve geçiş kontrol kombinasyonu.",
      },
    ],
    cta: {
      title: "{city} apartman ve site güvenliği için teklif alın",
      description:
        "{city} içindeki apartman veya site projeniz için giriş noktalarını ve ortak alan güvenliğini birlikte planlayalım.",
      primaryLabel: "Hemen Ara",
      secondaryLabel: "İletişim Formuna Git",
    },
    faqs: [
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
    title: "İşyeri Güvenlik Sistemi",
    intro:
      "{city} içinde ofis, mağaza ve ticari işletmeler için işyeri güvenlik sistemleri kuruyoruz. Kamera, alarm ve geçiş kontrol ihtiyaçlarını işletmenin kullanım biçimine göre bir araya getiriyoruz.",
    trustBullets: [
      "Müşteri trafiği ve personel kullanımına göre planlama yapıyoruz.",
      "Günlük işletme akışını bozmadan montaj ve devreye alma sağlıyoruz.",
      "İşyeri kapanış sonrası güvenliği için net senaryolar kuruyoruz.",
    ],
    processSummary: {
      title: "İşyeri projelerinde nasıl çalışıyoruz?",
      body:
        "Satış alanı, kasa noktası, giriş çıkışlar ve arka ofis bölümlerini analiz ediyoruz. Sonrasında operasyonu aksatmadan etaplı kurulum ve teslim gerçekleştiriyoruz.",
    },
    useCaseTitle: "İşyeri güvenliğinde en sık karşılaştığımız senaryolar",
    useCaseDescription:
      "{city} içinde farklı ticari yapılarda benzer güvenlik ihtiyaçları oluşuyor. En sık hizmet verdiğimiz işyeri tipleri aşağıdadır.",
    useCases: [
      "Ofis ve idari alanlar",
      "Perakende mağazalar",
      "Kafe ve restoranlar",
      "Kasa ve stok odaları",
      "Showroom ve karşılama alanları",
      "Küçük ölçekli üretim ofisleri",
    ],
    packageTitle: "Örnek işyeri güvenlik paketleri",
    packageDescription:
      "{city} içindeki işletme ölçeklerine göre örnek güvenlik sistemi kurguları.",
    packages: [
      {
        title: "Mağaza Paketi",
        description:
          "{city} içinde satış alanı ve giriş takibi gereken mağazalar için hızlı kurulumlu çözüm.",
      },
      {
        title: "Ofis Paketi",
        description:
          "{city} bölgesinde ofis, toplantı alanı ve giriş kontrol ihtiyacı olan işletmeler için kurulum paketi.",
      },
      {
        title: "Çok Bölümlü İşletme Paketi",
        description:
          "{city} içinde satış alanı, depo ve personel bölümü birlikte bulunan işletmeler için kapsamlı güvenlik çözümü.",
      },
    ],
    cta: {
      title: "{city} işyeri güvenlik sistemi için hızlı teklif alın",
      description:
        "{city} içindeki işyeriniz için günlük operasyonu aksatmayan, gerçekten işe yarayan güvenlik altyapısını birlikte kuralım.",
      primaryLabel: "Hemen Ara",
      secondaryLabel: "İletişim Formuna Git",
    },
    faqs: [
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
    title: "Fabrika ve Depo Güvenlik Sistemi",
    intro:
      "{city} içinde fabrika, depo ve sanayi tesisleri için geniş alan güvenlik sistemleri kuruyoruz. Çevre izleme, giriş kontrol, kayıt sürekliliği ve kritik nokta takibini birlikte planlıyoruz.",
    trustBullets: [
      "Geniş alanlarda kör nokta azaltmaya odaklanıyoruz.",
      "Lojistik akışa uygun kamera ve geçiş senaryosu kurguluyoruz.",
      "Dış ortam şartlarına dayanıklı ekipman tercih ediyoruz.",
    ],
    processSummary: {
      title: "Sanayi ve depo projelerinde odaklandığımız noktalar",
      body:
        "Araç girişleri, yükleme alanları, raf koridorları ve çevre sınırlarını analiz ediyoruz. Sonrasında kayıt kapasitesi, gece görüşü ve uzaktan erişim ihtiyacına göre sistemi ölçeklendiriyoruz.",
    },
    useCaseTitle: "Fabrika ve depo projelerinde kritik kullanım alanları",
    useCaseDescription:
      "{city} içinde büyük metrekareli sahalarda en kritik güvenlik noktaları aşağıdaki bölümlerde yoğunlaşıyor.",
    useCases: [
      "Araç giriş ve çıkış noktaları",
      "Yükleme ve boşaltma alanları",
      "Depo raf koridorları",
      "Üretim hatları",
      "Açık çevre alanları",
      "Personel ve ziyaretçi girişleri",
    ],
    packageTitle: "Örnek fabrika ve depo paketleri",
    packageDescription:
      "{city} içindeki sanayi tipi projeler için örnek güvenlik sistemi kurguları.",
    packages: [
      {
        title: "Kompakt Depo Paketi",
        description:
          "{city} içinde tek depo veya küçük lojistik alanlar için giriş ve raf hattı takibi çözümü.",
      },
      {
        title: "Üretim Tesisi Paketi",
        description:
          "{city} bölgesinde üretim alanı, sevkiyat noktası ve çevre güvenliğini birlikte yöneten kurulum.",
      },
      {
        title: "Geniş Saha Paketi",
        description:
          "{city} içinde çok kapılı fabrika veya depo projeleri için ölçeklenebilir güvenlik sistemi altyapısı.",
      },
    ],
    cta: {
      title: "{city} fabrika ve depo güvenliği için keşif alın",
      description:
        "{city} içindeki tesisiniz için giriş noktaları, çevre alanı ve kayıt ihtiyacını birlikte planlayalım.",
      primaryLabel: "Hemen Ara",
      secondaryLabel: "İletişim Formuna Git",
    },
    faqs: [
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
    title: "Bakım, Servis ve Uzaktan İzleme",
    intro:
      "{city} içinde kurulu güvenlik sistemleri için bakım, servis ve uzaktan izleme desteği veriyoruz. Arıza tespiti, kayıt kontrolü, görüntü kalitesi iyileştirmesi ve temel kullanıcı sorunlarını hızlı şekilde ele alıyoruz.",
    trustBullets: [
      "Kurulu sistemin gerçek sorun kaynağını tespit ediyoruz.",
      "Bakım planı ile kayıt, bağlantı ve ekipman sağlığını kontrol ediyoruz.",
      "Uzaktan erişim ve bildirim problemlerini kullanıcıyla birlikte çözüyoruz.",
    ],
    processSummary: {
      title: "Bakım ve servis yaklaşımımız",
      body:
        "Önce mevcut sistemin arıza belirtilerini ve eksik çalışan noktalarını belirliyoruz. Ardından sahada veya uzaktan müdahale ederek kayıt, bağlantı ve görüntü problemlerini gideriyoruz.",
    },
    useCaseTitle: "Bakım ve uzaktan izleme en çok hangi ihtiyaçlarda gerekir?",
    useCaseDescription:
      "{city} içinde mevcut güvenlik altyapısında en sık karşılaştığımız servis ve bakım senaryoları aşağıdadır.",
    useCases: [
      "Görüntü gelmeyen kamera noktaları",
      "Kayıt cihazı ve disk sorunları",
      "Mobil izleme bağlantı problemleri",
      "Periyodik sistem kontrolü",
      "Arızalı dedektör veya alarm bileşenleri",
      "Eski kurulumların iyileştirilmesi",
    ],
    packageTitle: "Örnek bakım ve servis paketleri",
    packageDescription:
      "{city} içindeki mevcut sistemler için en sık talep edilen bakım ve servis kapsamları.",
    packages: [
      {
        title: "Temel Kontrol Paketi",
        description:
          "{city} içinde mevcut sistemin genel durum kontrolü, kayıt ve bağlantı testlerini kapsar.",
      },
      {
        title: "Arıza Giderme Paketi",
        description:
          "{city} bölgesinde görüntü, kayıt veya erişim sorunu yaşayan sistemler için müdahale odaklı servis.",
      },
      {
        title: "Periyodik Bakım Paketi",
        description:
          "{city} içinde düzenli kontrol, temizlik, bağlantı testi ve kullanıcı desteği gereken sistemler için bakım planı.",
      },
    ],
    cta: {
      title: "{city} bakım ve servis desteği alın",
      description:
        "{city} içindeki mevcut güvenlik sisteminiz için arıza tespiti, bakım planı ve uzaktan erişim desteğini birlikte netleştirelim.",
      primaryLabel: "Hemen Ara",
      secondaryLabel: "İletişim Formuna Git",
    },
    faqs: [
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
