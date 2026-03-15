import Link from "next/link";
import {
  AlertTriangle,
  ChevronRight,
  Monitor,
  Phone,
  ShieldAlert,
  Wrench,
} from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import HeroCTAButtons from "@/components/HeroCTAButtons";
import ProblemLeadRoutingSection from "@/components/sections/ProblemLeadRoutingSection";
import { Container } from "@/components/ui/Container";
import type { ProblemPageData } from "@/data/seo/problem-pages";
import { getProblemRoutingContent } from "@/data/seo/problem-routing";
import { siteConfig } from "@/data/site-config";
import {
  generateBreadcrumbSchema,
  generateLocalBusinessSchema,
  generateServiceSchema,
} from "@/lib/schema";

interface ProblemPageTemplateProps {
  data: ProblemPageData;
}

const urgencyColors = {
  yüksek: "bg-red-500/10 text-red-600 border-red-200",
  orta: "bg-amber-500/10 text-amber-700 border-amber-200",
  düşük: "bg-blue-500/10 text-blue-700 border-blue-200",
} as const;

const urgencyLabels = {
  yüksek: "Yüksek Öncelik",
  orta: "Orta Öncelik",
  düşük: "Düşük Öncelik",
} as const;

export default function ProblemPageTemplate({
  data,
}: ProblemPageTemplateProps) {
  const pagePath = `/sorun/${data.slug}`;
  const waHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(data.whatsappMessage)}`;
  const phoneHref = `tel:${siteConfig.phone.replace(/\s/g, "")}`;
  const routingContent = getProblemRoutingContent(data);

  const localBusinessSchema = generateLocalBusinessSchema();
  const serviceSchema = generateServiceSchema({
    name: data.primaryIssue,
    description: data.metaDescription,
    url: pagePath,
  });
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Ana Sayfa", url: "/" },
    { name: data.primaryIssue, url: pagePath },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Breadcrumb */}
      <div className="border-b border-gray-100 bg-surface py-3">
        <Container>
          <nav className="flex items-center gap-2 text-sm text-text-light">
            <Link href="/" className="hover:text-primary">
              Ana Sayfa
            </Link>
            <span>/</span>
            <span className="font-medium text-primary">
              {data.primaryIssue}
            </span>
          </nav>
        </Container>
      </div>

      {/* Hero — Problem-intent */}
      <section className="bg-gradient-to-br from-primary to-[#1A3A5C] py-16 text-white md:py-20">
        <Container>
          <div className="max-w-3xl">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">
                <ShieldAlert size={14} />
                Sorun Giderme
              </span>
              <span
                className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold ${urgencyColors[data.urgencyLevel]}`}
              >
                <AlertTriangle size={12} />
                {urgencyLabels[data.urgencyLevel]}
              </span>
            </div>

            <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl">
              {data.primaryIssue}
            </h1>

            <p className="mb-6 text-lg leading-relaxed text-white/80">
              Bu sorunu yaşıyorsanız doğru yerdesiniz. Aşağıda olası nedenleri,
              kendiniz deneyebileceğiniz kontrolleri ve ne zaman profesyonel
              teknik servis aramanız gerektiğini bulacaksınız.
            </p>

            <HeroCTAButtons
              formLabel={data.heroCtaLabel}
              phoneHref={phoneHref}
              phoneDisplay={siteConfig.phone}
              waHref={waHref}
              pagePath={pagePath}
            />
          </div>
        </Container>
      </section>

      {/* Symptoms — "Neler yaşanıyor?" */}
      <section className="bg-white py-16">
        <Container>
          <div className="max-w-4xl">
            <h2 className="mb-2 text-2xl font-bold text-primary">
              Belirtiler — Ne Yaşanıyor?
            </h2>
            <p className="mb-8 text-sm text-text-light">
              Aşağıdaki belirtilerden bir veya birkaçını yaşıyorsanız bu sorunla
              karşı karşıyasınız demektir.
            </p>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {data.symptoms.map((symptom) => (
                <li
                  key={symptom}
                  className="flex items-start gap-3 rounded-xl border border-gray-200 bg-surface px-4 py-3 text-sm leading-6 text-gray-700"
                >
                  <AlertTriangle
                    size={16}
                    className="mt-0.5 shrink-0 text-amber-500"
                  />
                  {symptom}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Likely Causes */}
      <section className="bg-surface py-16">
        <Container>
          <div className="max-w-4xl">
            <h2 className="mb-2 text-2xl font-bold text-primary">
              Olası Nedenler
            </h2>
            <p className="mb-8 text-sm text-text-light">
              Bu sorunun en yaygın sebepleri aşağıda sıralanmıştır. Kesin teşhis
              için profesyonel kontrol önerilir.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {data.likelyCauses.map((cause) => (
                <div
                  key={cause}
                  className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 text-sm leading-6 text-gray-700 shadow-sm"
                >
                  <Wrench size={16} className="mt-0.5 shrink-0 text-accent" />
                  {cause}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Quick Checks — DIY */}
      <section className="bg-white py-16">
        <Container>
          <div className="max-w-4xl">
            <h2 className="mb-2 text-2xl font-bold text-primary">
              Kendiniz Deneyebileceğiniz Kontroller
            </h2>
            <p className="mb-8 text-sm text-text-light">
              Teknik servis çağırmadan önce aşağıdaki adımları sırayla deneyin.
              Çoğu durumda sorun basit bir bağlantı veya ayar kaynaklıdır.
            </p>
            <ol className="space-y-3">
              {data.quickChecks.map((check, i) => (
                <li
                  key={check}
                  className="flex items-start gap-4 rounded-xl border border-gray-200 bg-surface px-5 py-4 text-sm leading-6 text-gray-700"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  {check}
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* When to Call Service */}
      <section className="bg-surface py-16">
        <Container>
          <div className="max-w-4xl">
            <h2 className="mb-2 text-2xl font-bold text-primary">
              Ne Zaman Teknik Servis Aramalısınız?
            </h2>
            <p className="mb-8 text-sm text-text-light">
              Aşağıdaki durumlardan herhangi biri geçerliyse profesyonel
              müdahale gereklidir.
            </p>
            <ul className="space-y-3">
              {data.whenToCallService.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-red-100 bg-white px-5 py-4 text-sm leading-6 text-gray-700 shadow-sm"
                >
                  <Phone size={16} className="mt-0.5 shrink-0 text-red-500" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white transition hover:bg-primary/90"
              >
                <Phone size={16} />
                Hemen Arayın: {siteConfig.phone}
              </a>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#20BD5A]"
              >
                WhatsApp ile Sorun Bildirin
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* What Happens If Ignored */}
      <section className="bg-white py-16">
        <Container>
          <div className="max-w-4xl">
            <h2 className="mb-2 text-2xl font-bold text-primary">
              Müdahale Edilmezse Ne Olur?
            </h2>
            <p className="mb-8 text-sm text-text-light">
              Sorunu ertelemenin olası sonuçları:
            </p>
            <ul className="space-y-3">
              {data.whatHappensIfIgnored.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-6 text-gray-700"
                >
                  <AlertTriangle
                    size={16}
                    className="mt-0.5 shrink-0 text-red-400"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Remote vs Onsite */}
      <section className="bg-surface py-16">
        <Container>
          <div className="max-w-4xl">
            <h2 className="mb-8 text-2xl font-bold text-primary">
              Uzaktan mı, Sahada mı Çözülür?
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center gap-2 text-primary">
                  <Monitor size={18} className="text-accent" />
                  <span className="font-semibold">Uzaktan Destek</span>
                </div>
                <p className="text-sm leading-7 text-text-light">
                  {data.remoteVsOnsite.remoteHelp}
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center gap-2 text-primary">
                  <Wrench size={18} className="text-accent" />
                  <span className="font-semibold">Sahada Müdahale</span>
                </div>
                <p className="text-sm leading-7 text-text-light">
                  {data.remoteVsOnsite.onsiteRequired}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Services */}
      <ProblemLeadRoutingSection content={routingContent} />

      {/* Related Services */}
      {data.relatedServiceLinks.length > 0 && (
        <section className="bg-white py-16">
          <Container>
            <div className="max-w-4xl">
              <h2 className="mb-2 text-2xl font-bold text-primary">
                İlgili Hizmetler
              </h2>
              <p className="mb-8 text-sm text-text-light">
                Bu sorunla ilgili profesyonel hizmetlerimiz:
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {data.relatedServiceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group flex items-center justify-between rounded-xl border border-gray-200 bg-surface px-5 py-4 text-sm font-medium text-primary transition hover:border-accent hover:bg-white hover:shadow-sm"
                  >
                    {link.label}
                    <ChevronRight
                      size={16}
                      className="text-text-light transition group-hover:text-accent"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Related Problems */}
      {data.relatedProblemLinks.length > 0 && (
        <section className="bg-surface py-16">
          <Container>
            <div className="max-w-4xl">
              <h2 className="mb-2 text-2xl font-bold text-primary">
                Benzer Sorunlar
              </h2>
              <p className="mb-8 text-sm text-text-light">
                Sorununuz tam olarak bununla eşleşmiyorsa aşağıdaki sayfalara
                göz atın:
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {data.relatedProblemLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white px-5 py-4 text-sm font-medium text-primary transition hover:border-accent hover:shadow-sm"
                  >
                    {link.label}
                    <ChevronRight
                      size={16}
                      className="text-text-light transition group-hover:text-accent"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* FAQ */}
      <FAQSection items={data.faq} />

      {/* CTA / Lead Form */}
      <CTASection
        defaultService={data.defaultService}
        content={{
          badge: "Acil teknik destek",
          title: "Sorununuzu Hemen Bildirin",
          subtitle:
            "Formu doldurun, ekibimiz sorununuzu değerlendirip en kısa sürede dönüş yapsın. Uzaktan çözülebilecek sorunlar için aynı gün destek sağlanır.",
          primaryLabel: `Hemen Arayın: ${siteConfig.phone}`,
          helperText:
            "Formu doldurmak yeterlidir. Arıza detaylarını birlikte netleştiririz.",
          helperTone: "direct",
          intentTag: `sorun-${data.slug}`,
          trustItems: [
            "Aynı gün acil müdahale imkanı",
            "Uzaktan teşhis ve destek",
            "Marka ve kurucu firma fark etmez",
            "Şeffaf fiyatlandırma, sürpriz yok",
          ],
        }}
      />
    </>
  );
}
