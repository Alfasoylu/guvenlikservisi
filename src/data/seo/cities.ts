import { cityContent } from "../seo-content/cities";
import { getDistrictsByCitySlug, getPrimaryDistrictsByCitySlug } from "./districts";

export interface CityRouteRecord {
  slug: string;
  name: string;
}

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
