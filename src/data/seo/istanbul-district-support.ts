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
          title: "Cadde Magazalari",
          description:
            "Bagdat Caddesi ve carsi hattindaki magazalar giris, kasa ve depo gorunurlugu ister.",
        },
        {
          title: "Konut ve Apartmanlar",
          description:
            "Moda, Fenerbahce ve Caferaga tarafinda apartman ve site girisleri daha kontrollu izleme ariyor.",
        },
        {
          title: "Ofis ve Klinikler",
          description:
            "Kozyatagi ve Hasanpasa cevresindeki profesyonel alanlar kayit surekliligi ve uzaktan erisim bekliyor.",
        },
      ],
      "alarm-sistemi-kurulumu": [
        {
          title: "Perakende Noktalari",
          description:
            "Mesai sonrasi alarm devreye alma ve anlik bildirim, carsi bolgesinde en kritik ihtiyac.",
        },
        {
          title: "Daire ve Rezidanslar",
          description:
            "Yogun konut dokusunda kapi, balkon ve ic hareket alarmi talebi one cikar.",
        },
        {
          title: "Butik Isletmeler",
          description:
            "Kafe, restoran ve butik isletmeler hizli kurulum ve mobil kontrol ister.",
        },
      ],
      "kartli-gecis-sistemi-kurulumu": [
        {
          title: "Apartman ve Siteler",
          description:
            "Yuksek sirkulasyonlu apartman girisleri kontrollu kapi acma ve log takibi istiyor.",
        },
        {
          title: "Ofis Katlari",
          description:
            "Kozyatagi cevresindeki ofisler personel ve ziyaretci akislarini ayri yonetmek istiyor.",
        },
        {
          title: "Ticari Binalar",
          description:
            "Cok kullanicili yapilarda kart, kilit ve raporlama senaryosu birlikte talep ediliyor.",
        },
      ],
    },
    besiktas: {
      "kamera-sistemi-kurulumu": [
        {
          title: "Plaza ve Ofisler",
          description:
            "Levent hattinda giris-cikis, ortak alan ve otopark izleme dogrudan satin alma kriteri.",
        },
        {
          title: "Villa ve Rezidanslar",
          description:
            "Etiler ve Ulus segmenti daha yuksek cozunurluk, cevre hatti ve uzaktan erisim bekliyor.",
        },
        {
          title: "Prestijli Isletmeler",
          description:
            "Bebek ve Ortakoy tarafinda marka imajini bozmayan temiz kurulum daha onemli.",
        },
      ],
      "alarm-sistemi-kurulumu": [
        {
          title: "Luks Konutlar",
          description:
            "Cok bolgeli alarm, dis cevre sensoru ve mobil bildirim bu segmentte standart beklenti.",
        },
        {
          title: "Cadde Magazalari",
          description:
            "Vitrin, arka ofis ve depo icin ayrilmis alarm senaryolari karar surecini hizlandirir.",
        },
        {
          title: "Kurumsal Ofisler",
          description:
            "Alarm ile kamera entegrasyonu ve kullanici bazli yetkilendirme one cikar.",
        },
      ],
      "kartli-gecis-sistemi-kurulumu": [
        {
          title: "Kurumsal Girisler",
          description:
            "Levent ve Maslak aksinda ofis girisleri icin hizli ve raporlanabilir erisim kontrolu beklenir.",
        },
        {
          title: "Rezidans Projeleri",
          description:
            "Kiraci sirkulasyonu yuksek yapilarda kart tanimlama ve iptal surecleri onemlidir.",
        },
        {
          title: "Turnike ve Kapi Sistemleri",
          description:
            "Turnike, manyetik kilit ve ziyaretci akisi tek senaryoda cozulmek istenir.",
        },
      ],
    },
    atasehir: {
      "kamera-sistemi-kurulumu": [
        {
          title: "Finans ve Plaza Katlari",
          description:
            "IFM cevresindeki ofisler yuksek kayit disiplini ve merkezi izleme ister.",
        },
        {
          title: "Rezidans Siteleri",
          description:
            "Site girisleri, otoparklar ve ortak alanlar icin genis kapsama talebi gucludur.",
        },
        {
          title: "AVM ve Ticari Alanlar",
          description:
            "Watergarden cevresindeki isletmeler yogun ziyaretci akisini kayit altina almak ister.",
        },
      ],
      "alarm-sistemi-kurulumu": [
        {
          title: "Yeni Teslim Konutlar",
          description:
            "Yeni tasinan kullanicilar kablosuz ve hizli devreye alinan alarm sistemine yonelir.",
        },
        {
          title: "Ofis ve Muhasebe Alanlari",
          description:
            "Finans merkezine yakin ofisler anlik bildirim ve kullanici bazli alarm yonetimi ister.",
        },
        {
          title: "Magaza ve Showroomlar",
          description:
            "Mesai disi koruma ve kamera entegrasyonu karar verirken en cok sorulan basliklardir.",
        },
      ],
      "kartli-gecis-sistemi-kurulumu": [
        {
          title: "Plaza Girisleri",
          description:
            "Yuksek personel trafigi olan binalar kart, ziyaretci ve zaman kisiti yonetimi istiyor.",
        },
        {
          title: "Rezidans ve Site Kapilari",
          description:
            "Sakin, ziyaretci ve otopark akislarini birlikte kontrol edebilen yapi tercih ediliyor.",
        },
        {
          title: "Kurumsal Alanlar",
          description:
            "Kat bazli yetkilendirme ve loglama, IFM cevresi icin temel ihtiyac haline geldi.",
        },
      ],
    },
  };

  return (
    byDistrict[districtSlug]?.[serviceSlug] ?? [
      {
        title: "Ticari Noktalar",
        description:
          "Ilce bazinda en cok talep ureten isletme ve saha kullanimlari icin hizmet planlanir.",
      },
      {
        title: "Konut Projeleri",
        description:
          "Apartman, site ve rezidans yapilari daha kontrollu giris ve izleme ihtiyaci tasir.",
      },
      {
        title: "Operasyonel Sureklilik",
        description:
          "Kurulum sonrasi servis, bakim ve ariza cozumu ayni musteri yolculugunun parcasidir.",
      },
    ]
  );
}

