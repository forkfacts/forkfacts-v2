import {
  collection,
  compareTableItem,
  filterItem,
  FoodWithSameName,
  lifeStageItem,
  MenuItem,
  NutritionTableRow,
  PopularFrequentSearchType,
  RdiAge,
  recommendationType,
  SearchCategoryItemType,
  SearchResultItemCollectionType,
  SelectedNutrient,
  summaryItem,
} from "@forkfacts/models";
import { Dispatch, SetStateAction } from "react";

export interface HomeScreenProps {
  sidebarItems: MenuItem[];
  navbarItems: MenuItem[];
  PopularFrequentSearchItems?: PopularFrequentSearchType[];
  categoryOptions: SearchCategoryItemType[];
  sourceId: string;
  recommendations?: Array<recommendationType>;
}

export interface DetailsPageScreenProps {
  menuItems: MenuItem[];
  foodsWithSameNames: Array<FoodWithSameName>;
  foodOverview: {
    img?: string;
    name: string;
    category: string;
    nutritionValues?: Array<{ name: string; icon: string }>;
    tag?: string;
  };
  tabItems: MenuItem[];
  compareTableItems: Array<compareTableItem>;
  compareTableDetails: {
    name: string;
    quantityAmount: string;
  };
  nutritionSummaryItems: Array<summaryItem>;
  ageItems: Array<RdiAge>;
  nutritionFilterItems: Array<SelectedNutrient>;
  measurementFilterItems: string[];
  onSelectMeasurementItem: (item: string) => void;
  multipleSelectItems: filterItem[];
  onSelectUnit: Dispatch<SetStateAction<string>>;
  units: string[];
  nutritionTableRows: NutritionTableRow[];
  values: filterItem[];
  onSelectedValue: Dispatch<SetStateAction<string[]>>;
  lifeStageItems: Array<lifeStageItem>;
}
