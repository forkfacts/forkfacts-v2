import { SvgIconComponent } from "@mui/icons-material";
// factSearchLists
export interface listItemTypes {
  name: string;
  path: string;
  image: string;
}
export interface GroupListsTypes {
  listItems: Array<listItemTypes>;
  groupTitle: string;
}
export type FactSearchListsPropsTypes =
  | {
      recentLists: Array<listItemTypes>;
      grouped?: boolean;
      groupLists?: Array<GroupListsTypes>;
      onSelectItem: (item: listItemTypes) => item;
      onViewMore?: () => void;
    }
  | {
      recentLists?: Array<listItemTypes>;
      grouped: boolean;
      groupLists: Array<GroupListsTypes>;
      onSelectItem: (item: listItemTypes) => item;
      onViewMore?: () => void;
    };
export interface FactlListItemPropTypes {
  item: listItemTypes;
  onSelectItem: (item: listItemTypes) => item;
}

// searchCategory
export interface catergoryItemTypes {
  label: string;
  Icon: SvgIconComponent;
}
export interface SearchCategoryProps {
  categories: Array<catergoryItemTypes>;
  onSelectCategory: (item: catergoryItemTypes.label) => item;
}
