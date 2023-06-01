export interface SearchResultItemType {
  name: string;
  hap_name: string;
  url: string;
  image: string;
  category: string;
}

export interface Recommendation {
  category: string;
  collections: { name: string }[];
}

export interface SearchResult {
  category: any;
  name: string;
  hap_name: string;
  url: string;
  image: string;
}
