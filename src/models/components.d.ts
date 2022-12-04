import { SvgIconComponent } from "@mui/icons-material";

/*=============================================
=            // 1,  factSearchLists            =
=============================================*/

export interface searchResultItemTypes {
  name: string;
  path: string;
  image: string;
}
export interface GroupListsType {
  listItems: Array<searchResultItemTypes>;
  groupTitle: string;
}
interface extendSearchResultItemsProps {
  onSelectItem: (item: searchResultItemTypes) => item;
  onViewMore?: () => void;
}

export type SearchResultItemsPropsTypes = (
  | {
      recentLists?: Array<searchResultItemTypes>;
      grouped: boolean;
      groupLists: Array<GroupListsType>;
    }
  | {
      recentLists: Array<searchResultItemTypes>;
      grouped?: boolean;
      groupLists?: Array<GroupListsType>;
    }
) &
  extendSearchResultItemsProps;
export interface SearchResultItemsPropTypes {
  item: searchResultItemTypes;
  onSelectItem: (item: searchResultItemTypes) => item;
}

/*=====  End of // 1,  factSearchLists  ======*/

/*=============================================
=           // 2  searchCategory/Categories          =
=============================================*/

export interface catergoryItemTypes {
  label: string;
  Icon: SvgIconComponent;
}
export interface onSelectCategoryTypes {
  onSelectCategory: (item: catergoryItemTypes) => item;
}
export interface SearchCategoryProps extends onSelectCategoryTypes {
  label: string;
  Icon: SvgIconComponent;
  index: number;
  setSelectedIndex: (value: number) => value;
  selectedIndex: number;
}
// Update the interface contract.
export interface SearchCategoriesProps extends onSelectCategoryTypes {
  categoryOptions: Array<catergoryItemTypes>;
}

/*=====  End of// 2  searchCategory/Categories======*/
