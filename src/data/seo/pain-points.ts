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
    label: "Kor nokta riski",
    category: "visibility-gap",
    relevantServiceIntents: ["installation", "solution"],
    relevantSegmentSlugs: ["site-yonetimi", "fabrika", "depo", "avm", "zincir-magaza", "plaza-ofis"],
    leadIntentLevel: "high",
    recommendedCtaAngle: "Kesifte kor noktalari ve kamera yerlesimini netlestirin.",
    painStatement: "Kritik girisler, cevre hatti veya ortak alanlar yeterli goruntu kapsamasi alamiyor.",
    businessImpact: "Olay ani kayitsiz kalir, guvenlik acigi buyur ve yatirimin geri donusu zayiflar.",
  },
  {
    slug: "gece-gorusu-yetersizligi",
    label: "Gece gorusu yetersizligi",
    category: "visibility-gap",
    relevantServiceIntents: ["installation", "solution", "fault-repair"],
    relevantSegmentSlugs: ["site-yonetimi", "fabrika", "depo", "avm"],
    leadIntentLevel: "high",
    recommendedCtaAngle: "Gece performansi ve dis ortam ihtiyacina gore cihaz secimini netlestirin.",
    painStatement: "Dis mekan ve dusuk isik alanlarinda kameralar kullanilabilir goruntu vermiyor.",
    businessImpact: "Gece saatlerinde olay takibi zayiflar ve caydiricilik etkisi duser.",
  },
  {
    slug: "kayit-yok",
    label: "Kayit yok",
    category: "recording-failure",
    relevantServiceIntents: ["maintenance", "technical-service", "fault-repair", "monitoring"],
    relevantSegmentSlugs: ["site-yonetimi", "fabrika", "depo", "zincir-magaza", "plaza-ofis"],
    leadIntentLevel: "urgent",
    recommendedCtaAngle: "Kayit surekliligini geri kazanmak icin hizli teshis ve mudahale plani sunun.",
    painStatement: "Sistem goruntu gosterse bile kayit saklamiyor veya gecmisi acamiyor.",
    businessImpact: "Delil kaybi yasanir, olay analizi mumkun olmaz ve operasyonel risk artar.",
  },
  {
    slug: "goruntu-yok",
    label: "Goruntu yok",
    category: "urgent-repair",
    relevantServiceIntents: ["technical-service", "fault-repair"],
    relevantSegmentSlugs: ["site-yonetimi", "depo", "zincir-magaza", "plaza-ofis"],
    leadIntentLevel: "urgent",
    recommendedCtaAngle: "Belirti bazli hizli ariza ayrimi ve yerinde destek onerisi sunun.",
    painStatement: "Kameralar siyah ekran veriyor, kopuyor veya hic acilmiyor.",
    businessImpact: "Canli takip kesilir, guvenlik zafiyeti buyur ve acil servis ihtiyaci dogar.",
  },
  {
    slug: "kamera-offline",
    label: "Kamera offline",
    category: "network-instability",
    relevantServiceIntents: ["technical-service", "fault-repair", "monitoring"],
    relevantSegmentSlugs: ["depo", "fabrika", "zincir-magaza"],
    leadIntentLevel: "urgent",
    recommendedCtaAngle: "Ag, PoE ve cihaz tarafini birlikte kontrol eden servis dili kullanin.",
    painStatement: "Kameralar zaman zaman agdan dusuyor veya uzaktan izleme ekraninda kayboluyor.",
    businessImpact: "Kesintili sistem guven kaybi yaratir, kayit surekliligi bozulur ve saha kontroli zorlasir.",
  },
  {
    slug: "nvr-hdd-arizasi",
    label: "NVR / HDD arizasi",
    category: "recording-failure",
    relevantServiceIntents: ["maintenance", "technical-service", "fault-repair"],
    relevantSegmentSlugs: ["site-yonetimi", "fabrika", "depo", "zincir-magaza"],
    leadIntentLevel: "urgent",
    recommendedCtaAngle: "Disk sagligi, kayit cihazi ve yedekleme riskini birlikte ele alin.",
    painStatement: "Kayit cihazi hata veriyor, disk uyarisi cikiyor veya goruntuler saklanmiyor.",
    businessImpact: "Kayit kaybi ve tekrar eden ariza maliyeti artar; sistem guvenilirligi duser.",
  },
  {
    slug: "poe-ag-kararsizligi",
    label: "PoE / ag kararsizligi",
    category: "network-instability",
    relevantServiceIntents: ["installation", "technical-service", "fault-repair", "monitoring"],
    relevantSegmentSlugs: ["fabrika", "depo", "zincir-magaza", "plaza-ofis"],
    leadIntentLevel: "high",
    recommendedCtaAngle: "Kablolama, switch ve ag sagligini sahada test eden bir yaklasim sunun.",
    painStatement: "PoE hatlari, switch veya ag altyapisi stabil calismadigi icin kameralar kopuyor.",
    businessImpact: "Kesintili sistem personel zamanini yer, servis tekrarlarini artirir ve olay takibini bozar.",
  },
  {
    slug: "bakim-yapilmayan-sistem",
    label: "Bakim yapilmayan sistem",
    category: "maintenance-risk",
    relevantServiceIntents: ["maintenance", "monitoring", "solution"],
    relevantSegmentSlugs: ["site-yonetimi", "fabrika", "depo", "avm", "plaza-ofis"],
    leadIntentLevel: "high",
    recommendedCtaAngle: "Periyodik kontrol ve sozlesmeli sureklilik vurgusu yapin.",
    painStatement: "Sistem calisiyor gibi gorunse de acilar, kayit suresi ve cihaz sagligi duzenli kontrol edilmiyor.",
    businessImpact: "Ariza olasiligi birikir, plansiz servis maliyeti artar ve sistem zayifliklari gec fark edilir.",
  },
  {
    slug: "uzaktan-erisim-sorunu",
    label: "Uzaktan erisim sorunu",
    category: "service-continuity",
    relevantServiceIntents: ["maintenance", "technical-service", "fault-repair", "monitoring"],
    relevantSegmentSlugs: ["site-yonetimi", "fabrika", "zincir-magaza", "plaza-ofis"],
    leadIntentLevel: "high",
    recommendedCtaAngle: "Mobil erisim, yetki ve baglanti surekliligini birlikte duzeltin.",
    painStatement: "Telefon veya bilgisayardan sisteme baglanilamiyor, uzaktan takip aksiyor.",
    businessImpact: "Yoneticiler anlik kontrolu kaybeder, saha bagimliligi artar ve olaylara gec reaksiyon verilir.",
  },
  {
    slug: "ortak-alan-guvenligi",
    label: "Ortak alan guvenligi",
    category: "segment-operations",
    relevantServiceIntents: ["solution", "maintenance", "monitoring"],
    relevantSegmentSlugs: ["site-yonetimi"],
    leadIntentLevel: "high",
    recommendedCtaAngle: "Yonetim onayi, ortak alan kayit surekliligi ve raporlama odagini one cikar.",
    painStatement: "Apartman ve site projelerinde girisler, otoparklar ve ortak alanlar tutarli sekilde izlenemiyor.",
    businessImpact: "Sakin sikayetleri artar, yonetim baskisi buyur ve ortak alan guvenligi zayiflar.",
  },
  {
    slug: "yonetim-onay-sureci",
    label: "Yonetim onay sureci",
    category: "segment-operations",
    relevantServiceIntents: ["solution", "maintenance"],
    relevantSegmentSlugs: ["site-yonetimi", "plaza-ofis"],
    leadIntentLevel: "medium",
    recommendedCtaAngle: "Karar vericiye net kapsam, bakim plani ve kolay raporlama sunun.",
    painStatement: "Karar sureci cok paydasli oldugu icin teklif ve kapsam netlesmeden proje yavasliyor.",
    businessImpact: "Satis dongusu uzar, eksik karar nedeniyle sistem yetersiz veya daginik kurulabilir.",
  },
  {
    slug: "stok-kaybi-ve-gece-takibi",
    label: "Stok kaybi ve gece takibi",
    category: "segment-operations",
    relevantServiceIntents: ["solution", "maintenance", "monitoring", "fault-repair"],
    relevantSegmentSlugs: ["depo", "fabrika"],
    leadIntentLevel: "high",
    recommendedCtaAngle: "Yukleme alani, gece izleme ve kayit guvenilirligi odagini kullanin.",
    painStatement: "Depo ve uretim sahalarinda yukleme alanlari, raf koridorlari veya cevre hatti yeterince izlenemiyor.",
    businessImpact: "Stok kaybi, sevkiyat uyusmazligi ve gece saatlerinde kontrol zafiyeti olusur.",
  },
  {
    slug: "cok-lokasyonlu-standart",
    label: "Cok lokasyonlu standart ihtiyaci",
    category: "segment-operations",
    relevantServiceIntents: ["solution", "monitoring", "maintenance", "technical-service"],
    relevantSegmentSlugs: ["zincir-magaza", "avm"],
    leadIntentLevel: "high",
    recommendedCtaAngle: "Merkezi gorunurluk, standart servis disiplini ve raporlama sunun.",
    painStatement: "Subeler veya buyuk ticari alanlarda farkli lokasyonlar ayni servis standardini alamiyor.",
    businessImpact: "Operasyon dagilir, ariza takibi zorlasir ve merkezi kontrol zayiflar.",
  },
  {
    slug: "erisim-kontrol-entegrasyonu",
    label: "Erisim kontrol entegrasyonu",
    category: "segment-operations",
    relevantServiceIntents: ["installation", "solution", "technical-service"],
    relevantSegmentSlugs: ["plaza-ofis", "avm", "zincir-magaza"],
    leadIntentLevel: "high",
    recommendedCtaAngle: "Kamera, alarm ve gecis kontrolunu tek proje akisi olarak konumlandirin.",
    painStatement: "Ofis ve kurumsal yapilarda kamera, alarm ve gecis kontrol sistemleri birbirinden kopuk calisiyor.",
    businessImpact: "Profesyonel hizmet beklentisi karsilanmaz, operasyonel disiplin ve guvenlik koordinasyonu zayiflar.",
  },
  {
    slug: "sla-ve-servis-surekliligi",
    label: "SLA ve servis surekliligi beklentisi",
    category: "service-continuity",
    relevantServiceIntents: ["maintenance", "monitoring", "technical-service", "solution"],
    relevantSegmentSlugs: ["fabrika", "depo", "avm", "zincir-magaza", "plaza-ofis", "site-yonetimi"],
    leadIntentLevel: "high",
    recommendedCtaAngle: "Sozlesme, mudahale onceligi ve duzenli raporlama ile guven verin.",
    painStatement: "Kurumsal projelerde hizmet kalitesi bir defalik kurulumla degil, sureklilik ve mudahale disiplini ile olculuyor.",
    businessImpact: "Bakim ve servis duzensizligi musteri kaybina, tekrar eden arizalara ve itibar asamasina yol acar.",
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
