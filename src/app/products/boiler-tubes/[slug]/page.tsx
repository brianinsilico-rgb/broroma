import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Boiler tube product data
const boilerTubeData: Record<string, {
  name: string;
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
  "carbon-steel": {
    name: "Carbon Steel Boiler Tubes",
    description: "Standard carbon steel boiler tubes for economizer, water wall, and general boiler applications.",
    longDescription: "Our carbon steel boiler tubes are manufactured to the highest international standards for use in economizers, water walls, and general boiler applications. These tubes offer excellent thermal conductivity and mechanical strength at moderate temperatures, making them the cost-effective choice for most boiler sections operating below 450°C.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=80",
    specifications: ["ASTM A178", "ASTM A179", "ASTM A192", "ASTM A432", "EN 10025", "JIS G3461"],
    applications: ["Power Plants", "Boilers", "Steam Generation", "Economizers", "Water Walls", "Industrial Heating"],
    products: [
      { name: "Carbon Steel Boiler Tube", grade: "A178", sizes: "1\" - 5\" OD", standard: "ASTM A178" },
      { name: "Carbon Steel Boiler Tube", grade: "A179", sizes: "1/2\" - 3\" OD", standard: "ASTM A179" },
      { name: "Carbon Steel Boiler Tube", grade: "A192", sizes: "1/2\" - 5\" OD", standard: "ASTM A192" },
      { name: "Carbon Steel Boiler Tube", grade: "A432 Gr.1", sizes: "1\" - 4\" OD", standard: "ASTM A432" },
      { name: "Weathering Steel Tube", grade: "Corten A", sizes: "1\" - 6\" OD", standard: "EN 10025" },
      { name: "Carbon Steel Boiler Tube", grade: "STB340", sizes: "1/2\" - 4\" OD", standard: "JIS G3461" },
    ],
    features: [
      "Excellent thermal conductivity",
      "Cost-effective solution",
      "Wide range of sizes available",
      "Seamless and welded options",
      "Full material certification",
    ],
  },
  "stainless-steel": {
    name: "Stainless Steel Boiler Tubes",
    description: "Corrosion-resistant stainless steel tubes for superheater and reheater applications.",
    longDescription: "Our stainless steel boiler tubes provide superior corrosion resistance and high-temperature oxidation resistance for demanding superheater and reheater applications. These tubes maintain their mechanical properties at elevated temperatures and resist both fireside and steamside corrosion in aggressive boiler environments.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    specifications: ["ASTM A213", "ASTM A249", "EN 10216-5", "JIS G3463"],
    applications: ["Power Plants", "Boilers", "Superheaters", "Reheaters", "Steam Generation", "High-Temperature Service"],
    products: [
      { name: "Stainless Steel Boiler Tube", grade: "A213 TP304", sizes: "1/2\" - 4\" OD", standard: "ASTM A213" },
      { name: "Stainless Steel Boiler Tube", grade: "A213 TP316", sizes: "1/2\" - 4\" OD", standard: "ASTM A213" },
      { name: "Stainless Steel Boiler Tube", grade: "A213 TP347H", sizes: "1/2\" - 4\" OD", standard: "ASTM A213" },
    ],
    features: [
      "Excellent corrosion resistance",
      "High-temperature oxidation resistance",
      "Superior creep strength",
      "Seamless construction",
      "Suitable for superheater service",
    ],
  },
  "alloy-steel": {
    name: "Alloy Steel Boiler Tubes",
    description: "High-temperature alloy steel tubes for superheater, reheater, and high-pressure applications.",
    longDescription: "Our alloy steel boiler tubes are engineered for the most demanding high-temperature and high-pressure boiler applications. Chrome-molybdenum and chrome-molybdenum-vanadium grades provide exceptional creep resistance, oxidation resistance, and long-term stability at temperatures up to 650°C in superheaters and reheaters.",
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1200&q=80",
    specifications: ["ASTM A213", "ASTM A335", "EN 10216-2", "GB/T 5310"],
    applications: ["Power Plants", "Boilers", "Superheaters", "Reheaters", "High-Pressure Steam", "USC/A-USC Boilers"],
    products: [
      { name: "Alloy Steel Boiler Tube", grade: "T11", sizes: "1\" - 4\" OD", standard: "ASTM A213" },
      { name: "Alloy Steel Boiler Tube", grade: "T22", sizes: "1\" - 4\" OD", standard: "ASTM A213" },
      { name: "Alloy Steel Boiler Tube", grade: "T91", sizes: "1\" - 3\" OD", standard: "ASTM A213" },
      { name: "Alloy Steel Boiler Tube", grade: "09CrCuSb", sizes: "1\" - 4\" OD", standard: "GB/T" },
    ],
    features: [
      "Excellent high-temperature strength",
      "Superior creep resistance",
      "Oxidation and corrosion resistant",
      "Suitable for USC applications",
      "Heat treatment certified",
    ],
  },
  "duplex-steel": {
    name: "Duplex Steel Boiler Tubes",
    description: "High-strength duplex steel tubes with excellent corrosion resistance for demanding environments.",
    longDescription: "Our duplex and super duplex steel boiler tubes combine high mechanical strength with exceptional corrosion resistance. These tubes are ideal for applications where both properties are critical, such as in waste-to-energy plants, biomass boilers, and other installations with aggressive flue gas compositions.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80",
    specifications: ["ASTM A789", "ASTM A790", "EN 10216-5", "NORSOK M-650"],
    applications: ["Power Plants", "Boilers", "Waste-to-Energy", "Biomass Boilers", "Corrosive Environments", "Marine Applications"],
    products: [
      { name: "Duplex Steel Boiler Tube", grade: "S31803 / 2205", sizes: "1/2\" - 4\" OD", standard: "ASTM A789" },
      { name: "Super Duplex Boiler Tube", grade: "S32750 / 2507", sizes: "1/2\" - 3\" OD", standard: "ASTM A789" },
      { name: "Duplex Steel Boiler Tube", grade: "S32205", sizes: "1/2\" - 4\" OD", standard: "ASTM A789" },
    ],
    features: [
      "High strength and ductility",
      "Excellent chloride corrosion resistance",
      "Superior pitting resistance",
      "Good weldability",
      "Cost-effective vs nickel alloys",
    ],
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tube = boilerTubeData[slug];
  
  if (!tube) {
    return {
      title: "Product Not Found",
    };
  }
  
  return {
    title: `${tube.name} | Broroma Industrial Pipes`,
    description: tube.description,
  };
}

export async function generateStaticParams() {
  return Object.keys(boilerTubeData).map((slug) => ({ slug }));
}

export default async function BoilerTubeDetailPage({ params }: Props) {
  const { slug } = await params;
  const tube = boilerTubeData[slug];
  
  if (!tube) {
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
            <Link href="/products/boiler-tubes" className="hover:text-white transition-colors">Boiler Tubes</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">{tube.name}</span>
          </nav>
          
          {/* Category Badge */}
          <span className="inline-block px-3 py-1 bg-navy-800/50 text-steel-400 text-sm font-medium rounded-full mb-4">
            Boiler Tubes
          </span>
          
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">{tube.name}</h1>
            <p className="text-xl text-navy-200 leading-relaxed">
              {tube.longDescription}
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
                  src={tube.image}
                  alt={tube.name}
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
                      {tube.products.map((product, index) => (
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
                  {tube.features.map((feature, index) => (
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
                    {tube.specifications.map((spec, index) => (
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
                    {tube.applications.map((app, index) => (
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
          <h2 className="text-2xl font-semibold text-navy-900 mb-8">Other Boiler Tube Materials</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(boilerTubeData)
              .filter(([key]) => key !== slug)
              .slice(0, 3)
              .map(([key, t]) => (
                <Link key={key} href={`/products/boiler-tubes/${key}`} className="card group">
                  <div className="aspect-[16/10] relative rounded-lg overflow-hidden mb-4">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-xs text-accent-500 font-medium">Boiler Tubes</span>
                  <h3 className="text-base font-semibold text-navy-900 mb-2 line-clamp-1">{t.name}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{t.description}</p>
                </Link>
              ))}
          </div>
          
          {/* Back to Boiler Tubes Link */}
          <div className="mt-10 text-center">
            <Link href="/products/boiler-tubes" className="inline-flex items-center text-navy-900 font-medium hover:text-accent-500 transition-colors">
              <svg className="w-5 h-5 mr-2 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              Back to All Boiler Tubes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
