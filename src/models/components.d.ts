import { SvgIconComponent } from "@mui/icons-material";

export interface SearchResultItemType {
  name: string;
  path: string;
  image: string;
}

export interface SearchCategoryItemType {
  label: string;
  Icon: SvgIconComponent;
}

export type sidebarItem = SearchCategoryItemType;
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

export interface NavbarProps extends onSelectCategoryType {
  navbarItems: Array<SearchCategoryItemType>;
}

export type extraInfo = {
  name: string;
  weight: string;
};
interface PopularFrequentSearchType {
  searchName: string;
  searchLabels: string[];
  extraInfo: extraInfo[];
}
export interface SearchCategoryProps extends onSelectCategoryType, selectedItemType {
  label: string;
  Icon: SvgIconComponent;
  as: "category" | "navCategory";
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
  onSelectItem: (item: sidebarItem) => void;
}

export interface SearchResultItemProps {
  item: SearchResultItemType;
  onSelectItem: (item: SearchResultItemType) => item;
}
interface SideBarProps {
  onSelectItem: (item: sidebarItem) => void;
  drawerWidth: string;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
  sidebarItems: Array<sidebarItem>;
  window?: window;
  drawerWidthExpanded: boolean;
}

interface ExtendSearchResultItemsProps {
  onSelectItem: (item: SearchResultItemType) => item;
  handleViewMore: () => void;
}
export type SearchResultsProps = (
  | {
      collectionListsItems?: Array<SearchResultItemType>;
      multiple: boolean;
      collectionGroupedItems: Array<SearchResultItemCollectionType>;
    }
  | {
      collectionListsItems: Array<SearchResultItemType>;
      multiple?: boolean;
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
}
