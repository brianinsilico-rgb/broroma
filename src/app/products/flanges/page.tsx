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
    description: "Tapered hub design for maximum strength at the weld joint. Best for high-pressure and high-temperature service.",
    image: "/flanges/weld-neck.png",
  },
  {
    slug: "slip-on",
    name: "Slip-On",
    description: "Slides over the pipe for easy alignment and welding. Cost-effective choice for low-pressure applications.",
    image: "/flanges/slip-on.png",
  },
  {
    slug: "blind",
    name: "Blind",
    description: "Closes off the end of a piping system. Used for testing, inspection, or future expansion.",
    image: "/flanges/blind.png",
  },
  {
    slug: "socket-weld",
    name: "Socket Weld",
    description: "Pipe inserts into the socket before welding. Ideal for small-diameter, high-pressure lines.",
    image: "/flanges/socket-weld.png",
  },
  {
    slug: "threaded",
    name: "Threaded",
    description: "Screws onto threaded pipe — no welding required. Best for low-pressure, non-critical systems.",
    image: "/flanges/threaded.png",
  },
  {
    slug: "lap-joint",
    name: "Lap Joint",
    description: "Two-piece design allows easy bolt alignment and rotation. Good for systems requiring frequent disassembly.",
    image: "/flanges/lap-joint.png",
  },
];

export default function FlangesCategoryPage() {
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
              <span className="text-white">Flanges</span>
            </nav>
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Flanges</h1>
            <p className="text-base md:text-lg text-navy-200 leading-relaxed">
              Precision flanges for secure pipe connections and pressure ratings.
            </p>
          </div>
        </div>
      </section>

      {/* Flange Products Grid */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {flangeProducts.map((product) => (
              <Link key={product.slug} href={`/products/flanges/${product.slug}`} className="group">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-navy-200 transition-all duration-300">
                  <Image src={product.image} alt={product.name} fill className="object-contain p-4 md:p-6 group-hover:scale-[1.02] transition-transform duration-300" />
                  <div className="absolute inset-x-0 bottom-0 p-3 md:p-4 bg-gradient-to-t from-navy-900/95 to-transparent flex items-center justify-between">
                    <h3 className="text-white font-semibold text-sm md:text-base">{product.name}</h3>
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-white/90 group-hover:translate-x-1 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              Need Help Selecting the Right Flange?
            </h2>
            <p className="text-navy-200 text-sm md:text-base mb-5 max-w-xl mx-auto">
              Our technical experts can help you select the optimal flange type, material, and pressure class for your specific application.
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
