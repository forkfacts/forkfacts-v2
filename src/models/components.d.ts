import { SvgIconComponent } from "@mui/icons-material";
import React, { Dispatch, SetStateAction } from "react";

export interface SearchResultItemType {
  name: string;
  url: string;
  image: string;
}
export interface recommendationItem {
  name: string;
  icon?: string;
}

export interface filterItem {
  name: string;
}

export interface ageItem {
  start: number;
  end: number;
  unit: string;
}

export type lifeStageItem = {
  name: string;
  icon: SvgIconComponent;
};

export interface DetailsPageTitlesItem {
  title: string;
}

export interface summaryItem {
  name: string;
  percentage: number;
  weight: string;
}
export interface DetailsPageTitlesItem {
  title: string;
}
export interface filterItem {
  name: string;
}
export interface recommendationType {
  recommendationName: string;
  recommendationItems: Array<recommendationItem>;
}
export interface compareTableItem {
  foodName: string;
  Calories: number;
  "Beta carotene": number;
  Vitamin: number;
  Calcium: number;
  Iron: number;
}
export interface SearchCategoryItemType {
  label: string;
  Icon: SvgIconComponent;
}

export type sidebarItem = SearchCategoryItemType & {
  link: string;
};
export interface SearchResultItemCollectionType {
  collection: Array<SearchResultItemType>;
  categoryName: string;
}
export interface onSelectCategoryType {
  onSelectCategory: Dispatch<SetStateAction<string>>;
}
interface selectedItemType {
  index: number;
  setSelectedIndex: (value: number) => void;
  selectedIndex: number;
}
export interface NavbarProps {
  navbarItems: Array<sidebarItem>;
  onselectNavbarItem: Dispatch<SetStateAction<string>>;
}

export type extraInfo = {
  name: string;
  weight: string;
};
export interface PopularFrequentSearchType {
  searchImg: string;
  searchName: string;
  extraInfo: extraInfo[];
}
export interface SearchCategoryProps extends onSelectCategoryType, selectedItemType {
  label: string;
  Icon: SvgIconComponent;
}
export interface SearchCategoriesProps extends onSelectCategoryType {
  categoryOptions: Array<SearchCategoryItemType>;
}

export interface RecentSearchHeaderProps {
  showBorderBottom?: boolean;
  showClearSearch?: boolean;
  onClosePage: () => void;
  onClearSearch: () => void;
}
export interface LayoutProps {
  sidebarItems: Array<sidebarItem>;
  children: JSX.Element | JSX.Element[];
}

export interface SearchResultItemProps {
  item: SearchResultItemType;
  onSelectItem: (item: SearchResultItemType) => void;
}
interface SideBarProps {
  drawerWidth: string;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
  sidebarItems: Array<sidebarItem>;
  window?: any;
  drawerWidthExpanded: boolean;
}

interface ExtendSearchResultItemsProps {
  onSelectItem: (item: SearchResultItemType) => void;
  handleViewMore?: () => void;
}
export type SearchResultsProps = (
  | {
      collectionListsItems?: Array<SearchResultItemType>;
      multiple: true;
      collectionGroupedItems: Array<SearchResultItemCollectionType>;
    }
  | {
      collectionListsItems: Array<SearchResultItemType>;
      multiple?: false;
      collectionGroupedItems?: Array<SearchResultItemCollectionType>;
    }
) &
  ExtendSearchResultItemsProps;

export interface SideBarItemProps {
  index: number;
  selectedIndex: number;
  drawerWidthExpanded: boolean;
  item: sidebarItem;
  handleSelectedIndex: (index: number, item: sidebarItem) => void;
}

export interface PopularFrequentSearchProps {
  PopularFrequentSearchItems: Array<PopularFrequentSearchType>;
  onSelectPopularItem: (item: PopularFrequentSearchType) => void;
}

export interface PopularFrequentSearchCategoryProps {
  item: PopularFrequentSearchType;
  onSelectPopularItem: (item: PopularFrequentSearchType) => void;
}

export interface NavBarItemProps {
  item: sidebarItem;
  index: number;
  setSelectedIndex: (item: number) => void;
  selectedIndex: number;
  onselectNavbarItem: Dispatch<SetStateAction<string>>;
}

interface AutoCompleteSearchProps extends onSelectCategoryType {
  sourceId: string;
  categoryOptions: Array<SearchCategoryItemType>;
  collectionGroupedItems: Array<SearchResultItemCollectionType>;
  recommendations: Array<recommendationType>;
  setIsMobileSearchOpen: Dispatch<SetStateAction<boolean>>;
}
interface SearchRecommendationItemProps {
  item: recommendationItem;
}

