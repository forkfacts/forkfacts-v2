import { SvgIconComponent } from "@mui/icons-material";

/*=============================================
=     SearchResultsItems typescript types  =
=============================================*/
export interface SearchResultItemType {
  name: string;
  path: string;
  image: string;
}
export interface GroupListsType {
  listItems: Array<SearchResultItemType>;
  groupTitle: string;
}
interface ExtendSearchResultItemsProps {
  onSelectItem: (item: SearchResultItemType) => item;
  onViewMore?: () => void;
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
/*=====  End of SearchResultsItems typescript types  ======*/

/*=============================================
=    SearchCategorires/SearchCategory typescript  types   =
=============================================*/
export interface catergoryItemType {
  label: string;
  Icon: SvgIconComponent;
}
export interface onSelectCategoryType {
  onSelectCategory: (item: catergoryItemType) => item;
}
export interface SearchCategoryProps extends onSelectCategoryType {
  label: string;
  Icon: SvgIconComponent;
  index: number;
  setSelectedIndex: (value: number) => value;
  selectedIndex: number;
}
export interface SearchCategoriesProps extends onSelectCategoryType {
  categoryOptions: Array<catergoryItemType>;
}
/*=====  End of  SearchCategorires/SearchCategory types======*/
