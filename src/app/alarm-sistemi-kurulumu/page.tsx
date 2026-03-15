import type { Metadata } from "next";
import { getCanonicalUrlForKnownPath } from "@/lib/canonical";
import ServicePageTemplate, {
  ServicePageData,
} from "@/components/templates/ServicePageTemplate";
import { cities } from "@/data/cities";
import { serviceProblemLinks, topCityHubLinks } from "@/data/internal-links";

const canonicalUrl = getCanonicalUrlForKnownPath("/alarm-sistemi-kurulumu");

export const metadata: Metadata = {
  title: "Alarm Sistemi Kurulumu | Hırsız Alarm ve İzleme Merkezi Bağlantısı",
  description:
    "Ev ve işyeri için hırsız alarm sistemi kurulumu. Kablosuz ve kablolu seçenekler, GSM+internet çift bağlantı, izleme merkezi entegrasyonu. Keşif ve montaj.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Alarm Sistemi Kurulumu | Hırsız Alarm ve İzleme Merkezi Bağlantısı",
    description:
      "Hırsız alarm sistemi kurulumu. Kablosuz/kablolu, GSM+internet çift hat, izleme merkezi bağlantısı.",
    url: canonicalUrl,
    siteName: "Güvenlik Servisi",
    locale: "tr_TR",
    type: "website",
  },
};

