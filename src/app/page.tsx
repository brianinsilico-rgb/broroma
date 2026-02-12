"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import TrustedBy from "@/components/ui/TrustedBy";
import CountUp from "@/components/ui/CountUp";

export default function Home() {
  const { t } = useLanguage();

  const services = [
    {
      title: t.home.services.stockist.title,
      description: t.home.services.stockist.description,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      title: t.home.services.sourcing.title,
      description: t.home.services.sourcing.description,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: t.home.services.testing.title,
      description: t.home.services.testing.description,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: t.home.services.fabrication.title,
      description: t.home.services.fabrication.description,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  const stats = [
    { end: 25, suffix: "+", label: t.home.stats.years },
    { end: 50, suffix: "+", label: t.home.stats.countries },
    { end: 1000, suffix: "+", label: t.home.stats.projects },
    { end: 99, suffix: "%", label: t.home.stats.satisfaction },
  ];

  const trustIndicators = [
    {
      title: "25+ Years in the Business",
      description: "We've seen every challenge — and solved it.",
      stat: "25+",
      statLabel: "Years",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "50+ Global Manufacturers",
      description: "Access to brands others can't get.",
      stat: "50+",
      statLabel: "Brands",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Mill Test Certificates Included",
      description: "Full traceability on every order.",
      stat: "100%",
      statLabel: "Traceable",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: "Fast Response",
      description: "Quote within 24 hours. Delivery when you need it.",
      stat: "24h",
      statLabel: "Response",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative gradient-navy overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container-custom relative">
          <div className="py-32 md:py-32 lg:py-40">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-2 bg-navy-800/50 text-steel-400 text-sm font-medium rounded-full mb-6">
                  {t.home.hero.badge}
                </span>
                <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance tracking-tight">
                  {t.home.hero.title}
                </h1>
                <p className="text-base md:text-lg text-navy-200 mb-10 max-w-lg leading-relaxed">
                  {t.home.hero.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/quote" className="btn-primary">
                    {t.home.hero.cta}
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link href="/products" className="btn-outline border-white text-white hover:bg-white hover:text-navy-900">
                    {t.home.hero.exploreProducts}
                  </Link>
                </div>
              </div>
              
              {/* Hero Image Placeholder */}
              <div className="relative hidden lg:block">
                <div className="aspect-square relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-steel-500/20 to-accent-500/20 rounded-3xl" />
                  <Image
                    src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80"
                    alt="Industrial pipes"
                    fill
                    className="object-cover rounded-3xl"
                    priority
                  />
                  {/* Floating Stats Card */}
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-elevated p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-accent-500/10 rounded-xl flex items-center justify-center">
                        <svg className="w-7 h-7 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-navy-900">25+</p>
                        <p className="text-gray-500 text-sm">{t.home.stats.years}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="py-10 md:py-12 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-5xl font-bold text-navy-900 mb-1 md:mb-2">
                  <CountUp end={stat.end} suffix={stat.suffix} duration={1.75} />
                </p>
                <div className="w-6 h-0.5 bg-accent-500 mx-auto mb-1.5" />
                <p className="text-gray-500 text-xs uppercase tracking-wider font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <TrustedBy />

      {/* About Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">{t.home.about.label}</span>
              <h2 className="text-navy-900 mt-2 mb-6">
                {t.home.about.title}
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                {t.home.about.description1}
              </p>
              <p className="text-gray-600 mb-8">
                {t.home.about.description2}
              </p>
              <Link href="/about" className="btn-secondary">
                {t.home.about.cta}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden image-zoom-hover">
                  <Image
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80"
                    alt="Quality inspection"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square relative rounded-2xl overflow-hidden image-zoom-hover">
                  <Image
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80"
                    alt="Corporate headquarters"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square relative rounded-2xl overflow-hidden image-zoom-hover">
                  <Image
                    src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&q=80"
                    alt="Global shipping"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden image-zoom-hover">
                  <Image
                    src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80"
                    alt="Pipe warehouse"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-navy-500/5 rounded-full blur-3xl" />
        
        <div className="container-custom relative">
          {/* Header with left-aligned text and right CTA on desktop */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">{t.home.services.label}</span>
              <h2 className="text-navy-900 mt-2 mb-4">
                {t.home.services.title}
              </h2>
              <p className="text-gray-600 text-lg">
                {t.home.services.description}
              </p>
            </div>
            <Link href="/services" className="btn-primary hidden lg:inline-flex">
              {t.home.services.viewAll}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Services Grid - Bento-style with featured first card */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {services.map((service, index) => (
              <Link
                key={index}
                href="/services"
                className={`group relative bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-gray-200 hover:-translate-y-1 ${
                  index === 0 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Card content */}
                <div className="p-6 lg:p-7 h-full flex flex-col">
                  {/* Top row: number and icon */}
                  <div className="flex items-start justify-between mb-5">
                    <span className="text-5xl font-bold text-gray-100 group-hover:text-accent-100 transition-colors duration-300 select-none">
                      0{index + 1}
                    </span>
                    <div className="w-12 h-12 bg-navy-900 rounded-xl flex items-center justify-center text-white group-hover:bg-accent-500 transition-all duration-300 group-hover:scale-110 [&>svg]:w-6 [&>svg]:h-6">
                      {service.icon}
                    </div>
                  </div>
                  
                  {/* Title and description */}
                  <h3 className="text-lg font-semibold text-navy-900 mb-2 group-hover:text-accent-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  
                  {/* Arrow indicator */}
                  <div className="mt-4 flex items-center text-navy-400 group-hover:text-accent-500 transition-colors duration-300">
                    <span className="text-sm font-medium opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      Learn more
                    </span>
                    <svg className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
                
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-accent-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Link>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="text-center mt-10 lg:hidden">
            <Link href="/services" className="btn-primary">
              {t.home.services.viewAll}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gray-50 relative overflow-hidden">
        <div className="container-custom relative">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">{t.home.whyUs.label}</span>
            <h2 className="text-navy-900 mt-2 mb-4">
              {t.home.whyUs.title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.home.whyUs.description}
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Featured Card - 25+ Years */}
            <div className="md:col-span-2 lg:col-span-1 lg:row-span-2 bg-gradient-to-br from-navy-900 to-navy-950 rounded-2xl p-8 relative overflow-hidden group">
              {/* Decorative circles */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-accent-500/10 rounded-full" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-navy-700/50 rounded-full" />
              
              <div className="relative h-full flex flex-col">
                <div className="w-16 h-16 bg-accent-500 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {trustIndicators[0].icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{trustIndicators[0].title}</h3>
                <p className="text-navy-300 leading-relaxed flex-grow">{trustIndicators[0].description}</p>
                
                {/* Badge */}
                <div className="mt-6 pt-6 border-t border-navy-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-navy-800 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">Trusted Since 2002</p>
                      <p className="text-navy-400 text-xs">Proven track record</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - 50+ Global Manufacturers */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-accent-200 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center text-navy-700 group-hover:bg-accent-500 group-hover:text-white transition-colors duration-300 flex-shrink-0">
                  {trustIndicators[1].icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-1">{trustIndicators[1].title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{trustIndicators[1].description}</p>
                </div>
              </div>
              {/* Mini stat */}
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-gray-400 text-xs uppercase tracking-wide">{trustIndicators[1].statLabel}</span>
                <span className="text-2xl font-bold text-navy-900">{trustIndicators[1].stat}</span>
              </div>
            </div>

            {/* Card 3 - Mill Test Certificates */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-accent-200 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center text-navy-700 group-hover:bg-accent-500 group-hover:text-white transition-colors duration-300 flex-shrink-0">
                  {trustIndicators[2].icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-1">{trustIndicators[2].title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{trustIndicators[2].description}</p>
                </div>
              </div>
              {/* Mini stat */}
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-gray-400 text-xs uppercase tracking-wide">{trustIndicators[2].statLabel}</span>
                <span className="text-2xl font-bold text-navy-900">{trustIndicators[2].stat}</span>
              </div>
            </div>

            {/* Card 4 - Fast Response - Wide card */}
            <div className="md:col-span-2 bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl p-6 relative overflow-hidden group">
              {/* Pattern overlay */}
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='3' cy='3' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
              
              <div className="relative flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex items-start gap-4 flex-grow">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    {trustIndicators[3].icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{trustIndicators[3].title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{trustIndicators[3].description}</p>
                  </div>
                </div>
                
                {/* Large stat */}
                <div className="flex items-center gap-3 md:border-l md:border-white/20 md:pl-6">
                  <div className="text-right">
                    <p className="text-4xl md:text-5xl font-bold text-white">{trustIndicators[3].stat}</p>
                    <p className="text-white/70 text-sm">{trustIndicators[3].statLabel}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container-custom">
          <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-16 text-center border border-gray-200 shadow-lg">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #102a43 1px, transparent 0)', backgroundSize: '20px 20px' }} />
            <h2 className="text-xl md:text-4xl text-navy-900 mb-4">
              {t.home.cta.title}
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              {t.home.cta.description}
            </p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              <Link href="/contact" className="btn-primary">
                {t.home.cta.contact}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/products" className="btn-outline">
                {t.home.cta.browse}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
