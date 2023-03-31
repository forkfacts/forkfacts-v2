interface NutritionFactFnType {
  path: string;
  component: string;
  context: {};
}
export type createPageTypes = {
  createPageFunction: (fnType: NutritionFactFnType) => void;
};

export interface SearchIndexEntry {
  name: string;
  category: string;
  url: string;
}

export type SearchIndex = SearchIndexEntry[];

export interface Nutrient {
  name: string;
  amount: number;
  unit: string;
}

export interface FoundationOrSrFood {
  fdcId: number;
  name: string;
  category: string;
  // todo: can we make units typed? How many different units we may have?
  nutrients: Nutrient[];
}

type CreatePageFnProps = {
  createPageFunction: (fnType: NutritionFactFnType) => void;
};

export type FoodPageType = CreatePageFnProps & {
  foods: FoundationOrSrFood[];
  indexFileName: string;
};

export interface NutritionFact {
  nutrient: {
    amount: number;
    name: string;
    unit: string;
    displayName: string;
    nutrientGroup: string;
  };
  percentDaily: string;
  rdi: {
    ageStart: number;
    ageEnd: number;
    ageUnit: string;
    amount: number;
    nutrient: string;
    nutrientUnit: string;
    applicableFor: string;
  };
}

export type NutrientGroup = {
  nutrientGroup: string;
  name: string;
  rows: NutrientItem[];
};

export type NutrientItem = {
  amount: number;
  displayName: string;
  name: string;
  nutrientGroup: string;
  unit: string;
};
