import { Button } from "konsta/react";
import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

interface NutritionTableRow {
  nutrient: string;
  dailyValue?: number | null;
  amount?: number;
  amountUnit?: string;
  nutrientGroup: string;
}

interface RowsByNutrientGroup {
  nutrientGroup: string;
  rows?: NutritionTableRow[];
  nutrient: string;
  dailyValue?: number | null;
  amount?: number;
  amountUnit?: string;
}

const FoodNutritionCard = () => {
  const rowsByNutrientGroups: RowsByNutrientGroup[] = [
    {
      nutrient: "Total Fat",
      amount: 56,
      amountUnit: "g",
      nutrientGroup: "Fats",
      dailyValue: 37,
      rows: [
        {
          nutrient: "Saturated fat",
          amount: 7,
          amountUnit: "g",
          dailyValue: 37,
          nutrientGroup: "Fats",
        },
      ],
    },
    {
      nutrient: "Cholesterol",
      amount: 29,
      amountUnit: "mg",
      nutrientGroup: "",
    },
    {
      nutrient: "Sodium",
      amount: 11,
      amountUnit: "mg",
      nutrientGroup: "",
      dailyValue: 7,
    },
    {
      nutrient: "Potassium",
      amount: 468,
      amountUnit: "mg",
      nutrientGroup: "",
      dailyValue: 3,
    },
    {
      nutrient: "Total Carbohydrate",
      amount: 23,
      amountUnit: "g",
      nutrientGroup: "Total Carbohydrate",
      dailyValue: 27,
      rows: [
        {
          nutrient: "Dietary fiber",
          amount: 56,
          amountUnit: "g",
          dailyValue: 37,
          nutrientGroup: "Total Carbohydrate",
        },
        {
          nutrient: "Sugar",
          amount: 0.3,
          amountUnit: "g",
          dailyValue: 37,
          nutrientGroup: "Total Carbohydrate",
        },
      ],
    },
    {
      nutrient: "Protein",
      amount: 18,
      amountUnit: "mg",
      nutrientGroup: "",
      dailyValue: 14,
    },
    {
      nutrient: "Vitamin C",
      amount: 18,
      amountUnit: "mg",
      nutrientGroup: "",
    },
    {
      nutrient: "Iron",
      amount: 45,
      amountUnit: "mg",
      nutrientGroup: "",
      dailyValue: 81,
    },
    {
      nutrient: "Vitamin C",
      amount: 4,
      amountUnit: "mg",
      nutrientGroup: "",
      dailyValue: 40,
    },
    {
      nutrient: "Magnesium",
      amount: 8,
      amountUnit: "mg",
      nutrientGroup: "",
      dailyValue: 87,
    },
    {
      nutrient: "Calcium",
      amount: 4,
      amountUnit: "mg",
      nutrientGroup: "",
      dailyValue: 97,
    },
    {
      nutrient: "Vitamin D",
      amount: 1,
      amountUnit: "mg",
      nutrientGroup: "",
    },
    {
      nutrient: "Cobalamin",
      amount: 10,
      amountUnit: "mg",
      nutrientGroup: "",
    },
  ];
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
          {rowsByNutrientGroups.map((group, index) => (
            <div key={index} className="mb-3">
              <div className="flex justify-between mb-2">
                <div className="flex items-center gap-1">
                  <h3 className="prose-labelSemiBold text-textDark font-600">{group.nutrient}</h3>
                  <h3 className="prose-labelLarge text-dark font-500 ml-[8px]">
                    {" "}
                    {group.amount}
                    {group.amountUnit}
                  </h3>
                </div>
                <h3 className="prose-labelLarge text-textDark font-600">
                  {group.dailyValue ? `${group.dailyValue}%` : "-"}
                </h3>
              </div>
              {group.rows?.length ? (
                <div className="w-[100%] relative py-2">
                  {group?.rows.map((row, index2) => (
                    <div key={index2}>
                      <hr className={`${index2 !== 0 ? "hidden" : "block"} pt-2`} />
                      <div className="flex justify-between mb-1 w-[90%] ml-auto">
                        <p className="prose-labelLarge text-dark font-500">
                          {row.nutrient} {row.amount}
                          {row.amountUnit}
                        </p>
                        <p className="prose-labelLarge text-dark font-500">
                          {row.dailyValue ? `${row.dailyValue}%` : "-"}
                        </p>
                      </div>
                      <hr
                        className={`${
                          index2 + 1 === group.rows?.length ? "hidden" : "block"
                        } mt-3 mb-2`}
                      />
                    </div>
                  ))}
                </div>
              ) : null}
              <hr className={`${index + 1 === rowsByNutrientGroups.length ? "hidden" : "block"}`} />
            </div>
          ))}
        </div>
        <div className="flex justify-end w-full mt-3 mb-6">
          <h4 className="prose-caption text-dark font-500">Source: USDA</h4>
        </div>
        <div className="mb-2 w-[100%]">
          <Button className="block bg-primaryLight text-primary text-[14px] leading-[20px] font-500 tracking-[0.1px] rounded-lg max-w-full">
            View all nutrients
            <MdArrowForwardIos className="ml-3 w-[18px] h-[18px]" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FoodNutritionCard;
