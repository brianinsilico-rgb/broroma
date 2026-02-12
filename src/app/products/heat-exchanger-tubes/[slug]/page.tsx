"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

// Heat exchanger tube product data
const heatExchangerTubeData: Record<string, {
  name: string;
  nameTh: string;
  description: string;
  descriptionTh: string;
  longDescription: string;
  longDescriptionTh: string;
  image: string;
  specifications: string[];
  applications: string[];
  applicationsTh: string[];
  products: {
    name: string;
    grade: string;
    sizes: string;
    standard: string;
  }[];
  features: string[];
  featuresTh: string[];
}> = {
  "carbon-steel": {
    name: "Carbon Steel Heat Exchanger Tubes",
    nameTh: "ท่อแลกเปลี่ยนความร้อนเหล็กกล้าคาร์บอน",
    description: "Standard carbon steel heat exchanger tubes for general duty and moderate temperature applications.",
    descriptionTh: "ท่อแลกเปลี่ยนความร้อนเหล็กกล้าคาร์บอนมาตรฐานสำหรับงานทั่วไปและงานอุณหภูมิปานกลาง",
    longDescription: "Our carbon steel heat exchanger tubes are manufactured to exacting standards for use in shell-and-tube heat exchangers, condensers, and coolers. These tubes offer excellent thermal conductivity and mechanical properties at an economical price point, making them ideal for general industrial heat transfer applications with non-corrosive fluids.",
    longDescriptionTh: "ท่อแลกเปลี่ยนความร้อนเหล็กกล้าคาร์บอนของเราผลิตตามมาตรฐานที่เข้มงวดสำหรับใช้ในเครื่องแลกเปลี่ยนความร้อนแบบเชลล์และท่อ คอนเดนเซอร์ และเครื่องทำความเย็น ท่อเหล่านี้มีการนำความร้อนและคุณสมบัติทางกลที่ดีเยี่ยมในราคาประหยัด เหมาะสำหรับงานถ่ายเทความร้อนในอุตสาหกรรมทั่วไปกับของเหลวที่ไม่กัดกร่อน",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=80",
    specifications: ["ASTM A178", "ASTM A179", "ASTM A192", "ASTM A432", "EN 10025", "JIS G3461"],
    applications: ["Heat Exchangers", "Condensers", "Refineries", "Chemical Plants", "Power Plants", "Cooling Systems"],
    applicationsTh: ["เครื่องแลกเปลี่ยนความร้อน", "คอนเดนเซอร์", "โรงกลั่น", "โรงงานเคมี", "โรงไฟฟ้า", "ระบบทำความเย็น"],
    products: [
      { name: "Carbon Steel HX Tube", grade: "A178", sizes: "5/8\" - 2\" OD", standard: "ASTM A178" },
      { name: "Carbon Steel HX Tube", grade: "A179", sizes: "1/2\" - 3\" OD", standard: "ASTM A179" },
      { name: "Carbon Steel HX Tube", grade: "A192", sizes: "1/2\" - 3\" OD", standard: "ASTM A192" },
      { name: "Carbon Steel HX Tube", grade: "A432 Gr.1", sizes: "5/8\" - 2\" OD", standard: "ASTM A432" },
      { name: "Weathering Steel Tube", grade: "Corten A", sizes: "3/4\" - 2\" OD", standard: "EN 10025" },
      { name: "Carbon Steel HX Tube", grade: "STB340", sizes: "1/2\" - 2\" OD", standard: "JIS G3461" },
    ],
    features: [
      "Excellent thermal conductivity",
      "Cost-effective solution",
      "Seamless construction available",
      "Tight dimensional tolerances",
      "Smooth internal surface",
    ],
    featuresTh: [
      "การนำความร้อนที่ดีเยี่ยม",
      "โซลูชันที่คุ้มค่า",
      "มีแบบไร้รอยต่อ",
      "ความคลาดเคลื่อนของมิติที่แม่นยำ",
      "พื้นผิวภายในเรียบ",
    ],
  },
  "stainless-steel": {
    name: "Stainless Steel Heat Exchanger Tubes",
    nameTh: "ท่อแลกเปลี่ยนความร้อนสแตนเลส",
    description: "Corrosion-resistant stainless steel tubes for chemical processing and sanitary applications.",
    descriptionTh: "ท่อสแตนเลสทนการกัดกร่อนสำหรับงานแปรรูปเคมีและงานสุขอนามัย",
    longDescription: "Our stainless steel heat exchanger tubes provide superior corrosion resistance for demanding chemical processing, pharmaceutical, and food & beverage applications. These tubes resist both process-side and shell-side corrosion, ensuring long service life and product purity in critical heat transfer applications.",
    longDescriptionTh: "ท่อแลกเปลี่ยนความร้อนสแตนเลสของเราให้ความต้านทานการกัดกร่อนที่เหนือกว่าสำหรับงานแปรรูปเคมี ยา และอาหารและเครื่องดื่มที่ต้องการความแม่นยำ ท่อเหล่านี้ต้านทานการกัดกร่อนทั้งด้านกระบวนการและด้านเชลล์ รับประกันอายุการใช้งานยาวนานและความบริสุทธิ์ของผลิตภัณฑ์ในงานถ่ายเทความร้อนที่สำคัญ",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    specifications: ["ASTM A213", "ASTM A249", "EN 10216-5", "JIS G3463"],
    applications: ["Heat Exchangers", "Condensers", "Chemical Plants", "Pharmaceutical", "Food & Beverage", "Desalination"],
    applicationsTh: ["เครื่องแลกเปลี่ยนความร้อน", "คอนเดนเซอร์", "โรงงานเคมี", "ยา", "อาหารและเครื่องดื่ม", "การแยกเกลือ"],
    products: [
      { name: "Stainless Steel HX Tube", grade: "A213 TP304", sizes: "1/2\" - 2\" OD", standard: "ASTM A213" },
      { name: "Stainless Steel HX Tube", grade: "A213 TP316", sizes: "1/2\" - 2\" OD", standard: "ASTM A213" },
      { name: "Stainless Steel HX Tube", grade: "A213 TP347H", sizes: "1/2\" - 2\" OD", standard: "ASTM A213" },
    ],
    features: [
      "Excellent corrosion resistance",
      "Hygienic surface finish",
      "Wide temperature range",
      "Seamless and welded options",
      "Suitable for aggressive media",
    ],
    featuresTh: [
      "ความต้านทานการกัดกร่อนที่ดีเยี่ยม",
      "ผิวสำเร็จที่ถูกสุขอนามัย",
      "ช่วงอุณหภูมิกว้าง",
      "มีทั้งแบบไร้รอยต่อและแบบเชื่อม",
      "เหมาะสำหรับสารที่มีฤทธิ์กัดกร่อน",
    ],
  },
  "alloy-steel": {
    name: "Alloy Steel Heat Exchanger Tubes",
    nameTh: "ท่อแลกเปลี่ยนความร้อนเหล็กกล้าอัลลอย",
    description: "High-temperature alloy steel tubes for demanding refinery and petrochemical heat transfer.",
    descriptionTh: "ท่อเหล็กกล้าอัลลอยอุณหภูมิสูงสำหรับงานถ่ายเทความร้อนในโรงกลั่นและปิโตรเคมีที่ต้องการความแม่นยำ",
    longDescription: "Our alloy steel heat exchanger tubes are engineered for high-temperature service in refineries, petrochemical plants, and power generation facilities. Chrome-molybdenum grades provide excellent resistance to hydrogen attack, sulfidation, and high-temperature oxidation in critical process heat exchangers.",
    longDescriptionTh: "ท่อแลกเปลี่ยนความร้อนเหล็กกล้าอัลลอยของเราออกแบบมาสำหรับงานอุณหภูมิสูงในโรงกลั่น โรงงานปิโตรเคมี และโรงไฟฟ้า เกรดโครม-โมลิบดีนัมให้ความต้านทานที่ดีเยี่ยมต่อการโจมตีของไฮโดรเจน การเกิดซัลไฟด์ และการออกซิเดชันที่อุณหภูมิสูงในเครื่องแลกเปลี่ยนความร้อนกระบวนการที่สำคัญ",
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1200&q=80",
    specifications: ["ASTM A213", "ASTM A335", "EN 10216-2", "GB/T 5310"],
    applications: ["Heat Exchangers", "Refineries", "Petrochemical", "Power Plants", "High-Temperature Service", "Process Heaters"],
    applicationsTh: ["เครื่องแลกเปลี่ยนความร้อน", "โรงกลั่น", "ปิโตรเคมี", "โรงไฟฟ้า", "งานอุณหภูมิสูง", "เครื่องทำความร้อนกระบวนการ"],
    products: [
      { name: "Alloy Steel HX Tube", grade: "T11", sizes: "5/8\" - 2\" OD", standard: "ASTM A213" },
      { name: "Alloy Steel HX Tube", grade: "T22", sizes: "5/8\" - 2\" OD", standard: "ASTM A213" },
      { name: "Alloy Steel HX Tube", grade: "T91", sizes: "5/8\" - 1.5\" OD", standard: "ASTM A213" },
      { name: "Alloy Steel HX Tube", grade: "09CrCuSb", sizes: "3/4\" - 2\" OD", standard: "GB/T" },
    ],
    features: [
      "High-temperature capability",
      "Hydrogen attack resistance",
      "Superior creep strength",
      "Oxidation resistant",
      "Heat treatment certified",
    ],
    featuresTh: [
      "ความสามารถทนอุณหภูมิสูง",
      "ความต้านทานการโจมตีของไฮโดรเจน",
      "ความแข็งแรงครีปที่เหนือกว่า",
      "ทนการออกซิเดชัน",
      "ได้รับการรับรองการอบชุบความร้อน",
    ],
  },
  "duplex-steel": {
    name: "Duplex Steel Heat Exchanger Tubes",
    nameTh: "ท่อแลกเปลี่ยนความร้อนเหล็กกล้าดูเพล็กซ์",
    description: "High-strength duplex steel tubes with superior corrosion resistance for aggressive media.",
    descriptionTh: "ท่อเหล็กกล้าดูเพล็กซ์ความแข็งแรงสูงพร้อมความต้านทานการกัดกร่อนที่เหนือกว่าสำหรับสารที่มีฤทธิ์กัดกร่อน",
    longDescription: "Our duplex and super duplex steel heat exchanger tubes combine high mechanical strength with exceptional resistance to chloride-induced stress corrosion cracking. These tubes are ideal for seawater coolers, chemical process heat exchangers, and other applications with aggressive chloride-containing media.",
    longDescriptionTh: "ท่อแลกเปลี่ยนความร้อนเหล็กกล้าดูเพล็กซ์และซูเปอร์ดูเพล็กซ์ของเรารวมความแข็งแรงทางกลสูงกับความต้านทานที่ยอดเยี่ยมต่อการแตกร้าวจากความเค้นที่เกิดจากคลอไรด์ ท่อเหล่านี้เหมาะสำหรับเครื่องทำความเย็นน้ำทะเล เครื่องแลกเปลี่ยนความร้อนกระบวนการเคมี และงานอื่นๆ ที่มีสารที่มีคลอไรด์",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80",
    specifications: ["ASTM A789", "ASTM A790", "EN 10216-5", "NORSOK M-650"],
    applications: ["Heat Exchangers", "Condensers", "Seawater Cooling", "Chemical Plants", "Offshore", "Desalination"],
    applicationsTh: ["เครื่องแลกเปลี่ยนความร้อน", "คอนเดนเซอร์", "ระบบทำความเย็นน้ำทะเล", "โรงงานเคมี", "นอกชายฝั่ง", "การแยกเกลือ"],
    products: [
      { name: "Duplex Steel HX Tube", grade: "S31803 / 2205", sizes: "1/2\" - 2\" OD", standard: "ASTM A789" },
      { name: "Super Duplex HX Tube", grade: "S32750 / 2507", sizes: "1/2\" - 1.5\" OD", standard: "ASTM A789" },
      { name: "Duplex Steel HX Tube", grade: "S32205", sizes: "1/2\" - 2\" OD", standard: "ASTM A789" },
    ],
    features: [
      "Chloride SCC resistance",
      "High mechanical strength",
      "Excellent pitting resistance",
      "Seawater compatible",
      "Long service life",
    ],
    featuresTh: [
      "ความต้านทาน SCC จากคลอไรด์",
      "ความแข็งแรงทางกลสูง",
      "ความต้านทานการกัดกร่อนแบบหลุมที่ดีเยี่ยม",
      "เข้ากันได้กับน้ำทะเล",
      "อายุการใช้งานยาวนาน",
    ],
  },
};

