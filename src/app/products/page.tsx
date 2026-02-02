import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore Broroma's comprehensive range of industrial pipes including steel pipes, carbon pipes, stainless steel pipes, and specialty alloy pipes.",
};

const categories = [
  {
    slug: "steel-pipes",
    name: "Steel Pipes",
    description: "High-strength carbon steel pipes for structural, mechanical, and industrial applications. Available in various grades and specifications.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    specifications: ["ASTM A53", "ASTM A106", "API 5L"],
    applications: ["Construction", "Oil & Gas", "Water Systems"],
  },
  {
    slug: "carbon-pipes",
    name: "Carbon Pipes",
    description: "Premium carbon steel pipes engineered for high-temperature and high-pressure applications in demanding environments.",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    specifications: ["ASTM A333", "ASTM A335", "ASTM A691"],
    applications: ["Power Plants", "Refineries", "Chemical Plants"],
  },
  {
    slug: "stainless-steel",
    name: "Stainless Steel Pipes",
    description: "Corrosion-resistant stainless steel pipes for food processing, pharmaceutical, and marine applications.",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80",
    specifications: ["304/304L", "316/316L", "321", "347"],
    applications: ["Food & Beverage", "Pharmaceutical", "Marine"],
  },
  {
    slug: "alloy-pipes",
    name: "Alloy Pipes",
    description: "Specialty alloy pipes including nickel alloys, duplex, and super duplex for extreme service conditions.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    specifications: ["Inconel", "Monel", "Hastelloy", "Duplex"],
    applications: ["Aerospace", "Chemical Processing", "Nuclear"],
  },
  {
    slug: "seamless-pipes",
    name: "Seamless Pipes",
    description: "Hot-rolled and cold-drawn seamless pipes offering superior strength and pressure resistance without weld joints.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
    specifications: ["ASTM A179", "ASTM A192", "ASTM A213"],
    applications: ["Boilers", "Heat Exchangers", "Pressure Vessels"],
  },
  {
    slug: "welded-pipes",
    name: "Welded Pipes",
    description: "ERW and SAW welded pipes for large-diameter applications, available in standard and custom lengths.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    specifications: ["API 5L PSL1/PSL2", "ASTM A252", "EN 10219"],
    applications: ["Pipelines", "Piling", "Structural"],
  },
];

const features = [
  {
    title: "Mill Test Certificates",
    description: "All products come with complete documentation",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Custom Specifications",
    description: "We source pipes to your exact requirements",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    title: "Quality Guaranteed",
    description: "Rigorous inspection at every stage",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Global Sourcing",
    description: "Access to certified mills worldwide",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-navy py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-navy-800/50 text-steel-400 text-sm font-medium rounded-full mb-6">
              Our Products
            </span>
            <h1 className="text-white mb-6">
              Industrial Pipe Solutions
            </h1>
            <p className="text-xl text-navy-200 leading-relaxed">
              Comprehensive range of high-quality pipes for every industrial application, 
              sourced from certified manufacturers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-navy-50 rounded-lg flex items-center justify-center text-navy-900 flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <p className="font-semibold text-navy-900 text-sm">{feature.title}</p>
                  <p className="text-gray-500 text-xs">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">Product Categories</span>
            <h2 className="text-navy-900 mt-2 mb-4">
              Explore Our Range
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From standard specifications to custom requirements, we offer a comprehensive 
              selection of pipes to meet your project needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/products/${category.slug}`}
                className="group"
              >
                <div className="card h-full hover:border-navy-200">
                  <div className="aspect-[16/10] relative rounded-lg overflow-hidden mb-6">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                    <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">
                      {category.name}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium text-navy-900 mb-2">Specifications:</p>
                    <div className="flex flex-wrap gap-2">
                      {category.specifications.map((spec, i) => (
                        <span key={i} className="px-2 py-1 bg-navy-50 text-navy-700 text-xs rounded-md">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-navy-900 mb-2">Applications:</p>
                    <div className="flex flex-wrap gap-2">
                      {category.applications.map((app, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <span className="inline-flex items-center text-accent-500 font-medium group-hover:text-accent-600 transition-colors">
                      View Products
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Sourcing CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">Custom Sourcing</span>
              <h2 className="text-navy-900 mt-2 mb-6">
                Can&apos;t Find What You Need?
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Our global network of certified suppliers means we can source virtually 
                any pipe specification. Whether you need uncommon grades, custom dimensions, 
                or specialized coatings, our team will find the right solution.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Custom sizes and wall thicknesses",
                  "Specialized grades and alloys",
                  "Special coatings and treatments",
                  "Small batch or bulk orders",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-accent-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary">
                Request Custom Quote
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                  alt="Custom sourcing"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-navy-900 to-navy-950 rounded-3xl p-8 md:p-16 text-center">
            <h2 className="text-white mb-4">
              Need Help Selecting the Right Pipe?
            </h2>
            <p className="text-navy-200 text-lg mb-8 max-w-2xl mx-auto">
              Our technical experts are ready to help you choose the optimal product 
              for your specific application and requirements.
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
