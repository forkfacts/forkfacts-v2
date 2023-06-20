import React from "react";
import { Page } from "konsta/react";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import FoodDetailsSearch from "../../FoodDetails/MobileDetails/FoodDetailsSearch";
import { recommendations } from "../../../../helpers/static-data";
import FoodSearchView from "../../FoodDetails/MobileDetails/FoodSearchView";

export default function MobileHome() {
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <Page className="bg-white">
      {openSearch ? (
        <>
          <FoodSearchView
            setOpenSearch={setOpenSearch}
            placeholder="Search for foods"
            autoFocus={true}
          />
        </>
      ) : (
        <>
          <div className="flex justify-between items-center py-4 px-2 fixed top-0 left-0 right-0 bg-white">
            <RxHamburgerMenu className="w-[24px] h-[24px] text-main font-700" />
            <img src="/forkfacts-logo.svg" alt="logo" className="-ml-2" />
            <div />
          </div>
          <div className="p-2 mt-16">
            <h1 className="text-[28px] leading-[36px] text-mai -mb-12 font-500">
              Eating smart starts with <span className="text-[#4C42E8]">knowing</span>
            </h1>
            <FoodDetailsSearch setOpenSearch={setOpenSearch} />
            <div className={` "block"} mt-12 w-full`}>
              <div>
                <h1 className="prose-titleMedium text-dark font-500">RECOMMENDATIONS</h1>
              </div>
              <div className="mt-[28px] w-full">
                {recommendations.map((recommendation, index) => {
                  return (
                    <div key={index} className="mb-[22px] w-full">
                      <h1 className="prose-titleSmall text-main font-500 mb-3">
                        {recommendation.category}
                      </h1>
                      <div className="gap-4 flex items-center mt-4 overflow-x-auto overscroll-x-contain scrollbar-none custom-scrollbar">
                        {recommendation.collections.map((collection, index) => {
                          return (
                            <div
                              className="border-[1px] border-[#C9C5CA] bg-white whitespace-nowrap rounded-[36px] h-[36px] flex justify-center items-center"
                              key={index}
                            >
                              <button className="px-[16px] py-[8px] prose-labelLarge font-500 text-main">
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
        </>
      )}
    </Page>
  );
}