const data: ServicePageData = {
  slug: "alarm-sistemi-kurulumu",
  title: "Alarm Sistemi Kurulumu",
  subtitle:
    "Ev ve işyeriniz için hırsız alarm sistemi kurulumu. Kablosuz veya kablolu seçenekler, GSM+internet çift hat ve isteğe bağlı izleme merkezi bağlantısı.",
  description:
    "Alarm sistemi yalnızca oluşabilecek bir tehlikeyi bildirmek için değil; aynı zamanda caydırıcılık ve olay anında hızlı müdahale için kurulur. Doğru sensör seçimi, sinyal hattı güvenliği ve bölge planlaması birlikte düşünülmesi gereken adımlardır.\n\nKablolu ve kablosuz seçenekleri mekanınızın yapısına göre değerlendiriyoruz. GSM ve internet çift bağlantılı panellerle sinyal kesilmeden iletim sağlıyoruz.\n\nKurulum sonrası mobil uygulama üzerinden alarm durumunu izleyebilir, bölge ayarlarını yönetebilir ve geçmiş olaylara erişebilirsiniz. İzleme merkezi bağlantısı da isteğe bağlı olarak sunulmaktadır.",
  heroBadge: "Sensör planlaması • Montaj • İzleme bağlantısı",
  heroTrustItems: [
    "Ücretsiz keşif ve bölge planlaması",
    "GSM + internet çift hatlı iletim",
    "Mobil uygulama ile uzaktan kontrol",
    "Yedek batarya ile kesintisiz çalışma",
  ],
  heroAdvantages: [
    {
      title: "Çift hatlı sinyal güvenliği",
      text: "GSM ve internet aynı anda çalışır. Bir hat devre dışı kalsa bile alarm iletimi kesilmez.",
    },
    {
      title: "Mekanınıza özel bölge planı",
      text: "Giriş noktaları, iç alanlar ve hassas bölgeler ayrı ayrı tanımlanır; her bölge bağımsız çalışır.",
    },
  ],
  heroPanel: {
    title: "Alarm kurulumunda neye odaklanırız",
    body: [
      "Kapı, pencere ve iç alan giriş noktalarını analiz ederek doğru sensör tipini ve yerleşimini belirliyoruz.",
      "Panel seçimini GSM+internet çift hat desteği, bölge sayısı ve genişleme kapasitesine göre yapıyoruz.",
      "Kurulum sonrası tüm bölgeleri test ediyor, mobil uygulamayı aktif hale getirip kullanıcıya teslim ediyoruz.",
    ],
  },

  /* ── Bu Sayfa Kimler İçin ── */
  targetAudience: {
    title: "Alarm Sistemi Kurulumu Kimler İçin?",
    subtitle:
      "Alarm sistemi farklı mekan ve risk profillerinde ihtiyaç duyulur. Aşağıdaki senaryolardan biri size uyuyorsa profesyonel kurulum doğru adımdır.",
    items: [
      {
        title: "Ev ve Konut Sahipleri",
        description:
          "Mesai saatlerinde veya tatil dönemlerinde evin boş kalması durumunda giriş noktaları koruması ve anlık bildirim.",
      },
      {
        title: "Yazlık ve Bağ Evi Sahipleri",
        description:
          "Uzun süreli boş kalan mülklerde GSM tabanlı uzaktan izleme ve siren ile caydırıcılık.",
      },
      {
        title: "Mağaza ve Dükkan Sahipleri",
        description:
          "Mesai dışı otomatik devreye giren alarm ile kasa bölgesi, depo ve vitrin koruması.",
      },
      {
        title: "Ofis ve Klinik Yöneticileri",
        description:
          "Çalışma saatleri dışında hassas alanların bölgesel alarm ile korunması ve personel giriş takibi.",
      },
      {
        title: "Depo ve Atölye İşletmecileri",
        description:
          "Geniş alanlarda çevre alarm, hareket algılama ve dış mekan sirenleriyle 7/24 caydırıcı koruma.",
      },
      {
        title: "Sigorta Zorunluluğu Olanlar",
        description:
          "Sigorta poliçesi gereği alarm sistemi belgesi istenen işyeri ve ticari mülk sahipleri.",
      },
    ],
  },

  /* ── En Sık Yaşanan Sorunlar ── */
  commonProblems: {
    title: "Alarm Sistemi Kurulumunda En Sık Yaşanan Sorunlar",
    subtitle:
      "Bu sorunlardan birini yaşıyorsanız, doğru sensör seçimi ve bölge planlaması ile çözüm mümkündür.",
    items: [
      {
        title: "Yanlış Alarm (False Alarm) Sorunu",
        description:
          "Yanlış sensör tipi veya yerleşimi yüzünden alarm gereksiz yere çalar. Evcil hayvan, hava akımı veya titreşim kaynaklı yanlış tetiklemeler güven kaybına yol açar.",
      },
      {
        title: "Sinyal İletim Güvenliği Eksikliği",
        description:
          "Tek hatlı (sadece GSM veya sadece internet) iletim, hat kesildiğinde alarm bildiriminin ulaşmaması riskini taşır.",
      },
      {
        title: "Yetersiz Bölge Planlaması",
        description:
          "Giriş noktaları, iç alanlar ve hassas bölgeler birbirinden ayrılmadığında tüm alan tek profille çalışır. Ev/dışarı modu esnek kullanılamaz.",
      },
      {
        title: "Elektrik Kesintisinde Sistem Durması",
        description:
          "Yedek bataryası olmayan veya düşük kapasiteli batarya kullanan paneller kesintide devre dışı kalır.",
      },
      {
        title: "Eski Panel ve Sensör Uyumsuzluğu",
        description:
          "Eski nesil paneller yeni kablosuz sensörlerle veya mobil uygulamalarla uyumlu çalışmaz. Güncelleme gerektiren bir kod altyapısına sahiptir.",
      },
      {
        title: "İzleme Merkezi Belirsizliği",
        description:
          "İzleme merkezi bağlantısının zorunlu mu opsiyonel mi olduğu, aylık maliyeti ve olay anında ne yapıldığı konusunda belirsizlik.",
      },
      {
        title: "Bakım ve Muhatap Sorunu",
        description:
          "Kurulum sonrası sensör arızası, batarya değişimi veya panel güncelleme için muhatap bulunamıyor.",
      },
    ],
  },

  authorityTitle:
    "Neden Doğru Sensör Seçimi ve Bölge Planlaması Belirleyicidir?",
  authorityBody: [
    "Birçok alarm sistemi kurulduktan sonra ya gereksiz yere çalar ya da olay anında tepki vermez. Her iki durumun da temel sebebi yanlış sensör seçimi veya eksik bölge planlamasıdır.",
    "Profesyonel kurulumda amaç mümkün olduğunca fazla sensör değil; doğru noktalara doğru tipleri yerleştirmektir. Evcil hayvan dostu PIR, manyetik kontak ve cam kırılma dedektörü gibi seçenekler mekanın gerçek ihtiyacına göre kombinlenir.",
    "Doğru planlanan alarm sistemi hem yanlış alarm oranını minimuma indirir hem de gerçek olaylarda güvenilir bildirim sağlar.",
  ],
  authorityNote: {
    title: "Teklif almak için",
    body: "Mekan tipinizi (ev/işyeri), tahmini oda ve kapı sayısını paylaşmanız yeterli. Bölge planını keşifte birlikte oluşturuyoruz.",
  },
  features: [
    "PIR hareket sensörleri (evcil hayvan uyumlu seçenek)",
    "Manyetik kapı/pencere kontakları",
    "Cam kırılma dedektörü",
    "Yüksek desibel iç/dış siren",
    "GSM + internet çift hat iletim",
    "Yedek batarya (8–24 saat)",
    "Mobil uygulama ile uzaktan kontrol",
    "7/24 izleme merkezi opsiyonu",
  ],

  /* ── Alan Bazlı Çözümler ── */
  areaSolutions: {
    title: "Alan Bazlı Alarm Çözümleri",
    subtitle:
      "Her alan farklı sensör tipi ve bölge yapılandırması gerektirir. Mekanınızın yapısına göre nasıl alarm planı oluşturduğumuzu görün.",
    items: [
      {
        area: "Giriş Kapıları ve Pencereler",
        description:
          "Ana kapı, arka kapı ve zemin kat pencereleri — ilk giriş noktalarında manyetik kontak ve siren ile anında uyarı.",
        features: [
          "Manyetik kapı/pencere kontakları",
          "Kapı açılma anında anlık bildirim",
          "Bağımsız bölge tanımlaması",
        ],
      },
      {
        area: "İç Alanlar ve Koridorlar",
        description:
          "Salon, koridor ve merdiven boşluğunda hareket algılama ile iç alan koruması. Evcil hayvan duyarlılığı ayarlanabilir.",
        features: [
          "PIR hareket sensörleri",
          "Evcil hayvan dostu mod",
          "Bölgesel kurma/devre dışı bırakma",
        ],
      },
      {
        area: "Kasa ve Hassas Bölgeler",
        description:
          "Kasa, veri odası veya depo gibi yüksek değerli alanlar için 7/24 aktif bölge. Giriş anında alarm ve bildirim.",
        features: [
          "7/24 aktif bölge yapılandırması",
          "Darbe ve titreşim sensörü",
          "Anlık çoklu bildirim (SMS + uygulama)",
        ],
      },
      {
        area: "Çevre Hattı ve Bahçe",
        description:
          "Bahçe duvarları, çit hattı ve açık alanlar. Dış mekan hareket algılama ve siren ile caydırıcı koruma.",
        features: [
          "Dış mekan PIR sensörleri",
          "Yüksek desibel dış siren",
          "Hava koşullarına dayanıklı sensörler",
        ],
      },
      {
        area: "Cam ve Vitrin Alanları",
        description:
          "Mağaza vitrinleri ve zemin kat cam yüzeyleri. Cam kırılma dedektörü ile fiziksel giriş öncesi uyarı.",
        features: [
          "Akustik cam kırılma dedektörü",
          "Siren + ışıklı uyarı",
          "Kapı kontağı ile kombine koruma",
        ],
      },
    ],
  },

  /* ── Mid-page CTA ── */
  midPageCta: {
    title: "Mekanınız İçin Alarm Bölge Planını Birlikte Oluşturalım",
    subtitle:
      "Mekan tipinizi, oda sayınızı ve öncelikli ihtiyacınızı paylaşın. Bölge planını keşifte birlikte hazırlayalım.",
    ctaLabel: "Ücretsiz Keşif Randevusu Alın",
  },

  /* ── Çözüm Seviyeleri ── */
  solutionTiers: {
    title: "İhtiyaca Göre Alarm Sistemi Seviyeleri",
    subtitle:
      "Her mekan aynı kapsamda alarm sistemi gerektirmez. İhtiyacınıza en yakın seviyeyi birlikte belirleyelim.",
    ctaLabel: "Mekanınıza Uygun Seviyeyi Belirleyelim",
    tiers: [
      {
        name: "Temel Ev Paketi",
        targetAudience:
          "Daire, küçük ev veya yazlık gibi 2–4 giriş noktalı mekanlar.",
        solves:
          "Kapı ve pencere koruması, mobil bildirim ve temel caydırıcılık ihtiyacını karşılar.",
        components: [
          "Alarm paneli (GSM + internet çift hat)",
          "2–4 manyetik kontak (kapı/pencere)",
          "1–2 PIR hareket sensörü",
          "İç mekan siren",
          "Mobil uygulama ile uzaktan kontrol",
          "Yedek batarya (8+ saat)",
        ],
        upgradeNote:
          "Dış mekan siren, cam kırılma dedektörü veya izleme merkezi bağlantısı eklemek istendiğinde.",
      },
      {
        name: "Standart İşyeri Paketi",
        targetAudience:
          "Mağaza, ofis veya klinik gibi 4–8 giriş noktalı mekanlar.",
        solves:
          "Çoklu bölge yönetimi, kasa koruması, mesai dışı otomatik devreye alma ve detaylı olay raporu ihtiyacını karşılar.",
        components: [
          "Alarm paneli (GSM + internet çift hat)",
          "4–8 manyetik kontak",
          "2–4 PIR hareket sensörü",
          "Cam kırılma dedektörü",
          "İç + dış mekan siren",
          "Kullanıcı bazlı şifre ve yetki tanımlama",
          "Mobil uygulama + SMS bildirim",
        ],
        upgradeNote:
          "İzleme merkezi aboneliği, kamera entegrasyonu veya bölge genişletme istendiğinde.",
      },
      {
        name: "Profesyonel Tesis Paketi",
        targetAudience: "Fabrika, depo veya çok katlı yapılar (8+ bölge).",
        solves:
          "Çok bölgeli yapıda bağımsız alarm yönetimi, çevre hattı koruması ve izleme merkezi bağlantısı ihtiyacını karşılar.",
        components: [
          "Genişleyebilir alarm paneli",
          "8+ manyetik kontak ve PIR sensör",
          "Dış mekan çevre alarm sensörleri",
          "Yüksek desibel dış siren (çoklu)",
          "İzleme merkezi bağlantısı (7/24)",
          "Kullanıcı ve bölge bazlı detaylı raporlama",
          "Bakım sözleşmesi",
        ],
        upgradeNote:
          "Kamera, kartlı geçiş veya yangın alarm entegrasyonu eklendiğinde.",
      },
    ],
  },

  /* ── Neden Profesyonel Kurulum ── */
  whyIntegrated: {
    title: "Neden Profesyonel Alarm Kurulumu Hazır Paket Alımdan Farklıdır?",
    subtitle:
      "Hazır alarm paketi alıp kendiniz kurmak basit görünebilir. Ancak doğru korumanın farkı sensör sayısında değil, plandadır:",
    items: [
      {
        title: "Bölge Planı Sahada Oluşturulur",
        description:
          "Giriş noktaları, iç alanlar ve hassas bölgeler sahada analiz edilerek bağımsız bölgeler tanımlanır. Evde/dışarıda profilleri doğru çalışır.",
      },
      {
        title: "Sensör Tipi İhtiyaca Göre Seçilir",
        description:
          "Evcil hayvan dostu PIR, cam kırılma dedektörü ve manyetik kontak kombinasyonu mekanın yapısına göre belirlenir. Yanlış alarm oranı minimuma iner.",
      },
      {
        title: "Sinyal Güvenliği Çift Hatlı Sağlanır",
        description:
          "GSM ve internet aynı anda çalışır. Bir hat kesilse bile alarm bildirimi ulaşır. Tek hatlı sistemlerin güvenlik açığı kapatılır.",
      },
      {
        title: "Panel Kapasitesi Geleceğe Göre Seçilir",
        description:
          "İleride sensör eklemek veya izleme merkezi bağlantısı kurmak isterseniz, panel kapasitesi buna uygun seçilir.",
      },
      {
        title: "Montaj Sonrası Tüm Bölgeler Test Edilir",
        description:
          "Her sensör ayrı ayrı test edilir, bölge profilleri kontrol edilir. Yanlış alarm riski kurulum aşamasında tespit edilir.",
      },
      {
        title: "Bakım ve Garanti Belli Süreçle Yürür",
        description:
          "Batarya değişimi, sensör arızası ve panel güncelleme için tek muhatap. Destek süreci baştan tanımlıdır.",
      },
    ],
  },

  /* ── Keşif ve Teklif Süreci ── */
  discoveryProcess: {
    title: "Alarm Sistemi Kurulumunda Süreç Nasıl İşler?",
    subtitle:
      "İlk iletişimden sistemi çalışır halde teslime kadar net ve şeffaf bir süreç izliyoruz.",
    steps: [
      {
        step: 1,
        title: "İhtiyaç Bilgisini Alıyoruz",
        description:
          "Mekan tipi, oda sayısı, giriş noktaları ve özel beklentilerinizi form, telefon veya WhatsApp ile öğreniyoruz.",
      },
      {
        step: 2,
        title: "Telefonla Ön Değerlendirme",
        description:
          "Teknik ekibimiz sizi arayarak panel tipi, sensör kapsamı ve bütçe aralığını netleştiriyor.",
      },
      {
        step: 3,
        title: "Ücretsiz Yerinde Keşif",
        description:
          "Sahaya gelerek kapı, pencere ve iç alanları inceliyoruz. Bölge planını yerinde hazırlıyoruz.",
      },
      {
        step: 4,
        title: "Teklif ve Bölge Planı",
        description:
          "Keşif sonrası sensör listesi, panel kapasitesi, bölge yapılandırması ve net fiyat teklifini gönderiyoruz.",
      },
      {
        step: 5,
        title: "Montaj ve Devreye Alma",
        description:
          "Profesyonel ekibimiz montajı gerçekleştiriyor, tüm sensörleri test ediyor ve sistemi devreye alıyor.",
      },
      {
        step: 6,
        title: "Teslim ve Kullanıcı Eğitimi",
        description:
          "Mobil uygulama kurulumu, bölge profilleri eğitimi ve şifre yönetimini birlikte yapıyoruz. Bakım seçeneklerini sunuyoruz.",
      },
    ],
  },

  decisionBlocks: [
    {
      title: "Hangi Durumda Alarm Sistemi Kurulumu Doğru Seçimdir?",
      description:
        "Alarm sistemi her mekan için uygun olmayabilir. Ancak aşağıdaki senaryolarda doğru başlangıç noktasıdır.",
      items: [
        "Ev veya işyeriniz mesai dışında uzun süre boş kalıyorsa ve giriş güvenliği öncelikli ise.",
        "Mevcut alarm sisteminiz yok veya eski panel artık güvenilir sinyal vermiyor.",
        "Kamera yerine veya kameraya ek olarak caydırıcılık ve anlık bildirim istiyorsanız.",
        "Sigorta geçerliliği veya iş güvenliği mevzuatı için alarm sistemi zorunluluğu varsa.",
      ],
    },
    {
      title: "Hangi Durumda Farklı Bir Hizmet Daha Doğru Olabilir?",
      items: [
        "Giriş noktalarından ziyade iç alanların görüntü kaydı öncelikli ise: Kamera sistemi kurulumu daha doğru başlangıçtır.",
        "Kapı güvenliği ve personel giriş kontrolü ana ihtiyaç ise: Kartlı geçiş sistemi değerlendirilmelidir.",
        "Yangın güvenliği yasal zorunluluk ise: Yangın alarm sistemi ayrıca planlanmalıdır.",
        "Mevcut alarm sisteminde arıza veya sensör hatası varsa: Teknik servis talebinizi iletebilirsiniz.",
      ],
    },
  ],
  scopeDetails: {
    title: "Kurulumda Neler Dahil, Neler Ayrıca Değerlendirilir?",
    description:
      "Standart bir alarm sistemi kurulumunda aşağıdaki başlıklar dahil sunulur. Bazı ihtiyaçlar proje ölçeğine göre ayrıca değerlendirilir.",
    includedTitle: "Standart kurulumda dahil",
    includedItems: [
      "Ücretsiz keşif ve bölge planlaması",
      "Alarm paneli, sensörler ve siren temini ve montajı",
      "GSM + internet çift hat bağlantısı",
      "Mobil uygulama kurulumu ve kullanıcı teslimi",
      "Saha testleri ve devreye alma",
    ],
    additionalTitle: "Projeye göre ayrıca değerlendirilen başlıklar",
    additionalItems: [
      "İzleme merkezi aboneliği (aylık ücretli)",
      "Ek bölgeler için ilave sensör ihtiyacı",
      "Kablolu sistem için kanal açma veya montaj altyapısı",
      "Mevcut eski panel kaldırma veya revizyon",
    ],
  },
  pricingFactors: {
    description:
      "Alarm sistemi fiyatı, yalnızca panel modeline değil mekanın gerçek ihtiyacına bağlıdır.",
    items: [
      "Oda sayısı ve giriş noktası sayısı sensör adedini ve panel kapasitesini belirler.",
      "Kablosuz sensörler kablolama maliyetini düşürür ama batarya bakımı gerektirir; kablolu sensörler daha kararlı çalışır.",
      "İzleme merkezi bağlantısı opsiyonel olup aylık abonelik maliyeti içerir.",
      "İç mekan ile dış mekan sirenlerinin sayısı toplam maliyeti etkiler.",
      "Mevcut altyapı veya panel varsa revizyon ile maliyet düşürülebilir.",
    ],
  },
  venueTypes: [
    {
      title: "Ev ve Konut",
      description:
        "Kapı, pencere sensörleri ve iç alan koruması. Evdeyken/dışarıdayken farklı bölge profilleri.",
    },
    {
      title: "Yazlık ve Bağ Evi",
      description:
        "Uzun süreli boş kalan mülkler için GSM tabanlı uzaktan takip ve anlık bildirim.",
    },
    {
      title: "Mağaza ve Dükkan",
      description:
        "Mesai dışı otomatik devreye giren alarm. Kasa bölgesi ve depo koruması.",
    },
    {
      title: "Ofis",
      description:
        "Çalışma saatleri sonrası bölgesel alarm yapılandırması ve giriş noktası koruması.",
    },
    {
      title: "Depo ve Atölye",
      description:
        "Çevre alarm, hareket algılama ve dış mekan sirenleriyle caydırıcı koruma.",
    },
  ],

  /* ── Güven Blokları ── */
  trustBlocks: {
    title: "Somut Güvencelerimiz",
    subtitle: "Genel vaatler yerine size sunduğumuz somut taahhütler:",
    items: [
      { text: "Aynı gün geri dönüş garantisi" },
      { text: "Ücretsiz sahada keşif ve bölge planlaması" },
      { text: "GSM + internet çift hat güvenliği" },
      { text: "Kurulum sonrası tüm bölge testleri yapılır" },
      { text: "Mobil uygulama eğitimi dahil" },
      { text: "İstanbul ve çevre illerde ücretsiz keşif" },
      { text: "Tek muhatap: proje yöneticisi atanır" },
      { text: "Bakım ve batarya değişim desteği" },
    ],
  },

  /* ── İç Linkler ── */
  internalLinks: {
    title: "İlgili Hizmet ve Çözüm Sayfaları",
    subtitle:
      "Alarm sistemi dışında ihtiyaç duyabileceğiniz diğer güvenlik çözümlerini inceleyin.",
    links: [
      {
        href: "/kamera-sistemi-kurulumu",
        label: "Kamera Sistemi Kurulumu",
        description:
          "Alarma ek olarak görüntü kaydı ve uzaktan izleme ile daha kapsamlı güvenlik.",
      },
      {
        href: "/kartli-gecis-sistemi-kurulumu",
        label: "Kartlı Geçiş Sistemi Kurulumu",
        description:
          "Personel giriş kontrolü ve kapı güvenliği için kartlı geçiş ve turnike çözümleri.",
      },
      {
        href: "/yangin-alarm-sistemi-kurulumu",
        label: "Yangın Alarm Sistemi Kurulumu",
        description:
          "Yasal zorunluluğa uygun yangın algılama sistemi. Proje ve belgelendirme dahil.",
      },
      {
        href: "/apartman-site-guvenlik-sistemi",
        label: "Apartman ve Site Güvenlik Sistemi",
        description:
          "Alarm, kamera ve kartlı geçiş bileşenlerini tek projede kapsayan komple site güvenliği.",
      },
      {
        href: "/bakim-servis-uzaktan-izleme",
        label: "Bakım, Servis ve Uzaktan İzleme",
        description:
          "Kurulum sonrası periyodik bakım, sensör kontrolü ve teknik destek hizmeti.",
      },
      {
        href: "/paketler-ve-fiyatlandirma",
        label: "Paketler ve Fiyatlandırma",
        description:
          "Mekan tipi ve bölge sayısına göre örnek alarm paketleri ve fiyat aralıkları.",
      },
    ],
  },
  problemLinks: {
    title: "Alarm Kurulumu ile Birlikte İncelenen Sorun Sayfaları",
    subtitle:
      "Mevcut panel, sensör veya yanlış alarm problemi yaşıyorsanız kurulum kararınızdan önce ilgili arıza rehberine göz atın.",
    links: serviceProblemLinks["alarm-sistemi-kurulumu"],
  },

  finalCtaTitle: "Alarm Sistemi Kurulumu İçin Hemen Teklif Alın",
  finalCtaSubtitle:
    "Mekanınıza uygun alarm çözümü için ücretsiz keşif randevusu alın. GSM+internet çift hatlı güvenli iletim.",
  whatsappMessage:
    "Merhaba, alarm sistemi kurulumu hakkında teklif almak istiyorum.",
  segments: [
    {
      title: "Konutlar İçin Alarm Sistemi",
      content:
        "Kapı, pencere ve iç alan sensörleri ile evinizin tüm giriş noktalarını koruyoruz. Evdeyken/dışarıdayken farklı bölge profilleri ayarlanabilir.",
      href: "/apartman-site-guvenlik-sistemi",
    },
    {
      title: "İşyerleri İçin Alarm Sistemi",
      content:
        "Mesai saatleri dışında otomatik devreye giren alarm. Kasa bölgesi, depo ve giriş noktaları için hassas bölge tanımlaması yapılır.",
      href: "/isyeri-guvenlik-sistemi",
    },
    {
      title: "Fabrika ve Depolar İçin Alarm",
      content:
        "Geniş tesislerde çok bölgeli alarm yapılandırması. Her bölge bağımsız yönetilir, detaylı giriş/çıkış raporlaması sunulur.",
      href: "/fabrika-depo-guvenlik-sistemi",
    },
  ],
  faq: [
    {
      question: "Kablosuz mu yoksa kablolu mu tercih etmeliyim?",
      answer:
        "Hazır yapılarda kablosuz, inşaat aşamasındaki veya kablo altyapısı uygun yapılarda kablolu avantajlıdır. Keşifte mekanınıza uygun seçeneği birlikte belirliyoruz.",
    },
    {
      question: "Elektrik kesintisinde alarm çalışmaya devam eder mi?",
      answer:
        "Evet. Yedek batarya ile 8–24 saat bağımsız çalışır. Batarya durumu mobil uygulama üzerinden izlenebilir.",
    },
    {
      question: "İzleme merkezi zorunlu mu?",
      answer:
        "Hayır, opsiyoneldir. İzleme merkezi olmadan da telefona anlık bildirim ve siren uyarısı çalışır. Merkez bağlantısı ek güvence olarak sunulur.",
    },
    {
      question: "Yanlış alarm sorunu yaşar mıyım?",
      answer:
        "Doğru sensör seçimi ve yerleşimi ile yanlış alarm oranı minimumdur. Evcil hayvan dostu PIR sensörleri de mevcuttur.",
    },
    {
      question: "Alarm montajı ne kadar sürer?",
      answer:
        "Konut için genellikle aynı gün, işyerleri için 1–2 gün. Keşifte net süre bildirilir.",
    },
  ],
  defaultService: "alarm",
  blogPosts: [
    {
      slug: "alarm-sistemi-fiyatlari-2026",
      title: "Alarm Sistemi Fiyatları 2026",
      excerpt:
        "Konut ve işyeri için alarm sistemi kurulum maliyeti ne kadar? Güncel fiyatlar, kablolu-kablosuz farkları ve paket örnekleri.",
    },
    {
      slug: "ev-guvenlik-kamera-sistemi-rehberi",
      title: "Ev Güvenlik Kamera Sistemi Rehberi",
      excerpt:
        "Konut güvenliğinde kamera türleri, kurulum noktaları, maliyet ve uzaktan izleme rehberi.",
    },
    {
      slug: "kablosuz-alarm-sistemi-rehberi",
      title: "Kablosuz Alarm Sistemi Rehberi",
      excerpt:
        "Kablosuz alarm sistemi hakkında kapsamlı teknik rehber. Çalışma prensibi, avantajları, seçim kriterleri ve fiyat bilgileri.",
    },
    {
      slug: "isyeri-alarm-sistemi-secimi",
      title: "İşyeri Alarm Sistemi Nasıl Seçilir?",
      excerpt:
        "İşyeri alarm sistemi seçiminde dikkat edilmesi gerekenler, sistem tipleri, bileşenler ve fiyat rehberi.",
    },
    {
      slug: "alarm-sistemi-nasil-calisir",
      title: "Alarm Sistemi Nasıl Çalışır?",
      excerpt:
        "Alarm sistemi çalışma prensibi, bileşenleri ve farklı alarm türleri hakkında teknik rehber.",
    },
  ],
  ctaContent: {
    badge: "Keşif • Bölge planı • Teklif",
    title: "Alarm Sistemi İçin Ücretsiz Keşif ve Teklif Alın",
    subtitle:
      "Mekan tipinizi ve yaklaşık oda sayısını paylaşın. Bölge planını keşifte birlikte oluşturalım.",
    trustItems: [
      "Ücretsiz sahada keşif ve bölge planlaması",
      "GSM + internet çift hat güvenliği",
      "Sensör yerleşimi ve devreye alma",
      "Ürün garantisi ve satış sonrası destek",
    ],
    supportCards: [
      {
        title: "Mekanınıza özel bölge planı",
        text: "Giriş noktaları, iç alanlar ve hassas bölgeleri ayrı ayrı planlıyoruz.",
      },
      {
        title: "Çalışan sistem teslimi",
        text: "Montaj, mobil uygulama, bölge testleri ve kullanıcı eğitimi ile sistemi hazır teslim ediyoruz.",
      },
    ],
  },
  authorityBeforeFaq: {
    title: "Türkiye Genelinde Alarm Sistemi Kurulumu Hizmeti",
    description:
      "Alarm sistemi kurulum hizmetini Türkiye'nin büyük şehirlerinde sunuyoruz. Şehir bazlı uygulama detaylarını aşağıdaki sayfalardan inceleyebilirsiniz.",
    links: [
      {
        href: "/istanbul/alarm-sistemi-kurulumu",
        label: "İstanbul Alarm Sistemi Kurulumu",
      },
      {
        href: "/ankara/alarm-sistemi-kurulumu",
        label: "Ankara Alarm Sistemi Kurulumu",
      },
      {
        href: "/izmir/alarm-sistemi-kurulumu",
        label: "İzmir Alarm Sistemi Kurulumu",
      },
    ],
  },
  authorityAfterFaq: {
    title: "Alarm Sistemi Kurulumu Hizmeti Verilen Şehirler",
    links: [
      { href: "/istanbul/alarm-sistemi-kurulumu", label: "İstanbul" },
      { href: "/ankara/alarm-sistemi-kurulumu", label: "Ankara" },
      { href: "/izmir/alarm-sistemi-kurulumu", label: "İzmir" },
      { href: "/bursa/alarm-sistemi-kurulumu", label: "Bursa" },
      { href: "/antalya/alarm-sistemi-kurulumu", label: "Antalya" },
    ],
  },
  cityServiceLinks: {
    title: "Alarm Sistemi Kurulumu — Şehir Bazlı Hizmet Sayfaları",
    description:
      "Hizmet verdiğimiz her şehirde alarm sistemi kurulumu için detaylı bilgi ve teklif sayfalarına aşağıdan ulaşabilirsiniz.",
    links: cities.map((city) => ({
      href: `/${city.slug}/alarm-sistemi-kurulumu`,
      label: `${city.name} Alarm Sistemi Kurulumu`,
      description: `${city.name} içinde alarm sistemi kurulumu için keşif ve teklif alın.`,
    })),
  },
  cityHubLinks: {
    title: "Şehir Bazlı Güvenlik Hizmetleri",
    description:
      "Alarm kurulumu talebinin yoğun olduğu şehirlerdeki güvenlik çözümlerimizi ve hizmet kapsamımızı inceleyin.",
    links: topCityHubLinks,
  },
};

export default function AlarmSayfasi() {
  return <ServicePageTemplate data={data} />;
}
