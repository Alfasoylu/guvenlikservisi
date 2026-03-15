import type { Metadata } from "next";
import { getCanonicalUrlForKnownPath } from "@/lib/canonical";
import ServicePageTemplate, {
  ServicePageData,
} from "@/components/templates/ServicePageTemplate";

const canonicalUrl = getCanonicalUrlForKnownPath(
  "/apartman-site-guvenlik-sistemi",
);

export const metadata: Metadata = {
  title:
    "Apartman ve Site Güvenlik Sistemi Kurulumu | Kamera, Geçiş Kontrol, Yangın Alarm – Tek Elden",
  description:
    "Site ve apartman yönetimleri için komple güvenlik çözümü: giriş kamera, otopark izleme, kartlı geçiş, interkom ve yangın alarm. Tek sözleşme, tek muhatap. Ücretsiz keşif için hemen arayın.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Apartman ve Site Güvenlik Sistemi | Komple Çözüm, Tek Muhatap",
    description:
      "Site yönetimleri için giriş, otopark, çevre hattı ve blok güvenliği tek projede. Ücretsiz keşif randevusu alın.",
    url: canonicalUrl,
    siteName: "Güvenlik Servisi",
    locale: "tr_TR",
    type: "website",
  },
};

const data: ServicePageData = {
  slug: "apartman-site-guvenlik-sistemi",
  title: "Apartman ve Site Güvenlik Sistemi",
  subtitle:
    "Ortak yaşam alanlarınız için giriş kontrol, kamera, interkom, bariyer ve yangın alarm bileşenlerini tek projede planlıyor, tek sözleşmeyle kuruyor ve yönetime hazır teslim ediyoruz.",
  description:
    "Apartman ve site güvenliği, birden fazla bileşenin koordineli çalışmasını gerektirir. Giriş kapısı kamerası başka firmadan, interkom başka firmadan, yangın alarm başka firmadan geldiğinde entegrasyon sorunları kaçınılmazdır. Arıza olduğunda kimi arayacağınız belirsizleşir, bakım maliyetleri artar.\n\nBiz tüm bileşenleri tek proje kapsamında planlıyoruz. Kamera, kartlı geçiş, video interkom, araç bariyeri ve yangın alarm aynı altyapıyı paylaşır, aynı NVR üzerinden yönetilir. Tek sözleşme, tek muhatap, tek destek hattı.\n\nYönetim kuruluna sunulabilir fiyat teklifi, aidat bütçesine uygun modüler yapı ve aşamalı kurulum seçeneğiyle binlerce daireli projelere kadar deneyim sahibiyiz.",
  heroBadge: "Komple site güvenliği • Tek muhatap • Anahtar teslim",
  heroTrustItems: [
    "Giriş, otopark, çevre hattı ve blok güvenliği tek projede",
    "Yönetim kuruluna sunulabilir bütçe ve proje dokümanı",
    "Aidat bütçesine uygun, aşamalı kurulum seçeneği",
    "Tek sözleşme, tek muhatap, tek arıza ve bakım hattı",
  ],
  heroAdvantages: [
    {
      title: "Koordineli entegre sistem",
      text: "Kamera, kartlı geçiş, interkom ve yangın alarm ayrı ayrı değil; tek proje kapsamında uyumlu çalışacak şekilde kurulur.",
    },
    {
      title: "Yönetime hazır teslim",
      text: "Merkezi izleme yazılımı, kart tanımlama paneli ve giriş raporlarıyla birlikte sistemi çalışır halde teslim ediyoruz.",
    },
  ],
  heroPanel: {
    title: "Site güvenlik projesinde neye odaklanırız",
    body: [
      "Giriş noktaları, ortak alanlar, otopark ve çevre hattını keşifle değerlendiriyor, kör noktaları tespit ediyoruz.",
      "Bileşenleri aynı altyapı üzerinde koordineli planlıyor, entegre çalışır şekilde devreye alıyoruz.",
      "Yönetim yazılımı, kart tanımlama eğitimi ve mobil erişim kurulumu ile sistemi hazır teslim ediyoruz.",
    ],
  },
  heroCtaLabel: "Siteniz İçin Teklif Alın",

  /* ── Hedef Kitle ── */
  targetAudience: {
    title: "Bu Sayfa Kimler İçin?",
    subtitle:
      "Aşağıdaki roller ve durumlar sizin için geçerliyse, bu sayfadaki çözüm kurgusu doğrudan sizinle ilgili.",
    items: [
      {
        title: "Apartman Yöneticileri",
        description:
          "Bina güvenliğini iyileştirmek isteyen, kat maliklerinden gelen şikayetlere çözüm arayan yöneticiler.",
      },
      {
        title: "Site Yönetim Kurulları",
        description:
          "Ortak alan güvenliğini artırmak, bütçeye uygun komple çözüm almak ve yönetim kuruluna sunum hazırlamak isteyen kurullar.",
      },
      {
        title: "Müteahhitler ve İnşaat Firmaları",
        description:
          "Yeni konut projelerinde güvenlik altyapısını baştan doğru planlayarak teslim sonrası sorun oluşmasını önlemek isteyen firmalar.",
      },
      {
        title: "Rezidans ve Toplu Konut Yönetimleri",
        description:
          "Birden fazla giriş, otopark, sosyal alan ve çevre hattını kapsayan geniş ölçekli planlama ihtiyacı olan yönetimler.",
      },
      {
        title: "Kooperatif Yönetimleri",
        description:
          "Aidat bütçesine uygun, aşamalı kurulum seçeneğiyle binayı kademeli olarak güvenli hale getirmek isteyen kooperatifler.",
      },
      {
        title: "Güvenlik Sistemini Yenilemek İsteyenler",
        description:
          "Mevcut analog veya eski kamera/interkom sistemini modern IP altyapısına yükseltmek isteyen yapılar.",
      },
    ],
  },

  /* ── En Sık Yaşanan Sorunlar ── */
  commonProblems: {
    title: "Apartman ve Sitelerde En Sık Yaşanan Güvenlik Sorunları",
    subtitle:
      "Bu sorunlardan bir veya birkaçını yaşıyorsanız, profesyonel güvenlik sistemi kurulumu doğru zamandadır.",
    items: [
      {
        title: "Kör Noktalar ve Yetersiz Kapsam",
        description:
          "Giriş, merdiven ve otopark kameralarının hatalı yerleşimi yüzünden kritik alanlar görüntülenemez. Olay anında kayıt bulunamaz.",
      },
      {
        title: "Otopark Anlaşmazlıkları",
        description:
          "Park yeri tartışmaları, araç çizilmesi ve hasarlar kamera kaydı olmadığında yönetim için çözülmez sorun haline gelir.",
      },
      {
        title: "Tanınmayan Kişi Girişleri",
        description:
          "Kartlı geçiş veya interkom olmadan binaya yabancı kişi girişleri kontrol edılemez. Hırsızlık ve güvenlik olayları artar.",
      },
      {
        title: "Blok Giriş Güvenliğinin Olmaması",
        description:
          "Daire kapısından önce blok girişinde kontrol noktası yoksa yetkisiz kişiler dairelere kadar ulaşır.",
      },
      {
        title: "Gece Görüş ve Aydınlatma Eksikliği",
        description:
          "Çevre hattı ve otopark kameraları gece koşullarında yetersiz kalır. IR veya aydınlatma planlaması yapılmadığında kayıtlar işe yaramaz.",
      },
      {
        title: "Yönetim Kuruluna Sorun Kanıtlanamıyor",
        description:
          "Kayıt altyapısı olmadan yaşanan güvenlik olayları belgelenemiyor. Sakinlerin şikayetleri çözümsüz kalıyor.",
      },
      {
        title: "Çevre Hattı ve Site Sınırı Güvenliği",
        description:
          "Dış çeperden yetkisiz girişler, duvar aşımları tespit edilemiyor. Özellikle geniş sitelerde perimeter güvenliği ihmal ediliyor.",
      },
      {
        title: "Mevcut Sistemlerin Entegre Çalışmaması",
        description:
          "Farklı firmalardan alınan kamera, interkom ve kartlı geçiş sistemleri birbiriyle uyumsuz çalışıyor. Arızalarda muhatap bulunamıyor.",
      },
    ],
  },

  /* ── Hizmet Detayı için Özellikler ── */
  authorityTitle:
    "Neden Güvenlik Bileşenlerini Tek Projede Planlamak Önemlidir?",
  authorityBody: [
    "Kamera ayrı firma, interkom ayrı firma, kartlı geçiş ayrı firma — bu model hem entegrasyon hem bakım hem de arıza çözümünde ciddi sorunlar yaratır. Kim sorumlu, altyapı kime ait, garanti kimin kapsamında? Bu sorular belirsizleşir.",
    "Tek projede planlanan sistem aynı ağ altyapısı üzerinde çalışır. Kartlı geçiş verisiyle kamera kaydı eşlenir, yangın alarm paneli NVR ile haberleşir. Sonuç: daha güvenilir sistem, daha kolay yönetim, daha hızlı arıza çözümü.",
    "Ayrıca bütçe planlaması sadeleşir. Tüm bileşenler tek teklif, tek sözleşme ve tek ödeme planıyla yönetilir. Yönetim kuruluna sunulabilir tek sayfalık maliyet özeti hazırlarız.",
  ],
  authorityNote: {
    title: "Site yöneticisi veya yönetim kurulu üyesi misiniz?",
    body: "Daire sayınızı, mevcut güvenlik durumunuzu ve öncelikli beklentinizi paylaşın. Yönetim kuruluna sunulabilir proje ve bütçe önerisini hazırlayalım.",
  },
  features: [
    "Giriş kapısı ve ortak alan kameraları (Full HD / 4K)",
    "Otopark ve çevre güvenlik kameraları (gece görüş dahil)",
    "Kartlı geçiş ve biyometrik okuyucu (blok bazlı)",
    "Video kapı interkom sistemi (daireden kapı açma)",
    "Araç bariyer ve LPR plaka tanıma",
    "Yangın alarm sistemi (yönetmelik uyumlu, belgelendirme dahil)",
    "Merkezi yönetim yazılımı (tek ekrandan tüm sistemler)",
    "Mobil uygulama (uzaktan izleme ve kapı açma)",
  ],

  /* ── Alan Bazlı Çözümler ── */
  areaSolutions: {
    title: "Alan Bazlı Güvenlik Çözümü",
    subtitle:
      "Her alan farklı güvenlik ihtiyacına sahiptir. Aşağıda sitenizin kritik noktalarına göre nasıl çözüm ürettiğimizi görün.",
    items: [
      {
        area: "Giriş Kapısı ve Lobi",
        description:
          "Binaya giriş noktasında ilk kontrol hattı. Kim geldi, ne zaman girdi, kapıyı kim açtı — hepsi kayıt altında.",
        features: [
          "IP kamera ile giriş kaydı",
          "Kartlı geçiş veya şifreli giriş",
          "Video interkom ile daireden kapı açma",
        ],
      },
      {
        area: "Blok Girişleri",
        description:
          "Her blok kendi giriş kontrolüne sahip olur. Bloklar arası yetkisiz geçiş engellenir.",
        features: [
          "Blok bazlı kart yetkilendirme",
          "Blok kamerası ve kayıt",
          "Kapı açma log raporu",
        ],
      },
      {
        area: "Otopark",
        description:
          "Araç çizilmesi, park yeri tartışması ve yetkisiz araç girişi otopark kamera sistemiyle çözülür.",
        features: [
          "Geniş açılı otopark kameraları",
          "LPR plaka tanıma sistemi",
          "Araç bariyer entegrasyonu",
        ],
      },
      {
        area: "Çevre Hattı",
        description:
          "Site dış sınırlarında yetkisiz giriş, duvar aşımı ve çevre güvenliği. Gece görüş dahil.",
        features: [
          "IR destekli çevre kameraları",
          "Çevre hattı alarm dedektörleri",
          "Gece aydınlatma planlaması",
        ],
      },
      {
        area: "Asansör Önü ve Koridorlar",
        description:
          "Kat bazlı izleme ile hangi katta kim olduğu takip edilir. Olay anında kayıtlar hızlıca bulunur.",
        features: [
          "Asansör içi kamera",
          "Koridor kameraları",
          "Kat bazlı kayıt arama",
        ],
      },
      {
        area: "Sosyal Alanlar ve Bahçe",
        description:
          "Çocuk parkı, havuz, spor alanı ve bahçelerde güvenlik ve vandalizm önleme.",
        features: [
          "Geniş alan kameraları",
          "Hareket algılama bildirimi",
          "Gece görüş desteği",
        ],
      },
    ],
    image: {
      src: "/images/services/bakim-servis/site-kamera-sistemi-periyodik-bakim.jpg",
      alt: "Site kamera sistemi kurulumu ve kontrolü",
    },
  },

  /* ── Mid-page CTA ── */
  midPageCta: {
    title: "Sitenizin Güvenlik Planını Birlikte Çıkaralım",
    subtitle:
      "Daire sayınızı ve öncelikli ihtiyacınızı paylaşın. Yönetim kuruluna sunulabilir proje ve bütçe teklifi hazırlayalım.",
    ctaLabel: "Site Planına Göre Teklif Alın",
  },

  /* ── Çözüm Seviyeleri ── */
  solutionTiers: {
    title: "Site Ölçeğine Göre Çözüm Seviyeleri",
    subtitle:
      "Her apartman veya site aynı kapsamda çözüm gerektirmez. İhtiyacınıza uygun seviyeyi birlikte belirleyelim.",
    ctaLabel: "Sitenize Uygun Seviyeyi Belirleyelim",
    tiers: [
      {
        name: "Temel Apartman Paketi",
        targetAudience:
          "5–20 daireli apartmanlar, yönetici bütçesi kısıtlı yapılar.",
        solves:
          "Giriş güvenliği, otopark izleme ve temel kayıt ihtiyacını karşılar.",
        components: [
          "4–8 kamera (giriş, otopark, koridor)",
          "Video interkom sistemi",
          "NVR kayıt cihazı",
          "Mobil izleme uygulaması",
        ],
        upgradeNote:
          "Kartlı geçiş, çevre hattı güvenliği veya yangın alarm ihtiyacı oluştuğunda.",
      },
      {
        name: "Standart Site Güvenliği",
        targetAudience:
          "20–100 daireli siteler, yönetim kurulu onaylı projeler.",
        solves:
          "Giriş kontrol, tüm ortak alan izleme, yangın alarm zorunluluğu ve merkezi yönetim ihtiyacını karşılar.",
        components: [
          "8–24 kamera (giriş, blok, otopark, çevre)",
          "Kartlı geçiş sistemi (blok bazlı)",
          "Video interkom",
          "Yangın alarm sistemi (belgelendirme dahil)",
          "Merkezi yönetim yazılımı",
          "Mobil uygulama ve kullanıcı eğitimi",
        ],
        upgradeNote:
          "LPR plaka tanıma, araç bariyer veya turnike ihtiyacı oluştuğunda.",
      },
      {
        name: "Residence ve Büyük Site Paketi",
        targetAudience:
          "100+ daireli rezidanslar, toplu konut siteleri ve büyük kooperatifler.",
        solves:
          "Çok girişli, çok bloğlu yapılarda koordineli güvenlik, araç yönetimi ve perimeter güvenliği sağlar.",
        components: [
          "24+ kamera (tüm alanlar dahil)",
          "Kartlı geçiş ve biyometrik okuyucu",
          "LPR plaka tanıma ve araç bariyer",
          "Çevre hattı alarm dedektörleri",
          "Yangın alarm sistemi",
          "Güvenlik kulübesi entegrasyonu",
          "Bakım sözleşmesi",
        ],
        upgradeNote:
          "Termal çevre kamerası, fiber altyapı veya izleme merkezi bağlantısı gerektiğinde.",
      },
    ],
  },

  /* ── Neden Tek Elden Kurulum ── */
  whyIntegrated: {
    title: "Neden Tüm Güvenlik Bileşenlerini Tek Projede Kurmalısınız?",
    subtitle:
      "Farklı firmalarla çalışmanın site yönetimine maliyetini ve operasyonel sorunlarını biliriz. İşte tek elden kurulumun somut avantajları:",
    items: [
      {
        title: "Koordinasyon Maliyeti Sıfırlanır",
        description:
          "Kamera, interkom ve alarm ayrı firmalardan geldiğinde montaj takvimi, kablo paylaşımı ve altyapı koordinasyonu yönetime yük olur. Tek firmada bu sorun yoktur.",
      },
      {
        title: "Entegrasyon Sorunları Ortadan Kalkar",
        description:
          "Farklı markaların sistemi birbiriyle konuşmaz. Kartlı geçiş verisi ile kamera kaydını eşleştirmek imkansız hale gelir.",
      },
      {
        title: "Tek Sözleşme, Tek Muhatap",
        description:
          "Arıza olduğunda kimi arayacağınız bellidir. 'Bu bizim sorumluluğumuz değil' cevabı almadan tek noktadan çözüm alırsınız.",
      },
      {
        title: "Bakım ve Arızada Hız",
        description:
          "Tüm sistem bilgisi tek firmada olduğu için arıza tespiti ve müdahale süresi kısalır. Yedek parça ve yazılım güncellemesi koordineli yapılır.",
      },
      {
        title: "Kullanıcı Eğitimi ve Teslim Kolaylığı",
        description:
          "Yönetim yazılımı, kart tanımlama, mobil uygulama ve alarm kullanımı tek seferde, tek ekip tarafından eğitilir.",
      },
      {
        title: "Yönetime Tek Bütçe Raporu",
        description:
          "Tüm bileşenler tek teklifte yer alır. Yönetim kuruluna sunulabilir tek sayfalık maliyet özeti ve ödeme planı hazırlarız.",
      },
    ],
  },

  /* ── Keşif ve Teklif Süreci ── */
  discoveryProcess: {
    title: "Site Güvenlik Projesinde Süreç Nasıl İşler?",
    subtitle:
      "İlk iletişimden teslime kadar net ve şeffaf bir süreç izliyoruz. Yönetim kurulunun bilgilendirilmesini kolaylaştırıyoruz.",
    steps: [
      {
        step: 1,
        title: "Kısa Bilgi Alıyoruz",
        description:
          "Daire sayısı, mevcut güvenlik durumu ve öncelikli ihtiyaçlarınızı form, telefon veya WhatsApp ile öğreniyoruz.",
      },
      {
        step: 2,
        title: "Telefonla Ön Değerlendirme",
        description:
          "Teknik ekibimiz sizi arayarak bileşen kapsamını ve bütçe aralığını netleştiriyor.",
      },
      {
        step: 3,
        title: "Ücretsiz Yerinde Keşif",
        description:
          "Giriş noktaları, otopark, çevre hattı ve ortak alanları yerinde inceliyor, kör noktaları tespit ediyoruz.",
      },
      {
        step: 4,
        title: "Proje ve Teklif Hazırlama",
        description:
          "Keşif sonrası detaylı proje planı, bileşen listesi ve yönetim kuruluna sunulabilir fiyat teklifini gönderiyoruz.",
      },
      {
        step: 5,
        title: "Kurulum ve Devreye Alma",
        description:
          "Profesyonel montaj ekibimiz kurulumu gerçekleştiriyor, sistemi test ediyor ve devreye alıyor.",
      },
      {
        step: 6,
        title: "Teslim, Eğitim ve Bakım Desteği",
        description:
          "Yönetim yazılımı eğitimi, kart tanımlama rehberi, mobil erişim kurulumu. İsteğe bağlı yıllık bakım sözleşmesi.",
      },
    ],
  },

  /* ── Karar Blokları ── */
  decisionBlocks: [
    {
      title: "Hangi Durumda Komple Site Güvenlik Projesi Doğru Seçimdir?",
      items: [
        "Yeni site veya apartman projesi tamamlanıyor ve güvenlik altyapısı sıfırdan kurulacaksa.",
        "Mevcut güvenlik sistemi yetersiz ve birden fazla bileşenin (kamera + geçiş kontrol + alarm) birlikte güncellenmesi gerekiyorsa.",
        "Farklı firmalardan alınan sistemler entegre çalışmıyor ve yönetimde muhatap karmaşası yaşanıyorsa.",
        "Yönetim kurulu tüm güvenlik bileşenlerini tek sözleşme altında toplamak istiyorsa.",
      ],
    },
    {
      title: "Hangi Durumda Tekil Hizmet Daha Uygun Olabilir?",
      items: [
        "Yalnızca kamera sistemi ihtiyacınız varsa: kamera sistemi kurulumu sayfamızı inceleyin.",
        "Sadece kapı giriş kontrolü gerekli ise: kartlı geçiş sistemi kurulumu daha hedefli bir başlangıçtır.",
        "Yangın alarm güncelleme veya yasal uyumluluk ihtiyacı varsa: yangın alarm sistemi kurulumu ayrıca değerlendirilebilir.",
        "Mevcut kamera sisteminde arıza veya bakım sorunu varsa: bakım ve servis sayfamızı inceleyin.",
      ],
    },
  ],

  /* ── Kapsam Detayı ── */
  scopeDetails: {
    title: "Projede Neler Dahil, Neler Ayrıca Değerlendirilir?",
    description:
      "Komple site güvenlik projesinde standart kapsam ve projeye göre ek değerlendirme gerektiren başlıklar aşağıdadır.",
    includedTitle: "Standart projede dahil",
    includedItems: [
      "Ücretsiz keşif ve çok bileşenli ihtiyaç analizi",
      "Kamera, kartlı geçiş, interkom ve yangın alarm montajı",
      "Merkezi yönetim yazılımı kurulumu",
      "Kart tanımlama, kullanıcı eğitimi ve sistem teslimi",
      "Proje belgelendirme ve test raporları",
    ],
    additionalTitle: "Projeye göre ayrıca değerlendirilen başlıklar",
    additionalItems: [
      "Araç bariyer ve LPR plaka tanıma sistemi",
      "Mevcut eski sistemlerin kaldırılması veya revizyonu",
      "Geniş sitelerde ek switch, fiber altyapı veya kablosuz köprü",
      "Güvenlik kulübesi ve turnike entegrasyonu",
    ],
  },

  /* ── Fiyatlandırma Faktörleri ── */
  pricingFactors: {
    description:
      "Site güvenlik projelerinde fiyat, bileşen sayısı, site ölçeği ve altyapı durumuna bağlıdır.",
    items: [
      "Daire sayısı ve giriş noktası adedi bileşen kapsamını doğrudan belirler.",
      "Kamera sayısı ve kartlı geçiş okuyucu adedi malzeme maliyetini etkiler.",
      "Mevcut kablo altyapısı varsa kullanılabilir; yoksa altyapı çekimi ek maliyet oluşturur.",
      "Yangın alarm sistemi zorunlu olduğu için proje kapsamından çıkarılamaz.",
      "Araç bariyer, LPR ve turnike gibi ek bileşenler projeye göre ayrıca fiyatlandırılır.",
    ],
  },

  /* ── Mekan Türleri ── */
  venueTypes: [
    {
      title: "Küçük Apartman (5–20 Daire)",
      description:
        "Giriş kamerası, video interkom ve otopark izleme ile temel güvenlik. Yönetici bütçesine uygun.",
    },
    {
      title: "Büyük Apartman (20–50 Daire)",
      description:
        "Kartlı geçiş, yangın alarm ve merkezi kamera sistemi dahil komple güvenlik. Blok bazlı yetkilendirme.",
    },
    {
      title: "Rezidans",
      description:
        "Üst düzey güvenlik: lobby, asansör, otopark kontrol, misafir yönetimi ve biyometrik giriş seçeneği.",
    },
    {
      title: "Toplu Konut Sitesi",
      description:
        "Çevre güvenlik, araç bariyeri, plaka tanıma, turnike ve merkezi izleme yazılımı.",
    },
    {
      title: "Kooperatif",
      description:
        "Bütçeye uygun modüler yapı. Öncelikli kameralarla başlayıp aşamalı olarak tüm bileşenleri tamamlama.",
    },
  ],

  /* ── Güven Blokları ── */
  trustBlocks: {
    title: "Somut Güvencelerimiz",
    subtitle: "Genel vaatler yerine size sunduğumuz somut taahhütler:",
    items: [
      { text: "Aynı gün geri dönüş garantisi" },
      { text: "Tek muhatap: proje yöneticisi atanır" },
      { text: "Teslim sonrası yönetim yazılımı eğitimi" },
      { text: "Mobil erişim kurulumu dahil" },
      { text: "Yıllık bakım sözleşmesi seçeneği" },
      { text: "Arıza bildiriminde hızlı müdahale" },
      { text: "İstanbul ve çevre illerde ücretsiz keşif" },
      { text: "Yönetim kuruluna sunulabilir proje dokümanı" },
    ],
  },

  /* ── İç Linkler ── */
  internalLinks: {
    title: "İlgili Hizmet ve Çözüm Sayfaları",
    subtitle:
      "Sitenizin ihtiyacına göre tek bileşenli çözümleri de inceleyebilirsiniz.",
    links: [
      {
        href: "/kamera-sistemi-kurulumu",
        label: "Güvenlik Kamera Sistemi Kurulumu",
        description:
          "Site giriş, otopark, koridor ve çevre kamerası kurulumu. Tek başına da hizmet veriyoruz.",
      },
      {
        href: "/kartli-gecis-ve-turnike-sistemi",
        label: "Kartlı Geçiş ve Turnike Sistemi",
        description:
          "Blok bazlı giriş kontrolü, biyometrik okuyucu ve araç bariyer çözümleri.",
      },
      {
        href: "/yangin-alarm-sistemi-kurulumu",
        label: "Yangın Alarm Sistemi Kurulumu",
        description:
          "Yönetmelik uyumlu yangın algılama, belgelendirme ve sigorta onaylı test raporu.",
      },
      {
        href: "/alarm-sistemi-kurulumu",
        label: "Alarm Sistemi Kurulumu",
        description:
          "Kablosuz veya kablolu hırsız alarm. Çevre güvenliği ve erken uyarı sistemi.",
      },
      {
        href: "/bakim-servis-uzaktan-izleme",
        label: "Bakım, Servis ve Uzaktan İzleme",
        description:
          "Periyodik bakım, arıza servisi ve uzaktan izleme merkezi bağlantısı.",
      },
      {
        href: "/paketler-ve-fiyatlandirma",
        label: "Paketler ve Fiyatlandırma",
        description:
          "Mekan tipi ve bileşen sayısına göre örnek paketler ve fiyat aralıkları.",
      },
    ],
  },

  /* ── Segment Bağlantıları ── */
  segments: [
    {
      title: "Giriş Kontrolü ve Interkom",
      content:
        "Blok kapılarında kartlı geçiş, daireden video ile kapı açma ve misafir yönetimi. Sakinler kendi dairelerinden girişleri kontrol eder.",
      href: "/kartli-gecis-sistemi-kurulumu",
    },
    {
      title: "Güvenlik Kamera Sistemi",
      content:
        "Giriş, otopark, koridor ve çevre hattını kapsayan Full HD / 4K kamera ağı. Kayıt, mobil izleme ve merkezi yönetim dahil.",
      href: "/kamera-sistemi-kurulumu",
    },
    {
      title: "Yangın Alarm Sistemi",
      content:
        "Bina yangın yönetmeliğine uygun zorunlu sistem. Ortak alan, bodrum ve merdiven boşluğu dedektörleri. Belgelendirme ve sigorta raporu dahil.",
      href: "/yangin-alarm-sistemi-kurulumu",
    },
  ],

  /* ── FAQ — Ticari ve İtiraz Giderici ── */
  faq: [
    {
      question: "Maliyet neye göre değişir?",
      answer:
        "Daire sayısı, giriş noktası adedi, kamera sayısı ve bileşen kapsamı fiyatı belirler. Mevcut altyapı varsa kullanılır ve maliyet düşer. Keşif sonrası net fiyat teklifi verilir.",
    },
    {
      question: "Mevcut kamera veya interkom sistemi korunabilir mi?",
      answer:
        "Evet. Keşifte mevcut altyapıyı değerlendiriyoruz. Kullanılabilir bileşenler korunur, gerekli olanlar yükseltilir. Gereksiz yenileme yapılmaz.",
    },
    {
      question: "Mobil izleme var mı?",
      answer:
        "Evet. Tüm kameralar ve giriş kayıtları mobil uygulama üzerinden izlenebilir. Site yöneticisi ve yetkili kişiler uzaktan erişim sağlar.",
    },
    {
      question: "Gece görüş nasıl çözülür?",
      answer:
        "IR destekli kameralar ve gerekli noktalarda ek aydınlatma planlaması ile gece koşullarında net görüntü sağlanır. Keşifte gece şartları da değerlendirilir.",
    },
    {
      question: "Kayıtlar kaç gün tutulur?",
      answer:
        "Kamera sayısı ve çözünürlüğe bağlı olarak genellikle 15–30 gün kayıt tutulur. Harddisk kapasitesi projeye göre planlanır.",
    },
    {
      question: "Bakım zorunlu mu?",
      answer:
        "Zorunlu değil ama önerilir. Yıllık bakım sözleşmesi ile kamera temizliği, HDD sağlık kontrolü, yazılım güncelleme ve yangın alarm testi yapılır. Sistem ömrü uzar.",
    },
    {
      question: "Proje tamamlanması ne kadar sürer?",
      answer:
        "Küçük apartmanlarda 1–2 gün, büyük sitelerde 5–15 iş günü. Keşif sonrası net takvim verilir. Aşamalı kurulum da mümkündür.",
    },
    {
      question: "Ücretsiz keşif var mı?",
      answer:
        "Evet. İstanbul ve aktif hizmet bölgelerimizde keşif ücretsizdir. Keşif sonrası detaylı proje ve fiyat teklifi hazırlanır.",
    },
    {
      question: "Yönetim kuruluna nasıl sunum yapabilirim?",
      answer:
        "Keşif sonrası tek sayfalık proje özeti, bileşen listesi ve maliyet tablosu hazırlarız. Yönetim kurulu toplantısına uygun formatta gönderilir.",
    },
    {
      question: "Tüm bileşenleri aynı anda kurmak zorunlu mu?",
      answer:
        "Hayır. Altyapıyı baştan entegrasyona uygun planlıyoruz. Öncelikli bileşenlerle başlayıp sonradan genişletebilirsiniz.",
    },
  ],

  /* ── CTA ve Final ── */
  finalCtaTitle: "Siteniz İçin Komple Güvenlik Teklifi Alın",
  finalCtaSubtitle:
    "Apartman ve site güvenliği için ücretsiz keşif randevusu alın. Kamera, kartlı geçiş ve yangın alarm tek projede, tek muhataptan.",
  whatsappMessage:
    "Merhaba, sitemiz için güvenlik sistemi teklifi almak istiyorum.",
  defaultService: "hepsi",
  ctaContent: {
    badge: "Komple güvenlik • Keşif • Teklif",
    title: "Siteniz İçin Komple Güvenlik Teklifi Alın",
    subtitle:
      "Daire sayısını ve öncelikli güvenlik ihtiyaçlarını paylaşın. Yönetim kuruluna sunulabilir proje ve bütçe teklifi hazırlayalım.",
    trustItems: [
      "Kamera, geçiş kontrol ve yangın alarm tek projede",
      "Merkezi yönetim yazılımı ve kart tanımlama",
      "Tek sözleşme ve tek muhatap avantajı",
      "Aşamalı kurulum imkânı",
    ],
    supportCards: [
      {
        title: "Komple güvenlik planı",
        text: "Tüm bileşenleri tek projede koordineli planlıyor, entegre çalışır şekilde teslim ediyoruz.",
      },
      {
        title: "Yönetime hazır teslim",
        text: "Yazılım, eğitim ve raporlama ile sistemi yönetim kuruluna hazır teslim ediyoruz.",
      },
    ],
  },
};

export default function ApartmanSiteSayfasi() {
  return <ServicePageTemplate data={data} />;
}
