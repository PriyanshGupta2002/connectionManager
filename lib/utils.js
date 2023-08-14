import { useQueryClient } from "@tanstack/react-query";
import bcrypt from "bcryptjs";
export const giveHashPassword = (password) => {
 const hash =  bcrypt.hash(password,10)
  return hash;
};
export const formatDate = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  return {
    startYear: start.getFullYear(),
    endYear: end.getFullYear(),
    months: (end.getMonth() - start.getMonth()) + (12 * (end.getFullYear() - start.getFullYear()))
  };
}

export const formatDuration = (duration) => {
  const { startYear, endYear, months } = duration;

  if (months === 0) {
    return `${startYear}`;
  }

  if (startYear === endYear) {
    if (months >= 12) {
      const years = Math.floor(months / 12);
      return `${years} year${years > 1 ? "s" : ""}`;
    } else {
      return `${months} month${months > 1 ? "s" : ""}`;
    }
  } else {
    return `${months >= 12 ? `${months} months ` : ""}(${startYear} - ${endYear})`;
  }
}

