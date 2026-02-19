"use client";

import { useState, useCallback, useMemo, useEffect } from "react";
import { createPortal } from "react-dom";
import { pipeAvailabilityData, AvailabilityStatus } from "./pipe-availability-data";

const { outsideDiameters, wallThicknesses, grades, availability } = pipeAvailabilityData;

function calcWeight(od: number, wt: number): string {
  return ((od - wt) * wt * 0.02466).toFixed(2);
}

function bestStatus(gradeMap: Record<string, AvailabilityStatus>): AvailabilityStatus {
  let best: AvailabilityStatus = null;
  for (const g of grades) {
    const s = gradeMap[g];
    if (s === "a") return "a";
    if (s === "r") best = "r";
  }
  return best;
}

interface SizeAvailabilityMatrixProps {
  onCellClick?: (od: number, wt: number, grade: string | null) => void;
}

export default function SizeAvailabilityMatrix({ onCellClick }: SizeAvailabilityMatrixProps) {
  const [selectedGrade, setSelectedGrade] = useState("All Grades");
  const [tooltip, setTooltip] = useState<{
    od: number;
    nps: string;
    wt: number;
    status: "a" | "r";
    clientX: number;
    clientY: number;
  } | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const resolvedAvailability = useMemo(() => {
    const map: Record<string, AvailabilityStatus> = {};
    for (const [key, gradeMap] of Object.entries(availability)) {
      if (selectedGrade === "All Grades") {
        map[key] = bestStatus(gradeMap);
      } else {
        map[key] = gradeMap[selectedGrade] ?? null;
      }
    }
    return map;
  }, [selectedGrade]);

  const handleMouseEnter = useCallback(
    (
      e: React.MouseEvent,
      od: number,
      nps: string,
      wt: number,
      status: "a" | "r"
    ) => {
      setTooltip({
        od,
        nps,
        wt,
        status,
        clientX: e.clientX,
        clientY: e.clientY,
      });
    },
    []
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      setTooltip((prev) =>
        prev ? { ...prev, clientX: e.clientX, clientY: e.clientY } : null
      );
    },
    []
  );

  const handleMouseLeave = useCallback(() => setTooltip(null), []);

  const handleCellClick = useCallback(
    (od: number, wt: number) => {
      if (!onCellClick) return;
      const grade = selectedGrade === "All Grades" ? null : selectedGrade;
      onCellClick(od, wt, grade);
    },
    [onCellClick, selectedGrade]
  );

  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        {/* Title */}
        <h2 className="text-xl md:text-2xl font-semibold text-navy-900 mb-2">
          Size Availability Matrix
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm md:text-base max-w-3xl mb-6 md:mb-8">
          Select a grade to view available OD × wall thickness combinations.
          Green indicates ready availability; amber sizes are available on
          request with lead time.{onCellClick ? " Click any cell to calculate weight and pressure." : ""}
        </p>

        {/* Grade filter buttons — scrollable on mobile, wrapping on desktop */}
        <div className="flex gap-2 mb-6 md:mb-8 overflow-x-auto md:overflow-x-visible md:flex-wrap flex-nowrap md:flex-wrap no-scrollbar pb-1 md:pb-0">
          {["All Grades", ...grades].map((grade) => {
            const isActive = selectedGrade === grade;
            return (
              <button
                key={grade}
                onClick={() => setSelectedGrade(grade)}
                className="rounded-[6px] px-3 md:px-3.5 py-1 md:py-1.5 text-[11px] md:text-[12px] tracking-[0.5px] transition-all duration-200 whitespace-nowrap flex-shrink-0"
                style={{
                  fontFamily: "monospace",
                  border: isActive
                    ? "1px solid #ef4444"
                    : "1px solid #e2e8f0",
                  background: isActive
                    ? "rgba(239,68,68,0.08)"
                    : "#f8fafc",
                  color: isActive ? "#dc2626" : "#64748b",
                }}
              >
                {grade}
              </button>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-x-4 md:gap-x-5 gap-y-2 mb-4 md:mb-5">
          <span className="flex items-center gap-1.5 md:gap-2 text-[11px] md:text-[12px] text-gray-500">
            <span
              className="inline-block w-3 h-3 md:w-[14px] md:h-[14px] rounded-[3px]"
              style={{ background: "#22c55e" }}
            />
            Available
          </span>
          <span className="flex items-center gap-1.5 md:gap-2 text-[11px] md:text-[12px] text-gray-500">
            <span
              className="inline-block w-3 h-3 md:w-[14px] md:h-[14px] rounded-[3px]"
              style={{ background: "#E5A938" }}
            />
            On Request
          </span>
          <span className="flex items-center gap-1.5 md:gap-2 text-[11px] md:text-[12px] text-gray-500">
            <span
              className="inline-block w-3 h-3 md:w-[14px] md:h-[14px] rounded-[3px] border border-gray-200 bg-gray-50"
            />
            Not Available
          </span>
        </div>

        {/* Matrix table wrapper */}
        <div
          className="rounded-xl overflow-hidden matrix-scroll border border-gray-200"
          style={{ background: "#fafbfc" }}
        >
          <div className="overflow-x-auto">
            <table
              className="w-full"
              style={{
                borderCollapse: "separate",
                borderSpacing: "1px",
                fontFamily: "monospace",
              }}
            >
              <thead>
                {/* Sub-header label row — hidden on mobile */}
                <tr className="hidden md:table-row">
                  <th
                    className="sticky left-0 z-20 bg-gray-50"
                    style={{ minWidth: 60 }}
                  />
                  <th
                    className="sticky z-20 bg-gray-50"
                    style={{
                      left: 60,
                      minWidth: 52,
                      borderRight: "1px solid #e2e8f0",
                    }}
                  />
                  <th
                    colSpan={wallThicknesses.length}
                    className="text-center py-2 text-[10px] uppercase tracking-[2px] bg-gray-50 text-gray-400"
                  >
                    WALL THICKNESS (mm)
                  </th>
                </tr>
                {/* WT values row */}
                <tr>
                  <th
                    className="sticky left-0 z-20 text-left px-1.5 md:px-2 py-1 md:py-2 text-[8px] md:text-[10px] font-semibold uppercase tracking-[1px] bg-gray-50 text-gray-500"
                    style={{ minWidth: 44 }}
                  >
                    OD
                  </th>
                  {/* NPS header — hidden on mobile */}
                  <th
                    className="sticky z-20 text-left px-2 py-2 text-[10px] font-semibold uppercase tracking-[1px] bg-gray-50 text-gray-500 hidden md:table-cell"
                    style={{
                      left: 60,
                      minWidth: 52,
                      borderRight: "1px solid #e2e8f0",
                    }}
                  >
                    NPS
                  </th>
                  {wallThicknesses.map((wt) => (
                    <th
                      key={wt}
                      className="px-0 md:px-0.5 py-1 md:py-2 text-center text-[8px] md:text-[10px] whitespace-nowrap bg-gray-50 text-gray-500"
                      style={{ minWidth: 20 }}
                    >
                      {wt}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {outsideDiameters.map((od, rowIdx) => {
                  const rowBg = rowIdx % 2 === 0 ? "#ffffff" : "#f8fafc";
                  return (
                    <tr
                      key={od.mm}
                      style={{ borderBottom: "1px solid #f1f5f9" }}
                    >
                      <td
                        className="sticky left-0 z-10 px-1.5 md:px-2 py-0.5 md:py-1.5 text-[10px] md:text-[12px] font-bold whitespace-nowrap text-navy-800"
                        style={{ background: rowBg }}
                      >
                        {od.mm}
                      </td>
                      {/* NPS column — hidden on mobile */}
                      <td
                        className="sticky z-10 px-2 py-1.5 text-[11px] whitespace-nowrap text-gray-400 hidden md:table-cell"
                        style={{
                          background: rowBg,
                          left: 60,
                          borderRight: "1px solid #e2e8f0",
                        }}
                      >
                        {od.nps}
                      </td>
                      {wallThicknesses.map((wt) => {
                        const key = `${od.mm}-${wt}`;
                        const status = resolvedAvailability[key];

                        if (!status) {
                          return (
                            <td
                              key={wt}
                              className="rounded-[2px] md:rounded-[3px] bg-gray-50 matrix-cell-size"
                              style={{
                                border: "1px solid #f1f5f9",
                              }}
                            />
                          );
                        }

                        const isAvail = status === "a";
                        return (
                          <td
                            key={wt}
                            className="rounded-[2px] md:rounded-[3px] cursor-pointer transition-all duration-150 matrix-cell matrix-cell-size"
                            style={{
                              background: isAvail
                                ? "rgba(34,197,94,0.8)"
                                : "rgba(229,169,56,0.7)",
                            }}
                            onMouseEnter={(e) =>
                              handleMouseEnter(e, od.mm, od.nps, wt, status)
                            }
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleCellClick(od.mm, wt)}
                          />
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer note */}
        <p className="mt-3 md:mt-4 text-[10px] md:text-[11px] text-gray-400">
          Hover over cells to see calculated weight per meter. Availability
          subject to confirmation at time of inquiry.
        </p>

        {/* Schedule reference — hidden on mobile */}
        <p
          className="mt-2 text-[11px] leading-relaxed text-gray-400 hidden md:block"
          style={{ fontFamily: "monospace" }}
        >
          Common schedule equivalents — SCH 40: 6&quot; = 7.11mm WT, 8&quot; =
          8.18mm WT, 10&quot; = 9.27mm WT &nbsp;|&nbsp; SCH 80: 6&quot; =
          10.97mm WT, 8&quot; = 12.70mm WT, 10&quot; = 15.09mm WT
        </p>
      </div>

      {mounted && tooltip && typeof document !== "undefined" && createPortal(
        <div
          id="matrix-tooltip"
          style={{
            position: "fixed",
            top: Math.max(8, tooltip.clientY - 80),
            left: Math.min(tooltip.clientX, (typeof window !== "undefined" ? window.innerWidth : 9999) - 220),
            zIndex: 99999,
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              background: "#1e293b",
              border: "1px solid rgba(229,169,56,0.4)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
              borderRadius: 8,
              padding: "8px 14px",
              whiteSpace: "nowrap",
              fontFamily: "monospace",
            }}
          >
            <p style={{ color: "#E5A938", fontSize: 11, margin: "0 0 3px 0" }}>
              OD {tooltip.od}mm × WT {tooltip.wt}mm
              {selectedGrade !== "All Grades" && (
                <span style={{ marginLeft: 8, opacity: 0.7 }}>({selectedGrade})</span>
              )}
            </p>
            <p style={{ color: "#f1f5f9", fontSize: 13, fontWeight: 700, margin: 0 }}>
              {calcWeight(tooltip.od, tooltip.wt)} kg/m
            </p>
          </div>
        </div>,
        document.body
      )}

      {/* Scoped styles */}
      <style jsx>{`
        .matrix-scroll ::-webkit-scrollbar {
          height: 6px;
        }
        .matrix-scroll ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        .matrix-scroll ::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 3px;
        }
        .matrix-cell:hover {
          opacity: 1 !important;
          transform: scale(1.2);
          z-index: 5;
          position: relative;
        }
        .matrix-cell:active {
          transform: scale(0.9);
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .matrix-cell-size {
          height: 16px;
          min-width: 20px;
        }
        @media (min-width: 768px) {
          .matrix-cell-size {
            height: auto;
            min-width: 34px;
          }
        }
      `}</style>
    </section>
  );
}
