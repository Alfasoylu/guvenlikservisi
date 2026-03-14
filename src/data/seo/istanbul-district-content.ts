/**
 * Istanbul District Content — Per-district, per-service content variations
 * for district-level landing pages.
 *
 * This data ensures each district page has unique H1 angles, intro copy,
 * FAQ items, commercial profiles, and CTA wording — preventing thin content.
 */

export interface DistrictServiceContent {
  /** Unique H1 title for this district × service combo */
  heroTitle: string;
  /** 2-3 sentence hero intro — localized to district context */
  heroIntro: string;
  /** Short WhatsApp message template */
  whatsappMessage: string;
  /** District-specific FAQ items (≥3 unique per page) */
  faqs: { question: string; answer: string }[];
  /** Commercial angle — explains why this service matters HERE */
  commercialAngle: string;
  /** CTA heading in final section */
  ctaTitle: string;
  /** CTA subtitle */
  ctaSubtitle: string;
}

export interface DistrictProfile {
  /** Human-readable district name */
  name: string;
  slug: string;
  /** Locative case (e.g. "Kadıköy'de") */
  locative: string;
  /** 1-2 sentence district intro for shared hero context */
  districtIntro: string;
  /** Notable areas, streets, landmarks within the district */
  landmarks: string[];
  /** Nearby districts for internal linking */
  nearbyDistricts: string[];
  /** Per-service content map */
  services: Record<string, DistrictServiceContent>;
}

// ---------------------------------------------------------------------------
// Pilot districts — Tier 1
// ---------------------------------------------------------------------------

