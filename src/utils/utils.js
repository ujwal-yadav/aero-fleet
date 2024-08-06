import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function isBatteryLow(batteryStatus) {
  const batteryPercentage = Number(batteryStatus.split('%')[0]);
  return batteryPercentage <= 20;
}
