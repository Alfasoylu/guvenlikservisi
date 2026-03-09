import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, BadgeCheck, Info } from "lucide-react";
import { Container } from "@/components/ui/Container";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Güvenlik Sistemi Paketleri ve Fiyatlandırma",
  description:
    "Kamera sistemi, alarm sistemi ve güvenlik çözümleri için başlangıç, standart ve premium paket seçenekleri. Ücretsiz keşif sonrası net teklif alın.",
  alternates: { canonical: "https://guvenlikservisi.com/paketler-ve-fiyatlandirma" },
};

const paketler = [
  {
    kategori: "Kamera Sistemi",
    href: "/kamera-sistemi-kurulumu",
    aciklama:
      "Ev, işyeri, apartman ve depo gibi alanlar için temel, orta ve büyük ölçekli kamera sistemi paketleri.",
    paketler: [
      {
        name: "Başlangıç",
        price: "12.000 TL'den",
        features: [
          "2-4 Kamera",
          "NVR Kayıt Cihazı",
          "Montaj Dahil",
          "Uzaktan Erişim",
          "1 Yıl Garanti",
        ],
        highlighted: false,
      },
      {
        name: "Standart",
        price: "25.000 TL'den",
        features: [
          "4-8 Kamera",
          "NVR Kayıt Cihazı",
          "Montaj Dahil",
          "Uzaktan İzleme",
          "Yılda 1 Bakım",
          "2 Yıl Garanti",
        ],
        highlighted: true,
        badge: "Popüler",
      },
      {
        name: "Premium",
        price: "Teklif Alın",
        priceNote: "Büyük alan, uzun kablolama, yüksek kayıt ihtiyacı ve özel proje gerektiren işler için.",
        features: [
          "8+ Kamera",
          "NVR + Yedek Depolama",
          "Keşif + Montaj",
          "Uzaktan İzleme",
          "Yılda 2 Bakım",
          "3 Yıl Garanti",
        ],
        highlighted: false,
      },
    ],
  },
  {
    kategori: "Alarm Sistemi",
    href: "/alarm-sistemi-kurulumu",
    aciklama:
      "Konut ve işyerleri için temel korumadan daha gelişmiş alarm altyapısına kadar farklı paket seçenekleri.",
    paketler: [
      {
        name: "Temel",
        price: "8.000 TL'den",
        features: [
          "1 Kontrol Paneli",
          "3-5 Sensör",
          "1 Siren",
          "GSM Modül",
          "Mobil Uygulama",
          "1 Yıl Garanti",
        ],
        highlighted: false,
      },
      {
        name: "Tam Koruma",
        price: "18.000 TL'den",
        features: [
          "1 Kontrol Paneli",
          "8-12 Sensör",
          "İç + Dış Siren",
          "GSM + İnternet",
          "İzleme Hazır Altyapı",
          "2 Yıl Garanti",
        ],
        highlighted: true,
        badge: "Popüler",
      },
      {
        name: "Kurumsal",
        price: "Teklif Alın",
        priceNote: "Çok bölmeli, büyük ve özel alarm projelerinde net fiyat keşif sonrası belirlenir.",
        features: [
          "Çok Bölgeli Panel",
          "Daha Fazla Sensör Kapasitesi",
          "İç + Dış Siren / Flaşör",
          "Çift Yedekli Bağlantı",
          "Kurumsal Kurulum Senaryosu",
          "3 Yıl Garanti",
        ],
        highlighted: false,
      },
    ],
  },
];

const faqItems = [
  {
    question: "Fiyatlar keşif öncesi mi sonra mı netleşir?",
    answer:
      "Sayfadaki rakamlar başlangıç seviyesindeki referans fiyatlardır. Net fiyat; alan büyüklüğü, cihaz sayısı, kablolama ve proje zorluğuna göre keşif sonrası belirlenir.",
  },
  {
    question: "Paketler sabit mi, değiştirilebilir mi?",
    answer:
      "Hayır, sabit değildir. Paketler başlangıç noktasıdır. İhtiyacınıza göre kamera, sensör, kayıt süresi ve ek bileşenler artırılıp azaltılabilir.",
  },
  {
    question: "Premium paketlerde neden net fiyat yazmıyor?",
    answer:
      "Premium işler genelde büyük alan, uzun kablo mesafesi, ek kayıt ihtiyacı veya özel proje şartları içerir. Bu yüzden ezbere fiyat vermek yanlış olur; doğru fiyat keşif sonrası çıkar.",
  },
  {
    question: "Bakım ve servis pakete dahil mi?",
    answer:
      "Bazı paketlerde belirtilen bakım ziyaretleri dahildir. Daha yoğun kullanım veya kurumsal yapılar için ayrıca bakım sözleşmesi planlanabilir.",
  },
];

