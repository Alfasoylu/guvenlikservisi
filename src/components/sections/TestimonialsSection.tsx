import { Container } from "@/components/ui/Container";

interface Testimonial {
  text: string;
  name: string;
  role: string;
  rating?: number;
}

interface TestimonialsSectionProps {
  title?: string;
  testimonials: Testimonial[];
  bgClass?: string;
}

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-yellow-400 text-lg">★</span>
      ))}
    </div>
  );
}

export default function TestimonialsSection({
  title = "Müşterilerimiz Ne Diyor?",
  testimonials,
  bgClass = "bg-surface",
}: TestimonialsSectionProps) {
  return (
    <section className={`py-16 md:py-24 ${bgClass}`}>
      <Container>
        <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center mb-10">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 flex flex-col"
            >
              <Stars count={t.rating || 5} />
              <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-4 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-semibold text-primary text-sm">{t.name}</p>
                <p className="text-text-light text-xs mt-0.5">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-400 mt-6">
          * Yorumlar gerçek müşterilerden alınmıştır. Gizlilik için soyadlar kısaltılmıştır.
        </p>
      </Container>
    </section>
  );
}
