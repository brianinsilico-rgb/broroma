import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Accessory product data
const accessoryData: Record<string, {
  name: string;
  description: string;
  longDescription: string;
  image: string;
  specifications: string[];
  applications: string[];
  products: {
    name: string;
    type: string;
    sizes: string;
    standard: string;
  }[];
  features: string[];
}> = {
  "electric-actuator": {
    name: "Electric Actuators",
    description: "Motor-driven actuators for automated valve control with precise positioning capability.",
    longDescription: "Our electric actuators provide reliable, precise valve automation for a wide range of industrial applications. Featuring intelligent motor control, these actuators offer accurate positioning, torque limiting, and extensive diagnostic capabilities. Suitable for both on/off and modulating control applications.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80",
    specifications: ["IEC 60034", "IEC 61508", "IP67/IP68 Protection", "ATEX/IECEx Options", "4-20mA / HART / Fieldbus"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Process Control", "Water Treatment", "HVAC Systems"],
    products: [
      { name: "Quarter-Turn Electric Actuator", type: "On/Off", sizes: "50-10,000 Nm", standard: "IEC 60034" },
      { name: "Quarter-Turn Electric Actuator", type: "Modulating", sizes: "50-10,000 Nm", standard: "IEC 60034" },
      { name: "Multi-Turn Electric Actuator", type: "On/Off", sizes: "10-100,000 Nm", standard: "IEC 60034" },
      { name: "Multi-Turn Electric Actuator", type: "Modulating", sizes: "10-100,000 Nm", standard: "IEC 60034" },
      { name: "Linear Electric Actuator", type: "Modulating", sizes: "1-100 kN", standard: "IEC 60034" },
    ],
    features: [
      "Precise positioning accuracy",
      "Local and remote control",
      "Diagnostic and monitoring functions",
      "Explosion-proof options",
      "Multiple communication protocols",
    ],
  },
  "pneumatic-actuator": {
    name: "Pneumatic Actuators",
    description: "Air-operated actuators for fast, reliable valve automation in process systems.",
    longDescription: "Our pneumatic actuators deliver fast, reliable valve automation using compressed air as the power source. Available in spring-return (fail-safe) and double-acting configurations, these actuators are ideal for applications requiring quick response times and simple, robust operation.",
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1200&q=80",
    specifications: ["ISO 5211", "NAMUR Standard", "3-15 psi / 4-20mA", "IP66 Protection", "ATEX Options"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Process Control", "Oil & Gas", "Pharmaceutical"],
    products: [
      { name: "Scotch Yoke Actuator", type: "Double-Acting", sizes: "50-500,000 Nm", standard: "ISO 5211" },
      { name: "Scotch Yoke Actuator", type: "Spring-Return", sizes: "50-100,000 Nm", standard: "ISO 5211" },
      { name: "Rack & Pinion Actuator", type: "Double-Acting", sizes: "10-20,000 Nm", standard: "ISO 5211" },
      { name: "Rack & Pinion Actuator", type: "Spring-Return", sizes: "10-10,000 Nm", standard: "ISO 5211" },
      { name: "Diaphragm Actuator", type: "Spring-Return", sizes: "1-50 kN", standard: "IEC 60534" },
    ],
    features: [
      "Fast response time",
      "Fail-safe spring return options",
      "Simple and reliable operation",
      "Intrinsically safe",
      "Wide torque range available",
    ],
  },
  "steam-trap": {
    name: "Steam Traps",
    description: "Automatic condensate removal devices for efficient steam system operation.",
    longDescription: "Our steam traps automatically remove condensate and non-condensable gases from steam systems while preventing live steam loss. Available in thermodynamic, thermostatic, and mechanical (float) types to suit different applications and operating conditions for maximum energy efficiency.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80",
    specifications: ["ASME B16.34", "API 607", "PN16-PN100", "150-1500 Class", "NACE MR0175"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Steam Distribution", "Process Heating", "HVAC"],
    products: [
      { name: "Thermodynamic Steam Trap", type: "TD Series", sizes: "1/2\" - 2\"", standard: "ASME B16.34" },
      { name: "Thermostatic Steam Trap", type: "Balanced Pressure", sizes: "1/2\" - 2\"", standard: "ASME B16.34" },
      { name: "Thermostatic Steam Trap", type: "Bimetallic", sizes: "1/2\" - 2\"", standard: "ASME B16.34" },
      { name: "Float & Thermostatic Trap", type: "F&T Series", sizes: "1/2\" - 4\"", standard: "ASME B16.34" },
      { name: "Inverted Bucket Trap", type: "IB Series", sizes: "1/2\" - 3\"", standard: "ASME B16.34" },
    ],
    features: [
      "Energy-efficient condensate removal",
      "Air venting capability",
      "Multiple operating principles",
      "Long service life",
      "Easy maintenance",
    ],
  },
  "positioner": {
    name: "Valve Positioners",
    description: "Valve positioners for accurate control valve positioning and feedback.",
    longDescription: "Our valve positioners ensure accurate control valve positioning by comparing the valve position with the control signal and making corrections as needed. Available in pneumatic, electro-pneumatic, and digital (smart) versions with advanced diagnostics and communication capabilities.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=80",
    specifications: ["IEC 60534-6", "NAMUR NE43", "4-20mA / HART / Fieldbus", "IP66 Protection", "SIL2/SIL3 Capable"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Process Control", "Petrochemical", "Pharmaceutical"],
    products: [
      { name: "Pneumatic Positioner", type: "P/P", sizes: "Single/Double Acting", standard: "IEC 60534-6" },
      { name: "Electro-Pneumatic Positioner", type: "I/P", sizes: "Single/Double Acting", standard: "IEC 60534-6" },
      { name: "Digital Smart Positioner", type: "HART", sizes: "Single/Double Acting", standard: "IEC 60534-6" },
      { name: "Digital Smart Positioner", type: "Foundation Fieldbus", sizes: "Single/Double Acting", standard: "IEC 60534-6" },
      { name: "Digital Smart Positioner", type: "PROFIBUS PA", sizes: "Single/Double Acting", standard: "IEC 60534-6" },
    ],
    features: [
      "Accurate valve positioning",
      "Advanced diagnostics",
      "Auto-calibration function",
      "Multiple communication protocols",
      "Explosion-proof options",
    ],
  },
  "level-gauge": {
    name: "Level Gauges",
    description: "Visual and electronic level indicators for tanks and vessels.",
    longDescription: "Our level gauges provide reliable liquid level indication for tanks, vessels, and process equipment. Available in tubular glass, magnetic, and reflex types for visual indication, plus electronic options for remote level monitoring and control integration.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    specifications: ["ASME B16.34", "EN 12516", "PN16-PN420", "150-2500 Class", "ATEX Options"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Storage Tanks", "Boilers", "Process Vessels"],
    products: [
      { name: "Tubular Glass Level Gauge", type: "Transparent", sizes: "Up to 1500mm", standard: "EN 12516" },
      { name: "Reflex Level Gauge", type: "Single Window", sizes: "Up to 3000mm", standard: "EN 12516" },
      { name: "Magnetic Level Gauge", type: "Float Type", sizes: "Up to 6000mm", standard: "EN 12516" },
      { name: "Magnetic Level Indicator", type: "With Transmitter", sizes: "Up to 6000mm", standard: "EN 12516" },
      { name: "Bi-Color Level Gauge", type: "Dual Chamber", sizes: "Up to 2000mm", standard: "EN 12516" },
    ],
    features: [
      "Clear visual indication",
      "High pressure/temperature ratings",
      "Magnetic coupling options",
      "Remote transmitter integration",
      "Low maintenance design",
    ],
  },
  "transmitter": {
    name: "Transmitters",
    description: "Pressure, temperature, and flow transmitters for process measurement.",
    longDescription: "Our process transmitters provide accurate, reliable measurement of pressure, temperature, differential pressure, and flow for process control and monitoring. Available with various process connections and output signals for integration into any control system.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
    specifications: ["IEC 61298", "IEC 60529", "4-20mA / HART / Fieldbus", "IP67 Protection", "SIL2/SIL3 Capable"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Process Control", "Oil & Gas", "Water Treatment"],
    products: [
      { name: "Pressure Transmitter", type: "Gauge/Absolute", sizes: "0-100 mbar to 0-1000 bar", standard: "IEC 61298" },
      { name: "Differential Pressure Transmitter", type: "DP", sizes: "0-10 mbar to 0-100 bar", standard: "IEC 61298" },
      { name: "Temperature Transmitter", type: "RTD/TC Input", sizes: "-200°C to +850°C", standard: "IEC 61298" },
      { name: "Level Transmitter", type: "DP/Radar/Guided Wave", sizes: "Various ranges", standard: "IEC 61298" },
      { name: "Flow Transmitter", type: "DP/Vortex/Magnetic", sizes: "Various ranges", standard: "IEC 61298" },
    ],
    features: [
      "High accuracy and stability",
      "Multiple output protocols",
      "Self-diagnostics",
      "Wide rangeability",
      "Explosion-proof options",
    ],
  },
  "tube-fitting": {
    name: "Tube Fittings",
    description: "Compression and flare fittings for instrumentation tubing connections.",
    longDescription: "Our tube fittings provide leak-tight connections for instrumentation tubing in process plants. Available in compression (ferrule) and flare types in stainless steel, brass, and other materials. Designed for easy installation and reliable, repeatable sealing.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80",
    specifications: ["ASME B16.11", "ISO 8434", "MS 33656", "SAE J514", "DIN 2353"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Instrumentation", "Hydraulics", "Pneumatics"],
    products: [
      { name: "Compression Fitting", type: "Twin Ferrule", sizes: "1/8\" - 2\" OD", standard: "ISO 8434" },
      { name: "Compression Fitting", type: "Single Ferrule", sizes: "1/8\" - 1\" OD", standard: "ISO 8434" },
      { name: "Flare Fitting", type: "37° Flare (JIC)", sizes: "1/8\" - 2\" OD", standard: "SAE J514" },
      { name: "Flare Fitting", type: "45° Flare (SAE)", sizes: "1/8\" - 1\" OD", standard: "SAE J512" },
      { name: "Bite Type Fitting", type: "DIN 2353", sizes: "4mm - 42mm OD", standard: "DIN 2353" },
    ],
    features: [
      "Leak-tight metal-to-metal seal",
      "Reusable design",
      "Easy installation",
      "Wide material selection",
      "Various end connections",
    ],
  },
  "expansion-joint": {
    name: "Expansion Joints",
    description: "Flexible connectors for thermal expansion and vibration absorption.",
    longDescription: "Our expansion joints accommodate thermal expansion, vibration, and misalignment in piping systems. Available in metallic bellows, rubber, and PTFE designs to suit different pressure, temperature, and media requirements. Essential for protecting piping systems and equipment.",
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1200&q=80",
    specifications: ["EJMA Standards", "ASME B31.3", "EN 14917", "AD 2000 Merkblatt", "PED Compliant"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "HVAC", "Marine", "Process Piping"],
    products: [
      { name: "Metal Bellows Expansion Joint", type: "Single Ply", sizes: "1\" - 120\" DN", standard: "EJMA" },
      { name: "Metal Bellows Expansion Joint", type: "Multi-Ply", sizes: "2\" - 60\" DN", standard: "EJMA" },
      { name: "Rubber Expansion Joint", type: "Single Sphere", sizes: "1\" - 120\" DN", standard: "ASME B31.3" },
      { name: "Rubber Expansion Joint", type: "Twin Sphere", sizes: "1\" - 48\" DN", standard: "ASME B31.3" },
      { name: "PTFE Expansion Joint", type: "Lined Bellows", sizes: "1\" - 24\" DN", standard: "ASME B31.3" },
    ],
    features: [
      "Absorbs thermal movement",
      "Vibration isolation",
      "Misalignment compensation",
      "Multiple material options",
      "Custom designs available",
    ],
  },
  "pressure-gauge": {
    name: "Pressure Gauges",
    description: "Mechanical and digital pressure indicators for process monitoring.",
    longDescription: "Our pressure gauges provide reliable local pressure indication for process monitoring and equipment protection. Available in bourdon tube, diaphragm, and digital types with various accuracy classes, case sizes, and process connections to suit all applications.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=80",
    specifications: ["EN 837-1", "ASME B40.100", "Accuracy Class 0.5-2.5", "IP65 Protection", "Safety Pattern Options"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Process Monitoring", "HVAC", "Compressors"],
    products: [
      { name: "Bourdon Tube Gauge", type: "Dry Case", sizes: "63-250mm dial", standard: "EN 837-1" },
      { name: "Bourdon Tube Gauge", type: "Liquid Filled", sizes: "63-160mm dial", standard: "EN 837-1" },
      { name: "Diaphragm Pressure Gauge", type: "For Corrosive Media", sizes: "100-160mm dial", standard: "EN 837-3" },
      { name: "Digital Pressure Gauge", type: "Battery Powered", sizes: "Various", standard: "EN 837-1" },
      { name: "Differential Pressure Gauge", type: "Dual Bourdon", sizes: "100-160mm dial", standard: "EN 837-1" },
    ],
    features: [
      "Multiple accuracy classes",
      "Liquid-filled options",
      "Safety pattern available",
      "Various process connections",
      "Weatherproof enclosures",
    ],
  },
  "temperature-gauge": {
    name: "Temperature Gauges",
    description: "Bimetallic and filled system temperature indicators for local display.",
    longDescription: "Our temperature gauges provide reliable local temperature indication using bimetallic or filled system sensing elements. Available in various stem lengths, dial sizes, and temperature ranges with options for adjustable angle mounting and thermowell installation.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    specifications: ["EN 13190", "ASME B40.200", "Accuracy Class 1-2", "IP65 Protection", "Various Stem Lengths"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "HVAC", "Process Monitoring", "Boilers"],
    products: [
      { name: "Bimetallic Thermometer", type: "Back Connection", sizes: "63-160mm dial", standard: "EN 13190" },
      { name: "Bimetallic Thermometer", type: "Bottom Connection", sizes: "63-160mm dial", standard: "EN 13190" },
      { name: "Gas Filled Thermometer", type: "Capillary Type", sizes: "100-160mm dial", standard: "EN 13190" },
      { name: "Vapor Filled Thermometer", type: "Direct Mount", sizes: "100-160mm dial", standard: "EN 13190" },
      { name: "Digital Temperature Indicator", type: "Battery Powered", sizes: "Various", standard: "EN 13190" },
    ],
    features: [
      "Accurate local indication",
      "Multiple mounting options",
      "Adjustable stem angle",
      "Thermowell compatible",
      "Wide temperature ranges",
    ],
  },
  "strainer": {
    name: "Strainers",
    description: "Y-strainers and basket strainers for pipeline debris removal.",
    longDescription: "Our strainers protect pumps, valves, and other equipment by removing debris and particulates from pipelines. Available in Y-type and basket configurations with various screen materials and perforation sizes to suit different filtration requirements.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80",
    specifications: ["ASME B16.34", "API 609", "150-2500 Class", "PN16-PN420", "SS Mesh 20-200"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Pump Protection", "Steam Systems", "Water Treatment"],
    products: [
      { name: "Y-Strainer", type: "Cast Body", sizes: "1/2\" - 24\"", standard: "ASME B16.34" },
      { name: "Y-Strainer", type: "Fabricated Body", sizes: "8\" - 48\"", standard: "ASME B16.34" },
      { name: "Basket Strainer", type: "Single Basket", sizes: "2\" - 24\"", standard: "ASME B16.34" },
      { name: "Basket Strainer", type: "Duplex Basket", sizes: "2\" - 16\"", standard: "ASME B16.34" },
      { name: "T-Strainer", type: "Tee Pattern", sizes: "1\" - 12\"", standard: "ASME B16.34" },
    ],
    features: [
      "Various screen mesh sizes",
      "Blow-down connections",
      "Quick-opening covers",
      "Magnetic options available",
      "Multiple material choices",
    ],
  },
  "gaskets": {
    name: "Gaskets",
    description: "Flange gaskets in spiral wound, ring joint, and sheet materials.",
    longDescription: "Our gaskets provide reliable sealing for flanged connections in piping systems. Available in spiral wound, ring joint, and sheet materials including graphite, PTFE, and compressed fiber. Manufactured to ASME standards with various filler and winding materials for different service conditions.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
    specifications: ["ASME B16.20", "ASME B16.21", "API 6A", "EN 1514", "NACE MR0175"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Petrochemical", "Oil & Gas", "Process Piping"],
    products: [
      { name: "Spiral Wound Gasket", type: "With Inner/Outer Ring", sizes: "1/2\" - 60\"", standard: "ASME B16.20" },
      { name: "Spiral Wound Gasket", type: "Basic Style", sizes: "1/2\" - 48\"", standard: "ASME B16.20" },
      { name: "Ring Joint Gasket", type: "R, RX, BX Types", sizes: "1\" - 24\"", standard: "API 6A" },
      { name: "Sheet Gasket", type: "Compressed Fiber", sizes: "1/2\" - 48\"", standard: "ASME B16.21" },
      { name: "Sheet Gasket", type: "PTFE/Graphite", sizes: "1/2\" - 48\"", standard: "ASME B16.21" },
    ],
    features: [
      "Multiple material options",
      "Various pressure classes",
      "Chemical resistance",
      "High temperature capability",
      "Standard and custom sizes",
    ],
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const accessory = accessoryData[slug];
  
  if (!accessory) {
    return {
      title: "Product Not Found",
    };
  }
  
  return {
    title: `${accessory.name} | Broroma Industrial Pipes`,
    description: accessory.description,
  };
}

export async function generateStaticParams() {
  return Object.keys(accessoryData).map((slug) => ({ slug }));
}

export default async function AccessoryDetailPage({ params }: Props) {
  const { slug } = await params;
  const accessory = accessoryData[slug];
  
  if (!accessory) {
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
            <Link href="/products/accessories" className="hover:text-white transition-colors">Accessories</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">{accessory.name}</span>
          </nav>
          
          {/* Category Badge */}
          <span className="inline-block px-3 py-1 bg-navy-800/50 text-steel-400 text-sm font-medium rounded-full mb-4">
            Accessories
          </span>
          
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">{accessory.name}</h1>
            <p className="text-xl text-navy-200 leading-relaxed">
              {accessory.longDescription}
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
                  src={accessory.image}
                  alt={accessory.name}
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
                        <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">Type</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">Sizes/Range</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900 rounded-r-lg">Standard</th>
                      </tr>
                    </thead>
                    <tbody>
                      {accessory.products.map((product, index) => (
                        <tr key={index} className="border-b border-gray-100">
                          <td className="px-4 py-4 text-navy-900 font-medium">{product.name}</td>
                          <td className="px-4 py-4 text-gray-600">{product.type}</td>
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
                  {accessory.features.map((feature, index) => (
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
                    {accessory.specifications.map((spec, index) => (
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
                    {accessory.applications.map((app, index) => (
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
          <h2 className="text-2xl font-semibold text-navy-900 mb-8">Other Accessories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {Object.entries(accessoryData)
              .filter(([key]) => key !== slug)
              .slice(0, 4)
              .map(([key, a]) => (
                <Link key={key} href={`/products/accessories/${key}`} className="card group">
                  <div className="aspect-[16/10] relative rounded-lg overflow-hidden mb-4">
                    <Image
                      src={a.image}
                      alt={a.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-xs text-accent-500 font-medium">Accessories</span>
                  <h3 className="text-sm md:text-base font-semibold text-navy-900 mb-2 line-clamp-1">{a.name}</h3>
                  <p className="text-gray-600 text-xs md:text-sm line-clamp-2">{a.description}</p>
                </Link>
              ))}
          </div>
          
          {/* Back to Accessories Link */}
          <div className="mt-10 text-center">
            <Link href="/products/accessories" className="inline-flex items-center text-navy-900 font-medium hover:text-accent-500 transition-colors">
              <svg className="w-5 h-5 mr-2 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              Back to All Accessories
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
