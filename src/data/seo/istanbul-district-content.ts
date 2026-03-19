/**
 * Istanbul District Content — Per-district, per-service content variations
 * for district-level landing pages.
 *
 * This data ensures each district page has unique H1 angles, intro copy,
 * FAQ items, commercial profiles, and CTA wording — preventing thin content.
 *
 * Also serves as the unified district registry: Tekirdağ profiles are
 * imported and merged here so that getDistrictProfile() and
 * getApprovedDistrictServiceParams() cover all supported cities.
 */
import {
  tekirdagDistrictProfiles,
  getApprovedTekirdagDistrictServiceParams,
} from "./tekirdag-district-content";

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
        "Etiler villaları, Ulus rezidansları ve Ortaköy'ün yoğun ticari dokusunda güvenlik beklentisi yüksek. Beşiktaş'a özel, çok bölgeli alarm senaryoları ile villanızdan mağazanıza kadar caydırıcı koruma.",
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
            "Ataşehir Bulvarı'ndaki ofisim için en uygun alarm tipi hangisi?",
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
// Tier 1 — Şişli
// ---------------------------------------------------------------------------

const sisli: DistrictProfile = {
  name: "Şişli",
  slug: "sisli",
  locative: "Şişli'de",
  districtIntro:
    "Mecidiyeköy-Esentepe iş aksı, Nişantaşı'nın prestijli perakende dokusu ve Bomonti'nin hızla dönüşen karma yapısıyla Şişli, İstanbul'un en yoğun ticari ilçelerinden biridir.",
  landmarks: [
    "Mecidiyeköy",
    "Nişantaşı",
    "Osmanbey",
    "Bomonti",
    "Esentepe",
    "Fulya",
    "Halaskargazi Caddesi",
    "Teşvikiye",
    "Feriköy",
    "Pangaltı",
  ],
  nearbyDistricts: ["besiktas", "kagithane", "beyoglu", "eyupsultan"],
  services: {
    "kamera-sistemi-kurulumu": {
      heroTitle: "Şişli Kamera Sistemi Kurulumu",
      heroIntro:
        "Mecidiyeköy iş merkezlerinden Nişantaşı butiklerine, Bomonti'nin yeni projelerinden Esentepe ofislerine — Şişli'de her koridorda profesyonel kamera izleme ihtiyacı var. Keşiften montaja aynı gün hizmet.",
      whatsappMessage:
        "Merhaba, Şişli'de kamera sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Mecidiyeköy metro kavşağının getirdiği yoğun yaya-araç trafiği, Nişantaşı'ndaki lüks perakende ve Bomonti'nin dönüşüm projeleri Şişli'de kurumsal standartlarda kamera güvenliğini zorunlu kılıyor.",
      ctaTitle: "Mecidiyeköy'den Nişantaşı'na — Şişli'de Kamera Kurulumu",
      ctaSubtitle:
        "Ofisiniz, mağazanız veya siteniz için Şişli bölgesinde yerinde keşif yaptırın; kamera planınızı birlikte oluşturalım.",
      faqs: [
        {
          question: "Mecidiyeköy'deki ofisim için kamera sistemi nasıl planlanır?",
          answer:
            "Ofis giriş-çıkışları, ortak alanlar, otopark ve sunucu odası keşif sonrası analiz edilerek kamera planı oluşturulur.",
        },
        {
          question: "Nişantaşı'ndaki mağazam için kaç kamera yeterli?",
          answer:
            "Mağaza giriş-çıkışı, kasa alanı, depo ve vitrin bölümüne göre genellikle 4-6 kamera ile kapsamlı izleme sağlanır.",
        },
        {
          question: "Şişli'de plaza kamera sistemi uzaktan izlenebilir mi?",
          answer:
            "Evet. NVR üzerinden mobil ve masaüstü uzaktan erişim kurulumu standart olarak yapılmaktadır.",
        },
      ],
    },
    "alarm-sistemi-kurulumu": {
      heroTitle: "Şişli Alarm Sistemi Kurulumu",
      heroIntro:
        "Nişantaşı'nın yoğun mağaza trafiğinden Feriköy'ün konut bloklarına kadar Şişli genelinde hırsızlık caydırıcı alarm çözümleri. Sensör planlamasından mobil bildirime komple kurulum.",
      whatsappMessage:
        "Merhaba, Şişli'de alarm sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Halaskargazi Caddesi üzerindeki mağazalar, Osmanbey'in toptan ticaret dokusu ve Teşvikiye'nin prestijli konutları Şişli'de alarm kurulumunu hem ticari hem konut tarafında kritik kılıyor.",
      ctaTitle: "Şişli'de Alarm Korumanızı Güçlendirin",
      ctaSubtitle:
        "Mağazanız veya daireniz için Şişli bölgesinde alarm keşfi ve teklif alın — kurulum aynı gün tamamlanır.",
      faqs: [
        {
          question: "Nişantaşı'ndaki mağazam için hangi alarm tipi uygun?",
          answer:
            "Mağaza giriş-çıkışına, vitrin alanına ve depo bölümüne göre kablosuz veya hibrit alarm sistemleri önerilir.",
        },
        {
          question: "Şişli'de apartman dairesi için alarm kurulumu yapılıyor mu?",
          answer:
            "Evet. Daire içi kablosuz alarm bağımsız kurulur; manyetik kapı sensörü ve hareket dedektörüyle tam koruma sağlanır.",
        },
        {
          question: "Mecidiyeköy'deki ofisim için alarm ve kamera birlikte kurulabilir mi?",
          answer:
            "Evet. Alarm tetiklendiğinde ilgili kameradan görüntü kaydı başlatma ve mobil bildirim gönderme senaryoları kurulabilir.",
        },
      ],
    },
    "kartli-gecis-sistemi-kurulumu": {
      heroTitle: "Şişli Kartlı Geçiş Sistemi Kurulumu",
      heroIntro:
        "Mecidiyeköy'deki yoğun plaza trafiğinden Esentepe'nin çok kiracılı ofis binalarına — Şişli'de günde binlerce kişinin giriş-çıkışını kartlı geçiş sistemiyle yönetin.",
      whatsappMessage:
        "Merhaba, Şişli'de kartlı geçiş sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Mecidiyeköy metro çevresi, Esentepe'deki çok katlı ofis yapıları ve Fulya'daki rezidanslar; personel, ziyaretçi ve kiracı trafiğini kontrol eden kartlı geçiş sistemi gerektiriyor.",
      ctaTitle: "Şişli'de Erişim Kontrolünüzü Profesyonelleştirin",
      ctaSubtitle:
        "Şişli'deki plaza, ofis veya rezidansınız için kartlı geçiş keşfi ve teklif alın.",
      faqs: [
        {
          question: "Mecidiyeköy'deki plazama kartlı geçiş nasıl kurulur?",
          answer:
            "Giriş kapısı, kat geçişleri ve özel alanlar keşif sonrası belirlenerek okuyucu ve kontrol paneli yerleşimi planlanır.",
        },
        {
          question: "Şişli'de çok kiracılı ofiste kat bazlı erişim kısıtlaması yapılabilir mi?",
          answer:
            "Evet. Her kiracı için ayrı erişim yetkilendirmesi, zaman bazlı kısıtlama ve giriş logları raporlanabilir.",
        },
        {
          question: "Esentepe'deki ofisime ziyaretçi yönetimi nasıl kurulur?",
          answer:
            "Geçici kart, QR kod veya uzaktan kapı açma seçenekleriyle ziyaretçi girişleri düzenlenir; tüm giriş logları raporlanır.",
        },
      ],
    },
  },
};

// ---------------------------------------------------------------------------
// Tier 1 — Ümraniye
// ---------------------------------------------------------------------------

const umraniye: DistrictProfile = {
  name: "Ümraniye",
  slug: "umraniye",
  locative: "Ümraniye'de",
  districtIntro:
    "Anadolu Yakası'nın en hızlı büyüyen ticari merkezlerinden biri olan Ümraniye; organize sanayi bölgesi, yoğun konut projeleri ve hızla genişleyen iş merkezleriyle güvenlik sistemi talebinin kesintisiz arttığı bir ilçedir.",
  landmarks: [
    "Ümraniye Organize Sanayi",
    "Şerifali",
    "Çakmak",
    "Hekimbaşı",
    "Alemdağ Caddesi",
    "Esenevler",
    "Parseller",
    "Site Mahallesi",
    "Elmalıkent",
    "Tantavi",
  ],
  nearbyDistricts: ["atasehir", "sancaktepe", "cekmekoy", "uskudar", "beykoz"],
  services: {
    "kamera-sistemi-kurulumu": {
      heroTitle: "Ümraniye Kamera Sistemi Kurulumu",
      heroIntro:
        "Ümraniye Organize Sanayi'deki fabrikalardan Şerifali'nin lojistik depolarına, Çakmak'ın konut sitelerinden Alemdağ Caddesi'ndeki mağazalara — Ümraniye'de profesyonel kamera izleme ile güvenliği güçlendirin.",
      whatsappMessage:
        "Merhaba, Ümraniye'de kamera sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Organize sanayi ve Şerifali lojistik aksındaki endüstriyel tesisler, Çakmak-Hekimbaşı hattındaki konut siteleri ve Alemdağ Caddesi'nin ticari yoğunluğu Ümraniye'de kesintisiz kamera güvenliği gerektiriyor.",
      ctaTitle: "Sanayi'den Siteye — Ümraniye'de Kamera Kurulumu",
      ctaSubtitle:
        "Fabrikanız, deponuz veya siteniz için Ümraniye'de yerinde keşif yaptırın; kamera planınızı birlikte oluşturalım.",
      faqs: [
        {
          question: "Ümraniye Organize Sanayi'deki fabrikam için kamera sistemi nasıl planlanır?",
          answer:
            "Fabrika giriş-çıkışları, üretim alanları, depo ve çevre hattı keşif sonrası analiz edilerek kamera planı oluşturulur.",
        },
        {
          question: "Şerifali'deki depom için kaç kamera gerekiyor?",
          answer:
            "Depo büyüklüğü, raf düzeni ve yükleme alanlarına göre genellikle 8-16 kamera ile kapsamlı izleme sağlanır.",
        },
        {
          question: "Ümraniye'de kamera sistemi uzaktan izlenebilir mi?",
          answer:
            "Evet. NVR üzerinden mobil ve masaüstü uzaktan erişim kurulumu standart olarak yapılmaktadır.",
        },
      ],
    },
    "alarm-sistemi-kurulumu": {
      heroTitle: "Ümraniye Alarm Sistemi Kurulumu",
      heroIntro:
        "Organize sanayi bölgesindeki fabrikalardan Hekimbaşı'nın konut projelerine kadar Ümraniye genelinde hırsızlık caydırıcı alarm çözümleri. Sensör planlamasından mobil bildirime komple kurulum.",
      whatsappMessage:
        "Merhaba, Ümraniye'de alarm sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Şerifali'deki lojistik tesisler, Parseller ve Esenevler'deki konut siteleri ve Alemdağ Caddesi'ndeki mağazalar Ümraniye'de alarm kurulumunu hem endüstriyel hem konut tarafında zorunlu kılıyor.",
      ctaTitle: "Ümraniye'de Güvenliği Alarma Bağlayın",
      ctaSubtitle:
        "Fabrikanız, deponuz veya daireniz için sensör planlaması ve keşif randevusu alın — kurulum aynı gün tamamlanır.",
      faqs: [
        {
          question: "Ümraniye'deki fabrikam için alarm nasıl planlanır?",
          answer:
            "Fabrika sınırları, giriş kapıları, depo ve ofis alanları analiz edilerek çok bölgeli alarm planı oluşturulur.",
        },
        {
          question: "Ümraniye'de apartman dairesi için alarm kurulumu yapılıyor mu?",
          answer:
            "Evet. Daire içi kablosuz alarm bağımsız kurulur; manyetik kapı sensörü ve hareket dedektörüyle tam koruma sağlanır.",
        },
        {
          question: "Organize sanayi bölgesinde alarm ve kamera birlikte kurulabilir mi?",
          answer:
            "Evet. Alarm tetiklendiğinde ilgili kameradan görüntü kaydı başlatma ve merkeze bildirim gönderme senaryoları kurulabilir.",
        },
      ],
    },
    "kartli-gecis-sistemi-kurulumu": {
      heroTitle: "Ümraniye Kartlı Geçiş Sistemi Kurulumu",
      heroIntro:
        "Organize sanayi'deki vardiya trafiğinden Çakmak'ın konut sitelerine, Alemdağ Caddesi'ndeki ofislerden Şerifali depolarına — Ümraniye'de giriş-çıkış kontrolünü kartlı geçiş sistemiyle yönetin.",
      whatsappMessage:
        "Merhaba, Ümraniye'de kartlı geçiş sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Organize sanayi'deki fabrikalar, Şerifali'nin lojistik yapıları ve Çakmak hattındaki siteler; işçi, personel ve ziyaretçi akışını yönetmek için kartlı geçiş sistemi gerektiriyor.",
      ctaTitle: "Ümraniye'de Giriş Kontrolünüzü Merkezi Hâle Getirin",
      ctaSubtitle:
        "Fabrikanız, deponuz veya siteniz için kartlı geçiş keşfi ve teklif alın — personel yönetimini kolaylaştırın.",
      faqs: [
        {
          question: "Ümraniye Organize Sanayi'de kartlı geçiş nasıl kurulur?",
          answer:
            "Ana giriş, vardiya kapıları ve hassas üretim alanları keşif sonrası belirlenerek okuyucu ve kontrol paneli yerleşimi planlanır.",
        },
        {
          question: "Ümraniye'deki siteye kartlı geçiş kurulabilir mi?",
          answer:
            "Evet. Ana giriş, otopark bariyeri ve ortak alanlara kartlı veya proximity geçiş sistemi kurulabilir.",
        },
        {
          question: "Şerifali'deki depomda personel giriş-çıkış takibi yapılabilir mi?",
          answer:
            "Evet. Kart bazlı giriş logları, mesai saatleri ve yetkisiz giriş denemeleri raporlanabilir.",
        },
      ],
    },
  },
};

// ---------------------------------------------------------------------------
// Tier 1 — Başakşehir
// ---------------------------------------------------------------------------

const basaksehir: DistrictProfile = {
  name: "Başakşehir",
  slug: "basaksehir",
  locative: "Başakşehir'de",
  districtIntro:
    "İkitelli Organize Sanayi Bölgesi'nin sanayi gücü, Kayabaşı'nın büyük konut projeleri ve hızla gelişen ticari merkezleriyle Başakşehir, Avrupa Yakası'nın en yoğun güvenlik sistemi talebi oluşturan ilçelerindendir.",
  landmarks: [
    "İkitelli OSB",
    "Kayabaşı",
    "Başak Konutları",
    "Hoşdere",
    "Güvercintepe",
    "Başakşehir Şehir Hastanesi",
    "Olimpiyat Stadyumu",
    "Bahçeşehir",
    "Sular Vadisi",
    "Onurkent",
  ],
  nearbyDistricts: ["arnavutkoy", "esenyurt", "bagcilar", "sultangazi", "avcilar"],
  services: {
    "kamera-sistemi-kurulumu": {
      heroTitle: "Başakşehir Kamera Sistemi Kurulumu",
      heroIntro:
        "İkitelli OSB'deki fabrikalardan Kayabaşı konut projelerine, Bahçeşehir villalarından Başak Konutları'na — Başakşehir'de endüstriyel ve konut güvenliğini kamera sistemiyle sağlayın.",
      whatsappMessage:
        "Merhaba, Başakşehir'de kamera sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "İkitelli OSB'nin endüstriyel yoğunluğu, Kayabaşı'ndaki büyük konut projeleri ve Bahçeşehir'in villa-rezidans dokusu Başakşehir'de hem sanayi hem konut tarafında kamera güvenliğini zorunlu kılıyor.",
      ctaTitle: "İkitelli'den Bahçeşehir'e — Başakşehir'de Kamera Kurulumu",
      ctaSubtitle:
        "Fabrikanız, villanız veya siteniz için Başakşehir'de yerinde keşif yaptırın; kamera planınızı birlikte oluşturalım.",
      faqs: [
        {
          question: "İkitelli OSB'deki fabrikam için kamera sistemi nasıl planlanır?",
          answer:
            "Fabrika giriş-çıkışları, üretim hatları, depo alanları ve çevre hattı keşif sonrası analiz edilerek kamera planı oluşturulur.",
        },
        {
          question: "Bahçeşehir'deki villamın dış çevresi için kaç kamera gerekir?",
          answer:
            "Villa büyüklüğüne göre giriş, bahçe, garaj ve arka cephe için genellikle 4-8 kamera yeterli olur.",
        },
        {
          question: "Başakşehir'de konut sitesi için merkezi kamera izleme kurulabilir mi?",
          answer:
            "Evet. Site yönetim odası veya güvenlik kabinine merkezi NVR yerleşimi ve uzaktan erişim kurulumu yapılmaktadır.",
        },
      ],
    },
    "alarm-sistemi-kurulumu": {
      heroTitle: "Başakşehir Alarm Sistemi Kurulumu",
      heroIntro:
        "Kayabaşı'nın yeni konut projelerinden İkitelli'nin endüstriyel yapılarına kadar Başakşehir genelinde caydırıcı alarm çözümleri. Sensör planlamasından mobil bildirime komple kurulum.",
      whatsappMessage:
        "Merhaba, Başakşehir'de alarm sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Kayabaşı'ndaki büyük konut siteleri, İkitelli OSB'deki endüstriyel tesisler ve Bahçeşehir'in villa bölgeleri; hırsızlık caydırıcılığı ve anlık bildirimli alarm sistemleri gerektiriyor.",
      ctaTitle: "Başakşehir'de Alarm Korumanızı Güçlendirin",
      ctaSubtitle:
        "Villanız, siteniz veya fabrikanız için Başakşehir bölgesinde alarm keşfi ve teklif alın.",
      faqs: [
        {
          question: "Bahçeşehir'deki villamın bahçe çevresi için alarm nasıl planlanır?",
          answer:
            "Bahçe sınırları, giriş kapıları ve garaj alanına dış ortam sensörleri ile çok bölgeli alarm planı oluşturulur.",
        },
        {
          question: "İkitelli'deki fabrikam için endüstriyel alarm çözümü var mı?",
          answer:
            "Evet. Fabrika çevre hattı, depo girişleri ve ofis alanları için çok bölgeli endüstriyel alarm sistemleri kurulur.",
        },
        {
          question: "Başakşehir'de yeni taşındığım dairede alarm kurulumu yapılabilir mi?",
          answer:
            "Evet. Daire içi kablosuz alarm bağımsız kurulur; manyetik kapı sensörü ve hareket dedektörüyle tam koruma sağlanır.",
        },
      ],
    },
    "kartli-gecis-sistemi-kurulumu": {
      heroTitle: "Başakşehir Kartlı Geçiş Sistemi Kurulumu",
      heroIntro:
        "İkitelli OSB'deki vardiya trafiğinden Kayabaşı sitelerine, Bahçeşehir villalarından iş merkezlerine — Başakşehir'de giriş-çıkış kontrolünü kartlı geçiş sistemiyle yönetin.",
      whatsappMessage:
        "Merhaba, Başakşehir'de kartlı geçiş sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "İkitelli'deki fabrikalar, Kayabaşı'nın büyük konut siteleri ve Bahçeşehir'deki rezidanslar; işçi, personel ve sakin trafiğini yönetmek için kartlı geçiş sistemi gerektiriyor.",
      ctaTitle: "Başakşehir'de Giriş Trafiğinizi Kontrol Altına Alın",
      ctaSubtitle:
        "Fabrikanız, siteniz veya rezidansınız için kartlı geçiş keşfi ve teklif alın.",
      faqs: [
        {
          question: "İkitelli OSB'de kartlı geçiş nasıl kurulur?",
          answer:
            "Ana giriş, vardiya kapıları ve hassas üretim alanları keşif sonrası belirlenerek okuyucu ve kontrol paneli yerleşimi planlanır.",
        },
        {
          question: "Kayabaşı'ndaki siteye kartlı geçiş kurulabilir mi?",
          answer:
            "Evet. Ana giriş, otopark bariyeri ve ortak alanlara kartlı veya proximity geçiş sistemi kurulabilir.",
        },
        {
          question: "Bahçeşehir'deki villa sitesine turnike sistemi kurulabilir mi?",
          answer:
            "Evet. Site ana girişine turnike, araç girişine bariyer ve otopark alanına ANPR plaka okuma sistemi entegre edilebilir.",
        },
      ],
    },
  },
};

// ---------------------------------------------------------------------------
// Tier 1 — Pendik
// ---------------------------------------------------------------------------

const pendik: DistrictProfile = {
  name: "Pendik",
  slug: "pendik",
  locative: "Pendik'te",
  districtIntro:
    "Sabiha Gökçen Havalimanı'nın yanı başında, Kurtköy'ün hızla büyüyen ticari merkezi ve Yenişehir bölgesinin lojistik yoğunluğuyla Pendik, Anadolu Yakası'nın en stratejik güvenlik pazarlarından biridir.",
  landmarks: [
    "Sabiha Gökçen Havalimanı",
    "Kurtköy",
    "Yenişehir",
    "Kaynarca",
    "Esenyalı",
    "Kavakpınar",
    "Velibaba",
    "Güzelyalı",
    "Pendik Tersanesi",
    "Viaport",
  ],
  nearbyDistricts: ["kartal", "tuzla", "sultanbeyli", "sancaktepe", "maltepe"],
  services: {
    "kamera-sistemi-kurulumu": {
      heroTitle: "Pendik Kamera Sistemi Kurulumu",
      heroIntro:
        "Kurtköy'ün yeni iş merkezlerinden Yenişehir'in lojistik depolarına, Kaynarca konut sitelerinden havalimanı çevresi otellere — Pendik'te profesyonel kamera güvenliği ile 7/24 izleme.",
      whatsappMessage:
        "Merhaba, Pendik'te kamera sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Havalimanı çevresinin otel ve lojistik yoğunluğu, Kurtköy'deki ticari merkezler ve Yenişehir'in depoları Pendik'te endüstriyel ve kurumsal kamera güvenliğini zorunlu kılıyor.",
      ctaTitle: "Kurtköy'den Kaynarca'ya — Pendik'te Kamera Kurulumu",
      ctaSubtitle:
        "Deponuz, oteliniz veya siteniz için Pendik'te yerinde keşif yaptırın; kamera planınızı birlikte oluşturalım.",
      faqs: [
        {
          question: "Kurtköy'deki iş merkezi için kamera sistemi nasıl planlanır?",
          answer:
            "Bina giriş-çıkışları, otopark, ortak alanlar ve ofis katları keşif sonrası analiz edilerek kamera planı oluşturulur.",
        },
        {
          question: "Pendik'teki depom için kaç kamera gerekiyor?",
          answer:
            "Depo büyüklüğü, raf düzeni ve yükleme alanlarına göre genellikle 8-16 kamera ile kapsamlı izleme sağlanır.",
        },
        {
          question: "Pendik'te kamera sistemi uzaktan izlenebilir mi?",
          answer:
            "Evet. NVR üzerinden mobil ve masaüstü uzaktan erişim kurulumu standart olarak yapılmaktadır.",
        },
      ],
    },
    "alarm-sistemi-kurulumu": {
      heroTitle: "Pendik Alarm Sistemi Kurulumu",
      heroIntro:
        "Yenişehir'in lojistik tesislerinden Kaynarca'nın konut projelerine kadar Pendik genelinde hırsızlık caydırıcı alarm çözümleri. Sensör planlamasından mobil bildirime komple kurulum.",
      whatsappMessage:
        "Merhaba, Pendik'te alarm sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Yenişehir'deki lojistik depolar, Kurtköy'ün ticari yapıları ve Kaynarca-Esenyalı hattındaki konut siteleri Pendik'te alarm kurulumunu hem endüstriyel hem konut tarafında zorunlu kılıyor.",
      ctaTitle: "Pendik'te Güvenliği Alarma Bağlayın",
      ctaSubtitle:
        "Deponuz, ofisiniz veya daireniz için Pendik bölgesinde alarm keşfi ve teklif alın.",
      faqs: [
        {
          question: "Yenişehir'deki depom için alarm nasıl planlanır?",
          answer:
            "Depo çevre hattı, giriş kapıları ve ofis alanları analiz edilerek çok bölgeli alarm planı oluşturulur.",
        },
        {
          question: "Pendik'te konut sitesi için alarm kurulumu yapılıyor mu?",
          answer:
            "Evet. Site ortak alanları ve daire içi bağımsız alarm kurulumu birlikte veya ayrı planlanabilir.",
        },
        {
          question: "Kurtköy'deki mağazam için alarm ve kamera birlikte kurulabilir mi?",
          answer:
            "Evet. Alarm tetiklendiğinde ilgili kameradan görüntü kaydı başlatma ve mobil bildirim gönderme senaryoları kurulabilir.",
        },
      ],
    },
    "kartli-gecis-sistemi-kurulumu": {
      heroTitle: "Pendik Kartlı Geçiş Sistemi Kurulumu",
      heroIntro:
        "Yenişehir depolarındaki personel trafiğinden Kurtköy ofislerine, Kaynarca sitelerinden havalimanı çevresi otellere — Pendik'te giriş-çıkış kontrolünü kartlı geçiş sistemiyle yönetin.",
      whatsappMessage:
        "Merhaba, Pendik'te kartlı geçiş sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Yenişehir'deki lojistik tesisler, Kurtköy'ün iş merkezleri ve Kaynarca'nın konut siteleri; işçi, personel ve ziyaretçi akışını yönetmek için kartlı geçiş sistemi gerektiriyor.",
      ctaTitle: "Pendik'te Giriş Kontrolünüzü Merkezi Hâle Getirin",
      ctaSubtitle:
        "Deponuz, ofisiniz veya siteniz için kartlı geçiş keşfi ve teklif alın.",
      faqs: [
        {
          question: "Yenişehir'deki depomda kartlı geçiş nasıl kurulur?",
          answer:
            "Ana giriş, vardiya kapıları ve hassas depo alanları keşif sonrası belirlenerek okuyucu ve kontrol paneli yerleşimi planlanır.",
        },
        {
          question: "Kaynarca'daki siteye kartlı geçiş kurulabilir mi?",
          answer:
            "Evet. Ana giriş, otopark bariyeri ve ortak alanlara kartlı veya proximity geçiş sistemi kurulabilir.",
        },
        {
          question: "Pendik'te otel girişine erişim kontrol sistemi kurulabilir mi?",
          answer:
            "Evet. Otel ana girişi, personel girişi, otopark ve kat bazlı erişim kısıtlamaları planlanabilir.",
        },
      ],
    },
  },
};

// ---------------------------------------------------------------------------
// Tier 2 districts — Zeytinburnu, Bakırköy, Fatih, Avcılar,
//                    Arnavutköy, Bayrampaşa, Güngören, Bahçelievler
// ---------------------------------------------------------------------------

