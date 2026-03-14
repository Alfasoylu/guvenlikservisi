import type { HighLtvSegmentSlug } from "./segments";
import type { ServiceBusinessIntent } from "./services";

export interface TrustElement {
  title: string;
  body: string;
  bullets: string[];
}

export type TrustIntentKey = ServiceBusinessIntent;
export type TrustElementKey = TrustIntentKey | `segment:${HighLtvSegmentSlug}`;

export const trustElementsByIntent: Record<TrustIntentKey, TrustElement> = {
  installation: {
    title: "Kurulum projelerinde sahaya uygun planlama gerekir",
    body:
      "Doğru keşif, doğru ekipman seçimi ve temiz montaj süreci birlikte yönetildiğinde sistem ilk günden itibaren daha stabil çalışır.",
    bullets: [
      "Şehir içi keşif ve risk analizi",
      "Mekana uygun cihaz ve yerleşim planı",
      "Test, teslim ve kullanıcı bilgilendirmesi",
    ],
  },
  solution: {
    title: "Kurumsal çözüm sayfalarında ölçek ve süreklilik birlikte anlatılmalıdır",
    body:
      "Apartman, işyeri, plaza ve tesis projelerinde yalnızca cihaz seçimi değil; giriş akışı, merkezi görünürlük, bakım disiplini ve genişleme hazırlığı da birlikte planlanmalıdır.",
    bullets: [
      "Kapsamlı keşif ve alan analizi",
      "Kamera, alarm ve erişim kontrolünü birlikte planlama",
      "Bakım ve uzaktan izleme ile süreklilik hazırlığı",
    ],
  },
  maintenance: {
    title: "Bakım hizmetinde hedef sadece arıza gidermek değildir",
    body:
      "Periyodik kontrol ile kayıt kaybı, kör nokta ve bağlantı sorunları büyümeden tespit edilir; bu da sistem sürekliliğini ve sözleşme değerini artırır.",
    bullets: [
      "Periyodik kontrol ve raporlama",
      "Kayıt cihazı, disk ve bağlantı sağlığı takibi",
      "Planlı bakım ile arıza riskini azaltma",
    ],
  },
  "technical-service": {
    title: "Teknik serviste doğru teşhis müdahale hızından önce gelir",
    body:
      "Mevcut altyapıda yaşanan sorunlarda önce arıza kaynağını netleştirmek, gereksiz parça değişimini ve tekrar eden servis riskini azaltır.",
    bullets: [
      "Arıza ön değerlendirmesi",
      "Saha veya uzaktan müdahale planı",
      "Çözüm sonrası test ve kullanıcı bilgilendirmesi",
    ],
  },
  "fault-repair": {
    title: "Arıza servisinde hız kadar kayıt sürekliliğini geri kazanmak da kritiktir",
    body:
      "Görüntü yok, kayıt yok, kamera offline veya NVR problemi gibi durumlarda hızlı teşhis ve yerinde müdahale güvenlik açığını büyümeden kapatır.",
    bullets: [
      "Belirti bazlı hızlı arıza ayrımı",
      "NVR, disk, PoE ve ağ testi",
      "Sistemi yeniden çalışır hale getiren doğrulama adımı",
    ],
  },
  monitoring: {
    title: "Uzaktan izleme hizmeti operasyon alışkanlığı ile birlikte kurulmalıdır",
    body:
      "Mobil erişim, kayıt akışı ve yetki yapısı günlük kullanıma uygun planlandığında uzaktan izleme gerçek anlamda merkezi görünürlük üretir.",
    bullets: [
      "Mobil erişim senaryolarının kurulması",
      "Yetki ve kullanıcı yönetiminin netleşmesi",
      "Bağlantı ve kayıt sürekliliği kontrolü",
    ],
  },
};

export const segmentTrustElements: Record<`segment:${HighLtvSegmentSlug}`, TrustElement> = {
  "segment:site-yonetimi": {
    title: "Site projelerinde güven ortak alan sürekliliği ile kurulur",
    body:
      "Site yönetimleri sadece kurulum değil; ortak alan güvenliği, kayıt sürekliliği ve bakım disiplininin düzenli işlemesini bekler.",
    bullets: ["Yönetim kuruluna uygun kapsam", "Ortak alan kayıt sürekliliği", "Planlı bakım ve raporlama"],
  },
  "segment:fabrika": {
    title: "Fabrikalarda güven kesintisiz operasyonla ilgilidir",
    body:
      "Üretim ve çevre güvenliği projelerinde teşhis hızı, kayıt sürekliliği ve saha disiplini güvenin ana ölçüsüdür.",
    bullets: ["Geniş saha kapsama", "Hızlı saha müdahalesi", "Bakım ve izleme sürekliliği"],
  },
  "segment:depo": {
    title: "Depo projelerinde görünürlük ve kayıt güvenilirliği öne çıkar",
    body:
      "Yükleme alanları, stok takibi ve gece saatleri için kesintisiz izleme güven duygusunu belirler.",
    bullets: ["Yükleme alanı görünürlüğü", "Kayıt süresi ve disk sağlığı", "Gece takibi disiplini"],
  },
  "segment:avm": {
    title: "AVM projelerinde süreç disiplini güven sinyalidir",
    body:
      "Yoğun insan trafiği olan yapılarda bakım planı, test kayıtları ve entegrasyon disiplini projeyi belirler.",
    bullets: ["Uyumluluk odaklı planlama", "Periyodik test süreci", "Çok bileşenli entegrasyon"],
  },
  "segment:zincir-magaza": {
    title: "Çok şubeli yapılarda standart servis kalitesi kritik hale gelir",
    body:
      "Şubeler arasında aynı cihaz, aynı görünürlük ve aynı müdahale kalitesini sürdürebilmek en büyük güven unsurudur.",
    bullets: ["Merkezi görünürlük", "Standart servis notları", "Şubeler arası aynı disiplin"],
  },
  "segment:plaza-ofis": {
    title: "Kurumsal ofislerde profesyonel teslim ve entegrasyon beklenir",
    body:
      "Plaza ve ofis projelerinde ziyaretçi akışı, erişim kontrolü ve düzenli servis süreci aynı profesyonel çizgide yönetilmelidir.",
    bullets: ["Erişim kontrolü entegrasyonu", "Kurumsal raporlama", "Kesintisiz servis süreci"],
  },
};

export const trustElements: Record<TrustElementKey, TrustElement> = {
  ...trustElementsByIntent,
  ...segmentTrustElements,
};

export function getTrustElement(trustKey: TrustElementKey) {
  return trustElements[trustKey];
}
