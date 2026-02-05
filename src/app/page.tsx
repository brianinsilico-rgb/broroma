"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import TrustedBy from "@/components/ui/TrustedBy";

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
    { value: "25+", label: t.home.stats.years },
    { value: "50+", label: t.home.stats.countries },
    { value: "1000+", label: t.home.stats.projects },
    { value: "99%", label: t.home.stats.satisfaction },
  ];

  const trustIndicators = [
    {
      title: t.home.whyUs.iso.title,
      description: t.home.whyUs.iso.description,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: t.home.whyUs.global.title,
      description: t.home.whyUs.global.description,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: t.home.whyUs.quality.title,
      description: t.home.whyUs.quality.description,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      title: t.home.whyUs.delivery.title,
      description: t.home.whyUs.delivery.description,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
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
          <div className="py-24 md:py-32 lg:py-40">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-2 bg-navy-800/50 text-steel-400 text-sm font-medium rounded-full mb-6">
                  {t.home.hero.badge}
                </span>
                <h1 className="text-white mb-6 text-balance">
                  {t.home.hero.title}
                  <span className="text-accent-400"> {t.home.hero.titleHighlight}</span>
                </h1>
                <p className="text-xl text-navy-200 mb-8 max-w-lg leading-relaxed">
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
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
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
          <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-navy-900 mb-2">{stat.value}</p>
                <p className="text-gray-500">{stat.label}</p>
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
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80"
                    alt="Quality inspection"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square relative rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80"
                    alt="Corporate headquarters"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square relative rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&q=80"
                    alt="Global shipping"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
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
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">{t.home.services.label}</span>
            <h2 className="text-navy-900 mt-2 mb-4">
              {t.home.services.title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              {t.home.services.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card group">
                <div className="w-14 h-14 bg-navy-50 rounded-xl flex items-center justify-center text-navy-900 mb-6 group-hover:bg-accent-500 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-outline">
              {t.home.services.viewAll}
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gray-50 relative overflow-hidden">
        {/* Subtle background accents */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-navy-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
        
        <div className="container-custom relative">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">{t.home.whyUs.label}</span>
              <h2 className="text-navy-900 mt-2">
                {t.home.whyUs.title}
              </h2>
            </div>
            <p className="text-gray-600 max-w-md lg:text-right">
              {t.home.whyUs.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 rounded-2xl overflow-hidden">
            {trustIndicators.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-8 group hover:bg-navy-900 transition-all duration-300 relative"
              >
                {/* Number */}
                <span className="absolute top-4 right-4 text-5xl font-bold text-gray-100 group-hover:text-navy-800 transition-colors">
                  0{index + 1}
                </span>
                
                {/* Icon */}
                <div className="w-11 h-11 bg-navy-50 group-hover:bg-accent-500 rounded-lg flex items-center justify-center text-navy-600 group-hover:text-white mb-5 transition-all duration-300">
                  {item.icon}
                </div>
                
                <h3 className="text-lg font-semibold text-navy-900 group-hover:text-white mb-2 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 group-hover:text-navy-300 text-sm leading-relaxed transition-colors">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-16 text-center border border-gray-200">
            <h2 className="text-navy-900 mb-4">
              {t.home.cta.title}
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              {t.home.cta.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
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
