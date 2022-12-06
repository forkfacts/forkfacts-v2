import { SvgIconComponent } from "@mui/icons-material";

export interface SearchResultItemType {
  name: string;
  path: string;
  image: string;
}
export interface GroupListsType {
  listItems: Array<SearchResultItemType>;
  categoryName: string;
}
interface ExtendSearchResultItemsProps {
  onSelectItem: (item: SearchResultItemType) => item;
  handleViewMore?: () => void;
}
export type SearchResultItemsPropsType = (
  | {
      recentLists?: Array<SearchResultItemType>;
      grouped: boolean;
      groupLists: Array<GroupListsType>;
    }
  | {
      recentLists: Array<SearchResultItemType>;
      grouped?: boolean;
      groupLists?: Array<GroupListsType>;
    }
) &
  ExtendSearchResultItemsProps;
export interface SearchResultItemPropsType {
  item: SearchResultItemType;
  onSelectItem: (item: SearchResultItemType) => item;
}

export interface SearchCatergoryItemType {
  label: string;
  Icon: SvgIconComponent;
}
export interface onSelectCategoryType {
  onSelectCategory: (item: SearchCatergoryItemType) => item;
}
export interface SearchCategoryProps extends onSelectCategoryType {
  label: string;
  Icon: SvgIconComponent;
  index: number;
  setSelectedIndex: (value: number) => value;
  selectedIndex: number;
}
export interface SearchCategoriesProps extends onSelectCategoryType {
  categoryOptions: Array<SearchCatergoryItemType>;
}

export interface RecentSearchHeaderProps {
  showBorderBottom?: boolean;
  showClearInput?: boolean;
  handleCloseHeader: () => void;
  handleClearInput: () => void;
}
