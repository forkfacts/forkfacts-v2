import { create } from "zustand";
import { RdiAge, SelectedNutrient } from "@forkfacts/models";
import { Dispatch, SetStateAction } from "react";

interface Store {
  selectedAge: RdiAge;
  setSelectedAge: Dispatch<SetStateAction<RdiAge>>;
  selectedLifeStage: string;
  setSelectedLifeStage: Dispatch<SetStateAction<string>>;
  selectedNutrients: SelectedNutrient[] | any[];
  setSelectedNutrient: Dispatch<SetStateAction<SelectedNutrient[] | any>>;
}

export const useStore = create<Store>((set) => ({
  selectedAge: {
    start: 31,
    end: 50,
    ageUnit: "year",
  },
  setSelectedAge: (newAge: SetStateAction<RdiAge>) =>
    set((state) => ({
      ...state,
      selectedAge: typeof newAge === "function" ? newAge(state.selectedAge) : newAge,
    })),
  selectedLifeStage: "Females",
  setSelectedLifeStage: (selectedGender: SetStateAction<string>) =>
    set((state) => ({
      ...state,
      selectedLifeStage:
        typeof selectedGender === "function"
          ? selectedGender(state.selectedLifeStage)
          : selectedGender,
    })),
  selectedNutrients: [],
  setSelectedNutrient: (selectedNutrients: SetStateAction<SelectedNutrient[]>) =>
    set((state) => ({
      ...state,
      selectedNutrients:
        typeof selectedNutrients === "function"
          ? selectedNutrients(state.selectedNutrients)
          : selectedNutrients,
    })),
}));
