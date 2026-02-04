import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Flange product data
const flangeData: Record<string, {
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
  "weld-neck": {
    name: "Weld Neck Flanges",
    description: "High-integrity flanges with tapered hub for excellent stress distribution. Ideal for high-pressure and high-temperature applications.",
    longDescription: "Our weld neck flanges feature a long tapered hub that provides excellent stress distribution and reinforcement at the flange-to-pipe weld joint. The bore of the flange matches the pipe bore, ensuring smooth flow and minimizing turbulence. These flanges are the preferred choice for critical, high-pressure, and high-temperature applications in power generation, petrochemical, and offshore industries.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80",
    specifications: ["ASME B16.5", "ASME B16.47", "EN 1092-1", "JIS B2220", "BS 1560"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Petrochemical", "Offshore", "High-Pressure Systems"],
    products: [
      { name: "Carbon Steel WN Flange", grade: "ASTM A105", sizes: "1/2\" - 24\"", standard: "ASME B16.5" },
      { name: "Carbon Steel WN Flange", grade: "ASTM A105", sizes: "26\" - 60\"", standard: "ASME B16.47" },
      { name: "Stainless Steel WN Flange", grade: "ASTM A182 F304/304L", sizes: "1/2\" - 24\"", standard: "ASME B16.5" },
      { name: "Stainless Steel WN Flange", grade: "ASTM A182 F316/316L", sizes: "1/2\" - 24\"", standard: "ASME B16.5" },
      { name: "Alloy Steel WN Flange", grade: "ASTM A182 F5/F9/F11/F22/F91", sizes: "1/2\" - 24\"", standard: "ASME B16.5" },
      { name: "Duplex Steel WN Flange", grade: "ASTM A182 F51/F53/F55", sizes: "1/2\" - 24\"", standard: "ASME B16.5" },
    ],
    features: [
      "Tapered hub for stress distribution",
      "Matching bore with pipe ID",
      "Superior fatigue resistance",
      "Ideal for critical service",
      "Classes 150 to 2500 available",
    ],
  },
  "slip-on": {
    name: "Slip-On Flanges",
    description: "Cost-effective flanges that slide over the pipe end. Easy alignment and welding for low-pressure applications.",
    longDescription: "Our slip-on flanges offer a cost-effective solution for piping connections where high pressure is not a concern. The flange slides over the pipe end and is welded both inside and outside, providing adequate strength for moderate service conditions. Easy to align and economical to manufacture, these flanges are popular in low-pressure water, air, and general industrial applications.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    specifications: ["ASME B16.5", "ASME B16.47", "EN 1092-1", "JIS B2220", "BS 1560"],
    applications: ["Power Plants", "Water Systems", "HVAC", "General Industrial", "Low-Pressure Piping", "Process Piping"],
    products: [
      { name: "Carbon Steel SO Flange", grade: "ASTM A105", sizes: "1/2\" - 24\"", standard: "ASME B16.5" },
      { name: "Carbon Steel SO Flange", grade: "ASTM A105", sizes: "26\" - 60\"", standard: "ASME B16.47" },
      { name: "Stainless Steel SO Flange", grade: "ASTM A182 F304/304L", sizes: "1/2\" - 24\"", standard: "ASME B16.5" },
      { name: "Stainless Steel SO Flange", grade: "ASTM A182 F316/316L", sizes: "1/2\" - 24\"", standard: "ASME B16.5" },
      { name: "Alloy Steel SO Flange", grade: "ASTM A182 F5/F9/F11/F22", sizes: "1/2\" - 24\"", standard: "ASME B16.5" },
      { name: "Duplex Steel SO Flange", grade: "ASTM A182 F51/F53", sizes: "1/2\" - 24\"", standard: "ASME B16.5" },
    ],
    features: [
      "Easy pipe alignment",
      "Cost-effective solution",
      "Double welded connection",
      "Suitable for moderate service",
      "Classes 150 to 600 available",
    ],
  },
  "blind": {
    name: "Blind Flanges",
    description: "Solid flanges for closing pipe ends, valve openings, or pressure vessel connections. Essential for system isolation.",
    longDescription: "Our blind flanges are solid discs used to close or blank off piping systems, valves, and pressure vessel openings. They are essential for system isolation, pressure testing, and providing access for future expansion. Blind flanges must withstand full system pressure and are available in all standard pressure classes and materials.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=80",
    specifications: ["ASME B16.5", "ASME B16.47", "EN 1092-1", "JIS B2220", "API 590"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Pressure Testing", "System Isolation", "Future Expansion"],
    products: [
      { name: "Carbon Steel Blind Flange", grade: "ASTM A105", sizes: "1/2\" - 24\"", standard: "ASME B16.5" },
      { name: "Carbon Steel Blind Flange", grade: "ASTM A105", sizes: "26\" - 60\"", standard: "ASME B16.47" },
      { name: "Stainless Steel Blind Flange", grade: "ASTM A182 F304/304L", sizes: "1/2\" - 24\"", standard: "ASME B16.5" },
      { name: "Stainless Steel Blind Flange", grade: "ASTM A182 F316/316L", sizes: "1/2\" - 24\"", standard: "ASME B16.5" },
      { name: "Alloy Steel Blind Flange", grade: "ASTM A182 F5/F9/F11/F22/F91", sizes: "1/2\" - 24\"", standard: "ASME B16.5" },
      { name: "Duplex Steel Blind Flange", grade: "ASTM A182 F51/F53/F55", sizes: "1/2\" - 24\"", standard: "ASME B16.5" },
    ],
    features: [
      "Complete system isolation",
      "Full pressure rating",
      "Suitable for pressure testing",
      "Easy installation and removal",
      "Classes 150 to 2500 available",
    ],
  },
  "socket-weld": {
    name: "Socket Weld Flanges",
    description: "Flanges with a socket for pipe insertion and fillet welding. Ideal for small-bore, high-pressure piping systems.",
    longDescription: "Our socket weld flanges feature a recessed area (socket) where the pipe is inserted before being fillet welded. This design provides excellent joint strength and is ideal for small-bore, high-pressure piping systems where butt welding may be impractical. The socket provides automatic pipe alignment and requires only a single fillet weld.",
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1200&q=80",
    specifications: ["ASME B16.5", "EN 1092-1", "JIS B2220", "BS 1560", "MSS SP-44"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Instrumentation", "High-Pressure Small Bore", "Process Piping"],
    products: [
      { name: "Carbon Steel SW Flange", grade: "ASTM A105", sizes: "1/2\" - 4\"", standard: "ASME B16.5" },
      { name: "Carbon Steel SW Flange", grade: "ASTM A350 LF2", sizes: "1/2\" - 4\"", standard: "ASME B16.5" },
      { name: "Stainless Steel SW Flange", grade: "ASTM A182 F304/304L", sizes: "1/2\" - 4\"", standard: "ASME B16.5" },
      { name: "Stainless Steel SW Flange", grade: "ASTM A182 F316/316L", sizes: "1/2\" - 4\"", standard: "ASME B16.5" },
      { name: "Alloy Steel SW Flange", grade: "ASTM A182 F5/F9/F11/F22/F91", sizes: "1/2\" - 4\"", standard: "ASME B16.5" },
      { name: "Duplex Steel SW Flange", grade: "ASTM A182 F51/F53", sizes: "1/2\" - 4\"", standard: "ASME B16.5" },
    ],
    features: [
      "Automatic pipe alignment",
      "Single fillet weld required",
      "High-pressure capability",
      "Ideal for small bore piping",
      "Classes 150 to 2500 available",
    ],
  },
  "threaded": {
    name: "Threaded Flanges",
    description: "Flanges with internal threads for non-welded connections. Suitable for low-pressure applications and easy assembly.",
    longDescription: "Our threaded flanges feature internal NPT or BSPT threads that allow connection to threaded pipe without welding. This makes them ideal for applications where welding is not practical or permitted, such as in explosive atmospheres or for ease of assembly and disassembly. Threaded flanges are suitable for low-pressure, ambient temperature applications.",
    image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=1200&q=80",
    specifications: ["ASME B16.5", "EN 1092-1", "JIS B2220", "BS 1560", "ASME B1.20.1"],
    applications: ["Power Plants", "Low-Pressure Systems", "Air Lines", "Water Systems", "Non-Welded Applications", "Easy Assembly"],
    products: [
      { name: "Carbon Steel Threaded Flange", grade: "ASTM A105", sizes: "1/2\" - 4\"", standard: "ASME B16.5" },
      { name: "Carbon Steel Threaded Flange", grade: "ASTM A350 LF2", sizes: "1/2\" - 4\"", standard: "ASME B16.5" },
      { name: "Stainless Steel Threaded Flange", grade: "ASTM A182 F304/304L", sizes: "1/2\" - 4\"", standard: "ASME B16.5" },
      { name: "Stainless Steel Threaded Flange", grade: "ASTM A182 F316/316L", sizes: "1/2\" - 4\"", standard: "ASME B16.5" },
      { name: "Alloy Steel Threaded Flange", grade: "ASTM A182 F5/F9/F11/F22", sizes: "1/2\" - 4\"", standard: "ASME B16.5" },
      { name: "Duplex Steel Threaded Flange", grade: "ASTM A182 F51/F53", sizes: "1/2\" - 4\"", standard: "ASME B16.5" },
    ],
    features: [
      "No welding required",
      "Easy assembly and disassembly",
      "NPT and BSPT threads available",
      "Suitable for low-pressure service",
      "Classes 150 to 600 available",
    ],
  },
  "lap-joint": {
    name: "Lap Joint Flanges",
    description: "Two-piece assembly with stub end and backing flange. Economical solution for stainless and alloy piping systems.",
    longDescription: "Our lap joint flanges consist of two components: a stub end (welded to the pipe) and a backing flange (loose). This design allows the backing flange to be made from carbon steel while only the stub end needs to be the expensive alloy material. The loose flange can rotate freely for easy bolt hole alignment, making assembly convenient.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80",
    specifications: ["ASME B16.5", "ASME B16.47", "EN 1092-1", "JIS B2220", "MSS SP-43"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Stainless Steel Systems", "Alloy Systems", "Frequent Disassembly"],
    products: [
      { name: "Carbon Steel LJ Flange", grade: "ASTM A105", sizes: "1/2\" - 24\"", standard: "ASME B16.5" },
      { name: "Carbon Steel LJ Flange", grade: "ASTM A105", sizes: "26\" - 60\"", standard: "ASME B16.47" },
      { name: "Stainless Steel LJ Flange", grade: "ASTM A182 F304/304L", sizes: "1/2\" - 24\"", standard: "ASME B16.5" },
      { name: "Stainless Steel LJ Flange", grade: "ASTM A182 F316/316L", sizes: "1/2\" - 24\"", standard: "ASME B16.5" },
      { name: "Alloy Steel LJ Flange", grade: "ASTM A182 F5/F9/F11/F22", sizes: "1/2\" - 24\"", standard: "ASME B16.5" },
      { name: "Duplex Steel LJ Flange", grade: "ASTM A182 F51/F53", sizes: "1/2\" - 24\"", standard: "ASME B16.5" },
    ],
    features: [
      "Cost-effective for alloy systems",
      "Easy bolt hole alignment",
      "Stub end and backing flange",
      "Frequent disassembly capability",
      "Classes 150 to 600 available",
    ],
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const flange = flangeData[slug];
  
  if (!flange) {
    return {
      title: "Product Not Found",
    };
  }
  
  return {
    title: `${flange.name} | Broroma Industrial Pipes`,
    description: flange.description,
  };
}

export async function generateStaticParams() {
  return Object.keys(flangeData).map((slug) => ({ slug }));
}

export default async function FlangeDetailPage({ params }: Props) {
  const { slug } = await params;
  const flange = flangeData[slug];
  
  if (!flange) {
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
            <Link href="/products/flanges" className="hover:text-white transition-colors">Flanges</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">{flange.name}</span>
          </nav>
          
          {/* Category Badge */}
          <span className="inline-block px-3 py-1 bg-navy-800/50 text-steel-400 text-sm font-medium rounded-full mb-4">
            Flanges
          </span>
          
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">{flange.name}</h1>
            <p className="text-xl text-navy-200 leading-relaxed">
              {flange.longDescription}
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
                  src={flange.image}
                  alt={flange.name}
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
                      {flange.products.map((product, index) => (
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
                  {flange.features.map((feature, index) => (
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
                    {flange.specifications.map((spec, index) => (
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
                    {flange.applications.map((app, index) => (
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
          <h2 className="text-2xl font-semibold text-navy-900 mb-8">Other Flange Products</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(flangeData)
              .filter(([key]) => key !== slug)
              .slice(0, 3)
              .map(([key, f]) => (
                <Link key={key} href={`/products/flanges/${key}`} className="card group">
                  <div className="aspect-[16/10] relative rounded-lg overflow-hidden mb-4">
                    <Image
                      src={f.image}
                      alt={f.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-xs text-accent-500 font-medium">Flanges</span>
                  <h3 className="text-base font-semibold text-navy-900 mb-2 line-clamp-1">{f.name}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{f.description}</p>
                </Link>
              ))}
          </div>
          
          {/* Back to Flanges Link */}
          <div className="mt-10 text-center">
            <Link href="/products/flanges" className="inline-flex items-center text-navy-900 font-medium hover:text-accent-500 transition-colors">
              <svg className="w-5 h-5 mr-2 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              Back to All Flanges
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
