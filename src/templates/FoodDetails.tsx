import React, { useEffect } from "react";
import { FoodDetails as FoodDetailsComponent } from "@forkfacts/components";
import { useStore } from "../helpers/stores";
import { Food, NutrientRequirement } from "@forkfacts/models";

interface Props {
  pageContext: {
    recommendedDailyIntakes: NutrientRequirement[];
    food: Food;
    seo: {
      title: string;
      description: string;
    };
  };
}

const FoodDetails: React.FC<Props> = ({ pageContext: { recommendedDailyIntakes, food } }) => {
  const { setRecommendedDailyIntakes, setFood } = useStore((state) => state);

  useEffect(() => {
    setRecommendedDailyIntakes(recommendedDailyIntakes);
    setFood(food);
  }, [recommendedDailyIntakes, food, setRecommendedDailyIntakes, setFood]);

  return (
    <div>
      <FoodDetailsComponent />
    </div>
  );
};

export default FoodDetails;
