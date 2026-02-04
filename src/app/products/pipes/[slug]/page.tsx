import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Pipe product data
const pipeData: Record<string, {
  name: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  specifications: string[];
  applications: string[];
  products: {
    name: string;
    grade: string;
    sizes: string;
    standard: string;
  }[];
  features: string[];
}> = {
  "seamless-carbon-steel": {
    name: "Seamless Carbon Steel / Low Temp Pipes",
    category: "Seamless Pipes",
    description: "High-strength seamless carbon steel and low temperature pipes for structural and high-pressure applications.",
    longDescription: "Our seamless carbon steel pipes are manufactured without weld seams, providing superior strength and pressure resistance. These pipes are ideal for critical applications in oil and gas, power generation, and petrochemical industries where reliability and performance are paramount. Our range includes low temperature service pipes for cryogenic applications.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=80",
    specifications: ["ASTM A106", "ASTM A53", "ASTM A192", "ASTM A333", "EN 10210", "API 5L"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Oil & Gas Pipelines", "Boilers", "Heat Exchangers"],
    products: [
      { name: "Carbon Steel Pipe", grade: "A106B / API 5LB", sizes: "1/2\" - 24\"", standard: "ASTM A106" },
      { name: "Carbon Steel Pipe", grade: "A53B", sizes: "1/2\" - 24\"", standard: "ASTM A53" },
      { name: "Carbon Steel Pipe", grade: "A192 / A179", sizes: "1/2\" - 6\"", standard: "ASTM A192" },
      { name: "Low Temp Pipe", grade: "A333", sizes: "1/2\" - 16\"", standard: "ASTM A333" },
      { name: "Structural Pipe", grade: "S355J2H", sizes: "DN50 - DN600", standard: "EN 10210" },
    ],
    features: [
      "No weld seam for maximum integrity",
      "Superior pressure and temperature resistance",
      "Low temperature service available",
      "Full traceability with mill test certificates",
      "Various surface finishes available",
    ],
  },
  "seamless-stainless-steel": {
    name: "Seamless Stainless Steel Pipes",
    category: "Seamless Pipes",
    description: "Corrosion-resistant seamless stainless steel pipes for demanding environments.",
    longDescription: "Our seamless stainless steel pipes offer exceptional corrosion resistance combined with the structural integrity of seamless construction. Perfect for food and beverage processing, pharmaceutical manufacturing, chemical processing, and marine environments where both cleanliness and durability are essential.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    specifications: ["ASTM A312", "ASTM A269", "ASTM A213", "EN 10216-5", "JIS G3459"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Food & Beverage", "Pharmaceutical", "Marine"],
    products: [
      { name: "Stainless Steel Pipe", grade: "TP304 / 304L", sizes: "1/4\" - 24\"", standard: "ASTM A312" },
      { name: "Stainless Steel Pipe", grade: "TP316 / 316L", sizes: "1/4\" - 24\"", standard: "ASTM A312" },
      { name: "Stainless Steel Pipe", grade: "TP347H / 310S", sizes: "1/2\" - 12\"", standard: "ASTM A312" },
    ],
    features: [
      "Excellent corrosion resistance",
      "Hygienic surface finish options",
      "High temperature capability",
      "Superior weldability",
      "Low maintenance requirements",
    ],
  },
  "seamless-alloy-steel": {
    name: "Seamless Alloy Steel Pipes",
    category: "Seamless Pipes",
    description: "High-performance seamless alloy steel pipes for extreme temperature and pressure service.",
    longDescription: "Our seamless alloy steel pipes are engineered for the most demanding high-temperature and high-pressure applications. These pipes offer exceptional creep resistance, oxidation resistance, and mechanical strength at elevated temperatures, making them ideal for power plants, refineries, and petrochemical facilities.",
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1200&q=80",
    specifications: ["ASTM A335", "ASTM A213", "EN 10216-2", "DIN 17175", "ASTM A691"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Petrochemical", "Boilers", "Superheaters"],
    products: [
      { name: "Alloy Steel Pipe", grade: "A335 P5", sizes: "1/2\" - 24\"", standard: "ASTM A335" },
      { name: "Alloy Steel Pipe", grade: "A335 P9", sizes: "1/2\" - 24\"", standard: "ASTM A335" },
      { name: "Alloy Steel Pipe", grade: "A335 P11", sizes: "1/2\" - 24\"", standard: "ASTM A335" },
      { name: "Alloy Steel Pipe", grade: "A335 P22", sizes: "1/2\" - 24\"", standard: "ASTM A335" },
      { name: "Alloy Steel Pipe", grade: "A335 P91", sizes: "1/2\" - 16\"", standard: "ASTM A335" },
    ],
    features: [
      "Excellent high-temperature creep resistance",
      "Superior oxidation resistance",
      "Precision manufactured dimensions",
      "Heat treatment certified",
      "Third-party inspection available",
    ],
  },
  "seamless-duplex-steel": {
    name: "Seamless Duplex Steel Pipes",
    category: "Seamless Pipes",
    description: "High-strength duplex and super duplex seamless pipes with excellent corrosion resistance.",
    longDescription: "Our seamless duplex and super duplex steel pipes combine high strength with exceptional corrosion resistance. These pipes are ideal for offshore oil and gas, chemical processing, desalination, and other demanding applications where both mechanical strength and corrosion resistance are critical.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80",
    specifications: ["ASTM A790", "ASTM A789", "EN 10216-5", "NORSOK M-650"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Offshore", "Desalination", "Pulp & Paper"],
    products: [
      { name: "Duplex Steel Pipe", grade: "S31803 / 2205", sizes: "1/2\" - 16\"", standard: "ASTM A790" },
      { name: "Super Duplex Pipe", grade: "S32750 / 2507", sizes: "1/2\" - 12\"", standard: "ASTM A790" },
      { name: "Duplex Steel Pipe", grade: "S32205", sizes: "1/2\" - 16\"", standard: "ASTM A790" },
    ],
    features: [
      "High strength and corrosion resistance",
      "Excellent resistance to chloride stress corrosion",
      "Superior pitting and crevice corrosion resistance",
      "Good weldability with proper procedures",
      "Cost-effective alternative to nickel alloys",
    ],
  },
  "welded-carbon-steel": {
    name: "Welded Carbon Steel / Low Temp Pipes (ERW)",
    category: "Welded Pipes (ERW)",
    description: "ERW carbon steel and low temperature pipes for structural, mechanical, and general industrial use.",
    longDescription: "Our Electric Resistance Welded (ERW) carbon steel pipes offer an excellent combination of quality and cost-effectiveness. Manufactured using advanced welding technology, these pipes meet stringent quality standards and are suitable for structural applications, water transmission, mechanical tubing, and general industrial use.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=80",
    specifications: ["ASTM A106", "ASTM A53", "ASTM A192", "ASTM A333", "EN 10210", "API 5L"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Construction", "Water Systems", "Mechanical"],
    products: [
      { name: "Carbon Steel Pipe", grade: "A106B / API 5LB", sizes: "1/2\" - 24\"", standard: "ASTM A106" },
      { name: "Carbon Steel Pipe", grade: "A53B", sizes: "1/2\" - 24\"", standard: "ASTM A53" },
      { name: "Carbon Steel Pipe", grade: "A192 / A179", sizes: "1/2\" - 6\"", standard: "ASTM A192" },
      { name: "Low Temp Pipe", grade: "A333", sizes: "1/2\" - 16\"", standard: "ASTM A333" },
      { name: "Structural Pipe", grade: "S355J2H", sizes: "DN50 - DN600", standard: "EN 10210" },
    ],
    features: [
      "Cost-effective production",
      "Consistent wall thickness",
      "Smooth weld seam",
      "Wide size range available",
      "Various coating options",
    ],
  },
  "welded-stainless-steel": {
    name: "Welded Stainless Steel Pipes (ERW)",
    category: "Welded Pipes (ERW)",
    description: "ERW stainless steel pipes combining corrosion resistance with economical production.",
    longDescription: "Our welded stainless steel pipes offer the corrosion resistance of stainless steel at a more economical price point than seamless alternatives. Using precision ERW technology, these pipes feature smooth internal welds suitable for fluid transport, food processing, and architectural applications.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    specifications: ["ASTM A312", "ASTM A249", "ASTM A358", "EN 10217-7", "JIS G3468"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Food & Beverage", "Pharmaceutical", "Architecture"],
    products: [
      { name: "Stainless Steel Pipe", grade: "TP304 / 304L", sizes: "1/2\" - 48\"", standard: "ASTM A312" },
      { name: "Stainless Steel Pipe", grade: "TP316 / 316L", sizes: "1/2\" - 48\"", standard: "ASTM A312" },
      { name: "Stainless Steel Pipe", grade: "TP347H / 310S", sizes: "1/2\" - 24\"", standard: "ASTM A312" },
    ],
    features: [
      "Excellent corrosion resistance",
      "Smooth internal weld bead",
      "Polished finish options",
      "Cost-effective alternative to seamless",
      "Wide diameter range",
    ],
  },
  "welded-alloy-steel": {
    name: "Welded Alloy Steel Pipes (ERW)",
    category: "Welded Pipes (ERW)",
    description: "Welded alloy steel pipes for high-temperature applications in power and petrochemical industries.",
    longDescription: "Our welded alloy steel pipes provide cost-effective solutions for high-temperature service applications. These pipes are manufactured using advanced welding techniques and undergo rigorous heat treatment to ensure optimal mechanical properties for power generation, refinery, and petrochemical applications.",
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1200&q=80",
    specifications: ["ASTM A335", "ASTM A691", "EN 10217-2", "ASTM A672"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Petrochemical", "Heat Recovery", "Process Piping"],
    products: [
      { name: "Alloy Steel Pipe", grade: "A335 P5", sizes: "2\" - 48\"", standard: "ASTM A335" },
      { name: "Alloy Steel Pipe", grade: "A335 P9", sizes: "2\" - 48\"", standard: "ASTM A335" },
      { name: "Alloy Steel Pipe", grade: "A335 P11", sizes: "2\" - 48\"", standard: "ASTM A335" },
      { name: "Alloy Steel Pipe", grade: "A335 P22", sizes: "2\" - 48\"", standard: "ASTM A335" },
      { name: "Alloy Steel Pipe", grade: "A335 P91", sizes: "2\" - 36\"", standard: "ASTM A335" },
    ],
    features: [
      "High-temperature service capability",
      "Post-weld heat treatment certified",
      "Large diameter capability",
      "100% radiographic testing available",
      "Competitive pricing vs seamless",
    ],
  },
  "welded-duplex-steel": {
    name: "Welded Duplex Steel Pipes (ERW)",
    category: "Welded Pipes (ERW)",
    description: "Welded duplex and super duplex pipes for offshore and chemical processing applications.",
    longDescription: "Our welded duplex and super duplex steel pipes offer an economical alternative to seamless for large diameter applications. These pipes maintain the excellent corrosion resistance and high strength of duplex alloys while providing cost advantages for offshore, chemical processing, and desalination applications.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80",
    specifications: ["ASTM A790", "ASTM A928", "EN 10217-7", "NORSOK M-650"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Offshore", "Desalination", "Oil & Gas"],
    products: [
      { name: "Duplex Steel Pipe", grade: "S31803 / 2205", sizes: "2\" - 48\"", standard: "ASTM A790" },
      { name: "Super Duplex Pipe", grade: "S32750 / 2507", sizes: "2\" - 36\"", standard: "ASTM A790" },
      { name: "Duplex Steel Pipe", grade: "S32205", sizes: "2\" - 48\"", standard: "ASTM A790" },
    ],
    features: [
      "Large diameter capability",
      "Excellent corrosion resistance maintained",
      "Proper solution annealing and quenching",
      "100% radiographic and ultrasonic testing",
      "Cost-effective for large sizes",
    ],
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pipe = pipeData[slug];
  
  if (!pipe) {
    return {
      title: "Product Not Found",
    };
  }
  
  return {
    title: `${pipe.name} | Broroma Industrial Pipes`,
    description: pipe.description,
  };
}

export async function generateStaticParams() {
  return Object.keys(pipeData).map((slug) => ({ slug }));
}

export default async function PipeDetailPage({ params }: Props) {
  const { slug } = await params;
  const pipe = pipeData[slug];
  
  if (!pipe) {
    notFound();
  }
  
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-navy py-20 md:py-28">
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-navy-300 mb-4 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/products/pipes" className="hover:text-white transition-colors">Pipes</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">{pipe.name}</span>
          </nav>
          
          {/* Category Badge */}
          <span className="inline-block px-3 py-1 bg-navy-800/50 text-steel-400 text-sm font-medium rounded-full mb-4">
            {pipe.category}
          </span>
          
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">{pipe.name}</h1>
            <p className="text-xl text-navy-200 leading-relaxed">
              {pipe.longDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Hero Image */}
              <div className="aspect-[16/9] relative rounded-2xl overflow-hidden mb-12">
                <Image
                  src={pipe.image}
                  alt={pipe.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Products Table */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-navy-900 mb-6">Available Products</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-navy-50">
                        <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900 rounded-l-lg">Product</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">Grade</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">Sizes</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900 rounded-r-lg">Standard</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pipe.products.map((product, index) => (
                        <tr key={index} className="border-b border-gray-100">
                          <td className="px-4 py-4 text-navy-900 font-medium">{product.name}</td>
                          <td className="px-4 py-4 text-gray-600">{product.grade}</td>
                          <td className="px-4 py-4 text-gray-600">{product.sizes}</td>
                          <td className="px-4 py-4">
                            <span className="px-2 py-1 bg-navy-50 text-navy-700 text-sm rounded-md">
                              {product.standard}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl font-semibold text-navy-900 mb-6">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {pipe.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                      <svg className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {/* Specifications */}
                <div className="card">
                  <h3 className="text-lg font-semibold text-navy-900 mb-4">Specifications</h3>
                  <div className="space-y-2">
                    {pipe.specifications.map((spec, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent-500 rounded-full" />
                        <span className="text-gray-700">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applications */}
                <div className="card">
                  <h3 className="text-lg font-semibold text-navy-900 mb-4">Applications</h3>
                  <div className="flex flex-wrap gap-2">
                    {pipe.applications.map((app, index) => (
                      <span key={index} className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Card */}
                <div className="card bg-navy-900 border-navy-800">
                  <h3 className="text-lg font-semibold text-white mb-2">Need This Product?</h3>
                  <p className="text-navy-200 text-sm mb-4">
                    Contact our team for pricing, availability, and technical specifications.
                  </p>
                  <Link href="/contact" className="btn-primary w-full justify-center">
                    Request Quote
                  </Link>
                </div>

                {/* Downloads */}
                <div className="card">
                  <h3 className="text-lg font-semibold text-navy-900 mb-4">Downloads</h3>
                  <div className="space-y-3">
                    <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-navy-900 transition-colors">
                      <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Product Catalog (PDF)
                    </a>
                    <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-navy-900 transition-colors">
                      <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Technical Specifications
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-semibold text-navy-900 mb-8">Other Pipe Products</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Object.entries(pipeData)
              .filter(([key]) => key !== slug)
              .slice(0, 4)
              .map(([key, p]) => (
                <Link key={key} href={`/products/pipes/${key}`} className="card group">
                  <div className="aspect-[16/10] relative rounded-lg overflow-hidden mb-4">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-xs text-accent-500 font-medium">{p.category}</span>
                  <h3 className="text-base font-semibold text-navy-900 mb-2 line-clamp-1">{p.name}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{p.description}</p>
                </Link>
              ))}
          </div>
          
          {/* Back to Pipes Link */}
          <div className="mt-10 text-center">
            <Link href="/products/pipes" className="inline-flex items-center text-navy-900 font-medium hover:text-accent-500 transition-colors">
              <svg className="w-5 h-5 mr-2 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              Back to All Pipes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
