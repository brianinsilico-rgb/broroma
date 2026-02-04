"use client";

import Image from "next/image";
import Link from "next/link";

interface AccessoryProduct {
  slug: string;
  name: string;
  description: string;
  image: string;
}

const accessoryProducts: AccessoryProduct[] = [
  {
    slug: "electric-actuator",
    name: "Electric Actuator",
    description: "Motor-driven actuators for automated valve control with precise positioning capability.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
  },
  {
    slug: "pneumatic-actuator",
    name: "Pneumatic Actuator",
    description: "Air-operated actuators for fast, reliable valve automation in process systems.",
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=800&q=80",
  },
  {
    slug: "steam-trap",
    name: "Steam Trap",
    description: "Automatic condensate removal devices for efficient steam system operation.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
  },
  {
    slug: "positioner",
    name: "Positioner",
    description: "Valve positioners for accurate control valve positioning and feedback.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
  },
  {
    slug: "level-gauge",
    name: "Level Gauge",
    description: "Visual and electronic level indicators for tanks and vessels.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    slug: "transmitter",
    name: "Transmitter",
    description: "Pressure, temperature, and flow transmitters for process measurement.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
  },
  {
    slug: "tube-fitting",
    name: "Tube Fitting",
    description: "Compression and flare fittings for instrumentation tubing connections.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
  },
  {
    slug: "expansion-joint",
    name: "Expansion Joint",
    description: "Flexible connectors for thermal expansion and vibration absorption.",
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=800&q=80",
  },
  {
    slug: "pressure-gauge",
    name: "Pressure Gauge",
    description: "Mechanical and digital pressure indicators for process monitoring.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
  },
  {
    slug: "temperature-gauge",
    name: "Temperature Gauge",
    description: "Bimetallic and filled system temperature indicators for local display.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    slug: "strainer",
    name: "Strainer",
    description: "Y-strainers and basket strainers for pipeline debris removal.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
  },
  {
    slug: "gaskets",
    name: "Gaskets",
    description: "Flange gaskets in spiral wound, ring joint, and sheet materials.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
  },
];

export default function AccessoriesCategoryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-navy py-16 md:py-24">
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-navy-300 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">Accessories</span>
          </nav>

          {/* Title */}
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">Accessories</h1>
            <p className="text-xl text-navy-200 leading-relaxed">
              Broroma supplies a comprehensive range of piping accessories and process instrumentation to complement 
              our valve and piping products. From actuators and positioners to gauges and gaskets, we provide 
              everything needed for complete piping system solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Accessories Products Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Section Header */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-navy-900 mb-3">
              Product Range
            </h2>
            <p className="text-gray-600 max-w-3xl">
              Browse our complete range of accessories and instruments. All products are sourced from 
              reputable manufacturers and available with full documentation and certification.
            </p>
          </div>

          {/* Product Cards Grid - 4 columns desktop, 3 tablet, 2 mobile */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {accessoryProducts.map((product) => (
              <Link
                key={product.slug}
                href={`/products/accessories-instruments/${product.slug}`}
                className="group"
              >
                <div className="card h-full hover:border-navy-200 hover:shadow-elevated transition-all duration-300 flex flex-col">
                  {/* Product Image */}
                  <div className="aspect-[4/3] relative rounded-lg overflow-hidden mb-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-navy-900/10 to-transparent" />
                  </div>

                  {/* Product Content */}
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-base md:text-lg font-semibold text-navy-900 mb-2 group-hover:text-accent-500 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm flex-grow line-clamp-2">
                      {product.description}
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <span className="inline-flex items-center text-accent-500 text-sm font-medium group-hover:text-accent-600 transition-colors">
                        View Details
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

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-navy-900 to-navy-950 rounded-3xl p-8 md:p-12 lg:p-16 text-center">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
              Need Accessories for Your Project?
            </h2>
            <p className="text-navy-200 text-lg mb-8 max-w-2xl mx-auto">
              Our team can help you source the right accessories and instruments for your piping system requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Contact Our Experts
              </Link>
              <Link href="/services" className="btn-outline border-white text-white hover:bg-white hover:text-navy-900">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