const zeytinburnu: DistrictProfile = {
  name: "Zeytinburnu",
  slug: "zeytinburnu",
  locative: "Zeytinburnu'nda",
  districtIntro:
    "Türkiye'nin en büyük deri ve tekstil üretim merkezlerinden biri olan Zeytinburnu; Kazlıçeşme deri sanayisi, Kennedy Caddesi ticaret hattı ve yoğun konut dokusuyla güvenlik sistemi talebinin yüksek olduğu bir ilçedir.",
  landmarks: [
    "Kazlıçeşme",
    "Kennedy Caddesi",
    "Yeşiltepe",
    "Çırpıcı",
    "Merkezefendi",
    "Seyitnizam",
    "Veliefendi Hipodromu",
    "Zeytinburnu Sahil",
  ],
  nearbyDistricts: ["bakirkoy", "fatih", "gungoren", "bahcelievler"],
  services: {
    "kamera-sistemi-kurulumu": {
      heroTitle: "Zeytinburnu Kamera Sistemi Kurulumu",
      heroIntro:
        "Kazlıçeşme'nin deri atölyeleri, Kennedy Caddesi'nin ticaret hatları ve Yeşiltepe'nin yoğun konut blokları — Zeytinburnu'nda her işletme ve site profesyonel kamera güvenliği gerektiriyor. Aynı gün keşif, anahtar teslim kurulum.",
      whatsappMessage:
        "Merhaba, Zeytinburnu'nda kamera sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Kazlıçeşme deri sanayisinin atölye ve depoları, Kennedy Caddesi'ndeki mağazalar ve Çırpıcı semtinin konut siteleri Zeytinburnu'nda endüstriyel ve ticari kamera güvenliğini zorunlu kılıyor.",
      ctaTitle: "Kazlıçeşme'den Kennedy'e — Zeytinburnu'nda Kamera Kurulumu",
      ctaSubtitle:
        "Atölyeniz, mağazanız veya siteniz için Zeytinburnu'nda ücretsiz keşif alın; kamera planınızı birlikte oluşturalım.",
      faqs: [
        {
          question: "Zeytinburnu'ndaki atölyem için kamera sistemi nasıl planlanır?",
          answer:
            "Üretim alanı, depo, çıkış kapıları ve ofis bölümleri keşif sonrası analiz edilerek kör nokta kalmayacak şekilde kamera planı hazırlanır.",
        },
        {
          question: "Kennedy Caddesi'ndeki mağazam için kaç kamera yeterli?",
          answer:
            "Cadde cephesi, vitrin, kasa ve depo alanlarına göre genellikle 4-8 kamera ile kapsamlı izleme sağlanır.",
        },
        {
          question: "Zeytinburnu'nda gece görüşlü dış mekan kamerası kurulumu yapılıyor mu?",
          answer:
            "Evet. Atölye ve depo dış çevresi için IR gece görüşlü, vandal-proof IP kameralarla montaj yapılmaktadır.",
        },
      ],
    },
    "alarm-sistemi-kurulumu": {
      heroTitle: "Zeytinburnu Alarm Sistemi Kurulumu",
      heroIntro:
        "Kazlıçeşme'nin yüksek değerli deri stokları, Kennedy Caddesi mağazaları ve Merkezefendi konut bloklarında hırsızlık caydırıcı alarm sistemleri. Sensör planlamasından 7/24 izleme merkezine komple kurulum.",
      whatsappMessage:
        "Merhaba, Zeytinburnu'nda alarm sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Zeytinburnu'nun deri ve tekstil depolarındaki yüksek mal değeri ile Kennedy Caddesi'nin gece saatlerindeki güvenlik açığı, alarm sistemini hem caydırıcılık hem kayıp önleme açısından kritik kılıyor.",
      ctaTitle: "Zeytinburnu'nda Güvenliği Alarma Bağlayın",
      ctaSubtitle:
        "Atölyeniz, mağazanız veya daireniz için Zeytinburnu'nda alarm keşfi ve teklif alın — kurulum aynı gün tamamlanır.",
      faqs: [
        {
          question: "Kazlıçeşme'deki deri deposum için alarm sistemi nasıl planlanır?",
          answer:
            "Depo çevresi, ana kapılar, yükleme rampaları ve ofis girişleri analiz edilerek çok bölgeli alarm planı oluşturulur.",
        },
        {
          question: "Zeytinburnu'nda mesai dışı alarm nasıl çalışır?",
          answer:
            "İşyeri kapandığında sistem otomatik devreye girer; hareket veya cam kırılması algılandığında anlık mobil bildirim ve siren uyarısı gönderilir.",
        },
        {
          question: "Zeytinburnu'nda daire için kablosuz alarm kurulabilir mi?",
          answer:
            "Evet. Kablolama gerektirmeyen kablosuz sistemler kiracı ve ev sahipleri için ideal bir çözümdür; kurulum yarım günde tamamlanır.",
        },
      ],
    },
    "kartli-gecis-sistemi-kurulumu": {
      heroTitle: "Zeytinburnu Kartlı Geçiş Sistemi Kurulumu",
      heroIntro:
        "Kazlıçeşme sanayi bölgesinin vardiya trafiğinden Yeşiltepe apartmanlarına, Kennedy Caddesi iş merkezlerinden Çırpıcı konut sitelerine — Zeytinburnu'nda giriş-çıkış kontrolünü kartlı geçiş sistemiyle yönetin.",
      whatsappMessage:
        "Merhaba, Zeytinburnu'nda kartlı geçiş sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Kazlıçeşme'nin vardiyalı üretim tesisleri ve Zeytinburnu'nun yoğun konut sitelerinde personel ve ziyaretçi akışını dijital erişim kontrolüyle yönetmek hem güvenliği hem verimliliği artırıyor.",
      ctaTitle: "Zeytinburnu'nda Giriş Kontrolünü Dijitalleştirin",
      ctaSubtitle:
        "Fabrikanız, deponuz veya siteniz için Zeytinburnu'nda kartlı geçiş keşfi ve teklif alın.",
      faqs: [
        {
          question: "Zeytinburnu'ndaki fabrikama kartlı geçiş sistemi nasıl kurulur?",
          answer:
            "Ana giriş, vardiya kapıları ve hassas üretim bölümleri keşif sonrası belirlenerek okuyucu ve kontrol paneli planı hazırlanır.",
        },
        {
          question: "Zeytinburnu'ndaki siteye araç bariyer + kartlı geçiş kurulabilir mi?",
          answer:
            "Evet. Araç girişine bariyer, yaya girişine kartlı okuyucu entegreli sistem birlikte kurulabilir.",
        },
        {
          question: "Zeytinburnu'nda kaç kişilik sisteme kadar kartlı geçiş yönetilebilir?",
          answer:
            "Küçük atölyelerden büyük sanayi tesislerine kadar ölçeklenebilir sistemler sunulmaktadır; kapasite keşif sonrası belirlenir.",
        },
      ],
    },
  },
};

const bakirkoy: DistrictProfile = {
  name: "Bakırköy",
  slug: "bakirkoy",
  locative: "Bakırköy'de",
  districtIntro:
    "Avrupa Yakası'nın en köklü yerleşim alanlarından biri olan Bakırköy; İncirli-Şirinevler ticaret aksı, sahil şeridi, büyük alışveriş merkezleri ve yoğun konut siteleriyle güçlü güvenlik altyapısı gerektiren bir ilçedir.",
  landmarks: [
    "Bakırköy Çarşı",
    "İncirli",
    "Şirinevler",
    "Zuhuratbaba",
    "Kartaltepe",
    "Cevizlik",
    "Sakızağacı",
    "Ataköy",
    "Carousel AVM",
    "Bakırköy Sahil",
  ],
  nearbyDistricts: ["bahcelievler", "zeytinburnu", "kucukcekmece", "gungoren"],
  services: {
    "kamera-sistemi-kurulumu": {
      heroTitle: "Bakırköy Kamera Sistemi Kurulumu",
      heroIntro:
        "İncirli-Şirinevler ticaret hattından Ataköy sitelerine, Bakırköy Çarşı'nın yoğun mağaza trafiğinden sahil şeridine — Bakırköy'de her işletme ve konut için profesyonel kamera izleme. Aynı gün keşif.",
      whatsappMessage:
        "Merhaba, Bakırköy'de kamera sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Bakırköy Çarşı'nın yoğun perakende trafiği, Ataköy'ün prestijli konut siteleri ve Carousel çevresindeki ticari yoğunluk Bakırköy'de profesyonel kamera güvenliğini zorunlu kılıyor.",
      ctaTitle: "İncirli'den Ataköy'e — Bakırköy'de Kamera Kurulumu",
      ctaSubtitle:
        "Mağazanız, ofisiniz veya daireniz için Bakırköy'de ücretsiz keşif alın; kamera planınızı birlikte hazırlayalım.",
      faqs: [
        {
          question: "Bakırköy'deki mağazam için kamera sistemi nasıl planlanır?",
          answer:
            "Cadde cephesi, vitrin, kasa bölgesi ve depo alanları keşif sonrası analiz edilerek en uygun kamera açıları belirlenir.",
        },
        {
          question: "Ataköy'deki sitem için kamera sistemi kurulumu yapılıyor mu?",
          answer:
            "Evet. Site girişi, otopark, ortak alan ve çevre güvenliği için kapsamlı kamera planı hazırlanır.",
        },
        {
          question: "Bakırköy'de işyeri kameraları mobil telefondan izlenebilir mi?",
          answer:
            "Evet. Tüm sistemlerimize mobil uygulama üzerinden canlı izleme ve kayıt erişimi dahildir.",
        },
      ],
    },
    "alarm-sistemi-kurulumu": {
      heroTitle: "Bakırköy Alarm Sistemi Kurulumu",
      heroIntro:
        "Şirinevler'in yoğun ticaret aksından Zuhuratbaba konut bloklarına, Ataköy sitelerinden İncirli'nin mağazalarına kadar Bakırköy genelinde hırsızlık caydırıcı alarm sistemleri. Mobil bildirimli, 7/24 etkin.",
      whatsappMessage:
        "Merhaba, Bakırköy'de alarm sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Bakırköy'ün yoğun ticari merkezi ve Ataköy-Kartaltepe gibi konut bölgelerinde hırsızlık caydırıcı alarm sistemleri hem işletme hem ev güvenliğinde birinci öncelik haline gelmiştir.",
      ctaTitle: "Bakırköy'de Güvenliği Alarma Bağlayın",
      ctaSubtitle:
        "Mağazanız veya daireniz için Bakırköy'de alarm keşfi ve teklif alın — kurulum aynı gün tamamlanır.",
      faqs: [
        {
          question: "Bakırköy'de dükkan alarm sistemi kurulumu ne kadar sürer?",
          answer:
            "Standart bir mağaza için alarm kurulumu genellikle yarım ila tam gün içinde tamamlanır.",
        },
        {
          question: "Bakırköy'de apartman dairesi için alarm sistemi önerilir mi?",
          answer:
            "Evet. Kapı ve pencere sensörleri, hareket dedektörü ve anlık bildirim sistemiyle daire alarmı kurulabilir.",
        },
        {
          question: "Bakırköy'de 7/24 izleme merkezine bağlı alarm kurulumu yapılıyor mu?",
          answer:
            "Evet. İsteğe bağlı olarak özel güvenlik izleme merkezine bağlı alarm sistemleri kurulmaktadır.",
        },
      ],
    },
    "kartli-gecis-sistemi-kurulumu": {
      heroTitle: "Bakırköy Kartlı Geçiş Sistemi Kurulumu",
      heroIntro:
        "Ataköy'ün büyük konut sitelerinden İncirli iş merkezlerine, Bakırköy Çarşı'nın ticari yapılarından Şirinevler ofis katlarına — Bakırköy'de giriş-çıkış kontrolünü kartlı geçiş sistemiyle profesyonelleştirin.",
      whatsappMessage:
        "Merhaba, Bakırköy'de kartlı geçiş sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Ataköy'ün büyük ölçekli konut siteleri ve Bakırköy'deki kurumsal ofis yapıları, kontrolsüz araç ve ziyaretçi girişini önlemek için kartlı geçiş sistemine ciddi ihtiyaç duyuyor.",
      ctaTitle: "Bakırköy'de Giriş Kontrolünü Dijitalleştirin",
      ctaSubtitle:
        "Siteniz, ofisiniz veya ticari binanız için Bakırköy'de kartlı geçiş keşfi ve teklif alın.",
      faqs: [
        {
          question: "Ataköy'deki siteye kartlı geçiş + araç bariyeri kurulabilir mi?",
          answer:
            "Evet. Araç girişine otomatik bariyer, yaya girişine kartlı okuyucu entegreli komple sistem kurulabilir.",
        },
        {
          question: "Bakırköy'deki ofis binam için kaç kapıya kartlı geçiş gerekir?",
          answer:
            "Ana giriş, arka giriş, otopark ve hassas birim kapıları keşif sonrası belirlenerek okuyucu sayısı netleşir.",
        },
        {
          question: "Bakırköy'de kartlı geçiş sistemi personel devam takibi yapabilir mi?",
          answer:
            "Evet. Giriş-çıkış logları üzerinden otomatik mesai raporu oluşturan yönetim yazılımı entegre edilebilir.",
        },
      ],
    },
  },
};

const fatih: DistrictProfile = {
  name: "Fatih",
  slug: "fatih",
  locative: "Fatih'te",
  districtIntro:
    "İstanbul'un tarihi yarımadasında yer alan Fatih; Kapalıçarşı ve Mısır Çarşısı'na yakınlığı, yoğun ticaret hayatı, turizm akışı ve kalabalık konut dokusuyla güvenlik sistemlerine olan talebin en yüksek olduğu ilçeler arasındadır.",
  landmarks: [
    "Aksaray",
    "Laleli",
    "Kumkapı",
    "Yenikapı",
    "Çarşamba",
    "Fatih Camii",
    "Samatya",
    "Karagümrük",
    "Fındıkzade",
    "Vatan Caddesi",
  ],
  nearbyDistricts: ["zeytinburnu", "bayrampasa", "beyoglu", "eminonu"],
  services: {
    "kamera-sistemi-kurulumu": {
      heroTitle: "Fatih Kamera Sistemi Kurulumu",
      heroIntro:
        "Aksaray'ın yoğun ticaret merkezinden Laleli'nin tekstil toptancılarına, Kumkapı'nın tarihi sokaklarından Vatan Caddesi'nin iş dünyasına — Fatih'te her mağaza ve işyeri için profesyonel kamera güvenliği. Aynı gün keşif.",
      whatsappMessage:
        "Merhaba, Fatih'te kamera sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Laleli'nin toptancı dükkanları, Aksaray'ın yoğun yaya trafiği ve turistik bölgelerin hırsızlık riski, Fatih'te kamera sistemini hem caydırıcılık hem delil temini açısından birincil güvenlik aracı yapıyor.",
      ctaTitle: "Aksaray'dan Laleli'ye — Fatih'te Kamera Kurulumu",
      ctaSubtitle:
        "Toptancı dükkanınız, oteliniz veya işyeriniz için Fatih'te ücretsiz keşif alın; kamera planınızı birlikte oluşturalım.",
      faqs: [
        {
          question: "Laleli'deki toptancı mağazam için kamera sistemi nasıl planlanır?",
          answer:
            "Depo girişi, sergi alanı, kasa ve mağaza cephesi keşif sonrası analiz edilerek kapsamlı kamera planı oluşturulur.",
        },
        {
          question: "Fatih'te otel için kamera kurulumu yapılıyor mu?",
          answer:
            "Evet. Lobi, koridor, otopark ve dış cephe dahil otel güvenlik kamerası planı hazırlanır.",
        },
        {
          question: "Fatih'te tarihi yapılara kamera montajı yapılabilir mi?",
          answer:
            "Evet. Yapısal kısıtlamalara uygun montaj yöntemleriyle tarihi binalarda da güvenli kurulum gerçekleştirilmektedir.",
        },
      ],
    },
    "alarm-sistemi-kurulumu": {
      heroTitle: "Fatih Alarm Sistemi Kurulumu",
      heroIntro:
        "Laleli toptancı dükkanlarından Aksaray'ın yoğun ticaret merkezine, Kumkapı sokaklarından Çarşamba mahalle konutlarına kadar Fatih genelinde hırsızlık caydırıcı alarm sistemleri. Sensör planlamasından mobil bildirime komple kurulum.",
      whatsappMessage:
        "Merhaba, Fatih'te alarm sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Fatih'in yoğun ticari dokusu ve Laleli-Aksaray aksındaki yüksek turistik akış; alarm sistemini mağaza, otel ve ofisler için vazgeçilmez bir güvenlik katmanı haline getiriyor.",
      ctaTitle: "Fatih'te Güvenliği Alarma Bağlayın",
      ctaSubtitle:
        "Mağazanız, oteliniz veya işyeriniz için Fatih'te alarm keşfi ve teklif alın — kurulum aynı gün tamamlanır.",
      faqs: [
        {
          question: "Fatih'te mağaza alarm sistemi kurulumu ne kadar sürer?",
          answer:
            "Standart bir mağaza için alarm kurulumu genellikle yarım ila tam gün içinde tamamlanır.",
        },
        {
          question: "Aksaray'daki iş yerim için hangi alarm tipi önerilir?",
          answer:
            "Yüksek yaya trafiği olan bölgelerde kırılma dedektörü, PIR hareket sensörü ve görsel caydırıcı siren kombinasyonu önerilir.",
        },
        {
          question: "Fatih'te daire için alarm sistemi kurulumu yapılıyor mu?",
          answer:
            "Evet. Kapı-pencere manyetik sensörler ve hareket dedektörüyle daire alarmı kurulumu yapılmaktadır.",
        },
      ],
    },
    "kartli-gecis-sistemi-kurulumu": {
      heroTitle: "Fatih Kartlı Geçiş Sistemi Kurulumu",
      heroIntro:
        "Laleli'nin toptancı iş merkezlerinden Vatan Caddesi'nin kurumsal yapılarına, Aksaray'ın ticari binalarından Fındıkzade'nin konut sitelerine — Fatih'te giriş-çıkış kontrolünü kartlı geçiş sistemiyle yönetin.",
      whatsappMessage:
        "Merhaba, Fatih'te kartlı geçiş sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Fatih'teki toptancı iş merkezleri ve çok katlı ticari yapılar, yetkisiz girişi önlemek ve personel takibini dijitalleştirmek için kartlı geçiş sistemine ciddi ihtiyaç duyuyor.",
      ctaTitle: "Fatih'te Giriş Kontrolünü Profesyonelleştirin",
      ctaSubtitle:
        "İş merkeziniz, oteliniz veya ticari binanız için Fatih'te kartlı geçiş keşfi ve teklif alın.",
      faqs: [
        {
          question: "Laleli'deki iş merkezime kartlı geçiş nasıl kurulur?",
          answer:
            "Bina girişi, kat çıkışları ve hassas birim kapıları keşif sonrası belirlenerek okuyucu planı hazırlanır.",
        },
        {
          question: "Fatih'te otel için kartlı oda erişim sistemi kurulabilir mi?",
          answer:
            "Evet. Oda kapılarına RFID kart okuyucu, personel girişlerine ayrı yetki seviyeli sistem kurulabilir.",
        },
        {
          question: "Fatih'te kartlı geçiş sistemi ziyaretçi yönetimini destekler mi?",
          answer:
            "Evet. Geçici kart veya QR kod ile ziyaretçi erişimi tanımlanabilir ve giriş logları raporlanır.",
        },
      ],
    },
  },
};

const avcilar: DistrictProfile = {
  name: "Avcılar",
  slug: "avcilar",
  locative: "Avcılar'da",
  districtIntro:
    "E-5 otoyolu güzergahında İstanbul Üniversitesi kampüsüne ev sahipliği yapan Avcılar; öğrenci nüfusu, alışveriş merkezleri, sanayi tesisleri ve yoğun konut dokusuyla güvenlik sistemi ihtiyacının çeşitlendiği bir ilçedir.",
  landmarks: [
    "Avcılar Merkez",
    "Cihangir",
    "Ambarlı",
    "Firuzköy",
    "Tahtakale",
    "Gümüşpala",
    "Denizköşkler",
    "E-5 Üzeri",
    "Avcılar Sahil",
    "İstanbul Üniversitesi Avcılar Kampüsü",
  ],
  nearbyDistricts: ["kucukcekmece", "bahcelievler", "esenyurt", "beylikduzu"],
  services: {
    "kamera-sistemi-kurulumu": {
      heroTitle: "Avcılar Kamera Sistemi Kurulumu",
      heroIntro:
        "Ambarlı'nın liman ve depo bölgesinden Cihangir konut sitelerine, E-5 üzerindeki ticaret aksından Avcılar sahiline — Avcılar'da işletme ve konut güvenliği için profesyonel kamera sistemleri. Aynı gün keşif.",
      whatsappMessage:
        "Merhaba, Avcılar'da kamera sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Ambarlı liman bölgesinin lojistik tesisleri, E-5 üzerindeki ticari yapılar ve Cihangir'deki yoğun konut siteleri Avcılar'da kamera güvenliğini hem endüstriyel hem konut tarafında kritik kılıyor.",
      ctaTitle: "Ambarlı'dan Cihangir'e — Avcılar'da Kamera Kurulumu",
      ctaSubtitle:
        "Deponuz, mağazanız veya siteniz için Avcılar'da ücretsiz keşif alın; kamera planınızı birlikte oluşturalım.",
      faqs: [
        {
          question: "Ambarlı'daki depom için kamera sistemi nasıl planlanır?",
          answer:
            "Depo giriş-çıkışları, yükleme rampaları, koridorlar ve ofis alanları keşif sonrası analiz edilerek kapsamlı kamera planı hazırlanır.",
        },
        {
          question: "Avcılar'da E-5 üzerindeki dükkanım için kaç kamera yeterli?",
          answer:
            "Mağaza büyüklüğü, vitrin, kasa ve depo alanına göre genellikle 4-8 kamera ile tam kapsama sağlanır.",
        },
        {
          question: "Avcılar'da site kamera sistemi kurulumu yapılıyor mu?",
          answer:
            "Evet. Site girişi, otopark, ortak alanlar ve çevre güvenliği için komple site kamera planı hazırlanır.",
        },
      ],
    },
    "alarm-sistemi-kurulumu": {
      heroTitle: "Avcılar Alarm Sistemi Kurulumu",
      heroIntro:
        "Ambarlı liman bölgesinin depolarından Cihangir konut bloklarına, E-5 üzerindeki işyerlerinden Firuzköy mahalle dükkanlarına — Avcılar genelinde hırsızlık caydırıcı alarm sistemleri. Mobil bildirimli, 7/24 etkin.",
      whatsappMessage:
        "Merhaba, Avcılar'da alarm sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Ambarlı'nın lojistik depoları ve E-5 üzerindeki ticari yapılar gece saatlerinde risk taşırken, Avcılar'ın yoğun konut semtleri de proaktif alarm sistemine ihtiyaç duyuyor.",
      ctaTitle: "Avcılar'da Güvenliği Alarma Bağlayın",
      ctaSubtitle:
        "Deponuz, dükkanınız veya daireniz için Avcılar'da alarm keşfi ve teklif alın — kurulum aynı gün tamamlanır.",
      faqs: [
        {
          question: "Avcılar'daki lojistik depom için alarm nasıl kurulur?",
          answer:
            "Depo çevre hattı, ana kapılar, yükleme noktaları ve ofis girişleri analiz edilerek bölge bazlı alarm planı oluşturulur.",
        },
        {
          question: "Avcılar'da daire alarm sistemi kurulumu ne kadar sürer?",
          answer:
            "Standart bir daire için alarm kurulumu genellikle 2-4 saat içinde tamamlanır.",
        },
        {
          question: "Avcılar'da mağaza alarm sistemi mesai dışında nasıl çalışır?",
          answer:
            "Kapanış sonrası sistem otomatik devreye girer; herhangi bir hareket veya cam kırılmasında anlık SMS ve uygulama bildirimi gönderilir.",
        },
      ],
    },
    "kartli-gecis-sistemi-kurulumu": {
      heroTitle: "Avcılar Kartlı Geçiş Sistemi Kurulumu",
      heroIntro:
        "Ambarlı'nın lojistik tesislerinden Cihangir konut sitelerine, E-5 üzerindeki iş merkezlerinden kampüs çevresindeki ofislere — Avcılar'da giriş-çıkış kontrolünü kartlı geçiş sistemiyle profesyonelleştirin.",
      whatsappMessage:
        "Merhaba, Avcılar'da kartlı geçiş sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Ambarlı'nın liman ve depo tesislerinde personel ve araç erişimini kontrol altında tutmak, Avcılar'daki sitelerde ise yabancı araç girişini önlemek için kartlı geçiş sistemi kritik bir altyapı haline geliyor.",
      ctaTitle: "Avcılar'da Giriş Kontrolünü Dijitalleştirin",
      ctaSubtitle:
        "Deponuz, siteniz veya ofisiniz için Avcılar'da kartlı geçiş keşfi ve teklif alın.",
      faqs: [
        {
          question: "Ambarlı'daki depoma kartlı geçiş sistemi nasıl kurulur?",
          answer:
            "Ana kapı, yükleme rampaları ve ofis girişleri için keşif sonrası okuyucu ve kontrol ünitesi planı hazırlanır.",
        },
        {
          question: "Avcılar'daki siteye araç bariyer + kartlı giriş kurulabilir mi?",
          answer:
            "Evet. Araç bariyeri ve yaya girişi için kartlı okuyucu entegreli komple sistem sunulmaktadır.",
        },
        {
          question: "Avcılar'da kartlı geçiş sistemi mesai takibi yapabilir mi?",
          answer:
            "Evet. Giriş-çıkış loglarından otomatik devam raporu oluşturan yazılım entegrasyonu mevcuttur.",
        },
      ],
    },
  },
};

const arnavutkoy: DistrictProfile = {
  name: "Arnavutköy",
  slug: "arnavutkoy",
  locative: "Arnavutköy'de",
  districtIntro:
    "İstanbul Havalimanı'na yakınlığı ve hızlı büyüyen sanayi-lojistik altyapısıyla öne çıkan Arnavutköy; organize sanayi bölgeleri, lojistik üsleri ve gelişen konut projeleriyle güvenlik yatırımlarının yoğunlaştığı bir ilçedir.",
  landmarks: [
    "Hadımköy",
    "Bolluca",
    "Haraçcı",
    "Dursunköy",
    "Arnavutköy Merkez",
    "İSFALT",
    "İkitelli OSB yakını",
    "TEM Otoyolu",
    "İstanbul Havalimanı yakını",
  ],
  nearbyDistricts: ["basaksehir", "eyup", "catalca", "esenyurt"],
  services: {
    "kamera-sistemi-kurulumu": {
      heroTitle: "Arnavutköy Kamera Sistemi Kurulumu",
      heroIntro:
        "Hadımköy sanayi bölgesinin fabrikalarından Bolluca'nın lojistik tesislerine, TEM güzergahındaki depolara — Arnavutköy'de endüstriyel ölçekte kamera güvenliği. Geniş saha ve gece görüşü için optimize kurulum.",
      whatsappMessage:
        "Merhaba, Arnavutköy'de kamera sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Arnavutköy'ün organize sanayi bölgeleri ve lojistik üsleri, geniş açılı ve gece görüşlü endüstriyel kamera sistemlerine olan talebi sürekli artırıyor.",
      ctaTitle: "Hadımköy'den Bolluca'ya — Arnavutköy'de Kamera Kurulumu",
      ctaSubtitle:
        "Fabrikanız, deponuz veya lojistik tesisisiniz için Arnavutköy'de ücretsiz keşif alın.",
      faqs: [
        {
          question: "Hadımköy'deki fabrikam için endüstriyel kamera sistemi nasıl planlanır?",
          answer:
            "Üretim hattı, depo, dış çevre hattı ve yükleme rampaları keşif sonrası analiz edilerek geniş alan kamera planı hazırlanır.",
        },
        {
          question: "Arnavutköy'deki lojistik deposum için PTZ kamera kurulabilir mi?",
          answer:
            "Evet. Geniş alanların tek kamerayla izlenmesi için PTZ kameralar standart olarak önerilmektedir.",
        },
        {
          question: "Arnavutköy'de gece görüşlü dış ortam kamerası kurulumu yapılıyor mu?",
          answer:
            "Evet. Endüstriyel dış mekanlara uygun IR gece görüşlü, IP67 korumalı kameralarla kurulum yapılmaktadır.",
        },
      ],
    },
    "alarm-sistemi-kurulumu": {
      heroTitle: "Arnavutköy Alarm Sistemi Kurulumu",
      heroIntro:
        "Hadımköy sanayi sitesinin yüksek değerli ekipmanlarından Bolluca'nın depo ve lojistik tesislerine — Arnavutköy'de endüstriyel ölçekli alarm çözümleri. Geniş saha sensör ağı, 7/24 izleme merkezi entegrasyonu.",
      whatsappMessage:
        "Merhaba, Arnavutköy'de alarm sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Arnavutköy'ün sanayi ve lojistik tesislerindeki yüksek ekipman ve stok değerleri, kapsamlı çevre alarm sistemi kurulumunu zorunlu kılıyor.",
      ctaTitle: "Arnavutköy'de Tesisini Alarma Bağlayın",
      ctaSubtitle:
        "Fabrikanız veya deponuz için Arnavutköy'de endüstriyel alarm keşfi ve teklif alın.",
      faqs: [
        {
          question: "Hadımköy'deki fabrikam için alarm sistemi nasıl kurulur?",
          answer:
            "Tesis çevresi, ana giriş kapıları, depo ve üretim bölümleri analiz edilerek bölge bazlı alarm planı oluşturulur.",
        },
        {
          question: "Arnavutköy'de geniş alanlı depoya alarm kurulumu yapılabiliyor mu?",
          answer:
            "Evet. Endüstriyel depolarda uzun mesafeli PIR sensörler ve cam kırılma dedektörleriyle kapsamlı alarm ağı kurulmaktadır.",
        },
        {
          question: "Arnavutköy'de alarm sistemi 7/24 izleme merkezine bağlanabiliyor mu?",
          answer:
            "Evet. Özel güvenlik izleme merkezine bağlı alarm sistemleri kurulmaktadır; alarm anında güvenlik müdahalesi sağlanır.",
        },
      ],
    },
    "kartli-gecis-sistemi-kurulumu": {
      heroTitle: "Arnavutköy Kartlı Geçiş Sistemi Kurulumu",
      heroIntro:
        "Hadımköy sanayi bölgesinin vardiyalı üretim tesislerinden Bolluca'nın lojistik üslerine — Arnavutköy'de büyük ölçekli personel ve araç erişim kontrolü için kartlı geçiş sistemi kurulumu.",
      whatsappMessage:
        "Merhaba, Arnavutköy'de kartlı geçiş sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Arnavutköy'deki sanayi tesisleri ve lojistik merkezlerinde vardiyalı personel takibi ve araç erişim kontrolü için kartlı geçiş sistemi endüstriyel standart haline geliyor.",
      ctaTitle: "Arnavutköy'de Endüstriyel Erişim Kontrolü Kurun",
      ctaSubtitle:
        "Fabrikanız veya lojistik tesisisiniz için Arnavutköy'de kartlı geçiş keşfi ve teklif alın.",
      faqs: [
        {
          question: "Hadımköy'deki fabrikama vardiya takipli kartlı geçiş nasıl kurulur?",
          answer:
            "Ana giriş, vardiya kapıları ve bölüm erişimleri için yetki seviyeli okuyucu planı hazırlanır; vardiya logları raporlanır.",
        },
        {
          question: "Arnavutköy'deki depoma araç giriş kontrol sistemi kurulabilir mi?",
          answer:
            "Evet. Araç plaka tanıma veya RFID araç etiketi sistemiyle araç erişim kontrolü sağlanmaktadır.",
        },
        {
          question: "Arnavutköy'de büyük tesisler için kaç kapıya okuyucu kurulabilir?",
          answer:
            "Sistem ölçeklenebilir yapıdadır; küçük atölyeden büyük fabrikalara kadar ihtiyaç duyulan kapı sayısına göre kurulum yapılır.",
        },
      ],
    },
  },
};

