import { Button } from "konsta/react";
import React from "react";
import { BiHistory } from "react-icons/bi";

interface RecentlySearchResult {
  name: string;
  url: string;
}

interface Recommendation {
  category: string;
  collections: { name: string }[];
}

const recommendations: Recommendation[] = [
  {
    category: "SUPERFOODS",
    collections: [{ name: "Chia seeds" }, { name: "Flax seeds" }, { name: "Tumeric" }],
  },
  {
    category: "COMPARE FOODS",
    collections: [{ name: "Nuts and seeds" }, { name: "Legumes" }, { name: "Fruits" }],
  },
  {
    category: "VITAMINS AND MINERALS",
    collections: [{ name: "Vitamin A" }, { name: "Zinc" }, { name: "Vitamin B12" }],
  },
  {
    category: "RECIPES",
    collections: [{ name: "Creamy broccoli pasta" }, { name: "Broccoli pasta salad" }],
  },
];

const results: RecentlySearchResult[] = [
  { name: "Kidney beans light, Legume", url: "Kidney beans light, Legume" },
  { name: "Broccoli pasta salad", url: "Kidney beans light, Legume" },
  { name: "Chicken pie ", url: "Kidney beans light, Legume" },
  { name: "Grape fruit juices", url: "Grape fruit juices" },
];

const RecentlySearchResults = () => {
  return (
    <div className="mt-4 px-3">
      <div className="prose-titleMedium">
        <h1 className="text-dark">Recently viewed</h1>
        <div>
          <div className=" mt-[20px]">
            {results.map((result, index) => {
              return (
                <div className="flex items-center gap-1.5 mb-[20px]" key={index}>
                  <BiHistory className="text-dark w-[24px] h-[24px]" />
                  <h2 className="prose-titleSmall font-500 text-main">{result.name}</h2>
                </div>
              );
            })}
          </div>
          <hr />
        </div>
        <div className="mt-5">
          <div>
            <h1 className="prose-titleMedium text-textDark font-500">Recommendations</h1>
          </div>
          <div className="mt-[16px]">
            {recommendations.map((recommendation, index) => {
              return (
                <div key={index} className="mb-[22px]">
                  <h1 className="prose-titleSmall text-dark font-500 mb-3">
                    {recommendation.category}
                  </h1>
                  <div className="flex gap-4">
                    {recommendation.collections.map((collection, index) => {
                      return (
                        <Button
                          touchRipple
                          className="border-[1px] border-[#4C42E8] bg-white text-primary prose-labelLarge whitespace-nowrap px-[8px] py-[16px]"
                          key={index}
                          style={{ borderRadius: "36px" }}
                        >
                          {collection.name}
                        </Button>
                      );
                    })}
                  </div>
                  <hr className="mt-4" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentlySearchResults;
