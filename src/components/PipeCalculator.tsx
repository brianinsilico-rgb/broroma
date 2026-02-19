"use client";

import { useState, useMemo, useEffect, useRef } from "react";

interface PipeOD {
  mm: number;
  nps: string;
}

const OD_LIST: PipeOD[] = [
  { mm: 21.3, nps: '1/2"' },
  { mm: 26.7, nps: '3/4"' },
  { mm: 33.4, nps: '1"' },
  { mm: 42.2, nps: '1 1/4"' },
  { mm: 48.3, nps: '1 1/2"' },
  { mm: 60.3, nps: '2"' },
  { mm: 73.0, nps: '2 1/2"' },
  { mm: 88.9, nps: '3"' },
  { mm: 101.6, nps: '3 1/2"' },
  { mm: 114.3, nps: '4"' },
  { mm: 141.3, nps: '5"' },
  { mm: 168.3, nps: '6"' },
  { mm: 219.1, nps: '8"' },
  { mm: 273.1, nps: '10"' },
  { mm: 323.9, nps: '12"' },
  { mm: 355.6, nps: '14"' },
  { mm: 406.4, nps: '16"' },
  { mm: 457.2, nps: '18"' },
  { mm: 508.0, nps: '20"' },
  { mm: 609.6, nps: '24"' },
];

const ALL_WTS = [
  2.8, 3.2, 3.7, 3.91, 4.0, 4.8, 5.16, 5.2, 5.49, 5.5, 5.54, 5.74, 6.0,
  6.02, 6.4, 6.55, 7.0, 7.01, 7.11, 7.62, 7.9, 8.08, 8.18, 8.4, 8.56, 8.7,
  8.74, 9.27, 9.5, 9.52, 9.53, 10.3, 10.97, 11.0, 11.07, 11.13, 12.7, 12.70,
  13.49, 14.02, 14.3, 15.09, 15.24, 15.88, 15.9, 17.48, 17.5, 18.26, 19.1,
  20.6, 22.2, 23.01, 25.4, 28.58,
];

const UNIQUE_WTS = [...new Set(ALL_WTS)].sort((a, b) => a - b);

const SMYS: Record<string, number> = {
  "Grade B": 241,
  X42: 290,
  X46: 317,
  X52: 359,
  X56: 386,
  X60: 414,
  X65: 448,
  X70: 483,
  X80: 552,
};

const GRADES = Object.keys(SMYS);

const SCHEDULE_MAP: Record<string, Record<number, number>> = {
  "SCH 40": {
    60.3: 3.91, 73.0: 5.16, 88.9: 5.49, 101.6: 5.74, 114.3: 6.02,
    141.3: 6.55, 168.3: 7.11, 219.1: 8.18, 273.1: 9.27, 323.9: 9.52,
    355.6: 9.52, 406.4: 9.52,
  },
  "SCH 80": {
    60.3: 5.54, 73.0: 7.01, 88.9: 7.62, 101.6: 8.08, 114.3: 8.56,
    141.3: 9.52, 168.3: 10.97, 219.1: 12.70, 273.1: 15.09, 323.9: 17.48,
  },
  "SCH 160": {
    60.3: 8.74, 73.0: 9.53, 88.9: 11.13, 101.6: 13.49, 114.3: 13.49,
    141.3: 15.88, 168.3: 18.26, 219.1: 23.01, 273.1: 28.58,
  },
  XXS: {
    60.3: 11.07, 73.0: 14.02, 88.9: 15.24,
  },
};

function isWTValid(od: number, wt: number): boolean {
  const ratio = wt / od;
  return ratio >= 0.025 && ratio <= 0.30;
}

function findSchedule(od: number, wt: number): string | null {
  for (const [name, map] of Object.entries(SCHEDULE_MAP)) {
    const schedWT = map[od];
    if (schedWT !== undefined && Math.abs(schedWT - wt) <= 0.1) {
      return name;
    }
  }
  return null;
}

