import InternalLinkSection, { type InternalLinkItem } from "@/components/InternalLinkSection";

interface OtherCitiesSectionProps {
  serviceName: string;
  links: InternalLinkItem[];
}

export default function OtherCitiesSection({ serviceName, links }: OtherCitiesSectionProps) {
  return (
    <InternalLinkSection
      title={`${serviceName} hizmetinin diğer şehir sayfaları`}
      description={`${serviceName} hizmetini sunduğumuz diğer şehirleri aşağıdan inceleyebilirsiniz.`}
      links={links}
    />
  );
}
