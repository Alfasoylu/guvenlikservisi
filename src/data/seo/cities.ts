import { cityContent } from "../seo-content/cities";
import { getDistrictsByCitySlug, getPrimaryDistrictsByCitySlug } from "./districts";

export interface CityRouteRecord {
  slug: string;
  name: string;
}

export type CityRegion = "Marmara" | "İç Anadolu" | "Ege" | "Akdeniz" | "Güneydoğu Anadolu";
export type CityMarketType = "high-industrial" | "high-residential" | "mixed" | "tourism-heavy";

export interface SeoCity extends CityRouteRecord {
  locative: string;
  shortIntro: string;
  serviceAreaEmphasis: string;
  serviceAreas: string[];
  seoPriority: "high" | "medium";
  commercialPriorityScore: 1 | 2 | 3 | 4 | 5;
  areaServedLabel: string;
  districts: string[];
  districtSlugs: string[];
  primaryDistrictSlugs: string[];
  districtCount: number;
  districtsNote?: string;
  metadataDistrictCoverage?: string;
  plaka: number;
  bolge: CityRegion;
  neighborCitySlugs: string[];
  marketType: CityMarketType;
}

const cityRouteRecords: CityRouteRecord[] = [
  { slug: "istanbul", name: "İstanbul" },
  { slug: "ankara", name: "Ankara" },
  { slug: "izmir", name: "İzmir" },
  { slug: "bursa", name: "Bursa" },
  { slug: "kocaeli", name: "Kocaeli" },
  { slug: "antalya", name: "Antalya" },
  { slug: "tekirdag", name: "Tekirdağ" },
  { slug: "sakarya", name: "Sakarya" },
  { slug: "balikesir", name: "Balıkesir" },
  { slug: "adana", name: "Adana" },
  { slug: "konya", name: "Konya" },
  { slug: "gaziantep", name: "Gaziantep" },
  { slug: "kayseri", name: "Kayseri" },
  { slug: "eskisehir", name: "Eskişehir" },
  { slug: "mersin", name: "Mersin" },
  { slug: "yalova", name: "Yalova" },
  { slug: "edirne", name: "Edirne" },
  { slug: "kirklareli", name: "Kırklareli" },
];

const defaultServiceAreas = [
  "Evler",
  "İşyerleri",
  "Apartmanlar",
  "Siteler",
  "Depolar",
  "Mağazalar",
];

const cityServiceAreasBySlug: Record<string, string[]> = {
  istanbul: ["Apartmanlar", "Siteler", "Mağazalar", "Ofisler", "Depolar", "Fabrikalar"],
  ankara: ["Daireler", "Villalar", "İşyerleri", "Apartman girişleri", "Depolar", "Mağazalar"],
  izmir: ["Evler", "Siteler", "Dükkanlar", "Ofisler", "Depolar", "Açık alanlar"],
  bursa: ["Fabrikalar", "Depolar", "Mağazalar", "Apartmanlar", "Siteler", "Atölyeler"],
  kocaeli: ["Sanayi tesisleri", "Depolar", "Fabrikalar", "Ofisler", "Apartmanlar", "Mağazalar"],
  antalya: ["Villalar", "Oteller", "Siteler", "Mağazalar", "Restoranlar", "Depolar"],
  sakarya: ["Evler", "İşyerleri", "Siteler", "Depolar", "Atölyeler", "Mağazalar"],
  yalova: ["Villalar", "Yazlıklar", "Apartmanlar", "Dükkanlar", "Ofisler", "Siteler"],
  edirne: ["Konutlar", "İşletmeler", "Apartmanlar", "Depolar", "Mağazalar", "Bahçeli alanlar"],
  kirklareli: ["Çiftlikler", "Depolar", "Apartmanlar", "İşyerleri", "Açık alanlar", "Mağazalar"],
};

const plakaBySlug: Record<string, number> = {
  istanbul: 34, ankara: 6, izmir: 35, bursa: 16, kocaeli: 41,
  antalya: 7, tekirdag: 59, sakarya: 54, balikesir: 10, adana: 1,
  konya: 42, gaziantep: 27, kayseri: 38, eskisehir: 26, mersin: 33,
  yalova: 77, edirne: 22, kirklareli: 39,
};

const bolgeBySlug: Record<string, CityRegion> = {
  istanbul: "Marmara", ankara: "İç Anadolu", izmir: "Ege", bursa: "Marmara",
  kocaeli: "Marmara", antalya: "Akdeniz", tekirdag: "Marmara", sakarya: "Marmara",
  balikesir: "Marmara", adana: "Akdeniz", konya: "İç Anadolu", gaziantep: "Güneydoğu Anadolu",
  kayseri: "İç Anadolu", eskisehir: "İç Anadolu", mersin: "Akdeniz", yalova: "Marmara",
  edirne: "Marmara", kirklareli: "Marmara",
};