const bayrampasa: DistrictProfile = {
  name: "Bayrampaşa",
  slug: "bayrampasa",
  locative: "Bayrampaşa'da",
  districtIntro:
    "İstanbul'un en büyük toptan ticaret merkezlerinden biri olan Bayrampaşa; güçlü lojistik konumu, büyük market kompleksleri ve yoğun ticari dokusuyla işletme güvenlik sistemleri açısından kritik bir ilçedir.",
  landmarks: [
    "Bayrampaşa Merkez",
    "İstanbul Büyük Kapalı Çarşı (Pazaryeri)",
    "E-5 Bağlantısı",
    "Vatan Caddesi",
    "Muratpaşa",
    "Yıldırım",
    "Çırçır",
    "Terazidere",
    "Kocatepe",
  ],
  nearbyDistricts: ["fatih", "gungoren", "esenler", "bagcilar"],
  services: {
    "kamera-sistemi-kurulumu": {
      heroTitle: "Bayrampaşa Kamera Sistemi Kurulumu",
      heroIntro:
        "Bayrampaşa'nın büyük toptan ticaret komplekslerinden Vatan Caddesi'nin iş merkezlerine, E-5 hattındaki depolardan konut bloklarına — yoğun ticari trafiğin güvenliğini profesyonel kamera sistemiyle sağlayın.",
      whatsappMessage:
        "Merhaba, Bayrampaşa'da kamera sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Bayrampaşa'nın büyük toptan ticaret komplekslerindeki yüksek stok değerleri ve yoğun müşteri trafiği, kapsamlı kamera izleme sistemini birincil güvenlik yatırımı haline getiriyor.",
      ctaTitle: "Bayrampaşa'da Ticari Güvenliği Kamerayla Güçlendirin",
      ctaSubtitle:
        "Toptancı dükkanınız, deponuz veya işyeriniz için Bayrampaşa'da ücretsiz keşif alın.",
      faqs: [
        {
          question: "Bayrampaşa'daki toptancı dükkanım için kamera sistemi nasıl planlanır?",
          answer:
            "Depo, satış alanı, kasa çevresi ve mağaza girişi analiz edilerek kör nokta kalmayacak şekilde plan hazırlanır.",
        },
        {
          question: "Bayrampaşa'da büyük ticaret kompleksi için merkezi kamera sistemi kurulabilir mi?",
          answer:
            "Evet. Çok katlı ve çok bölümlü yapılar için merkezi NVR üzerinden yönetilen geniş ölçekli kamera sistemleri kurulmaktadır.",
        },
        {
          question: "Bayrampaşa'da depo için gece güvenlik kamerası önerilir mi?",
          answer:
            "Evet. Gece saatlerindeki risk için IR gece görüşlü kameralar ve hareket tetiklemeli kayıt sistemi standart olarak önerilir.",
        },
      ],
    },
    "alarm-sistemi-kurulumu": {
      heroTitle: "Bayrampaşa Alarm Sistemi Kurulumu",
      heroIntro:
        "Bayrampaşa'nın büyük ticaret komplekslerinden Vatan Caddesi'nin iş merkezlerine, toptancı depolarından Çırçır konut mahallelerine — güçlü alarm sistemleriyle hem işletme hem konut güvenliğini koruyun.",
      whatsappMessage:
        "Merhaba, Bayrampaşa'da alarm sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Bayrampaşa'nın toptan ticaret yapısındaki yüksek stok yoğunluğu, gece saatlerinde depo ve dükkan güvenliğini alarm sistemi açısından zorunlu kılıyor.",
      ctaTitle: "Bayrampaşa'da Güvenliği Alarma Bağlayın",
      ctaSubtitle:
        "Deponuz, toptancı dükkanınız veya işyeriniz için Bayrampaşa'da alarm keşfi ve teklif alın.",
      faqs: [
        {
          question: "Bayrampaşa'daki depom için alarm sistemi nasıl planlanır?",
          answer:
            "Depo giriş kapıları, pencereler, yükleme rampaları ve ofis alanları analiz edilerek çok bölgeli alarm planı oluşturulur.",
        },
        {
          question: "Bayrampaşa'da mesai dışı alarm bildirimi nasıl çalışır?",
          answer:
            "İşyeri kapandığında alarm otomatik devreye girer; yetkisiz giriş, hareket veya cam kırılmasında anlık mobil bildirim gönderilir.",
        },
        {
          question: "Bayrampaşa'da konut için alarm sistemi önerilir mi?",
          answer:
            "Evet. Daire kapısı, pencereler ve balkon için sensör + siren sistemleriyle daire alarmı kurulabilir.",
        },
      ],
    },
    "kartli-gecis-sistemi-kurulumu": {
      heroTitle: "Bayrampaşa Kartlı Geçiş Sistemi Kurulumu",
      heroIntro:
        "Bayrampaşa'nın büyük ticaret komplekslerinden Vatan Caddesi'nin kurumsal binalarına — yüksek müşteri ve personel trafiğini kartlı geçiş sistemiyle yönetin, yetkisiz girişlerin önüne geçin.",
      whatsappMessage:
        "Merhaba, Bayrampaşa'da kartlı geçiş sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Bayrampaşa'nın büyük ticaret komplekslerindeki yoğun ziyaretçi trafiğini kontrol altında tutmak ve personel erişimini bölge bazında sınırlamak için kartlı geçiş sistemi kritik bir yatırımdır.",
      ctaTitle: "Bayrampaşa'da Giriş Kontrolünü Yönetin",
      ctaSubtitle:
        "Ticaret kompleksiniz, deponuz veya ofisiniz için Bayrampaşa'da kartlı geçiş keşfi ve teklif alın.",
      faqs: [
        {
          question: "Bayrampaşa'daki ticaret kompleksine kartlı geçiş nasıl kurulur?",
          answer:
            "Ana giriş, kat geçişleri ve depo bölümleri keşif sonrası belirlenerek okuyucu ve kontrol paneli planı hazırlanır.",
        },
        {
          question: "Bayrampaşa'da ziyaretçi yönetimi için geçici kart sistemi kurulabilir mi?",
          answer:
            "Evet. Geçici kart veya QR kod ile ziyaretçi erişimi tanımlanabilir; giriş-çıkış logları raporlanır.",
        },
        {
          question: "Bayrampaşa'da kartlı geçiş sistemi hırsızlık önlemeye katkı sağlar mı?",
          answer:
            "Evet. Yetkisiz bölge erişimini engeller; alarm sistemiyle entegre edildiğinde anında müdahale imkânı sağlar.",
        },
      ],
    },
  },
};

const gungoren: DistrictProfile = {
  name: "Güngören",
  slug: "gungoren",
  locative: "Güngören'de",
  districtIntro:
    "Merter tekstil merkezi ile iç içe geçmiş, yoğun ticari ve konut dokusuyla öne çıkan Güngören; küçük ölçekli atölyeler, tekstil toptancıları ve kalabalık apartman bloklarıyla güvenlik sistemine olan talebin yüksek olduğu bir ilçedir.",
  landmarks: [
    "Merter",
    "Güngören Merkez",
    "Güneştepe",
    "Haznedar",
    "Tozkoparan",
    "Çobançeşme",
    "Akıncıbayır",
  ],
  nearbyDistricts: ["bahcelievler", "bayrampasa", "bakirkoy", "esenler"],
  services: {
    "kamera-sistemi-kurulumu": {
      heroTitle: "Güngören Kamera Sistemi Kurulumu",
      heroIntro:
        "Merter'in tekstil showroomlarından Güngören'in yoğun konut bloklarına, atölye ve depolardan cadde mağazalarına — Güngören'de her işletme ve konut için profesyonel kamera güvenliği. Aynı gün keşif.",
      whatsappMessage:
        "Merhaba, Güngören'de kamera sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Merter'in yüksek değerli tekstil stoklarını barındıran showroom ve depoları, Güngören'de kamera sistemini hem caydırıcılık hem delil temini açısından zorunlu kılıyor.",
      ctaTitle: "Merter'den Haznedar'a — Güngören'de Kamera Kurulumu",
      ctaSubtitle:
        "Showroomunuz, atölyeniz veya daireniz için Güngören'de ücretsiz keşif alın.",
      faqs: [
        {
          question: "Merter'deki tekstil showroomum için kamera sistemi nasıl planlanır?",
          answer:
            "Sergi alanı, depo, kasa çevresi ve giriş-çıkış noktaları keşif sonrası analiz edilerek kamera planı hazırlanır.",
        },
        {
          question: "Güngören'de apartman sitesi için kamera kurulumu yapılıyor mu?",
          answer:
            "Evet. Apartman girişi, otopark ve ortak alanlar için site kamera sistemi planlanmaktadır.",
        },
        {
          question: "Güngören'de mağaza kameralarına mobil erişim sağlanabiliyor mu?",
          answer:
            "Evet. Tüm sistemlerimize mobil uygulama üzerinden canlı görüntü ve kayıt erişimi dahildir.",
        },
      ],
    },
    "alarm-sistemi-kurulumu": {
      heroTitle: "Güngören Alarm Sistemi Kurulumu",
      heroIntro:
        "Merter'in değerli tekstil stoklarından Güngören'in yoğun konut mahallelerine — hırsızlık caydırıcı alarm sistemleri ile işletmenizi ve evinizi koruyun. Sensör planlamasından mobil bildirime komple kurulum.",
      whatsappMessage:
        "Merhaba, Güngören'de alarm sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Merter-Güngören hattındaki tekstil showroomlarının yüksek stok değeri ve yoğun konut dokusu, alarm sistemini hem ticari hem konut güvenliğinde birincil yatırım haline getiriyor.",
      ctaTitle: "Güngören'de Güvenliği Alarma Bağlayın",
      ctaSubtitle:
        "Showroomunuz, atölyeniz veya daireniz için Güngören'de alarm keşfi ve teklif alın.",
      faqs: [
        {
          question: "Merter'deki dükkanım için alarm sistemi nasıl planlanır?",
          answer:
            "Showroom cephesi, depo girişi ve ofis alanları analiz edilerek sensör planı oluşturulur.",
        },
        {
          question: "Güngören'de daire alarm sistemi kurulumu ne kadar sürer?",
          answer:
            "Standart bir daire için alarm kurulumu genellikle 2-4 saat içinde tamamlanır.",
        },
        {
          question: "Güngören'de alarm sistemi 7/24 izleme merkezine bağlanabiliyor mu?",
          answer:
            "Evet. İsteğe bağlı olarak özel güvenlik izleme merkezine entegrasyon sağlanmaktadır.",
        },
      ],
    },
    "kartli-gecis-sistemi-kurulumu": {
      heroTitle: "Güngören Kartlı Geçiş Sistemi Kurulumu",
      heroIntro:
        "Merter'in büyük tekstil binalarından Güngören konut sitelerine — yoğun personel ve ziyaretçi trafiğini kartlı geçiş sistemiyle yönetin, yetkisiz girişlerin önüne geçin.",
      whatsappMessage:
        "Merhaba, Güngören'de kartlı geçiş sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Merter'in çok katlı tekstil iş merkezleri ve Güngören'in büyük konut sitelerinde kontrolsüz giriş-çıkış hem güvenlik açığı hem yönetim sorunu yaratıyor; kartlı geçiş sistemi her ikisini de çözüyor.",
      ctaTitle: "Güngören'de Giriş Kontrolünü Dijitalleştirin",
      ctaSubtitle:
        "Tekstil binanız, showroomunuz veya siteniz için Güngören'de kartlı geçiş keşfi ve teklif alın.",
      faqs: [
        {
          question: "Merter'deki tekstil iş merkezime kartlı geçiş nasıl kurulur?",
          answer:
            "Bina ana girişi, kat çıkışları ve depo kapıları keşif sonrası belirlenerek okuyucu planı hazırlanır.",
        },
        {
          question: "Güngören'deki siteye kartlı geçiş + araç bariyeri kurulabilir mi?",
          answer:
            "Evet. Araç bariyeri ve yaya girişi kartlı okuyucuyla entegreli komple sistem sunulmaktadır.",
        },
        {
          question: "Güngören'de kartlı geçiş sistemi personel devam takibine uygun mu?",
          answer:
            "Evet. Giriş-çıkış loglarından otomatik mesai raporu oluşturan yazılım entegrasyonu mevcuttur.",
        },
      ],
    },
  },
};

const bahcelievler: DistrictProfile = {
  name: "Bahçelievler",
  slug: "bahcelievler",
  locative: "Bahçelievler'de",
  districtIntro:
    "E-5 otoyolu üzerinde İstanbul'un en kalabalık ve en yoğun ticari dokularından birine sahip olan Bahçelievler; yüzlerce mağaza ve işletme, kalabalık konut mahalleleri ve büyük alışveriş merkezleriyle güvenlik sistemi talebinin yüksek olduğu bir ilçedir.",
  landmarks: [
    "Bahçelievler Merkez",
    "Yenibosna",
    "Şirinevler",
    "Soğanlı",
    "Kocasinan",
    "Çobançeşme",
    "E-5 Üzeri",
    "Florya Yolu",
    "Bahçelievler Meydanı",
  ],
  nearbyDistricts: ["bakirkoy", "gungoren", "kucukcekmece", "bayrampasa"],
  services: {
    "kamera-sistemi-kurulumu": {
      heroTitle: "Bahçelievler Kamera Sistemi Kurulumu",
      heroIntro:
        "Yenibosna'nın ticaret merkezinden Şirinevler'in yoğun mağaza aksına, E-5 üzerindeki işyerlerinden Soğanlı konut sitelerine — Bahçelievler'de her işletme ve konut için profesyonel kamera güvenliği. Aynı gün keşif.",
      whatsappMessage:
        "Merhaba, Bahçelievler'de kamera sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Bahçelievler'in E-5 üzerindeki yoğun ticari aksı ve kalabalık konut mahalleleri, kamera sistemini hem işletme hem site güvenliği açısından birincil yatırım haline getiriyor.",
      ctaTitle: "Yenibosna'dan Şirinevler'e — Bahçelievler'de Kamera Kurulumu",
      ctaSubtitle:
        "Mağazanız, ofisiniz veya siteniz için Bahçelievler'de ücretsiz keşif alın; kamera planınızı birlikte oluşturalım.",
      faqs: [
        {
          question: "Bahçelievler'de mağaza kamera sistemi nasıl planlanır?",
          answer:
            "Cadde cephesi, vitrin, kasa ve depo alanları keşif sonrası analiz edilerek kör nokta kalmayacak kamera planı hazırlanır.",
        },
        {
          question: "Bahçelievler'deki sitem için kamera kurulumu ne kadar sürer?",
          answer:
            "Site büyüklüğüne ve kamera sayısına göre 1-3 günde tamamlanır; keşif sonrası kesin süre belirlenir.",
        },
        {
          question: "Bahçelievler'de işyeri kameraları mobil telefondan izlenebilir mi?",
          answer:
            "Evet. Tüm sistemlerimize mobil uygulama üzerinden canlı izleme ve kayıt erişimi dahildir.",
        },
      ],
    },
    "alarm-sistemi-kurulumu": {
      heroTitle: "Bahçelievler Alarm Sistemi Kurulumu",
      heroIntro:
        "E-5 üzerindeki mağazalardan Yenibosna ticaret merkezine, Soğanlı konut bloklarından Kocasinan mahalle dükkanlarına — Bahçelievler genelinde hırsızlık caydırıcı alarm sistemleri. Mobil bildirimli, 7/24 etkin.",
      whatsappMessage:
        "Merhaba, Bahçelievler'de alarm sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Bahçelievler'in E-5 üzerindeki gece saatlerinde yüksek risk taşıyan ticaret aksı ve yoğun konut mahalleleri, alarm sistemini hem caydırıcılık hem erken uyarı açısından zorunlu kılıyor.",
      ctaTitle: "Bahçelievler'de Güvenliği Alarma Bağlayın",
      ctaSubtitle:
        "Mağazanız veya daireniz için Bahçelievler'de alarm keşfi ve teklif alın — kurulum aynı gün tamamlanır.",
      faqs: [
        {
          question: "Bahçelievler'de dükkan alarm sistemi kurulumu ne kadar sürer?",
          answer:
            "Standart bir mağaza için alarm kurulumu genellikle yarım ila tam gün içinde tamamlanır.",
        },
        {
          question: "Bahçelievler'de daire için alarm sistemi önerilir mi?",
          answer:
            "Evet. Kapı, pencere sensörleri ve hareket dedektörüyle daire için etkili alarm sistemi kurulabilir.",
        },
        {
          question: "Bahçelievler'de alarm sistemi mesai dışında nasıl çalışır?",
          answer:
            "Kapanış sonrası sistem otomatik devreye girer; herhangi bir hareket veya kapı-pencere ihlalinde anlık SMS ve uygulama bildirimi gönderilir.",
        },
      ],
    },
    "kartli-gecis-sistemi-kurulumu": {
      heroTitle: "Bahçelievler Kartlı Geçiş Sistemi Kurulumu",
      heroIntro:
        "Yenibosna iş merkezlerinden Şirinevler'in büyük ticari yapılarına, E-5 üzerindeki ofis binalarından Soğanlı konut sitelerine — Bahçelievler'de giriş-çıkış kontrolünü kartlı geçiş sistemiyle profesyonelleştirin.",
      whatsappMessage:
        "Merhaba, Bahçelievler'de kartlı geçiş sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Bahçelievler'in kalabalık ticaret binaları ve büyük konut sitelerinde kontrolsüz araç ve ziyaretçi girişini önlemek için kartlı geçiş sistemi hem güvenlik hem yönetim aracı olarak öne çıkıyor.",
      ctaTitle: "Bahçelievler'de Giriş Kontrolünü Dijitalleştirin",
      ctaSubtitle:
        "Siteniz, ofisiniz veya ticari binanız için Bahçelievler'de kartlı geçiş keşfi ve teklif alın.",
      faqs: [
        {
          question: "Bahçelievler'deki iş merkezime kartlı geçiş nasıl kurulur?",
          answer:
            "Bina ana girişi, kat çıkışları ve otopark keşif sonrası belirlenerek okuyucu ve kontrol paneli planı hazırlanır.",
        },
        {
          question: "Bahçelievler'deki siteye araç bariyeri + kartlı giriş kurulabilir mi?",
          answer:
            "Evet. Araç bariyeri ve yaya girişi için kartlı okuyucu entegreli komple sistem sunulmaktadır.",
        },
        {
          question: "Bahçelievler'de kartlı geçiş sistemi personel takibi yapabiliyor mu?",
          answer:
            "Evet. Giriş-çıkış loglarından otomatik mesai raporu oluşturan yazılım entegrasyonu mevcuttur.",
        },
      ],
    },
  },
};

// ---------------------------------------------------------------------------
// Tier 3 districts — Maltepe, Kartal, Küçükçekmece, Beylikdüzü,
//                    Esenyurt, Bağcılar, Kağıthane, Beyoğlu
// ---------------------------------------------------------------------------

const maltepe: DistrictProfile = {
  name: "Maltepe",
  slug: "maltepe",
  locative: "Maltepe'de",
  districtIntro:
    "Anadolu Yakası'nın en köklü sahil ilçelerinden biri olan Maltepe; Bağdat Caddesi'nin uzantısı, sahil şeridi, köklü konut mahalleleri ve büyüyen AVM kompleksleriyle hem konut hem ticari güvenlik talebinin yüksek olduğu bir ilçedir.",
  landmarks: [
    "Maltepe Sahili",
    "Bağdat Caddesi Uzantısı",
    "Cevizli",
    "Altıntepe",
    "Başıbüyük",
    "İdealtepe",
    "Küçükyalı",
    "Maltepe Park AVM",
    "Maltepe Merkez",
  ],
  nearbyDistricts: ["kadikoy", "kartal", "atasehir", "sultanbeyli"],
  services: {
    "kamera-sistemi-kurulumu": {
      heroTitle: "Maltepe Kamera Sistemi Kurulumu",
      heroIntro:
        "Bağdat Caddesi uzantısının butik mağazalarından Küçükyalı sahil işletmelerine, Cevizli konut sitelerinden Altıntepe ticaret merkezine — Maltepe'de her işletme ve konut için profesyonel kamera güvenliği. Aynı gün keşif.",
      whatsappMessage:
        "Merhaba, Maltepe'de kamera sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Bağdat Caddesi uzantısındaki perakende mağazaları ve Maltepe sahil şeridinin işletmeleri, yüksek müşteri trafiği ile kamera güvenliğini birincil öncelik haline getiriyor.",
      ctaTitle: "Küçükyalı'dan Altıntepe'ye — Maltepe'de Kamera Kurulumu",
      ctaSubtitle:
        "Mağazanız, ofisiniz veya siteniz için Maltepe'de ücretsiz keşif alın; kamera planınızı birlikte oluşturalım.",
      faqs: [
        {
          question: "Maltepe'de sahil işletmem için kamera sistemi nasıl planlanır?",
          answer:
            "Dış mekan, giriş, kasa ve depo alanları keşif sonrası analiz edilerek deniz kıyısı koşullarına dayanıklı kamera planı hazırlanır.",
        },
        {
          question: "Maltepe'deki sitem için kamera kurulumu yapılıyor mu?",
          answer:
            "Evet. Site girişi, otopark, ortak alanlar ve çevre güvenliği için kapsamlı kamera planı hazırlanmaktadır.",
        },
        {
          question: "Maltepe'de kamera sistemi kurulumu ne kadar sürer?",
          answer:
            "Orta ölçekli projeler genellikle aynı gün tamamlanır; kesin süre keşif sonrası belirlenir.",
        },
      ],
    },
    "alarm-sistemi-kurulumu": {
      heroTitle: "Maltepe Alarm Sistemi Kurulumu",
      heroIntro:
        "Küçükyalı'nın sahil işletmelerinden Cevizli konut bloklarına, Altıntepe'nin mağazalarından İdealtepe mahalle dükkanlarına — Maltepe genelinde hırsızlık caydırıcı alarm sistemleri. Mobil bildirimli, 7/24 etkin.",
      whatsappMessage:
        "Merhaba, Maltepe'de alarm sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Maltepe'nin köklü konut bölgeleri ve sahil işletmelerinde alarm sistemleri hem caydırıcılık hem erken uyarı açısından güvenliğin temeli haline geliyor.",
      ctaTitle: "Maltepe'de Güvenliği Alarma Bağlayın",
      ctaSubtitle:
        "Mağazanız veya daireniz için Maltepe'de alarm keşfi ve teklif alın — kurulum aynı gün tamamlanır.",
      faqs: [
        {
          question: "Maltepe'de daire alarm sistemi kurulumu ne kadar sürer?",
          answer:
            "Standart bir daire için alarm kurulumu genellikle 2-4 saat içinde tamamlanır.",
        },
        {
          question: "Maltepe'deki mağazam için hangi alarm tipi önerilir?",
          answer:
            "Mağaza büyüklüğü ve cadde yoğunluğuna göre PIR hareket sensörü, kırılma dedektörü ve sesli siren kombinasyonu önerilir.",
        },
        {
          question: "Maltepe'de 7/24 izleme merkezine bağlı alarm kurulumu yapılıyor mu?",
          answer:
            "Evet. İsteğe bağlı olarak özel güvenlik izleme merkezine entegrasyon sağlanmaktadır.",
        },
      ],
    },
    "kartli-gecis-sistemi-kurulumu": {
      heroTitle: "Maltepe Kartlı Geçiş Sistemi Kurulumu",
      heroIntro:
        "Cevizli'nin büyük konut sitelerinden Altıntepe iş merkezlerine, Maltepe'nin ticari yapılarından Küçükyalı sahil otellerine — giriş-çıkış kontrolünü kartlı geçiş sistemiyle profesyonelleştirin.",
      whatsappMessage:
        "Merhaba, Maltepe'de kartlı geçiş sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Maltepe'nin büyük konut siteleri ve ticari yapılarında kontrolsüz araç ve ziyaretçi girişini önlemek için kartlı geçiş sistemi kritik bir yatırım haline geliyor.",
      ctaTitle: "Maltepe'de Giriş Kontrolünü Dijitalleştirin",
      ctaSubtitle:
        "Siteniz, ofisiniz veya ticari binanız için Maltepe'de kartlı geçiş keşfi ve teklif alın.",
      faqs: [
        {
          question: "Maltepe'deki siteye araç bariyeri + kartlı giriş kurulabilir mi?",
          answer:
            "Evet. Araç bariyeri ve yaya girişi için kartlı okuyucu entegreli komple sistem sunulmaktadır.",
        },
        {
          question: "Maltepe'de otel için kartlı oda erişim sistemi kurulabilir mi?",
          answer:
            "Evet. Oda kapılarına RFID kart okuyucu ve personel girişine ayrı yetki seviyeli sistem kurulabilir.",
        },
        {
          question: "Maltepe'de kartlı geçiş sistemi personel takibi yapabiliyor mu?",
          answer:
            "Evet. Giriş-çıkış loglarından otomatik mesai raporu oluşturan yazılım entegrasyonu mevcuttur.",
        },
      ],
    },
  },
};

