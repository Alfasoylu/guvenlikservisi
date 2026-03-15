import type { HighLtvSegmentSlug } from "./segments";
import type { ServiceBusinessIntent } from "./services";

export type PainPointCategory =
  | "visibility-gap"
  | "recording-failure"
  | "network-instability"
  | "maintenance-risk"
  | "urgent-repair"
  | "segment-operations"
  | "service-continuity";

export type PainPointLeadIntent = "medium" | "high" | "urgent";

export interface PainPoint {
  slug: string;
  label: string;
  category: PainPointCategory;
  relevantServiceIntents: ServiceBusinessIntent[];
  relevantSegmentSlugs: HighLtvSegmentSlug[];
  leadIntentLevel: PainPointLeadIntent;
  recommendedCtaAngle: string;
  painStatement: string;
  businessImpact: string;
}

export const painPoints: PainPoint[] = [
  {
    slug: "kor-nokta-riski",
    label: "Kör nokta riski",
    category: "visibility-gap",
    relevantServiceIntents: ["installation", "solution"],
    relevantSegmentSlugs: ["site-yonetimi", "fabrika", "depo", "avm", "zincir-magaza", "plaza-ofis"],
    leadIntentLevel: "high",
    recommendedCtaAngle: "Keşifte kör noktaları ve kamera yerleşimini netleştirin.",
    painStatement: "Kritik girişler, çevre hattı veya ortak alanlar yeterli görüntü kapsaması alamıyor.",
    businessImpact: "Olay anı kayıtsız kalır, güvenlik açığı büyür ve yatırımın geri dönüşü zayıflar.",
  },
  {
    slug: "gece-gorusu-yetersizligi",
    label: "Gece görüşü yetersizliği",
    category: "visibility-gap",
    relevantServiceIntents: ["installation", "solution", "fault-repair"],
    relevantSegmentSlugs: ["site-yonetimi", "fabrika", "depo", "avm"],
    leadIntentLevel: "high",
    recommendedCtaAngle: "Gece performansı ve dış ortam ihtiyacına göre cihaz seçimini netleştirin.",
    painStatement: "Dış mekân ve düşük ışık alanlarında kameralar kullanılabilir görüntü vermiyor.",
    businessImpact: "Gece saatlerinde olay takibi zayıflar ve caydırıcılık etkisi düşer.",
  },
  {
    slug: "kayit-yok",
    label: "Kayıt yok",
    category: "recording-failure",
    relevantServiceIntents: ["maintenance", "technical-service", "fault-repair", "monitoring"],
    relevantSegmentSlugs: ["site-yonetimi", "fabrika", "depo", "zincir-magaza", "plaza-ofis"],
    leadIntentLevel: "urgent",
    recommendedCtaAngle: "Kayıt sürekliliğini geri kazanmak için hızlı teşhis ve müdahale planı sunun.",
    painStatement: "Sistem görüntü gösterse bile kayıt saklamıyor veya geçmişi açamıyor.",
    businessImpact: "Delil kaybı yaşanır, olay analizi mümkün olmaz ve operasyonel risk artar.",
  },
  {
    slug: "goruntu-yok",
    label: "Görüntü yok",
    category: "urgent-repair",
    relevantServiceIntents: ["technical-service", "fault-repair"],
    relevantSegmentSlugs: ["site-yonetimi", "depo", "zincir-magaza", "plaza-ofis"],
    leadIntentLevel: "urgent",
    recommendedCtaAngle: "Belirti bazlı hızlı arıza ayrımı ve yerinde destek önerisi sunun.",
    painStatement: "Kameralar siyah ekran veriyor, kopuyor veya hiç açılmıyor.",
    businessImpact: "Canlı takip kesilir, güvenlik zafiyeti büyür ve acil servis ihtiyacı doğar.",
  },
  {
    slug: "kamera-offline",
    label: "Kamera offline",
    category: "network-instability",
    relevantServiceIntents: ["technical-service", "fault-repair", "monitoring"],
    relevantSegmentSlugs: ["depo", "fabrika", "zincir-magaza"],
    leadIntentLevel: "urgent",
    recommendedCtaAngle: "Ağ, PoE ve cihaz tarafını birlikte kontrol eden servis dili kullanın.",
    painStatement: "Kameralar zaman zaman ağdan düşüyor veya uzaktan izleme ekranında kayboluyor.",
    businessImpact: "Kesintili sistem güven kaybı yaratır, kayıt sürekliliği bozulur ve saha kontrolü zorlaşır.",
  },
  {
    slug: "nvr-hdd-arizasi",
    label: "NVR / HDD arızası",
    category: "recording-failure",
    relevantServiceIntents: ["maintenance", "technical-service", "fault-repair"],
    relevantSegmentSlugs: ["site-yonetimi", "fabrika", "depo", "zincir-magaza"],
    leadIntentLevel: "urgent",
    recommendedCtaAngle: "Disk sağlığı, kayıt cihazı ve yedekleme riskini birlikte ele alın.",
    painStatement: "Kayıt cihazı hata veriyor, disk uyarısı çıkıyor veya görüntüler saklanmıyor.",
    businessImpact: "Kayıt kaybı ve tekrar eden arıza maliyeti artar; sistem güvenilirliği düşer.",
  },
  {
    slug: "poe-ag-kararsizligi",
    label: "PoE / ağ kararsızlığı",
    category: "network-instability",
    relevantServiceIntents: ["installation", "technical-service", "fault-repair", "monitoring"],
    relevantSegmentSlugs: ["fabrika", "depo", "zincir-magaza", "plaza-ofis"],
    leadIntentLevel: "high",
    recommendedCtaAngle: "Kablolama, switch ve ağ sağlığını sahada test eden bir yaklaşım sunun.",
    painStatement: "PoE hatları, switch veya ağ altyapısı stabil çalışmadığı için kameralar kopuyor.",
    businessImpact: "Kesintili sistem personel zamanını yer, servis tekrarlarını artırır ve olay takibini bozar.",
  },
  {
    slug: "bakim-yapilmayan-sistem",
    label: "Bakım yapılmayan sistem",
    category: "maintenance-risk",
    relevantServiceIntents: ["maintenance", "monitoring", "solution"],
    relevantSegmentSlugs: ["site-yonetimi", "fabrika", "depo", "avm", "plaza-ofis"],
    leadIntentLevel: "high",
    recommendedCtaAngle: "Periyodik kontrol ve sözleşmeli süreklilik vurgusu yapın.",
    painStatement: "Sistem çalışıyor gibi görünse de açılar, kayıt süresi ve cihaz sağlığı düzenli kontrol edilmiyor.",
    businessImpact: "Arıza olasılığı birikir, plansız servis maliyeti artar ve sistem zayıflıkları geç fark edilir.",
  },
  {
    slug: "uzaktan-erisim-sorunu",
    label: "Uzaktan erişim sorunu",
    category: "service-continuity",
    relevantServiceIntents: ["maintenance", "technical-service", "fault-repair", "monitoring"],
    relevantSegmentSlugs: ["site-yonetimi", "fabrika", "zincir-magaza", "plaza-ofis"],
    leadIntentLevel: "high",
    recommendedCtaAngle: "Mobil erişim, yetki ve bağlantı sürekliliğini birlikte düzeltin.",
    painStatement: "Telefon veya bilgisayardan sisteme bağlanılamıyor, uzaktan takip aksıyor.",
    businessImpact: "Yöneticiler anlık kontrolü kaybeder, saha bağımlılığı artar ve olaylara geç reaksiyon verilir.",
  },
  {
    slug: "ortak-alan-guvenligi",
    label: "Ortak alan güvenliği",
    category: "segment-operations",
    relevantServiceIntents: ["solution", "maintenance", "monitoring"],
    relevantSegmentSlugs: ["site-yonetimi"],
    leadIntentLevel: "high",
    recommendedCtaAngle: "Yönetim onayı, ortak alan kayıt sürekliliği ve raporlama odağını öne çıkar.",
    painStatement: "Apartman ve site projelerinde girişler, otoparklar ve ortak alanlar tutarlı şekilde izlenemiyor.",
    businessImpact: "Sakin şikâyetleri artar, yönetim baskısı büyür ve ortak alan güvenliği zayıflar.",
  },
  {
    slug: "yonetim-onay-sureci",
    label: "Yönetim onay süreci",
    category: "segment-operations",
    relevantServiceIntents: ["solution", "maintenance"],
    relevantSegmentSlugs: ["site-yonetimi", "plaza-ofis"],
    leadIntentLevel: "medium",
    recommendedCtaAngle: "Karar vericiye net kapsam, bakım planı ve kolay raporlama sunun.",
    painStatement: "Karar süreci çok paydaşlı olduğu için teklif ve kapsam netleşmeden proje yavaşlıyor.",
    businessImpact: "Satış döngüsü uzar, eksik karar nedeniyle sistem yetersiz veya dağınık kurulabilir.",
  },
  {
    slug: "stok-kaybi-ve-gece-takibi",
    label: "Stok kaybı ve gece takibi",
    category: "segment-operations",
    relevantServiceIntents: ["solution", "maintenance", "monitoring", "fault-repair"],
    relevantSegmentSlugs: ["depo", "fabrika"],
    leadIntentLevel: "high",
    recommendedCtaAngle: "Yükleme alanı, gece izleme ve kayıt güvenilirliği odağını kullanın.",
    painStatement: "Depo ve üretim sahalarında yükleme alanları, raf koridorları veya çevre hattı yeterince izlenemiyor.",
    businessImpact: "Stok kaybı, sevkiyat uyuşmazlığı ve gece saatlerinde kontrol zafiyeti oluşur.",
  },
  {
    slug: "cok-lokasyonlu-standart",
    label: "Çok lokasyonlu standart ihtiyacı",
    category: "segment-operations",
    relevantServiceIntents: ["solution", "monitoring", "maintenance", "technical-service"],
    relevantSegmentSlugs: ["zincir-magaza", "avm"],
    leadIntentLevel: "high",
    recommendedCtaAngle: "Merkezi görünürlük, standart servis disiplini ve raporlama sunun.",
    painStatement: "Şubeler veya büyük ticari alanlarda farklı lokasyonlar aynı servis standardını alamıyor.",
    businessImpact: "Operasyon dağılır, arıza takibi zorlaşır ve merkezi kontrol zayıflar.",
  },
  {
    slug: "erisim-kontrol-entegrasyonu",
    label: "Erişim kontrol entegrasyonu",
    category: "segment-operations",
    relevantServiceIntents: ["installation", "solution", "technical-service"],
    relevantSegmentSlugs: ["plaza-ofis", "avm", "zincir-magaza"],
    leadIntentLevel: "high",
    recommendedCtaAngle: "Kamera, alarm ve geçiş kontrolünü tek proje akışı olarak konumlandırın.",
    painStatement: "Ofis ve kurumsal yapılarda kamera, alarm ve geçiş kontrol sistemleri birbirinden kopuk çalışıyor.",
    businessImpact: "Profesyonel hizmet beklentisi karşılanmaz, operasyonel disiplin ve güvenlik koordinasyonu zayıflar.",
  },
  {
    slug: "sla-ve-servis-surekliligi",
    label: "SLA ve servis sürekliliği beklentisi",
    category: "service-continuity",
    relevantServiceIntents: ["maintenance", "monitoring", "technical-service", "solution"],
    relevantSegmentSlugs: ["fabrika", "depo", "avm", "zincir-magaza", "plaza-ofis", "site-yonetimi"],
    leadIntentLevel: "high",
    recommendedCtaAngle: "Sözleşme, müdahale önceliği ve düzenli raporlama ile güven verin.",
    painStatement: "Kurumsal projelerde hizmet kalitesi bir defalık kurulumla değil, süreklilik ve müdahale disiplini ile ölçülüyor.",
    businessImpact: "Bakım ve servis düzensizliği müşteri kaybına, tekrar eden arızalara ve itibar aşınmasına yol açar.",
  },
];

