import React from "react";

const SimilarFoods = () => {
  const similarFoods = [
    {
      name: "Banana overripe",
      nutrients: [
        { name: "Banana overripe", amount: 240 },
        { name: "Carbs", amount: 10, amountUnit: "g" },
        { name: "Proteins", amount: 5, amountUnit: "g" },
        { name: "Fats", amount: 12, amountUnit: "g" },
      ],
    },
    {
      name: "Banana overripe",
      nutrients: [
        { name: "Banana overripe", amount: 120 },
        { name: "Carbs", amount: 10, amountUnit: "g" },
        { name: "Proteins", amount: 5, amountUnit: "g" },
        { name: "Fats", amount: 12, amountUnit: "g" },
      ],
    },
  ];
  return (
    <div className="bg-white px-[16px]">
      <div>
        <h1 className="prose-titleMedium text-dark pt-[20px]">SIMILAR FOODS</h1>
        <div className="w-full overflow-x-auto scrollbar-none bg-white flex items-center custom-scrollbar gap-3 rounded-[8px] pb-10 pt-5">
          {similarFoods.map((food, index) => {
            return (
              <div className="min-w-[300px] border-[1px] border-[#E5E1E6] p-3 rounded-[8px]">
                <h1 className="prose-titleMedium text-main font-500">{food.name}</h1>
                <div className="flex mt-[16px] justify-between items-center">
                  {food.nutrients.map((nutrient, index) => {
                    return (
                      <div className="flex">
                        <div>
                          <h2 className="prose-labelMedium text-main font-500">
                            {nutrient.amount} {nutrient.amountUnit}
                          </h2>
                          <h3 className="prose-labelMedium text-dark font-500">{nutrient.name}</h3>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SimilarFoods;
