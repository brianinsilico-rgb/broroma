"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

interface Supplier {
  name: string;
  country: string;
  logo?: string;
  /** multiply = blend white with container; screen = blend black with container; black = invert + multiply (show logo as black) */
  logoBlend?: "multiply" | "screen" | "black";
}

const suppliers: Supplier[] = [
  { name: "ARI Armaturen", country: "Germany", logo: "/logos/ari.svg" },
  { name: "ArcelorMittal", country: "Luxembourg", logo: "/logos/arcelormittal.svg" },
  { name: "AUMA", country: "Germany", logo: "/logos/auma.svg" },
  { name: "Benkan", country: "Japan", logo: "/logos/benkan.svg" },
  { name: "Benteler", country: "Germany", logo: "/logos/benteler.svg" },
  { name: "Bonetti", country: "Italy", logo: "/logos/bonetti.png", logoBlend: "multiply" },
  { name: "Böhmer", country: "Germany", logo: "/logos/bohmer.png" },
  { name: "Emerson", country: "USA", logo: "/logos/emerson.svg" },
  { name: "Flowserve", country: "USA", logo: "/logos/flowserve.svg" },
  { name: "JFE Steel", country: "Japan", logo: "/logos/jfe.svg" },
  { name: "KSB", country: "Germany", logo: "/logos/ksb.png" },
  { name: "Leser", country: "Germany", logo: "/logos/leser.svg" },
  { name: "Neway", country: "China", logo: "/logos/neway.png" },
  { name: "Nippon Steel", country: "Japan", logo: "/logos/nippon-steel.svg" },
  { name: "PK Valve", country: "Thailand", logo: "/logos/pkvalve.svg" },
  { name: "Powell Valves", country: "USA", logo: "/logos/powell-valves.svg" },
  { name: "Rotork", country: "UK", logo: "/logos/rotork.svg" },
  { name: "Samson", country: "Germany", logo: "/logos/samson.png" },
  { name: "SeAH Steel", country: "South Korea", logo: "/logos/seah-steel.svg" },
  { name: "Tenaris", country: "Argentina", logo: "/logos/tenaris.svg" },
  { name: "Tubos Reunidos", country: "Spain", logo: "/logos/tubos-reunidos.svg" },
  { name: "ULMA", country: "Spain", logo: "/logos/ulma.svg" },
  { name: "Yoshitake", country: "Japan", logo: "/logos/yoshitake.png" },
];

export default function SuppliersPage() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-navy py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-navy-800/50 text-steel-400 text-sm font-medium rounded-full mb-6">
              {t.suppliers.hero.label}
            </span>
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{t.suppliers.hero.title}</h1>
            <p className="text-base md:text-lg text-navy-200 leading-relaxed">
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
                {/* Logo */}
                <div className="w-full aspect-[3/2] max-w-[120px] bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-colors overflow-hidden p-2">
                  {supplier.logo ? (
                    <Image
                      src={supplier.logo}
                      alt={supplier.name}
                      width={100}
                      height={60}
                      className={`object-contain w-full h-full ${supplier.logo?.includes("jfe") ? "brightness-0" : ""} ${supplier.logoBlend === "multiply" ? "mix-blend-multiply" : ""} ${supplier.logoBlend === "screen" ? "mix-blend-screen" : ""} ${supplier.logoBlend === "black" ? "invert contrast-[4] mix-blend-multiply" : ""}`}
                    />
                  ) : (
                    <span className="text-gray-400 text-xs font-medium uppercase tracking-wide">Logo</span>
                  )}
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
            {/* + Many More card - last in grid */}
            <Link
              href="/contact"
              className="group flex flex-col items-center justify-center text-center px-6 py-8 bg-navy-900 border border-navy-800 rounded-xl hover:bg-navy-800 transition-all duration-300 min-h-[200px]"
            >
              <h3 className="text-lg font-semibold text-white mb-2">{t.suppliers.moreCard.heading}</h3>
              <p className="text-sm text-navy-200 mb-3">{t.suppliers.moreCard.subtext}</p>
              <span className="text-sm font-medium text-accent-400 group-hover:text-accent-300 transition-colors">
                {t.suppliers.moreCard.contact}
              </span>
            </Link>
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
