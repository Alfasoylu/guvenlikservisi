import Link from "next/link";
import { Shield, Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site-config";

const hizmetLinks = [
  { href: "/kamera-sistemi-kurulumu", label: "Güvenlik Kamera Kurulumu" },
  { href: "/alarm-sistemi-kurulumu", label: "Alarm Sistemi Kurulumu" },
  { href: "/yangin-alarm-sistemi-kurulumu", label: "Yangın Alarm Sistemi" },
  { href: "/kartli-gecis-ve-turnike-sistemi", label: "Kartlı Geçiş Sistemi" },
  { href: "/apartman-site-guvenlik-sistemi", label: "Apartman & Site" },
  { href: "/isyeri-guvenlik-sistemi", label: "İşyeri Güvenlik Sistemi" },
  { href: "/fabrika-depo-guvenlik-sistemi", label: "Fabrika & Depo" },
  { href: "/bakim-servis-uzaktan-izleme", label: "Bakım & Servis" },
];

const kurumLinks = [
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/paketler-ve-fiyatlandirma", label: "Paketler & Fiyatlar" },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Ana içerik */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Sütun 1: Marka + iletişim */}
          <div>
            <Link href="/" className="flex items-center gap-2 font-bold text-white mb-4">
              <Shield size={28} className="text-accent" />
              <span className="text-xl">Güvenlik Servisi</span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Marmara Bölgesi genelinde profesyonel güvenlik kamera, alarm ve
              yangın alarm sistemi kurulumu. Anahtar teslim montaj + 7/24 destek.
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Phone size={15} className="text-accent flex-shrink-0" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Mail size={15} className="text-accent flex-shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <MapPin size={15} className="text-accent flex-shrink-0 mt-0.5" />
                <span>{siteConfig.address || "İstanbul ve Marmara Bölgesi"}</span>
              </li>
            </ul>
          </div>

          {/* Sütun 2: Hizmetler */}
          <div>
            <h3 className="font-bold text-white text-base mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-2">
              {hizmetLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors hover:underline underline-offset-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sütun 3: Şehirler + Kurumsal */}
          <div>
            <h3 className="font-bold text-white text-base mb-4">Hizmet Bölgelerimiz</h3>
            <ul className="space-y-2 mb-8">
              {siteConfig.cities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/${city.slug}-guvenlik-sistemi-kurulumu`}
                    className="text-sm text-gray-300 hover:text-white transition-colors hover:underline underline-offset-2"
                  >
                    {city.name}
                    <span className="text-gray-500 text-xs ml-1">
                      ({city.districts})
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-bold text-white text-base mb-4">Kurumsal</h3>
            <ul className="space-y-2">
              {kurumLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors hover:underline underline-offset-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Alt bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Güvenlik Servisi. Tüm hakları saklıdır.</p>
          <p>Marmara Bölgesi · Profesyonel Güvenlik Sistemi Kurulumu</p>
        </div>
      </div>
    </footer>
  );
}
