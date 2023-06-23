import { Navbar } from "konsta/react";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdMore } from "react-icons/io";
import { useStore } from "../../../helpers/stores";
import Sidebar from "../../Sidebar/Sidebar";
import MoreDetailsOption from "./MoreDetailsOption";

const DetailsHeader = () => {
  const food = useStore((state) => state.food);
  const [isOpen, setIsOpen] = useState(false);
  const [leftPanelOpened, setLeftPanelOpened] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar
        left={
          <>
            <RxHamburgerMenu
              className="w-[24px] h-[24px] text-main font-700 cursor-pointer"
              onClick={() => setLeftPanelOpened(true)}
            />
          </>
        }
        right={
          <button className="popover-navbar-link">
            <IoMdMore className="w-[24px] h-[24px]" onClick={() => togglePopup()} />
          </button>
        }
        title={food.name}
        centerTitle
        className="top-0 fixed left-0 right-0 p-3 font-[500]"
        titleClassName="text-[20px] font-500 leading-[20px] text-[#1C1B1F] tracking-[0.1px] w-60 truncate pb-3"
        bgClassName="bg-white"
      />
      <div className="relative">
        <MoreDetailsOption isOpen={isOpen} setIsOpen={setIsOpen} />
        <Sidebar leftPanelOpened={leftPanelOpened} setLeftPanelOpened={setLeftPanelOpened} />
      </div>
    </>
  );
};

export default DetailsHeader;
