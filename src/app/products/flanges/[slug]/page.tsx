"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

// Flange product data
const flangeData: Record<string, {
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
    standard: string;
  }[];
  tableNote?: string;
  tableNoteTh?: string;
}> = {
  "weld-neck": {
    name: "Weld Neck Flanges",
    nameTh: "แฟลนจ์เวลด์เน็ค",
    category: "Flanges",
    categoryTh: "แฟลนจ์",
    description: "Tapered hub design for maximum strength at the weld joint. Best for high-pressure and high-temperature service.",
    descriptionTh: "การออกแบบฮับเรียวเพื่อความแข็งแรงสูงสุดที่จุดเชื่อม เหมาะสำหรับงานแรงดันสูงและอุณหภูมิสูง",
    longDescription: "Weld neck flanges for high-pressure, high-temperature applications. Carbon, stainless, alloy, and duplex steel. Sizes from 1/2\" to 60\". Full hub design provides reinforced strength at the base.",
    longDescriptionTh: "แฟลนจ์เวลด์เน็คสำหรับงานแรงดันสูงและอุณหภูมิสูง เหล็กคาร์บอน สแตนเลส อัลลอย และดูเพล็กซ์ ขนาดตั้งแต่ 1/2\" ถึง 60\" การออกแบบฮับเต็มให้ความแข็งแรงเสริมที่ฐาน",
    image: "/flanges/weld-neck.png",
    specifications: ["ASME B16.5", "ASME B16.47", "EN 1092-1", "JIS B2220"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Petrochemical", "Offshore", "High-Pressure Systems"],
    applicationsTh: ["โรงไฟฟ้า", "โรงกลั่น", "โรงงานเคมี", "ปิโตรเคมี", "นอกชายฝั่ง", "ระบบแรงดันสูง"],
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
    nameTh: "แฟลนจ์สลิปออน",
    category: "Flanges",
    categoryTh: "แฟลนจ์",
    description: "Slides over the pipe for easy alignment and welding. Cost-effective choice for low-pressure applications.",
    descriptionTh: "สวมทับท่อเพื่อการจัดตำแหน่งและการเชื่อมที่ง่าย ตัวเลือกที่คุ้มค่าสำหรับงานแรงดันต่ำ",
    longDescription: "Slip-on flanges for easy alignment and welding. Carbon, stainless, alloy, and duplex steel. Sizes from 1/2\" to 24\". Double fillet weld provides secure connection.",
    longDescriptionTh: "แฟลนจ์สลิปออนสำหรับการจัดตำแหน่งและการเชื่อมที่ง่าย เหล็กคาร์บอน สแตนเลส อัลลอย และดูเพล็กซ์ ขนาดตั้งแต่ 1/2\" ถึง 24\" การเชื่อมฟิลเลตคู่ให้การเชื่อมต่อที่แน่นหนา",
    image: "/flanges/slip-on.png",
    specifications: ["ASME B16.5", "EN 1092-1", "JIS B2220"],
    applications: ["Power Plants", "Water Systems", "HVAC", "General Industrial", "Low-Pressure Piping", "Process Piping"],
    applicationsTh: ["โรงไฟฟ้า", "ระบบน้ำ", "ระบบปรับอากาศ", "อุตสาหกรรมทั่วไป", "ท่อแรงดันต่ำ", "ท่อกระบวนการ"],
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
    nameTh: "แฟลนจ์บลายด์",
    category: "Flanges",
    categoryTh: "แฟลนจ์",
    description: "Closes off the end of a piping system. Used for testing, inspection, or future expansion.",
    descriptionTh: "ปิดปลายระบบท่อ ใช้สำหรับการทดสอบ การตรวจสอบ หรือการขยายในอนาคต",
    longDescription: "Blind flanges for system isolation and termination. Carbon, stainless, alloy, and duplex steel. Sizes from 1/2\" to 60\". Full pressure rating for testing and isolation.",
    longDescriptionTh: "แฟลนจ์บลายด์สำหรับการแยกระบบและการปิดท้าย เหล็กคาร์บอน สแตนเลส อัลลอย และดูเพล็กซ์ ขนาดตั้งแต่ 1/2\" ถึง 60\" พิกัดแรงดันเต็มสำหรับการทดสอบและการแยก",
    image: "/flanges/blind.png",
    specifications: ["ASME B16.5", "ASME B16.47", "EN 1092-1", "JIS B2220"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Pressure Testing", "System Isolation", "Future Expansion"],
    applicationsTh: ["โรงไฟฟ้า", "โรงกลั่น", "โรงงานเคมี", "การทดสอบแรงดัน", "การแยกระบบ", "การขยายในอนาคต"],
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
    nameTh: "แฟลนจ์ซ็อกเก็ตเวลด์",
    category: "Flanges",
    categoryTh: "แฟลนจ์",
    description: "Pipe inserts into the socket before welding. Ideal for small-diameter, high-pressure lines.",
    descriptionTh: "ท่อสอดเข้าไปในซ็อกเก็ตก่อนการเชื่อม เหมาะสำหรับท่อขนาดเล็กและแรงดันสูง",
    longDescription: "Socket weld flanges for small-bore, high-pressure piping. Carbon, stainless, alloy, and duplex steel. Sizes from 1/2\" to 4\". Single fillet weld connection.",
    longDescriptionTh: "แฟลนจ์ซ็อกเก็ตเวลด์สำหรับท่อขนาดเล็กและแรงดันสูง เหล็กคาร์บอน สแตนเลส อัลลอย และดูเพล็กซ์ ขนาดตั้งแต่ 1/2\" ถึง 4\" การเชื่อมฟิลเลตเดี่ยว",
    image: "/flanges/socket-weld.png",
    specifications: ["ASME B16.5", "EN 1092-1", "JIS B2220"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Instrumentation", "High-Pressure Small Bore", "Process Piping"],
    applicationsTh: ["โรงไฟฟ้า", "โรงกลั่น", "โรงงานเคมี", "เครื่องมือวัด", "ท่อขนาดเล็กแรงดันสูง", "ท่อกระบวนการ"],
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
    nameTh: "แฟลนจ์เกลียว",
    category: "Flanges",
    categoryTh: "แฟลนจ์",
    description: "Screws onto threaded pipe — no welding required. Best for low-pressure, non-critical systems.",
    descriptionTh: "ขันเข้ากับท่อเกลียว — ไม่ต้องเชื่อม เหมาะสำหรับระบบแรงดันต่ำและไม่วิกฤต",
    longDescription: "Threaded flanges for non-welded connections. Carbon, stainless, alloy, and duplex steel. Sizes from 1/2\" to 4\". NPT and BSPT threads available.",
    longDescriptionTh: "แฟลนจ์เกลียวสำหรับการเชื่อมต่อแบบไม่เชื่อม เหล็กคาร์บอน สแตนเลส อัลลอย และดูเพล็กซ์ ขนาดตั้งแต่ 1/2\" ถึง 4\" มีเกลียว NPT และ BSPT",
    image: "/flanges/threaded.png",
    specifications: ["ASME B16.5", "EN 1092-1", "JIS B2220"],
    applications: ["Power Plants", "Low-Pressure Systems", "Air Lines", "Water Systems", "Non-Welded Applications", "Easy Assembly"],
    applicationsTh: ["โรงไฟฟ้า", "ระบบแรงดันต่ำ", "ท่อลม", "ระบบน้ำ", "งานไม่ต้องเชื่อม", "การประกอบง่าย"],
    products: [
      { name: "Carbon Steel", grade: "ASTM A105", sizes: "1/2\" - 4\"", pressureClass: "150#, 300#, 600#", standard: "ASME B16.5" },
      { name: "Carbon Steel", grade: "ASTM A350 LF2", sizes: "1/2\" - 4\"", pressureClass: "150#, 300#, 600#", standard: "ASME B16.5" },
      { name: "Stainless Steel", grade: "ASTM A182 F304/304L", sizes: "1/2\" - 4\"", pressureClass: "150#, 300#, 600#", standard: "ASME B16.5" },
      { name: "Stainless Steel", grade: "ASTM A182 F316/316L", sizes: "1/2\" - 4\"", pressureClass: "150#, 300#, 600#", standard: "ASME B16.5" },
      { name: "Alloy Steel", grade: "ASTM A182 F5/F9/F11/F22", sizes: "1/2\" - 4\"", pressureClass: "150#, 300#, 600#", standard: "ASME B16.5" },
      { name: "Duplex Steel", grade: "ASTM A182 F51/F53", sizes: "1/2\" - 4\"", pressureClass: "150#, 300#, 600#", standard: "ASME B16.5" },
    ],
    tableNote: "NPT and BSPT threads available.",
    tableNoteTh: "มีเกลียว NPT และ BSPT",
  },
  "lap-joint": {
    name: "Lap Joint Flanges",
    nameTh: "แฟลนจ์แลปจอยท์",
    category: "Flanges",
    categoryTh: "แฟลนจ์",
    description: "Two-piece design allows easy bolt alignment and rotation. Good for systems requiring frequent disassembly.",
    descriptionTh: "การออกแบบสองชิ้นช่วยให้จัดตำแหน่งสลักและหมุนได้ง่าย เหมาะสำหรับระบบที่ต้องถอดประกอบบ่อย",
    longDescription: "Lap joint flanges with stub end for easy alignment. Carbon, stainless, alloy, and duplex steel. Sizes from 1/2\" to 24\". Cost-effective for alloy piping systems.",
    longDescriptionTh: "แฟลนจ์แลปจอยท์พร้อมสตับเอนด์สำหรับการจัดตำแหน่งที่ง่าย เหล็กคาร์บอน สแตนเลส อัลลอย และดูเพล็กซ์ ขนาดตั้งแต่ 1/2\" ถึง 24\" คุ้มค่าสำหรับระบบท่ออัลลอย",
    image: "/flanges/lap-joint.png",
    specifications: ["ASME B16.5", "EN 1092-1", "JIS B2220"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Stainless Steel Systems", "Alloy Systems", "Frequent Disassembly"],
    applicationsTh: ["โรงไฟฟ้า", "โรงกลั่น", "โรงงานเคมี", "ระบบสแตนเลส", "ระบบอัลลอย", "การถอดประกอบบ่อย"],
    products: [
      { name: "Carbon Steel", grade: "ASTM A105", sizes: "1/2\" - 24\"", pressureClass: "150#, 300#, 600#", standard: "ASME B16.5" },
      { name: "Stainless Steel", grade: "ASTM A182 F304/304L", sizes: "1/2\" - 24\"", pressureClass: "150#, 300#, 600#", standard: "ASME B16.5" },
      { name: "Stainless Steel", grade: "ASTM A182 F316/316L", sizes: "1/2\" - 24\"", pressureClass: "150#, 300#, 600#", standard: "ASME B16.5" },
      { name: "Alloy Steel", grade: "ASTM A182 F5/F9/F11/F22", sizes: "1/2\" - 24\"", pressureClass: "150#, 300#, 600#", standard: "ASME B16.5" },
      { name: "Duplex Steel", grade: "ASTM A182 F51/F53", sizes: "1/2\" - 24\"", pressureClass: "150#, 300#, 600#", standard: "ASME B16.5" },
    ],
    tableNote: "Used with stub ends per MSS SP-43.",
    tableNoteTh: "ใช้กับสตับเอนด์ตาม MSS SP-43",
  },
  "orifice": {
    name: "Orifice Flanges",
    nameTh: "แฟลนจ์ออริฟิซ",
    category: "Flanges",
    categoryTh: "แฟลนจ์",
    description: "Flanges with pressure taps for flow measurement. Used with orifice plates in metering systems.",
    descriptionTh: "แฟลนจ์พร้อมจุดวัดแรงดันสำหรับการวัดการไหล ใช้กับแผ่นออริฟิซในระบบมิเตอร์",
    longDescription: "Orifice flanges for flow measurement applications. Carbon, stainless, and alloy steel. Sizes from 1\" to 24\". Includes pressure tap connections for differential pressure measurement.",
    longDescriptionTh: "แฟลนจ์ออริฟิซสำหรับงานวัดการไหล เหล็กคาร์บอน สแตนเลส และอัลลอย ขนาดตั้งแต่ 1\" ถึง 24\" รวมจุดเชื่อมต่อวัดแรงดันสำหรับการวัดแรงดันต่าง",
    image: "/flanges/orifice.png",
    specifications: ["ASME B16.36", "EN 1092-1"],
    applications: ["Flow Measurement", "Metering Systems", "Refineries", "Chemical Plants", "Process Control", "Custody Transfer"],
    applicationsTh: ["การวัดการไหล", "ระบบมิเตอร์", "โรงกลั่น", "โรงงานเคมี", "การควบคุมกระบวนการ", "การโอนถ่ายสินค้า"],
    products: [
      { name: "Carbon Steel", grade: "ASTM A105", sizes: "1\" - 24\"", pressureClass: "300#, 600#, 900#, 1500#, 2500#", standard: "ASME B16.36" },
      { name: "Stainless Steel", grade: "ASTM A182 F304/304L", sizes: "1\" - 24\"", pressureClass: "300#, 600#, 900#, 1500#, 2500#", standard: "ASME B16.36" },
      { name: "Stainless Steel", grade: "ASTM A182 F316/316L", sizes: "1\" - 24\"", pressureClass: "300#, 600#, 900#, 1500#, 2500#", standard: "ASME B16.36" },
      { name: "Alloy Steel", grade: "ASTM A182 F5/F9/F11/F22", sizes: "1\" - 24\"", pressureClass: "300#, 600#, 900#, 1500#, 2500#", standard: "ASME B16.36" },
    ],
    tableNote: "Includes 1/2\" NPT pressure tap connections.",
    tableNoteTh: "รวมจุดเชื่อมต่อวัดแรงดัน NPT ขนาด 1/2\"",
  },
  "spectacle-blind": {
    name: "Spectacle Blind Flanges",
    nameTh: "แฟลนจ์สเปกตาเคิลบลายด์",
    category: "Flanges",
    categoryTh: "แฟลนจ์",
    description: "Figure-8 design combines blind and spacer ring. Used for permanent isolation points in piping systems.",
    descriptionTh: "การออกแบบรูปเลข 8 รวมบลายด์และแหวนสเปเซอร์ ใช้สำหรับจุดแยกถาวรในระบบท่อ",
    longDescription: "Spectacle blind flanges for system isolation. Carbon, stainless, and alloy steel. Sizes from 1\" to 48\". Figure-8 design allows quick changeover between open and closed positions.",
    longDescriptionTh: "แฟลนจ์สเปกตาเคิลบลายด์สำหรับการแยกระบบ เหล็กคาร์บอน สแตนเลส และอัลลอย ขนาดตั้งแต่ 1\" ถึง 48\" การออกแบบรูปเลข 8 ช่วยให้เปลี่ยนระหว่างตำแหน่งเปิดและปิดได้รวดเร็ว",
    image: "/flanges/spectacle-blind.png",
    specifications: ["ASME B16.48"],
    applications: ["Refineries", "Chemical Plants", "Petrochemical", "System Isolation", "Maintenance Points", "Safety Isolation"],
    applicationsTh: ["โรงกลั่น", "โรงงานเคมี", "ปิโตรเคมี", "การแยกระบบ", "จุดบำรุงรักษา", "การแยกเพื่อความปลอดภัย"],
    products: [
      { name: "Carbon Steel", grade: "ASTM A516 Gr.70", sizes: "1\" - 48\"", pressureClass: "150#, 300#, 600#, 900#, 1500#", standard: "ASME B16.48" },
      { name: "Stainless Steel", grade: "ASTM A240 304/304L", sizes: "1\" - 48\"", pressureClass: "150#, 300#, 600#, 900#, 1500#", standard: "ASME B16.48" },
      { name: "Stainless Steel", grade: "ASTM A240 316/316L", sizes: "1\" - 48\"", pressureClass: "150#, 300#, 600#, 900#, 1500#", standard: "ASME B16.48" },
      { name: "Alloy Steel", grade: "ASTM A387 Gr.11/22", sizes: "1\" - 48\"", pressureClass: "150#, 300#, 600#, 900#, 1500#", standard: "ASME B16.48" },
    ],
    tableNote: "Figure-8 design with integral spacer ring.",
    tableNoteTh: "การออกแบบรูปเลข 8 พร้อมแหวนสเปเซอร์ในตัว",
  },
  "ring-type-joint": {
    name: "Ring Type Joint (RTJ) Flanges",
    nameTh: "แฟลนจ์ RTJ",
    category: "Flanges",
    categoryTh: "แฟลนจ์",
    description: "Metal-to-metal seal using ring gaskets. Designed for high-pressure, high-temperature critical service.",
    descriptionTh: "การซีลโลหะกับโลหะโดยใช้แหวนปะเก็น ออกแบบสำหรับงานวิกฤตแรงดันสูงและอุณหภูมิสูง",
    longDescription: "RTJ flanges for critical high-pressure service. Carbon, stainless, alloy, and duplex steel. Sizes from 1/2\" to 24\". Metal-to-metal seal with ring gasket groove.",
    longDescriptionTh: "แฟลนจ์ RTJ สำหรับงานวิกฤตแรงดันสูง เหล็กคาร์บอน สแตนเลส อัลลอย และดูเพล็กซ์ ขนาดตั้งแต่ 1/2\" ถึง 24\" การซีลโลหะกับโลหะพร้อมร่องแหวนปะเก็น",
    image: "/flanges/rtj.png",
    specifications: ["ASME B16.5", "API 6A"],
    applications: ["Oil & Gas", "Offshore", "High-Pressure Systems", "Subsea", "Wellhead Equipment", "Critical Service"],
    applicationsTh: ["น้ำมันและก๊าซ", "นอกชายฝั่ง", "ระบบแรงดันสูง", "ใต้ทะเล", "อุปกรณ์หัวบ่อ", "งานวิกฤต"],
    products: [
      { name: "Carbon Steel", grade: "ASTM A105", sizes: "1/2\" - 24\"", pressureClass: "150#, 300#, 600#, 900#, 1500#, 2500#", standard: "ASME B16.5" },
      { name: "Stainless Steel", grade: "ASTM A182 F304/304L", sizes: "1/2\" - 24\"", pressureClass: "150#, 300#, 600#, 900#, 1500#, 2500#", standard: "ASME B16.5" },
      { name: "Stainless Steel", grade: "ASTM A182 F316/316L", sizes: "1/2\" - 24\"", pressureClass: "150#, 300#, 600#, 900#, 1500#, 2500#", standard: "ASME B16.5" },
      { name: "Alloy Steel", grade: "ASTM A182 F5/F9/F11/F22/F91", sizes: "1/2\" - 24\"", pressureClass: "150#, 300#, 600#, 900#, 1500#, 2500#", standard: "ASME B16.5" },
      { name: "Duplex Steel", grade: "ASTM A182 F51/F53/F55", sizes: "1/2\" - 24\"", pressureClass: "150#, 300#, 600#, 900#, 1500#, 2500#", standard: "ASME B16.5" },
    ],
    tableNote: "R, RX, and BX ring gasket grooves available.",
    tableNoteTh: "มีร่องแหวนปะเก็น R, RX และ BX",
  },
};

export default function FlangeDetailPage() {
  const params = useParams();
  const slug = params?.slug as string | undefined;
  const { t, language } = useLanguage();
  const isThaiLanguage = language === "th";
  
  const flange = slug ? flangeData[slug] : undefined;
  
  if (!flange) {
    notFound();
  }

  const displayName = isThaiLanguage ? flange.nameTh : flange.name;
  const displayCategory = isThaiLanguage ? flange.categoryTh : flange.category;
  const displayLongDescription = isThaiLanguage ? flange.longDescriptionTh : flange.longDescription;
  const displayApplications = isThaiLanguage ? flange.applicationsTh : flange.applications;
  const displayTableNote = isThaiLanguage ? flange.tableNoteTh : flange.tableNote;
  
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
            <Link href="/products/flanges" className="hover:text-white transition-colors">{displayCategory}</Link>
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
      <section className="py-6 sm:py-8 md:py-14 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 min-w-0">
              {/* Hero Image - reduced height */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden mb-5 sm:mb-7 aspect-[5/2] bg-gray-100 border border-gray-200">
                <Image
                  src={flange.image}
                  alt={displayName}
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>

              {/* Products Table */}
              <div className="mb-5 sm:mb-7">
                <h2 className="text-xl sm:text-2xl font-semibold text-navy-900 mb-3 sm:mb-4">{t.products?.detail?.availableProducts || "Available Products"}</h2>
                <div className="overflow-x-auto -mx-4 sm:mx-0">
                  <div className="inline-block min-w-full align-middle px-4 sm:px-0">
                    <table className="w-full min-w-[600px]">
                      <thead>
                        <tr className="bg-navy-50">
                          <th className="px-3 py-2.5 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-semibold text-navy-900 rounded-l-lg whitespace-nowrap">{t.products?.detail?.tableHeaders?.material || "Material"}</th>
                          <th className="px-3 py-2.5 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-semibold text-navy-900 whitespace-nowrap">{t.products?.detail?.tableHeaders?.grade || "Grade"}</th>
                          <th className="px-3 py-2.5 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-semibold text-navy-900 whitespace-nowrap">{t.products?.detail?.tableHeaders?.sizes || "Sizes"}</th>
                          <th className="px-3 py-2.5 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-semibold text-navy-900 whitespace-nowrap">{t.products?.detail?.tableHeaders?.pressureClass || "Pressure Class"}</th>
                          <th className="px-3 py-2.5 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-semibold text-navy-900 rounded-r-lg whitespace-nowrap">{t.products?.detail?.tableHeaders?.standard || "Standard"}</th>
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
                  <p className="text-xs sm:text-sm text-blue-900 font-medium mb-0.5 sm:mb-1">{t.products?.detail?.pressureRatings || "Pressure & Temperature Ratings"}</p>
                  <p className="text-xs sm:text-sm text-blue-800">
                    {t.products?.detail?.pressureRatingsFlanges || "All flanges are rated per ASME B16.5 pressure-temperature tables. Pressure class ratings (150# through 2500#) define the maximum allowable working pressure at specified temperatures. For specific pressure-temperature data, contact our team or refer to the product catalog."}
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 flanges-sidebar">
              <div className="lg:sticky lg:top-28 space-y-4 sm:space-y-6">
                {/* Specifications */}
                <div className="card p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-navy-900 mb-3 sm:mb-4">{t.products?.detail?.specifications || "Specifications"}</h3>
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
                  <h3 className="text-base sm:text-lg font-semibold text-navy-900 mb-3 sm:mb-4">{t.products?.detail?.applications || "Applications"}</h3>
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
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-1.5 sm:mb-2">{t.products?.detail?.needThisProduct || "Need This Product?"}</h3>
                  <p className="text-navy-200 text-xs sm:text-sm mb-3 sm:mb-4">
                    {t.products?.detail?.contactTeam || "Contact our team for pricing, availability, and technical specifications."}
                  </p>
                  <Link href="/contact" className="btn-primary w-full justify-center text-sm sm:text-base py-2.5 sm:py-3">
                    {t.products?.detail?.requestQuote || "Request Quote"}
                  </Link>
                </div>

                {/* Downloads */}
                <div className="card p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-navy-900 mb-3 sm:mb-4">{t.products?.detail?.downloads || "Downloads"}</h3>
                  <a href="#" className="flex items-center gap-2.5 sm:gap-3 text-gray-700 hover:text-navy-900 transition-colors text-sm sm:text-base py-1">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-accent-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    {t.products?.detail?.flangesCatalog || "Flanges Catalog (PDF)"}
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
          <h2 className="text-xl sm:text-2xl font-semibold text-navy-900 mb-4 sm:mb-5">{t.products?.detail?.otherFlangeProducts || "Other Flange Products"}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {Object.entries(flangeData)
              .filter(([key]) => key !== slug)
              .slice(0, 3)
              .map(([key, f]) => (
                <Link key={key} href={`/products/flanges/${key}`} className="card group p-4 sm:p-6">
                  <div className="aspect-[16/10] relative rounded-lg overflow-hidden mb-3 sm:mb-4 bg-gray-100">
                    <Image
                      src={f.image}
                      alt={isThaiLanguage ? f.nameTh : f.name}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-xs text-accent-500 font-medium">{isThaiLanguage ? f.categoryTh : f.category}</span>
                  <h3 className="text-sm sm:text-base font-semibold text-navy-900 mb-1.5 sm:mb-2 line-clamp-1">{isThaiLanguage ? f.nameTh : f.name}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm line-clamp-2">{isThaiLanguage ? f.descriptionTh : f.description}</p>
                </Link>
              ))}
          </div>
          
          {/* Back to Flanges Link */}
          <div className="mt-4 sm:mt-6 text-center">
            <Link href="/products/flanges" className="inline-flex items-center text-sm sm:text-base text-navy-900 font-medium hover:text-accent-500 transition-colors py-2">
              <svg className="w-5 h-5 mr-2 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              {t.products?.detail?.backToFlanges || "Back to All Flanges"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
