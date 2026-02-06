"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

interface Client {
  name: string;
  logo: string;
}

const clients: Client[] = [
  { name: "PTT", logo: "/logos/ptt.svg" },
  { name: "Dok Bua", logo: "/logos/dokbua.svg" },
  { name: "Gulf", logo: "/logos/gulf.svg" },
  { name: "SCG", logo: "/logos/scg.svg" },
  { name: "Lin", logo: "/logos/lin.svg" },
  { name: "EGAT", logo: "/logos/egat.svg" },
  { name: "TPIPL", logo: "/logos/tpipl.svg" },
  { name: "Mitrphol", logo: "/logos/mitrphol.svg" },
];

interface TrustedByProps {
  className?: string;
}

export default function TrustedBy({ className = "" }: TrustedByProps) {
  const { t } = useLanguage();
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const trustedByTitle = (t.home as any)?.trustedBy?.title || "Trusted By Industry Leaders";

  return (
    <section className={`py-12 md:py-16 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="container-custom relative">
        {/* Section Title */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-semibold">
            {trustedByTitle}
          </h2>
        </div>

        {/* Logo Grid - 4 columns on desktop, 2 columns on mobile/tablet */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center h-14 md:h-16 lg:h-18"
            >
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                width={112}
                height={56}
                className="w-20 h-10 md:w-24 md:h-12 lg:w-28 lg:h-14 object-contain opacity-70 hover:opacity-100 transition-all duration-300 ease-out brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
