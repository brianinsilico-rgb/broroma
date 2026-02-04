import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Product category data
const categoryData: Record<string, {
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
  "pipes": {
    name: "Pipes",
    description: "High-quality steel, carbon, stainless, and alloy pipes for industrial applications.",
    longDescription: "Our comprehensive range of industrial pipes includes steel, carbon, stainless steel, and specialty alloy options. Manufactured to the highest international standards, these pipes are designed for structural applications, water transmission, oil and gas pipelines, chemical processing, and general industrial use across diverse sectors.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=80",
    specifications: ["ASTM A53", "ASTM A106", "API 5L", "ASTM A312", "ASTM A335"],
    applications: ["Construction", "Oil & Gas", "Water Systems", "Chemical Processing", "Power Generation"],
    products: [
      { name: "Carbon Steel Pipe", grade: "Grade B/C", sizes: "1/2\" - 48\"", standard: "ASTM A53/A106" },
      { name: "Stainless Steel Pipe", grade: "304/316/321", sizes: "1/4\" - 24\"", standard: "ASTM A312" },
      { name: "Alloy Steel Pipe", grade: "P11/P22/P91", sizes: "1/2\" - 24\"", standard: "ASTM A335" },
      { name: "Line Pipe", grade: "X42-X70", sizes: "2\" - 64\"", standard: "API 5L" },
      { name: "Seamless Pipe", grade: "Various", sizes: "1/2\" - 16\"", standard: "ASTM A106" },
    ],
    features: [
      "High tensile strength and durability",
      "Wide range of materials and grades",
      "Seamless and welded options",
      "Full traceability with mill test certificates",
      "Custom lengths and specifications available",
    ],
  },
  "flanges": {
    name: "Flanges",
    description: "Precision-engineered flanges for secure pipe connections and system integrity.",
    longDescription: "Our flanges are precision-engineered to provide secure, leak-proof connections in piping systems. Available in various types including weld neck, slip-on, blind, socket weld, and lap joint configurations. All flanges meet international standards and are suitable for high-pressure and high-temperature applications.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80",
    specifications: ["ASME B16.5", "ASME B16.47", "EN 1092-1", "JIS B2220", "API 6A"],
    applications: ["Petrochemical", "Oil & Gas", "Power Plants", "Water Treatment", "Chemical Processing"],
    products: [
      { name: "Weld Neck Flange", grade: "A105/F304/F316", sizes: "1/2\" - 24\"", standard: "ASME B16.5" },
      { name: "Slip-On Flange", grade: "A105/F304/F316", sizes: "1/2\" - 24\"", standard: "ASME B16.5" },
      { name: "Blind Flange", grade: "A105/F304/F316", sizes: "1/2\" - 24\"", standard: "ASME B16.5" },
      { name: "Socket Weld Flange", grade: "A105/F304/F316", sizes: "1/2\" - 4\"", standard: "ASME B16.5" },
      { name: "Large Diameter Flange", grade: "A105/F304", sizes: "26\" - 60\"", standard: "ASME B16.47" },
    ],
    features: [
      "Precision machined sealing surfaces",
      "Pressure classes from 150# to 2500#",
      "Various facing types available",
      "NACE compliant options",
      "Third-party certified quality",
    ],
  },
  "fittings": {
    name: "Fittings",
    description: "Complete range of pipe fittings including elbows, tees, reducers, and couplings.",
    longDescription: "Our comprehensive range of pipe fittings ensures seamless connections throughout your piping systems. From standard elbows and tees to specialized reducers and couplings, we offer both butt-weld and socket-weld configurations in various materials to match your specific requirements.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    specifications: ["ASME B16.9", "ASME B16.11", "MSS-SP-43", "EN 10253", "ASTM A234"],
    applications: ["Piping Systems", "Process Industries", "HVAC", "Shipbuilding", "Infrastructure"],
    products: [
      { name: "Butt Weld Elbow", grade: "WPB/WP304/WP316", sizes: "1/2\" - 48\"", standard: "ASME B16.9" },
      { name: "Butt Weld Tee", grade: "WPB/WP304/WP316", sizes: "1/2\" - 48\"", standard: "ASME B16.9" },
      { name: "Reducer", grade: "WPB/WP304/WP316", sizes: "1\" - 48\"", standard: "ASME B16.9" },
      { name: "Socket Weld Fitting", grade: "A105/F304/F316", sizes: "1/4\" - 4\"", standard: "ASME B16.11" },
      { name: "Coupling", grade: "A105/F304/F316", sizes: "1/8\" - 4\"", standard: "ASME B16.11" },
    ],
    features: [
      "Seamless and welded construction",
      "Long and short radius options",
      "Equal and reducing configurations",
      "Smooth internal surface finish",
      "Complete material traceability",
    ],
  },
  "boiler-tubes": {
    name: "Boiler Tubes",
    description: "Heat-resistant tubes designed for high-temperature boiler applications.",
    longDescription: "Our boiler tubes are specifically engineered to withstand extreme temperatures and pressures in steam generation systems. Manufactured from premium materials with precise dimensional tolerances, these tubes ensure reliable performance in power plants, industrial boilers, and heat recovery systems.",
    image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=1200&q=80",
    specifications: ["ASTM A192", "ASTM A210", "ASTM A213", "EN 10216-2", "DIN 17175"],
    applications: ["Power Plants", "Industrial Boilers", "HRSG Systems", "Steam Generation", "Heat Recovery"],
    products: [
      { name: "Seamless Boiler Tube", grade: "SA192", sizes: "1\" - 6\" OD", standard: "ASTM A192" },
      { name: "Carbon Steel Boiler Tube", grade: "A1/C", sizes: "1\" - 5\" OD", standard: "ASTM A210" },
      { name: "Alloy Boiler Tube", grade: "T11/T22/T91", sizes: "1\" - 5\" OD", standard: "ASTM A213" },
      { name: "Superheater Tube", grade: "T91/T92", sizes: "1.5\" - 3\" OD", standard: "ASTM A213" },
      { name: "Economizer Tube", grade: "P235/P265", sizes: "DN25 - DN80", standard: "EN 10216-2" },
    ],
    features: [
      "High-temperature creep resistance",
      "Excellent oxidation resistance",
      "Precise wall thickness control",
      "Hydrostatic tested",
      "Full length NDT inspection",
    ],
  },
  "heat-exchanger-tubes": {
    name: "Heat Exchanger Tubes",
    description: "Efficient thermal transfer tubes for heat exchanger systems.",
    longDescription: "Our heat exchanger tubes are designed for optimal thermal transfer efficiency in shell-and-tube exchangers, condensers, and coolers. Available in various materials including carbon steel, stainless steel, and specialty alloys, these tubes offer excellent corrosion resistance and long service life.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
    specifications: ["ASTM A179", "ASTM A214", "ASTM A213", "ASTM A249", "EN 10217-7"],
    applications: ["Heat Exchangers", "Condensers", "Evaporators", "Coolers", "Process Equipment"],
    products: [
      { name: "Seamless HX Tube", grade: "SA179", sizes: "1/4\" - 3\" OD", standard: "ASTM A179" },
      { name: "Welded HX Tube", grade: "SA214", sizes: "1/2\" - 2\" OD", standard: "ASTM A214" },
      { name: "Stainless HX Tube", grade: "304/316/321/347", sizes: "1/4\" - 2\" OD", standard: "ASTM A213" },
      { name: "Welded SS HX Tube", grade: "304/316", sizes: "1/4\" - 2\" OD", standard: "ASTM A249" },
      { name: "U-Bend Tube", grade: "Various", sizes: "1/2\" - 1.5\" OD", standard: "ASTM A179/A213" },
    ],
    features: [
      "High thermal conductivity",
      "Smooth internal surface",
      "Tight dimensional tolerances",
      "Eddy current tested",
      "U-bend forming available",
    ],
  },
  "manual-valves": {
    name: "Manual Valves",
    description: "Reliable manual control valves for flow regulation and isolation.",
    longDescription: "Our range of manual valves provides reliable flow control and isolation for industrial piping systems. Including gate, globe, ball, butterfly, and check valves, our products are manufactured to international standards and suitable for various media including liquids, gases, and steam.",
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1200&q=80",
    specifications: ["API 600", "API 602", "API 6D", "ASME B16.34", "EN 12516"],
    applications: ["Oil & Gas", "Petrochemical", "Power Generation", "Water Treatment", "Process Industries"],
    products: [
      { name: "Gate Valve", grade: "WCB/CF8/CF8M", sizes: "2\" - 24\"", standard: "API 600" },
      { name: "Globe Valve", grade: "WCB/CF8/CF8M", sizes: "2\" - 16\"", standard: "API 600" },
      { name: "Ball Valve", grade: "WCB/CF8/CF8M", sizes: "1/2\" - 12\"", standard: "API 6D" },
      { name: "Butterfly Valve", grade: "WCB/CF8", sizes: "2\" - 48\"", standard: "API 609" },
      { name: "Check Valve", grade: "WCB/CF8/CF8M", sizes: "2\" - 24\"", standard: "API 6D" },
    ],
    features: [
      "Pressure classes up to 2500#",
      "Fire-safe design options",
      "Fugitive emission certified",
      "Extended bonnet for cryogenic service",
      "Various end connections available",
    ],
  },
  "safety-valves": {
    name: "Safety Valves",
    description: "Certified safety and relief valves for pressure protection systems.",
    longDescription: "Our safety valves and pressure relief devices provide critical protection for pressurized systems. Designed and manufactured to rigorous international standards, these valves automatically release pressure to prevent equipment damage and ensure personnel safety in refineries, chemical plants, and power generation facilities.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
    specifications: ["API 526", "API 520", "ASME Section VIII", "EN ISO 4126", "PED 2014/68/EU"],
    applications: ["Pressure Vessels", "Boilers", "Refineries", "Chemical Plants", "Storage Tanks"],
    products: [
      { name: "Pressure Relief Valve", grade: "WCB/CF8/CF8M", sizes: "1\" - 8\"", standard: "API 526" },
      { name: "Safety Relief Valve", grade: "WCB/CF8", sizes: "1\" - 6\"", standard: "API 526" },
      { name: "Pilot Operated Relief Valve", grade: "Various", sizes: "2\" - 8\"", standard: "API 526" },
      { name: "Vacuum Relief Valve", grade: "WCB/CF8", sizes: "2\" - 12\"", standard: "API 2000" },
      { name: "Rupture Disc", grade: "316SS/Inconel", sizes: "1\" - 24\"", standard: "ASME VIII" },
    ],
    features: [
      "ASME UV and NB certified",
      "Full lift and pop action designs",
      "Bellows and balanced options",
      "Set pressure certified testing",
      "Complete documentation package",
    ],
  },
  "control-valves": {
    name: "Control Valves",
    description: "Automated control valves for precise flow, pressure, and temperature regulation.",
    longDescription: "Our control valves provide precise automated regulation of flow, pressure, temperature, and level in process systems. Featuring advanced actuators and positioners, these valves deliver accurate control performance for demanding industrial applications in refineries, chemical plants, power generation, and water treatment facilities.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80",
    specifications: ["IEC 60534", "ISA S75", "ANSI/FCI 70-2", "EN 60534", "API 6D"],
    applications: ["Process Control", "Refineries", "Chemical Plants", "Power Generation", "Water Treatment"],
    products: [
      { name: "Globe Control Valve", grade: "WCB/CF8/CF8M", sizes: "1\" - 16\"", standard: "IEC 60534" },
      { name: "Rotary Control Valve", grade: "WCB/CF8/CF8M", sizes: "2\" - 24\"", standard: "IEC 60534" },
      { name: "Three-Way Control Valve", grade: "WCB/CF8", sizes: "1\" - 8\"", standard: "IEC 60534" },
      { name: "Pressure Regulator", grade: "WCB/CF8", sizes: "1/2\" - 6\"", standard: "EN 334" },
      { name: "Control Valve Actuator", grade: "Various", sizes: "Various", standard: "IEC 60534-6" },
    ],
    features: [
      "Precise flow characterization",
      "Pneumatic and electric actuators",
      "Smart positioners with diagnostics",
      "Low noise and anti-cavitation trims",
      "SIL rated options available",
    ],
  },
  "accessories-instruments": {
    name: "Accessories & Instruments",
    description: "Supporting equipment including gauges, strainers, and instrumentation.",
    longDescription: "Our range of accessories and instrumentation complements our piping products to provide complete system solutions. From pressure gauges and temperature instruments to strainers and sight glasses, we offer quality components that ensure accurate monitoring and efficient operation of your piping systems.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80",
    specifications: ["ASME B40.100", "EN 837", "API 589", "ASME B16.34", "EN 12516"],
    applications: ["Process Monitoring", "Flow Measurement", "Filtration", "Level Indication", "Instrumentation"],
    products: [
      { name: "Pressure Gauge", grade: "SS 316", sizes: "2.5\" - 6\" Dial", standard: "ASME B40.100" },
      { name: "Temperature Gauge", grade: "SS 316", sizes: "3\" - 5\" Dial", standard: "EN 13190" },
      { name: "Y-Strainer", grade: "WCB/CF8/CF8M", sizes: "1/2\" - 12\"", standard: "ASME B16.34" },
      { name: "Sight Glass", grade: "WCB/CF8", sizes: "1/2\" - 6\"", standard: "DIN 28120" },
      { name: "Steam Trap", grade: "WCB/CF8", sizes: "1/2\" - 2\"", standard: "EN 27841" },
    ],
    features: [
      "High accuracy instrumentation",
      "Corrosion resistant materials",
      "Easy maintenance design",
      "Wide temperature ranges",
      "Various connection types",
    ],
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = categoryData[slug];
  
  if (!category) {
    return {
      title: "Product Not Found",
    };
  }
  
  return {
    title: category.name,
    description: category.description,
  };
}

export async function generateStaticParams() {
  return Object.keys(categoryData).map((slug) => ({ slug }));
}

export default async function ProductCategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = categoryData[slug];
  
  if (!category) {
    notFound();
  }
  
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-navy py-20 md:py-28">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-navy-300 mb-4">
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">{category.name}</span>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">{category.name}</h1>
            <p className="text-xl text-navy-200 leading-relaxed">
              {category.longDescription}
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
                  src={category.image}
                  alt={category.name}
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
                      {category.products.map((product, index) => (
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
                  {category.features.map((feature, index) => (
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
                    {category.specifications.map((spec, index) => (
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
                    {category.applications.map((app, index) => (
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
          <h2 className="text-2xl font-semibold text-navy-900 mb-8">Related Products</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(categoryData)
              .filter(([key]) => key !== slug)
              .slice(0, 3)
              .map(([key, cat]) => (
                <Link key={key} href={`/products/${key}`} className="card group">
                  <div className="aspect-[16/10] relative rounded-lg overflow-hidden mb-4">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">{cat.name}</h3>
                  <p className="text-gray-600 text-sm">{cat.description}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
