import React, { useState } from "react";
import { NavbarProps } from "@forkfacts/models";
import { ForLoops } from "@forkfacts/helpers";
import { Box, Grid } from "@mui/material";
import { SearchCategory } from "@forkfacts/components";

export default function NavBar({ onSelectCategory, navbarItems }: NavbarProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <Box sx={{ width: ({ spacing }) => spacing(45.625), mt: ({ spacing }) => spacing(1) }}>
      <Grid container justifyContent="space-between">
        <ForLoops each={navbarItems}>
          {({ Icon, label }, idx) => (
            <Grid key={idx} item>
              <SearchCategory
                as="navCategory"
                index={idx}
                onSelectCategory={onSelectCategory}
                label={label}
                Icon={Icon}
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
