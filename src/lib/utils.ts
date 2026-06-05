import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/919665612777`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
