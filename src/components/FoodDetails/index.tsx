import React from "react";
import MediaQuery from "react-responsive";
import DesktopDetails from "./Desktop/DesktopDetails";
import MobileDetails from "./MobileDetails";

function FoodDetails() {
  return (
    <div>
      <MediaQuery maxWidth={767}>
        <MobileDetails />
      </MediaQuery>
      <MediaQuery minWidth={768}>
        <DesktopDetails />
      </MediaQuery>
    </div>
  );
}

export default FoodDetails;
