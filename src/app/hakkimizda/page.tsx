import type { Metadata } from "next";
import Link from "next/link";
import { Shield, CheckCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import CTASection from "@/components/sections/CTASection";
import { siteConfig } from "@/data/site-config";
import { cities } from "@/data/cities";
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Hakkımızda | Güvenlik Servisi",
  description:
    "12 yıllık sektör deneyimi ve 500+ tamamlanan proje ile güvenlik kamera, alarm ve geçiş kontrol sistemlerinde profesyonel kurulum hizmeti sunuyoruz.",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lbSchema) }}
      />
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
            <span className="text-primary font-medium">Hakkımızda</span>
          </nav>
        </Container>
      </div>

      <section className="bg-gradient-to-br from-primary to-[#1A3A5C] text-white py-16 md:py-20">
        <Container>
          <div className="flex items-center gap-3 mb-6">
            <Shield size={40} className="text-accent" />
            <h1 className="text-3xl sm:text-4xl font-bold">Hakkımızda</h1>
          </div>

          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            {siteConfig.stats.experience} sektör deneyimi ve {siteConfig.stats.projects} tamamlanan
            proje ile güvenlik kamera sistemleri, alarm sistemleri ve geçiş kontrol çözümlerinde
            profesyonel hizmet sunuyoruz.
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-5">Biz Kimiz?</h2>

              <div className="space-y-4 text-text-light leading-relaxed">
                <p>
                  Güvenlik Servisi olarak {siteConfig.stats.experience} aşkın süredir güvenlik
                  sistemleri alanında çalışıyoruz. Konut, işyeri, mağaza, depo, fabrika ve site
                  projelerinde ihtiyaç odaklı güvenlik çözümleri kuruyoruz.
                </p>

                <p>
                  Güvenlik kamerası, alarm sistemi, yangın alarm sistemi, kartlı geçiş ve bakım
                  hizmetlerinde doğru ürün seçimi, temiz montaj ve uzun vadeli kullanım odaklı
                  çalışıyoruz.
                </p>

                <p>
                  {siteConfig.stats.projects} üzerinde tamamlanan proje deneyimimiz sayesinde farklı
                  ölçeklerde alanların ihtiyaçlarını hızlı analiz ediyor, gereksiz ürün satmadan
                  doğru sistemi kurmaya odaklanıyoruz.
                </p>
              </div>
            </div>

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

      <section className="py-16 bg-surface">
        <Container>
          <h2 className="text-2xl font-bold text-primary text-center mb-10">
            Neden Bizi Seçmelisiniz?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🎯",
                title: "Uzmanlık",
                desc: "Genel elektrik işi değil, doğrudan güvenlik sistemleri odaklı çalışıyoruz.",
              },
              {
                icon: "🔧",
                title: "Anahtar Teslim Kurulum",
                desc: "Keşif, ürün seçimi, montaj, uygulama kurulumu ve temel kullanıcı eğitimi dahil çalışıyoruz.",
              },
              {
                icon: "✅",
                title: "Doğru Ürün Seçimi",
                desc: "Alan büyüklüğüne ve izleme ihtiyacına göre uygun kamera, kayıt cihazı ve ekipmanı belirliyoruz.",
              },
              {
                icon: "📞",
                title: "Satış Sonrası Destek",
                desc: "Kurulum sonrası teknik destek ve bakım ihtiyaçlarında ulaşılabilir oluyoruz.",
              },
              {
                icon: "💰",
                title: "Şeffaf Teklif",
                desc: "Keşif sonrası net teklif veriyoruz. Sonradan sürpriz maliyet çıkarma mantığıyla çalışmıyoruz.",
              },
              {
                icon: "🏆",
                title: "Saha Tecrübesi",
                desc: "Farklı sektörlerde yüzlerce uygulama yaptığımız için teorik değil pratik çözümler sunuyoruz.",
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

      <section className="py-16 bg-white">
        <Container>
          <h2 className="text-2xl font-bold text-primary text-center mb-8">
            Hizmet Verdiğimiz Şehirler
          </h2>

          <div className="flex flex-wrap justify-center gap-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}`}
                className="flex items-center gap-2 bg-surface hover:bg-accent/10 text-primary px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                <CheckCircle size={14} className="text-cta" />
                {city.name}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Güvenliğinizi Şansa Bırakmayın"
        subtitle="Ücretsiz keşif ve hızlı teklif için hemen bizimle iletişime geçin."
      />
    </>
  );
}
