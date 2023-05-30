import React from "react";
import { BsFilter } from "react-icons/bs";

const AllFilters = () => {
  return (
    <div>
      <button className="w-[34px] h-[34px] text-[#47464F] border-[1px] border-[#E5E1E6] rounded-[8px] flex justify-center items-center box-border">
        <BsFilter className="text-[#47464F] w-[18px] h-[18px]" />
      </button>
    </div>
  );
};

export default AllFilters;
