import { useStore } from "../../helpers/stores";
import { Radio, Sheet } from "konsta/react";
import React, { useState } from "react";
import { FaSortDown } from "react-icons/fa";
import { RxChevronRight } from "react-icons/rx";
import { RdiAge } from "@forkfacts/models";
import { IoMdClose } from "react-icons/io";

const Age = () => {
  const [sheetOpened, setSheetOpened] = useState(false);
  const { selectedAge, setSelectedAge, age, selectedLifeStage } = useStore((state) => state);
  const ageString = selectedAge?.end
    ? `${selectedAge.start}-${selectedAge.end} ${selectedAge.ageUnit}`
    : ``;

  const handleSelectAge = (item: RdiAge) => {
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
    setSheetOpened(false);
  };

  const openModal = () => {
    if (!selectedLifeStage) return;
    setSheetOpened(true);
  };
  return (
    <div>
      <button
        className={`flex max-w-[311px] items-center gap-2  py-[8px] pl-[16px] pr-[8px] rounded-[8px] whitespace-nowrap prose-labelLarge font-500 ${
          Object.keys(selectedAge).length && ageString
            ? "text-primary-40  bg-[#F2EFFF]"
            : "text-textDark border border-[#E5E1E6]"
        }`}
      >
        <span onClick={() => openModal()}>
          {Object.keys(selectedAge).length && ageString ? ageString : "Age"}
        </span>
        {Object.keys(selectedAge).length && ageString ? (
          <IoMdClose
            className={`w-[18px] h-[18px] ${
              Object.keys(selectedAge).length && ageString ? "text-primary-40" : "text-[#47464F]"
            }`}
            onClick={() => setSelectedAge({} as RdiAge)}
          />
        ) : (
          <FaSortDown className="w-[18px] h-[18px] -mt-2" />
        )}
      </button>
      <Sheet
        className="pb-safe w-full px-3 pt-4 rounded-tr-[16px] rounded-tl-[16px]"
        opened={sheetOpened}
        onBackdropClick={() => setSheetOpened(false)}
      >
        <div className="w-full">
          <div className="flex justify-between item mb-[20px]">
            <h1 className="prose-titleMedium text-textDark font-500">Age</h1>
            <span>
              <IoMdClose
                className="w-[18px] h-[18px] text-[#78767A]"
                onClick={() => setSheetOpened(false)}
              />
            </span>
          </div>
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
      </Sheet>
    </div>
  );
};

export default Age;
