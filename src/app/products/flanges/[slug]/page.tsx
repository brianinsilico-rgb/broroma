import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Flange product data
const flangeData: Record<string, {
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
    standard: string;
  }[];
  tableNote?: string;
}> = {
  "weld-neck": {
    name: "Weld Neck Flanges",
    category: "Flanges",
    description: "Tapered hub design for maximum strength at the weld joint. Best for high-pressure and high-temperature service.",
    longDescription: "Weld neck flanges for high-pressure, high-temperature applications. Carbon, stainless, alloy, and duplex steel. Sizes from 1/2\" to 60\". Full hub design provides reinforced strength at the base.",
    image: "/flanges/weld-neck.png",
    specifications: ["ASME B16.5", "ASME B16.47", "EN 1092-1", "JIS B2220"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Petrochemical", "Offshore", "High-Pressure Systems"],
    products: [
      { name: "Carbon Steel", grade: "ASTM A105", sizes: "1/2\" - 24\"", pressureClass: "150#, 300#, 600#, 900#, 1500#, 2500#", standard: "ASME B16.5" },
      { name: "Carbon Steel", grade: "ASTM A105", sizes: "26\" - 60\"", pressureClass: "150#, 300#, 600#, 900#", standard: "ASME B16.47" },
      { name: "Stainless Steel", grade: "ASTM A182 F304/304L", sizes: "1/2\" - 24\"", pressureClass: "150#, 300#, 600#, 900#, 1500#, 2500#", standard: "ASME B16.5" },
      { name: "Stainless Steel", grade: "ASTM A182 F316/316L", sizes: "1/2\" - 24\"", pressureClass: "150#, 300#, 600#, 900#, 1500#, 2500#", standard: "ASME B16.5" },
      { name: "Alloy Steel", grade: "ASTM A182 F5/F9/F11/F22/F91", sizes: "1/2\" - 24\"", pressureClass: "150#, 300#, 600#, 900#, 1500#, 2500#", standard: "ASME B16.5" },
      { name: "Duplex Steel", grade: "ASTM A182 F51/F53/F55", sizes: "1/2\" - 24\"", pressureClass: "150#, 300#, 600#, 900#, 1500#", standard: "ASME B16.5" },
    ],
  },
  "slip-on": {
    name: "Slip-On Flanges",
    category: "Flanges",
    description: "Slides over the pipe for easy alignment and welding. Cost-effective choice for low-pressure applications.",
    longDescription: "Slip-on flanges for easy alignment and welding. Carbon, stainless, alloy, and duplex steel. Sizes from 1/2\" to 24\". Double fillet weld provides secure connection.",
    image: "/flanges/slip-on.png",
    specifications: ["ASME B16.5", "EN 1092-1", "JIS B2220"],
    applications: ["Power Plants", "Water Systems", "HVAC", "General Industrial", "Low-Pressure Piping", "Process Piping"],
    products: [
      { name: "Carbon Steel", grade: "ASTM A105", sizes: "1/2\" - 24\"", pressureClass: "150#, 300#, 600#", standard: "ASME B16.5" },
      { name: "Stainless Steel", grade: "ASTM A182 F304/304L", sizes: "1/2\" - 24\"", pressureClass: "150#, 300#, 600#", standard: "ASME B16.5" },
      { name: "Stainless Steel", grade: "ASTM A182 F316/316L", sizes: "1/2\" - 24\"", pressureClass: "150#, 300#, 600#", standard: "ASME B16.5" },
      { name: "Alloy Steel", grade: "ASTM A182 F5/F9/F11/F22", sizes: "1/2\" - 24\"", pressureClass: "150#, 300#, 600#", standard: "ASME B16.5" },
      { name: "Duplex Steel", grade: "ASTM A182 F51/F53", sizes: "1/2\" - 24\"", pressureClass: "150#, 300#, 600#", standard: "ASME B16.5" },
    ],
  },
  "blind": {
    name: "Blind Flanges",
    category: "Flanges",
    description: "Closes off the end of a piping system. Used for testing, inspection, or future expansion.",
    longDescription: "Blind flanges for system isolation and termination. Carbon, stainless, alloy, and duplex steel. Sizes from 1/2\" to 60\". Full pressure rating for testing and isolation.",
    image: "/flanges/blind.png",
    specifications: ["ASME B16.5", "ASME B16.47", "EN 1092-1", "JIS B2220"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Pressure Testing", "System Isolation", "Future Expansion"],
    products: [
      { name: "Carbon Steel", grade: "ASTM A105", sizes: "1/2\" - 24\"", pressureClass: "150#, 300#, 600#, 900#, 1500#, 2500#", standard: "ASME B16.5" },
      { name: "Carbon Steel", grade: "ASTM A105", sizes: "26\" - 60\"", pressureClass: "150#, 300#, 600#, 900#", standard: "ASME B16.47" },
      { name: "Stainless Steel", grade: "ASTM A182 F304/304L", sizes: "1/2\" - 24\"", pressureClass: "150#, 300#, 600#, 900#, 1500#, 2500#", standard: "ASME B16.5" },
      { name: "Stainless Steel", grade: "ASTM A182 F316/316L", sizes: "1/2\" - 24\"", pressureClass: "150#, 300#, 600#, 900#, 1500#, 2500#", standard: "ASME B16.5" },
      { name: "Alloy Steel", grade: "ASTM A182 F5/F9/F11/F22/F91", sizes: "1/2\" - 24\"", pressureClass: "150#, 300#, 600#, 900#, 1500#, 2500#", standard: "ASME B16.5" },
      { name: "Duplex Steel", grade: "ASTM A182 F51/F53/F55", sizes: "1/2\" - 24\"", pressureClass: "150#, 300#, 600#, 900#, 1500#", standard: "ASME B16.5" },
    ],
  },
  "socket-weld": {
    name: "Socket Weld Flanges",
    category: "Flanges",
    description: "Pipe inserts into the socket before welding. Ideal for small-diameter, high-pressure lines.",
    longDescription: "Socket weld flanges for small-bore, high-pressure piping. Carbon, stainless, alloy, and duplex steel. Sizes from 1/2\" to 4\". Single fillet weld connection.",
    image: "/flanges/socket-weld.png",
    specifications: ["ASME B16.5", "EN 1092-1", "JIS B2220"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Instrumentation", "High-Pressure Small Bore", "Process Piping"],
    products: [
      { name: "Carbon Steel", grade: "ASTM A105", sizes: "1/2\" - 4\"", pressureClass: "150#, 300#, 600#, 900#, 1500#, 2500#", standard: "ASME B16.5" },
      { name: "Carbon Steel", grade: "ASTM A350 LF2", sizes: "1/2\" - 4\"", pressureClass: "150#, 300#, 600#, 900#, 1500#, 2500#", standard: "ASME B16.5" },
      { name: "Stainless Steel", grade: "ASTM A182 F304/304L", sizes: "1/2\" - 4\"", pressureClass: "150#, 300#, 600#, 900#, 1500#, 2500#", standard: "ASME B16.5" },
      { name: "Stainless Steel", grade: "ASTM A182 F316/316L", sizes: "1/2\" - 4\"", pressureClass: "150#, 300#, 600#, 900#, 1500#, 2500#", standard: "ASME B16.5" },
      { name: "Alloy Steel", grade: "ASTM A182 F5/F9/F11/F22/F91", sizes: "1/2\" - 4\"", pressureClass: "150#, 300#, 600#, 900#, 1500#, 2500#", standard: "ASME B16.5" },
      { name: "Duplex Steel", grade: "ASTM A182 F51/F53", sizes: "1/2\" - 4\"", pressureClass: "150#, 300#, 600#, 900#, 1500#", standard: "ASME B16.5" },
    ],
  },
  "threaded": {
    name: "Threaded Flanges",
    category: "Flanges",
    description: "Screws onto threaded pipe — no welding required. Best for low-pressure, non-critical systems.",
    longDescription: "Threaded flanges for non-welded connections. Carbon, stainless, alloy, and duplex steel. Sizes from 1/2\" to 4\". NPT and BSPT threads available.",
    image: "/flanges/threaded.png",
    specifications: ["ASME B16.5", "EN 1092-1", "JIS B2220"],
    applications: ["Power Plants", "Low-Pressure Systems", "Air Lines", "Water Systems", "Non-Welded Applications", "Easy Assembly"],
    products: [
      { name: "Carbon Steel", grade: "ASTM A105", sizes: "1/2\" - 4\"", pressureClass: "150#, 300#, 600#", standard: "ASME B16.5" },
      { name: "Carbon Steel", grade: "ASTM A350 LF2", sizes: "1/2\" - 4\"", pressureClass: "150#, 300#, 600#", standard: "ASME B16.5" },
      { name: "Stainless Steel", grade: "ASTM A182 F304/304L", sizes: "1/2\" - 4\"", pressureClass: "150#, 300#, 600#", standard: "ASME B16.5" },
      { name: "Stainless Steel", grade: "ASTM A182 F316/316L", sizes: "1/2\" - 4\"", pressureClass: "150#, 300#, 600#", standard: "ASME B16.5" },
      { name: "Alloy Steel", grade: "ASTM A182 F5/F9/F11/F22", sizes: "1/2\" - 4\"", pressureClass: "150#, 300#, 600#", standard: "ASME B16.5" },
      { name: "Duplex Steel", grade: "ASTM A182 F51/F53", sizes: "1/2\" - 4\"", pressureClass: "150#, 300#, 600#", standard: "ASME B16.5" },
    ],
    tableNote: "NPT and BSPT threads available.",
  },
  "lap-joint": {
    name: "Lap Joint Flanges",
    category: "Flanges",
    description: "Two-piece design allows easy bolt alignment and rotation. Good for systems requiring frequent disassembly.",
    longDescription: "Lap joint flanges with stub end for easy alignment. Carbon, stainless, alloy, and duplex steel. Sizes from 1/2\" to 24\". Cost-effective for alloy piping systems.",
    image: "/flanges/lap-joint.png",
    specifications: ["ASME B16.5", "EN 1092-1", "JIS B2220"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Stainless Steel Systems", "Alloy Systems", "Frequent Disassembly"],
    products: [
      { name: "Carbon Steel", grade: "ASTM A105", sizes: "1/2\" - 24\"", pressureClass: "150#, 300#, 600#", standard: "ASME B16.5" },
      { name: "Stainless Steel", grade: "ASTM A182 F304/304L", sizes: "1/2\" - 24\"", pressureClass: "150#, 300#, 600#", standard: "ASME B16.5" },
      { name: "Stainless Steel", grade: "ASTM A182 F316/316L", sizes: "1/2\" - 24\"", pressureClass: "150#, 300#, 600#", standard: "ASME B16.5" },
      { name: "Alloy Steel", grade: "ASTM A182 F5/F9/F11/F22", sizes: "1/2\" - 24\"", pressureClass: "150#, 300#, 600#", standard: "ASME B16.5" },
      { name: "Duplex Steel", grade: "ASTM A182 F51/F53", sizes: "1/2\" - 24\"", pressureClass: "150#, 300#, 600#", standard: "ASME B16.5" },
    ],
    tableNote: "Used with stub ends per MSS SP-43.",
  },
  "orifice": {
    name: "Orifice Flanges",
    category: "Flanges",
    description: "Flanges with pressure taps for flow measurement. Used with orifice plates in metering systems.",
    longDescription: "Orifice flanges for flow measurement applications. Carbon, stainless, and alloy steel. Sizes from 1\" to 24\". Includes pressure tap connections for differential pressure measurement.",
    image: "/flanges/orifice.png",
    specifications: ["ASME B16.36", "EN 1092-1"],
    applications: ["Flow Measurement", "Metering Systems", "Refineries", "Chemical Plants", "Process Control", "Custody Transfer"],
    products: [
      { name: "Carbon Steel", grade: "ASTM A105", sizes: "1\" - 24\"", pressureClass: "300#, 600#, 900#, 1500#, 2500#", standard: "ASME B16.36" },
      { name: "Stainless Steel", grade: "ASTM A182 F304/304L", sizes: "1\" - 24\"", pressureClass: "300#, 600#, 900#, 1500#, 2500#", standard: "ASME B16.36" },
      { name: "Stainless Steel", grade: "ASTM A182 F316/316L", sizes: "1\" - 24\"", pressureClass: "300#, 600#, 900#, 1500#, 2500#", standard: "ASME B16.36" },
      { name: "Alloy Steel", grade: "ASTM A182 F5/F9/F11/F22", sizes: "1\" - 24\"", pressureClass: "300#, 600#, 900#, 1500#, 2500#", standard: "ASME B16.36" },
    ],
    tableNote: "Includes 1/2\" NPT pressure tap connections.",
  },
  "spectacle-blind": {
    name: "Spectacle Blind Flanges",
    category: "Flanges",
    description: "Figure-8 design combines blind and spacer ring. Used for permanent isolation points in piping systems.",
    longDescription: "Spectacle blind flanges for system isolation. Carbon, stainless, and alloy steel. Sizes from 1\" to 48\". Figure-8 design allows quick changeover between open and closed positions.",
    image: "/flanges/spectacle-blind.png",
    specifications: ["ASME B16.48"],
    applications: ["Refineries", "Chemical Plants", "Petrochemical", "System Isolation", "Maintenance Points", "Safety Isolation"],
    products: [
      { name: "Carbon Steel", grade: "ASTM A516 Gr.70", sizes: "1\" - 48\"", pressureClass: "150#, 300#, 600#, 900#, 1500#", standard: "ASME B16.48" },
      { name: "Stainless Steel", grade: "ASTM A240 304/304L", sizes: "1\" - 48\"", pressureClass: "150#, 300#, 600#, 900#, 1500#", standard: "ASME B16.48" },
      { name: "Stainless Steel", grade: "ASTM A240 316/316L", sizes: "1\" - 48\"", pressureClass: "150#, 300#, 600#, 900#, 1500#", standard: "ASME B16.48" },
      { name: "Alloy Steel", grade: "ASTM A387 Gr.11/22", sizes: "1\" - 48\"", pressureClass: "150#, 300#, 600#, 900#, 1500#", standard: "ASME B16.48" },
    ],
    tableNote: "Figure-8 design with integral spacer ring.",
  },
  "ring-type-joint": {
    name: "Ring Type Joint (RTJ) Flanges",
    category: "Flanges",
    description: "Metal-to-metal seal using ring gaskets. Designed for high-pressure, high-temperature critical service.",
    longDescription: "RTJ flanges for critical high-pressure service. Carbon, stainless, alloy, and duplex steel. Sizes from 1/2\" to 24\". Metal-to-metal seal with ring gasket groove.",
    image: "/flanges/rtj.png",
    specifications: ["ASME B16.5", "API 6A"],
    applications: ["Oil & Gas", "Offshore", "High-Pressure Systems", "Subsea", "Wellhead Equipment", "Critical Service"],
    products: [
      { name: "Carbon Steel", grade: "ASTM A105", sizes: "1/2\" - 24\"", pressureClass: "150#, 300#, 600#, 900#, 1500#, 2500#", standard: "ASME B16.5" },
      { name: "Stainless Steel", grade: "ASTM A182 F304/304L", sizes: "1/2\" - 24\"", pressureClass: "150#, 300#, 600#, 900#, 1500#, 2500#", standard: "ASME B16.5" },
      { name: "Stainless Steel", grade: "ASTM A182 F316/316L", sizes: "1/2\" - 24\"", pressureClass: "150#, 300#, 600#, 900#, 1500#, 2500#", standard: "ASME B16.5" },
      { name: "Alloy Steel", grade: "ASTM A182 F5/F9/F11/F22/F91", sizes: "1/2\" - 24\"", pressureClass: "150#, 300#, 600#, 900#, 1500#, 2500#", standard: "ASME B16.5" },
      { name: "Duplex Steel", grade: "ASTM A182 F51/F53/F55", sizes: "1/2\" - 24\"", pressureClass: "150#, 300#, 600#, 900#, 1500#, 2500#", standard: "ASME B16.5" },
    ],
    tableNote: "R, RX, and BX ring gasket grooves available.",
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
      <section className="gradient-navy pt-10 pb-12 md:pt-12 md:pb-16">
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-navy-300 mb-2 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/products/flanges" className="hover:text-white transition-colors">Flanges</Link>
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white truncate max-w-[180px] sm:max-w-none">{flange.name}</span>
          </nav>
          
          <div className="max-w-3xl">
            <h1 className="text-white text-2xl md:text-4xl font-bold mt-3 mb-4">{flange.name}</h1>
            <p className="text-sm md:text-base text-navy-200 leading-relaxed">
              {flange.longDescription}
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
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden mb-5 sm:mb-7 aspect-[5/2] bg-gray-100 border border-gray-200">
                <Image
                  src={flange.image}
                  alt={flange.name}
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>

              {/* Products Table */}
              <div className="mb-5 sm:mb-7">
                <h2 className="text-xl sm:text-2xl font-semibold text-navy-900 mb-3 sm:mb-4">Available Products</h2>
                <div className="overflow-x-auto -mx-4 sm:mx-0">
                  <div className="inline-block min-w-full align-middle px-4 sm:px-0">
                    <table className="w-full min-w-[600px]">
                      <thead>
                        <tr className="bg-navy-50">
                          <th className="px-3 py-2.5 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-semibold text-navy-900 rounded-l-lg whitespace-nowrap">Material</th>
                          <th className="px-3 py-2.5 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-semibold text-navy-900 whitespace-nowrap">Grade</th>
                          <th className="px-3 py-2.5 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-semibold text-navy-900 whitespace-nowrap">Sizes</th>
                          <th className="px-3 py-2.5 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-semibold text-navy-900 whitespace-nowrap">Pressure Class</th>
                          <th className="px-3 py-2.5 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-semibold text-navy-900 rounded-r-lg whitespace-nowrap">Standard</th>
                        </tr>
                      </thead>
                      <tbody>
                        {flange.products.map((product, index) => (
                          <tr key={index} className="border-b border-gray-100">
                            <td className="px-3 py-2.5 sm:px-4 sm:py-4 text-xs sm:text-sm text-navy-900 font-medium">{product.name}</td>
                            <td className="px-3 py-2.5 sm:px-4 sm:py-4 text-xs sm:text-sm text-gray-600">{product.grade}</td>
                            <td className="px-3 py-2.5 sm:px-4 sm:py-4 text-xs sm:text-sm text-gray-600">{product.sizes}</td>
                            <td className="px-3 py-2.5 sm:px-4 sm:py-4 text-xs sm:text-sm text-gray-600">{product.pressureClass}</td>
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
                {flange.tableNote && (
                  <p className="mt-2 sm:mt-3 px-4 sm:px-0 text-xs sm:text-sm text-gray-600 italic">{flange.tableNote}</p>
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
                    All flanges are rated per ASME B16.5 pressure-temperature tables. Pressure class ratings (150# through 2500#) define the maximum allowable working pressure at specified temperatures. For specific pressure-temperature data, contact our team or refer to the product catalog.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 flanges-sidebar">
              <div className="lg:sticky lg:top-28 space-y-4 sm:space-y-6">
                {/* Specifications */}
                <div className="card p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-navy-900 mb-3 sm:mb-4">Specifications</h3>
                  <div className="space-y-1.5 sm:space-y-2">
                    {flange.specifications.map((spec, index) => (
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
                    {flange.applications.map((app, index) => (
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
                    Flanges Catalog (PDF)
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
          <h2 className="text-xl sm:text-2xl font-semibold text-navy-900 mb-4 sm:mb-5">Other Flange Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {Object.entries(flangeData)
              .filter(([key]) => key !== slug)
              .slice(0, 3)
              .map(([key, f]) => (
                <Link key={key} href={`/products/flanges/${key}`} className="card group p-4 sm:p-6">
                  <div className="aspect-[16/10] relative rounded-lg overflow-hidden mb-3 sm:mb-4 bg-gray-100">
                    <Image
                      src={f.image}
                      alt={f.name}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-xs text-accent-500 font-medium">{f.category}</span>
                  <h3 className="text-sm sm:text-base font-semibold text-navy-900 mb-1.5 sm:mb-2 line-clamp-1">{f.name}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm line-clamp-2">{f.description}</p>
                </Link>
              ))}
          </div>
          
          {/* Back to Flanges Link */}
          <div className="mt-4 sm:mt-6 text-center">
            <Link href="/products/flanges" className="inline-flex items-center text-sm sm:text-base text-navy-900 font-medium hover:text-accent-500 transition-colors py-2">
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
