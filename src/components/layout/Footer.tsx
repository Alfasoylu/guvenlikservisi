import Link from "next/link";
import { Shield, Phone, Mail, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { cities } from "@/data/cities";

const hizmetLinks = [
  { href: "/kamera-sistemi-kurulumu", label: "Kamera Sistemi Kurulumu" },
  { href: "/alarm-sistemi-kurulumu", label: "Alarm Sistemi Kurulumu" },
  { href: "/yangin-alarm-sistemi-kurulumu", label: "Yangın Alarm Sistemi" },
  { href: "/kartli-gecis-sistemi-kurulumu", label: "Kartlı Geçiş Sistemi" },
  { href: "/apartman-site-guvenlik-sistemi", label: "Apartman & Site Güvenliği" },
  { href: "/isyeri-guvenlik-sistemi", label: "İşyeri Güvenlik Sistemi" },
  { href: "/fabrika-depo-guvenlik-sistemi", label: "Fabrika & Depo Güvenliği" },
  { href: "/bakim-servis-uzaktan-izleme", label: "Bakım, Servis & Uzaktan İzleme" },
];

const kurumLinks = [
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/paketler-ve-fiyatlandirma", label: "Paketler & Fiyatlandırma" },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="mb-4 inline-flex items-center gap-2 font-bold text-white">
              <Shield size={28} className="text-accent" />
              <span className="text-xl">Güvenlik Servisi</span>
            </Link>

            <p className="mb-6 max-w-sm text-sm leading-7 text-gray-300">
              Kamera sistemi kurulumu, alarm sistemi, yangın alarmı ve kartlı geçiş
              çözümlerinde keşiften montaja kadar profesyonel hizmet sunuyoruz.
            </p>

            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-gray-300 transition-colors hover:text-white"
                >
                  <Phone size={15} className="shrink-0 text-accent" />
                  {siteConfig.phone}
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-gray-300 transition-colors hover:text-white"
                >
                  <Mail size={15} className="shrink-0 text-accent" />
                  {siteConfig.email}
                </a>
              </li>

              <li className="flex items-start gap-2 text-gray-300">
                <MapPin size={15} className="mt-0.5 shrink-0 text-accent" />
                <span>{siteConfig.address}</span>
              </li>
            </ul>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm font-semibold text-white">
                {siteConfig.serviceCityCount} şehirde aktif hizmet
              </div>
              <p className="mt-2 text-xs leading-6 text-gray-300">
                Gerçekten hizmet verdiğimiz bölgeleri gösteriyoruz. Şişirme yok, sahası olan
                şehirler var.
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-base font-bold text-white">Hizmetlerimiz</h3>
            <ul className="space-y-2">
              {hizmetLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    <ArrowRight size={14} className="text-accent" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-bold text-white">Hizmet Bölgelerimiz</h3>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {cities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/${city.slug}`}
                    className="inline-flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    <CheckCircle size={14} className="text-accent" />
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-bold text-white">Kurumsal</h3>
            <ul className="space-y-2">
              {kurumLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-accent/20 bg-accent/10 p-4">
              <div className="text-sm font-semibold text-white">
                Hızlı teklif almak ister misiniz?
              </div>
              <p className="mt-2 text-xs leading-6 text-gray-300">
                Kamera, alarm veya geçiş sistemi projeniz için iletişim sayfasından talep bırakın.
              </p>
              <Link
                href="/iletisim"
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-white"
              >
                İletişim sayfasına git
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-gray-400 sm:px-6 lg:flex-row lg:px-8">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Tüm hakları saklıdır.
          </p>
          <p>
            {siteConfig.serviceCityCount} şehirde profesyonel güvenlik sistemi kurulumu
          </p>
        </div>
      </div>
    </footer>
  );
}
