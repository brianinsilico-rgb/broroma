"use client";

import { useState, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface ProductRow {
  id: number;
  category: string;
  details: string;
}

export default function QuotePage() {
  const { t } = useLanguage();
  
  const productCategories = [
    t.quote.categories.pipes,
    t.quote.categories.fittings,
    t.quote.categories.flanges,
    t.quote.categories.tubes,
    t.quote.categories.valves,
    t.quote.categories.accessories,
    t.quote.categories.other,
  ];

  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    specifications: "",
    deliveryDate: "",
  });
  
  const [productRows, setProductRows] = useState<ProductRow[]>([
    { id: 1, category: "", details: "" }
  ]);
  
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const nextRowId = useRef(2);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleProductRowChange = (id: number, field: 'category' | 'details', value: string) => {
    setProductRows(rows => 
      rows.map(row => row.id === id ? { ...row, [field]: value } : row)
    );
  };

  const addProductRow = () => {
    setProductRows(rows => [...rows, { id: nextRowId.current++, category: "", details: "" }]);
  };

  const removeProductRow = (id: number) => {
    if (productRows.length > 1) {
      setProductRows(rows => rows.filter(row => row.id !== id));
    }
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
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: "",
      company: "",
      email: "",
      phone: "",
      specifications: "",
      deliveryDate: "",
    });
    setProductRows([{ id: 1, category: "", details: "" }]);
    nextRowId.current = 2;
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-navy py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-navy-800/50 text-steel-400 text-sm font-medium rounded-full mb-6">
              {t.quote.hero.label}
            </span>
            <h1 className="text-white mb-6">
              {t.quote.hero.title}
            </h1>
            <p className="text-xl text-navy-200 leading-relaxed">
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
                  <form onSubmit={handleSubmit} className="space-y-6">
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

                    {/* Products Section */}
                    <div>
                      <label className="label-text">{t.quote.form.productsNeeded} *</label>
                      <div className="mt-2 space-y-2">
                        {productRows.map((row) => (
                          <div 
                            key={row.id} 
                            className="relative transition-all duration-200"
                          >
                            <div className="flex flex-col md:flex-row border border-gray-300 rounded-lg overflow-hidden focus-within:border-navy-400 focus-within:ring-1 focus-within:ring-navy-400">
                              <select
                                value={row.category}
                                onChange={(e) => handleProductRowChange(row.id, 'category', e.target.value)}
                                required
                                className="w-full md:w-[30%] pl-4 pr-10 py-3 bg-gray-50 border-0 border-b md:border-b-0 md:border-r border-gray-300 text-navy-900 focus:outline-none focus:bg-white appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22%20viewBox%3d%220%200%2020%2020%22%20fill%3d%22%236b7280%22%3e%3cpath%20fill-rule%3d%22evenodd%22%20d%3d%22M5.293%207.293a1%201%200%20011.414%200L10%2010.586l3.293-3.293a1%201%200%20111.414%201.414l-4%204a1%201%200%2001-1.414%200l-4-4a1%201%200%20010-1.414z%22%20clip-rule%3d%22evenodd%22%2f%3e%3c%2fsvg%3e')] bg-[length:1.25rem_1.25rem] bg-[right_0.75rem_center] bg-no-repeat"
                              >
                                <option value="">{t.quote.form.selectCategory}</option>
                                {productCategories.map((category) => (
                                  <option key={category} value={category}>{category}</option>
                                ))}
                              </select>
                              <input
                                type="text"
                                value={row.details}
                                onChange={(e) => handleProductRowChange(row.id, 'details', e.target.value)}
                                required
                                className={`w-full md:w-[70%] px-4 py-3 border-0 text-navy-900 focus:outline-none placeholder:text-gray-400 ${productRows.length > 1 ? 'pr-10' : ''}`}
                                placeholder={t.quote.form.detailsPlaceholder}
                              />
                            </div>
                            {productRows.length > 1 && (
                              <button
                                type="button"
                                onClick={() => removeProductRow(row.id)}
                                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-gray-300 hover:text-red-400 transition-colors"
                                aria-label="Remove product"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </button>
                            )}
                          </div>
                        ))}
                        
                        {/* Add Another Product Button */}
                        <button
                          type="button"
                          onClick={addProductRow}
                          className="inline-flex items-center gap-1.5 text-accent-500 hover:text-accent-600 text-sm font-medium transition-colors pt-1"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                          {t.quote.form.addProduct}
                        </button>
                      </div>
                    </div>

                    {/* Additional Notes / Specifications */}
                    <div>
                      <label htmlFor="specifications" className="label-text">{t.quote.form.additionalNotes}</label>
                      <textarea
                        id="specifications"
                        name="specifications"
                        value={formData.specifications}
                        onChange={handleChange}
                        rows={4}
                        className="input-field resize-none"
                        placeholder={t.quote.form.additionalNotesPlaceholder}
                      />
                    </div>

                    {/* Delivery Date */}
                    <div className="md:w-1/2">
                      <label htmlFor="deliveryDate" className="label-text">{t.quote.form.deliveryDate}</label>
                      <input
                        type="date"
                        id="deliveryDate"
                        name="deliveryDate"
                        value={formData.deliveryDate}
                        onChange={handleChange}
                        className="input-field"
                      />
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
                    <div className="flex items-center gap-4 pt-4">
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