function getSupportLinks(serviceSlug: string): DistrictSupportLink[] {
  if (serviceSlug === "kamera-sistemi-kurulumu") {
    return [
      {
        href: "/istanbul-kamera-sistemi-kurulumu",
        label: "Istanbul Kamera Sistemi Kurulumu",
        description:
          "Ilce sayfasini Istanbul ana money page ile baglayarak ana ticari kumeyi guclendirir.",
      },
      {
        href: "/istanbul-kamera-teknik-servis",
        label: "Istanbul Kamera Teknik Servis",
        description:
          "Kurulum sonrasi destek ve ariza ihtiyaci olan kullanicilari servis lead'ine cevirir.",
      },
      {
        href: "/istanbul-kamera-bakim-servisi",
        label: "Istanbul Kamera Bakim Servisi",
        description:
          "Site, magaza ve ofis musterilerini recurring bakim ihtiyacina tasir.",
      },
      {
        href: "/uzaktan-kamera-izleme",
        label: "Uzaktan Kamera Izleme",
        description:
          "Cok lokasyonlu veya merkezi izleme isteyen isletmeler icin yuksek degerli support path acar.",
      },
    ];
  }

  if (serviceSlug === "alarm-sistemi-kurulumu") {
    return [
      {
        href: "/istanbul-alarm-sistemi",
        label: "Istanbul Alarm Sistemi",
        description:
          "Ilce alarm talebini Istanbul winner URL uzerinde toplar ve canonical odagi korur.",
      },
      {
        href: "/isyeri-guvenlik-sistemi",
        label: "Isyeri Guvenlik Sistemi",
        description:
          "Magaza, ofis ve isletme karar vericileri icin daha genis ticari cozum sayfasina tasir.",
      },
      {
        href: "/bakim-servis-uzaktan-izleme",
        label: "Bakim, Servis ve Uzaktan Izleme",
        description:
          "Alarm sistemini bakim ve devam eden servis gelirine baglar.",
      },
      {
        href: "/guvenlik-sistemi-teknik-servis",
        label: "Guvenlik Sistemi Teknik Servis",
        description:
          "Yeni kurulum yerine mevcut sistem sorunu yasayan kullanicilar icin net rota sunar.",
      },
    ];
  }

  return [
    {
      href: "/istanbul-kartli-gecis-sistemi",
      label: "Istanbul Kartli Gecis Sistemi",
      description:
        "Ilce bazli erisim kontrol talebini ana Istanbul ticari sayfasina konsolide eder.",
    },
    {
      href: "/isyeri-guvenlik-sistemi",
      label: "Isyeri Guvenlik Sistemi",
      description:
        "Kartli gecis satin alan ofis ve isletmeleri daha genis guvenlik cozumune tasir.",
    },
    {
      href: "/guvenlik-sistemi-teknik-servis",
      label: "Guvenlik Sistemi Teknik Servis",
      description:
        "Mevcut gecis sisteminde ariza yasayan kullanicilar icin servis katmanini acar.",
    },
    {
      href: "/bakim-servis-uzaktan-izleme",
      label: "Bakim, Servis ve Uzaktan Izleme",
      description:
        "Kurulum sonrasi surdurulebilir bakim ve servis iliskisini destekler.",
    },
  ];
}

