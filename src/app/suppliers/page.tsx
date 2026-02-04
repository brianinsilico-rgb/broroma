"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

interface Supplier {
  name: string;
  country: string;
}

const suppliers: Supplier[] = [
  { name: "Nippon Steel", country: "Japan" },
  { name: "POSCO", country: "South Korea" },
  { name: "Baosteel", country: "China" },
  { name: "ArcelorMittal", country: "Luxembourg" },
  { name: "Tenaris", country: "Argentina" },
  { name: "Vallourec", country: "France" },
  { name: "Sumitomo Metal", country: "Japan" },
  { name: "JFE Steel", country: "Japan" },
  { name: "Hyundai Steel", country: "South Korea" },
  { name: "Tata Steel", country: "India" },
  { name: "Nucor", country: "USA" },
  { name: "SSAB", country: "Sweden" },
  { name: "Voestalpine", country: "Austria" },
  { name: "Salzgitter", country: "Germany" },
  { name: "Severstal", country: "Russia" },
  { name: "Kobe Steel", country: "Japan" },
  { name: "Thyssenkrupp", country: "Germany" },
  { name: "Sandvik", country: "Sweden" },
  { name: "Tubacex", country: "Spain" },
  { name: "DMV Stainless", country: "Netherlands" },
  { name: "United States Steel", country: "USA" },
  { name: "Mannesmann", country: "Germany" },
  { name: "Benteler", country: "Germany" },
  { name: "Dalmine", country: "Italy" },
];

export default function SuppliersPage() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-navy py-16 md:py-24">
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-navy-300 mb-6">
            <Link href="/" className="hover:text-white transition-colors">{t.nav.home}</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">{t.suppliers.hero.title}</span>
          </nav>

          {/* Title */}
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">{t.suppliers.hero.title}</h1>
            <p className="text-xl text-navy-200 leading-relaxed">
              {t.suppliers.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Suppliers Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-navy-900 mb-4">{t.suppliers.grid.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.suppliers.grid.description}
            </p>
          </div>

          {/* Stats Line */}
          <div className="text-center mb-12">
            <p className="text-sm text-gray-500">
              <span className="font-medium">{t.suppliers.stats.partners}</span>
              <span className="mx-3 text-gray-300">|</span>
              <span className="font-medium">{t.suppliers.stats.countries}</span>
              <span className="mx-3 text-gray-300">|</span>
              <span className="font-medium">{t.suppliers.stats.continents}</span>
            </p>
          </div>

          {/* Supplier Cards Grid - 4 columns desktop, 3 tablet, 2 mobile */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {suppliers.map((supplier) => (
              <div
                key={supplier.name}
                className="group px-6 py-8 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 flex flex-col items-center text-center"
              >
                {/* Logo Placeholder */}
                <div className="w-full aspect-[3/2] max-w-[120px] bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-colors">
                  <span className="text-gray-400 text-xs font-medium uppercase tracking-wide">Logo</span>
                </div>
                
                {/* Company Name */}
                <h3 className="text-sm md:text-base font-semibold text-navy-900 mb-1 group-hover:text-accent-500 transition-colors">
                  {supplier.name}
                </h3>
                
                {/* Country */}
                <p className="text-xs md:text-sm text-gray-500">
                  {supplier.country}
                </p>
              </div>
            ))}
          </div>

          {/* More Partners Note */}
          <div className="text-center mt-10">
            <p className="text-sm text-gray-500">
              {t.suppliers.morePartners}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-navy-900 to-navy-950 rounded-3xl p-8 md:p-12 lg:p-16 text-center">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
              {t.suppliers.cta.title}
            </h2>
            <p className="text-navy-200 text-lg mb-8 max-w-2xl mx-auto">
              {t.suppliers.cta.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                {t.suppliers.cta.contact}
              </Link>
              <Link href="/products" className="btn-outline border-white text-white hover:bg-white hover:text-navy-900">
                {t.suppliers.cta.products}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
