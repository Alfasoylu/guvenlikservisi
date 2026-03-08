import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Güvenlik Sistemi Paketleri ve Fiyatlandırma | Güvenlik Servisi",
  description:
    "Kamera, alarm ve yangın alarm sistemi kurulum paketleri. Başlangıçtan premium'a fiyatlar ve özellikler.",
  alternates: { canonical: "https://guvenlikservisi.com/paketler-ve-fiyatlandirma" },
};

const paketler = [
  {
    kategori: "Kamera Sistemi",
    href: "/kamera-sistemi-kurulumu",
    paketler: [
      {
        name: "Başlangıç",
        price: "12.000 TL'den",
        features: ["2-4 Kamera", "NVR Kayıt Cihazı", "Montaj Dahil", "Uzaktan Erişim", "1 Yıl Garanti"],
        highlighted: false,
      },
      {
        name: "Standart",
        price: "25.000 TL'den",
        features: ["4-8 Kamera", "NVR Kayıt Cihazı", "Montaj Dahil", "Uzaktan İzleme (12 ay)", "Yılda 1 Bakım", "2 Yıl Garanti"],
        highlighted: true,
        badge: "Popüler",
      },
      {
        name: "Premium",
        price: "Teklif Alın",
        features: ["8+ Kamera", "NVR + Yedek Depolama", "Montaj + Keşif", "Uzaktan İzleme (12 ay)", "Yılda 2 Bakım", "3 Yıl Garanti"],
        highlighted: false,
      },
    ],
  },
  {
    kategori: "Alarm Sistemi",
    href: "/alarm-sistemi-kurulumu",
    paketler: [
      {
        name: "Temel",
        price: "8.000 TL'den",
        features: ["1 Kontrol Paneli", "3-5 Sensör", "1 Siren", "GSM Modül", "Mobil Uygulama", "1 Yıl Garanti"],
        highlighted: false,
      },
      {
        name: "Tam Koruma",
        price: "18.000 TL'den",
        features: ["1 Kontrol Paneli", "8-12 Sensör", "İç + Dış Siren", "GSM + İnternet", "İzleme Merkezi (12 ay)", "2 Yıl Garanti"],
        highlighted: true,
        badge: "Popüler",
      },
      {
        name: "Kurumsal",
        price: "Teklif Alın",
        features: ["Çok Bölgeli Panel", "Sınırsız Sensör", "Flaşör Dahil", "Çift Yedekli Bağlantı", "7/24 İzleme", "3 Yıl Garanti"],
        highlighted: false,
      },
    ],
  },
];

const faqItems = [
  {
    question: "Fiyatlar keşif öncesi mi sonra mı netleşir?",
    answer: "Tablodaki fiyatlar başlangıç fiyatlarıdır. Keşif sonrası mekana özel net fiyat teklifi sunulur.",
  },
  {
    question: "Paketler özelleştirilebilir mi?",
    answer: "Evet, tüm paketler ihtiyacınıza göre özelleştirilebilir. Fazla veya eksik bileşen çıkarılabilir.",
  },
  {
    question: "Taksit seçeneği var mı?",
    answer: "Evet, kredi kartı ile 3-12 ay taksit imkanı sunuyoruz.",
  },
  {
    question: "Bakım sözleşmesi fiyata dahil mi?",
    answer: "Standart ve Premium paketlerde belirtilen bakım ziyaretleri dahildir. Ek bakım sözleşmesi ayrıca yapılabilir.",
  },
];

export default function PaketlerSayfasi() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Ana Sayfa", url: "/" },
    { name: "Paketler ve Fiyatlandırma", url: "/paketler-ve-fiyatlandirma" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Breadcrumb */}
      <div className="bg-surface border-b border-gray-100 py-3">
        <Container>
          <nav className="flex items-center gap-2 text-sm text-text-light">
            <Link href="/" className="hover:text-primary">Ana Sayfa</Link>
            <span>/</span>
            <span className="text-primary font-medium">Paketler ve Fiyatlandırma</span>
          </nav>
        </Container>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-[#1A3A5C] text-white py-16">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Paketler ve Fiyatlandırma</h1>
            <p className="text-white/80 text-lg">
              İhtiyacınıza uygun paketi seçin. Tüm paketlere ücretsiz keşif dahildir.
            </p>
          </div>
        </Container>
      </section>

      {/* Paketler */}
      {paketler.map((kategori, ki) => (
        <section key={ki} className={`py-16 ${ki % 2 === 0 ? "bg-white" : "bg-surface"}`}>
          <Container>
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl font-bold text-primary">{kategori.kategori}</h2>
              <Link href={kategori.href} className="text-accent text-sm font-semibold hover:underline">
                Detaylı bilgi →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {kategori.paketler.map((pkg, pi) => (
                <div
                  key={pi}
                  className={`relative rounded-2xl p-6 flex flex-col ${
                    pkg.highlighted ? "bg-primary text-white shadow-2xl scale-105" : "bg-white border border-gray-200 shadow-md"
                  }`}
                >
                  {"badge" in pkg && pkg.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-warning text-white text-xs font-bold px-3 py-1 rounded-full">{pkg.badge}</span>
                    </div>
                  )}
                  <h3 className={`text-xl font-bold mb-2 ${pkg.highlighted ? "text-white" : "text-primary"}`}>{pkg.name}</h3>
                  <p className="text-2xl font-bold text-accent mb-6">{pkg.price}</p>
                  <ul className="space-y-3 flex-1 mb-6">
                    {pkg.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2 text-sm">
                        <CheckCircle size={15} className="text-cta flex-shrink-0 mt-0.5" />
                        <span className={pkg.highlighted ? "text-white/90" : "text-gray-600"}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#quote-form"
                    className={`block text-center font-bold py-3 rounded-xl text-sm transition-colors ${
                      pkg.highlighted
                        ? "bg-cta hover:bg-cta-hover text-white"
                        : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                    }`}
                  >
                    Teklif Al
                  </a>
                </div>
              ))}
            </div>
          </Container>
        </section>
      ))}

      <FAQSection items={faqItems} title="Fiyatlandırma Hakkında Sık Sorulan Sorular" />
      <CTASection title="Size Özel Teklif Alın" subtitle="Keşif sonrası net fiyat teklifi sunuyoruz." />
    </>
  );
}
