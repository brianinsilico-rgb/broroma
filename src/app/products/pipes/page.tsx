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
            <span className="text-white">Pipes</span>
          </nav>

          {/* Title */}
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">Industrial Pipes</h1>
            <p className="text-xl text-navy-200 leading-relaxed">
              Broroma offers a comprehensive range of industrial pipes manufactured to the highest international standards. 
              From seamless to welded, carbon steel to specialty alloys, we provide solutions for every application.
            </p>
          </div>
        </div>
      </section>

      {/* Pipe Sections */}
      {pipeSections.map((section, sectionIndex) => (
        <section
          key={section.title}
          className={`section-padding ${sectionIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className="container-custom">
            {/* Section Header */}
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold text-navy-900 mb-3">
                {section.title}
              </h2>
              <p className="text-gray-600 max-w-3xl">
                {section.description}
              </p>
            </div>

            {/* Product Cards Grid - 4 columns desktop, 2 tablet, 1 mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {section.products.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/pipes/${product.slug}`}
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
