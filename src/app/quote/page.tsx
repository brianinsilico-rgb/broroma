"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function QuotePage() {
  const { t } = useLanguage();
  
  const productCategories = [
    { id: "pipes", label: t.quote.categories.pipes },
    { id: "fittings", label: t.quote.categories.fittings },
    { id: "flanges", label: t.quote.categories.flanges },
    { id: "tubes", label: t.quote.categories.tubes },
    { id: "valves", label: t.quote.categories.valves },
    { id: "accessories", label: t.quote.categories.accessories },
    { id: "other", label: t.quote.categories.other },
  ];

  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    productCategory: "",
    specifications: "",
  });
  
  const [deliveryDate, setDeliveryDate] = useState<Date | null>(null);
  
  const [preferredOrigins, setPreferredOrigins] = useState<string[]>([]);
  
  const originOptions = [
    { id: "china", label: t.quote.form.origins.china },
    { id: "japan", label: t.quote.form.origins.japan },
    { id: "korea", label: t.quote.form.origins.korea },
    { id: "europe", label: t.quote.form.origins.europe },
    { id: "usa", label: t.quote.form.origins.usa },
    { id: "india", label: t.quote.form.origins.india },
    { id: "noPreference", label: t.quote.form.origins.noPreference },
  ];
  
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showValidation, setShowValidation] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
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

  const handleOriginChange = (originId: string) => {
    setPreferredOrigins(prev => {
      if (prev.includes(originId)) {
        return prev.filter(id => id !== originId);
      } else {
        return [...prev, originId];
      }
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
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
    setFormData({
      fullName: "",
      company: "",
      email: "",
      phone: "",
      productCategory: "",
      specifications: "",
    });
    setDeliveryDate(null);
    setPreferredOrigins([]);
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-navy py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-navy-800/50 text-steel-400 text-sm font-medium rounded-full mb-6">
              {t.quote.hero.label}
            </span>
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {t.quote.hero.title}
            </h1>
            <p className="text-base md:text-lg text-navy-200 leading-relaxed">
              {t.quote.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Quote Form */}
            <div className="lg:col-span-2">
              <div className="card">
                <h2 className="text-2xl font-semibold text-navy-900 mb-6">{t.quote.form.title}</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-2">{t.quote.form.success.title}</h3>
                    <p className="text-gray-600 mb-6">
                      {t.quote.form.success.message}
                    </p>
                    <button
                      onClick={resetForm}
                      className="btn-secondary"
                    >
                      {t.quote.form.success.another}
                    </button>
                  </div>
                ) : (
                  <form 
                    ref={formRef}
                    onSubmit={handleSubmit} 
                    className={`space-y-6 ${showValidation ? 'show-validation' : ''}`}
                    noValidate
                  >
                    {/* Row 1: Full Name & Company Name */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="fullName" className="label-text">{t.quote.form.fullName} *</label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          className="input-field"
                          placeholder={t.quote.form.fullNamePlaceholder}
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="label-text">{t.quote.form.company} *</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required
                          className="input-field"
                          placeholder={t.quote.form.companyPlaceholder}
                        />
                      </div>
                    </div>

                    {/* Row 2: Email & Phone */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="label-text">{t.quote.form.email} *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="input-field"
                          placeholder={t.quote.form.emailPlaceholder}
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="label-text">{t.quote.form.phone} *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="input-field"
                          placeholder={t.quote.form.phonePlaceholder}
                        />
                      </div>
                    </div>

                    {/* Primary Product Category */}
                    <div>
                      <label htmlFor="productCategory" className="label-text">{t.quote.form.productCategory} *</label>
                      <select
                        id="productCategory"
                        name="productCategory"
                        value={formData.productCategory}
                        onChange={handleChange}
                        required
                        className="input-field appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22%20fill%3d%22none%22%20viewBox%3d%220%200%2024%2024%22%20stroke%3d%22%236b7280%22%20stroke-width%3d%221.5%22%3e%3cpath%20stroke-linecap%3d%22round%22%20stroke-linejoin%3d%22round%22%20d%3d%22M19%209l-7%207-7-7%22%2f%3e%3c%2fsvg%3e')] bg-[length:1.25rem_1.25rem] bg-[right_1rem_center] bg-no-repeat pr-12"
                      >
                        <option value="">{t.quote.form.selectCategory}</option>
                        {productCategories.map((category) => (
                          <option key={category.id} value={category.id}>{category.label}</option>
                        ))}
                      </select>
                      <p className="text-sm text-gray-500 mt-2">{t.quote.form.categoryHelper}</p>
                    </div>

                    {/* Specifications / Details */}
                    <div>
                      <label htmlFor="specifications" className="label-text">{t.quote.form.specifications} *</label>
                      <textarea
                        id="specifications"
                        name="specifications"
                        value={formData.specifications}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="input-field resize-none"
                        placeholder={t.quote.form.specificationsPlaceholder}
                      />
                    </div>

                    {/* Preferred Origin */}
                    <div>
                      <label className="label-text">{t.quote.form.preferredOrigin}</label>
                      <div className="mt-2 flex flex-wrap gap-x-6 gap-y-3">
                        {originOptions.map((origin) => (
                          <label
                            key={origin.id}
                            className="inline-flex items-center gap-2 cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              checked={preferredOrigins.includes(origin.id)}
                              onChange={() => handleOriginChange(origin.id)}
                              className="w-4 h-4 rounded border-gray-300 text-accent-500 focus:ring-accent-500 focus:ring-offset-0 cursor-pointer"
                            />
                            <span className="text-sm text-navy-800">{origin.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Delivery Date */}
                    <div className="w-full max-w-[280px]">
                      <label htmlFor="deliveryDate" className="label-text">{t.quote.form.deliveryDate}</label>
                      <div className="relative datepicker-wrapper">
                        <DatePicker
                          selected={deliveryDate}
                          onChange={(date: Date | null) => setDeliveryDate(date)}
                          dateFormat="dd/MM/yyyy"
                          minDate={new Date()}
                          placeholderText={t.quote.form.deliveryDatePlaceholder}
                          className="input-field w-full"
                          calendarClassName="custom-datepicker"
                          showPopperArrow={false}
                          popperPlacement="bottom-start"
                          wrapperClassName="w-full"
                          popperProps={{ strategy: "fixed" }}
                        />
                        <div className="datepicker-icon">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* File Upload */}
                    <div>
                      <label className="label-text">{t.quote.form.uploadFile}</label>
                      <div className="mt-2">
                        <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-navy-400 transition-colors">
                          {selectedFile ? (
                            <div className="flex items-center justify-center gap-3">
                              <svg className="w-8 h-8 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                              <div className="text-left">
                                <p className="font-medium text-navy-900">{selectedFile.name}</p>
                                <p className="text-sm text-gray-500">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                              </div>
                              <button
                                type="button"
                                onClick={handleRemoveFile}
                                className="ml-4 p-1 text-gray-400 hover:text-red-500 transition-colors"
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </button>
                            </div>
                          ) : (
                            <>
                              <svg className="w-10 h-10 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                              </svg>
                              <label htmlFor="file-upload" className="cursor-pointer">
                                <span className="text-accent-500 hover:text-accent-600 font-medium">{t.quote.form.chooseFile}</span>
                                <span className="text-gray-600"> {t.quote.form.orDragDrop}</span>
                              </label>
                              <input
                                ref={fileInputRef}
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                className="sr-only"
                                accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                                onChange={handleFileChange}
                              />
                              <p className="text-sm text-gray-500 mt-2">{t.quote.form.fileTypes}</p>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex items-end gap-4 pt-4">
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
                            {t.quote.form.submitting}
                          </>
                        ) : (
                          <>
                            {t.quote.form.submit}
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </>
                        )}
                      </button>
                      <p className="text-sm text-gray-500">* {t.quote.form.required}</p>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Quick Response Card */}
              <div className="card bg-navy-900 border-navy-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white">{t.quote.sidebar.quickResponse.title}</p>
                    <p className="text-navy-300 text-sm">{t.quote.sidebar.quickResponse.subtitle}</p>
                  </div>
                </div>
                <p className="text-navy-200 text-sm">
                  {t.quote.sidebar.quickResponse.description}
                </p>
              </div>

              {/* What to Include */}
              <div className="card">
                <h3 className="text-lg font-semibold text-navy-900 mb-4">{t.quote.sidebar.whatToInclude.title}</h3>
                <ul className="space-y-3">
                  {[
                    t.quote.sidebar.whatToInclude.item1,
                    t.quote.sidebar.whatToInclude.item2,
                    t.quote.sidebar.whatToInclude.item3,
                    t.quote.sidebar.whatToInclude.item4,
                    t.quote.sidebar.whatToInclude.item5,
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Need Help? */}
              <div className="card bg-gray-50 border-gray-200">
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{t.quote.sidebar.needHelp.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {t.quote.sidebar.needHelp.description}
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center text-accent-500 hover:text-accent-600 font-medium text-sm transition-colors"
                >
                  {t.quote.sidebar.needHelp.contactLink}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
