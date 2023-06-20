import create from "zustand";
import { Food, RDI, NutritionFact } from "../../models";

interface StoreState {
  recommendedDailyIntakes: RDI[];
  food: Food;
  nutrition: NutritionFact[];
  setRecommendedDailyIntakes: (recommendedDailyIntakes: RDI[]) => void;
  setFood: (food: Food, nutrition: NutritionFact[]) => void;
}

export const useStore = create<StoreState>((set) => ({
  recommendedDailyIntakes: [],
  food: {} as Food,
  nutrition: [],
  setRecommendedDailyIntakes: (recommendedDailyIntakes: RDI[]) => set({ recommendedDailyIntakes }),
  setFood: (food: Food, nutrition: NutritionFact[]) => set({ food, nutrition }),
}));
