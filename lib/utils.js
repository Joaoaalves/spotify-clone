import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatName(name) {
  // Capitalize the first letter of each word
  return name.replace(/\b\w/g, (char) => char.toUpperCase());
}

export function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}