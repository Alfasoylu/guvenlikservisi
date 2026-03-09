import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  MapPin,
  Phone,
  ShieldCheck,
  BadgeCheck,
  Clock3,
} from "lucide-react";
import ProcessSection from "@/components/sections/ProcessSection";
import FAQSection, { FAQItem } from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site-config";
import { cities } from "@/data/cities";
import {
  generateLocalBusinessSchema,
  generateServiceSchema,
  generateBreadcrumbSchema,
  generateAggregateRatingSchema,
} from "@/lib/schema";

interface RelatedPage {
  title: string;
  href: string;
  description: string;
}

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
}

export interface ServicePageData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  segments: {
    title: string;
    content: string;
    href: string;
  }[];
  faq: FAQItem[];
  relatedPages?: RelatedPage[];
  blogPosts?: BlogPost[];
  defaultService?: string;
  imagePlaceholder?: string;
  ctaTitle?: string;
  ctaSubtitle?: string;
}

interface ServicePageTemplateProps {
  data: ServicePageData;
}

const guvenMaddeleri = [
  "Ücretsiz keşif ve ihtiyaç analizi",
  "Doğru ürün seçimi ve sistem planlaması",
  "Anahtar teslim montaj ve devreye alma",
  "Mobil izleme ve temel kullanıcı kurulumu",
];

const avantajlar = [
  {
    icon: <Clock3 size={18} className="text-accent" />,
    title: "Hızlı teklif",
    text: "Temel ihtiyacınızı öğrendikten sonra en kısa sürede uygun çözüm yapısını çıkarıyoruz.",
  },
  {
    icon: <BadgeCheck size={18} className="text-accent" />,
    title: "Doğru sistem",
    text: "Gereksiz ürün satmak yerine alanınıza gerçekten uygun sistem öneriyoruz.",
  },
];

