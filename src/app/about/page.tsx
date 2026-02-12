"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ImageSlider } from "@/components/ui/ImageSlider";

import oilGasCover from "@/../public/industries/oil-gas-cover.png";
import powerGenCover from "@/../public/industries/power-gen-cover.png";
import petrochemicalCover from "@/../public/industries/petrochemical-cover.png";
import sugarMillCover from "@/../public/industries/sugar-mill-cover.png";
import constructionCover from "@/../public/industries/construction-cover.png";
import waterTreatmentCover from "@/../public/industries/water-treatment-cover.png";

import allianceCleanPower from "@/../public/projects/alliance-clean-power.png";
import thachangBioPower from "@/../public/projects/thachang-bio-power.png";
import mswKrabiPowerPlant from "@/../public/projects/msw-krabi-power-plant.png";
import buaYaiBioPower from "@/../public/projects/bua-yai-bio-power.png";
import theSaharuangBoiler from "@/../public/projects/the-saharuang-boiler.png";
import mitrPholBioPowerKuchinarai from "@/../public/projects/mitr-phol-bio-power-kuchinarai.png";

export default function AboutPage() {
  const { t } = useLanguage();

  const projectReferences = [
    {
      name: "Alliance Clean Power",
      description: "Supplied seamless carbon steel pipes and weld neck flanges for high-pressure steam systems.",
      products: ["Pipes", "Flanges", "Fittings"],
      year: "2023",
      location: "Thailand",
      images: [allianceCleanPower.src],
    },
    {
      name: "Thachang Bio Power",
      description: "Full piping package including boiler tubes, alloy steel pipes, and manual valves for biomass power generation.",
      products: ["Boiler Tubes", "Pipes", "Valves"],
      year: "2023",
      location: "Thailand",
      images: [thachangBioPower.src],
    },
    {
      name: "MSW Krabi Power Plant",
      description: "Delivered stainless steel pipes and control valves for waste-to-energy processing systems.",
      products: ["Pipes", "Control Valves", "Fittings"],
      year: "2024",
      location: "Thailand",
      images: [mswKrabiPowerPlant.src],
    },
    {
      name: "Bua Yai Bio Power",
      description: "Supplied heat exchanger tubes and alloy steel fittings for high-temperature boiler applications.",
      products: ["Heat Exchanger Tubes", "Fittings", "Flanges"],
      year: "2022",
      location: "Thailand",
      images: [buaYaiBioPower.src],
    },
    {
      name: "The Saharuang Boiler",
      description: "Complete boiler piping supply including seamless alloy tubes, safety valves, and steam traps.",
      products: ["Boiler Tubes", "Safety Valves", "Accessories"],
      year: "2024",
      location: "Thailand",
      images: [theSaharuangBoiler.src],
    },
    {
      name: "Mitr Phol Bio Power Kuchinarai",
      description: "Large-scale supply of carbon and alloy steel pipes for biomass steam generation systems.",
      products: ["Pipes", "Flanges", "Valves"],
      year: "2023",
      location: "Thailand",
      images: [mitrPholBioPowerKuchinarai.src],
    },
  ];

  const projectsScrollRef = useRef<HTMLDivElement>(null);
  const [projectsActiveIndex, setProjectsActiveIndex] = useState(0);

  const updateProjectsActiveIndex = useCallback(() => {
    const el = projectsScrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-carousel-card]");
    if (!card) return;
    const cardWidth = card.offsetWidth;
    const gap = 12;
    const paddingPx = card.offsetLeft;
    const viewportCenter = el.scrollLeft + el.clientWidth / 2;
    const index = Math.min(
      projectReferences.length - 1,
      Math.max(0, Math.round((viewportCenter - paddingPx) / (cardWidth + gap)))
    );
    setProjectsActiveIndex(index);
  }, [projectReferences.length]);

  useEffect(() => {
    const el = projectsScrollRef.current;
    if (!el) return;
    updateProjectsActiveIndex();
    el.addEventListener("scroll", updateProjectsActiveIndex);
    window.addEventListener("resize", updateProjectsActiveIndex);
    return () => {
      el.removeEventListener("scroll", updateProjectsActiveIndex);
      window.removeEventListener("resize", updateProjectsActiveIndex);
    };
  }, [updateProjectsActiveIndex]);

  const scrollToProject = (index: number) => {
    const el = projectsScrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-carousel-card]");
    if (!card) return;
    const cardWidth = card.offsetWidth;
    const gap = 12;
    const paddingPx = card.offsetLeft;
    const scrollLeft = paddingPx + index * (cardWidth + gap) - (el.clientWidth - cardWidth) / 2;
    el.scrollTo({ left: Math.max(0, scrollLeft), behavior: "smooth" });
  };

  const industries = [
    {
      name: t.about.industries.power.name,
      description: t.about.industries.power.description,
      image: powerGenCover.src,
    },
    {
      name: t.about.industries.oilgas.name,
      description: t.about.industries.oilgas.description,
      image: oilGasCover.src,
    },
    {
      name: t.about.industries.petrochemical.name,
      description: t.about.industries.petrochemical.description,
      image: petrochemicalCover.src,
    },
    {
      name: t.about.industries.sugar.name,
      description: t.about.industries.sugar.description,
      image: sugarMillCover.src,
    },
    {
      name: t.about.industries.construction.name,
      description: t.about.industries.construction.description,
      image: constructionCover.src,
    },
    {
      name: t.about.industries.water.name,
      description: t.about.industries.water.description,
      image: waterTreatmentCover.src,
    },
  ];

  return (
    <>
      {/* Hero Section — same size as suppliers (brands) page */}
      <section className="gradient-navy py-10 sm:py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-navy-800/50 text-steel-400 text-xs sm:text-sm font-medium rounded-full mb-4 sm:mb-6">
              {t.about.hero.label}
            </span>
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              {t.about.hero.title}
            </h1>
            <p className="text-base md:text-lg text-navy-200 leading-relaxed">
              {t.about.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* All content sections — consistent gray-50 background */}
      <section className="bg-gray-50 relative overflow-hidden">
        {/* Subtle background accents — a bit stronger on mobile, then md/lg */}
        <div className="absolute top-[10%] -left-40 w-[480px] h-[480px] bg-accent-500/[0.032] md:bg-accent-500/[0.04] lg:bg-accent-500/[0.055] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-[50%] -left-48 w-[500px] h-[500px] bg-accent-500/[0.028] md:bg-accent-500/[0.035] lg:bg-accent-500/[0.05] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[20%] -left-32 w-[400px] h-[400px] bg-accent-500/[0.025] md:bg-accent-500/[0.03] lg:bg-accent-500/[0.04] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-[15%] -right-48 w-[500px] h-[500px] bg-accent-500/[0.035] md:bg-accent-500/[0.045] lg:bg-accent-500/[0.06] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-[55%] -right-40 w-[450px] h-[450px] bg-navy-500/[0.01] md:bg-navy-500/[0.02] lg:bg-navy-500/[0.025] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[15%] right-0 w-[400px] h-[400px] bg-accent-500/[0.028] md:bg-accent-500/[0.035] lg:bg-accent-500/[0.05] rounded-full blur-3xl pointer-events-none" />

        {/* Story Section */}
        <div className="py-10 md:py-12 lg:py-16">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center">
              <div>
                <span className="text-accent-500 font-semibold text-xs md:text-sm uppercase tracking-wider">
                  {t.about.story.label}
                </span>
                <h2 className="text-navy-900 mt-1.5 md:mt-2 mb-4 md:mb-4 lg:mb-5 text-xl md:text-3xl lg:text-3xl font-bold leading-tight">
                  {t.about.story.title}
                </h2>
                <div className="space-y-3 md:space-y-3 lg:space-y-4 text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">
                  <p>{t.about.story.p1}</p>
                  <p>{t.about.story.p2}</p>
                </div>
              </div>
              <div className="relative w-full aspect-[4/3] lg:aspect-[3/4] rounded-2xl overflow-hidden lg:max-w-xl lg:justify-self-end min-h-[200px]">
                <Image
                  src="/about/story-office.png"
                  alt="Broroma — our office"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1023px) 100vw, 36rem"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="container-custom"><div className="h-px bg-gray-200/80" /></div>

        {/* Mission + Our Expertise */}
        <div className="py-10 md:py-16 lg:py-24" id="industries">
          <div className="container-custom">

            {/* Mission — two-column */}
            <div className="mb-10 md:mb-14 lg:mb-16">
              <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
                <div className="lg:w-2/5 mb-5 lg:mb-0">
                  <span className="text-accent-500 font-semibold text-xs uppercase tracking-wider">{t.about.mission.label}</span>
                  <h2 className="text-navy-900 text-xl md:text-3xl font-bold mt-1.5 leading-tight">
                    {t.about.mission.title}
                  </h2>
                </div>
                <div className="lg:w-3/5 lg:pt-6">
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">
                    {t.about.mission.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Sub-separator */}
            <div className="h-px bg-gray-200/60 mb-10 md:mb-14 lg:mb-16" />

            {/* Industries header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4 mb-6 md:mb-8">
              <div>
                <span className="text-accent-500 font-semibold text-xs uppercase tracking-wider">{t.about.industries.label}</span>
                <h2 className="text-navy-900 text-xl md:text-3xl font-semibold mt-1">{t.about.industries.title}</h2>
              </div>
              <p className="text-gray-500 text-xs md:text-sm max-w-md md:text-right">
                {t.about.industries.description}
              </p>
            </div>

            {/* Industry cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="group relative aspect-square lg:aspect-[5/6] rounded-xl overflow-hidden shadow-sm"
                >
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/75 via-navy-900/30 to-transparent group-hover:from-navy-900/60 transition-colors duration-300" />
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-2 md:p-3 pb-3 md:pb-4 text-center">
                    <h3 className="text-white font-semibold text-xs md:text-sm leading-tight">{industry.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="container-custom"><div className="h-px bg-gray-200/80" /></div>

        {/* Project References + Quality Assurance + CTA */}
        <div className="py-10 md:py-16 lg:py-24 relative">
          <div className="container-custom relative">
          {/* Project References */}
          <div id="projects" className="scroll-mt-20">
            <div className="text-center mb-6 md:mb-12">
              <span className="text-accent-500 font-semibold text-xs md:text-sm uppercase tracking-wider">{t.about.projects.label}</span>
              <h2 className="text-navy-900 mt-1.5 md:mt-2 mb-3 md:mb-4 text-xl md:text-2xl lg:text-3xl font-bold">
                {t.about.projects.title}
              </h2>
              <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
                {t.about.projects.description}
              </p>
            </div>

            {/* Mobile: horizontal swipe carousel + dots */}
          <div className="md:hidden">
            <div
              ref={projectsScrollRef}
              className="-mx-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide flex gap-3 pb-4 px-[max(10vw,(100vw-20rem)/2)]"
            >
              {projectReferences.map((project, index) => (
                <div
                  key={index}
                  data-carousel-card
                  className="snap-center shrink-0 w-[80vw] max-w-[320px] bg-white border border-gray-200 rounded-xl overflow-hidden"
                >
                  <ImageSlider images={project.images} alt={project.name} aspectClass="aspect-[2/1]" />
                  <div className="p-4 flex flex-col min-h-0">
                    <h3 className="text-base font-bold text-navy-900 mb-1.5">{project.name}</h3>
                    <p className="text-gray-600 text-xs leading-relaxed mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.products.map((product, i) => (
                        <span
                          key={i}
                          className="inline-block px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-md"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                    <p className="mt-auto text-gray-500 text-xs font-medium">
                      {project.year} | {project.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-2 pt-2">
              {projectReferences.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to project ${index + 1}`}
                  onClick={() => scrollToProject(index)}
                  className={`h-2 rounded-full ${
                    index === projectsActiveIndex
                      ? "w-6 bg-accent-500"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Desktop: grid layout */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectReferences.map((project, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden"
              >
                <ImageSlider images={project.images} alt={project.name} aspectClass="aspect-[16/9]" />
                <div className="p-6 flex flex-col min-h-0">
                  <h3 className="text-lg font-bold text-navy-900 mb-2">{project.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.products.map((product, i) => (
                      <span
                        key={i}
                        className="inline-block px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-md"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                  <p className="mt-auto text-gray-500 text-xs font-medium">
                    {project.year} | {project.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
          </div>

          {/* Quality Assurance */}
          <div id="standards" className="scroll-mt-20 pt-12 md:pt-20 lg:pt-24">
            <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-500/10 text-accent-600 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              {t.about.qualityPromise.label}
            </span>
            <h2 className="text-navy-900 text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              {t.about.qualityPromise.title}
            </h2>
            <p className="text-gray-500 text-sm md:text-base lg:text-lg leading-relaxed">
              {t.about.qualityPromise.subtext}
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Mill Test Certificates */}
            <div className="group bg-white rounded-2xl p-6 md:p-7 border border-gray-100 shadow-sm hover:shadow-lg hover:border-accent-200 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-navy-900 font-bold text-base md:text-lg mb-2">{t.about.qualityPromise.mtc.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{t.about.qualityPromise.mtc.description}</p>
            </div>

            {/* Certified Manufacturers */}
            <div className="group bg-white rounded-2xl p-6 md:p-7 border border-gray-100 shadow-sm hover:shadow-lg hover:border-accent-200 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy-700 to-navy-900 flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-navy-900 font-bold text-base md:text-lg mb-2">{t.about.qualityPromise.certifiedManufacturers.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{t.about.qualityPromise.certifiedManufacturers.description}</p>
            </div>

            {/* Standards Compliance */}
            <div className="group bg-white rounded-2xl p-6 md:p-7 border border-gray-100 shadow-sm hover:shadow-lg hover:border-accent-200 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-navy-900 font-bold text-base md:text-lg mb-2">{t.about.qualityPromise.standardsCompliance.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{t.about.qualityPromise.standardsCompliance.description}</p>
            </div>

            {/* Inspection & Documentation */}
            <div className="group bg-white rounded-2xl p-6 md:p-7 border border-gray-100 shadow-sm hover:shadow-lg hover:border-accent-200 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy-700 to-navy-900 flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
              <h3 className="text-navy-900 font-bold text-base md:text-lg mb-2">{t.about.qualityPromise.inspectionDocs.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{t.about.qualityPromise.inspectionDocs.description}</p>
            </div>
          </div>
          </div>

          {/* CTA — inside same section so gray background runs through to bottom */}
          <div className="pt-12 md:pt-16 lg:pt-24">
            <div className="bg-gradient-to-br from-navy-900 to-navy-950 rounded-2xl md:rounded-3xl p-6 md:p-16 text-center">
                <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-4">
                  {t.about.cta.title}
                </h2>
                <p className="text-navy-200 text-sm md:text-lg mb-4 md:mb-8 max-w-xl mx-auto md:max-w-2xl">
                  {t.about.cta.description}
                </p>
                <Link href="/contact" className="btn-primary text-sm md:text-base">
                  {t.about.cta.button}
                  <svg className="w-4 h-4 md:w-5 md:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
