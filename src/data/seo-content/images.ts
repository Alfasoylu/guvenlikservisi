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

const maintenanceTeam: ServiceImageSource = {
  src: "/images/services/bakim-servis/guvenlik-sistemi-bakim-teknisyen-ekip.jpg",
  subject: "güvenlik sistemi bakım teknisyen ekibi",
  title: "Teknik ekip",
  caption: "Saha bakım ve kontrol süreçleri deneyimli teknik ekiple yürütülür.",
  aspect: "hero",
};

const monitoringCenter: ServiceImageSource = {
  src: "/images/services/bakim-servis/guvenlik-kamera-sistemi-izleme-merkezi.jpg",
  subject: "güvenlik kamera sistemi izleme merkezi",
  title: "İzleme merkezi",
  caption: "Merkezi izleme ekranları, kayıt ve operasyon takibini tek noktada toplar.",
  aspect: "landscape",
};

const nvrControl: ServiceImageSource = {
  src: "/images/services/bakim-servis/nvr-kayit-cihazi-bakim-harddisk-kontrol.jpg",
  subject: "NVR kayıt cihazı bakım ve harddisk kontrolü",
  title: "NVR kontrolü",
  caption: "Kayıt cihazı ve depolama altyapısı düzenli kontrol ile kesintisiz çalışır.",
  aspect: "landscape",
};

const nvrDiskTest: ServiceImageSource = {
  src: "/images/services/bakim-servis/nvr-kayit-cihazi-bakim-kontrol-harddisk-testi.jpg",
  subject: "NVR kayıt cihazı harddisk testi",
  title: "Harddisk testi",
  caption: "Kayıt süresi ve disk sağlığı proje teslim kalitesi için kritik önemdedir.",
  aspect: "landscape",
};

const siteMaintenance: ServiceImageSource = {
  src: "/images/services/bakim-servis/site-kamera-sistemi-periyodik-bakim.jpg",
  subject: "site kamera sistemi periyodik bakım sahası",
  title: "Site bakımı",
  caption: "Site ve apartman projelerinde ortak alan kamera sistemleri düzenli kontrol edilir.",
  aspect: "landscape",
};

const siteMonitoring: ServiceImageSource = {
  src: "/images/services/bakim-servis/site-yonetimi-guvenlik-merkezi-izleme-ekrani.jpg",
  subject: "site yönetimi güvenlik merkezi izleme ekranı",
  title: "Site izleme ekranı",
  caption: "Toplu yapılarda merkezi izleme ekranları güvenlik operasyonuna görünürlük kazandırır.",
  aspect: "landscape",
};

const remoteMonitoring: ServiceImageSource = {
  src: "/images/services/bakim-servis/uzaktan-izleme-merkezi-ekranlari.jpg",
  subject: "uzaktan izleme merkezi ekranları",
  title: "Uzaktan izleme",
  caption: "Uzaktan izleme merkezleri kayıt akışı ve sistem durumunu anlık takip etmeyi kolaylaştırır.",
  aspect: "landscape",
};

const cameraServiceTeam: ServiceImageSource = {
  src: "/images/services/bakim-servis/guvenlik-sistemi-teknik-servis-ekip-isyeri-kamera-montaji.jpg",
  subject: "işyeri kamera montajı yapan teknik servis ekibi",
  title: "Kamera montaj ekibi",
  caption: "İşyeri ve ticari alanlarda kamera noktaları saha keşfine göre profesyonelce yerleştirilir.",
  aspect: "hero",
};

const cameraPeriodicMaintenance: ServiceImageSource = {
  src: "/images/services/bakim-servis/kamera-sistemi-periyodik-bakim-servisi.jpg",
  subject: "kamera sistemi periyodik bakım servisi",
  title: "Periyodik bakım",
  caption: "Kamera sistemlerinde görüntü kalitesi ve kayıt sürekliliği için düzenli bakım gerekir.",
  aspect: "landscape",
};

const marketCamera: ServiceImageSource = {
  src: "/images/services/bakim-servis/market-kamera-montaji-gorunmez-kablolama-demosu.jpg",
  subject: "market kamera montajı ve görünmez kablolama uygulaması",
  title: "Mağaza uygulaması",
  caption: "Mağaza ve işyeri projelerinde düzenli kablolama, temiz teslimin önemli parçasıdır.",
  aspect: "landscape",
};

const factoryCamera: ServiceImageSource = {
  src: "/images/services/bakim-servis/fabrika-guvenlik-kamera-bakim-servisi.jpg",
  subject: "fabrika güvenlik kamera bakım servisi sahası",
  title: "Fabrika güvenliği",
  caption: "Fabrika ve depo alanlarında çevre izleme ile kayıt kontrolü birlikte planlanır.",
  aspect: "landscape",
};

