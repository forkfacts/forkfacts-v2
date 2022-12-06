import {
  collection,
  SearchCatergoryItemType,
  onSelectCategoryType,
  collectionsType,
} from "@forkfacts/models";

export interface TypingSearchScreenProps extends onSelectCategoryType {
  collectionGroupedItems: collectionsType[];
  categoryOptions: SearchCatergoryItemType[];
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
  onSelectItem: (item: SearchResultItemType) => void;
  showClearSearch: boolean;
  multiple: boolean;
}
