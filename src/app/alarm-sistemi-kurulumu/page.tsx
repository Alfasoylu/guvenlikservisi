import type { Metadata } from "next";
import { getCanonicalUrlForKnownPath } from "@/lib/canonical";
import ServicePageTemplate, { ServicePageData } from "@/components/templates/ServicePageTemplate";

const canonicalUrl = getCanonicalUrlForKnownPath("/alarm-sistemi-kurulumu");

export const metadata: Metadata = {
  title: "Alarm Sistemi Kurulumu | Hırsız Alarm Montajı",
  description:
    "Ev ve işyeri için hırsız alarm sistemi kurulumu. Kablosuz ve kablolu seçenekler, 7/24 izleme merkezi bağlantısı.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Alarm Sistemi Kurulumu | Hırsız Alarm Montajı",
    description: "Hırsız alarm sistemi kurulumu. Kablosuz ve kablolu seçenekler, 7/24 izleme merkezi.",
    url: canonicalUrl,
    siteName: "Güvenlik Servisi",
    locale: "tr_TR",
    type: "website",
  },
};

const data: ServicePageData = {
  slug: "alarm-sistemi-kurulumu",
  title: "Alarm Sistemi Kurulumu",
  subtitle: "Kablosuz ve kablolu hırsız alarm sistemleri. 7/24 izleme merkezi bağlantısı ile eviniz ve işyeriniz sürekli koruma altında.",
  description:
    "Profesyonel hırsız alarm sistemi kurulumu ile mülkünüzü 7/24 koruma altına alın.\n\nKablolu ve kablosuz sistemler arasında mekanınıza en uygun çözümü belirliyor, kurulum sonrasında kapsamlı test ve kullanıcı eğitimi veriyoruz.\n\nGSM + internet çift bağlantılı sistemlerimiz ile alarm durumunda hem telefona bildirim hem de isteğe bağlı olarak 7/24 izleme merkezine otomatik ihbar gönderilir.",
  features: [
    "PIR hareket sensörleri",
    "Manyetik kapı/pencere sensörleri",
    "Cam kırılma dedektörü",
    "Yüksek desibel iç/dış siren",
    "GSM + İnternet çift bağlantı",
    "Yedek batarya (8-24 saat)",
    "Mobil uygulama ile uzak kontrol",
    "7/24 izleme merkezi opsiyonu",
  ],
  segments: [
    {
      title: "Konutlar İçin Alarm Sistemi",
      content: "Kapı, pencere ve hareket sensörleri ile evinizin tüm giriş noktalarını koruyoruz. Siz evde yokken alarm aktif, evdeyken devre dışı — programlama ile tam kontrol.",
      href: "/apartman-site-guvenlik-sistemi",
    },
    {
      title: "İşyerleri İçin Alarm Sistemi",
      content: "Mesai saatleri dışında otomatik devreye giren alarm sistemi. Kasa ve değerli ekipman alanları için özel hassas sensörler uygulanır.",
      href: "/isyeri-guvenlik-sistemi",
    },
    {
      title: "Fabrika ve Depolar İçin Alarm",
      content: "Geniş alanlı endüstriyel tesisler için çok bölgeli alarm sistemleri. Her bölge bağımsız kontrol edilebilir, detaylı raporlama sunulur.",
      href: "/fabrika-depo-guvenlik-sistemi",
    },
  ],
  faq: [
    {
      question: "Kablosuz mı kablolu mu tercih etmeliyim?",
      answer: "Hazır yapılarda kablosuz, inşaat aşamasındaki yapılarda kablolu daha avantajlıdır. Keşifte uzmanımız önerir.",
    },
    {
      question: "Elektrik kesintisinde ne olur?",
      answer: "Tüm sistemlerde yedek batarya mevcuttur. Elektrik kesintisinde 8-24 saat bağımsız çalışmaya devam eder.",
    },
    {
      question: "İzleme merkezi ücretli mi?",
      answer: "İzleme merkezi abonelik ile çalışır. Aylık 150-300 TL arası ücretlendirilir. Keşifte detaylı bilgi verilir.",
    },
    {
      question: "Yanlış alarm (false alarm) sorunu yaşar mıyım?",
      answer: "Kaliteli sensörler ve doğru kurulum ile yanlış alarm oranı minimumdur. Evcil hayvan dostu PIR sensörler de mevcuttur.",
    },
  ],
  defaultService: "alarm",
  imagePlaceholder: "Alarm Kurulum Görseli",
  ctaTitle: "Alarm Sistemi Teklifi Alın",
  ctaSubtitle: "Ücretsiz keşif için formu doldurun veya bizi arayın.",
};

export default function AlarmSayfasi() {
  return <ServicePageTemplate data={data} />;
}
