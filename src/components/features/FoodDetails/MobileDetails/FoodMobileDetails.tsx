import { Page } from "konsta/react";
import React, { useState } from "react";
import DetailsHeader from "./FoodDetailsHeader";
import FoodDetailsSearch from "./FoodDetailsSearch";
import FoodDetailsFilters from "../../../Filters/FoodDetailsFilters/FoodDetailsFilters";
import FoodDetailsSummary from "../../../FoodDetailsSummary/FoodDetailsSummary";
import FoodNutritionCard from "../../../FoodNutritionCard/FoodNutritionCard";
import SimilarFoods from "../../../SimilarFoods/SimilarFoods";
import FoodSearchView from "./FoodSearchView";

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
          <div className="shadow-summaryShadow pb-8 px-[15px]">
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
