import type { Metadata } from "next";
import { getCanonicalUrlForKnownPath } from "@/lib/canonical";
import ServicePageTemplate, {
  ServicePageData,
} from "@/components/templates/ServicePageTemplate";
import { cities } from "@/data/cities";
import { topCityHubLinks } from "@/data/internal-links";
import { buildSeoMetadata } from "@/lib/seo/metadata";

const canonicalUrl = getCanonicalUrlForKnownPath(
  "/yangin-alarm-sistemi-kurulumu",
);

export const metadata: Metadata = buildSeoMetadata({
  title: "Yangın Alarm Sistemi Kurulumu | TS EN 54 Uyumlu Proje ve Montaj",
  description:
    "Yasal zorunluluğa uygun yangın alarm sistemi kurulumu. Duman dedektörü, ihbar butonu, siren, adreslenebilir panel. Resmi proje, test belgesi ve sertifika dahil.",
  canonical: canonicalUrl,
  openGraph: {
    title: "Yangın Alarm Sistemi Kurulumu | TS EN 54 Uyumlu Proje ve Montaj",
    description:
      "Yasal uyumlu yangın alarm sistemi. Duman dedektörü, ihbar butonu, siren. Proje ve sertifika dahil.",
    url: canonicalUrl,
    siteName: "Güvenlik Servisi",
    locale: "tr_TR",
    type: "website",
  },
});

