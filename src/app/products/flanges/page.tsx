"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const flangeImages: Record<string, string> = {
  "weld-neck": "/flanges/weld-neck.png",
  "slip-on": "/flanges/slip-on.png",
  blind: "/flanges/blind.png",
  "socket-weld": "/flanges/socket-weld.png",
  threaded: "/flanges/threaded.png",
  "lap-joint": "/flanges/lap-joint.png",
};

export default function FlangesCategoryPage() {
  const { t } = useLanguage();
  const { hero, cta, products } = t.products.flanges;

  return (
    <>
      <section className="gradient-navy pt-11 pb-14 md:pt-14 md:pb-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-navy-300 mb-2">
              <Link href="/" className="hover:text-white transition-colors">{t.nav.home}</Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/products" className="hover:text-white transition-colors">{t.nav.products}</Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">{hero.title}</span>
            </nav>
            <h1 className="text-white text-4xl md:text-5xl font-bold mt-3 mb-4">{hero.title}</h1>
            <p className="text-base md:text-lg text-navy-200 leading-relaxed">{hero.description}</p>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {products.map((product: { slug: string; name: string; description: string }) => (
              <Link key={product.slug} href={`/products/flanges/${product.slug}`} className="group">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-navy-200 transition-all duration-300">
                  <Image src={flangeImages[product.slug] ?? ""} alt={product.name} fill className="object-contain p-4 md:p-6 group-hover:scale-[1.02] transition-transform duration-300" />
                  <div className="absolute inset-x-0 bottom-0 p-3 md:p-4 bg-gradient-to-t from-navy-900/95 to-transparent flex items-center justify-between">
                    <h3 className="text-white font-semibold text-sm md:text-base">{product.name}</h3>
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-white/90 group-hover:translate-x-1 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-gray-50">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-navy-900 to-navy-950 rounded-2xl p-6 md:p-10 text-center">
            <h2 className="text-lg font-semibold text-white mb-2 md:text-3xl lg:text-4xl md:mb-4">{cta.title}</h2>
            <p className="text-navy-200 text-sm mb-5 max-w-xl mx-auto md:text-lg md:mb-8 md:max-w-2xl">{cta.description}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn-primary text-sm">{cta.contact}</Link>
              <Link href="/services" className="btn-outline border-white text-white hover:bg-white hover:text-navy-900 text-sm">{cta.services}</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
