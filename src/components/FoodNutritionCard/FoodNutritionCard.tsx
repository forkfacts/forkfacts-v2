import { Button } from "konsta/react";
import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { useStore } from "../../helpers/stores";
import { getPercentDaily } from "../../helpers";

const FoodNutritionCard = () => {
  const { nutrition } = useStore((state) => state);
  const sortedNutrients = nutrition?.slice()?.sort((a, b) => a.displayOrder - b.displayOrder);
  return (
    <div className="bg-white px-[16px]">
      <div className="py-4">
        <h1 className="prose-titleMedium text-textDark font-500 mt-1.5 mb-4">NUTRITION</h1>
        <div className="flex justify-between mb-2">
          <h3 className="prose-labelMedium text-dark font-500">Nutrients</h3>
          <h3 className="prose-labelMedium text-dark font-500">% Daily value</h3>
        </div>
        <hr />
        <div className="mt-5">
          {sortedNutrients?.map((group, index) => {
            return (
              <div
                key={index}
                className={`mb-3 ${
                  group.nutrient.amount === -9999 ||
                  group.nutrient.name === "Calories" ||
                  (group.nutrient.unit === "NOT_AVAILABLE" && !group.children?.length)
                    ? "hidden"
                    : "block"
                }`}
              >
                <div className="flex justify-between mb-2">
                  <div className="flex items-center gap-1">
                    <h3 className="prose-labelSemiBold text-textDark font-600">
                      {group.nutrient.name === "Total fat"
                        ? "Fat"
                        : group.nutrient.name === "Carbohydrate, total"
                        ? "Carbs"
                        : group.nutrient.name}
                    </h3>
                    <h3 className="prose-labelLarge text-dark font-400 ml-[8px]">
                      {group.nutrient.amount}
                      {group.nutrient.unit.toLowerCase()}
                    </h3>
                  </div>
                  {group.nutrient.amount === -9999 ? null : (
                    <h3 className="prose-labelLarge text-textDark font-600">
                      {group.nutrient.name === "Calories"
                        ? `${getPercentDaily(group.nutrient.amount)}%`
                        : group.percentDaily
                        ? `${getPercentDaily(group.percentDaily)}%`
                        : ""}
                    </h3>
                  )}
                </div>
                {group?.children?.length ? (
                  <div className="w-[100%] relative">
                    {group?.children
                      .filter((item) => item.nutrient.amount !== -9999 || -1)
                      .map((row, index2) => {
                        return (
                          <div
                            key={index2}
                            className={`${row.nutrient.amount === -9999 ? "hidden" : "block"}`}
                          >
                            <hr className={`${index2 !== 0 ? "hidden" : "block"}`} />
                            <div className="flex justify-between w-[90%] ml-auto my-3.5">
                              <div className="flex items-center">
                                <p className="prose-bodyMedium text-textDark font-400">
                                  {row.nutrient.name}
                                </p>
                                <p className="prose-bodyMedium text-dark font-400 ml-3">
                                  {row.nutrient.amount}
                                  {row.nutrient.unit.toLowerCase()}
                                </p>
                              </div>
                              {row.nutrient.amount === -9999 ? null : (
                                <p className="prose-labelLarge text-textDark font-600">
                                  {row.percentDaily ? `${getPercentDaily(row.percentDaily)}%` : ""}
                                </p>
                              )}
                            </div>
                            <hr
                              className={`${
                                index2 + 1 ===
                                group?.children?.filter((item) => item.nutrient.amount !== -9999)
                                  .length
                                  ? "hidden"
                                  : "block"
                              }`}
                            />
                          </div>
                        );
                      })}
                  </div>
                ) : null}
                <hr className={`${index + 1 === sortedNutrients.length ? "hidden" : "block"}`} />
              </div>
            );
          })}
        </div>
        <div className="flex justify-end w-full mt-3 mb-6">
          <h4 className="prose-caption text-dark font-500">Source: USDA</h4>
        </div>
        <div className="mb-2 w-[100%] text-center">
          <h3 className="prose-caption text-dark font-400 mb-6 ">
            2,000 calories a day is used for general nutrition advice
          </h3>
          <Button className="block bg-primary-90 text-primary-40 text-[14px] leading-[20px] font-500 tracking-[0.1px] rounded-lg max-w-full">
            View all nutrients
            <MdArrowForwardIos className="ml-3 w-[18px] h-[18px]" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FoodNutritionCard;
