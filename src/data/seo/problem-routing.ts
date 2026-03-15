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
      title: "Acil Servis İntenti",
      description:
        "Sorun kayıt, görüntü veya erişim kesintisi yaratıyorsa bu sayfa teknik servis lead'ini toplamalıdır.",
    },
    {
      title: "Bakım ve Süreklilik",
      description:
        "Tekrarlayan arızalar yalnızca onarım değil, periyodik bakım ve kontrol ihtiyacına da işaret eder.",
    },
    {
      title: "Kurulum ve Yenileme",
      description:
        "Eski veya yetersiz sistemlerde arıza araması zamanla yeni kurulum veya yenileme talebine dönüşebilir.",
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
        label: "İstanbul Alarm Sistemi",
        description:
          "Arıza sonrası değişim veya yeni kurulum ihtiyacını ana İstanbul winner URL'ye taşır.",
      },
      {
        href: "/istanbul/guvenlik-sistemi-teknik-servis",
        label: "Güvenlik Sistemi Teknik Servis",
        description:
          "Mevcut alarm altyapısında saha müdahalesi gereken durumlar için servis hattı sunar.",
      },
      {
        href: "/bakim-servis-uzaktan-izleme",
        label: "Bakım, Servis ve Uzaktan İzleme",
        description:
          "Tekrarlayan panel ve sensör sorunlarını bakım sözleşmesine bağlar.",
      },
    ];
  }

  if (data.defaultService === "kartli-gecis") {
    return [
      {
        href: "/istanbul-kartli-gecis-sistemi",
        label: "İstanbul Kartlı Geçiş Sistemi",
        description:
          "Kartlı geçiş arızasını ana İstanbul ticari sayfasına geri bağlar.",
      },
      {
        href: "/istanbul/guvenlik-sistemi-teknik-servis",
        label: "Güvenlik Sistemi Teknik Servis",
        description:
          "Okuyucu, kilit ve kontrol ünitesi sorunlarında en net servis çıkışıdır.",
      },
      {
        href: "/isyeri-guvenlik-sistemi",
        label: "İşyeri Güvenlik Sistemi",
        description:
          "Kartlı geçiş ihtiyacını daha geniş ofis ve işletme güvenlik çözümüne taşır.",
      },
    ];
  }

  return [
    {
      href: "/istanbul-kamera-teknik-servis",
      label: "İstanbul Kamera Teknik Servis",
      description:
        "Kamera, NVR, HDD ve bağlantı problemleri için en hızlı İstanbul servis yoludur.",
    },
    {
      href: "/istanbul-kamera-bakim-servisi",
      label: "İstanbul Kamera Bakım Servisi",
      description:
        "Tekrarlayan kamera sorunlarını periyodik kontrol ve bakım gelirine bağlar.",
    },
    {
      href: "/kamera-ariza-servisi",
      label: "Kamera Arıza Servisi",
      description:
        "Hızlı arıza tespiti ve sahada onarım odaklı kullanıcılar için doğrudan servis çıkışı sunar.",
    },
  ];
}

function getCommercialLinks(data: ProblemPageData): RoutingLink[] {
  if (data.defaultService === "alarm") {
    return [
      {
        href: "/yangin-alarm-sistemi-kurulumu",
        label: "Yangın Alarm Sistemi Kurulumu",
        description:
          "Alarm ve can güvenliği ihtiyacını daha yüksek ticari değerli kurulum katmanına taşır.",
      },
      {
        href: "/isyeri-guvenlik-sistemi",
        label: "İşyeri Güvenlik Sistemi",
        description:
          "Alarm sorununu kamera ve erişim kontrol ile birleşen ticari pakete bağlar.",
      },
    ];
  }

  if (data.defaultService === "kartli-gecis") {
    return [
      {
        href: "/istanbul-kartli-gecis-sistemi",
        label: "İstanbul Kartlı Geçiş Sistemi",
        description:
          "Arıza çözüldüğünde yenileme veya kapasite artışı ihtiyacını ana sayfaya yönlendirir.",
      },
      {
        href: "/isyeri-guvenlik-sistemi",
        label: "İşyeri Güvenlik Sistemi",
        description:
          "Ofis, plaza ve ticari alanlar için daha geniş güvenlik mimarisine geçiş sağlar.",
      },
    ];
  }

  return [
    {
      href: "/istanbul-kamera-sistemi-kurulumu",
      label: "İstanbul Kamera Sistemi Kurulumu",
      description:
        "Eski veya yetersiz sistemlerde arızayı yeni kurulum kararına dönüştüren ana ticari sayfadır.",
    },
    {
      href: "/uzaktan-kamera-izleme",
      label: "Uzaktan Kamera İzleme",
      description:
        "Bağlantı ve izleme sorunlarını merkezi erişim ve süreklilik ihtiyacına bağlar.",
    },
    {
      href: "/kamera-sistemi-bakim-sozlesmesi",
      label: "Kamera Sistemi Bakım Sözleşmesi",
      description:
        "Arıza odaklı kullanıcıyı recurrent gelir üretebilen bakım modeline taşır.",
    },
  ];
}

export function getProblemRoutingContent(
  data: ProblemPageData,
): ProblemRoutingContent {
  return {
    title: "Bu sorun hangi lead yoluna bağlanmalı?",
    description:
      "Problem sayfaları sadece bilgilendirme içeriği olarak kalmamalı. Her sayfa acil servis, bakım ve daha geniş ticari çözüm katmanlarına kontrollü şekilde bağlanmalıdır.",
    triageCards: getTriageCards(data),
    serviceTitle: "Acil servis ve teknik müdahale yolları",
    serviceDescription:
      "Kullanıcı sorunu tanımladığında en yakın çözüm sayfalarına gitmeli; gereksiz blog veya zayıf sayfalara dağılmamalı.",
    serviceLinks: getServiceLinks(data),
    commercialTitle: "Sorundan ticari çözüm katmanına geçiş",
    commercialDescription:
      "Arıza intent'i bazen yeni kurulum, yenileme veya bakım sözleşmesi gibi daha yüksek değerli lead'lere dönüşür. Bu bağlantı her sayfada net olmalıdır.",
    commercialLinks: getCommercialLinks(data),
  };
}
