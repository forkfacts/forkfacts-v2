import React from "react";
import { FaSortDown } from "react-icons/fa";

const Gender = () => {
  return (
    <button className="flex max-w-[111px] items-center gap-2 text-dark py-[8px] pl-[16px] pr-[8px] border border-[#E5E1E6] rounded-[8px] whitespace-nowrap prose-labelLarge font-500">
      <span>Children</span>
      <FaSortDown className="w-[18px] h-[18px] -mt-2" />
    </button>
  );
};

export default Gender;
