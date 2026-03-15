import Link from "next/link";

export interface DistrictItem {
  name: string;
  slug: string;
  citySlug: string;
  href?: string;
}

interface CityDistrictGridSectionProps {
  cityName: string;
  districts: DistrictItem[];
  title?: string;
  subtitle?: string;
  enableLinks?: boolean;
}

export default function CityDistrictGridSection({
  cityName,
  districts,
  title,
  subtitle,
  enableLinks = false,
}: CityDistrictGridSectionProps) {
  if (districts.length === 0) {
    return null;
  }

  const heading = title ?? "Hizmet Verdiğimiz İlçeler";
  const description =
    subtitle ??
    `${cityName} genelinde keşif, kurulum, montaj ve teknik servis desteği verdiğimiz ilçeler aşağıdadır.`;

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">
            {heading}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#555] sm:text-base">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {districts.map((district) => {
            const content = (
              <span className="font-semibold text-primary text-sm">
                {district.name}
              </span>
            );

            if (enableLinks && district.href) {
              return (
                <Link
                  key={district.slug}
                  href={district.href}
                  className="flex items-center justify-center rounded-xl border border-[#e5e7eb] bg-surface p-4 text-center transition-colors hover:border-primary/20 hover:bg-primary/5"
                >
                  {content}
                </Link>
              );
            }

            return (
              <div
                key={district.slug}
                className="flex items-center justify-center rounded-xl border border-[#e5e7eb] bg-surface p-4 text-center"
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
