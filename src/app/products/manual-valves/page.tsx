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
            <span className="text-white">Manual Valves</span>
          </nav>

          {/* Title */}
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">Manual Valves</h1>
            <p className="text-xl text-navy-200 leading-relaxed">
              Broroma supplies a comprehensive range of manual valves manufactured to international standards including API, ASME, and EN. 
              Our valves are available in carbon steel, alloy steel, and stainless steel materials to meet 
              the demanding requirements of power generation, refinery, and chemical processing applications.
            </p>
          </div>
        </div>
      </section>

      {/* Manual Valve Products Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Section Header */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-navy-900 mb-3">
              Valve Types
            </h2>
            <p className="text-gray-600 max-w-3xl">
              Choose from our complete range of manual valve types, each designed for specific flow control, 
              isolation, or non-return requirements. All valves are available in multiple materials and pressure classes.
            </p>
          </div>

          {/* Product Cards Grid - 3 columns desktop, 2 tablet, 1 mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {manualValveProducts.map((product) => (
              <Link
                key={product.slug}
                href={`/products/manual-valves/${product.slug}`}
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
                    <h3 className="text-lg font-semibold text-navy-900 mb-2 group-hover:text-accent-500 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm flex-grow">
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
