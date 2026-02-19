"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useCallback } from "react";
import { useLanguage } from "@/context/LanguageContext";
import SizeAvailabilityMatrix from "@/components/SizeAvailabilityMatrix";
import PipeCalculator, { PipeCalculatorValues } from "@/components/PipeCalculator";

const seamlessSpecs = [
  { material: "Carbon Steel / Low Temp", grades: "A106B, API 5L, A53B, A333, S355J2H", sizes: "1/2\" - 48\"", schedule: "SCH 40, 80, 160, XXS", standard: "ASTM A106, API 5L, ASTM A333" },
  { material: "Stainless Steel", grades: "TP304, TP304L, TP316, TP316L, TP347H, 310S", sizes: "1/4\" - 24\"", schedule: "SCH 10S, 40S, 80S", standard: "ASTM A312" },
  { material: "Alloy Steel", grades: "P5, P9, P11, P22, P91", sizes: "1/2\" - 24\"", schedule: "SCH 40, 80, 160, XXS", standard: "ASTM A335" },
  { material: "Duplex Steel", grades: "S31803 / 2205, S32750 / 2507, S32205", sizes: "1/2\" - 24\"", schedule: "SCH 10S, 40S, 80S", standard: "ASTM A790" },
];

const weldedSpecs = [
  { material: "Carbon Steel / Low Temp", grades: "A106B, API 5L, A53B, A333, S355J2H", sizes: "1/2\" - 48\"", schedule: "SCH 20, 30, 40, STD", standard: "ASTM A106, API 5L, ASTM A333" },
  { material: "Stainless Steel", grades: "TP304, TP304L, TP316, TP316L, TP347H, 310S", sizes: "1/4\" - 24\"", schedule: "SCH 10S, 40S", standard: "ASTM A312" },
  { material: "Alloy Steel", grades: "P5, P9, P11, P22, P91", sizes: "1/2\" - 24\"", schedule: "SCH 40, 80", standard: "ASTM A335" },
  { material: "Duplex Steel", grades: "S31803 / 2205, S32750 / 2507, S32205", sizes: "1/2\" - 24\"", schedule: "SCH 10S, 40S", standard: "ASTM A790" },
];

type SpecRow = (typeof seamlessSpecs)[number];

function MaterialCardMobile({ row, labels }: { row: SpecRow; labels: { grades: string; sizes: string; schedule: string; standard: string } }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
      <h3 className="text-navy-900 font-semibold text-base mb-4 pb-3 border-b border-gray-100">
        {row.material}
      </h3>
      <dl className="space-y-3">
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-0.5">{labels.grades}</dt>
          <dd className="text-sm text-navy-800 leading-snug">{row.grades}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-0.5">{labels.sizes}</dt>
          <dd className="text-sm text-navy-800 leading-snug">{row.sizes}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-0.5">{labels.schedule}</dt>
          <dd className="text-sm text-navy-800 leading-snug">{row.schedule}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-0.5">{labels.standard}</dt>
          <dd className="text-sm text-navy-800 leading-snug">{row.standard}</dd>
        </div>
      </dl>
    </div>
  );
}

