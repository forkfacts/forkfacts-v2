import React, { useState } from "react";
import { NavbarProps } from "@forkfacts/models";
import { ForLoops } from "@forkfacts/helpers";
import { Box, Grid } from "@mui/material";
import { NavBarItem } from "@forkfacts/components";

export default function NavBar({ navbarItems, onselectNavbarItem }: NavbarProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container>
        <ForLoops each={navbarItems}>
          {(item, idx) => (
            <Grid key={idx} item lg={4} xs={4} sm={4}>
              <NavBarItem
                index={idx}
                item={item}
                setSelectedIndex={setSelectedIndex}
                selectedIndex={selectedIndex}
                onselectNavbarItem={onselectNavbarItem}
              />
            </Grid>
          )}
        </ForLoops>
      </Grid>
    </Box>
  );
}
