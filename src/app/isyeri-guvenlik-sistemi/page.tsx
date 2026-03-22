import type { Metadata } from "next";
import { getCanonicalUrlForKnownPath } from "@/lib/canonical";
import ServicePageTemplate, {
  ServicePageData,
} from "@/components/templates/ServicePageTemplate";
import { cities } from "@/data/cities";
import { serviceProblemLinks, topCityHubLinks } from "@/data/internal-links";
import { buildSeoMetadata } from "@/lib/seo/metadata";

const canonicalUrl = getCanonicalUrlForKnownPath("/isyeri-guvenlik-sistemi");

export const metadata: Metadata = buildSeoMetadata({
  title:
    "İşyeri Güvenlik Sistemi | Mağaza Kamera, Dükkan Alarm, Yangın – Tek Elden",
  description:
    "Ofis, Cafe, Hotel, Mağaza kamera sistemi, dükkan alarm sistemi, işyeri yangın alarm ve gaz dedektörü tek elden kurulum. Kartlı geçiş, kapı güvenlik, duman dedektörü. Aynı gün dönüş, ücretsiz keşif.",
  canonical: canonicalUrl,
  openGraph: {
    title: "İşyeri Güvenlik Sistemi | Kamera, Alarm, Yangın – Tek Sözleşme",
    description:
      "İşyeriniz için kamera, alarm ve yangın alarm sistemi tek elden. Mesai saati otomasyonu ve mobil izleme dahil.",
    url: canonicalUrl,
    siteName: "Güvenlik Servisi",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/images/diagrams/isyeri-kamera-sistemi-yerlesim-plani.webp",
        alt: "İşyeri kamera sistemi yerleşim planı",
      },
    ],
  },
});

