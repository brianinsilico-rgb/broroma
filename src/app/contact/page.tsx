"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

type TabType = "message" | "call" | "visit";

export default function ContactPage() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<TabType>("message");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showValidation, setShowValidation] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Clear validation styling when clicking outside the form
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (showValidation && formRef.current && !formRef.current.contains(e.target as Node)) {
        setShowValidation(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showValidation]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if form is valid
    if (!formRef.current?.checkValidity()) {
      setShowValidation(true);
      
      // Find first invalid field and scroll to it
      const firstInvalid = formRef.current?.querySelector(':invalid') as HTMLElement;
      if (firstInvalid) {
        firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstInvalid.focus();
      }
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setShowValidation(false);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setShowValidation(false);
    setFormData({ name: "", email: "", message: "" });
  };

  const tabs = [
    {
      id: "message" as TabType,
      label: t.contact.tabs?.message || "Send Message",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: "call" as TabType,
      label: t.contact.tabs?.call || "Call Us",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      id: "visit" as TabType,
      label: t.contact.tabs?.visit || "Visit Us",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-navy py-20 md:py-28 relative overflow-hidden">
        {/* Decorative accent glow */}
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="container-custom relative">
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

      {/* Tab-Based Contact Section */}
      <section className="pt-10 pb-12 bg-gray-50 relative overflow-hidden">
        {/* Subtle dot pattern */}
        <div 
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `radial-gradient(circle, #94a3b8 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
        {/* Decorative gradient blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-navy-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex bg-white rounded-xl p-1.5 shadow-soft">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center justify-center gap-2 w-14 sm:w-36 py-3 rounded-lg font-medium text-sm transition-all duration-200 ${
                      activeTab === tab.id
                        ? "bg-navy-900 text-white shadow-md"
                        : "text-gray-600 hover:text-navy-900 hover:bg-gray-50"
                    }`}
                  >
                    {tab.icon}
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content with Arrow Navigation */}
            <div className="relative">
              {/* Left Arrow - hidden on first tab */}
              {activeTab !== "message" && (
                <button
                  onClick={() => {
                    const tabs: TabType[] = ["message", "call", "visit"];
                    const currentIndex = tabs.indexOf(activeTab);
                    if (currentIndex > 0) setActiveTab(tabs[currentIndex - 1]);
                  }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-6 z-10 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-400 hover:text-navy-900 hover:shadow-lg transition-all"
                  aria-label="Previous tab"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}

              {/* Right Arrow - hidden on last tab */}
              {activeTab !== "visit" && (
                <button
                  onClick={() => {
                    const tabs: TabType[] = ["message", "call", "visit"];
                    const currentIndex = tabs.indexOf(activeTab);
                    if (currentIndex < tabs.length - 1) setActiveTab(tabs[currentIndex + 1]);
                  }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-6 z-10 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-400 hover:text-navy-900 hover:shadow-lg transition-all"
                  aria-label="Next tab"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}

              <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
                <div className="grid">
              {/* Send Message Tab */}
              <div className={`col-start-1 row-start-1 transition-opacity duration-200 ${activeTab === "message" ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                <div className="p-8">
                  {isSubmitted ? (
                    <div className="text-center py-8">
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
                        onClick={resetForm}
                        className="btn-secondary"
                      >
                        {t.contact.form.success.another}
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="text-center mb-8">
                        <h2 className="text-2xl font-semibold text-navy-900 mb-2">{t.contact.form.title}</h2>
                        <p className="text-gray-600">{t.contact.form.subtitle || "Have a question? Send us a message and we'll get back to you."}</p>
                      </div>
                      <form 
                        ref={formRef}
                        onSubmit={handleSubmit} 
                        className={`space-y-6 ${showValidation ? 'show-validation' : ''}`}
                        noValidate
                      >
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

                        <div>
                          <label htmlFor="message" className="label-text">{t.contact.form.message} *</label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="input-field resize-none"
                            placeholder={t.contact.form.messagePlaceholder}
                          />
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-end gap-4">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
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
                                <svg className="w-5 h-5 ml-2 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                              </>
                            )}
                          </button>
                          <p className="text-sm text-gray-500 mt-2 sm:mt-0">* {t.contact.form.required}</p>
                        </div>
                      </form>
                    </>
                  )}
                </div>
              </div>

              {/* Call Us Tab */}
              <div className={`col-start-1 row-start-1 transition-opacity duration-200 ${activeTab === "call" ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                <div className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-semibold text-navy-900 mb-2">{t.contact.tabs?.callTitle || "Get in Touch"}</h2>
                    <p className="text-gray-600">{t.contact.tabs?.callDescription || "Reach out to us directly via phone or email."}</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {/* Phone */}
                    <a 
                      href="tel:+17135550192" 
                      className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl hover:bg-navy-50 transition-colors group"
                    >
                      <div className="w-14 h-14 bg-navy-100 rounded-xl flex items-center justify-center group-hover:bg-navy-200 transition-colors">
                        <svg className="w-7 h-7 text-navy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">{t.contact.info.phone}</p>
                        <p className="font-semibold text-navy-900">+1 (713) 555-0192</p>
                        <p className="text-gray-600">+1 (713) 555-0193</p>
                      </div>
                    </a>

                    {/* Email */}
                    <a 
                      href="mailto:info@broroma.com" 
                      className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl hover:bg-navy-50 transition-colors group"
                    >
                      <div className="w-14 h-14 bg-navy-100 rounded-xl flex items-center justify-center group-hover:bg-navy-200 transition-colors">
                        <svg className="w-7 h-7 text-navy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">{t.contact.info.email}</p>
                        <p className="font-semibold text-navy-900">info@broroma.com</p>
                        <p className="text-gray-600">sales@broroma.com</p>
                      </div>
                    </a>
                  </div>

                  {/* Business Hours */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="font-semibold text-navy-900 mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-navy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {t.contact.hours.title}
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">{t.contact.hours.weekdays}</span>
                        <span className="font-medium text-navy-900">{t.contact.hours.weekdaysTime}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">{t.contact.hours.saturday}</span>
                        <span className="font-medium text-navy-900">{t.contact.hours.saturdayTime}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">{t.contact.hours.sunday}</span>
                        <span className="font-medium text-navy-900">{t.contact.hours.sundayTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visit Us Tab */}
              <div className={`col-start-1 row-start-1 transition-opacity duration-200 ${activeTab === "visit" ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                <div>
                  {/* Map */}
                  <div className="aspect-[21/9] bg-navy-100 relative">
                    <Image
                      src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1400&q=80"
                      alt="Map location"
                      fill
                      className="object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                  </div>
                  
                  {/* Address Info */}
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="flex-1">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-navy-900 mb-2">{t.contact.location.office}</h3>
                            <p className="text-gray-600 mb-4">
                              11/88 Moo 20, Lam Luk Ka<br />
                              Lam Luk Ka District<br />
                              Pathum Thani 12150, Thailand
                            </p>
                            <a
                              href="https://share.google/g0sl6xDJOFESJCe1m"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-accent-500 hover:text-accent-600 font-medium transition-colors"
                            >
                              {t.contact.location.getDirections}
                              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                      
                      {/* Quick Info */}
                      <div className="md:w-64 bg-gray-50 rounded-xl p-5">
                        <h4 className="font-semibold text-navy-900 mb-3 text-sm">{t.contact.hours.title}</h4>
                        <div className="space-y-1.5 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">{t.contact.hours.weekdays}</span>
                            <span className="font-medium text-navy-900">{t.contact.hours.weekdaysTime}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">{t.contact.hours.saturday}</span>
                            <span className="font-medium text-navy-900">{t.contact.hours.saturdayTime}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">{t.contact.hours.sunday}</span>
                            <span className="font-medium text-navy-900">{t.contact.hours.sundayTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                </div>
              </div>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {(["message", "call", "visit"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    activeTab === tab 
                      ? "bg-navy-900 w-6" 
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to ${tab} tab`}
                />
              ))}
            </div>

            {/* Need a Quote Banner */}
            <div className="mt-12 bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 relative overflow-hidden">
              {/* Accent glow */}
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-accent-500/20 rounded-full blur-2xl" />
              
              <div className="text-center md:text-left relative">
                <h3 className="text-white text-lg font-semibold mb-1">{t.contact.quoteCta?.title || "Need a Product Quote?"}</h3>
                <p className="text-navy-300 text-sm">{t.contact.quoteCta?.description || "Get pricing for pipes, fittings, valves, and more."}</p>
              </div>
              <Link 
                href="/quote" 
                className="btn-primary whitespace-nowrap relative"
              >
                {t.contact.quoteCta?.button || "Request a Quote"}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
