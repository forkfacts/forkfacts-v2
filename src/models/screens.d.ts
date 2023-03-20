import {
  collection,
  SearchCategoryItemType,
  onSelectCategoryType,
  SearchResultItemCollectionType,
  PopularFrequentSearchType,
  sidebarItem,
  recommendationType,
  DetailsPageTitlesItem,
  compareTableItem,
  summaryItem,
  SearchNutritionFilterItem,
  ageItem,
  NutritionTableItem,
} from "@forkfacts/models";
import { Dispatch, SetStateAction } from "react";

export interface HomeScreenProps {
  sidebarItems: sidebarItem[];
  navbarItems: sidebarItem[];
  PopularFrequentSearchItems?: PopularFrequentSearchType[];
  onSelectPopularItem?: (item: PopularFrequentSearchType) => void;
  categoryOptions: SearchCategoryItemType[];
  collectionGroupedItems?: Array<SearchResultItemCollectionType>;
  sourceId: string;
  recommendations?: Array<recommendationType>;
}

export interface DetailsPageScreenProps {
  sidebarItems: sidebarItem[];
  DetailsPageTitlesItems: Array<DetailsPageTitlesItem>;
  detailsHeaderValues: {
    img?: string;
    name: string;
    category: string;
    nutritionValues?: Array<{ name: string; icon: string }>;
    tag?: string;
  };
  tabItems: sidebarItem[];
  compareTableItems: Array<compareTableItem>;
  compareTableDetails: {
    name: string;
    quantityAmount: string;
  };
  nutritionSummaryItems: Array<summaryItem>;
  ageItems: Array<ageItem>;
  nutritionFilterItems: Array<SearchNutritionFilterItem>;
  measurementFilterItems: string[];
  onSelectMeasurementItem: (item: string) => void;
  onSelectFilterPageData: Dispatch<SetStateAction<any>>;
  multipleSelectItems: filterItem[];
  getSelectedNutrients: Dispatch<SetStateAction<string[]>>;
  onSelectFilterItems: (item: string[]) => void;
  onSelectLifeStageItem: Dispatch<SetStateAction<any | string>>;
  onSelectAgeItem: dispatch<SetStateAction<ageItem>>;
  onSelectUnit: Dispatch<SetStateAction<string>>;
  units: string[];
  nutritionTableItems: NutritionTableItem[];
  onSelectNutritionFilterItem: Dispatch<SetStateAction<SearchNutritionFilterItem[] | any>>;
  values: filterItem[];
  onSelectedValue: Dispatch<SetStateAction<string[]>>;
  lifeStageItems: Array<lifeStageItem>;
}
