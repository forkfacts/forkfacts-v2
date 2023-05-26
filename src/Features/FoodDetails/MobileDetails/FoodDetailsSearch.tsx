import React from "react";
import { IoMdSearch } from "react-icons/io";

interface FoodDetailsSearchProps {
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
}

const FoodDetailsSearch: React.FC<FoodDetailsSearchProps> = ({ setIsFocused }) => {
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div className="w-full mt-[20px] relative">
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
        <IoMdSearch size={20} />
      </div>
      <input
        type="text"
        className="rounded-[36px] h-[45px] pl-10 w-full bg-customInputBackground border-[1px] border-[#C9C5CA] prose-bodySmall"
        placeholder="Search for foods, recipes"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default FoodDetailsSearch;
