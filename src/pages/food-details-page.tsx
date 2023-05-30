import React from "react";
import { FoodDetails } from "@forkfacts/features";
import { PageProps } from "gatsby";

const FoodDetailsPage: React.FC<PageProps> = () => {
  return (
    <div>
      <FoodDetails />
    </div>
  );
};

export default FoodDetailsPage;
