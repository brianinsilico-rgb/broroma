"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

interface FittingProduct {
  slug: string;
  nameKey: string;
  descriptionKey: string;
  image: string;
}

interface FittingSection {
  titleKey: string;
  descriptionKey: string;
  products: FittingProduct[];
}

const fittingSections: FittingSection[] = [
  {
    titleKey: "buttweld",
    descriptionKey: "buttweld",
    products: [
      {
        slug: "buttweld-elbow",
        nameKey: "buttweldElbow",
        descriptionKey: "buttweldElbow",
        image: "/products/fittings-elbow.png",
      },
      {
        slug: "buttweld-tee",
        nameKey: "buttweldTee",
        descriptionKey: "buttweldTee",
        image: "/products/fittings-tee.png",
      },
      {
        slug: "buttweld-reducer",
        nameKey: "buttweldReducer",
        descriptionKey: "buttweldReducer",
        image: "/products/fittings-reducer.png",
      },
      {
        slug: "buttweld-cap",
        nameKey: "buttweldCap",
        descriptionKey: "buttweldCap",
        image: "/products/fittings-cap.png",
      },
      {
        slug: "buttweld-stub-end",
        nameKey: "buttweldStubEnd",
        descriptionKey: "buttweldStubEnd",
        image: "/products/fittings-stub-end.png",
      },
      {
        slug: "buttweld-cross",
        nameKey: "buttweldCross",
        descriptionKey: "buttweldCross",
        image: "/products/fittings-cross.png",
      },
    ],
  },
  {
    titleKey: "forged",
    descriptionKey: "forged",
    products: [
      {
        slug: "forged-coupling",
        nameKey: "forgedCoupling",
        descriptionKey: "forgedCoupling",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      },
      {
        slug: "forged-union",
        nameKey: "forgedUnion",
        descriptionKey: "forgedUnion",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
      },
      {
        slug: "forged-elbow",
        nameKey: "forgedElbow",
        descriptionKey: "forgedElbow",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
      },
      {
        slug: "forged-tee",
        nameKey: "forgedTee",
        descriptionKey: "forgedTee",
        image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=800&q=80",
      },
      {
        slug: "forged-cap",
        nameKey: "forgedCap",
        descriptionKey: "forgedCap",
        image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&q=80",
      },
      {
        slug: "forged-bushing",
        nameKey: "forgedBushing",
        descriptionKey: "forgedBushing",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
      },
    ],
  },
];

export default function FittingsCategoryPage() {
  const { t } = useLanguage();
  const fittings = t.products.fittings;
  const common = t.products.common;

  return (
    <>
      {/* Hero */}
      <section className="gradient-navy pt-11 pb-14 md:pt-14 md:pb-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-navy-300 mb-2">
              <Link href="/" className="hover:text-white transition-colors">{common?.breadcrumb?.home || "Home"}</Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <Link href="/products" className="hover:text-white transition-colors">{common?.breadcrumb?.products || "Products"}</Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-white">{fittings?.hero?.title || "Fittings"}</span>
            </nav>
            <h1 className="text-white text-4xl md:text-5xl font-bold mt-3 mb-4">{fittings?.hero?.title || "Fittings"}</h1>
            <p className="text-base md:text-lg text-navy-200 leading-relaxed">
              {fittings?.hero?.description || "Buttweld and forged fittings for complete piping systems."}
            </p>
          </div>
        </div>
      </section>

      {/* Fitting Sections */}
      {fittingSections.map((section, sectionIndex) => {
        const sectionData = section.titleKey === "buttweld" ? fittings?.buttweld : fittings?.forged;
        return (
          <section
            key={section.titleKey}
            className={`py-8 md:py-12 ${sectionIndex % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
          >
            <div className="container-custom">
              <div className="mb-6">
                <h2 className="text-xl md:text-2xl font-semibold text-navy-900 mb-2">
                  {sectionData?.title || (section.titleKey === "buttweld" ? "Buttweld Fittings" : "Forged Fittings")}
                </h2>
                <p className="text-gray-600 text-sm md:text-base">{sectionData?.description}</p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                {section.products.map((product) => {
                  const productData = fittings?.products?.[product.nameKey as keyof typeof fittings.products];
                  const isLocalProductImage = product.image.startsWith("/");
                  return (
                    <Link key={product.slug} href={`/products/fittings/${product.slug}`} className="group">
                      <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 bg-gray-100">
                        <Image
                          src={product.image}
                          alt={productData?.name || product.nameKey}
                          fill
                          className={isLocalProductImage ? "object-contain p-4 group-hover:scale-105 transition-transform duration-300" : "object-cover group-hover:scale-105 transition-transform duration-300"}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/30 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 flex items-center justify-between">
                          <h3 className="text-white font-semibold text-sm md:text-base">{productData?.name || product.nameKey}</h3>
                          <svg className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA — same size as Pipes */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-navy-900 to-navy-950 rounded-2xl p-6 md:p-10 text-center">
            <h2 className="text-lg font-semibold text-white mb-2 md:text-3xl lg:text-4xl md:mb-4">
              {fittings?.cta?.title || "Need Help Choosing the Right Fitting?"}
            </h2>
            <p className="text-navy-200 text-sm mb-5 max-w-xl mx-auto md:text-lg md:mb-8 md:max-w-2xl">
              {fittings?.cta?.description || "Our technical experts are ready to help you select the optimal fitting for your specific application and requirements."}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn-primary text-sm">{fittings?.cta?.contact || "Contact Our Experts"}</Link>
              <Link href="/services" className="btn-outline border-white text-white hover:bg-white hover:text-navy-900 text-sm">{fittings?.cta?.services || "View Our Services"}</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
