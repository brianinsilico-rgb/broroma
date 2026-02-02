"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "@/components/ui/Logo";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navigation = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.products, href: "/products" },
    { name: t.nav.services, href: "/services" },
    { name: t.nav.contact, href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-navy-700 hover:text-navy-900 font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Language Toggle & CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageToggle />
            <Link href="/contact" className="btn-primary">
              {t.nav.getQuote}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-navy-900 z-50 relative"
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
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop - tap anywhere on the darkened page area to close */}
          <div 
            className="fixed inset-0 top-20 bg-black/50 md:hidden z-40 cursor-pointer"
            onClick={() => setMobileMenuOpen(false)}
            onTouchEnd={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
            }}
          />
          
          {/* Menu Panel */}
          <div className="fixed left-0 right-0 top-20 bg-white md:hidden z-50 shadow-elevated border-b border-gray-100">
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
                <div className="pt-4 border-t border-gray-100">
                  <LanguageToggle />
                </div>
                <Link
                  href="/contact"
                  className="btn-primary text-center mt-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.getQuote}
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