const accessTurnstile: ServiceImageSource = {
  src: "/images/services/bakim-servis/kartli-gecis-sistemi-turnike-giris.jpg",
  subject: "kartlı geçiş sistemi turnike giriş alanı",
  title: "Turnike girişi",
  caption: "Kartlı geçiş ve turnike çözümleri giriş çıkış kontrolünü kurumsal standartta yönetir.",
  aspect: "hero",
};

const accessMobileLogs: ServiceImageSource = {
  src: "/images/services/bakim-servis/kartli-gecis-sistemi-mobil-giris-cikis-kayitlari-ve-maas-hesaplama.jpg",
  subject: "kartlı geçiş sistemi mobil giriş çıkış kayıtları",
  title: "Mobil kayıt takibi",
  caption: "Geçiş kayıtları mobil erişim ve raporlama süreçlerine entegre edilebilir.",
  aspect: "landscape",
};

const fireAlarmPanel: ServiceImageSource = {
  src: "/images/services/bakim-servis/yangin-alarm-paneli-kontrol-sistemi.jpg",
  subject: "yangın alarm paneli kontrol sistemi",
  title: "Yangın paneli",
  caption: "Yangın alarm paneli, saha cihazları ve alarm senaryoları test edilerek devreye alınır.",
  aspect: "hero",
};

const fireAlarmDetector: ServiceImageSource = {
  src: "/images/services/bakim-servis/yangin-alarm-dedektor-ve-acil-butonu.jpg",
  subject: "yangın alarm dedektörü ve acil butonu",
  title: "Dedektör ve buton",
  caption: "Dedektör ve acil buton noktaları yangın algılama senaryosunun temel bileşenleridir.",
  aspect: "landscape",
};

const alarmPanelTest: ServiceImageSource = {
  src: "/images/services/bakim-servis/alarm-panel-sensor-test-bakim.jpg",
  subject: "alarm paneli sensör test bakımı",
  title: "Panel testi",
  caption: "Alarm paneli ve sensörlerin test edilmesi, sistem güvenilirliğini artırır.",
  aspect: "landscape",
};

const alarmServicePanel: ServiceImageSource = {
  src: "/images/services/bakim-servis/alarm-sistemi-panel-test-servis.jpg",
  subject: "alarm sistemi panel test servisi",
  title: "Alarm servis paneli",
  caption: "Alarm paneli, saha cihazları ve servis kontrolleri proje güvenliği için birlikte değerlendirilir.",
  aspect: "hero",
};

export const fallbackServiceImages: ServiceImageRegistryEntry = {
  hero: maintenanceTeam,
  support: [monitoringCenter, nvrControl],
  useCases: [siteMaintenance, siteMonitoring],
  cta: monitoringCenter,
};

export const serviceImages: Record<string, ServiceImageRegistryEntry> = {
  "bakim-servis-uzaktan-izleme": {
    hero: maintenanceTeam,
    support: [nvrControl, siteMaintenance],
    useCases: [remoteMonitoring, siteMonitoring],
    cta: monitoringCenter,
  },
  "kartli-gecis-sistemi-kurulumu": {
    hero: accessTurnstile,
    support: [accessMobileLogs],
    useCases: [accessTurnstile, accessMobileLogs],
    cta: accessMobileLogs,
  },
  "yangin-alarm-sistemi-kurulumu": {
    hero: fireAlarmPanel,
    support: [fireAlarmDetector],
    useCases: [fireAlarmPanel, fireAlarmDetector],
    cta: fireAlarmDetector,
  },
  "kamera-sistemi-kurulumu": {
    hero: cameraServiceTeam,
    support: [cameraPeriodicMaintenance, marketCamera],
    useCases: [factoryCamera],
    cta: nvrDiskTest,
  },
  "isyeri-guvenlik-sistemi": {
    hero: cameraServiceTeam,
    support: [marketCamera, siteMonitoring],
    useCases: [marketCamera, monitoringCenter],
    cta: monitoringCenter,
  },
  "alarm-sistemi-kurulumu": {
    hero: alarmServicePanel,
    support: [alarmPanelTest],
    useCases: [alarmServicePanel, alarmPanelTest],
    cta: alarmPanelTest,
  },
  "apartman-site-guvenlik-sistemi": {
    hero: siteMaintenance,
    support: [siteMonitoring, monitoringCenter],
    useCases: [siteMaintenance, siteMonitoring],
    cta: monitoringCenter,
  },
  "fabrika-depo-guvenlik-sistemi": {
    hero: factoryCamera,
    support: [nvrControl, monitoringCenter],
    useCases: [factoryCamera, nvrDiskTest],
    cta: nvrDiskTest,
  },
};