function getScheduleLabel(od: number, wt: number): string {
  return findSchedule(od, wt) ?? "";
}

function getValidWTs(od: number): number[] {
  return UNIQUE_WTS.filter((wt) => isWTValid(od, wt));
}

export interface PipeCalculatorValues {
  od: number;
  wt: number;
  grade: string | null;
}

interface PipeCalculatorProps {
  externalValues?: PipeCalculatorValues | null;
}

export default function PipeCalculator({ externalValues }: PipeCalculatorProps) {
  const [selectedOD, setSelectedOD] = useState(168.3);
  const [selectedWT, setSelectedWT] = useState(7.11);
  const [selectedGrade, setSelectedGrade] = useState("Grade B");
  const [isFlashing, setIsFlashing] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!externalValues) return;

    setSelectedOD(externalValues.od);

    const newValidWTs = getValidWTs(externalValues.od);
    if (newValidWTs.includes(externalValues.wt)) {
      setSelectedWT(externalValues.wt);
    } else {
      setSelectedWT(newValidWTs[0] ?? 2.8);
    }

    if (externalValues.grade && GRADES.includes(externalValues.grade)) {
      setSelectedGrade(externalValues.grade);
    }

    setIsFlashing(true);
    const timer = setTimeout(() => setIsFlashing(false), 1200);
    return () => clearTimeout(timer);
  }, [externalValues]);

  const validWTs = useMemo(() => getValidWTs(selectedOD), [selectedOD]);

  const results = useMemo(() => {
    const od = selectedOD;
    const wt = selectedWT;
    const smys = SMYS[selectedGrade];

    const weightPerM = (od - wt) * wt * 0.02466;
    const id = od - 2 * wt;
    const steelArea = (Math.PI / 4) * (od * od - id * id) / 100;
    const designFactor = 0.72;
    const pressureMPa = (2 * smys * wt * designFactor) / od;
    const pressurePsi = pressureMPa * 145.038;
    const schedule = findSchedule(od, wt);

    return {
      weightPerM,
      weight6m: weightPerM * 6,
      weight12m: weightPerM * 12,
      pressureMPa,
      pressurePsi,
      id,
      steelArea,
      schedule: schedule ?? "Non-standard",
    };
  }, [selectedOD, selectedWT, selectedGrade]);

  const handleODChange = (newOD: number) => {
    setSelectedOD(newOD);
    const newValidWTs = getValidWTs(newOD);
    if (!newValidWTs.includes(selectedWT)) {
      setSelectedWT(newValidWTs[0] ?? 2.8);
    }
  };

  const currentOD = OD_LIST.find((o) => o.mm === selectedOD);

  return (
    <section id="pipe-calculator" className="relative bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <h2 className="text-xl md:text-2xl font-semibold text-navy-900 mb-1.5">
          Weight &amp; Pressure Calculator
        </h2>
        <p className="text-gray-600 text-sm md:text-base max-w-3xl mb-5">
          Calculate pipe weight and maximum working pressure based on your specifications.
        </p>

        <div className="grid md:grid-cols-2 gap-5 md:gap-8 md:items-stretch">
          {/* Left — Inputs */}
          <div className="flex flex-col justify-between">
            <div>
              <label className="block mb-1 text-[11px] font-semibold text-gray-500 uppercase tracking-wide">
                Outside Diameter
              </label>
              <select
                value={selectedOD}
                onChange={(e) => handleODChange(Number(e.target.value))}
                className="w-full rounded-lg text-sm text-navy-900 bg-white border border-gray-200 outline-none transition-colors appearance-none cursor-pointer focus:border-navy-400 focus:ring-1 focus:ring-navy-300"
                style={{ padding: "10px 14px" }}
              >
                {OD_LIST.map((od) => (
                  <option key={od.mm} value={od.mm}>
                    {od.mm} mm — {od.nps}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-1 text-[11px] font-semibold text-gray-500 uppercase tracking-wide">
                Wall Thickness
              </label>
              <select
                value={selectedWT}
                onChange={(e) => setSelectedWT(Number(e.target.value))}
                className="w-full rounded-lg text-sm text-navy-900 bg-white border border-gray-200 outline-none transition-colors appearance-none cursor-pointer focus:border-navy-400 focus:ring-1 focus:ring-navy-300"
                style={{ padding: "10px 14px" }}
              >
                {validWTs.map((wt) => {
                  const sch = getScheduleLabel(selectedOD, wt);
                  return (
                    <option key={wt} value={wt}>
                      {wt} mm{sch ? ` — ${sch}` : ""}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="mb-6">
              <label className="block mb-1 text-[11px] font-semibold text-gray-500 uppercase tracking-wide">
                Grade
              </label>
              <select
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value)}
                className="w-full rounded-lg text-sm text-navy-900 bg-white border border-gray-200 outline-none transition-colors appearance-none cursor-pointer focus:border-navy-400 focus:ring-1 focus:ring-navy-300"
                style={{ padding: "10px 14px" }}
              >
                {GRADES.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Right — Results Dashboard */}
          <div className="flex flex-col">
            <div
              ref={resultsRef}
              className={`rounded-xl bg-white border transition-all duration-500 overflow-hidden flex-1 flex flex-col ${
                isFlashing
                  ? "border-accent-500 shadow-[0_0_20px_rgba(239,68,68,0.25)]"
                  : "border-gray-200 shadow-none"
              }`}
            >
              {/* Hero numbers */}
              <div className="grid grid-cols-2">
                <div className="p-4 md:p-5 relative">
                  <p
                    className="text-[9px] font-semibold uppercase tracking-[1.5px] mb-1.5 text-gray-400"
                    style={{ fontFamily: "monospace" }}
                  >
                    WEIGHT / METER
                  </p>
                  <p className="text-[30px] md:text-[34px] font-bold text-navy-900 leading-none">
                    {results.weightPerM.toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-400 mt-0.5">kg/m</p>
                </div>
                <div className="p-4 md:p-5 relative border-l border-gray-100">
                  <p
                    className="text-[9px] font-semibold uppercase tracking-[1.5px] mb-1.5 text-gray-400"
                    style={{ fontFamily: "monospace" }}
                  >
                    MAX PRESSURE
                  </p>
                  <p className="text-[30px] md:text-[34px] font-bold text-accent-500 leading-none">
                    {results.pressureMPa.toFixed(1)}
                  </p>
                  <p className="text-sm text-gray-400 mt-0.5">MPa</p>
                </div>
              </div>

              {/* Stat grid — 2×3 */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-[1px] bg-gray-100 border-t border-gray-100 flex-1">
                {[
                  { label: "PER 6M", value: `${results.weight6m.toFixed(1)} kg` },
                  { label: "PER 12M", value: `${results.weight12m.toFixed(1)} kg` },
                  { label: "PRESSURE (PSI)", value: `${results.pressurePsi.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} psi` },
                  { label: "SCHEDULE", value: results.schedule },
                  { label: "INTERNAL DIA.", value: `${results.id.toFixed(1)} mm` },
                  { label: "STEEL AREA", value: `${results.steelArea.toFixed(2)} cm²` },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-[#f8fafc] p-3"
                  >
                    <p
                      className="text-[9px] font-semibold uppercase tracking-[1px] text-gray-400 mb-1"
                      style={{ fontFamily: "monospace" }}
                    >
                      {stat.label}
                    </p>
                    <p className="text-[15px] font-semibold text-gray-900 leading-snug">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        <p className="mt-2 text-[11px] text-gray-400 md:text-right">
          Calculations based on Barlow&apos;s formula with 0.72 design factor per
          ASME B31.8. For reference only — verify with project engineering
          specifications.
        </p>
      </div>
    </section>
  );
}
