import React from "react";
import { IoMdSearch } from "react-icons/io";
import { BiArrowBack } from "react-icons/bi";
import RecentlySearchResults from "../../../RecentlySearchResults/RecentlySearchResults";

interface FoodSearchViewProps {
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
}

const FoodSearchView: React.FC<FoodSearchViewProps> = ({ setIsFocused }) => {
  const onClosePage = () => {
    setIsFocused(false);
  };

  return (
    <div>
      <div className="bg-[#F3EFF4] w-full">
        <div className="flex items-center justify-between w-full gap-1 py-4 px-3">
          <div className="w-[10%] flex ">
            <BiArrowBack className="w-[24px] h-[24px]" onClick={onClosePage} />
          </div>
          <div className="w-[100%] relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <IoMdSearch size={20} />
            </div>
            <input
              type="text"
              className="rounded-[36px] h-[45px] pl-10 w-full border-[1px] border-[#fff] prose-bodySmall bg-white"
              placeholder="Search for foods, recipes"
            />
          </div>
        </div>
      </div>
      <RecentlySearchResults />
    </div>
  );
};

export default FoodSearchView;
