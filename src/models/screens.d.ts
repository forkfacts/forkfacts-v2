import {
  collection,
  SearchCategoryItemType,
  onSelectCategoryType,
  SearchResultItemCollectionType,
  drawerItem,
} from "@forkfacts/models";

export interface TypingSearchScreenProps extends onSelectCategoryType {
  collectionGroupedItems: SearchResultItemCollectionType[];
  categoryOptions: SearchCategoryItemType[];
  onClearSearch: () => void;
  onClosePage: () => void;
  handleViewMore: () => void;
  onSelectItem: (item: SearchResultItemType) => item;
  showClearSearch: boolean;
  multiple: boolean;
}

export interface RecentSearchScreenProps {
  collectionListsItems: SearchResultItemType[];
  onClearSearch: () => void;
  onClosePage: () => void;
  handleViewMore: () => void;
  onSelectItem: (item: SearchResultItemType) => item;
  showClearSearch: boolean;
  multiple: boolean;
}

export interface HomeScreenProps {
  drawerItems: Array<drawerItem>;
}
