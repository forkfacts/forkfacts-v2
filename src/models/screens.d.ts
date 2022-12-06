import { GroupListsType, catergoryItemType, onSelectCategoryType } from "@forkfacts/models";

export interface TypingSearchScreenProps extends onSelectCategoryType {
  groupLists: GroupListsType[];
  categoryOptions: catergoryItemType[];
  handleClearInput: () => void;
  handleCloseHeader: () => void;
  handleViewMoreEvent: () => void;
  onSelectItem: (item: SearchResultItemType) => item;
  showClearInput: boolean;
}

export interface RecentSearchScreenProps {
  recentLists: SearchResultItemType[];
  handleClearInput: () => void;
  handleCloseHeader: () => void;
  handleViewMoreEvent: () => void;
  onSelectItem: (item: SearchResultItemType) => void;
  showClearInput: boolean;
}
