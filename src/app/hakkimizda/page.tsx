import type { Metadata } from "next";
import Link from "next/link";
import { Shield, CheckCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import CTASection from "@/components/sections/CTASection";
import { siteConfig } from "@/data/site-config";
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Hakkımızda | Güvenlik Servisi",
  description:
    "12 yıllık sektör deneyimi, 500+ tamamlanan proje. Marmara Bölgesi'nin güvenilir güvenlik sistemi kurulum firması.",
  alternates: { canonical: "https://guvenlikservisi.com/hakkimizda" },
};

export default function HakkimizdaSayfasi() {
  const lbSchema = generateLocalBusinessSchema();
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Ana Sayfa", url: "/" },
    { name: "Hakkımızda", url: "/hakkimizda" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Breadcrumb */}
      <div className="bg-surface border-b border-gray-100 py-3">
        <Container>
          <nav className="flex items-center gap-2 text-sm text-text-light">
            <Link href="/" className="hover:text-primary">Ana Sayfa</Link>
            <span>/</span>
            <span className="text-primary font-medium">Hakkımızda</span>
          </nav>
        </Container>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-[#1A3A5C] text-white py-16 md:py-20">
        <Container>
          <div className="flex items-center gap-3 mb-6">
            <Shield size={40} className="text-accent" />
            <h1 className="text-3xl sm:text-4xl font-bold">Hakkımızda</h1>
          </div>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            {siteConfig.stats.experience} sektör deneyimi ve {siteConfig.stats.projects} tamamlanan proje ile
            Marmara Bölgesi&apos;nin güvenilir güvenlik sistemi kurulum firmasıyız.
          </p>
        </Container>
      </section>

      {/* Hikaye */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-5">Biz Kimiz?</h2>
              <div className="space-y-4 text-text-light leading-relaxed">
                <p>
                  Güvenlik Servisi olarak {siteConfig.stats.experience} aşkın süredir Marmara Bölgesi genelinde
                  konut, işyeri ve endüstriyel tesislere profesyonel güvenlik sistemi kurulumu yapıyoruz.
                </p>
                <p>
                  Güvenlik kamerası, hırsız alarm, yangın alarm ve kartlı geçiş sistemleri kurulumunda
                  uzmanlaşmış ekibimiz, her projeyi en yüksek teknik standartlarda tamamlar.
                </p>
                <p>
                  Müşteri memnuniyetini her şeyin önünde tutan yaklaşımımızla {siteConfig.stats.projects} üzerinde
                  başarılı proje gerçekleştirdik. Referanslarımızın büyük çoğunluğu mevcut müşterilerimizin
                  tavsiyesiyle gelir.
                </p>
              </div>
            </div>

            {/* İstatistikler */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: siteConfig.stats.projects, label: "Tamamlanan Proje" },
                { value: siteConfig.stats.experience, label: "Sektör Deneyimi" },
                { value: siteConfig.stats.satisfaction, label: "Müşteri Memnuniyeti" },
                { value: `${siteConfig.serviceCityCount} Şehir`, label: "Hizmet Bölgesi" },
              ].map((stat, i) => (
                <div key={i} className="bg-surface rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-text-light text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Değerlerimiz */}
      <section className="py-16 bg-surface">
        <Container>
          <h2 className="text-2xl font-bold text-primary text-center mb-10">Neden Bizi Seçmelisiniz?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🎯",
                title: "Uzmanlık",
                desc: "Yalnızca güvenlik sistemleri alanında uzmanlaştık. Jenerik değil, derinlemesine bilgi sunuyoruz.",
              },
              {
                icon: "🔧",
                title: "Anahtar Teslim",
                desc: "Keşiften montaja, eğitimden bakıma tüm süreci tek elden yönetiyoruz.",
              },
              {
                icon: "✅",
                title: "Kalite Güvencesi",
                desc: "Dünya markası ekipmanlar ve 1-3 yıl garanti. Sertifikalı teknisyen ekibi.",
              },
              {
                icon: "📞",
                title: "7/24 Destek",
                desc: "Kurulum sonrası teknik sorularınız için her zaman ulaşılabilir durumdayız.",
              },
              {
                icon: "💰",
                title: "Şeffaf Fiyat",
                desc: "Keşif sonrası net teklif, gizli maliyet yok. Bütçenize uygun çözüm.",
              },
              {
                icon: "🏆",
                title: "Referans",
                desc: "Müşterilerimizin %80'i referans ile geliyor. Bu güven en büyük referansımızdır.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-text-light text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Hizmet bölgeleri */}
      <section className="py-16 bg-white">
        <Container>
          <h2 className="text-2xl font-bold text-primary text-center mb-8">Hizmet Bölgelerimiz</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {siteConfig.cities.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}-guvenlik-sistemi-kurulumu`}
                className="flex items-center gap-2 bg-surface hover:bg-accent/10 text-primary px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                <CheckCircle size={14} className="text-cta" />
                {city.name}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTASection title="Güvenliğinizi Bize Emanet Edin" subtitle="Ücretsiz keşif için hemen iletişime geçin." />
    </>
  );
}
