import type { Metadata } from "next";
import ServicePageTemplate, { ServicePageData } from "@/components/templates/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Fabrika ve Depo Güvenlik Sistemi | Endüstriyel Çözümler",
  description:
    "Fabrika, depo ve sanayi tesisleri için büyük ölçekli güvenlik sistemi kurulumu. SLA garantili bakım sözleşmesi.",
  alternates: { canonical: "https://guvenlikservisi.com/fabrika-depo-guvenlik-sistemi" },
  openGraph: {
    title: "Fabrika ve Depo Güvenlik Sistemi | Endüstriyel Çözümler",
    description: "Fabrika ve sanayi tesisleri için büyük ölçekli güvenlik sistemi. SLA garantili.",
    url: "https://guvenlikservisi.com/fabrika-depo-guvenlik-sistemi",
    siteName: "Güvenlik Servisi",
    locale: "tr_TR",
    type: "website",
  },
};

const data: ServicePageData = {
  slug: "fabrika-depo-guvenlik-sistemi",
  title: "Fabrika ve Depo Güvenlik Sistemi",
  subtitle: "Sanayi tesisleri için büyük ölçekli kamera, alarm, yangın alarm ve erişim kontrol sistemleri. SLA garantili bakım.",
  description:
    "Fabrika ve depo güvenliği, büyük alanlar, yüksek personel sayısı ve özel güvenlik gereksinimleri nedeniyle özel çözümler gerektirir.\n\nGeniş açılı ve PTZ kameralar, çok bölgeli alarm sistemleri, endüstriyel yangın alarm ve hızlı geçişli turnike sistemleri ile tesisinizin tüm çevre güvenliğini sağlıyoruz.\n\nSLA (Service Level Agreement) garantili bakım sözleşmelerimiz ile sistemlerinizin kesintisiz çalışması güvence altına alınır.",
  features: [
    "Geniş açılı ve PTZ kameralar",
    "Termal kamera seçeneği (isteğe bağlı)",
    "Çok bölgeli alarm sistemi",
    "Endüstriyel yangın alarm",
    "LPR araç plaka tanıma",
    "Turnike ve güvenlik kulübesi",
    "Çevre güvenlik sistemi",
    "SLA garantili bakım sözleşmesi",
  ],
  segments: [
    {
      title: "Üretim Tesisleri",
      content: "Üretim hatları, depo alanları ve personel girişlerini kapsayan entegre güvenlik sistemi. Vardiya takibi ve erişim yetkilendirmesi dahil.",
      href: "/kartli-gecis-ve-turnike-sistemi",
    },
    {
      title: "Lojistik ve Depo",
      content: "Büyük kapasiteli depolarda yüksek kameralar, hareket sensörleri ve çevre alarm sistemi. Yükleme rampası ve araç trafiği yönetimi.",
      href: "/kamera-sistemi-kurulumu",
    },
    {
      title: "Endüstriyel Yangın Güvenliği",
      content: "Akaryakıt, kimyasal ve yanıcı madde barındıran tesisler için özel yangın ve gaz algılama sistemleri. ATEX uyumlu seçenekler.",
      href: "/yangin-alarm-sistemi-kurulumu",
    },
  ],
  faq: [
    {
      question: "Gece çevre güvenliği nasıl sağlanır?",
      answer: "Termal kameralar ve IR ışınlı dedektörler ile gece koşullarında tam çevre güvenliği sağlanır.",
    },
    {
      question: "Çok sayıda personel için turnike ne kadar sürede kurulur?",
      answer: "Tesis büyüklüğüne göre 3-10 iş günü. Üretimi durdurmadan aşamalı kurulum yapılabilir.",
    },
    {
      question: "SLA sözleşmesi ne garanti ediyor?",
      answer: "Arıza bildirimi sonrası belirli sürede müdahale garantisi. Genellikle 4 saat yerinde müdahale taahhüdü.",
    },
    {
      question: "Sigorta şirketi entegrasyonu var mı?",
      answer: "Evet, kurulum belgeleri ve test raporları sigorta şirketlerine sunulabilecek formattadır.",
    },
  ],
  defaultService: "hepsi",
  imagePlaceholder: "Fabrika Güvenlik Görseli",
  ctaTitle: "Endüstriyel Güvenlik Teklifi Alın",
  ctaSubtitle: "Tesisinizin büyüklüğüne özel çözüm için ücretsiz keşif alın.",
};

export default function FabrikaDepoSayfasi() {
  return <ServicePageTemplate data={data} />;
}
