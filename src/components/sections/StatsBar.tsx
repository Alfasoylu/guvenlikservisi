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
  { icon: "🏗️", value: siteConfig.stats.projects, label: "Tamamlanan Proje" },
  { icon: "📅", value: siteConfig.stats.experience, label: "Sektör Deneyimi" },
  { icon: "😊", value: siteConfig.stats.satisfaction, label: "Müşteri Memnuniyeti" },
  { icon: "🏙️", value: siteConfig.stats.cities, label: "Hizmet Bölgesi" },
];

export default function StatsBar({
  stats = defaultStats,
  bgClass = "bg-accent",
}: StatsBarProps) {
  return (
    <div className={`${bgClass} py-8`}>
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="text-center text-white">
              {stat.icon && <div className="text-2xl mb-1">{stat.icon}</div>}
              <div className="text-2xl sm:text-3xl font-bold">{stat.value}</div>
              <div className="text-white/80 text-xs sm:text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
