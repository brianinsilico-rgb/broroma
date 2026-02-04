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
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      name: t.about.industries.oilgas.name,
      description: t.about.industries.oilgas.description,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
        </svg>
      ),
    },
    {
      name: t.about.industries.petrochemical.name,
      description: t.about.industries.petrochemical.description,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      name: t.about.industries.sugar.name,
      description: t.about.industries.sugar.description,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      name: t.about.industries.boilers.name,
      description: t.about.industries.boilers.description,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          <circle cx="12" cy="12" r="3" strokeWidth={1.5} />
        </svg>
      ),
    },
    {
      name: t.about.industries.water.name,
      description: t.about.industries.water.description,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3c-4 4-6 7-6 10a6 6 0 1012 0c0-3-2-6-6-10z" />
        </svg>
      ),
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
      <section className="section-padding bg-white" id="industries">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">{t.about.industries.label}</span>
            <h2 className="text-navy-900 mt-2 mb-4">{t.about.industries.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.about.industries.description}
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-navy-200 transform md:-translate-x-1/2" />
              
              {industries.map((industry, index) => (
                <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'} pl-12 md:pl-0`}>
                    <div className="bg-white rounded-xl p-6 shadow-card border border-gray-100">
                      <div className={`flex items-center gap-3 mb-2 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className="w-10 h-10 bg-gradient-to-br from-accent-400 to-accent-600 rounded-lg flex items-center justify-center text-white flex-shrink-0 [&>svg]:w-5 [&>svg]:h-5">
                          {industry.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-navy-900">{industry.name}</h3>
                      </div>
                      <p className="text-gray-600 text-sm">{industry.description}</p>
                    </div>
                  </div>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-accent-500 rounded-full transform -translate-x-1/2 border-4 border-white shadow-md" />
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding gradient-navy" id="values">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-accent-400 font-semibold text-sm uppercase tracking-wider">{t.about.values.label}</span>
            <h2 className="text-white mt-2 mb-4">{t.about.values.title}</h2>
            <p className="text-navy-200 max-w-2xl mx-auto">
              {t.about.values.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-navy-800/50 backdrop-blur-sm rounded-2xl p-8 border border-navy-700 text-center">
                <div className="w-16 h-16 bg-accent-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-navy-300">{value.description}</p>
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
      <section className="section-padding bg-gray-50" id="standards">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">{t.about.standards.label}</span>
            <h2 className="text-navy-900 mt-2 mb-4">{t.about.standards.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.about.standards.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {standards.map((standard, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 text-center border border-gray-100 shadow-card hover:-translate-y-1 hover:shadow-elevated transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent-400 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                  {standard.icon}
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{standard.name}</h3>
                <p className="text-gray-600 text-sm">{standard.description}</p>
              </div>
            ))}
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
