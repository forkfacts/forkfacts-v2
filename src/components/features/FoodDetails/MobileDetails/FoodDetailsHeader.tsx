import { Navbar } from "konsta/react";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdMore } from "react-icons/io";
import { useStore } from "../../../../helpers/stores";

const DetailsHeader = () => {
  const food = useStore((state) => state.food);

  return (
    <Navbar
      left={
        <>
          <RxHamburgerMenu className="w-[24px] h-[24px] text-main font-700" />
        </>
      }
      right={
        <span>
          <IoMdMore className="w-[24px] h-[24px]" />
        </span>
      }
      title={food.name}
      centerTitle
      className="top-0 fixed left-0 right-0 p-3 font-[500]"
      titleClassName="font-500 leading-[20px] text-[#1C1B1F] tracking-[0.1px] w-60 truncate"
      bgClassName="bg-white"
      titleFontSizeMaterial="text-[20px]"
    />
  );
};

export default DetailsHeader;
