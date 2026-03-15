import type { Metadata } from "next";
import { getCanonicalUrlForKnownPath } from "@/lib/canonical";
import ServicePageTemplate, {
  ServicePageData,
} from "@/components/templates/ServicePageTemplate";

const canonicalUrl = getCanonicalUrlForKnownPath(
  "/fabrika-depo-guvenlik-sistemi",
);

export const metadata: Metadata = {
  title:
    "Fabrika ve Depo Güvenlik Sistemi | Çevre Hattı, Turnike, LPR – SLA Garantili",
  description:
    "Fabrika, depo ve sanayi tesisleri için PTZ, termal kamera, çevre hattı, turnike, LPR ve endüstriyel yangın alarm. SLA garantili bakım. Ücretsiz keşif için arayın.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title:
      "Fabrika ve Depo Güvenlik Sistemi | Endüstriyel Ölçekte Tek Elden Çözüm",
    description:
      "Sanayi tesisleri için geniş alan kamera, çevre hattı, turnike ve SLA bakım. Tek proje, tek muhatap.",
    url: canonicalUrl,
    siteName: "Güvenlik Servisi",
    locale: "tr_TR",
    type: "website",
  },
};

const data: ServicePageData = {
  slug: "fabrika-depo-guvenlik-sistemi",
  title: "Fabrika ve Depo Güvenlik Sistemi",
  subtitle:
    "Sanayi tesisleri için geniş alan kamera, çevre hattı alarmı, turnike, LPR plaka tanıma ve endüstriyel yangın algılama — SLA garantili bakım sözleşmesi ile üretim sürekliliğiniz güvence altında.",
  description:
    "Fabrika ve depo güvenliği, standart kamera–alarm paketleriyle çözülemez. Geniş alanlar, çevre hattı uzunluğu, yoğun personel trafiği ve endüstriyel risk profili özel planlama gerektirir.\n\nPTZ ve termal kameralar, çevre hattı dedektörleri, çok bölgeli alarm, turnike, LPR plaka tanıma ve endüstriyel yangın algılama bileşenlerini tek projede koordineli olarak planlıyor ve kuruyoruz.\n\nKritik fark: SLA (Servis Seviye Anlaşması) garantili bakım sözleşmesi ile arıza süreleri minimize edilir, planlı bakımlarla sorunlar önlenir ve üretim durmaları engellenir. Arızada 4 saat sahada müdahale taahhüdü veririz.",
  heroBadge: "Endüstriyel kamera • Çevre hattı • Turnike • SLA bakım",
  heroTrustItems: [
    "PTZ, termal kamera ve çevre hattı dedektörleri tek projede",
    "LPR plaka tanıma ve turnike ile personel/araç kontrolü",
    "SLA garantili bakım — arızada 4 saat müdahale taahhüdü",
    "Üretim durdurmadan aşamalı kurulum planlaması",
  ],
  heroAdvantages: [
    {
      title: "Endüstriyel ölçekte proje yönetimi",
      text: "Çevre hattı, nizamiye, üretim alanı, depo ve sevkiyat bölgeleri ayrı ayrı planlanır. Tüm bileşenler koordineli çalışır.",
    },
    {
      title: "SLA ile üretim sürekliliği güvencesi",
      text: "Güvenlik sistemindeki kesinti üretim kaybı demektir. SLA sözleşmesiyle arızada sahada müdahale süresi garantilenir.",
    },
  ],
  heroPanel: {
    title: "Endüstriyel güvenlik projesinde neye odaklanırız",
    body: [
      "Tesisin çevre hattını, nizamiyelerini, üretim/depo alanlarını ve sevkiyat bölgesini değerlendirerek çok bölgeli güvenlik planı çıkarıyoruz.",
      "Kamera, çevre alarm, yangın algılama, turnike ve LPR bileşenlerini tek projede koordineli planlıyoruz.",
      "SLA sözleşmesi, raporlama yazılımı ve güvenlik yönetim sistemiyle birlikte devreye alıyoruz.",
    ],
  },
  heroCtaLabel: "Tesisiniz İçin Teklif Alın",

  /* ── Hedef Kitle ── */
  targetAudience: {
    title: "Bu Sayfa Kimler İçin?",
    subtitle:
      "Üretim tesisi, lojistik merkezi veya depo güvenliği arayan karar vericiler — aşağıdaki profillerden biriyseniz doğru sayfadasınız.",
    items: [
      {
        title: "Fabrika ve Tesis Yöneticileri",
        description:
          "Üretim alanı, depo, çevre hattı ve personel giriş-çıkış güvenliğini tek elden yönetmek isteyen tesis müdürleri.",
      },
      {
        title: "Lojistik ve Depo Müdürleri",
        description:
          "Stok güvenliği, sevkiyat takibi, araç trafik kontrolü ve yükleme rampası izleme ihtiyacı olan depo yöneticileri.",
      },
      {
        title: "Sanayi Sitesi ve OSB Yönetimleri",
        description:
          "Ortak alan güvenliği, turnike sistemi, bölgesel yetkilendirme ve merkezi izleme kurmak isteyen site yönetimleri.",
      },
      {
        title: "İş Güvenliği (İSG) Uzmanları",
        description:
          "Yangın alarm, gaz algılama ve endüstriyel risk bileşenlerini mevzuata uygun kurdurmak isteyen İSG sorumluları.",
      },
      {
        title: "Müşteri Denetimi Hazırlığındaki İşletmeler",
        description:
          "Uluslararası müşteri veya tedarikçi denetimi öncesinde belgelenmiş güvenlik altyapısı kurmak isteyen firmalar.",
      },
      {
        title: "Mevcut Sistemini Yükseltenler",
        description:
          "Eski analog kamera veya basit alarm sistemini endüstriyel ölçekte PTZ, termal, LPR ve turnike entegrasyonuna geçirmek isteyenler.",
      },
    ],
  },

  /* ── En Sık Yaşanan Sorunlar ── */
  commonProblems: {
    title: "Sanayi Tesislerinde En Sık Yaşanan Güvenlik Sorunları",
    subtitle:
      "Bu sorunlardan biri veya birkaçını yaşıyorsanız mevcut güvenlik düzeniniz yetersizdir.",
    items: [
      {
        title: "Çevre Hattı Kontrolsüzlüğü",
        description:
          "Tesisin dış sınır çizgisi izlenemiyor. Duvar, tel çit veya bariyerlerin ötesinde ne olduğu tespit edilemiyor. Gece saatlerinde çevre tamamen kör nokta.",
      },
      {
        title: "Yetkisiz Araç ve Personel Girişi",
        description:
          "Nizamiyede yeterli kontrol yok. Hangi aracın, ne zaman geldiği bilinmiyor. Ziyaretçi ve taşeron personel takibi yapılamıyor.",
      },
      {
        title: "Stok ve Malzeme Kayıpları",
        description:
          "Depodaki ürün kaybının iç mi dış mı kaynaklı olduğu belirlenemiyor. Sevkiyat rampası kayıt altında değil.",
      },
      {
        title: "Üretim Alanı Güvenliği",
        description:
          "İş kazası, ekipman hasarı veya sabotaj olaylarında görüntü kanıtı yok. Vardiya geçişleri izlenemiyor.",
      },
      {
        title: "Gece ve Olumsuz Hava Koşullarında Görünürlük",
        description:
          "Standart kameralar gece, sis veya yoğun yağmurda yetersiz kalıyor. Termal kamera olmadan çevre hattından gelen tehditler algılanamıyor.",
      },
      {
        title: "Yangın ve Gaz Riski",
        description:
          "Endüstriyel tesislerde yanıcı malzeme, kimyasal ve yakıt bulunması yangın/patlama riskini artırıyor. Standart duman dedektörleri yetersiz kalabiliyor.",
      },
      {
        title: "Bakım ve Arıza Sorumluluğu Belirsizliği",
        description:
          "Kamera ayrı firma, alarm ayrı firma, turnike ayrı firma. Arıza olduğunda herkes diğerini işaret ediyor. Kapsamlı bakım yapılmıyor.",
      },
      {
        title: "SLA Eksikliğinde Üretim Kaybı",
        description:
          "Güvenlik arızası saatlerce çözülemediğinde üretim durur, sevkiyat aksar, sigorta belgesi geçerliliği sorgulanır.",
      },
    ],
  },

  /* ── Authority ── */
  authorityTitle:
    "Neden Endüstriyel Tesislerde Standart Güvenlik Çözümleri Yetersiz Kalır?",
  authorityBody: [
    "Bir fabrika veya depo, bir konut ya da ofisten tamamen farklı risk profiline sahiptir. Geniş açık alanlar, 7/24 vardiyalı çalışma, yoğun araç trafiği ve endüstriyel yangın riski standart bileşenlerin kapasitesini aşar.",
    "PTZ kameralar yüzlerce metrelik çevre hattını tarar, termal kameralar gece ve kötü hava koşullarında algılama sağlar, LPR sistemi araç plakaları otomatik okur. Bu bileşenler tek projede entegre edilmelidir.",
    "SLA garantili bakım sözleşmesi olmadan endüstriyel sistemlerdeki arızalar saatler, hatta günler sürebilir. Bu süre doğrudan üretim kaybına dönüşür. SLA ile arıza bildiriminden itibaren sahada müdahale süresi taahhüt edilir.",
  ],
  authorityNote: {
    title: "Tesis yöneticisi misiniz?",
    body: "Tesis tipinizi, yaklaşık alanını ve personel sayısını paylaşın. Çok bölgeli güvenlik planı ve SLA teklifini hazırlayalım. Aynı gün geri dönüş.",
  },
  features: [
    "PTZ kameralar (360° tarama, 200m+ menzil)",
    "Termal kamera (gece ve kötü hava algılama)",
    "Çevre hattı alarm ve dedektör sistemi",
    "Çok bölgeli alarm sistemi (üretim, depo, ofis ayrı)",
    "Endüstriyel yangın alarm ve gaz algılama",
    "LPR araç plaka tanıma (nizamiye araç kontrolü)",
    "Turnike ve güvenlik kulübesi (personel giriş-çıkış)",
    "Sevkiyat rampası kamerası ve kayıt sistemi",
    "NVR/kayıt sistemi (uzaktan erişim ve raporlama)",
    "SLA garantili bakım sözleşmesi",
  ],

  /* ── Alan Bazlı Çözümler ── */
  areaSolutions: {
    title: "Tesisinizin Her Bölgesine Özel Güvenlik Kurgusu",
    subtitle:
      "Bir fabrikanın çevre hattı ile üretim alanı tamamen farklı bileşen gerektirir. Her bölgeyi ayrı planlıyoruz.",
    items: [
      {
        area: "Çevre Hattı (Perimeter)",
        description:
          "Tesisin dış sınır çizgisi. Duvar, çit veya bariyer boyunca sürekli izleme ve erken uyarı.",
        features: [
          "Termal kamera veya IR dedektör",
          "PTZ kameralar (geniş tarama)",
          "Çevre hattı alarm sistemi",
          "Ek dış aydınlatma planlaması",
        ],
      },
      {
        area: "Nizamiye ve Ana Giriş",
        description:
          "Personel, ziyaretçi ve araç girişlerinin yönetildiği ana kontrol noktası.",
        features: [
          "LPR plaka tanıma (araç giriş-çıkış)",
          "Turnike (personel kartlı geçiş)",
          "Güvenlik kulübesi kamerası",
          "Araç bariyeri (opsiyonel)",
        ],
      },
      {
        area: "Üretim Alanı",
        description:
          "Üretim hatları, makine bölgeleri ve vardiya geçiş noktaları. İş güvenliği ve kayıt odaklı.",
        features: [
          "Geniş açılı üretim kameraları",
          "Kamera kaydı ile İSG uyumu",
          "Bölgesel alarm (mesai dışı koruma)",
        ],
      },
      {
        area: "Depo ve Raf Alanı",
        description:
          "Stok güvenliği, forklift hareketi ve malzeme çıkış takibi.",
        features: [
          "Raf arası kameralar",
          "Hareket algılama (mesai dışı)",
          "Giriş-çıkış log kaydı",
        ],
      },
      {
        area: "Sevkiyat ve Yükleme Rampası",
        description:
          "Ürün çıkışı, araç yükleme ve teslim süreçlerinin kayıt altına alınması.",
        features: [
          "Rampa kameraları (ürün takibi)",
          "LPR (araç plaka ve zaman damgası)",
          "Kapı kontaktı ve alarm",
        ],
      },
      {
        area: "Otopark ve Araç Bekleme",
        description:
          "Personel ve ziyaretçi araçlarının güvenliği, araç giriş-çıkış kontrolü.",
        features: [
          "Otopark kameraları",
          "LPR plaka tanıma",
          "Aydınlatma entegrasyonu",
        ],
      },
      {
        area: "Turnike ve Personel Geçiş Noktaları",
        description:
          "İç bölgeler arası personel kontrolü, vardiya takibi ve ziyaretçi yönetimi.",
        features: [
          "Tam boy veya bel boy turnike",
          "Kart okuyucu ve parmak izi",
          "Zaman puantajı entegrasyonu",
        ],
      },
    ],
    image: {
      src: "/images/services/bakim-servis/fabrika-guvenlik-kamera-bakim-servisi.jpg",
      alt: "Fabrika güvenlik kamera sistemi bakım servisi",
    },
  },

  /* ── Mid-page CTA ── */
  midPageCta: {
    title: "Tesisinize Özel Çok Bölgeli Güvenlik Planı Hazırlayalım",
    subtitle:
      "Tesis tipinizi paylaşın; çevre hattı, üretim alanı ve depo güvenliğini kapsayan profesyonel keşif ve teklif sunalım.",
    ctaLabel: "Endüstriyel Güvenlik Teklifi Alın",
  },

  /* ── Çözüm Seviyeleri ── */
  solutionTiers: {
    title: "Tesis Ölçeğine Göre Çözüm Seviyeleri",
    subtitle:
      "Bir depo ile büyük üretim tesisi aynı kapsamda değerlendirilemez. Ölçeğinize uygun seviyeyi birlikte belirleyelim.",
    ctaLabel: "Tesisinize Uygun Seviyeyi Belirleyelim",
    tiers: [
      {
        name: "Depo Standart Paket",
        targetAudience: "Tek bina depolar, küçük atölyeler, sanayi dükkanları.",
        solves: "Temel stok güvenliği, giriş kontrolü ve mesai dışı koruma.",
        components: [
          "8–12 kamera (giriş, depo, rampa)",
          "Çevre alarm sistemi (basit)",
          "Hırsız alarm ve hareket sensörleri",
          "NVR kayıt ve mobil erişim",
          "Yangın alarm (zorunlu belgelendirme)",
        ],
        upgradeNote:
          "LPR, turnike veya çevre hattı termal kamera ihtiyacı oluştuğunda.",
      },
      {
        name: "Üretim Tesisi Çözümü",
        targetAudience:
          "Orta ölçekli fabrika, lojistik merkezi, gıda üretim tesisi.",
        solves:
          "Çevre hattı güvenliği, personel-araç kontrolü ve endüstriyel yangın risk yönetimi.",
        components: [
          "16–40 kamera (PTZ dahil)",
          "Çevre hattı alarm ve dedektör",
          "Turnike ve kartlı geçiş sistemi",
          "LPR plaka tanıma (nizamiye)",
          "Endüstriyel yangın alarm sistemi",
          "NVR/kayıt ve merkezi izleme yazılımı",
          "SLA garantili bakım sözleşmesi",
        ],
        upgradeNote:
          "Termal kameralar, gaz algılama, ATEX bileşenler veya çoklu tesis yönetimi gerektiğinde.",
      },
      {
        name: "Endüstriyel Çok Bölgeli Çözüm",
        targetAudience:
          "Büyük üretim kampüsleri, OSB, çok binalı lojistik merkezleri.",
        solves:
          "Çoklu bina yönetimi, 7/24 izleme, araç-personel tam kontrol ve mevzuat uyumu.",
        components: [
          "40+ kamera (PTZ + termal)",
          "Fiber/kablosuz köprü ağ altyapısı",
          "Çok noktalı turnike ve bariyer sistemi",
          "LPR ve araç izleme entegrasyonu",
          "Endüstriyel yangın + gaz algılama",
          "Merkezi güvenlik yönetim yazılımı",
          "SLA Premium bakım (4 saat müdahale)",
          "7/24 izleme merkezi bağlantısı (opsiyonel)",
        ],
        upgradeNote:
          "Analitik yazılım, yüz tanıma veya özel entegrasyon (ERP/WMS) gerektiğinde.",
      },
    ],
  },

  /* ── Neden Tek Elden Kurulum ── */
  whyIntegrated: {
    title: "Neden Endüstriyel Güvenlikte Tek Entegratör Çalışmalısınız?",
    subtitle:
      "Kamera ayrı firma, turnike ayrı firma, yangın alarm ayrı firma — bu model endüstriyel tesislerde ciddi risk oluşturur.",
    items: [
      {
        title: "Bileşenler Koordineli Çalışır",
        description:
          "Çevre hattı alarmı tetiklendiğinde PTZ kamera ilgili bölgeye döner, kayıt işaretlenir, bildirim gönderilir. Entegre olmayan sistemde bu mümkün değildir.",
      },
      {
        title: "Arıza Sorumluluğu Netleşir",
        description:
          "Tek entegratör tüm bileşenlerden sorumludur. 'Bu bizim sorunumuz değil' cevabı ortadan kalkar.",
      },
      {
        title: "SLA Bakım Tek Sözleşmede",
        description:
          "Kamera, alarm, turnike ve yangın alarm bakımı tek SLA sözleşmesiyle yönetilir. Planlı bakım takvimi tutarlı uygulanır.",
      },
      {
        title: "Proje ve Belgelendirme Bütünlüğü",
        description:
          "Sigorta, İSG denetimi veya müşteri denetiminde tüm bileşenlerin uyumunu gösteren tek belge seti sunulur.",
      },
      {
        title: "Tek Kablo Altyapısı",
        description:
          "Geniş tesislerde fiber veya bakır altyapı tek projede çekilir. Maliyet düşer, tesis içi karmaşa azalır.",
      },
      {
        title: "Eğitim ve Devir Tek Seferde",
        description:
          "Güvenlik personeli ve tesis yönetimi tüm bileşenler için tek eğitim alır. Personel değişikliğinde rehber doküman bırakılır.",
      },
    ],
  },

  /* ── Keşif ve Teklif Süreci ── */
  discoveryProcess: {
    title: "Endüstriyel Güvenlik Projeniz Nasıl İlerler?",
    subtitle:
      "İlk iletişimden SLA bakım sözleşmesine kadar şeffaf ve yapılandırılmış bir süreç.",
    steps: [
      {
        step: 1,
        title: "Tesis Bilgilerini Alıyoruz",
        description:
          "Tesis tipini, alan büyüklüğünü, personel sayısını ve öncelikli güvenlik sorununu form, telefon veya WhatsApp üzerinden öğreniyoruz.",
      },
      {
        step: 2,
        title: "Ön Değerlendirme ve Kapsam Belirleme",
        description:
          "Teknik ekibimiz sizi arayarak bileşen kapsamını (kamera, alarm, turnike, LPR, yangın) ve bütçe aralığını netleştiriyor.",
      },
      {
        step: 3,
        title: "Yerinde Keşif ve Risk Analizi",
        description:
          "Tesise gelerek çevre hattını, giriş noktalarını, üretim/depo alanlarını ve sevkiyat bölgesini ölçüyor, risk haritasını çıkarıyoruz.",
      },
      {
        step: 4,
        title: "Proje Dosyası ve Teklif",
        description:
          "Bileşen listesi, yerleşim planı, altyapı detayı ve net fiyat teklifini proje dosyası olarak gönderiyoruz.",
      },
      {
        step: 5,
        title: "Aşamalı Kurulum",
        description:
          "Üretimi durdurmadan aşamalı kurulum. Çevre hattı, nizamiye, iç alanlar sırayla devreye alınır.",
      },
      {
        step: 6,
        title: "Devreye Alma ve SLA Bakım",
        description:
          "Test, eğitim, belgelendirme ve SLA bakım sözleşmesi ile proje tamamlanır. Arızada 4 saat sahada müdahale taahhüdü başlar.",
      },
    ],
  },

  /* ── Karar Blokları ── */
  decisionBlocks: [
    {
      title: "Hangi Durumda Endüstriyel Güvenlik Projesi Gereklidir?",
      items: [
        "Yeni fabrika veya depo devreye alınıyor ve güvenlik altyapısı sıfırdan kurulacaksa.",
        "Mevcut güvenlik yetersiz — çevre hattı izlenemiyor, kamera kapsamı eksik, erişim kontrol yok.",
        "Personel sayısı yüksek ve turnike / kartlı geçiş ihtiyacı oluşmuşsa.",
        "Sigorta, İSG mevzuatı veya müşteri denetimi güvenlik sistemi zorunluluğu getiriyorsa.",
        "Farklı firmalardan parçalı sistem alındığında arıza ve bakımda muhatap bulunamıyorsa.",
      ],
    },
    {
      title: "Hangi Durumda Tekil Hizmet Yeterli Olabilir?",
      items: [
        "Yalnızca kamera ihtiyacınız varsa: kamera sistemi kurulumu sayfamızı inceleyin.",
        "Sadece yangın alarm zorunluluğu varsa: yangın alarm sistemi kurulumu değerlendirilebilir.",
        "Personel giriş kontrolü öncelikli ise: kartlı geçiş ve turnike sistemi incelenmelidir.",
        "Mevcut kamera/alarm bakım sorunu varsa: bakım ve servis sayfamızı inceleyin.",
      ],
    },
  ],

  /* ── Kapsam Detayı ── */
  scopeDetails: {
    title: "Projede Neler Dahil, Neler Ayrıca Değerlendirilir?",
    description:
      "Endüstriyel güvenlik projesinde standart kapsam ve tesise göre ek değerlendirme gerektiren başlıklar:",
    includedTitle: "Standart projede dahil",
    includedItems: [
      "Ücretsiz yerinde keşif ve çok bölgeli risk analizi",
      "Kamera, alarm, yangın alarm ve erişim kontrol montajı",
      "Çevre hattı alarm ve dedektör sistemi kurulumu",
      "NVR kayıt, raporlama yazılımı ve merkezi yönetim kurulumu",
      "Belgelendirme, test raporları ve sistem devreye alma",
    ],
    additionalTitle: "Tesise göre ayrıca değerlendirilen başlıklar",
    additionalItems: [
      "Termal kamera (gece çevre güvenliği)",
      "PTZ kamera (geniş alan tarama)",
      "LPR plaka tanıma ve araç bariyer sistemi",
      "Turnike, güvenlik kulübesi ve personel geçiş sistemi",
      "Gaz algılama veya ATEX uyumlu bileşenler",
      "Fiber altyapı veya kablosuz köprü çözümleri",
    ],
  },

  /* ── Fiyatlandırma Faktörleri ── */
  pricingFactors: {
    description:
      "Endüstriyel güvenlik sistemi fiyatı tesis ölçeği, bileşen kapsamı ve altyapı durumuna bağlıdır.",
    items: [
      "Tesisin toplam alanı ve çevre hattı uzunluğu kamera ve dedektör sayısını belirler.",
      "Personel sayısı turnike kapasitesini, yangın risk profili dedektör tiplerini etkiler.",
      "Gece koşulları için termal kamera ve ek aydınlatma altyapısı ek maliyet kalemidir.",
      "Mevcut kablo altyapısı varsa kullanılabilir; geniş alanlarda yeni çekim belirleyici maliyet kalemi olur.",
      "SLA seviyesi (müdahale süresi taahhüdü) bakım sözleşmesi fiyatını doğrudan etkiler.",
      "LPR, turnike ve bariyer gibi erişim kontrol bileşenleri projeye göre fiyatlandırılır.",
    ],
  },

  /* ── Mekan Türleri ── */
  venueTypes: [
    {
      title: "Üretim Tesisi",
      description:
        "İş güvenliği odaklı kamera, çevre hattı koruması, vardiya bazlı erişim kontrolü ve endüstriyel yangın algılama.",
    },
    {
      title: "Lojistik Deposu",
      description:
        "Yükleme rampası, stok alanı ve araç trafiği takibi. LPR plaka tanıma ve sevkiyat kayıt sistemi.",
    },
    {
      title: "Soğuk Hava Deposu",
      description:
        "IP67+ koruma sınıfı kameralar ve özel koşullara dayanıklı algılama. Sıcaklık izleme entegrasyonu.",
    },
    {
      title: "Sanayi Sitesi ve OSB",
      description:
        "Ortak alan kameraları, turnike sistemi, ana giriş LPR ve bölgesel erişim yetkilendirmesi.",
    },
    {
      title: "Gıda Üretim Tesisi",
      description:
        "HACCP uyumlu izleme, hijyen alanı kontrolü, sıcaklık kaydı ve detaylı arşivleme sistemi.",
    },
    {
      title: "Enerji ve Kimya Tesisi",
      description:
        "ATEX uyumlu bileşenler, gaz algılama, yüksek riskli alan kameraları ve özel yangın algılama.",
    },
  ],

  /* ── Güven Blokları ── */
  trustBlocks: {
    title: "Somut Güvencelerimiz",
    subtitle: "Endüstriyel projede söz değil, taahhüt önemlidir:",
    items: [
      { text: "Aynı gün geri dönüş, hızlı ön değerlendirme" },
      { text: "Ücretsiz yerinde keşif ve risk analizi" },
      { text: "Size bir proje yöneticisi atanır" },
      { text: "Üretimi durdurmadan aşamalı kurulum" },
      { text: "SLA bakım — arızada 4 saat sahada müdahale" },
      { text: "Planlı bakım takvimi ve raporlama" },
      { text: "Sigorta, İSG ve denetim belgeleri hazır" },
      { text: "Eğitim, devir dokümanı ve 7/24 destek hattı" },
    ],
  },

  /* ── İç Linkler ── */
  internalLinks: {
    title: "İlgili Hizmet ve Çözüm Sayfaları",
    subtitle:
      "Tesisinizin ihtiyacına göre tek bileşen bazlı hizmet sayfalarımızı da inceleyebilirsiniz.",
    links: [
      {
        href: "/kamera-sistemi-kurulumu",
        label: "Güvenlik Kamera Sistemi Kurulumu",
        description:
          "PTZ, geniş açı ve termal kamera seçenekleri. Çevre hattı ve iç alan kapsama planlama.",
      },
      {
        href: "/alarm-sistemi-kurulumu",
        label: "Hırsız Alarm Sistemi Kurulumu",
        description:
          "Çok bölgeli alarm, çevre hattı dedektörleri ve mesai dışı güvenlik otomasyonu.",
      },
      {
        href: "/yangin-alarm-sistemi-kurulumu",
        label: "Yangın Alarm Sistemi Kurulumu",
        description:
          "Endüstriyel yangın algılama, gaz dedektörleri, belgelendirme ve mevzuat uyumu.",
      },
      {
        href: "/kartli-gecis-sistemi-kurulumu",
        label: "Kartlı Geçiş ve Turnike Sistemi",
        description:
          "Personel giriş-çıkış kontrolü, vardiya takibi, zaman puantajı ve ziyaretçi yönetimi.",
      },
      {
        href: "/bakim-servis-uzaktan-izleme",
        label: "Bakım, Servis ve SLA Sözleşmesi",
        description:
          "SLA garantili periyodik bakım, arıza servisi ve uzaktan izleme merkezi bağlantısı.",
      },
      {
        href: "/paketler-ve-fiyatlandirma",
        label: "Paketler ve Fiyatlandırma",
        description: "Endüstriyel ölçekte örnek paketler ve fiyat aralıkları.",
      },
    ],
  },

  /* ── Segment Bağlantıları ── */
  segments: [
    {
      title: "Üretim Tesisleri",
      content:
        "Üretim hatları, depo alanları ve personel girişlerini kapsayan entegre güvenlik. Vardiya takibi, erişim yetkilendirmesi ve İSG uyumu dahil.",
      href: "/kartli-gecis-sistemi-kurulumu",
    },
    {
      title: "Lojistik ve Depo",
      content:
        "Büyük kapasiteli depolarda geniş alan kameraları, çevre alarm sistemi, yükleme rampası takibi ve LPR araç kontrolü.",
      href: "/kamera-sistemi-kurulumu",
    },
    {
      title: "Endüstriyel Yangın Güvenliği",
      content:
        "Akaryakıt, kimyasal ve yanıcı madde barındıran tesisler için yangın ve gaz algılama. ATEX uyumlu seçenekler ve zorunlu belgelendirme.",
      href: "/yangin-alarm-sistemi-kurulumu",
    },
  ],

  /* ── FAQ — Ticari ve İtiraz Giderici ── */
  faq: [
    {
      question: "Endüstriyel güvenlik sistemi maliyeti neye göre değişir?",
      answer:
        "Tesis alanı, çevre hattı uzunluğu, kamera sayısı, turnike kapasitesi ve SLA bakım seviyesi fiyatı belirler. Keşif sonrası net teklif verilir — sürpriz maliyet olmaz.",
    },
    {
      question: "Gece çevre güvenliği nasıl sağlanır?",
      answer:
        "Termal kameralar ve IR dedektörler ile gece, sis ve yağmurda tam çevre algılama sağlanır. Gerekirse ek dış aydınlatma planlanır.",
    },
    {
      question: "Üretimi durdurmadan kurulum yapılabilir mi?",
      answer:
        "Evet. Aşamalı kurulum planıyla üretim akışı kesintiye uğramadan sistem devreye alınır. Mesai dışı montaj opsiyonu da mevcuttur.",
    },
    {
      question: "SLA sözleşmesi tam olarak ne garanti ediyor?",
      answer:
        "Arıza bildiriminden itibaren taahhüt edilen sürede (genellikle 4 saat) sahada müdahale. Planlı periyodik bakım ve yedek parça önceliği de dahildir.",
    },
    {
      question: "LPR plaka tanıma sistemi nasıl çalışır?",
      answer:
        "Nizamiye veya otopark girişinde kamera ile araç plakası otomatik okunur, kayıt altına alınır. Tanımlı araçlar için bariyer otomatik açılır, tanımsız araçlar raporlanır.",
    },
    {
      question: "Mevcut eski sistem korunabilir mi?",
      answer:
        "Keşifte mevcut cihazları değerlendiriyoruz. Çalışan ve uyumlu bileşenler korunur, yalnızca eksik veya yetersiz olanlar yenilenir.",
    },
    {
      question: "Sigorta ve denetim belgeleri sağlıyor musunuz?",
      answer:
        "Evet. Kurulum belgeleri, test raporları, yangın alarm sertifikaları ve bakım kayıtları sigorta şirketleri ve denetim makamlarının talep ettiği formatta hazırlanır.",
    },
    {
      question: "Çok büyük tesislerde ağ altyapısı sorun olur mu?",
      answer:
        "Geniş tesislerde fiber altyapı veya kablosuz köprü çözümü ile ağ altyapısını projede planlıyoruz. Kamera ve turnike verileri kesintisiz iletilir.",
    },
    {
      question: "Birden fazla tesis tek merkezden yönetilebilir mi?",
      answer:
        "Evet. Merkezi güvenlik yönetim yazılımı ile farklı lokasyonlardaki tüm kamera, alarm ve erişim kontrol sistemleri tek ekrandan izlenebilir ve yönetilebilir.",
    },
    {
      question: "ATEX veya özel endüstriyel koşullar için çözüm var mı?",
      answer:
        "Yanıcı gaz veya toz riski olan alanlarda ATEX sertifikalı kameralar ve dedektörler kullanılır. Risk profiline göre uygun bileşen seçimi keşifte planlanır.",
    },
  ],

  /* ── CTA ve Final ── */
  finalCtaTitle: "Tesisiniz İçin Endüstriyel Güvenlik Teklifi Alın",
  finalCtaSubtitle:
    "Çevre hattı, turnike, LPR ve SLA bakım dahil. Tesise özel ücretsiz keşif için hemen iletişime geçin.",
  whatsappMessage:
    "Merhaba, fabrikamız/depomuz için güvenlik sistemi teklifi almak istiyorum.",
  defaultService: "hepsi",
  ctaContent: {
    badge: "Endüstriyel güvenlik • Keşif • Teklif",
    title: "Tesisiniz İçin Endüstriyel Güvenlik Teklifi Alın",
    subtitle:
      "Tesis tipini, alan büyüklüğünü ve personel sayısını paylaşın. Çok bölgeli güvenlik planı ve SLA teklifini hazırlayalım.",
    trustItems: [
      "PTZ, termal kamera ve çevre hattı güvenliği",
      "Turnike, LPR ve çok bölgeli erişim kontrol",
      "SLA garantili bakım sözleşmesi",
      "Endüstriyel yangın alarm belgelendirme dahil",
    ],
    supportCards: [
      {
        title: "Endüstriyel ölçekte proje yönetimi",
        text: "Çevre hattı, üretim alanı, depo ve sevkiyat bölgelerini ayrı ayrı planlıyoruz.",
      },
      {
        title: "SLA garantili bakım ve destek",
        text: "Arıza bildiriminden itibaren 4 saat sahada müdahale taahhüdü ve planlı periyodik bakım.",
      },
    ],
  },
};

export default function FabrikaDepoSayfasi() {
  return <ServicePageTemplate data={data} />;
}
