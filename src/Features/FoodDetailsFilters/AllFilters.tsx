import React from "react";
import { BsFilter } from "react-icons/bs";

const AllFilters = () => {
  return (
    <div>
      <button className="w-[34px] h-[34px] text-[#47464F] border-[1px] border-[#E5E1E6] px-[8px] py-[10px] rounded-[8px]">
        <BsFilter className="text-[#47464F]" />
      </button>
    </div>
  );
};

export default AllFilters;