const kadikoy: DistrictProfile = {
  name: "Kadıköy",
  slug: "kadikoy",
  locative: "Kadıköy'de",
  districtIntro:
    "Anadolu Yakası'nın en işlek ticaret ve kültür merkezlerinden biri olan Kadıköy; yoğun mağaza trafiği, ofis binaları ve konut siteleriyle güvenlik sistemi talebinin en yüksek olduğu ilçeler arasındadır.",
  landmarks: [
    "Kadıköy Çarşı",
    "Bağdat Caddesi",
    "Moda",
    "Fenerbahçe",
    "Caferağa",
    "Kozyatağı",
    "Yeldeğirmeni",
    "Kalamış",
    "Fikirtepe",
    "Hasanpaşa",
  ],
  nearbyDistricts: ["atasehir", "maltepe", "uskudar", "kartal"],
  services: {
    "kamera-sistemi-kurulumu": {
      heroTitle: "Kadıköy Kamera Sistemi Kurulumu",
      heroIntro:
        "Bağdat Caddesi'nin yoğun perakende trafiği, Kozyatağı'ndaki iş merkezleri ve Moda sahilindeki butik işletmeler — Kadıköy'de her metrekare profesyonel kamera izleme hak ediyor. Keşiften montaja aynı gün hizmet.",
      whatsappMessage:
        "Merhaba, Kadıköy'de kamera sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Bağdat Caddesi'ndeki mağaza yoğunluğu, Kozyatağı-Fikirtepe hattındaki yeni iş merkezleri ve Moda'daki konut siteleri Kadıköy'de kesintisiz kamera izleme ihtiyacını artırıyor.",
      ctaTitle: "Bağdat Caddesi'nden Moda'ya — Kadıköy'de Kamera Kurulumu",
      ctaSubtitle:
        "Mağazanız, ofisiniz veya konutunuz için yerinde keşif yaptırın; Kadıköy'e özel kamera planınızı birlikte oluşturalım.",
      faqs: [
        {
          question: "Kadıköy'de kamera sistemi kurulumu ne kadar sürer?",
          answer:
            "Orta ölçekli projelerde kurulum genellikle aynı gün tamamlanır. Kamera sayısına ve kablolama mesafesine göre süre keşif sonrası netleşir.",
        },
        {
          question: "Bağdat Caddesi'ndeki mağazam için kaç kamera yeterli?",
          answer:
            "Mağaza girişi, kasa çevresi, depo bölümü ve vitrin alanına göre genellikle 4-8 kamera ile kapsamlı bir plan oluşturulur.",
        },
        {
          question: "Kadıköy'de gece görüşlü kamera kurulumu yapıyor musunuz?",
          answer:
            "Evet. Dış ortam ve düşük ışık alanları için IR gece görüşlü IP kameralarla kurulum yapıyoruz.",
        },
      ],
    },
    "alarm-sistemi-kurulumu": {
      heroTitle: "Kadıköy Alarm Sistemi Kurulumu",
      heroIntro:
        "Moda'nın dar sokaklarındaki dükkanlardan Caferağa'nın konut bloklarına kadar Kadıköy genelinde hırsızlık caydırıcı alarm çözümleri. Sensör planlamasından mobil bildirime kadar komple kurulum.",
      whatsappMessage:
        "Merhaba, Kadıköy'de alarm sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Moda ve Caferağa gibi yoğun konut bölgeleri ile Bağdat Caddesi'ndeki mağazalar, Kadıköy'de alarm sistemi kurulumunu hem güvenlik hem caydırıcılık açısından kritik kılıyor.",
      ctaTitle: "Kadıköy'de Güvenliği Alarma Bağlayın",
      ctaSubtitle:
        "Kadıköy'deki mağazanız veya daireniz için sensör planlaması ve keşif randevusu alın — kurulum aynı gün tamamlanır.",
      faqs: [
        {
          question:
            "Kadıköy Bağdat Caddesi'ndeki mağazam için alarm sistemi nasıl planlanır?",
          answer:
            "Cadde cephesi, vitrin alanı, arka ofis ve depo girişi analiz edilerek mağaza yapısına uygun sensör planı oluşturulur.",
        },
        {
          question: "Kadıköy'deki mağazam için hangi alarm tipi uygun?",
          answer:
            "Mağaza girişine, vitrin alanına ve arka ofise göre kablosuz veya hibrit alarm sistemleri önerilir. Keşif sonrası net seçim yapılır.",
        },
        {
          question:
            "Kadıköy'de mağaza alarm sistemi mesai dışında nasıl çalışır?",
          answer:
            "Mağaza kapandığında alarm otomatik devreye girer; hareket algılandığında anlık mobil bildirim ve siren uyarısı gönderilir.",
        },
      ],
    },
    "kartli-gecis-sistemi-kurulumu": {
      heroTitle: "Kadıköy Kartlı Geçiş Sistemi Kurulumu",
      heroIntro:
        "Kozyatağı'ndaki iş merkezleri, Fikirtepe'nin yeni rezidansları ve Fenerbahçe'deki siteler — Kadıköy'de binlerce kişi her gün kontrollü giriş noktasından geçiyor. Profesyonel kartlı geçiş kurulumu ile bu trafiği yönetin.",
      whatsappMessage:
        "Merhaba, Kadıköy'de kartlı geçiş sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Kozyatağı ve Fikirtepe'deki iş merkezleri, Bağdat Caddesi üzerindeki ticari yapılar ve Fenerbahçe'deki siteler, Kadıköy'de profesyonel erişim kontrol sistemi ihtiyacını artırıyor.",
      ctaTitle: "Kadıköy'de Giriş Kontrolünü Profesyonelleştirin",
      ctaSubtitle:
        "Kozyatağı ofisleriniz veya Fenerbahçe siteleriniz için kartlı geçiş keşfi ve teklif alın.",
      faqs: [
        {
          question: "Kadıköy'de kartlı geçiş sistemi hangi binalar için uygun?",
          answer:
            "Ofis binaları, plazalar, apartman girişleri ve site yönetimleri için uygundur. Giriş trafiğine göre sistem kapasitesi belirlenir.",
        },
        {
          question:
            "Kadıköy'deki apartmanımın interkom sistemine kartlı geçiş eklenebilir mi?",
          answer:
            "Kadıköy'deki birçok apartman ve site mevcut interkom altyapısına entegre edilebilir. Keşif sonrası uyumluluk yerinde değerlendirilir.",
        },
        {
          question: "Kozyatağı'ndaki ofisime ziyaretçi yönetimi nasıl kurulur?",
          answer:
            "Geçici kart, QR kod veya uzaktan kapı açma seçenekleriyle ziyaretçi girişleri düzenlenir; giriş logları raporlanır.",
        },
      ],
    },
  },
};

