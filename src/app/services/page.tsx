"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

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
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
  ),
};

export default function ServicesPage() {
  const { t } = useLanguage();
  const [activeProcessStep, setActiveProcessStep] = useState(0);
  const processScrollRef = useRef<HTMLDivElement>(null);
  const processCardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll to a specific process card when dot is clicked
  const scrollToProcessCard = useCallback((index: number) => {
    const card = processCardRefs.current[index];
    if (card && processScrollRef.current) {
      const container = processScrollRef.current;
      const cardLeft = card.offsetLeft;
      const cardWidth = card.offsetWidth;
      const containerWidth = container.offsetWidth;
      // Center the card in the container
      const scrollPosition = cardLeft - (containerWidth - cardWidth) / 2;
      container.scrollTo({ left: scrollPosition, behavior: "smooth" });
    }
  }, []);

  // Track which card is in view using IntersectionObserver
  useEffect(() => {
    const container = processScrollRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = processCardRefs.current.findIndex((ref) => ref === entry.target);
            if (index !== -1) {
              setActiveProcessStep(index);
            }
          }
        });
      },
      {
        root: container,
        threshold: 0.6, // Card is considered "active" when 60% visible
      }
    );

    processCardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    { id: "stockist", title: t.services.stockist.title, shortDescription: t.services.stockist.shortDescription, bullets3: t.services.stockist.bullets3 },
    { id: "sourcing", title: t.services.sourcing.title, shortDescription: t.services.sourcing.shortDescription, bullets3: t.services.sourcing.bullets3 },
    { id: "testing", title: t.services.testing.title, shortDescription: t.services.testing.shortDescription, bullets3: t.services.testing.bullets3 },
    { id: "fabrication", title: t.services.fabrication.title, shortDescription: t.services.fabrication.shortDescription, bullets3: t.services.fabrication.bullets3 },
    { id: "installation", title: t.services.installation.title, shortDescription: t.services.installation.shortDescription, bullets3: t.services.installation.bullets3 },
  ];

  const processSteps = [
    {
      step: "01",
      title: t.services.process.steps.consultation.title,
      description: t.services.process.steps.consultation.description,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      step: "02",
      title: t.services.process.steps.sourcing.title,
      description: t.services.process.steps.sourcing.description,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      step: "03",
      title: t.services.process.steps.testing.title,
      description: t.services.process.steps.testing.description,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      step: "04",
      title: t.services.process.steps.delivery.title,
      description: t.services.process.steps.delivery.description,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-navy py-10 sm:py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-navy-800/50 text-steel-400 text-xs sm:text-sm font-medium rounded-full mb-4 sm:mb-6">
              {t.services.hero.label}
            </span>
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              {t.services.hero.title}
            </h1>
            <p className="text-base md:text-lg text-navy-200 leading-relaxed">
              {t.services.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Services Quick Nav Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="md:container-custom">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 md:border-l md:border-r md:border-gray-100">
            {services.map((service, index) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className={`group relative flex flex-col items-center justify-center text-center py-9 md:py-10 px-4 hover:bg-gray-50 transition-all duration-200 border-r border-gray-100 md:border-b-0 ${index === services.length - 1 ? '' : 'border-b'}`}
              >
              {/* Number badge */}
              <span className="absolute top-3 right-3 text-xs font-medium text-gray-300 group-hover:text-accent-400 transition-colors">
                0{index + 1}
              </span>
              
              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-gray-100 group-hover:bg-accent-500 flex items-center justify-center text-gray-500 group-hover:text-white transition-all duration-200 mb-3">
                {serviceIcons[service.id]}
              </div>
              
              {/* Title */}
              <p className="font-medium text-navy-900 text-sm leading-tight">
                {service.title}
              </p>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
            </a>
          ))}
          </div>
        </div>
      </section>

      {/* Services Details — mobile: badge + title inline; desktop: split layout */}
      <div className="container-custom space-y-6 md:space-y-10 py-8 md:py-10">
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`scroll-mt-28 rounded-xl border border-gray-100 bg-white shadow-sm overflow-hidden ${index % 2 === 1 ? "md:bg-gray-50/50" : ""}`}
          >
            <div className="flex flex-col md:flex-row min-h-0">
              {/* Left column: desktop only — number over faded icon */}
              <div className="hidden md:flex relative items-center justify-center md:w-[160px] md:min-w-[160px] md:flex-shrink-0 md:h-auto md:min-h-[200px] md:py-0 md:px-0 bg-navy-50/60 md:border-r border-gray-200/80">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none [&>svg]:w-[150px] [&>svg]:h-[150px] text-navy-200/25" aria-hidden>
                  {serviceIcons[service.id]}
                </div>
                <span className="relative z-10 text-5xl font-bold text-navy-200 tabular-nums select-none">
                  0{index + 1}
                </span>
              </div>
              {/* Right column: title, description, bullets + subtle texture */}
              <div className="relative flex-1 p-6 md:p-8 bg-white overflow-hidden">
                {/* Subtle dot texture overlay */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-[0.08]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='4' cy='4' r='0.8' fill='%236b7280'/%3E%3Ccircle cx='16' cy='4' r='0.8' fill='%236b7280'/%3E%3Ccircle cx='4' cy='16' r='0.8' fill='%236b7280'/%3E%3Ccircle cx='16' cy='16' r='0.8' fill='%236b7280'/%3E%3C/svg%3E")`,
                  }}
                  aria-hidden
                />
                <div className="relative z-10">
                {/* Mobile: red badge + title inline; desktop: title only */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent-500 flex items-center justify-center text-white md:hidden [&>svg]:w-6 [&>svg]:h-6" aria-hidden>
                    {serviceIcons[service.id]}
                  </div>
                  <h2 className="text-lg md:text-xl font-bold text-navy-900">{service.title}</h2>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{service.shortDescription}</p>
                <ul className="space-y-2">
                  {service.bullets3.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                      <span className="flex-shrink-0 mt-0.5 text-accent-500" aria-hidden>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Process Section */}
      <section className="gradient-navy py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-accent-400 font-semibold text-sm uppercase tracking-wider">
              {t.services.process.label}
            </span>
            <h2 className="text-white mt-2 mb-4">{t.services.process.title}</h2>
            <p className="text-navy-300 max-w-2xl mx-auto">
              {t.services.process.description}
            </p>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          <div 
            ref={processScrollRef}
            className="flex gap-4 overflow-x-auto pb-8 px-6 md:px-0 md:overflow-visible md:container-custom md:grid md:grid-cols-4 md:gap-4"
            style={{
              scrollSnapType: "x mandatory",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {processSteps.map((step, index) => (
              <div 
                key={index}
                ref={(el) => { processCardRefs.current[index] = el; }}
                className="flex-shrink-0 w-[280px] md:w-auto"
                style={{ scrollSnapAlign: "center" }}
              >
                <div className="relative h-full bg-navy-800 rounded-xl px-6 py-9 md:px-8 md:py-14 border border-navy-700 hover:border-navy-600 transition-colors duration-200">
                  {/* Step Number */}
                  <div className="absolute top-4 right-4 text-6xl font-bold text-navy-700 select-none">
                    {step.step}
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 pt-2">
                    <div className="w-10 h-10 rounded-lg bg-accent-500/20 flex items-center justify-center text-accent-400 mb-3">
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-navy-300 text-sm leading-relaxed">{step.description}</p>
                  </div>
                  
                  {/* Arrow connector */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-20 w-4 h-4 bg-accent-500 rounded-full items-center justify-center">
                      <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
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
              <button
                key={index}
                onClick={() => scrollToProcessCard(index)}
                className={`h-2 rounded-full transition-all duration-200 ${
                  activeProcessStep === index
                    ? "w-6 bg-accent-400"
                    : "w-2 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Divider between Process and FAQ */}
      <div className="bg-gray-50 relative" aria-hidden>
        <div className="container-custom py-8 md:py-10">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px flex-1 max-w-[160px] md:max-w-[280px] bg-gradient-to-r from-transparent via-gray-300 to-gray-400 rounded-full" />
            <span className="flex-shrink-0 w-2.5 h-2.5 rotate-45 bg-accent-400/80 rounded-sm shadow-sm" />
            <span className="h-px flex-1 max-w-[160px] md:max-w-[280px] bg-gradient-to-l from-transparent via-gray-300 to-gray-400 rounded-full" />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-accent-500 font-medium text-sm uppercase tracking-wider">
                {t.services.faq.label}
              </span>
              <h2 className="text-navy-900 mt-2">{t.services.faq.title}</h2>
            </div>

            <div className="space-y-3">
              {[
                { q: t.services.faq.q1, a: t.services.faq.a1 },
                { q: t.services.faq.q2, a: t.services.faq.a2 },
                { q: t.services.faq.q3, a: t.services.faq.a3 },
                { q: t.services.faq.q4, a: t.services.faq.a4 },
              ].map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg border border-gray-100 p-5 hover:border-gray-200 transition-colors"
                >
                  <h3 className="text-base font-semibold text-navy-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="container-custom">
          <div className="bg-navy-900 rounded-3xl p-8 md:p-16 text-center">
            <h2 className="text-xl md:text-4xl text-white mb-4">
              {t.services.cta.title}
            </h2>
            <p className="text-navy-300 text-base md:text-lg mb-8 max-w-2xl mx-auto">
              {t.services.cta.description}
            </p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              <Link href="/contact" className="btn-primary">
                {t.services.cta.contact}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/products" className="btn-outline border-white text-white hover:bg-white hover:text-navy-900">
                {t.services.cta.products}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
