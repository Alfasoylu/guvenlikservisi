import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Camera, Bell, Flame, CreditCard, Wrench, MapPin, ArrowRight } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site-config";
import { generateLocalBusinessSchema, generateAggregateRatingSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Güvenlik Sistemi Kurulumu | Kamera, Alarm, Yangın Montajı",
  description:
    "Marmara Bölgesinde profesyonel güvenlik kamera, alarm ve yangın alarm sistemi kurulumu. Ücretsiz keşif + anahtar teslim montaj.",
  alternates: { canonical: "https://guvenlikservisi.com" },
  openGraph: {
    title: "Güvenlik Sistemi Kurulumu | Kamera, Alarm, Yangın Montajı",
    description:
      "Marmara Bölgesinde profesyonel güvenlik kamera, alarm ve yangın alarm sistemi kurulumu.",
    url: "https://guvenlikservisi.com",
    siteName: "Güvenlik Servisi",
    locale: "tr_TR",
    type: "website",
  },
};

const hizmetler = [
  {
    icon: <Camera size={28} />,
    title: "Güvenlik Kamera Kurulumu",
    description: "2K/4K IP kamera sistemleri, gece görüşü, mobil izleme, bulut kayıt.",
    href: "/kamera-sistemi-kurulumu",
  },
  {
    icon: <Bell size={28} />,
    title: "Alarm Sistemi Kurulumu",
    description: "Kablosuz ve kablolu hırsız alarm, 7/24 izleme merkezi bağlantısı.",
    href: "/alarm-sistemi-kurulumu",
  },
  {
    icon: <Flame size={28} />,
    title: "Yangın Alarm Sistemi",
    description: "Yasal uyumlu yangın algılama, proje ve sertifika dahil.",
    href: "/yangin-alarm-sistemi-kurulumu",
  },
  {
    icon: <CreditCard size={28} />,
    title: "Kartlı Geçiş Sistemi",
    description: "RFID, parmak izi, yüz tanıma — ofis ve site girişleri için.",
    href: "/kartli-gecis-ve-turnike-sistemi",
  },
  {
    icon: <Shield size={28} />,
    title: "Apartman & Site Güvenliği",
    description: "Kamera, interkom, bariyer ve kartlı geçiş — anahtar teslim.",
    href: "/apartman-site-guvenlik-sistemi",
  },
  {
    icon: <Wrench size={28} />,
    title: "Bakım & Servis",
    description: "7/24 teknik destek, uzaktan izleme, SLA garantili bakım sözleşmesi.",
    href: "/bakim-servis-uzaktan-izleme",
  },
];

const anaSayfaFaq = [
  {
    question: "Ücretsiz keşif gerçekten ücretsiz mi?",
    answer:
      "Evet, keşif tamamen ücretsizdir. Uzmanımız yerinize gelir, ihtiyaç analizi yapar ve teklif hazırlar. Herhangi bir ücret veya yükümlülük yoktur.",
  },
  {
    question: "Hangi şehirlere hizmet veriyorsunuz?",
    answer:
      "İstanbul, Bursa, Kocaeli, Sakarya, Tekirdağ ve Yalova'da aktif olarak hizmet veriyoruz. Marmara Bölgesi genelinde kurulum yapıyoruz.",
  },
  {
    question: "Kurulum ne kadar sürer?",
    answer:
      "Konut projeleri genellikle 1 gün, küçük işyerleri 1-2 gün, büyük projeler 3-5 iş günü sürer. Keşifte net süre bildirilir.",
  },
  {
    question: "Garanti ve bakım hizmetleri var mı?",
    answer:
      "Tüm sistemlere minimum 1 yıl ürün ve işçilik garantisi veriyoruz. İsteğe bağlı yıllık bakım sözleşmeleri ile garanti süresi uzatılabilir.",
  },
  {
    question: "Ödeme seçenekleri nelerdir?",
    answer:
      "Nakit, havale/EFT ve kredi kartı (taksit seçeneği ile) kabul ediyoruz. Kurumsal projelerde fatura + vade seçeneği sunulmaktadır.",
  },
];

const testimonials = [
  {
    text: "Ofisimize 8 kamera taktırdık, çok memnunuz. Ekip profesyonel, iş temiz ve hızlıydı.",
    name: "Ahmet Y.",
    role: "İstanbul / E-ticaret Şirketi",
    rating: 5,
  },
  {
    text: "Sitemize 16 kamera + kartlı geçiş sistemi kurdular. Uzaktan izleme çok işe yarıyor.",
    name: "Fatma K.",
    role: "Bursa / Site Yöneticisi",
    rating: 5,
  },
  {
    text: "Fabrikamıza komple güvenlik sistemi kurdular. Bakım sözleşmesi de yaptık, çok rahatız.",
    name: "Mehmet S.",
    role: "Kocaeli / Fabrika Müdürü",
    rating: 5,
  },
];

export default function AnaSayfa() {
  const lbSchema = generateLocalBusinessSchema();
  const ratingSchema = generateAggregateRatingSchema();

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingSchema) }}
      />

      {/* Hero */}
      <HeroSection
        title="Profesyonel Güvenlik Sistemi Kurulumu"
        subtitle="Kamera, alarm ve yangın alarm sistemi kurulumunda Marmara Bölgesi'nin güvenilir adresi. Ücretsiz keşif + anahtar teslim montaj."
        ctaLabel="Ücretsiz Teklif Al"
        ctaHref="#quote-form"
      />

      {/* İstatistikler */}
      <StatsBar />

      {/* Hizmetlerimiz */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center mb-4">
            Hizmetlerimiz
          </h2>
          <p className="text-center text-text-light mb-12 max-w-2xl mx-auto text-sm sm:text-base">
            Güvenlik ihtiyacınızın her boyutu için profesyonel çözümler sunuyoruz.
            Keşiften montaja, bakımdan uzaktan izlemeye tek elden hizmet.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hizmetler.map((hizmet, i) => (
              <Link
                key={i}
                href={hizmet.href}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent/10 text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                  {hizmet.icon}
                </div>
                <h3 className="font-bold text-primary text-base mb-2">{hizmet.title}</h3>
                <p className="text-text-light text-sm leading-relaxed mb-4">{hizmet.description}</p>
                <span className="inline-flex items-center gap-1 text-accent text-sm font-semibold group-hover:gap-2 transition-all">
                  Detaylı Bilgi <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Nasıl Çalışıyoruz */}
      <ProcessSection bgClass="bg-surface" />

      {/* Hizmet Bölgeleri */}
      <section className="py-16 md:py-20 bg-white">
        <Container>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center mb-10">
            Hizmet Verdiğimiz Bölgeler
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {siteConfig.cities.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}-guvenlik-sistemi-kurulumu`}
                className="flex flex-col items-center gap-2 p-4 bg-surface rounded-xl hover:bg-accent/10 hover:text-accent transition-colors text-center group"
              >
                <MapPin size={20} className="text-accent" />
                <span className="font-semibold text-primary text-sm group-hover:text-accent">
                  {city.name}
                </span>
                <span className="text-xs text-text-light leading-tight">{city.districts}</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Müşteri Yorumları */}
      <TestimonialsSection testimonials={testimonials} />

      {/* SSS */}
      <FAQSection items={anaSayfaFaq} />

      {/* Son CTA + Form */}
      <CTASection
        title="Ücretsiz Keşif ve Teklif Alın"
        subtitle="Formu doldurun, uzman ekibimiz 24 saat içinde sizi arasın. Keşif tamamen ücretsiz, satış baskısı yoktur."
      />
    </>
  );
}
