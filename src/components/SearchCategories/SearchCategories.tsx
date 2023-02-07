import React, { useState } from "react";
import { Box, Grid, Stack } from "@mui/material";
import { SearchCategoriesProps } from "@forkfacts/models";
import { SearchCategory } from "@forkfacts/components";
import { ForLoops } from "@forkfacts/helpers";
import { useStyles } from "./searchCategoriesStyles";

export default function SearchCategories({
  categoryOptions,
  onSelectCategory,
}: SearchCategoriesProps) {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Box sx={{ width: "100%", mt: ({ spacing }) => spacing(1) }} className={classes.root}>
      <Stack direction="row">
        <ForLoops each={categoryOptions}>
          {({ label, Icon }, idx) => (
            <SearchCategory
              index={idx}
              onSelectCategory={onSelectCategory}
              label={label}
              Icon={Icon}
              setSelectedIndex={setSelectedIndex}
              selectedIndex={selectedIndex}
            />
          )}
        </ForLoops>
      </Stack>
    </Box>
  );
}
