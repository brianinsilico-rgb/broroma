"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const HERO_TUBES_IMAGE = "/products/boiler-tubes.png";

const seamlessSpecs = [
  { material: "Carbon Steel", grades: "A192, A210 Gr A1/C", od: "15.88mm - 114.3mm", wall: "2.0mm - 12.0mm", standard: "ASTM A192, A210" },
  { material: "Alloy Steel (Low)", grades: "T11, T12, T22", od: "19.05mm - 76.2mm", wall: "2.5mm - 10.0mm", standard: "ASTM A213" },
  { material: "Alloy Steel (High)", grades: "T91, T92", od: "19.05mm - 76.2mm", wall: "2.5mm - 10.0mm", standard: "ASTM A213" },
  { material: "Stainless Steel", grades: "TP304H, TP316H, TP321H, TP347H", od: "19.05mm - 76.2mm", wall: "2.0mm - 8.0mm", standard: "ASTM A213" },
];

const weldedSpecs = [
  { material: "Carbon Steel", grades: "A178 Gr A/C, A214", od: "15.88mm - 76.2mm", wall: "1.5mm - 6.0mm", standard: "ASTM A178, A214" },
];

type SpecRow = (typeof seamlessSpecs)[number];

function MaterialCardMobile({ row }: { row: SpecRow }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
      <h3 className="text-navy-900 font-semibold text-base mb-4 pb-3 border-b border-gray-100">{row.material}</h3>
      <dl className="space-y-3">
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-0.5">Grades</dt>
          <dd className="text-sm text-navy-800 leading-snug">{row.grades}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-0.5">OD Range</dt>
          <dd className="text-sm text-navy-800 leading-snug">{row.od}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-0.5">Wall Thickness (mm)</dt>
          <dd className="text-sm text-navy-800 leading-snug">{row.wall}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-0.5">Standard</dt>
          <dd className="text-sm text-navy-800 leading-snug">{row.standard}</dd>
        </div>
      </dl>
    </div>
  );
}

