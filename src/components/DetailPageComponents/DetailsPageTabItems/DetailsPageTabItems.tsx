import React, { useState } from "react";
import { DetailsPageTabItemsProps, sidebarItem } from "@forkfacts/models";
import { ForLoops } from "@forkfacts/helpers";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { DetailsPageTabItem } from "@forkfacts/components";

export default function DetailsPageTabItems({
  tabItems,
  onselectTabItem,
}: DetailsPageTabItemsProps) {
  const [selectedTab, setSelectedTab] = useState("Nutrition");
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleClick = (item: sidebarItem): void => {
    setSelectedTab(item.label);
    onselectTabItem(item.label);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            width: "0px",
            height: "0px",
            background: "transparent",
          },
          flexDirection: "row",
        }}
        id="tab-items-container"
      >
        <ForLoops each={tabItems}>
          {(item, idx) => (
            <DetailsPageTabItem
              key={idx}
              index={idx}
              item={item}
              handleClick={handleClick}
              selectedTab={selectedTab}
            />
          )}
        </ForLoops>
      </Box>
    </Box>
  );
}
