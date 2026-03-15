import type { ProblemPageData } from "./problem-pages";

interface RoutingCard {
  title: string;
  description: string;
}

interface RoutingLink {
  href: string;
  label: string;
  description: string;
}

export interface ProblemRoutingContent {
  title: string;
  description: string;
  triageCards: RoutingCard[];
  serviceTitle: string;
  serviceDescription: string;
  serviceLinks: RoutingLink[];
  commercialTitle: string;
  commercialDescription: string;
  commercialLinks: RoutingLink[];
}

function getTriageCards(data: ProblemPageData): RoutingCard[] {
  const common = [
    {
      title: "Acil Servis Intenti",
      description:
        "Sorun kayit, goruntu veya erisim kesintisi yaratiyorsa bu sayfa teknik servis lead'ini toplamalidir.",
    },
    {
      title: "Bakim ve Sureklilik",
      description:
        "Tekrarlayan arizalar yalnizca onarim degil, periyodik bakim ve kontrol ihtiyacina da isaret eder.",
    },
    {
      title: "Kurulum ve Yenileme",
      description:
        "Eski veya yetersiz sistemlerde ariza aramasi zamanla yeni kurulum veya yenileme talebine donusebilir.",
    },
  ];

  if (data.defaultService === "alarm") {
    return [
      {
        title: "Yanlis Alarm Riski",
        description:
          "Sik tekrar eden panel veya sensor sorunlari kullaniciyi hizli teknik servis kararina iter.",
      },
      ...common.slice(1),
    ];
  }

  if (data.defaultService === "kartli-gecis") {
    return [
      {
        title: "Operasyon Durmasi",
        description:
          "Kapi acilmama veya turnike arizasi bina operasyonunu durdurdugu icin acil talep olusturur.",
      },
      ...common.slice(1),
    ];
  }

  return common;
}

function getServiceLinks(data: ProblemPageData): RoutingLink[] {
  if (data.defaultService === "alarm") {
    return [
      {
        href: "/istanbul-alarm-sistemi",
        label: "Istanbul Alarm Sistemi",
        description:
          "Ariza sonrasi degisim veya yeni kurulum ihtiyacini ana Istanbul winner URL'ye tasir.",
      },
      {
        href: "/guvenlik-sistemi-teknik-servis",
        label: "Guvenlik Sistemi Teknik Servis",
        description:
          "Mevcut alarm altyapisinda saha mudahalesi gereken durumlar icin servis hatti sunar.",
      },
      {
        href: "/bakim-servis-uzaktan-izleme",
        label: "Bakim, Servis ve Uzaktan Izleme",
        description:
          "Tekrarlayan panel ve sensor sorunlarini bakim sozlesmesine baglar.",
      },
    ];
  }

  if (data.defaultService === "kartli-gecis") {
    return [
      {
        href: "/istanbul-kartli-gecis-sistemi",
        label: "Istanbul Kartli Gecis Sistemi",
        description:
          "Kartli gecis arizasini ana Istanbul ticari sayfasina geri baglar.",
      },
      {
        href: "/guvenlik-sistemi-teknik-servis",
        label: "Guvenlik Sistemi Teknik Servis",
        description:
          "Okuyucu, kilit ve kontrol unitesi sorunlarinda en net servis cikisidir.",
      },
      {
        href: "/isyeri-guvenlik-sistemi",
        label: "Isyeri Guvenlik Sistemi",
        description:
          "Kartli gecis ihtiyacini daha genis ofis ve isletme guvenlik cozumune tasir.",
      },
    ];
  }

  return [
    {
      href: "/istanbul-kamera-teknik-servis",
      label: "Istanbul Kamera Teknik Servis",
      description:
        "Kamera, NVR, HDD ve baglanti problemleri icin en hizli Istanbul servis yoludur.",
    },
    {
      href: "/istanbul-kamera-bakim-servisi",
      label: "Istanbul Kamera Bakim Servisi",
      description:
        "Tekrarlayan kamera sorunlarini periyodik kontrol ve bakim gelirine baglar.",
    },
    {
      href: "/kamera-ariza-servisi",
      label: "Kamera Ariza Servisi",
      description:
        "Hizli ariza tespiti ve sahada onarim odakli kullanicilar icin dogrudan servis cikisi sunar.",
    },
  ];
}

function getCommercialLinks(data: ProblemPageData): RoutingLink[] {
  if (data.defaultService === "alarm") {
    return [
      {
        href: "/yangin-alarm-sistemi-kurulumu",
        label: "Yangin Alarm Sistemi Kurulumu",
        description:
          "Alarm ve can guvenligi ihtiyacini daha yuksek ticari degerli kurulum katmanina tasir.",
      },
      {
        href: "/isyeri-guvenlik-sistemi",
        label: "Isyeri Guvenlik Sistemi",
        description:
          "Alarm sorununu kamera ve erisim kontrol ile birlesen ticari pakete baglar.",
      },
    ];
  }

  if (data.defaultService === "kartli-gecis") {
    return [
      {
        href: "/istanbul-kartli-gecis-sistemi",
        label: "Istanbul Kartli Gecis Sistemi",
        description:
          "Ariza cozuldugunde yenileme veya kapasite artisi ihtiyacini ana sayfaya yonlendirir.",
      },
      {
        href: "/isyeri-guvenlik-sistemi",
        label: "Isyeri Guvenlik Sistemi",
        description:
          "Ofis, plaza ve ticari alanlar icin daha genis guvenlik mimarisine gecis saglar.",
      },
    ];
  }

  return [
    {
      href: "/istanbul-kamera-sistemi-kurulumu",
      label: "Istanbul Kamera Sistemi Kurulumu",
      description:
        "Eski veya yetersiz sistemlerde arizayi yeni kurulum kararina donusturen ana ticari sayfadir.",
    },
    {
      href: "/uzaktan-kamera-izleme",
      label: "Uzaktan Kamera Izleme",
      description:
        "Baglanti ve izleme sorunlarini merkezi erisim ve sureklilik ihtiyacina baglar.",
    },
    {
      href: "/kamera-sistemi-bakim-sozlesmesi",
      label: "Kamera Sistemi Bakim Sozlesmesi",
      description:
        "Ariza odakli kullaniciyi recurrent gelir uretebilen bakim modeline tasir.",
    },
  ];
}

export function getProblemRoutingContent(
  data: ProblemPageData,
): ProblemRoutingContent {
  return {
    title: "Bu sorun hangi lead yoluna baglanmali?",
    description:
      "Problem sayfalari sadece bilgilendirme icerigi olarak kalmamali. Her sayfa acil servis, bakim ve daha genis ticari cozum katmanlarina kontrollu sekilde baglanmalidir.",
    triageCards: getTriageCards(data),
    serviceTitle: "Acil servis ve teknik mudahale yolları",
    serviceDescription:
      "Kullanici sorunu tanimladiginda en yakin cozum sayfalarina gitmeli; gereksiz blog veya zayif sayfalara dagilmamali.",
    serviceLinks: getServiceLinks(data),
    commercialTitle: "Sorundan ticari cozum katmanina gecis",
    commercialDescription:
      "Ariza intent'i bazen yeni kurulum, yenileme veya bakim sozlesmesi gibi daha yuksek degerli lead'lere donusur. Bu baglanti her sayfada net olmalidir.",
    commercialLinks: getCommercialLinks(data),
  };
}
