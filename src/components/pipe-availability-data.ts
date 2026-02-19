export type AvailabilityStatus = "a" | "r" | null;

export interface PipeOD {
  mm: number;
  nps: string;
}

export interface PipeAvailabilityData {
  title: string;
  description: string;
  grades: string[];
  outsideDiameters: PipeOD[];
  wallThicknesses: number[];
  availability: Record<string, Record<string, AvailabilityStatus>>;
}

const SEAMLESS_ODS: PipeOD[] = [
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

const WALL_THICKNESSES: number[] = [
  2.8, 3.2, 3.7, 4.0, 4.8, 5.2, 5.5, 6.0, 6.4, 7.0,
  7.9, 8.4, 8.7, 9.5, 10.3, 11.0, 12.7, 14.3, 15.9,
  17.5, 19.1, 20.6, 22.2, 25.4,
];

const GRADES = ["Grade B", "X42", "X46", "X52", "X56", "X60", "X65", "X70", "X80"];

const stockODs = new Set([60.3, 73.0, 88.9, 114.3, 141.3, 168.3, 219.1, 273.1, 323.9, 355.6, 406.4]);
const stockWTs = new Set([4.8, 5.5, 6.0, 6.4, 7.0, 7.9, 8.4, 8.7, 9.5, 10.3, 11.0, 12.7, 14.3, 15.9, 17.5, 19.1, 22.2, 25.4]);

function isSizeValid(od: number, wt: number): boolean {
  const ratio = wt / od;
  if (ratio > 0.30 || ratio < 0.025) return false;
  if (od <= 48.3 && wt > 11) return false;
  if (od <= 73.0 && wt > 14.3) return false;
  if (od <= 114.3 && wt > 17.5) return false;
  if (od <= 168.3 && wt > 22.2) return false;
  if (od >= 457.2 && wt < 6.0) return false;
  return true;
}

function gradeStatus(grade: string, od: number, wt: number): AvailabilityStatus {
  if (!isSizeValid(od, wt)) return null;

  const isStock = stockODs.has(od) && stockWTs.has(wt);

  switch (grade) {
    case "Grade B":
    case "X42":
      return isStock ? "a" : "r";

    case "X46":
    case "X52":
      if (od <= 48.3 && isStock) return "r";
      return isStock ? "a" : "r";

    case "X56":
    case "X60":
      if (!isStock) return "r";
      return wt >= 5.0 ? "a" : "r";

    case "X65":
      if (od <= 42.2) return null;
      if (od < 88.9) return "r";
      return isStock ? "a" : "r";

    case "X70":
      if (od < 88.9) return null;
      if (od < 168.3) return "r";
      return isStock ? "a" : "r";

    case "X80":
      if (od < 114.3) return null;
      if (od < 219.1) return "r";
      return isStock ? "a" : "r";

    default:
      return null;
  }
}

function generateAvailability(): Record<string, Record<string, AvailabilityStatus>> {
  const map: Record<string, Record<string, AvailabilityStatus>> = {};

  for (const od of SEAMLESS_ODS) {
    for (const wt of WALL_THICKNESSES) {
      const key = `${od.mm}-${wt}`;
      const gradeMap: Record<string, AvailabilityStatus> = {};
      let hasAny = false;

      for (const g of GRADES) {
        const s = gradeStatus(g, od.mm, wt);
        if (s !== null) hasAny = true;
        gradeMap[g] = s;
      }

      if (hasAny) {
        map[key] = gradeMap;
      }
    }
  }

  return map;
}

export const pipeAvailabilityData: PipeAvailabilityData = {
  title: "Size Availability Matrix",
  description: "Hover over cells to see calculated weight per meter. Green indicates ready availability; amber sizes are available on request with lead time.",
  grades: GRADES,
  outsideDiameters: SEAMLESS_ODS,
  wallThicknesses: WALL_THICKNESSES,
  availability: generateAvailability(),
};
