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
  SelectedNutrient,
  RdiAge,
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
  ageItems: Array<RdiAge>;
  nutritionFilterItems: Array<SelectedNutrient>;
  measurementFilterItems: string[];
  onSelectMeasurementItem: (item: string) => void;
  multipleSelectItems: filterItem[];
  onSelectUnit: Dispatch<SetStateAction<string>>;
  units: string[];
  nutritionTableItems: NutritionTableItem[];
  values: filterItem[];
  onSelectedValue: Dispatch<SetStateAction<string[]>>;
  lifeStageItems: Array<lifeStageItem>;
}