export default function HeatExchangerTubeDetailPage() {
  const params = useParams();
  const slug = params?.slug as string | undefined;
  const { t, language } = useLanguage();
  const isThaiLanguage = language === "th";
  
  const tube = slug ? heatExchangerTubeData[slug] : undefined;
  
  if (!tube) {
    notFound();
  }

  const displayName = isThaiLanguage ? tube.nameTh : tube.name;
  const displayLongDescription = isThaiLanguage ? tube.longDescriptionTh : tube.longDescription;
  const displayApplications = isThaiLanguage ? tube.applicationsTh : tube.applications;
  const displayFeatures = isThaiLanguage ? tube.featuresTh : tube.features;
  const categoryName = isThaiLanguage ? "ท่อแลกเปลี่ยนความร้อน" : "Heat Exchanger Tubes";
  const keyFeaturesTitle = isThaiLanguage ? "คุณสมบัติหลัก" : "Key Features";
  
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-navy pt-10 pb-12 md:pt-12 md:pb-16">
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-navy-300 mb-2 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">{t.products?.common?.breadcrumb?.home || "Home"}</Link>
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/products" className="hover:text-white transition-colors">{t.products?.common?.breadcrumb?.products || "Products"}</Link>
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/products/heat-exchanger-tubes" className="hover:text-white transition-colors">{categoryName}</Link>
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white truncate max-w-[180px] sm:max-w-none">{displayName}</span>
          </nav>
          
          <div className="max-w-3xl">
            <h1 className="text-white text-2xl md:text-4xl font-bold mt-3 mb-4">{displayName}</h1>
            <p className="text-sm md:text-base text-navy-200 leading-relaxed">
              {displayLongDescription}
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
                  src={tube.image}
                  alt={displayName}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Products Table */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-navy-900 mb-6">{t.products?.detail?.availableProducts || "Available Products"}</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-navy-50">
                        <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900 rounded-l-lg">{t.products?.detail?.tableHeaders?.product || "Product"}</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">{t.products?.detail?.tableHeaders?.grade || "Grade"}</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900">{t.products?.detail?.tableHeaders?.sizes || "Sizes"}</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900 rounded-r-lg">{t.products?.detail?.tableHeaders?.standard || "Standard"}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tube.products.map((product, index) => (
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
                <h2 className="text-2xl font-semibold text-navy-900 mb-6">{keyFeaturesTitle}</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {displayFeatures.map((feature, index) => (
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
                  <h3 className="text-lg font-semibold text-navy-900 mb-4">{t.products?.detail?.specifications || "Specifications"}</h3>
                  <div className="space-y-2">
                    {tube.specifications.map((spec, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent-500 rounded-full" />
                        <span className="text-gray-700">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applications */}
                <div className="card">
                  <h3 className="text-lg font-semibold text-navy-900 mb-4">{t.products?.detail?.applications || "Applications"}</h3>
                  <div className="flex flex-wrap gap-2">
                    {displayApplications.map((app, index) => (
                      <span key={index} className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Card */}
                <div className="card bg-navy-900 border-navy-800">
                  <h3 className="text-lg font-semibold text-white mb-2">{t.products?.detail?.needThisProduct || "Need This Product?"}</h3>
                  <p className="text-navy-200 text-sm mb-4">
                    {t.products?.detail?.contactTeam || "Contact our team for pricing, availability, and technical specifications."}
                  </p>
                  <Link href="/contact" className="btn-primary w-full justify-center">
                    {t.products?.detail?.requestQuote || "Request Quote"}
                  </Link>
                </div>

                {/* Downloads */}
                <div className="card">
                  <h3 className="text-lg font-semibold text-navy-900 mb-4">{t.products?.detail?.downloads || "Downloads"}</h3>
                  <div className="space-y-3">
                    <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-navy-900 transition-colors">
                      <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      {t.products?.detail?.productCatalog || "Product Catalog (PDF)"}
                    </a>
                    <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-navy-900 transition-colors">
                      <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      {t.products?.detail?.technicalSpecifications || "Technical Specifications"}
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
          <h2 className="text-2xl font-semibold text-navy-900 mb-8">{t.products?.detail?.otherHeatExchangerTubes || "Other Heat Exchanger Tube Materials"}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(heatExchangerTubeData)
              .filter(([key]) => key !== slug)
              .slice(0, 3)
              .map(([key, tubeItem]) => (
                <Link key={key} href={`/products/heat-exchanger-tubes/${key}`} className="card group">
                  <div className="aspect-[16/10] relative rounded-lg overflow-hidden mb-4">
                    <Image
                      src={tubeItem.image}
                      alt={isThaiLanguage ? tubeItem.nameTh : tubeItem.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-xs text-accent-500 font-medium">{categoryName}</span>
                  <h3 className="text-base font-semibold text-navy-900 mb-2 line-clamp-1">{isThaiLanguage ? tubeItem.nameTh : tubeItem.name}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{isThaiLanguage ? tubeItem.descriptionTh : tubeItem.description}</p>
                </Link>
              ))}
          </div>
          
          {/* Back to Heat Exchanger Tubes Link */}
          <div className="mt-10 text-center">
            <Link href="/products/heat-exchanger-tubes" className="inline-flex items-center text-navy-900 font-medium hover:text-accent-500 transition-colors">
              <svg className="w-5 h-5 mr-2 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              {t.products?.detail?.backToHeatExchangerTubes || "Back to All Heat Exchanger Tubes"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
