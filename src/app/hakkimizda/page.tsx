import type { Metadata } from "next";
import { getCanonicalUrlForKnownPath } from "@/lib/canonical";
import Link from "next/link";
import {
  Shield,
  CheckCircle,
  BadgeCheck,
  Clock3,
  Wrench,
  PhoneCall,
  Target,
  Briefcase,
  Headphones,
  FileText,
  Award,
  Building2,
  Factory,
  Store,
  Home,
  ChevronDown,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import CTASection from "@/components/sections/CTASection";
import { siteConfig } from "@/data/site-config";
import { cities } from "@/data/cities";
import {
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";
import { buildSeoMetadata } from "@/lib/seo/metadata";

const canonicalUrl = getCanonicalUrlForKnownPath("/hakkimizda");

export const metadata: Metadata = buildSeoMetadata({
  title: "Hakkımızda | Güvenlik Servisi",
  description:
    "Güvenlik kamera sistemleri, alarm sistemleri ve geçiş kontrol çözümlerinde profesyonel keşif, doğru ürün seçimi ve anahtar teslim kurulum hizmeti sunuyoruz.",
  canonical: canonicalUrl,
});

const guvenKartlari = [
  {
    icon: Target,
    title: "Odak: Yalnızca Güvenlik Sistemleri",
    desc: "Genel elektrik veya bina altyapısı değil, doğrudan güvenlik sistemleri odaklı çalışıyoruz. Uzmanlık alanı dar tutulunca kalite artar.",
  },
  {
    icon: Wrench,
    title: "Anahtar Teslim Kurulum",
    desc: "Keşif, ürün seçimi, montaj, uygulama kurulumu ve temel kullanıcı eğitimi tek süreçte tamamlanır. Birden fazla firma koordinasyonu yok.",
  },
  {
    icon: BadgeCheck,
    title: "Doğru Ürün Seçimi",
    desc: "Alan büyüklüğüne, kör nokta riskine ve izleme ihtiyacına göre uygun sistemi belirliyoruz. Fazla ekipman önermek yerine verimli çözüm kuruyoruz.",
  },
  {
    icon: Headphones,
    title: "Satış Sonrası Ulaşılabilirlik",
    desc: "Kurulumdan sonra teknik destek ve bakım ihtiyaçlarında ulaşılabilir oluyoruz. Kurulum kapandı teslim bitti yaklaşımıyla çalışmıyoruz.",
  },
  {
    icon: FileText,
    title: "Şeffaf Teklif",
    desc: "Keşif sonrası net, yazılı teklif veriyoruz. Sonradan sürpriz maliyet çıkarma veya bileşen eksiltme mantığıyla çalışmıyoruz.",
  },
  {
    icon: Award,
    title: "Saha Pratiği",
    desc: "Farklı alan tiplerinde edindiğimiz proje deneyimi sayesinde her mekanın kendine özgü zorluğunu önceden görüp planlıyoruz.",
  },
];

const surecMaddeleri = [
  {
    icon: <Clock3 size={18} className="text-accent" />,
    title: "Önce keşif yapıyoruz",
    desc: "Ezbere sistem önermiyoruz. Alanı, kör noktaları ve kullanım amacını analiz ediyoruz.",
  },
  {
    icon: <BadgeCheck size={18} className="text-accent" />,
    title: "Sonra doğru sistemi seçiyoruz",
    desc: "Ucuz görünen ama yetersiz kalan sistem yerine, ihtiyaca uygun çalışan çözüm kuruyoruz.",
  },
  {
    icon: <Wrench size={18} className="text-accent" />,
    title: "Temiz montaj ve devreye alma",
    desc: "Kurulum sonrası sistemi test ediyor, uzaktan izleme ve temel kullanım ayarlarını tamamlıyoruz.",
  },
];

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

      <section className="bg-linear-to-br from-primary to-[#1A3A5C] text-white py-16 md:py-20">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">
                <Shield size={14} className="text-accent" />
                Güvenlik sistemlerinde profesyonel yaklaşım
              </div>

              <h1 className="mb-4 text-3xl sm:text-4xl font-bold leading-tight">
                Hakkımızda
              </h1>

              <p className="max-w-2xl text-lg leading-relaxed text-white/80">
                {siteConfig.stats.experience} sektör deneyimi ve{" "}
                {siteConfig.stats.projects} tamamlanan proje ile güvenlik kamera
                sistemleri, alarm sistemleri, yangın alarmı ve geçiş kontrol
                çözümlerinde profesyonel kurulum hizmeti sunuyoruz.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: siteConfig.stats.projects, label: "Tamamlanan Proje" },
                {
                  value: siteConfig.stats.experience,
                  label: "Sektör Deneyimi",
                },
                {
                  value: siteConfig.stats.satisfaction,
                  label: "Müşteri Memnuniyeti",
                },
                {
                  value: `${siteConfig.serviceCityCount} Şehir`,
                  label: "Hizmet Bölgesi",
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-white/10 p-6 text-center backdrop-blur-sm"
                >
                  <div className="mb-1 text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/75">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-5 text-2xl font-bold text-primary">
                Biz Nasıl Çalışıyoruz?
              </h2>

              <div className="space-y-4 text-text-light leading-8">
                <p>
                  Güvenlik Servisi olarak yıllardır güvenlik sistemleri alanında
                  çalışıyoruz. Konut, işyeri, mağaza, depo, fabrika ve site
                  projelerinde ihtiyaca göre sistem kuruyoruz.
                </p>

                <p>
                  Amacımız sadece cihaz satmak değil, gerçekten işe yarayan ve
                  uzun vadede sorun çıkarmayan sistem kurmak. Bu yüzden keşif,
                  planlama ve doğru ürün seçimi bizim için montaj kadar
                  önemlidir.
                </p>

                <p>
                  Güvenlik kamerası, alarm sistemi, yangın alarm sistemi, kartlı
                  geçiş ve bakım hizmetlerinde gereksiz ürün değil, doğru çözüm
                  öneriyoruz. Bu yaklaşım hem maliyeti kontrol eder hem de
                  kullanım verimini artırır.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-surface p-6">
              <h3 className="mb-5 text-xl font-bold text-primary">
                İş Yapış Disiplinimiz
              </h3>

              <div className="space-y-4">
                {surecMaddeleri.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-gray-200 bg-white p-4"
                  >
                    <div className="mb-2 flex items-center gap-2">
                      {item.icon}
                      <span className="font-semibold text-primary">
                        {item.title}
                      </span>
                    </div>
                    <p className="text-sm leading-7 text-text-light">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-accent/15 bg-white p-5">
                <div className="mb-2 flex items-center gap-2 text-primary">
                  <PhoneCall size={18} className="text-accent" />
                  <span className="font-semibold">Hızlı teklif almak için</span>
                </div>
                <p className="text-sm leading-7 text-text-light">
                  Alan tipi, şehir ve temel ihtiyacınızı iletin. Size uygun
                  sistemi birlikte netleştirelim.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-16">
        <Container>
          <h2 className="mb-10 text-center text-2xl font-bold text-primary">
            Neden Bizi Seçmelisiniz?
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {guvenKartlari.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/8">
                  <item.icon size={20} className="text-primary" />
                </div>
                <h3 className="mb-2 font-bold text-primary">{item.title}</h3>
                <p className="text-sm leading-7 text-text-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* KİMLER İÇİN ÇALIŞIYORUZ */}
      <section className="bg-primary py-16">
        <Container>
          <h2 className="mb-2 text-center text-2xl font-bold text-white">
            Kimler İçin Çalışıyoruz?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm leading-7 text-white/70">
            Konuttan fabrikalara kadar farklı alan tiplerinde sistem kuruyoruz. Her segmentin ihtiyacı birbirinden farklıdır; buna göre planlama yapıyoruz.
          </p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Building2,
                title: "Site ve Apartman Yönetimleri",
                desc: "Ortak alan kameraları, geçiş kontrol ve periyodik bakım sözleşmesiyle yönetim yükünü azaltıyoruz.",
                href: "/apartman-site-guvenlik-sistemi",
              },
              {
                icon: Factory,
                title: "Fabrika ve Depolar",
                desc: "Geniş saha, çevre hattı ve 7/24 kayıt sürekliliği gerektiren tesisler için ölçeklenebilir çözümler kuruyoruz.",
                href: "/fabrika-depo-guvenlik-sistemi",
              },
              {
                icon: Store,
                title: "İşyeri ve Mağazalar",
                desc: "Kasa güvenliği, stok takibi ve personel giriş kontrolü için operasyonu aksatmayan sistemler kuruyoruz.",
                href: "/isyeri-guvenlik-sistemi",
              },
              {
                icon: Home,
                title: "Konut ve Villalar",
                desc: "Ev ve villa projelerinde giriş kamerası, alarm ve dış alan izlemeyi sade ama etkili şekilde kuruyoruz.",
                href: "/kamera-sistemi-kurulumu",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-2xl border border-white/10 bg-white/8 p-6 transition hover:bg-white/15"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <item.icon size={20} className="text-white" />
                </div>
                <h3 className="mb-2 font-bold text-white">{item.title}</h3>
                <p className="text-sm leading-7 text-white/65">{item.desc}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* SIKÇA SORULAN SORULAR */}
      <section className="bg-surface py-16">
        <Container>
          <h2 className="mb-10 text-center text-2xl font-bold text-primary">
            Hakkımızda Sık Sorulan Sorular
          </h2>
          <div className="mx-auto max-w-3xl space-y-4">
            {[
              {
                q: "Sadece İstanbul'da mı hizmet veriyorsunuz?",
                a: `Hayır. İstanbul merkezli olsak da Ankara, İzmir, Bursa, Kocaeli, Tekirdağ, Edirne ve diğer şehirlere de hizmet götürüyoruz. Şu anda ${siteConfig.serviceCityCount} şehirde aktif projerimiz bulunuyor. Hizmet bölgesi sürekli genişliyor.`,
              },
              {
                q: "Hem kurulum hem bakım yapıyor musunuz?",
                a: "Evet. Yalnızca kurulum yapıp ayrılmıyoruz. Kurulum sonrasında periyodik bakım sözleşmesi, teknik servis ve arıza müdahalesi de sunuyoruz. Tek firma ile keşiften bakıma kadar yürütmek müşterilerimize hem zaman hem koordinasyon kolaylığı sağlıyor.",
              },
              {
                q: "Birden fazla şubem var, hepsini siz yönetebilir misiniz?",
                a: "Evet. Zincir mağaza ve çok lokasyonlu yapılarda standart ekipman seçimi, merkezi izleme altyapısı ve ortak servis disiplini ile tüm şubeleri aynı kalite standartlarında tutuyoruz. Her şubeyi ayrı firma ile koordine etmenin getirdiği yükü ortadan kaldırıyoruz.",
              },
              {
                q: "Kurulum için asgari alan büyüklüğü veya kamera sayısı var mı?",
                a: "Hayır. 2 kameralı konut projesinden 50+ kameralı sanayi tesisine kadar farklı ölçeklerde çalışıyoruz. Önemli olan doğru planlama; kamera sayısından bağımsız olarak her projede ücretsiz keşif yapıp ihtiyaca göre teklif sunuyoruz.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-gray-200 bg-white"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 font-semibold text-primary">
                  {item.q}
                  <ChevronDown
                    size={18}
                    className="shrink-0 text-primary/50 transition-transform group-open:rotate-180"
                  />
                </summary>
                <p className="border-t border-gray-100 px-6 py-4 text-sm leading-7 text-text-light">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <div className="mb-8 text-center">
            <h2 className="mb-3 text-2xl font-bold text-primary">
              Hizmet Verdiğimiz Şehirler
            </h2>
            <p className="mx-auto max-w-3xl text-sm leading-7 text-text-light">
              Şu anda aktif olarak {siteConfig.serviceCityCount} şehirde hizmet
              veriyoruz. Gerçekten operasyonumuz olan bölgeleri gösteriyoruz.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}`}
                className="flex items-center gap-2 rounded-lg bg-surface px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-accent/10"
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
        subtitle="Ücretsiz keşif ve hızlı teklif için bizimle iletişime geçin. İhtiyacınıza uygun sistemi birlikte belirleyelim."
      />
    </>
  );
}
