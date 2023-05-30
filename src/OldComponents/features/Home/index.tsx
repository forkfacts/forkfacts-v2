import React from "react";
import MediaQuery from "react-responsive";
import MobileHome from "./MobileHome/MobileHome";
import DesktopHome from "./DesktopHome/DesktopHome";

export default function Home() {
  return (
    <>
      <MediaQuery maxWidth={767}>
        <MobileHome />
      </MediaQuery>
      <MediaQuery minWidth={768}>
        <DesktopHome />
      </MediaQuery>
    </>
  );
}
