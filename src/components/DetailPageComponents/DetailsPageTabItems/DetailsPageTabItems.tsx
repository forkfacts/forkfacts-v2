import React, { useState } from "react";
import { DetailsPageTabItemsProps } from "@forkfacts/models";
import { ForLoops } from "@forkfacts/helpers";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { DetailsPageTabItem } from "@forkfacts/components";

export default function DetailsPageTabItems({
  tabItems,
  onselectTabItem,
}: DetailsPageTabItemsProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            width: "0px",
            background: "transparent",
          },
          flexDirection: "row", // set the flex-direction to row
        }}
        id="tab-items-container"
      >
        <ForLoops each={tabItems}>
          {(item, idx) => (
            <DetailsPageTabItem
              key={idx}
              index={idx}
              item={item}
              setSelectedIndex={setSelectedIndex}
              selectedIndex={selectedIndex}
              onSelectDetailsPageTabItem={onselectTabItem}
            />
          )}
        </ForLoops>
      </Box>
    </Box>
  );
}
