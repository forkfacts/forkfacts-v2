import React, { useState } from "react";
import { DetailsPageTabItemsProps } from "@forkfacts/models";
import { ForLoops } from "@forkfacts/helpers";
import { Box } from "@mui/material";
import { DetailsPageTabItem } from "@forkfacts/components";

export default function DetailsPageTabItems({
  tabItems,
  onselectTabItem,
}: DetailsPageTabItemsProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ display: "flex" }}>
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
