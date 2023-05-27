import FoodDetails from "../Features/FoodDetails";
import { App } from "konsta/react";
import React from "react";

const FoodDetailsPage = () => {
  return (
    <App theme="material" dark={false}>
      <FoodDetails />
    </App>
  );
};

export default FoodDetailsPage;
