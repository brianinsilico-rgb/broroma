"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const seamlessSpecs = [
  { material: "Carbon Steel / Low Temp", grades: "A106B, API 5L, A53B, A333, S355J2H", sizes: "1/2\" - 48\"", standard: "ASTM A106, API 5L, ASTM A333" },
  { material: "Stainless Steel", grades: "TP304, TP304L, TP316, TP316L, TP347H, 310S", sizes: "1/4\" - 24\"", standard: "ASTM A312" },
  { material: "Alloy Steel", grades: "P5, P9, P11, P22, P91", sizes: "1/2\" - 24\"", standard: "ASTM A335" },
  { material: "Duplex Steel", grades: "S31803 / 2205, S32750 / 2507, S32205", sizes: "1/2\" - 24\"", standard: "ASTM A790" },
];

const weldedSpecs = [
  { material: "Carbon Steel / Low Temp", grades: "A106B, API 5L, A53B, A333, S355J2H", sizes: "1/2\" - 48\"", standard: "ASTM A106, API 5L, ASTM A333" },
  { material: "Stainless Steel", grades: "TP304, TP304L, TP316, TP316L, TP347H, 310S", sizes: "1/4\" - 24\"", standard: "ASTM A312" },
  { material: "Alloy Steel", grades: "P5, P9, P11, P22, P91", sizes: "1/2\" - 24\"", standard: "ASTM A335" },
  { material: "Duplex Steel", grades: "S31803 / 2205, S32750 / 2507, S32205", sizes: "1/2\" - 24\"", standard: "ASTM A790" },
];

type SpecRow = (typeof seamlessSpecs)[number];

function MaterialCardMobile({ row }: { row: SpecRow }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
      <h3 className="text-navy-900 font-semibold text-base mb-4 pb-3 border-b border-gray-100">
        {row.material}
      </h3>
      <dl className="space-y-3">
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-0.5">Grades</dt>
          <dd className="text-sm text-navy-800 leading-snug">{row.grades}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-0.5">Sizes</dt>
          <dd className="text-sm text-navy-800 leading-snug">{row.sizes}</dd>
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
      {/* Mobile: stacked cards — no horizontal scroll */}
      <div className="flex flex-col gap-4 md:hidden">
        {rows.map((row) => (
          <MaterialCardMobile key={row.material} row={row} />
        ))}
      </div>
      {/* Desktop: table */}
      <div className="hidden md:block overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
        <table className="w-full min-w-[600px] border-collapse text-sm md:text-base">
          <thead>
            <tr className="border-b-2 border-navy-200 bg-navy-50/50">
              <th className="text-left py-3 px-4 font-semibold text-navy-900">Material</th>
              <th className="text-left py-3 px-4 font-semibold text-navy-900">Grades</th>
              <th className="text-left py-3 px-4 font-semibold text-navy-900">Sizes</th>
              <th className="text-left py-3 px-4 font-semibold text-navy-900">Standard</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.material}
                className={i % 2 === 0 ? "bg-white" : "bg-gray-50/80"}
              >
                <td className="py-3 px-4 text-navy-800 font-medium">{row.material}</td>
                <td className="py-3 px-4 text-gray-700">{row.grades}</td>
                <td className="py-3 px-4 text-gray-700">{row.sizes}</td>
                <td className="py-3 px-4 text-gray-700">{row.standard}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

