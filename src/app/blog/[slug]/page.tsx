import type { Metadata } from "next";
import { getCanonicalUrlForKnownPath } from "@/lib/canonical";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Clock3,
  ArrowRight,
  CalendarDays,
  BookOpen,
  ChevronRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import FAQSection from "@/components/sections/FAQSection";
import {
  getBlogPostBySlug,
  getAllBlogSlugs,
  getRelatedBlogPosts,
} from "@/data/blog-posts";
import { getProgrammaticFaq } from "@/data/seo/programmatic-posts";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const getCanonicalBlogUrl = (slug: string) =>
  getCanonicalUrlForKnownPath(`/blog/${slug}`);

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) return {};

  const canonicalUrl = getCanonicalBlogUrl(slug);

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: canonicalUrl,
      siteName: "Guvenlik Servisi",
      locale: "tr_TR",
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      images: post.image ? [post.image] : [],
    },
  };
}

const blogFaqMap: Record<string, { question: string; answer: string }[]> = {
  "guvenlik-kamerasi-montaj-ucreti-2026": [
    {
      question: "Kamera montajı fiyatına KDV dahil mi?",
      answer:
        "Teklifin kapsamına göre değişebilir. Net fiyat için keşif sonrası yazılı teklif almak en doğrusudur.",
    },
    {
      question: "En düşük maliyetli kamera sistemi ne kadar tutar?",
      answer:
        "Temel 2 kameralı sistemler daha düşük bütçelerle başlayabilir ancak doğru fiyat, mekan tipi ve altyapıya göre belirlenir.",
    },
    {
      question: "Keşif sonrası fiyat değişir mi?",
      answer:
        "Keşif sonrası net kapsam belirlendiğinde teklif daha sağlıklı ve sürprizsiz olur.",
    },
  ],
  "isyerine-kac-kamera-lazim": [
    {
      question: "Az kamera ile çok alan izlenebilir mi?",
      answer:
        "Bazı alanlarda geniş açılı kamera ile mümkün olabilir ama detay ihtiyacı varsa daha fazla veya farklı tipte kamera gerekir.",
    },
    {
      question: "Sisteme sonradan kamera eklenebilir mi?",
      answer:
        "Uygun kayıt cihazı ve altyapı seçildiyse çoğu sistem büyütülebilir.",
    },
  ],
  "alarm-sistemi-fiyatlari-2026": [
    {
      question: "Alarm sistemi aylık ücret gerektirir mi?",
      answer:
        "İzleme merkezi bağlantısı varsa aylık ücret olabilir. Bağımsız sistemlerde genelde tek seferlik kurulum maliyeti vardır.",
    },
    {
      question: "Kablosuz alarm mı kablolu alarm mı daha mantıklı?",
      answer:
        "Hazır yapılarda çoğu zaman kablosuz sistem avantajlıdır. Yeni yapıda ise kablolu sistem daha verimli olabilir.",
    },
  ],
  "yangin-alarm-sistemi-zorunlu-mu": [
    {
      question: "Yangın alarmı olmayan işyeri risk altında mıdır?",
      answer:
        "Evet. Mevzuat, denetim, sigorta ve operasyon açısından ciddi risk doğabilir.",
    },
    {
      question: "Her bina için aynı sistem mi gerekir?",
      answer:
        "Hayır. Yapının tipi, büyüklüğü ve kullanım amacı sistem tasarımını değiştirir.",
    },
    {
      question: "Kurulum sonrası belge gerekir mi?",
      answer:
        "Projeye göre evet. Özellikle işletmelerde proje, test ve bakım kayıtları kritik olabilir.",
    },
  ],
  "ip-kamera-mi-analog-kamera-mi": [
    {
      question: "Analog kamerayı IP kameraya dönüştürebilir miyim?",
      answer:
        "Evet, ancak kablo altyapısının yenilenmesi ve DVR yerine NVR alınması gerekir. Hibrit cihazlarla geçiş de mümkündür.",
    },
    {
      question: "IP kamera internet olmadan çalışır mı?",
      answer:
        "Evet. Yerel kayıt ve izleme internet olmadan çalışır. Uzaktan erişim için internet gerekir.",
    },
    {
      question: "Maliyet farkı ne kadar?",
      answer:
        "IP kameranın birim maliyeti daha yüksek olabilir, ancak PoE ile kablolama maliyeti düşer. Toplamda proje bazında değerlendirmek gerekir.",
    },
  ],
  "apartman-kamera-sistemi-kurulumu": [
    {
      question: "Apartmana kamera takmak için yönetim kararı gerekir mi?",
      answer:
        "Evet. Ortak alanlara kamera montajı için kat malikleri kurulu kararı alınması önerilir.",
    },
    {
      question: "Apartman kamera sisteminin aylık maliyeti var mı?",
      answer:
        "Standart yerel kayıtlı sistemlerde aylık maliyet yoktur. İzleme merkezi veya bulut kayıt tercih edilirse aylık ücret olabilir.",
    },
    {
      question: "Kamera kaydına kim erişebilir?",
      answer:
        "Genellikle yönetici veya kapıcı yetkili olur. Erişim şifre ile korunmalıdır.",
    },
  ],
  "kamera-sistemi-kac-gun-kayit-yapar": [
    {
      question: "Disk dolunca kayıtlar silinir mi?",
      answer:
        "Evet, döngüsel kayıt sistemiyle en eski kayıtlar otomatik silinir ve disk hiç dolmaz.",
    },
    {
      question: "Kayıt süresini artırmanın en kolay yolu nedir?",
      answer:
        "Sabit disk kapasitesini artırmak veya H.265+ sıkıştırmaya geçmek en etkili yöntemlerdir.",
    },
    {
      question: "Hareket algılama kaydı güvenilir mi?",
      answer:
        "Modern kameralarda hareket algılama oldukça gelişmiştir. Kritik alanlar için sürekli kayıt, diğerleri için hareket kaydı kombinasyonu önerilir.",
    },
  ],
  "gece-goruslu-kamera-nasil-calisir": [
    {
      question: "IR kamera gece renkli görüntü verir mi?",
      answer:
        "Standart IR kamera gece siyah-beyaz görüntü verir. Renkli gece görüş için starlight veya ColorVu teknolojisi gerekir.",
    },
    {
      question: "Cam arkasına gece görüşlü kamera konabilir mi?",
      answer:
        "IR kamera cam arkasında çalışmaz çünkü kızılötesi ışık camdan yansır. Cam arkası kullanımda IR kapatılmalı ve dış aydınlatma sağlanmalıdır.",
    },
    {
      question: "Gece görüş mesafesi nasıl artırılır?",
      answer:
        "Daha güçlü IR LED'li kamera seçmek veya ek IR aydınlatıcı kullanmak mesafeyi artırır.",
    },
  ],
  "kamera-sistemi-nereye-takilir": [
    {
      question: "Kameranın ideal montaj yüksekliği nedir?",
      answer:
        "Genel olarak 2.5-4 metre arası idealdir. Çok alçakta müdahaleye açık, çok yüksekte yüz detayı kaybolur.",
    },
    {
      question: "Kaç kamera ile başlamalıyım?",
      answer:
        "En az giriş kapısı ve bir kritik alan (kasa, depo, otopark) izlenmelidir. Keşif ile ideal sayı belirlenir.",
    },
    {
      question: "Kamera yerleşimini kendim planlayabilir miyim?",
      answer:
        "Temel noktaları belirleyebilirsiniz ancak kör nokta analizi ve kablo güzergahı için profesyonel keşif önerilir.",
    },
  ],
  "ev-guvenlik-kamera-sistemi-rehberi": [
    {
      question: "Daire için kaç kamera yeterli?",
      answer:
        "Bir daire için genellikle 2-3 kamera yeterlidir: giriş kapısı, salon veya antre.",
    },
    {
      question: "Ev kamerası aylık ücret gerektirir mi?",
      answer:
        "Yerel NVR kayıtlı sistemlerde aylık ücret yoktur. Bulut kayıt tercih edilirse aylık abonelik olabilir.",
    },
    {
      question: "Alarm ve kamera birlikte mi kurulmalı?",
      answer:
        "Birlikte kurulum hem güvenlik seviyesini hem de altyapı verimliliğini artırır. Birçok projede kombinasyon önerilir.",
    },
  ],
};

