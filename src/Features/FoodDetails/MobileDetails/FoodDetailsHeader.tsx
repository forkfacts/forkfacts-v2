import { Navbar } from "konsta/react";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdMore } from "react-icons/io";

const DetailsHeader = () => {
  return (
    <Navbar
      left={
        <>
          <GiHamburgerMenu className="w-[24px] h-[24px]" />
        </>
      }
      right={
        <span>
          <IoMdMore className="w-[24px] h-[24px]" />
        </span>
      }
      title="Banana, overripe, raw"
      centerTitle
      titleClassName="text-[22px] text-main font-[500] leading-leadingXX"
      bgClassName="bg-white"
    />
  );
};

export default DetailsHeader;
