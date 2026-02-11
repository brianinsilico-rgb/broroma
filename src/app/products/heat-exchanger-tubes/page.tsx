"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const HERO_TUBES_IMAGE = "/products/heat-exchanger-tubes.png";

const seamlessSpecs = [
  { material: "Carbon Steel", grades: "A179, A192", od: "15.88mm - 76.2mm", wall: "BWG 12-20 (0.89mm - 2.77mm)", standard: "ASTM A179" },
  { material: "Stainless Steel", grades: "TP304, TP304L, TP316, TP316L, TP321", od: "15.88mm - 76.2mm", wall: "BWG 12-22 (0.71mm - 2.77mm)", standard: "ASTM A213, A249" },
  { material: "Alloy Steel", grades: "T5, T9, T11, T22, T91", od: "15.88mm - 76.2mm", wall: "BWG 12-18 (1.24mm - 2.77mm)", standard: "ASTM A213" },
  { material: "Duplex Steel", grades: "S31803 / 2205, S32750 / 2507", od: "15.88mm - 50.8mm", wall: "BWG 14-20 (0.89mm - 2.11mm)", standard: "ASTM A789" },
];

const weldedSpecs = [
  { material: "Carbon Steel", grades: "A214", od: "15.88mm - 76.2mm", wall: "BWG 14-20 (0.89mm - 2.11mm)", standard: "ASTM A214" },
  { material: "Stainless Steel", grades: "TP304, TP304L, TP316, TP316L", od: "15.88mm - 76.2mm", wall: "BWG 14-22 (0.71mm - 2.11mm)", standard: "ASTM A249" },
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
          <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-0.5">Wall Thickness (BWG/mm)</dt>
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
              <th className="text-left py-3 px-4 font-semibold text-navy-900">Wall Thickness (BWG/mm)</th>
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
  { name: "Power Generation", description: "Condenser and feedwater heater tubes" },
  { name: "Oil & Gas", description: "Shell and tube heat exchangers for refineries" },
  { name: "Petrochemical", description: "Process coolers and reboiler tubes" },
  { name: "HVAC", description: "Chiller tubes and cooling coils" },
  { name: "Marine", description: "Seawater coolers and desalination systems" },
];

export default function HeatExchangerTubesPage() {
  const { t } = useLanguage();
  const heatex = t.products?.heatExchangerTubes;

  return (
    <>
      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={HERO_TUBES_IMAGE} alt="" fill className="object-cover" sizes="100vw" priority />
          <div className="absolute inset-0 bg-navy-900/80" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-navy-300 mb-2 md:mb-4">
              <Link href="/" className="hover:text-white transition-colors">{t.nav?.home ?? "Home"}</Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/products" className="hover:text-white transition-colors">{t.nav?.products ?? "Products"}</Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">{heatex?.pageTitle ?? "Heat Exchanger Tubes"}</span>
            </nav>
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{heatex?.pageTitle ?? "Heat Exchanger Tubes"}</h1>
            <p className="text-base md:text-lg text-navy-200 leading-relaxed">
              {heatex?.pageDescription ?? "Precision tubes for efficient thermal transfer in heat exchanger systems."}
            </p>
          </div>
        </div>
      </section>

      {/* Seamless Heat Exchanger Tubes */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container-custom">
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl font-semibold text-navy-900 mb-2">
              Seamless Heat Exchanger Tubes
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-3xl">
              Seamless tubes offering superior strength and uniform wall thickness for demanding heat transfer applications.
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
                  <p>Expanded End</p>
                  <p>Swaged End</p>
                </div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h4 className="text-xs font-semibold text-navy-900 uppercase tracking-wide mb-2">Surface Finish</h4>
                <div className="space-y-1 text-sm text-gray-500">
                  <p>Bare</p>
                  <p>Pickled</p>
                  <p>Polished</p>
                  <p>Bright Annealed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welded Heat Exchanger Tubes */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="container-custom">
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl font-semibold text-navy-900 mb-2">
              Welded Heat Exchanger Tubes
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-3xl">
              Electric resistance welded tubes offering excellent quality and cost-effectiveness for heat exchanger applications.
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
                  <p>Expanded End</p>
                  <p>Swaged End</p>
                </div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h4 className="text-xs font-semibold text-navy-900 uppercase tracking-wide mb-2">Surface Finish</h4>
                <div className="space-y-1 text-sm text-gray-500">
                  <p>Bare</p>
                  <p>Pickled</p>
                  <p>Polished</p>
                  <p>Bright Annealed</p>
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
            {heatex?.applicationsTitle ?? "Applications"}
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
            {heatex?.downloads?.sectionTitle ?? "Product Catalogs"}
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-6 max-w-2xl">
            {heatex?.downloads?.sectionDescription ?? "Download our detailed product catalogs for specifications, dimensions, and technical data."}
          </p>
          <DownloadCard
            href={heatex?.downloads?.catalogPdf ?? "#"}
            title="Heat Exchanger Tubes Catalog"
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
              Need a Quote for Heat Exchanger Tubes?
            </h2>
            <p className="text-navy-200 text-sm mb-5">
              Tell us your grade, OD, and quantity — we&apos;ll respond within 24 hours.
            </p>
            <Link href="/quote" className="btn-primary text-sm inline-flex items-center gap-2">
              {heatex?.cta?.button ?? "Request a Quote"}
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
                  Need a Quote for Heat Exchanger Tubes?
                </h2>
                <p className="text-navy-200 text-lg mb-8 max-w-md">
                  Tell us your grade, OD, and quantity — we&apos;ll respond within 24 hours.
                </p>
                <Link href="/quote" className="btn-primary inline-flex items-center gap-2">
                  {heatex?.cta?.button ?? "Request a Quote"}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              {/* Image */}
              <div className="relative h-full min-h-[280px]">
                <Image
                  src="/products/heat-exchanger-tubes.png"
                  alt="Heat exchanger tubes"
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
