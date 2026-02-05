"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  
  const inquiryTypes = [
    t.contact.inquiryTypes.general,
    t.contact.inquiryTypes.quote,
    t.contact.inquiryTypes.import,
    t.contact.inquiryTypes.export,
    t.contact.inquiryTypes.technical,
    t.contact.inquiryTypes.partnership,
    t.contact.inquiryTypes.other,
  ];

  const contactInfo = [
    {
      title: t.contact.info.address,
      content: "11/88 Moo 20, Lam Luk Ka\nLam Luk Ka District\nPathum Thani 12150, Thailand",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: t.contact.info.phone,
      content: "+1 (713) 555-0192\n+1 (713) 555-0193",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      title: t.contact.info.email,
      content: "info@broroma.com\nsales@broroma.com",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  const businessHours = [
    { day: t.contact.hours.weekdays, hours: t.contact.hours.weekdaysTime },
    { day: t.contact.hours.saturday, hours: t.contact.hours.saturdayTime },
    { day: t.contact.hours.sunday, hours: t.contact.hours.sundayTime },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    inquiryType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-navy py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-navy-800/50 text-steel-400 text-sm font-medium rounded-full mb-6">
              {t.contact.hero.label}
            </span>
            <h1 className="text-white mb-6">
              {t.contact.hero.title}
            </h1>
            <p className="text-xl text-navy-200 leading-relaxed">
              {t.contact.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card">
                <h2 className="text-2xl font-semibold text-navy-900 mb-6">{t.contact.form.title}</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-2">{t.contact.form.success.title}</h3>
                    <p className="text-gray-600 mb-6">
                      {t.contact.form.success.message}
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: "", email: "", company: "", inquiryType: "", message: "" });
                      }}
                      className="btn-secondary"
                    >
                      {t.contact.form.success.another}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="label-text">{t.contact.form.name} *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="input-field"
                          placeholder={t.contact.form.namePlaceholder}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="label-text">{t.contact.form.email} *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="input-field"
                          placeholder={t.contact.form.emailPlaceholder}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="label-text">{t.contact.form.company}</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="input-field"
                          placeholder={t.contact.form.companyPlaceholder}
                        />
                      </div>
                      <div>
                        <label htmlFor="inquiryType" className="label-text">{t.contact.form.inquiryType} *</label>
                        <select
                          id="inquiryType"
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleChange}
                          required
                          className="input-field"
                        >
                          <option value="">{t.contact.form.selectOption}</option>
                          {inquiryTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="label-text">{t.contact.form.message} *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="input-field resize-none"
                        placeholder={t.contact.form.messagePlaceholder}
                      />
                    </div>

                    <div className="flex items-center gap-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            {t.contact.form.sending}
                          </>
                        ) : (
                          <>
                            {t.contact.form.submit}
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                          </>
                        )}
                      </button>
                      <p className="text-sm text-gray-500">* {t.contact.form.required}</p>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Contact Details */}
              <div className="card">
                <h3 className="text-lg font-semibold text-navy-900 mb-6">{t.contact.info.title}</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center text-navy-900 flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-semibold text-navy-900 mb-1">{info.title}</p>
                        <p className="text-gray-600 whitespace-pre-line text-sm">{info.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <div className="card">
                <h3 className="text-lg font-semibold text-navy-900 mb-4">{t.contact.hours.title}</h3>
                <div className="space-y-3">
                  {businessHours.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-gray-600">{item.day}</span>
                      <span className="font-medium text-navy-900">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Response */}
              <div className="card bg-navy-900 border-navy-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white">{t.contact.quickResponse.title}</p>
                    <p className="text-navy-300 text-sm">{t.contact.quickResponse.subtitle}</p>
                  </div>
                </div>
                <p className="text-navy-200 text-sm">
                  {t.contact.quickResponse.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">{t.contact.location.label}</span>
            <h2 className="text-navy-900 mt-2 mb-4">{t.contact.location.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.contact.location.description}
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="relative rounded-2xl overflow-hidden shadow-elevated">
            <div className="aspect-[21/9] bg-navy-100 relative">
              <Image
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1400&q=80"
                alt="Map location"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white rounded-2xl shadow-elevated p-6 max-w-md text-center">
                  <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">{t.contact.location.office}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    11/88 Moo 20, Lam Luk Ka<br />
                    Lam Luk Ka District<br />
                    Pathum Thani 12150, Thailand
                  </p>
                  <a
                    href="https://share.google/g0sl6xDJOFESJCe1m"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-accent-500 hover:text-accent-600 font-medium text-sm transition-colors"
                  >
                    {t.contact.location.getDirections}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