const besiktas: DistrictProfile = {
  name: "Beşiktaş",
  slug: "besiktas",
  locative: "Beşiktaş'ta",
  districtIntro:
    "İstanbul'un en prestijli iş ve yaşam merkezlerinden biri olan Beşiktaş; Levent-Maslak iş merkezi aksı, Etiler-Ulus konut bölgesi ve Ortaköy-Bebek sahil hattıyla yüksek güvenlik beklentisi taşıyan bir ilçedir.",
  landmarks: [
    "Levent",
    "Maslak",
    "Etiler",
    "Ulus",
    "Ortaköy",
    "Bebek",
    "Beşiktaş Çarşı",
    "Dikilitaş",
    "Akatlar",
    "Konaklar",
  ],
  nearbyDistricts: ["sisli", "sariyer", "kagithane", "beyoglu"],
  services: {
    "kamera-sistemi-kurulumu": {
      heroTitle: "Beşiktaş Kamera Sistemi Kurulumu",
      heroIntro:
        "Levent-Maslak iş merkezlerinden Bebek sahiline, Etiler villalarından Ortaköy sahil hattına — Beşiktaş'ın prestijli bölgeleri kurumsal standartlarda kamera güvenliği gerektiriyor. Yüksek çözünürlüklü IP kamera ile 7/24 izleme altyapısı.",
      whatsappMessage:
        "Merhaba, Beşiktaş'ta kamera sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Levent-Maslak aksındaki kurumsal ofisler, Etiler'deki villa ve rezidanslar ile Ortaköy'deki ticari işletmeler Beşiktaş'ta yüksek standartlı kamera güvenliği gerektiriyor.",
      ctaTitle: "Levent'ten Bebek'e — Beşiktaş'ta Kamera Güvenliği",
      ctaSubtitle:
        "Beşiktaş'taki ofisiniz, villanız veya işletmeniz için yerinde keşif yaptırın; uzaktan erişimli kamera planınızı hazırlayalım.",
      faqs: [
        {
          question:
            "Beşiktaş'ta kurumsal ofis için kamera sistemi kurulumu nasıl planlanır?",
          answer:
            "Ofis giriş-çıkışları, ortak alanlar, sunucu odası ve otopark alanları keşif sonrası analiz edilerek kamera planı oluşturulur.",
        },
        {
          question: "Levent'teki plazam için merkezi izleme kurulabilir mi?",
          answer:
            "Evet. Çok katlı yapılarda kat bazlı kamera planı ve merkezi NVR üzerinden uzaktan erişimli izleme kurulumu yapılmaktadır.",
        },
        {
          question:
            "Beşiktaş'ta dış ortam kamerası için hangi özellikler gerekir?",
          answer:
            "Vandal-proof gövde, IR gece görüşü ve IP66 koruma sınıfı dış mekan kurulumlarında standart olarak önerilir.",
        },
      ],
    },
    "alarm-sistemi-kurulumu": {
      heroTitle: "Beşiktaş Alarm Sistemi Kurulumu",
      heroIntro:
        "Etiler villaları, Ulus rezidansları ve Ortaköy'ün yoğun ticari doküsunda güvenlik beklentisi yüksek. Beşiktaş'a özel, çok bölgeli alarm senaryoları ile villanızdan mağazanıza kadar caydırıcı koruma.",
      whatsappMessage:
        "Merhaba, Beşiktaş'ta alarm sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Etiler ve Ulus'taki villalar, Konaklar ve Akatlar'daki siteler ile Beşiktaş Çarşı'daki işletmeler; hırsızlık caydırıcılığı ve anlık bildirim alan alarm sistemleri gerektiriyor.",
      ctaTitle: "Beşiktaş'ın Prestijine Uygun Alarm Koruması",
      ctaSubtitle:
        "Villanız, rezidansınız veya işletmeniz için Beşiktaş bölgesinde çok bölgeli alarm keşfi ve teklif alın.",
      faqs: [
        {
          question:
            "Etiler'deki villamın bahçe çevresi için alarm nasıl planlanır?",
          answer:
            "Bahçe sınırları, giriş kapıları ve garaj alanına dış ortam sensörleri ile çok bölgeli alarm planı oluşturulur.",
        },
        {
          question:
            "Beşiktaş'ın yoğun caddelerindeki mağazam için alarm ve kamera birlikte kurulabilir mi?",
          answer:
            "Evet. Alarm tetiklendiğinde ilgili kameradan görüntü kaydı başlatma ve mobil bildirim gönderme senaryoları kurulabilir.",
        },
        {
          question:
            "Beşiktaş'ta alarm sistemi bina yönetiminden onay gerektirir mi?",
          answer:
            "Apartman veya rezidanslarda ortak alanlara müdahale yoksa genellikle onay gerekmez. Daire içi kablosuz kurulum bağımsız yapılabilir.",
        },
      ],
    },
    "kartli-gecis-sistemi-kurulumu": {
      heroTitle: "Beşiktaş Kartlı Geçiş Sistemi Kurulumu",
      heroIntro:
        "Levent-Maslak aksında günde binlerce çalışan giriş-çıkış yapıyor; Etiler ve Ulus'taki sitelerde kiralık-satılık döngüsü hızlı. Kartlı geçiş sistemiyle erişim trafiğini merkezi olarak yönetin.",
      whatsappMessage:
        "Merhaba, Beşiktaş'ta kartlı geçiş sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Levent'teki çok katlı ofis binaları, Maslak'taki iş merkezleri ve Etiler'deki rezidanslar; personel, ziyaretçi ve kiracı trafiğini kontrol eden kartlı geçiş sistemi gerektiriyor.",
      ctaTitle: "Beşiktaş'ta Erişim Kontrolünüzü Yenileyin",
      ctaSubtitle:
        "Levent ofisleriniz veya Etiler rezidanslarınız için kartlı geçiş keşfi ve teklif alın — personel ve ziyaretçi yönetimini kolaylaştırın.",
      faqs: [
        {
          question: "Beşiktaş'ta ofis binasına kartlı geçiş nasıl kurulur?",
          answer:
            "Giriş kapısı, kat geçişleri ve özel alanlar keşif sonrası belirlenerek okuyucu ve kontrol paneli yerleşimi planlanır.",
        },
        {
          question:
            "Levent plazalarında kartlı geçiş ile turnike nasıl entegre edilir?",
          answer:
            "Turnike, bariyer veya manyetik kilit mevcut altyapıya uygun şekilde bağlanır; giriş-çıkış logları merkezi panelden izlenir.",
        },
        {
          question:
            "Maslak'taki çok kiralık ofiste kat bazlı erişim kısıtlaması yapılabilir mi?",
          answer:
            "Evet. Giriş-çıkış logları, zaman bazlı erişim kısıtlamaları ve personel bazlı raporlar kat bazında ayrı yönetilebilir.",
        },
      ],
    },
  },
};

