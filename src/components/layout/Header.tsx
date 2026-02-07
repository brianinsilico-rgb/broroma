"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Logo from "@/components/ui/Logo";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuPanelRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const { t } = useLanguage();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close menu when user taps/clicks outside the menu panel (document-level listener)
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleOutside = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (
        menuPanelRef.current?.contains(target) ||
        menuButtonRef.current?.contains(target)
      ) {
        return;
      }
      setMobileMenuOpen(false);
    };

    // Use capture phase and both events so it works on touch and mouse
    document.addEventListener("mousedown", handleOutside, true);
    document.addEventListener("touchstart", handleOutside, true);
    return () => {
      document.removeEventListener("mousedown", handleOutside, true);
      document.removeEventListener("touchstart", handleOutside, true);
    };
  }, [mobileMenuOpen]);

  const navigation = [
    { name: t.nav.about, href: "/about" },
    { name: t.nav.products, href: "/products" },
    { name: t.nav.suppliers, href: "/suppliers" },
    { name: t.nav.services, href: "/services" },
    { name: t.nav.contact, href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center -mt-1">
            <Logo className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-navy-700 hover:text-navy-900 font-medium transition-colors duration-[0.2s] ease-out"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Language Toggle & CTA Button - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageToggle />
            <Link href="/quote" className="btn-primary">
              {t.nav.getQuote}
            </Link>
          </div>

          {/* Mobile/Tablet: Language Toggle + Hamburger Menu */}
          <div className="flex lg:hidden items-center gap-1">
            <LanguageToggle />
            <button
              ref={menuButtonRef}
              type="button"
              className="flex items-center justify-center w-10 h-10 text-navy-900 z-50 relative"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - close via document listener when tapping outside */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-20 lg:hidden z-40"
          onKeyDown={(e) => e.key === "Escape" && setMobileMenuOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          {/* Backdrop (visual only; close is handled by document listener) */}
          <div className="absolute inset-0 bg-black/50 z-0" aria-hidden />
          
          {/* Menu Panel - ref used to detect "outside" taps */}
          <div
            ref={menuPanelRef}
            className="relative bg-white shadow-elevated border-b border-gray-100 z-10"
          >
            <div className="container-custom py-6">
              <div className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-navy-700 hover:text-navy-900 font-medium py-2 transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-100"></div>
                <Link
                  href="/quote"
                  className="btn-primary text-center mt-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.getQuote}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
