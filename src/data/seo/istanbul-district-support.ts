import type { SeoDistrict } from "./districts";
import type { DistrictProfile } from "./istanbul-district-content";
import type { SeoService } from "./services";

interface DistrictSupportCard {
  title: string;
  description: string;
}

interface DistrictSupportLink {
  href: string;
  label: string;
  description: string;
}

export interface IstanbulDistrictSupportContent {
  eyebrow: string;
  title: string;
  description: string;
  segmentCards: DistrictSupportCard[];
  supportTitle: string;
  supportDescription: string;
  supportLinks: DistrictSupportLink[];
  problemTitle: string;
  problemDescription: string;
  problemLinks: DistrictSupportLink[];
}

function getDistrictDemandCards(
  districtSlug: string,
  serviceSlug: string,
): DistrictSupportCard[] {
  const byDistrict: Record<string, Record<string, DistrictSupportCard[]>> = {
    kadikoy: {
      "kamera-sistemi-kurulumu": [
        {
          title: "Cadde Mağazaları",
          description:
            "Bağdat Caddesi ve çarşı hattındaki mağazalar giriş, kasa ve depo görünürlüğü ister.",
        },
        {
          title: "Konut ve Apartmanlar",
          description:
            "Moda, Fenerbahçe ve Caferağa tarafında apartman ve site girişleri daha kontrollü izleme arıyor.",
        },
        {
          title: "Ofis ve Klinikler",
          description:
            "Kozyatağı ve Hasanpaşa çevresindeki profesyonel alanlar kayıt sürekliliği ve uzaktan erişim bekliyor.",
        },
      ],
      "alarm-sistemi-kurulumu": [
        {
          title: "Perakende Noktaları",
          description:
            "Mesai sonrası alarm devreye alma ve anlık bildirim, çarşı bölgesinde en kritik ihtiyaç.",
        },
        {
          title: "Daire ve Rezidanslar",
          description:
            "Yoğun konut dokusunda kapı, balkon ve iç hareket alarmı talebi öne çıkar.",
        },
        {
          title: "Butik İşletmeler",
          description:
            "Kafe, restoran ve butik işletmeler hızlı kurulum ve mobil kontrol ister.",
        },
      ],
      "kartli-gecis-sistemi-kurulumu": [
        {
          title: "Apartman ve Siteler",
          description:
            "Yüksek sirkülasyonlu apartman girişleri kontrollü kapı açma ve log takibi istiyor.",
        },
        {
          title: "Ofis Katları",
          description:
            "Kozyatağı çevresindeki ofisler personel ve ziyaretçi akışlarını ayrı yönetmek istiyor.",
        },
        {
          title: "Ticari Binalar",
          description:
            "Çok kullanıcılı yapılarda kart, kilit ve raporlama senaryosu birlikte talep ediliyor.",
        },
      ],
    },
    besiktas: {
      "kamera-sistemi-kurulumu": [
        {
          title: "Plaza ve Ofisler",
          description:
            "Levent hattında giriş-çıkış, ortak alan ve otopark izleme doğrudan satın alma kriteri.",
        },
        {
          title: "Villa ve Rezidanslar",
          description:
            "Etiler ve Ulus segmenti daha yüksek çözünürlük, çevre hattı ve uzaktan erişim bekliyor.",
        },
        {
          title: "Prestijli İşletmeler",
          description:
            "Bebek ve Ortaköy tarafında marka imajını bozmayan temiz kurulum daha önemli.",
        },
      ],
      "alarm-sistemi-kurulumu": [
        {
          title: "Lüks Konutlar",
          description:
            "Çok bölgeli alarm, dış çevre sensörü ve mobil bildirim bu segmentte standart beklenti.",
        },
        {
          title: "Cadde Mağazaları",
          description:
            "Vitrin, arka ofis ve depo için ayrılmış alarm senaryoları karar sürecini hızlandırır.",
        },
        {
          title: "Kurumsal Ofisler",
          description:
            "Alarm ile kamera entegrasyonu ve kullanıcı bazlı yetkilendirme öne çıkar.",
        },
      ],
      "kartli-gecis-sistemi-kurulumu": [
        {
          title: "Kurumsal Girişler",
          description:
            "Levent ve Maslak aksında ofis girişleri için hızlı ve raporlanabilir erişim kontrolü beklenir.",
        },
        {
          title: "Rezidans Projeleri",
          description:
            "Kiracı sirkülasyonu yüksek yapılarda kart tanımlama ve iptal süreçleri önemlidir.",
        },
        {
          title: "Turnike ve Kapı Sistemleri",
          description:
            "Turnike, manyetik kilit ve ziyaretçi akışı tek senaryoda çözülmek istenir.",
        },
      ],
    },
    atasehir: {
      "kamera-sistemi-kurulumu": [
        {
          title: "Finans ve Plaza Katları",
          description:
            "IFM çevresindeki ofisler yüksek kayıt disiplini ve merkezi izleme ister.",
        },
        {
          title: "Rezidans Siteleri",
          description:
            "Site girişleri, otoparklar ve ortak alanlar için geniş kapsama talebi güçlüdür.",
        },
        {
          title: "AVM ve Ticari Alanlar",
          description:
            "Watergarden çevresindeki işletmeler yoğun ziyaretçi akışını kayıt altına almak ister.",
        },
      ],
      "alarm-sistemi-kurulumu": [
        {
          title: "Yeni Teslim Konutlar",
          description:
            "Yeni taşınan kullanıcılar kablosuz ve hızlı devreye alınan alarm sistemine yönelir.",
        },
        {
          title: "Ofis ve Muhasebe Alanları",
          description:
            "Finans merkezine yakın ofisler anlık bildirim ve kullanıcı bazlı alarm yönetimi ister.",
        },
        {
          title: "Mağaza ve Showroomlar",
          description:
            "Mesai dışı koruma ve kamera entegrasyonu karar verirken en çok sorulan başlıklardır.",
        },
      ],
      "kartli-gecis-sistemi-kurulumu": [
        {
          title: "Plaza Girişleri",
          description:
            "Yüksek personel trafiği olan binalar kart, ziyaretçi ve zaman kısıtı yönetimi istiyor.",
        },
        {
          title: "Rezidans ve Site Kapıları",
          description:
            "Sakin, ziyaretçi ve otopark akışlarını birlikte kontrol edebilen yapı tercih ediliyor.",
        },
        {
          title: "Kurumsal Alanlar",
          description:
            "Kat bazlı yetkilendirme ve loglama, IFM çevresi için temel ihtiyaç haline geldi.",
        },
      ],
    },
  };

  return (
    byDistrict[districtSlug]?.[serviceSlug] ?? [
      {
        title: "Ticari Noktalar",
        description:
          "İlçe bazında en çok talep üreten işletme ve saha kullanımları için hizmet planlanır.",
      },
      {
        title: "Konut Projeleri",
        description:
          "Apartman, site ve rezidans yapıları daha kontrollü giriş ve izleme ihtiyacı taşır.",
      },
      {
        title: "Operasyonel Süreklilik",
        description:
          "Kurulum sonrası servis, bakım ve arıza çözümü aynı müşteri yolculuğunun parçasıdır.",
      },
    ]
  );
}

