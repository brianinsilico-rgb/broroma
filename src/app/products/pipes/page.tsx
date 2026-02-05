"use client";

import Image from "next/image";
import Link from "next/link";

interface PipeProduct {
  slug: string;
  name: string;
  description: string;
  image: string;
}

interface PipeSection {
  title: string;
  description: string;
  products: PipeProduct[];
}

const pipeSections: PipeSection[] = [
  {
    title: "Seamless Pipes",
    description: "Hot-rolled and cold-drawn seamless pipes offering superior strength and pressure resistance without weld seams.",
    products: [
      {
        slug: "seamless-carbon-steel",
        name: "Carbon Steel / Low Temp",
        description: "High-strength seamless carbon steel and low temperature pipes for structural and high-pressure applications.",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
      },
      {
        slug: "seamless-stainless-steel",
        name: "Stainless Steel",
        description: "Corrosion-resistant seamless stainless steel pipes for demanding environments.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      },
      {
        slug: "seamless-alloy-steel",
        name: "Alloy Steel",
        description: "High-performance seamless alloy steel pipes for extreme temperature and pressure service.",
        image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=800&q=80",
      },
      {
        slug: "seamless-duplex-steel",
        name: "Duplex Steel",
        description: "High-strength duplex and super duplex seamless pipes with excellent corrosion resistance.",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
      },
    ],
  },
  {
    title: "Welded Pipes (ERW)",
    description: "Electric Resistance Welded pipes offering excellent quality and cost-effectiveness for various applications.",
    products: [
      {
        slug: "welded-carbon-steel",
        name: "Carbon Steel / Low Temp",
        description: "ERW carbon steel and low temperature pipes for structural, mechanical, and general industrial use.",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
      },
      {
        slug: "welded-stainless-steel",
        name: "Stainless Steel",
        description: "ERW stainless steel pipes combining corrosion resistance with economical production.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      },
      {
        slug: "welded-alloy-steel",
        name: "Alloy Steel",
        description: "Welded alloy steel pipes for high-temperature applications in power and petrochemical industries.",
        image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=800&q=80",
      },
      {
        slug: "welded-duplex-steel",
        name: "Duplex Steel",
        description: "Welded duplex and super duplex pipes for offshore and chemical processing applications.",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
      },
    ],
  },
];

export default function PipesCategoryPage() {
  return (
    <>
      {/* Compact Header */}
      <section className="bg-white border-b border-gray-100 py-6 md:py-8">
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <Link href="/" className="hover:text-navy-900 transition-colors">Home</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/products" className="hover:text-navy-900 transition-colors">Products</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-navy-900">Pipes</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-bold text-navy-900">Industrial Pipes</h1>
        </div>
      </section>

      {/* Pipe Sections */}
      {pipeSections.map((section, sectionIndex) => (
        <section
          key={section.title}
          className={`py-8 md:py-12 ${sectionIndex % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
        >
          <div className="container-custom">
            {/* Section Header */}
            <div className="mb-6">
              <h2 className="text-xl md:text-2xl font-semibold text-navy-900 mb-2">
                {section.title}
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                {section.description}
              </p>
            </div>

            {/* Product Cards Grid - Overlay Style */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {section.products.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/pipes/${product.slug}`}
                  className="group"
                >
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
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
      ))}

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-navy-900 to-navy-950 rounded-3xl p-8 md:p-12 lg:p-16 text-center">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
              Need Help Choosing the Right Pipe?
            </h2>
            <p className="text-navy-200 text-lg mb-8 max-w-2xl mx-auto">
              Our technical experts are ready to help you select the optimal pipe for your specific application and requirements.
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
