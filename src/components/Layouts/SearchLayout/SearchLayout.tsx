import { PageProps } from "gatsby";
import React, { PropsWithChildren } from "react";
import AppBar from "@mui/material/AppBar";

import MenuIcon from "@mui/icons-material/Menu";
import "./search-layout.css";

const SearchLayout: React.FC<PageProps | PropsWithChildren> = ({ children }) => {
  return (
    <div className="main">
      <div className="layoutWrapper">
        <MenuIcon className="menuIcon" />
        <h1 className="title">Forkfacts</h1>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default SearchLayout;
