import type { Metadata } from "next";
import { getCanonicalUrlForKnownPath } from "@/lib/canonical";
import ServicePageTemplate, {
  ServicePageData,
} from "@/components/templates/ServicePageTemplate";

const canonicalUrl = getCanonicalUrlForKnownPath(
  "/yangin-alarm-sistemi-kurulumu",
);

export const metadata: Metadata = {
  title: "Yangın Alarm Sistemi Kurulumu | TS EN 54 Uyumlu Proje ve Montaj",
  description:
    "Yasal zorunluluğa uygun yangın alarm sistemi kurulumu. Duman dedektörü, ihbar butonu, siren, adreslenebilir panel. Resmi proje, test belgesi ve sertifika dahil.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Yangın Alarm Sistemi Kurulumu | TS EN 54 Uyumlu Proje ve Montaj",
    description:
      "Yasal uyumlu yangın alarm sistemi. Duman dedektörü, ihbar butonu, siren. Proje ve sertifika dahil.",
    url: canonicalUrl,
    siteName: "Güvenlik Servisi",
    locale: "tr_TR",
    type: "website",
  },
};

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
};

export default function YanginAlarmSayfasi() {
  return <ServicePageTemplate data={data} />;
}