const kartal: DistrictProfile = {
  name: "Kartal",
  slug: "kartal",
  locative: "Kartal'da",
  districtIntro:
    "Anadolu Yakası'nın hızla dönüşen sanayi ve kentsel yenileme merkezi olan Kartal; İstanbul'un en büyük organize sanayi alanlarından birine, büyüyen rezidans projelerine ve güçlü ticaret aksına sahip stratejik bir ilçedir.",
  landmarks: [
    "Kartal Merkez",
    "Yakacık",
    "Uğur Mumcu Caddesi",
    "Kartal OSB",
    "Petrol Ofisi Kavşağı",
    "Soğanlık",
    "Karlıktepe",
    "Kartal Sahili",
    "Dragos",
  ],
  nearbyDistricts: ["maltepe", "pendik", "sultanbeyli", "sancaktepe"],
  services: {
    "kamera-sistemi-kurulumu": {
      heroTitle: "Kartal Kamera Sistemi Kurulumu",
      heroIntro:
        "Kartal OSB'nin fabrikalarından Yakacık'ın konut sitelerine, Dragos'un prestijli rezidanslarından Uğur Mumcu Caddesi'nin ticaret aksına — Kartal'da endüstriyel ve konut kamera güvenliği. Aynı gün keşif.",
      whatsappMessage:
        "Merhaba, Kartal'da kamera sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Kartal OSB'nin fabrika ve depoları ile hızla büyüyen rezidans projeleri, Kartal'da hem endüstriyel ölçekte hem konut standartta kamera güvenliğine olan talebi ikiye katlıyor.",
      ctaTitle: "Kartal OSB'den Dragos'a — Kartal'da Kamera Kurulumu",
      ctaSubtitle:
        "Fabrikanız, deponuz veya siteniz için Kartal'da ücretsiz keşif alın; kamera planınızı birlikte oluşturalım.",
      faqs: [
        {
          question: "Kartal OSB'deki fabrikam için endüstriyel kamera sistemi nasıl planlanır?",
          answer:
            "Üretim hattı, depo, dış çevre hattı ve yükleme rampaları keşif sonrası analiz edilerek geniş alan kamera planı hazırlanır.",
        },
        {
          question: "Kartal'daki rezidansım için kamera sistemi kurulumu yapılıyor mu?",
          answer:
            "Evet. Rezidans girişi, otopark, ortak katlar ve dış çevre güvenliği için komple kamera planı hazırlanmaktadır.",
        },
        {
          question: "Kartal'da gece görüşlü dış ortam kamerası kurulumu yapılıyor mu?",
          answer:
            "Evet. Endüstriyel ve konut dış mekanlarına uygun IR gece görüşlü, vandal-proof IP kameralarla kurulum yapılmaktadır.",
        },
      ],
    },
    "alarm-sistemi-kurulumu": {
      heroTitle: "Kartal Alarm Sistemi Kurulumu",
      heroIntro:
        "Kartal OSB'nin değerli ekipman ve stoklarından Yakacık konut mahallelerine, Dragos rezidanslarından Soğanlık sanayi alanlarına — Kartal genelinde güçlü alarm çözümleri. 7/24 izleme merkezi entegrasyon seçeneğiyle.",
      whatsappMessage:
        "Merhaba, Kartal'da alarm sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Kartal'ın sanayi tesislerindeki yüksek ekipman değerleri ve hızla büyüyen konut bölgelerinde alarm sistemi hem caydırıcılık hem müdahale hızı açısından birincil güvenlik katmanı oluyor.",
      ctaTitle: "Kartal'da Güvenliği Alarma Bağlayın",
      ctaSubtitle:
        "Fabrikanız, deponuz veya daireniz için Kartal'da alarm keşfi ve teklif alın — kurulum aynı gün tamamlanır.",
      faqs: [
        {
          question: "Kartal OSB'deki fabrikam için alarm sistemi nasıl planlanır?",
          answer:
            "Tesis çevresi, ana giriş kapıları, depo ve üretim bölümleri analiz edilerek bölge bazlı alarm planı oluşturulur.",
        },
        {
          question: "Kartal'daki yeni rezidansım için alarm sistemi önerilir mi?",
          answer:
            "Evet. Kapı-pencere sensörleri ve hareket dedektörüyle daire alarmı kurulabilir; site yönetimiyle entegrasyon sağlanabilir.",
        },
        {
          question: "Kartal'da alarm sistemi 7/24 izleme merkezine bağlanabiliyor mu?",
          answer:
            "Evet. Özel güvenlik izleme merkezine bağlı alarm sistemleri kurulmaktadır; alarm anında güvenlik müdahalesi sağlanır.",
        },
      ],
    },
    "kartli-gecis-sistemi-kurulumu": {
      heroTitle: "Kartal Kartlı Geçiş Sistemi Kurulumu",
      heroIntro:
        "Kartal OSB'nin vardiyalı üretim tesislerinden Dragos rezidanslarına, Yakacık konut sitelerinden Uğur Mumcu Caddesi iş merkezlerine — Kartal'da giriş-çıkış kontrolünü kartlı geçiş sistemiyle yönetin.",
      whatsappMessage:
        "Merhaba, Kartal'da kartlı geçiş sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Kartal OSB'deki sanayi tesisleri ve Dragos'un prestijli rezidanslarında personel ve ziyaretçi erişimini dijital olarak yönetmek için kartlı geçiş sistemi endüstriyel standart haline geliyor.",
      ctaTitle: "Kartal'da Giriş Kontrolünü Dijitalleştirin",
      ctaSubtitle:
        "Fabrikanız, siteniz veya ofisiniz için Kartal'da kartlı geçiş keşfi ve teklif alın.",
      faqs: [
        {
          question: "Kartal OSB'deki fabrikama vardiya takipli kartlı geçiş nasıl kurulur?",
          answer:
            "Ana giriş, vardiya kapıları ve bölüm erişimleri için yetki seviyeli okuyucu planı hazırlanır; vardiya logları raporlanır.",
        },
        {
          question: "Kartal'daki rezidansa araç bariyer + kartlı giriş kurulabilir mi?",
          answer:
            "Evet. Araç bariyeri ve yaya girişi için kartlı okuyucu entegreli komple sistem sunulmaktadır.",
        },
        {
          question: "Kartal'da plaka tanıma sistemli araç giriş kontrolü kurulabilir mi?",
          answer:
            "Evet. Plaka tanıma kamerası entegreli araç erişim kontrol sistemi kurulmaktadır.",
        },
      ],
    },
  },
};

const kucukcekmece: DistrictProfile = {
  name: "Küçükçekmece",
  slug: "kucukcekmece",
  locative: "Küçükçekmece'de",
  districtIntro:
    "İstanbul Avrupa Yakası'nın büyük sanayi ve konut ilçelerinden biri olan Küçükçekmece; organize sanayi bölgesi, göl kıyısı yaşam alanları, E-5 ticaret aksı ve kalabalık konut projeleriyle geniş tabanlı güvenlik talebine sahip bir ilçedir.",
  landmarks: [
    "Halkalı",
    "Sefaköy",
    "İkitelli OSB",
    "Atakent",
    "Küçükçekmece Gölü",
    "Kanarya",
    "Florya",
    "Cennet Mahallesi",
    "Yarımburgaz",
  ],
  nearbyDistricts: ["bahcelievler", "avcilar", "basaksehir", "esenler"],
  services: {
    "kamera-sistemi-kurulumu": {
      heroTitle: "Küçükçekmece Kamera Sistemi Kurulumu",
      heroIntro:
        "İkitelli OSB'nin fabrikalarından Halkalı'nın ticaret merkezine, Atakent konut sitelerinden Küçükçekmece göl kıyısı işletmelerine — Küçükçekmece'de endüstriyel ve konut kamera güvenliği. Aynı gün keşif.",
      whatsappMessage:
        "Merhaba, Küçükçekmece'de kamera sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "İkitelli OSB'nin büyük fabrikaları ve Halkalı-Sefaköy hattındaki yoğun ticari yapı, Küçükçekmece'de hem endüstriyel hem konut kamera güvenliğine olan talebi sürekli artırıyor.",
      ctaTitle: "İkitelli'den Atakent'e — Küçükçekmece'de Kamera Kurulumu",
      ctaSubtitle:
        "Fabrikanız, deponuz veya siteniz için Küçükçekmece'de ücretsiz keşif alın.",
      faqs: [
        {
          question: "İkitelli OSB'deki fabrikam için kamera sistemi nasıl planlanır?",
          answer:
            "Üretim alanı, depo, dış çevre ve yükleme rampaları keşif sonrası analiz edilerek endüstriyel kamera planı hazırlanır.",
        },
        {
          question: "Küçükçekmece'deki sitem için kamera kurulumu yapılıyor mu?",
          answer:
            "Evet. Site girişi, otopark, ortak alanlar ve çevre güvenliği için komple site kamera planı hazırlanmaktadır.",
        },
        {
          question: "Küçükçekmece'de E-5 üzerindeki dükkanım için kaç kamera gerekir?",
          answer:
            "Mağaza büyüklüğü ve cadde trafiğine göre genellikle 4-8 kamera ile tam kapsama sağlanır; keşif sonrası kesinleşir.",
        },
      ],
    },
    "alarm-sistemi-kurulumu": {
      heroTitle: "Küçükçekmece Alarm Sistemi Kurulumu",
      heroIntro:
        "İkitelli'nin sanayi tesislerinden Halkalı'nın ticaret merkezine, Atakent konut bloklarından Sefaköy mahalle dükkanlarına — Küçükçekmece genelinde hırsızlık caydırıcı alarm sistemleri. Mobil bildirimli, 7/24 etkin.",
      whatsappMessage:
        "Merhaba, Küçükçekmece'de alarm sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "İkitelli OSB'nin yüksek değerli ekipmanları ve Küçükçekmece'nin büyük konut mahallelerinde alarm sistemi hem caydırıcılık hem hızlı müdahale açısından birincil güvenlik katmanı oluyor.",
      ctaTitle: "Küçükçekmece'de Güvenliği Alarma Bağlayın",
      ctaSubtitle:
        "Fabrikanız, dükkanınız veya daireniz için Küçükçekmece'de alarm keşfi ve teklif alın.",
      faqs: [
        {
          question: "İkitelli'deki fabrikam için alarm sistemi nasıl planlanır?",
          answer:
            "Tesis çevresi, ana giriş kapıları, depo ve üretim bölümleri analiz edilerek bölge bazlı alarm planı oluşturulur.",
        },
        {
          question: "Küçükçekmece'de daire alarm sistemi kurulumu ne kadar sürer?",
          answer:
            "Standart bir daire için alarm kurulumu genellikle 2-4 saat içinde tamamlanır.",
        },
        {
          question: "Küçükçekmece'de alarm sistemi 7/24 izleme merkezine bağlanabiliyor mu?",
          answer:
            "Evet. Özel güvenlik izleme merkezine bağlı alarm sistemleri kurulmaktadır.",
        },
      ],
    },
    "kartli-gecis-sistemi-kurulumu": {
      heroTitle: "Küçükçekmece Kartlı Geçiş Sistemi Kurulumu",
      heroIntro:
        "İkitelli OSB'nin vardiyalı üretim tesislerinden Atakent konut sitelerine, Halkalı iş merkezlerinden Sefaköy ticari yapılarına — Küçükçekmece'de giriş-çıkış kontrolünü kartlı geçiş sistemiyle yönetin.",
      whatsappMessage:
        "Merhaba, Küçükçekmece'de kartlı geçiş sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "İkitelli'nin büyük sanayi tesisleri ve Küçükçekmece'nin yoğun konut sitelerinde personel ve araç erişimini dijital olarak kontrol altına almak için kartlı geçiş sistemi kritik bir yatırımdır.",
      ctaTitle: "Küçükçekmece'de Giriş Kontrolünü Dijitalleştirin",
      ctaSubtitle:
        "Fabrikanız, siteniz veya ofisiniz için Küçükçekmece'de kartlı geçiş keşfi ve teklif alın.",
      faqs: [
        {
          question: "İkitelli OSB'deki fabrikama kartlı geçiş sistemi nasıl kurulur?",
          answer:
            "Ana giriş, vardiya kapıları ve bölüm erişimleri keşif sonrası belirlenerek okuyucu ve kontrol paneli planı hazırlanır.",
        },
        {
          question: "Küçükçekmece'deki siteye araç bariyer + kartlı giriş kurulabilir mi?",
          answer:
            "Evet. Araç bariyeri ve yaya girişi kartlı okuyucu entegreli komple sistem sunulmaktadır.",
        },
        {
          question: "Küçükçekmece'de kartlı geçiş sistemi kaç kişilik kapasitede çalışabilir?",
          answer:
            "Sistem ölçeklenebilir yapıdadır; küçük atölyeden büyük fabrikalara kadar ihtiyaç duyulan kapasite keşif sonrası belirlenir.",
        },
      ],
    },
  },
};

const beylikduzu: DistrictProfile = {
  name: "Beylikdüzü",
  slug: "beylikduzu",
  locative: "Beylikdüzü'nde",
  districtIntro:
    "İstanbul'un en hızlı büyüyen ilçelerinden biri olan Beylikdüzü; modern rezidans projeleri, büyük alışveriş merkezleri, E-5 ticaret aksı ve gelişen ticari bölgeleriyle güvenlik sistemi yatırımlarının yoğunlaştığı bir ilçedir.",
  landmarks: [
    "Beylikdüzü Merkez",
    "Büyükşehir",
    "Cumhuriyet Mahallesi",
    "Gürpınar",
    "Marmara Park AVM",
    "Beylikdüzü OSB",
    "E-5 Üzeri",
    "Adnan Kahveci Bulvarı",
    "Beylikdüzü Sahili",
  ],
  nearbyDistricts: ["esenyurt", "avcilar", "kucukcekmece", "buyukcekmece"],
  services: {
    "kamera-sistemi-kurulumu": {
      heroTitle: "Beylikdüzü Kamera Sistemi Kurulumu",
      heroIntro:
        "Beylikdüzü'nün modern rezidans projelerinden Adnan Kahveci Bulvarı'nın ticaret aksına, OSB'nin sanayi tesislerinden sahil konut sitelerine — Beylikdüzü'nde profesyonel kamera güvenliği. Aynı gün keşif.",
      whatsappMessage:
        "Merhaba, Beylikdüzü'nde kamera sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Beylikdüzü'nün hızla büyüyen rezidans projeleri ve Adnan Kahveci Bulvarı'ndaki yoğun ticaret aksı, kamera güvenliğini hem konut hem işletme tarafında birincil yatırım haline getiriyor.",
      ctaTitle: "Beylikdüzü'nde Kamera Güvenliğini Kurun",
      ctaSubtitle:
        "Rezidansınız, mağazanız veya ofisiniz için Beylikdüzü'nde ücretsiz keşif alın.",
      faqs: [
        {
          question: "Beylikdüzü'ndeki yeni rezidansım için kamera sistemi nasıl planlanır?",
          answer:
            "Rezidans girişi, otopark, ortak katlar ve dış çevre güvenliği keşif sonrası analiz edilerek komple kamera planı hazırlanır.",
        },
        {
          question: "Beylikdüzü OSB'deki fabrikam için kamera kurulumu yapılıyor mu?",
          answer:
            "Evet. Endüstriyel alanlara uygun geniş açılı ve gece görüşlü kamera sistemleriyle kurulum yapılmaktadır.",
        },
        {
          question: "Beylikdüzü'nde mağaza kameraları mobil telefondan izlenebilir mi?",
          answer:
            "Evet. Tüm sistemlerimize mobil uygulama üzerinden canlı izleme ve kayıt erişimi dahildir.",
        },
      ],
    },
    "alarm-sistemi-kurulumu": {
      heroTitle: "Beylikdüzü Alarm Sistemi Kurulumu",
      heroIntro:
        "Gürpınar konut mahallelerinden Beylikdüzü Merkez'in ticaret hatlarına, modern rezidans projelerinden OSB'nin sanayi tesislerine — Beylikdüzü genelinde hırsızlık caydırıcı alarm sistemleri. Mobil bildirimli.",
      whatsappMessage:
        "Merhaba, Beylikdüzü'nde alarm sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Beylikdüzü'nün hızla büyüyen konut projeleri ve Adnan Kahveci Bulvarı'ndaki yoğun ticari yapıda alarm sistemi hem caydırıcılık hem erken uyarı açısından kritik bir yatırım.",
      ctaTitle: "Beylikdüzü'nde Güvenliği Alarma Bağlayın",
      ctaSubtitle:
        "Rezidansınız, dükkanınız veya ofisiniz için Beylikdüzü'nde alarm keşfi ve teklif alın.",
      faqs: [
        {
          question: "Beylikdüzü'nde daire alarm sistemi kurulumu ne kadar sürer?",
          answer:
            "Standart bir daire için alarm kurulumu genellikle 2-4 saat içinde tamamlanır.",
        },
        {
          question: "Beylikdüzü'ndeki mağazam için hangi alarm tipi önerilir?",
          answer:
            "Cadde konumuna ve mağaza büyüklüğüne göre PIR hareket sensörü, cam kırılma dedektörü ve sesli siren kombinasyonu önerilir.",
        },
        {
          question: "Beylikdüzü'nde alarm sistemi 7/24 izleme merkezine bağlanabiliyor mu?",
          answer:
            "Evet. İsteğe bağlı olarak özel güvenlik izleme merkezine entegrasyon sağlanmaktadır.",
        },
      ],
    },
    "kartli-gecis-sistemi-kurulumu": {
      heroTitle: "Beylikdüzü Kartlı Geçiş Sistemi Kurulumu",
      heroIntro:
        "Beylikdüzü'nün büyük rezidans projelerinden OSB'nin sanayi tesislerine, Adnan Kahveci Bulvarı iş merkezlerinden sahil konut sitelerine — giriş-çıkış kontrolünü kartlı geçiş sistemiyle profesyonelleştirin.",
      whatsappMessage:
        "Merhaba, Beylikdüzü'nde kartlı geçiş sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Beylikdüzü'nün büyük ölçekli konut projeleri ve sanayi tesislerinde kontrolsüz araç ve ziyaretçi girişini önlemek için kartlı geçiş sistemi standart güvenlik altyapısı haline geliyor.",
      ctaTitle: "Beylikdüzü'nde Giriş Kontrolünü Dijitalleştirin",
      ctaSubtitle:
        "Rezidansınız, fabrikanız veya ofisiniz için Beylikdüzü'nde kartlı geçiş keşfi ve teklif alın.",
      faqs: [
        {
          question: "Beylikdüzü'ndeki büyük siteye kartlı geçiş + araç bariyeri kurulabilir mi?",
          answer:
            "Evet. Araç bariyeri ve yaya girişi için kartlı okuyucu entegreli komple sistem sunulmaktadır.",
        },
        {
          question: "Beylikdüzü OSB'deki fabrikama kartlı geçiş nasıl kurulur?",
          answer:
            "Ana giriş, vardiya kapıları ve bölüm erişimleri keşif sonrası belirlenerek okuyucu planı hazırlanır.",
        },
        {
          question: "Beylikdüzü'nde kartlı geçiş sistemi personel devam takibi yapabilir mi?",
          answer:
            "Evet. Giriş-çıkış loglarından otomatik mesai raporu oluşturan yazılım entegrasyonu mevcuttur.",
        },
      ],
    },
  },
};

const esenyurt: DistrictProfile = {
  name: "Esenyurt",
  slug: "esenyurt",
  locative: "Esenyurt'ta",
  districtIntro:
    "İstanbul'un en kalabalık ilçelerinden biri olan Esenyurt; yüz binlerce kişilik konut nüfusu, büyük ticaret merkezleri, sanayi tesisleri ve yoğun apartman dokusuyla güvenlik sistemi talebinin en yoğun olduğu ilçeler arasındadır.",
  landmarks: [
    "Esenyurt Merkez",
    "Taşoluk",
    "Pınar Mahallesi",
    "Yeşilkent",
    "Kapadokya Caddesi",
    "Esenyurt Bulvarı",
    "Haramidere",
    "Akıncılar",
    "Saadetdere",
  ],
  nearbyDistricts: ["beylikduzu", "arnavutkoy", "basaksehir", "kucukcekmece"],
  services: {
    "kamera-sistemi-kurulumu": {
      heroTitle: "Esenyurt Kamera Sistemi Kurulumu",
      heroIntro:
        "Esenyurt Bulvarı'nın yoğun ticaret aksından Haramidere'nin sanayi bölgesine, büyük konut sitelerinden Taşoluk mahalle dükkanlarına — Esenyurt'ta her işletme ve konut için profesyonel kamera güvenliği. Aynı gün keşif.",
      whatsappMessage:
        "Merhaba, Esenyurt'ta kamera sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Esenyurt'un milyonluk nüfusu ve yoğun ticari dokusu, kamera güvenliğini hem caydırıcılık hem izleme açısından birincil güvenlik yatırımı yapıyor.",
      ctaTitle: "Esenyurt'ta Kamera Güvenliğini Kurun",
      ctaSubtitle:
        "Mağazanız, ofisiniz veya siteniz için Esenyurt'ta ücretsiz keşif alın; kamera planınızı birlikte oluşturalım.",
      faqs: [
        {
          question: "Esenyurt'ta büyük site için kamera sistemi nasıl planlanır?",
          answer:
            "Site girişi, otopark, blok girişleri ve çevre güvenliği keşif sonrası analiz edilerek kapsamlı kamera planı hazırlanır.",
        },
        {
          question: "Esenyurt'ta mağaza kamera sistemi kurulumu ne kadar sürer?",
          answer:
            "Orta ölçekli mağazalar genellikle aynı gün tamamlanır; süre keşif sonrası belirlenir.",
        },
        {
          question: "Esenyurt'ta kamera sistemi uzaktan mobil cihazdan izlenebilir mi?",
          answer:
            "Evet. Tüm sistemlerimize mobil uygulama üzerinden canlı izleme ve kayıt erişimi dahildir.",
        },
      ],
    },
    "alarm-sistemi-kurulumu": {
      heroTitle: "Esenyurt Alarm Sistemi Kurulumu",
      heroIntro:
        "Esenyurt Bulvarı'nın mağazalarından Haramidere sanayi bölgesine, Taşoluk konut bloklarından Yeşilkent mahalle dükkanlarına — Esenyurt genelinde hırsızlık caydırıcı alarm sistemleri. Mobil bildirimli, 7/24 etkin.",
      whatsappMessage:
        "Merhaba, Esenyurt'ta alarm sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Esenyurt'un yoğun nüfus yapısı ve çok sayıda konut sitesi, alarm sistemini hem bireysel daire hem site güvenliği açısından zorunlu kılıyor.",
      ctaTitle: "Esenyurt'ta Güvenliği Alarma Bağlayın",
      ctaSubtitle:
        "Mağazanız veya daireniz için Esenyurt'ta alarm keşfi ve teklif alın — kurulum aynı gün tamamlanır.",
      faqs: [
        {
          question: "Esenyurt'ta daire alarm sistemi kurulumu ne kadar sürer?",
          answer:
            "Standart bir daire için alarm kurulumu genellikle 2-4 saat içinde tamamlanır.",
        },
        {
          question: "Esenyurt'ta mağaza için alarm sistemi nasıl planlanır?",
          answer:
            "Mağaza girişi, vitrin alanı, kasa çevresi ve depo keşif sonrası analiz edilerek sensör planı hazırlanır.",
        },
        {
          question: "Esenyurt'ta site ortak alanlarına alarm kurulumu yapılıyor mu?",
          answer:
            "Evet. Lobi, merdiven boşlukları, otopark ve çevre alanlar için kapsamlı alarm planı hazırlanmaktadır.",
        },
      ],
    },
    "kartli-gecis-sistemi-kurulumu": {
      heroTitle: "Esenyurt Kartlı Geçiş Sistemi Kurulumu",
      heroIntro:
        "Esenyurt'un büyük konut sitelerinden Haramidere sanayi bölgesine, Esenyurt Bulvarı iş merkezlerinden Taşoluk konut topluluklarına — giriş-çıkış kontrolünü kartlı geçiş sistemiyle profesyonelleştirin.",
      whatsappMessage:
        "Merhaba, Esenyurt'ta kartlı geçiş sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Esenyurt'un büyük ölçekli site ve apartman komplekslerinde yetkisiz araç ve ziyaretçi girişini önlemek için kartlı geçiş sistemi güvenlik standardı haline geliyor.",
      ctaTitle: "Esenyurt'ta Giriş Kontrolünü Dijitalleştirin",
      ctaSubtitle:
        "Siteniz, fabrikanız veya ofisiniz için Esenyurt'ta kartlı geçiş keşfi ve teklif alın.",
      faqs: [
        {
          question: "Esenyurt'taki büyük siteye araç bariyeri + kartlı giriş kurulabilir mi?",
          answer:
            "Evet. Araç bariyeri ve yaya girişi için kartlı okuyucu entegreli komple sistem sunulmaktadır.",
        },
        {
          question: "Esenyurt'ta apartman girişine kartlı geçiş kurulabilir mi?",
          answer:
            "Evet. Apartman ana kapısına RFID veya akıllı kart okuyucu montajı yapılmaktadır.",
        },
        {
          question: "Esenyurt'ta kartlı geçiş sistemi yönetimi nasıl yapılır?",
          answer:
            "Web tabanlı yönetim paneli üzerinden kart tanımlama, silme ve erişim raporları anlık olarak yönetilebilir.",
        },
      ],
    },
  },
};

const bagcilar: DistrictProfile = {
  name: "Bağcılar",
  slug: "bagcilar",
  locative: "Bağcılar'da",
  districtIntro:
    "İstanbul'un en kalabalık ilçelerinden biri olan Bağcılar; yoğun konut dokusu, tekstil ve küçük sanayi bölgeleri, büyük hastane kompleksleri ve E-5 üzerindeki ticaret aksıyla güvenlik sistemine olan talebin yüksek olduğu bir ilçedir.",
  landmarks: [
    "Bağcılar Merkez",
    "Kirazlı",
    "Güneşli",
    "Mahmutbey",
    "Sancaktepe",
    "Çobançeşme",
    "Bağcılar Eğitim Araştırma Hastanesi",
    "E-5 Üzeri",
    "Yenimahalle",
  ],
  nearbyDistricts: ["bayrampasa", "gungoren", "esenler", "kucukcekmece"],
  services: {
    "kamera-sistemi-kurulumu": {
      heroTitle: "Bağcılar Kamera Sistemi Kurulumu",
      heroIntro:
        "Güneşli'nin iş merkezlerinden Mahmutbey'in sanayi bölgesine, Kirazlı konut bloklarından E-5 üzerindeki mağazalara — Bağcılar'da her işletme ve konut için profesyonel kamera güvenliği. Aynı gün keşif.",
      whatsappMessage:
        "Merhaba, Bağcılar'da kamera sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Bağcılar'ın Güneşli iş merkezi kompleksi ve Mahmutbey sanayi bölgesi, endüstriyel ve kurumsal kamera güvenliğine olan talebi artırıyor; yoğun konut dokusu ise site güvenliğini ön plana çıkarıyor.",
      ctaTitle: "Güneşli'den Mahmutbey'e — Bağcılar'da Kamera Kurulumu",
      ctaSubtitle:
        "İş merkeziniz, fabrikanız veya siteniz için Bağcılar'da ücretsiz keşif alın.",
      faqs: [
        {
          question: "Güneşli'deki iş merkezim için kamera sistemi nasıl planlanır?",
          answer:
            "Bina giriş-çıkışları, otopark, ortak alanlar ve ofis katları keşif sonrası analiz edilerek kamera planı oluşturulur.",
        },
        {
          question: "Bağcılar'daki fabrikam için endüstriyel kamera sistemi kurulabilir mi?",
          answer:
            "Evet. Geniş açılı ve gece görüşlü endüstriyel IP kameralarla fabrika güvenliği sağlanmaktadır.",
        },
        {
          question: "Bağcılar'da site kamera sistemi kurulumu yapılıyor mu?",
          answer:
            "Evet. Site girişi, otopark ve ortak alanlar için kapsamlı kamera planı hazırlanmaktadır.",
        },
      ],
    },
    "alarm-sistemi-kurulumu": {
      heroTitle: "Bağcılar Alarm Sistemi Kurulumu",
      heroIntro:
        "Güneşli iş merkezlerinden Mahmutbey sanayi bölgesine, Kirazlı konut mahallelerinden E-5 üzerindeki mağazalara — Bağcılar genelinde hırsızlık caydırıcı alarm sistemleri. Sensör planlamasından mobil bildirime komple kurulum.",
      whatsappMessage:
        "Merhaba, Bağcılar'da alarm sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Bağcılar'ın yoğun ticari ve endüstriyel dokusu, hem küçük mağaza hem büyük fabrika ölçeğinde alarm sistemini birincil güvenlik yatırımı haline getiriyor.",
      ctaTitle: "Bağcılar'da Güvenliği Alarma Bağlayın",
      ctaSubtitle:
        "Fabrikanız, dükkanınız veya daireniz için Bağcılar'da alarm keşfi ve teklif alın.",
      faqs: [
        {
          question: "Bağcılar'daki fabrikam için alarm sistemi nasıl planlanır?",
          answer:
            "Tesis çevresi, giriş kapıları, depo ve üretim bölümleri analiz edilerek bölge bazlı alarm planı hazırlanır.",
        },
        {
          question: "Bağcılar'da mağaza alarm sistemi kurulumu ne kadar sürer?",
          answer:
            "Standart bir mağaza için alarm kurulumu genellikle yarım ila tam gün içinde tamamlanır.",
        },
        {
          question: "Bağcılar'da daire için alarm sistemi önerilir mi?",
          answer:
            "Evet. Kapı-pencere sensörleri ve hareket dedektörüyle daire için etkili alarm sistemi kurulabilir.",
        },
      ],
    },
    "kartli-gecis-sistemi-kurulumu": {
      heroTitle: "Bağcılar Kartlı Geçiş Sistemi Kurulumu",
      heroIntro:
        "Güneşli'nin büyük iş merkezlerinden Mahmutbey'in sanayi tesislerine, Bağcılar'ın konut sitelerinden E-5 üzerindeki kurumsal yapılara — giriş-çıkış kontrolünü kartlı geçiş sistemiyle yönetin.",
      whatsappMessage:
        "Merhaba, Bağcılar'da kartlı geçiş sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Güneşli'nin büyük iş merkezi kompleksleri ve Mahmutbey'in sanayi tesislerinde personel ve ziyaretçi erişimini dijital olarak yönetmek için kartlı geçiş sistemi kurumsal standart haline geliyor.",
      ctaTitle: "Bağcılar'da Giriş Kontrolünü Dijitalleştirin",
      ctaSubtitle:
        "İş merkeziniz, fabrikanız veya siteniz için Bağcılar'da kartlı geçiş keşfi ve teklif alın.",
      faqs: [
        {
          question: "Güneşli'deki iş merkezime kartlı geçiş nasıl kurulur?",
          answer:
            "Ana giriş, kat çıkışları ve hassas birim kapıları keşif sonrası belirlenerek okuyucu ve kontrol paneli planı hazırlanır.",
        },
        {
          question: "Bağcılar'daki siteye araç bariyeri + kartlı giriş kurulabilir mi?",
          answer:
            "Evet. Araç bariyeri ve yaya girişi için kartlı okuyucu entegreli komple sistem sunulmaktadır.",
        },
        {
          question: "Bağcılar'da kartlı geçiş sistemi personel takibi yapabiliyor mu?",
          answer:
            "Evet. Giriş-çıkış loglarından otomatik mesai raporu oluşturan yazılım entegrasyonu mevcuttur.",
        },
      ],
    },
  },
};

