import { create } from "zustand";
import { ageItem, SearchNutritionFilterItem } from "@forkfacts/models";
import { Dispatch, SetStateAction } from "react";

interface Store {
  age: ageItem;
  setAge: Dispatch<SetStateAction<ageItem>>;
  gender: string;
  selectGender: Dispatch<SetStateAction<string>>;
  nutrients: SearchNutritionFilterItem[] | any[];
  setSelectNutrient: Dispatch<SetStateAction<SearchNutritionFilterItem[] | any>>;
}

export const useStore = create<Store>((set) => ({
  age: {
    start: 31,
    end: 50,
    ageUnit: "year",
  },
  setAge: (newAge: SetStateAction<ageItem>) =>
    set((state) => ({ ...state, age: typeof newAge === "function" ? newAge(state.age) : newAge })),
  gender: "Females",
  selectGender: (selectedGender: SetStateAction<string>) =>
    set((state) => ({
      ...state,
      gender: typeof selectedGender === "function" ? selectedGender(state.gender) : selectedGender,
    })),
  nutrients: [],
  setSelectNutrient: (selectedNutrients: SetStateAction<SearchNutritionFilterItem[]>) =>
    set((state) => ({
      ...state,
      nutrients:
        typeof selectedNutrients === "function"
          ? selectedNutrients(state.nutrients)
          : selectedNutrients,
    })),
}));
