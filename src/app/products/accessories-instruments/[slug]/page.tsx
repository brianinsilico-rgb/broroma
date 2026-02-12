"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

// Accessory product data
const accessoryData: Record<string, {
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
  tableHeaders: string[];
  products: Record<string, string>[];
  infoNote: string;
  infoNoteTh: string;
}> = {
  "gaskets": {
    name: "Gaskets",
    nameTh: "ปะเก็น",
    category: "Accessories & Instruments",
    categoryTh: "อุปกรณ์เสริมและเครื่องมือวัด",
    description: "Flange gaskets in spiral wound, ring joint, and sheet materials.",
    descriptionTh: "ปะเก็นหน้าแปลนแบบสไปรัลวาวด์ แบบริงจอยท์ และแบบแผ่น",
    longDescription: "Spiral wound, ring joint, and sheet gaskets for flange sealing. Stainless steel, carbon steel, and specialty alloys. Sizes from 1/2\" to 60\". Available in all ASME pressure classes.",
    longDescriptionTh: "ปะเก็นแบบสไปรัลวาวด์ แบบริงจอยท์ และแบบแผ่นสำหรับการซีลหน้าแปลน เหล็กกล้าสแตนเลส เหล็กกล้าคาร์บอน และโลหะผสมพิเศษ ขนาดตั้งแต่ 1/2\" ถึง 60\" มีทุกระดับความดัน ASME",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
    specifications: ["ASME B16.20", "ASME B16.21", "API 601", "EN 1514"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Oil & Gas", "Petrochemical", "Water Treatment"],
    applicationsTh: ["โรงไฟฟ้า", "โรงกลั่น", "โรงงานเคมี", "น้ำมันและก๊าซ", "ปิโตรเคมี", "บำบัดน้ำ"],
    tableHeaders: ["Type", "Material", "Sizes", "Pressure Class", "Standard"],
    products: [
      { Type: "Spiral Wound", Material: "SS304/316 + graphite fill", Sizes: "1/2\" - 60\"", "Pressure Class": "150#, 300#, 600#, 900#, 1500#, 2500#", Standard: "ASME B16.20" },
      { Type: "Ring Joint (RTJ)", Material: "SS304/316, soft iron, Inconel", Sizes: "1/2\" - 24\"", "Pressure Class": "600#, 900#, 1500#, 2500#", Standard: "ASME B16.20" },
      { Type: "Sheet / Non-metallic", Material: "PTFE, graphite, CAF", Sizes: "1/2\" - 60\"", "Pressure Class": "150#, 300#", Standard: "ASME B16.21" },
      { Type: "Kammprofile", Material: "SS304/316 + graphite", Sizes: "1/2\" - 24\"", "Pressure Class": "150# - 2500#", Standard: "ASME B16.20" },
    ],
    infoNote: "Gasket selection depends on flange type, pressure class, and service medium. Spiral wound gaskets are standard for most ASME flanges. For sour service or high-temperature applications, contact our team for material recommendations.",
    infoNoteTh: "การเลือกปะเก็นขึ้นอยู่กับชนิดหน้าแปลน ระดับความดัน และสารที่ใช้งาน ปะเก็นแบบสไปรัลวาวด์เป็นมาตรฐานสำหรับหน้าแปลน ASME ส่วนใหญ่ สำหรับการใช้งานกับสารกัดกร่อนหรืออุณหภูมิสูง กรุณาติดต่อทีมงานของเราเพื่อคำแนะนำวัสดุ",
  },
  "bolts-studs": {
    name: "Bolts & Studs",
    nameTh: "สลักเกลียวและสตัด",
    category: "Accessories & Instruments",
    categoryTh: "อุปกรณ์เสริมและเครื่องมือวัด",
    description: "Stud bolts, hex bolts, and nuts for flange connections.",
    descriptionTh: "สตัดโบลท์ โบลท์หกเหลี่ยม และนัทสำหรับการเชื่อมต่อหน้าแปลน",
    longDescription: "Stud bolts, hex bolts, and nuts for flange connections. ASTM A193/A194 grades. Sizes from 1/2\" to 4\" diameter. Full thread and continuous thread options.",
    longDescriptionTh: "สตัดโบลท์ โบลท์หกเหลี่ยม และนัทสำหรับการเชื่อมต่อหน้าแปลน เกรด ASTM A193/A194 ขนาดตั้งแต่ 1/2\" ถึง 4\" มีแบบเกลียวเต็มและเกลียวต่อเนื่องให้เลือก",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80",
    specifications: ["ASME B18.2.1", "ASME B18.2.2", "ASTM A193", "ASTM A194"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Oil & Gas", "Petrochemical", "Water Treatment"],
    applicationsTh: ["โรงไฟฟ้า", "โรงกลั่น", "โรงงานเคมี", "น้ำมันและก๊าซ", "ปิโตรเคมี", "บำบัดน้ำ"],
    tableHeaders: ["Grade", "Material", "Diameter", "Length Range", "Standard"],
    products: [
      { Grade: "ASTM A193 B7", Material: "Chromium-Molybdenum Steel", Diameter: "1/2\" - 4\"", "Length Range": "2\" - 24\"", Standard: "ASME B18.2.1" },
      { Grade: "ASTM A193 B8/B8M", Material: "Stainless Steel 304/316", Diameter: "1/2\" - 4\"", "Length Range": "2\" - 24\"", Standard: "ASME B18.2.1" },
      { Grade: "ASTM A193 B16", Material: "Cr-Mo-V Steel", Diameter: "1/2\" - 4\"", "Length Range": "2\" - 24\"", Standard: "ASME B18.2.1" },
      { Grade: "ASTM A194 2H (Nuts)", Material: "Carbon Steel", Diameter: "1/2\" - 4\"", "Length Range": "-", Standard: "ASME B18.2.2" },
      { Grade: "ASTM A194 8/8M (Nuts)", Material: "Stainless Steel 304/316", Diameter: "1/2\" - 4\"", "Length Range": "-", Standard: "ASME B18.2.2" },
    ],
    infoNote: "Bolt grade must match flange pressure class and service temperature per ASME PCC-1. B7 studs with 2H nuts are standard for most applications up to 400°C. For higher temperatures or corrosive service, contact our team.",
    infoNoteTh: "เกรดโบลท์ต้องตรงกับระดับความดันหน้าแปลนและอุณหภูมิใช้งานตาม ASME PCC-1 สตัด B7 กับนัท 2H เป็นมาตรฐานสำหรับการใช้งานส่วนใหญ่ถึง 400°C สำหรับอุณหภูมิสูงกว่าหรือการใช้งานกับสารกัดกร่อน กรุณาติดต่อทีมงานของเรา",
  },
  "strainer": {
    name: "Strainers",
    nameTh: "กรองสิ่งสกปรก",
    category: "Accessories & Instruments",
    categoryTh: "อุปกรณ์เสริมและเครื่องมือวัด",
    description: "Y-strainers and basket strainers for pipeline debris removal.",
    descriptionTh: "สเตรนเนอร์แบบ Y และแบบตะกร้าสำหรับกำจัดเศษสิ่งสกปรกในท่อ",
    longDescription: "Y-strainers and basket strainers for pipeline debris removal. Carbon and stainless steel. Sizes from 1/2\" to 24\". Available in flanged, socket weld, and threaded connections.",
    longDescriptionTh: "สเตรนเนอร์แบบ Y และแบบตะกร้าสำหรับกำจัดเศษสิ่งสกปรกในท่อ เหล็กกล้าคาร์บอนและสแตนเลส ขนาดตั้งแต่ 1/2\" ถึง 24\" มีแบบหน้าแปลน แบบเชื่อมซ็อกเก็ต และแบบเกลียวให้เลือก",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80",
    specifications: ["ASME B16.34", "API 600", "BS 6750"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Oil & Gas", "Petrochemical", "Water Treatment"],
    applicationsTh: ["โรงไฟฟ้า", "โรงกลั่น", "โรงงานเคมี", "น้ำมันและก๊าซ", "ปิโตรเคมี", "บำบัดน้ำ"],
    tableHeaders: ["Type", "Material", "Sizes", "Pressure Class", "Standard"],
    products: [
      { Type: "Y-Strainer", Material: "ASTM A216 WCB", Sizes: "1/2\" - 24\"", "Pressure Class": "150#, 300#, 600#", Standard: "ASME B16.34" },
      { Type: "Y-Strainer", Material: "ASTM A351 CF8/CF8M", Sizes: "1/2\" - 12\"", "Pressure Class": "150#, 300#", Standard: "ASME B16.34" },
      { Type: "Basket Strainer", Material: "ASTM A216 WCB", Sizes: "2\" - 24\"", "Pressure Class": "150#, 300#", Standard: "ASME B16.34" },
    ],
    infoNote: "Mesh size and screen material selected based on application requirements. Standard mesh sizes from 20 to 200 available. For specific filtration requirements, contact our team.",
    infoNoteTh: "ขนาดตาข่ายและวัสดุตะแกรงเลือกตามความต้องการของการใช้งาน มีขนาดตาข่ายมาตรฐานตั้งแต่ 20 ถึง 200 สำหรับความต้องการการกรองเฉพาะ กรุณาติดต่อทีมงานของเรา",
  },
  "steam-trap": {
    name: "Steam Traps",
    nameTh: "สตีมแทรป",
    category: "Accessories & Instruments",
    categoryTh: "อุปกรณ์เสริมและเครื่องมือวัด",
    description: "Automatic condensate removal devices for efficient steam system operation.",
    descriptionTh: "อุปกรณ์ระบายคอนเดนเสทอัตโนมัติสำหรับการทำงานของระบบไอน้ำอย่างมีประสิทธิภาพ",
    longDescription: "Mechanical, thermostatic, and thermodynamic steam traps. Carbon and stainless steel. Sizes from 1/2\" to 2\". For condensate removal in steam systems.",
    longDescriptionTh: "สตีมแทรปแบบกลไก แบบเทอร์โมสแตติก และแบบเทอร์โมไดนามิก เหล็กกล้าคาร์บอนและสแตนเลส ขนาดตั้งแต่ 1/2\" ถึง 2\" สำหรับการระบายคอนเดนเสทในระบบไอน้ำ",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80",
    specifications: ["BS 6023", "EN 27841", "ASME B16.34"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Oil & Gas", "Petrochemical", "Water Treatment"],
    applicationsTh: ["โรงไฟฟ้า", "โรงกลั่น", "โรงงานเคมี", "น้ำมันและก๊าซ", "ปิโตรเคมี", "บำบัดน้ำ"],
    tableHeaders: ["Type", "Material", "Sizes", "Pressure Rating", "Standard"],
    products: [
      { Type: "Mechanical (Float & Thermostatic)", Material: "Carbon Steel / Stainless Steel", Sizes: "1/2\" - 2\"", "Pressure Rating": "Up to 600 PSI", Standard: "BS 6023" },
      { Type: "Thermostatic (Bimetallic)", Material: "Carbon Steel / Stainless Steel", Sizes: "1/2\" - 2\"", "Pressure Rating": "Up to 600 PSI", Standard: "BS 6023" },
      { Type: "Thermodynamic (Disc)", Material: "Carbon Steel / Stainless Steel", Sizes: "1/2\" - 1\"", "Pressure Rating": "Up to 900 PSI", Standard: "BS 6023" },
    ],
    infoNote: "Trap selection depends on steam pressure, condensate load, and application. For sizing assistance and trap survey services, contact our team.",
    infoNoteTh: "การเลือกแทรปขึ้นอยู่กับความดันไอน้ำ ปริมาณคอนเดนเสท และการใช้งาน สำหรับความช่วยเหลือในการเลือกขนาดและบริการสำรวจแทรป กรุณาติดต่อทีมงานของเรา",
  },
  "sight-glass": {
    name: "Sight Glasses",
    nameTh: "ไซท์กลาส",
    category: "Accessories & Instruments",
    categoryTh: "อุปกรณ์เสริมและเครื่องมือวัด",
    description: "Visual flow monitoring devices for pipelines and vessels.",
    descriptionTh: "อุปกรณ์ตรวจสอบการไหลด้วยสายตาสำหรับท่อและถัง",
    longDescription: "Tubular and bull's-eye sight glasses for visual flow monitoring. Carbon and stainless steel. Sizes from 1/2\" to 8\". Rated for high-pressure service.",
    longDescriptionTh: "ไซท์กลาสแบบท่อและแบบตาวัวสำหรับการตรวจสอบการไหลด้วยสายตา เหล็กกล้าคาร์บอนและสแตนเลส ขนาดตั้งแต่ 1/2\" ถึง 8\" รองรับการใช้งานความดันสูง",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    specifications: ["DIN 28120", "EN 13079"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Oil & Gas", "Petrochemical", "Water Treatment"],
    applicationsTh: ["โรงไฟฟ้า", "โรงกลั่น", "โรงงานเคมี", "น้ำมันและก๊าซ", "ปิโตรเคมี", "บำบัดน้ำ"],
    tableHeaders: ["Type", "Material", "Sizes", "Pressure Class", "Standard"],
    products: [
      { Type: "Tubular", Material: "Carbon Steel / Stainless Steel", Sizes: "1/2\" - 8\"", "Pressure Class": "150#, 300#", Standard: "DIN 28120" },
      { Type: "Bull's Eye", Material: "Carbon Steel / Stainless Steel", Sizes: "1/2\" - 4\"", "Pressure Class": "150#, 300#, 600#", Standard: "DIN 28120" },
    ],
    infoNote: "All sight glasses pressure tested before shipment. Glass material selected based on service temperature and pressure. For high-temperature applications, borosilicate glass is standard.",
    infoNoteTh: "ไซท์กลาสทั้งหมดผ่านการทดสอบความดันก่อนจัดส่ง วัสดุกระจกเลือกตามอุณหภูมิและความดันใช้งาน สำหรับการใช้งานอุณหภูมิสูง กระจกโบโรซิลิเกตเป็นมาตรฐาน",
  },
  "expansion-joint": {
    name: "Expansion Joints",
    nameTh: "ข้อต่อขยาย",
    category: "Accessories & Instruments",
    categoryTh: "อุปกรณ์เสริมและเครื่องมือวัด",
    description: "Flexible connectors for thermal expansion and vibration absorption.",
    descriptionTh: "ข้อต่อยืดหยุ่นสำหรับการขยายตัวเนื่องจากความร้อนและการดูดซับแรงสั่นสะเทือน",
    longDescription: "Metal bellows and rubber expansion joints for thermal movement and vibration absorption. Carbon and stainless steel. Sizes from 2\" to 48\".",
    longDescriptionTh: "ข้อต่อขยายแบบเบลโลว์โลหะและแบบยางสำหรับการเคลื่อนที่เนื่องจากความร้อนและการดูดซับแรงสั่นสะเทือน เหล็กกล้าคาร์บอนและสแตนเลส ขนาดตั้งแต่ 2\" ถึง 48\"",
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1200&q=80",
    specifications: ["EJMA Standards", "ASME B31.3"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Oil & Gas", "Petrochemical", "Water Treatment"],
    applicationsTh: ["โรงไฟฟ้า", "โรงกลั่น", "โรงงานเคมี", "น้ำมันและก๊าซ", "ปิโตรเคมี", "บำบัดน้ำ"],
    tableHeaders: ["Type", "Material", "Sizes", "Pressure Rating", "Standard"],
    products: [
      { Type: "Metal Bellows", Material: "SS304/316", Sizes: "2\" - 48\"", "Pressure Rating": "150#, 300#", Standard: "EJMA Standards" },
      { Type: "Rubber", Material: "EPDM / Neoprene", Sizes: "2\" - 48\"", "Pressure Rating": "150#, 300#", Standard: "EJMA Standards" },
      { Type: "Fabric", Material: "Fiberglass / Silicone", Sizes: "6\" - 72\"", "Pressure Rating": "Low pressure", Standard: "EJMA Standards" },
    ],
    infoNote: "Joint selection depends on movement type (axial, lateral, angular), temperature range, and pressure. For movement calculations and sizing, contact our team.",
    infoNoteTh: "การเลือกข้อต่อขึ้นอยู่กับประเภทการเคลื่อนที่ (แนวแกน แนวข้าง แนวมุม) ช่วงอุณหภูมิ และความดัน สำหรับการคำนวณการเคลื่อนที่และการเลือกขนาด กรุณาติดต่อทีมงานของเรา",
  },
  "electric-actuator": {
    name: "Electric Actuators",
    nameTh: "แอคชูเอเตอร์ไฟฟ้า",
    category: "Accessories & Instruments",
    categoryTh: "อุปกรณ์เสริมและเครื่องมือวัด",
    description: "Motor-driven actuators for automated valve control with precise positioning capability.",
    descriptionTh: "แอคชูเอเตอร์ขับเคลื่อนด้วยมอเตอร์สำหรับการควบคุมวาล์วอัตโนมัติพร้อมความสามารถในการวางตำแหน่งที่แม่นยำ",
    longDescription: "Electric actuators for automated valve control. Quarter-turn and multi-turn designs. Torque range from 50 to 100,000 Nm. Available with intelligent controls and diagnostics.",
    longDescriptionTh: "แอคชูเอเตอร์ไฟฟ้าสำหรับการควบคุมวาล์วอัตโนมัติ แบบหมุนหนึ่งในสี่รอบและแบบหมุนหลายรอบ ช่วงแรงบิดตั้งแต่ 50 ถึง 100,000 Nm มีระบบควบคุมอัจฉริยะและการวินิจฉัยให้เลือก",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80",
    specifications: ["IEC 60034", "IEC 61508", "ISO 5211", "ATEX/IECEx"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Oil & Gas", "Petrochemical", "Water Treatment"],
    applicationsTh: ["โรงไฟฟ้า", "โรงกลั่น", "โรงงานเคมี", "น้ำมันและก๊าซ", "ปิโตรเคมี", "บำบัดน้ำ"],
    tableHeaders: ["Type", "Operation", "Torque Range", "Standard"],
    products: [
      { Type: "Quarter-Turn", Operation: "On/Off", "Torque Range": "50 - 10,000 Nm", Standard: "IEC 60034" },
      { Type: "Quarter-Turn", Operation: "Modulating", "Torque Range": "50 - 10,000 Nm", Standard: "IEC 60034" },
      { Type: "Multi-Turn", Operation: "On/Off", "Torque Range": "10 - 100,000 Nm", Standard: "IEC 60034" },
      { Type: "Multi-Turn", Operation: "Modulating", "Torque Range": "10 - 100,000 Nm", Standard: "IEC 60034" },
      { Type: "Linear", Operation: "Modulating", "Torque Range": "1 - 100 kN", Standard: "IEC 60034" },
    ],
    infoNote: "Actuator selection based on valve torque requirements, control type, and environmental conditions. For sizing and selection assistance, contact our team.",
    infoNoteTh: "การเลือกแอคชูเอเตอร์ขึ้นอยู่กับความต้องการแรงบิดของวาล์ว ประเภทการควบคุม และสภาพแวดล้อม สำหรับความช่วยเหลือในการเลือกขนาดและการเลือก กรุณาติดต่อทีมงานของเรา",
  },
  "pneumatic-actuator": {
    name: "Pneumatic Actuators",
    nameTh: "แอคชูเอเตอร์นิวแมติก",
    category: "Accessories & Instruments",
    categoryTh: "อุปกรณ์เสริมและเครื่องมือวัด",
    description: "Air-operated actuators for fast, reliable valve automation in process systems.",
    descriptionTh: "แอคชูเอเตอร์ขับเคลื่อนด้วยลมสำหรับการทำงานอัตโนมัติของวาล์วที่รวดเร็วและเชื่อถือได้ในระบบกระบวนการ",
    longDescription: "Pneumatic actuators for fast valve automation. Scotch yoke and rack & pinion designs. Spring-return fail-safe options. Torque range from 10 to 500,000 Nm.",
    longDescriptionTh: "แอคชูเอเตอร์นิวแมติกสำหรับการทำงานอัตโนมัติของวาล์วที่รวดเร็ว แบบสก็อตช์โยคและแบบแร็คแอนด์พิเนียน มีตัวเลือกสปริงคืนตำแหน่งเพื่อความปลอดภัย ช่วงแรงบิดตั้งแต่ 10 ถึง 500,000 Nm",
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1200&q=80",
    specifications: ["ISO 5211", "NAMUR Standard", "VDI/VDE 3845", "ATEX Options"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Oil & Gas", "Petrochemical", "Water Treatment"],
    applicationsTh: ["โรงไฟฟ้า", "โรงกลั่น", "โรงงานเคมี", "น้ำมันและก๊าซ", "ปิโตรเคมี", "บำบัดน้ำ"],
    tableHeaders: ["Type", "Operation", "Torque Range", "Standard"],
    products: [
      { Type: "Scotch Yoke", Operation: "Double-Acting", "Torque Range": "50 - 500,000 Nm", Standard: "ISO 5211" },
      { Type: "Scotch Yoke", Operation: "Spring-Return", "Torque Range": "50 - 100,000 Nm", Standard: "ISO 5211" },
      { Type: "Rack & Pinion", Operation: "Double-Acting", "Torque Range": "10 - 20,000 Nm", Standard: "ISO 5211" },
      { Type: "Rack & Pinion", Operation: "Spring-Return", "Torque Range": "10 - 10,000 Nm", Standard: "ISO 5211" },
      { Type: "Diaphragm", Operation: "Spring-Return", "Torque Range": "1 - 50 kN", Standard: "IEC 60534" },
    ],
    infoNote: "Actuator selection based on valve torque, air supply pressure, and fail-safe requirements. For sizing and selection assistance, contact our team.",
    infoNoteTh: "การเลือกแอคชูเอเตอร์ขึ้นอยู่กับแรงบิดของวาล์ว ความดันลมจ่าย และความต้องการด้านความปลอดภัย สำหรับความช่วยเหลือในการเลือกขนาดและการเลือก กรุณาติดต่อทีมงานของเรา",
  },
  "positioner": {
    name: "Valve Positioners",
    nameTh: "โพซิชันเนอร์วาล์ว",
    category: "Accessories & Instruments",
    categoryTh: "อุปกรณ์เสริมและเครื่องมือวัด",
    description: "Valve positioners for accurate control valve positioning and feedback.",
    descriptionTh: "โพซิชันเนอร์วาล์วสำหรับการวางตำแหน่งวาล์วควบคุมที่แม่นยำและการตอบกลับ",
    longDescription: "Pneumatic, electro-pneumatic, and digital positioners for control valve automation. HART, Foundation Fieldbus, and PROFIBUS communication. SIL2/SIL3 capable.",
    longDescriptionTh: "โพซิชันเนอร์แบบนิวแมติก แบบอิเล็กโทร-นิวแมติก และแบบดิจิทัลสำหรับการทำงานอัตโนมัติของวาล์วควบคุม การสื่อสาร HART, Foundation Fieldbus และ PROFIBUS รองรับ SIL2/SIL3",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=80",
    specifications: ["IEC 60534-6", "NAMUR NE43", "SIL2/SIL3"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Oil & Gas", "Petrochemical", "Water Treatment"],
    applicationsTh: ["โรงไฟฟ้า", "โรงกลั่น", "โรงงานเคมี", "น้ำมันและก๊าซ", "ปิโตรเคมี", "บำบัดน้ำ"],
    tableHeaders: ["Type", "Signal", "Actuation", "Standard"],
    products: [
      { Type: "Pneumatic", Signal: "3-15 PSI", Actuation: "Single/Double Acting", Standard: "IEC 60534-6" },
      { Type: "Electro-Pneumatic", Signal: "4-20mA", Actuation: "Single/Double Acting", Standard: "IEC 60534-6" },
      { Type: "Digital Smart", Signal: "HART", Actuation: "Single/Double Acting", Standard: "IEC 60534-6" },
      { Type: "Digital Smart", Signal: "Foundation Fieldbus", Actuation: "Single/Double Acting", Standard: "IEC 60534-6" },
      { Type: "Digital Smart", Signal: "PROFIBUS PA", Actuation: "Single/Double Acting", Standard: "IEC 60534-6" },
    ],
    infoNote: "Positioner selection based on control requirements, communication protocol, and safety integrity level. For selection assistance, contact our team.",
    infoNoteTh: "การเลือกโพซิชันเนอร์ขึ้นอยู่กับความต้องการการควบคุม โปรโตคอลการสื่อสาร และระดับความปลอดภัย สำหรับความช่วยเหลือในการเลือก กรุณาติดต่อทีมงานของเรา",
  },
  "level-gauge": {
    name: "Level Gauges",
    nameTh: "เกจวัดระดับ",
    category: "Accessories & Instruments",
    categoryTh: "อุปกรณ์เสริมและเครื่องมือวัด",
    description: "Visual and electronic level indicators for tanks and vessels.",
    descriptionTh: "ตัวบ่งชี้ระดับแบบภาพและอิเล็กทรอนิกส์สำหรับถังและภาชนะ",
    longDescription: "Tubular glass, magnetic, and reflex level gauges for tanks and vessels. Visual and electronic indication. Lengths up to 6000mm. High pressure and temperature ratings.",
    longDescriptionTh: "เกจวัดระดับแบบกระจกท่อ แบบแม่เหล็ก และแบบรีเฟล็กซ์สำหรับถังและภาชนะ การแสดงผลแบบภาพและอิเล็กทรอนิกส์ ความยาวถึง 6000 มม. รองรับความดันและอุณหภูมิสูง",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    specifications: ["EN 12516", "ASME B16.34", "DIN 28120"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Oil & Gas", "Petrochemical", "Water Treatment"],
    applicationsTh: ["โรงไฟฟ้า", "โรงกลั่น", "โรงงานเคมี", "น้ำมันและก๊าซ", "ปิโตรเคมี", "บำบัดน้ำ"],
    tableHeaders: ["Type", "Indication", "Length Range", "Standard"],
    products: [
      { Type: "Tubular Glass", Indication: "Visual", "Length Range": "Up to 1500mm", Standard: "EN 12516" },
      { Type: "Reflex", Indication: "Visual", "Length Range": "Up to 3000mm", Standard: "EN 12516" },
      { Type: "Magnetic", Indication: "Visual", "Length Range": "Up to 6000mm", Standard: "EN 12516" },
      { Type: "Magnetic + Transmitter", Indication: "Visual + Electronic", "Length Range": "Up to 6000mm", Standard: "EN 12516" },
    ],
    infoNote: "Level gauge selection based on process conditions, visibility requirements, and transmitter needs. For selection assistance, contact our team.",
    infoNoteTh: "การเลือกเกจวัดระดับขึ้นอยู่กับสภาพกระบวนการ ความต้องการการมองเห็น และความต้องการทรานสมิตเตอร์ สำหรับความช่วยเหลือในการเลือก กรุณาติดต่อทีมงานของเรา",
  },
  "transmitter": {
    name: "Transmitters",
    nameTh: "ทรานสมิตเตอร์",
    category: "Accessories & Instruments",
    categoryTh: "อุปกรณ์เสริมและเครื่องมือวัด",
    description: "Pressure, temperature, and flow transmitters for process measurement.",
    descriptionTh: "ทรานสมิตเตอร์ความดัน อุณหภูมิ และการไหลสำหรับการวัดกระบวนการ",
    longDescription: "Pressure, differential pressure, temperature, and flow transmitters. 4-20mA, HART, and Fieldbus outputs. SIL2/SIL3 capable. High accuracy and stability.",
    longDescriptionTh: "ทรานสมิตเตอร์ความดัน ความดันแตกต่าง อุณหภูมิ และการไหล เอาต์พุต 4-20mA, HART และ Fieldbus รองรับ SIL2/SIL3 ความแม่นยำและความเสถียรสูง",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
    specifications: ["IEC 61298", "IEC 60529", "SIL2/SIL3"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Oil & Gas", "Petrochemical", "Water Treatment"],
    applicationsTh: ["โรงไฟฟ้า", "โรงกลั่น", "โรงงานเคมี", "น้ำมันและก๊าซ", "ปิโตรเคมี", "บำบัดน้ำ"],
    tableHeaders: ["Type", "Measurement", "Range", "Standard"],
    products: [
      { Type: "Pressure", Measurement: "Gauge/Absolute", Range: "0-100 mbar to 0-1000 bar", Standard: "IEC 61298" },
      { Type: "Differential Pressure", Measurement: "DP", Range: "0-10 mbar to 0-100 bar", Standard: "IEC 61298" },
      { Type: "Temperature", Measurement: "RTD/TC Input", Range: "-200°C to +850°C", Standard: "IEC 61298" },
      { Type: "Level", Measurement: "DP/Radar/Guided Wave", Range: "Various", Standard: "IEC 61298" },
      { Type: "Flow", Measurement: "DP/Vortex/Magnetic", Range: "Various", Standard: "IEC 61298" },
    ],
    infoNote: "Transmitter selection based on process variable, accuracy requirements, and communication protocol. For selection assistance, contact our team.",
    infoNoteTh: "การเลือกทรานสมิตเตอร์ขึ้นอยู่กับตัวแปรกระบวนการ ความต้องการความแม่นยำ และโปรโตคอลการสื่อสาร สำหรับความช่วยเหลือในการเลือก กรุณาติดต่อทีมงานของเรา",
  },
  "tube-fitting": {
    name: "Tube Fittings",
    nameTh: "ข้อต่อท่อ",
    category: "Accessories & Instruments",
    categoryTh: "อุปกรณ์เสริมและเครื่องมือวัด",
    description: "Compression and flare fittings for instrumentation tubing connections.",
    descriptionTh: "ข้อต่อแบบบีบอัดและแบบแฟลร์สำหรับการเชื่อมต่อท่อเครื่องมือวัด",
    longDescription: "Compression and flare fittings for instrumentation tubing. Twin ferrule and single ferrule designs. Stainless steel, brass, and alloy materials. Sizes from 1/8\" to 2\" OD.",
    longDescriptionTh: "ข้อต่อแบบบีบอัดและแบบแฟลร์สำหรับท่อเครื่องมือวัด แบบเฟอร์รูลคู่และเฟอร์รูลเดี่ยว วัสดุสแตนเลส ทองเหลือง และโลหะผสม ขนาดตั้งแต่ 1/8\" ถึง 2\" OD",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80",
    specifications: ["ISO 8434", "SAE J514", "DIN 2353", "ASME B16.11"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Oil & Gas", "Petrochemical", "Water Treatment"],
    applicationsTh: ["โรงไฟฟ้า", "โรงกลั่น", "โรงงานเคมี", "น้ำมันและก๊าซ", "ปิโตรเคมี", "บำบัดน้ำ"],
    tableHeaders: ["Type", "Design", "Sizes", "Standard"],
    products: [
      { Type: "Compression", Design: "Twin Ferrule", Sizes: "1/8\" - 2\" OD", Standard: "ISO 8434" },
      { Type: "Compression", Design: "Single Ferrule", Sizes: "1/8\" - 1\" OD", Standard: "ISO 8434" },
      { Type: "Flare", Design: "37° Flare (JIC)", Sizes: "1/8\" - 2\" OD", Standard: "SAE J514" },
      { Type: "Flare", Design: "45° Flare (SAE)", Sizes: "1/8\" - 1\" OD", Standard: "SAE J512" },
      { Type: "Bite Type", Design: "DIN 2353", Sizes: "4mm - 42mm OD", Standard: "DIN 2353" },
    ],
    infoNote: "Fitting selection based on tubing material, pressure rating, and connection type. For selection assistance, contact our team.",
    infoNoteTh: "การเลือกข้อต่อขึ้นอยู่กับวัสดุท่อ ระดับความดัน และประเภทการเชื่อมต่อ สำหรับความช่วยเหลือในการเลือก กรุณาติดต่อทีมงานของเรา",
  },
  "pressure-gauge": {
    name: "Pressure Gauges",
    nameTh: "เกจวัดความดัน",
    category: "Accessories & Instruments",
    categoryTh: "อุปกรณ์เสริมและเครื่องมือวัด",
    description: "Mechanical and digital pressure indicators for process monitoring.",
    descriptionTh: "ตัวบ่งชี้ความดันแบบกลไกและดิจิทัลสำหรับการตรวจสอบกระบวนการ",
    longDescription: "Bourdon tube, diaphragm, and digital pressure gauges. Dry and liquid-filled cases. Dial sizes from 63mm to 250mm. Accuracy classes 0.5 to 2.5.",
    longDescriptionTh: "เกจวัดความดันแบบท่อบูร์ดอง แบบไดอะแฟรม และแบบดิจิทัล ตัวเรือนแบบแห้งและแบบเติมของเหลว ขนาดหน้าปัดตั้งแต่ 63 มม. ถึง 250 มม. ระดับความแม่นยำ 0.5 ถึง 2.5",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=80",
    specifications: ["EN 837-1", "ASME B40.100"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Oil & Gas", "Petrochemical", "Water Treatment"],
    applicationsTh: ["โรงไฟฟ้า", "โรงกลั่น", "โรงงานเคมี", "น้ำมันและก๊าซ", "ปิโตรเคมี", "บำบัดน้ำ"],
    tableHeaders: ["Type", "Case", "Dial Size", "Standard"],
    products: [
      { Type: "Bourdon Tube", Case: "Dry", "Dial Size": "63-250mm", Standard: "EN 837-1" },
      { Type: "Bourdon Tube", Case: "Liquid Filled", "Dial Size": "63-160mm", Standard: "EN 837-1" },
      { Type: "Diaphragm", Case: "For Corrosive Media", "Dial Size": "100-160mm", Standard: "EN 837-3" },
      { Type: "Digital", Case: "Battery Powered", "Dial Size": "Various", Standard: "EN 837-1" },
      { Type: "Differential", Case: "Dual Bourdon", "Dial Size": "100-160mm", Standard: "EN 837-1" },
    ],
    infoNote: "Gauge selection based on pressure range, accuracy requirements, and process conditions. For selection assistance, contact our team.",
    infoNoteTh: "การเลือกเกจขึ้นอยู่กับช่วงความดัน ความต้องการความแม่นยำ และสภาพกระบวนการ สำหรับความช่วยเหลือในการเลือก กรุณาติดต่อทีมงานของเรา",
  },
  "temperature-gauge": {
    name: "Temperature Gauges",
    nameTh: "เกจวัดอุณหภูมิ",
    category: "Accessories & Instruments",
    categoryTh: "อุปกรณ์เสริมและเครื่องมือวัด",
    description: "Bimetallic and filled system temperature indicators for local display.",
    descriptionTh: "ตัวบ่งชี้อุณหภูมิแบบไบเมทัลลิกและแบบระบบเติมสำหรับการแสดงผลในพื้นที่",
    longDescription: "Bimetallic and gas-filled temperature gauges for local indication. Dial sizes from 63mm to 160mm. Various stem lengths. Thermowell compatible.",
    longDescriptionTh: "เกจวัดอุณหภูมิแบบไบเมทัลลิกและแบบเติมก๊าซสำหรับการแสดงผลในพื้นที่ ขนาดหน้าปัดตั้งแต่ 63 มม. ถึง 160 มม. ความยาวก้านหลากหลาย เข้ากันได้กับเทอร์โมเวลล์",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    specifications: ["EN 13190", "ASME B40.200"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Oil & Gas", "Petrochemical", "Water Treatment"],
    applicationsTh: ["โรงไฟฟ้า", "โรงกลั่น", "โรงงานเคมี", "น้ำมันและก๊าซ", "ปิโตรเคมี", "บำบัดน้ำ"],
    tableHeaders: ["Type", "Connection", "Dial Size", "Standard"],
    products: [
      { Type: "Bimetallic", Connection: "Back", "Dial Size": "63-160mm", Standard: "EN 13190" },
      { Type: "Bimetallic", Connection: "Bottom", "Dial Size": "63-160mm", Standard: "EN 13190" },
      { Type: "Gas Filled", Connection: "Capillary", "Dial Size": "100-160mm", Standard: "EN 13190" },
      { Type: "Vapor Filled", Connection: "Direct Mount", "Dial Size": "100-160mm", Standard: "EN 13190" },
      { Type: "Digital", Connection: "Various", "Dial Size": "Various", Standard: "EN 13190" },
    ],
    infoNote: "Gauge selection based on temperature range, stem length, and mounting requirements. For selection assistance, contact our team.",
    infoNoteTh: "การเลือกเกจขึ้นอยู่กับช่วงอุณหภูมิ ความยาวก้าน และความต้องการการติดตั้ง สำหรับความช่วยเหลือในการเลือก กรุณาติดต่อทีมงานของเรา",
  },
};

export default function AccessoryDetailPage() {
  const params = useParams();
  const slug = params?.slug as string | undefined;
  const accessory = slug ? accessoryData[slug] : undefined;
  const { t, language } = useLanguage();
  
  if (!accessory) {
    notFound();
  }

  const isThaiLanguage = language === "th";
  const displayName = isThaiLanguage ? accessory.nameTh : accessory.name;
  const displayDescription = isThaiLanguage ? accessory.longDescriptionTh : accessory.longDescription;
  const displayApplications = isThaiLanguage ? accessory.applicationsTh : accessory.applications;
  const displayInfoNote = isThaiLanguage ? accessory.infoNoteTh : accessory.infoNote;
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
            <Link href="/products/accessories-instruments" className="hover:text-white transition-colors">{isThaiLanguage ? "อุปกรณ์เสริมและเครื่องมือวัด" : "Accessories"}</Link>
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

      {/* Main Content - tightened spacing */}
      <section className="py-6 sm:py-8 md:py-14 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 min-w-0">
              {/* Hero Image - reduced height like fittings */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden mb-5 sm:mb-7 aspect-[5/2]">
                <Image
                  src={accessory.image}
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
                    <table className="w-full min-w-[600px]">
                      <thead>
                        <tr className="bg-navy-50">
                          {accessory.tableHeaders.map((header, index) => (
                            <th 
                              key={header} 
                              className={`px-3 py-2.5 sm:px-4 sm:py-3 text-left text-xs sm:text-sm font-semibold text-navy-900 whitespace-nowrap ${index === 0 ? 'rounded-l-lg' : ''} ${index === accessory.tableHeaders.length - 1 ? 'rounded-r-lg' : ''}`}
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {accessory.products.map((product, index) => (
                          <tr key={index} className="border-b border-gray-100">
                            {accessory.tableHeaders.map((header, colIndex) => (
                              <td 
                                key={header} 
                                className={`px-3 py-2.5 sm:px-4 sm:py-4 text-xs sm:text-sm ${colIndex === 0 ? 'text-navy-900 font-medium' : 'text-gray-600'}`}
                              >
                                {header === "Standard" ? (
                                  <span className="px-2 py-0.5 sm:py-1 bg-navy-50 text-navy-700 text-xs sm:text-sm rounded-md whitespace-nowrap">
                                    {product[header]}
                                  </span>
                                ) : (
                                  product[header]
                                )}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Info Note Box */}
              <div className="mb-5 sm:mb-7 p-3 sm:p-4 bg-blue-50 border border-blue-100 rounded-xl flex gap-2.5 sm:gap-3">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-blue-900 font-medium mb-0.5 sm:mb-1">{detail?.selectionGuide || "Selection Guide"}</p>
                  <p className="text-xs sm:text-sm text-blue-800">
                    {displayInfoNote}
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 accessories-sidebar">
              <div className="lg:sticky lg:top-28 space-y-4 sm:space-y-5">
                {/* Specifications */}
                <div className="card p-4 sm:p-5">
                  <h3 className="text-base sm:text-lg font-semibold text-navy-900 mb-3 sm:mb-4">{detail?.specifications || "Specifications"}</h3>
                  <div className="space-y-1.5 sm:space-y-2">
                    {accessory.specifications.map((spec, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent-500 rounded-full flex-shrink-0" />
                        <span className="text-sm sm:text-base text-gray-700">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applications */}
                <div className="card p-4 sm:p-5">
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
                <div className="card p-4 sm:p-5 bg-navy-900 border-navy-800">
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-1.5 sm:mb-2">{detail?.needThisProduct || "Need This Product?"}</h3>
                  <p className="text-navy-200 text-xs sm:text-sm mb-3 sm:mb-4">
                    {detail?.contactTeam || "Contact our team for pricing, availability, and technical specifications."}
                  </p>
                  <Link href="/contact" className="btn-primary w-full justify-center text-sm sm:text-base py-2.5 sm:py-3">
                    {detail?.requestQuote || "Request Quote"}
                  </Link>
                </div>

                {/* Downloads - single PDF only */}
                <div className="card p-4 sm:p-5">
                  <h3 className="text-base sm:text-lg font-semibold text-navy-900 mb-3 sm:mb-4">{detail?.downloads || "Downloads"}</h3>
                  <a href="#" className="flex items-center gap-2.5 sm:gap-3 text-gray-700 hover:text-navy-900 transition-colors text-sm sm:text-base py-1">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-accent-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    {detail?.accessoriesCatalog || "Accessories Catalog (PDF)"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products - tightened spacing, 3 items */}
      <section className="py-6 sm:py-8 md:py-14 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-xl sm:text-2xl font-semibold text-navy-900 mb-4 sm:mb-5">{detail?.otherAccessories || "Other Accessories"}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {Object.entries(accessoryData)
              .filter(([key]) => key !== slug)
              .slice(0, 3)
              .map(([key, a]) => (
                <Link key={key} href={`/products/accessories-instruments/${key}`} className="card group p-4 sm:p-5">
                  <div className="aspect-[16/10] relative rounded-lg overflow-hidden mb-3 sm:mb-4">
                    <Image
                      src={a.image}
                      alt={isThaiLanguage ? a.nameTh : a.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-xs text-accent-500 font-medium">{isThaiLanguage ? a.categoryTh : a.category}</span>
                  <h3 className="text-sm sm:text-base font-semibold text-navy-900 mb-1.5 sm:mb-2 line-clamp-1">{isThaiLanguage ? a.nameTh : a.name}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm line-clamp-2">{isThaiLanguage ? a.descriptionTh : a.description}</p>
                </Link>
              ))}
          </div>
          
          {/* Back to Accessories Link */}
          <div className="mt-4 sm:mt-6 text-center">
            <Link href="/products/accessories-instruments" className="inline-flex items-center text-sm sm:text-base text-navy-900 font-medium hover:text-accent-500 transition-colors py-2">
              <svg className="w-5 h-5 mr-2 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              {detail?.backToAccessories || (isThaiLanguage ? "กลับไปยังอุปกรณ์เสริมทั้งหมด" : "Back to All Accessories")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
