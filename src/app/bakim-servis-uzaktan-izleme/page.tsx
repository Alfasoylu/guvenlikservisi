import type { Metadata } from "next";
import ServicePageTemplate, { ServicePageData } from "@/components/templates/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Güvenlik Sistemi Bakım ve Servis | Uzaktan İzleme Hizmeti",
  description:
    "Güvenlik kamerası ve alarm sistemi bakım, servis ve uzaktan izleme hizmeti. Aylık abonelik ile 7/24 destek.",
  alternates: { canonical: "https://guvenlikservisi.com/bakim-servis-uzaktan-izleme" },
  openGraph: {
    title: "Güvenlik Sistemi Bakım ve Servis | Uzaktan İzleme Hizmeti",
    description: "Bakım, servis ve 7/24 uzaktan izleme. Aylık abonelik ile kesintisiz destek.",
    url: "https://guvenlikservisi.com/bakim-servis-uzaktan-izleme",
    siteName: "Güvenlik Servisi",
    locale: "tr_TR",
    type: "website",
  },
};

const data: ServicePageData = {
  slug: "bakim-servis-uzaktan-izleme",
  title: "Bakım, Servis ve Uzaktan İzleme",
  subtitle: "Güvenlik sisteminizin yıl boyu kesintisiz çalışması için düzenli bakım, hızlı servis ve 7/24 uzaktan izleme hizmeti.",
  description:
    "Güvenlik sistemleri, tıpkı diğer teknik ekipmanlar gibi düzenli bakım gerektirir. Güncellenmemiş yazılımlar, tozlanmış kamera lensleri ve test edilmemiş sensörler sistemin kritik anlarda çalışmamasına neden olabilir.\n\nYıllık bakım sözleşmelerimiz ile sisteminizi sürekli takip ediyor, sorunları oluşmadan önce tespit ediyoruz. Uzaktan bağlantı ile çoğu sorun yerinde ziyaret gerekmeksizin çözülür.\n\nBakım sözleşmesi olan müşterilerimize öncelikli yerinde müdahale garantisi veriyoruz.",
  features: [
    "Yıllık periyodik bakım ziyareti",
    "Kamera lens temizliği ve ayarı",
    "Alarm sensör test ve kalibrasyonu",
    "Yazılım güncellemeleri",
    "Uzaktan bağlantı ile sorun giderme",
    "7/24 teknik destek hattı",
    "Öncelikli yerinde müdahale",
    "Yıllık sistem test raporu",
  ],
  segments: [
    {
      title: "Kamera Sistemi Bakımı",
      content: "Kamera lens temizliği, kayıt cihazı disk kontrolü, yazılım güncellemesi ve görüntü kalitesi optimizasyonu. Yıllık bakımda tüm kameralar tek tek test edilir.",
      href: "/kamera-sistemi-kurulumu",
    },
    {
      title: "Alarm Sistemi Bakımı",
      content: "Tüm sensörlerin testi, batarya kontrolü, panel yazılım güncellemesi ve izleme merkezi bağlantı testi. Yasal zorunlu test raporu dahildir.",
      href: "/alarm-sistemi-kurulumu",
    },
    {
      title: "Yangın Alarm Sistemi Bakımı",
      content: "Yönetmelik gereği zorunlu yıllık bakım ve test. Tüm dedektörler, ihbar butonları ve sirenler test edilir, resmi rapor verilir.",
      href: "/yangin-alarm-sistemi-kurulumu",
    },
  ],
  faq: [
    {
      question: "Bakım sözleşmesi zorunlu mu?",
      answer: "Yasal olarak yangın alarm bakımı zorunludur. Diğer sistemler için sözleşme zorunlu değil ama kesinlikle öneriyoruz.",
    },
    {
      question: "Başka firma kurduğu sistemi bakımını yapıyor musunuz?",
      answer: "Evet, marka bağımsız olarak tüm güvenlik sistemlerinin bakımını yapıyoruz. Keşifte sistem değerlendirmesi yapılır.",
    },
    {
      question: "Uzaktan destek nasıl çalışır?",
      answer: "İnternet bağlantılı sistemlere uzaktan bağlanarak yazılım sorunlarının büyük çoğunluğunu yerinde müdahale olmaksızın çözüyoruz.",
    },
    {
      question: "Sözleşme süresi ne kadar?",
      answer: "Standart sözleşmeler 1 yıllık. Çok yıllı sözleşmelerde indirim uygulanır.",
    },
  ],
  defaultService: "hepsi",
  imagePlaceholder: "Bakım Servis Görseli",
  ctaTitle: "Bakım Sözleşmesi Teklifi Alın",
  ctaSubtitle: "Sisteminizin kesintisiz çalışması için bakım sözleşmesi yapın.",
};

export default function BakimServisSayfasi() {
  return <ServicePageTemplate data={data} />;
}
