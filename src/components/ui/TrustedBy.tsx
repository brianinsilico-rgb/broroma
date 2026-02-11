"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

interface Client {
  name: string;
  logo: string;
  scale?: number; // 1 = default, 0.85 = 15% smaller, 1.2 = 20% larger
}

const clients: Client[] = [
  { name: "PTT", logo: "/logos/ptt.svg" },
  { name: "EGAT", logo: "/logos/egat.svg", scale: 1.25 },
  { name: "Gulf", logo: "/logos/gulf.svg", scale: 1.04 },        // 0.8 * 1.3 = 1.04 (30% bigger)
  { name: "SCG", logo: "/logos/scg.svg", scale: 1.045 },         // 0.95 * 1.1 = 1.045 (10% bigger)
  { name: "ACE", logo: "/logos/ace.svg", scale: 0.75 },
  { name: "TPI Polene", logo: "/logos/tpi-polene.png", scale: 1.5 },
  { name: "B.Grimm", logo: "/logos/bgrimm.png", scale: 1.09 },   // 0.95 * 1.15 = 1.09 (15% bigger)
  { name: "TGE", logo: "/logos/tge.png", scale: 1.35 },
];

interface TrustedByProps {
  className?: string;
}

export default function TrustedBy({ className = "" }: TrustedByProps) {
  const { t } = useLanguage();
  
  const trustedByTitle = t.home.trustedBy?.title ?? "Trusted By Industry Leaders";

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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-5 gap-x-4 md:gap-5 lg:gap-6">
          {clients.map((client) => {
            const scale = client.scale || 1;
            const mobileMaxW = Math.round(100 * scale);
            const mobileMaxH = Math.round(40 * scale);
            const desktopMaxW = Math.round(110 * scale);
            const desktopMaxH = Math.round(44 * scale);
            
            return (
              <div
                key={client.name}
                className="flex items-center justify-center h-14 md:h-16"
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={desktopMaxW}
                  height={desktopMaxH}
                  className="w-auto h-auto object-contain opacity-60 hover:opacity-80 transition-all duration-300 ease-out grayscale brightness-150"
                  style={{
                    maxWidth: `clamp(${mobileMaxW}px, 10vw, ${desktopMaxW}px)`,
                    maxHeight: `clamp(${mobileMaxH}px, 5vw, ${desktopMaxH}px)`,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