const atasehir: DistrictProfile = {
  name: "Ataşehir",
  slug: "atasehir",
  locative: "Ataşehir'de",
  districtIntro:
    "İstanbul Finans Merkezi ile birlikte Türkiye'nin en hızlı büyüyen ticari bölgelerinden biri olan Ataşehir; yüksek katlı rezidanslar, kurumsal ofisler ve AVM'lerle yoğun güvenlik sistemi talebi oluşturuyor.",
  landmarks: [
    "İstanbul Finans Merkezi (İFM)",
    "Ataşehir Bulvarı",
    "Watergarden",
    "Brandium",
    "Ataşehir Residans bölgesi",
    "İçerenköy",
    "Küçükbakkalköy",
    "Kayışdağı",
    "Ferhatpaşa",
    "Yenişehir",
  ],
  nearbyDistricts: ["kadikoy", "umraniye", "sancaktepe", "maltepe"],
  services: {
    "kamera-sistemi-kurulumu": {
      heroTitle: "Ataşehir Kamera Sistemi Kurulumu",
      heroIntro:
        "İstanbul Finans Merkezi'nin gölgesinde hızla yükselen Ataşehir, kurumsal güvenlik talebinde patlama yaşıyor. Rezidanslardan AVM çevrelerine kadar yüksek çözünürlüklü IP kamera ile 7/24 izleme.",
      whatsappMessage:
        "Merhaba, Ataşehir'de kamera sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "İFM'nin devreye girmesiyle Ataşehir'de kurumsal güvenlik talebi hızla yükseliyor. Yüksek katlı yapılar, AVM çevreleri ve rezidans siteleri kapsamlı kamera planlaması gerektiriyor.",
      ctaTitle: "İFM Bölgesinde Kamera Altyapınızı Planlatın",
      ctaSubtitle:
        "Ataşehir'deki rezidansınız, ofisiniz veya ticari alanınız için yerinde keşif; yüksek katlı yapılara uygun kamera planı.",
      faqs: [
        {
          question:
            "Ataşehir'de rezidans projesi için kamera sistemi nasıl planlanır?",
          answer:
            "Giriş, otopark, asansör holistik alanları ve çevre hattı analiz edilerek yüksek katlı yapılara uygun kamera sistemi oluşturulur.",
        },
        {
          question:
            "İstanbul Finans Merkezi çevresinde kurumsal izleme kurulabilir mi?",
          answer:
            "Evet. İFM çevresindeki ofis ve ticari alanlarda kurumsal standartlara uygun kamera, NVR ve uzaktan erişim çözümleri sunulur.",
        },
        {
          question:
            "Ataşehir'de AVM çevresinde dış kamera kurulumu yapılıyor mu?",
          answer:
            "Evet. Otopark girişleri, yükleme alanları ve çevre hattı için IP66 koruma sınıfı dış mekan kameralarıyla kurulum yapılır.",
        },
      ],
    },
    "alarm-sistemi-kurulumu": {
      heroTitle: "Ataşehir Alarm Sistemi Kurulumu",
      heroIntro:
        "Ataşehir Bulvarı çevresindeki yoğun inşaat temposu ve İçerenköy-Küçükbakkalköy hattındaki yeni konut projeleri alarm ihtiyacını artırıyor. Hızlı devreye giren, mobil bildirimli alarm çözümleri.",
      whatsappMessage:
        "Merhaba, Ataşehir'de alarm sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Ataşehir Bulvarı çevresindeki ticari yapılar, İçerenköy ve Küçükbakkalköy'deki konut projeleri ve Ferhatpaşa'daki yeni yerleşim alanları; hızlı devreye giren alarm çözümleri gerektiriyor.",
      ctaTitle: "Hızla Büyüyen Ataşehir'de Alarm Güvenliğinizi Kurun",
      ctaSubtitle:
        "Ataşehir'deki daireniz veya işyeriniz için sensör planlaması ve keşif randevusu alın — mobilden anlık takip.",
      faqs: [
        {
          question: "Ataşehir'de rezidans dairesi için alarm gerekli mi?",
          answer:
            "Yüksek katlı yapılarda site güvenliği olsa da daire girişleri, balkon ve servis alanları için ek alarm koruması önerilir.",
        },
        {
          question:
            "Ataşehir Bulvarı'ındaki ofisim için en uygun alarm tipi hangisi?",
          answer:
            "Ofis büyüklüğüne, giriş sayısına ve çalışma saatlerine göre kablosuz veya hibrit alarm sistemleri önerilir.",
        },
        {
          question:
            "Ataşehir'de yeni taşındığım rezidansta alarm kurulumu bina yönetimiyle koordineli mi yapılır?",
          answer:
            "Daire içi kablosuz alarm bağımsız kurulur; ortak alan sensörü gerekiyorsa bina yönetimiyle koordine sağlanır.",
        },
      ],
    },
    "kartli-gecis-sistemi-kurulumu": {
      heroTitle: "Ataşehir Kartlı Geçiş Sistemi Kurulumu",
      heroIntro:
        "İFM bölgesinin kurumsal yoğunluğu, Ataşehir Bulvarı'ndaki plazalar ve yüksek katlı rezidanslar — her gün binlerce kişinin giriş-çıkışını yönetmek ancak kartlı geçiş sistemiyle mümkün.",
      whatsappMessage:
        "Merhaba, Ataşehir'de kartlı geçiş sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "İstanbul Finans Merkezi çevresindeki kurumsal yapılar, Ataşehir Bulvarı'ndaki plazalar ve yüksek katlı rezidanslar; personel ve ziyaretçi akışını yönetmek için kartlı geçiş sistemi gerektiriyor.",
      ctaTitle: "Ataşehir'de Giriş Trafiğinizi Dijitalleştirin",
      ctaSubtitle:
        "Ataşehir'deki plaza, rezidans veya site projeniz için kartlı geçiş keşfi ve teklif alın.",
      faqs: [
        {
          question:
            "Ataşehir'de rezidans sitesine kartlı geçiş kurulabilir mi?",
          answer:
            "Evet. Bina girişleri, otopark bariyerleri ve spor salonu gibi ortak alanlara kartlı veya proximity geçiş sistemi kurulabilir.",
        },
        {
          question:
            "Watergarden veya Brandium çevresindeki ofiste kartlı geçiş kameraya bağlanabilir mi?",
          answer:
            "Evet. Giriş anında kamera kaydı başlatma ve yetkisiz giriş denemelerinde bildirim gönderme senaryoları kurulabilir.",
        },
        {
          question:
            "İFM bölgesindeki ofislere kurumsal erişim kontrolü sağlanabilir mi?",
          answer:
            "Evet. Çok kiracılı yapılarda kat bazlı yetkilendirme, ziyaretçi yönetimi ve çalışma saati kısıtlamaları planlanabilir.",
        },
      ],
    },
  },
};

