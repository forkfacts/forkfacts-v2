export interface listItemTypes {
  name: string;
  path: string;
  image: string;
}
export interface GroupListsTypes {
  listItems: Array<listItemTypes>;
  groupTitle: string;
}
export type propsTypes =
  | {
      recentLists: Array<listItemTypes>;
      grouped?: boolean;
      groupLists?: Array<GroupListsTypes>;
    }
  | {
      recentLists?: Array<listItemTypes>;
      grouped: boolean;
      groupLists: Array<GroupListsTypes>;
    };
export interface FactlListItemPropTypes {
  item: listItemTypes;
}
