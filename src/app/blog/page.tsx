import type { Metadata } from "next";
import Link from "next/link";
import { Clock3, ArrowRight, CalendarDays, BookOpen } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { blogPosts, getFeaturedBlogPosts } from "@/data/blog-posts";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Blog | Güvenlik Sistemi Rehberleri",
  description:
    "Güvenlik kamerası, alarm sistemi, yangın alarmı, fiyatlar ve kurulum süreçleri hakkında uzman rehberleri ve pratik bilgiler.",
  alternates: { canonical: "https://guvenlikservisi.com/blog" },
};

export default function BlogListeSayfasi() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Ana Sayfa", url: "/" },
    { name: "Blog", url: "/blog" },
  ]);

  const featuredPosts = getFeaturedBlogPosts();
  const regularPosts = blogPosts.filter((post) => !post.featured);

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
            <span className="text-primary font-medium">Blog</span>
          </nav>
        </Container>
      </div>

      <section className="bg-gradient-to-br from-primary to-[#1A3A5C] text-white py-16 md:py-20">
        <Container>
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">
              <BookOpen size={14} />
              Uzman içerikler • Pratik rehberler
            </div>

            <h1 className="mb-4 text-3xl sm:text-4xl font-bold leading-tight">
              Güvenlik Sistemleri Blogu
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed text-white/80">
              Kamera sistemi kurulumu, alarm çözümleri, yangın alarmı, fiyatlar ve
              doğru sistem seçimi hakkında gerçek hayatta işinize yarayacak içerikler.
            </p>
          </div>
        </Container>
      </section>

      {featuredPosts.length > 0 && (
        <section className="bg-white py-16">
          <Container>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-3">Öne Çıkan Yazılar</h2>
              <p className="max-w-3xl text-sm leading-7 text-text-light">
                En çok aranan ve karar vermeyi hızlandıran içerikleri önce burada gösteriyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {featuredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group rounded-3xl border border-gray-200 bg-surface p-6 transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <div className="mb-4 flex flex-wrap items-center gap-2 text-xs">
                    <span className="rounded-full bg-accent/10 px-2.5 py-1 font-semibold text-accent">
                      {post.category}
                    </span>
                    <span className="rounded-full bg-white px-2.5 py-1 text-text-light border border-gray-200">
                      Öne Çıkan
                    </span>
                  </div>

                  <h3 className="mb-3 text-xl font-bold leading-snug text-primary group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>

                  <p className="mb-5 text-sm leading-7 text-text-light">{post.excerpt}</p>

                  <div className="mb-5 flex flex-wrap items-center gap-4 text-xs text-text-light">
                    <span className="inline-flex items-center gap-1">
                      <Clock3 size={13} />
                      {post.readTime} dk okuma
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <CalendarDays size={13} />
                      {new Date(post.publishedAt).toLocaleDateString("tr-TR")}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-all group-hover:gap-3">
                    Yazıyı oku
                    <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="bg-surface py-16 md:py-20">
        <Container>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-3">Tüm Yazılar</h2>
            <p className="max-w-3xl text-sm leading-7 text-text-light">
              Fiyat rehberleri, teknik içerikler, yasal zorunluluklar ve kurulum kararını
              kolaylaştıran yazıları burada bulabilirsiniz.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {regularPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="mb-4 rounded-2xl border border-gray-200 bg-surface p-5">
                  <div className="mb-2 text-sm font-semibold text-primary">Uzman İçerik</div>
                  <p className="text-sm leading-7 text-text-light">
                    Güvenlik sistemleri, kurulum süreçleri, fiyatlar ve doğru ürün seçimi
                    hakkında pratik bilgiler.
                  </p>
                </div>

                <div className="mb-3 flex flex-wrap items-center gap-2 text-xs">
                  <span className="rounded-full bg-accent/10 px-2.5 py-1 font-semibold text-accent">
                    {post.category}
                  </span>
                </div>

                <h3 className="mb-3 text-lg font-bold leading-snug text-primary group-hover:text-accent transition-colors">
                  {post.title}
                </h3>

                <p className="mb-5 text-sm leading-7 text-text-light">{post.excerpt}</p>

                <div className="mb-5 flex flex-wrap items-center gap-4 text-xs text-text-light">
                  <span className="inline-flex items-center gap-1">
                    <Clock3 size={13} />
                    {post.readTime} dk okuma
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <CalendarDays size={13} />
                    {new Date(post.publishedAt).toLocaleDateString("tr-TR")}
                  </span>
                </div>

                <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-all group-hover:gap-3">
                  Devamını oku
                  <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
