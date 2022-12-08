import { SvgIconComponent } from "@mui/icons-material";

export interface SearchResultItemType {
  name: string;
  path: string;
  image: string;
}
export interface SearchResultItemCollectionType {
  collection: Array<SearchResultItemType>;
  categoryName: string;
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
export interface SearchResultItemProps {
  item: SearchResultItemType;
  onSelectItem: (item: SearchResultItemType) => item;
}

export interface SearchCategoryItemType {
  label: string;
  Icon: SvgIconComponent;
}
export interface onSelectCategoryType {
  onSelectCategory: (item: SearchCategoryItemType) => item;
}
export interface SearchCategoryProps extends onSelectCategoryType {
  label: string;
  Icon: SvgIconComponent;
  index: number;
  setSelectedIndex: (value: number) => value;
  selectedIndex: number;
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
