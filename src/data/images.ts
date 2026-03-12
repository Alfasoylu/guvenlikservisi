export type PageImageSlot = "hero" | "context" | "process" | "diagram";

export interface ImageAsset {
  src: string;
  width: number;
  height: number;
}

export interface ImageGroup {
  hero: ImageAsset;
  context: ImageAsset;
  process: ImageAsset;
  diagram: ImageAsset;
}

const widescreen = (src: string): ImageAsset => ({
  src,
  width: 1600,
  height: 900,
});

export const fallbackImageGroup: ImageGroup = {
  hero: widescreen("/images/cities/city-security-hub.svg"),
  context: widescreen("/images/landing/uzaktan-izleme-mobil.webp"),
  process: widescreen("/images/services/bakim-servis/guvenlik-sistemi-bakim-teknisyen-ekip.jpg"),
  diagram: widescreen("/images/diagrams/security-network-flow.svg"),
};

export const cityImageGroups: Record<string, Partial<ImageGroup>> = {
  istanbul: {
    hero: widescreen("/images/cities/istanbul-security-hub.svg"),
    context: widescreen("/images/landing/istanbul-ip-kamera-hero.webp"),
  },
};

export const serviceImageGroups: Record<string, Partial<ImageGroup>> = {
  "kamera-sistemi-kurulumu": {
    hero: widescreen("/images/landing/istanbul-ip-kamera-hero.webp"),
    context: widescreen("/images/landing/ip-kamera-kurulum-detay.webp"),
    process: widescreen("/images/landing/gunduz-ve-gece-kayit-demo.webp"),
    diagram: widescreen("/images/diagrams/camera-system-flow.svg"),
  },
  "alarm-sistemi-kurulumu": {
    hero: widescreen("/images/landing/isyeri-ajax-alarm-kurulum-servisi.png"),
    context: widescreen("/images/landing/telefondan-kablosuz-alarm-kontrol-app.webp"),
    process: widescreen("/images/landing/istanbul-alarm-sistemi-kurulumu-kablolu-kablosuz.jpg.png"),
    diagram: widescreen("/images/diagrams/alarm-system-flow.svg"),
  },
  "yangin-alarm-sistemi-kurulumu": {
    hero: widescreen("/images/services/bakim-servis/alarm-panel-sensor-test-bakim.jpg"),
    context: widescreen("/images/services/bakim-servis/guvenlik-sistemi-bakim-teknisyen-ekip.jpg"),
    process: widescreen("/images/services/bakim-servis/site-yonetimi-guvenlik-merkezi-izleme-ekrani.jpg"),
    diagram: widescreen("/images/diagrams/fire-alarm-flow.svg"),
  },
  "kartli-gecis-sistemi-kurulumu": {
    hero: widescreen("/images/landing/magazamiz-foto.webp"),
    context: widescreen("/images/services/bakim-servis/site-yonetimi-guvenlik-merkezi-izleme-ekrani.jpg"),
    process: widescreen("/images/landing/uzaktan-izleme-mobil.webp"),
    diagram: widescreen("/images/diagrams/access-control-flow.svg"),
  },
  "apartman-site-guvenlik-sistemi": {
    hero: widescreen("/images/services/bakim-servis/site-kamera-sistemi-periyodik-bakim.jpg"),
    context: widescreen("/images/services/bakim-servis/site-yonetimi-guvenlik-merkezi-izleme-ekrani.jpg"),
    process: widescreen("/images/landing/dis-ortam-goruntu-demo.webp"),
    diagram: widescreen("/images/diagrams/security-network-flow.svg"),
  },
  "isyeri-guvenlik-sistemi": {
    hero: widescreen("/images/landing/magazamiz-foto.webp"),
    context: widescreen("/images/landing/isyeri-ajax-alarm-kurulum-servisi.png"),
    process: widescreen("/images/landing/uzaktan-izleme-mobil.webp"),
    diagram: widescreen("/images/diagrams/security-network-flow.svg"),
  },
  "fabrika-depo-guvenlik-sistemi": {
    hero: widescreen("/images/services/bakim-servis/fabrika-guvenlik-kamera-bakim-servisi.jpg"),
    context: widescreen("/images/services/bakim-servis/nvr-kayit-cihazi-bakim-harddisk-kontrol.jpg"),
    process: widescreen("/images/landing/arac-plaka-goruntu-demo.webp"),
    diagram: widescreen("/images/diagrams/security-network-flow.svg"),
  },
  "bakim-servis-uzaktan-izleme": {
    hero: widescreen("/images/services/bakim-servis/guvenlik-sistemi-bakim-teknisyen-ekip.jpg"),
    context: widescreen("/images/services/bakim-servis/uzaktan-izleme-merkezi-ekranlari.jpg"),
    process: widescreen("/images/landing/uzaktan-izleme-mobil.webp"),
    diagram: widescreen("/images/diagrams/security-network-flow.svg"),
  },
};