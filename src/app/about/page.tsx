"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

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

  const team = [
    {
      name: "Robert Chen",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    },
    {
      name: "Sarah Mitchell",
      role: "Chief Operations Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    },
    {
      name: "David Park",
      role: "VP of Global Sales",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    },
    {
      name: "Maria Rodriguez",
      role: "Head of Quality Assurance",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    },
  ];

  const certifications = [
    {
      name: "ISO 9001:2015",
      description: "Quality Management Systems",
      year: "Certified since 2005",
    },
    {
      name: "ISO 14001:2015",
      description: "Environmental Management",
      year: "Certified since 2010",
    },
    {
      name: "API Spec Q1",
      description: "Petroleum Industry Quality",
      year: "Certified since 2008",
    },
    {
      name: "ASME Certified",
      description: "Pressure Equipment Directive",
      year: "Certified since 2006",
    },
  ];

  const milestones = [
    { year: "1998", event: "Broroma founded in Houston, Texas" },
    { year: "2003", event: "Expanded operations to Europe and Asia" },
    { year: "2008", event: "Achieved API Q1 certification" },
    { year: "2012", event: "Opened international headquarters in Singapore" },
    { year: "2018", event: "Celebrated 20 years with 1000+ completed projects" },
    { year: "2024", event: "Launched sustainable sourcing initiative" },
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

      {/* Timeline Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">{t.about.journey.label}</span>
            <h2 className="text-navy-900 mt-2 mb-4">{t.about.journey.title}</h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-navy-200 transform md:-translate-x-1/2" />
              
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'} pl-12 md:pl-0`}>
                    <div className="bg-white rounded-xl p-6 shadow-card border border-gray-100">
                      <span className="text-accent-500 font-bold text-lg">{milestone.year}</span>
                      <p className="text-navy-900 mt-1">{milestone.event}</p>
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

      {/* Team Section */}
      <section className="section-padding bg-white" id="team">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">{t.about.team.label}</span>
            <h2 className="text-navy-900 mt-2 mb-4">{t.about.team.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.about.team.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="aspect-[3/4] relative rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-navy-900">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section-padding bg-gray-50" id="certifications">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">{t.about.certifications.label}</span>
            <h2 className="text-navy-900 mt-2 mb-4">{t.about.certifications.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.about.certifications.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="card text-center">
                <div className="w-16 h-16 bg-navy-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-1">{cert.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{cert.description}</p>
                <p className="text-accent-500 text-sm font-medium">{cert.year}</p>
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
