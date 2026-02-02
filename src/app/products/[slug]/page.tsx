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
  "steel-pipes": {
    name: "Steel Pipes",
    description: "High-strength carbon steel pipes for structural, mechanical, and industrial applications.",
    longDescription: "Our steel pipes are manufactured to the highest international standards, offering exceptional strength, durability, and versatility. Available in a wide range of grades and specifications, these pipes are ideal for structural applications, water transmission, oil and gas pipelines, and general industrial use.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
    specifications: ["ASTM A53", "ASTM A106", "API 5L", "EN 10210", "EN 10219"],
    applications: ["Construction", "Oil & Gas", "Water Systems", "Structural Support", "Mechanical Engineering"],
    products: [
      { name: "ERW Steel Pipe", grade: "Grade B", sizes: "1/2\" - 24\"", standard: "ASTM A53" },
      { name: "Seamless Steel Pipe", grade: "Grade B/C", sizes: "1/2\" - 16\"", standard: "ASTM A106" },
      { name: "Line Pipe", grade: "X42-X70", sizes: "2\" - 48\"", standard: "API 5L" },
      { name: "Structural Steel Pipe", grade: "S275/S355", sizes: "DN15 - DN600", standard: "EN 10210" },
      { name: "Cold Formed Steel Pipe", grade: "S235/S355", sizes: "20x20 - 400x400", standard: "EN 10219" },
    ],
    features: [
      "High tensile strength and durability",
      "Excellent weldability",
      "Available with various coatings",
      "Full traceability with mill test certificates",
      "Custom lengths available",
    ],
  },
  "carbon-pipes": {
    name: "Carbon Pipes",
    description: "Premium carbon steel pipes engineered for high-temperature and high-pressure applications.",
    longDescription: "Our carbon pipes are specifically designed for demanding high-temperature and high-pressure environments. Perfect for power plants, refineries, and chemical processing facilities, these pipes offer superior performance in critical applications where reliability is paramount.",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&q=80",
    specifications: ["ASTM A333", "ASTM A335", "ASTM A691", "ASTM A672", "EN 10216-2"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Boilers", "Heat Exchangers"],
    products: [
      { name: "Low Temperature Pipe", grade: "Grade 6", sizes: "1/2\" - 24\"", standard: "ASTM A333" },
      { name: "Alloy Steel Pipe", grade: "P11/P22/P91", sizes: "1/2\" - 24\"", standard: "ASTM A335" },
      { name: "High Pressure Pipe", grade: "CL22-CL42", sizes: "16\" - 42\"", standard: "ASTM A691" },
      { name: "EFW Pipe", grade: "E355/E470", sizes: "12\" - 36\"", standard: "ASTM A672" },
      { name: "Boiler Tube", grade: "P195/P265", sizes: "DN15 - DN150", standard: "EN 10216-2" },
    ],
    features: [
      "Excellent high-temperature performance",
      "Superior pressure resistance",
      "Precision manufactured dimensions",
      "Heat treatment options available",
      "Third-party inspection certified",
    ],
  },
  "stainless-steel": {
    name: "Stainless Steel Pipes",
    description: "Corrosion-resistant stainless steel pipes for food processing, pharmaceutical, and marine applications.",
    longDescription: "Our stainless steel pipes offer exceptional corrosion resistance and hygiene standards, making them ideal for food and beverage processing, pharmaceutical manufacturing, and marine environments. Available in various grades to suit specific application requirements.",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1200&q=80",
    specifications: ["ASTM A312", "ASTM A358", "ASTM A269", "ASTM A213", "EN 10217-7"],
    applications: ["Food & Beverage", "Pharmaceutical", "Marine", "Chemical Processing", "Architecture"],
    products: [
      { name: "Seamless SS Pipe", grade: "304/304L/316/316L", sizes: "1/4\" - 12\"", standard: "ASTM A312" },
      { name: "Welded SS Pipe", grade: "304/316/321", sizes: "6\" - 48\"", standard: "ASTM A358" },
      { name: "Instrument Tube", grade: "304/316", sizes: "1/8\" - 1\"", standard: "ASTM A269" },
      { name: "Heat Exchanger Tube", grade: "304/316/321/347", sizes: "1/4\" - 2\"", standard: "ASTM A213" },
      { name: "Hygienic Tube", grade: "1.4301/1.4404", sizes: "DN10 - DN150", standard: "EN 10217-7" },
    ],
    features: [
      "Superior corrosion resistance",
      "Hygienic surface finish options",
      "Food-grade compliance",
      "Excellent formability",
      "Low maintenance requirements",
    ],
  },
  "alloy-pipes": {
    name: "Alloy Pipes",
    description: "Specialty alloy pipes including nickel alloys, duplex, and super duplex for extreme service conditions.",
    longDescription: "Our alloy pipes represent the pinnacle of metallurgical engineering, designed for the most demanding applications in aerospace, chemical processing, and nuclear industries. These high-performance materials offer exceptional resistance to extreme temperatures, pressures, and corrosive environments.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
    specifications: ["ASTM B167", "ASTM B444", "ASTM B619", "ASTM A790", "ASTM A928"],
    applications: ["Aerospace", "Chemical Processing", "Nuclear", "Offshore", "Desalination"],
    products: [
      { name: "Inconel Pipe", grade: "600/625/718", sizes: "1/4\" - 8\"", standard: "ASTM B167" },
      { name: "Monel Pipe", grade: "400/K500", sizes: "1/4\" - 6\"", standard: "ASTM B165" },
      { name: "Hastelloy Pipe", grade: "C276/C22/B2", sizes: "1/2\" - 12\"", standard: "ASTM B619" },
      { name: "Duplex Pipe", grade: "S31803/S32205", sizes: "1/2\" - 24\"", standard: "ASTM A790" },
      { name: "Super Duplex Pipe", grade: "S32750/S32760", sizes: "1/2\" - 16\"", standard: "ASTM A928" },
    ],
    features: [
      "Extreme temperature resistance",
      "Outstanding corrosion resistance",
      "High strength-to-weight ratio",
      "Long service life",
      "Certified for critical applications",
    ],
  },
  "seamless-pipes": {
    name: "Seamless Pipes",
    description: "Hot-rolled and cold-drawn seamless pipes offering superior strength and pressure resistance.",
    longDescription: "Our seamless pipes are manufactured without weld seams, providing superior strength and pressure resistance. Ideal for critical applications in boilers, heat exchangers, and pressure vessels where integrity is essential.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&q=80",
    specifications: ["ASTM A179", "ASTM A192", "ASTM A213", "ASTM A519", "EN 10216-1"],
    applications: ["Boilers", "Heat Exchangers", "Pressure Vessels", "Hydraulics", "Mechanical Engineering"],
    products: [
      { name: "Condenser Tube", grade: "Grade A", sizes: "3/4\" - 3\"", standard: "ASTM A179" },
      { name: "Boiler Tube", grade: "Grade SA192", sizes: "1\" - 6\"", standard: "ASTM A192" },
      { name: "Heat Exchanger Tube", grade: "T5/T9/T11/T22", sizes: "1/4\" - 5\"", standard: "ASTM A213" },
      { name: "Mechanical Tube", grade: "1020/4130/4140", sizes: "1/2\" - 10\"", standard: "ASTM A519" },
      { name: "Pressure Tube", grade: "P235/P265", sizes: "DN10 - DN400", standard: "EN 10216-1" },
    ],
    features: [
      "No weld seam for maximum integrity",
      "Superior pressure rating",
      "Uniform wall thickness",
      "Excellent for bending and forming",
      "Wide range of sizes available",
    ],
  },
  "welded-pipes": {
    name: "Welded Pipes",
    description: "ERW and SAW welded pipes for large-diameter applications and structural use.",
    longDescription: "Our welded pipes, including ERW (Electric Resistance Welded) and SAW (Submerged Arc Welded) varieties, are ideal for large-diameter applications such as pipelines, structural piling, and general construction. These pipes offer an excellent balance of performance and cost-effectiveness.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    specifications: ["API 5L PSL1/PSL2", "ASTM A252", "EN 10219", "ASTM A139", "AWWA C200"],
    applications: ["Pipelines", "Piling", "Structural", "Water Transmission", "General Construction"],
    products: [
      { name: "Line Pipe ERW", grade: "X42-X70", sizes: "2\" - 24\"", standard: "API 5L PSL1" },
      { name: "Line Pipe LSAW", grade: "X52-X80", sizes: "16\" - 64\"", standard: "API 5L PSL2" },
      { name: "Steel Piling Pipe", grade: "Grade 2/3", sizes: "8\" - 48\"", standard: "ASTM A252" },
      { name: "Structural Hollow Section", grade: "S235/S355", sizes: "40x40 - 500x500", standard: "EN 10219" },
      { name: "Water Works Pipe", grade: "Various", sizes: "4\" - 144\"", standard: "AWWA C200" },
    ],
    features: [
      "Cost-effective for large diameters",
      "Available in long lengths",
      "Various coating options",
      "High production capacity",
      "Consistent quality control",
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
