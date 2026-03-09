import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site-config";

interface Stat {
  value: string;
  label: string;
  icon?: string;
}

interface StatsBarProps {
  stats?: Stat[];
  bgClass?: string;
}

const defaultStats: Stat[] = [
  {
    icon: "🏗️",
    value: siteConfig.stats.projects,
    label: "Tamamlanan Proje",
  },
  {
    icon: "📅",
    value: siteConfig.stats.experience,
    label: "Sektör Deneyimi",
  },
  {
    icon: "😊",
    value: siteConfig.stats.satisfaction,
    label: "Müşteri Memnuniyeti",
  },
  {
    icon: "🏙️",
    value: `${siteConfig.serviceCityCount}+`,
    label: "Hizmet Verilen Şehir",
  },
];

export default function StatsBar({
  stats = defaultStats,
  bgClass = "bg-accent",
}: StatsBarProps) {
  return (
    <section className={`${bgClass} py-10`}>
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">

          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center text-white"
            >
              {stat.icon && (
                <div className="text-3xl mb-2 opacity-90">
                  {stat.icon}
                </div>
              )}

              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                {stat.value}
              </div>

              <div className="text-white/80 text-xs sm:text-sm mt-1">
                {stat.label}
              </div>
            </div>
          ))}

        </div>
      </Container>
    </section>
  );
}