const kagithane: DistrictProfile = {
  name: "Kağıthane",
  slug: "kagithane",
  locative: "Kağıthane'de",
  districtIntro:
    "Hızla dönüşen sanayi alanları ve yeni gelişen iş merkezi kompleksleriyle öne çıkan Kağıthane; Levent-Maslak aksına yakınlığı, büyüyen ofis kuleleri ve yoğun konut dokusuyla güvenlik sistemlerinin talep gördüğü dinamik bir ilçedir.",
  landmarks: [
    "Kağıthane Merkez",
    "Çağlayan",
    "Gültepe",
    "Hamidiye",
    "Talatpaşa Caddesi",
    "Merkez Mahallesi",
    "Nurtepe",
    "Seyrantepe",
    "Sadabad",
  ],
  nearbyDistricts: ["besiktas", "sisli", "eyup", "beyoglu"],
  services: {
    "kamera-sistemi-kurulumu": {
      heroTitle: "Kağıthane Kamera Sistemi Kurulumu",
      heroIntro:
        "Çağlayan adliye kompleksinden Gültepe'nin yoğun konut bloklarına, Talatpaşa Caddesi'nin ticaret aksından Seyrantepe'nin gelişen iş merkezlerine — Kağıthane'de profesyonel kamera güvenliği. Aynı gün keşif.",
      whatsappMessage:
        "Merhaba, Kağıthane'de kamera sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Kağıthane'nin Levent'e yakın konumu ve yeni ofis kulelerinin yoğunlaşması, kurumsal standartta kamera güvenliğine olan talebi sürekli artırıyor.",
      ctaTitle: "Çağlayan'dan Seyrantepe'ye — Kağıthane'de Kamera Kurulumu",
      ctaSubtitle:
        "Ofisiniz, mağazanız veya siteniz için Kağıthane'de ücretsiz keşif alın; kamera planınızı birlikte oluşturalım.",
      faqs: [
        {
          question: "Kağıthane'deki ofis kulesine kamera sistemi nasıl planlanır?",
          answer:
            "Bina girişi, otopark, ortak alanlar ve ofis katları keşif sonrası analiz edilerek kamera planı hazırlanır.",
        },
        {
          question: "Kağıthane'de konut sitesi için kamera kurulumu yapılıyor mu?",
          answer:
            "Evet. Site girişi, otopark ve ortak alanlar için kapsamlı kamera planı hazırlanmaktadır.",
        },
        {
          question: "Kağıthane'de kamera sistemi kurulumu ne kadar sürer?",
          answer:
            "Orta ölçekli projeler genellikle aynı gün tamamlanır; kesin süre keşif sonrası belirlenir.",
        },
      ],
    },
    "alarm-sistemi-kurulumu": {
      heroTitle: "Kağıthane Alarm Sistemi Kurulumu",
      heroIntro:
        "Gültepe'nin konut bloklarından Talatpaşa Caddesi'nin işyerlerine, Çağlayan'ın kurumsal bölgesinden Nurtepe mahalle dükkanlarına — Kağıthane genelinde hırsızlık caydırıcı alarm sistemleri. Mobil bildirimli, 7/24 etkin.",
      whatsappMessage:
        "Merhaba, Kağıthane'de alarm sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Kağıthane'nin hızla gelişen iş merkezi bölgeleri ve yoğun konut mahalleleri, alarm sistemini hem ofis hem konut güvenliğinde birincil yatırım haline getiriyor.",
      ctaTitle: "Kağıthane'de Güvenliği Alarma Bağlayın",
      ctaSubtitle:
        "Ofisiniz, mağazanız veya daireniz için Kağıthane'de alarm keşfi ve teklif alın.",
      faqs: [
        {
          question: "Kağıthane'deki ofisim için alarm sistemi nasıl planlanır?",
          answer:
            "Ofis girişi, sunucu odası, ortak alanlar ve pencereler analiz edilerek kurumsal alarm planı oluşturulur.",
        },
        {
          question: "Kağıthane'de daire alarm sistemi kurulumu ne kadar sürer?",
          answer:
            "Standart bir daire için alarm kurulumu genellikle 2-4 saat içinde tamamlanır.",
        },
        {
          question: "Kağıthane'de alarm ve kamera sistemi birlikte kurulabilir mi?",
          answer:
            "Evet. Alarm tetiklendiğinde kameradan görüntü kaydı başlatan entegre sistemler kurulmaktadır.",
        },
      ],
    },
    "kartli-gecis-sistemi-kurulumu": {
      heroTitle: "Kağıthane Kartlı Geçiş Sistemi Kurulumu",
      heroIntro:
        "Kağıthane'nin gelişen ofis kuleleri ve iş merkezlerinden Gültepe-Nurtepe konut sitelerine — giriş-çıkış kontrolünü kartlı geçiş sistemiyle profesyonelleştirin, yetkisiz girişlerin önüne geçin.",
      whatsappMessage:
        "Merhaba, Kağıthane'de kartlı geçiş sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Kağıthane'nin yeni ofis kuleleri ve büyük konut sitelerinde yetkisiz girişi önlemek ve personel erişimini bölge bazında yönetmek için kartlı geçiş sistemi kurumsal standart haline geliyor.",
      ctaTitle: "Kağıthane'de Giriş Kontrolünü Dijitalleştirin",
      ctaSubtitle:
        "Ofis kuleniz, siteniz veya ticari binanız için Kağıthane'de kartlı geçiş keşfi ve teklif alın.",
      faqs: [
        {
          question: "Kağıthane'deki ofis kulesine kartlı geçiş sistemi nasıl kurulur?",
          answer:
            "Ana giriş, kat çıkışları ve hassas birim kapıları keşif sonrası belirlenerek okuyucu ve kontrol paneli planı hazırlanır.",
        },
        {
          question: "Kağıthane'deki siteye araç bariyeri + kartlı giriş kurulabilir mi?",
          answer:
            "Evet. Araç bariyeri ve yaya girişi kartlı okuyucu entegreli komple sistem sunulmaktadır.",
        },
        {
          question: "Kağıthane'de kartlı geçiş sistemi ziyaretçi yönetimini destekler mi?",
          answer:
            "Evet. Geçici kart veya QR kod ile ziyaretçi erişimi tanımlanabilir ve giriş logları raporlanır.",
        },
      ],
    },
  },
};

const beyoglu: DistrictProfile = {
  name: "Beyoğlu",
  slug: "beyoglu",
  locative: "Beyoğlu'nda",
  districtIntro:
    "İstanbul'un kültür, turizm ve eğlence merkezi olan Beyoğlu; İstiklal Caddesi, Galata, Karaköy ve Cihangir gibi uluslararası ilginin yoğun olduğu bölgeleri, yüzlerce otel, restoran ve sanat mekânıyla güvenlik sistemi talebinin en çeşitli olduğu ilçedir.",
  landmarks: [
    "İstiklal Caddesi",
    "Galata",
    "Karaköy",
    "Cihangir",
    "Taksim",
    "Tarlabaşı",
    "Kasımpaşa",
    "Dolapdere",
    "Pera",
    "Beyoğlu Çarşı",
  ],
  nearbyDistricts: ["besiktas", "sisli", "kagithane", "fatih"],
  services: {
    "kamera-sistemi-kurulumu": {
      heroTitle: "Beyoğlu Kamera Sistemi Kurulumu",
      heroIntro:
        "İstiklal Caddesi'nin milyonluk turist trafiğinden Galata'nın butik otellerine, Karaköy'ün sanat galerisinden Cihangir'in konut bloklarına — Beyoğlu'nda her mekân için profesyonel kamera güvenliği. Aynı gün keşif.",
      whatsappMessage:
        "Merhaba, Beyoğlu'nda kamera sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "İstiklal Caddesi'nin yoğun yaya trafiği ve turistik mekânların yüksek değerli envanterleri, Beyoğlu'nda kamera sistemini hem caydırıcılık hem delil temini açısından kritik kılıyor.",
      ctaTitle: "İstiklal'den Galata'ya — Beyoğlu'nda Kamera Kurulumu",
      ctaSubtitle:
        "Oteliniz, restoranınız veya mağazanız için Beyoğlu'nda ücretsiz keşif alın; kamera planınızı birlikte oluşturalım.",
      faqs: [
        {
          question: "Beyoğlu'ndaki otelim için kamera sistemi nasıl planlanır?",
          answer:
            "Lobi, koridor, otopark ve dış cephe keşif sonrası analiz edilerek misafir mahremiyetine uygun kamera planı hazırlanır.",
        },
        {
          question: "İstiklal Caddesi'ndeki mağazam için kaç kamera gerekiyor?",
          answer:
            "Cadde cephesi, vitrin, kasa ve depo alanlarına göre genellikle 4-8 kamera ile tam kapsama sağlanır.",
        },
        {
          question: "Beyoğlu'nda tarihi yapılara kamera montajı yapılabiliyor mu?",
          answer:
            "Evet. Tarihi bina dokusuna zarar vermeyen montaj yöntemleriyle güvenli kurulum gerçekleştirilmektedir.",
        },
      ],
    },
    "alarm-sistemi-kurulumu": {
      heroTitle: "Beyoğlu Alarm Sistemi Kurulumu",
      heroIntro:
        "Galata'nın butik otellerinden İstiklal'in yoğun mağaza aksına, Karaköy'ün sanat galerisinden Cihangir'in konut bloklarına — Beyoğlu genelinde hırsızlık caydırıcı alarm sistemleri. Mobil bildirimli, 7/24 etkin.",
      whatsappMessage:
        "Merhaba, Beyoğlu'nda alarm sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Beyoğlu'nun yüksek turizm trafiği ve değerli ticari envanterleri, alarm sistemini hem otel hem mağaza güvenliğinde birincil yatırım haline getiriyor.",
      ctaTitle: "Beyoğlu'nda Güvenliği Alarma Bağlayın",
      ctaSubtitle:
        "Oteliniz, restoranınız veya mağazanız için Beyoğlu'nda alarm keşfi ve teklif alın — kurulum aynı gün tamamlanır.",
      faqs: [
        {
          question: "Beyoğlu'ndaki otelim için alarm sistemi nasıl planlanır?",
          answer:
            "Lobi, arka ofis, depo ve dış kapılar analiz edilerek misafir mahremiyetine uygun alarm planı hazırlanır.",
        },
        {
          question: "İstiklal Caddesi'ndeki mağazam için hangi alarm tipi önerilir?",
          answer:
            "Yoğun yaya trafiği olan bölgelerde cam kırılma dedektörü, PIR sensör ve sesli caydırıcı siren kombinasyonu önerilir.",
        },
        {
          question: "Beyoğlu'nda daire alarm sistemi kurulumu yapılıyor mu?",
          answer:
            "Evet. Cihangir ve çevresi gibi yoğun konut bölgelerinde kapı-pencere sensörü ve hareket dedektörüyle daire alarmı kurulabilir.",
        },
      ],
    },
    "kartli-gecis-sistemi-kurulumu": {
      heroTitle: "Beyoğlu Kartlı Geçiş Sistemi Kurulumu",
      heroIntro:
        "Galata'nın butik otellerinden İstiklal'in büyük ticari yapılarına, Karaköy'ün sanat merkezlerinden Pera'nın kurumsal ofislerine — Beyoğlu'nda giriş-çıkış kontrolünü kartlı geçiş sistemiyle profesyonelleştirin.",
      whatsappMessage:
        "Merhaba, Beyoğlu'nda kartlı geçiş sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Beyoğlu'nun otel ve kültür mekânlarında personel ile misafir erişimini ayrıştırmak ve yetkisiz girişleri önlemek için kartlı geçiş sistemi kurumsal standart haline geliyor.",
      ctaTitle: "Beyoğlu'nda Giriş Kontrolünü Dijitalleştirin",
      ctaSubtitle:
        "Oteliniz, ofisiniz veya ticari binanız için Beyoğlu'nda kartlı geçiş keşfi ve teklif alın.",
      faqs: [
        {
          question: "Beyoğlu'ndaki otelime kartlı oda erişim sistemi kurulabilir mi?",
          answer:
            "Evet. Oda kapılarına RFID kart okuyucu ve personel girişlerine ayrı yetki seviyeli sistem kurulabilir.",
        },
        {
          question: "İstiklal'deki ticari binam için kartlı geçiş nasıl planlanır?",
          answer:
            "Bina ana girişi, kat çıkışları ve hassas birim kapıları keşif sonrası belirlenerek okuyucu planı hazırlanır.",
        },
        {
          question: "Beyoğlu'nda kartlı geçiş sistemi ziyaretçi yönetimini destekler mi?",
          answer:
            "Evet. Geçici kart veya QR kod ile ziyaretçi erişimi tanımlanabilir; giriş-çıkış logları raporlanır.",
        },
      ],
    },
  },
};

// ---------------------------------------------------------------------------
// Tier 4 districts — Sultangazi, Gaziosmanpaşa, Eyüpsultan, Sarıyer,
//                    Üsküdar, Sultanbeyli, Tuzla
// ---------------------------------------------------------------------------

const sultangazi: DistrictProfile = {
  name: "Sultangazi",
  slug: "sultangazi",
  locative: "Sultangazi'de",
  districtIntro:
    "İstanbul'un kuzey Avrupa Yakası'nda hızla büyüyen Sultangazi; yoğun konut mahalleleri, sanayi siteleri ve alışveriş akslarıyla güvenlik sistemlerine olan talebin arttığı genç ve dinamik bir ilçedir.",
  landmarks: [
    "Sultangazi Merkez",
    "Cebeci",
    "Habipler",
    "İsmetpaşa",
    "Uğur Mumcu Mahallesi",
    "Sultançiftliği",
    "Gazi Mahallesi",
    "Esentepe",
    "Malkoçoğlu",
  ],
  nearbyDistricts: ["gaziosmanpasa", "bagcilar", "arnavutkoy", "esenler"],
  services: {
    "kamera-sistemi-kurulumu": {
      heroTitle: "Sultangazi Kamera Sistemi Kurulumu",
      heroIntro:
        "Sultangazi'nin yoğun konut mahallelerinden sanayi sitelerine, cadde mağazalarından büyük apartman bloklarına — Sultangazi'de her işletme ve konut için profesyonel kamera güvenliği. Aynı gün keşif.",
      whatsappMessage:
        "Merhaba, Sultangazi'de kamera sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Sultangazi'nin hızla büyüyen konut dokusu ve ticari caddeleri, kamera sistemini hem site hem işletme güvenliğinde birincil yatırım haline getiriyor.",
      ctaTitle: "Sultangazi'de Kamera Güvenliğini Kurun",
      ctaSubtitle:
        "Mağazanız, ofisiniz veya siteniz için Sultangazi'de ücretsiz keşif alın.",
      faqs: [
        {
          question: "Sultangazi'de kamera sistemi kurulumu ne kadar sürer?",
          answer:
            "Orta ölçekli projeler genellikle aynı gün tamamlanır; kesin süre keşif sonrası belirlenir.",
        },
        {
          question: "Sultangazi'de site güvenliği için kamera kurulumu yapılıyor mu?",
          answer:
            "Evet. Site girişi, otopark, blok girişleri ve çevre güvenliği için kapsamlı kamera planı hazırlanmaktadır.",
        },
        {
          question: "Sultangazi'de kamera sistemi mobil telefondan izlenebilir mi?",
          answer:
            "Evet. Tüm sistemlerimize mobil uygulama üzerinden canlı izleme ve kayıt erişimi dahildir.",
        },
      ],
    },
    "alarm-sistemi-kurulumu": {
      heroTitle: "Sultangazi Alarm Sistemi Kurulumu",
      heroIntro:
        "Sultangazi'nin kalabalık konut mahallelerinden cadde işyerlerine, sanayi sitelerinden apartman bloklarına — Sultangazi genelinde hırsızlık caydırıcı alarm sistemleri. Mobil bildirimli, 7/24 etkin.",
      whatsappMessage:
        "Merhaba, Sultangazi'de alarm sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Sultangazi'nin yoğun konut yapısı ve çok sayıda küçük ölçekli işletmesi, alarm sistemini hem konut hem ticaret güvenliğinde temel güvenlik katmanı yapıyor.",
      ctaTitle: "Sultangazi'de Güvenliği Alarma Bağlayın",
      ctaSubtitle:
        "Dükkanınız veya daireniz için Sultangazi'de alarm keşfi ve teklif alın — kurulum aynı gün tamamlanır.",
      faqs: [
        {
          question: "Sultangazi'de daire alarm sistemi kurulumu ne kadar sürer?",
          answer:
            "Standart bir daire için alarm kurulumu genellikle 2-4 saat içinde tamamlanır.",
        },
        {
          question: "Sultangazi'de mağaza alarm sistemi nasıl planlanır?",
          answer:
            "Mağaza girişi, vitrin, kasa ve depo alanları analiz edilerek sensör planı hazırlanır.",
        },
        {
          question: "Sultangazi'de kablosuz alarm sistemi kurulabiliyor mu?",
          answer:
            "Evet. Kablolama gerektirmeyen kablosuz sistemler kiracı ve ev sahipleri için idealdir.",
        },
      ],
    },
    "kartli-gecis-sistemi-kurulumu": {
      heroTitle: "Sultangazi Kartlı Geçiş Sistemi Kurulumu",
      heroIntro:
        "Sultangazi'nin büyük konut sitelerinden sanayi sitelerine, apartman bloklarından ticari yapılara — giriş-çıkış kontrolünü kartlı geçiş sistemiyle yönetin, yetkisiz girişlerin önüne geçin.",
      whatsappMessage:
        "Merhaba, Sultangazi'de kartlı geçiş sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Sultangazi'nin büyük apartman ve site komplekslerinde kontrolsüz araç ve ziyaretçi girişini önlemek için kartlı geçiş sistemi güvenlik standardı haline geliyor.",
      ctaTitle: "Sultangazi'de Giriş Kontrolünü Dijitalleştirin",
      ctaSubtitle:
        "Siteniz veya işyeriniz için Sultangazi'de kartlı geçiş keşfi ve teklif alın.",
      faqs: [
        {
          question: "Sultangazi'deki siteye araç bariyeri + kartlı giriş kurulabilir mi?",
          answer:
            "Evet. Araç bariyeri ve yaya girişi için kartlı okuyucu entegreli komple sistem sunulmaktadır.",
        },
        {
          question: "Sultangazi'de apartman girişine kartlı geçiş kurulabilir mi?",
          answer:
            "Evet. Apartman ana kapısına RFID veya akıllı kart okuyucu montajı yapılmaktadır.",
        },
        {
          question: "Sultangazi'de kartlı geçiş sistemi yönetimi nasıl yapılır?",
          answer:
            "Web tabanlı yönetim paneli üzerinden kart tanımlama, silme ve erişim raporları anlık olarak yönetilebilir.",
        },
      ],
    },
  },
};

const gaziosmanpasa: DistrictProfile = {
  name: "Gaziosmanpaşa",
  slug: "gaziosmanpasa",
  locative: "Gaziosmanpaşa'da",
  districtIntro:
    "İstanbul'un kuzey Avrupa Yakası'nda köklü yapısıyla öne çıkan Gaziosmanpaşa; büyük çarşıları, yoğun ticaret merkezi, sanayi siteleri ve kalabalık konut dokusuyla güvenlik sistemi talebinin sürekli canlı olduğu bir ilçedir.",
  landmarks: [
    "Gaziosmanpaşa Merkez",
    "Karadeniz Caddesi",
    "Bağlarbaşı",
    "Yıldıztabya",
    "Fevzi Paşa Caddesi",
    "Yenidoğan",
    "Sarıgöl",
    "Karlıktepe",
    "Pazariçi",
  ],
  nearbyDistricts: ["sultangazi", "eyupsultan", "bagcilar", "bayrampasa"],
  services: {
    "kamera-sistemi-kurulumu": {
      heroTitle: "Gaziosmanpaşa Kamera Sistemi Kurulumu",
      heroIntro:
        "Karadeniz Caddesi'nin yoğun ticaret aksından Bağlarbaşı'nın konut bloklarına, sanayi sitelerinden büyük çarşılara — Gaziosmanpaşa'da her işletme ve konut için profesyonel kamera güvenliği. Aynı gün keşif.",
      whatsappMessage:
        "Merhaba, Gaziosmanpaşa'da kamera sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Gaziosmanpaşa'nın büyük çarşı ve ticaret merkezleri ile yoğun konut dokusu, kamera güvenliğini hem ticari hem konut alanda zorunlu kılıyor.",
      ctaTitle: "Gaziosmanpaşa'da Kamera Güvenliğini Kurun",
      ctaSubtitle:
        "Mağazanız, dükkanınız veya siteniz için Gaziosmanpaşa'da ücretsiz keşif alın.",
      faqs: [
        {
          question: "Gaziosmanpaşa'daki çarşı dükkanım için kamera sistemi nasıl planlanır?",
          answer:
            "Dükkan girişi, vitrin, kasa ve depo alanları keşif sonrası analiz edilerek kör nokta kalmayacak kamera planı hazırlanır.",
        },
        {
          question: "Gaziosmanpaşa'da konut sitesi için kamera kurulumu yapılıyor mu?",
          answer:
            "Evet. Site girişi, otopark ve ortak alanlar için kapsamlı kamera planı hazırlanmaktadır.",
        },
        {
          question: "Gaziosmanpaşa'da kamera sistemi uzaktan izlenebilir mi?",
          answer:
            "Evet. Tüm sistemlerimize mobil uygulama üzerinden canlı izleme ve kayıt erişimi dahildir.",
        },
      ],
    },
    "alarm-sistemi-kurulumu": {
      heroTitle: "Gaziosmanpaşa Alarm Sistemi Kurulumu",
      heroIntro:
        "Karadeniz Caddesi'nin mağazalarından Yenidoğan konut bloklarına, sanayi sitelerinden mahalle dükkanlarına — Gaziosmanpaşa genelinde hırsızlık caydırıcı alarm sistemleri. Mobil bildirimli, 7/24 etkin.",
      whatsappMessage:
        "Merhaba, Gaziosmanpaşa'da alarm sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Gaziosmanpaşa'nın yoğun ticari çarşıları ve büyük konut mahalleleri, alarm sistemini hem caydırıcılık hem erken uyarı açısından birincil güvenlik katmanı yapıyor.",
      ctaTitle: "Gaziosmanpaşa'da Güvenliği Alarma Bağlayın",
      ctaSubtitle:
        "Dükkanınız veya daireniz için Gaziosmanpaşa'da alarm keşfi ve teklif alın — kurulum aynı gün tamamlanır.",
      faqs: [
        {
          question: "Gaziosmanpaşa'da mağaza alarm sistemi kurulumu ne kadar sürer?",
          answer:
            "Standart bir mağaza için alarm kurulumu genellikle yarım ila tam gün içinde tamamlanır.",
        },
        {
          question: "Gaziosmanpaşa'da daire için alarm sistemi önerilir mi?",
          answer:
            "Evet. Kapı-pencere sensörleri ve hareket dedektörüyle daire için etkili alarm sistemi kurulabilir.",
        },
        {
          question: "Gaziosmanpaşa'da alarm mesai dışında nasıl çalışır?",
          answer:
            "Kapanış sonrası sistem otomatik devreye girer; ihlal tespit edildiğinde anlık mobil bildirim ve siren uyarısı gönderilir.",
        },
      ],
    },
    "kartli-gecis-sistemi-kurulumu": {
      heroTitle: "Gaziosmanpaşa Kartlı Geçiş Sistemi Kurulumu",
      heroIntro:
        "Gaziosmanpaşa'nın büyük ticaret komplekslerinden konut sitelerine, sanayi yapılarından apartman bloklarına — giriş-çıkış kontrolünü kartlı geçiş sistemiyle profesyonelleştirin.",
      whatsappMessage:
        "Merhaba, Gaziosmanpaşa'da kartlı geçiş sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Gaziosmanpaşa'nın büyük çarşı kompleksleri ve konut sitelerinde yetkisiz girişi önlemek için kartlı geçiş sistemi güvenlik standardı haline geliyor.",
      ctaTitle: "Gaziosmanpaşa'da Giriş Kontrolünü Dijitalleştirin",
      ctaSubtitle:
        "Siteniz, iş merkeziniz veya işyeriniz için Gaziosmanpaşa'da kartlı geçiş keşfi ve teklif alın.",
      faqs: [
        {
          question: "Gaziosmanpaşa'daki siteye kartlı geçiş + araç bariyeri kurulabilir mi?",
          answer:
            "Evet. Araç bariyeri ve yaya girişi için kartlı okuyucu entegreli komple sistem sunulmaktadır.",
        },
        {
          question: "Gaziosmanpaşa'da çarşı binasına kartlı geçiş sistemi kurulabilir mi?",
          answer:
            "Evet. Ana giriş ve hassas bölüm kapıları için yetki seviyeli kartlı geçiş sistemi kurulmaktadır.",
        },
        {
          question: "Gaziosmanpaşa'da kartlı geçiş yönetimi nasıl yapılır?",
          answer:
            "Web tabanlı yönetim paneli üzerinden kart tanımlama, silme ve erişim raporları anlık olarak yönetilebilir.",
        },
      ],
    },
  },
};