export interface SearchRecommendationsProps {
  recommendations: Array<recommendationType>;
}
export interface DetailsPageHeaderProps {
  detailsHeaderValues: {
    img: string;
    name: string;
    subTitle: string;
    nutritionValues: Array<{ name: string; icon: string }>;
    tag: string;
  };
}
export interface DetailsPageTitlesProps {
  DetailsPageTitlesItems: Array<DetailsPageTitlesItem>;
  onSelectDetailsPageTitleItem: Dispatch<SetStateAction<string>>;
}
export interface DetailsPageTabItemsProps {
  tabItems: Array<sidebarItem>;
  onselectTabItem: Dispatch<SetStateAction<string>>;
}
export interface DetailsPageTabItemProps {
  item: sidebarItem;
  index: number;
  setSelectedIndex: (item: number) => void;
  selectedIndex: number;
  onSelectDetailsPageTabItem: Dispatch<SetStateAction<string>>;
}
export interface ComparingDetailsTabProps {
  compareTableItems: Array<compareTableItem>;
  compareTableDetails: {
    name: string;
    quantityAmount: string;
  };
  multipleSelectItems: filterItem[];
  getSelectedNutrients: Dispatch<SetStateAction<string[]>>;
}
export interface SharedSocialMediaProps {
  isSharedMediaOpen: boolean;
  setIsSharedMediaOpen: Dispatch<SetStateAction<boolean>>;
  link: string;
}

export interface NutritionSummaryProps {
  nutritionSummaryItems: Array<summaryItem>;
}
export interface NutrientSummaryItemProps {
  weight: string;
  percentage: number;
  name: string;
}

export interface NutritionDetailsTabProps {
  nutritionSummaryItems: Array<summaryItem>;
  lifeStageItems: Array<lifeStageItem>;
  onSelectLifeStageItem: Dispatch<SetStateAction<any | string>>;
  ageItems: Array<ageItem>;
  nutritionFilterItems: Array<SearchNutritionFilterItem>;
  measurementFilterItems: string[];
  onSelectMeasurementItem: (item: string) => void;
  onSelectNutritionFilterItem: Dispatch<SetStateAction<SearchNutritionFilterItem[] | any>>;
  onSelectAgeItem: dispatch<SetStateAction<ageItem>>;
  onSelectUnit: Dispatch<SetStateAction<string>>;
  units: string[];
  nutritionTableItems: DetailsNutritionTableItem[];
}

export interface NutritionFilterProps {
  lifeStageItems: Array<lifeStageItem>;
  onSelectLifeStageItem: Dispatch<SetStateAction<any | string>>;
  ageItems: Array<ageItem>;
  onSelectAgeItem: dispatch<SetStateAction<ageItem>>;
  nutritionFilterItems: Array<SearchNutritionFilterItem>;
  onSelectNutritionFilterItem: Dispatch<SetStateAction<SearchNutritionFilterItem[] | any>>;
}

export interface SelectNutrientsProps {
  allNutrients: filterItem[];
  getSelectedNutrients: (items: string[]) => void;
}

export interface NutrientHeaderProps {
  servingSizeAmounts: Array<string>;
  source: string;
  onSelectServingSizeAmount: (item: string) => void;
}

export interface NutrientServingSizeProps {
  servingSizeAmounts: Array<string>;
  onSelectServingSizeAmount: (item: string) => void;
}

export interface LifeStageProps {
  lifeStageItems: Array<lifeStageItem>;
  onSelectLifeStageItem: Dispatch<SetStateAction<string | any>>;
  isDropdown: boolean;
}

export interface AgeItemsProps {
  ageItems: Array<ageItem>;
  onSelectAgeItem: dispatch<SetStateAction<ageItem>>;
  isDropdown: boolean;
}

export interface SearchNutritionFilterProps {
  nutritionFilterItems: Array<SearchNutritionFilterItem>;
  onSelectNutritionFilterItem: Dispatch<SetStateAction<SearchNutritionFilterItem[] | any>>;
  isDropdown: boolean;
}

export interface SearchNutritionFilterItem {
  name: string;
  subItems: { name: string; checked: boolean }[];
  checked: boolean;
}
export interface AllFiltersProps {}

export interface MeasurementFilterProps {
  measurementFilterItems: string[];
  onSelectMeasurementItem: (item: string) => void;
}
export interface MultipleSelectsProps {
  multipleSelectItems: filterItem[];
  getSelectedNutrients: Dispatch<SetStateAction<string[]>>;
  renderSelectButton?: String | React.ReactNode;
  open: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  multiselectTitle: string;
  margin: any;
}

export interface filterButtonItem {
  name: "All filters" | "Life stage" | "Age" | "Nutrients" | "Measure Units";
}

export interface DetailsNutritionTableItem {
  nutrient: string;
  dailyValue: number;
  amount: string;
  rdi: {
    value: number;
    weight: string;
  };
  nutrientContents: Array<{
    nutrient: string;
    dailyValue: number;
    amount: string;
    rdi: { value: number; weight: string };
  }>;
}

export interface DetailsNutritionTableProps {
  nutritionTableItems: DetailsNutritionTableItem[];
}
