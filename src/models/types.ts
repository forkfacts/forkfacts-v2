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

export type NutritionFact = {
  displayOrder: number;
  nutrient: {
    name: string;
    amount: number;
    unit: string;
  };
  rdi?: {
    pct: number;
    amount: number;
    unit: string;
  };
  children?: NutritionFact[];
};

export interface Food {
  category: string;
  name: string;
  hap_name: string;
  fdcId: number;
  nutrition: NutritionFact[];
}

export interface NutrientRequirement {
  applicableFor: string;
  ageStart: number;
  ageEnd: number | null;
  ageUnit: string;
  importTable: string;
  nutrient: string;
  amount: number;
  nutrientUnit: string;
  nutrientGroup: string;
}
