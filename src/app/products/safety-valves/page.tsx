"use client";

import Image from "next/image";
import Link from "next/link";

interface SafetyValveProduct {
  slug: string;
  name: string;
  description: string;
  image: string;
}

const safetyValveProducts: SafetyValveProduct[] = [
  {
    slug: "globe",
    name: "Globe Safety Valves",
    description: "Pressure relief valves with precise set pressure control for steam and gas applications.",
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=800&q=80",
  },
  {
    slug: "gate",
    name: "Gate Safety Valves",
    description: "High-capacity pressure relief valves for liquid service and large volume discharge.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
  },
  {
    slug: "ball",
    name: "Ball Safety Valves",
    description: "Quick-opening safety valves with full-bore relief capacity for critical applications.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
  },
  {
    slug: "butterfly",
    name: "Butterfly Safety Valves",
    description: "Large diameter pressure relief valves for low-pressure, high-volume applications.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
  },
];

export default function SafetyValvesCategoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-navy pt-11 pb-14 md:pt-14 md:pb-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-navy-300 mb-2">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/products" className="hover:text-white transition-colors">Products</Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">Safety Valves</span>
            </nav>
            <h1 className="text-white text-4xl md:text-5xl font-bold mt-3 mb-4">Safety Valves</h1>
            <p className="text-base md:text-lg text-navy-200 leading-relaxed">
              Certified safety and relief valves for pressure protection.
            </p>
          </div>
        </div>
      </section>

      {/* Safety Valve Products Grid */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {safetyValveProducts.map((product) => (
              <Link key={product.slug} href={`/products/safety-valves/${product.slug}`} className="group">
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
              Need Help Selecting Safety Valves?
            </h2>
            <p className="text-navy-200 text-sm mb-5 max-w-xl mx-auto md:text-lg md:mb-8 md:max-w-2xl">
              Our technical experts can help you select and size the optimal safety valve for your pressure protection requirements.
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
