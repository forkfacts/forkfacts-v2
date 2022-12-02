import { SvgIconComponent } from "@mui/icons-material";

/*=============================================
=            // 1,  factSearchLists            =
=============================================*/

export interface listItemTypes {
  name: string;
  path: string;
  image: string;
}
export interface GroupListsTypes {
  listItems: Array<listItemTypes>;
  groupTitle: string;
}
interface extendsProps {
  onSelectItem: (item: listItemTypes) => item;
  onViewMore?: () => void;
}

export type FactSearchListsPropsTypes = (
  | {
      recentLists: Array<listItemTypes>;
      grouped?: boolean;
      groupLists?: Array<GroupListsTypes>;
    }
  | {
      recentLists?: Array<listItemTypes>;
      grouped: boolean;
      groupLists: Array<GroupListsTypes>;
    }
) &
  extendsProps;
export interface FactlListItemPropTypes {
  item: listItemTypes;
  onSelectItem: (item: listItemTypes) => item;
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
