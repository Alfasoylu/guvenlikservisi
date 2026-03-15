import Link from "next/link";

interface SupportCard {
  title: string;
  description: string;
}

interface SupportLink {
  href: string;
  label: string;
  description: string;
}

interface DistrictLink {
  label: string;
  href?: string;
}

interface IstanbulMoneySupportSectionProps {
  title: string;
  description: string;
  demandCards: SupportCard[];
  districtTitle: string;
  districtDescription: string;
  districtLinks: DistrictLink[];
  decisionTitle: string;
  decisionDescription: string;
  decisionLinks: SupportLink[];
}

export default function IstanbulMoneySupportSection({
  title,
  description,
  demandCards,
  districtTitle,
  districtDescription,
  districtLinks,
  decisionTitle,
  decisionDescription,
  decisionLinks,
}: IstanbulMoneySupportSectionProps) {
  return (
    <section className="bg-slate-50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-emerald-700">
            Istanbul Money Layer
          </p>
          <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            {description}
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {demandCards.map((card) => (
            <article
              key={card.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-black text-slate-950">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {card.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
          <h3 className="text-2xl font-black text-slate-950">{districtTitle}</h3>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
            {districtDescription}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {districtLinks.map((district) =>
              district.href ? (
                <Link
                  key={`${district.label}-${district.href}`}
                  href={district.href}
                  className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-100"
                >
                  {district.label}
                </Link>
              ) : (
                <span
                  key={district.label}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700"
                >
                  {district.label}
                </span>
              ),
            )}
          </div>
        </div>

        <div className="mt-12">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-2xl font-black text-slate-950">{decisionTitle}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {decisionDescription}
            </p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {decisionLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:border-slate-300 hover:bg-slate-100"
              >
                <h4 className="text-base font-black text-slate-950">{link.label}</h4>
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
