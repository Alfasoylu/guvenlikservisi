import Link from "next/link";
import { AlertTriangle, ArrowRight, Phone, ShieldCheck, Search } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";

const popularPages = [
  { href: "/kamera-sistemi-kurulumu", label: "Kamera Sistemi Kurulumu" },
  { href: "/alarm-sistemi-kurulumu", label: "Alarm Sistemi Kurulumu" },
  { href: "/yangin-alarm-sistemi-kurulumu", label: "Yangın Alarm Sistemi" },
  { href: "/kartli-gecis-sistemi-kurulumu", label: "Kartlı Geçiş Sistemi Kurulumu" },
  { href: "/apartman-site-guvenlik-sistemi", label: "Apartman & Site Güvenliği" },
  { href: "/bakim-servis-uzaktan-izleme", label: "Bakım, Servis ve Uzaktan İzleme" },
];

export default function NotFound() {
  return (
    <main className="bg-white py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold text-primary">
              <AlertTriangle size={16} className="text-accent" />
              404 • Sayfa Bulunamadı
            </div>

            <h1 className="mx-auto mb-5 max-w-4xl text-3xl font-bold leading-tight text-primary sm:text-4xl md:text-5xl">
              Aradığınız sayfa kaldırılmış, taşınmış veya yanlış yazılmış olabilir.
            </h1>

            <p className="mx-auto max-w-3xl text-base leading-8 text-text-light md:text-lg">
              Trafiği çöpe atmayalım. Kamera sistemi kurulumu, alarm sistemi, kartlı geçiş,
              yangın alarmı ve bakım hizmetleri için ana sayfaya dönebilir veya doğrudan
              teklif alabilirsiniz.
            </p>
          </div>

          <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-gray-200 bg-surface p-6 lg:col-span-2">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-accent">
                <ShieldCheck size={14} />
                Hızlı yönlendirme
              </div>

              <h2 className="mb-3 text-2xl font-bold text-primary">
                Muhtemelen aşağıdakilerden birini arıyorsunuz
              </h2>

              <p className="mb-6 text-sm leading-7 text-text-light">
                En çok ziyaret edilen hizmet sayfalarını aşağıda topladık. Doğrudan ilgili
                sayfaya geçerek vakit kaybetmeden devam edebilirsiniz.
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {popularPages.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-sm"
                  >
                    <span>{item.label}</span>
                    <ArrowRight
                      size={16}
                      className="text-accent transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-primary p-6 text-white">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">
                <Search size={14} />
                Hızlı aksiyon
              </div>

              <h2 className="mb-3 text-2xl font-bold">Yön bulmak yerine teklif alın</h2>

              <p className="mb-6 text-sm leading-7 text-white/80">
                İhtiyacınız net değilse sorun değil. Şehir ve mekan tipini söyleyin, size uygun
                sistemi birlikte belirleyelim.
              </p>

              <div className="flex flex-col gap-3">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-cta px-5 py-3 font-bold text-white transition hover:bg-ctaHover"
                >
                  Teklif Al
                </Link>

                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  Ana Sayfaya Dön
                </Link>

                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-primary transition hover:bg-white/90"
                >
                  <Phone size={16} />
                  {siteConfig.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-surface p-6 md:p-8">
            <h2 className="mb-3 text-xl font-bold text-primary">
              Bu hata neden olmuş olabilir?
            </h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {[
                "Eski bir bağlantıdan gelmiş olabilirsiniz.",
                "URL yanlış yazılmış olabilir.",
                "İlgili sayfa yeni yapıya taşınmış olabilir.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-gray-200 bg-white p-4 text-sm leading-7 text-text-light"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