function getProblemLinks(serviceSlug: string): DistrictSupportLink[] {
  if (serviceSlug === "kamera-sistemi-kurulumu") {
    return [
      {
        href: "/sorun/kamera-goruntu-gelmiyor",
        label: "Kamera Goruntu Gelmiyor",
        description:
          "Kurulu sistemde en sik karsilasilan goruntu kaybi sorunu icin ariza lead'i uretir.",
      },
      {
        href: "/sorun/kamera-offline",
        label: "Kamera Offline Sorunu",
        description:
          "Ag, PoE ve uzaktan erisim problemlerinde teknik servis intent'ini yakalar.",
      },
      {
        href: "/sorun/kayit-yapilmiyor",
        label: "Kayit Yapilmiyor",
        description:
          "NVR, HDD ve kayit surekliligi problemlerini bakim-servis gelirine baglar.",
      },
    ];
  }

  if (serviceSlug === "alarm-sistemi-kurulumu") {
    return [
      {
        href: "/sorun/alarm-arizalari",
        label: "Alarm Arizalari",
        description:
          "Yanlis alarm, sensor hatasi ve panel problemi yasayan kullanicilar icin en net destek sayfasi.",
      },
      {
        href: "/guvenlik-sistemi-teknik-servis",
        label: "Guvenlik Sistemi Teknik Servis",
        description:
          "Kurulu alarm sisteminde sahaya cikilmasi gereken sorunlari servis formuna tasir.",
      },
    ];
  }

  return [
    {
      href: "/sorun/kartli-gecis-calismiyor",
      label: "Kartli Gecis Calismiyor",
      description:
        "Kapi acilmama, kart okumama ve turnike arizasi gibi acil sorunlari toplar.",
    },
    {
      href: "/guvenlik-sistemi-teknik-servis",
      label: "Guvenlik Sistemi Teknik Servis",
      description:
        "Gecis kontrol arizalarini tek servis hattina yonlendirerek lead kacisini azaltir.",
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
      ? "ticari yogunluk"
      : seoDistrict.marketType === "residential"
        ? "konut yogunlugu"
        : seoDistrict.marketType === "industrial"
          ? "operasyonel yogunluk"
          : "karma talep";

  return {
    eyebrow: `${profile.name} lead modeli`,
    title: `${profile.name} icin ${seoService.name.toLocaleLowerCase("tr-TR")} talebi nasil toplanmali?`,
    description: `${profile.name} ${marketLabel} tasiyan bir Tier ${seoDistrict.tier} ilce segmenti. Bu yuzden ilce sayfasi sadece lokal varyasyon degil; ana Istanbul money page, servis sayfalari ve problem-intent kumeleri arasinda ticari bir kopru gibi calismali.`,
    segmentCards: getDistrictDemandCards(profile.slug, seoService.slug),
    supportTitle: `${profile.name} sayfasini lead uretimine baglayan support path'ler`,
    supportDescription:
      "Ilce sayfasindan cikan baglantilar yalnizca gezinme amacli olmamali. Ana money page, bakim-servis ve daha genis ticari cozum sayfalari birlikte baglanmali.",
    supportLinks: getSupportLinks(seoService.slug),
    problemTitle: `${profile.name} sonrasi servis ve ariza akisi`,
    problemDescription:
      "Kurulum lead'i ile servis lead'i ayri dusunulmemeli. Bu ilce sayfasi, sorun yasayan kullanicilari da dogru ariza veya teknik servis sayfalarina tasimali.",
    problemLinks: getProblemLinks(seoService.slug),
  };
}
