import React from "react";
import Weight from "./Weight";
import Gender from "./Gender";
import Age from "./Age";
import AllFilters from "./AllFilters";

const FoodDetailsFilters = () => {
  return (
    <div className="flex items-center mt-6 gap-6 overflow-x-auto overscroll-x-contain scrollbar-none custom-scrollbar">
      <AllFilters />
      <Weight />
      <Gender />
      <Age />
    </div>
  );
};

export default FoodDetailsFilters;
