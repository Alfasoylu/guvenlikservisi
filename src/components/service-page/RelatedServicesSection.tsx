import InternalLinkSection, { type InternalLinkItem } from "@/components/InternalLinkSection";

interface RelatedServicesSectionProps {
  cityName: string;
  links: InternalLinkItem[];
}

export default function RelatedServicesSection({
  cityName,
  links,
}: RelatedServicesSectionProps) {
  return (
    <InternalLinkSection
      title={`${cityName} içinde ilgili diğer hizmetler`}
      description={`${cityName} içinde aynı üst niyete hitap eden diğer hizmet sayfalarına geçerek aynı şehirdeki servis ağını keşfedebilirsiniz.`}
      links={links}
    />
  );
}