function SpecsTable({ rows, labels }: { rows: typeof seamlessSpecs; labels: { material: string; grades: string; sizes: string; schedule: string; standard: string } }) {
  return (
    <>
      {/* Mobile: stacked cards — no horizontal scroll */}
      <div className="flex flex-col gap-4 md:hidden">
        {rows.map((row) => (
          <MaterialCardMobile key={row.material} row={row} labels={labels} />
        ))}
      </div>
      {/* Desktop: table */}
      <div className="hidden md:block overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
        <table className="w-full min-w-[700px] border-collapse text-sm md:text-base">
          <thead>
            <tr className="border-b-2 border-navy-200 bg-navy-50/50">
              <th className="text-left py-3 px-4 font-semibold text-navy-900">{labels.material}</th>
              <th className="text-left py-3 px-4 font-semibold text-navy-900">{labels.grades}</th>
              <th className="text-left py-3 px-4 font-semibold text-navy-900">{labels.sizes}</th>
              <th className="text-left py-3 px-4 font-semibold text-navy-900">{labels.schedule}</th>
              <th className="text-left py-3 px-4 font-semibold text-navy-900">{labels.standard}</th>
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
                <td className="py-3 px-4 text-gray-700">{row.schedule}</td>
                <td className="py-3 px-4 text-gray-700">{row.standard}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
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
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between p-4 md:p-5 bg-white rounded-xl border border-accent-200 shadow-sm hover:shadow-elevated hover:border-accent-400 transition-all duration-200 group"
    >
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

export default function PipesPage() {
  const { t } = useLanguage();
  const [calcValues, setCalcValues] = useState<PipeCalculatorValues | null>(null);

  const handleMatrixCellClick = useCallback((od: number, wt: number, grade: string | null) => {
    if (window.innerWidth < 768) return;
    setCalcValues({ od, wt, grade });
    document.getElementById("pipe-calculator")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const pipes = t.products?.pipes;
  const downloads = pipes?.downloads;
  const cta = pipes?.cta;
  const common = t.products?.common;
  const tableLabels = {
    material: common?.table?.material || "Material",
    grades: common?.table?.grades || "Grades",
    sizes: common?.table?.sizes || "Sizes",
    schedule: common?.table?.schedule || "Schedule / Wall Thickness",
    standard: common?.table?.standard || "Standard",
  };
  const options = common?.options;
  const apps = common?.applications;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-11 pb-14 md:pt-14 md:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/products/pipes.png" alt="" fill className="object-cover" sizes="100vw" priority />
          <div className="absolute inset-0 bg-navy-900/80" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-navy-300 mb-2">
              <Link href="/" className="hover:text-white transition-colors">{t.nav?.home ?? "Home"}</Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/products" className="hover:text-white transition-colors">{t.nav?.products ?? "Products"}</Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">{t.products.pipesPageTitle}</span>
            </nav>
            <h1 className="text-white text-4xl md:text-5xl font-bold mt-3 mb-4">{t.products.pipesPageTitle}</h1>
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
          <SpecsTable rows={seamlessSpecs} labels={tableLabels} />
          {/* Additional Options */}
          <div className="mt-6 pt-6 border-t border-gray-200 px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-5 md:gap-6">
              <div>
                <h4 className="text-xs font-semibold text-navy-900 uppercase tracking-wide mb-2">{options?.availableLengths || "Available Lengths"}</h4>
                <div className="space-y-1 text-sm text-gray-500">
                  <p>{options?.lengths?.["6m"] || "6m"}</p>
                  <p>{options?.lengths?.["12m"] || "12m"}</p>
                  <p>{options?.lengths?.randomLength || "Random Length"}</p>
                  <p>{options?.lengths?.cutToLength || "Cut-to-Length available"}</p>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-navy-900 uppercase tracking-wide mb-2">{options?.endFinish || "End Finish"}</h4>
                <div className="space-y-1 text-sm text-gray-500">
                  <p>{options?.ends?.plainEnd || "Plain End"}</p>
                  <p>{options?.ends?.beveledEnd || "Beveled End"}</p>
                  <p>{options?.ends?.threaded || "Threaded"}</p>
                </div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h4 className="text-xs font-semibold text-navy-900 uppercase tracking-wide mb-2">{options?.coatingOptions || "Coating Options"}</h4>
                <div className="space-y-1 text-sm text-gray-500">
                  <p>{options?.coatings?.bare || "Bare"}</p>
                  <p>{options?.coatings?.blackPainted || "Black Painted"}</p>
                  <p>{options?.coatings?.galvanized || "Galvanized"}</p>
                  <p>{options?.coatings?.epoxyCoated || "Epoxy Coated"}</p>
                </div>
              </div>
            </div>
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
          <SpecsTable rows={weldedSpecs} labels={tableLabels} />
          {/* Additional Options */}
          <div className="mt-6 pt-6 border-t border-gray-200 px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-5 md:gap-6">
              <div>
                <h4 className="text-xs font-semibold text-navy-900 uppercase tracking-wide mb-2">{options?.availableLengths || "Available Lengths"}</h4>
                <div className="space-y-1 text-sm text-gray-500">
                  <p>{options?.lengths?.["6m"] || "6m"}</p>
                  <p>{options?.lengths?.["12m"] || "12m"}</p>
                  <p>{options?.lengths?.randomLength || "Random Length"}</p>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-navy-900 uppercase tracking-wide mb-2">{options?.endFinish || "End Finish"}</h4>
                <div className="space-y-1 text-sm text-gray-500">
                  <p>{options?.ends?.plainEnd || "Plain End"}</p>
                  <p>{options?.ends?.beveledEnd || "Beveled End"}</p>
                </div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h4 className="text-xs font-semibold text-navy-900 uppercase tracking-wide mb-2">{options?.coatingOptions || "Coating Options"}</h4>
                <div className="space-y-1 text-sm text-gray-500">
                  <p>{options?.coatings?.bare || "Bare"}</p>
                  <p>{options?.coatings?.blackPainted || "Black Painted"}</p>
                  <p>{options?.coatings?.galvanized || "Galvanized"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Size Availability Matrix */}
      <SizeAvailabilityMatrix onCellClick={handleMatrixCellClick} />

      {/* Pipe Calculator — desktop only */}
      <div className="hidden md:block">
        <PipeCalculator externalValues={calcValues} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-8">
          <Link
            href="/tools/pipe-weight-calculator"
            className="text-sm text-accent-500 hover:text-accent-600 transition-colors inline-flex items-center gap-1"
          >
            Open calculator in full page
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>

      {/* Applications */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-xl md:text-2xl font-semibold text-navy-900 mb-6">
            {pipes?.applicationsTitle ?? "Applications"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { 
                key: "powerGeneration",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              { 
                key: "oilGas",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                  </svg>
                )
              },
              { 
                key: "petrochemical",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                )
              },
              { 
                key: "waterTreatment",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8a4 4 0 100 8 4 4 0 000-8z" />
                  </svg>
                )
              },
              { 
                key: "construction",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                )
              },
            ].map((app) => {
              const appData = apps?.[app.key as keyof typeof apps] as { name?: string; description?: string } | undefined;
              return (
                <div
                  key={app.key}
                  className="bg-gray-50 rounded-lg p-4 border border-gray-100"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-accent-500/10 flex items-center justify-center text-accent-500 flex-shrink-0">
                      {app.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900 text-sm mb-1">{appData?.name || app.key}</h3>
                      <p className="text-gray-600 text-xs leading-relaxed">{appData?.description || ""}</p>
                    </div>
                  </div>
                </div>
              );
            })}
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
          <DownloadCard
            href="/Broroma-Pipe-Catalog.pdf"
            title={common?.downloads?.pipesCatalog || "Pipes Catalog"}
            format="PDF"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container-custom">
          {/* Mobile: simple card without image */}
          <div className="md:hidden bg-gradient-to-br from-navy-900 to-navy-950 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-semibold text-white mb-2">
              {common?.cta?.needQuotePipes || "Need a Quote for Pipes?"}
            </h2>
            <p className="text-navy-200 text-sm mb-5">
              {common?.cta?.tellUsGrade || "Tell us your grade, size, and quantity — we'll respond within 24 hours."}
            </p>
            <Link href="/quote" className="btn-primary text-sm inline-flex items-center gap-2">
              {cta?.button ?? "Request a Quote"}
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
                  {common?.cta?.needQuotePipes || "Need a Quote for Pipes?"}
                </h2>
                <p className="text-navy-200 text-lg mb-8 max-w-md">
                  {common?.cta?.tellUsGrade || "Tell us your grade, size, and quantity — we'll respond within 24 hours."}
                </p>
                <Link href="/quote" className="btn-primary inline-flex items-center gap-2">
                  {cta?.button ?? "Request a Quote"}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              {/* Image */}
              <div className="relative h-full min-h-[280px]">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                  alt="Industrial steel pipes"
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
