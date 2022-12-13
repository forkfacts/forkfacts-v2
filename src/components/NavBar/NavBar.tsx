import React, { useState } from "react";
import { NavbarProps } from "@forkfacts/models";
import { ForLoops } from "@forkfacts/helpers";
import { Box, Grid } from "@mui/material";
import { NavBarItem } from "@forkfacts/components";

export default function NavBar({ navbarItems }: NavbarProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <Box sx={{ width: ({ spacing }) => spacing(45.625), mt: ({ spacing }) => spacing(1) }}>
      <Grid container justifyContent="space-between">
        <ForLoops each={navbarItems}>
          {(item, idx) => (
            <Grid key={idx} item>
              <NavBarItem
                index={idx}
                item={item}
                setSelectedIndex={setSelectedIndex}
                selectedIndex={selectedIndex}
              />
            </Grid>
          )}
        </ForLoops>
      </Grid>
    </Box>
  );
}
