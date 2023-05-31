import React, { useEffect, useMemo, useRef, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { BiArrowBack } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";
import {
  AutocompleteOptions,
  AutocompleteState,
  createAutocomplete,
} from "@algolia/autocomplete-core";
import { getAlgoliaResults } from "@algolia/autocomplete-preset-algolia";
import { Hit } from "@algolia/client-search";
import algoliasearch from "algoliasearch/lite";
import SearchResults from "../../../SearchResults/SearchResults";
import {
  ForLoops,
  fetchRecentSearches,
  SearchParams,
  addSearchEntry,
  spaceToDashes,
} from "@forkfacts/helpers";
import { SearchResultItemType } from "@forkfacts/models";
import { Preloader } from "konsta/react";
// import { navigate } from "gatsby";

interface FoodSearchViewProps {
  setOpenSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

const appId = process.env.GATSBY_SEARCH_APP_ID as string;
const apiKey = process.env.GATSBY_SEARCH_API_KEY as string;
const searchClient = algoliasearch(apiKey, appId);
const INDEX_NAMES = ["ff_index", "sr_index"];

type AutocompleteItem = Hit<{
  category: any;
  image: string;
  name: string;
  hap_name: string;
  objectID: string;
  url: string;
}>;

function FoodSearchView(
  props: Partial<AutocompleteOptions<AutocompleteItem>> & FoodSearchViewProps
) {
  const [recentSearches, setRecentSearches] = useState<SearchParams[] | SearchResultItemType[]>([]);
  const [autocompleteState, setAutocompleteState] = useState<AutocompleteState<AutocompleteItem>>({
    collections: [],
    completion: null,
    context: {},
    isOpen: false,
    query: "",
    activeItemId: null,
    status: "idle",
  });
  const { query, collections, isOpen, status } = autocompleteState;

  const autocomplete = useMemo(
    () =>
      createAutocomplete<
        AutocompleteItem,
        React.BaseSyntheticEvent,
        React.MouseEvent,
        React.KeyboardEvent
      >({
        onStateChange({ state }) {
          setAutocompleteState(state);
        },
        shouldPanelOpen: () => true,
        getSources() {
          return [
            {
              sourceId: "forkfact-v2",
              getItems({ query }) {
                return getAlgoliaResults({
                  searchClient,
                  queries: INDEX_NAMES.map((indexName) => ({ indexName, query })),
                });
              },
              getItemUrl({ item }) {
                return item.url;
              },
            },
          ];
        },
        ...props,
      }),
    [props]
  );

  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const { setQuery } = autocomplete;
  const onClosePage = () => {
    props.setOpenSearch(false);
  };

  const onSelectItem = async (item: SearchResultItemType) => {
    const searchData: SearchParams = {
      name: item.name,
      hap_name: item.hap_name,
      category: item.category,
      timestamp: new Date(),
      searchLocation: "Food",
    };
    await addSearchEntry(searchData);
    const path = `${spaceToDashes(item.name)}`;
    // navigate(path);
    setQuery(""); // for now let clear the search
  };

  useEffect(() => {
    async function fetchData() {
      const searches = await (await fetchRecentSearches()).reverse();
      setRecentSearches(searches as SearchParams[]);
    }
    fetchData();
  }, [isOpen, query]);

  return (
    <div>
      <div className="bg-[#F3EFF4] w-full fixed top-0 left-0 right-0 mb-10">
        <div className="flex items-center justify-between w-full gap-1 py-4 px-3">
          <div className="w-[10%] flex ">
            <BiArrowBack className="w-[24px] h-[24px]" onClick={onClosePage} />
          </div>
          <form
            className="w-[100%] relative"
            ref={formRef}
            {...autocomplete.getFormProps({ inputElement: inputRef.current })}
          >
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <IoMdSearch size={20} />
            </div>
            <input
              className="rounded-[36px] h-[45px] pl-10 w-full border-[1px] border-[#fff] prose-bodyMedium bg-white font-400 placeholder-dark placeholder:normal z-[999] hover:bg-white active:bg-white outline-none hover:border-0 focus:border-0 focus:outline-none"
              ref={inputRef}
              {...autocomplete.getInputProps({ inputElement: inputRef.current })}
            />
            {query && (
              <div className="absolute right-0 bg-white top-1/2 transform -translate-y-1/2 w-10 h-5 rounded-full mr-10 z-20">
                <MdOutlineCancel size={20} />
              </div>
            )}
          </form>
        </div>
      </div>
      <div className="h-3" />
      <div className="h-16" />
      <>
        {isOpen && query ? (
          <div className="mt-6 w-full">
            <ForLoops each={collections}>
              {(collection, index) => {
                const { items } = collection;
                if (items.length === 0) {
                  return (
                    <div
                      key={`source-${index}`}
                      className="w-[90%] mx-auto flex justify-center items-center h-[80vh]"
                    >
                      <h1 className="text-dark prose-titleMedium font-500">No result found</h1>
                    </div>
                  );
                } else {
                  if (status === "loading") {
                    return (
                      <div key={`source-${index}`} className="w-[90%] mx-auto ">
                        <Preloader size="w-4 h-4 pl-10" />
                      </div>
                    );
                  } else {
                    return (
                      <div key={`source-${index}`}>
                        {items.length > 0 && (
                          <SearchResults
                            collections={collection.items}
                            onSelectItem={onSelectItem}
                            isSearch={isOpen && query}
                          />
                        )}
                      </div>
                    );
                  }
                }
              }}
            </ForLoops>
          </div>
        ) : !query ? (
          <SearchResults
            collections={recentSearches as SearchResultItemType[]}
            onSelectItem={onSelectItem}
          />
        ) : null}
      </>
    </div>
  );
}

export default FoodSearchView;
