import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimestamp = (createdAt: Date): string => {
  const now = new Date();
  const timeDifference = now.getTime() - createdAt.getTime();

  // Define time units in milliseconds
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const month = 30 * day;
  const year = 365 * day;

  if (timeDifference < minute) {
    const secondsAgo = Math.round(timeDifference / 1000);
    return `${secondsAgo} second${secondsAgo !== 1 ? "s" : ""} ago`;
  } else if (timeDifference < hour) {
    const minutesAgo = Math.round(timeDifference / minute);
    return `${minutesAgo} minute${minutesAgo !== 1 ? "s" : ""} ago`;
  } else if (timeDifference < day) {
    const hoursAgo = Math.round(timeDifference / hour);
    return `${hoursAgo} hour${hoursAgo !== 1 ? "s" : ""} ago`;
  } else if (timeDifference < month) {
    const daysAgo = Math.round(timeDifference / day);
    return `${daysAgo} day${daysAgo !== 1 ? "s" : ""} ago`;
  } else if (timeDifference < year) {
    const monthsAgo = Math.round(timeDifference / month);
    return `${monthsAgo} month${monthsAgo !== 1 ? "s" : ""} ago`;
  } else {
    const yearsAgo = Math.round(timeDifference / year);
    return `${yearsAgo} year${yearsAgo !== 1 ? "s" : ""} ago`;
  }
};
