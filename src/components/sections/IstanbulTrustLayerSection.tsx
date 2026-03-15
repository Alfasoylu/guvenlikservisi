import Link from "next/link";
import type { IstanbulTrustLayerContent } from "@/data/seo/istanbul-trust-layer";

interface IstanbulTrustLayerSectionProps {
  content: IstanbulTrustLayerContent;
}

export default function IstanbulTrustLayerSection({
  content,
}: IstanbulTrustLayerSectionProps) {
  return (
    <section className="bg-slate-50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-emerald-700">
            {content.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-4xl">
            {content.title}
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            {content.description}
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {content.stats.map((stat) => (
            <article
              key={`${stat.value}-${stat.label}`}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-3xl font-black text-slate-950">{stat.value}</p>
              <h3 className="mt-3 text-base font-bold text-slate-950">
                {stat.label}
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                {stat.note}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-6 xl:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
            <h3 className="text-2xl font-black text-slate-950">
              {content.proofTitle}
            </h3>
            <div className="mt-6 grid gap-4">
              {content.proofCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <h4 className="text-base font-black text-slate-950">
                    {card.title}
                  </h4>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {card.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
            <h3 className="text-2xl font-black text-slate-950">
              {content.scenariosTitle}
            </h3>
            <div className="mt-6 grid gap-4">
              {content.scenarioCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5"
                >
                  <h4 className="text-base font-black text-slate-950">
                    {card.title}
                  </h4>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    {card.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-2xl font-black text-slate-950">
              {content.linksTitle}
            </h3>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {content.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:border-slate-300 hover:bg-slate-100"
              >
                <h4 className="text-base font-black text-slate-950">
                  {link.label}
                </h4>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {link.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