export type PainPointSlug = (typeof painPoints)[number]["slug"];

export const painPointSlugsByServiceSlug: Record<string, PainPointSlug[]> = {
  "kamera-sistemi-kurulumu": ["kor-nokta-riski", "gece-gorusu-yetersizligi", "poe-ag-kararsizligi"],
  "alarm-sistemi-kurulumu": ["kor-nokta-riski", "yonetim-onay-sureci"],
  "yangin-alarm-sistemi-kurulumu": ["bakim-yapilmayan-sistem", "sla-ve-servis-surekliligi"],
  "kartli-gecis-sistemi-kurulumu": ["erisim-kontrol-entegrasyonu", "sla-ve-servis-surekliligi"],
  "apartman-site-guvenlik-sistemi": ["ortak-alan-guvenligi", "yonetim-onay-sureci", "bakim-yapilmayan-sistem"],
  "isyeri-guvenlik-sistemi": ["kor-nokta-riski", "erisim-kontrol-entegrasyonu", "bakim-yapilmayan-sistem"],
  "fabrika-depo-guvenlik-sistemi": ["stok-kaybi-ve-gece-takibi", "kor-nokta-riski", "sla-ve-servis-surekliligi"],
  "bakim-servis-uzaktan-izleme": ["bakim-yapilmayan-sistem", "uzaktan-erisim-sorunu", "sla-ve-servis-surekliligi"],
  "kamera-sistemi-bakim-sozlesmesi": ["bakim-yapilmayan-sistem", "kayit-yok", "nvr-hdd-arizasi"],
  "guvenlik-sistemi-teknik-servis": ["goruntu-yok", "poe-ag-kararsizligi", "erisim-kontrol-entegrasyonu"],
  "kamera-ariza-servisi": ["goruntu-yok", "kayit-yok", "kamera-offline", "nvr-hdd-arizasi"],
  "yangin-alarm-bakim-sozlesmesi": ["bakim-yapilmayan-sistem", "sla-ve-servis-surekliligi"],
  "uzaktan-kamera-izleme": ["uzaktan-erisim-sorunu", "cok-lokasyonlu-standart", "sla-ve-servis-surekliligi"],
};

export function getPainPointBySlug(painPointSlug: string) {
  return painPoints.find((painPoint) => painPoint.slug === painPointSlug);
}

export function getPainPointsBySlugs(painPointSlugs: readonly string[]) {
  return painPointSlugs
    .map((painPointSlug) => getPainPointBySlug(painPointSlug))
    .filter((painPoint): painPoint is PainPoint => Boolean(painPoint));
}

export function getPainPointsByServiceIntent(serviceIntent: ServiceBusinessIntent) {
  return painPoints.filter((painPoint) => painPoint.relevantServiceIntents.includes(serviceIntent));
}

export function getPainPointsBySegment(segmentSlug: HighLtvSegmentSlug) {
  return painPoints.filter((painPoint) => painPoint.relevantSegmentSlugs.includes(segmentSlug));
}
