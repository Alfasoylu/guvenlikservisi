import { Container } from "@/components/ui/Container";

interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon?: string;
}

interface ProcessSectionProps {
  title?: string;
  steps?: ProcessStep[];
  bgClass?: string;
}

const defaultSteps: ProcessStep[] = [
  {
    step: 1,
    icon: "🔍",
    title: "Ücretsiz Keşif",
    description: "Yerinize gelip ihtiyaç analizi yapıyoruz",
  },
  {
    step: 2,
    icon: "📋",
    title: "Teklif Sunumu",
    description: "24 saat içinde detaylı teklif hazırlıyoruz",
  },
  {
    step: 3,
    icon: "🔧",
    title: "Profesyonel Montaj",
    description: "Uzman ekibimiz kurulumu gerçekleştiriyor",
  },
  {
    step: 4,
    icon: "✅",
    title: "Teslim + Eğitim",
    description: "Sistemi devreye alıp sizi eğitiyoruz",
  },
];

export default function ProcessSection({
  title = "Nasıl Çalışıyoruz?",
  steps = defaultSteps,
  bgClass = "bg-surface",
}: ProcessSectionProps) {
  return (
    <section className={`py-16 md:py-24 ${bgClass}`}>
      <Container>
        <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center mb-12">
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Bağlantı çizgisi — masaüstü */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-accent/20 z-0" />

          {steps.map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center">
              {/* Adım numarası */}
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg">
                {step.icon || step.step}
              </div>
              <h3 className="font-bold text-primary text-base mb-2">{step.title}</h3>
              <p className="text-text-light text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
