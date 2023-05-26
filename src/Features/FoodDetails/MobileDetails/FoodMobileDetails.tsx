import { Page } from "konsta/react";
import React, { useState } from "react";
import DetailsHeader from "./FoodDetailsHeader";
import FoodDetailsSearch from "./FoodDetailsSearch";
import FoodSearchView from "./FoodSearchView";
import FoodDetailsFilters from "../../FoodDetailsFilters/FoodDetailsFilters";

const MobileDetails = () => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <Page className="bg-white">
      {isFocused ? (
        <FoodSearchView setIsFocused={setIsFocused} />
      ) : (
        <div className="px-[19px]">
          <DetailsHeader />
          <FoodDetailsSearch setIsFocused={setIsFocused} />
          <FoodDetailsFilters />
        </div>
      )}
    </Page>
  );
};

export default MobileDetails;
