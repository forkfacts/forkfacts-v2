import React from "react";
import Weight from "./Weight";
import Gender from "./Gender";
import Age from "./Age";
import { Button } from "konsta/react";
import { BsFilter } from "react-icons/bs";

const FoodDetailsFilters = () => {
  return (
    <div className="flex items-center w-full mt-4">
      <button className="w-[34px] h-[34px] text-[#47464F] border-[1px] border-[#E5E1E6] px-[8px] py-[10px] rounded-[8px]">
        <BsFilter className="text-[#47464F]" />
      </button>
      <Weight />
      <Gender />
      <Age />
    </div>
  );
};

export default FoodDetailsFilters;
