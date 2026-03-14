import { cityContent } from "../seo-content/cities";

export type DistrictMarketType = "mixed" | "residential" | "commercial" | "industrial";
export type DistrictPriority = "primary" | "secondary";

export interface SeoDistrict {
  slug: string;
  name: string;
  citySlug: string;
  marketType: DistrictMarketType;
  priority: DistrictPriority;
  areaServedLabel: string;
  serviceAreaNote?: string;
  servicePrioritySlugs: string[];
}

const primaryDistrictsByCitySlug: Record<string, string[]> = {
  istanbul: ["Kadikoy", "Besiktas", "Basaksehir", "Pendik"],
  ankara: ["Cankaya", "Kecioren", "Yenimahalle"],
  izmir: ["Konak", "Karsiyaka", "Bornova"],
  bursa: ["Osmangazi", "Nilufer", "Yildirim"],
  kocaeli: ["Izmit", "Gebze", "Korfez"],
  antalya: ["Muratpasa", "Kepez", "Konyaalti"],
  tekirdag: ["Cerkezkoy", "Corlu", "Suleymanpasa"],
  sakarya: ["Adapazari", "Serdivan", "Erenler"],
  balikesir: ["Altieylul", "Karesi", "Bandirma"],
  adana: ["Seyhan", "Yuregir", "Cukurova"],
  konya: ["Selcuklu", "Meram", "Karatay"],
  gaziantep: ["Sehitkamil", "Sahinbey", "Nizip"],
  kayseri: ["Melikgazi", "Kocasinan", "Talas"],
  eskisehir: ["Odunpazari", "Tepebasi"],
  mersin: ["Akdeniz", "Mezitli", "Yenisehir"],
  yalova: ["Merkez", "Ciftlikkoy", "Cinarcik"],
  edirne: ["Merkez", "Kesan", "Uzunkopru"],
  kirklareli: ["Luleburgaz", "Merkez", "Babaeski"],
};

const rawDistrictMarketTypeOverrides: Record<string, DistrictMarketType> = {
  "istanbul:Basaksehir": "commercial",
  "istanbul:Besiktas": "commercial",
  "istanbul:Kadikoy": "commercial",
  "istanbul:Pendik": "industrial",
  "ankara:Cankaya": "commercial",
  "ankara:Yenimahalle": "industrial",
  "izmir:Bornova": "commercial",
  "izmir:Konak": "commercial",
  "bursa:Nilufer": "industrial",
  "bursa:Osmangazi": "commercial",
  "kocaeli:Gebze": "industrial",
  "kocaeli:Korfez": "industrial",
  "kocaeli:Izmit": "commercial",
  "antalya:Konyaalti": "residential",
  "antalya:Muratpasa": "commercial",
  "tekirdag:Cerkezkoy": "industrial",
  "tekirdag:Corlu": "industrial",
  "sakarya:Adapazari": "commercial",
  "balikesir:Bandirma": "industrial",
  "adana:Seyhan": "commercial",
  "konya:Karatay": "industrial",
  "konya:Selcuklu": "commercial",
  "gaziantep:Nizip": "industrial",
  "gaziantep:Sehitkamil": "commercial",
  "kayseri:Melikgazi": "commercial",
  "mersin:Akdeniz": "commercial",
  "mersin:Yenisehir": "commercial",
  "edirne:Merkez": "commercial",
  "kirklareli:Luleburgaz": "industrial",
};

const districtMarketTypeOverrides = Object.fromEntries(
  Object.entries(rawDistrictMarketTypeOverrides).map(([key, value]) => [key.toLocaleLowerCase("tr-TR"), value])
) as Record<string, DistrictMarketType>;

const defaultServicePrioritySlugs = [
  "kamera-sistemi-kurulumu",
  "alarm-sistemi-kurulumu",
  "bakim-servis-uzaktan-izleme",
];

const industrialServicePrioritySlugs = [
  "fabrika-depo-guvenlik-sistemi",
  "bakim-servis-uzaktan-izleme",
  "kamera-sistemi-bakim-sozlesmesi",
  "kamera-ariza-servisi",
];

const commercialServicePrioritySlugs = [
  "isyeri-guvenlik-sistemi",
  "kartli-gecis-sistemi-kurulumu",
  "bakim-servis-uzaktan-izleme",
  "guvenlik-sistemi-teknik-servis",
];

const residentialServicePrioritySlugs = [
  "apartman-site-guvenlik-sistemi",
  "kamera-sistemi-kurulumu",
  "kamera-sistemi-bakim-sozlesmesi",
];

function normalizeDistrictLabel(name: string) {
  return name
    .toLocaleLowerCase("tr-TR")
    .replace(/ç/g, "c")
    .replace(/ğ/g, "g")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ş/g, "s")
    .replace(/ü/g, "u");
}

function slugifyDistrictName(name: string) {
  return normalizeDistrictLabel(name)
    .replace(/ü/g, "u")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getDistrictMarketType(citySlug: string, districtName: string): DistrictMarketType {
  return districtMarketTypeOverrides[`${citySlug}:${normalizeDistrictLabel(districtName)}`] ?? "mixed";
}

function getServicePrioritySlugs(marketType: DistrictMarketType) {
  switch (marketType) {
    case "industrial":
      return industrialServicePrioritySlugs;
    case "commercial":
      return commercialServicePrioritySlugs;
    case "residential":
      return residentialServicePrioritySlugs;
    default:
      return defaultServicePrioritySlugs;
  }
}

export const seoDistricts: SeoDistrict[] = Object.entries(cityContent).flatMap(([citySlug, city]) => {
  const primaryDistrictNames = new Set(
    (primaryDistrictsByCitySlug[citySlug] ?? []).map((districtName) => normalizeDistrictLabel(districtName))
  );

  return city.districts.map((districtName) => {
    const marketType = getDistrictMarketType(citySlug, districtName);
    const priority = primaryDistrictNames.has(normalizeDistrictLabel(districtName)) ? "primary" : "secondary";

    return {
      slug: slugifyDistrictName(districtName),
      name: districtName,
      citySlug,
      marketType,
      priority,
      areaServedLabel: `${districtName}, ${citySlug}`,
      serviceAreaNote:
        priority === "primary"
          ? `${districtName} bolgesinde kesif, montaj ve servis yogunlugu daha yuksek planlanir.`
          : undefined,
      servicePrioritySlugs: getServicePrioritySlugs(marketType),
    } satisfies SeoDistrict;
  });
});

export function getDistrictsByCitySlug(citySlug: string) {
  return seoDistricts.filter((district) => district.citySlug === citySlug);
}

export function getPrimaryDistrictsByCitySlug(citySlug: string) {
  return getDistrictsByCitySlug(citySlug).filter((district) => district.priority === "primary");
}

export function getSeoDistrictBySlug(citySlug: string, districtSlug: string) {
  return seoDistricts.find((district) => district.citySlug === citySlug && district.slug === districtSlug);
}
