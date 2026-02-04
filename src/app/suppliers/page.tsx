"use client";

import Link from "next/link";

interface Supplier {
  name: string;
  country: string;
}

const suppliers: Supplier[] = [
  { name: "Nippon Steel", country: "Japan" },
  { name: "POSCO", country: "South Korea" },
  { name: "Baosteel", country: "China" },
  { name: "ArcelorMittal", country: "Luxembourg" },
  { name: "Tenaris", country: "Argentina" },
  { name: "Vallourec", country: "France" },
  { name: "Sumitomo Metal", country: "Japan" },
  { name: "JFE Steel", country: "Japan" },
  { name: "Hyundai Steel", country: "South Korea" },
  { name: "Tata Steel", country: "India" },
  { name: "Nucor", country: "USA" },
  { name: "SSAB", country: "Sweden" },
  { name: "Voestalpine", country: "Austria" },
  { name: "Salzgitter", country: "Germany" },
  { name: "Severstal", country: "Russia" },
  { name: "Kobe Steel", country: "Japan" },
  { name: "Thyssenkrupp", country: "Germany" },
  { name: "Sandvik", country: "Sweden" },
  { name: "Tubacex", country: "Spain" },
  { name: "DMV Stainless", country: "Netherlands" },
];

export default function SuppliersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-navy py-16 md:py-24">
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-navy-300 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white">Suppliers</span>
          </nav>

          {/* Title */}
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">Our Suppliers</h1>
            <p className="text-xl text-navy-200 leading-relaxed">
              We partner with leading manufacturers worldwide to deliver quality products 
              that meet the highest industry standards.
            </p>
          </div>
        </div>
      </section>

      {/* Suppliers Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">Global Network</span>
            <h2 className="text-navy-900 mt-2 mb-4">Trusted Manufacturing Partners</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our extensive network of suppliers ensures we can source the right products 
              for any application, backed by quality certifications and reliable delivery.
            </p>
          </div>

          {/* Supplier Cards Grid - 5 columns desktop, 3 tablet, 2 mobile */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {suppliers.map((supplier) => (
              <div
                key={supplier.name}
                className="group p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-elevated transition-all duration-300 flex flex-col items-center text-center"
              >
                {/* Logo Placeholder */}
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-200 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gray-100 transition-colors">
                  <span className="text-gray-400 text-xs font-medium uppercase tracking-wide">Logo</span>
                </div>
                
                {/* Company Name */}
                <h3 className="text-sm md:text-base font-semibold text-navy-900 mb-1 group-hover:text-accent-500 transition-colors">
                  {supplier.name}
                </h3>
                
                {/* Country */}
                <p className="text-xs md:text-sm text-gray-500">
                  {supplier.country}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-navy-900 to-navy-950 rounded-3xl p-8 md:p-12 lg:p-16 text-center">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
              Looking for a Specific Manufacturer?
            </h2>
            <p className="text-navy-200 text-lg mb-8 max-w-2xl mx-auto">
              Our sourcing team can help you find products from manufacturers not listed here. 
              Contact us with your requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Contact Our Team
              </Link>
              <Link href="/products" className="btn-outline border-white text-white hover:bg-white hover:text-navy-900">
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
