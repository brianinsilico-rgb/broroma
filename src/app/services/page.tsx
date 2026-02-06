"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const serviceImages = {
  stockist: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  sourcing: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80",
  testing: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
  fabrication: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
  installation: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
};

const serviceIcons: { [key: string]: React.ReactNode } = {
  stockist: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
  sourcing: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  testing: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  fabrication: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  installation: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
    </svg>
  ),
};

export default function ServicesPage() {
  const { t } = useLanguage();

  const services = [
    {
      id: "stockist",
      title: t.services.stockist.title,
      subtitle: t.services.stockist.subtitle,
      description: t.services.stockist.description,
      image: serviceImages.stockist,
      features: t.services.stockist.features,
    },
    {
      id: "sourcing",
      title: t.services.sourcing.title,
      subtitle: t.services.sourcing.subtitle,
      description: t.services.sourcing.description,
      image: serviceImages.sourcing,
      features: t.services.sourcing.features,
    },
    {
      id: "testing",
      title: t.services.testing.title,
      subtitle: t.services.testing.subtitle,
      description: t.services.testing.description,
      image: serviceImages.testing,
      features: t.services.testing.features,
    },
    {
      id: "fabrication",
      title: t.services.fabrication.title,
      subtitle: t.services.fabrication.subtitle,
      description: t.services.fabrication.description,
      image: serviceImages.fabrication,
      features: t.services.fabrication.features,
    },
    {
      id: "installation",
      title: t.services.installation.title,
      subtitle: t.services.installation.subtitle,
      description: t.services.installation.description,
      image: serviceImages.installation,
      features: t.services.installation.features,
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: t.services.process.steps.consultation.title,
      description: t.services.process.steps.consultation.description,
    },
    {
      step: "02",
      title: t.services.process.steps.sourcing.title,
      description: t.services.process.steps.sourcing.description,
    },
    {
      step: "03",
      title: t.services.process.steps.testing.title,
      description: t.services.process.steps.testing.description,
    },
    {
      step: "04",
      title: t.services.process.steps.delivery.title,
      description: t.services.process.steps.delivery.description,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-navy py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-navy-800/50 text-steel-400 text-sm font-medium rounded-full mb-6">
              {t.services.hero.label}
            </span>
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {t.services.hero.title}
            </h1>
            <p className="text-base md:text-lg text-navy-200 leading-relaxed">
              {t.services.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Services Quick Nav Bar */}
      <section className="bg-white relative">
        {/* Base divider line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-200" />
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
          {services.map((service, index) => (
            <a
              key={service.id}
              href={`#${service.id}`}
              className="group relative flex flex-col items-center justify-center text-center py-10 px-4 hover:bg-gray-50 transition-all duration-300 overflow-hidden border-r border-gray-100 last:border-r-0"
            >
              {/* Number badge */}
              <span className="absolute top-3 right-3 text-base font-bold text-navy-200 group-hover:text-accent-400 transition-colors">
                0{index + 1}
              </span>
              
              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-navy-50 group-hover:bg-accent-50 flex items-center justify-center mb-3 text-navy-600 group-hover:text-accent-600 transition-colors">
                {serviceIcons[service.id]}
              </div>
              
              {/* Title */}
              <p className="font-semibold text-navy-900 text-sm leading-tight group-hover:text-accent-600 transition-colors">
                {service.title}
              </p>
              
              {/* Bottom accent line - overlays the divider */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-400 to-accent-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-10" />
            </a>
          ))}
        </div>
      </section>

      {/* Services Details */}
      <section className="section-padding bg-white">
        <div className="container-custom">

          {/* Individual Services */}
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id}>
                {/* Divider with icon (not before first item) */}
                {index > 0 && (
                  <div className="flex items-center justify-center gap-4 mb-20">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-gray-200" />
                    <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-400">
                      {serviceIcons[service.id]}
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gray-200 to-gray-200" />
                  </div>
                )}
                
                <div id={service.id} className="scroll-mt-32">
                  <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                      <span className="text-accent-500 font-medium text-sm uppercase tracking-wider">{service.subtitle}</span>
                      <h2 className="text-navy-900 mt-2 mb-4">{service.title}</h2>
                      <p className="text-gray-600 text-lg mb-6">{service.description}</p>
                      
                      <div className="space-y-3">
                        {service.features.slice(0, 5).map((feature, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-accent-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                      <div className="aspect-[4/3] relative rounded-xl overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Horizontal Scroll Cards */}
      <section className="section-padding bg-gray-50 overflow-hidden">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">{t.services.process.label}</span>
            <h2 className="text-navy-900 mt-2 mb-4">{t.services.process.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.services.process.description}
            </p>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-8 px-6 md:px-0 snap-x snap-mandatory scrollbar-hide md:overflow-visible md:container-custom md:grid md:grid-cols-4 md:gap-6">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-[280px] md:w-auto snap-center"
              >
                <div className="relative h-full bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:border-accent-200 transition-all duration-300">
                  {/* Step Number - Large Background */}
                  <div className="absolute top-4 right-4 text-7xl font-bold text-gray-100 select-none">
                    {step.step}
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 pt-4">
                    <h3 className="text-xl font-semibold text-navy-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                  
                  {/* Arrow indicator for next step */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 bg-white rounded-full shadow-md items-center justify-center">
                      <svg className="w-3 h-3 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Scroll Indicator - Mobile Only */}
          <div className="flex justify-center gap-2 mt-4 md:hidden">
            {processSteps.map((_, index) => (
              <div key={index} className="w-2 h-2 rounded-full bg-gray-300" />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding gradient-navy relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-400 rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-5xl md:text-6xl font-bold text-white mb-2">50+</p>
              <p className="text-white text-sm uppercase tracking-wider">{t.services.stats.countries}</p>
            </div>
            <div className="text-center">
              <p className="text-5xl md:text-6xl font-bold text-white mb-2">1000+</p>
              <p className="text-white text-sm uppercase tracking-wider">{t.services.stats.projects}</p>
            </div>
            <div className="text-center">
              <p className="text-5xl md:text-6xl font-bold text-white mb-2">99.5%</p>
              <p className="text-white text-sm uppercase tracking-wider">{t.services.stats.delivery}</p>
            </div>
            <div className="text-center">
              <p className="text-5xl md:text-6xl font-bold text-white mb-2">24/7</p>
              <p className="text-white text-sm uppercase tracking-wider">{t.services.stats.support}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-accent-500 font-medium text-sm uppercase tracking-wider">{t.services.faq.label}</span>
              <h2 className="text-navy-900 mt-2">{t.services.faq.title}</h2>
            </div>

            <div className="space-y-6">
              {[
                { q: t.services.faq.q1, a: t.services.faq.a1 },
                { q: t.services.faq.q2, a: t.services.faq.a2 },
                { q: t.services.faq.q3, a: t.services.faq.a3 },
                { q: t.services.faq.q4, a: t.services.faq.a4 },
              ].map((faq, index) => (
                <div key={index} className="border-l-2 border-gray-200 hover:border-accent-400 pl-6 py-1 transition-colors">
                  <h3 className="text-base font-semibold text-navy-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section — mobile: same size/font as other pages */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-navy-900 to-navy-950 rounded-2xl md:rounded-3xl p-6 md:p-16 text-center">
            <h2 className="text-lg font-semibold text-white mb-2 md:text-3xl lg:text-4xl md:mb-4">
              {t.services.cta.title}
            </h2>
            <p className="text-navy-200 text-sm mb-5 max-w-xl mx-auto md:text-lg md:mb-8 md:max-w-2xl">
              {t.services.cta.description}
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <Link href="/contact" className="btn-primary text-sm md:text-base">
                {t.services.cta.contact}
                <svg className="w-4 h-4 md:w-5 md:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/products" className="btn-outline border-white text-white hover:bg-white hover:text-navy-900 text-sm md:text-base">
                {t.services.cta.products}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
