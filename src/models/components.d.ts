import { SvgIconComponent } from "@mui/icons-material";

export interface SearchResultItemType {
  name: string;
  url: string;
  image: string;
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
export interface SearchCategoryProps extends onSelectCategoryType, selectedItemType {
  label: string;
  Icon: SvgIconComponent;
}
export interface SearchCategoriesProps extends onSelectCategoryType {
  categoryOptions: Array<SearchCategoryItemType>;
}

export interface RecentSearchHeaderProps {
  showBorderBottom?: boolean;
  onClosePage: () => void;
  inputRef: any;
  autocomplete: any;
  formRef: any;
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

export interface AutoCompleteSearchProps {
  sourceId: string;
  handleViewMore: () => void;
}
