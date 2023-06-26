import React from "react";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import { useStore } from "../../helpers/stores";
import { calculateCaloriesIntake, getPercentDaily } from "../../helpers";

const FoodDetailsSummary = () => {
  const { nutrition } = useStore((state) => state);
  const sortedNutrients = nutrition?.slice()?.sort((a, b) => a.displayOrder - b.displayOrder);
  return (
    <div className=" px-[16px] bg-white -mt-4">
      <h1 className="prose-titleMedium text-textDark font-500 pt-5 mb-4">SUMMARY</h1>
      <div className="w-full overflow-x-auto scrollbar-none custom-scrollbar">
        <div className="flex justify-between">
          {sortedNutrients
            .filter((item) => item.nutrient.amount !== -9999)
            .filter(
              (item) =>
                item.nutrient.name === "Carbohydrate, total" ||
                item.nutrient.name === "Total fat" ||
                item.nutrient.name === "Protein" ||
                item.nutrient.name === "Sodium"
            )
            .map((item, idx) => (
              <div key={idx} className="mr-[35px]">
                <div className="mt-2 flex justify-center items-center flex-col">
                  <div className="w-[50px] h-[50px]">
                    <CircularProgressbarWithChildren
                      strokeWidth={10}
                      value={item.rdi?.amount ? getPercentDaily(item.percentDaily as number) : 0}
                      styles={buildStyles({
                        textColor: "#000",
                        pathColor: "#6660FF",
                        trailColor: "#E2DFFF",
                        textSize: "16px",
                      })}
                    >
                      <p className="text-center text-[12px] text-main leading-[28px] font-500">
                        {item.percentDaily && item.nutrient.name !== "Calories"
                          ? `${Math.ceil(item.percentDaily as number)}%`
                          : 0}
                      </p>
                    </CircularProgressbarWithChildren>
                  </div>
                  <div className="text-center">
                    <h2 className="prose-labelLarge font-500 text-main mt-2">
                      {item.nutrient.name === "Total fat"
                        ? "Fat"
                        : item.nutrient.name === "Carbohydrate, total"
                        ? "Carbs"
                        : item.nutrient.name}
                    </h2>
                    <p className="text-center mt-1 prose-labelMedium text-textDark font-500">
                      {Math.ceil(item.nutrient.amount as number)}
                      {item.nutrient.unit.toLowerCase()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FoodDetailsSummary;
