import { Sheet } from "konsta/react";
import React, { useState } from "react";
import { FaSortDown } from "react-icons/fa";

const Gender = () => {
  const [sheetOpened, setSheetOpened] = useState(false);
  return (
    <>
      <button className="flex max-w-[111px] items-center gap-2 text-textDark py-[8px] pl-[16px] pr-[8px] border border-[#E5E1E6] rounded-[8px] whitespace-nowrap prose-labelLarge font-500">
        <span>Children</span>
        <FaSortDown className="w-[18px] h-[18px] -mt-2" />
      </button>
      <Sheet className="pb-safe" opened={sheetOpened} onBackdropClick={() => setSheetOpened(false)}>
        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum ad excepturi nesciunt
            nobis aliquam. Quibusdam ducimus neque necessitatibus, molestias cupiditate velit nihil
            alias incidunt, excepturi voluptatem dolore itaque sapiente dolores!
          </p>
          <div className="mt-4"></div>
        </div>
      </Sheet>
    </>
  );
};

export default Gender;
