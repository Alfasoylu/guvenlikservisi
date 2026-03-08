import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import QuoteForm from "@/components/forms/QuoteForm";
import { siteConfig } from "@/data/site-config";
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "İletişim | Güvenlik Servisi",
  description:
    "Güvenlik Servisi iletişim bilgileri. Ücretsiz keşif için bizi arayın veya form doldurun.",
  alternates: { canonical: "https://guvenlikservisi.com/iletisim" },
};

export default function IletisimSayfasi() {
  const lbSchema = generateLocalBusinessSchema();
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Ana Sayfa", url: "/" },
    { name: "İletişim", url: "/iletisim" },
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
            <span className="text-primary font-medium">İletişim</span>
          </nav>
        </Container>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-[#1A3A5C] text-white py-16">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">İletişim</h1>
            <p className="text-white/80 text-lg">
              Ücretsiz keşif ve teklif için bize ulaşın. En kısa sürede dönüş yapıyoruz.
            </p>
          </div>
        </Container>
      </section>

      {/* İçerik */}
      <section className="py-16 md:py-24 bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* İletişim bilgileri */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-8">Bize Ulaşın</h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={22} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-1">Telefon</p>
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                      className="text-text-light hover:text-primary transition-colors"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={22} className="text-[#25D366]" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-1">WhatsApp</p>
                    <a
                      href={`https://wa.me/${siteConfig.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-light hover:text-primary transition-colors"
                    >
                      WhatsApp ile Yaz
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={22} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-1">E-posta</p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-text-light hover:text-primary transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={22} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-1">Adres</p>
                    <p className="text-text-light">
                      {siteConfig.address || "İstanbul ve Marmara Bölgesi"}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={22} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-1">Çalışma Saatleri</p>
                    <p className="text-text-light text-sm">Pazartesi–Cuma: 08:00–18:00</p>
                    <p className="text-text-light text-sm">Cumartesi: 09:00–16:00</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Teklif Formu</h2>
              <QuoteForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
