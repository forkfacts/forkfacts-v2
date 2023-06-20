import { Dispatch, SetStateAction } from "react";
import { RdiAge } from "../models";
import { allAges, genders } from "./static-data";

/**
 * The purpose is to use `-` as separator in the URL naming scheme.
 * This is important for SEO purposes
 * Watch https://www.youtube.com/watch?v=AQcSFsQyct8 to learn more
 * @param name
 */
export const spaceToDashes = (name: string) => {
  const pathname = name
    .toLowerCase()
    .trim()
    .replace(/[^\w]+/g, "-");
  return pathname.endsWith("-") ? pathname.substr(0, pathname.length - 1) : pathname;
};

export const getValueRounded = (amount: number) => {
  return Math.round(amount * 100) / 100;
};

export function getAgeRangesForLifeStage(selectedLifeStageName: string = "Females"): RdiAge[] {
  const selectedLifeStage = genders.find((item) => item.name === selectedLifeStageName);
  if (!selectedLifeStage) {
    return [];
  }
  const ageRanges = allAges.map((ageRange) => {
    switch (selectedLifeStageName) {
      case "Infants":
        return ageRange.ageUnit === "Month" && ageRange.start >= 0 && ageRange?.end! <= 12
          ? ageRange
          : null;
      case "Children":
        return ageRange.ageUnit === "Year" && ageRange.start >= 1 && ageRange?.end! <= 8
          ? ageRange
          : null;

      case "Males":
        return ageRange.ageUnit === "Year" && ageRange.start >= 9 ? ageRange : null;
      case "Females":
        return ageRange.ageUnit === "Year" && ageRange.start >= 9 ? ageRange : null;
      case "Pregnant":
        return ageRange.ageUnit === "Year" &&
          ageRange.start >= 14 &&
          (ageRange?.end as number) <= 50
          ? ageRange
          : null;
      case "Lactation":
        return ageRange.ageUnit === "Year" &&
          ageRange.start >= 14 &&
          (ageRange?.end as number) <= 50
          ? ageRange
          : null;

      default:
        return ageRange;
    }
  });
  return ageRanges.filter((range) => range !== null) as RdiAge[];
}
export function setSelectedAgeByGender(
  selectedGender: string,
  setSelectedAge: Dispatch<SetStateAction<RdiAge>>
): void {
  switch (selectedGender) {
    case "Infants":
      setSelectedAge({
        start: 0,
        end: 6,
        ageUnit: "Month",
      });
      break;
    case "Children":
      setSelectedAge({
        start: 1,
        end: 3,
        ageUnit: "Year",
      });
      break;
    case "Males":
      setSelectedAge({
        start: 9,
        end: 13,
        ageUnit: "Year",
      });
      break;
    case "Females":
      setSelectedAge({
        start: 31,
        end: 50,
        ageUnit: "Year",
      });
      break;
    case "Pregnant":
    case "Lactation":
      setSelectedAge({
        start: 14,
        end: 18,
        ageUnit: "Year",
      });
      break;
    default:
      break;
  }
}