export default function PaketlerSayfasi() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Ana Sayfa", url: "/" },
    { name: "Paketler ve Fiyatlandırma", url: "/paketler-ve-fiyatlandirma" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <div className="bg-surface border-b border-gray-100 py-3">
        <Container>
          <nav className="flex items-center gap-2 text-sm text-text-light">
            <Link href="/" className="hover:text-primary">
              Ana Sayfa
            </Link>
            <span>/</span>
            <span className="text-primary font-medium">Paketler ve Fiyatlandırma</span>
          </nav>
        </Container>
      </div>

      <section className="bg-gradient-to-br from-primary to-[#1A3A5C] text-white py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">
              <BadgeCheck size={14} />
              Başlangıç fiyatları • Ücretsiz keşif
            </div>

            <h1 className="mb-4 text-3xl sm:text-4xl font-bold">
              Paketler ve Fiyatlandırma
            </h1>

            <p className="text-lg leading-relaxed text-white/80">
              İhtiyacınıza uygun güvenlik sistemi paketini seçin. Sayfadaki fiyatlar başlangıç
              seviyesindeki referans rakamlardır. Net fiyat, keşif sonrası proje şartlarına göre
              belirlenir.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12">
        <Container>
          <div className="rounded-3xl border border-accent/15 bg-accent/5 p-5 md:p-6">
            <div className="flex items-start gap-3">
              <Info size={18} className="mt-0.5 shrink-0 text-accent" />
              <div>
                <h2 className="mb-2 text-lg font-bold text-primary">Fiyatları nasıl okumalısınız?</h2>
                <p className="text-sm leading-7 text-text-light">
                  Düşük fiyat her zaman doğru sistem anlamına gelmez. Alan büyüklüğü, kamera veya sensör
                  sayısı, kayıt süresi, altyapı ve montaj zorluğu toplam maliyeti değiştirir.
                  Bu sayfadaki paketler karar vermeyi kolaylaştırmak içindir; net teklif keşif sonrası verilir.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {paketler.map((kategori, ki) => (
        <section key={ki} className={`py-16 ${ki % 2 === 0 ? "bg-white" : "bg-surface"}`}>
          <Container>
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <h2 className="mb-2 text-2xl font-bold text-primary">{kategori.kategori}</h2>
                <p className="text-sm leading-7 text-text-light">{kategori.aciklama}</p>
              </div>

              <Link
                href={kategori.href}
                className="text-sm font-semibold text-accent hover:underline"
              >
                Detaylı bilgi →
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {kategori.paketler.map((pkg, pi) => (
                <div
                  key={pi}
                  className={`relative flex flex-col rounded-3xl p-6 ${
                    pkg.highlighted
                      ? "scale-[1.02] bg-primary text-white shadow-2xl"
                      : "border border-gray-200 bg-white shadow-md"
                  }`}
                >
                  {"badge" in pkg && pkg.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="rounded-full bg-warning px-3 py-1 text-xs font-bold text-white">
                        {pkg.badge}
                      </span>
                    </div>
                  )}

                  <h3 className={`mb-2 text-xl font-bold ${pkg.highlighted ? "text-white" : "text-primary"}`}>
                    {pkg.name}
                  </h3>

                  <p className="mb-2 text-2xl font-bold text-accent">{pkg.price}</p>

                  {"priceNote" in pkg && pkg.priceNote && (
                    <p className={`mb-5 text-xs leading-6 ${pkg.highlighted ? "text-white/70" : "text-text-light"}`}>
                      {pkg.priceNote}
                    </p>
                  )}

                  {!("priceNote" in pkg) || !pkg.priceNote ? (
                    <p className={`mb-5 text-xs leading-6 ${pkg.highlighted ? "text-white/70" : "text-text-light"}`}>
                      Başlangıç fiyatıdır. Net teklif keşif sonrası belirlenir.
                    </p>
                  ) : null}

                  <ul className="mb-6 flex-1 space-y-3">
                    {pkg.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2 text-sm">
                        <CheckCircle size={15} className="mt-0.5 shrink-0 text-cta" />
                        <span className={pkg.highlighted ? "text-white/90" : "text-gray-700"}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#quote-form"
                    className={`block rounded-xl py-3 text-center text-sm font-bold transition-colors ${
                      pkg.highlighted
                        ? "bg-cta text-white hover:bg-ctaHover"
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

      <CTASection
        title="Size Uygun Net Teklifi Alın"
        subtitle="Paketler başlangıç rehberidir. Keşif sonrası alanınıza uygun net fiyatı ve doğru sistemi birlikte belirleyelim."
      />
    </>
  );
}
