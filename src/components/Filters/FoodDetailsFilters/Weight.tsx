import React from "react";
import { FaSortDown } from "react-icons/fa";

const Weight = () => {
  return (
    <div>
      <button className="flex max-w-[111px] items-center gap-2 text-textDark py-[8px] pl-[16px] pr-[8px] border border-[#E5E1E6] rounded-[8px] whitespace-nowrap prose-labelLarge font-500">
        <span>100g</span>
        <FaSortDown className="w-[18px] h-[18px] -mt-2" />
      </button>
    </div>
  );
};

export default Weight;
