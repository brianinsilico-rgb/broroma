import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Control valve product data
const controlValveData: Record<string, {
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
    pressureClass: string;
    endConnection: string;
    standard: string;
  }[];
  tableNote?: string;
}> = {
  "globe": {
    name: "Globe Control Valves",
    category: "Control Valves",
    description: "Precision flow control valves with linear characteristics for accurate process regulation.",
    longDescription: "Globe control valves for precise flow modulation. Carbon, stainless, and alloy steel. Sizes from 1/2\" to 16\". Linear, equal percentage, and quick-open characteristics. Pneumatic and electric actuation.",
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1200&q=80",
    specifications: ["IEC 60534", "ISA 75.01", "ASME B16.34", "API 609"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Oil & Gas", "Petrochemical", "Water Treatment"],
    products: [
      { name: "Carbon Steel (Cast)", grade: "ASTM A216 WCB", sizes: "1/2\" - 16\"", pressureClass: "150#, 300#, 600#, 900#, 1500#", endConnection: "Flanged (RF/RTJ), BW", standard: "IEC 60534" },
      { name: "Stainless Steel (Cast)", grade: "ASTM A351 CF8/CF8M", sizes: "1/2\" - 12\"", pressureClass: "150#, 300#, 600#, 900#, 1500#", endConnection: "Flanged (RF/RTJ), BW", standard: "IEC 60534" },
      { name: "Alloy Steel (Cast)", grade: "ASTM A217 WC6/WC9/C5", sizes: "1/2\" - 12\"", pressureClass: "150#, 300#, 600#, 900#, 1500#", endConnection: "Flanged (RF/RTJ), BW", standard: "IEC 60534" },
    ],
    tableNote: "Pneumatic and electric actuators available. Smart positioners compatible.",
  },
  "gate": {
    name: "Gate Control Valves",
    category: "Control Valves",
    description: "Automated gate valves for on/off control and isolation in process systems.",
    longDescription: "Automated gate valves for on/off isolation control. Carbon, stainless, and alloy steel. Sizes from 2\" to 36\". Pneumatic and electric actuation with position feedback.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80",
    specifications: ["API 600", "API 603", "ASME B16.34", "IEC 60534"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Oil & Gas", "Petrochemical", "Water Treatment"],
    products: [
      { name: "Carbon Steel (Cast)", grade: "ASTM A216 WCB", sizes: "2\" - 36\"", pressureClass: "150#, 300#, 600#, 900#, 1500#", endConnection: "Flanged (RF/RTJ), BW", standard: "API 600" },
      { name: "Stainless Steel (Cast)", grade: "ASTM A351 CF8/CF8M", sizes: "2\" - 24\"", pressureClass: "150#, 300#, 600#, 900#, 1500#", endConnection: "Flanged (RF/RTJ), BW", standard: "API 603" },
      { name: "Alloy Steel (Cast)", grade: "ASTM A217 WC6/WC9/C5", sizes: "2\" - 24\"", pressureClass: "150#, 300#, 600#, 900#, 1500#", endConnection: "Flanged (RF/RTJ), BW", standard: "API 600" },
    ],
    tableNote: "Pneumatic and electric actuators available. Fail-safe options included.",
  },
  "ball": {
    name: "Ball Control Valves",
    category: "Control Valves",
    description: "Quarter-turn control valves with characterized trim for modulating service.",
    longDescription: "Ball control valves for fast-response modulating control. Carbon, stainless, and alloy steel. Sizes from 1/2\" to 24\". V-port and characterized ball designs. Pneumatic and electric actuation.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=80",
    specifications: ["API 6D", "API 608", "ASME B16.34", "IEC 60534"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Oil & Gas", "Petrochemical", "Water Treatment"],
    products: [
      { name: "Carbon Steel (Cast)", grade: "ASTM A216 WCB", sizes: "1/2\" - 24\"", pressureClass: "150#, 300#, 600#, 900#, 1500#", endConnection: "Flanged (RF/RTJ), BW", standard: "API 6D" },
      { name: "Stainless Steel (Cast)", grade: "ASTM A351 CF8/CF8M", sizes: "1/2\" - 16\"", pressureClass: "150#, 300#, 600#, 900#, 1500#", endConnection: "Flanged (RF/RTJ), BW", standard: "API 608" },
      { name: "Alloy Steel (Cast)", grade: "ASTM A217 WC6/WC9/C5", sizes: "1/2\" - 12\"", pressureClass: "150#, 300#, 600#, 900#, 1500#", endConnection: "Flanged (RF/RTJ), BW", standard: "API 6D" },
    ],
    tableNote: "V-port and characterized ball designs for accurate flow control.",
  },
  "butterfly": {
    name: "Butterfly Control Valves",
    category: "Control Valves",
    description: "High-performance butterfly valves for large flow control applications.",
    longDescription: "Butterfly control valves for large-diameter flow modulation. Carbon and stainless steel. Sizes from 2\" to 60\". Double and triple offset designs. Pneumatic and electric actuation.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80",
    specifications: ["API 609", "ASME B16.34", "EN 593", "IEC 60534"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Oil & Gas", "Petrochemical", "Water Treatment"],
    products: [
      { name: "Carbon Steel", grade: "ASTM A216 WCB", sizes: "2\" - 60\"", pressureClass: "150#, 300#, 600#", endConnection: "Wafer, Lug, Double Flanged", standard: "API 609" },
      { name: "Stainless Steel", grade: "ASTM A351 CF8/CF8M", sizes: "2\" - 48\"", pressureClass: "150#, 300#, 600#", endConnection: "Wafer, Lug, Double Flanged", standard: "API 609" },
      { name: "Alloy Steel", grade: "ASTM A217 WC6/WC9", sizes: "2\" - 36\"", pressureClass: "150#, 300#, 600#", endConnection: "Wafer, Lug, Double Flanged", standard: "API 609" },
    ],
    tableNote: "Double and triple offset designs for tight shut-off and control.",
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const valve = controlValveData[slug];
  
  if (!valve) {
    return {
      title: "Product Not Found",
    };
  }
  
  return {
    title: `${valve.name} | Broroma Industrial Pipes`,
    description: valve.description,
  };
}

export async function generateStaticParams() {
  return Object.keys(controlValveData).map((slug) => ({ slug }));
}

export default async function ControlValveDetailPage({ params }: Props) {
  const { slug } = await params;
  const valve = controlValveData[slug];
  
  if (!valve) {
    notFound();
  }
  
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-navy py-10 sm:py-14 md:py-24">
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs sm:text-sm text-navy-300 mb-3 sm:mb-4 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/products/control-valves" className="hover:text-white transition-colors">Control Valves</Link>
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white truncate max-w-[180px] sm:max-w-none">{valve.name}</span>
          </nav>
          
          {/* Category Badge */}
          <span className="inline-block px-2.5 py-1 sm:px-3 sm:py-1 bg-navy-800/50 text-steel-400 text-xs sm:text-sm font-medium rounded-full mb-3 sm:mb-4">
            {valve.category}
          </span>
          
          <div className="max-w-3xl">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">{valve.name}</h1>
            <p className="text-sm sm:text-base md:text-lg text-navy-200 leading-relaxed">
              {valve.longDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-6 sm:py-8 md:py-14 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 min-w-0">
              {/* Hero Image - reduced height */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden mb-5 sm:mb-7 aspect-[5/2]">
                <Image
                  src={valve.image}
                  alt={valve.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Products Table */}
              <div className="mb-5 sm:mb-7">
                <h2 className="text-xl sm:text-2xl font-semibold text-navy-900 mb-3 sm:mb-4">Available Products</h2>
                <div className="overflow-x-auto -mx-4 sm:mx-0">
                  <div className="inline-block min-w-full align-middle px-4 sm:px-0">
                    <table className="w-full min-w-[700px]">
                      <thead>
                        <tr className="bg-navy-50">
                          <th className="px-3 py-2.5 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-semibold text-navy-900 rounded-l-lg whitespace-nowrap">Material</th>
                          <th className="px-3 py-2.5 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-semibold text-navy-900 whitespace-nowrap">Grade</th>
                          <th className="px-3 py-2.5 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-semibold text-navy-900 whitespace-nowrap">Sizes</th>
                          <th className="px-3 py-2.5 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-semibold text-navy-900 whitespace-nowrap">Pressure Class</th>
                          <th className="px-3 py-2.5 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-semibold text-navy-900 whitespace-nowrap">End Connection</th>
                          <th className="px-3 py-2.5 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-semibold text-navy-900 rounded-r-lg whitespace-nowrap">Standard</th>
                        </tr>
                      </thead>
                      <tbody>
                        {valve.products.map((product, index) => (
                          <tr key={index} className="border-b border-gray-100">
                            <td className="px-3 py-2.5 sm:px-4 sm:py-4 text-xs sm:text-sm text-navy-900 font-medium">{product.name}</td>
                            <td className="px-3 py-2.5 sm:px-4 sm:py-4 text-xs sm:text-sm text-gray-600">{product.grade}</td>
                            <td className="px-3 py-2.5 sm:px-4 sm:py-4 text-xs sm:text-sm text-gray-600">{product.sizes}</td>
                            <td className="px-3 py-2.5 sm:px-4 sm:py-4 text-xs sm:text-sm text-gray-600">{product.pressureClass}</td>
                            <td className="px-3 py-2.5 sm:px-4 sm:py-4 text-xs sm:text-sm text-gray-600">{product.endConnection}</td>
                            <td className="px-3 py-2.5 sm:px-4 sm:py-4">
                              <span className="px-2 py-0.5 sm:py-1 bg-navy-50 text-navy-700 text-xs sm:text-sm rounded-md whitespace-nowrap">
                                {product.standard}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                {valve.tableNote && (
                  <p className="mt-2 sm:mt-3 px-4 sm:px-0 text-xs sm:text-sm text-gray-600 italic">{valve.tableNote}</p>
                )}
              </div>

              {/* Pressure & Temperature Ratings */}
              <div className="mb-5 sm:mb-7 p-3 sm:p-4 bg-blue-50 border border-blue-100 rounded-xl flex gap-2.5 sm:gap-3">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-blue-900 font-medium mb-0.5 sm:mb-1">Pressure & Temperature Ratings</p>
                  <p className="text-xs sm:text-sm text-blue-800">
                    All valves are rated per ASME B16.34 pressure-temperature tables. Pressure class ratings define the maximum allowable working pressure at specified temperatures per material group. For specific pressure-temperature data, contact our team or refer to the product catalog.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 valves-sidebar">
              <div className="lg:sticky lg:top-28 space-y-4 sm:space-y-6">
                {/* Specifications */}
                <div className="card p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-navy-900 mb-3 sm:mb-4">Specifications</h3>
                  <div className="space-y-1.5 sm:space-y-2">
                    {valve.specifications.map((spec, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent-500 rounded-full flex-shrink-0" />
                        <span className="text-sm sm:text-base text-gray-700">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applications */}
                <div className="card p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-navy-900 mb-3 sm:mb-4">Applications</h3>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {valve.applications.map((app, index) => (
                      <span key={index} className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded-full">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Card */}
                <div className="card p-4 sm:p-6 bg-navy-900 border-navy-800">
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-1.5 sm:mb-2">Need This Product?</h3>
                  <p className="text-navy-200 text-xs sm:text-sm mb-3 sm:mb-4">
                    Contact our team for pricing, availability, and technical specifications.
                  </p>
                  <Link href="/contact" className="btn-primary w-full justify-center text-sm sm:text-base py-2.5 sm:py-3">
                    Request Quote
                  </Link>
                </div>

                {/* Downloads */}
                <div className="card p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-navy-900 mb-3 sm:mb-4">Downloads</h3>
                  <a href="#" className="flex items-center gap-2.5 sm:gap-3 text-gray-700 hover:text-navy-900 transition-colors text-sm sm:text-base py-1">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-accent-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Valves Catalog (PDF)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-6 sm:py-8 md:py-14 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-xl sm:text-2xl font-semibold text-navy-900 mb-4 sm:mb-5">Other Valve Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {Object.entries(controlValveData)
              .filter(([key]) => key !== slug)
              .slice(0, 3)
              .map(([key, v]) => (
                <Link key={key} href={`/products/control-valves/${key}`} className="card group p-4 sm:p-6">
                  <div className="aspect-[16/10] relative rounded-lg overflow-hidden mb-3 sm:mb-4">
                    <Image
                      src={v.image}
                      alt={v.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-xs text-accent-500 font-medium">{v.category}</span>
                  <h3 className="text-sm sm:text-base font-semibold text-navy-900 mb-1.5 sm:mb-2 line-clamp-1">{v.name}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm line-clamp-2">{v.description}</p>
                </Link>
              ))}
          </div>
          
          {/* Back to Control Valves Link */}
          <div className="mt-4 sm:mt-6 text-center">
            <Link href="/products/control-valves" className="inline-flex items-center text-sm sm:text-base text-navy-900 font-medium hover:text-accent-500 transition-colors py-2">
              <svg className="w-5 h-5 mr-2 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              Back to All Control Valves
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
