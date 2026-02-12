"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

// Manual valve product data
const manualValveData: Record<string, {
  name: string;
  nameTh: string;
  category: string;
  categoryTh: string;
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
    pressureClass: string;
    endConnection: string;
    standard: string;
  }[];
  tableNote?: string;
  tableNoteTh?: string;
}> = {
  "gate": {
    name: "Gate Valves",
    nameTh: "วาล์วเกท",
    category: "Manual Valves",
    categoryTh: "วาล์วแมนนวล",
    description: "Full-bore isolation valves for on/off service with minimal pressure drop when fully open.",
    descriptionTh: "วาล์วแยกแบบเต็มรูสำหรับการเปิด/ปิดที่มีแรงดันตกต่ำสุดเมื่อเปิดเต็มที่",
    longDescription: "Gate valves for full-bore, bi-directional isolation. Carbon, stainless, alloy, and duplex steel. Sizes from 1/2\" to 48\". Available in bolted bonnet, pressure seal, and welded bonnet designs.",
    longDescriptionTh: "วาล์วเกทสำหรับการแยกแบบเต็มรูสองทิศทาง เหล็กกล้าคาร์บอน สแตนเลส อัลลอย และดูเพล็กซ์ ขนาดตั้งแต่ 1/2\" ถึง 48\" มีแบบฝาครอบยึดสลักเกลียว แบบซีลความดัน และแบบฝาครอบเชื่อมให้เลือก",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80",
    specifications: ["API 600", "API 602", "API 603", "BS 1414", "ASME B16.34"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Oil & Gas", "Petrochemical", "Water Treatment"],
    applicationsTh: ["โรงไฟฟ้า", "โรงกลั่น", "โรงงานเคมี", "น้ำมันและก๊าซ", "ปิโตรเคมี", "บำบัดน้ำ"],
    products: [
      { name: "Carbon Steel (Cast)", grade: "ASTM A216 WCB", sizes: "1/2\" - 48\"", pressureClass: "150#, 300#, 600#, 900#, 1500#, 2500#", endConnection: "Flanged (RF/RTJ), BW, SW, THD", standard: "API 600" },
      { name: "Carbon Steel (Forged)", grade: "ASTM A105", sizes: "1/2\" - 4\"", pressureClass: "800#, 1500#, 2500#", endConnection: "SW, THD, BW", standard: "API 602" },
      { name: "Stainless Steel (Cast)", grade: "ASTM A351 CF8/CF8M", sizes: "1/2\" - 24\"", pressureClass: "150#, 300#, 600#, 900#, 1500#", endConnection: "Flanged (RF/RTJ), BW, SW, THD", standard: "API 603" },
      { name: "Stainless Steel (Forged)", grade: "ASTM A182 F304/F316", sizes: "1/2\" - 4\"", pressureClass: "800#, 1500#, 2500#", endConnection: "SW, THD, BW", standard: "API 602" },
      { name: "Alloy Steel (Cast)", grade: "ASTM A217 WC6/WC9/C5", sizes: "1/2\" - 24\"", pressureClass: "150#, 300#, 600#, 900#, 1500#", endConnection: "Flanged (RF/RTJ), BW", standard: "API 600" },
      { name: "Duplex Steel", grade: "ASTM A995 4A/5A", sizes: "1/2\" - 24\"", pressureClass: "150#, 300#, 600#", endConnection: "Flanged (RF/RTJ), BW", standard: "API 603" },
    ],
    tableNote: "Rising stem (OS&Y) and non-rising stem designs available.",
    tableNoteTh: "มีแบบก้านยกขึ้น (OS&Y) และแบบก้านไม่ยกให้เลือก",
  },
  "globe": {
    name: "Globe Valves",
    nameTh: "วาล์วโกลบ",
    category: "Manual Valves",
    categoryTh: "วาล์วแมนนวล",
    description: "Precision flow control valves with linear motion disc for throttling and regulating applications.",
    descriptionTh: "วาล์วควบคุมการไหลแม่นยำพร้อมจานเคลื่อนที่เชิงเส้นสำหรับการปรับและควบคุมการไหล",
    longDescription: "Globe valves for throttling and flow regulation. Carbon, stainless, and alloy steel. Sizes from 1/2\" to 24\". Available in straight, angle, and Y-pattern configurations.",
    longDescriptionTh: "วาล์วโกลบสำหรับการปรับและควบคุมการไหล เหล็กกล้าคาร์บอน สแตนเลส และอัลลอย ขนาดตั้งแต่ 1/2\" ถึง 24\" มีแบบตรง แบบมุม และแบบ Y ให้เลือก",
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1200&q=80",
    specifications: ["API 600", "API 602", "BS 1873", "ASME B16.34"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Oil & Gas", "Petrochemical", "Water Treatment"],
    applicationsTh: ["โรงไฟฟ้า", "โรงกลั่น", "โรงงานเคมี", "น้ำมันและก๊าซ", "ปิโตรเคมี", "บำบัดน้ำ"],
    products: [
      { name: "Carbon Steel (Cast)", grade: "ASTM A216 WCB", sizes: "1/2\" - 24\"", pressureClass: "150#, 300#, 600#, 900#, 1500#, 2500#", endConnection: "Flanged (RF/RTJ), BW, SW, THD", standard: "API 600" },
      { name: "Carbon Steel (Forged)", grade: "ASTM A105", sizes: "1/2\" - 4\"", pressureClass: "800#, 1500#, 2500#", endConnection: "SW, THD, BW", standard: "API 602" },
      { name: "Stainless Steel (Cast)", grade: "ASTM A351 CF8/CF8M", sizes: "1/2\" - 16\"", pressureClass: "150#, 300#, 600#, 900#, 1500#", endConnection: "Flanged (RF/RTJ), BW, SW, THD", standard: "BS 1873" },
      { name: "Stainless Steel (Forged)", grade: "ASTM A182 F304/F316", sizes: "1/2\" - 4\"", pressureClass: "800#, 1500#, 2500#", endConnection: "SW, THD, BW", standard: "API 602" },
      { name: "Alloy Steel (Cast)", grade: "ASTM A217 WC6/WC9/C5", sizes: "1/2\" - 16\"", pressureClass: "150#, 300#, 600#, 900#, 1500#", endConnection: "Flanged (RF/RTJ), BW", standard: "API 600" },
    ],
    tableNote: "Straight, angle, and Y-pattern body configurations available.",
    tableNoteTh: "มีแบบตัวถังตรง แบบมุม และแบบ Y ให้เลือก",
  },
  "check": {
    name: "Check Valves",
    nameTh: "วาล์วกันกลับ",
    category: "Manual Valves",
    categoryTh: "วาล์วแมนนวล",
    description: "Non-return valves preventing backflow in piping systems. Swing, lift, and wafer types available.",
    descriptionTh: "วาล์วป้องกันการไหลย้อนกลับในระบบท่อ มีแบบสวิง แบบยก และแบบเวเฟอร์ให้เลือก",
    longDescription: "Check valves for backflow prevention. Carbon, stainless, and alloy steel. Sizes from 1/2\" to 48\". Available in swing, tilting disc, dual plate, and piston designs.",
    longDescriptionTh: "วาล์วกันกลับสำหรับป้องกันการไหลย้อนกลับ เหล็กกล้าคาร์บอน สแตนเลส และอัลลอย ขนาดตั้งแต่ 1/2\" ถึง 48\" มีแบบสวิง แบบจานเอียง แบบจานคู่ และแบบลูกสูบให้เลือก",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    specifications: ["API 594", "API 6D", "BS 1868", "BS 5153", "ASME B16.34"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Oil & Gas", "Petrochemical", "Water Treatment"],
    applicationsTh: ["โรงไฟฟ้า", "โรงกลั่น", "โรงงานเคมี", "น้ำมันและก๊าซ", "ปิโตรเคมี", "บำบัดน้ำ"],
    products: [
      { name: "Carbon Steel (Cast)", grade: "ASTM A216 WCB", sizes: "1/2\" - 48\"", pressureClass: "150#, 300#, 600#, 900#, 1500#, 2500#", endConnection: "Flanged (RF/RTJ), BW, SW, THD", standard: "API 594" },
      { name: "Carbon Steel (Forged)", grade: "ASTM A105", sizes: "1/2\" - 4\"", pressureClass: "800#, 1500#, 2500#", endConnection: "SW, THD, BW", standard: "API 602" },
      { name: "Stainless Steel (Cast)", grade: "ASTM A351 CF8/CF8M", sizes: "1/2\" - 24\"", pressureClass: "150#, 300#, 600#, 900#, 1500#", endConnection: "Flanged (RF/RTJ), BW, SW, THD", standard: "BS 1868" },
      { name: "Stainless Steel (Forged)", grade: "ASTM A182 F304/F316", sizes: "1/2\" - 4\"", pressureClass: "800#, 1500#, 2500#", endConnection: "SW, THD, BW", standard: "API 602" },
      { name: "Alloy Steel (Cast)", grade: "ASTM A217 WC6/WC9/C5", sizes: "1/2\" - 24\"", pressureClass: "150#, 300#, 600#, 900#, 1500#", endConnection: "Flanged (RF/RTJ), BW", standard: "BS 1868" },
    ],
    tableNote: "Swing, tilting disc, dual plate, and piston check designs available.",
    tableNoteTh: "มีแบบสวิง แบบจานเอียง แบบจานคู่ และแบบลูกสูบให้เลือก",
  },
  "ball": {
    name: "Ball Valves",
    nameTh: "วาล์วบอล",
    category: "Manual Valves",
    categoryTh: "วาล์วแมนนวล",
    description: "Quarter-turn valves with spherical closure element for quick shut-off and tight sealing.",
    descriptionTh: "วาล์วหมุนหนึ่งในสี่รอบพร้อมชิ้นส่วนปิดทรงกลมสำหรับการปิดเร็วและการซีลแน่น",
    longDescription: "Ball valves for quick shut-off and isolation. Carbon, stainless, and alloy steel. Sizes from 1/2\" to 36\". Available in floating, trunnion-mounted, and top-entry designs.",
    longDescriptionTh: "วาล์วบอลสำหรับการปิดเร็วและการแยก เหล็กกล้าคาร์บอน สแตนเลส และอัลลอย ขนาดตั้งแต่ 1/2\" ถึง 36\" มีแบบลอยตัว แบบยึดทรันเนียน และแบบเข้าด้านบนให้เลือก",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=80",
    specifications: ["API 6D", "API 608", "BS 5351", "ASME B16.34"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Oil & Gas", "Petrochemical", "Water Treatment"],
    applicationsTh: ["โรงไฟฟ้า", "โรงกลั่น", "โรงงานเคมี", "น้ำมันและก๊าซ", "ปิโตรเคมี", "บำบัดน้ำ"],
    products: [
      { name: "Carbon Steel (Cast)", grade: "ASTM A216 WCB", sizes: "1/2\" - 36\"", pressureClass: "150#, 300#, 600#, 900#, 1500#, 2500#", endConnection: "Flanged (RF/RTJ), BW, SW, THD", standard: "API 6D" },
      { name: "Carbon Steel (Forged)", grade: "ASTM A105", sizes: "1/2\" - 4\"", pressureClass: "800#, 1500#, 2500#", endConnection: "SW, THD, BW", standard: "API 608" },
      { name: "Stainless Steel (Cast)", grade: "ASTM A351 CF8/CF8M", sizes: "1/2\" - 24\"", pressureClass: "150#, 300#, 600#, 900#, 1500#", endConnection: "Flanged (RF/RTJ), BW, SW, THD", standard: "BS 5351" },
      { name: "Stainless Steel (Forged)", grade: "ASTM A182 F304/F316", sizes: "1/2\" - 4\"", pressureClass: "800#, 1500#, 2500#", endConnection: "SW, THD, BW", standard: "API 608" },
      { name: "Alloy Steel (Cast)", grade: "ASTM A217 WC6/WC9/C5", sizes: "1/2\" - 16\"", pressureClass: "150#, 300#, 600#, 900#, 1500#", endConnection: "Flanged (RF/RTJ), BW", standard: "API 6D" },
      { name: "Duplex Steel", grade: "ASTM A995 4A/5A", sizes: "1/2\" - 24\"", pressureClass: "150#, 300#, 600#", endConnection: "Flanged (RF/RTJ), BW", standard: "API 6D" },
    ],
    tableNote: "Floating ball and trunnion-mounted designs available.",
    tableNoteTh: "มีแบบลูกบอลลอยตัวและแบบยึดทรันเนียนให้เลือก",
  },
  "butterfly": {
    name: "Butterfly Valves",
    nameTh: "วาล์วบัตเตอร์ฟลาย",
    category: "Manual Valves",
    categoryTh: "วาล์วแมนนวล",
    description: "Compact quarter-turn valves ideal for large diameter applications and flow regulation.",
    descriptionTh: "วาล์วหมุนหนึ่งในสี่รอบขนาดกะทัดรัดเหมาะสำหรับการใช้งานขนาดใหญ่และการควบคุมการไหล",
    longDescription: "Butterfly valves for large-diameter flow control. Carbon and stainless steel. Sizes from 2\" to 72\". Available in wafer, lug, and double-flanged configurations.",
    longDescriptionTh: "วาล์วบัตเตอร์ฟลายสำหรับการควบคุมการไหลขนาดใหญ่ เหล็กกล้าคาร์บอนและสแตนเลส ขนาดตั้งแต่ 2\" ถึง 72\" มีแบบเวเฟอร์ แบบลัก และแบบหน้าแปลนคู่ให้เลือก",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80",
    specifications: ["API 609", "BS 5155", "EN 593", "ASME B16.34"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Oil & Gas", "Petrochemical", "Water Treatment"],
    applicationsTh: ["โรงไฟฟ้า", "โรงกลั่น", "โรงงานเคมี", "น้ำมันและก๊าซ", "ปิโตรเคมี", "บำบัดน้ำ"],
    products: [
      { name: "Carbon Steel", grade: "ASTM A216 WCB", sizes: "2\" - 72\"", pressureClass: "150#, 300#, 600#", endConnection: "Wafer, Lug, Double Flanged", standard: "API 609" },
      { name: "Stainless Steel", grade: "ASTM A351 CF8/CF8M", sizes: "2\" - 60\"", pressureClass: "150#, 300#, 600#", endConnection: "Wafer, Lug, Double Flanged", standard: "API 609" },
      { name: "Alloy Steel", grade: "ASTM A217 WC6/WC9", sizes: "2\" - 48\"", pressureClass: "150#, 300#, 600#", endConnection: "Wafer, Lug, Double Flanged", standard: "API 609" },
      { name: "Duplex Steel", grade: "ASTM A995 4A/5A", sizes: "2\" - 48\"", pressureClass: "150#, 300#", endConnection: "Wafer, Lug, Double Flanged", standard: "API 609" },
    ],
    tableNote: "Concentric, double offset, and triple offset disc designs available.",
    tableNoteTh: "มีแบบจานศูนย์กลางร่วม แบบออฟเซ็ตคู่ และแบบออฟเซ็ตสามให้เลือก",
  },
};

export default function ManualValveDetailPage() {
  const params = useParams();
  const slug = params?.slug as string | undefined;
  const valve = slug ? manualValveData[slug] : undefined;
  const { t, language } = useLanguage();
  
  if (!valve) {
    notFound();
  }

  const isThaiLanguage = language === "th";
  const displayName = isThaiLanguage ? valve.nameTh : valve.name;
  const displayCategory = isThaiLanguage ? valve.categoryTh : valve.category;
  const displayDescription = isThaiLanguage ? valve.longDescriptionTh : valve.longDescription;
  const displayApplications = isThaiLanguage ? valve.applicationsTh : valve.applications;
  const displayTableNote = isThaiLanguage ? valve.tableNoteTh : valve.tableNote;
  const detail = t.products?.detail;
  
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-navy pt-10 pb-12 md:pt-12 md:pb-16">
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-navy-300 mb-2 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">{t.nav.home}</Link>
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/products" className="hover:text-white transition-colors">{t.nav.products}</Link>
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/products/manual-valves" className="hover:text-white transition-colors">{displayCategory}</Link>
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white truncate max-w-[180px] sm:max-w-none">{displayName}</span>
          </nav>
          
          <div className="max-w-3xl">
            <h1 className="text-white text-2xl md:text-4xl font-bold mt-3 mb-4">{displayName}</h1>
            <p className="text-sm md:text-base text-navy-200 leading-relaxed">
              {displayDescription}
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
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden mb-5 sm:mb-7 aspect-[5/2]">
                <Image
                  src={valve.image}
                  alt={displayName}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Products Table */}
              <div className="mb-5 sm:mb-7">
                <h2 className="text-xl sm:text-2xl font-semibold text-navy-900 mb-3 sm:mb-4">{detail?.availableProducts || "Available Products"}</h2>
                <div className="overflow-x-auto -mx-4 sm:mx-0">
                  <div className="inline-block min-w-full align-middle px-4 sm:px-0">
                    <table className="w-full min-w-[700px]">
                      <thead>
                        <tr className="bg-navy-50">
                          <th className="px-3 py-2.5 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-semibold text-navy-900 rounded-l-lg whitespace-nowrap">{detail?.tableHeaders?.material || "Material"}</th>
                          <th className="px-3 py-2.5 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-semibold text-navy-900 whitespace-nowrap">{detail?.tableHeaders?.grade || "Grade"}</th>
                          <th className="px-3 py-2.5 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-semibold text-navy-900 whitespace-nowrap">{detail?.tableHeaders?.sizes || "Sizes"}</th>
                          <th className="px-3 py-2.5 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-semibold text-navy-900 whitespace-nowrap">{detail?.tableHeaders?.pressureClass || "Pressure Class"}</th>
                          <th className="px-3 py-2.5 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-semibold text-navy-900 whitespace-nowrap">{detail?.tableHeaders?.endConnection || "End Connection"}</th>
                          <th className="px-3 py-2.5 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-semibold text-navy-900 rounded-r-lg whitespace-nowrap">{detail?.tableHeaders?.standard || "Standard"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {valve.products.map((product, index) => (
                          <tr key={index} className="border-b border-gray-100">
                            <td className="px-3 py-2.5 sm:px-4 sm:py-4 text-xs sm:text-sm text-navy-900 font-medium">{product.name}</td>
                            <td className="px-3 py-2.5 sm:px-4 sm:py-4 text-xs sm:text-sm text-gray-600">{product.grade}</td>
                            <td className="px-3 py-2.5 sm:px-4 sm:py-4 text-xs sm:text-sm text-gray-600">{product.sizes}</td>
                            <td className="px-3 py-2.5 sm:px-4 sm:py-4 text-xs sm:text-sm text-gray-600">{product.pressureClass}</td>
                            <td className="px-3 py-2.5 sm:px-4 sm:py-4 text-xs sm:text-sm text-gray-600">{product.endConnection}</td>
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
                {displayTableNote && (
                  <p className="mt-2 sm:mt-3 px-4 sm:px-0 text-xs sm:text-sm text-gray-600 italic">{displayTableNote}</p>
                )}
              </div>

              {/* Pressure & Temperature Ratings */}
              <div className="mb-5 sm:mb-7 p-3 sm:p-4 bg-blue-50 border border-blue-100 rounded-xl flex gap-2.5 sm:gap-3">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-blue-900 font-medium mb-0.5 sm:mb-1">{detail?.pressureRatings || "Pressure & Temperature Ratings"}</p>
                  <p className="text-xs sm:text-sm text-blue-800">
                    {detail?.pressureRatingsManualValves || "All valves are rated per ASME B16.34 pressure-temperature tables. Pressure class ratings define the maximum allowable working pressure at specified temperatures per material group. For specific pressure-temperature data, contact our team or refer to the product catalog."}
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 valves-sidebar">
              <div className="lg:sticky lg:top-28 space-y-4 sm:space-y-6">
                {/* Specifications */}
                <div className="card p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-navy-900 mb-3 sm:mb-4">{detail?.specifications || "Specifications"}</h3>
                  <div className="space-y-1.5 sm:space-y-2">
                    {valve.specifications.map((spec, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent-500 rounded-full flex-shrink-0" />
                        <span className="text-sm sm:text-base text-gray-700">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applications */}
                <div className="card p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-navy-900 mb-3 sm:mb-4">{detail?.applications || "Applications"}</h3>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {displayApplications.map((app, index) => (
                      <span key={index} className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded-full">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Card */}
                <div className="card p-4 sm:p-6 bg-navy-900 border-navy-800">
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-1.5 sm:mb-2">{detail?.needThisProduct || "Need This Product?"}</h3>
                  <p className="text-navy-200 text-xs sm:text-sm mb-3 sm:mb-4">
                    {detail?.contactTeam || "Contact our team for pricing, availability, and technical specifications."}
                  </p>
                  <Link href="/contact" className="btn-primary w-full justify-center text-sm sm:text-base py-2.5 sm:py-3">
                    {detail?.requestQuote || "Request Quote"}
                  </Link>
                </div>

                {/* Downloads */}
                <div className="card p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-navy-900 mb-3 sm:mb-4">{detail?.downloads || "Downloads"}</h3>
                  <a href="#" className="flex items-center gap-2.5 sm:gap-3 text-gray-700 hover:text-navy-900 transition-colors text-sm sm:text-base py-1">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-accent-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    {detail?.valvesCatalog || "Valves Catalog (PDF)"}
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
          <h2 className="text-xl sm:text-2xl font-semibold text-navy-900 mb-4 sm:mb-5">{detail?.otherValveProducts || "Other Valve Products"}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {Object.entries(manualValveData)
              .filter(([key]) => key !== slug)
              .slice(0, 3)
              .map(([key, v]) => (
                <Link key={key} href={`/products/manual-valves/${key}`} className="card group p-4 sm:p-6">
                  <div className="aspect-[16/10] relative rounded-lg overflow-hidden mb-3 sm:mb-4">
                    <Image
                      src={v.image}
                      alt={isThaiLanguage ? v.nameTh : v.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-xs text-accent-500 font-medium">{isThaiLanguage ? v.categoryTh : v.category}</span>
                  <h3 className="text-sm sm:text-base font-semibold text-navy-900 mb-1.5 sm:mb-2 line-clamp-1">{isThaiLanguage ? v.nameTh : v.name}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm line-clamp-2">{isThaiLanguage ? v.descriptionTh : v.description}</p>
                </Link>
              ))}
          </div>
          
          {/* Back to Manual Valves Link */}
          <div className="mt-4 sm:mt-6 text-center">
            <Link href="/products/manual-valves" className="inline-flex items-center text-sm sm:text-base text-navy-900 font-medium hover:text-accent-500 transition-colors py-2">
              <svg className="w-5 h-5 mr-2 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              {detail?.backToManualValves || (isThaiLanguage ? "กลับไปยังวาล์วแมนนวลทั้งหมด" : "Back to All Manual Valves")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
