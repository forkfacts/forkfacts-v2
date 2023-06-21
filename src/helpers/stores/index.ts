import create from "zustand";
import { Food, RDI, NutritionFact, RdiAge } from "../../models";
import { Dispatch, SetStateAction } from "react";

interface StoreState {
  recommendedDailyIntakes: RDI[];
  food: Food;
  nutrition: NutritionFact[];
  setRecommendedDailyIntakes: (recommendedDailyIntakes: RDI[]) => void;
  setFood: (food: Food, nutrition: NutritionFact[]) => void;
  selectedLifeStage: string;
  setSelectedLifeStage: Dispatch<SetStateAction<string>>;
  selectedAge: RdiAge;
  setSelectedAge: Dispatch<SetStateAction<RdiAge>>;
  age: RdiAge[];
  setAge: (age: RdiAge[]) => void;
  defaultFilter: boolean;
  setDefaultFilter: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useStore = create<StoreState>((set) => ({
  recommendedDailyIntakes: [],
  food: {} as Food,
  nutrition: [],
  setRecommendedDailyIntakes: (recommendedDailyIntakes: RDI[]) => set({ recommendedDailyIntakes }),
  setFood: (food: Food, nutrition: NutritionFact[]) => set({ food, nutrition }),
  selectedLifeStage: "Females",
  setSelectedLifeStage: (selectedGender: SetStateAction<string>) =>
    set((state) => ({
      ...state,
      selectedLifeStage:
        typeof selectedGender === "function"
          ? selectedGender(state.selectedLifeStage)
          : selectedGender,
    })),
  selectedAge: {
    start: 31,
    end: 50,
    ageUnit: "Year",
  },
  age: [],
  defaultFilter: true,
  setDefaultFilter: () => set({ defaultFilter: false }),
  setAge: (age: RdiAge[]) => set({ age }),
  setSelectedAge: (newAge: SetStateAction<RdiAge>) =>
    set((state) => ({
      ...state,
      selectedAge: typeof newAge === "function" ? newAge(state.selectedAge) : newAge,
    })),
}));
