import type { Metadata } from "next";
import ServicePageTemplate, { ServicePageData } from "@/components/templates/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Kartlı Geçiş Sistemi Kurulumu | Turnike Montajı",
  description:
    "İşyeri ve site girişi için kartlı geçiş ve turnike sistemi kurulumu. RFID, parmak izi, yüz tanıma seçenekleri.",
  alternates: { canonical: "https://guvenlikservisi.com/kartli-gecis-ve-turnike-sistemi" },
  openGraph: {
    title: "Kartlı Geçiş Sistemi Kurulumu | Turnike Montajı",
    description: "RFID, parmak izi, yüz tanıma seçenekleriyle kartlı geçiş ve turnike kurulumu.",
    url: "https://guvenlikservisi.com/kartli-gecis-ve-turnike-sistemi",
    siteName: "Güvenlik Servisi",
    locale: "tr_TR",
    type: "website",
  },
};

const data: ServicePageData = {
  slug: "kartli-gecis-ve-turnike-sistemi",
  title: "Kartlı Geçiş Sistemi Kurulumu",
  subtitle: "RFID kart, parmak izi ve yüz tanıma teknolojileri ile işyeri ve site girişlerinde yetkisiz erişimi önleyin.",
  description:
    "Erişim kontrol sistemleri ile çalışanların ve ziyaretçilerin giriş-çıkışını kayıt altına alın, yetkisiz girişleri engelleyin.\n\nRFID kart, QR kod, parmak izi ve yüz tanıma seçenekleri arasından mekanınıza ve ihtiyaçlarınıza en uygun teknolojiyi seçip kuruyoruz.\n\nYönetim yazılımı ile kart ekleme/silme, erişim saati tanımlama ve detaylı giriş raporları hazırlayabilirsiniz.",
  features: [
    "RFID kart / mifare teknolojisi",
    "Parmak izi okuyucu",
    "Yüz tanıma (isteğe bağlı)",
    "Elektrikli kilit ve kapı kontrol",
    "Turnike sistemleri",
    "Araç bariyer / plaka tanıma",
    "Merkezi yönetim yazılımı",
    "Detaylı erişim raporlama",
  ],
  segments: [
    {
      title: "Apartman ve Siteler İçin Erişim Kontrolü",
      content: "Site giriş kapıları, otopark, asansör ve ortak alanlarda kartlı geçiş ile yetkisiz erişimi tamamen engelleyin. Sakin ve ziyaretçi yönetimi uygulamayla kolaylaşır.",
      href: "/apartman-site-guvenlik-sistemi",
    },
    {
      title: "Ofis ve İşyerleri İçin Erişim Kontrolü",
      content: "Çalışan giriş-çıkış saatlerini kayıt altına alın, bordro entegrasyonu yapın. Hassas bölümler için farklı yetki seviyeleri tanımlayın.",
      href: "/isyeri-guvenlik-sistemi",
    },
    {
      title: "Fabrika ve Depolar İçin Turnike",
      content: "Büyük personel sayısına sahip tesisler için hızlı geçiş turnikeleri, LPR araç tanıma ve çok bölgeli erişim yönetimi.",
      href: "/fabrika-depo-guvenlik-sistemi",
    },
  ],
  faq: [
    {
      question: "Kart kaybolursa ne olur?",
      answer: "Kayıp kartı yazılımdan birkaç saniyede devre dışı bırakabilirsiniz. Yeni kart tanımlaması dakikalar içinde yapılır.",
    },
    {
      question: "Kaç farklı yetki seviyesi tanımlanabilir?",
      answer: "Sınırsız yetki grubu oluşturabilirsiniz. Her grup için farklı kapılar, farklı saat aralıkları tanımlanabilir.",
    },
    {
      question: "Elektrik kesintisinde kapı açılır mı?",
      answer: "Fail-safe ve fail-secure seçenekleri var. İsteğe göre elektrik kesintisinde kapı açık veya kapalı kalacak şekilde ayarlanır.",
    },
    {
      question: "Mevcut kapı kilitleriyle uyumlu mu?",
      answer: "Çoğu kapıya uyumlu elektrikli kilit adaptasyonu yapılabilir. Keşifte yerinde değerlendirme yapılır.",
    },
  ],
  defaultService: "kartli-gecis",
  imagePlaceholder: "Kartlı Geçiş Kurulum Görseli",
  ctaTitle: "Erişim Kontrol Teklifi Alın",
  ctaSubtitle: "Sisteminizi tasarlamak için ücretsiz keşif alın.",
};

export default function KartliGecisSayfasi() {
  return <ServicePageTemplate data={data} />;
}
