import Link from "next/link";
import type { IstanbulDistrictSupportContent } from "@/data/seo/istanbul-district-support";

interface IstanbulDistrictSupportSectionProps {
  content: IstanbulDistrictSupportContent;
}

export default function IstanbulDistrictSupportSection({
  content,
}: IstanbulDistrictSupportSectionProps) {
  return (
    <section className="bg-slate-950 py-16 text-white md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-emerald-300">
            {content.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            {content.title}
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-300">
            {content.description}
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {content.segmentCards.map((card) => (
            <article
              key={card.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-xl font-black text-white">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {card.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-6 xl:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
            <h3 className="text-2xl font-black text-white">
              {content.supportTitle}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {content.supportDescription}
            </p>
            <div className="mt-6 grid gap-4">
              {content.supportLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 transition hover:border-emerald-300/40 hover:bg-slate-900"
                >
                  <h4 className="text-base font-black text-white">
                    {link.label}
                  </h4>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    {link.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
            <h3 className="text-2xl font-black text-white">
              {content.problemTitle}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {content.problemDescription}
            </p>
            <div className="mt-6 grid gap-4">
              {content.problemLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 transition hover:border-emerald-300/40 hover:bg-slate-900"
                >
                  <h4 className="text-base font-black text-white">
                    {link.label}
                  </h4>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    {link.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