// ---------------------------------------------------------------------------
// Registry — only pilot districts for now; extend as tiers roll out
// ---------------------------------------------------------------------------

export const istanbulDistrictProfiles: Record<string, DistrictProfile> = {
  kadikoy,
  besiktas,
  atasehir,
};

/** Services selected for district page rollout */
export const districtPilotServiceSlugs = [
  "kamera-sistemi-kurulumu",
  "alarm-sistemi-kurulumu",
  "kartli-gecis-sistemi-kurulumu",
] as const;

export type DistrictPilotServiceSlug =
  (typeof districtPilotServiceSlugs)[number];

export function getDistrictProfile(
  districtSlug: string,
): DistrictProfile | undefined {
  return istanbulDistrictProfiles[districtSlug];
}

export function getDistrictServiceContent(
  districtSlug: string,
  serviceSlug: string,
): DistrictServiceContent | undefined {
  return istanbulDistrictProfiles[districtSlug]?.services[serviceSlug];
}

// ---------------------------------------------------------------------------
// Service-level content — shared across districts per service
// ---------------------------------------------------------------------------

export interface ServicePriceFactor {
  title: string;
  desc: string;
}

export interface ServiceVenueType {
  title: string;
  desc: string;
}

export interface ServiceLevelContent {
  priceFactors: ServicePriceFactor[];
  venueTypes: ServiceVenueType[];
  priceHeading: string;
  priceSubtitle: string;
  venueHeading: string;
}