function getSupportLinks(serviceSlug: string): DistrictSupportLink[] {
  if (serviceSlug === "kamera-sistemi-kurulumu") {
    return [
      {
        href: "/istanbul-kamera-sistemi-kurulumu",
        label: "İstanbul Kamera Sistemi Kurulumu",
        description:
          "İlçe sayfasını İstanbul ana money page ile bağlayarak ana ticari kümeyi güçlendirir.",
      },
      {
        href: "/istanbul-kamera-teknik-servis",
        label: "İstanbul Kamera Teknik Servis",
        description:
          "Kurulum sonrası destek ve arıza ihtiyacı olan kullanıcıları servis lead'ine çevirir.",
      },
      {
        href: "/istanbul-kamera-bakim-servisi",
        label: "İstanbul Kamera Bakım Servisi",
        description:
          "Site, mağaza ve ofis müşterilerini recurring bakım ihtiyacına taşır.",
      },
      {
        href: "/uzaktan-kamera-izleme",
        label: "Uzaktan Kamera İzleme",
        description:
          "Çok lokasyonlu veya merkezi izleme isteyen işletmeler için yüksek değerli support path açar.",
      },
    ];
  }

  if (serviceSlug === "alarm-sistemi-kurulumu") {
    return [
      {
        href: "/istanbul-alarm-sistemi",
        label: "İstanbul Alarm Sistemi",
        description:
          "İlçe alarm talebini İstanbul winner URL üzerinde toplar ve canonical odağı korur.",
      },
      {
        href: "/isyeri-guvenlik-sistemi",
        label: "İşyeri Güvenlik Sistemi",
        description:
          "Mağaza, ofis ve işletme karar vericileri için daha geniş ticari çözüm sayfasına taşır.",
      },
      {
        href: "/bakim-servis-uzaktan-izleme",
        label: "Bakım, Servis ve Uzaktan İzleme",
        description:
          "Alarm sistemini bakım ve devam eden servis gelirine bağlar.",
      },
      {
        href: "/guvenlik-sistemi-teknik-servis",
        label: "Güvenlik Sistemi Teknik Servis",
        description:
          "Yeni kurulum yerine mevcut sistem sorunu yaşayan kullanıcılar için net rota sunar.",
      },
    ];
  }

  return [
    {
      href: "/istanbul-kartli-gecis-sistemi",
      label: "İstanbul Kartlı Geçiş Sistemi",
      description:
        "İlçe bazlı erişim kontrol talebini ana İstanbul ticari sayfasına konsolide eder.",
    },
    {
      href: "/isyeri-guvenlik-sistemi",
      label: "İşyeri Güvenlik Sistemi",
      description:
        "Kartlı geçiş satın alan ofis ve işletmeleri daha geniş güvenlik çözümüne taşır.",
    },
    {
      href: "/guvenlik-sistemi-teknik-servis",
      label: "Güvenlik Sistemi Teknik Servis",
      description:
        "Mevcut geçiş sisteminde arıza yaşayan kullanıcılar için servis katmanını açar.",
    },
    {
      href: "/bakim-servis-uzaktan-izleme",
      label: "Bakım, Servis ve Uzaktan İzleme",
      description:
        "Kurulum sonrası sürdürülebilir bakım ve servis ilişkisini destekler.",
    },
  ];
}

