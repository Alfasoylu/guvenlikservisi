import type { Metadata } from "next";
import { getCanonicalUrlForKnownPath } from "@/lib/canonical";
import ServicePageTemplate, { ServicePageData } from "@/components/templates/ServicePageTemplate";

const canonicalUrl = getCanonicalUrlForKnownPath("/apartman-site-guvenlik-sistemi");

export const metadata: Metadata = {
  title: "Apartman ve Site Güvenlik Sistemi | Kamera + Geçiş Kontrol",
  description:
    "Site ve apartman yönetimleri için komple güvenlik: kamera, kartlı geçiş, interkom, bariyer. Anahtar teslim kurulum.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Apartman ve Site Güvenlik Sistemi | Kamera + Geçiş Kontrol",
    description: "Site yönetimleri için komple güvenlik: kamera, kartlı geçiş, interkom, bariyer.",
    url: canonicalUrl,
    siteName: "Güvenlik Servisi",
    locale: "tr_TR",
    type: "website",
  },
};

const data: ServicePageData = {
  slug: "apartman-site-guvenlik-sistemi",
  title: "Apartman ve Site Güvenlik Sistemi",
  subtitle: "Site sakinlerinin güvenliği için kamera, kartlı geçiş, interkom ve bariyer sistemleri. Tek sözleşme, tek muhatap.",
  description:
    "Site ve apartman güvenliği çok bileşenli bir yapı gerektirir. Güvenlik kameraları, kartlı geçiş, video interkom ve araç bariyer sistemlerini tek bir proje kapsamında kuruyor ve yönetiyoruz.\n\nSite yönetimine özel merkezi kontrol yazılımı ile tüm sistemleri tek ekrandan izleyebilir, kart tanımlayabilir ve giriş raporlarına erişebilirsiniz.\n\n5 daireli apartmandan büyük konut projelerine kadar her ölçekte çözüm sunuyoruz.",
  features: [
    "Giriş kapısı kamera sistemi",
    "Ortak alan ve otopark kameraları",
    "Kartlı geçiş ve biyometrik okuyucu",
    "Video kapı interkom sistemi",
    "Araç bariyer ve LPR plaka tanıma",
    "Yangın alarm sistemi",
    "Merkezi yönetim yazılımı",
    "Mobil yönetim uygulaması",
  ],
  segments: [
    {
      title: "Giriş Kontrolü ve Interkom",
      content: "Site kapılarında kartlı geçiş, daire içi video interkom ve uzaktan kapı açma özelliği. Sakinler misafirlerini kendi dairelerinden video ile görüp kapı açabilir.",
      href: "/kartli-gecis-sistemi-kurulumu",
    },
    {
      title: "Güvenlik Kamera Sistemi",
      content: "Giriş çıkışlar, otopark, asansör önleri ve koridorları kapsayan tam kapsamlı kamera sistemi. 30 gün kayıt, mobil izleme.",
      href: "/kamera-sistemi-kurulumu",
    },
    {
      title: "Yangın Alarm Sistemi",
      content: "Bina yangın yönetmeliğine uygun zorunlu yangın alarm sistemleri. Tüm ortak alanlar, bodrum katlar ve merdiven boşlukları kapsanır.",
      href: "/yangin-alarm-sistemi-kurulumu",
    },
  ],
  faq: [
    {
      question: "Kaç daireli siteler için uygun?",
      answer: "5 daireli apartmandan 1000 daireli büyük projelere kadar tüm ölçekler için çözüm sunuyoruz.",
    },
    {
      question: "Kat malikleri kurulu kararı gerekiyor mu?",
      answer: "Toplu yapı yönetimlerinde kurulum için karar gerekebilir. Yönetiminize teknik sunum yapıyoruz.",
    },
    {
      question: "Mevcut interkom sistemi değiştirilebilir mi?",
      answer: "Evet, eski analog sistemler modern IP interkom ile değiştirilebilir.",
    },
    {
      question: "Bakım sözleşmesi var mı?",
      answer: "Evet, yıllık bakım sözleşmesi ile tüm sistemlerin performansı garanti altına alınır.",
    },
  ],
  defaultService: "hepsi",
  imagePlaceholder: "Site Güvenlik Görseli",
  ctaTitle: "Site Güvenlik Teklifi Alın",
  ctaSubtitle: "Sitenizin büyüklüğüne özel çözüm için ücretsiz keşif alın.",
};

export default function ApartmanSiteSayfasi() {
  return <ServicePageTemplate data={data} />;
}
