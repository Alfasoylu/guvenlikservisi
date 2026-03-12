export type ServiceImageAspect = "hero" | "landscape" | "square";

export interface ServiceImageSource {
  src: string;
  subject: string;
  title?: string;
  caption?: string;
  aspect?: ServiceImageAspect;
}

export interface ServiceImageRegistryEntry {
  hero?: ServiceImageSource;
  support?: ServiceImageSource[];
  useCases?: ServiceImageSource[];
  cta?: ServiceImageSource;
}

const cameraHero: ServiceImageSource = {
  src: "/images/landing/istanbul-ip-kamera-hero.webp",
  subject: "IP kamera kurulum sahası",
  title: "Saha kurulum görünümü",
  caption: "Kurulum noktaları, cihaz yerleşimi ve izleme altyapısı birlikte planlanır.",
  aspect: "hero",
};

const cameraContext: ServiceImageSource = {
  src: "/images/landing/ip-kamera-kurulum-detay.webp",
  subject: "kamera sistemi kablolama ve kayıt altyapısı",
  title: "Kurulum detayı",
  caption: "Kayıt cihazı, bağlantılar ve görüntü altyapısı profesyonel şekilde devreye alınır.",
  aspect: "landscape",
};

const cameraMonitoring: ServiceImageSource = {
  src: "/images/landing/uzaktan-izleme-mobil.webp",
  subject: "mobil izleme ekranı",
  title: "Mobil izleme",
  caption: "Telefon ve tablet üzerinden canlı görüntü takibi desteklenir.",
  aspect: "landscape",
};

const outdoorCamera: ServiceImageSource = {
  src: "/images/landing/dis-ortam-goruntu-demo.webp",
  subject: "dış ortam güvenlik kamerası görüntüsü",
  title: "Dış alan güvenliği",
  caption: "Açık alanlar, bina çevresi ve giriş noktaları için uygun kamera senaryoları kurgulanır.",
  aspect: "landscape",
};

const indoorCamera: ServiceImageSource = {
  src: "/images/landing/ic-ortam-goruntu-demo.webp",
  subject: "iç mekan güvenlik kamerası görüntüsü",
  title: "İç alan takibi",
  caption: "Ofis, mağaza ve ortak alanlarda net görüntü sağlayan iç mekan çözümleri uygulanır.",
  aspect: "landscape",
};

const alarmHero: ServiceImageSource = {
  src: "/images/landing/isyeri-ajax-alarm-kurulum-servisi.png",
  subject: "alarm sistemi kurulum sahası",
  title: "Alarm kurulumu",
  caption: "Panel, sensör ve siren yerleşimi keşif sonrası doğru noktalarda planlanır.",
  aspect: "hero",
};

const alarmMobile: ServiceImageSource = {
  src: "/images/landing/telefondan-kablosuz-alarm-kontrol-app.webp",
  subject: "mobil alarm kontrol ekranı",
  title: "Mobil alarm yönetimi",
  caption: "Alarm sistemi mobil bildirim ve uzaktan kontrol altyapısıyla desteklenir.",
  aspect: "landscape",
};

const alarmPanel: ServiceImageSource = {
  src: "/images/services/bakim-servis/alarm-panel-sensor-test-bakim.jpg",
  subject: "alarm paneli ve sensör testi",
  title: "Panel ve sensör kontrolü",
  caption: "Alarm paneli, sensörler ve saha bağlantıları test edilerek sistem sürekliliği korunur.",
  aspect: "landscape",
};

const businessSecurity: ServiceImageSource = {
  src: "/images/landing/magazamiz-foto.webp",
  subject: "işyeri güvenlik uygulama alanı",
  title: "İşyeri güvenliği",
  caption: "Mağaza, ofis ve ticari alanlarda güvenlik noktaları işletme akışına göre konumlandırılır.",
  aspect: "hero",
};

const maintenanceTeam: ServiceImageSource = {
  src: "/images/services/bakim-servis/guvenlik-sistemi-bakim-teknisyen-ekip.jpg",
  subject: "saha teknik ekibi çalışması",
  title: "Teknik ekip",
  caption: "Kurulum, bakım ve devreye alma süreçleri deneyimli ekiplerle yönetilir.",
  aspect: "hero",
};

