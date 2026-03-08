"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X, Phone, ChevronDown, Shield } from "lucide-react";
import { siteConfig } from "@/data/site-config";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  hizmetlerMenu: { href: string; label: string }[];
  cozumlerMenu: { href: string; label: string }[];
  navLinks: { href: string; label: string }[];
}

export default function MobileMenu({
  open,
  onClose,
  hizmetlerMenu,
  cozumlerMenu,
  navLinks,
}: MobileMenuProps) {
  const [hizmetlerOpen, setHizmetlerOpen] = useState(false);
  const [cozumlerOpen, setCozumlerOpen] = useState(false);

  // Scroll kilitle
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <>
      {/* Arka plan overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50 lg:hidden"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="fixed top-0 left-0 bottom-0 w-80 max-w-full bg-white z-50 lg:hidden flex flex-col shadow-2xl">
        {/* Üst kısım */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center gap-2 font-bold text-primary"
          >
            <Shield size={24} className="text-accent" />
            <span>Güvenlik Servisi</span>
          </Link>
          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-gray-100 text-gray-600"
            aria-label="Menüyü kapat"
          >
            <X size={20} />
          </button>
        </div>

        {/* Menü içeriği */}
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          {/* Hizmetler accordion */}
          <button
            onClick={() => setHizmetlerOpen(!hizmetlerOpen)}
            className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-gray-800 hover:bg-surface rounded-lg"
          >
            Hizmetler
            <ChevronDown
              size={16}
              className={`transition-transform duration-200 ${hizmetlerOpen ? "rotate-180" : ""}`}
            />
          </button>
          {hizmetlerOpen && (
            <div className="ml-4 mb-2 border-l-2 border-accent/30 pl-3">
              {hizmetlerMenu.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="block py-2.5 text-sm text-gray-700 hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          {/* Çözümler accordion */}
          <button
            onClick={() => setCozumlerOpen(!cozumlerOpen)}
            className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-gray-800 hover:bg-surface rounded-lg"
          >
            Çözümler
            <ChevronDown
              size={16}
              className={`transition-transform duration-200 ${cozumlerOpen ? "rotate-180" : ""}`}
            />
          </button>
          {cozumlerOpen && (
            <div className="ml-4 mb-2 border-l-2 border-accent/30 pl-3">
              {cozumlerMenu.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="block py-2.5 text-sm text-gray-700 hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          {/* Diğer linkler */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="block px-4 py-3 text-sm font-semibold text-gray-800 hover:bg-surface rounded-lg"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Alt kısım — CTA butonları */}
        <div className="p-4 border-t border-gray-100 space-y-3">
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="flex items-center justify-center gap-2 w-full bg-cta hover:bg-cta-hover text-white py-3 rounded-lg font-semibold text-sm transition-colors"
          >
            <Phone size={16} />
            {siteConfig.phone}
          </a>
          <Link
            href="/teklif/kamera"
            onClick={onClose}
            className="flex items-center justify-center w-full border-2 border-primary text-primary py-3 rounded-lg font-semibold text-sm hover:bg-primary hover:text-white transition-colors"
          >
            Ücretsiz Teklif Al
          </Link>
        </div>
      </div>
    </>
  );
}