function getProblemLinks(serviceSlug: string): DistrictSupportLink[] {
  if (serviceSlug === "kamera-sistemi-kurulumu") {
    return [
      {
        href: "/sorun/kamera-goruntu-gelmiyor",
        label: "Kamera Görüntü Gelmiyor",
        description:
          "Kurulu sistemde en sık karşılaşılan görüntü kaybı sorunu için arıza lead'i üretir.",
      },
      {
        href: "/sorun/kamera-offline",
        label: "Kamera Offline Sorunu",
        description:
          "Ağ, PoE ve uzaktan erişim problemlerinde teknik servis intent'ini yakalar.",
      },
      {
        href: "/sorun/kayit-yapilmiyor",
        label: "Kayıt Yapılmıyor",
        description:
          "NVR, HDD ve kayıt sürekliliği problemlerini bakım-servis gelirine bağlar.",
      },
    ];
  }

  if (serviceSlug === "alarm-sistemi-kurulumu") {
    return [
      {
        href: "/sorun/alarm-arizalari",
        label: "Alarm Arızaları",
        description:
          "Yanlış alarm, sensör hatası ve panel problemi yaşayan kullanıcılar için en net destek sayfası.",
      },
      {
        href: "/guvenlik-sistemi-teknik-servis",
        label: "Güvenlik Sistemi Teknik Servis",
        description:
          "Kurulu alarm sisteminde sahaya çıkılması gereken sorunları servis formuna taşır.",
      },
    ];
  }

  return [
    {
      href: "/sorun/kartli-gecis-calismiyor",
      label: "Kartlı Geçiş Çalışmıyor",
      description:
        "Kapı açılmama, kart okumama ve turnike arızası gibi acil sorunları toplar.",
    },
    {
      href: "/guvenlik-sistemi-teknik-servis",
      label: "Güvenlik Sistemi Teknik Servis",
      description:
        "Geçiş kontrol arızalarını tek servis hattına yönlendirerek lead kaçışını azaltır.",
    },
  ];
}

export function getIstanbulDistrictSupportContent(
  profile: DistrictProfile,
  seoDistrict: SeoDistrict,
  seoService: SeoService,
): IstanbulDistrictSupportContent {
  const marketLabel =
    seoDistrict.marketType === "commercial"
      ? "ticari yoğunluk"
      : seoDistrict.marketType === "residential"
        ? "konut yoğunluğu"
        : seoDistrict.marketType === "industrial"
          ? "operasyonel yoğunluk"
          : "karma talep";

  return {
    eyebrow: `${profile.name} lead modeli`,
    title: `${profile.name} için ${seoService.name.toLocaleLowerCase("tr-TR")} talebi nasıl toplanmalı?`,
    description: `${profile.name} ${marketLabel} taşıyan bir Tier ${seoDistrict.tier} ilçe segmenti. Bu yüzden ilçe sayfası sadece lokal varyasyon değil; ana İstanbul money page, servis sayfaları ve problem-intent kümeleri arasında ticari bir köprü gibi çalışmalı.`,
    segmentCards: getDistrictDemandCards(profile.slug, seoService.slug),
    supportTitle: `${profile.name} sayfasını lead üretimine bağlayan support path'ler`,
    supportDescription:
      "İlçe sayfasından çıkan bağlantılar yalnızca gezinme amaçlı olmamalı. Ana money page, bakım-servis ve daha geniş ticari çözüm sayfaları birlikte bağlanmalı.",
    supportLinks: getSupportLinks(seoService.slug),
    problemTitle: `${profile.name} sonrası servis ve arıza akışı`,
    problemDescription:
      "Kurulum lead'i ile servis lead'i ayrı düşünülmemeli. Bu ilçe sayfası, sorun yaşayan kullanıcıları da doğru arıza veya teknik servis sayfalarına taşımalı.",
    problemLinks: getProblemLinks(seoService.slug),
  };
}