const data: ServicePageData = {
  slug: "yangin-alarm-sistemi-kurulumu",
  title: "Yangın Alarm Sistemi Kurulumu",
  subtitle:
    "TS EN 54 standardına uygun yangın algılama ve ihbar sistemi kurulumu. Resmi proje çizimi, uygulama belgesi, test raporu ve uygunluk sertifikası dahil.",
  description:
    "Yangın alarm sistemi, yasal zorunluluk ve yapı güvenliğinin doğrudan bir bileşenidir. Duman algılama, ısı algılama, ihbar butonu ve uyarı sirenleri doğru yerleşim planına göre konumlandırılmalıdır.\n\nAdreslenebilir ve konvansiyonel panel seçeneklerini yapının büyüklüğüne ve bütçesine göre değerlendiriyoruz. Her kurulumda resmi proje çizimi, uygulama belgesi ve test raporu teslim ediyoruz.\n\nİtfaiye bağlantı terminali, acil aydınlatma entegrasyonu ve yıllık bakım zorunluluğu gibi başlıklar proje kapsamına dahil edilir.",
  heroBadge: "Proje • Montaj • Belgelendirme",
  heroTrustItems: [
    "TS EN 54 uygunluk sertifikası",
    "Resmi proje çizimi ve test raporu",
    "İtfaiye bağlantı terminali",
    "Yıllık bakım ve test desteği",
  ],
  heroAdvantages: [
    {
      title: "Yasal uyumluluk garantisi",
      text: "Her kurulumda TS EN 54 standardına uygunluk belgesi, proje çizimi ve itfaiye bağlantı terminali dahil sunulur.",
    },
    {
      title: "Yapıya özel panel seçimi",
      text: "Küçük yapılar için konvansiyonel, büyük projeler için adreslenebilir panel — bina ölçeğine ve bütçeye göre belirlenir.",
    },
  ],
  heroPanel: {
    title: "Yangın alarm kurulumunda neye odaklanırız",
    body: [
      "Yapının kat planı, alan kullanımı ve yangın yönetmeliği gereksinimlerine göre dedektör yerleşim planını hazırlıyoruz.",
      "Panel tipini (konvansiyonel veya adreslenebilir) bina boyutu, bütçe ve yönetim ihtiyacına göre belirliyoruz.",
      "Kurulum sonrası tüm dedektörleri test ediyor, resmi belgeleri tamamlayıp itfaiye bağlantısını aktif hale getiriyoruz.",
    ],
  },

  /* ── Bu Sayfa Kimler İçin ── */
  targetAudience: {
    title: "Yangın Alarm Sistemi Kurulumu Kimler İçin?",
    subtitle:
      "Yangın alarm sistemi yasal zorunluluk ve yapı güvenliğinin temel bileşenidir. Aşağıdaki yapı tipleri ve senaryolarda kurulum kaçınılmazdır.",
    items: [
      {
        title: "Otel ve Konaklama Tesisleri",
        description:
          "Yasal zorunluluk gereği kat bazlı dedektör, ihbar butonu, acil anons ve tahliye yönlendirme sistemi.",
      },
      {
        title: "Restoran, Kafe ve Mutfaklı İşletmeler",
        description:
          "Mutfak yangın riski için davlumbaz dedektörü ve özel söndürme entegrasyonu. Ruhsat zorunluluğu.",
      },
      {
        title: "Apartman ve Rezidans Yönetimleri",
        description:
          "Merdiven boşluğu, bodrum kat ve otopark için duman algılama. Bina yönetmeliği uyumluluğu.",
      },
      {
        title: "Fabrika ve Üretim Tesisleri",
        description:
          "Endüstriyel gaz ve ısı algılama, ATEX uyumlu dedektörler, sprinkler entegrasyonu ve acil kapatma senaryoları.",
      },
      {
        title: "AVM, Plaza ve Büyük Ticari Yapılar",
        description:
          "Adreslenebilir panel, merkezi kontrol, itfaiye bağlantısı ve çok bölgeli tahliye yönlendirmesi.",
      },
      {
        title: "Ruhsat ve Sigorta Zorunluluğu Olanlar",
        description:
          "İşyeri açılış ruhsatı, otel izni veya sigorta poliçesi gereği yangın alarm belgesi gerekli olan yapılar.",
      },
    ],
  },

  /* ── En Sık Yaşanan Sorunlar ── */
  commonProblems: {
    title: "Yangın Alarm Sistemlerinde En Sık Yaşanan Sorunlar",
    subtitle:
      "Bu sorunlardan birini yaşıyorsanız, profesyonel projelendirme ve doğru belgelendirme ile çözüm mümkündür.",
    items: [
      {
        title: "Eksik veya Hatalı Belgelendirme",
        description:
          "Proje çizimi, test raporu veya uygunluk sertifikası eksik olduğunda sigorta hasar talebi reddedilir ve ruhsat sorunları çıkar.",
      },
      {
        title: "Yanlış Dedektör Tipi Seçimi",
        description:
          "Mutfak, bodrum, ofis ve üretim alanları farklı dedektör tipi gerektirir. Yanlış seçim yanlış alarm veya algılama gecikmesine neden olur.",
      },
      {
        title: "Bakım ve Test Yükümlülüğünün İhmal Edilmesi",
        description:
          "Yasal olarak yıllık bakım ve test raporu zorunludur. İhmal edildiğinde sistem performansı düşer ve yasal sorumluluk doğar.",
      },
      {
        title: "Konvansiyonel/Adreslenebilir Kararsızlığı",
        description:
          "Yapı ölçeğine uygun panel tipi seçilmediğinde ya gereğinden pahalı ya da yetersiz sistem kurulmuş olur.",
      },
      {
        title: "İtfaiye Bağlantı Eksikliği",
        description:
          "İtfaiye bağlantı terminali kurulmadan yapılan kurulumlar yasal uyumsuzluk oluşturur. Olay anında otomatik bildirim sağlanamaz.",
      },
      {
        title: "Tahliye ve Acil Aydınlatma Entegrasyonunun Yapılmaması",
        description:
          "Yangın alarmı tetiklendiğinde acil aydınlatma, tahliye yönlendirme ve anons sistemiyle entegrasyon sağlanmamış olur.",
      },
      {
        title: "Birden Fazla Firma ile Parçalı Kurulum",
        description:
          "Yangın alarm ayrı, sprinkler ayrı, acil aydınlatma ayrı firmadan alındığında entegrasyon ve belgelendirme sorunları oluşur.",
      },
    ],
  },

  authorityTitle:
    "Neden Yasal Uyumlu Kurulum ve Doğru Belgelendirme Kritik Önemlidir?",
  authorityBody: [
    "Türk yangın yönetmeliği, işyerleri, apartmanlar ve kamu binaları için yangın alarm sistemi kurulumunu zorunlu kılar. Bu zorunluluk yalnızca cihaz montajını değil; doğru projelendirme, belgelendirme ve yıllık bakımı da kapsar.",
    "Eksik veya hatalı belgelendirme, sigorta hasar taleplerinin reddedilmesine ve ruhsat/iskan sorunlarına neden olabilir. Proje çizimi, test raporu ve uygunluk sertifikası her kurulumun ayrılmaz parçasıdır.",
    "Yıllık bakım ve test raporu tutulması yasal zorunluluktur. Bakım sözleşmesi bu yükümlülüğü kapsar ve sistem performansını güvence altına alır.",
  ],
  authorityNote: {
    title: "Teklif almak için",
    body: "Bina tipi, kat sayısı ve mevcut yangın alarm durumunu paylaşmanız yeterli. Proje kapsamını ve tahmini bütçeyi hızlıca bildirelim.",
  },
  features: [
    "Optik duman dedektörleri",
    "Isı dedektörleri (sabit ve artış oranlı)",
    "Manuel ihbar butonları (MİB)",
    "Sesli + görsel alarm üniteleri",
    "Adreslenebilir / konvansiyonel panel seçenekleri",
    "İtfaiye bağlantı terminali",
    "Resmi proje çizimi + uygulama belgesi",
    "TS EN 54 uygunluk sertifikası",
  ],

  /* ── Alan Bazlı Çözümler ── */
  areaSolutions: {
    title: "Alan Bazlı Yangın Algılama Çözümleri",
    subtitle:
      "Her alan farklı yangın riski taşır ve farklı dedektör tipi gerektirir. Yapınızın kritik noktalarına göre nasıl çözüm ürettiğimizi görün.",
    items: [
      {
        area: "Merdiven Boşlukları ve Kaçış Yolları",
        description:
          "Tahliye güzergahlarında duman algılama ve acil aydınlatma. Yangın kapılarıyla entegre çalışan sistem.",
        features: [
          "Optik duman dedektörleri",
          "Acil aydınlatma armatürleri",
          "Yangın kapısı mıknatıs kilitleri",
        ],
      },
      {
        area: "Mutfak ve Pişirme Alanları",
        description:
          "Yüksek ısı ve yağlı buhar ortamında standart dedektörler yanlış alarm verir. Mutfak tipi özel dedektörler ve söndürme sistemi gerekir.",
        features: [
          "Isı dedektörleri (sabit ve artış oranlı)",
          "Davlumbaz söndürme sistemi entegrasyonu",
          "Yağlı buhar filtrasyonu uyumlu sensörler",
        ],
      },
      {
        area: "Bodrum Kat ve Otopark",
        description:
          "Havalandırması kısıtlı alanlar. Duman yoğunluğu hızla artar. Erken algılama ve hızlı uyarı kritik önemdedir.",
        features: [
          "Yüksek hassasiyetli duman dedektörleri",
          "CO (karbon monoksit) dedektörleri",
          "Dış siren ve ışıklı uyarı",
        ],
      },
      {
        area: "Ofis ve Çalışma Alanları",
        description:
          "Açık ofis, toplantı odası ve arşiv bölümlerinde standart duman algılama. Adreslenebilir sistem ile nokta tespiti.",
        features: [
          "Optik duman dedektörleri",
          "Manuel ihbar butonları (MİB)",
          "Sesli ve görsel alarm üniteleri",
        ],
      },
      {
        area: "Üretim ve Depo Alanları",
        description:
          "Endüstriyel tesislerde geniş alan yangın algılama. ATEX uyumlu dedektörler ve sprinkler entegrasyonu.",
        features: [
          "Alev dedektörleri",
          "Gaz algılama sensörleri",
          "Sprinkler entegrasyonu",
        ],
      },
      {
        area: "Teknik Odalar ve Elektrik Panoları",
        description:
          "Elektrik panosu, jeneratör odası ve UPS hücrelerinde erken algılama. Kablo yangını riski yüksek alanlarda özel çözüm.",
        features: [
          "Aspirasyonlu erken uyarı sistemi",
          "Isı dedektörleri",
          "Otomatik söndürme entegrasyonu",
        ],
      },
    ],
  },

  /* ── Mid-page CTA ── */
  midPageCta: {
    title: "Yapınız İçin Yangın Alarm Projesini Birlikte Planlayalım",
    subtitle:
      "Bina tipi, kat sayısı ve mevcut durumunuzu paylaşın. Yasal uyumlu proje kapsamını ve tahmini bütçeyi hızlıca bildirelim.",
    ctaLabel: "Yangın Alarm Projesi Teklifi Alın",
  },

  /* ── Çözüm Seviyeleri ── */
  solutionTiers: {
    title: "Yapı Ölçeğine Göre Yangın Alarm Seviyeleri",
    subtitle:
      "Her yapı aynı panel tipi ve aynı kapsamda sistem gerektirmez. Yapınıza uygun seviyeyi birlikte belirleyelim.",
    ctaLabel: "Yapınıza Uygun Seviyeyi Belirleyelim",
    tiers: [
      {
        name: "Konvansiyonel Temel Paket",
        targetAudience:
          "Küçük ve orta ölçekli yapılar: mağaza, küçük otel, ofis (10–15 bölgeye kadar).",
        solves:
          "Yasal zorunluluk, temel yangın algılama ve belgelendirme ihtiyacını karşılar.",
        components: [
          "Konvansiyonel yangın alarm paneli",
          "Optik duman dedektörleri",
          "Manuel ihbar butonları (MİB)",
          "Sesli + görsel alarm üniteleri",
          "İtfaiye bağlantı terminali",
          "TS EN 54 uygunluk belgesi ve test raporu",
        ],
        upgradeNote:
          "Yapı büyüdüğünde veya nokta bazlı tespit gerektiğinde adreslenebilir panele yükseltme.",
      },
      {
        name: "Adreslenebilir Standart Paket",
        targetAudience:
          "Orta-büyük yapılar: otel, AVM, hastane, büyük ofis binaları.",
        solves:
          "Her dedektörün ayrı ayrı tanımlanması, merkezi kontrol ve detaylı olay raporu ihtiyacını karşılar.",
        components: [
          "Adreslenebilir yangın alarm paneli",
          "Adreslenebilir duman ve ısı dedektörleri",
          "Manuel ihbar butonları",
          "Sesli + görsel alarm üniteleri",
          "İtfaiye bağlantı terminali",
          "Acil aydınlatma entegrasyonu",
          "Proje çizimi + test raporu + sertifika",
        ],
        upgradeNote:
          "Sprinkler entegrasyonu, gaz söndürme veya aspirasyonlu erken uyarı sistemi eklendiğinde.",
      },
      {
        name: "Endüstriyel Proje Paketi",
        targetAudience:
          "Fabrika, depo, üretim tesisi veya yüksek riskli endüstriyel yapılar.",
        solves:
          "Geniş alan yangın algılama, gaz/alev dedektörü, ATEX uyumluluk ve sprinkler entegrasyonu ihtiyacını karşılar.",
        components: [
          "Adreslenebilir panel (genişleyebilir)",
          "Alev ve gaz dedektörleri",
          "ATEX uyumlu dedektörler (patlamaya dayanıklı)",
          "Sprinkler sistemi entegrasyonu",
          "Otomatik söndürme sistemi bağlantısı",
          "Acil durdurma ve kapatma senaryoları",
          "Bakım sözleşmesi (yasal zorunluluk)",
        ],
        upgradeNote:
          "İzleme merkezi bağlantısı, termal görüntüleme veya acil anons sistemi eklendiğinde.",
      },
    ],
  },

  /* ── Neden Tek Elden Kurulum ── */
  whyIntegrated: {
    title: "Neden Yangın Alarm Projesini Tek Firmadan Yaptırmalısınız?",
    subtitle:
      "Yangın alarm sistemi yalnızca cihaz montajı değildir. Proje, belgelendirme ve bakım tek süreçte yürütülmelidir:",
    items: [
      {
        title: "Proje ve Kurulum Bütünlüğü",
        description:
          "Proje çizimi ve kurulum aynı firma tarafından yapıldığında dedektör yerleşimi %100 projeyle örtüşür. Belgelendirme tutarsızlığı oluşmaz.",
      },
      {
        title: "Belgelendirme Garantisi",
        description:
          "Proje, test raporu ve TS EN 54 uygunluk sertifikası tek firmadan teslim edilir. Sigorta ve ruhsat başvurularında belge eksiği yaşanmaz.",
      },
      {
        title: "Entegrasyon Kolaylığı",
        description:
          "Sprinkler, acil aydınlatma, tahliye yönlendirme ve anons sistemi aynı proje kapsamında koordineli çalışır.",
      },
      {
        title: "Yasal Bakım Yükümlülüğü Kapsamda",
        description:
          "Yıllık bakım ve test raporu zorunludur. Bakım sözleşmesi bu yükümlülüğü otomatik karşılar ve sistem performansını güvence altına alır.",
      },
      {
        title: "İtfaiye ve Belediye Koordinasyonu",
        description:
          "İtfaiye bağlantı terminali kurulumu ve belediye ruhsat süreçlerinde teknik destek sağlarız.",
      },
      {
        title: "Tek Muhatap Avantajı",
        description:
          "Arıza, bakım veya belge yenileme ihtiyacında tek muhatap. Sorumluluk karmaşası olmadan hızlı çözüm.",
      },
    ],
  },

  /* ── Keşif ve Teklif Süreci ── */
  discoveryProcess: {
    title: "Yangın Alarm Projesinde Süreç Nasıl İşler?",
    subtitle:
      "İlk iletişimden belge teslimine kadar net ve şeffaf bir süreç izliyoruz.",
    steps: [
      {
        step: 1,
        title: "Yapı Bilgisini Alıyoruz",
        description:
          "Bina tipi, kat sayısı, alan büyüklüğü ve mevcut yangın alarm durumunu form, telefon veya WhatsApp ile öğreniyoruz.",
      },
      {
        step: 2,
        title: "Ön Kapsam Değerlendirmesi",
        description:
          "Teknik ekibimiz panel tipi (konvansiyonel/adreslenebilir), dedektör kapsamı ve tahmini bütçeyi netleştiriyor.",
      },
      {
        step: 3,
        title: "Yerinde Keşif ve Proje Çizimi",
        description:
          "Kat planlarını yerinde inceliyoruz. Dedektör yerleşim planını, ihbar butonu noktalarını ve kablo güzergahlarını belirliyoruz.",
      },
      {
        step: 4,
        title: "Teklif ve Proje Teslimi",
        description:
          "Keşif sonrası resmi proje çizimi, bileşen listesi ve net fiyat teklifini gönderiyoruz.",
      },
      {
        step: 5,
        title: "Kurulum ve Devreye Alma",
        description:
          "Profesyonel ekibimiz montajı gerçekleştiriyor, tüm dedektörleri test ediyor ve itfaiye bağlantısını aktif hale getiriyor.",
      },
      {
        step: 6,
        title: "Belge Teslimi ve Bakım Planı",
        description:
          "Test raporu, TS EN 54 sertifikası ve proje belgeleri teslim ediliyor. Yıllık bakım sözleşmesi sunuluyor.",
      },
    ],
  },

  decisionBlocks: [
    {
      title: "Hangi Durumda Yangın Alarm Sistemi Kurulumu Gereklidir?",
      description:
        "Türk yangın yönetmeliği birçok yapı tipi için yangın alarm sistemi zorunluluğu getirir. Aşağıdaki durumlarda kurulum kaçınılmazdır.",
      items: [
        "Yeni yapı veya tadilat ruhsatı alınacaksa yangın alarm projesi zorunlu belgeler arasındadır.",
        "İşyeri ruhsatı, otel veya restoran açılış izni için yangın alarm sistemi şart koşuluyorsa.",
        "Sigorta şirketi yangın alarm sistemi ve belgelendirme istiyorsa.",
        "Mevcut binanın yangın güvenliği güncelleme veya iyileştirme gereksinimini karşılaması gerekiyorsa.",
      ],
    },
    {
      title: "Konvansiyonel mi, Adreslenebilir mi?",
      description:
        "Panel tipi, yapının büyüklüğü ve yönetim ihtiyacına göre belirlenir.",
      items: [
        "Konvansiyonel panel: Küçük ve orta ölçekli yapılarda (10–15 bölgeye kadar) uygun maliyetli çözüm sunar.",
        "Adreslenebilir panel: Her dedektörün ayrı ayrı tanımlanması gereken büyük yapılarda (otel, AVM, fabrika) tercih edilir.",
        "Konvansiyonelden adreslenebilire geçiş: Mevcut kablo altyapısının durumuna göre aşamalı yükseltme mümkündür.",
      ],
    },
  ],
  scopeDetails: {
    title: "Kurulumda Neler Dahil, Neler Ayrıca Değerlendirilir?",
    description:
      "Standart bir yangın alarm kurulumunda aşağıdaki başlıklar dahil sunulur.",
    includedTitle: "Standart kurulumda dahil",
    includedItems: [
      "Resmi proje çizimi ve dedektör yerleşim planı",
      "Panel, dedektörler, ihbar butonları ve siren temini",
      "Kablolama, montaj ve devreye alma",
      "İtfaiye bağlantı terminali kurulumu",
      "Test raporu ve TS EN 54 uygunluk sertifikası",
    ],
    additionalTitle: "Projeye göre ayrıca değerlendirilen başlıklar",
    additionalItems: [
      "Eski sistem kaldırma veya konvansiyonelden adreslenebilire yükseltme",
      "Acil aydınlatma ve tahliye yönlendirme entegrasyonu",
      "Sprinkler veya gaz söndürme sistemi entegrasyonu",
      "Yıllık bakım sözleşmesi (yasal zorunluluk)",
    ],
  },
  pricingFactors: {
    description:
      "Yangın alarm sistemi fiyatı, yapının büyüklüğü ve proje kapsamına bağlıdır.",
    items: [
      "Bina kat sayısı ve alan büyüklüğü dedektör adedini doğrudan belirler.",
      "Panel tipi (konvansiyonel vs. adreslenebilir) maliyet farkının en büyük kalemlerinden biridir.",
      "Mevcut kablo altyapısı varsa kullanılabilir; yoksa sıfırdan çekim süre ve maliyeti artırır.",
      "İtfaiye bağlantısı, acil aydınlatma ve sprinkler entegrasyonu ek kapsam olarak fiyata yansır.",
      "Belgelendirme (proje, test raporu, sertifika) tüm kurulumların standart parçasıdır.",
    ],
  },
  venueTypes: [
    {
      title: "Otel ve Konaklama",
      description:
        "Yasal zorunluluk gereği kat bazlı dedektör planı, ihbar butonu ve acil anons sistemi.",
    },
    {
      title: "Restoran ve Kafe",
      description:
        "Mutfak yangın riski için davlumbaz dedektörleri ve özel söndürme sistemi entegrasyonu.",
    },
    {
      title: "Apartman ve Rezidans",
      description:
        "Merdiven boşluğu, bodrum kat ve otopark için duman algılama ve acil aydınlatma.",
    },
    {
      title: "Fabrika ve Üretim Tesisi",
      description:
        "Endüstriyel gaz ve ısı algılama, ATEX uyumlu dedektörler ve sprinkler entegrasyonu.",
    },
    {
      title: "AVM ve Plaza",
      description:
        "Büyük alan adreslenebilir sistemler, merkezi kontrol paneli ve itfaiye bağlantısı.",
    },
  ],

  /* ── Güven Blokları ── */
  trustBlocks: {
    title: "Somut Güvencelerimiz",
    subtitle: "Genel vaatler yerine size sunduğumuz somut taahhütler:",
    items: [
      { text: "TS EN 54 uygunluk sertifikası her kurulumda dahil" },
      { text: "Resmi proje çizimi ve test raporu teslimi" },
      { text: "İtfaiye bağlantı terminali kurulumu" },
      { text: "Sigorta şirketine uygun formatta belgelendirme" },
      { text: "Yıllık bakım ve test zorunluluğu için sözleşme desteği" },
      { text: "İstanbul ve çevre illerde ücretsiz keşif" },
      { text: "Tek muhatap: proje dan belgelendirmeye kadar tek firma" },
      { text: "Mevcut sistemden adreslenebilir sisteme yükseltme desteği" },
    ],
  },

  /* ── İç Linkler ── */
  internalLinks: {
    title: "İlgili Hizmet ve Çözüm Sayfaları",
    subtitle:
      "Yangın alarm sistemi dışında ihtiyaç duyabileceğiniz diğer güvenlik çözümlerini inceleyin.",
    links: [
      {
        href: "/kamera-sistemi-kurulumu",
        label: "Kamera Sistemi Kurulumu",
        description:
          "Yangın alarm sistemiyle birlikte güvenlik kamerası kurulumu ile 7/24 izleme imkânı.",
      },
      {
        href: "/alarm-sistemi-kurulumu",
        label: "Alarm Sistemi Kurulumu",
        description:
          "Hırsız alarm sistemi ile yangın alarmına ek olarak giriş güvenliği ve caydırıcılık.",
      },
      {
        href: "/kartli-gecis-sistemi-kurulumu",
        label: "Kartlı Geçiş Sistemi Kurulumu",
        description:
          "Yangın anında acil tahliye senaryosuyla entegre çalışan kapı giriş kontrolü.",
      },
      {
        href: "/apartman-site-guvenlik-sistemi",
        label: "Apartman ve Site Güvenlik Sistemi",
        description:
          "Yangın alarm dahil tüm güvenlik bileşenlerini tek projede kapsayan komple site güvenliği.",
      },
      {
        href: "/bakim-servis-uzaktan-izleme",
        label: "Bakım, Servis ve Uzaktan İzleme",
        description:
          "Yasal zorunluluk olan yıllık bakım ve test raporu için periyodik bakım hizmeti.",
      },
      {
        href: "/paketler-ve-fiyatlandirma",
        label: "Paketler ve Fiyatlandırma",
        description:
          "Yapı tipi ve ölçeğine göre örnek yangın alarm paketleri ve fiyat aralıkları.",
      },
    ],
  },

  finalCtaTitle: "Yangın Alarm Sistemi Kurulumu İçin Hemen İletişime Geçin",
  finalCtaSubtitle:
    "TS EN 54 uyumlu yangın alarm sistemi kurulumu için teklif alın. Proje, montaj ve belgelendirme tek elden.",
  whatsappMessage:
    "Merhaba, yangın alarm sistemi kurulumu hakkında teklif almak istiyorum.",
  segments: [
    {
      title: "Apartman ve Siteler İçin Yangın Alarmı",
      content:
        "Bina yönetmeliğine uygun zorunlu yangın alarm kurulumu. Merdiven boşlukları, bodrum katlar ve ortak alanları kapsayan sistem. Belgelendirme dahil.",
      href: "/apartman-site-guvenlik-sistemi",
    },
    {
      title: "İşyerleri İçin Yangın Alarmı",
      content:
        "Restoran, otel, mağaza ve ofisler için zorunlu yangın alarm kurulumu. Sigorta geçerliliği ve belediye ruhsatı için gerekli tüm belgeler dahil sunulur.",
      href: "/isyeri-guvenlik-sistemi",
    },
    {
      title: "Fabrika ve Depolar İçin Yangın Alarmı",
      content:
        "Endüstriyel tesislerde gaz dedektörleri, sprinkler entegrasyonu ve acil anons sistemi. Atex uyumlu seçenekler. Geniş alan projelerinde adreslenebilir panel kullanılır.",
      href: "/fabrika-depo-guvenlik-sistemi",
    },
  ],
  faq: [
    {
      question: "Yangın alarm sistemi zorunlu mu?",
      answer:
        "Evet. İşyerleri, apartmanlar, oteller ve kamu binaları için Türk yangın yönetmeliği ve TS EN 54 gereği zorunludur.",
    },
    {
      question: "Hangi belgeler teslim ediliyor?",
      answer:
        "Resmi proje çizimi, uygulama belgesi, devre şeması, test raporu ve TS EN 54 uygunluk sertifikası her kurulumda dahildir.",
    },
    {
      question: "Mevcut eski sistemi güncelleyebilir misiniz?",
      answer:
        "Evet. Konvansiyonel sistemleri adreslenebilir panele yükseltiyoruz. Mevcut kablo altyapısı varsa değerlendirilir.",
    },
    {
      question: "Yıllık bakım zorunlu mu?",
      answer:
        "Evet. Yasal olarak yıllık bakım ve test raporu tutulması gerekir. Bakım sözleşmemiz bu yükümlülüğü kapsar.",
    },
    {
      question: "Sigorta şirketine belge verebiliyor musunuz?",
      answer:
        "Evet. Kurulum belgeleri ve test raporları sigorta şirketlerinin talep ettiği formatta hazırlanır.",
    },
  ],
  defaultService: "yangin",
  ctaContent: {
    badge: "Proje • Keşif • Teklif",
    title: "Yangın Alarm Sistemi İçin Proje ve Teklif Alın",
    subtitle:
      "Bina tipi ve kat sayısını paylaşın. Proje kapsamını ve tahmini bütçeyi hızlıca bildirelim.",
    trustItems: [
      "TS EN 54 uygunluk sertifikası",
      "Resmi proje çizimi ve test raporu",
      "İtfaiye bağlantı terminali",
      "Yıllık bakım ve belgelendirme desteği",
    ],
    supportCards: [
      {
        title: "Yasal uyumluluk garantisi",
        text: "Her kurulumda proje, test belgesi ve uygunluk sertifikası dahil sunulur.",
      },
      {
        title: "Yapıya özel çözüm",
        text: "Bina ölçeği ve bütçeye göre konvansiyonel veya adreslenebilir panel belirlenir.",
      },
    ],
  },
  authorityBeforeFaq: {
    title: "Türkiye Genelinde Yangın Alarm Sistemi Kurulumu Hizmeti",
    description:
      "Yangın alarm sistemi kurulum hizmetini Türkiye'nin büyük şehirlerinde sunuyoruz. Şehir bazlı kapsam detaylarına aşağıdaki sayfalardan erişebilirsiniz.",
    links: [
      {
        href: "/istanbul-yangin-alarm-sistemi",
        label: "İstanbul Yangın Alarm Sistemi Kurulumu",
      },
      {
        href: "/ankara/yangin-alarm-sistemi-kurulumu",
        label: "Ankara Yangın Alarm Sistemi Kurulumu",
      },
      {
        href: "/izmir/yangin-alarm-sistemi-kurulumu",
        label: "İzmir Yangın Alarm Sistemi Kurulumu",
      },
    ],
  },
  authorityAfterFaq: {
    title: "Yangın Alarm Sistemi Kurulumu Hizmeti Verilen Şehirler",
    links: [
      { href: "/istanbul-yangin-alarm-sistemi", label: "İstanbul" },
      { href: "/ankara/yangin-alarm-sistemi-kurulumu", label: "Ankara" },
      { href: "/izmir/yangin-alarm-sistemi-kurulumu", label: "İzmir" },
      { href: "/bursa/yangin-alarm-sistemi-kurulumu", label: "Bursa" },
      { href: "/antalya/yangin-alarm-sistemi-kurulumu", label: "Antalya" },
    ],
  },
  cityServiceLinks: {
    title: "Yangın Alarm Sistemi Kurulumu — Şehir Bazlı Hizmet Sayfaları",
    description:
      "Hizmet verdiğimiz her şehirde yangın alarm sistemi kurulumu için detaylı bilgi ve teklif sayfalarına aşağıdan ulaşabilirsiniz.",
    links: cities.map((city) => ({
      href: `/${city.slug}/yangin-alarm-sistemi-kurulumu`,
      label: `${city.name} Yangın Alarm Sistemi Kurulumu`,
      description: `${city.name} içinde yangın alarm sistemi kurulumu için keşif ve teklif alın.`,
    })),
  },
  cityHubLinks: {
    title: "Şehir Bazlı Güvenlik Hizmetleri",
    description:
      "Yangın alarmı ve bina güvenliği talebinin yoğun olduğu şehirlerdeki güvenlik çözümlerimizi ve hizmet kapsamımızı inceleyin.",
    links: topCityHubLinks,
  },
  trustImages: {
    afterHero: {
      src: "/images/services/bakim-servis/yangin-alarm-sistemi-kurulum.jpg",
      alt: "Yangın alarm sistemi kurulumu",
    },
    beforeFaq: {
      src: "/images/services/bakim-servis/yangin-alarm-dedektor-ve-acil-butonu.jpg",
      alt: "Yangın alarm dedektörü ve acil ihbar butonu montajı",
    },
    beforeCta: {
      src: "/images/services/bakim-servis/yangin-alarm-paneli-kontrol-sistemi.jpg",
      alt: "Yangın alarm paneli kontrol sistemi",
    },
  },
};

export default function YanginAlarmSayfasi() {
  return <ServicePageTemplate data={data} />;
}
