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
} from "@forkfacts/models";
import { Dispatch, SetStateAction } from "react";

export interface HomeScreenProps {
  sidebarItems: sidebarItem[];
  navbarItems: sidebarItem[];
  PopularFrequentSearchItems: PopularFrequentSearchType[];
  PopularFrequentSearchTitle: string;
  onSelectPopularItem: (item: PopularFrequentSearchType) => void;
  categoryOptions: SearchCategoryItemType[];
  collectionGroupedItems: Array<SearchResultItemCollectionType>;
  sourceId: string;
  recommendations: Array<recommendationType>;
}

export interface DetailsPageScreenProps {
  sidebarItems: sidebarItem[];
  DetailsPageTitlesItems: Array<DetailsPageTitlesItem>;
  detailsHeaderValues: {
    img: string;
    name: string;
    subTitle: string;
    nutritionValues: Array<{ name: string; icon: string }>;
    tag: string;
  };
  tabItems: sidebarItem[];
  compareTableItems: Array<compareTableItem>;
  compareTableDetails: {
    name: string;
    quantityAmount: string;
  };
  nutritionSummaryItems: Array<summaryItem>;
  selectedFilters: string[];
  lifeStageItems: Array<lifeStageItem>;
  ageItems: Array<ageItem>;
  nutritionFilterItems: Array<SearchNutritionFilterItem>;
  measurementFilterItems: string[];
  onSelectMeasurementItem: (item: string) => void;
  onSelectFilterPageData: Dispatch<SetStateAction<any>>;
  multipleSelectItems: filterItem[];
  getSelectedNutrients: Dispatch<SetStateAction<string[]>>;
  filters: Array<filterButtonItem>;
  onSelectFilterItems: (item: string[]) => void;
}
