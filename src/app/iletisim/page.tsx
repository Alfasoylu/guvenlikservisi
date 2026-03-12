import type { Metadata } from "next";
import { getCanonicalUrlForKnownPath } from "@/lib/canonical";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import QuoteForm from "@/components/forms/QuoteForm";
import { siteConfig } from "@/data/site-config";
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from "@/lib/schema";

const canonicalUrl = getCanonicalUrlForKnownPath("/iletisim");

export const metadata: Metadata = {
  title: "İletişim | Güvenlik Servisi",
  description:
    "Ücretsiz keşif ve hızlı teklif için Güvenlik Servisi ile iletişime geçin. Telefon, WhatsApp, e-posta ve adres bilgilerimiz burada.",
  alternates: { canonical: canonicalUrl },
};

export default function IletisimSayfasi() {
  const lbSchema = generateLocalBusinessSchema();
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Ana Sayfa", url: "/" },
    { name: "İletişim", url: "/iletisim" },
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
            <span className="text-primary font-medium">İletişim</span>
          </nav>
        </Container>
      </div>

      <section className="bg-gradient-to-br from-primary to-[#1A3A5C] py-16 text-white md:py-20">
        <Container>
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">
              <ShieldCheck size={14} />
              Ücretsiz keşif • Hızlı teklif
            </div>

            <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl">
              İletişim
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed text-white/80">
              Kamera sistemi, alarm sistemi, yangın alarmı ve geçiş kontrol çözümleri için
              bizimle iletişime geçin. İhtiyacınızı netleştirelim, size uygun sistemi birlikte
              belirleyelim.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-8">
                <h2 className="mb-3 text-2xl font-bold text-primary">Bize Ulaşın</h2>
                <p className="max-w-xl text-sm leading-7 text-text-light">
                  Hızlı teklif almak için telefonla arayabilir, WhatsApp üzerinden yazabilir
                  veya formu doldurabilirsiniz. Yerinde keşif gereken projelerde en kısa sürede
                  dönüş sağlıyoruz.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                    <Phone size={22} className="text-accent" />
                  </div>
                  <div>
                    <p className="mb-1 font-semibold text-primary">Telefon</p>
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                      className="text-text-light transition-colors hover:text-primary"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-500/10">
                    <MessageCircle size={22} className="text-[#25D366]" />
                  </div>
                  <div>
                    <p className="mb-1 font-semibold text-primary">WhatsApp</p>
                    <a
                      href={`https://wa.me/${siteConfig.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-light transition-colors hover:text-primary"
                    >
                      WhatsApp ile yazın
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                    <Mail size={22} className="text-accent" />
                  </div>
                  <div>
                    <p className="mb-1 font-semibold text-primary">E-posta</p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-text-light transition-colors hover:text-primary"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                    <MapPin size={22} className="text-accent" />
                  </div>
                  <div>
                    <p className="mb-1 font-semibold text-primary">Adres</p>
                    <p className="text-text-light">{siteConfig.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                    <Clock size={22} className="text-accent" />
                  </div>
                  <div>
                    <p className="mb-1 font-semibold text-primary">Çalışma Saatleri</p>
                    <p className="text-sm text-text-light">Pazartesi – Cuma: 08:00 – 18:00</p>
                    <p className="text-sm text-text-light">Cumartesi: 09:00 – 16:00</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-3xl border border-accent/15 bg-white p-6">
                <h3 className="mb-2 text-lg font-bold text-primary">Yerimizi Haritada Görün</h3>
                <p className="mb-4 text-sm leading-7 text-text-light">
                  Perpa merkezli çalışıyoruz. Görüşme, keşif planlama ve yer tespiti için haritayı
                  kullanabilirsiniz.
                </p>

                <div className="overflow-hidden rounded-2xl border border-gray-200">
                  <iframe
                    title="Güvenlik Servisi Konum"
                    src="https://www.google.com/maps?q=Perpa%20Ticaret%20Merkezi%20A%20Blok%20Kat%208%20No%20758%20Sisli%20Istanbul&z=16&output=embed"
                    width="100%"
                    height="320"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="mb-6">
                <h2 className="mb-3 text-2xl font-bold text-primary">Teklif Formu</h2>
                <p className="text-sm leading-7 text-text-light">
                  Formu doldurun, ihtiyacınıza göre sizi arayalım. Şehir, mekan tipi ve temel
                  beklentinizi yazmanız daha doğru teklif almanızı sağlar.
                </p>
              </div>

              <QuoteForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
