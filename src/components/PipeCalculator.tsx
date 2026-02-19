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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        {/* Title */}
        <h2 className="text-xl md:text-2xl font-semibold text-navy-900 mb-2">
          Weight &amp; Pressure Calculator
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 text-sm md:text-base max-w-3xl mb-8">
          Calculate pipe weight and maximum working pressure based on your specifications.
        </p>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left — Inputs */}
          <div className="flex flex-col gap-4">
            {/* OD selector */}
            <div>
              <label className="block mb-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Outside Diameter
              </label>
              <select
                value={selectedOD}
                onChange={(e) => handleODChange(Number(e.target.value))}
                className="w-full rounded-lg px-4 py-3 text-sm text-navy-900 bg-white border border-gray-200 outline-none transition-colors appearance-none cursor-pointer focus:border-accent-500 focus:ring-1 focus:ring-accent-500"
              >
                {OD_LIST.map((od) => (
                  <option key={od.mm} value={od.mm}>
                    {od.mm} mm — {od.nps}
                  </option>
                ))}
              </select>
            </div>

            {/* WT selector */}
            <div>
              <label className="block mb-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Wall Thickness
              </label>
              <select
                value={selectedWT}
                onChange={(e) => setSelectedWT(Number(e.target.value))}
                className="w-full rounded-lg px-4 py-3 text-sm text-navy-900 bg-white border border-gray-200 outline-none transition-colors appearance-none cursor-pointer focus:border-accent-500 focus:ring-1 focus:ring-accent-500"
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

            {/* Grade selector */}
            <div>
              <label className="block mb-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Grade
              </label>
              <select
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value)}
                className="w-full rounded-lg px-4 py-3 text-sm text-navy-900 bg-white border border-gray-200 outline-none transition-colors appearance-none cursor-pointer focus:border-accent-500 focus:ring-1 focus:ring-accent-500"
              >
                {GRADES.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
            </div>

            {/* Selected pipe summary */}
            <div className="mt-2 rounded-lg px-4 py-3 text-xs text-gray-500 bg-white border border-gray-100 font-mono">
              {currentOD?.mm} mm OD × {selectedWT} mm WT — {selectedGrade}
            </div>
          </div>

          {/* Right — Results */}
          <div>
            <div
              ref={resultsRef}
              className={`rounded-xl p-6 md:p-8 bg-white border transition-all duration-500 ${
                isFlashing
                  ? "border-[#D4A853] shadow-[0_0_20px_rgba(212,168,83,0.25)]"
                  : "border-gray-200 shadow-none"
              }`}
            >
              {/* Weight per meter */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                  Weight per Meter
                </p>
                <p className="text-[28px] font-bold text-navy-900">
                  {results.weightPerM.toFixed(2)}{" "}
                  <span className="text-base font-normal text-gray-400">kg/m</span>
                </p>
              </div>

              {/* Weight per length */}
              <div className="flex gap-6 mb-6 pb-6 border-b border-gray-100">
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">Per 6m</p>
                  <p className="text-base text-navy-800">{results.weight6m.toFixed(2)} kg</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">Per 12m</p>
                  <p className="text-base text-navy-800">{results.weight12m.toFixed(2)} kg</p>
                </div>
              </div>

              {/* Max working pressure */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                  Max Working Pressure
                </p>
                <p className="text-[28px] font-bold text-accent-500">
                  {results.pressureMPa.toFixed(1)}{" "}
                  <span className="text-base font-normal text-gray-400">MPa</span>
                  <span className="text-base mx-2 text-gray-200">/</span>
                  {results.pressurePsi.toFixed(0)}{" "}
                  <span className="text-base font-normal text-gray-400">psi</span>
                </p>
              </div>

              {/* Schedule, ID, Steel Area */}
              <div className="flex flex-wrap gap-x-8 gap-y-3 pt-6 border-t border-gray-100">
                <div>
                  <p className="text-[10px] uppercase tracking-wide text-gray-400 mb-0.5">Schedule</p>
                  <p className="text-sm text-gray-600">{results.schedule}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wide text-gray-400 mb-0.5">Internal Diameter</p>
                  <p className="text-sm text-gray-600">{results.id.toFixed(1)} mm</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wide text-gray-400 mb-0.5">Steel Area</p>
                  <p className="text-sm text-gray-600">{results.steelArea.toFixed(2)} cm²</p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="mt-4 text-[11px] text-gray-400">
              Calculations based on Barlow&apos;s formula with 0.72 design factor per
              ASME B31.8. For reference only — verify with project engineering
              specifications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
