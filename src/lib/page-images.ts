import { cities } from "@/data/cities";
import { services } from "@/data/services";
import {
  cityImageGroups,
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
  "kamera-sistemi-bakim-sozlesmesi": "kamera sistemi bakım sözleşmesi",
  "guvenlik-sistemi-teknik-servis": "güvenlik sistemi teknik servis hizmeti",
  "kamera-ariza-servisi": "kamera arıza servisi",
  "yangin-alarm-bakim-sozlesmesi": "yangın alarm bakım sözleşmesi",
  "uzaktan-kamera-izleme": "uzaktan kamera izleme hizmeti",
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

export function getCityPageVisuals(citySlug: string): PageVisualItem[] {
  const cityName = getCityName(citySlug);
  const imageGroup = getCityImageGroup(citySlug);

  return [
    {
      // imagePrompt: "Professional security technicians conducting a pre-installation survey at a Turkish residential or commercial building, reviewing camera placement, daytime, realistic photo"
      id: "city-hero",
      title: `${cityName} için keşif ve kurulum planlaması`,
      description: `${cityName} içindeki konut, iş yeri ve ticari alanlar için proje öncesi keşif yapılır; kapsam belirlenir ve cihaz yerleşimi planlanır. Sistemi kurmadan önce sahayı tanıyoruz.`,
      image: imageGroup.hero,
      alt: `${cityName} güvenlik sistemi kurulum planlama görseli`,
    },
    {
      // imagePrompt: "Security system technicians installing IP cameras and structured cabling in a building corridor, professional tools visible, realistic installation photo"
      id: "city-process",
      title: `${cityName} saha uygulama detayı`,
      description: `Kurulum, kablolama, kayıt altyapısı ve teslim aşamaları tek bir süreçte planlı biçimde yönetilir; ekibimiz projeyi başından sonuna kadar takip eder.`,
      image: imageGroup.process,
      alt: `${cityName} güvenlik sistemi montaj ve devreye alma süreci görseli`,
    },
    {
      // imagePrompt: "Clean technical diagram: IP cameras connected to NVR recorder, network switch, router, and smartphone for mobile monitoring, simple labeled layout on white background"
      id: "city-diagram",
      title: `${cityName} için sistem bileşen akışı`,
      description: `Kamera, alarm, geçiş kontrol ve mobil izleme bileşenlerinin birlikte nasıl çalıştığını gösteren sade sistem şeması. Her bileşenin rolünü ve birbirine nasıl bağlandığını açıkça aktarır.`,
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
      // imagePrompt: "Professional security technician mounting a surveillance camera on a wall bracket in a Turkish commercial or residential building, realistic installation photo"
      id: "service-hero",
      title: `${cityName} içinde ${serviceName}`,
      description: `${cityName} bölgesinde gerçekleştirilen kurulumlardan kesitler; sistem yerleşimi ve ekipman konumlandırmasının pratikte nasıl yapıldığını göstermektedir.`,
      image: imageGroup.hero,
      alt: `${cityName} için ${serviceName} görseli`,
    },
    {
      // imagePrompt: "Detail shot of structured cabling and security equipment: clean cable runs, NVR unit with connected camera ports, labeled connections, professional close-up installation"
      id: "service-context",
      title: `${serviceName} saha uygulaması`,
      description: `Kablolama düzeni, ekipman konumlandırması ve mobil erişim altyapısı hizmet türüne ve sahaya göre şekillenir. Uzmanlarımız en uygun yerleşimi keşif sonrasında belirler.`,
      image: imageGroup.context,
      alt: `${cityName} ${serviceName} örnek uygulama görseli`,
    },
    {
      // imagePrompt: "Simple technical diagram: cameras to NVR recorder to network router to smartphone live monitoring, clean white background, labeled arrows showing data flow"
      id: "service-diagram",
      title: `${serviceName} sistem şeması`,
      description: `${serviceName} hizmetinde kullanılan temel bileşenleri ve bunların birbirine nasıl bağlandığını gösteren sistem şeması. Kamera, kayıt cihazı, ağ bağlantısı ve mobil erişimin bir arada nasıl çalıştığını sade biçimde aktarır.`,
      image: imageGroup.diagram,
      alt: `${cityName} ${serviceName} sistem bağlantı şeması`,
    },
  ];
}
