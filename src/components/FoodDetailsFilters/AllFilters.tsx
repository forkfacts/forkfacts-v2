import React from "react";
import { BiFilter } from "react-icons/bi";

const AllFilters = () => {
  return (
    <div>
      <button className="w-[34px] h-[34px] text-[#47464F] border-[1px] border-[#E5E1E6] rounded-[8px] flex justify-center items-center box-border">
        <BiFilter className="text-[#47464F] w-[24px] h-[24px]" />
      </button>
    </div>
  );
};

export default AllFilters;