const eyupsultan: DistrictProfile = {
  name: "Eyüpsultan",
  slug: "eyupsultan",
  locative: "Eyüpsultan'da",
  districtIntro:
    "Tarihi ve kültürel dokusuyla İstanbul'un önemli ilçelerinden biri olan Eyüpsultan; Haliç kıyısındaki sanayi dönüşüm bölgeleri, büyüyen konut projeleri ve ticaret akslarıyla güvenlik sistemine olan talebin arttığı bir ilçedir.",
  landmarks: [
    "Eyüp Sultan Camii",
    "Alibeyköy",
    "Rami",
    "Göktürk",
    "Kemerburgaz",
    "Haliç Kıyısı",
    "Yeşilpınar",
    "Topçular",
    "Nişanca",
  ],
  nearbyDistricts: ["gaziosmanpasa", "kagithane", "sultangazi", "arnavutkoy"],
  services: {
    "kamera-sistemi-kurulumu": {
      heroTitle: "Eyüpsultan Kamera Sistemi Kurulumu",
      heroIntro:
        "Alibeyköy'ün büyüyen konut sitelerinden Rami'nin ticaret aksına, Göktürk'ün villa bölgelerinden Haliç kıyısı işletmelerine — Eyüpsultan'da her konut ve işletme için profesyonel kamera güvenliği. Aynı gün keşif.",
      whatsappMessage:
        "Merhaba, Eyüpsultan'da kamera sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Göktürk'ün prestijli villa bölgesi ve Alibeyköy'ün hızla büyüyen konut projeleri, Eyüpsultan'da kamera güvenliğine olan talebi farklı segmentlerde artırıyor.",
      ctaTitle: "Alibeyköy'den Göktürk'e — Eyüpsultan'da Kamera Kurulumu",
      ctaSubtitle:
        "Villanız, siteniz veya işyeriniz için Eyüpsultan'da ücretsiz keşif alın.",
      faqs: [
        {
          question: "Göktürk'teki villam için kamera sistemi nasıl planlanır?",
          answer:
            "Villa çevresi, giriş kapısı, bahçe ve garaj alanları keşif sonrası analiz edilerek dış mekan kamera planı hazırlanır.",
        },
        {
          question: "Eyüpsultan'da site güvenliği için kamera kurulumu yapılıyor mu?",
          answer:
            "Evet. Site girişi, otopark, blok girişleri ve çevre güvenliği için kapsamlı kamera planı hazırlanmaktadır.",
        },
        {
          question: "Eyüpsultan'da gece görüşlü dış ortam kamerası kurulumu yapılıyor mu?",
          answer:
            "Evet. Villa ve site dış mekanlarına uygun IR gece görüşlü, hava koşullarına dayanıklı kameralarla kurulum yapılmaktadır.",
        },
      ],
    },
    "alarm-sistemi-kurulumu": {
      heroTitle: "Eyüpsultan Alarm Sistemi Kurulumu",
      heroIntro:
        "Göktürk'ün prestijli villa bölgelerinden Alibeyköy konut sitelerine, Rami'nin ticaret aksından Kemerburgaz'ın sakin mahallelerine — Eyüpsultan genelinde hırsızlık caydırıcı alarm sistemleri. Mobil bildirimli.",
      whatsappMessage:
        "Merhaba, Eyüpsultan'da alarm sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Göktürk'ün yüksek değerli villa bölgesi ve Alibeyköy'ün büyüyen konut projeleri, alarm sistemini Eyüpsultan'da her ölçekte güvenliğin temeli yapıyor.",
      ctaTitle: "Eyüpsultan'da Güvenliği Alarma Bağlayın",
      ctaSubtitle:
        "Villanız, daireniz veya işyeriniz için Eyüpsultan'da alarm keşfi ve teklif alın.",
      faqs: [
        {
          question: "Göktürk'teki villam için alarm sistemi nasıl planlanır?",
          answer:
            "Villa çevresi, kapılar, pencereler ve garaj alanı analiz edilerek perimetrik alarm planı oluşturulur.",
        },
        {
          question: "Eyüpsultan'da daire alarm sistemi kurulumu ne kadar sürer?",
          answer:
            "Standart bir daire için alarm kurulumu genellikle 2-4 saat içinde tamamlanır.",
        },
        {
          question: "Eyüpsultan'da alarm ve kamera sistemi birlikte kurulabilir mi?",
          answer:
            "Evet. Alarm tetiklendiğinde kameradan görüntü kaydı başlatan entegre sistemler kurulmaktadır.",
        },
      ],
    },
    "kartli-gecis-sistemi-kurulumu": {
      heroTitle: "Eyüpsultan Kartlı Geçiş Sistemi Kurulumu",
      heroIntro:
        "Alibeyköy'ün büyük konut sitelerinden Göktürk'ün prestijli villa topluluklarına, Rami iş merkezlerinden Eyüpsultan'ın ticari yapılarına — giriş-çıkış kontrolünü kartlı geçiş sistemiyle yönetin.",
      whatsappMessage:
        "Merhaba, Eyüpsultan'da kartlı geçiş sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Eyüpsultan'ın büyük konut siteleri ve Göktürk'ün villa topluluklarında yetkisiz araç ve kişi girişini önlemek için kartlı geçiş sistemi güvenlik standardı haline geliyor.",
      ctaTitle: "Eyüpsultan'da Giriş Kontrolünü Dijitalleştirin",
      ctaSubtitle:
        "Siteniz, villa topluluğunuz veya işyeriniz için Eyüpsultan'da kartlı geçiş keşfi ve teklif alın.",
      faqs: [
        {
          question: "Alibeyköy'deki siteye araç bariyeri + kartlı giriş kurulabilir mi?",
          answer:
            "Evet. Araç bariyeri ve yaya girişi için kartlı okuyucu entegreli komple sistem sunulmaktadır.",
        },
        {
          question: "Göktürk'teki villa topluluğuna kartlı geçiş sistemi kurulabilir mi?",
          answer:
            "Evet. Ana giriş kapısına bariyer entegreli kartlı geçiş ve misafir yönetim sistemi kurulmaktadır.",
        },
        {
          question: "Eyüpsultan'da kartlı geçiş yönetimi nasıl yapılır?",
          answer:
            "Web tabanlı yönetim paneli üzerinden kart tanımlama, silme ve erişim raporları anlık olarak yönetilebilir.",
        },
      ],
    },
  },
};

const sariyer: DistrictProfile = {
  name: "Sarıyer",
  slug: "sariyer",
  locative: "Sarıyer'de",
  districtIntro:
    "İstanbul'un Boğaz kıyısında uzanan Sarıyer; Tarabya, Büyükdere ve İstinye gibi prestijli semtleri, Maslak iş merkezleri aksı ve orman kenarı villa bölgeleriyle yüksek güvenlik standartlarının talep edildiği bir ilçedir.",
  landmarks: [
    "Tarabya",
    "Büyükdere",
    "İstinye",
    "Maslak",
    "Baltalimanı",
    "Sarıyer Merkez",
    "Yeniköy",
    "Kireçburnu",
    "Rumelihisarı",
    "Zekeriyaköy",
  ],
  nearbyDistricts: ["besiktas", "kagithane", "beykoz", "eyupsultan"],
  services: {
    "kamera-sistemi-kurulumu": {
      heroTitle: "Sarıyer Kamera Sistemi Kurulumu",
      heroIntro:
        "Maslak'ın kurumsal iş merkezlerinden Tarabya'nın Boğaz kıyısı villalarına, İstinye'nin alışveriş kompleksinden Zekeriyaköy orman evlerine — Sarıyer'de prestij standartta kamera güvenliği. Aynı gün keşif.",
      whatsappMessage:
        "Merhaba, Sarıyer'de kamera sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Maslak'ın büyük kurumsal ofisleri ve Tarabya-Yeniköy hattının prestijli konut bölgeleri, Sarıyer'de kurumsal ve rezidansiyel standartta kamera güvenliğine olan talebi yüksek tutuyor.",
      ctaTitle: "Maslak'tan Tarabya'ya — Sarıyer'de Kamera Kurulumu",
      ctaSubtitle:
        "Villanız, ofisiniz veya işyeriniz için Sarıyer'de ücretsiz keşif alın; kamera planınızı birlikte oluşturalım.",
      faqs: [
        {
          question: "Sarıyer'deki Boğaz kıyısı villam için kamera sistemi nasıl planlanır?",
          answer:
            "Villa çevresi, deniz cephesi, giriş kapısı, bahçe ve iskele alanları keşif sonrası analiz edilerek dış mekan kamera planı hazırlanır.",
        },
        {
          question: "Maslak'taki ofis binamı için kamera sistemi kurulumu yapılıyor mu?",
          answer:
            "Evet. Bina girişi, otopark, ortak alanlar ve ofis katları için kurumsal standartta kamera planı hazırlanmaktadır.",
        },
        {
          question: "Sarıyer'de gece görüşlü dış ortam kamerası kurulumu yapılıyor mu?",
          answer:
            "Evet. Villa ve site dış mekanlarına uygun IR gece görüşlü, vandal-proof IP kameralarla kurulum yapılmaktadır.",
        },
      ],
    },
    "alarm-sistemi-kurulumu": {
      heroTitle: "Sarıyer Alarm Sistemi Kurulumu",
      heroIntro:
        "Tarabya'nın prestijli villalarından Maslak'ın kurumsal ofislerine, Yeniköy'ün Boğaz konutlarından Zekeriyaköy'ün orman evlerine — Sarıyer genelinde yüksek standartta alarm güvenliği. 7/24 izleme seçeneğiyle.",
      whatsappMessage:
        "Merhaba, Sarıyer'de alarm sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Sarıyer'in Boğaz kıyısı villalarının yüksek değeri ve izole konumu, alarm sistemini hem caydırıcılık hem hızlı müdahale açısından kritik kılıyor.",
      ctaTitle: "Sarıyer'de Güvenliği Alarma Bağlayın",
      ctaSubtitle:
        "Villanız, ofisiniz veya konutunuz için Sarıyer'de alarm keşfi ve teklif alın.",
      faqs: [
        {
          question: "Sarıyer'deki villam için alarm sistemi nasıl planlanır?",
          answer:
            "Villa çevresi, kapılar, pencereler, bahçe ve garaj alanı analiz edilerek perimetrik alarm planı oluşturulur.",
        },
        {
          question: "Sarıyer'de alarm sistemi 7/24 izleme merkezine bağlanabiliyor mu?",
          answer:
            "Evet. Özel güvenlik izleme merkezine bağlı alarm sistemleri kurulmaktadır; alarm anında güvenlik müdahalesi sağlanır.",
        },
        {
          question: "Sarıyer'de daire alarm sistemi kurulumu ne kadar sürer?",
          answer:
            "Standart bir daire için alarm kurulumu genellikle 2-4 saat içinde tamamlanır.",
        },
      ],
    },
    "kartli-gecis-sistemi-kurulumu": {
      heroTitle: "Sarıyer Kartlı Geçiş Sistemi Kurulumu",
      heroIntro:
        "Tarabya'nın Boğaz kıyısı villa topluluklarından Maslak'ın kurumsal iş merkezlerine, İstinye'nin büyük AVM kompleksinden Zekeriyaköy konut projelerine — Sarıyer'de giriş-çıkış kontrolünü kartlı geçiş sistemiyle profesyonelleştirin.",
      whatsappMessage:
        "Merhaba, Sarıyer'de kartlı geçiş sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Sarıyer'in prestijli villa toplulukları ve Maslak'ın kurumsal ofis kuleleri, erişim güvenliğini en yüksek standartta tutmak için kartlı geçiş sistemine kritik ihtiyaç duyuyor.",
      ctaTitle: "Sarıyer'de Giriş Kontrolünü Dijitalleştirin",
      ctaSubtitle:
        "Villa topluluğunuz, ofis kuleniz veya siteniz için Sarıyer'de kartlı geçiş keşfi ve teklif alın.",
      faqs: [
        {
          question: "Sarıyer'deki villa topluluğuna kartlı geçiş sistemi kurulabilir mi?",
          answer:
            "Evet. Ana giriş kapısına bariyer entegreli kartlı geçiş ve misafir yönetim sistemi kurulmaktadır.",
        },
        {
          question: "Maslak'taki ofis kulesine kartlı geçiş nasıl planlanır?",
          answer:
            "Bina ana girişi, kat çıkışları ve hassas birim kapıları keşif sonrası belirlenerek okuyucu planı hazırlanır.",
        },
        {
          question: "Sarıyer'de kartlı geçiş sistemi ziyaretçi yönetimini destekler mi?",
          answer:
            "Evet. Geçici kart veya QR kod ile ziyaretçi erişimi tanımlanabilir; giriş logları raporlanır.",
        },
      ],
    },
  },
};

const uskudar: DistrictProfile = {
  name: "Üsküdar",
  slug: "uskudar",
  locative: "Üsküdar'da",
  districtIntro:
    "İstanbul'un en köklü Anadolu Yakası ilçelerinden biri olan Üsküdar; Boğaz kıyısındaki tarihi yapılar, büyük hastane kompleksleri, yoğun ticaret merkezi ve prestijli konut bölgeleriyle güvenlik sistemine olan talebin çeşitlendiği bir ilçedir.",
  landmarks: [
    "Üsküdar Merkez",
    "Çamlıca",
    "Bağlarbaşı",
    "Acıbadem",
    "Altunizade",
    "Kısıklı",
    "Beylerbeyi",
    "Çengelköy",
    "İcadiye",
    "Kuzguncuk",
  ],
  nearbyDistricts: ["kadikoy", "atasehir", "beykoz", "sancaktepe"],
  services: {
    "kamera-sistemi-kurulumu": {
      heroTitle: "Üsküdar Kamera Sistemi Kurulumu",
      heroIntro:
        "Çamlıca'nın prestijli konut bölgesinden Altunizade'nin iş merkezlerine, Üsküdar Çarşı'nın yoğun ticaret aksından Beylerbeyi'nin Boğaz kıyısı konutlarına — Üsküdar'da her mekân için profesyonel kamera güvenliği.",
      whatsappMessage:
        "Merhaba, Üsküdar'da kamera sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Çamlıca'nın yüksek değerli konutları ve Altunizade-Acıbadem hattındaki kurumsal iş yapıları, Üsküdar'da kamera güvenliğini hem konut hem ticaret alanında kritik kılıyor.",
      ctaTitle: "Çamlıca'dan Altunizade'ye — Üsküdar'da Kamera Kurulumu",
      ctaSubtitle:
        "Konutunuz, ofisiniz veya mağazanız için Üsküdar'da ücretsiz keşif alın.",
      faqs: [
        {
          question: "Üsküdar'daki konutum için kamera sistemi nasıl planlanır?",
          answer:
            "Daire veya villa girişi, ortak alanlar ve dış çevre keşif sonrası analiz edilerek kamera planı hazırlanır.",
        },
        {
          question: "Altunizade'deki ofisim için kamera sistemi kurulumu yapılıyor mu?",
          answer:
            "Evet. Bina girişi, otopark, ortak alanlar ve ofis katları için kurumsal standartta kamera planı hazırlanmaktadır.",
        },
        {
          question: "Üsküdar'da Boğaz kıyısı konutu için dış mekan kamerası kurulabilir mi?",
          answer:
            "Evet. Deniz cephesi ve bahçe alanları için hava koşullarına dayanıklı IP kameralarla kurulum yapılmaktadır.",
        },
      ],
    },
    "alarm-sistemi-kurulumu": {
      heroTitle: "Üsküdar Alarm Sistemi Kurulumu",
      heroIntro:
        "Çamlıca'nın prestijli villalarından Acıbadem konut bloklarına, Üsküdar Çarşı'nın mağazalarından Altunizade iş merkezlerine — Üsküdar genelinde hırsızlık caydırıcı alarm sistemleri. Mobil bildirimli, 7/24 etkin.",
      whatsappMessage:
        "Merhaba, Üsküdar'da alarm sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Üsküdar'ın yüksek değerli konut bölgeleri ve aktif ticaret merkezi, alarm sistemini hem konut hem işletme güvenliğinde birincil yatırım haline getiriyor.",
      ctaTitle: "Üsküdar'da Güvenliği Alarma Bağlayın",
      ctaSubtitle:
        "Konutunuz, mağazanız veya ofisiniz için Üsküdar'da alarm keşfi ve teklif alın.",
      faqs: [
        {
          question: "Üsküdar'da villa için alarm sistemi nasıl planlanır?",
          answer:
            "Villa çevresi, kapılar, pencereler, bahçe ve garaj alanı analiz edilerek perimetrik alarm planı oluşturulur.",
        },
        {
          question: "Üsküdar'da daire alarm sistemi kurulumu ne kadar sürer?",
          answer:
            "Standart bir daire için alarm kurulumu genellikle 2-4 saat içinde tamamlanır.",
        },
        {
          question: "Üsküdar'da alarm ve kamera sistemi birlikte kurulabilir mi?",
          answer:
            "Evet. Alarm tetiklendiğinde ilgili kameradan görüntü kaydı başlatan entegre sistemler kurulmaktadır.",
        },
      ],
    },
    "kartli-gecis-sistemi-kurulumu": {
      heroTitle: "Üsküdar Kartlı Geçiş Sistemi Kurulumu",
      heroIntro:
        "Çamlıca'nın büyük konut sitelerinden Altunizade iş merkezlerine, Beylerbeyi'nin Boğaz kıyısı konutlarından Üsküdar'ın ticari yapılarına — giriş-çıkış kontrolünü kartlı geçiş sistemiyle profesyonelleştirin.",
      whatsappMessage:
        "Merhaba, Üsküdar'da kartlı geçiş sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Üsküdar'ın prestijli konut siteleri ve kurumsal ofis yapılarında yetkisiz girişi önlemek için kartlı geçiş sistemi güvenlik standardı haline geliyor.",
      ctaTitle: "Üsküdar'da Giriş Kontrolünü Dijitalleştirin",
      ctaSubtitle:
        "Siteniz, ofis binanız veya konutunuz için Üsküdar'da kartlı geçiş keşfi ve teklif alın.",
      faqs: [
        {
          question: "Üsküdar'daki siteye araç bariyeri + kartlı giriş kurulabilir mi?",
          answer:
            "Evet. Araç bariyeri ve yaya girişi için kartlı okuyucu entegreli komple sistem sunulmaktadır.",
        },
        {
          question: "Altunizade'deki ofis binam için kartlı geçiş nasıl planlanır?",
          answer:
            "Bina ana girişi, kat çıkışları ve hassas birim kapıları keşif sonrası belirlenerek okuyucu planı hazırlanır.",
        },
        {
          question: "Üsküdar'da kartlı geçiş sistemi personel takibi yapabiliyor mu?",
          answer:
            "Evet. Giriş-çıkış loglarından otomatik mesai raporu oluşturan yazılım entegrasyonu mevcuttur.",
        },
      ],
    },
  },
};

const sultanbeyli: DistrictProfile = {
  name: "Sultanbeyli",
  slug: "sultanbeyli",
  locative: "Sultanbeyli'de",
  districtIntro:
    "İstanbul'un Anadolu Yakası'nda hızla büyüyen Sultanbeyli; yoğun konut mahalleleri, sanayi siteleri, ticaret merkezleri ve gelişen altyapısıyla güvenlik sistemi talebinin arttığı dinamik bir ilçedir.",
  landmarks: [
    "Sultanbeyli Merkez",
    "Havza",
    "Fatih Mahallesi",
    "Zübeyde Hanım Mahallesi",
    "Mimar Sinan Mahallesi",
    "Turgut Reis Mahallesi",
    "Orhangazi Mahallesi",
    "Sultanbeyli Sanayi",
  ],
  nearbyDistricts: ["kartal", "pendik", "sancaktepe", "atasehir"],
  services: {
    "kamera-sistemi-kurulumu": {
      heroTitle: "Sultanbeyli Kamera Sistemi Kurulumu",
      heroIntro:
        "Sultanbeyli'nin yoğun konut mahallelerinden sanayi sitelerine, cadde mağazalarından büyük apartman bloklarına — Sultanbeyli'de her işletme ve konut için profesyonel kamera güvenliği. Aynı gün keşif.",
      whatsappMessage:
        "Merhaba, Sultanbeyli'de kamera sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Sultanbeyli'nin hızla büyüyen konut dokusu ve sanayi siteleri, kamera sistemini hem site hem işletme güvenliğinde birincil yatırım haline getiriyor.",
      ctaTitle: "Sultanbeyli'de Kamera Güvenliğini Kurun",
      ctaSubtitle:
        "Mağazanız, dükkanınız veya siteniz için Sultanbeyli'de ücretsiz keşif alın.",
      faqs: [
        {
          question: "Sultanbeyli'de kamera sistemi kurulumu ne kadar sürer?",
          answer:
            "Orta ölçekli projeler genellikle aynı gün tamamlanır; kesin süre keşif sonrası belirlenir.",
        },
        {
          question: "Sultanbeyli'de site güvenliği için kamera kurulumu yapılıyor mu?",
          answer:
            "Evet. Site girişi, otopark ve ortak alanlar için kapsamlı kamera planı hazırlanmaktadır.",
        },
        {
          question: "Sultanbeyli'de kamera sistemi mobil telefondan izlenebilir mi?",
          answer:
            "Evet. Tüm sistemlerimize mobil uygulama üzerinden canlı izleme ve kayıt erişimi dahildir.",
        },
      ],
    },
    "alarm-sistemi-kurulumu": {
      heroTitle: "Sultanbeyli Alarm Sistemi Kurulumu",
      heroIntro:
        "Sultanbeyli'nin kalabalık konut mahallelerinden sanayi sitelerine, cadde mağazalarından apartman bloklarına — Sultanbeyli genelinde hırsızlık caydırıcı alarm sistemleri. Mobil bildirimli, 7/24 etkin.",
      whatsappMessage:
        "Merhaba, Sultanbeyli'de alarm sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Sultanbeyli'nin yoğun konut yapısı ve büyüyen sanayi siteleri, alarm sistemini hem konut hem ticaret güvenliğinde temel güvenlik katmanı yapıyor.",
      ctaTitle: "Sultanbeyli'de Güvenliği Alarma Bağlayın",
      ctaSubtitle:
        "Dükkanınız veya daireniz için Sultanbeyli'de alarm keşfi ve teklif alın — kurulum aynı gün tamamlanır.",
      faqs: [
        {
          question: "Sultanbeyli'de daire alarm sistemi kurulumu ne kadar sürer?",
          answer:
            "Standart bir daire için alarm kurulumu genellikle 2-4 saat içinde tamamlanır.",
        },
        {
          question: "Sultanbeyli'de mağaza alarm sistemi nasıl planlanır?",
          answer:
            "Mağaza girişi, vitrin, kasa ve depo alanları analiz edilerek sensör planı hazırlanır.",
        },
        {
          question: "Sultanbeyli'de sanayi sitesi için alarm sistemi kurulumu yapılıyor mu?",
          answer:
            "Evet. Sanayi sitelerinde tesis çevresi, giriş kapıları ve depo alanları için endüstriyel alarm planı hazırlanmaktadır.",
        },
      ],
    },
    "kartli-gecis-sistemi-kurulumu": {
      heroTitle: "Sultanbeyli Kartlı Geçiş Sistemi Kurulumu",
      heroIntro:
        "Sultanbeyli'nin büyük konut sitelerinden sanayi sitelerine, apartman bloklarından ticari yapılara — giriş-çıkış kontrolünü kartlı geçiş sistemiyle yönetin, yetkisiz girişlerin önüne geçin.",
      whatsappMessage:
        "Merhaba, Sultanbeyli'de kartlı geçiş sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Sultanbeyli'nin büyük konut kompleksleri ve sanayi sitelerinde kontrolsüz araç ve ziyaretçi girişini önlemek için kartlı geçiş sistemi güvenlik standardı haline geliyor.",
      ctaTitle: "Sultanbeyli'de Giriş Kontrolünü Dijitalleştirin",
      ctaSubtitle:
        "Siteniz veya işyeriniz için Sultanbeyli'de kartlı geçiş keşfi ve teklif alın.",
      faqs: [
        {
          question: "Sultanbeyli'deki siteye araç bariyeri + kartlı giriş kurulabilir mi?",
          answer:
            "Evet. Araç bariyeri ve yaya girişi için kartlı okuyucu entegreli komple sistem sunulmaktadır.",
        },
        {
          question: "Sultanbeyli'de sanayi sitesine kartlı geçiş sistemi kurulabilir mi?",
          answer:
            "Evet. Ana giriş ve bölüm kapıları için yetki seviyeli kartlı geçiş sistemi kurulmaktadır.",
        },
        {
          question: "Sultanbeyli'de kartlı geçiş sistemi yönetimi nasıl yapılır?",
          answer:
            "Web tabanlı yönetim paneli üzerinden kart tanımlama, silme ve erişim raporları anlık olarak yönetilebilir.",
        },
      ],
    },
  },
};

const tuzla: DistrictProfile = {
  name: "Tuzla",
  slug: "tuzla",
  locative: "Tuzla'da",
  districtIntro:
    "İstanbul'un sanayi, tersane ve lojistik merkezi olan Tuzla; Anadolu Yakası'nın en büyük organize sanayi bölgelerinden birine, aktif tersanelerine ve hızla büyüyen konut projelerine sahip stratejik bir ilçedir.",
  landmarks: [
    "Tuzla OSB",
    "Tuzla Tersaneler Bölgesi",
    "İçmeler",
    "Aydınlı",
    "Postane",
    "Mimar Sinan",
    "Orhanlı",
    "Tuzla Merkez",
    "Şifa Mahallesi",
  ],
  nearbyDistricts: ["pendik", "kartal", "gebze", "sultanbeyli"],
  services: {
    "kamera-sistemi-kurulumu": {
      heroTitle: "Tuzla Kamera Sistemi Kurulumu",
      heroIntro:
        "Tuzla OSB'nin büyük fabrikalarından tersaneler bölgesine, İçmeler konut sitelerinden Aydınlı'nın sanayi yapılarına — Tuzla'da endüstriyel ölçekte kamera güvenliği. Geniş saha ve gece görüşü için optimize.",
      whatsappMessage:
        "Merhaba, Tuzla'da kamera sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Tuzla'nın büyük sanayi tesisleri, tersaneler ve lojistik üsleri; geniş açılı, gece görüşlü ve hava koşullarına dayanıklı endüstriyel kamera sistemlerine olan talebi sürekli artırıyor.",
      ctaTitle: "Tuzla OSB'den İçmeler'e — Tuzla'da Kamera Kurulumu",
      ctaSubtitle:
        "Fabrikanız, tersaneniz veya siteniz için Tuzla'da ücretsiz keşif alın.",
      faqs: [
        {
          question: "Tuzla OSB'deki fabrikam için endüstriyel kamera sistemi nasıl planlanır?",
          answer:
            "Üretim hattı, depo, dış çevre hattı ve yükleme rampaları keşif sonrası analiz edilerek geniş alan kamera planı hazırlanır.",
        },
        {
          question: "Tuzla tersanesi için özel kamera sistemi kurulabilir mi?",
          answer:
            "Evet. Deniz ortamına uygun korozyona dayanıklı, IP67 korumalı kameralarla tersane güvenliği sağlanmaktadır.",
        },
        {
          question: "Tuzla'da lojistik depo için gece güvenlik kamerası önerilir mi?",
          answer:
            "Evet. Gece saatlerinde depo güvenliği için IR gece görüşlü kameralar ve hareket tetiklemeli kayıt sistemi standart olarak önerilir.",
        },
      ],
    },
    "alarm-sistemi-kurulumu": {
      heroTitle: "Tuzla Alarm Sistemi Kurulumu",
      heroIntro:
        "Tuzla OSB'nin değerli ekipman ve stoklarından tersaneler bölgesinin kritik tesislerine, İçmeler konut projelerinden Aydınlı sanayi alanlarına — Tuzla genelinde endüstriyel ve konut alarm çözümleri.",
      whatsappMessage:
        "Merhaba, Tuzla'da alarm sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Tuzla'nın sanayi tesislerindeki yüksek ekipman ve stok değerleri ile gece saatlerinde insan olmayan geniş alanlar, kapsamlı alarm sistemi kurulumunu zorunlu kılıyor.",
      ctaTitle: "Tuzla'da Tesisini Alarma Bağlayın",
      ctaSubtitle:
        "Fabrikanız, deponuz veya siteniz için Tuzla'da endüstriyel alarm keşfi ve teklif alın.",
      faqs: [
        {
          question: "Tuzla OSB'deki fabrikam için alarm sistemi nasıl kurulur?",
          answer:
            "Tesis çevresi, ana giriş kapıları, depo ve üretim bölümleri analiz edilerek bölge bazlı alarm planı oluşturulur.",
        },
        {
          question: "Tuzla'da geniş alanlı depo için alarm sistemi kurulabiliyor mu?",
          answer:
            "Evet. Endüstriyel depolarda uzun mesafeli PIR sensörler ve cam kırılma dedektörleriyle kapsamlı alarm ağı kurulmaktadır.",
        },
        {
          question: "Tuzla'da alarm sistemi 7/24 izleme merkezine bağlanabiliyor mu?",
          answer:
            "Evet. Özel güvenlik izleme merkezine bağlı alarm sistemleri kurulmaktadır; alarm anında güvenlik müdahalesi sağlanır.",
        },
      ],
    },
    "kartli-gecis-sistemi-kurulumu": {
      heroTitle: "Tuzla Kartlı Geçiş Sistemi Kurulumu",
      heroIntro:
        "Tuzla OSB'nin vardiyalı üretim tesislerinden tersaneler bölgesine, Aydınlı sanayi yapılarından İçmeler konut sitelerine — Tuzla'da büyük ölçekli personel ve araç erişim kontrolü için kartlı geçiş sistemi.",
      whatsappMessage:
        "Merhaba, Tuzla'da kartlı geçiş sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Tuzla'nın büyük sanayi tesisleri ve tersanelerinde vardiyalı personel takibi, araç erişim kontrolü ve hassas bölge güvenliği için kartlı geçiş sistemi endüstriyel standart haline geliyor.",
      ctaTitle: "Tuzla'da Endüstriyel Erişim Kontrolü Kurun",
      ctaSubtitle:
        "Fabrikanız, tersaneniz veya lojistik tesisisiniz için Tuzla'da kartlı geçiş keşfi ve teklif alın.",
      faqs: [
        {
          question: "Tuzla OSB'deki fabrikama vardiya takipli kartlı geçiş nasıl kurulur?",
          answer:
            "Ana giriş, vardiya kapıları ve hassas bölüm erişimleri için yetki seviyeli okuyucu planı hazırlanır; vardiya logları raporlanır.",
        },
        {
          question: "Tuzla tersanesine araç giriş kontrol sistemi kurulabilir mi?",
          answer:
            "Evet. Araç plaka tanıma veya RFID araç etiketi sistemiyle tersane araç erişim kontrolü sağlanmaktadır.",
        },
        {
          question: "Tuzla'da büyük tesisler için kaç kapıya okuyucu kurulabilir?",
          answer:
            "Sistem ölçeklenebilir yapıdadır; küçük atölyeden büyük sanayi tesislerine kadar ihtiyaç duyulan kapı sayısına göre kurulum yapılır.",
        },
      ],
    },
  },
};

