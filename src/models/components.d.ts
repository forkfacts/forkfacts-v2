import { SvgIconComponent } from "@mui/icons-material";
import { Dispatch, SetStateAction } from "react";

export interface SearchResultItemType {
  name: string;
  url: string;
  image: string;
}

export interface recommendationItem {
  name: string;
  icon?: string;
}

export interface recommendationType {
  recommendationName: string;
  recommendationItems: Array<recommendationItem>;
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
  setSelectedIndex: (value: number) => value;
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