function renderInlineFormatting(text: string) {
  const parts = text.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-primary">
          {part.slice(2, -2)}
        </strong>
      );
    }

    const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
    if (linkMatch) {
      const [, linkText, href] = linkMatch;
      return (
        <Link
          key={index}
          href={href}
          className="text-accent underline hover:text-primary"
        >
          {linkText}
        </Link>
      );
    }

    return part;
  });
}

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let listItems: string[] = [];

  const flushList = (keyBase: string) => {
    if (listItems.length > 0) {
      elements.push(
        <ul
          key={`list-${keyBase}`}
          className="mb-6 ml-5 list-disc space-y-2 text-sm leading-7 text-text-light"
        >
          {listItems.map((item, idx) => (
            <li key={`${keyBase}-${idx}`}>{renderInlineFormatting(item)}</li>
          ))}
        </ul>,
      );
      listItems = [];
    }
  };

  lines.forEach((line, i) => {
    const trimmed = line.trim();

    if (!trimmed) {
      flushList(String(i));
      return;
    }

    if (trimmed.startsWith("|")) {
      flushList(String(i));
      return;
    }

    if (trimmed.startsWith("- ")) {
      listItems.push(trimmed.slice(2));
      return;
    }

    flushList(String(i));

    if (trimmed.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="mt-10 mb-4 text-2xl font-bold text-primary">
          {trimmed.slice(3)}
        </h2>,
      );
      return;
    }

    if (trimmed.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="mt-8 mb-3 text-xl font-bold text-primary">
          {trimmed.slice(4)}
        </h3>,
      );
      return;
    }

    elements.push(
      <p key={i} className="mb-4 text-sm leading-7 text-text-light">
        {renderInlineFormatting(trimmed)}
      </p>,
    );
  });

  flushList("final");

  return elements;
}

