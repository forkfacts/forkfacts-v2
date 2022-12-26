import {
  collection,
  SearchCategoryItemType,
  onSelectCategoryType,
  SearchResultItemCollectionType,
  PopularFrequentSearchType,
  sidebarItem,
  rateItem,
  nutritionTableItem,
  filterItem,
} from "@forkfacts/models";

export interface TypingSearchScreenProps extends onSelectCategoryType {
  collectionGroupedItems: SearchResultItemCollectionType[];
  categoryOptions: SearchCategoryItemType[];
  onClearSearch: () => void;
  onClosePage: () => void;
  handleViewMore: () => void;
  onSelectItem: (item: SearchResultItemType) => item;
  showClearSearch: boolean;
  multiple: boolean;
}

export interface RecentSearchScreenProps {
  collectionListsItems: SearchResultItemType[];
  onClearSearch: () => void;
  onClosePage: () => void;
  handleViewMore: () => void;
  onSelectItem: (item: SearchResultItemType) => item;
  showClearSearch: boolean;
  multiple: boolean;
}

export interface HomeScreenProps extends onSelectCategoryType {
  sidebarItems: sidebarItem[];
  navbarItems: sidebarItem[];
  PopularFrequentSearchItems: PopularFrequentSearchType[];
  PopularFrequentSearchTitle: string;
  onSelectPopularItem: (item: PopularFrequentSearchType) => void;
  categoryOptions: SearchCategoryItemType[];
  collectionGroupedItems: Array<SearchResultItemCollectionType>;
  placeholder: string;
  sourceId: string;
}

export interface NutritionScreenProps {
  filters: Array<filterButtonItem>;
  onSelectFilterItems: (item: string[]) => void;
  availableAmounts: Array<string>;
  onSelectAvailableAmounts: (item: string) => void;
  source: string;
  nutritionRatesItems: Array<rateItem>;
  nutritionTableItems: Array<nutritionTableItem>;
  allNutrients: Array<filterItem>;
  getSelectedNutrients: (items: string[]) => void;
}