const serviceLevelContent: Record<string, ServiceLevelContent> = {
  "kamera-sistemi-kurulumu": {
    priceHeading: "Kamera Sistemi Fiyatını Belirleyen Faktörler",
    priceSubtitle:
      "Kamera sistemi kurulum maliyeti aşağıdaki değişkenlere göre farklılık gösterir.",
    venueHeading: "Hangi Mekanlar İçin Uygun?",
    priceFactors: [
      {
        title: "Kamera Sayısı ve Tipi",
        desc: "Dome, bullet veya PTZ kamera tercihi ile ihtiyaç duyulan adet fiyatın temel belirleyicisidir.",
      },
      {
        title: "Kayıt Altyapısı",
        desc: "NVR/DVR kapasitesi, disk sayısı ve kayıt süresi maliyeti etkiler.",
      },
      {
        title: "Kablolama Mesafesi",
        desc: "Kamera-kayıt cihazı arası mesafe ve kanal kullanımı kablo maliyetini belirler.",
      },
      {
        title: "Çözünürlük",
        desc: "2 MP, 4 MP veya 5 MP çözünürlük seçimi hem kamera hem depolama maliyetini değiştirir.",
      },
      {
        title: "Ek Özellikler",
        desc: "Gece görüş, akıllı algılama, ses kaydı ve uzaktan erişim gibi özellikler fiyata eklenir.",
      },
    ],
    venueTypes: [
      {
        title: "Ev ve Villa",
        desc: "Bahçe, giriş, garaj ve bina çevresi için caydırıcı ve izleme odaklı kamera sistemi.",
      },
      {
        title: "Ofis ve İşletme",
        desc: "Giriş-çıkış, toplantı odası, ortak alan ve sunucu odası için profesyonel kamera kurulumu.",
      },
      {
        title: "Depo ve Sanayi",
        desc: "Yükleme rampaları, üretim alanları, otopark ve çevre güvenliği için geniş açılı kamera çözümleri.",
      },
    ],
  },
  "alarm-sistemi-kurulumu": {
    priceHeading: "Alarm Sistemi Fiyatını Belirleyen Faktörler",
    priceSubtitle:
      "Alarm sistemi kurulum maliyeti aşağıdaki değişkenlere göre farklılık gösterir.",
    venueHeading: "Hangi Alanlar İçin Uygun?",
    priceFactors: [
      {
        title: "Sensör Sayısı",
        desc: "Kapı/pencere manyetik kontakları ve hareket algılayıcı sayısı fiyatı belirler.",
      },
      {
        title: "Kablolu / Kablosuz",
        desc: "Kablosuz sistemler montaj kolaylığı sunarken, kablolu sistemler uzun vade güvenilirliği artırır.",
      },
      {
        title: "Kontrol Paneli",
        desc: "Panel kapasitesi, bölge sayısı ve genişletilebilirlik fiyat farkı oluşturur.",
      },
      {
        title: "Bildirim Sistemi",
        desc: "Mobil uygulama, SMS ve merkezi izleme istasyonu entegrasyonu maliyeti etkiler.",
      },
      {
        title: "Siren ve Uyarıcılar",
        desc: "İç/dış siren, strop lamba ve sesli uyarı seçenekleri ek maliyet oluşturur.",
      },
    ],
    venueTypes: [
      {
        title: "Konut ve Daire",
        desc: "Giriş, pencere ve hareketli alanlar için hırsızlık caydırıcı alarm sistemi.",
      },
      {
        title: "Mağaza ve İşyeri",
        desc: "Mesai dışı güvenlik, anlık bildirim ve uzaktan kontrol için profesyonel alarm çözümleri.",
      },
      {
        title: "Villa ve Site",
        desc: "Bahçe çevresi, garaj ve çoklu giriş noktaları için bölgesel alarm planlaması.",
      },
    ],
  },
  "kartli-gecis-sistemi-kurulumu": {
    priceHeading: "Kartlı Geçiş Sistemi Fiyatını Belirleyen Faktörler",
    priceSubtitle:
      "Kartlı geçiş sistemi maliyeti aşağıdaki değişkenlere göre farklılık gösterir.",
    venueHeading: "Hangi Yapılar İçin Uygun?",
    priceFactors: [
      {
        title: "Okuyucu Sayısı",
        desc: "Giriş noktası sayısı ve okuyucu teknolojisi (proximity, RFID, parmak izi) maliyeti belirler.",
      },
      {
        title: "Kontrol Ünitesi",
        desc: "Merkezi kontrol paneli kapasitesi ve bağlanabilecek okuyucu sayısı fiyatı etkiler.",
      },
      {
        title: "Kilit Tipi",
        desc: "Manyetik kilit, elektrikli kilit veya turnike entegrasyonu maliyet farkı oluşturur.",
      },
      {
        title: "Yazılım ve Raporlama",
        desc: "Çok kiracılı yönetim, zaman bazlı kısıtlamalar ve raporlama modülleri ek maliyet yaratır.",
      },
      {
        title: "Kart / Bileklik Adedi",
        desc: "Kullanıcı sayısına göre kart, bileklik veya anahtarlık adedi toplam fiyatı etkiler.",
      },
    ],
    venueTypes: [
      {
        title: "Ofis ve Plaza",
        desc: "Kat girişleri, toplantı odaları ve özel alanlar için personel bazlı erişim kontrolü.",
      },
      {
        title: "Apartman ve Site",
        desc: "Bina girişi, otopark ve ortak alanlar için sakin/ziyaretçi yönetimi çözümleri.",
      },
      {
        title: "Endüstriyel Tesis",
        desc: "Personel giriş-çıkış takibi, ziyaretçi yönetimi ve alan kısıtlaması için erişim sistemi.",
      },
    ],
  },
};

export function getServiceLevelContent(
  serviceSlug: string,
): ServiceLevelContent | undefined {
  return serviceLevelContent[serviceSlug];
}

/**
 * Returns all district × service combos that have content ready.
 * Used by generateStaticParams and route validation.
 */
export function getAllDistrictServiceParams() {
  return Object.values(istanbulDistrictProfiles).flatMap((profile) =>
    Object.keys(profile.services).map((serviceSlug) => ({
      city: "istanbul" as const,
      district: profile.slug,
      service: serviceSlug,
    })),
  );
}
