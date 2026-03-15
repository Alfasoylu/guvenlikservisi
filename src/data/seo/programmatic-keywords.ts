export interface ProgrammaticKeywordGroup {
  groupSlug: string;
  groupName: string;
  category: string;
  keywords: ProgrammaticKeyword[];
}

export interface ProgrammaticKeyword {
  slug: string;
  keyword: string;
  title: string;
  relatedService: "kamera" | "alarm" | "kartli-gecis" | "genel";
}

export const programmaticKeywords: Record<string, ProgrammaticKeywordGroup> = {
  cameraSystemSize: {
    groupSlug: "kamera-sistemi-boyut",
    groupName: "Kamera Sistemi Boyutuna Göre Fiyat",
    category: "Fiyatlar ve Rehber",
    keywords: [
      {
        slug: "2-kamerali-sistem-fiyati",
        keyword: "2 kameralı sistem fiyatı",
        title: "2 Kameralı Güvenlik Sistemi Fiyatı 2026 | Kurulum Rehberi",
        relatedService: "kamera",
      },
      {
        slug: "4-kamerali-sistem-fiyati",
        keyword: "4 kameralı sistem fiyatı",
        title: "4 Kameralı Güvenlik Sistemi Fiyatı 2026 | Kurulum Rehberi",
        relatedService: "kamera",
      },
      {
        slug: "6-kamerali-sistem-fiyati",
        keyword: "6 kameralı sistem fiyatı",
        title: "6 Kameralı Güvenlik Sistemi Fiyatı 2026 | Kurulum Rehberi",
        relatedService: "kamera",
      },
      {
        slug: "8-kamerali-sistem-fiyati",
        keyword: "8 kameralı sistem fiyatı",
        title: "8 Kameralı Güvenlik Sistemi Fiyatı 2026 | Kurulum Rehberi",
        relatedService: "kamera",
      },
      {
        slug: "16-kamerali-sistem-fiyati",
        keyword: "16 kameralı sistem fiyatı",
        title: "16 Kameralı Güvenlik Sistemi Fiyatı 2026 | Kurulum Rehberi",
        relatedService: "kamera",
      },
    ],
  },
  buildingType: {
    groupSlug: "bina-tipi-kamera",
    groupName: "Bina Tipine Göre Kamera Sistemi",
    category: "Teknik Rehber",
    keywords: [
      {
        slug: "site-kamera-sistemi",
        keyword: "site kamera sistemi",
        title: "Site Kamera Sistemi Kurulumu | Kamera Sayısı, Maliyet ve Rehber",
        relatedService: "kamera",
      },
      {
        slug: "villa-kamera-sistemi",
        keyword: "villa kamera sistemi",
        title: "Villa Kamera Sistemi Kurulumu | Çevre Güvenlik Rehberi",
        relatedService: "kamera",
      },
      {
        slug: "fabrika-kamera-sistemi",
        keyword: "fabrika kamera sistemi",
        title: "Fabrika Kamera Sistemi Kurulumu | Endüstriyel Güvenlik Rehberi",
        relatedService: "kamera",
      },
      {
        slug: "depo-kamera-sistemi",
        keyword: "depo kamera sistemi",
        title: "Depo Kamera Sistemi Kurulumu | Stok ve Güvenlik Rehberi",
        relatedService: "kamera",
      },
      {
        slug: "magaza-kamera-sistemi",
        keyword: "mağaza kamera sistemi",
        title: "Mağaza Kamera Sistemi Kurulumu | Hırsızlık Önleme Rehberi",
        relatedService: "kamera",
      },
      {
        slug: "restoran-kamera-sistemi",
        keyword: "restoran kamera sistemi",
        title: "Restoran ve Kafe Kamera Sistemi | Kurulum Rehberi",
        relatedService: "kamera",
      },
    ],
  },
  technical: {
    groupSlug: "teknik-bilgi",
    groupName: "Teknik Bilgi ve Açıklamalar",
    category: "Teknik Rehber",
    keywords: [
      {
        slug: "poe-kamera-sistemi-nedir",
        keyword: "PoE kamera sistemi nedir",
        title: "PoE Kamera Sistemi Nedir? Avantajları ve Kurulum Rehberi",
        relatedService: "kamera",
      },
      {
        slug: "nvr-nedir-ne-ise-yarar",
        keyword: "NVR nedir ne işe yarar",
        title: "NVR Nedir, Ne İşe Yarar? Kayıt Cihazı Rehberi",
        relatedService: "kamera",
      },
      {
        slug: "dvr-ile-nvr-arasindaki-fark",
        keyword: "DVR ile NVR arasındaki fark",
        title: "DVR ile NVR Arasındaki Fark Nedir? Karşılaştırma Rehberi",
        relatedService: "kamera",
      },
      {
        slug: "h265-sikistirma-nedir",
        keyword: "H.265 sıkıştırma nedir",
        title: "H.265 Sıkıştırma Nedir? Kamera Kayıt Formatı Rehberi",
        relatedService: "kamera",
      },
    ],
  },
  alarmSystem: {
    groupSlug: "alarm-sistemi",
    groupName: "Alarm Sistemi Rehberleri",
    category: "Güvenlik Rehberi",
    keywords: [
      {
        slug: "kablosuz-alarm-sistemi-rehberi",
        keyword: "kablosuz alarm sistemi",
        title: "Kablosuz Alarm Sistemi Rehberi | Avantajlar, Fiyat ve Kurulum",
        relatedService: "alarm",
      },
      {
        slug: "isyeri-alarm-sistemi-secimi",
        keyword: "işyeri alarm sistemi seçimi",
        title: "İşyeri Alarm Sistemi Nasıl Seçilir? Kapsamlı Rehber",
        relatedService: "alarm",
      },
      {
        slug: "alarm-sistemi-nasil-calisir",
        keyword: "alarm sistemi nasıl çalışır",
        title: "Alarm Sistemi Nasıl Çalışır? Teknik Çalışma Prensibi Rehberi",
        relatedService: "alarm",
      },
    ],
  },
  accessControl: {
    groupSlug: "gecis-kontrol",
    groupName: "Geçiş Kontrol Rehberleri",
    category: "Güvenlik Rehberi",
    keywords: [
      {
        slug: "kartli-gecis-sistemi-nedir",
        keyword: "kartlı geçiş sistemi nedir",
        title: "Kartlı Geçiş Sistemi Nedir? Çalışma Prensibi ve Kurulum Rehberi",
        relatedService: "kartli-gecis",
      },
      {
        slug: "turnike-sistemi-fiyatlari",
        keyword: "turnike sistemi fiyatları",
        title: "Turnike Sistemi Fiyatları 2026 | Geçiş Kontrol Maliyet Rehberi",
        relatedService: "kartli-gecis",
      },
    ],
  },
};

export function getAllProgrammaticKeywords(): ProgrammaticKeyword[] {
  return Object.values(programmaticKeywords).flatMap((group) => group.keywords);
}

export function getProgrammaticKeywordBySlug(slug: string): (ProgrammaticKeyword & { category: string }) | undefined {
  for (const group of Object.values(programmaticKeywords)) {
    const kw = group.keywords.find((k) => k.slug === slug);
    if (kw) return { ...kw, category: group.category };
  }
  return undefined;
}

export function getProgrammaticKeywordsByService(service: ProgrammaticKeyword["relatedService"]): ProgrammaticKeyword[] {
  return getAllProgrammaticKeywords().filter((kw) => kw.relatedService === service);
}
