export interface SearchResultItemType {
  name: string;
  hap_name: string;
  url: string;
  image: string;
  category: string;
}

export interface Recommendation {
  category: string;
  collections: { name: string }[];
}

export interface SearchResult {
  category: any;
  name: string;
  hap_name: string;
  url: string;
  image: string;
}
export interface Food {
  category: string;
  name: string;
  hap_name: string;
  fdcId: number;
  nutrients: NutritionFact[];
}

export interface NutritionFact {
  displayOrder: number;
  nutrient: {
    name: string;
    amount: number;
    unit: string;
  };
  rdi?: {
    applicableFor: string;
    ageStart: number;
    ageEnd: number;
    importTable: string;
    nutrient: string;
    amount: number;
    nutrientUnit: string;
  };
  percentDaily?: number;
  children?: NutritionFact[];
}
export interface RDI {
  applicableFor: string;
  ageStart: number;
  ageEnd: number;
  importTable: string;
  nutrient: string;
  amount: number;
  nutrientUnit: string;
}
export interface UsdaRdiNutrientMapping {
  id: number;
  usdaNutrientId: number;
  usdaNutrientName: string;
  usdaNutrientUnit: string;
  rdiNutrientName: string;
  rdiNutrientUnit: string;
  rdiNutrientTable: string;
  usdaToRdiUnitMultiplier: number;
}

export interface Gender {
  name: string;
  icon: any;
}

export interface RdiAge {
  start: number;
  end?: number;
  ageUnit: "Month" | "Year";
  index?: number;
}

export type LifeStage = "infants" | "children" | "males" | "females" | "pregnancy" | "lactation";
