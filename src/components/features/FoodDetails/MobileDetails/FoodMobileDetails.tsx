import { Page } from "konsta/react";
import React from "react";
import DetailsHeader from "./FoodDetailsHeader";
import FoodDetailsSearch from "./FoodDetailsSearch";
import FoodDetailsFilters from "../../../FoodDetailsFilters/FoodDetailsFilters";
import FoodDetailsSummary from "../../../FoodDetailsSummary/FoodDetailsSummary";
import FoodNutritionCard from "../../../FoodNutritionCard/FoodNutritionCard";
import SimilarFoods from "../../../SimilarFoods/SimilarFoods";

const MobileDetails = () => {
  return (
    <Page className="bg-white">
      <div className="shadow-summaryShadow pb-8 px-[15px]">
        <DetailsHeader />
        <FoodDetailsSearch />
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
    </Page>
  );
};

export default MobileDetails;