const data: ServicePageData = {
  slug: "isyeri-guvenlik-sistemi",
  title: "İşyeri Güvenlik Sistemi",
  subtitle:
    "Mağaza, ofis, restoran veya oteliniz için kamera, hırsız alarm ve yangın alarm sistemlerini tek elden kuruyor, çalışma saatlerinize göre otomatik yapılandırıyoruz. Mesai biter, alarm devreye girer.",
  description:
    "İşyeri güvenliği hem yasal bir zorunluluk hem de iş sürekliliğinin temel bileşenidir. Bir mağazada hırsızlık ve stok kaybı riski, bir restoranda mutfak yangın riski, bir ofiste veri odası güvenliği, bir depoda yetkisiz erişim — her işyeri farklı bir sorunla karşı karşıyadır.\n\nMağaza kamera sistemi, dükkan alarm sistemi, işyeri yangın alarm sistemi ve kapı güvenlik sistemleri gibi bileşenlerin ayrı firmalardan kurulması entegrasyon sorunu yaratır. Alarm paneli ile kamera kaydı eşleşmez; arıza olduğunda muhatap bulunamaz.\n\nBiz tüm bileşenleri tek projede planlıyor, mesai programınıza göre otomatik alarm zamanlaması yapıyor ve mobil uygulama ile uzaktan erişim sağlıyoruz. Mağaza güvenlik sistemleri ve işyeri alarm sistemleri konusunda sigorta ve ruhsat belgelerinizi de hazırlıyoruz.",
  heroBadge: "Kamera • Alarm • Yangın • Mesai otomasyonu",
  heroTrustItems: [
    "Kamera, hırsız alarm ve yangın alarm tek projede kurulur",
    "Mesai saatine göre otomatik alarm devreye girer",
    "Telefonunuzdan canlı izleme ve alarm kontrol",
    "Sigorta ve ruhsat belgeleriniz hazır teslim edilir",
  ],
  heroAdvantages: [
    {
      title: "Mesai kapanışında otomatik güvenlik",
      text: "İşyerinizin çalışma saatlerine göre alarm zamanlaması yapılır. Kapanışta unutma riski olmadan devreye girer.",
    },
    {
      title: "Tek elden bütün bileşenler",
      text: "Kamera, alarm, yangın alarm ve gerekirse kartlı geçiş tek proje, tek sözleşme ve tek muhatap ile kurulur.",
    },
  ],
  heroPanel: {
    title: "İşyeri güvenlik projesinde neye odaklanırız",
    body: [
      "İşyerinizin giriş noktalarını, kasa alanını, depo bölümünü ve arka kapıyı değerlendirerek risk haritasını çıkarıyoruz.",
      "Kamera açılarını, alarm bölgelerini ve yangın dedektör yerleşimini tek projede koordineli planlıyoruz.",
      "Mesai saati otomasyonu, mobil erişim ve kullanıcı yetkilerini işletmenizin çalışma düzenine göre ayarlıyoruz.",
    ],
  },
  heroCtaLabel: "İşyeriniz İçin Teklif Alın",

  /* ── Hedef Kitle ── */
  targetAudience: {
    title: "Bu Hizmet Kime Uygun?",
    subtitle:
      "İşyeri güvenliği arıyorsanız ve aşağıdaki profillerden biri sizse, bu sayfa tam size göre.",
    items: [
      {
        title: "Mağaza ve Dükkan Sahipleri",
        description:
          "Hırsızlık riski, stok kaybı ve mesai dışı güvenlik sorunu yaşayan perakende işletme sahipleri.",
      },
      {
        title: "Ofis ve Şirket Yöneticileri",
        description:
          "Çalışan erişim kontrolü, veri odası güvenliği ve giriş-çıkış takibi ihtiyacı olan kurumsal yöneticiler.",
      },
      {
        title: "Restoran ve Kafe İşletmecileri",
        description:
          "Mutfak yangın riski, kasa güvenliği ve personel giriş kontrolüne ihtiyaç duyan yeme-içme sektörü işletmecileri.",
      },
      {
        title: "Otel ve Konaklama Yöneticileri",
        description:
          "Kat güvenliği, resepsiyon kontrolü ve yangın alarm zorunluluğu olan konaklama tesisi yöneticileri.",
      },
      {
        title: "Küçük Zincir İşletmeler",
        description:
          "Birden fazla şubeyi uzaktan izlemek, şubeler arası standardizasyon sağlamak ve merkezi kontrol kurmak isteyen işletme sahipleri.",
      },
      {
        title: "Mevcut Sistemini Yükseltmek İsteyenler",
        description:
          "Eski analog kamera veya basit alarm sistemini modern IP altyapısına geçirmek isteyen işyerleri.",
      },
    ],
  },

  /* ── En Sık Yaşanan Sorunlar ── */
  commonProblems: {
    title: "İşyerlerinde En Sık Yaşanan Güvenlik Sorunları",
    subtitle:
      "Bu sorunlardan bir veya birkaçını yaşıyorsanız, profesyonel güvenlik sistemi kurulumu ertelenmemeli.",
    items: [
      {
        title: "Mesai Dışı Hırsızlık Riski",
        description:
          "İşyeri kapandıktan sonra yetkisiz giriş, cam kırma veya kilit zorlama. Alarm sistemi olmadan gece saatlerinde tamamen savunmasız kalırsınız.",
      },
      {
        title: "Kasa ve Stok Alanı Güvenliği",
        description:
          "Kasa noktası kamerasız kaldığında iç hırsızlık tespit edilemiyor. Stok kaybının kaynağı belirlenemiyor.",
      },
      {
        title: "Alarm Yanlış Kullanımı",
        description:
          "Mesai kapanışında alarm kurulmayı unutuluyor. Çalışanlar kodu bilmiyor veya yanlış kullanıyor. Gereksiz ihbar oluşuyor.",
      },
      {
        title: "Uzaktan Kontrol Eksikliği",
        description:
          "İşyerinizde neler olduğunu göremiyorsunuz. Mobil erişim olmadan mesai dışında kontrol mümkün değil.",
      },
      {
        title: "Sigorta ve Ruhsat Baskısı",
        description:
          "Sigorta şirketleri kamera ve alarm belgesi istiyor. Belediye ruhsatı yangın alarm zorunluluğu getiriyor. Belge eksikliği cezai yaptırıma yol açabiliyor.",
      },
      {
        title: "Yangın Riski ve Müdahale Gecikmesi",
        description:
          "Özellikle mutfaklı işletmelerde (restoran, kafe) yangın alarmı ve duman dedektörü olmadan risk algılanamıyor. Gaz dedektörü ve yangın alarm butonu eksikliği gece saatlerinde küçük bir kıvılcımı büyük hasara dönüştürebilir.",
      },
      {
        title: "Kapı ve Pencere Güvenliği Açıkları",
        description:
          "Kapı güvenlik sistemleri olmayan işyerlerinde cam kırma veya kilit zorlama çok hızlı gerçekleşir. Vitrin ve servis kapısı her gece risk altındadır. Manyetik kontakt ve kapı sensörü bu açığı kapatır.",
      },
      {
        title: "Arka Kapı ve Personel Zafiyeti",
        description:
          "Arka kapı, yangın çıkışı veya depo kapısı kontrolsüz kalıyor. Yetkisiz giriş ve stok çıkışı takip edilemiyor.",
      },
      {
        title: "Farklı Firmalardan Parçalı Sistem",
        description:
          "Kamera ayrı, alarm ayrı, yangın alarm ayrı firmadan. Arıza olduğunda herkes diğerini sorumluluk atıyor. Muhatap bulunamıyor.",
      },
    ],
  },

  /* ── Authority ── */
  authorityTitle:
    "Neden Güvenlik Bileşenlerini Tek Elden Kurmak İşyeriniz İçin Önemlidir?",
  authorityBody: [
    "İşyerlerinde mağaza kamera sistemi, işyeri alarm sistemi ve yangın alarm sistemleri ayrı zamanlarda farklı firmalardan kurulduğunda entegrasyon sorunları kaçınılmazdır. Alarm paneli ile kamera kaydı eşleşmez, arıza sorumluluğu belirsizleşir, bakım takvimleri farklılaşır.",
    "Tek projede kurulan mağaza güvenlik sistemleri aynı altyapıyı paylaşır, koordineli çalışır ve bakım/arıza süreçlerinde tek muhatap avantajı sağlar. Mesai otomasyonu, mobil bildirimler ve alarm-kamera eşlemesi entegre sistemle mümkündür.",
    "Sigorta şirketleri ve ruhsat makamları tüm bileşenlerin uyumlu çalıştığını gösteren belge talep eder. Özellikle yangın algılama sistemleri, duman dedektörü ve yangın paneli bileşenlerinin belgelendirmesi tek projede otomatik olarak karşılanır.",
    "Restoran ve kafe gibi mutfaklı işletmelerde gaz dedektörü ve yangın alarm butonu zorunluluktur. Mağaza ve depolar için ise mağaza ürün koruma sistemleri, kartlı geçiş sistemi ve kapı güvenlik sistemleri bütüncül bir güvenlik altyapısı oluşturur.",
  ],
  authorityNote: {
    title: "İşletmeniz için hızlı teklif almak isterseniz",
    body: "İşyeri tipinizi (mağaza, ofis, restoran vb.), tahmini metrekerenizi ve öncelikli güvenlik sorununuzu paylaşın. Aynı gün dönüş yapıyoruz.",
  },
  features: [
    "Mağaza kamera sistemi ve depo kamera sistemi (Full HD / 4K IP kamera)",
    "İşyeri alarm sistemi — dükkan alarm ve mağaza alarm dahil (mesai otomasyonlu)",
    "Yangın algılama sistemleri: duman dedektörü, yangın dedektörü ve ısı sensörü",
    "Yangın paneli ve yangın alarm butonu (konvansiyonel veya adresli sistem)",
    "Gaz dedektörü ve gaz alarm cihazı (mutfaklı işletmeler için)",
    "Kartlı geçiş sistemi (personel giriş-çıkış kontrolü ve zaman puantajı)",
    "Kapı güvenlik sistemleri — manyetik kontakt, kapı sensörü ve bariyer",
    "Mağaza ürün koruma sistemleri (depo ve raf alanı izleme)",
    "Mobil uygulama ile canlı izleme ve alarm kontrol",
    "Tek sözleşme, tek muhatap — sigorta ve ruhsat belgelendirme dahil",
    "Yıllık bakım sözleşmesi seçeneği (yangın alarm testi dahil)",
  ],

  /* ── Alan Bazlı Çözümler ── */
  areaSolutions: {
    title: "İşyerinizin Her Alanına Özel Güvenlik Çözümü",
    subtitle:
      "Bir mağazanın giriş noktası ile arka deposu farklı güvenlik ihtiyacına sahiptir. Her alanı ayrı planlıyoruz.",
    items: [
      {
        area: "Vitrin ve Giriş",
        description:
          "İlk izlenim noktası. Müşteri ve personel girişi, kapı açılma saatleri ve dış cephe güvenliği.",
        features: [
          "Giriş kamerası (gelen-giden takibi)",
          "Manyetik kapı kontaktı",
          "Dış cephe hareket sensörü",
        ],
      },
      {
        area: "Kasa Noktası",
        description:
          "Nakit işlemlerin yapıldığı en kritik alan. İç hırsızlık ve para sayım güvenliği.",
        features: [
          "Kasa üstü sabit kamera",
          "Kasa alarmı (acil tuş)",
          "Gece kasası için ek sensör",
        ],
      },
      {
        area: "Personel Girişi ve Soyunma",
        description:
          "Çalışan giriş-çıkışlarının takibi. İsteğe bağlı zaman puantajı entegrasyonu.",
        features: [
          "Kartlı geçiş okuyucu",
          "Giriş-çıkış log kaydı",
          "Koridor kamerası",
        ],
      },
      {
        area: "Depo ve Stok Odası",
        description:
          "Stok kaybının ve yetkisiz erişimin önlendiği alan. Hareket algılama ve kayıt.",
        features: [
          "Depo kamerası",
          "Hareket algılama sensörü",
          "Kapı kontaktı (açık kapı alarmı)",
        ],
      },
      {
        area: "Arka Kapı ve Yangın Çıkışı",
        description:
          "Genellikle ihmal edilen ama risk açısından kritik nokta. Yetkisiz giriş ve yangın kaçış güvenliği.",
        features: [
          "Arka kapı kamerası",
          "Manyetik kontakt ve alarm",
          "Yangın çıkış yönlendirme",
        ],
      },
      {
        area: "Müşteri Alanı ve Salon",
        description:
          "Müşteri deneyimini bozmadan genel izleme. Vandalizm önleme ve olay kaydı.",
        features: [
          "Geniş açılı salon kameraları",
          "Gece görüş desteği",
          "Duman dedektörü ve yangın dedektörü",
        ],
      },
      {
        area: "Mutfak ve Servis Alanı",
        description:
          "Restoran, kafe ve mutfaklı işletmelerin en kritik yangın riski bölgesi. Gaz kaçağı ve yangın algılama zorunludur.",
        features: [
          "Gaz dedektörü ve gaz alarm cihazı",
          "Yangın paneli bağlantılı duman sensörü",
          "Yangın alarm butonu (hızlı ihbar)",
        ],
      },
    ],
    image: {
      src: "/images/diagrams/isyeri-kamera-sistemi-yerlesim-plani.webp",
      alt: "İşyeri güvenlik kamera montajı",
    },
  },

  /* ── Mid-page CTA ── */
  midPageCta: {
    title: "İşyeriniz İçin Hızlı Güvenlik Teklifi Alın",
    subtitle:
      "İşyeri tipinizi ve büyüklüğünüzü paylaşın. İhtiyacınıza göre kamera, alarm ve yangın alarm kapsamını belirleyelim.",
    ctaLabel: "İşyerinize Özel Teklif Alın",
  },

  /* ── Çözüm Seviyeleri ── */
  solutionTiers: {
    title: "İşletme Ölçeğine Göre Çözüm Seviyeleri",
    subtitle:
      "Her işletme aynı kapsamda güvenlik gerektirmez. Ölçeğinize ve bütçenize uygun seviyeyi birlikte belirleyelim.",
    ctaLabel: "İşletmenize Uygun Çözümü Belirleyelim",
    tiers: [
      {
        name: "Küçük İşletme Çözümü",
        targetAudience: "Tek mekanlı mağaza, dükkan, küçük ofis veya kafe.",
        solves:
          "Temel hırsızlık önleme, mesai dışı güvenlik ve yasal yangın alarm zorunluluğu.",
        components: [
          "4–6 kamera (giriş, kasa, depo)",
          "Kablosuz hırsız alarm sistemi",
          "Mesai saati otomasyonu",
          "Mobil izleme uygulaması",
          "Yangın alarm (zorunlu belgelendirme)",
        ],
        upgradeNote:
          "Personel kontrolü, kartlı geçiş veya çoklu bölge alarm ihtiyacı oluştuğunda.",
      },
      {
        name: "Büyüyen İşletme Çözümü",
        targetAudience:
          "Orta ölçekli mağaza, restoran, klinik veya çok odalı ofis.",
        solves:
          "Çoklu bölge güvenliği, personel erişim kontrolü ve merkezi izleme ihtiyacı.",
        components: [
          "6–16 kamera (tüm alanlar)",
          "Çok bölgeli alarm sistemi",
          "Kartlı geçiş (personel girişi)",
          "Yangın alarm sistemi",
          "Mesai otomasyonu + mobil bildirim",
          "NVR kayıt ve uzaktan erişim",
        ],
        upgradeNote:
          "Birden fazla şube, 7/24 izleme merkezi veya SLA bakım ihtiyacı olduğunda.",
      },
      {
        name: "Çok Bölmeli İşletme Çözümü",
        targetAudience:
          "Zincir mağaza, çok katlı ofis, otel veya büyük showroom.",
        solves:
          "Şubeler arası standardizasyon, merkezi izleme ve 7/24 güvenlik kontrolü.",
        components: [
          "16+ kamera (şube başına)",
          "Merkezi alarm yönetim paneli",
          "Kartlı geçiş ve zaman puantajı",
          "Yangın alarm sistemi",
          "Uzaktan izleme merkezi bağlantısı",
          "SLA garantili bakım sözleşmesi",
        ],
        upgradeNote:
          "Turnike, bariyer veya gelişmiş analitik (yüz tanıma / müşteri sayma) gerektiğinde.",
      },
    ],
  },

  /* ── Neden Tek Elden Kurulum ── */
  whyIntegrated: {
    title: "Neden Tüm Güvenlik Bileşenlerini Tek Firmadan Kurmalısınız?",
    subtitle:
      "Kamera ayrı firma, alarm ayrı firma, yangın alarm ayrı firma — bu model işletmenize hem maliyet hem zaman kaybettirir.",
    items: [
      {
        title: "Koordinasyon Derdi Biter",
        description:
          "Montaj takvimi, kablo altyapısı ve ürün uyumluluğu tek firma tarafından yönetilir. Siz işinize odaklanırsınız.",
      },
      {
        title: "Alarm ile Kamera Konuşur",
        description:
          "Alarm tetiklendiğinde ilgili kamera kaydı otomatik işaretlenir. Olay anında video kanıtı hazır olur.",
      },
      {
        title: "Tek Sözleşme, Tek Fatura",
        description:
          "Tüm bileşenler tek teklif, tek sözleşme altında yönetilir. Muhasebe ve bütçe takibi kolay olur.",
      },
      {
        title: "Bakım ve Arızada Tek Numara",
        description:
          "Sorun olduğunda 'bu bizim sorumluluğumuz değil' cevabı almazsınız. Arıza tek noktadan çözülür.",
      },
      {
        title: "Eğitim ve Devir Kolaylığı",
        description:
          "Kamera, alarm ve yangın alarm kullanımı tek seferde, aynı ekip tarafından eğitilir. Personel değişikliğinde rehber doküman bırakılır.",
      },
      {
        title: "Sigorta ve Ruhsat Belgeleri Hazır",
        description:
          "Tüm bileşenler tek projede olduğu için uyumluluk belgeleri, test raporları ve sertifikalar tek seferde hazırlanır.",
      },
    ],
  },

  /* ── Keşif ve Teklif Süreci ── */
  discoveryProcess: {
    title: "İşyeriniz İçin Güvenlik Projesi Nasıl İlerler?",
    subtitle:
      "İlk aramanızdan çalışan sisteme kadar basit ve şeffaf bir süreç izliyoruz.",
    steps: [
      {
        step: 1,
        title: "Kısa Bilgi Alıyoruz",
        description:
          "İşyeri tipinizi, büyüklüğünüzü ve öncelikli güvenlik sorununuzu form, telefon veya WhatsApp ile öğreniyoruz.",
      },
      {
        step: 2,
        title: "Aynı Gün Geri Dönüş",
        description:
          "Teknik ekibimiz sizi arayarak bileşen kapsamını, bütçe aralığını ve keşif tarihini netleştiriyor.",
      },
      {
        step: 3,
        title: "Ücretsiz Yerinde Keşif",
        description:
          "İşyerinize gelerek alanı ölçüyor, kör noktaları tespit ediyor ve kamera-alarm yerleşimini planlıyoruz.",
      },
      {
        step: 4,
        title: "Proje ve Teklif",
        description:
          "Keşif sonrası bileşen listesi, montaj planı ve net fiyat teklifini gönderiyoruz.",
      },
      {
        step: 5,
        title: "Hızlı Kurulum",
        description:
          "Profesyonel montaj, mesai saati programlaması, mobil erişim kurulumu ve test. İşyeri rutininiz minimum etkilenir.",
      },
      {
        step: 6,
        title: "Teslim ve Bakım Desteği",
        description:
          "Kullanıcı eğitimi, sigorta/ruhsat belgeleri ve isteğe bağlı yıllık bakım sözleşmesi ile tamamlanır.",
      },
    ],
  },

  /* ── Karar Blokları ── */
  decisionBlocks: [
    {
      title: "Hangi Durumda Komple İşyeri Güvenlik Paketi Doğru Seçimdir?",
      items: [
        "Yeni açılan işyerinde kamera, alarm ve yangın alarm sıfırdan kurulacaksa.",
        "Mevcut güvenlik eksik ve birden fazla bileşenin aynı anda iyileştirilmesi gerekiyorsa.",
        "Sigorta, ruhsat veya iş güvenliği mevzuatı güvenlik sistemi zorunluluğu getiriyorsa.",
        "Farklı firmalardan alınan sistemlerde entegrasyon veya muhatap sorunu yaşıyorsanız.",
      ],
    },
    {
      title: "Hangi Durumda Tekil Hizmet Daha Uygun Olabilir?",
      items: [
        "Yalnızca kamera ihtiyacınız varsa: kamera sistemi kurulumu sayfamızı inceleyin.",
        "Sadece hırsız alarm yeterli ise: alarm sistemi kurulumu daha hedefli bir başlangıçtır.",
        "Yalnızca yangın alarm zorunluluğu varsa: yangın alarm sistemi kurulumu ayrıca değerlendirilebilir.",
        "Personel giriş kontrolü öncelikli ise: kartlı geçiş sistemi kurulumu incelenmelidir.",
      ],
    },
  ],

  /* ── Kapsam Detayı ── */
  scopeDetails: {
    title: "Projede Neler Dahil, Neler Ayrıca Değerlendirilir?",
    includedTitle: "Standart projede dahil",
    includedItems: [
      "Ücretsiz keşif ve çok bileşenli ihtiyaç analizi",
      "Kamera, hırsız alarm ve yangın alarm montajı",
      "Mesai saati otomasyonu ve alarm programlaması",
      "Mobil uygulama kurulumu ve kullanıcı ayarları",
      "Yangın alarm belgelendirme (proje, test raporu, sertifika)",
    ],
    additionalTitle: "İşyeri tipine göre ayrıca değerlendirilen başlıklar",
    additionalItems: [
      "Kartlı geçiş ve personel erişim kontrol sistemi",
      "Mevcut eski sistemlerin kaldırılması veya revizyonu",
      "Çok katlı işyerlerinde ek switch ve altyapı planlaması",
      "İzleme merkezi aboneliği (7/24 alarm izleme)",
    ],
  },

  /* ── Fiyatlandırma Faktörleri ── */
  pricingFactors: {
    description:
      "İşyeri güvenlik sistemi fiyatı, işyeri tipi, alan büyüklüğü ve bileşen kapsamına bağlıdır.",
    items: [
      "İşyeri türü (mağaza, ofis, restoran, otel) bileşen ihtiyacını belirler.",
      "Kamera sayısı, alarm bölgesi ve yangın dedektör adedi malzeme maliyetini etkiler.",
      "Mevcut kablo altyapısı varsa kullanılabilir; yoksa çekim ek maliyet oluşturur.",
      "Kartlı geçiş, izleme merkezi bağlantısı gibi ek bileşenler projeye göre fiyatlandırılır.",
      "Yangın alarm belgelendirme (proje, test raporu, sertifika) zorunlu kapsam olarak dahildir.",
    ],
  },

  /* ── Mekan Türleri ── */
  venueTypes: [
    {
      title: "Mağaza ve Perakende",
      description:
        "Hırsızlık önleme, kasa güvenliği ve müşteri alanı kameraları. Kayıp kontrolü ve stok takibi desteği.",
    },
    {
      title: "Ofis ve Kurumsal",
      description:
        "Veri odası koruması, çalışan erişim kontrolü, kartlı giriş ve giriş-çıkış log takibi.",
    },
    {
      title: "Restoran ve Kafe",
      description:
        "Mutfak yangın alarmı, kasa güvenliği, personel erişim kontrolü ve müşteri alanı izleme.",
    },
    {
      title: "Otel ve Konaklama",
      description:
        "Kat bazlı kamera, yangın alarm, resepsiyon erişim yönetimi ve misafir güvenliği.",
    },
    {
      title: "Klinik ve Sağlık Merkezi",
      description:
        "Hasta mahremiyetine uygun kamera, ilaç deposu güvenliği ve personel giriş kontrolü.",
    },
    {
      title: "Showroom ve Galeri",
      description:
        "Değerli ürün koruması, hareket algılama, çevre kamera ve vandalizm önleme.",
    },
  ],

  /* ── Güven Blokları ── */
  trustBlocks: {
    title: "Somut Güvencelerimiz",
    subtitle: "Genel vaatler yerine size sunduğumuz somut taahhütler:",
    items: [
      { text: "Aynı gün geri dönüş garantisi" },
      { text: "Tek muhatap: size bir proje sorumlusu atanır" },
      { text: "Mesai saati otomasyonu kurulumu dahil" },
      { text: "Mobil izleme uygulaması kurulumu dahil" },
      { text: "Sigorta ve ruhsat belgeleri hazırlanır" },
      { text: "Arıza bildiriminde hızlı müdahale" },
      { text: "Mevcut sistemi değerlendirip koruma opsiyonu" },
      { text: "İstanbul ve çevre illerde ücretsiz keşif" },
    ],
  },

  /* ── İç Linkler ── */
  internalLinks: {
    title: "İlgili Hizmet ve Çözüm Sayfaları",
    subtitle:
      "İşyerinizin ihtiyacına göre tek bileşen bazlı hizmet sayfalarımızı da inceleyebilirsiniz.",
    links: [
      {
        href: "/kamera-sistemi-kurulumu",
        label: "Güvenlik Kamera Sistemi Kurulumu",
        description:
          "İşyeri giriş, kasa, depo ve salon kamerası kurulumu. Hırsızlık ve kayıp önleme odaklı.",
      },
      {
        href: "/alarm-sistemi-kurulumu",
        label: "Hırsız Alarm Sistemi Kurulumu",
        description:
          "Kablosuz veya kablolu alarm. Mesai dışı güvenlik. Hareket, kapı ve cam kırılma sensörleri.",
      },
      {
        href: "/yangin-alarm-sistemi-kurulumu",
        label: "Yangın Alarm Sistemi Kurulumu",
        description:
          "Zorunlu yangın algılama, belgelendirme, sigorta raporu ve mevzuat uyumluluğu.",
      },
      {
        href: "/kartli-gecis-sistemi-kurulumu",
        label: "Kartlı Geçiş ve Personel Kontrol",
        description:
          "Personel giriş-çıkış takibi, zaman puantajı entegrasyonu ve alan bazlı yetkilendirme.",
      },
      {
        href: "/bakim-servis-uzaktan-izleme",
        label: "Bakım, Servis ve Uzaktan İzleme",
        description:
          "Periyodik bakım, arıza servisi ve izleme merkezi aboneliği.",
      },
      {
        href: "/blog/duman-dedektoru-rehberi",
        label: "Duman Dedektörü Rehberi",
        description:
          "İyonizasyon ve fotoelektrik duman dedektörü farkları, montaj noktaları, bakım ve fiyatlar.",
      },
      {
        href: "/blog/gaz-dedektoru-rehberi",
        label: "Gaz Dedektörü ve Gaz Alarm Cihazı",
        description:
          "Doğalgaz ve LPG dedektörü seçimi, montaj konumu, solenoid vana entegrasyonu ve yasal zorunluluklar.",
      },
      {
        href: "/blog/kablosuz-alarm-sistemi-rehberi",
        label: "Kablosuz Alarm Sistemi Rehberi",
        description:
          "Ajax ve DSC ile kablosuz dükkan alarm sistemi kurulumu, fiyatlar ve kurulum süreci.",
      },
      {
        href: "/blog/4-kamerali-guvenlik-sistemi-fiyati",
        label: "4 Kameralı Güvenlik Sistemi Fiyatı",
        description:
          "Küçük mağaza ve dükkan için 4 kameralı sistem paket fiyatları ve mekan önerileri.",
      },
      {
        href: "/blog/8-kamerali-guvenlik-sistemi-fiyati",
        label: "8 Kameralı Güvenlik Sistemi Fiyatı",
        description:
          "Orta boy mağaza, depo ve site için 8 kameralı sistem paket fiyatları.",
      },
    ],
  },
  problemLinks: {
    title: "İşyeri Güvenliğinde Sık Karşılaşılan Sorunlar",
    subtitle:
      "İşyeri kameraları, alarm panelleri ve personel geçiş noktalarında sık karşılaşılan arızalara ilgili sayfalardan ulaşın.",
    links: serviceProblemLinks["isyeri-guvenlik-sistemi"],
  },

  /* ── Segment Bağlantıları ── */
  segments: [
    {
      title: "Mağaza ve Perakende",
      content:
        "Kasa, depo, giriş ve müşteri alanlarını kapsayan kamera ve alarm. Hırsızlık ve kayıp önleme odaklı kurulum.",
      href: "/kamera-sistemi-kurulumu",
    },
    {
      title: "Ofis ve Kurumsal",
      content:
        "Çalışan erişim kontrolü, veri odası güvenliği ve yangın alarm. İK sistemleriyle entegre giriş-çıkış takibi.",
      href: "/kartli-gecis-sistemi-kurulumu",
    },
    {
      title: "Restoran, Otel ve Konaklama",
      content:
        "Mutfak yangın alarmı, müşteri alanı kameraları ve personel erişim kontrolü. Zorunlu belgeler ve sigorta uyumlu kurulum.",
      href: "/yangin-alarm-sistemi-kurulumu",
    },
  ],

  /* ── Yangın + Gaz Ekosistemi Açıklama Bloğu ── */
  authorityBeforeFaq: {
    title: "İşyerinde Yangın Güvenlik Sistemleri: Hangi Bileşenler Gerekli?",
    description:
      "Yangın algılama sistemleri tek bir cihazdan ibaret değildir. Kapsamlı bir yangın güvenlik sistemi şu bileşenlerden oluşur:\n\n**Duman Dedektörü / Yangın Dedektörü:** Havadaki duman partiküllerini algılayan sensörler. Ofis, mağaza ve koridorlara yerleştirilir. Fotoelektrik model yavaş tüten yangınlarda çok etkilidir.\n\n**Duman Sensörü ve Isı Dedektörü:** Mutfak ve kase odaları gibi alanlarda standart duman sensörü yerine ısı dedektörü tercih edilir. Sahte alarm riskini minimize eder.\n\n**Yangın Paneli:** Konvansiyonel yangın alarm sistemi veya adresli sistemin beyin merkezidir. Hangi bölgede alarm verildiğini gösterir, siren ve bildirim sistemini yönetir.\n\n**Yangın Alarm Butonu (Manuel Call Point):** Yangını gören kişinin anında alarm tetikleyebildiği kırmızı buton. Çıkış yolları ve koridorlara yerleştirilir.\n\n**Gaz Dedektörü / Gaz Alarm Cihazı:** Restoran, kafe ve mutfaklı işletmelerde doğalgaz veya LPG kaçağını önceden algılar. Solenoid vana ile birleştiğinde gaz hattını otomatik keser.\n\nTüm bu bileşenler sigorta uyumlu tek bir yangın güvenlik sistemi çerçevesinde kurulur. Yangın alarm sistemi fiyatları kapsama ve mekan büyüklüğüne göre keşif sonrası netleştirilir.",
    links: [
      { href: "/yangin-alarm-sistemi-kurulumu", label: "Yangın Alarm Sistemi Kurulumu" },
      { href: "/blog/duman-dedektoru-rehberi", label: "Duman Dedektörü Rehberi" },
      { href: "/blog/gaz-dedektoru-rehberi", label: "Gaz Dedektörü Rehberi" },
      { href: "/blog/yangin-alarm-sistemi-zorunlu-mu", label: "Yangın Alarm Sistemi Zorunlu mu?" },
    ],
  },

  /* ── FAQ — Ticari ve İtiraz Giderici ── */
  faq: [
    {
      question: "Maliyet neye göre değişir?",
      answer:
        "İşyeri tipi, kamera sayısı, alarm bölgesi ve yangın dedektör kapsamı fiyatı belirler. Mevcut altyapı varsa kullanılır. Keşif sonrası net fiyat teklifi verilir.",
    },
    {
      question: "Mevcut kamera veya alarm sistemi korunabilir mi?",
      answer:
        "Evet. Keşifte mevcut cihazları değerlendiriyoruz. Çalışanlar korunur, sadece eksik veya uyumsuz olanlar yenilenir.",
    },
    {
      question: "Mobil izleme var mı?",
      answer:
        "Evet. Tüm kameralar ve alarm durumu mobil uygulama üzerinden kontrol edilir. Bildirimler anlık gelir. İşyerinize her yerden erişirsiniz.",
    },
    {
      question: "Gece görüş nasıl çözülür?",
      answer:
        "IR LED kameralar ile karanlık ortamda net görüntü alınır. Dış cephede gerekirse ek aydınlatma planlaması yapılır.",
    },
    {
      question: "Kayıtlar kaç gün tutulur?",
      answer:
        "Kamera sayısı ve çözünürlüğe bağlı olarak genellikle 15–30 gün tutulur. İşyeri ihtiyacına göre harddisk kapasitesi planlanır.",
    },
    {
      question: "Bakım zorunlu mu?",
      answer:
        "Zorunlu değil ama önerilir. Yıllık bakım ile kamera temizliği, HDD kontrolü, yazılım güncelleme ve yangın alarm testi yapılır.",
    },
    {
      question: "Proje ne kadar sürer?",
      answer:
        "Küçük işyerlerinde genellikle 1 gün, büyük mekanlarda 3–5 iş günü. İş rutininizi minimum etkileyecek şekilde planlanır.",
    },
    {
      question: "Ücretsiz keşif var mı?",
      answer:
        "Evet. İstanbul ve aktif hizmet bölgelerimizde keşif ücretsizdir. Keşif sonrası detaylı teklif hazırlanır.",
    },
    {
      question: "Sigorta şirketine belge verebiliyor musunuz?",
      answer:
        "Evet. Kamera kurulum belgesi, alarm kurulum tutanağı, yangın alarm proje ve test raporu sigorta formatında hazırlanır.",
    },
    {
      question: "Mesai dışında alarm otomatik devreye giriyor mu?",
      answer:
        "Evet. Haftalık çalışma programına göre alarm zamanlaması yapılır. Kapanışta otomatik devreye girer, açılışta devre dışı kalır. Unutma riski sıfırlanır.",
    },
    {
      question: "Mağaza için kaç kamera yeterli?",
      answer:
        "Küçük bir dükkan veya butik mağaza için 4-6 kamera (giriş, kasa, depo, müşteri alanı) genellikle yeterlidir. Orta boy mağazalarda 8-12 kamera önerilir. Mağaza kamera sistemi planı keşifle netleştirilir; mekanın yapısına, raf düzenine ve kör noktalarına göre yerleşim belirlenir.",
    },
    {
      question: "Mağaza alarm sistemi kablosuz olabilir mi?",
      answer:
        "Evet, kiracı durumundaki mağaza ve dükkan alarm sistemi kurulumlarında kablosuz (Ajax gibi) sistemler tercih edilir. Kablo çekme ve sıva hasarı olmadan kısa sürede kurulur. Mevcut yapıda kiralık işyeri için ideal çözümdür.",
    },
    {
      question: "İşyerinde gaz dedektörü zorunlu mu?",
      answer:
        "Doğalgaz veya LPG kullanan restoran, kafe ve sanayi mutfaklarında gaz dedektörü ve gaz alarm cihazı zorunludur. EPDK lisanslı dağıtım şirketleri yeni tesisatlarda gaz alarmı belgesi istemektedir. 6331 sayılı İSG Kanunu kapsamında da tehlikeli maddelerle çalışılan ortamlarda algılama sistemi zorunludur.",
    },
    {
      question: "Konvansiyonel ve adresli yangın alarm sistemi farkı nedir?",
      answer:
        "Konvansiyonel yangın alarm sistemi, dedektörleri bölgelere (zone) göre gruplar; hangi bölgede alarm verdiği anlaşılır ama hangi cihaz olduğu bilinmez. Küçük-orta işletmeler için ekonomik tercih. Adresli sistemde ise her dedektörün benzersiz adresi vardır, yangın panelinden tam konum tespit edilir. Büyük AVM, otel ve fabrikalarda tercih edilir.",
    },
    {
      question: "Yangın alarm sistemi fiyatları neye göre değişir?",
      answer:
        "Yangın alarm sistemi fiyatları; mekan büyüklüğü, duman dedektörü ve ısı dedektörü sayısı, konvansiyonel veya adresli sistem tercihi, yangın paneli kapasitesi ve belgelendirme kapsamına göre değişir. Küçük işletmelerde 10.000-20.000 TL, orta ölçekli işletmelerde 25.000-60.000 TL arası bütçe planlanabilir. Net fiyat keşif sonrası verilir.",
    },
    {
      question: "Kartlı geçiş sistemi işyerinde ne sağlar?",
      answer:
        "Kartlı geçiş sistemi, personelin hangi alana ne zaman girip çıktığını kayıt altına alır. Depo, sunucu odası ve kasa gibi kısıtlı alanlara yetkisiz erişimi engeller. Zaman puantajı entegrasyonu ile bordro hesaplamasına da katkı sağlar. İşyeri alarmı ile entegre çalışınca mesai dışı yetkisiz geçiş anında alarm üretir.",
    },
    {
      question: "Kapı güvenlik sistemleri işyerini nasıl korur?",
      answer:
        "Kapı güvenlik sistemleri mağaza, dükkan ve deponun birincil savunma hattıdır. Manyetik kontakt (kapı açılma sensörü), cam kırılma dedektörü ve giriş kamerası kombinasyonuyla hem caydırıcılık hem de olay kaydı sağlanır. Alarm paneline bağlandığında kapı açılması anında bildirim verir; gece saatlerinde izinsiz giriş sıfırlanır.",
    },
  ],

  /* ── Mağaza / Depo Keyword Bloğu ── */
  authorityAfterFaq: {
    title: "Mağaza, Dükkan ve Depo için Güvenlik Sistemi Seçimi",
    description:
      "Mağaza kamera sistemi ve mağaza alarm sistemi seçiminde mekan büyüklüğü, ürün değeri ve kasa yapısı belirleyicidir. Küçük bir dükkan alarm sistemi 4-6 sensör ve kablosuz panelden oluşabilirken, büyük bir mağaza güvenlik sistemi 12-20 kamera, çok bölgeli alarm paneli ve kartlı geçiş sistemi gerektirebilir.\n\nDepo kamera sistemi kurarken kör nokta analizi kritiktir. Raf arkaları, yükleme rampası ve kapı önleri en sık gözetim altında bırakılan noktalardır. İşyeri kamera sistemleri planlanırken mağaza ürün koruma sistemleri de göz önünde bulundurulmalı — elektronik etiket, raf sensörü ve çıkış kapısı kamera kombinasyonu kayıp oranını ciddi ölçüde düşürür.\n\nKapı güvenlik sistemleri ise mağaza ve depoların en temel savunma hattıdır. Manyetik kontakt, cam kırılma sensörü ve giriş kamerası birlikte çalıştığında hem caydırıcılık hem de olay kaydı sağlanır. Kartlı geçiş sistemi ile personel giriş-çıkışları da kayıt altına alınır.",
    links: [
      { href: "/kamera-sistemi-kurulumu", label: "Güvenlik Kamera Sistemi Kurulumu" },
      { href: "/alarm-sistemi-kurulumu", label: "Hırsız Alarm Sistemi Kurulumu" },
      { href: "/kartli-gecis-sistemi-kurulumu", label: "Kartlı Geçiş Sistemi Kurulumu" },
      { href: "/blog/4-kamerali-guvenlik-sistemi-fiyati", label: "4 Kameralı Sistem Fiyatı" },
      { href: "/blog/8-kamerali-guvenlik-sistemi-fiyati", label: "8 Kameralı Sistem Fiyatı" },
      { href: "/blog/kablosuz-alarm-sistemi-rehberi", label: "Kablosuz Alarm Sistemi Rehberi" },
    ],
  },

  /* ── CTA ve Final ── */
  finalCtaTitle: "İşyeriniz İçin Güvenlik Sistemi Teklifi Alın",
  finalCtaSubtitle:
    "Kamera, alarm ve yangın alarm tek elden. İşyerinize özel ücretsiz keşif için hemen iletişime geçin.",
  whatsappMessage:
    "Merhaba, işyerim için güvenlik sistemi kurulumu hakkında bilgi almak istiyorum.",
  defaultService: "hepsi",
  ctaContent: {
    badge: "Komple güvenlik • Keşif • Teklif",
    title: "İşyeriniz İçin Güvenlik Teklifi Alın",
    subtitle:
      "İşyeri tipinizi ve tahmini alan büyüklüğünü paylaşın. İhtiyacınıza göre bileşen kapsamını belirleyip teklif hazırlayalım.",
    trustItems: [
      "Kamera, alarm ve yangın alarm tek projede",
      "Mesai saati otomasyonu ve mobil izleme",
      "Tek sözleşme ve tek muhatap avantajı",
      "Sigorta ve ruhsat belgelendirme dahil",
    ],
    supportCards: [
      {
        title: "İşyerinize özel planlama",
        text: "Bileşen kapsamını ve otomasyon ayarlarını işletmenizin programına göre belirliyoruz.",
      },
      {
        title: "Çalışan sistem teslimi",
        text: "Montaj, programlama, mobil erişim ve eğitim ile sistemi hazır teslim ediyoruz.",
      },
    ],
  },
  cityServiceLinks: {
    title: "İşyeri Güvenlik Sistemi — Şehir Bazlı Hizmet Sayfaları",
    description:
      "Hizmet verdiğimiz her şehirde işyeri güvenlik sistemi kurulumu için detaylı bilgi ve teklif sayfalarına aşağıdan ulaşabilirsiniz.",
    links: cities.map((city) => ({
      href: `/${city.slug}/isyeri-guvenlik-sistemi`,
      label: `${city.name} İşyeri Güvenlik Sistemi`,
      description: `${city.name} içinde işyeri güvenlik sistemi kurulumu için keşif ve teklif alın.`,
    })),
  },
  cityHubLinks: {
    title: "Şehir Bazlı Güvenlik Hizmetleri",
    description:
      "Ticari güvenlik arayışının yoğun olduğu şehirlerdeki güvenlik çözümlerimizi ve hizmet kapsamımızı inceleyin.",
    links: topCityHubLinks,
  },
  trustImages: {
    afterHero: {
      src: "/images/services/bakim-servis/guvenlik-kamera-montaj-ekibi-isyeri-montaj-dis-mekan.jpg",
      alt: "İşyeri güvenlik kamera montaj ekibi",
    },
    beforeFaq: {
      src: "/images/services/bakim-servis/market-kamera-montaji-gorunmez-kablolama-demosu.jpg",
      alt: "Mağaza kamera montajı ve kablolama",
    },
    beforeCta: {
      src: "/images/services/bakim-servis/guvenlik-sistemi-teknik-servis-ekip-isyeri-kamera-montaji.jpg",
      alt: "İşyeri güvenlik sistemi teknik servis ekibi",
    },
  },
};

export default function IsyeriSayfasi() {
  return <ServicePageTemplate data={data} />;
}
