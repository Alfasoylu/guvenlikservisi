import type { Metadata } from "next";
import { getCanonicalUrlForKnownPath } from "@/lib/canonical";
import ServicePageTemplate, { ServicePageData } from "@/components/templates/ServicePageTemplate";

const canonicalUrl = getCanonicalUrlForKnownPath("/yangin-alarm-sistemi-kurulumu");

export const metadata: Metadata = {
  title: "Yangın Alarm Sistemi Kurulumu | Yangın Algılama Montajı",
  description:
    "Yasal zorunluluklara uygun yangın alarm sistemi kurulumu. Duman dedektörü, ihbar butonu, siren. Proje + montaj dahil.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Yangın Alarm Sistemi Kurulumu | Yangın Algılama Montajı",
    description: "Yasal uyumlu yangın alarm sistemi. Duman dedektörü, ihbar butonu, siren. Proje dahil.",
    url: canonicalUrl,
    siteName: "Güvenlik Servisi",
    locale: "tr_TR",
    type: "website",
  },
};

const data: ServicePageData = {
  slug: "yangin-alarm-sistemi-kurulumu",
  title: "Yangın Alarm Sistemi Kurulumu",
  subtitle: "TS EN 54 standardına uygun yangın algılama sistemleri. Resmi proje, sertifika ve belgeler dahil. Marmara Bölgesi genelinde kurulum.",
  description:
    "Yangın alarm sistemi kurulumunda yasal uyumluluk ve teknik mükemmellik bir arada sunulur.\n\nTürkiye'deki yangın yönetmeliklerine ve TS EN 54 standardına uygun sistemler kuruyoruz. Resmi proje çizimi, uygulama belgesi ve test raporu her kuruluma dahildir.\n\nAdreslenebilir ve konvansiyonel panel seçenekleri ile her büyüklükteki yapıya uygun çözüm üretiyoruz.",
  features: [
    "Optik duman dedektörleri",
    "Isı dedektörleri",
    "Manuel ihbar butonları (MİB)",
    "Sesli + görsel alarm üniteleri",
    "Adreslenebilir kontrol panelleri",
    "İtfaiye bağlantı terminali",
    "Resmi proje + test belgesi",
    "TS EN 54 uygunluk sertifikası",
  ],
  segments: [
    {
      title: "Apartman ve Siteler İçin Yangın Alarmı",
      content: "Binaların yangın yönetmeliğine uygun olması yasal zorunluluktur. Merdiven boşlukları, bodrum katlar ve ortak alanlar için tam kapsamlı yangın alarm sistemleri.",
      href: "/apartman-site-guvenlik-sistemi",
    },
    {
      title: "İşyerleri İçin Yangın Alarmı",
      content: "Restoran, otel, mağaza ve ofisler için zorunlu yangın alarm kurulumu. Sigorta geçerliliği ve belediye ruhsatı için gerekli tüm belgeler temin edilir.",
      href: "/isyeri-guvenlik-sistemi",
    },
    {
      title: "Fabrika ve Depolar İçin Yangın Alarmı",
      content: "Endüstriyel tesisler için özel çözümler: gaz dedektörleri, sprinkler entegrasyonu, acil anons ve tahliye sistemleri.",
      href: "/fabrika-depo-guvenlik-sistemi",
    },
  ],
  faq: [
    {
      question: "Yangın alarm sistemi zorunlu mu?",
      answer: "Evet, işyerleri, apartmanlar ve kamu binaları için Türk Standardı ve İtfaiye Yönetmeliği gereği zorunludur.",
    },
    {
      question: "Hangi belgeler veriliyor?",
      answer: "Resmi proje çizimi, uygulama belgesi, devre şeması ve yıllık test raporu dahildir.",
    },
    {
      question: "Mevcut sistemi güncelleyebilir misiniz?",
      answer: "Evet, eski konvansiyonel sistemleri adreslenebilir sistemlere yükseltiyoruz. Keşifte değerlendirme yapılır.",
    },
    {
      question: "Yıllık bakım zorunlu mu?",
      answer: "Yasal olarak yıllık bakım ve test raporu tutulması gerekir. Bakım sözleşmemiz bu yükümlülüğü karşılar.",
    },
  ],
  defaultService: "yangin",
  imagePlaceholder: "Yangın Alarm Kurulum Görseli",
  ctaTitle: "Yangın Alarm Teklifi Alın",
  ctaSubtitle: "Yasal uyum ve güvenlik için ücretsiz keşif alın.",
  authorityBeforeFaq: {
    title: "Türkiye Genelinde Yangın Alarm Sistemi Kurulumu Hizmeti",
    description:
      "Yangın alarm sistemi kurulum hizmetini Türkiye'nin büyük şehirlerinde sunuyoruz. Şehir bazlı kapsam detaylarına aşağıdaki sayfalardan erişebilirsiniz.",
    links: [
      {
        href: "/istanbul/yangin-alarm-sistemi-kurulumu",
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
      { href: "/istanbul/yangin-alarm-sistemi-kurulumu", label: "İstanbul" },
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