const neighborsBySlug: Record<string, string[]> = {
  istanbul: ["kocaeli", "tekirdag", "yalova"],
  ankara: ["eskisehir", "konya", "kayseri"],
  izmir: ["balikesir"],
  bursa: ["kocaeli", "yalova", "balikesir", "eskisehir"],
  kocaeli: ["istanbul", "sakarya", "bursa", "yalova"],
  antalya: ["mersin"],
  tekirdag: ["istanbul", "edirne", "kirklareli"],
  sakarya: ["kocaeli"],
  balikesir: ["bursa", "izmir"],
  adana: ["mersin", "gaziantep"],
  konya: ["ankara", "antalya", "mersin", "kayseri", "eskisehir"],
  gaziantep: ["adana", "kayseri"],
  kayseri: ["ankara", "konya"],
  eskisehir: ["ankara", "bursa"],
  mersin: ["adana", "antalya", "konya"],
  yalova: ["istanbul", "bursa", "kocaeli"],
  edirne: ["tekirdag", "kirklareli"],
  kirklareli: ["edirne", "tekirdag"],
};

const marketTypeBySlug: Record<string, CityMarketType> = {
  istanbul: "mixed", ankara: "mixed", izmir: "mixed", bursa: "high-industrial",
  kocaeli: "high-industrial", antalya: "tourism-heavy", tekirdag: "high-industrial",
  sakarya: "high-industrial", balikesir: "mixed", adana: "mixed",
  konya: "mixed", gaziantep: "high-industrial", kayseri: "high-industrial",
  eskisehir: "high-residential", mersin: "mixed", yalova: "high-residential",
  edirne: "high-residential", kirklareli: "high-residential",
};

const highPriorityCitySlugs = new Set([
  "istanbul",
  "ankara",
  "izmir",
  "bursa",
  "kocaeli",
  "antalya",
]);

const commercialPriorityScoreByCitySlug: Record<string, 1 | 2 | 3 | 4 | 5> = {
  istanbul: 5,
  ankara: 5,
  izmir: 5,
  bursa: 4,
  kocaeli: 4,
  antalya: 4,
  tekirdag: 4,
  sakarya: 3,
  balikesir: 3,
  adana: 4,
  konya: 4,
  gaziantep: 4,
  kayseri: 3,
  eskisehir: 3,
  mersin: 4,
  yalova: 3,
  edirne: 3,
  kirklareli: 3,
};

function getCityLocative(name: string) {
  const normalized = name.toLocaleLowerCase("tr-TR");
  const lastVowel = [...normalized].reverse().find((char) => "aeıioöuü".includes(char));
  const suffix = lastVowel && "eiöü".includes(lastVowel) ? "de" : "da";
  return `${name}'${suffix}`;
}

function getDefaultCityIntro(name: string) {
  return `${name} içinde kamera sistemi kurulumu, alarm sistemi kurulumu ve diğer güvenlik çözümleri için profesyonel montaj hizmeti sunuyoruz.`;
}

export const seoCities: SeoCity[] = cityRouteRecords.map((city) => {
  const citySeoContent = cityContent[city.slug];
  const cityDistricts = getDistrictsByCitySlug(city.slug);
  const primaryDistricts = getPrimaryDistrictsByCitySlug(city.slug);

  return {
    ...city,
    locative: getCityLocative(city.name),
    shortIntro: citySeoContent?.intro ?? getDefaultCityIntro(city.name),
    serviceAreaEmphasis:
      citySeoContent?.districtsNote ??
      `${city.name} genelinde keşif, montaj ve devreye alma desteği veriyoruz.`,
    serviceAreas: cityServiceAreasBySlug[city.slug] ?? defaultServiceAreas,
    seoPriority: highPriorityCitySlugs.has(city.slug) ? "high" : "medium",
    commercialPriorityScore: commercialPriorityScoreByCitySlug[city.slug] ?? 3,
    areaServedLabel: city.name,
    districts: cityDistricts.map((district) => district.name),
    districtSlugs: cityDistricts.map((district) => district.slug),
    primaryDistrictSlugs: primaryDistricts.map((district) => district.slug),
    districtCount: cityDistricts.length,
    districtsNote: citySeoContent?.districtsNote,
    metadataDistrictCoverage: citySeoContent?.metadataDistrictCoverage,
    plaka: plakaBySlug[city.slug] ?? 0,
    bolge: bolgeBySlug[city.slug] ?? "Marmara",
    neighborCitySlugs: (neighborsBySlug[city.slug] ?? []).filter((s) => cityRouteRecords.some((c) => c.slug === s)),
    marketType: marketTypeBySlug[city.slug] ?? "mixed",
  };
});

export const cities: CityRouteRecord[] = seoCities.map(({ slug, name }) => ({ slug, name }));

export function getSeoCityBySlug(citySlug: string) {
  return seoCities.find((city) => city.slug === citySlug);
}

export function getCityRouteRecord(citySlug: string) {
  return cities.find((city) => city.slug === citySlug);
}

export function getHighPrioritySeoCities() {
  return [...seoCities].sort((left, right) => {
    return (
      right.commercialPriorityScore - left.commercialPriorityScore ||
      left.name.localeCompare(right.name, "tr")
    );
  });
}
