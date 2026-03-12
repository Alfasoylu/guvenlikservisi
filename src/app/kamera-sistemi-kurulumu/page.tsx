import type { Metadata } from "next";
import { getCanonicalUrlForKnownPath } from "@/lib/canonical";
import ServicePageTemplate, { ServicePageData } from "@/components/templates/ServicePageTemplate";

const canonicalUrl = getCanonicalUrlForKnownPath("/kamera-sistemi-kurulumu");

export const metadata: Metadata = {
  title: "Güvenlik Kamera Kurulumu | IP Kamera Montaj Hizmeti",
  description:
    "İşyeri ve konut için profesyonel IP kamera sistemi kurulumu. Ücretsiz keşif, anahtar teslim montaj, 7/24 uzaktan izleme.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Güvenlik Kamera Kurulumu | IP Kamera Montaj Hizmeti",
    description: "Profesyonel IP kamera sistemi kurulumu. Ücretsiz keşif, anahtar teslim montaj.",
    url: canonicalUrl,
    siteName: "Güvenlik Servisi",
    locale: "tr_TR",
    type: "website",
  },
};

const data: ServicePageData = {
  slug: "kamera-sistemi-kurulumu",
  title: "Güvenlik Kamera Kurulumu",
  subtitle: "Yüksek çözünürlüklü IP kamera sistemleri ile işyerinizi ve evinizi 7/24 izleyin. Ücretsiz keşif ve anahtar teslim montaj.",
  description:
    "Profesyonel güvenlik kamera kurulumu hizmetimizle işyerinizdeki ve evinizi koruma altına alın.\n\nHikvision, Dahua ve Reolink gibi dünya markalarının 2K/4K çözünürlüklü IP kameralarını kullanıyoruz. Marmara Bölgesi genelinde kurulum ekibimiz en kısa sürede yerinde keşif yaparak size en uygun sistemi tasarlar.\n\nKurulum sonrasında iOS ve Android uygulaması ile telefonunuzdan canlı görüntü izleyebilir, kayıtları inceleyebilir ve hareket bildirimleri alabilirsiniz.",
  features: [
    "2K/4K çözünürlüklü IP kameralar",
    "Gece görüşü (30-50m IR mesafe)",
    "Hareket algılama ve anlık bildirim",
    "Bulut ve yerel NVR kayıt",
    "Mobil uygulama (iOS + Android)",
    "PoE altyapı (tek kablo çözümü)",
    "Vandal-proof kasalar (dış mekan)",
    "1-3 yıl ürün garantisi",
  ],
  segments: [
    {
      title: "Apartman ve Siteler İçin Kamera Sistemi",
      content: "Giriş kapıları, asansör önleri, otopark ve ortak alanları kapsayan çok noktalı kamera sistemleri kuruyoruz. Site yönetimine merkezi izleme paneli ve kayıt arşivi sunulur.",
      href: "/apartman-site-guvenlik-sistemi",
    },
    {
      title: "İşyerleri İçin Kamera Sistemi",
      content: "Mağaza, ofis, restoran ve kafe için müşteri alanı, kasa, depo ve giriş noktalarını kapsayan kamera ağı. Çalışan güvenliği ve operasyonel denetim için ideal.",
      href: "/isyeri-guvenlik-sistemi",
    },
    {
      title: "Fabrika ve Depolar İçin Kamera Sistemi",
      content: "Geniş alanlı endüstriyel tesisler için yüksek çözünürlüklü geniş açılı kameralar, PTZ (dönen) kameralar ve termal kamera seçenekleri.",
      href: "/fabrika-depo-guvenlik-sistemi",
    },
  ],
  faq: [
    {
      question: "Kamera montajı ne kadar sürer?",
      answer: "Konut için ortalama 1 gün, küçük işyerleri için 1-2 gün, büyük projeler için 3-5 iş günü. Keşifte net süre bildirilir.",
    },
    {
      question: "Kaç kamera gerekli?",
      answer: "Mekan büyüklüğüne ve kör noktalara bağlıdır. Ücretsiz keşifte uzmanımız ihtiyaç analizini yapar.",
    },
    {
      question: "Mevcut kablo altyapısını kullanabilir misiniz?",
      answer: "Evet, Cat5e/Cat6 kablo altyapısı varsa PoE kameralar için kullanılabilir. Keşifte altyapı kontrolü yapıyoruz.",
    },
    {
      question: "Kayıtlar ne kadar süre saklanır?",
      answer: "Standart 2TB disk ile 30 günlük kayıt mümkündür. Depolama kapasitesi kamera sayısı ve çözünürlüğe göre hesaplanır.",
    },
    {
      question: "Bulut kayıt zorunlu mu?",
      answer: "Hayır. Yerel NVR kaydı yeterlidir. Bulut yedekleme ek bir güvence olarak sunulur.",
    },
  ],
  defaultService: "kamera",
  imagePlaceholder: "Kamera Kurulum Görseli",
  ctaTitle: "Kamera Kurulum Teklifi Alın",
  ctaSubtitle: "Ücretsiz keşif için formu doldurun veya bizi arayın.",
};

export default function KameraSayfasi() {
  return <ServicePageTemplate data={data} />;
}
