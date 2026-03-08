import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { blogPosts } from "@/data/blog-posts";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Blog | Güvenlik Sistemi Rehberleri | Güvenlik Servisi",
  description:
    "Güvenlik kamerası, alarm sistemi ve yangın alarm kurulumu hakkında uzman rehberleri, fiyat bilgileri ve teknik ipuçları.",
  alternates: { canonical: "https://guvenlikservisi.com/blog" },
};

export default function BlogListeSayfasi() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Ana Sayfa", url: "/" },
    { name: "Blog", url: "/blog" },
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
            <span className="text-primary font-medium">Blog</span>
          </nav>
        </Container>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-[#1A3A5C] text-white py-16">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Blog</h1>
            <p className="text-white/80 text-lg">
              Güvenlik sistemi kurulumu hakkında uzman rehberleri ve güncel bilgiler.
            </p>
          </div>
        </Container>
      </section>

      {/* Blog listesi */}
      <section className="py-16 md:py-24 bg-surface">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden"
              >
                {/* Görsel placeholder */}
                <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center border-b border-gray-100">
                  <div className="text-center text-accent/50">
                    <div className="text-4xl mb-2">📝</div>
                    <p className="text-xs">Blog görseli</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-text-light mb-3">
                    <span className="bg-accent/10 text-accent px-2 py-0.5 rounded-full font-medium">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime} dk okuma
                    </span>
                    <span>{new Date(post.publishedAt).toLocaleDateString("tr-TR")}</span>
                  </div>
                  <h2 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-text-light text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-accent text-sm font-semibold group-hover:gap-2 transition-all">
                    Devamını oku <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
