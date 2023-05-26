import { App } from "konsta/react";
import FoodDetails from "../features/FoodDetails";
import React from "react";

const FoodDetailsPage = () => {
  return (
    <App theme="material" dark={false}>
      <FoodDetails />
    </App>
  );
};

export default FoodDetailsPage;
