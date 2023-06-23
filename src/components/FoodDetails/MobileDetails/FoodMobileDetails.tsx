import { Page } from "konsta/react";
import React, { useState } from "react";
import DetailsHeader from "./FoodDetailsHeader";
import FoodDetailsSearch from "./FoodDetailsSearch";
import FoodSearchView from "./FoodSearchView";
import {
  FoodDetailsFilters,
  FoodDetailsSummary,
  FoodNutritionCard,
  SimilarFoods,
} from "@forkfacts/components";

const MobileDetails = () => {
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <Page className="bg-white">
      {openSearch ? (
        <FoodSearchView
          setOpenSearch={setOpenSearch}
          placeholder="Search for foods"
          autoFocus={true}
        />
      ) : (
        <div>
          <div className="shadow-summaryShadow pb-8 px-[15px] bg-white">
            <DetailsHeader />
            <FoodDetailsSearch setOpenSearch={setOpenSearch} />
            <FoodDetailsFilters />
          </div>
          <div className="shadow-summaryShadow mt-2 pt-3 pb-7">
            <FoodDetailsSummary />
          </div>
          <div className="mt-1 shadow-summaryShadow">
            <FoodNutritionCard />
          </div>
          <div className="mt-1 shadow-summaryShadow mb-5">
            <SimilarFoods />
          </div>
        </div>
      )}
    </Page>
  );
};

export default MobileDetails;
