import { allAges, lifeStageItems } from "../RealData/realData";
import { Dispatch, SetStateAction } from "react";
import { NutrientItem } from "../models/pages";
import { RdiAge, SelectedNutrient } from "../models/components";

export function getAgeRangesForLifeStage(selectedLifeStageName: string = "Females"): any[] {
  const selectedLifeStage = lifeStageItems.find((item) => item.name === selectedLifeStageName);
  if (!selectedLifeStage) {
    return [];
  }
  const ageRanges = allAges.map((ageRange) => {
    switch (selectedLifeStageName) {
      case "Infants":
        return ageRange.ageUnit === "month" && ageRange.start >= 0 && ageRange?.end! <= 12
          ? ageRange
          : null;
      case "Children":
        return ageRange.ageUnit === "year" && ageRange.start >= 1 && ageRange?.end! <= 8
          ? ageRange
          : null;

      case "Males":
        return ageRange.ageUnit === "year" && ageRange.start >= 9 ? ageRange : null;
      case "Females":
        return ageRange.ageUnit === "year" && ageRange.start >= 9 ? ageRange : null;
      case "Pregnant":
        return ageRange.ageUnit === "year" && ageRange.start >= 14 && ageRange?.end <= 50
          ? ageRange
          : null;
      case "Lactation":
        return ageRange.ageUnit === "year" && ageRange.start >= 14 && ageRange?.end <= 50
          ? ageRange
          : null;

      default:
        return ageRange;
    }
  });
  return ageRanges.filter((range) => range !== null);
}

export const getValueRounded = (amount: number) => {
  return Math.round(amount * 100) / 100;
};

export const getFilterNutrients = (nutrients: SelectedNutrient[]) => {
  const selectedNutrientsWithRows = [...nutrients]
    .map((item) => {
      const data: NutrientItem[] = [];
      if (item?.rows) {
        item?.rows?.map((item: any) => {
          data.push(item);
        });
      }
      return data;
    })
    .flat();
  const unSelectedNutrientsRows = nutrients
    .map((item) => {
      if (!item.rows?.length) {
        return item;
      }
    })
    .filter((item) => item !== undefined);
  return [...selectedNutrientsWithRows, ...unSelectedNutrientsRows].filter(
    (item) => item !== undefined
  );
};

export function setSelectedAgeByGender(
  selectedGender: string,
  setSelectedAge: Dispatch<SetStateAction<RdiAge>>
): void {
  switch (selectedGender) {
    case "Infants":
      setSelectedAge({
        start: 0,
        end: 6,
        ageUnit: "month",
      });
      break;
    case "Children":
      setSelectedAge({
        start: 1,
        end: 3,
        ageUnit: "year",
      });
      break;
    case "Males":
      setSelectedAge({
        start: 9,
        end: 13,
        ageUnit: "year",
      });
      break;
    case "Females":
      setSelectedAge({
        start: 31,
        end: 50,
        ageUnit: "year",
      });
      break;
    case "Pregnant":
    case "Lactation":
      setSelectedAge({
        start: 14,
        end: 18,
        ageUnit: "year",
      });
      break;
    default:
      break;
  }
}