export default async function BlogDetaySayfasi({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.excerpt,
    url: `/blog/${slug}`,
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt,
    image: post.image,
  });

  const breadcrumb = generateBreadcrumbSchema([
    { name: "Ana Sayfa", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${slug}` },
  ]);

  const faqItems = blogFaqMap[slug] || getProgrammaticFaq(slug);
  const relatedPosts = getRelatedBlogPosts(slug, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <div className="bg-surface border-b border-gray-100 py-3">
        <Container>
          <nav className="flex flex-wrap items-center gap-2 text-sm text-text-light">
            <Link href="/" className="hover:text-primary">
              Ana Sayfa
            </Link>
            <ChevronRight size={14} />
            <Link href="/blog" className="hover:text-primary">
              Blog
            </Link>
            <ChevronRight size={14} />
            <span className="line-clamp-1 font-medium text-primary">
              {post.title}
            </span>
          </nav>
        </Container>
      </div>

      <article className="bg-white py-12 md:py-16">
        <Container size="md">
          <div className="mb-8">
            <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-text-light">
              <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                {post.category}
              </span>

              <span className="inline-flex items-center gap-1">
                <Clock3 size={13} />
                {post.readTime} dk okuma
              </span>

              <span className="inline-flex items-center gap-1">
                <CalendarDays size={13} />
                {new Date(post.publishedAt).toLocaleDateString("tr-TR")}
              </span>
            </div>

            <h1 className="mb-4 text-3xl font-bold leading-tight text-primary md:text-4xl">
              {post.title}
            </h1>

            <p className="border-l-4 border-accent pl-4 text-base leading-8 text-text-light">
              {post.excerpt}
            </p>
          </div>

          <div className="mb-8 rounded-3xl border border-gray-200 bg-surface p-6">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-accent">
              <BookOpen size={14} />
              Uzman içerik
            </div>

            <p className="text-sm leading-7 text-text-light">
              Bu içerik karar vermenizi hızlandırmak için hazırlanmıştır. Net
              teklif, doğru sistem seçimi ve keşif planlaması için içerik
              sonundaki bağlantıları kullanabilirsiniz.
            </p>
          </div>

          <div className="max-w-none">{renderContent(post.content)}</div>

          <div className="mt-10 rounded-3xl bg-primary p-6 text-white md:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="mb-2 text-xl font-bold">
                  Bu hizmetten yararlanmak ister misiniz?
                </p>
                <p className="text-sm leading-7 text-white/80">
                  İhtiyacınızı netleştirelim, uygun sistemi belirleyelim ve size
                  hızlı teklif hazırlayalım.
                </p>
              </div>

              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 self-start rounded-xl bg-cta px-6 py-3 font-bold text-white transition-colors hover:bg-ctaHover md:self-auto"
              >
                Teklif Al
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Container>
      </article>

      {faqItems.length > 0 && (
        <FAQSection items={faqItems} title="Bu Konuda Sık Sorulan Sorular" />
      )}

      <section className="bg-surface py-16">
        <Container>
          <h2 className="mb-8 text-2xl font-bold text-primary">
            İlgili Yazılar
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                href={`/blog/${relatedPost.slug}`}
                className="group rounded-2xl border border-gray-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="text-xs font-medium text-accent">
                  {relatedPost.category}
                </span>

                <h3 className="mt-2 mb-2 text-sm font-bold leading-snug text-primary transition-colors group-hover:text-accent">
                  {relatedPost.title}
                </h3>

                <p className="line-clamp-3 text-xs leading-6 text-text-light">
                  {relatedPost.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