const nvrMaintenance: ServiceImageSource = {
  src: "/images/services/bakim-servis/nvr-kayit-cihazi-bakim-harddisk-kontrol.jpg",
  subject: "NVR kayıt cihazı ve disk kontrolü",
  title: "Kayıt cihazı kontrolü",
  caption: "Kayıt altyapısı ve depolama kapasitesi proje ihtiyacına göre kontrol edilir.",
  aspect: "landscape",
};

const siteMonitoring: ServiceImageSource = {
  src: "/images/services/bakim-servis/site-yonetimi-guvenlik-merkezi-izleme-ekrani.jpg",
  subject: "güvenlik izleme merkezi ekranları",
  title: "İzleme merkezi",
  caption: "Site ve toplu yapılarda merkezi izleme ekranları operasyonel güveni artırır.",
  aspect: "landscape",
};

const siteMaintenance: ServiceImageSource = {
  src: "/images/services/bakim-servis/site-kamera-sistemi-periyodik-bakim.jpg",
  subject: "site kamera sistemi saha kontrolü",
  title: "Site sistemi kontrolü",
  caption: "Apartman ve site projelerinde ortak alan güvenliği düzenli kontrollerle desteklenir.",
  aspect: "landscape",
};

const factorySecurity: ServiceImageSource = {
  src: "/images/services/bakim-servis/fabrika-guvenlik-kamera-bakim-servisi.jpg",
  subject: "fabrika güvenlik kamerası saha uygulaması",
  title: "Fabrika güvenliği",
  caption: "Fabrika ve depo alanlarında çevre güvenliği ile kayıt sürekliliği birlikte ele alınır.",
  aspect: "landscape",
};

const remoteMonitoring: ServiceImageSource = {
  src: "/images/services/bakim-servis/uzaktan-izleme-merkezi-ekranlari.jpg",
  subject: "uzaktan izleme merkezi ekranları",
  title: "Uzaktan izleme",
  caption: "Merkezi izleme ekranları saha ekipleri için hızlı kontrol ve müdahale avantajı sağlar.",
  aspect: "landscape",
};

export const fallbackServiceImages: ServiceImageRegistryEntry = {
  hero: maintenanceTeam,
  support: [cameraContext, cameraMonitoring],
  useCases: [indoorCamera, outdoorCamera],
  cta: siteMonitoring,
};

export const serviceImages: Record<string, ServiceImageRegistryEntry> = {
  "kamera-sistemi-kurulumu": {
    hero: cameraHero,
    support: [cameraContext, cameraMonitoring],
    useCases: [indoorCamera, outdoorCamera],
    cta: cameraMonitoring,
  },
  "alarm-sistemi-kurulumu": {
    hero: alarmHero,
    support: [alarmMobile, alarmPanel],
    useCases: [businessSecurity, alarmMobile],
    cta: alarmPanel,
  },
  "yangin-alarm-sistemi-kurulumu": {
    hero: alarmPanel,
    support: [maintenanceTeam, siteMonitoring],
    useCases: [businessSecurity, siteMonitoring],
    cta: alarmPanel,
  },
  "kartli-gecis-sistemi-kurulumu": {
    hero: businessSecurity,
    support: [siteMonitoring, cameraMonitoring],
    useCases: [businessSecurity, siteMaintenance],
    cta: siteMonitoring,
  },
  "apartman-site-guvenlik-sistemi": {
    hero: siteMaintenance,
    support: [siteMonitoring, outdoorCamera],
    useCases: [siteMaintenance, siteMonitoring],
    cta: siteMonitoring,
  },
  "isyeri-guvenlik-sistemi": {
    hero: businessSecurity,
    support: [alarmHero, cameraMonitoring],
    useCases: [businessSecurity, indoorCamera],
    cta: alarmHero,
  },
  "fabrika-depo-guvenlik-sistemi": {
    hero: factorySecurity,
    support: [nvrMaintenance, outdoorCamera],
    useCases: [factorySecurity, nvrMaintenance],
    cta: factorySecurity,
  },
  "bakim-servis-uzaktan-izleme": {
    hero: maintenanceTeam,
    support: [nvrMaintenance, remoteMonitoring, siteMaintenance],
    useCases: [factorySecurity, siteMonitoring],
    cta: alarmPanel,
  },
};
