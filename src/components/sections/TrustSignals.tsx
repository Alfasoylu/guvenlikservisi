import { Container } from "@/components/ui/Container";
import { BadgeCheck, Clock3, MapPin, ShieldCheck, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface TrustItem {
  icon: LucideIcon;
  label: string;
}

interface TrustSignalsProps {
  items?: TrustItem[];
  title?: string;
  bgClass?: string;
}

const defaultItems: TrustItem[] = [
  { icon: Clock3, label: "Aynı Gün Keşif" },
  { icon: MapPin, label: "Türkiye Geneli Hizmet" },
  { icon: ShieldCheck, label: "Garantili Kurulum" },
  { icon: BadgeCheck, label: "Uzman Teknik Ekip" },
  { icon: Wrench, label: "Ücretsiz Keşif" },
];

export default function TrustSignals({
  items = defaultItems,
  title,
  bgClass = "bg-surface",
}: TrustSignalsProps) {
  return (
    <section className={`py-8 ${bgClass}`}>
      <Container>
        {title ? (
          <h2 className="mb-6 text-center text-lg font-bold text-primary sm:text-xl">
            {title}
          </h2>
        ) : null}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-primary shadow-sm"
            >
              <item.icon size={18} className="shrink-0 text-cta" />
              {item.label}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
