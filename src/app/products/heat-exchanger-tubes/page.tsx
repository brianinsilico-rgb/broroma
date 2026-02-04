"use client";

import Image from "next/image";
import Link from "next/link";

interface HeatExchangerTubeProduct {
  slug: string;
  name: string;
  description: string;
  image: string;
}

const heatExchangerTubeProducts: HeatExchangerTubeProduct[] = [
  {
    slug: "carbon-steel",
    name: "Carbon Steel",
    description: "Standard carbon steel heat exchanger tubes for general duty and moderate temperature applications.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
  },
  {
    slug: "stainless-steel",
    name: "Stainless Steel",
    description: "Corrosion-resistant stainless steel tubes for chemical processing and sanitary applications.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    slug: "alloy-steel",
    name: "Alloy Steel",
    description: "High-temperature alloy steel tubes for demanding refinery and petrochemical heat transfer.",
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=800&q=80",
  },
  {
    slug: "duplex-steel",
    name: "Duplex Steel",
    description: "High-strength duplex steel tubes with superior corrosion resistance for aggressive media.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
  },
];

export default function HeatExchangerTubesCategoryPage() {
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
            <span className="text-white">Heat Exchanger Tubes</span>
          </nav>

          {/* Title */}
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">Heat Exchanger Tubes</h1>
            <p className="text-xl text-navy-200 leading-relaxed">
              Broroma supplies a comprehensive range of heat exchanger tubes manufactured to international standards including ASTM, EN, and JIS. 
              Our tubes are engineered for efficient thermal transfer in shell-and-tube heat exchangers, condensers, 
              and other heat transfer equipment across all industries.
            </p>
          </div>
        </div>
      </section>

      {/* Heat Exchanger Tube Products Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Section Header */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-navy-900 mb-3">
              Heat Exchanger Tube Materials
            </h2>
            <p className="text-gray-600 max-w-3xl">
              Choose from our range of heat exchanger tube materials, each selected for optimal thermal conductivity, 
              corrosion resistance, and compatibility with specific process fluids.
            </p>
          </div>

          {/* Product Cards Grid - 3 columns desktop, 2 tablet, 1 mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {heatExchangerTubeProducts.map((product) => (
              <Link
                key={product.slug}
                href={`/products/heat-exchanger-tubes/${product.slug}`}
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
              Need Help Selecting Heat Exchanger Tubes?
            </h2>
            <p className="text-navy-200 text-lg mb-8 max-w-2xl mx-auto">
              Our technical experts can help you select the optimal material grade and specifications for your heat transfer application.
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
