import { cities } from "@/data/cities";
import { services } from "@/data/services";
import {
  cityImageGroups,
  commercialPageImageGroups,
  fallbackImageGroup,
  serviceImageGroups,
  type ImageAsset,
  type ImageGroup,
} from "@/data/images";
import { isValidCitySlug, isValidServiceSlug } from "@/lib/routes";

export interface PageVisualItem {
  id: string;
  title: string;
  description: string;
  image: ImageAsset;
  alt: string;
}

const cityNameMap: Record<string, string> = {
  istanbul: "İstanbul",
  ankara: "Ankara",
  izmir: "İzmir",
  bursa: "Bursa",
  kocaeli: "Kocaeli",
  antalya: "Antalya",
  tekirdag: "Tekirdağ",
  sakarya: "Sakarya",
  balikesir: "Balıkesir",
  adana: "Adana",
  konya: "Konya",
  gaziantep: "Gaziantep",
  kayseri: "Kayseri",
  eskisehir: "Eskişehir",
  mersin: "Mersin",
  yalova: "Yalova",
  edirne: "Edirne",
  kirklareli: "Kırklareli",
};

const serviceNameMap: Record<string, string> = {
  "kamera-sistemi-kurulumu": "IP kamera sistemi kurulumu",
  "alarm-sistemi-kurulumu": "alarm sistemi montajı",
  "yangin-alarm-sistemi-kurulumu": "yangın alarm sistemi kurulumu",
  "kartli-gecis-sistemi-kurulumu": "kartlı geçiş sistemi kurulumu",
  "apartman-site-guvenlik-sistemi": "apartman güvenlik sistemi kurulumu",
  "isyeri-guvenlik-sistemi": "iş yeri güvenlik sistemi kurulumu",
  "fabrika-depo-guvenlik-sistemi": "fabrika ve depo güvenlik sistemi kurulumu",
  "bakim-servis-uzaktan-izleme": "güvenlik sistemi bakım ve uzaktan izleme hizmeti",
};

function getCityName(citySlug: string) {
  return cityNameMap[citySlug] || cities.find((city) => city.slug === citySlug)?.name || citySlug;
}

function getServiceName(serviceSlug: string) {
  return serviceNameMap[serviceSlug] || services.find((service) => service.slug === serviceSlug)?.name || serviceSlug;
}

function mergeImageGroup(base: ImageGroup, overrides?: Partial<ImageGroup>): ImageGroup {
  return {
    hero: overrides?.hero || base.hero,
    context: overrides?.context || base.context,
    process: overrides?.process || base.process,
    diagram: overrides?.diagram || base.diagram,
  };
}

export function getCityImageGroup(citySlug: string): ImageGroup {
  if (!isValidCitySlug(citySlug)) {
    return fallbackImageGroup;
  }

  return mergeImageGroup(fallbackImageGroup, cityImageGroups[citySlug]);
}

export function getServiceImageGroup(serviceSlug: string): ImageGroup {
  if (!isValidServiceSlug(serviceSlug)) {
    return fallbackImageGroup;
  }

  return mergeImageGroup(fallbackImageGroup, serviceImageGroups[serviceSlug]);
}

export function getCommercialPageImageGroup(pageKey: string): ImageGroup {
  return mergeImageGroup(fallbackImageGroup, commercialPageImageGroups[pageKey]);
}