// ---------------------------------------------------------------------------
// Tier 5 districts — Beykoz, Sancaktepe, Çekmeköy, Esenler, Büyükçekmece
// ---------------------------------------------------------------------------

const beykoz: DistrictProfile = {
  name: "Beykoz",
  slug: "beykoz",
  locative: "Beykoz'da",
  districtIntro:
    "İstanbul'un Anadolu Yakası'nda Boğaz kıyısında uzanan Beykoz; Kavacık'ın büyüyen iş alanları, orman içi villa toplulukları ve prestijli Boğaz konutlarıyla üst segment güvenlik sistemlerine olan talebin yoğun olduğu bir ilçedir.",
  landmarks: ["Kavacık", "Paşabahçe", "Anadoluhisarı", "Polonezköy", "Çubuklu", "Kanlıca", "Akbaba", "İncirköy", "Beykoz Merkez"],
  nearbyDistricts: ["uskudar", "sariyer", "atasehir", "cekmekoy"],
  services: {
    "kamera-sistemi-kurulumu": {
      heroTitle: "Beykoz Kamera Sistemi Kurulumu",
      heroIntro:
        "Kavacık'ın büyüyen iş merkezlerinden Kanlıca'nın Boğaz kıyısı konutlarına, Polonezköy orman villalarından Paşabahçe sahil işletmelerine — Beykoz'da prestij standartta kamera güvenliği. Aynı gün keşif.",
      whatsappMessage: "Merhaba, Beykoz'da kamera sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Beykoz'un Boğaz kıyısı villalarının yüksek değeri ve orman içi konumların izole yapısı, kamera sistemini hem caydırıcılık hem izleme açısından birincil güvenlik yatırımı yapıyor.",
      ctaTitle: "Kavacık'tan Kanlıca'ya — Beykoz'da Kamera Kurulumu",
      ctaSubtitle: "Villanız, siteniz veya işyeriniz için Beykoz'da ücretsiz keşif alın.",
      faqs: [
        { question: "Beykoz'daki Boğaz kıyısı villam için kamera sistemi nasıl planlanır?", answer: "Villa çevresi, deniz cephesi, bahçe ve giriş kapısı keşif sonrası analiz edilerek dış mekan kamera planı hazırlanır." },
        { question: "Beykoz'da orman içi villa için kamera kurulumu yapılıyor mu?", answer: "Evet. İzole konumlar için geniş açılı ve gece görüşlü kameralar güvenilir kayıt sistemiyle birlikte kurulmaktadır." },
        { question: "Beykoz'da kamera sistemi mobil telefondan izlenebilir mi?", answer: "Evet. Tüm sistemlerimize mobil uygulama üzerinden canlı izleme ve kayıt erişimi dahildir." },
      ],
    },
    "alarm-sistemi-kurulumu": {
      heroTitle: "Beykoz Alarm Sistemi Kurulumu",
      heroIntro:
        "Kanlıca'nın prestijli Boğaz villalarından Kavacık iş merkezlerine, Polonezköy orman evlerinden Paşabahçe konut sitelerine — Beykoz genelinde yüksek standartta alarm güvenliği. 7/24 izleme seçeneğiyle.",
      whatsappMessage: "Merhaba, Beykoz'da alarm sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Beykoz'un yüksek değerli Boğaz villalarının izole konumu ve orman içi lokasyonlar, alarm sistemini hem caydırıcılık hem hızlı müdahale açısından kritik kılıyor.",
      ctaTitle: "Beykoz'da Güvenliği Alarma Bağlayın",
      ctaSubtitle: "Villanız, konutunuz veya işyeriniz için Beykoz'da alarm keşfi ve teklif alın.",
      faqs: [
        { question: "Beykoz'daki villam için alarm sistemi nasıl planlanır?", answer: "Villa çevresi, kapılar, pencereler, bahçe ve garaj alanı analiz edilerek perimetrik alarm planı oluşturulur." },
        { question: "Beykoz'da alarm sistemi 7/24 izleme merkezine bağlanabiliyor mu?", answer: "Evet. Özel güvenlik izleme merkezine bağlı alarm sistemleri kurulmaktadır; alarm anında güvenlik müdahalesi sağlanır." },
        { question: "Beykoz'da alarm ve kamera sistemi birlikte kurulabilir mi?", answer: "Evet. Alarm tetiklendiğinde ilgili kameradan görüntü kaydı başlatan entegre sistemler kurulmaktadır." },
      ],
    },
    "kartli-gecis-sistemi-kurulumu": {
      heroTitle: "Beykoz Kartlı Geçiş Sistemi Kurulumu",
      heroIntro:
        "Beykoz'un prestijli villa topluluklarından Kavacık iş merkezlerine, Paşabahçe konut sitelerinden Kanlıca Boğaz konutlarına — giriş-çıkış kontrolünü kartlı geçiş sistemiyle profesyonelleştirin.",
      whatsappMessage: "Merhaba, Beykoz'da kartlı geçiş sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Beykoz'un prestijli villa toplulukları ve izole konut bölgelerinde yetkisiz araç ve ziyaretçi girişini önlemek için kartlı geçiş sistemi güvenlik standardı haline geliyor.",
      ctaTitle: "Beykoz'da Giriş Kontrolünü Dijitalleştirin",
      ctaSubtitle: "Villa topluluğunuz, siteniz veya ofisiniz için Beykoz'da kartlı geçiş keşfi ve teklif alın.",
      faqs: [
        { question: "Beykoz'daki villa topluluğuna kartlı geçiş sistemi kurulabilir mi?", answer: "Evet. Ana giriş kapısına bariyer entegreli kartlı geçiş ve misafir yönetim sistemi kurulmaktadır." },
        { question: "Kavacık'taki ofis binamı için kartlı geçiş nasıl planlanır?", answer: "Bina ana girişi, kat çıkışları ve hassas birim kapıları keşif sonrası belirlenerek okuyucu planı hazırlanır." },
        { question: "Beykoz'da kartlı geçiş sistemi ziyaretçi yönetimini destekler mi?", answer: "Evet. Geçici kart veya QR kod ile ziyaretçi erişimi tanımlanabilir; giriş logları raporlanır." },
      ],
    },
  },
};

const sancaktepe: DistrictProfile = {
  name: "Sancaktepe",
  slug: "sancaktepe",
  locative: "Sancaktepe'de",
  districtIntro:
    "İstanbul'un Anadolu Yakası'nda hızla gelişen Sancaktepe; büyük konut projeleri, sanayi siteleri ve lojistik altyapısıyla güvenlik sistemi talebinin sürekli arttığı dinamik bir ilçedir.",
  landmarks: ["Sancaktepe Merkez", "Samandıra", "Yenidoğan", "Abdurrahmangazi", "Fatih Mahallesi", "Emek Mahallesi", "Sancaktepe OSB"],
  nearbyDistricts: ["kartal", "sultanbeyli", "atasehir", "cekmekoy"],
  services: {
    "kamera-sistemi-kurulumu": {
      heroTitle: "Sancaktepe Kamera Sistemi Kurulumu",
      heroIntro:
        "Sancaktepe'nin büyüyen konut projelerinden OSB'nin sanayi tesislerine, Samandıra mahallelerinden ticaret merkezlerine — Sancaktepe'de her işletme ve konut için profesyonel kamera güvenliği. Aynı gün keşif.",
      whatsappMessage: "Merhaba, Sancaktepe'de kamera sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Sancaktepe'nin hızla büyüyen konut projeleri ve sanayi siteleri, kamera güvenliğini hem site hem işletme tarafında birincil yatırım haline getiriyor.",
      ctaTitle: "Sancaktepe'de Kamera Güvenliğini Kurun",
      ctaSubtitle: "Siteniz, fabrikanız veya mağazanız için Sancaktepe'de ücretsiz keşif alın.",
      faqs: [
        { question: "Sancaktepe'de site güvenliği için kamera kurulumu yapılıyor mu?", answer: "Evet. Site girişi, otopark, blok girişleri ve çevre güvenliği için kapsamlı kamera planı hazırlanmaktadır." },
        { question: "Sancaktepe OSB'deki fabrikam için kamera sistemi nasıl planlanır?", answer: "Üretim alanı, depo, dış çevre ve yükleme noktaları keşif sonrası analiz edilerek endüstriyel kamera planı hazırlanır." },
        { question: "Sancaktepe'de kamera sistemi mobil telefondan izlenebilir mi?", answer: "Evet. Tüm sistemlerimize mobil uygulama üzerinden canlı izleme ve kayıt erişimi dahildir." },
      ],
    },
    "alarm-sistemi-kurulumu": {
      heroTitle: "Sancaktepe Alarm Sistemi Kurulumu",
      heroIntro:
        "Sancaktepe'nin büyüyen konut mahallelerinden sanayi sitelerine, Samandıra'nın yerleşim alanlarından ticaret merkezlerine — Sancaktepe genelinde hırsızlık caydırıcı alarm sistemleri. Mobil bildirimli, 7/24 etkin.",
      whatsappMessage: "Merhaba, Sancaktepe'de alarm sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Sancaktepe'nin hızla büyüyen konut dokusu ve sanayi tesisleri, alarm sistemini hem konut hem endüstriyel güvenlikte temel katman yapıyor.",
      ctaTitle: "Sancaktepe'de Güvenliği Alarma Bağlayın",
      ctaSubtitle: "Daireniz, dükkanınız veya fabrikanız için Sancaktepe'de alarm keşfi ve teklif alın.",
      faqs: [
        { question: "Sancaktepe'de daire alarm sistemi kurulumu ne kadar sürer?", answer: "Standart bir daire için alarm kurulumu genellikle 2-4 saat içinde tamamlanır." },
        { question: "Sancaktepe'de sanayi sitesi için alarm sistemi kurulumu yapılıyor mu?", answer: "Evet. Tesis çevresi, giriş kapıları ve depo alanları için endüstriyel alarm planı hazırlanmaktadır." },
        { question: "Sancaktepe'de alarm mesai dışında nasıl çalışır?", answer: "Kapanış sonrası sistem otomatik devreye girer; ihlal tespit edildiğinde anlık mobil bildirim ve siren uyarısı gönderilir." },
      ],
    },
    "kartli-gecis-sistemi-kurulumu": {
      heroTitle: "Sancaktepe Kartlı Geçiş Sistemi Kurulumu",
      heroIntro:
        "Sancaktepe'nin büyük konut sitelerinden OSB sanayi tesislerine, Samandıra mahallelerinden ticari yapılara — giriş-çıkış kontrolünü kartlı geçiş sistemiyle yönetin.",
      whatsappMessage: "Merhaba, Sancaktepe'de kartlı geçiş sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Sancaktepe'nin büyük konut kompleksleri ve sanayi sitelerinde personel ve araç erişimini dijital olarak kontrol altına almak için kartlı geçiş sistemi kritik bir yatırım haline geliyor.",
      ctaTitle: "Sancaktepe'de Giriş Kontrolünü Dijitalleştirin",
      ctaSubtitle: "Siteniz, fabrikanız veya ofisiniz için Sancaktepe'de kartlı geçiş keşfi ve teklif alın.",
      faqs: [
        { question: "Sancaktepe'deki siteye araç bariyeri + kartlı giriş kurulabilir mi?", answer: "Evet. Araç bariyeri ve yaya girişi için kartlı okuyucu entegreli komple sistem sunulmaktadır." },
        { question: "Sancaktepe OSB'deki fabrikama kartlı geçiş nasıl kurulur?", answer: "Ana giriş, vardiya kapıları ve bölüm erişimleri keşif sonrası belirlenerek okuyucu ve kontrol paneli planı hazırlanır." },
        { question: "Sancaktepe'de kartlı geçiş yönetimi nasıl yapılır?", answer: "Web tabanlı yönetim paneli üzerinden kart tanımlama, silme ve erişim raporları anlık olarak yönetilebilir." },
      ],
    },
  },
};

const cekmekoy: DistrictProfile = {
  name: "Çekmeköy",
  slug: "cekmekoy",
  locative: "Çekmeköy'de",
  districtIntro:
    "İstanbul'un Anadolu Yakası'nda orman dokusuyla iç içe büyüyen Çekmeköy; prestijli villa toplulukları, büyük konut projeleri ve sakin mahalle yapısıyla güvenlik sistemlerine olan talebin arttığı gelişen bir ilçedir.",
  landmarks: ["Taşdelen", "Hamidiye", "Reşadiye", "Nişantepe", "Soğukpınar", "Çekmeköy Merkez", "Ekşioğlu"],
  nearbyDistricts: ["sancaktepe", "atasehir", "beykoz", "sultanbeyli"],
  services: {
    "kamera-sistemi-kurulumu": {
      heroTitle: "Çekmeköy Kamera Sistemi Kurulumu",
      heroIntro:
        "Taşdelen'in prestijli villa topluluklarından Hamidiye'nin konut projelerine, Çekmeköy'ün orman kenarı sitelerinden Nişantepe mahallelerine — Çekmeköy'de güvenli yaşam için profesyonel kamera sistemi. Aynı gün keşif.",
      whatsappMessage: "Merhaba, Çekmeköy'de kamera sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Çekmeköy'ün orman içi villa toplulukları ve büyük konut projelerinin izole konumu, kamera güvenliğini hem caydırıcılık hem izleme açısından birincil yatırım yapıyor.",
      ctaTitle: "Taşdelen'den Hamidiye'ye — Çekmeköy'de Kamera Kurulumu",
      ctaSubtitle: "Villanız, siteniz veya konutunuz için Çekmeköy'de ücretsiz keşif alın.",
      faqs: [
        { question: "Çekmeköy'deki villa için kamera sistemi nasıl planlanır?", answer: "Villa çevresi, bahçe, giriş kapısı ve garaj alanları keşif sonrası analiz edilerek dış mekan kamera planı hazırlanır." },
        { question: "Çekmeköy'de site güvenliği için kamera kurulumu yapılıyor mu?", answer: "Evet. Site girişi, otopark ve blok girişleri için kapsamlı kamera planı hazırlanmaktadır." },
        { question: "Çekmeköy'de gece görüşlü dış ortam kamerası kurulumu yapılıyor mu?", answer: "Evet. Orman kenarı konumlar için IR gece görüşlü, hava koşullarına dayanıklı kameralarla kurulum yapılmaktadır." },
      ],
    },
    "alarm-sistemi-kurulumu": {
      heroTitle: "Çekmeköy Alarm Sistemi Kurulumu",
      heroIntro:
        "Taşdelen'in prestijli villalarından Hamidiye'nin konut projelerine, Çekmeköy'ün orman kenarı sitelerinden sakin mahalle dükkanlarına — Çekmeköy genelinde hırsızlık caydırıcı alarm sistemleri. 7/24 izleme seçeneğiyle.",
      whatsappMessage: "Merhaba, Çekmeköy'de alarm sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Çekmeköy'ün izole orman içi lokasyonları ve yüksek değerli villa bölgeleri, alarm sistemini hem caydırıcılık hem hızlı müdahale açısından kritik kılıyor.",
      ctaTitle: "Çekmeköy'de Güvenliği Alarma Bağlayın",
      ctaSubtitle: "Villanız, daireniz veya işyeriniz için Çekmeköy'de alarm keşfi ve teklif alın.",
      faqs: [
        { question: "Çekmeköy'deki villam için alarm sistemi nasıl planlanır?", answer: "Villa çevresi, kapılar, pencereler, bahçe ve garaj analiz edilerek perimetrik alarm planı oluşturulur." },
        { question: "Çekmeköy'de alarm sistemi 7/24 izleme merkezine bağlanabiliyor mu?", answer: "Evet. Özel güvenlik izleme merkezine bağlı alarm sistemleri kurulmaktadır; alarm anında güvenlik müdahalesi sağlanır." },
        { question: "Çekmeköy'de daire alarm sistemi kurulumu ne kadar sürer?", answer: "Standart bir daire için alarm kurulumu genellikle 2-4 saat içinde tamamlanır." },
      ],
    },
    "kartli-gecis-sistemi-kurulumu": {
      heroTitle: "Çekmeköy Kartlı Geçiş Sistemi Kurulumu",
      heroIntro:
        "Çekmeköy'ün prestijli villa topluluklarından Taşdelen'in büyük konut sitelerine, Hamidiye mahallelerinden orman kenarı rezidanslara — giriş-çıkış kontrolünü kartlı geçiş sistemiyle profesyonelleştirin.",
      whatsappMessage: "Merhaba, Çekmeköy'de kartlı geçiş sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Çekmeköy'ün izole villa toplulukları ve büyük konut sitelerinde yetkisiz araç ve ziyaretçi girişini önlemek için kartlı geçiş sistemi güvenlik standardı haline geliyor.",
      ctaTitle: "Çekmeköy'de Giriş Kontrolünü Dijitalleştirin",
      ctaSubtitle: "Villa topluluğunuz veya siteniz için Çekmeköy'de kartlı geçiş keşfi ve teklif alın.",
      faqs: [
        { question: "Çekmeköy'deki villa topluluğuna kartlı geçiş sistemi kurulabilir mi?", answer: "Evet. Ana giriş kapısına bariyer entegreli kartlı geçiş ve misafir yönetim sistemi kurulmaktadır." },
        { question: "Çekmeköy'deki siteye araç bariyeri + kartlı giriş kurulabilir mi?", answer: "Evet. Araç bariyeri ve yaya girişi için kartlı okuyucu entegreli komple sistem sunulmaktadır." },
        { question: "Çekmeköy'de kartlı geçiş yönetimi nasıl yapılır?", answer: "Web tabanlı yönetim paneli üzerinden kart tanımlama, silme ve erişim raporları anlık olarak yönetilebilir." },
      ],
    },
  },
};

const esenler: DistrictProfile = {
  name: "Esenler",
  slug: "esenler",
  locative: "Esenler'de",
  districtIntro:
    "İstanbul'un Avrupa Yakası'nda E-5 ve TEM otoyollarının kesişim noktasına yakın konumuyla öne çıkan Esenler; büyük otogar kompleksi, yoğun ticaret merkezi, sanayi siteleri ve kalabalık konut dokusuyla güvenlik sistemlerine olan talebin yüksek olduğu stratejik bir ilçedir.",
  landmarks: ["İstanbul Büyük Otogar", "Esenler Merkez", "Menderes", "Turgut Reis", "Oruçreis", "Birlik", "Kemer", "Nine Hatun"],
  nearbyDistricts: ["bagcilar", "bayrampasa", "gungoren", "sultangazi"],
  services: {
    "kamera-sistemi-kurulumu": {
      heroTitle: "Esenler Kamera Sistemi Kurulumu",
      heroIntro:
        "Büyük Otogar çevresinin yoğun ticari trafiğinden Esenler Merkez'in mağaza aksına, sanayi sitelerinden kalabalık konut bloklarına — Esenler'de her işletme ve konut için profesyonel kamera güvenliği. Aynı gün keşif.",
      whatsappMessage: "Merhaba, Esenler'de kamera sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Büyük Otogar'ın yüksek insan trafiği ve Esenler'in yoğun ticaret merkezi, kamera güvenliğini hem caydırıcılık hem izleme açısından birincil yatırım haline getiriyor.",
      ctaTitle: "Esenler'de Kamera Güvenliğini Kurun",
      ctaSubtitle: "Mağazanız, dükkanınız veya siteniz için Esenler'de ücretsiz keşif alın.",
      faqs: [
        { question: "Esenler'deki işyerim için kamera sistemi nasıl planlanır?", answer: "İşyeri girişi, vitrin, kasa ve depo alanları keşif sonrası analiz edilerek kör nokta kalmayacak kamera planı hazırlanır." },
        { question: "Esenler'de site güvenliği için kamera kurulumu yapılıyor mu?", answer: "Evet. Site girişi, otopark ve ortak alanlar için kapsamlı kamera planı hazırlanmaktadır." },
        { question: "Esenler'de kamera sistemi mobil telefondan izlenebilir mi?", answer: "Evet. Tüm sistemlerimize mobil uygulama üzerinden canlı izleme ve kayıt erişimi dahildir." },
      ],
    },
    "alarm-sistemi-kurulumu": {
      heroTitle: "Esenler Alarm Sistemi Kurulumu",
      heroIntro:
        "Büyük Otogar çevresinin ticari yoğunluğundan Esenler'in konut mahallelerine, sanayi sitelerinden cadde mağazalarına — Esenler genelinde hırsızlık caydırıcı alarm sistemleri. Mobil bildirimli, 7/24 etkin.",
      whatsappMessage: "Merhaba, Esenler'de alarm sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Esenler'in yüksek yaya trafiğine sahip ticaret merkezi ve yoğun konut mahalleleri, alarm sistemini hem caydırıcılık hem erken uyarı açısından birincil güvenlik yatırımı yapıyor.",
      ctaTitle: "Esenler'de Güvenliği Alarma Bağlayın",
      ctaSubtitle: "Dükkanınız veya daireniz için Esenler'de alarm keşfi ve teklif alın — kurulum aynı gün tamamlanır.",
      faqs: [
        { question: "Esenler'de mağaza alarm sistemi kurulumu ne kadar sürer?", answer: "Standart bir mağaza için alarm kurulumu genellikle yarım ila tam gün içinde tamamlanır." },
        { question: "Esenler'de daire için alarm sistemi önerilir mi?", answer: "Evet. Kapı-pencere sensörleri ve hareket dedektörüyle daire için etkili alarm sistemi kurulabilir." },
        { question: "Esenler'de alarm mesai dışında nasıl çalışır?", answer: "Kapanış sonrası sistem otomatik devreye girer; ihlal tespit edildiğinde anlık mobil bildirim ve siren uyarısı gönderilir." },
      ],
    },
    "kartli-gecis-sistemi-kurulumu": {
      heroTitle: "Esenler Kartlı Geçiş Sistemi Kurulumu",
      heroIntro:
        "Esenler'in büyük konut sitelerinden sanayi yapılarına, Otogar çevresi ticari binalardan apartman bloklarına — giriş-çıkış kontrolünü kartlı geçiş sistemiyle yönetin.",
      whatsappMessage: "Merhaba, Esenler'de kartlı geçiş sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Esenler'in büyük konut kompleksleri ve ticari yapılarında kontrolsüz araç ve ziyaretçi girişini önlemek için kartlı geçiş sistemi güvenlik standardı haline geliyor.",
      ctaTitle: "Esenler'de Giriş Kontrolünü Dijitalleştirin",
      ctaSubtitle: "Siteniz, işyeriniz veya ticari binanız için Esenler'de kartlı geçiş keşfi ve teklif alın.",
      faqs: [
        { question: "Esenler'deki siteye araç bariyeri + kartlı giriş kurulabilir mi?", answer: "Evet. Araç bariyeri ve yaya girişi için kartlı okuyucu entegreli komple sistem sunulmaktadır." },
        { question: "Esenler'de apartman girişine kartlı geçiş kurulabilir mi?", answer: "Evet. Apartman ana kapısına RFID veya akıllı kart okuyucu montajı yapılmaktadır." },
        { question: "Esenler'de kartlı geçiş yönetimi nasıl yapılır?", answer: "Web tabanlı yönetim paneli üzerinden kart tanımlama, silme ve erişim raporları anlık olarak yönetilebilir." },
      ],
    },
  },
};

const buyukcekmece: DistrictProfile = {
  name: "Büyükçekmece",
  slug: "buyukcekmece",
  locative: "Büyükçekmece'de",
  districtIntro:
    "İstanbul'un Avrupa Yakası'nda Marmara kıyısında uzanan Büyükçekmece; geniş göl ve sahil hattı, büyüyen villa ve site projeleri ile sanayi ve lojistik altyapısıyla güvenlik sistemlerine olan talebin arttığı gelişmekte olan bir ilçedir.",
  landmarks: ["Büyükçekmece Merkez", "Büyükçekmece Gölü", "Mimaroba", "Kumburgaz", "Tepecik", "Alkent", "Büyükçekmece Sahili", "TEM Otoyolu"],
  nearbyDistricts: ["beylikduzu", "avcilar", "esenyurt", "catalca"],
  services: {
    "kamera-sistemi-kurulumu": {
      heroTitle: "Büyükçekmece Kamera Sistemi Kurulumu",
      heroIntro:
        "Alkent'in prestijli villa topluluklarından Kumburgaz sahil işletmelerine, Mimaroba'nın büyük konut projelerinden TEM güzergahı sanayi yapılarına — Büyükçekmece'de profesyonel kamera güvenliği. Aynı gün keşif.",
      whatsappMessage: "Merhaba, Büyükçekmece'de kamera sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Büyükçekmece'nin göl ve sahil kıyısındaki villa toplulukları ile Kumburgaz'ın turizm işletmeleri, kamera güvenliğini hem konut hem ticari tarafta birincil yatırım haline getiriyor.",
      ctaTitle: "Alkent'ten Kumburgaz'a — Büyükçekmece'de Kamera Kurulumu",
      ctaSubtitle: "Villanız, siteniz veya işyeriniz için Büyükçekmece'de ücretsiz keşif alın.",
      faqs: [
        { question: "Büyükçekmece'deki villam için kamera sistemi nasıl planlanır?", answer: "Villa çevresi, bahçe, giriş kapısı ve havuz alanı keşif sonrası analiz edilerek dış mekan kamera planı hazırlanır." },
        { question: "Büyükçekmece'de sahil işletmem için kamera kurulumu yapılıyor mu?", answer: "Evet. Dış mekan ve deniz cephesi için hava koşullarına dayanıklı IP kameralarla kurulum yapılmaktadır." },
        { question: "Büyükçekmece'de kamera sistemi mobil telefondan izlenebilir mi?", answer: "Evet. Tüm sistemlerimize mobil uygulama üzerinden canlı izleme ve kayıt erişimi dahildir." },
      ],
    },
    "alarm-sistemi-kurulumu": {
      heroTitle: "Büyükçekmece Alarm Sistemi Kurulumu",
      heroIntro:
        "Alkent'in prestijli villalarından Mimaroba'nın konut projelerine, Kumburgaz sahil işletmelerinden TEM güzergahı sanayi yapılarına — Büyükçekmece genelinde hırsızlık caydırıcı alarm sistemleri. 7/24 izleme seçeneğiyle.",
      whatsappMessage: "Merhaba, Büyükçekmece'de alarm sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Büyükçekmece'nin izole villa bölgeleri ve sahil işletmelerinin gece saatlerindeki güvenlik açığı, alarm sistemini hem caydırıcılık hem hızlı müdahale açısından kritik kılıyor.",
      ctaTitle: "Büyükçekmece'de Güvenliği Alarma Bağlayın",
      ctaSubtitle: "Villanız, işyeriniz veya daireniz için Büyükçekmece'de alarm keşfi ve teklif alın.",
      faqs: [
        { question: "Büyükçekmece'deki villam için alarm sistemi nasıl planlanır?", answer: "Villa çevresi, kapılar, pencereler, bahçe ve garaj alanı analiz edilerek perimetrik alarm planı oluşturulur." },
        { question: "Büyükçekmece'de alarm sistemi 7/24 izleme merkezine bağlanabiliyor mu?", answer: "Evet. Özel güvenlik izleme merkezine bağlı alarm sistemleri kurulmaktadır; alarm anında güvenlik müdahalesi sağlanır." },
        { question: "Büyükçekmece'de daire alarm sistemi kurulumu ne kadar sürer?", answer: "Standart bir daire için alarm kurulumu genellikle 2-4 saat içinde tamamlanır." },
      ],
    },
    "kartli-gecis-sistemi-kurulumu": {
      heroTitle: "Büyükçekmece Kartlı Geçiş Sistemi Kurulumu",
      heroIntro:
        "Alkent'in büyük villa topluluklarından Mimaroba'nın konut sitelerine, Kumburgaz sahil tesislerinden TEM güzergahı ticari yapılarına — giriş-çıkış kontrolünü kartlı geçiş sistemiyle profesyonelleştirin.",
      whatsappMessage: "Merhaba, Büyükçekmece'de kartlı geçiş sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Büyükçekmece'nin prestijli villa toplulukları ve büyük konut sitelerinde yetkisiz araç ve ziyaretçi girişini önlemek için kartlı geçiş sistemi güvenlik standardı haline geliyor.",
      ctaTitle: "Büyükçekmece'de Giriş Kontrolünü Dijitalleştirin",
      ctaSubtitle: "Villa topluluğunuz, siteniz veya tesisisiniz için Büyükçekmece'de kartlı geçiş keşfi ve teklif alın.",
      faqs: [
        { question: "Büyükçekmece'deki villa topluluğuna kartlı geçiş sistemi kurulabilir mi?", answer: "Evet. Ana giriş kapısına bariyer entegreli kartlı geçiş ve misafir yönetim sistemi kurulmaktadır." },
        { question: "Büyükçekmece'deki siteye araç bariyeri + kartlı giriş kurulabilir mi?", answer: "Evet. Araç bariyeri ve yaya girişi için kartlı okuyucu entegreli komple sistem sunulmaktadır." },
        { question: "Büyükçekmece'de kartlı geçiş yönetimi nasıl yapılır?", answer: "Web tabanlı yönetim paneli üzerinden kart tanımlama, silme ve erişim raporları anlık olarak yönetilebilir." },
      ],
    },
  },
};

