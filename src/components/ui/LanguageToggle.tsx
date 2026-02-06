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
      <span className={language === "en" ? "font-bold" : ""}>EN</span>
      <span className="text-gray-400">|</span>
      <span className={language === "th" ? "font-bold" : ""}>ไทย</span>
    </button>
  );
}
