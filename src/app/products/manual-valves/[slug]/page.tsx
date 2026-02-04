import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Manual valve product data
const manualValveData: Record<string, {
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
  "globe": {
    name: "Globe Valves",
    description: "Precision flow control valves with linear motion disc for throttling and regulating applications.",
    longDescription: "Our globe valves are designed for precise flow control and throttling applications. The linear motion disc design provides excellent flow regulation capability with good shut-off characteristics. These valves are ideal for applications requiring frequent operation and fine control of flow rates in power plants, refineries, and chemical processing facilities.",
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1200&q=80",
    specifications: ["API 600", "API 602", "ASME B16.34", "BS 1873", "EN 13709"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Petrochemical", "Steam Systems", "Flow Control"],
    products: [
      { name: "Carbon Steel Globe Valve", grade: "ASTM A216-WCB", sizes: "1/2\" - 24\"", standard: "ASTM A216" },
      { name: "Alloy Steel Globe Valve", grade: "ASTM A217-WC6", sizes: "1/2\" - 16\"", standard: "ASTM A217" },
      { name: "Alloy Steel Globe Valve", grade: "ASTM A217-WC9", sizes: "1/2\" - 16\"", standard: "ASTM A217" },
      { name: "Alloy Steel Globe Valve", grade: "ASTM A217-C5", sizes: "1/2\" - 12\"", standard: "ASTM A217" },
      { name: "Alloy Steel Globe Valve", grade: "ASTM A217-C12", sizes: "1/2\" - 12\"", standard: "ASTM A217" },
      { name: "Stainless Steel Globe Valve", grade: "ASTM A351-CF8", sizes: "1/2\" - 16\"", standard: "ASTM A351" },
      { name: "Stainless Steel Globe Valve", grade: "ASTM A351-CF8M", sizes: "1/2\" - 16\"", standard: "ASTM A351" },
      { name: "Stainless Steel Globe Valve", grade: "ASTM A351-CF3", sizes: "1/2\" - 12\"", standard: "ASTM A351" },
      { name: "Stainless Steel Globe Valve", grade: "ASTM A351-CF3M", sizes: "1/2\" - 12\"", standard: "ASTM A351" },
    ],
    features: [
      "Excellent throttling capability",
      "Positive shut-off",
      "Linear flow characteristics",
      "Multiple trim options",
      "Bolted bonnet design",
    ],
  },
  "gate": {
    name: "Gate Valves",
    description: "Full-bore isolation valves for on/off service with minimal pressure drop when fully open.",
    longDescription: "Our gate valves provide reliable isolation service with full-bore flow when fully open. The wedge or parallel slide design minimizes pressure drop and allows for pigging operations. These valves are designed for applications requiring tight shut-off and minimal flow restriction in the open position.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80",
    specifications: ["API 600", "API 602", "API 603", "ASME B16.34", "BS 1414", "EN 1984"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Petrochemical", "Oil & Gas", "Pipeline Isolation"],
    products: [
      { name: "Carbon Steel Gate Valve", grade: "ASTM A216-WCB", sizes: "1/2\" - 48\"", standard: "ASTM A216" },
      { name: "Alloy Steel Gate Valve", grade: "ASTM A217-WC6", sizes: "1/2\" - 24\"", standard: "ASTM A217" },
      { name: "Alloy Steel Gate Valve", grade: "ASTM A217-WC9", sizes: "1/2\" - 24\"", standard: "ASTM A217" },
      { name: "Alloy Steel Gate Valve", grade: "ASTM A217-C5", sizes: "1/2\" - 16\"", standard: "ASTM A217" },
      { name: "Alloy Steel Gate Valve", grade: "ASTM A217-C12", sizes: "1/2\" - 16\"", standard: "ASTM A217" },
      { name: "Stainless Steel Gate Valve", grade: "ASTM A351-CF8", sizes: "1/2\" - 24\"", standard: "ASTM A351" },
      { name: "Stainless Steel Gate Valve", grade: "ASTM A351-CF8M", sizes: "1/2\" - 24\"", standard: "ASTM A351" },
      { name: "Stainless Steel Gate Valve", grade: "ASTM A351-CF3", sizes: "1/2\" - 16\"", standard: "ASTM A351" },
      { name: "Stainless Steel Gate Valve", grade: "ASTM A351-CF3M", sizes: "1/2\" - 16\"", standard: "ASTM A351" },
    ],
    features: [
      "Full-bore design",
      "Minimal pressure drop",
      "Bi-directional sealing",
      "Wedge and parallel slide options",
      "Rising and non-rising stem options",
    ],
  },
  "check": {
    name: "Check Valves",
    description: "Non-return valves preventing backflow in piping systems. Swing, lift, and wafer types available.",
    longDescription: "Our check valves automatically prevent reverse flow in piping systems, protecting equipment from backflow damage. Available in swing, lift, tilting disc, and wafer configurations to suit different applications. These valves operate automatically without external actuation, responding to flow direction changes.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    specifications: ["API 594", "API 600", "ASME B16.34", "BS 1868", "EN 12334"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Pump Discharge", "Compressor Systems", "Water Systems"],
    products: [
      { name: "Carbon Steel Check Valve", grade: "ASTM A216-WCB", sizes: "1/2\" - 48\"", standard: "ASTM A216" },
      { name: "Alloy Steel Check Valve", grade: "ASTM A217-WC6", sizes: "1/2\" - 24\"", standard: "ASTM A217" },
      { name: "Alloy Steel Check Valve", grade: "ASTM A217-WC9", sizes: "1/2\" - 24\"", standard: "ASTM A217" },
      { name: "Alloy Steel Check Valve", grade: "ASTM A217-C5", sizes: "1/2\" - 16\"", standard: "ASTM A217" },
      { name: "Alloy Steel Check Valve", grade: "ASTM A217-C12", sizes: "1/2\" - 16\"", standard: "ASTM A217" },
      { name: "Stainless Steel Check Valve", grade: "ASTM A351-CF8", sizes: "1/2\" - 24\"", standard: "ASTM A351" },
      { name: "Stainless Steel Check Valve", grade: "ASTM A351-CF8M", sizes: "1/2\" - 24\"", standard: "ASTM A351" },
      { name: "Stainless Steel Check Valve", grade: "ASTM A351-CF3", sizes: "1/2\" - 16\"", standard: "ASTM A351" },
      { name: "Stainless Steel Check Valve", grade: "ASTM A351-CF3M", sizes: "1/2\" - 16\"", standard: "ASTM A351" },
    ],
    features: [
      "Automatic backflow prevention",
      "Swing, lift, and wafer types",
      "Low cracking pressure options",
      "Non-slam designs available",
      "No external actuation required",
    ],
  },
  "ball": {
    name: "Ball Valves",
    description: "Quarter-turn valves with spherical closure element for quick shut-off and tight sealing.",
    longDescription: "Our ball valves provide quick, reliable shut-off with quarter-turn operation and tight bubble-tight sealing. The spherical ball design ensures full-bore flow when open and positive sealing when closed. These valves are ideal for applications requiring frequent operation, quick shut-off, and minimal flow restriction.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=80",
    specifications: ["API 6D", "API 608", "ASME B16.34", "BS 5351", "EN 17292"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Oil & Gas", "Process Piping", "Isolation Service"],
    products: [
      { name: "Carbon Steel Ball Valve", grade: "ASTM A216-WCB", sizes: "1/2\" - 36\"", standard: "ASTM A216" },
      { name: "Alloy Steel Ball Valve", grade: "ASTM A217-WC6", sizes: "1/2\" - 16\"", standard: "ASTM A217" },
      { name: "Alloy Steel Ball Valve", grade: "ASTM A217-WC9", sizes: "1/2\" - 16\"", standard: "ASTM A217" },
      { name: "Alloy Steel Ball Valve", grade: "ASTM A217-C5", sizes: "1/2\" - 12\"", standard: "ASTM A217" },
      { name: "Alloy Steel Ball Valve", grade: "ASTM A217-C12", sizes: "1/2\" - 12\"", standard: "ASTM A217" },
      { name: "Stainless Steel Ball Valve", grade: "ASTM A351-CF8", sizes: "1/2\" - 24\"", standard: "ASTM A351" },
      { name: "Stainless Steel Ball Valve", grade: "ASTM A351-CF8M", sizes: "1/2\" - 24\"", standard: "ASTM A351" },
      { name: "Stainless Steel Ball Valve", grade: "ASTM A351-CF3", sizes: "1/2\" - 16\"", standard: "ASTM A351" },
      { name: "Stainless Steel Ball Valve", grade: "ASTM A351-CF3M", sizes: "1/2\" - 16\"", standard: "ASTM A351" },
    ],
    features: [
      "Quarter-turn operation",
      "Full-bore and reduced bore options",
      "Bubble-tight shut-off",
      "Fire-safe design available",
      "Floating and trunnion mounted",
    ],
  },
  "butterfly": {
    name: "Butterfly Valves",
    description: "Compact quarter-turn valves ideal for large diameter applications and flow regulation.",
    longDescription: "Our butterfly valves offer a compact, cost-effective solution for isolation and flow control in large diameter piping. The disc rotates 90° to control flow, providing quick operation with minimal space requirements. These valves are ideal for applications where weight, space, and cost are important considerations.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80",
    specifications: ["API 609", "ASME B16.34", "BS 5155", "EN 593", "MSS SP-67"],
    applications: ["Power Plants", "Water Treatment", "HVAC", "Chemical Plants", "Large Diameter Piping", "Flow Control"],
    products: [
      { name: "Carbon Steel Butterfly Valve", grade: "ASTM A216-WCB", sizes: "2\" - 72\"", standard: "ASTM A216" },
      { name: "Alloy Steel Butterfly Valve", grade: "ASTM A217-WC6", sizes: "2\" - 48\"", standard: "ASTM A217" },
      { name: "Alloy Steel Butterfly Valve", grade: "ASTM A217-WC9", sizes: "2\" - 48\"", standard: "ASTM A217" },
      { name: "Alloy Steel Butterfly Valve", grade: "ASTM A217-C5", sizes: "2\" - 36\"", standard: "ASTM A217" },
      { name: "Alloy Steel Butterfly Valve", grade: "ASTM A217-C12", sizes: "2\" - 36\"", standard: "ASTM A217" },
      { name: "Stainless Steel Butterfly Valve", grade: "ASTM A351-CF8", sizes: "2\" - 60\"", standard: "ASTM A351" },
      { name: "Stainless Steel Butterfly Valve", grade: "ASTM A351-CF8M", sizes: "2\" - 60\"", standard: "ASTM A351" },
      { name: "Stainless Steel Butterfly Valve", grade: "ASTM A351-CF3", sizes: "2\" - 48\"", standard: "ASTM A351" },
      { name: "Stainless Steel Butterfly Valve", grade: "ASTM A351-CF3M", sizes: "2\" - 48\"", standard: "ASTM A351" },
    ],
    features: [
      "Compact and lightweight",
      "Quarter-turn operation",
      "Wafer and lug body styles",
      "Double and triple offset options",
      "Large diameter capability",
    ],
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const valve = manualValveData[slug];
  
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
  return Object.keys(manualValveData).map((slug) => ({ slug }));
}

export default async function ManualValveDetailPage({ params }: Props) {
  const { slug } = await params;
  const valve = manualValveData[slug];
  
  if (!valve) {
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
            <Link href="/products/manual-valves" className="hover:text-white transition-colors">Manual Valves</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">{valve.name}</span>
          </nav>
          
          {/* Category Badge */}
          <span className="inline-block px-3 py-1 bg-navy-800/50 text-steel-400 text-sm font-medium rounded-full mb-4">
            Manual Valves
          </span>
          
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">{valve.name}</h1>
            <p className="text-xl text-navy-200 leading-relaxed">
              {valve.longDescription}
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
                  src={valve.image}
                  alt={valve.name}
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
                      {valve.products.map((product, index) => (
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
                  {valve.features.map((feature, index) => (
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
                    {valve.specifications.map((spec, index) => (
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
                    {valve.applications.map((app, index) => (
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
          <h2 className="text-2xl font-semibold text-navy-900 mb-8">Other Manual Valve Types</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {Object.entries(manualValveData)
              .filter(([key]) => key !== slug)
              .slice(0, 4)
              .map(([key, v]) => (
                <Link key={key} href={`/products/manual-valves/${key}`} className="card group">
                  <div className="aspect-[16/10] relative rounded-lg overflow-hidden mb-4">
                    <Image
                      src={v.image}
                      alt={v.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-xs text-accent-500 font-medium">Manual Valves</span>
                  <h3 className="text-base font-semibold text-navy-900 mb-2 line-clamp-1">{v.name}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{v.description}</p>
                </Link>
              ))}
          </div>
          
          {/* Back to Manual Valves Link */}
          <div className="mt-10 text-center">
            <Link href="/products/manual-valves" className="inline-flex items-center text-navy-900 font-medium hover:text-accent-500 transition-colors">
              <svg className="w-5 h-5 mr-2 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              Back to All Manual Valves
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
