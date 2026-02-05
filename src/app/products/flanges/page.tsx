"use client";

import Image from "next/image";
import Link from "next/link";

interface FlangeProduct {
  slug: string;
  name: string;
  description: string;
  image: string;
}

const flangeProducts: FlangeProduct[] = [
  {
    slug: "weld-neck",
    name: "Weld Neck",
    description: "High-integrity flanges with tapered hub for excellent stress distribution. Ideal for high-pressure and high-temperature applications.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
  },
  {
    slug: "slip-on",
    name: "Slip-On",
    description: "Cost-effective flanges that slide over the pipe end. Easy alignment and welding for low-pressure applications.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    slug: "blind",
    name: "Blind",
    description: "Solid flanges for closing pipe ends, valve openings, or pressure vessel connections. Essential for system isolation.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
  },
  {
    slug: "socket-weld",
    name: "Socket Weld",
    description: "Flanges with a socket for pipe insertion and fillet welding. Ideal for small-bore, high-pressure piping systems.",
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=800&q=80",
  },
  {
    slug: "threaded",
    name: "Threaded",
    description: "Flanges with internal threads for non-welded connections. Suitable for low-pressure applications and easy assembly.",
    image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&q=80",
  },
  {
    slug: "lap-joint",
    name: "Lap Joint",
    description: "Two-piece assembly with stub end and backing flange. Economical solution for stainless and alloy piping systems.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
  },
];

export default function FlangesCategoryPage() {
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
            <span className="text-navy-900">Flanges</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-bold text-navy-900">Industrial Flanges</h1>
        </div>
      </section>

      {/* Flange Products Grid */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container-custom">
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl font-semibold text-navy-900 mb-2">Flange Types</h2>
            <p className="text-gray-600 text-sm md:text-base">Choose from our complete range of flange types, each designed for specific connection requirements and pressure ratings.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {flangeProducts.map((product) => (
              <Link key={product.slug} href={`/products/flanges/${product.slug}`} className="group">
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
              Need Help Selecting the Right Flange?
            </h2>
            <p className="text-navy-200 text-lg mb-8 max-w-2xl mx-auto">
              Our technical experts can help you select the optimal flange type, material, and pressure class for your specific application.
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
