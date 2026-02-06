import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Fitting product data
const fittingData: Record<string, {
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
  // Buttweld Fittings
  "buttweld-elbow": {
    name: "Buttweld Elbow (90° / 45°)",
    category: "Buttweld Fittings",
    description: "Buttweld elbows for changing pipe direction. Available in long radius and short radius configurations.",
    longDescription: "Our buttweld elbows are precision manufactured to provide smooth directional changes in piping systems. Available in 90° and 45° configurations with long radius (1.5D) and short radius (1D) options. These fittings are ideal for high-pressure, high-temperature applications in power plants, refineries, and chemical processing facilities.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    specifications: ["ASME B16.9", "ASME B16.28", "MSS SP-75", "EN 10253-2", "EN 10253-4"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Oil & Gas", "Petrochemical", "Water Treatment"],
    products: [
      { name: "Carbon Steel Elbow", grade: "ASTM A234 WPB", sizes: "1/2\" - 48\"", standard: "ASME B16.9" },
      { name: "Carbon Steel Elbow", grade: "ASTM A234 WPC", sizes: "1/2\" - 24\"", standard: "ASME B16.9" },
      { name: "Stainless Steel Elbow", grade: "ASTM A403 WP304/304L", sizes: "1/2\" - 24\"", standard: "ASME B16.9" },
      { name: "Stainless Steel Elbow", grade: "ASTM A403 WP316/316L", sizes: "1/2\" - 24\"", standard: "ASME B16.9" },
      { name: "Alloy Steel Elbow", grade: "ASTM A234 WP5/WP9/WP11/WP22/WP91", sizes: "1/2\" - 24\"", standard: "ASME B16.9" },
    ],
    features: [
      "Long radius and short radius options",
      "90° and 45° configurations",
      "Seamless and welded construction",
      "Smooth internal surface for optimal flow",
      "Full material traceability",
    ],
  },
  "buttweld-tee": {
    name: "Buttweld Tee",
    category: "Buttweld Fittings",
    description: "Buttweld tees for creating branch connections. Available in equal and reducing configurations.",
    longDescription: "Our buttweld tees enable the creation of branch connections in piping systems. Available in equal tee and reducing tee configurations to accommodate various pipe size combinations. Manufactured to stringent quality standards for reliable performance in critical applications.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80",
    specifications: ["ASME B16.9", "MSS SP-75", "EN 10253-2", "EN 10253-4", "ASTM A234"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Oil & Gas", "Petrochemical", "Process Piping"],
    products: [
      { name: "Carbon Steel Tee", grade: "ASTM A234 WPB", sizes: "1/2\" - 48\"", standard: "ASME B16.9" },
      { name: "Carbon Steel Tee", grade: "ASTM A234 WPC", sizes: "1/2\" - 24\"", standard: "ASME B16.9" },
      { name: "Stainless Steel Tee", grade: "ASTM A403 WP304/304L", sizes: "1/2\" - 24\"", standard: "ASME B16.9" },
      { name: "Stainless Steel Tee", grade: "ASTM A403 WP316/316L", sizes: "1/2\" - 24\"", standard: "ASME B16.9" },
      { name: "Alloy Steel Tee", grade: "ASTM A234 WP5/WP9/WP11/WP22/WP91", sizes: "1/2\" - 24\"", standard: "ASME B16.9" },
    ],
    features: [
      "Equal and reducing configurations",
      "Seamless and welded construction",
      "Reinforced branch for strength",
      "Smooth transitions for flow efficiency",
      "Complete dimensional compliance",
    ],
  },
  "buttweld-reducer": {
    name: "Buttweld Reducer (Concentric / Eccentric)",
    category: "Buttweld Fittings",
    description: "Buttweld reducers for transitioning between pipe sizes. Concentric and eccentric options available.",
    longDescription: "Our buttweld reducers facilitate smooth transitions between different pipe sizes. Concentric reducers maintain the centerline while eccentric reducers offset the centerline for specific applications such as pump suction lines. Available in a wide range of size combinations.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=80",
    specifications: ["ASME B16.9", "MSS SP-75", "EN 10253-2", "EN 10253-4", "ASTM A234"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Pump Stations", "Process Piping", "Water Treatment"],
    products: [
      { name: "Carbon Steel Reducer", grade: "ASTM A234 WPB", sizes: "1\" - 48\"", standard: "ASME B16.9" },
      { name: "Carbon Steel Reducer", grade: "ASTM A234 WPC", sizes: "1\" - 24\"", standard: "ASME B16.9" },
      { name: "Stainless Steel Reducer", grade: "ASTM A403 WP304/304L", sizes: "1\" - 24\"", standard: "ASME B16.9" },
      { name: "Stainless Steel Reducer", grade: "ASTM A403 WP316/316L", sizes: "1\" - 24\"", standard: "ASME B16.9" },
      { name: "Alloy Steel Reducer", grade: "ASTM A234 WP5/WP9/WP11/WP22/WP91", sizes: "1\" - 24\"", standard: "ASME B16.9" },
    ],
    features: [
      "Concentric and eccentric options",
      "Gradual transition for smooth flow",
      "Wide range of size combinations",
      "Seamless and welded construction",
      "Maintains system pressure integrity",
    ],
  },
  "buttweld-cap": {
    name: "Buttweld Cap",
    category: "Buttweld Fittings",
    description: "Buttweld caps for sealing pipe ends. Used for system termination and pressure testing.",
    longDescription: "Our buttweld caps provide secure closure for pipe ends in piping systems. Designed with a dished or flat profile, these caps are essential for system termination, pressure testing, and future expansion provisions. Manufactured to withstand full system pressure ratings.",
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1200&q=80",
    specifications: ["ASME B16.9", "MSS SP-75", "EN 10253-2", "EN 10253-4", "ASTM A234"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Pressure Testing", "System Termination", "Future Expansion"],
    products: [
      { name: "Carbon Steel Cap", grade: "ASTM A234 WPB", sizes: "1/2\" - 48\"", standard: "ASME B16.9" },
      { name: "Carbon Steel Cap", grade: "ASTM A234 WPC", sizes: "1/2\" - 24\"", standard: "ASME B16.9" },
      { name: "Stainless Steel Cap", grade: "ASTM A403 WP304/304L", sizes: "1/2\" - 24\"", standard: "ASME B16.9" },
      { name: "Stainless Steel Cap", grade: "ASTM A403 WP316/316L", sizes: "1/2\" - 24\"", standard: "ASME B16.9" },
      { name: "Alloy Steel Cap", grade: "ASTM A234 WP5/WP9/WP11/WP22/WP91", sizes: "1/2\" - 24\"", standard: "ASME B16.9" },
    ],
    features: [
      "Dished and flat profiles available",
      "Full pressure rating capability",
      "Seamless and welded construction",
      "Smooth external finish",
      "Suitable for buried applications",
    ],
  },
  "buttweld-stub-end": {
    name: "Buttweld Stub End",
    category: "Buttweld Fittings",
    description: "Stub ends for use with lap joint flanges. Economical option for stainless and alloy systems.",
    longDescription: "Our buttweld stub ends are designed for use with lap joint flanges, providing an economical solution for systems requiring frequent disassembly or using expensive alloy materials. The stub end is welded to the pipe while the backing flange can be carbon steel, reducing overall material costs.",
    image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=1200&q=80",
    specifications: ["ASME B16.9", "MSS SP-43", "EN 10253-2", "EN 10253-4", "ASTM A234"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Food & Beverage", "Pharmaceutical", "Process Piping"],
    products: [
      { name: "Carbon Steel Stub End", grade: "ASTM A234 WPB", sizes: "1/2\" - 24\"", standard: "ASME B16.9" },
      { name: "Stainless Steel Stub End", grade: "ASTM A403 WP304/304L", sizes: "1/2\" - 24\"", standard: "ASME B16.9" },
      { name: "Stainless Steel Stub End", grade: "ASTM A403 WP316/316L", sizes: "1/2\" - 24\"", standard: "ASME B16.9" },
      { name: "Alloy Steel Stub End", grade: "ASTM A234 WP5/WP9/WP11/WP22", sizes: "1/2\" - 24\"", standard: "ASME B16.9" },
      { name: "MSS Type A Stub End", grade: "Various", sizes: "1/2\" - 24\"", standard: "MSS SP-43" },
    ],
    features: [
      "Type A and Type B configurations",
      "Cost-effective for alloy systems",
      "Easy flange rotation for bolt alignment",
      "Smooth bore for flow efficiency",
      "Compatible with lap joint flanges",
    ],
  },
  "buttweld-cross": {
    name: "Buttweld Cross",
    category: "Buttweld Fittings",
    description: "Buttweld crosses for four-way pipe connections. Available in equal and reducing configurations.",
    longDescription: "Our buttweld crosses enable four-way connections in piping systems. Available in equal cross and reducing cross configurations to accommodate various pipe size combinations. These fittings are manufactured to exacting standards for demanding industrial applications.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80",
    specifications: ["ASME B16.9", "MSS SP-75", "EN 10253-2", "EN 10253-4", "ASTM A234"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Fire Protection", "HVAC", "Process Piping"],
    products: [
      { name: "Carbon Steel Cross", grade: "ASTM A234 WPB", sizes: "1/2\" - 24\"", standard: "ASME B16.9" },
      { name: "Carbon Steel Cross", grade: "ASTM A234 WPC", sizes: "1/2\" - 12\"", standard: "ASME B16.9" },
      { name: "Stainless Steel Cross", grade: "ASTM A403 WP304/304L", sizes: "1/2\" - 12\"", standard: "ASME B16.9" },
      { name: "Stainless Steel Cross", grade: "ASTM A403 WP316/316L", sizes: "1/2\" - 12\"", standard: "ASME B16.9" },
      { name: "Alloy Steel Cross", grade: "ASTM A234 WP5/WP9/WP11/WP22", sizes: "1/2\" - 12\"", standard: "ASME B16.9" },
    ],
    features: [
      "Equal and reducing configurations",
      "Four-way flow distribution",
      "Seamless and welded construction",
      "Reinforced design for strength",
      "Smooth internal transitions",
    ],
  },

  // Forged Fittings
  "forged-coupling": {
    name: "Forged Coupling",
    category: "Forged Fittings",
    description: "Forged couplings for connecting two pipes. Available in full coupling and half coupling configurations.",
    longDescription: "Our forged couplings provide secure connections between pipes or between pipes and other fittings. Available in full coupling (connects two pipes) and half coupling (connects pipe to vessel or equipment) configurations. Socket weld and threaded end connections available.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    specifications: ["ASME B16.11", "MSS SP-79", "MSS SP-83", "BS 3799", "EN 10241"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Instrumentation", "Small Bore Piping", "High Pressure Systems"],
    products: [
      { name: "Carbon Steel Coupling", grade: "ASTM A105", sizes: "1/8\" - 4\"", standard: "ASME B16.11" },
      { name: "Carbon Steel Coupling", grade: "ASTM A350 LF2", sizes: "1/8\" - 4\"", standard: "ASME B16.11" },
      { name: "Stainless Steel Coupling", grade: "ASTM A182 F304/304L", sizes: "1/8\" - 4\"", standard: "ASME B16.11" },
      { name: "Stainless Steel Coupling", grade: "ASTM A182 F316/316L", sizes: "1/8\" - 4\"", standard: "ASME B16.11" },
      { name: "Alloy Steel Coupling", grade: "ASTM A182 F5/F9/F11/F22/F91", sizes: "1/8\" - 4\"", standard: "ASME B16.11" },
    ],
    features: [
      "Full and half coupling options",
      "Socket weld and threaded ends",
      "Class 3000, 6000, 9000 ratings",
      "Forged from solid bar stock",
      "High pressure capability",
    ],
  },
  "forged-union": {
    name: "Forged Union",
    category: "Forged Fittings",
    description: "Forged unions for easy pipe disconnection. Three-piece design allows for maintenance access.",
    longDescription: "Our forged unions provide a means of disconnecting piping without disturbing other joints. The three-piece design (two threaded or socket weld ends plus a nut) allows for easy assembly and disassembly. Ideal for maintenance access points and equipment connections.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80",
    specifications: ["ASME B16.11", "MSS SP-83", "BS 3799", "EN 10241", "API 602"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Instrumentation", "Equipment Connections", "Maintenance Points"],
    products: [
      { name: "Carbon Steel Union", grade: "ASTM A105", sizes: "1/8\" - 4\"", standard: "ASME B16.11" },
      { name: "Carbon Steel Union", grade: "ASTM A350 LF2", sizes: "1/8\" - 4\"", standard: "ASME B16.11" },
      { name: "Stainless Steel Union", grade: "ASTM A182 F304/304L", sizes: "1/8\" - 4\"", standard: "ASME B16.11" },
      { name: "Stainless Steel Union", grade: "ASTM A182 F316/316L", sizes: "1/8\" - 4\"", standard: "ASME B16.11" },
      { name: "Alloy Steel Union", grade: "ASTM A182 F5/F9/F11/F22", sizes: "1/8\" - 4\"", standard: "ASME B16.11" },
    ],
    features: [
      "Three-piece construction",
      "Easy assembly and disassembly",
      "Socket weld and threaded ends",
      "Ground and lapped seating surfaces",
      "Metal-to-metal or soft seat options",
    ],
  },
  "forged-elbow": {
    name: "Forged Elbow",
    category: "Forged Fittings",
    description: "Forged elbows for changing direction in small-bore piping. Available in 90° and 45° configurations.",
    longDescription: "Our forged elbows provide directional changes in small-bore, high-pressure piping systems. Available in 90° and 45° configurations with socket weld or threaded connections. Manufactured from solid forged bar stock for superior strength and pressure integrity.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=80",
    specifications: ["ASME B16.11", "MSS SP-79", "MSS SP-83", "BS 3799", "EN 10241"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Instrumentation", "Small Bore Piping", "High Pressure Systems"],
    products: [
      { name: "Carbon Steel Elbow", grade: "ASTM A105", sizes: "1/8\" - 4\"", standard: "ASME B16.11" },
      { name: "Carbon Steel Elbow", grade: "ASTM A350 LF2", sizes: "1/8\" - 4\"", standard: "ASME B16.11" },
      { name: "Stainless Steel Elbow", grade: "ASTM A182 F304/304L", sizes: "1/8\" - 4\"", standard: "ASME B16.11" },
      { name: "Stainless Steel Elbow", grade: "ASTM A182 F316/316L", sizes: "1/8\" - 4\"", standard: "ASME B16.11" },
      { name: "Alloy Steel Elbow", grade: "ASTM A182 F5/F9/F11/F22/F91", sizes: "1/8\" - 4\"", standard: "ASME B16.11" },
    ],
    features: [
      "90° and 45° configurations",
      "Socket weld and threaded ends",
      "Class 3000, 6000, 9000 ratings",
      "Smooth bore for flow efficiency",
      "Forged construction for strength",
    ],
  },
  "forged-tee": {
    name: "Forged Tee",
    category: "Forged Fittings",
    description: "Forged tees for branch connections in small-bore systems. Equal and reducing options available.",
    longDescription: "Our forged tees enable branch connections in small-bore, high-pressure piping systems. Available in equal and reducing configurations with socket weld or threaded connections. Manufactured from solid forged bar stock for maximum strength and reliability.",
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1200&q=80",
    specifications: ["ASME B16.11", "MSS SP-79", "MSS SP-83", "BS 3799", "EN 10241"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Instrumentation", "Small Bore Piping", "Sampling Systems"],
    products: [
      { name: "Carbon Steel Tee", grade: "ASTM A105", sizes: "1/8\" - 4\"", standard: "ASME B16.11" },
      { name: "Carbon Steel Tee", grade: "ASTM A350 LF2", sizes: "1/8\" - 4\"", standard: "ASME B16.11" },
      { name: "Stainless Steel Tee", grade: "ASTM A182 F304/304L", sizes: "1/8\" - 4\"", standard: "ASME B16.11" },
      { name: "Stainless Steel Tee", grade: "ASTM A182 F316/316L", sizes: "1/8\" - 4\"", standard: "ASME B16.11" },
      { name: "Alloy Steel Tee", grade: "ASTM A182 F5/F9/F11/F22/F91", sizes: "1/8\" - 4\"", standard: "ASME B16.11" },
    ],
    features: [
      "Equal and reducing configurations",
      "Socket weld and threaded ends",
      "Class 3000, 6000, 9000 ratings",
      "Reinforced branch construction",
      "Full bore design available",
    ],
  },
  "forged-cap": {
    name: "Forged Cap",
    category: "Forged Fittings",
    description: "Forged caps for closing pipe ends. Socket weld and threaded connections available.",
    longDescription: "Our forged caps provide secure closure for pipe ends in small-bore, high-pressure systems. Available with socket weld or threaded connections. Manufactured from solid forged bar stock to withstand full system pressure and temperature ratings.",
    image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=1200&q=80",
    specifications: ["ASME B16.11", "MSS SP-79", "MSS SP-83", "BS 3799", "EN 10241"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Instrumentation", "System Termination", "Pressure Testing"],
    products: [
      { name: "Carbon Steel Cap", grade: "ASTM A105", sizes: "1/8\" - 4\"", standard: "ASME B16.11" },
      { name: "Carbon Steel Cap", grade: "ASTM A350 LF2", sizes: "1/8\" - 4\"", standard: "ASME B16.11" },
      { name: "Stainless Steel Cap", grade: "ASTM A182 F304/304L", sizes: "1/8\" - 4\"", standard: "ASME B16.11" },
      { name: "Stainless Steel Cap", grade: "ASTM A182 F316/316L", sizes: "1/8\" - 4\"", standard: "ASME B16.11" },
      { name: "Alloy Steel Cap", grade: "ASTM A182 F5/F9/F11/F22/F91", sizes: "1/8\" - 4\"", standard: "ASME B16.11" },
    ],
    features: [
      "Socket weld and threaded ends",
      "Class 3000, 6000, 9000 ratings",
      "Solid forged construction",
      "Full pressure rating",
      "Hex head option available",
    ],
  },
  "forged-bushing": {
    name: "Forged Bushing",
    category: "Forged Fittings",
    description: "Forged bushings for reducing pipe size. Hex head and flush designs available.",
    longDescription: "Our forged bushings provide a means of reducing pipe size in threaded systems. Available in hex head (for easy installation with wrench) and flush (concentric) designs. Manufactured from solid forged bar stock for maximum durability in high-pressure applications.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80",
    specifications: ["ASME B16.11", "MSS SP-79", "MSS SP-83", "BS 3799", "EN 10241"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Instrumentation", "Pipe Size Reduction", "Connection Adaptation"],
    products: [
      { name: "Carbon Steel Bushing", grade: "ASTM A105", sizes: "1/4\" x 1/8\" - 4\" x 2\"", standard: "ASME B16.11" },
      { name: "Carbon Steel Bushing", grade: "ASTM A350 LF2", sizes: "1/4\" x 1/8\" - 4\" x 2\"", standard: "ASME B16.11" },
      { name: "Stainless Steel Bushing", grade: "ASTM A182 F304/304L", sizes: "1/4\" x 1/8\" - 4\" x 2\"", standard: "ASME B16.11" },
      { name: "Stainless Steel Bushing", grade: "ASTM A182 F316/316L", sizes: "1/4\" x 1/8\" - 4\" x 2\"", standard: "ASME B16.11" },
      { name: "Alloy Steel Bushing", grade: "ASTM A182 F5/F9/F11/F22", sizes: "1/4\" x 1/8\" - 4\" x 2\"", standard: "ASME B16.11" },
    ],
    features: [
      "Hex head and flush designs",
      "Wide range of size reductions",
      "Class 3000, 6000 ratings",
      "Solid forged construction",
      "Male x female thread configuration",
    ],
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const fitting = fittingData[slug];
  
  if (!fitting) {
    return {
      title: "Product Not Found",
    };
  }
  
  return {
    title: `${fitting.name} | Broroma Industrial Pipes`,
    description: fitting.description,
  };
}

export async function generateStaticParams() {
  return Object.keys(fittingData).map((slug) => ({ slug }));
}

export default async function FittingDetailPage({ params }: Props) {
  const { slug } = await params;
  const fitting = fittingData[slug];
  
  if (!fitting) {
    notFound();
  }
  
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-navy py-16 md:py-24">
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
            <Link href="/products/fittings" className="hover:text-white transition-colors">Fittings</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">{fitting.name}</span>
          </nav>
          
          {/* Category Badge */}
          <span className="inline-block px-3 py-1 bg-navy-800/50 text-steel-400 text-sm font-medium rounded-full mb-4">
            {fitting.category}
          </span>
          
          <div className="max-w-3xl">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{fitting.name}</h1>
            <p className="text-base md:text-lg text-navy-200 leading-relaxed">
              {fitting.longDescription}
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
                  src={fitting.image}
                  alt={fitting.name}
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
                      {fitting.products.map((product, index) => (
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
                  {fitting.features.map((feature, index) => (
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
                    {fitting.specifications.map((spec, index) => (
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
                    {fitting.applications.map((app, index) => (
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
          <h2 className="text-2xl font-semibold text-navy-900 mb-8">Other Fitting Products</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(fittingData)
              .filter(([key]) => key !== slug)
              .slice(0, 3)
              .map(([key, f]) => (
                <Link key={key} href={`/products/fittings/${key}`} className="card group">
                  <div className="aspect-[16/10] relative rounded-lg overflow-hidden mb-4">
                    <Image
                      src={f.image}
                      alt={f.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-xs text-accent-500 font-medium">{f.category}</span>
                  <h3 className="text-base font-semibold text-navy-900 mb-2 line-clamp-1">{f.name}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{f.description}</p>
                </Link>
              ))}
          </div>
          
          {/* Back to Fittings Link */}
          <div className="mt-10 text-center">
            <Link href="/products/fittings" className="inline-flex items-center text-navy-900 font-medium hover:text-accent-500 transition-colors">
              <svg className="w-5 h-5 mr-2 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              Back to All Fittings
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