// ---------------------------------------------------------------------------
// Tier 6 — Adalar, Şile, Silivri, Çatalca
// ---------------------------------------------------------------------------

const adalar: DistrictProfile = {
  name: "Adalar",
  slug: "adalar",
  locative: "Adalar'da",
  districtIntro:
    "İstanbul'un Marmara Denizi'ndeki Prens Adaları'ndan oluşan Adalar ilçesi; Büyükada, Heybeliada ve Burgazada'nın tarihi konut dokusu, butik oteller ve turizm işletmeleriyle yıl boyunca güvenlik sistemine ihtiyaç duyulan özgün bir ilçedir.",
  landmarks: [
    "Büyükada",
    "Heybeliada",
    "Burgazada",
    "Kınalıada",
    "Sedef Adası",
    "Büyükada Yat Limanı",
    "Büyükada Çarşı",
  ],
  nearbyDistricts: ["maltepe", "kartal", "pendik", "uskudar"],
  services: {
    "kamera-sistemi-kurulumu": {
      heroTitle: "Adalar Kamera Sistemi Kurulumu",
      heroIntro:
        "Büyükada'nın tarihi köşklerinden Heybeliada'nın butik otellerine, Burgazada'nın sahil işletmelerinden Kınalıada'nın konut sitelerine — Adalar'da tarihi dokuya uyumlu profesyonel kamera güvenliği. Aynı gün keşif.",
      whatsappMessage: "Merhaba, Adalar'da kamera sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Adalar'ın yüksek değerli tarihi köşkleri ve turizm sezonunda yoğunlaşan ziyaretçi trafiği, kamera güvenliğini hem konut hem işletme tarafında zorunlu kılıyor.",
      ctaTitle: "Büyükada'dan Heybeliada'ya — Adalar'da Kamera Kurulumu",
      ctaSubtitle: "Köşkünüz, oteliniiz veya işyeriniz için Adalar'da ücretsiz keşif alın.",
      faqs: [
        {
          question: "Büyükada'daki tarihi köşküm için kamera sistemi nasıl planlanır?",
          answer: "Tarihi yapı dokusuna zarar vermeden montaj yöntemleriyle bahçe, giriş ve dış cephe için kamera planı hazırlanır.",
        },
        {
          question: "Adalar'da motorlu araç yasağı kamera kurulumunu etkiler mi?",
          answer: "Hayır. Ekipmanlarımızı el arabası ve taşıma yöntemleriyle ulaştırarak aynı gün kurulum gerçekleştiriyoruz.",
        },
        {
          question: "Adalar'da otel için kamera sistemi kurulumu yapılıyor mu?",
          answer: "Evet. Lobi, koridor, bahçe ve dış cephe dahil otel güvenlik kamerası planı hazırlanmaktadır.",
        },
      ],
    },
    "alarm-sistemi-kurulumu": {
      heroTitle: "Adalar Alarm Sistemi Kurulumu",
      heroIntro:
        "Büyükada'nın tarihi köşklerinden Heybeliada'nın butik otellerine, sezon dışında boş kalan konutlardan aktif sahil işletmelerine — Adalar genelinde hırsızlık caydırıcı alarm sistemleri. Mobil bildirimli, 7/24 etkin.",
      whatsappMessage: "Merhaba, Adalar'da alarm sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Adalar'ın sezon dışında büyük bölümünün boşalması ve tarihi köşklerin yüksek değeri, alarm sistemini hem sezon içi hem sezon dışı güvenlik için kritik kılıyor.",
      ctaTitle: "Adalar'da Güvenliği Alarma Bağlayın",
      ctaSubtitle: "Köşkünüz, daireniz veya işyeriniz için Adalar'da alarm keşfi ve teklif alın.",
      faqs: [
        {
          question: "Adalar'da sezon dışı boş kalan köşküm için alarm sistemi önerilir mi?",
          answer: "Kesinlikle evet. Sezon dışı boş yapılar için GSM bağlantılı alarm ve 7/24 izleme merkezi entegrasyonu özellikle önerilir.",
        },
        {
          question: "Adalar'da kablosuz alarm sistemi kurulabiliyor mu?",
          answer: "Evet. Tarihi yapılarda kablo çekilmesi zor olan bölümler için kablosuz alarm sistemleri idealdir.",
        },
        {
          question: "Adalar'da alarm sistemi kurulumu ne kadar sürer?",
          answer: "Standart bir konut veya işletme için kurulum genellikle aynı gün tamamlanır.",
        },
      ],
    },
    "kartli-gecis-sistemi-kurulumu": {
      heroTitle: "Adalar Kartlı Geçiş Sistemi Kurulumu",
      heroIntro:
        "Büyükada'nın butik otellerinden Heybeliada'nın konut sitelerine, sahil işletmelerinden tarihi yapı komplekslerine — Adalar'da giriş-çıkış kontrolünü kartlı geçiş sistemiyle profesyonelleştirin.",
      whatsappMessage: "Merhaba, Adalar'da kartlı geçiş sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Adalar'ın butik otel ve tarihi konut komplekslerinde personel ile misafir erişimini ayrıştırmak için kartlı geçiş sistemi güvenlik standardı haline geliyor.",
      ctaTitle: "Adalar'da Giriş Kontrolünü Dijitalleştirin",
      ctaSubtitle: "Oteliniz, köşkünüz veya siteniz için Adalar'da kartlı geçiş keşfi ve teklif alın.",
      faqs: [
        {
          question: "Büyükada'daki otelime kartlı oda erişim sistemi kurulabilir mi?",
          answer: "Evet. Oda kapılarına RFID kart okuyucu ve personel girişlerine ayrı yetki seviyeli sistem kurulabilir.",
        },
        {
          question: "Adalar'da motorlu araç yasağı kartlı geçiş kurulumunu zorlaştırır mı?",
          answer: "Hayır. Tüm ekipmanlarımızı el arabası ve taşıma yöntemleriyle ulaştırarak kurulum gerçekleştiriyoruz.",
        },
        {
          question: "Adalar'da kartlı geçiş sistemi ziyaretçi yönetimini destekler mi?",
          answer: "Evet. Geçici kart veya QR kod ile ziyaretçi erişimi tanımlanabilir; giriş logları raporlanır.",
        },
      ],
    },
  },
};

const sile: DistrictProfile = {
  name: "Şile",
  slug: "sile",
  locative: "Şile'de",
  districtIntro:
    "İstanbul'un Karadeniz kıyısında yer alan Şile; uzun plajları, yazlık konutları, butik tatil tesisleri ve sakin köy dokusuyla sezon boyunca güvenlik sistemine ihtiyaç duyulan özgün bir ilçedir.",
  landmarks: [
    "Şile Merkez",
    "Şile Kalesi",
    "Şile Plajı",
    "Ağva",
    "Domalı",
    "Balibey",
    "Karakiraz",
    "Şile Feneri",
  ],
  nearbyDistricts: ["beykoz", "cekmekoy", "gebze"],
  services: {
    "kamera-sistemi-kurulumu": {
      heroTitle: "Şile Kamera Sistemi Kurulumu",
      heroIntro:
        "Şile'nin sahil tatil tesislerinden Ağva'nın doğa içi konutlarına, Şile Merkez'in mağazalarından yazlık villalara — Şile'de sezon içi ve sezon dışı profesyonel kamera güvenliği. Aynı gün keşif.",
      whatsappMessage: "Merhaba, Şile'de kamera sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Şile'nin sezon dışında büyük bölümünün boşalması ve sahil tesislerinin değerli ekipmanları, kamera güvenliğini hem sezon içi izleme hem sezon dışı koruma açısından kritik kılıyor.",
      ctaTitle: "Şile'de Kamera Güvenliğini Kurun",
      ctaSubtitle: "Yazlığınız, tesisiniz veya mağazanız için Şile'de ücretsiz keşif alın.",
      faqs: [
        {
          question: "Şile'deki yazlık villam için kamera sistemi nasıl planlanır?",
          answer: "Villa çevresi, bahçe, giriş kapısı ve dış cephe keşif sonrası analiz edilerek sezon dışı da çalışacak kamera planı hazırlanır.",
        },
        {
          question: "Şile'de tatil tesisi için kamera sistemi kurulumu yapılıyor mu?",
          answer: "Evet. Tesis girişi, havuz alanı, otopark ve bungalovlar için kapsamlı kamera planı hazırlanmaktadır.",
        },
        {
          question: "Şile'de kamera sistemi sezon dışında da çalışıyor mu?",
          answer: "Evet. Sistem yıl boyunca aktif kalır; internet bağlantısı üzerinden uzaktan erişim ve kayıt sağlanır.",
        },
      ],
    },
    "alarm-sistemi-kurulumu": {
      heroTitle: "Şile Alarm Sistemi Kurulumu",
      heroIntro:
        "Şile'nin sahil tatil tesislerinden sezon dışı boş kalan yazlıklara, Ağva'nın doğa içi konutlarından Şile Merkez dükkanlarına — Şile genelinde hırsızlık caydırıcı alarm sistemleri. GSM bağlantılı, 7/24 etkin.",
      whatsappMessage: "Merhaba, Şile'de alarm sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Şile'nin sezon dışında büyük bölümünün boşalması, alarm sistemini özellikle yazlık ve tatil tesisleri için vazgeçilmez kılıyor; GSM tabanlı sistemler internet olmadan da çalışır.",
      ctaTitle: "Şile'de Güvenliği Alarma Bağlayın",
      ctaSubtitle: "Yazlığınız, tesisiniz veya dükkanınız için Şile'de alarm keşfi ve teklif alın.",
      faqs: [
        {
          question: "Şile'deki yazlığım sezon dışında boş kalıyor, alarm sistemi önerilir mi?",
          answer: "Kesinlikle evet. GSM bağlantılı alarm sistemleri internet olmadan da çalışır; alarm anında doğrudan cep telefonunuza bildirim gönderilir.",
        },
        {
          question: "Şile'de tatil tesisi için alarm sistemi nasıl planlanır?",
          answer: "Tesis çevresi, bungalov kapıları, depo ve ofis alanları analiz edilerek bölge bazlı alarm planı oluşturulur.",
        },
        {
          question: "Şile'de alarm sistemi 7/24 izleme merkezine bağlanabiliyor mu?",
          answer: "Evet. Özel güvenlik izleme merkezine bağlı alarm sistemleri kurulmaktadır; alarm anında güvenlik müdahalesi sağlanır.",
        },
      ],
    },
    "kartli-gecis-sistemi-kurulumu": {
      heroTitle: "Şile Kartlı Geçiş Sistemi Kurulumu",
      heroIntro:
        "Şile'nin tatil köylerinden sahil otellerine, büyük yazlık sitelerinden Ağva'nın doğa kamplarına — giriş-çıkış kontrolünü kartlı geçiş sistemiyle profesyonelleştirin, misafir yönetimini kolaylaştırın.",
      whatsappMessage: "Merhaba, Şile'de kartlı geçiş sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Şile'nin tatil tesisleri ve büyük yazlık sitelerinde misafir ve personel erişimini dijital olarak yönetmek için kartlı geçiş sistemi güvenlik standardı haline geliyor.",
      ctaTitle: "Şile'de Giriş Kontrolünü Dijitalleştirin",
      ctaSubtitle: "Tesisiniz, siteniz veya oteliniz için Şile'de kartlı geçiş keşfi ve teklif alın.",
      faqs: [
        {
          question: "Şile'deki tatil köyüne kartlı geçiş sistemi kurulabilir mi?",
          answer: "Evet. Tesis ana girişi, bungalov kapıları ve ortak alanlar için kartlı veya RFID geçiş sistemi kurulmaktadır.",
        },
        {
          question: "Şile'deki büyük yazlık siteye araç bariyeri + kartlı giriş kurulabilir mi?",
          answer: "Evet. Araç bariyeri ve yaya girişi için kartlı okuyucu entegreli komple sistem sunulmaktadır.",
        },
        {
          question: "Şile'de kartlı geçiş sistemi misafir yönetimini destekler mi?",
          answer: "Evet. Geçici kart veya QR kod ile misafir erişimi tanımlanabilir; giriş-çıkış logları raporlanır.",
        },
      ],
    },
  },
};

const silivri: DistrictProfile = {
  name: "Silivri",
  slug: "silivri",
  locative: "Silivri'de",
  districtIntro:
    "İstanbul'un Avrupa Yakası'nın en batısında Marmara kıyısında yer alan Silivri; geniş tarım alanları, sahil yazlık bölgeleri, sanayi tesisleri ve büyüyen konut projeleriyle güvenlik sistemine olan talebin çeşitlendiği bir ilçedir.",
  landmarks: [
    "Silivri Merkez",
    "Silivri Sahili",
    "Selimpaşa",
    "Gümüşyaka",
    "Alibey",
    "Çantalar",
    "Kavaklı",
    "Silivri OSB",
    "TEM Otoyolu",
  ],
  nearbyDistricts: ["buyukcekmece", "catalca", "tekirdag"],
  services: {
    "kamera-sistemi-kurulumu": {
      heroTitle: "Silivri Kamera Sistemi Kurulumu",
      heroIntro:
        "Silivri'nin sahil yazlık bölgelerinden Selimpaşa'nın sanayi tesislerine, Silivri Merkez'in ticaret aksından büyüyen konut projelerine — Silivri'de işletme ve konut için profesyonel kamera güvenliği. Aynı gün keşif.",
      whatsappMessage: "Merhaba, Silivri'de kamera sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Silivri'nin sahil yazlık bölgelerinin sezon dışı boşalması ve OSB'nin sanayi tesisleri, kamera güvenliğini hem konut hem endüstriyel tarafta zorunlu kılıyor.",
      ctaTitle: "Silivri'de Kamera Güvenliğini Kurun",
      ctaSubtitle: "Yazlığınız, fabrikanız veya mağazanız için Silivri'de ücretsiz keşif alın.",
      faqs: [
        {
          question: "Silivri'deki yazlık villam için kamera sistemi nasıl planlanır?",
          answer: "Villa çevresi, bahçe ve giriş kapısı keşif sonrası analiz edilerek sezon dışı da çalışacak kamera planı hazırlanır.",
        },
        {
          question: "Silivri OSB'deki fabrikam için endüstriyel kamera sistemi kurulabilir mi?",
          answer: "Evet. Geniş açılı ve gece görüşlü endüstriyel IP kameralarla fabrika güvenliği sağlanmaktadır.",
        },
        {
          question: "Silivri'de kamera sistemi sezon dışında da çalışıyor mu?",
          answer: "Evet. Sistem yıl boyunca aktif kalır; internet bağlantısı üzerinden uzaktan erişim ve kayıt sağlanır.",
        },
      ],
    },
    "alarm-sistemi-kurulumu": {
      heroTitle: "Silivri Alarm Sistemi Kurulumu",
      heroIntro:
        "Silivri'nin sahil yazlıklarından Selimpaşa sanayi bölgesine, Silivri Merkez dükkanlarından konut projelerine — Silivri genelinde hırsızlık caydırıcı alarm sistemleri. GSM bağlantılı, 7/24 etkin.",
      whatsappMessage: "Merhaba, Silivri'de alarm sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Silivri'nin sahil yazlık bölgelerinde sezon dışı boş kalan konutlar ve OSB'nin gece saatlerindeki endüstriyel tesisleri, alarm sistemini birincil güvenlik yatırımı haline getiriyor.",
      ctaTitle: "Silivri'de Güvenliği Alarma Bağlayın",
      ctaSubtitle: "Yazlığınız, fabrikanız veya dükkanınız için Silivri'de alarm keşfi ve teklif alın.",
      faqs: [
        {
          question: "Silivri'deki yazlığım sezon dışında boş kalıyor, alarm sistemi önerilir mi?",
          answer: "Evet. GSM bağlantılı alarm sistemleri internet olmadan da çalışır; alarm anında doğrudan cep telefonunuza bildirim gönderilir.",
        },
        {
          question: "Silivri'de fabrika için alarm sistemi nasıl planlanır?",
          answer: "Tesis çevresi, giriş kapıları ve depo alanları analiz edilerek bölge bazlı alarm planı hazırlanır.",
        },
        {
          question: "Silivri'de alarm sistemi 7/24 izleme merkezine bağlanabiliyor mu?",
          answer: "Evet. Özel güvenlik izleme merkezine bağlı alarm sistemleri kurulmaktadır.",
        },
      ],
    },
    "kartli-gecis-sistemi-kurulumu": {
      heroTitle: "Silivri Kartlı Geçiş Sistemi Kurulumu",
      heroIntro:
        "Silivri'nin büyük sahil sitelerinden OSB sanayi tesislerine, yazlık konut topluluklarından Silivri Merkez ticari yapılarına — giriş-çıkış kontrolünü kartlı geçiş sistemiyle yönetin.",
      whatsappMessage: "Merhaba, Silivri'de kartlı geçiş sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Silivri'nin büyük sahil siteleri ve OSB'nin endüstriyel tesislerinde personel ve araç erişimini kontrol altına almak için kartlı geçiş sistemi güvenlik standardı haline geliyor.",
      ctaTitle: "Silivri'de Giriş Kontrolünü Dijitalleştirin",
      ctaSubtitle: "Siteniz, fabrikanız veya tesisiniz için Silivri'de kartlı geçiş keşfi ve teklif alın.",
      faqs: [
        {
          question: "Silivri'deki büyük sahil sitesine araç bariyeri + kartlı giriş kurulabilir mi?",
          answer: "Evet. Araç bariyeri ve yaya girişi için kartlı okuyucu entegreli komple sistem sunulmaktadır.",
        },
        {
          question: "Silivri OSB'deki fabrikama kartlı geçiş nasıl kurulur?",
          answer: "Ana giriş, vardiya kapıları ve bölüm erişimleri keşif sonrası belirlenerek okuyucu planı hazırlanır.",
        },
        {
          question: "Silivri'de kartlı geçiş yönetimi nasıl yapılır?",
          answer: "Web tabanlı yönetim paneli üzerinden kart tanımlama, silme ve erişim raporları anlık olarak yönetilebilir.",
        },
      ],
    },
  },
};

const catalca: DistrictProfile = {
  name: "Çatalca",
  slug: "catalca",
  locative: "Çatalca'da",
  districtIntro:
    "İstanbul'un Avrupa Yakası'nın en geniş ilçesi olan Çatalca; büyük orman alanları, tarım tesisleri, sanayi yapıları ve doğa içi konut bölgeleriyle güvenlik sistemine olan talebin giderek arttığı gelişen bir ilçedir.",
  landmarks: [
    "Çatalca Merkez",
    "Ferhatpaşa",
    "Yalıköy",
    "Karaburun",
    "Çilingir",
    "Kabakça",
    "Muratbey",
    "TEM Otoyolu",
    "Çatalca Sanayi",
  ],
  nearbyDistricts: ["silivri", "arnavutkoy", "buyukcekmece", "eyupsultan"],
  services: {
    "kamera-sistemi-kurulumu": {
      heroTitle: "Çatalca Kamera Sistemi Kurulumu",
      heroIntro:
        "Çatalca'nın sanayi tesislerinden orman içi yazlık konutlara, Çatalca Merkez'in ticaret aksından tarım tesislerine — Çatalca'da her işletme ve tesis için profesyonel kamera güvenliği. Aynı gün keşif.",
      whatsappMessage: "Merhaba, Çatalca'da kamera sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Çatalca'nın geniş ve seyrek nüfuslu yapısı, sanayi ve tarım tesislerinin gece saatlerindeki güvenlik açığını artırarak kamera güvenliğini birincil yatırım haline getiriyor.",
      ctaTitle: "Çatalca'da Kamera Güvenliğini Kurun",
      ctaSubtitle: "Fabrikanız, çiftliğiniz veya konutunuz için Çatalca'da ücretsiz keşif alın.",
      faqs: [
        {
          question: "Çatalca'daki sanayi tesisim için kamera sistemi nasıl planlanır?",
          answer: "Tesis çevresi, giriş kapıları, depo ve üretim alanları keşif sonrası analiz edilerek geniş alan kamera planı hazırlanır.",
        },
        {
          question: "Çatalca'da tarım tesisi veya çiftlik için kamera kurulumu yapılıyor mu?",
          answer: "Evet. Geniş açılı ve gece görüşlü kameralarla tarım alanları ve hayvan barınakları için güvenlik planı hazırlanmaktadır.",
        },
        {
          question: "Çatalca'da kamera sistemi sezon dışında da çalışıyor mu?",
          answer: "Evet. Sistem yıl boyunca aktif kalır; GSM veya internet bağlantısı üzerinden uzaktan erişim sağlanır.",
        },
      ],
    },
    "alarm-sistemi-kurulumu": {
      heroTitle: "Çatalca Alarm Sistemi Kurulumu",
      heroIntro:
        "Çatalca'nın sanayi tesislerinden tarım alanlarına, orman içi yazlık konutlardan Çatalca Merkez dükkanlarına — Çatalca genelinde hırsızlık caydırıcı alarm sistemleri. GSM bağlantılı, 7/24 etkin.",
      whatsappMessage: "Merhaba, Çatalca'da alarm sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Çatalca'nın izole ve geniş alanlı sanayi ve tarım tesislerinin gece saatlerindeki güvenlik açığı, GSM bağlantılı alarm sistemini birincil koruma katmanı yapıyor.",
      ctaTitle: "Çatalca'da Güvenliği Alarma Bağlayın",
      ctaSubtitle: "Fabrikanız, çiftliğiniz veya konutunuz için Çatalca'da alarm keşfi ve teklif alın.",
      faqs: [
        {
          question: "Çatalca'daki çiftliğim için alarm sistemi önerilir mi?",
          answer: "Evet. Geniş alanlı çiftliklerde GSM bağlantılı alarm ve hareket sensörleriyle kesintisiz koruma sağlanabilir.",
        },
        {
          question: "Çatalca'da alarm sistemi internet olmadan da çalışır mı?",
          answer: "Evet. GSM bağlantılı alarm sistemleri internet olmadan da aktif kalır ve alarm anında doğrudan cep telefonunuza bildirim gönderir.",
        },
        {
          question: "Çatalca'da sanayi tesisi için alarm sistemi nasıl planlanır?",
          answer: "Tesis çevresi, ana giriş kapıları ve depo alanları analiz edilerek bölge bazlı alarm planı oluşturulur.",
        },
      ],
    },
    "kartli-gecis-sistemi-kurulumu": {
      heroTitle: "Çatalca Kartlı Geçiş Sistemi Kurulumu",
      heroIntro:
        "Çatalca'nın sanayi tesislerinden büyük tarım işletmelerine, konut sitelerinden ticari yapılara — giriş-çıkış kontrolünü kartlı geçiş sistemiyle yönetin, yetkisiz girişlerin önüne geçin.",
      whatsappMessage: "Merhaba, Çatalca'da kartlı geçiş sistemi kurulumu için bilgi almak istiyorum.",
      commercialAngle:
        "Çatalca'nın sanayi ve tarım tesislerinde personel ile araç erişimini dijital olarak kontrol altına almak için kartlı geçiş sistemi güvenlik standardı haline geliyor.",
      ctaTitle: "Çatalca'da Giriş Kontrolünü Dijitalleştirin",
      ctaSubtitle: "Fabrikanız, çiftliğiniz veya siteniz için Çatalca'da kartlı geçiş keşfi ve teklif alın.",
      faqs: [
        {
          question: "Çatalca'daki sanayi tesisime kartlı geçiş sistemi nasıl kurulur?",
          answer: "Ana giriş, vardiya kapıları ve hassas bölüm erişimleri keşif sonrası belirlenerek okuyucu planı hazırlanır.",
        },
        {
          question: "Çatalca'daki siteye araç bariyeri + kartlı giriş kurulabilir mi?",
          answer: "Evet. Araç bariyeri ve yaya girişi için kartlı okuyucu entegreli komple sistem sunulmaktadır.",
        },
        {
          question: "Çatalca'da kartlı geçiş yönetimi nasıl yapılır?",
          answer: "Web tabanlı yönetim paneli üzerinden kart tanımlama, silme ve erişim raporları anlık olarak yönetilebilir.",
        },
      ],
    },
  },
};

// ---------------------------------------------------------------------------
// Registry — Tier 1 districts
// ---------------------------------------------------------------------------

export const istanbulDistrictProfiles: Record<string, DistrictProfile> = {
  kadikoy,
  besiktas,
  atasehir,
  sisli,
  umraniye,
  basaksehir,
  pendik,
  // Tier 2
  zeytinburnu,
  bakirkoy,
  fatih,
  avcilar,
  arnavutkoy,
  bayrampasa,
  gungoren,
  bahcelievler,
  // Tier 3
  maltepe,
  kartal,
  kucukcekmece,
  beylikduzu,
  esenyurt,
  bagcilar,
  kagithane,
  beyoglu,
  // Tier 4
  sultangazi,
  gaziosmanpasa,
  eyupsultan,
  sariyer,
  uskudar,
  sultanbeyli,
  tuzla,
  // Tier 5
  beykoz,
  sancaktepe,
  cekmekoy,
  esenler,
  buyukcekmece,
  // Tier 6 — tamamlayıcı ilçeler
  adalar,
  sile,
  silivri,
  catalca,
};

/** Services selected for district page rollout */
export const districtPilotServiceSlugs = [
  "kamera-sistemi-kurulumu",
  "alarm-sistemi-kurulumu",
  "kartli-gecis-sistemi-kurulumu",
] as const;

export type DistrictPilotServiceSlug =
  (typeof districtPilotServiceSlugs)[number];

/**
 * District/service combos explicitly approved for indexing and sitemap emission.
 * Content readiness alone is not enough to become an organic winner.
 */
export const approvedDistrictServicePairs = Object.freeze(
  Object.values(istanbulDistrictProfiles).flatMap((profile) =>
    districtPilotServiceSlugs
      .filter((serviceSlug) => Boolean(profile.services[serviceSlug]))
      .map((serviceSlug) => ({
        city: "istanbul" as const,
        district: profile.slug,
        service: serviceSlug,
      })),
  ),
);

/** Unified profile lookup across all supported cities (Istanbul + Tekirdağ) */
const allDistrictProfiles: Record<string, DistrictProfile> = {
  ...istanbulDistrictProfiles,
  ...tekirdagDistrictProfiles,
};

export function getDistrictProfile(
  districtSlug: string,
): DistrictProfile | undefined {
  return allDistrictProfiles[districtSlug];
}

export function getDistrictServiceContent(
  districtSlug: string,
  serviceSlug: string,
): DistrictServiceContent | undefined {
  return allDistrictProfiles[districtSlug]?.services[serviceSlug];
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

export function getApprovedDistrictServiceParams() {
  return [
    ...approvedDistrictServicePairs,
    ...getApprovedTekirdagDistrictServiceParams(),
  ];
}
