"use client";

import Image from "next/image";
import Link from "next/link";

interface FittingProduct {
  slug: string;
  name: string;
  description: string;
  image: string;
}

interface FittingSection {
  title: string;
  description: string;
  products: FittingProduct[];
}

const fittingSections: FittingSection[] = [
  {
    title: "Buttweld Fittings",
    description: "Butt weld pipe fittings designed for permanent welded connections in high-pressure piping systems. Available in carbon steel, stainless steel, and alloy steel materials.",
    products: [
      {
        slug: "buttweld-elbow",
        name: "Elbow (90° / 45°)",
        description: "Buttweld elbows for changing pipe direction. Available in long radius and short radius configurations.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      },
      {
        slug: "buttweld-tee",
        name: "Tee",
        description: "Buttweld tees for creating branch connections. Available in equal and reducing configurations.",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
      },
      {
        slug: "buttweld-reducer",
        name: "Reducer (Concentric / Eccentric)",
        description: "Buttweld reducers for transitioning between pipe sizes. Concentric and eccentric options available.",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
      },
      {
        slug: "buttweld-cap",
        name: "Cap",
        description: "Buttweld caps for sealing pipe ends. Used for system termination and pressure testing.",
        image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=800&q=80",
      },
      {
        slug: "buttweld-stub-end",
        name: "Stub End",
        description: "Stub ends for use with lap joint flanges. Economical option for stainless and alloy systems.",
        image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&q=80",
      },
      {
        slug: "buttweld-cross",
        name: "Cross",
        description: "Buttweld crosses for four-way pipe connections. Available in equal and reducing configurations.",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
      },
    ],
  },
  {
    title: "Forged Fittings",
    description: "Socket weld and threaded forged fittings for small-bore, high-pressure piping applications. Manufactured from solid bar stock for superior strength.",
    products: [
      {
        slug: "forged-coupling",
        name: "Coupling",
        description: "Forged couplings for connecting two pipes. Available in full coupling and half coupling configurations.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      },
      {
        slug: "forged-union",
        name: "Union",
        description: "Forged unions for easy pipe disconnection. Three-piece design allows for maintenance access.",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
      },
      {
        slug: "forged-elbow",
        name: "Elbow",
        description: "Forged elbows for changing direction in small-bore piping. Available in 90° and 45° configurations.",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
      },
      {
        slug: "forged-tee",
        name: "Tee",
        description: "Forged tees for branch connections in small-bore systems. Equal and reducing options available.",
        image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=800&q=80",
      },
      {
        slug: "forged-cap",
        name: "Cap",
        description: "Forged caps for closing pipe ends. Socket weld and threaded connections available.",
        image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&q=80",
      },
      {
        slug: "forged-bushing",
        name: "Bushing",
        description: "Forged bushings for reducing pipe size. Hex head and flush designs available.",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
      },
    ],
  },
];

export default function FittingsCategoryPage() {
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
            <span className="text-navy-900">Fittings</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-bold text-navy-900">Pipe Fittings</h1>
        </div>
      </section>

      {/* Fitting Sections */}
      {fittingSections.map((section, sectionIndex) => (
        <section
          key={section.title}
          className={`py-8 md:py-12 ${sectionIndex % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
        >
          <div className="container-custom">
            <div className="mb-6">
              <h2 className="text-xl md:text-2xl font-semibold text-navy-900 mb-2">{section.title}</h2>
              <p className="text-gray-600 text-sm md:text-base">{section.description}</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {section.products.map((product) => (
                <Link key={product.slug} href={`/products/fittings/${product.slug}`} className="group">
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
      ))}

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-navy-900 to-navy-950 rounded-3xl p-8 md:p-12 lg:p-16 text-center">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
              Need Help Choosing the Right Fitting?
            </h2>
            <p className="text-navy-200 text-lg mb-8 max-w-2xl mx-auto">
              Our technical experts are ready to help you select the optimal fitting for your specific application and requirements.
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
