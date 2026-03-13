export interface TrustElement {
  title: string;
  body: string;
  bullets: string[];
}

export type TrustIntentKey =
  | "installation"
  | "solution"
  | "maintenance"
  | "technical-service"
  | "monitoring";

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
    title: "Birden fazla güvenlik bileşeni birlikte düşünülmelidir",
    body:
      "Apartman, işyeri ve tesis projelerinde yalnızca cihaz seçimi değil günlük kullanım, giriş akışı ve kayıt beklentisi de birlikte planlanmalıdır.",
    bullets: [
      "Kapsamlı keşif ve alan analizi",
      "Kamera, alarm ve erişim kontrolünü birlikte planlama",
      "Operasyonu aksatmayan devreye alma yaklaşımı",
    ],
  },
  maintenance: {
    title: "Bakım hizmetinde hedef sadece arıza gidermek değildir",
    body:
      "Periyodik kontrol ile kayıt kaybı, kör nokta ve bağlantı sorunları büyümeden tespit edilir; bu da sistem sürekliliğini artırır.",
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
  monitoring: {
    title: "Uzaktan izleme hizmeti operasyon alışkanlığı ile birlikte kurulmalıdır",
    body:
      "Mobil erişim, kayıt akışı ve yetki yapısı günlük kullanıma uygun planlandığında uzaktan izleme gerçek anlamda fayda üretir.",
    bullets: [
      "Mobil erişim senaryolarının kurulması",
      "Yetki ve kullanıcı yönetiminin netleştirilmesi",
      "Bağlantı ve kayıt sürekliliği kontrolü",
    ],
  },
};
