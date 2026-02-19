import type { Metadata } from "next";
import Link from "next/link";
import PipeCalculator from "@/components/PipeCalculator";

export const metadata: Metadata = {
  title: "Steel Pipe Weight & Pressure Calculator | BROROMA",
  description:
    "Calculate steel pipe weight per meter and maximum working pressure by outside diameter, wall thickness, and API 5L grade. Instant results using Barlow's formula. Supports Grade B through X80.",
  keywords: [
    "pipe weight calculator",
    "steel pipe weight per meter",
    "pipe pressure calculator",
    "barlow formula calculator",
    "API 5L pipe calculator",
    "pipe weight chart",
    "pipe schedule calculator",
  ],
  openGraph: {
    title: "Steel Pipe Weight & Pressure Calculator",
    description:
      "Free online calculator for steel pipe weight and burst pressure. Select OD, wall thickness, and grade for instant results.",
    type: "website",
    url: "https://www.broroma.com/tools/pipe-weight-calculator",
  },
  alternates: {
    canonical: "https://www.broroma.com/tools/pipe-weight-calculator",
  },
};

const jsonLdWebApp = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Steel Pipe Weight & Pressure Calculator",
  description:
    "Calculate steel pipe weight per meter and maximum working pressure based on outside diameter, wall thickness, and API 5L grade.",
  url: "https://www.broroma.com/tools/pipe-weight-calculator",
  applicationCategory: "Engineering Tool",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  provider: {
    "@type": "Organization",
    name: "BROROMA Co., Ltd.",
    url: "https://www.broroma.com",
  },
};

const faqEntries = [
  {
    question: "How do you calculate steel pipe weight per meter?",
    answer:
      "Steel pipe weight per meter is calculated using the formula: W = (OD − WT) × WT × 0.02466, where OD is the outside diameter in mm, WT is the wall thickness in mm, and the result is in kg/m. This is the standard formula per ASTM specifications for carbon and alloy steel pipe.",
  },
  {
    question: "What is Barlow's formula for pipe pressure?",
    answer:
      "Barlow's formula calculates maximum working pressure as P = (2 × S × WT × F) / OD, where S is the specified minimum yield strength (SMYS) of the pipe material, WT is wall thickness, F is the design factor (typically 0.72 per ASME B31.8), and OD is outside diameter. The result is in the same pressure unit as the yield strength input.",
  },
  {
    question: "What is the SMYS for API 5L Grade B pipe?",
    answer:
      "The Specified Minimum Yield Strength (SMYS) for API 5L Grade B pipe is 241 MPa (35,000 psi). This is the baseline grade in the API 5L specification for line pipe used in oil, gas, and water pipelines.",
  },
  {
    question:
      "What is the difference between pipe schedule and wall thickness?",
    answer:
      "Pipe schedule (e.g., SCH 40, SCH 80) is a standardized designation that maps to a specific wall thickness for each pipe diameter. For example, a 6-inch pipe in SCH 40 has a wall thickness of 7.11mm, while the same diameter in SCH 80 has 10.97mm. The schedule system was created by ASME to simplify specifying pipe dimensions across different sizes.",
  },
];

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqEntries.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const gradeTable = [
  { grade: "Grade B", mpa: 241, psi: "35,000", use: "General pipelines, low-pressure service" },
  { grade: "X42", mpa: 290, psi: "42,100", use: "Distribution pipelines" },
  { grade: "X46", mpa: 317, psi: "46,000", use: "Distribution and transmission" },
  { grade: "X52", mpa: 359, psi: "52,200", use: "Transmission pipelines" },
  { grade: "X56", mpa: 386, psi: "56,600", use: "Medium-pressure transmission" },
  { grade: "X60", mpa: 414, psi: "60,200", use: "High-pressure transmission" },
  { grade: "X65", mpa: 448, psi: "65,300", use: "Long-distance transmission" },
  { grade: "X70", mpa: 483, psi: "70,300", use: "High-pressure, long-distance" },
  { grade: "X80", mpa: 552, psi: "80,000", use: "Ultra high-pressure transmission" },
];

const scheduleTable = [
  { size: '2"', od: 60.3, sch40: 3.91, sch80: 5.54, sch160: 8.74 },
  { size: '3"', od: 88.9, sch40: 5.49, sch80: 7.62, sch160: 11.13 },
  { size: '4"', od: 114.3, sch40: 6.02, sch80: 8.56, sch160: 13.49 },
  { size: '6"', od: 168.3, sch40: 7.11, sch80: 10.97, sch160: 18.26 },
  { size: '8"', od: 219.1, sch40: 8.18, sch80: 12.7, sch160: 23.01 },
  { size: '10"', od: 273.1, sch40: 9.27, sch80: 15.09, sch160: 28.58 },
  { size: '12"', od: 323.9, sch40: 9.52, sch80: 17.48, sch160: null },
  { size: '14"', od: 355.6, sch40: 9.52, sch80: null, sch160: null },
  { size: '16"', od: 406.4, sch40: 9.52, sch80: null, sch160: null },
];

