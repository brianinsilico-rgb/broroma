import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Control valve product data
const controlValveData: Record<string, {
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
    name: "Globe Control Valves",
    description: "Precision flow control valves with linear characteristics for accurate process regulation.",
    longDescription: "Our globe control valves are designed for precise modulating control of flow, pressure, and temperature in process systems. The linear plug and seat design provides accurate, repeatable control with excellent rangeability. These valves are the industry standard for critical process control applications requiring high accuracy and reliability.",
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1200&q=80",
    specifications: ["IEC 60534", "ISA 75.01", "ASME B16.34", "API 609", "Operation: Pneumatic & Electric actuation available"],
    applications: ["Process Control", "Power Plants", "Refineries", "Chemical Plants", "Flow Regulation", "Pressure Control"],
    products: [
      { name: "Carbon Steel Globe Control Valve", grade: "ASTM A216-WCB", sizes: "1/2\" - 16\"", standard: "ASTM A216" },
      { name: "Alloy Steel Globe Control Valve", grade: "ASTM A217-WC6", sizes: "1/2\" - 12\"", standard: "ASTM A217" },
      { name: "Alloy Steel Globe Control Valve", grade: "ASTM A217-WC9", sizes: "1/2\" - 12\"", standard: "ASTM A217" },
      { name: "Alloy Steel Globe Control Valve", grade: "ASTM A217-C5", sizes: "1/2\" - 8\"", standard: "ASTM A217" },
      { name: "Alloy Steel Globe Control Valve", grade: "ASTM A217-C12", sizes: "1/2\" - 8\"", standard: "ASTM A217" },
      { name: "Stainless Steel Globe Control Valve", grade: "ASTM A351-CF8", sizes: "1/2\" - 12\"", standard: "ASTM A351" },
      { name: "Stainless Steel Globe Control Valve", grade: "ASTM A351-CF8M", sizes: "1/2\" - 12\"", standard: "ASTM A351" },
      { name: "Stainless Steel Globe Control Valve", grade: "ASTM A351-CF3", sizes: "1/2\" - 8\"", standard: "ASTM A351" },
      { name: "Stainless Steel Globe Control Valve", grade: "ASTM A351-CF3M", sizes: "1/2\" - 8\"", standard: "ASTM A351" },
    ],
    features: [
      "Linear, equal percentage, quick-open characteristics",
      "High rangeability (50:1 typical)",
      "Tight shut-off capability",
      "Multiple trim options",
      "Smart positioner compatible",
    ],
  },
  "gate": {
    name: "Gate Control Valves",
    description: "Automated gate valves for on/off control and isolation in process systems.",
    longDescription: "Our gate control valves combine the reliable isolation capabilities of gate valves with automated actuation for remote operation. These valves are ideal for applications requiring automated on/off control with full-bore flow when open. Available with pneumatic or electric actuators for integration into process control systems.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80",
    specifications: ["API 600", "API 603", "ASME B16.34", "IEC 60534", "Operation: Pneumatic & Electric actuation available"],
    applications: ["Process Control", "Power Plants", "Refineries", "Chemical Plants", "Pipeline Isolation", "Batch Processing"],
    products: [
      { name: "Carbon Steel Gate Control Valve", grade: "ASTM A216-WCB", sizes: "2\" - 36\"", standard: "ASTM A216" },
      { name: "Alloy Steel Gate Control Valve", grade: "ASTM A217-WC6", sizes: "2\" - 24\"", standard: "ASTM A217" },
      { name: "Alloy Steel Gate Control Valve", grade: "ASTM A217-WC9", sizes: "2\" - 24\"", standard: "ASTM A217" },
      { name: "Alloy Steel Gate Control Valve", grade: "ASTM A217-C5", sizes: "2\" - 16\"", standard: "ASTM A217" },
      { name: "Alloy Steel Gate Control Valve", grade: "ASTM A217-C12", sizes: "2\" - 16\"", standard: "ASTM A217" },
      { name: "Stainless Steel Gate Control Valve", grade: "ASTM A351-CF8", sizes: "2\" - 24\"", standard: "ASTM A351" },
      { name: "Stainless Steel Gate Control Valve", grade: "ASTM A351-CF8M", sizes: "2\" - 24\"", standard: "ASTM A351" },
      { name: "Stainless Steel Gate Control Valve", grade: "ASTM A351-CF3", sizes: "2\" - 16\"", standard: "ASTM A351" },
      { name: "Stainless Steel Gate Control Valve", grade: "ASTM A351-CF3M", sizes: "2\" - 16\"", standard: "ASTM A351" },
    ],
    features: [
      "Full-bore design",
      "Automated on/off control",
      "Minimal pressure drop",
      "Position feedback available",
      "Fail-safe options",
    ],
  },
  "ball": {
    name: "Ball Control Valves",
    description: "Quarter-turn control valves with characterized trim for modulating service.",
    longDescription: "Our ball control valves offer fast response and tight shut-off with the capability for modulating flow control. Characterized ball or V-port designs provide accurate flow control characteristics, while the quarter-turn operation enables quick response to control signals. Ideal for applications requiring both control and isolation functions.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=80",
    specifications: ["API 6D", "API 608", "ASME B16.34", "IEC 60534", "Operation: Pneumatic & Electric actuation available"],
    applications: ["Process Control", "Power Plants", "Refineries", "Chemical Plants", "Batch Control", "Severe Service"],
    products: [
      { name: "Carbon Steel Ball Control Valve", grade: "ASTM A216-WCB", sizes: "1/2\" - 24\"", standard: "ASTM A216" },
      { name: "Alloy Steel Ball Control Valve", grade: "ASTM A217-WC6", sizes: "1/2\" - 16\"", standard: "ASTM A217" },
      { name: "Alloy Steel Ball Control Valve", grade: "ASTM A217-WC9", sizes: "1/2\" - 16\"", standard: "ASTM A217" },
      { name: "Alloy Steel Ball Control Valve", grade: "ASTM A217-C5", sizes: "1/2\" - 12\"", standard: "ASTM A217" },
      { name: "Alloy Steel Ball Control Valve", grade: "ASTM A217-C12", sizes: "1/2\" - 12\"", standard: "ASTM A217" },
      { name: "Stainless Steel Ball Control Valve", grade: "ASTM A351-CF8", sizes: "1/2\" - 16\"", standard: "ASTM A351" },
      { name: "Stainless Steel Ball Control Valve", grade: "ASTM A351-CF8M", sizes: "1/2\" - 16\"", standard: "ASTM A351" },
      { name: "Stainless Steel Ball Control Valve", grade: "ASTM A351-CF3", sizes: "1/2\" - 12\"", standard: "ASTM A351" },
      { name: "Stainless Steel Ball Control Valve", grade: "ASTM A351-CF3M", sizes: "1/2\" - 12\"", standard: "ASTM A351" },
    ],
    features: [
      "Quarter-turn fast response",
      "V-port and characterized ball options",
      "Tight bubble-tight shut-off",
      "High Cv capacity",
      "Fire-safe design available",
    ],
  },
  "butterfly": {
    name: "Butterfly Control Valves",
    description: "High-performance butterfly valves for large flow control applications.",
    longDescription: "Our butterfly control valves provide cost-effective, high-capacity flow control for large diameter applications. Double and triple offset designs ensure tight shut-off and excellent control characteristics. These valves are ideal for applications where space, weight, and cost are important considerations while maintaining precise control capability.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80",
    specifications: ["API 609", "ASME B16.34", "EN 593", "IEC 60534", "Operation: Pneumatic & Electric actuation available"],
    applications: ["Process Control", "Power Plants", "Water Treatment", "HVAC", "Large Flow Control", "Cooling Systems"],
    products: [
      { name: "Carbon Steel Butterfly Control Valve", grade: "ASTM A216-WCB", sizes: "2\" - 60\"", standard: "ASTM A216" },
      { name: "Alloy Steel Butterfly Control Valve", grade: "ASTM A217-WC6", sizes: "2\" - 48\"", standard: "ASTM A217" },
      { name: "Alloy Steel Butterfly Control Valve", grade: "ASTM A217-WC9", sizes: "2\" - 48\"", standard: "ASTM A217" },
      { name: "Alloy Steel Butterfly Control Valve", grade: "ASTM A217-C5", sizes: "2\" - 36\"", standard: "ASTM A217" },
      { name: "Alloy Steel Butterfly Control Valve", grade: "ASTM A217-C12", sizes: "2\" - 36\"", standard: "ASTM A217" },
      { name: "Stainless Steel Butterfly Control Valve", grade: "ASTM A351-CF8", sizes: "2\" - 48\"", standard: "ASTM A351" },
      { name: "Stainless Steel Butterfly Control Valve", grade: "ASTM A351-CF8M", sizes: "2\" - 48\"", standard: "ASTM A351" },
      { name: "Stainless Steel Butterfly Control Valve", grade: "ASTM A351-CF3", sizes: "2\" - 36\"", standard: "ASTM A351" },
      { name: "Stainless Steel Butterfly Control Valve", grade: "ASTM A351-CF3M", sizes: "2\" - 36\"", standard: "ASTM A351" },
    ],
    features: [
      "Compact and lightweight",
      "Double and triple offset options",
      "High Cv per dollar",
      "Excellent control characteristics",
      "Large diameter capability",
    ],
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
            <Link href="/products/control-valves" className="hover:text-white transition-colors">Control Valves</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">{valve.name}</span>
          </nav>
          
          {/* Category Badge */}
          <span className="inline-block px-3 py-1 bg-navy-800/50 text-steel-400 text-sm font-medium rounded-full mb-4">
            Control Valves
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
                        <div className={`w-2 h-2 rounded-full ${spec.includes('Operation:') ? 'bg-accent-500' : 'bg-accent-500'}`} />
                        <span className={`text-gray-700 ${spec.includes('Operation:') ? 'font-medium text-navy-900' : ''}`}>{spec}</span>
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
          <h2 className="text-2xl font-semibold text-navy-900 mb-8">Other Control Valve Types</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(controlValveData)
              .filter(([key]) => key !== slug)
              .slice(0, 3)
              .map(([key, v]) => (
                <Link key={key} href={`/products/control-valves/${key}`} className="card group">
                  <div className="aspect-[16/10] relative rounded-lg overflow-hidden mb-4">
                    <Image
                      src={v.image}
                      alt={v.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-xs text-accent-500 font-medium">Control Valves</span>
                  <h3 className="text-base font-semibold text-navy-900 mb-2 line-clamp-1">{v.name}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{v.description}</p>
                </Link>
              ))}
          </div>
          
          {/* Back to Control Valves Link */}
          <div className="mt-10 text-center">
            <Link href="/products/control-valves" className="inline-flex items-center text-navy-900 font-medium hover:text-accent-500 transition-colors">
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
