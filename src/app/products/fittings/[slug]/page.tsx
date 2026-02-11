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
    type?: string;
    grade: string;
    sizes: string;
    schedule?: string;
    pressureClass?: string;
    standard: string;
  }[];
  tableNote?: string;
}> = {
  // Buttweld Fittings
  "buttweld-elbow": {
    name: "Buttweld Elbow (90° / 45°)",
    category: "Buttweld Fittings",
    description: "Buttweld elbows for changing pipe direction. Available in long radius and short radius configurations.",
    longDescription: "90° and 45° buttweld elbows in long radius (1.5D) and short radius (1D). Carbon, stainless, alloy, and duplex steel. Seamless and welded construction. Sizes from 1/2\" to 48\" with full material traceability.",
    image: "/products/buttweld-elbow.png",
    specifications: ["ASME B16.9", "ASME B16.28", "MSS SP-75", "EN 10253-2", "EN 10253-4", "JIS B2311", "JIS B2312"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Oil & Gas", "Petrochemical", "Water Treatment"],
    products: [
      { name: "Carbon Steel", grade: "ASTM A234 WPB", sizes: "1/2\" - 48\"", schedule: "SCH 40, 80, 160, XXS", standard: "ASME B16.9" },
      { name: "Carbon Steel", grade: "ASTM A234 WPC", sizes: "1/2\" - 24\"", schedule: "SCH 40, 80, 160, XXS", standard: "ASME B16.9" },
      { name: "Stainless Steel", grade: "ASTM A403 WP304/304L", sizes: "1/2\" - 24\"", schedule: "SCH 10S, 40S, 80S", standard: "ASME B16.9" },
      { name: "Stainless Steel", grade: "ASTM A403 WP316/316L", sizes: "1/2\" - 24\"", schedule: "SCH 10S, 40S, 80S", standard: "ASME B16.9" },
      { name: "Alloy Steel", grade: "ASTM A234 WP5/WP9/WP11/WP22/WP91", sizes: "1/2\" - 24\"", schedule: "SCH 40, 80, 160, XXS", standard: "ASME B16.9" },
    ],
    tableNote: "All elbows available in Long Radius (LR) and Short Radius (SR) configurations.",
  },
  "buttweld-tee": {
    name: "Buttweld Tee",
    category: "Buttweld Fittings",
    description: "Buttweld tees for creating branch connections. Available in equal and reducing configurations.",
    longDescription: "Equal and reducing tees. Carbon, stainless, and alloy steel. Seamless and welded construction. Sizes from 1/2\" to 48\". Full material traceability.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80",
    specifications: ["ASME B16.9", "MSS SP-75", "EN 10253-2", "EN 10253-4", "JIS B2311", "JIS B2312"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Oil & Gas", "Petrochemical", "Process Piping"],
    products: [
      { name: "Carbon Steel", grade: "ASTM A234 WPB", sizes: "1/2\" - 48\"", schedule: "SCH 40, 80, 160, XXS", standard: "ASME B16.9" },
      { name: "Carbon Steel", grade: "ASTM A234 WPC", sizes: "1/2\" - 24\"", schedule: "SCH 40, 80, 160, XXS", standard: "ASME B16.9" },
      { name: "Stainless Steel", grade: "ASTM A403 WP304/304L", sizes: "1/2\" - 24\"", schedule: "SCH 10S, 40S, 80S", standard: "ASME B16.9" },
      { name: "Stainless Steel", grade: "ASTM A403 WP316/316L", sizes: "1/2\" - 24\"", schedule: "SCH 10S, 40S, 80S", standard: "ASME B16.9" },
      { name: "Alloy Steel", grade: "ASTM A234 WP5/WP9/WP11/WP22/WP91", sizes: "1/2\" - 24\"", schedule: "SCH 40, 80, 160, XXS", standard: "ASME B16.9" },
    ],
    tableNote: "Available in equal and reducing configurations.",
  },
  "buttweld-reducer": {
    name: "Buttweld Reducer (Concentric / Eccentric)",
    category: "Buttweld Fittings",
    description: "Buttweld reducers for transitioning between pipe sizes. Concentric and eccentric options available.",
    longDescription: "Concentric and eccentric reducers. Carbon, stainless, and alloy steel. Seamless and welded construction. Sizes from 1\" to 48\". Full material traceability.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=80",
    specifications: ["ASME B16.9", "MSS SP-75", "EN 10253-2", "EN 10253-4", "JIS B2311", "JIS B2312"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Pump Stations", "Process Piping", "Water Treatment"],
    products: [
      { name: "Carbon Steel", grade: "ASTM A234 WPB", sizes: "1\" - 48\"", schedule: "SCH 40, 80, 160, XXS", standard: "ASME B16.9" },
      { name: "Carbon Steel", grade: "ASTM A234 WPC", sizes: "1\" - 24\"", schedule: "SCH 40, 80, 160, XXS", standard: "ASME B16.9" },
      { name: "Stainless Steel", grade: "ASTM A403 WP304/304L", sizes: "1\" - 24\"", schedule: "SCH 10S, 40S, 80S", standard: "ASME B16.9" },
      { name: "Stainless Steel", grade: "ASTM A403 WP316/316L", sizes: "1\" - 24\"", schedule: "SCH 10S, 40S, 80S", standard: "ASME B16.9" },
      { name: "Alloy Steel", grade: "ASTM A234 WP5/WP9/WP11/WP22/WP91", sizes: "1\" - 24\"", schedule: "SCH 40, 80, 160, XXS", standard: "ASME B16.9" },
    ],
    tableNote: "Available in concentric and eccentric configurations.",
  },
  "buttweld-cap": {
    name: "Buttweld Cap",
    category: "Buttweld Fittings",
    description: "Buttweld caps for sealing pipe ends. Used for system termination and pressure testing.",
    longDescription: "Dished and flat profile caps. Carbon, stainless, and alloy steel. Seamless and welded construction. Sizes from 1/2\" to 48\". Full pressure rating.",
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1200&q=80",
    specifications: ["ASME B16.9", "MSS SP-75", "EN 10253-2", "EN 10253-4", "JIS B2311", "JIS B2312"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Pressure Testing", "System Termination", "Future Expansion"],
    products: [
      { name: "Carbon Steel", grade: "ASTM A234 WPB", sizes: "1/2\" - 48\"", schedule: "SCH 40, 80, 160, XXS", standard: "ASME B16.9" },
      { name: "Carbon Steel", grade: "ASTM A234 WPC", sizes: "1/2\" - 24\"", schedule: "SCH 40, 80, 160, XXS", standard: "ASME B16.9" },
      { name: "Stainless Steel", grade: "ASTM A403 WP304/304L", sizes: "1/2\" - 24\"", schedule: "SCH 10S, 40S, 80S", standard: "ASME B16.9" },
      { name: "Stainless Steel", grade: "ASTM A403 WP316/316L", sizes: "1/2\" - 24\"", schedule: "SCH 10S, 40S, 80S", standard: "ASME B16.9" },
      { name: "Alloy Steel", grade: "ASTM A234 WP5/WP9/WP11/WP22/WP91", sizes: "1/2\" - 24\"", schedule: "SCH 40, 80, 160, XXS", standard: "ASME B16.9" },
    ],
  },
  "buttweld-stub-end": {
    name: "Buttweld Stub End",
    category: "Buttweld Fittings",
    description: "Stub ends for use with lap joint flanges. Economical option for stainless and alloy systems.",
    longDescription: "Type A and Type B stub ends for lap joint flanges. Carbon, stainless, and alloy steel. Sizes from 1/2\" to 24\". Compatible with lap joint flanges.",
    image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=1200&q=80",
    specifications: ["ASME B16.9", "MSS SP-43", "EN 10253-2", "EN 10253-4", "JIS B2311", "JIS B2312"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Food & Beverage", "Pharmaceutical", "Process Piping"],
    products: [
      { name: "Carbon Steel", grade: "ASTM A234 WPB", sizes: "1/2\" - 24\"", schedule: "SCH 40, 80, 160, XXS", standard: "ASME B16.9" },
      { name: "Stainless Steel", grade: "ASTM A403 WP304/304L", sizes: "1/2\" - 24\"", schedule: "SCH 10S, 40S, 80S", standard: "ASME B16.9" },
      { name: "Stainless Steel", grade: "ASTM A403 WP316/316L", sizes: "1/2\" - 24\"", schedule: "SCH 10S, 40S, 80S", standard: "ASME B16.9" },
      { name: "Alloy Steel", grade: "ASTM A234 WP5/WP9/WP11/WP22", sizes: "1/2\" - 24\"", schedule: "SCH 40, 80, 160, XXS", standard: "ASME B16.9" },
    ],
    tableNote: "Type A (standard) and Type B (short pattern) available.",
  },
  "buttweld-cross": {
    name: "Buttweld Cross",
    category: "Buttweld Fittings",
    description: "Buttweld crosses for four-way pipe connections. Available in equal and reducing configurations.",
    longDescription: "Equal and reducing crosses for four-way connections. Carbon, stainless, and alloy steel. Seamless and welded construction. Sizes from 1/2\" to 24\".",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80",
    specifications: ["ASME B16.9", "MSS SP-75", "EN 10253-2", "EN 10253-4", "JIS B2311", "JIS B2312"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Fire Protection", "HVAC", "Process Piping"],
    products: [
      { name: "Carbon Steel", grade: "ASTM A234 WPB", sizes: "1/2\" - 24\"", schedule: "SCH 40, 80, 160, XXS", standard: "ASME B16.9" },
      { name: "Carbon Steel", grade: "ASTM A234 WPC", sizes: "1/2\" - 12\"", schedule: "SCH 40, 80, 160, XXS", standard: "ASME B16.9" },
      { name: "Stainless Steel", grade: "ASTM A403 WP304/304L", sizes: "1/2\" - 12\"", schedule: "SCH 10S, 40S, 80S", standard: "ASME B16.9" },
      { name: "Stainless Steel", grade: "ASTM A403 WP316/316L", sizes: "1/2\" - 12\"", schedule: "SCH 10S, 40S, 80S", standard: "ASME B16.9" },
      { name: "Alloy Steel", grade: "ASTM A234 WP5/WP9/WP11/WP22", sizes: "1/2\" - 12\"", schedule: "SCH 40, 80, 160, XXS", standard: "ASME B16.9" },
    ],
    tableNote: "Available in equal and reducing configurations.",
  },

  // Forged Fittings
  "forged-coupling": {
    name: "Forged Coupling",
    category: "Forged Fittings",
    description: "Forged couplings for connecting two pipes. Available in full coupling and half coupling configurations.",
    longDescription: "Full and half couplings. Socket weld and threaded ends. Carbon, stainless, and alloy steel. Class 3000#, 6000#, 9000#. Sizes 1/8\" to 4\".",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    specifications: ["ASME B16.11", "MSS SP-79", "MSS SP-83", "BS 3799", "JIS B2316"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Instrumentation", "Small Bore Piping", "High Pressure Systems"],
    products: [
      { name: "Carbon Steel (SW)", grade: "ASTM A105", sizes: "1/8\" - 4\"", pressureClass: "3000#, 6000#, 9000#", standard: "ASME B16.11" },
      { name: "Carbon Steel (THD)", grade: "ASTM A105", sizes: "1/8\" - 4\"", pressureClass: "2000#, 3000#, 6000#", standard: "ASME B16.11" },
      { name: "Stainless Steel (SW)", grade: "ASTM A182 F304/304L", sizes: "1/8\" - 4\"", pressureClass: "3000#, 6000#, 9000#", standard: "ASME B16.11" },
      { name: "Stainless Steel (THD)", grade: "ASTM A182 F316/316L", sizes: "1/8\" - 4\"", pressureClass: "2000#, 3000#, 6000#", standard: "ASME B16.11" },
      { name: "Alloy Steel (SW)", grade: "ASTM A182 F5/F9/F11/F22/F91", sizes: "1/8\" - 4\"", pressureClass: "3000#, 6000#, 9000#", standard: "ASME B16.11" },
    ],
    tableNote: "SW = Socket Weld, THD = Threaded.",
  },
  "forged-union": {
    name: "Forged Union",
    category: "Forged Fittings",
    description: "Forged unions for easy pipe disconnection. Three-piece design allows for maintenance access.",
    longDescription: "Three-piece unions for easy assembly/disassembly. Socket weld and threaded ends. Carbon, stainless, and alloy steel. Sizes 1/8\" to 4\".",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80",
    specifications: ["ASME B16.11", "MSS SP-83", "BS 3799", "JIS B2316", "API 602"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Instrumentation", "Equipment Connections", "Maintenance Points"],
    products: [
      { name: "Carbon Steel (SW)", grade: "ASTM A105", sizes: "1/8\" - 4\"", pressureClass: "3000#, 6000#, 9000#", standard: "ASME B16.11" },
      { name: "Carbon Steel (THD)", grade: "ASTM A105", sizes: "1/8\" - 4\"", pressureClass: "2000#, 3000#, 6000#", standard: "ASME B16.11" },
      { name: "Stainless Steel (SW)", grade: "ASTM A182 F304/304L", sizes: "1/8\" - 4\"", pressureClass: "3000#, 6000#, 9000#", standard: "ASME B16.11" },
      { name: "Stainless Steel (THD)", grade: "ASTM A182 F316/316L", sizes: "1/8\" - 4\"", pressureClass: "2000#, 3000#, 6000#", standard: "ASME B16.11" },
      { name: "Alloy Steel (SW)", grade: "ASTM A182 F5/F9/F11/F22", sizes: "1/8\" - 4\"", pressureClass: "3000#, 6000#, 9000#", standard: "ASME B16.11" },
    ],
    tableNote: "SW = Socket Weld, THD = Threaded.",
  },
  "forged-elbow": {
    name: "Forged Elbow",
    category: "Forged Fittings",
    description: "Forged elbows for changing direction in small-bore piping. Available in 90° and 45° configurations.",
    longDescription: "90° and 45° forged elbows. Socket weld and threaded ends. Carbon, stainless, and alloy steel. Class 3000#, 6000#, 9000#. Sizes 1/8\" to 4\".",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=80",
    specifications: ["ASME B16.11", "MSS SP-79", "MSS SP-83", "BS 3799", "JIS B2316"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Instrumentation", "Small Bore Piping", "High Pressure Systems"],
    products: [
      { name: "Carbon Steel (SW)", grade: "ASTM A105", sizes: "1/8\" - 4\"", pressureClass: "3000#, 6000#, 9000#", standard: "ASME B16.11" },
      { name: "Carbon Steel (THD)", grade: "ASTM A105", sizes: "1/8\" - 4\"", pressureClass: "2000#, 3000#, 6000#", standard: "ASME B16.11" },
      { name: "Stainless Steel (SW)", grade: "ASTM A182 F304/304L", sizes: "1/8\" - 4\"", pressureClass: "3000#, 6000#, 9000#", standard: "ASME B16.11" },
      { name: "Stainless Steel (THD)", grade: "ASTM A182 F316/316L", sizes: "1/8\" - 4\"", pressureClass: "2000#, 3000#, 6000#", standard: "ASME B16.11" },
      { name: "Alloy Steel (SW)", grade: "ASTM A182 F5/F9/F11/F22/F91", sizes: "1/8\" - 4\"", pressureClass: "3000#, 6000#, 9000#", standard: "ASME B16.11" },
    ],
    tableNote: "SW = Socket Weld, THD = Threaded. Available in 90° and 45°.",
  },
  "forged-tee": {
    name: "Forged Tee",
    category: "Forged Fittings",
    description: "Forged tees for branch connections in small-bore systems. Equal and reducing options available.",
    longDescription: "Equal and reducing forged tees. Socket weld and threaded ends. Carbon, stainless, and alloy steel. Class 3000#, 6000#, 9000#. Sizes 1/8\" to 4\".",
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1200&q=80",
    specifications: ["ASME B16.11", "MSS SP-79", "MSS SP-83", "BS 3799", "JIS B2316"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Instrumentation", "Small Bore Piping", "Sampling Systems"],
    products: [
      { name: "Carbon Steel (SW)", grade: "ASTM A105", sizes: "1/8\" - 4\"", pressureClass: "3000#, 6000#, 9000#", standard: "ASME B16.11" },
      { name: "Carbon Steel (THD)", grade: "ASTM A105", sizes: "1/8\" - 4\"", pressureClass: "2000#, 3000#, 6000#", standard: "ASME B16.11" },
      { name: "Stainless Steel (SW)", grade: "ASTM A182 F304/304L", sizes: "1/8\" - 4\"", pressureClass: "3000#, 6000#, 9000#", standard: "ASME B16.11" },
      { name: "Stainless Steel (THD)", grade: "ASTM A182 F316/316L", sizes: "1/8\" - 4\"", pressureClass: "2000#, 3000#, 6000#", standard: "ASME B16.11" },
      { name: "Alloy Steel (SW)", grade: "ASTM A182 F5/F9/F11/F22/F91", sizes: "1/8\" - 4\"", pressureClass: "3000#, 6000#, 9000#", standard: "ASME B16.11" },
    ],
    tableNote: "SW = Socket Weld, THD = Threaded.",
  },
  "forged-cap": {
    name: "Forged Cap",
    category: "Forged Fittings",
    description: "Forged caps for closing pipe ends. Socket weld and threaded connections available.",
    longDescription: "Forged caps for pipe end closure. Socket weld and threaded ends. Carbon, stainless, and alloy steel. Class 3000#, 6000#, 9000#. Sizes 1/8\" to 4\".",
    image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=1200&q=80",
    specifications: ["ASME B16.11", "MSS SP-79", "MSS SP-83", "BS 3799", "JIS B2316"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Instrumentation", "System Termination", "Pressure Testing"],
    products: [
      { name: "Carbon Steel (SW)", grade: "ASTM A105", sizes: "1/8\" - 4\"", pressureClass: "3000#, 6000#, 9000#", standard: "ASME B16.11" },
      { name: "Carbon Steel (THD)", grade: "ASTM A105", sizes: "1/8\" - 4\"", pressureClass: "2000#, 3000#, 6000#", standard: "ASME B16.11" },
      { name: "Stainless Steel (SW)", grade: "ASTM A182 F304/304L", sizes: "1/8\" - 4\"", pressureClass: "3000#, 6000#, 9000#", standard: "ASME B16.11" },
      { name: "Stainless Steel (THD)", grade: "ASTM A182 F316/316L", sizes: "1/8\" - 4\"", pressureClass: "2000#, 3000#, 6000#", standard: "ASME B16.11" },
      { name: "Alloy Steel (SW)", grade: "ASTM A182 F5/F9/F11/F22/F91", sizes: "1/8\" - 4\"", pressureClass: "3000#, 6000#, 9000#", standard: "ASME B16.11" },
    ],
    tableNote: "SW = Socket Weld, THD = Threaded.",
  },
  "forged-bushing": {
    name: "Forged Bushing",
    category: "Forged Fittings",
    description: "Forged bushings for reducing pipe size. Hex head and flush designs available.",
    longDescription: "Hex head and flush bushings for pipe size reduction. Carbon, stainless, and alloy steel. Class 3000#, 6000#. Sizes 1/4\" x 1/8\" to 4\" x 2\".",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80",
    specifications: ["ASME B16.11", "MSS SP-79", "MSS SP-83", "BS 3799", "JIS B2316"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Instrumentation", "Pipe Size Reduction", "Connection Adaptation"],
    products: [
      { name: "Carbon Steel (Hex)", grade: "ASTM A105", sizes: "1/4\" x 1/8\" - 4\" x 2\"", pressureClass: "3000#, 6000#", standard: "ASME B16.11" },
      { name: "Carbon Steel (Flush)", grade: "ASTM A105", sizes: "1/4\" x 1/8\" - 4\" x 2\"", pressureClass: "3000#, 6000#", standard: "ASME B16.11" },
      { name: "Stainless Steel (Hex)", grade: "ASTM A182 F304/304L", sizes: "1/4\" x 1/8\" - 4\" x 2\"", pressureClass: "3000#, 6000#", standard: "ASME B16.11" },
      { name: "Stainless Steel (Flush)", grade: "ASTM A182 F316/316L", sizes: "1/4\" x 1/8\" - 4\" x 2\"", pressureClass: "3000#, 6000#", standard: "ASME B16.11" },
      { name: "Alloy Steel (Hex)", grade: "ASTM A182 F5/F9/F11/F22", sizes: "1/4\" x 1/8\" - 4\" x 2\"", pressureClass: "3000#, 6000#", standard: "ASME B16.11" },
    ],
    tableNote: "Hex = Hex Head, Flush = Concentric design.",
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
            <Link href="/products/fittings" className="hover:text-white transition-colors">Fittings</Link>
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white truncate max-w-[180px] sm:max-w-none">{fitting.name}</span>
          </nav>
          
          <div className="max-w-3xl">
            <h1 className="text-white text-2xl md:text-4xl font-bold mt-3 mb-4">{fitting.name}</h1>
            <p className="text-sm md:text-base text-navy-200 leading-relaxed">
              {fitting.longDescription}
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
              {/* Hero Image - reduced height for all pages */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden mb-5 sm:mb-7 aspect-[5/2]">
                <Image
                  src={fitting.image}
                  alt={fitting.name}
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
                    {(() => {
                      const hasType = fitting.products.some(p => p.type);
                      const hasSchedule = fitting.products.some(p => p.schedule);
                      const hasPressureClass = fitting.products.some(p => p.pressureClass);
                      return (
                        <table className="w-full min-w-[520px]">
                          <thead>
                            <tr className="bg-navy-50">
                              <th className="px-3 py-2.5 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-semibold text-navy-900 rounded-l-lg whitespace-nowrap">Material</th>
                              {hasType && <th className="px-3 py-2.5 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-semibold text-navy-900 whitespace-nowrap">Type</th>}
                              <th className="px-3 py-2.5 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-semibold text-navy-900 whitespace-nowrap">Grade</th>
                              <th className="px-3 py-2.5 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-semibold text-navy-900 whitespace-nowrap">Sizes</th>
                              {hasSchedule && <th className="px-3 py-2.5 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-semibold text-navy-900 whitespace-nowrap">Schedule</th>}
                              {hasPressureClass && <th className="px-3 py-2.5 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-semibold text-navy-900 whitespace-nowrap">Pressure Class</th>}
                              <th className="px-3 py-2.5 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-semibold text-navy-900 rounded-r-lg whitespace-nowrap">Standard</th>
                            </tr>
                          </thead>
                          <tbody>
                            {fitting.products.map((product, index) => (
                              <tr key={index} className="border-b border-gray-100">
                                <td className="px-3 py-2.5 sm:px-4 sm:py-4 text-xs sm:text-sm text-navy-900 font-medium">{product.name}</td>
                                {hasType && <td className="px-3 py-2.5 sm:px-4 sm:py-4 text-xs sm:text-sm text-gray-600">{product.type}</td>}
                                <td className="px-3 py-2.5 sm:px-4 sm:py-4 text-xs sm:text-sm text-gray-600">{product.grade}</td>
                                <td className="px-3 py-2.5 sm:px-4 sm:py-4 text-xs sm:text-sm text-gray-600">{product.sizes}</td>
                                {hasSchedule && <td className="px-3 py-2.5 sm:px-4 sm:py-4 text-xs sm:text-sm text-gray-600">{product.schedule}</td>}
                                {hasPressureClass && <td className="px-3 py-2.5 sm:px-4 sm:py-4 text-xs sm:text-sm text-gray-600">{product.pressureClass}</td>}
                                <td className="px-3 py-2.5 sm:px-4 sm:py-4">
                                  <span className="px-2 py-0.5 sm:py-1 bg-navy-50 text-navy-700 text-xs sm:text-sm rounded-md whitespace-nowrap">
                                    {product.standard}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      );
                    })()}
                  </div>
                </div>
                {fitting.tableNote && (
                  <p className="mt-2 sm:mt-3 px-4 sm:px-0 text-xs sm:text-sm text-gray-600 italic">{fitting.tableNote}</p>
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
                    {fitting.category === "Buttweld Fittings" 
                      ? "All buttweld fittings are rated per ASME B16.9 pressure-temperature tables. Pressure ratings match the corresponding pipe schedule — e.g., a SCH 80 fitting matches the pressure rating of SCH 80 pipe of the same material and size. For specific pressure-temperature data, contact our team or refer to the product catalog."
                      : "All forged fittings are rated per ASME B16.11 pressure-temperature tables. Pressure class ratings (3000#, 6000#, 9000# for socket weld; 2000#, 3000#, 6000# for threaded) determine maximum working pressure at temperature. For specific pressure-temperature data, contact our team or refer to the product catalog."
                    }
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 fittings-sidebar">
              <div className="lg:sticky lg:top-28 space-y-4 sm:space-y-6">
                {/* Specifications */}
                <div className="card p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-navy-900 mb-3 sm:mb-4">Specifications</h3>
                  <div className="space-y-1.5 sm:space-y-2">
                    {fitting.specifications.map((spec, index) => (
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
                    {fitting.applications.map((app, index) => (
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
                    {fitting.category === "Buttweld Fittings" ? "Buttweld Fittings Catalog (PDF)" : "Forged Fittings Catalog (PDF)"}
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
          <h2 className="text-xl sm:text-2xl font-semibold text-navy-900 mb-4 sm:mb-5">Other Fitting Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {Object.entries(fittingData)
              .filter(([key]) => key !== slug)
              .slice(0, 3)
              .map(([key, f]) => (
                <Link key={key} href={`/products/fittings/${key}`} className="card group p-4 sm:p-6">
                  <div className="aspect-[16/10] relative rounded-lg overflow-hidden mb-3 sm:mb-4">
                    <Image
                      src={f.image}
                      alt={f.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-xs text-accent-500 font-medium">{f.category}</span>
                  <h3 className="text-sm sm:text-base font-semibold text-navy-900 mb-1.5 sm:mb-2 line-clamp-1">{f.name}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm line-clamp-2">{f.description}</p>
                </Link>
              ))}
          </div>
          
          {/* Back to Fittings Link */}
          <div className="mt-4 sm:mt-6 text-center">
            <Link href="/products/fittings" className="inline-flex items-center text-sm sm:text-base text-navy-900 font-medium hover:text-accent-500 transition-colors py-2">
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
