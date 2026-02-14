"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

type TabType = "message" | "call" | "visit";

export default function ContactPage() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<TabType>("message");

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!formRef.current?.checkValidity()) {
      setShowValidation(true);
      const firstInvalid = formRef.current?.querySelector(':invalid') as HTMLElement;
      if (firstInvalid) {
        firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstInvalid.focus();
      }
      return;
    }

    setIsSubmitting(true);
    try {
      const url = typeof window !== "undefined" ? `${window.location.origin}/api/contact` : "/api/contact";
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error((data as { error?: string })?.error ?? "Submit failed");
      }
      setIsSubmitted(true);
      setShowValidation(false);
    } catch {
      setSubmitError(t.contact.form?.error ?? "Something went wrong. Please try again or email us at info@broroma.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setSubmitError(null);
    setShowValidation(false);
    setFormData({ name: "", company: "", email: "", phone: "", message: "" });
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
      {/* Hero — gradient navy with label, title, description */}
      <section className="gradient-navy py-10 sm:py-14 md:py-20 lg:py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-navy-800/50 text-steel-400 text-xs sm:text-sm font-medium rounded-full mb-3 sm:mb-4 md:mb-5">
              {t.contact.hero.label}
            </span>
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              {t.contact.hero.title}
            </h1>
            <p className="text-base md:text-base lg:text-lg text-navy-200 leading-relaxed">
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
        {/* Decorative gradient blobs — stronger accent glow on mobile */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 md:bg-accent-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
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
                <div>
              {/* Send Message Tab */}
              <div className={`${activeTab === "message" ? "" : "hidden"}`}>
                <div className="p-4 sm:p-6 md:p-8">
                  {isSubmitted ? (
                    <div className="text-center py-6 sm:py-8">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-navy-900 mb-2">{t.contact.form.success.title}</h3>
                      <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
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
                      <div className="text-center mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold text-navy-900 mb-2">{t.contact.form.title}</h2>
                        <p className="text-gray-600 text-sm sm:text-base">{t.contact.form.subtitle || "Have a question? Send us a message and we'll get back to you."}</p>
                      </div>
                      {submitError && (
                        <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm space-y-2 sm:space-y-3">
                          <p>{submitError}</p>
                          <a
                            href={`mailto:info@broroma.com?subject=Contact from website&body=${encodeURIComponent(`Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`)}`}
                            className="inline-flex items-center gap-2 font-medium text-accent-600 hover:text-accent-700"
                          >
                            {(t.contact.form as { emailInstead?: string }).emailInstead ?? "Send via email instead"}
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                          </a>
                        </div>
                      )}
                      <form 
                        ref={formRef}
                        onSubmit={handleSubmit} 
                        className={`space-y-4 sm:space-y-6 ${showValidation ? 'show-validation' : ''}`}
                        noValidate
                      >
                        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                          <div>
                            <label htmlFor="name" className="label-text text-sm sm:text-base">{t.contact.form.name} *</label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="input-field text-base"
                              placeholder={t.contact.form.namePlaceholder}
                            />
                          </div>
                          <div>
                            <label htmlFor="company" className="label-text text-sm sm:text-base">{t.contact.form.company} *</label>
                            <input
                              type="text"
                              id="company"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              required
                              className="input-field"
                              placeholder={t.contact.form.companyPlaceholder}
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                          <div>
                            <label htmlFor="email" className="label-text text-sm sm:text-base">{t.contact.form.email} *</label>
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
                          <div>
                            <label htmlFor="phone" className="label-text text-sm sm:text-base">{t.contact.form.phone}</label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="input-field"
                              placeholder={t.contact.form.phonePlaceholder}
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="message" className="label-text text-sm sm:text-base">{t.contact.form.message} *</label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="input-field resize-none text-base py-3 min-h-[120px] sm:min-h-0"
                            placeholder={t.contact.form.messagePlaceholder}
                          />
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-end gap-3 sm:gap-4 pt-2 sm:pt-0">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed py-3 text-sm sm:text-base touch-manipulation"
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
                          <p className="text-xs sm:text-sm text-gray-500">* {t.contact.form.required}</p>
                        </div>
                      </form>
                    </>
                  )}
                </div>
              </div>

              {/* Call Us Tab (Get in Touch) */}
              <div className={`${activeTab === "call" ? "" : "hidden"} md:min-h-[568px]`}>
                <div className="p-4 sm:p-6 md:p-8 h-full">
                  <div className="text-center mb-6 sm:mb-8">
                    <h2 className="text-xl sm:text-2xl font-semibold text-navy-900 mb-2">{t.contact.tabs?.callTitle || "Get in Touch"}</h2>
                    <p className="text-gray-600 text-sm sm:text-base">{t.contact.tabs?.callDescription || "Reach out to us directly via phone or email."}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8 items-start">
                    {/* Phone */}
                    <a 
                      href={`tel:${(t.contact?.info?.phoneValue ?? "+6621234567").replace(/\s/g, "")}`} 
                      className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-gray-50 rounded-xl hover:bg-navy-50 transition-colors group"
                    >
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-navy-100 rounded-xl flex items-center justify-center group-hover:bg-navy-200 transition-colors flex-shrink-0">
                        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-navy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm text-gray-500 mb-1">{t.contact.info.phone}</p>
                        <p className="font-semibold text-navy-900 text-sm sm:text-base truncate">{t.contact?.info?.phoneValue ?? "+66 2 123 4567"}</p>
                      </div>
                    </a>

                    {/* Email */}
                    <a 
                      href="mailto:info@broroma.com" 
                      className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-gray-50 rounded-xl hover:bg-navy-50 transition-colors group"
                    >
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-navy-100 rounded-xl flex items-center justify-center group-hover:bg-navy-200 transition-colors flex-shrink-0">
                        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-navy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm text-gray-500 mb-1">{t.contact.info.email}</p>
                        <p className="font-semibold text-navy-900 text-sm sm:text-base truncate">{t.contact?.info?.emailValue ?? "info@broroma.com"}</p>
                      </div>
                    </a>

                    {/* WeChat */}
                    <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-gray-50 rounded-xl">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#07C160]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#07C160]" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 01.598.082l1.584.926a.272.272 0 00.14.045c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 01-.023-.156.49.49 0 01.201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-7.062-6.122zm-2.036 2.87c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.969-.982z"/>
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm text-gray-500 mb-1">{t.contact.tabs?.wechat || "WeChat"}</p>
                        <p className="font-semibold text-navy-900 text-sm sm:text-base truncate">{t.contact.tabs?.wechatId || "broroma-official"}</p>
                      </div>
                    </div>

                    {/* LINE */}
                    <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-gray-50 rounded-xl">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#00B900]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#00B900]" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm text-gray-500 mb-1">{t.contact.tabs?.line || "LINE"}</p>
                        <p className="font-semibold text-navy-900 text-sm sm:text-base truncate">{t.contact.tabs?.lineId || "@broroma"}</p>
                      </div>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
                    <h3 className="font-semibold text-navy-900 mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-navy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {t.contact.hours.title}
                    </h3>
                    <div className="space-y-1.5 sm:space-y-2">
                      <div className="flex justify-between text-xs sm:text-sm">
                        <span className="text-gray-600">{t.contact.hours.weekdays}</span>
                        <span className="font-medium text-navy-900">{t.contact.hours.weekdaysTime}</span>
                      </div>
                      <div className="flex justify-between text-xs sm:text-sm">
                        <span className="text-gray-600">{t.contact.hours.saturday}</span>
                        <span className="font-medium text-navy-900">{t.contact.hours.saturdayTime}</span>
                      </div>
                      <div className="flex justify-between text-xs sm:text-sm">
                        <span className="text-gray-600">{t.contact.hours.sunday}</span>
                        <span className="font-medium text-navy-900">{t.contact.hours.sundayTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visit Us Tab */}
              <div className={`${activeTab === "visit" ? "" : "hidden"}`}>
                <div>
                  {/* Google Maps Embed */}
                  <div className="h-[300px] sm:h-[400px] w-full rounded-t-2xl overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.8876!2d100.75898852136378!3d13.926552672862147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDU1JzM1LjYiTiAxMDDCsDQ1JzMyLjQiRQ!5e0!3m2!1sen!2sth!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="BROROMA Office Location"
                    />
                  </div>
                  
                  {/* Office Info — 2 columns: left Broroma Office, right Phone + Hours */}
                  <div className="p-5 sm:p-6 md:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      {/* Left: Broroma Office / Address */}
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-accent-500 flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-sm font-semibold text-navy-900 mb-1.5">{t.contact.location.office}</h3>
                          <p className="text-sm text-gray-600 whitespace-pre-line leading-relaxed">
                            {t.contact.location.addressFull?.replace(/, /g, ",\n") ?? "11/88 Moo 20, Lam Luk Ka District, Pathum Thani 12150, Thailand"}
                          </p>
                          <a
                            href="https://maps.google.com/?q=13.926552672862147,100.75898852136378"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-accent-500 hover:text-accent-600 font-medium text-sm mt-2"
                          >
                            {t.contact.location.getDirections}
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>
                      </div>

                      {/* Right: Phone + Business Hours stacked */}
                      <div className="flex flex-col gap-5">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-xl bg-navy-100 flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5 text-navy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-sm font-semibold text-navy-900 mb-1.5">{t.contact.info.phone}</h3>
                            <p className="text-sm text-gray-600">{t.contact?.info?.phoneValue ?? "+66 2 123 4567"}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-xl bg-navy-100 flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5 text-navy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-sm font-semibold text-navy-900 mb-1.5">{t.contact.hours.title}</h3>
                            <div className="text-sm text-gray-600 space-y-1">
                              <p>{t.contact.hours.weekdays}: <span className="font-medium text-navy-900">{t.contact.hours.weekdaysTime}</span></p>
                              <p>{t.contact.hours.saturday}: <span className="font-medium text-navy-900">{t.contact.hours.saturdayTime}</span></p>
                              <p>{t.contact.hours.sunday}: <span className="font-medium text-navy-900">{t.contact.hours.sundayTime}</span></p>
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
          </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {(["message", "call", "visit"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    activeTab === tab 
                      ? "bg-red-500 w-6" 
                      : "bg-red-200 hover:bg-red-300"
                  }`}
                  aria-label={`Go to ${tab} tab`}
                />
              ))}
            </div>

            {/* Browse Products Banner */}
            <div className="mt-8 sm:mt-12 bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 relative overflow-hidden">
              {/* Accent glow */}
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-accent-500/20 rounded-full blur-2xl" />
              
              <div className="text-center md:text-left relative">
                <h3 className="text-white text-base sm:text-lg font-semibold mb-1">{t.contact.quoteCta?.title || "Prefer to Browse First?"}</h3>
                <p className="text-navy-300 text-xs sm:text-sm">{t.contact.quoteCta?.description || "Explore our full product range with detailed specifications."}</p>
              </div>
              <Link 
                href="/products" 
                className="btn-primary whitespace-nowrap relative text-sm sm:text-base"
              >
                {t.contact.quoteCta?.button || "View Products"}
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
