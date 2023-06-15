import create from "zustand";
import { Food, NutrientRequirement } from "../../models";

interface StoreState {
  recommendedDailyIntakes: NutrientRequirement[];
  food: Food;
  setRecommendedDailyIntakes: (recommendedDailyIntakes: NutrientRequirement[]) => void;
  setFood: (food: Food) => void;
}

export const useStore = create<StoreState>((set) => ({
  recommendedDailyIntakes: [],
  food: {} as Food,
  setRecommendedDailyIntakes: (recommendedDailyIntakes: NutrientRequirement[]) =>
    set({ recommendedDailyIntakes }),
  setFood: (food: Food) => set({ food }),
}));
