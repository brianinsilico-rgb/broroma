"use client";

import Image from "next/image";
import Link from "next/link";

interface ControlValveProduct {
  slug: string;
  name: string;
  description: string;
  image: string;
}

const controlValveProducts: ControlValveProduct[] = [
  {
    slug: "globe",
    name: "Globe Control Valves",
    description: "Precision flow control valves with linear characteristics for accurate process regulation.",
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=800&q=80",
  },
  {
    slug: "gate",
    name: "Gate Control Valves",
    description: "Automated gate valves for on/off control and isolation in process systems.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
  },
  {
    slug: "ball",
    name: "Ball Control Valves",
    description: "Quarter-turn control valves with characterized trim for modulating service.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
  },
  {
    slug: "butterfly",
    name: "Butterfly Control Valves",
    description: "High-performance butterfly valves for large flow control applications.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
  },
];

export default function ControlValvesCategoryPage() {
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
              <span className="text-white">Control Valves</span>
            </nav>
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Control Valves</h1>
            <p className="text-base md:text-lg text-navy-200 leading-relaxed">
              Automated control valves for precise process flow regulation.
            </p>
          </div>
        </div>
      </section>

      {/* Control Valve Products Grid */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {controlValveProducts.map((product) => (
              <Link key={product.slug} href={`/products/control-valves/${product.slug}`} className="group">
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
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-white mb-2">
              Need Help Selecting Control Valves?
            </h2>
            <p className="text-navy-200 text-sm md:text-base mb-5 max-w-xl mx-auto">
              Our technical experts can help you select and size the optimal control valve for your process control requirements.
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
