import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
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
      <Grid container justifyContent="space-between">
        <ForLoops each={categoryOptions}>
          {({ label, Icon }, idx) => (
            <Grid key={idx} item>
              <SearchCategory
                as="category"
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
