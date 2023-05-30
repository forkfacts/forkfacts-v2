import React from "react";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";

const FoodDetailsSummary = () => {
  const nutritionSummaryItems = [
    { percentage: 25, weight: 200, name: "Calories" },
    { percentage: 23, weight: 76, name: "Carbs", unit: "g" },
    { percentage: 12, weight: 1, name: "Protein", unit: "g" },
    { percentage: 45, weight: 40, name: "Fat", unit: "g" },
  ];
  return (
    <div className="w-full overflow-x-auto scrollbar-none px-[16px] bg-white -mt-4 custom-scrollbar">
      <h1 className="prose-titleMedium text-textDark font-500 mt-5 mb-4">SUMMARY</h1>
      <div className="flex justify-between">
        {nutritionSummaryItems.map((item, idx) => (
          <div key={idx}>
            <div className="mt-2 flex justify-center items-center flex-col">
              <div className="w-[50px] h-[50px]">
                <CircularProgressbarWithChildren
                  strokeWidth={12}
                  value={item.percentage}
                  styles={buildStyles({
                    textColor: "#000",
                    pathColor: "#6660FF",
                    trailColor: "#E2DFFF",
                    textSize: "16px",
                  })}
                >
                  <p className="text-center text-[12px] text-main leading-[28px] font-500">
                    {item.percentage}%
                  </p>
                </CircularProgressbarWithChildren>
              </div>
              <h2 className="prose-labelLarge font-500 text-main mt-2">{item.name}</h2>
              <p className="text-center mt-1 prose-labelMedium text-textDark font-500">
                {item.weight}
                {item.unit}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodDetailsSummary;
