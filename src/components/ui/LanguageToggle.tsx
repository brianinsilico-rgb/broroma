"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "th" : "en")}
      className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-navy-700 hover:text-navy-900 transition-colors duration-200 rounded-lg hover:bg-gray-100"
      aria-label="Toggle language"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
      <span className={language === "en" ? "font-bold" : ""}>EN</span>
      <span className="text-gray-400">|</span>
      <span className={language === "th" ? "font-bold" : ""}>ไทย</span>
    </button>
  );
}