function SpecsTable({ rows }: { rows: typeof seamlessSpecs }) {
  return (
    <>
      <div className="flex flex-col gap-4 md:hidden">
        {rows.map((row) => (
          <MaterialCardMobile key={row.material} row={row} />
        ))}
      </div>
      <div className="hidden md:block overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
        <table className="w-full min-w-[700px] border-collapse text-sm md:text-base">
          <thead>
            <tr className="border-b-2 border-navy-200 bg-navy-50/50">
              <th className="text-left py-3 px-4 font-semibold text-navy-900">Material</th>
              <th className="text-left py-3 px-4 font-semibold text-navy-900">Grades</th>
              <th className="text-left py-3 px-4 font-semibold text-navy-900">OD Range</th>
              <th className="text-left py-3 px-4 font-semibold text-navy-900">Wall Thickness (mm)</th>
              <th className="text-left py-3 px-4 font-semibold text-navy-900">Standard</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.material} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/80"}>
                <td className="py-3 px-4 text-navy-800 font-medium">{row.material}</td>
                <td className="py-3 px-4 text-gray-700">{row.grades}</td>
                <td className="py-3 px-4 text-gray-700">{row.od}</td>
                <td className="py-3 px-4 text-gray-700">{row.wall}</td>
                <td className="py-3 px-4 text-gray-700">{row.standard}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

function DownloadCard({ href, title, format }: { href: string; title: string; format: string }) {
  return (
    <a href={href} className="flex items-center justify-between p-4 md:p-5 bg-white rounded-xl border border-accent-200 shadow-sm hover:shadow-elevated hover:border-accent-400 transition-all duration-200 group">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-accent-500 flex items-center justify-center text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <span className="font-medium text-navy-900 block">{title}</span>
          <span className="text-sm text-gray-500">{format}</span>
        </div>
      </div>
      <svg className="w-5 h-5 text-gray-400 group-hover:text-accent-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    </a>
  );
}

const APPLICATIONS = [
  { name: "Power Generation", description: "High-pressure boiler systems and superheaters" },
  { name: "Steam Systems", description: "Steam drums, headers, and distribution lines" },
  { name: "Refineries", description: "Process heaters and fired equipment" },
  { name: "Chemical Plants", description: "Heat recovery steam generators (HRSG)" },
  { name: "Pulp & Paper", description: "Recovery boilers and bark boilers" },
];

export default function BoilerTubesPage() {
  const { t } = useLanguage();
  const boiler = t.products?.boilerTubes;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-11 pb-14 md:pt-14 md:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={HERO_TUBES_IMAGE} alt="" fill className="object-cover" sizes="100vw" priority />
          <div className="absolute inset-0 bg-navy-900/80" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-navy-300 mb-2">
              <Link href="/" className="hover:text-white transition-colors">{t.nav?.home ?? "Home"}</Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/products" className="hover:text-white transition-colors">{t.nav?.products ?? "Products"}</Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">{boiler?.pageTitle ?? "Boiler Tubes"}</span>
            </nav>
            <h1 className="text-white text-4xl md:text-5xl font-bold mt-3 mb-4">{boiler?.pageTitle ?? "Boiler Tubes"}</h1>
            <p className="text-base md:text-lg text-navy-200 leading-relaxed">
              {boiler?.pageDescription ?? "Heat-resistant tubes for high-temperature boiler and steam generation applications."}
            </p>
          </div>
        </div>
      </section>

      {/* Seamless Boiler Tubes */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container-custom">
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl font-semibold text-navy-900 mb-2">
              Seamless Boiler Tubes
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-3xl">
              Seamless tubes designed for high-pressure and high-temperature boiler applications with superior creep resistance.
            </p>
          </div>
          <SpecsTable rows={seamlessSpecs} />
          {/* Additional Options */}
          <div className="mt-6 pt-6 border-t border-gray-200 px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-5 md:gap-6">
              <div>
                <h4 className="text-xs font-semibold text-navy-900 uppercase tracking-wide mb-2">Available Lengths</h4>
                <div className="space-y-1 text-sm text-gray-500">
                  <p>3m</p>
                  <p>6m</p>
                  <p>9m</p>
                  <p>12m</p>
                  <p>Custom Cut</p>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-navy-900 uppercase tracking-wide mb-2">End Finish</h4>
                <div className="space-y-1 text-sm text-gray-500">
                  <p>Plain End</p>
                  <p>Swaged End</p>
                  <p>Upset End</p>
                </div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h4 className="text-xs font-semibold text-navy-900 uppercase tracking-wide mb-2">Surface Finish</h4>
                <div className="space-y-1 text-sm text-gray-500">
                  <p>Bare</p>
                  <p>Black Painted</p>
                  <p>Pickled</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welded Boiler Tubes */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="container-custom">
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl font-semibold text-navy-900 mb-2">
              Welded Boiler Tubes
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-3xl">
              Electric resistance welded tubes for economizer and low-pressure boiler applications.
            </p>
          </div>
          <SpecsTable rows={weldedSpecs} />
          {/* Additional Options */}
          <div className="mt-6 pt-6 border-t border-gray-200 px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-5 md:gap-6">
              <div>
                <h4 className="text-xs font-semibold text-navy-900 uppercase tracking-wide mb-2">Available Lengths</h4>
                <div className="space-y-1 text-sm text-gray-500">
                  <p>3m</p>
                  <p>6m</p>
                  <p>9m</p>
                  <p>12m</p>
                  <p>Custom Cut</p>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-navy-900 uppercase tracking-wide mb-2">End Finish</h4>
                <div className="space-y-1 text-sm text-gray-500">
                  <p>Plain End</p>
                  <p>Swaged End</p>
                  <p>Upset End</p>
                </div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h4 className="text-xs font-semibold text-navy-900 uppercase tracking-wide mb-2">Surface Finish</h4>
                <div className="space-y-1 text-sm text-gray-500">
                  <p>Bare</p>
                  <p>Black Painted</p>
                  <p>Pickled</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-xl md:text-2xl font-semibold text-navy-900 mb-6">
            {boiler?.applicationsTitle ?? "Applications"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {APPLICATIONS.map((app) => (
              <div
                key={app.name}
                className="bg-gray-50 rounded-lg p-4 border border-gray-100"
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent-500/10 flex items-center justify-center text-accent-500 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 text-sm mb-1">{app.name}</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">{app.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Catalogs / Downloads */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-xl md:text-2xl font-semibold text-navy-900 mb-2">
            {boiler?.downloads?.sectionTitle ?? "Product Catalogs"}
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-6 max-w-2xl">
            {boiler?.downloads?.sectionDescription ?? "Download our detailed product catalogs for specifications, dimensions, and technical data."}
          </p>
          <DownloadCard
            href={boiler?.downloads?.catalogPdf ?? "#"}
            title="Boiler Tubes Catalog"
            format="PDF"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="container-custom">
          {/* Mobile: simple card without image */}
          <div className="md:hidden bg-gradient-to-br from-navy-900 to-navy-950 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-semibold text-white mb-2">
              Need a Quote for Boiler Tubes?
            </h2>
            <p className="text-navy-200 text-sm mb-5">
              Tell us your grade, OD, and quantity — we&apos;ll respond within 24 hours.
            </p>
            <Link href="/quote" className="btn-primary text-sm inline-flex items-center gap-2">
              {boiler?.cta?.button ?? "Request a Quote"}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          {/* Desktop: card with image */}
          <div className="hidden md:block bg-gradient-to-br from-navy-900 to-navy-950 rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 items-center">
              {/* Content */}
              <div className="p-10 text-left">
                <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4">
                  Need a Quote for Boiler Tubes?
                </h2>
                <p className="text-navy-200 text-lg mb-8 max-w-md">
                  Tell us your grade, OD, and quantity — we&apos;ll respond within 24 hours.
                </p>
                <Link href="/quote" className="btn-primary inline-flex items-center gap-2">
                  {boiler?.cta?.button ?? "Request a Quote"}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              {/* Image */}
              <div className="relative h-full min-h-[280px]">
                <Image
                  src="/products/boiler-tubes.png"
                  alt="Boiler tubes"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy-900/40 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
