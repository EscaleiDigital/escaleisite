"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/tracking";

const navLinks = [
  { label: "Máquina de Vendas", href: "#maquina-de-vendas" },
  { label: "Planos", href: "#planos" },
  { label: "CRM", href: "#crm" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleCtaClick = () => {
    trackEvent("click_header_cta");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo.png"
            alt="Escalei Digital"
            width={140}
            height={40}
            className="h-9 w-auto"
            priority
          />
        </Link>

        {/* Nav desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#4E555B] hover:text-[#0E261B] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <a
          href={getWhatsAppUrl("header")}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleCtaClick}
          className="hidden lg:inline-flex items-center gap-2 bg-[#0E261B] text-white text-sm font-semibold px-5 py-2.5 rounded hover:bg-[#0C6201] transition-colors duration-200 shrink-0"
        >
          Chame no WhatsApp
        </a>

        {/* Hamburger mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 text-[#0E261B]"
          aria-label="Abrir menu"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-current transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-[#F4F5F3] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-[#4E555B] hover:text-[#0E261B] transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href={getWhatsAppUrl("header_mobile")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => { handleCtaClick(); setMenuOpen(false); }}
            className="inline-flex items-center justify-center bg-[#0E261B] text-white text-sm font-semibold px-5 py-3 rounded hover:bg-[#0C6201] transition-colors mt-2"
          >
            Chame no WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