function PdfDownloadLink({
  href,
  label,
  className = "",
}: {
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 text-accent-600 hover:text-accent-700 font-medium text-sm transition-colors ${className}`}
    >
      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
      <span>{label}</span>
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    </a>
  );
}

function DownloadCard({
  href,
  title,
  format,
}: {
  href: string;
  title: string;
  format: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center justify-between p-4 md:p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-elevated hover:border-navy-200 transition-all duration-200 group"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center text-navy-700 group-hover:text-accent-600 transition-colors">
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

export default function PipesPage() {
  const { t } = useLanguage();
  const pipes = t.products?.pipes;
  const applications = pipes?.applications ?? ["Power Generation", "Oil & Gas", "Petrochemical", "Water Treatment", "Construction"];
  const downloads = pipes?.downloads;
  const cta = pipes?.cta;

  return (
    <>
      {/* Hero */}
      <section className="gradient-navy py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-navy-300 mb-2 md:mb-4">
              <Link href="/" className="hover:text-white transition-colors">{t.nav?.home ?? "Home"}</Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/products" className="hover:text-white transition-colors">{t.nav?.products ?? "Products"}</Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">{t.products.pipesPageTitle}</span>
            </nav>
            <h1 className="text-white mb-6">{t.products.pipesPageTitle}</h1>
            <p className="text-base md:text-lg text-navy-200 leading-relaxed">
              {t.products.pipesPageDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Seamless Pipes */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container-custom">
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl font-semibold text-navy-900 mb-2">
              {pipes?.seamlessTitle ?? "Seamless Pipes"}
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-3xl">
              {pipes?.seamlessDescription ?? "Hot-rolled and cold-drawn seamless pipes offering superior strength and pressure resistance without weld seams."}
            </p>
          </div>
          <SpecsTable rows={seamlessSpecs} />
          <div className="mt-5">
            <PdfDownloadLink
              href={downloads?.seamlessPdf ?? "#"}
              label={downloads?.seamlessCatalogLabel ?? "Download Seamless Pipes Catalog (PDF)"}
            />
          </div>
        </div>
      </section>

      {/* Welded Pipes (ERW) */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="container-custom">
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl font-semibold text-navy-900 mb-2">
              {pipes?.weldedTitle ?? "Welded Pipes (ERW)"}
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-3xl">
              {pipes?.weldedDescription ?? "Electric Resistance Welded pipes offering excellent quality and cost-effectiveness for various applications."}
            </p>
          </div>
          <SpecsTable rows={weldedSpecs} />
          <div className="mt-5">
            <PdfDownloadLink
              href={downloads?.weldedPdf ?? "#"}
              label={downloads?.weldedCatalogLabel ?? "Download Welded Pipes Catalog (PDF)"}
            />
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-xl md:text-2xl font-semibold text-navy-900 mb-6">
            {pipes?.applicationsTitle ?? "Applications"}
          </h2>
          <div className="flex flex-wrap gap-3">
            {Array.isArray(applications) ? applications.map((app: string) => (
              <span
                key={app}
                className="inline-flex items-center px-4 py-2 rounded-full bg-navy-50 text-navy-800 font-medium text-sm border border-navy-100"
              >
                {app}
              </span>
            )) : null}
          </div>
        </div>
      </section>

      {/* Product Catalogs / Downloads */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-xl md:text-2xl font-semibold text-navy-900 mb-2">
            {downloads?.title ?? "Product Catalogs"}
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-6 max-w-2xl">
            {downloads?.description ?? "Download our detailed product catalogs for specifications, dimensions, and technical data."}
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <DownloadCard
              href={downloads?.seamlessPdf ?? "#"}
              title={downloads?.seamlessCatalog ?? "Seamless Pipes Catalog"}
              format="PDF"
            />
            <DownloadCard
              href={downloads?.weldedPdf ?? "#"}
              title={downloads?.weldedCatalog ?? "Welded Pipes Catalog"}
              format="PDF"
            />
            <DownloadCard
              href={downloads?.fullPdf ?? "#"}
              title={downloads?.fullCatalog ?? "Full Pipes Catalog"}
              format="PDF"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-navy-900 to-navy-950 rounded-2xl p-6 md:p-10 text-center">
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-white mb-2">
              {cta?.title ?? "Need a Quote for Pipes?"}
            </h2>
            <p className="text-navy-200 text-sm md:text-base mb-5 max-w-xl mx-auto">
              {cta?.description ?? "Contact our team for pricing, availability, and custom specifications."}
            </p>
            <Link href="/quote" className="btn-primary text-sm inline-flex items-center gap-2">
              {cta?.button ?? "Request a Quote"}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
