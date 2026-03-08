import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import FAQSection from "@/components/sections/FAQSection";
import { blogPosts, getBlogPostBySlug, getAllBlogSlugs } from "@/data/blog-posts";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Güvenlik Servisi Blog`,
    description: post.excerpt,
    alternates: { canonical: `https://guvenlikservisi.com/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://guvenlikservisi.com/blog/${slug}`,
      siteName: "Güvenlik Servisi",
      locale: "tr_TR",
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

const blogFaqMap: Record<string, { question: string; answer: string }[]> = {
  "guvenlik-kamerasi-montaj-ucreti-2026": [
    { question: "Kamera montajı fiyatına KDV dahil mi?", answer: "Tekliflerimiz KDV hariç olup fatura düzenlenmektedir." },
    { question: "En ucuz kamera sistemi kaça kurulur?", answer: "2 kameralı temel sistem montaj dahil yaklaşık 12.000 TL'den başlar." },
    { question: "Fiyat sonradan değişir mi?", answer: "Keşif sonrası verilen teklif sabittir, ek sürpriz maliyet çıkmaz." },
  ],
  "isyerine-kac-kamera-lazim": [
    { question: "Az kamera ile çok alan kapanabilir mi?", answer: "Evet, geniş açılı fish-eye kameralar ile tek kamerayla 180° kapsama mümkündür." },
    { question: "Kamera sayısını sonradan artırabilir miyim?", answer: "Evet, IP kamera sistemleri kolayca genişletilebilir." },
  ],
  "alarm-sistemi-fiyatlari-2026": [
    { question: "Alarm sistemi aylık ücret gerektiriyor mu?", answer: "İzleme merkezi kullanılıyorsa aylık abonelik ücretlidir, yoksa sadece tek seferlik kurulum ücreti ödenir." },
    { question: "Ucuz alarm sistemi işe yarar mı?", answer: "Çok düşük fiyatlı sistemler güvenilir olmayabilir. Marka ve kalite önemlidir." },
  ],
  "yangin-alarm-sistemi-zorunlu-mu": [
    { question: "Yangın alarmı olmayan işyeri açılabilir mi?", answer: "Ruhsat aşamasında eksik belgelerle sorun yaşanabilir. Denetim sırasında kapatma kararı verilebilir." },
    { question: "Ev için yangın alarmı zorunlu mu?", answer: "4 kattan fazla apartmanlar için zorunludur. Müstakil tek katlı evler muaftır." },
    { question: "Belgeler ne kadar sürede hazırlanır?", answer: "Standart projelerde kurulum sonrası 1 hafta içinde belgeler teslim edilir." },
  ],
};

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

  const faqItems = blogFaqMap[slug] || [];
  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  // İçeriği basit markdown'dan HTML'e çevir
  const renderContent = (content: string) => {
    return content
      .split("\n")
      .map((line, i) => {
        if (line.startsWith("## ")) return <h2 key={i} className="text-xl font-bold text-primary mt-8 mb-3">{line.slice(3)}</h2>;
        if (line.startsWith("### ")) return <h3 key={i} className="text-lg font-bold text-primary mt-6 mb-2">{line.slice(4)}</h3>;
        if (line.startsWith("**") && line.endsWith("**")) return <p key={i} className="font-semibold text-primary mb-2">{line.slice(2, -2)}</p>;
        if (line.startsWith("- ")) return <li key={i} className="ml-4 text-text-light text-sm mb-1">{line.slice(2)}</li>;
        if (line.startsWith("|")) return null; // tablo satırları atla
        if (line.trim() === "") return <br key={i} />;
        return <p key={i} className="text-text-light leading-relaxed mb-3 text-sm">{line}</p>;
      });
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Breadcrumb */}
      <div className="bg-surface border-b border-gray-100 py-3">
        <Container>
          <nav className="flex items-center gap-2 text-sm text-text-light flex-wrap">
            <Link href="/" className="hover:text-primary">Ana Sayfa</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary">Blog</Link>
            <span>/</span>
            <span className="text-primary font-medium line-clamp-1">{post.title}</span>
          </nav>
        </Container>
      </div>

      {/* Makale içeriği */}
      <article className="py-12 bg-white">
        <Container size="md">
          {/* Başlık */}
          <div className="mb-8">
            <div className="flex items-center gap-3 text-sm text-text-light mb-4">
              <span className="bg-accent/10 text-accent px-3 py-0.5 rounded-full font-medium text-xs">{post.category}</span>
              <span className="flex items-center gap-1"><Clock size={12} />{post.readTime} dk okuma</span>
              <span>{new Date(post.publishedAt).toLocaleDateString("tr-TR")}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary leading-tight mb-4">{post.title}</h1>
            <p className="text-text-light text-base leading-relaxed border-l-4 border-accent pl-4">{post.excerpt}</p>
          </div>

          {/* Görsel placeholder */}
          <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mb-8 border-2 border-dashed border-accent/30">
            <div className="text-center text-accent/50">
              <div className="text-5xl mb-2">📝</div>
              <p className="text-sm">Blog kapak görseli</p>
            </div>
          </div>

          {/* İçerik */}
          <div className="prose max-w-none">{renderContent(post.content)}</div>

          {/* CTA bandı */}
          <div className="mt-10 bg-primary text-white rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold text-lg mb-1">Bu hizmetten yararlanmak ister misiniz?</p>
              <p className="text-white/80 text-sm">Ücretsiz keşif ve teklif için bizi arayın.</p>
            </div>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 bg-cta hover:bg-cta-hover text-white font-bold px-6 py-3 rounded-xl whitespace-nowrap transition-colors"
            >
              Teklif Al <ArrowRight size={16} />
            </Link>
          </div>
        </Container>
      </article>

      {/* FAQ */}
      {faqItems.length > 0 && <FAQSection items={faqItems} title="Bu Konuda Sık Sorulan Sorular" />}

      {/* İlgili yazılar */}
      <section className="py-16 bg-surface">
        <Container>
          <h2 className="text-xl font-bold text-primary mb-8">İlgili Yazılar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((rp) => (
              <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow">
                <span className="text-xs text-accent font-medium">{rp.category}</span>
                <h3 className="font-bold text-primary mt-2 mb-2 text-sm group-hover:text-accent transition-colors leading-snug">
                  {rp.title}
                </h3>
                <p className="text-text-light text-xs line-clamp-2">{rp.excerpt}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
