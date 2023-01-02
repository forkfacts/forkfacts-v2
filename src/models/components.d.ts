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
  valuePercent: number | null;
  value: {
    amount: number;
    unit: string;
  };
  rdi: {
    amount: number;
    unit: string;
  };
}
export interface nutritionTableItem {
  nutrient: string;
  amount?: number;
  amountUnit?: string;
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

export interface summaryItem {
  name: string;
  percentage: number;
  weight: string;
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
export interface filterButtonItem {
  name: "All filters" | "Life stage" | "Age" | "Nutrients" | "Measure Units";
}

export interface NavbarProps {
  navbarItems: Array<sidebarItem>;
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

export interface NutritionSummaryProps {
  nutritionSummaryItems: Array<summaryItem>;
}

export interface NutrientSummaryItemProps {
  weight: string;
  percentage: number;
  name: string;
}

export interface NutritionFilterProps {
  filters: Array<filterButtonItem>;
  onSelectFilterItems: (item: string[]) => void;
  setOpenMobilePage: (item: boolean) => void;
}

export interface NutritionTableContentProps {
  nutritionTableItems: Array<nutritionTableItem>;
}

export interface NutritionTableProps {
  nutritionTableItems: Array<nutritionTableItem>;
  allNutrients: Array<filterItem>;
  getSelectedNutrients: (items: string[]) => void;
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

export interface FilterButtonProps {
  name: string;
  onSelectItem: (item: string, index: number) => void;
  index: number;
  selectedItemArrays: string[];
  setOpenMobilePage: (item: boolean) => void;
}

export interface NutrientServingSizeProps {
  servingSizeAmounts: Array<string>;
  onSelectServingSizeAmount: (item: string) => void;
}

export interface LifeStageProps {
  lifeStageItems: Array<lifeStageItem>;
  onSelectLifeStageItem: (name: string) => void;
}

export interface AgeItemsProps {
  ageItems: Array<ageItem>;
  onSelectAgeItem: (item: ageItem) => void;
}

export interface SearchNutritionFilterProps {
  nutritionFilterItems: Array<SearchNutritionFilterItem>;
  onSelectNutritionFilterItem: (item: SearchNutritionFilterItem[]) => void;
}

export interface SearchNutritionFilterItem {
  name: string;
  subItems: { name: string; checked: boolean }[];
  checked: boolean;
}
export interface AllFiltersProps {
  selectedFilters: string[];
  lifeStageItems: Array<lifeStageItem>;
  ageItems: Array<ageItem>;
  nutritionFilterItems: Array<SearchNutritionFilterItem>;
  measurementFilterItems: string[];
  openMobilePage: boolean;
  setOpenMobilePage: (item: boolean) => void;
  onSelectFilterPageData: (item: any) => void;
  filtersTotal: number;
}

export interface MeasurementFilterProps {
  measurementFilterItems: string[];
  onSelectMeasurementItem: (item: string) => void;
}