export function getCityPageVisuals(citySlug: string): PageVisualItem[] {
  const cityName = getCityName(citySlug);
  const imageGroup = getCityImageGroup(citySlug);

  return [
    {
      id: "city-hero",
      title: `${cityName} için keşif ve kurulum planlaması`,
      description: `${cityName} içindeki konut, iş yeri ve ticari alanlar için proje öncesi keşif, kapsama planı ve cihaz yerleşimi hazırlanır.`,
      image: imageGroup.hero,
      alt: `${cityName} güvenlik sistemi kurulum planlama görseli`,
    },
    {
      id: "city-process",
      title: `${cityName} saha uygulama detayı`,
      description: `Kurulum, kablolama, kayıt altyapısı ve teslim aşaması tek akışta yönetilir. Böylece şehir bazlı landing sayfası sadece metin değil, gerçek uygulama bağlamı da taşır.`,
      image: imageGroup.process,
      alt: `${cityName} güvenlik sistemi montaj ve devreye alma süreci görseli`,
    },
    {
      id: "city-diagram",
      title: `${cityName} için sistem bileşen akışı`,
      description: `Kamera, alarm, geçiş kontrol ve mobil izleme bileşenlerinin birlikte nasıl çalıştığını özetleyen şema.`,
      image: imageGroup.diagram,
      alt: `${cityName} güvenlik sistemi altyapı akış şeması`,
    },
  ];
}

export function getCityServicePageVisuals(citySlug: string, serviceSlug: string): PageVisualItem[] {
  const cityName = getCityName(citySlug);
  const serviceName = getServiceName(serviceSlug);
  const imageGroup = getServiceImageGroup(serviceSlug);

  return [
    {
      id: "service-hero",
      title: `${cityName} içinde ${serviceName}`,
      description: `${cityName} odaklı bu hizmet sayfasında, keşif sonrası uygulanacak sistem yerleşimi ve örnek kurulum bağlamı görsel olarak desteklenir.`,
      image: imageGroup.hero,
      alt: `${cityName} için ${serviceName} görseli`,
    },
    {
      id: "service-context",
      title: `${serviceName} saha uygulaması`,
      description: `Kablolama, ekipman konumlandırma ve mobil erişim gibi kararlar hizmet tipine göre değişir. Bu blok sayfayı daha anlaşılır ve daha taranabilir hale getirir.`,
      image: imageGroup.context,
      alt: `${cityName} ${serviceName} örnek uygulama görseli`,
    },
    {
      id: "service-diagram",
      title: `${serviceName} sistem şeması`,
      description: `${serviceName} hizmetinde kullanılan temel cihaz akışını gösteren sade şema. Özellikle teknik niyeti yüksek ziyaretçiler için ek bağlam sağlar.`,
      image: imageGroup.diagram,
      alt: `${cityName} ${serviceName} sistem bağlantı şeması`,
    },
  ];
}

export function getCommercialPageVisuals(pageKey: string, pageTitle: string): PageVisualItem[] {
  const imageGroup = getCommercialPageImageGroup(pageKey);

  return [
    {
      id: `${pageKey}-hero`,
      title: `${pageTitle} için örnek kurulum görseli`,
      description: `Bu görsel blok, teklif odaklı sayfada ziyaretçiye kurulumun gerçek bağlamını ve sahadaki uygulama standardını gösterir.`,
      image: imageGroup.hero,
      alt: `${pageTitle} örnek kurulum görseli`,
    },
    {
      id: `${pageKey}-context`,
      title: `${pageTitle} kullanım alanı`,
      description: `Hizmetin konut, iş yeri, site veya depo gibi gerçek kullanım senaryolarında nasıl konumlandığını destekler.`,
      image: imageGroup.context,
      alt: `${pageTitle} uygulama ve ekipman yerleşimi görseli`,
    },
    {
      id: `${pageKey}-process`,
      title: `${pageTitle} montaj süreci`,
      description: `Keşif, montaj, devreye alma ve uzaktan erişim hazırlığı gibi ticari dönüşümü güçlendiren süreç adımlarını görsel olarak tamamlar.`,
      image: imageGroup.process,
      alt: `${pageTitle} montaj ve devreye alma süreci görseli`,
    },
    {
      id: `${pageKey}-diagram`,
      title: `${pageTitle} sistem şeması`,
      description: `Teknik niyet taşıyan ziyaretçi için cihaz akışı, kayıt altyapısı veya alarm bağlantı mantığını sade biçimde gösterir.`,
      image: imageGroup.diagram,
      alt: `${pageTitle} sistem bağlantı şeması`,
    },
  ];
}