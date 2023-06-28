import React, { useState } from "react";
import { BiFilter } from "react-icons/bi";
import { useStore } from "../../../helpers/stores";
import { genders } from "../../../helpers/static-data";
import { Navbar, Radio, Sheet } from "konsta/react";
import { RdiAge } from "@forkfacts/models";
import { RxChevronRight } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const AllFilters = () => {
  const [sheetOpened, setSheetOpened] = useState(false);
  const {
    selectedLifeStage,
    setSelectedLifeStage,
    selectedAge,
    setSelectedAge,
    age,
    defaultFilter,
    setDefaultFilter,
    singleFilterSelection,
  } = useStore((state) => state);
  const handleSelectedItem = (name: string) => {
    setSelectedLifeStage(name);
  };
  const handleSelectAge = (item: RdiAge) => {
    if (!selectedLifeStage) return;
    let ageString = "";
    if (!item.end) {
      ageString = `>70 years`;
    } else {
      ageString = `${item.start}-${item.end} ${item.ageUnit}`;
    }
    const newAge = {
      start: item.start,
      end: item.end,
      ageUnit: item.ageUnit,
    };
    setSelectedAge(newAge);
    setDefaultFilter(false);
  };
  const resetButton = () => {
    setDefaultFilter(true);
    setSelectedLifeStage("Females");
    setSelectedAge({
      start: 31,
      end: 50,
      ageUnit: "Year",
    });
  };
  return (
    <div>
      <button
        className={`w-[44px] h-[34px] text-[#47464F]  rounded-[8px] flex justify-center items-center box-border z-[999] ${
          Object.keys(selectedAge).length && selectedLifeStage && !defaultFilter
            ? "bg-[#F2EFFF] pr-2 pl-1"
            : (Object.keys(selectedAge).length && !defaultFilter) ||
              (selectedLifeStage && !defaultFilter)
            ? "bg-[#F2EFFF] pr-2 pl-1"
            : "bg-white border-[1px] border-[#E5E1E6]"
        }`}
        onClick={() => setSheetOpened(true)}
      >
        <BiFilter
          className={`w-[24px] h-[24px] ${
            Object.keys(selectedAge).length && selectedLifeStage && !defaultFilter
              ? "text-primary-40"
              : (Object.keys(selectedAge).length && !defaultFilter) ||
                (selectedLifeStage && !defaultFilter)
              ? "text-primary-40"
              : "text-[#47464F]"
          }`}
        />
        <span
          className={`${
            Object.keys(selectedAge) && selectedLifeStage && !defaultFilter
              ? "text-primary-40"
              : Object.keys(selectedAge) || (selectedLifeStage && !defaultFilter)
              ? "text-primary-40"
              : "text-[#47464F]"
          }`}
        >
          {Object.keys(selectedAge).length &&
          selectedLifeStage &&
          !defaultFilter &&
          !singleFilterSelection
            ? 2
            : (Object.keys(selectedAge).length && !defaultFilter) ||
              (selectedLifeStage && !defaultFilter)
            ? 1
            : singleFilterSelection
            ? 1
            : null}
        </span>
      </button>
      <Sheet
        className="pb-safe w-full rounded-tr-[16px] rounded-tl-[16px] h-[80vh] overflow-scroll hide-visible-scrollbar bg-surface"
        opened={sheetOpened}
        onBackdropClick={() => setSheetOpened(false)}
      >
        <div className="bg-white">
          <Navbar
            title="ALL FILTERS"
            bgClassName="bg-white"
            className="pr-4 overflow-hidden"
            titleClassName="text-[16px] font-500 leading-[20px] text-[#1C1B1F] tracking-[0.1p]"
            titleFontSizeMaterial="text-[16px]"
            right={
              <IoMdClose
                className="w-[24px] h-[24px] text-[#78767A]"
                onClick={() => setSheetOpened(false)}
              />
            }
          />

          <hr />
          <div className="w-full px-3 pt-4 mb-14 bg-white h-full">
            <h1 className="mb-[20px] prose-titleMedium text-textDark font-500">Age</h1>
            <div className="flex gap-5 flex-col mb-3">
              {age.map((age, index) => {
                return (
                  <div className="flex gap-5" onClick={() => handleSelectAge(age)} key={index}>
                    <Radio
                      checked={
                        (selectedAge.start === age.start && selectedAge.end == age.end) ||
                        selectedAge.start > 70
                          ? true
                          : false
                      }
                      onChange={() => handleSelectAge(age)}
                    />
                    {age.end || age.end === 0 ? (
                      <h1 className="prose-titleMedium font-500 text-main">
                        {age.end === undefined ? 0 : age.start + "-" + age.end} {age.ageUnit}
                      </h1>
                    ) : (
                      <h1 className="flex items-center prose-titleMedium font-500 text-main">
                        <RxChevronRight />
                        <span>
                          {age.start} {age.ageUnit}
                        </span>
                      </h1>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="flex bg-[#F2EFFF] py-[8px] px-[16px] rounded-[4px] mb-5 justify-between mt-[24px]">
              <h1 className="prose-titleSmall font-500 text-textDark">Remember by choice</h1>
              <input
                type="checkbox"
                id="myCheckbox"
                className="h-4 w-4 text-primary-40 transition duration-150 ease-in-out border-[10px] border-[#1C1B1F] font-500"
                defaultChecked={false}
              />
            </div>
          </div>
          <hr />
          <div className="w-full px-3 mt-5">
            <h1 className="mb-[16px] prose-titleMedium text-textDark font-500">Life Stage</h1>
            <div className="flex flex-wrap mb-3">
              {genders.map((item, index) => {
                return (
                  <div
                    className={`w-[33%] h-[120px] border-[1px] border-[#F2EFFF] flex items-center justify-center ${
                      selectedLifeStage.toLowerCase() === item.name.toLowerCase()
                        ? "bg-[#F2EFFF]"
                        : "bg-white"
                    }`}
                    key={index}
                    onClick={() => handleSelectedItem(item.name)}
                  >
                    <div className="flex justify-center flex-col items-center">
                      <item.icon
                        color={
                          selectedLifeStage.toLowerCase() === item.name.toLowerCase()
                            ? "#4C42E8"
                            : "#929094"
                        }
                      />
                      <h1
                        className={`font-500 prose-titleMedium mt-1 ${
                          selectedLifeStage.toLowerCase() === item.name.toLowerCase()
                            ? "text-primary-40"
                            : "text-main"
                        }`}
                      >
                        {item.name}
                      </h1>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex bg-[#F2EFFF] py-[8px] px-[16px] rounded-[4px] mb-5 justify-between mt-[24px]">
              <h1 className="prose-titleSmall font-500 text-textDark">Remember by choice</h1>
              <input
                type="checkbox"
                id="myCheckbox"
                className="h-4 w-4 text-primary-40 transition duration-150 ease-in-out border-[10px] border-[#1C1B1F] font-500"
                defaultChecked={false}
              />
            </div>
          </div>
        </div>
        <div className="sticky p-[24px] bottom-0 left-0 right-0 bg-white w-full h-[10vh] flex justify-end pb-safe overflow-hidden z-[999]">
          <h1 className="text-primary-40 font-500 prose-labelLarge" onClick={resetButton}>
            Reset
          </h1>
        </div>
      </Sheet>
    </div>
  );
};

export default AllFilters;
