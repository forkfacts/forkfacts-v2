import React from "react";
import FoodDetails from "../features/FoodDetails/FoodDetails";
import { PageProps } from "gatsby";

const FoodDetailsPage: React.FC<PageProps> = () => {
  return (
    <div>
      <FoodDetails />
    </div>
  );
};

export default FoodDetailsPage;
