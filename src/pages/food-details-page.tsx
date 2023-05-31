import React from "react";
import { PageProps } from "gatsby";
import { FoodDetails } from "@forkfacts/components";

const FoodDetailsPage: React.FC<PageProps> = () => {
  return (
    <div>
      <FoodDetails />
    </div>
  );
};

export default FoodDetailsPage;
