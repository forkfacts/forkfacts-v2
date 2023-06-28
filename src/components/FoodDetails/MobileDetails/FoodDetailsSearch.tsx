import React from "react";
import { IoMdSearch } from "react-icons/io";

interface FoodDetailsSearchProps {
  setOpenSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

const FoodDetailsSearch: React.FC<FoodDetailsSearchProps> = ({ setOpenSearch }) => {
  const handleFocus = () => {
    setOpenSearch(true);
  };

  const handleBlur = () => {
    setOpenSearch(false);
  };
  return (
    <div className=" mt-18 pt-4">
      <div className="w-full relative">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
          <IoMdSearch size={24} />
        </div>
        <input
          type="text"
          className="rounded-[36px] h-[45px] pl-10 w-full border-[1px] border-[#C9C5CA] prose-bodyMedium bg-white indent-2 font-400 placeholder-dark placeholder:normal"
          placeholder="Search for food"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
    </div>
  );
};

export default FoodDetailsSearch;
