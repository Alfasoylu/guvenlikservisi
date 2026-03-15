import type { Metadata } from "next";
import { getCanonicalUrlForKnownPath } from "@/lib/canonical";
import ServicePageTemplate, {
  ServicePageData,
} from "@/components/templates/ServicePageTemplate";
import { cities } from "@/data/cities";
import { serviceProblemLinks, topCityHubLinks } from "@/data/internal-links";

const canonicalUrl = getCanonicalUrlForKnownPath("/kamera-sistemi-kurulumu");

export const metadata: Metadata = {
  title: "Kamera Sistemi Kurulumu | Keşif, Montaj ve Uzaktan İzleme",
  description:
    "İşyeri, apartman, depo ve fabrika için profesyonel IP kamera sistemi kurulumu. Ücretsiz keşif, kör nokta analizi, kayıt planlaması ve anahtar teslim montaj.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Kamera Sistemi Kurulumu | Keşif, Montaj ve Uzaktan İzleme",
    description:
      "İşyeri ve konut için IP kamera kurulumu. Ücretsiz keşif, kör nokta analizi, anahtar teslim montaj.",
    url: canonicalUrl,
    siteName: "Güvenlik Servisi",
    locale: "tr_TR",
    type: "website",
  },
};

const data: ServicePageData = {
  slug: "kamera-sistemi-kurulumu",
  title: "Kamera Sistemi Kurulumu",
  subtitle:
    "İşyeri, apartman, depo ve fabrika alanlarınız için keşif, montaj, kayıt planlaması ve mobil izleme kurulumunu tek ekipte topluyoruz.",
  description:
    "Kamera sistemi kurulumu yalnızca cihazı duvara monte etmek değildir. Doğru kamera noktasını belirlemek, kayıt süresini ihtiyaca göre planlamak, kör noktaları minimize etmek ve mobil erişimi sağlıklı çalışır hale getirmek birlikte düşünülmesi gereken adımlardır.\n\nHikvision, Dahua ve Reolink gibi markalarla çalışıyor; PoE altyapı, NVR kayıt ve uzaktan izleme kurulumunu tek projede teslim ediyoruz.\n\nKurulum sonrası iOS ve Android uygulamasıyla canlı izleme, kayıt erişimi ve hareket bildirimi aktif hale gelir. Destek ve bakım ihtiyacı için sonraki adımlar baştan netleştirilir.",
  heroBadge: "Keşif • Montaj • Uzaktan izleme",
  heroTrustItems: [
    "Ücretsiz sahada keşif ve kör nokta analizi",
    "Kayıt süresi ve depolama planlaması",
    "Anahtar teslim montaj ve devreye alma",
    "Mobil izleme kurulumu ve kullanıcı teslimi",
  ],
  heroAdvantages: [
    {
      title: "Projeye göre planlama",
      text: "Kamera sayısını, kayıt süresini ve altyapıyı alanın gerçek ihtiyacına göre belirliyoruz.",
    },
    {
      title: "Çalışan sistem teslimi",
      text: "Montaj, uzaktan erişim, kullanıcı ayarları ve test ile sistemi hazır teslim ediyoruz.",
    },
  ],
  heroPanel: {
    title: "Kamera kurulumunda neye odaklanırız",
    body: [
      "Kör nokta analizi ve giriş-çıkış takibi için doğru kamera noktalarını sahada belirleriz.",
      "Kayıt cihazı, disk kapasitesi ve ağ altyapısını proje ölçeğine göre planlarız.",
      "Mobil izleme ve uzaktan erişimi kurulum sırasında aktif hale getirip test ederek teslim ederiz.",
    ],
  },

  /* ── Bu Sayfa Kimler İçin ── */
  targetAudience: {
    title: "Kamera Sistemi Kurulumu Kimler İçin?",
    subtitle:
      "Güvenlik kamerası ihtiyacı farklı senaryo ve mekan tiplerinde ortaya çıkar. Aşağıdaki profillerden biri size uyuyorsa profesyonel kurulum doğru adımdır.",
    items: [
      {
        title: "Ev ve Villa Sahipleri",
        description:
          "Çevre güvenliği, kapı girişi ve bahçe izleme. Tatil dönemlerinde uzaktan takip imkânı.",
      },
      {
        title: "İşyeri ve Mağaza Sahipleri",
        description:
          "Kasa, depo ve müşteri alanlarının görüntülenmesi. Operasyonel denetim ve çalışan güvenliği.",
      },
      {
        title: "Apartman ve Site Yöneticileri",
        description:
          "Giriş, otopark ve ortak alanları kapsayan merkezi kamera sistemi. Yönetim kuruluna raporlama.",
      },
      {
        title: "Fabrika ve Depo Yöneticileri",
        description:
          "Geniş alan takibi, yükleme noktası kontrolü ve çevre hattı güvenliği. PTZ ve gece görüş odaklı.",
      },
      {
        title: "Şantiye ve Geçici Alan Sorumluları",
        description:
          "İnşaat alanı, malzeme deposu ve şantiye ofisi güvenliği. Mobil izleme ile uzaktan takip.",
      },
      {
        title: "Belediye ve Kamu Kurumları",
        description:
          "Hizmet binaları, parklar ve toplu taşıma noktalarında güvenlik ve olay takibi.",
      },
    ],
  },

  /* ── En Sık Yaşanan Sorunlar ── */
  commonProblems: {
    title: "Kamera Sistemi Kurulumunda En Sık Yaşanan Sorunlar",
    subtitle:
      "Bu sorunlardan birini yaşıyorsanız, profesyonel keşif ve doğru planlama ile büyük fark yaratabilirsiniz.",
    items: [
      {
        title: "Kör Noktalar ve Yetersiz Kapsam",
        description:
          "Kameraların yanlış yerleşimi yüzünden giriş-çıkış noktaları, koridor köşeleri veya otopark bölgeleri görüntülenemez. Olay anında kayıt bulunamaz.",
      },
      {
        title: "Gece Görüntü Kalitesizliği",
        description:
          "Ucuz veya yanlış seçilmiş kameralar gece koşullarında net görüntü veremez. IR mesafesi ve aydınlatma planlanmadığında kayıtlar işe yaramaz.",
      },
      {
        title: "Kayıt Süresi Yetersizliği",
        description:
          "Hard disk kapasitesi kamera sayısı ve çözünürlüğe göre planlanmadığında kayıtlar birkaç gün sonra silinir. Geriye dönük erişim mümkün olmaz.",
      },
      {
        title: "Uzaktan Erişim ve Mobil İzleme Sorunu",
        description:
          "Ağ ayarları doğru yapılandırılmadığında telefondan canlı izleme çalışmaz. Port yönlendirme ve P2P konfigürasyonu eksik kalır.",
      },
      {
        title: "Eski Analog Sistemin Yetersizliği",
        description:
          "Analog kameralar HD çözünürlük, uzaktan erişim ve akıllı bildirim sunmaz. IP sisteme geçiş ciddi fark yaratır.",
      },
      {
        title: "Ağ Altyapısı ve Besleme Sorunları",
        description:
          "PoE switch kapasitesi, kablo mesafesi ve bant genişliği planlanmadığında görüntü kaybı, gecikme ve donma sorunları oluşur.",
      },
      {
        title: "Bakım ve Arızada Belirsizlik",
        description:
          "Kurulum sonrası teknik destek ve yedek parça konusunda muhatap bulunamıyor. Garanti kapsamı baştan netleştirilmemiş.",
      },
    ],
  },

  authorityTitle: "Neden Doğru Keşif ve Planlama Belirleyicidir?",
  authorityBody: [
    "Birçok kamera sistemi kurulumdan sonra çalışır görünür ama olay anında yetersiz kalır. Bunun sebebi genellikle yanlış keşif, eksik kapsama veya yetersiz kayıt planlamasıdır.",
    "Profesyonel kurulumda amaç cihaz satmak değil; alanı gerçekten görünür kılmak, kör noktaları azaltmak ve kayıt süresini ihtiyacı karşılayacak şekilde planlamaktır.",
    "Doğru altyapıyla kurulan sistemler hem daha az arıza çıkarır hem de uzun vadede bakım maliyetini düşürür.",
  ],
  authorityNote: {
    title: "Hızlı teklif almak için",
    body: "Mekan tipinizi, tahmini kamera sayısını ve kayıt beklentinizi paylaşmanız yeterli. Keşif planını aynı gün oluşturuyoruz.",
  },
  features: [
    "2K/4K çözünürlüklü IP kameralar",
    "Gece görüşü (30–50m IR mesafe)",
    "Hareket algılama ve anlık bildirim",
    "Yerel NVR ve opsiyonel bulut kayıt",
    "Mobil uygulama (iOS + Android)",
    "PoE altyapı (tek kablo çözümü)",
    "Dış mekan için vandal-proof kasalar",
    "1–3 yıl ürün garantisi",
  ],

  /* ── Alan Bazlı Çözümler ── */
  areaSolutions: {
    title: "Alan Bazlı Kamera Çözümleri",
    subtitle:
      "Her alan farklı kamera tipi, açı ve çözünürlük gerektirir. Sık karşılaştığımız alanlara göre nasıl çözüm ürettiğimizi görün.",
    items: [
      {
        area: "Giriş-Çıkış Noktaları",
        description:
          "Ana kapı, personel girişi ve araç giriş noktalarında kim geldi, ne zaman girdi sorusuna net cevap veren kamera yerleşimi.",
        features: [
          "Sabit bullet veya dome kamera",
          "Yüz tanıma uyumlu çözünürlük",
          "Gece görüş desteği",
        ],
      },
      {
        area: "Otopark ve Araç Alanları",
        description:
          "Geniş açılı kameralar ve isteğe bağlı plaka tanıma (LPR) ile araç takibi ve park yeri kontrolü.",
        features: [
          "Geniş açı varifocal lens",
          "LPR plaka tanıma opsiyonu",
          "IR gece görüş (50m+)",
        ],
      },
      {
        area: "Depo ve Stok Alanları",
        description:
          "Ürün giriş-çıkış takibi, sayım doğrulama ve hırsızlık önleme. Kritik raflar ve yükleme noktaları odaklı.",
        features: [
          "Geniş alan dome kameralar",
          "Hareket algılama ve bildirim",
          "Düşük ışık performansı",
        ],
      },
      {
        area: "Çevre Hattı ve Dış Mekan",
        description:
          "Bina çevresi, bahçe duvarları ve açık alanlar. Dış mekan korumalı kasalar ve geniş IR mesafesi ile 7/24 izleme.",
        features: [
          "IP67 vandal-proof kasalar",
          "50m+ IR gece görüş",
          "PTZ kamera ile geniş alan tarama",
        ],
      },
      {
        area: "Koridor ve Ortak Alanlar",
        description:
          "İç mekanda kim nerede, ne zaman sorusuna cevap veren kompakt dome kameralar. Minimum kör nokta ile tam kapsama.",
        features: [
          "Kompakt dome kameralar",
          "Geniş açı lens (2.8mm)",
          "PoE tek kablo besleme",
        ],
      },
      {
        area: "Üretim ve İş Alanları",
        description:
          "Fabrika üretim bandı, atölye veya iş istasyonlarında operasyonel denetim ve iş güvenliği takibi.",
        features: [
          "Yüksek çözünürlük (4K) detay",
          "Geniş dinamik aralık (WDR)",
          "Kayıt arama ve zaman çizelgesi",
        ],
      },
    ],
  },

  /* ── Mid-page CTA ── */
  midPageCta: {
    title: "Mekanınız İçin Kamera Planını Birlikte Çıkaralım",
    subtitle:
      "Mekan tipinizi ve tahmini kamera sayısını paylaşın. Kör nokta analizi ve kayıt planlamasını içeren keşif randevusu oluşturalım.",
    ctaLabel: "Ücretsiz Keşif Randevusu Alın",
  },

  /* ── Çözüm Seviyeleri ── */
  solutionTiers: {
    title: "İhtiyaca Göre Kamera Sistemi Seviyeleri",
    subtitle:
      "Her mekan aynı kapsamda kamera sistemi gerektirmez. İhtiyacınıza en yakın seviyeyi birlikte belirleyelim.",
    ctaLabel: "Mekanınıza Uygun Seviyeyi Belirleyelim",
    tiers: [
      {
        name: "Temel Kamera Paketi",
        targetAudience:
          "Ev, küçük mağaza veya tek katlı ofis gibi kompakt alanlar.",
        solves:
          "Giriş-çıkış kontrolü, temel caydırıcılık ve olay sonrası kayıt erişimi ihtiyacını karşılar.",
        components: [
          "2–4 IP kamera (2K çözünürlük)",
          "4 kanallı NVR kayıt cihazı",
          "1–2 TB hard disk",
          "Mobil uygulama ile uzaktan izleme",
          "PoE switch veya doğrudan NVR PoE",
        ],
        upgradeNote:
          "Gece görüş mesafesi, kamera sayısı veya kayıt süresi artırılmak istendiğinde.",
      },
      {
        name: "Standart İşyeri Paketi",
        targetAudience: "Orta ölçekli işyeri, apartman veya çok katlı yapılar.",
        solves:
          "Çoklu giriş noktası, iç-dış alan takibi, uzun süreli kayıt ve uzaktan yönetim ihtiyacını karşılar.",
        components: [
          "4–8 IP kamera (2K/4K karışık)",
          "8 kanallı NVR kayıt cihazı",
          "2–4 TB hard disk (15–30 gün kayıt)",
          "PoE switch ve yapısal kablolama",
          "Mobil uygulama + masaüstü erişim",
          "Hareket algılama ve anlık bildirim ayarları",
        ],
        upgradeNote:
          "LPR plaka tanıma, alarm entegrasyonu veya kartlı geçiş sistemi eklemek istendiğinde.",
      },
      {
        name: "Profesyonel Proje Paketi",
        targetAudience:
          "Fabrika, site, AVM, otel veya geniş açık alanlı tesisler.",
        solves:
          "Geniş alan takibi, çevre hattı güvenliği, merkezi yönetim ve entegre güvenlik sistemi ihtiyacını karşılar.",
        components: [
          "8–32+ IP kamera (4K, PTZ dahil)",
          "16/32 kanallı NVR veya sunucu kayıt",
          "4–16 TB RAID depolama",
          "Merkezi yönetim yazılımı (VMS)",
          "PoE switch + fiber altyapı (mesafeye göre)",
          "Alarm ve kartlı geçiş entegrasyonu seçeneği",
          "Bakım sözleşmesi",
        ],
        upgradeNote:
          "Termal kamera, yapay zeka analitik veya izleme merkezi bağlantısı eklemek istendiğinde.",
      },
    ],
  },

  /* ── Neden Profesyonel Kurulum ── */
  whyIntegrated: {
    title: "Neden Profesyonel Kamera Kurulumu Danışmansız Alımdan Farklıdır?",
    subtitle:
      "Online kamera paketi alıp kendiniz kurmak cazip görünebilir. Ancak profesyonel kurulumun farkı montajda değil, plandadır:",
    items: [
      {
        title: "Kör Nokta Analizi Sahada Yapılır",
        description:
          "Kamera noktalarını plan üzerinden değil, sahada fiziksel inceleme ile belirleriz. Giriş açıları, duvar yükseklikleri ve gece koşulları yerinde değerlendirilir.",
      },
      {
        title: "Kayıt Planlaması İhtiyaca Göre Yapılır",
        description:
          "Kaç gün geriye dönük kayıt gerektiği, kamera sayısı ve çözünürlük ile orantılı disk kapasitesi sahada hesaplanır.",
      },
      {
        title: "Ağ Altyapısı Doğru Planlanır",
        description:
          "PoE switch kapasitesi, kablo mesafeleri ve bant genişliği projeye göre hesaplanır. Görüntü kaybı ve donma sorunları oluşmaz.",
      },
      {
        title: "Uzaktan Erişim İlk Günden Çalışır",
        description:
          "Mobil uygulama kurulumu, ağ yapılandırması ve kullanıcı ayarları montaj sırasında tamamlanır ve test edilir.",
      },
      {
        title: "Bakım ve Garanti Tek Noktadan Yönetilir",
        description:
          "Arıza durumunda tek muhatap. Yedek parça, yazılım güncelleme ve teknik destek tanımlı bir süreçle yürür.",
      },
      {
        title: "Genişleme Altyapısı Baştan Planlanır",
        description:
          "İleride kamera eklemek isterseniz, NVR kapasitesi, switch port sayısı ve kablo altyapısı buna uygun kurulur.",
      },
    ],
  },

  /* ── Keşif ve Teklif Süreci ── */
  discoveryProcess: {
    title: "Kamera Sistemi Kurulumunda Süreç Nasıl İşler?",
    subtitle:
      "İlk iletişimden sistemi çalışır halde teslim etmeye kadar net ve şeffaf bir süreç izliyoruz.",
    steps: [
      {
        step: 1,
        title: "İhtiyaç Bilgisini Alıyoruz",
        description:
          "Mekan tipi, tahmini kamera sayısı ve özel beklentilerinizi form, telefon veya WhatsApp ile öğreniyoruz.",
      },
      {
        step: 2,
        title: "Telefonla Ön Değerlendirme",
        description:
          "Teknik ekibimiz sizi arayarak proje kapsamını, kamera tiplerini ve bütçe aralığını netleştiriyor.",
      },
      {
        step: 3,
        title: "Ücretsiz Yerinde Keşif",
        description:
          "Sahaya gelerek giriş-çıkış noktalarını, kör alanları ve gece koşullarını inceliyoruz. Kamera noktalarını yerinde belirliyoruz.",
      },
      {
        step: 4,
        title: "Teklif ve Proje Planı",
        description:
          "Keşif sonrası kamera planı, NVR kapasitesi, depolama süresi ve net fiyat teklifini gönderiyoruz.",
      },
      {
        step: 5,
        title: "Montaj ve Devreye Alma",
        description:
          "Profesyonel ekibimiz montajı gerçekleştiriyor, kablolama, NVR kurulumu ve sistem testini yapıyor.",
      },
      {
        step: 6,
        title: "Teslim ve Kullanıcı Eğitimi",
        description:
          "Mobil uygulama kurulumu, kayıt erişim eğitimi ve bildirim ayarlarını birlikte yapıyoruz. Bakım seçeneklerini sunuyoruz.",
      },
    ],
  },

  decisionBlocks: [
    {
      title: "Hangi Durumda Kamera Sistemi Kurulumu Doğru Seçimdir?",
      description:
        "Kamera sistemi her zaman en öncelikli çözüm olmayabilir. Ancak aşağıdaki senaryolarda kurulum doğru başlangıç noktasıdır.",
      items: [
        "Giriş çıkış noktaları ve kritik alanlar için görüntü kaydı ve caydırıcılık gerekiyorsa.",
        "Mevcut sisteminiz yok veya eski sistem artık güvenilir kayıt vermiyor.",
        "Uzaktan izleme ile sahayı telefondan ya da merkezden takip etmek istiyorsanız.",
        "İşyeri, apartman veya depo güvenliğini görünür hale getirmek ve olay sonrası inceleme yapabilmek istiyorsanız.",
      ],
    },
    {
      title: "Hangi Durumda Farklı Bir Hizmet Daha Doğru Olabilir?",
      items: [
        "Kurulu kameranız var ama görüntü gelmiyor veya kayıt almıyorsa: Kamera arıza servisi daha doğru başlangıçtır.",
        "Sistemin düzenli kontrol ve bakım ihtiyacı varsa: Bakım sözleşmesi değerlendirilmelidir.",
        "Yalnızca mevcut sistemi telefondan erişilebilir yapmak istiyorsanız: Uzaktan kamera izleme hizmeti yeterli olabilir.",
        "Kapı güvenliği ve giriş kontrolü öncelikli ise: Kartlı geçiş veya alarm sistemi ayrıca düşünülmelidir.",
      ],
    },
  ],
  scopeDetails: {
    title: "Kurulumda Neler Dahil, Neler Ayrıca Değerlendirilir?",
    description:
      "Standart bir kamera kurulumu projesinde aşağıdaki başlıklar dahil sunulur. Bazı ihtiyaçlar ise proje ölçeğine göre ayrıca değerlendirilir.",
    includedTitle: "Standart kurulumda dahil",
    includedItems: [
      "Ücretsiz keşif ve kör nokta analizi",
      "Kamera, NVR ve hard disk temini ve montajı",
      "Kablolama ve PoE altyapı kurulumu",
      "Mobil uygulama kurulumu ve kullanıcı teslimi",
      "Saha testleri ve devreye alma",
    ],
    additionalTitle: "Projeye göre ayrıca değerlendirilen başlıklar",
    additionalItems: [
      "Mevcut eski altyapı kaldırma veya revizyon ihtiyacı",
      "Gece görüş performansını artırmak için ilave aydınlatma",
      "Uzaktan izleme için modem veya ağ altyapısı düzenlemesi",
      "8+ kamera projelerinde ek switch ve enerji planlaması",
    ],
  },
  pricingFactors: {
    description:
      "Kamera sistemi kurulumunda fiyat ve süre, yalnızca kamera sayısına değil alanın gerçek ihtiyacına bağlıdır.",
    items: [
      "Kamera sayısı ve çözünürlük tercihi malzeme maliyetini doğrudan etkiler.",
      "İç mekan ile dış mekan projelerinde kasa tipi, kablolama ve montaj zorluğu farklılaşır.",
      "Mevcut kablo altyapısı varsa kullanılabilir; yoksa sıfırdan çekim süre ve maliyeti artırır.",
      "Kayıt süresi beklentisi disk kapasitesini, kayıt cihazı modelini ve bütçeyi değiştirir.",
      "Tek katlı mekan ile çok katlı bina veya geniş saha arasında montaj süresi farklıdır.",
    ],
  },
  venueTypes: [
    {
      title: "Villa ve Müstakil Ev",
      description:
        "Çevre izleme, kapı girişi ve bahçe güvenliği için dış mekan kameraları ve gece görüş desteği.",
    },
    {
      title: "Mağaza ve Dükkan",
      description:
        "Kasa, depo ve müşteri alanı görüntüleme. Hırsızlık önleme ve operasyonel denetim odaklı.",
    },
    {
      title: "Ofis ve İş Merkezi",
      description:
        "Giriş-çıkış, koridor ve ortak alan izleme. Çalışan güvenliği ve erişim takibi.",
    },
    {
      title: "Apartman ve Site",
      description:
        "Otopark, asansör, kapı ve ortak alan kameraları. Merkezi izleme ve kayıt arşivi.",
    },
    {
      title: "Fabrika ve Depo",
      description:
        "Geniş alan, çevre hattı ve yükleme noktası. PTZ ve gece görüş odaklı kurulum.",
    },
    {
      title: "Otopark ve Açık Alan",
      description:
        "Araç takibi, plaka tanıma (LPR) ve çevre güvenliği için geniş açı kameralar.",
    },
  ],

  /* ── Güven Blokları ── */
  trustBlocks: {
    title: "Somut Güvencelerimiz",
    subtitle: "Genel vaatler yerine size sunduğumuz somut taahhütler:",
    items: [
      { text: "Aynı gün geri dönüş garantisi" },
      { text: "Ücretsiz sahada keşif ve kör nokta analizi" },
      { text: "Kurulum sonrası mobil uygulama eğitimi" },
      { text: "1–3 yıl ürün garantisi" },
      { text: "Arıza bildiriminde hızlı müdahale" },
      { text: "İstanbul ve çevre illerde ücretsiz keşif" },
      { text: "Tek muhatap: proje yöneticisi atanır" },
      { text: "Genişleme için altyapı hazır teslim" },
    ],
  },

  /* ── İç Linkler ── */
  internalLinks: {
    title: "İlgili Hizmet ve Çözüm Sayfaları",
    subtitle:
      "Kamera sistemi dışında ihtiyaç duyabileceğiniz diğer güvenlik çözümlerini inceleyin.",
    links: [
      {
        href: "/alarm-sistemi-kurulumu",
        label: "Alarm Sistemi Kurulumu",
        description:
          "Kameraya ek olarak hırsız alarm ile caydırıcılık ve anlık bildirim sağlayın.",
      },
      {
        href: "/kartli-gecis-sistemi-kurulumu",
        label: "Kartlı Geçiş Sistemi Kurulumu",
        description:
          "Kapı giriş kontrolü ve personel takibi için kartlı geçiş ve turnike çözümleri.",
      },
      {
        href: "/yangin-alarm-sistemi-kurulumu",
        label: "Yangın Alarm Sistemi Kurulumu",
        description:
          "Yasal zorunluluğa uygun yangın algılama sistemi. Proje ve belgelendirme dahil.",
      },
      {
        href: "/apartman-site-guvenlik-sistemi",
        label: "Apartman ve Site Güvenlik Sistemi",
        description:
          "Kamera, kartlı geçiş ve yangın alarm bileşenlerini tek projede kapsayan komple site güvenliği.",
      },
      {
        href: "/bakim-servis-uzaktan-izleme",
        label: "Bakım, Servis ve Uzaktan İzleme",
        description:
          "Kurulum sonrası periyodik bakım, arıza servisi ve uzaktan izleme merkezi bağlantısı.",
      },
      {
        href: "/paketler-ve-fiyatlandirma",
        label: "Paketler ve Fiyatlandırma",
        description:
          "Mekan tipi ve kamera sayısına göre örnek paketler ve fiyat aralıkları.",
      },
    ],
  },
  problemLinks: {
    title: "Kamera Kurulumu Sonrası En Sık Karşılaşılan Sorunlar",
    subtitle:
      "Kurulum kararı verirken veya mevcut yapınızı iyileştirirken en çok karşılaşılan kamera sorunlarını ilgili rehberlerden inceleyin.",
    links: serviceProblemLinks["kamera-sistemi-kurulumu"],
  },

  finalCtaTitle: "Kamera Sistemi Kurulumu İçin Hemen Teklif Alın",
  finalCtaSubtitle:
    "Mekanınıza uygun kamera sistemi için ücretsiz keşif randevusu alın. Profesyonel ekibimiz en kısa sürede dönüş yapıyor.",
  whatsappMessage:
    "Merhaba, kamera sistemi kurulumu hakkında teklif almak istiyorum.",
  heroCtaLabel: "Kamera Teklifi Al",
  segments: [
    {
      title: "Apartman ve Siteler İçin Kamera Sistemi",
      content:
        "Giriş kapıları, asansör önleri, otopark ve ortak alanları kapsayan çok noktalı kamera sistemleri. Site yönetimine merkezi izleme ve kayıt arşivi sunulur.",
      href: "/apartman-site-guvenlik-sistemi",
    },
    {
      title: "İşyerleri İçin Kamera Sistemi",
      content:
        "Mağaza, ofis ve kafe için müşteri alanı, kasa, depo ve giriş noktalarını kapsayan kamera ağı. Operasyonel denetim ve çalışan güvenliği odaklı.",
      href: "/isyeri-guvenlik-sistemi",
    },
    {
      title: "Fabrika ve Depolar İçin Kamera Sistemi",
      content:
        "Geniş sahalarda yükleme alanı, çevre hattı ve üretim bölümü takibi. Gece görüş, PTZ ve kayıt kapasitesi odaklı kurulum.",
      href: "/fabrika-depo-guvenlik-sistemi",
    },
  ],
  faq: [
    {
      question: "Kamera kurulumu ne kadar sürer?",
      answer:
        "Konut için genelde aynı gün, küçük işyerleri için 1–2 gün, büyük projeler için keşif sonrası 3–5 iş günü. Net süre keşifte belirlenir.",
    },
    {
      question: "Kaç kamera gerektiğini nasıl belirliyorsunuz?",
      answer:
        "Alan büyüklüğü, giriş-çıkış noktaları, kör alanlar ve kayıt beklentisine göre keşifte net kamera planı çıkarıyoruz.",
    },
    {
      question: "Mevcut kablo altyapısı kullanılabilir mi?",
      answer:
        "Cat5e/Cat6 altyapı varsa PoE kameralar için değerlendirilir. Keşifte altyapı uygunluğu test edilir.",
    },
    {
      question: "Kayıtlar ne kadar süre saklanır?",
      answer:
        "Standart 2TB disk ile 4 kamerada yaklaşık 30 gün. Depolama, kamera sayısı ve çözünürlüğe göre planlanır.",
    },
    {
      question: "Uzaktan telefondan izleme kuruluyor mu?",
      answer:
        "Evet. Mobil uygulama ile canlı izleme ve kayıt erişimi kurulum sırasında aktif hale getirilir.",
    },
    {
      question: "Kurulum sonrası destek var mı?",
      answer:
        "Evet. Ürün garantisi ve teknik destek mevcuttur. İhtiyaç halinde bakım sözleşmesi de değerlendirilebilir.",
    },
  ],
  defaultService: "kamera",
  blogPosts: [
    {
      slug: "guvenlik-kamerasi-montaj-ucreti-2026",
      title: "Güvenlik Kamerası Montaj Ücreti 2026",
      excerpt:
        "Ev, işyeri ve depo için güvenlik kamerası kurulum maliyeti ne kadar? Güncel fiyatlar ve bileşen bazlı maliyet analizi.",
    },
    {
      slug: "ip-kamera-mi-analog-kamera-mi",
      title: "IP Kamera mı Analog Kamera mı?",
      excerpt:
        "IP ve analog kameraların teknik farkları, avantajları ve mekan tipine göre doğru sistem seçimi rehberi.",
    },
    {
      slug: "kamera-sistemi-nereye-takilir",
      title: "Kamera Sistemi Nereye Takılır?",
      excerpt:
        "Ev, işyeri, apartman ve fabrika için doğru kamera yerleşim noktaları ve montaj prensipleri rehberi.",
    },
    {
      slug: "4-kamerali-sistem-fiyati",
      title: "4 Kameralı Güvenlik Sistemi Fiyatı 2026",
      excerpt:
        "4 kameralı güvenlik sistemi fiyatı ne kadar? 2026 güncel fiyatlar, sistem bileşenleri, paket seçenekleri ve kurulum maliyeti rehberi.",
    },
    {
      slug: "8-kamerali-sistem-fiyati",
      title: "8 Kameralı Güvenlik Sistemi Fiyatı 2026",
      excerpt:
        "8 kameralı güvenlik sistemi fiyatı ne kadar? Sistem bileşenleri, paket seçenekleri ve kurulum maliyeti rehberi.",
    },
    {
      slug: "poe-kamera-sistemi-nedir",
      title: "PoE Kamera Sistemi Nedir?",
      excerpt:
        "PoE kamera sistemi hakkında kapsamlı teknik rehber. Çalışma prensibi, avantajları, seçim kriterleri ve fiyat bilgileri.",
    },
  ],
  ctaContent: {
    badge: "Keşif • Planlama • Teklif",
    title: "Kamera Sistemi İçin Ücretsiz Keşif ve Teklif Alın",
    subtitle:
      "Mekan tipinizi ve tahmini kamera sayısını paylaşın. Keşif planını aynı gün oluşturalım, ihtiyacınıza göre doğru sistemi birlikte netleştirelim.",
    trustItems: [
      "Ücretsiz sahada keşif ve kör nokta analizi",
      "Kamera sayısı ve kayıt planlaması",
      "Anahtar teslim montaj ve devreye alma",
      "Ürün garantisi ve satış sonrası destek",
    ],
    supportCards: [
      {
        title: "Projeye göre planlama",
        text: "Kamera yerleşimini, kayıt kapasitesini ve altyapı ihtiyacını alanınıza göre belirliyoruz.",
      },
      {
        title: "Çalışan sistem teslimi",
        text: "Montaj, mobil erişim, kullanıcı ayarları ve saha testi ile sistemi hazır teslim ediyoruz.",
      },
    ],
  },
  authorityBeforeFaq: {
    title: "Türkiye Genelinde Kamera Sistemi Kurulumu Hizmeti",
    description:
      "Kamera sistemi kurulum hizmetini Türkiye'nin büyük şehirlerinde aktif olarak sunuyoruz. Şehir bazlı hizmet detaylarına aşağıdaki sayfalardan ulaşabilirsiniz.",
    links: [
      {
        href: "/istanbul/kamera-sistemi-kurulumu",
        label: "İstanbul Kamera Sistemi Kurulumu",
      },
      {
        href: "/ankara/kamera-sistemi-kurulumu",
        label: "Ankara Kamera Sistemi Kurulumu",
      },
      {
        href: "/izmir/kamera-sistemi-kurulumu",
        label: "İzmir Kamera Sistemi Kurulumu",
      },
    ],
  },
  authorityAfterFaq: {
    title: "Kamera Sistemi Kurulumu Hizmeti Verilen Şehirler",
    links: [
      { href: "/istanbul/kamera-sistemi-kurulumu", label: "İstanbul" },
      { href: "/ankara/kamera-sistemi-kurulumu", label: "Ankara" },
      { href: "/izmir/kamera-sistemi-kurulumu", label: "İzmir" },
      { href: "/bursa/kamera-sistemi-kurulumu", label: "Bursa" },
      { href: "/antalya/kamera-sistemi-kurulumu", label: "Antalya" },
    ],
  },
  cityServiceLinks: {
    title: "Kamera Sistemi Kurulumu — Şehir Bazlı Hizmet Sayfaları",
    description:
      "Hizmet verdiğimiz her şehirde kamera sistemi kurulumu için detaylı bilgi, şehre özel içerik ve teklif sayfalarına aşağıdan ulaşabilirsiniz.",
    links: cities.map((city) => ({
      href: `/${city.slug}/kamera-sistemi-kurulumu`,
      label: `${city.name} Kamera Sistemi Kurulumu`,
      description: `${city.name} içinde profesyonel kamera sistemi kurulumu için keşif ve teklif alın.`,
    })),
  },
  cityHubLinks: {
    title: "Şehir Bazlı Güvenlik Hizmetleri",
    description:
      "Kamera kurulumu arayışının yoğun olduğu şehirlerdeki güvenlik çözümlerimizi ve hizmet kapsamımızı inceleyin.",
    links: topCityHubLinks,
  },
  trustImages: {
    afterHero: {
      src: "/images/services/bakim-servis/guvenlik-kamera-montaj-ekibi-isyeri-montaj-dis-mekan.jpg",
      alt: "Güvenlik kamera montajı yapan teknik servis ekibi",
    },
    beforeFaq: {
      src: "/images/services/bakim-servis/apartman-kamera-montaji-teknisyen-istanbul.jpg",
      alt: "Apartman güvenlik kamera sistemi kurulumu",
    },
    beforeCta: {
      src: "/images/services/bakim-servis/kucuk-isletme-kamera-montaj-memnuniyeti.jpg",
      alt: "İşletme kamera montajı sonrası müşteri memnuniyeti",
    },
  },
};

export default function KameraSayfasi() {
  return <ServicePageTemplate data={data} />;
}
