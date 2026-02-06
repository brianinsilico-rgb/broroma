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
      {/* Hero — same as Pipes */}
      <section className="gradient-navy py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-navy-300 mb-2 md:mb-4">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/products" className="hover:text-white transition-colors">Products</Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">Accessories</span>
            </nav>
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Accessories & Instruments</h1>
            <p className="text-base md:text-lg text-navy-200 leading-relaxed">
              Actuators, instruments, and accessories for piping and process systems.
            </p>
          </div>
        </div>
      </section>

      {/* Accessories Products Grid */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {accessoryProducts.map((product) => (
              <Link key={product.slug} href={`/products/accessories-instruments/${product.slug}`} className="group">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 flex items-center justify-between">
                    <h3 className="text-white font-semibold text-sm md:text-base">{product.name}</h3>
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — same size as Pipes */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-navy-900 to-navy-950 rounded-2xl p-6 md:p-10 text-center">
            <h2 className="text-lg font-semibold text-white mb-2 md:text-3xl lg:text-4xl md:mb-4">
              Need Accessories for Your Project?
            </h2>
            <p className="text-navy-200 text-sm mb-5 max-w-xl mx-auto md:text-lg md:mb-8 md:max-w-2xl">
              Our team can help you source the right accessories and instruments for your piping system requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn-primary text-sm">Contact Our Experts</Link>
              <Link href="/services" className="btn-outline border-white text-white hover:bg-white hover:text-navy-900 text-sm">View Our Services</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
