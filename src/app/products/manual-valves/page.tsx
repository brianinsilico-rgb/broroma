"use client";

import Image from "next/image";
import Link from "next/link";

interface ManualValveProduct {
  slug: string;
  name: string;
  description: string;
  image: string;
}

const manualValveProducts: ManualValveProduct[] = [
  {
    slug: "globe",
    name: "Globe Valves",
    description: "Precision flow control valves with linear motion disc for throttling and regulating applications.",
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=800&q=80",
  },
  {
    slug: "gate",
    name: "Gate Valves",
    description: "Full-bore isolation valves for on/off service with minimal pressure drop when fully open.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
  },
  {
    slug: "check",
    name: "Check Valves",
    description: "Non-return valves preventing backflow in piping systems. Swing, lift, and wafer types available.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    slug: "ball",
    name: "Ball Valves",
    description: "Quarter-turn valves with spherical closure element for quick shut-off and tight sealing.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
  },
  {
    slug: "butterfly",
    name: "Butterfly Valves",
    description: "Compact quarter-turn valves ideal for large diameter applications and flow regulation.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
  },
];

export default function ManualValvesCategoryPage() {
  return (
    <>
      {/* Compact Header */}
      <section className="bg-white border-b border-gray-100 py-6 md:py-8">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <Link href="/" className="hover:text-navy-900 transition-colors">Home</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/products" className="hover:text-navy-900 transition-colors">Products</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-navy-900">Manual Valves</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-bold text-navy-900">Manual Valves</h1>
        </div>
      </section>

      {/* Manual Valve Products Grid */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container-custom">
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl font-semibold text-navy-900 mb-2">Valve Types</h2>
            <p className="text-gray-600 text-sm md:text-base">Choose from our complete range of manual valve types, each designed for specific flow control, isolation, or non-return requirements.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {manualValveProducts.map((product) => (
              <Link key={product.slug} href={`/products/manual-valves/${product.slug}`} className="group">
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

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-navy-900 to-navy-950 rounded-3xl p-8 md:p-12 lg:p-16 text-center">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
              Need Help Selecting the Right Valve?
            </h2>
            <p className="text-navy-200 text-lg mb-8 max-w-2xl mx-auto">
              Our technical experts can help you select the optimal valve type, material, and pressure class for your specific application.
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
