import {
  collection,
  SearchCategoryItemType,
  onSelectCategoryType,
  SearchResultItemCollectionType,
  PopularFrequentSearchType,
  sidebarItem,
  recommendationType,
} from "@forkfacts/models";

export interface HomeScreenProps {
  sidebarItems: sidebarItem[];
  navbarItems: sidebarItem[];
  PopularFrequentSearchItems: PopularFrequentSearchType[];
  PopularFrequentSearchTitle: string;
  onSelectPopularItem: (item: PopularFrequentSearchType) => void;
  categoryOptions: SearchCategoryItemType[];
  collectionGroupedItems: Array<SearchResultItemCollectionType>;
  sourceId: string;
  recommendations: Array<recommendationType>;
}
