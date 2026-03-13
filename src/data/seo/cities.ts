import { cityContent } from "../seo-content/cities";

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
  areaServedLabel: string;
  districts: string[];
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

const cityIntroBySlug: Record<string, string> = {
  istanbul:
    "İstanbul içinde apartman, site, villa, mağaza, ofis, depo ve fabrika projeleri için profesyonel güvenlik sistemi kurulumu yapıyoruz.",
  ankara:
    "Ankara içinde ev, işyeri, apartman ve ticari alanlar için keşif, ürün seçimi, montaj ve devreye alma dahil güvenlik çözümleri sunuyoruz.",
  izmir:
    "İzmir içinde iç ve dış mekanlara uygun kamera, alarm ve geçiş kontrol sistemleri kuruyoruz.",
  bursa:
    "Bursa içinde fabrika, depo, mağaza, site ve apartman projeleri için profesyonel montaj hizmeti veriyoruz.",
  kocaeli:
    "Kocaeli içinde özellikle fabrika, depo ve sanayi tesisleri için güvenlik sistemi çözümleri sunuyoruz.",
  antalya:
    "Antalya içinde villa, site, otel çevresi ve ticari alanlar için güvenlik kamera ve alarm sistemleri kuruyoruz.",
  sakarya:
    "Sakarya içinde ev, işyeri, depo ve site projelerinde anahtar teslim güvenlik sistemi kurulumu sunuyoruz.",
  yalova:
    "Yalova içinde konut, site, villa, işyeri ve küçük işletmeler için profesyonel güvenlik sistemleri kurulumu yapıyoruz.",
  edirne:
    "Edirne içinde konut ve ticari projeler için kamera sistemi, alarm sistemi ve kartlı geçiş çözümleri sunuyoruz.",
  kirklareli:
    "Kırklareli içinde işyeri, depo, apartman ve açık alan güvenliği için profesyonel montaj hizmeti sağlıyoruz.",
};

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

  return {
    ...city,
    locative: getCityLocative(city.name),
    shortIntro: cityIntroBySlug[city.slug] ?? citySeoContent?.intro ?? getDefaultCityIntro(city.name),
    serviceAreaEmphasis:
      citySeoContent?.districtsNote ??
      `${city.name} genelinde keşif, montaj ve devreye alma desteği veriyoruz.`,
    serviceAreas: cityServiceAreasBySlug[city.slug] ?? defaultServiceAreas,
    seoPriority: highPriorityCitySlugs.has(city.slug) ? "high" : "medium",
    areaServedLabel: city.name,
    districts: citySeoContent?.districts ?? [],
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
