import type { ServiceBusinessIntent } from "./services";

export interface TrustElement {
  title: string;
  body: string;
  bullets: string[];
}

export type TrustIntentKey = ServiceBusinessIntent;

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
      "Belirti bazlı hızlı arıza ayrıştırması",
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