export default function ServicePageTemplate({ data }: ServicePageTemplateProps) {
  const lbSchema = generateLocalBusinessSchema();
  const serviceSchema = generateServiceSchema({
    name: data.title,
    description: data.subtitle,
    url: `/${data.slug}`,
  });
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Ana Sayfa", url: "/" },
    { name: data.title, url: `/${data.slug}` },
  ]);
  const ratingSchema = generateAggregateRatingSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingSchema) }}
      />

      <div className="border-b border-gray-100 bg-surface py-3">
        <Container>
          <nav className="flex items-center gap-2 text-sm text-text-light">
            <Link href="/" className="hover:text-primary">
              Ana Sayfa
            </Link>
            <span>/</span>
            <span className="font-medium text-primary">{data.title}</span>
          </nav>
        </Container>
      </div>

      <section className="bg-gradient-to-br from-primary to-[#1A3A5C] py-16 text-white md:py-20">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">
                <ShieldCheck size={14} />
                Profesyonel kurulum • Hızlı teklif
              </div>

              <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl">
                {data.title}
              </h1>

              <p className="mb-6 text-lg leading-relaxed text-white/80">
                {data.subtitle}
              </p>

              <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {guvenMaddeleri.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/90"
                  >
                    <CheckCircle size={16} className="shrink-0 text-accent" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#quote-form"
                  className="inline-flex items-center gap-2 rounded-xl bg-cta px-8 py-4 font-bold text-white shadow-lg transition-colors hover:bg-ctaHover"
                >
                  Ücretsiz Teklif Al
                </a>

                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-4 font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <Phone size={18} />
                  {siteConfig.phone}
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="mb-5 rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="mb-3 flex items-center gap-2 text-white">
                  <BadgeCheck size={18} className="text-accent" />
                  <span className="font-semibold">Bu hizmette odak noktamız</span>
                </div>

                <div className="space-y-4 text-sm leading-7 text-white/80">
                  <p>
                    Doğru sistem seçimi, temiz montaj ve gerçek ihtiyaca göre planlama.
                    Amacımız ürün satmak değil, çalışan ve sorunsuz kullanılan sistem kurmak.
                  </p>
                  <p>
                    Kamera açısı, kayıt süresi, uzaktan erişim, altyapı ve kullanıcı kolaylığı
                    birlikte düşünülerek çözüm üretiyoruz.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {avantajlar.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="mb-2 flex items-center gap-2 text-white">
                      {item.icon}
                      <span className="font-semibold">{item.title}</span>
                    </div>
                    <p className="text-sm leading-6 text-white/75">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-primary">Hizmet Detayı</h2>

              <div className="max-w-none text-sm leading-7 text-text-light">
                {data.description.split("\n").map((para, i) => (
                  <p key={i} className="mb-4">
                    {para}
                  </p>
                ))}
              </div>

              <ul className="mt-8 space-y-3">
                {data.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={18} className="mt-0.5 shrink-0 text-cta" />
                    <span className="text-sm leading-6 text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-surface p-6">
              <h2 className="mb-4 text-2xl font-bold text-primary">
                Neden Profesyonel Kurulum Önemlidir?
              </h2>

              <div className="space-y-4 text-sm leading-7 text-text-light">
                <p>
                  Yanlış keşif, eksik kapsama, kötü kablolama ve yanlış cihaz seçimi yüzünden
                  birçok sistem ilk bakışta çalışıyor gibi görünür ama olay anında yetersiz kalır.
                </p>

                <p>
                  Profesyonel kurulumda amaç sadece cihazı monte etmek değil, alanı gerçekten
                  güvenli hale getirmektir. Bu yüzden planlama, kurulum kadar kritiktir.
                </p>

                <p>
                  Kör noktaları azaltan, kayıt süresini doğru planlayan ve mobil izlemeyi düzgün
                  kuran sistemler uzun vadede çok daha az sorun çıkarır.
                </p>
              </div>

              <div className="mt-6 rounded-2xl border border-accent/15 bg-white p-5">
                <div className="mb-2 text-sm font-semibold text-primary">
                  Hızlı teklif almak için
                </div>
                <p className="text-sm leading-6 text-text-light">
                  Bize şehir, mekan tipi ve temel ihtiyacınızı iletin. En kısa sürede size uygun
                  sistem yapısını netleştirelim.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {data.segments.length > 0 && (
        <section className="bg-surface py-16">
          <Container>
            <div className="mb-10 max-w-3xl">
              <h2 className="mb-4 text-2xl font-bold text-primary">
                Alt Hizmet ve Uygulama Alanları
              </h2>
              <p className="text-sm leading-7 text-text-light">
                İhtiyaçlar kullanım alanına göre değişir. Aşağıdaki bağlantılardan ilgili senaryoya
                daha net bakabilirsiniz.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {data.segments.map((segment, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="mb-3 text-lg font-bold text-primary">{segment.title}</h3>
                  <p className="mb-4 text-sm leading-7 text-text-light">{segment.content}</p>
                  <Link
                    href={segment.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-all hover:gap-3"
                  >
                    Detaylı bilgi
                    <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      <ProcessSection />

      <section className="bg-white py-16">
        <Container>
          <h2 className="mb-4 text-center text-2xl font-bold text-primary">
            Hizmet Verdiğimiz Şehirler
          </h2>

          <p className="mx-auto mb-10 max-w-3xl text-center text-sm leading-7 text-text-light">
            Şu anda aktif olarak {siteConfig.serviceCityCount} şehirde hizmet veriyoruz.
            Gerçekten hizmet verdiğimiz şehirleri gösteriyoruz; boş vaat vermiyoruz.
          </p>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}`}
                className="group flex flex-col items-center gap-2 rounded-xl bg-surface p-4 text-center transition-colors hover:bg-accent/10"
              >
                <MapPin size={18} className="text-accent" />
                <span className="text-sm font-semibold text-primary group-hover:text-accent">
                  {city.name}
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {data.relatedPages && data.relatedPages.length > 0 && (
        <section className="bg-surface py-16">
          <Container>
            <h2 className="mb-8 text-2xl font-bold text-primary">
              İlgili Hizmet Sayfaları
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {data.relatedPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <h3 className="mb-2 text-lg font-bold text-primary">{page.title}</h3>
                  <p className="mb-4 text-sm leading-7 text-text-light">{page.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
                    Sayfaya git
                    <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {data.blogPosts && data.blogPosts.length > 0 && (
        <section className="bg-white py-16">
          <Container>
            <h2 className="mb-8 text-2xl font-bold text-primary">
              Faydalı İçerikler
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {data.blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="rounded-2xl border border-gray-200 bg-surface p-6 transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <h3 className="mb-3 text-lg font-bold text-primary">{post.title}</h3>
                  <p className="mb-4 text-sm leading-7 text-text-light">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
                    Yazıyı oku
                    <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <FAQSection items={data.faq} />

      <CTASection
        title={data.ctaTitle}
        subtitle={data.ctaSubtitle}
        defaultService={data.defaultService}
      />
    </>
  );
}
