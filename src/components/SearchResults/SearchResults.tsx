import { SearchResult, SearchResultItemType } from "@forkfacts/models";
import { recommendations } from "../../helpers/static-data";
import React from "react";
import { BiHistory } from "react-icons/bi";

interface SearchResultsProps {
  collections: SearchResult[];
  onSelectItem: (item: SearchResultItemType) => Promise<void>;
  isSearch?: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({ collections, onSelectItem, isSearch }) => {
  return (
    <div className="mt-4 px-3">
      <div className="">
        <h1 className={!isSearch ? "block text-dark prose-titleMedium font-500" : "hidden"}>
          RECENTLY VIEWED
        </h1>
        <div>
          <div className=" mt-[20px]">
            {collections.map((result, index) => {
              return (
                <div
                  className="flex items-center gap-1.5 mb-[18px]"
                  key={index}
                  onClick={() => {
                    onSelectItem(result);
                  }}
                >
                  <div>
                    <BiHistory className="text-dark w-[24px] h-[24px]" />
                  </div>
                  <h2 className="prose-titleSmall font-500 text-main">{result.name}</h2>
                </div>
              );
            })}
          </div>
          <hr />
        </div>
        <div className={`${isSearch ? "hidden" : "block"} mt-5 w-full`}>
          <div>
            <h1 className="prose-titleMedium text-dark font-500">RECOMMENDATIONS</h1>
          </div>
          <div className="mt-[20px] w-full">
            {recommendations.map((recommendation, index) => {
              return (
                <div key={index} className="mb-[22px] w-full">
                  <h1 className="prose-titleSmall text-main font-500 mb-3">
                    {recommendation.category}
                  </h1>
                  <div className="gap-4 flex items-center mt-6 overflow-x-auto overscroll-x-contain scrollbar-none custom-scrollbar">
                    {recommendation.collections.map((collection, index) => {
                      return (
                        <div
                          className="border-[1px] border-[#4C42E8] bg-white whitespace-nowrap rounded-[36px] h-[36px] flex justify-center items-center"
                          key={index}
                        >
                          <button className="px-[16px] py-[8px] prose-labelLarge font-500 text-primary">
                            {collection.name}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