export default function PipeWeightCalculatorPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebApp) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* Hero */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-6 md:pb-8">
          <h1 className="text-2xl md:text-4xl font-semibold text-navy-900 mb-3">
            Steel Pipe Weight &amp; Pressure Calculator
          </h1>
          <p className="text-gray-600 text-sm md:text-lg max-w-3xl leading-relaxed">
            Calculate weight per meter, weight per length, and maximum working
            pressure for carbon steel pipe. Supports API 5L grades from Grade B
            to X80.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <PipeCalculator />

      {/* SEO Content */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose-content">
          {/* How to Calculate Pipe Weight */}
          <h2 className="text-xl md:text-2xl font-semibold text-navy-900 mb-4">
            How to Calculate Pipe Weight
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
            The standard formula for carbon and alloy steel pipe weight per
            meter is <strong>W = (OD − WT) × WT × 0.02466</strong>, where OD
            is the outside diameter in millimeters and WT is the wall thickness
            in millimeters. The constant 0.02466 derives from the density of
            carbon steel (7.85&nbsp;g/cm³) and the geometry of a hollow
            cylinder.
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
            For example, a 168.3&nbsp;mm OD pipe with 7.11&nbsp;mm wall
            thickness weighs (168.3&nbsp;−&nbsp;7.11)&nbsp;×&nbsp;7.11&nbsp;×
            &nbsp;0.02466&nbsp;=&nbsp;28.26&nbsp;kg/m. To get the weight of a
            standard 6-meter length, multiply by 6 to get 169.6&nbsp;kg.
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
            Note that different alloys use slightly different constants. For
            304 stainless steel (density 7.93&nbsp;g/cm³) the constant is
            0.02491, and for 316 stainless steel (density 8.00&nbsp;g/cm³) it
            is 0.02507. The formula above applies specifically to carbon steel
            per ASTM A106, A53, and API 5L specifications.
          </p>

          {/* Barlow's Formula */}
          <h2 className="text-xl md:text-2xl font-semibold text-navy-900 mb-4">
            Barlow&apos;s Formula for Maximum Working Pressure
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
            Barlow&apos;s formula calculates the maximum internal pressure a
            pipe can withstand:{" "}
            <strong>P&nbsp;=&nbsp;(2&nbsp;×&nbsp;S&nbsp;×&nbsp;WT&nbsp;×&nbsp;F)&nbsp;/&nbsp;OD</strong>,
            where S is the Specified Minimum Yield Strength (SMYS) of the pipe
            material in MPa, WT is wall thickness in mm, F is the design
            factor, and OD is outside diameter in mm. The result is in MPa.
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
            The design factor varies by application: 0.72 for general
            transmission pipelines (ASME B31.8 Class 1, Div 2), 0.60 for
            pipelines at road and railroad crossings, and 0.50 for lines in
            high-density population areas. This calculator uses 0.72 as the
            default, which is standard for most onshore pipeline engineering.
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
            Keep in mind that Barlow&apos;s formula gives a theoretical maximum.
            Actual pressure ratings depend on manufacturing tolerances, weld
            quality, operating temperature, corrosion allowance, and the
            specific code governing the project. Always verify calculations
            against project engineering specifications.
          </p>

          {/* API 5L Grade Reference */}
          <h2 className="text-xl md:text-2xl font-semibold text-navy-900 mb-4">
            API 5L Grade Reference
          </h2>
          <div className="overflow-x-auto mb-8 rounded-lg border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="px-4 py-3 font-semibold text-gray-700">Grade</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">SMYS (MPa)</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">SMYS (psi)</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">Typical Use</th>
                </tr>
              </thead>
              <tbody>
                {gradeTable.map((row) => (
                  <tr key={row.grade} className="border-t border-gray-100">
                    <td className="px-4 py-2.5 font-medium text-navy-800">{row.grade}</td>
                    <td className="px-4 py-2.5 text-gray-600">{row.mpa}</td>
                    <td className="px-4 py-2.5 text-gray-600">{row.psi}</td>
                    <td className="px-4 py-2.5 text-gray-600">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Common Pipe Schedule Reference */}
          <h2 className="text-xl md:text-2xl font-semibold text-navy-900 mb-4">
            Common Pipe Schedule Quick Reference
          </h2>
          <div className="overflow-x-auto mb-8 rounded-lg border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="px-4 py-3 font-semibold text-gray-700">Pipe Size</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">OD (mm)</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">SCH 40 WT</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">SCH 80 WT</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">SCH 160 WT</th>
                </tr>
              </thead>
              <tbody>
                {scheduleTable.map((row) => (
                  <tr key={row.size} className="border-t border-gray-100">
                    <td className="px-4 py-2.5 font-medium text-navy-800">{row.size}</td>
                    <td className="px-4 py-2.5 text-gray-600">{row.od}</td>
                    <td className="px-4 py-2.5 text-gray-600">{row.sch40} mm</td>
                    <td className="px-4 py-2.5 text-gray-600">
                      {row.sch80 !== null ? `${row.sch80} mm` : "—"}
                    </td>
                    <td className="px-4 py-2.5 text-gray-600">
                      {row.sch160 !== null ? `${row.sch160} mm` : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* FAQ */}
          <h2 className="text-xl md:text-2xl font-semibold text-navy-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 mb-12">
            {faqEntries.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-base md:text-lg font-semibold text-navy-800 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 md:p-8 text-center">
            <h2 className="text-lg md:text-xl font-semibold text-navy-900 mb-2">
              Need pipe in these specifications?
            </h2>
            <p className="text-gray-600 text-sm md:text-base mb-5">
              Contact our team for pricing, lead times, and stock availability
              across all grades and schedules.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-2.5 bg-accent-500 text-white text-sm font-medium rounded-lg hover:bg-accent-600 transition-colors"
              >
                Request a Quote
              </Link>
              <Link
                href="/products/pipes"
                className="inline-flex items-center justify-center px-6 py-2.5 border border-gray-300 text-navy-800 text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors"
              >
                View Size Availability Matrix
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
