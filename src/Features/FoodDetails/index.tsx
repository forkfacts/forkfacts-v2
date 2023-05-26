import React from "react";
import MediaQuery from "react-responsive";
import DesktopDetails from "./DesktopDetails";
import MobileDetails from "./MobileDetails/FoodMobileDetails";

export default function FoodDetails() {
  return (
    <>
      <MediaQuery maxWidth={767}>
        <MobileDetails />
      </MediaQuery>
      <MediaQuery minWidth={768}>
        <DesktopDetails />
      </MediaQuery>
    </>
  );
}
