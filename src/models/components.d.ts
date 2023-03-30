import { SvgIconComponent } from "@mui/icons-material";
import React, { Dispatch, SetStateAction } from "react";
import { Dispatch, SetStateAction } from "react";
import { SVGProps } from "react";

export interface SearchResultItemType {
  name: string;
  url: string;
  image: string;
  category?: string;
}

export interface recommendationItem {
  name: string;
  icon?: string;
}

export interface filterItem {
  name: string;
}

export interface RdiAge {
  start: number;
  end?: number;
  ageUnit: "month" | "year";
  index?: number;
}

export type lifeStageItem = {
  name: string;
  icon: SVGProps;
};

export interface FoodWithSameName {
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

export interface NutritionTableRow {
  nutrient: string;
  dailyValue?: number | null;
  amount?: number;
  amountUnit?: string;
  nutrientGroup: string;
  rdi: {
    value?: number | null;
    weight?: string;
  };
}

export interface recommendationType {
  recommendationName: string;
  recommendationItems: Array<recommendationItem>;
}
export interface SearchCategoryItemType {
  label: string;
  Icon: SvgIconComponent;
}

export type MenuItem = SearchCategoryItemType & {
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
  navbarItems: Array<MenuItem>;
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
  menuItems: Array<MenuItem>;
  children: JSX.Element | JSX.Element[];
}

export interface SearchResultItemProps {
  item: SearchResultItemType;
  multiple?: boolean;
  onSelectItem: (item: SearchResultItemType) => void;
}
interface SideBarProps {
  drawerWidth: string;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
  sidebarItems: Array<MenuItem>;
  window?: any;
  drawerWidthExpanded: boolean;
}

interface ExtendSearchResultItemsProps {
  onSelectItem: (item: SearchResultItemType) => void;
}
export type SearchResultsProps = {
  collectionListsItems: Array<SearchResultItemType>;
  multiple?: true;
} & ExtendSearchResultItemsProps;

export interface SideBarItemProps {
  index: number;
  selectedIndex: number;
  drawerWidthExpanded: boolean;
  item: MenuItem;
  handleSelectedIndex: (index: number, item: MenuItem) => void;
}

export interface PopularFrequentSearchProps {
  PopularFrequentSearchItems?: Array<PopularFrequentSearchType>;
}

export interface PopularFrequentSearchCategoryProps {
  item: PopularFrequentSearchType;
}

export interface NavBarItemProps {
  item: MenuItem;
  index: number;
  setSelectedIndex: (item: number) => void;
  selectedIndex: number;
  onselectNavbarItem: Dispatch<SetStateAction<string>>;
}

interface AutoCompleteSearchProps extends onSelectCategoryType {
  sourceId: string;
  categoryOptions: Array<SearchCategoryItemType>;
  recommendations?: Array<recommendationType>;
  setIsMobileSearchOpen: Dispatch<SetStateAction<boolean>>;
}
interface SearchRecommendationItemProps {
  item: recommendationItem;
}

export interface SearchRecommendationsProps {
  recommendations: Array<recommendationType>;
}
export interface FoodOverviewProps {
  values: {
    img?: string;
    name: string;
    category: string;
    nutritionValues?: Array<{ name: string; icon: string }>;
    tag?: string;
  };
}
export interface FoodsWithSameNameProps {
  foodsWithSameNames: Array<FoodWithSameName>;
  onSelectFoodWithSameName: Dispatch<SetStateAction<string>>;
}
export interface DetailPageTabsProps {
  tabItems: Array<MenuItem>;
  onselectTabItem: Dispatch<SetStateAction<string>>;
}
export interface DetailsPageTabItemProps {
  item: MenuItem;
  index: number;
  selectedTab: string;
  handleClick: (item: sidebarItem) => void;
}
export interface ComparingDetailsTabProps {
  compareTableItems: Array<compareTableItem>;
  compareTableDetails: {
    name: string;
    quantityAmount: string;
  };
  values: filterItem[];
  onSelectedValue: Dispatch<SetStateAction<string[]>>;
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
  ageItems: Array<RdiAge>;
  nutritionFilterItems: Array<SelectedNutrient>;
  measurementFilterItems: string[];
  onSelectMeasurementItem: (item: string) => void;
  onSelectUnit: Dispatch<SetStateAction<string>>;
  units: string[];
  nutritionTableItems: NutritionTableRow[];
}

export interface NutritionFilterProps {
  lifeStageItems: Array<lifeStageItem>;
  ageItems: Array<RdiAge>;
  nutritionFilterItems: Array<SelectedNutrient>;
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
  isDropdown: boolean;
}

export interface AgeItemsProps {
  ageItems: Array<RdiAge>;
  isDropdown: boolean;
  margin?: string | number;
}

export interface SearchNutritionFilterProps {
  nutritionFilterItems: Array<SelectedNutrient>;
  isDropdown: boolean;
  margin?: string | number;
}

export interface SelectNutrientRow {
  name: string;
  nutrientGroup: string;
  checked: boolean;
}

export interface SelectedNutrient {
  name: string;
  nutrientGroup: string;
  checked: boolean;
  rows: SelectNutrientRow[];
}
export interface AllFiltersProps {}

export interface MeasurementFilterProps {
  measurementFilterItems: string[];
  onSelectMeasurementItem: (item: string) => void;
}
export interface MultipleSelectsProps {
  values: filterItem[];
  onSelectedValue: Dispatch<SetStateAction<string[]>>;
  renderSelectButton?: String | React.ReactNode;
  open: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  multiselectTitle: string;
  margin: any;
}

export interface NutritionDesktopTableProps {
  rows: NutritionTableRow[];
}

interface NutritionMobileTableProps {
  nutritionTableItems: NutritionTableRow[];
}
