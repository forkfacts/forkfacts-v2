import { SvgIconComponent } from "@mui/icons-material";

export interface SearchResultItemType {
  name: string;
  url: string;
  image: string;
}

export interface filterItem {
  name: string;
  amount: number;
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

export interface content {
  nutrient: string;
  valuePercent: string;
  rdi: {
    amount: string;
    unit: string;
  };
}
export interface nutritionTableItem {
  title: string;
  amount: number;
  amountUnit: string;
  content: Array<content>;
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
  onSelectCategory: (item: SearchCategoryItemType) => void;
}

interface selectedItemType {
  index: number;
  setSelectedIndex: (value: number) => value;
  selectedIndex: number;
}

export interface rateItem {
  name: string;
  percentage: string;
  weight: string;
}

export interface NavbarProps {
  navbarItems: Array<sidebarItem>;
}

export type extraInfo = {
  name: string;
  weight: string;
};
export interface PopularFrequentSearchType {
  searchImg: string;
  searchName: string;
  searchLabels: string[];
  extraInfo: extraInfo[];
}
export interface MobileSearchCategoryProps extends onSelectCategoryType, selectedItemType {
  label: string;
  Icon: SvgIconComponent;
}
export interface MobileSearchCategoriesProps extends onSelectCategoryType {
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

export interface filterButtonItem {
  name: string;
}

interface SideBarProps {
  drawerWidth: string;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
  sidebarItems: Array<sidebarItem>;
  window?: window;
  drawerWidthExpanded: boolean;
}

interface ExtendSearchResultItemsProps {
  onSelectItem: (item: SearchResultItemType) => item;
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
  PopularFrequentSearchTitle: string;
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
}

interface AutoCompleteSearchProps extends onSelectCategoryType {
  sourceId: string;
  categoryOptions: Array<SearchCategoryItemType>;
  collectionGroupedItems: Array<SearchResultItemCollectionType>;
}

export interface NutritionRatesProps {
  nutritionRatesItems: Array<rateItem>;
}

export interface NutritionRateProps {
  weight: string;
  percentage: string;
  name: string;
}

export interface NutritionFiltersProps {
  filters: Array<filterButtonItem>;
  onSelectFilterItems: (item: string[]) => void;
}

export interface NutritionTableContentProps {
  nutritionTableItems: Array<nutritionTableItem>;
}

export interface NutritionTableProps {
  nutritionTableItems: Array<nutritionTableItem>;
  allNutrients: Array<filterItem>;
  getSelectedNutrients: (items: string[]) => void;
}

export interface AllNutrientSelectsProps {
  allNutrients: filterItem[];
  getSelectedNutrients: (items: string[]) => void;
}

export interface NutrientHeaderProps {
  availableAmounts: Array<string>;
  source: string;
  onSelectAvailableAmounts: (item: string) => void;
}

export interface FilterButtonProps {
  name: string;
  onSelectItem: (item: string, index: number) => void;
  index: number;
  selectedItemArrays: string[];
}

export interface NutrientAvailableAmountsProps {
  availableAmounts: Array<string>;
  onSelectAvailableAmounts: (item: string) => void;
}

export interface LifeStageProps {
  lifeStageItems: Array<lifeStageItem>;
  onSelectLifeStageItem: (name: string) => void;
}

export interface AgeItemsProps {
  ageItems: Array<ageItem>;
  onSelectAgeItem: (item: ageItem) => void;
}
