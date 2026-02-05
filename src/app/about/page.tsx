"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ImageSlider } from "@/components/ui/ImageSlider";

export default function AboutPage() {
  const { t } = useLanguage();

  const values = [
    {
      title: t.about.values.integrity.title,
      description: t.about.values.integrity.description,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: t.about.values.quality.title,
      description: t.about.values.quality.description,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      title: t.about.values.innovation.title,
      description: t.about.values.innovation.description,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: t.about.values.partnership.title,
      description: t.about.values.partnership.description,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  const projectReferences = [
    {
      name: "Offshore Platform Supply",
      description: "Supplied 500+ tons of seamless pipes and fittings for offshore oil platform construction",
      location: "Middle East",
      images: [
        "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=600&q=80",
        "https://images.unsplash.com/photo-1615722435079-83e18e7a9a26?w=600&q=80",
        "https://images.unsplash.com/photo-1494583882007-bfd2321fb8e2?w=600&q=80",
      ],
    },
    {
      name: "Power Plant Expansion",
      description: "Delivered boiler tubes and alloy steel pipes for 800MW power plant upgrade",
      location: "Southeast Asia",
      images: [
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
      ],
    },
    {
      name: "Refinery Maintenance",
      description: "Provided stainless steel flanges and valves for scheduled turnaround",
      location: "North America",
      images: [
        "https://images.unsplash.com/photo-1586953208270-767889fa9b0a?w=600&q=80",
        "https://images.unsplash.com/photo-1518173946687-a4c939459a05?w=600&q=80",
        "https://images.unsplash.com/photo-1545259741-2266e39ad919?w=600&q=80",
      ],
    },
    {
      name: "Chemical Processing Facility",
      description: "Supplied duplex steel pipes and heat exchanger tubes for corrosive environment",
      location: "Europe",
      images: [
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
        "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
      ],
    },
    {
      name: "Water Treatment Plant",
      description: "Delivered carbon steel pipes and fittings for municipal water infrastructure",
      location: "South America",
      images: [
        "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
        "https://images.unsplash.com/photo-1580982324076-d95230549339?w=600&q=80",
        "https://images.unsplash.com/photo-1621947081720-86970823b77a?w=600&q=80",
      ],
    },
    {
      name: "LNG Terminal Construction",
      description: "Provided cryogenic-grade pipes and fittings for LNG storage facility",
      location: "Australia",
      images: [
        "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=600&q=80",
        "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&q=80",
        "https://images.unsplash.com/photo-1560759226-14da22a643ef?w=600&q=80",
      ],
    },
  ];

  const standards = [
    {
      name: "ASTM Standards",
      description: "Materials tested and certified to ASTM specifications",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      name: "ASME Compliance",
      description: "Products meet ASME pressure equipment requirements",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          <circle cx="12" cy="12" r="3" strokeWidth={1.5} />
        </svg>
      ),
    },
    {
      name: "API Standards",
      description: "Oil & gas products conform to API specifications",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3c-1.5 0-3 1.5-3 3v1c0 1 .5 2 1.5 3l1.5 1.5c.5.5 1 1.5 1 2.5v1c0 1.5.5 3 1.5 4.5.5 1 1.5 1.5 2.5 1.5M12 3c1.5 0 3 1.5 3 3v1c0 1-.5 2-1.5 3L12 11.5c-.5.5-1 1.5-1 2.5v1c0 1.5-.5 3-1.5 4.5-.5 1-1.5 1.5-2.5 1.5" />
        </svg>
      ),
    },
    {
      name: "Mill Test Certificates",
      description: "Full traceability with MTCs for every order",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 8h1" />
          <circle cx="17" cy="17" r="3" strokeWidth={1.5} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.5 17l1 1 2-2" />
        </svg>
      ),
    },
  ];

  const industries = [
    {
      name: t.about.industries.power.name,
      description: t.about.industries.power.description,
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80",
    },
    {
      name: t.about.industries.oilgas.name,
      description: t.about.industries.oilgas.description,
      image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=600&q=80",
    },
    {
      name: t.about.industries.petrochemical.name,
      description: t.about.industries.petrochemical.description,
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&q=80",
    },
    {
      name: t.about.industries.sugar.name,
      description: t.about.industries.sugar.description,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    },
    {
      name: t.about.industries.boilers.name,
      description: t.about.industries.boilers.description,
      image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
    },
    {
      name: t.about.industries.water.name,
      description: t.about.industries.water.description,
      image: "https://images.unsplash.com/photo-1504387103978-e4ee71416c38?w=600&q=80",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-navy py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-navy-800/50 text-steel-400 text-sm font-medium rounded-full mb-6">
              {t.about.hero.label}
            </span>
            <h1 className="text-white mb-6">
              {t.about.hero.title}
            </h1>
            <p className="text-xl text-navy-200 leading-relaxed">
              {t.about.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">{t.about.story.label}</span>
              <h2 className="text-navy-900 mt-2 mb-6">
                {t.about.story.title}
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>{t.about.story.p1}</p>
                <p>{t.about.story.p2}</p>
                <p>{t.about.story.p3}</p>
                <p className="font-medium text-navy-900">{t.about.story.p4}</p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                  alt="Broroma history"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent-500 text-white rounded-2xl p-6 shadow-elevated">
                <p className="text-4xl font-bold">25+</p>
                <p className="text-accent-100">{t.about.story.yearsLabel}</p>
              </div>
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
      <section className="py-12 md:py-16 gradient-navy" id="industries">
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
          <div className="text-center mb-16">
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">{t.about.projects.label}</span>
            <h2 className="text-navy-900 mt-2 mb-4">{t.about.projects.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.about.projects.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectReferences.map((project, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 hover:shadow-card transition-all duration-300">
                <ImageSlider images={project.images} alt={project.name} />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">{project.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                    {project.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards & Compliance Section */}
      <section className="section-padding bg-white border-y border-gray-100" id="standards">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">{t.about.standards.label}</span>
            <h2 className="text-navy-900 mt-2 mb-4">{t.about.standards.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.about.standards.description}
            </p>
          </div>

          {/* Standards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {standards.map((standard, index) => (
              <div 
                key={index} 
                className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:border-navy-200 hover:bg-gray-100/50 transition-colors duration-200"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-navy-900 rounded-lg flex items-center justify-center text-white mb-5">
                  {standard.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{standard.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{standard.description}</p>
              </div>
            ))}
          </div>

          {/* Certification Badges */}
          <div className="mt-12 pt-10 border-t border-gray-200">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {['ISO 9001', 'API', 'ASTM', 'ASME'].map((cert, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 bg-navy-50 border border-navy-100 rounded">
                  <svg className="w-4 h-4 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm font-medium text-navy-800">{cert}</span>
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
            <h2 className="text-white mb-4">
              {t.about.cta.title}
            </h2>
            <p className="text-navy-200 text-lg mb-8 max-w-2xl mx-auto">
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
