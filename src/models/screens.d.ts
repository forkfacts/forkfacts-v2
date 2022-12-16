import {
  collection,
  SearchCategoryItemType,
  onSelectCategoryType,
  SearchResultItemCollectionType,
  PopularFrequentSearchType,
  sidebarItem,
} from "@forkfacts/models";

export interface TypingSearchScreenProps extends onSelectCategoryType {
  collectionGroupedItems: SearchResultItemCollectionType[];
  categoryOptions: SearchCategoryItemType[];
  onClearSearch: () => void;
  onClosePage: () => void;
  handleViewMore: () => void;
  onSelectItem: (item: SearchResultItemType) => void;
  multiple: boolean;
}

export interface RecentSearchScreenProps {
  collectionListsItems: SearchResultItemType[];
  onClearSearch: () => void;
  onClosePage: () => void;
  handleViewMore: () => void;
  onSelectItem: (item: SearchResultItemType) => item;
  setIsOpen: (a: boolean) => void;
}

export interface HomeScreenProps extends onSelectCategoryType {
  sidebarItems: sidebarItem[];
  navbarItems: sidebarItem[];
  PopularFrequentSearchItems: PopularFrequentSearchType[];
  PopularFrequentSearchTitle: string;
  onSelectPopularItem: (item: PopularFrequentSearchType) => void;
  sourceId: string;
  categoryOptions: SearchCategoryItemType[];
  collectionGroupedItems: SearchResultItemCollectionType[];
  handleViewMore: () => void;
}
