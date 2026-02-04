"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function ProductsPage() {
  const { t } = useLanguage();

  const categories = [
    {
      slug: "pipes",
      name: "Pipes",
      description: "High-quality steel, carbon, stainless, and alloy pipes for industrial applications.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
    },
    {
      slug: "fittings",
      name: "Fittings",
      description: "Complete range of pipe fittings including elbows, tees, reducers, and couplings.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    },
    {
      slug: "flanges",
      name: "Flanges",
      description: "Precision-engineered flanges for secure pipe connections and system integrity.",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    },
    {
      slug: "boiler-tubes",
      name: "Boiler Tubes",
      description: "Heat-resistant tubes designed for high-temperature boiler applications.",
      image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&q=80",
    },
    {
      slug: "heat-exchanger-tubes",
      name: "Heat Exchanger Tubes",
      description: "Efficient thermal transfer tubes for heat exchanger systems.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    },
    {
      slug: "manual-valves",
      name: "Manual Valves",
      description: "Reliable manual control valves for flow regulation and isolation.",
      image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=800&q=80",
    },
    {
      slug: "safety-valves",
      name: "Safety Valves",
      description: "Certified safety and relief valves for pressure protection systems.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    },
    {
      slug: "control-valves",
      name: "Control Valves",
      description: "Automated control valves for precise flow, pressure, and temperature regulation.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    },
    {
      slug: "accessories-instruments",
      name: "Accessories",
      description: "Supporting equipment including gauges, strainers, and instrumentation.",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    },
  ];

  const features = [
    {
      title: t.products.features.mtc.title,
      description: t.products.features.mtc.description,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: t.products.features.custom.title,
      description: t.products.features.custom.description,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
    },
    {
      title: t.products.features.quality.title,
      description: t.products.features.quality.description,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: t.products.features.global.title,
      description: t.products.features.global.description,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-navy py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-navy-800/50 text-steel-400 text-sm font-medium rounded-full mb-6">
              {t.products.hero.label}
            </span>
            <h1 className="text-white mb-6">
              {t.products.hero.title}
            </h1>
            <p className="text-xl text-navy-200 leading-relaxed">
              {t.products.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-navy-50 rounded-lg flex items-center justify-center text-navy-900 flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <p className="font-semibold text-navy-900 text-sm">{feature.title}</p>
                  <p className="text-gray-500 text-xs">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">{t.products.categories.label}</span>
            <h2 className="text-navy-900 mt-2 mb-4">
              {t.products.categories.title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.products.categories.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/products/${category.slug}`}
                className="group"
              >
                <div className="card h-full hover:border-navy-200 flex flex-col">
                  <div className="aspect-[4/3] relative rounded-lg overflow-hidden mb-4">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-navy-900/20 to-transparent" />
                  </div>
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-base md:text-lg font-semibold text-navy-900 mb-2 group-hover:text-accent-500 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 text-sm flex-grow line-clamp-2">{category.description}</p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <span className="inline-flex items-center text-accent-500 text-sm font-medium group-hover:text-accent-600 transition-colors">
                        {t.products.categories.viewProducts}
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Sourcing CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">{t.products.customSourcing.label}</span>
              <h2 className="text-navy-900 mt-2 mb-6">
                {t.products.customSourcing.title}
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                {t.products.customSourcing.description}
              </p>
              <ul className="space-y-3 mb-8">
                {t.products.customSourcing.features.map((item: string, index: number) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-accent-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary">
                {t.products.customSourcing.cta}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                  alt="Custom sourcing"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-navy-900 to-navy-950 rounded-3xl p-8 md:p-16 text-center">
            <h2 className="text-white mb-4">
              {t.products.cta.title}
            </h2>
            <p className="text-navy-200 text-lg mb-8 max-w-2xl mx-auto">
              {t.products.cta.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                {t.products.cta.contact}
              </Link>
              <Link href="/services" className="btn-outline border-white text-white hover:bg-white hover:text-navy-900">
                {t.products.cta.services}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
