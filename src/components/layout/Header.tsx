"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Phone, Shield, ChevronDown, Menu } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import MobileMenu from "./MobileMenu";

const hizmetlerMenu = [
  { href: "/kamera-sistemi-kurulumu", label: "Güvenlik Kamera Kurulumu" },
  { href: "/alarm-sistemi-kurulumu", label: "Alarm Sistemi Kurulumu" },
  { href: "/yangin-alarm-sistemi-kurulumu", label: "Yangın Alarm Sistemi" },
  { href: "/kartli-gecis-ve-turnike-sistemi", label: "Kartlı Geçiş Sistemi" },
];

const cozumlerMenu = [
  { href: "/apartman-site-guvenlik-sistemi", label: "Apartman & Site" },
  { href: "/isyeri-guvenlik-sistemi", label: "İşyeri" },
  { href: "/fabrika-depo-guvenlik-sistemi", label: "Fabrika & Depo" },
];

const navLinks = [
  { href: "/bakim-servis-uzaktan-izleme", label: "Bakım & Servis" },
  { href: "/paketler-ve-fiyatlandirma", label: "Paketler" },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
];

function DropdownMenu({
  label,
  items,
}: {
  label: string;
  items: { href: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors rounded-md hover:bg-gray-50"
      >
        {label}
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-1 z-50">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-surface hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-2"
            : "bg-white py-3"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Mobil: Hamburger (sol) */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileOpen(true)}
              aria-label="Menüyü aç"
            >
              <Menu size={22} />
            </button>

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-primary"
            >
              <Shield size={28} className="text-accent" />
              <span className="text-lg leading-tight">
                Güvenlik<br />
                <span className="text-accent text-sm font-semibold">Servisi</span>
              </span>
            </Link>

            {/* Masaüstü navigasyon */}
            <nav className="hidden lg:flex items-center gap-1">
              <DropdownMenu label="Hizmetler" items={hizmetlerMenu} />
              <DropdownMenu label="Çözümler" items={cozumlerMenu} />
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Telefon butonu */}
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 bg-cta hover:bg-cta-hover text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
            >
              <Phone size={16} />
              <span className="hidden sm:inline">{siteConfig.phone}</span>
              <span className="sm:hidden">Ara</span>
            </a>
          </div>
        </div>
      </header>

      {/* Header yüksekliği kadar boşluk */}
      <div className="h-16" />

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        hizmetlerMenu={hizmetlerMenu}
        cozumlerMenu={cozumlerMenu}
        navLinks={navLinks}
      />
    </>
  );
}
