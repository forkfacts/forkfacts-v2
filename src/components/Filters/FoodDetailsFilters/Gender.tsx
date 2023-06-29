import { useStore } from "../../../helpers/stores";
import { genders } from "../../../helpers/static-data";
import { Sheet } from "konsta/react";
import React, { useState } from "react";
import { FaSortDown } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Gender = () => {
  const [sheetOpened, setSheetOpened] = useState(false);
  const {
    selectedLifeStage,
    setSelectedLifeStage,
    setSelectedAge,
    defaultFilter,
    setDefaultFilter,
    setSingleFilterSelection,
    singleFilterSelection,
  } = useStore((state) => state);

  const handleSelectedItem = (name: string) => {
    setSelectedLifeStage(name);
    setSheetOpened(false);
    setDefaultFilter(false);
    setSingleFilterSelection(false);
  };

  const clearFilter = () => {
    setDefaultFilter(true);
    setSelectedLifeStage("Females");
    setSelectedAge({
      start: 31,
      end: 50,
      ageUnit: "Year",
    });
  };

  return (
    <>
      <button
        className={`flex max-w-[111px] items-center gap-2  py-[8px] pl-[16px] pr-[8px] rounded-[8px] whitespace-nowrap prose-labelLarge font-500 ${
          selectedLifeStage && !defaultFilter && !singleFilterSelection
            ? "text-primary-40  bg-[#F2EFFF]"
            : "text-textDark border border-[#E5E1E6]"
        }`}
      >
        <span onClick={() => setSheetOpened(true)}>
          {selectedLifeStage ? selectedLifeStage : "Life stage"}
        </span>
        {selectedLifeStage && !defaultFilter && !singleFilterSelection ? (
          <IoMdClose
            className={`w-[18px] h-[18px] ${
              selectedLifeStage && !defaultFilter ? "text-primary-40" : "text-[#47464F]"
            }`}
            onClick={() => clearFilter()}
          />
        ) : (
          <FaSortDown className="w-[18px] h-[18px] -mt-2" />
        )}
      </button>
      <Sheet
        className="pb-safe w-full px-3 pt-4 rounded-tr-[16px] rounded-tl-[16px] bg-surface"
        opened={sheetOpened}
        onBackdropClick={() => setSheetOpened(false)}
      >
        <div className="w-full">
          <div className="flex justify-between item mb-[16px]">
            <h1 className="prose-titleMedium text-textDark font-500">Life Stage</h1>
            <span>
              <IoMdClose
                className="w-[18px] h-[18px] text-[#78767A]"
                onClick={() => setSheetOpened(false)}
              />
            </span>
          </div>
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
      </Sheet>
    </>
  );
};

export default Gender;
