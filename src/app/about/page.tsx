"use client";

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

  const qualityPromiseItems: ("mtc" | "certifiedManufacturers" | "standardsCompliance" | "inspectionDocs")[] = [
    "mtc",
    "certifiedManufacturers",
    "standardsCompliance",
    "inspectionDocs",
  ];

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
      {/* Hero Section */}
      <section className="section-padding gradient-navy">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-navy-800/50 text-steel-400 text-sm font-medium rounded-full mb-6">
              {t.about.hero.label}
            </span>
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {t.about.hero.title}
            </h1>
            <p className="text-base md:text-lg text-navy-200 leading-relaxed">
              {t.about.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section — clean split layout: text left, image right */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: text — on mobile stacks on top */}
            <div>
              <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">
                {t.about.story.label}
              </span>
              <h2 className="text-navy-900 mt-2 mb-6 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                {t.about.story.title}
              </h2>
              <div className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed">
                <p>{t.about.story.p1}</p>
                <p>{t.about.story.p2}</p>
              </div>
            </div>
            {/* Right: image — on mobile stacks below text */}
            <div className="relative aspect-[4/3] lg:aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Broroma — industrial pipe supply"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">{t.about.mission.label}</span>
            <h2 className="text-navy-900 mt-2 mb-6">
              {t.about.mission.title}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t.about.mission.description}
            </p>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="section-padding gradient-navy" id="industries">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <span className="text-accent-400 font-semibold text-xs uppercase tracking-wider">{t.about.industries.label}</span>
              <h2 className="text-white text-2xl md:text-3xl font-semibold mt-1">{t.about.industries.title}</h2>
            </div>
            <p className="text-navy-300 text-sm max-w-md md:text-right">
              {t.about.industries.description}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {industries.map((industry, index) => (
              <div 
                key={index} 
                className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer"
              >
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-navy-900/60 group-hover:bg-navy-900/40 transition-colors duration-300" />
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center">
                  <h3 className="text-white font-semibold text-sm leading-tight">{industry.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project References Section */}
      <section className="section-padding bg-white" id="projects">
        <div className="container-custom">
          <div className="text-center mb-10 md:mb-12">
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">{t.about.projects.label}</span>
            <h2 className="text-navy-900 mt-2 mb-4">{t.about.projects.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.about.projects.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectReferences.map((project, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-card"
              >
                <ImageSlider images={project.images} alt={project.name} aspectClass="aspect-[2/1] sm:aspect-[16/9]" />
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
      </section>

      {/* Quality Assurance — full-width dark banner */}
      <section className="py-12 md:py-16 gradient-navy" id="standards">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-accent-400 font-semibold text-xs md:text-sm uppercase tracking-wider">
              {t.about.qualityPromise.label}
            </span>
            <h2 className="text-white mt-2 mb-4 text-2xl md:text-3xl lg:text-4xl font-bold">
              {t.about.qualityPromise.title}
            </h2>
            <p className="text-navy-200 text-sm md:text-base leading-relaxed mb-10 md:mb-12">
              {t.about.qualityPromise.subtext}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-x-16 lg:gap-y-6 justify-items-center">
              {qualityPromiseItems.map((key) => (
                <div key={key} className="flex items-center gap-3 text-left w-full sm:w-auto sm:min-w-[240px]">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-500/20 flex items-center justify-center text-accent-400" aria-hidden>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-white font-medium text-sm md:text-base">{t.about.qualityPromise[key].title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-navy-900 to-navy-950 rounded-3xl p-8 md:p-16 text-center">
            <h2 className="text-lg font-semibold text-white mb-2 md:text-3xl lg:text-4xl md:mb-4">
              {t.about.cta.title}
            </h2>
            <p className="text-navy-200 text-sm mb-5 max-w-xl mx-auto md:text-lg md:mb-8 md:max-w-2xl">
              {t.about.cta.description}
            </p>
            <Link href="/contact" className="btn-primary">
              {t.about.cta.button}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
