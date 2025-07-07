import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatRemainingTime = (hours: number) => {
  const totalSeconds = Math.floor(hours * 3600);
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  return `${h}h ${m}m ${s}s`;
};

export function formatDate(isoDateStr: string): string {
  const date = new Date(isoDateStr);

  const day = String(date.getDate()).padStart(2, "0");
  const month = date.toLocaleString("en-IN", { month: "short" }); 
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

