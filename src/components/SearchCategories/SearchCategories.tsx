import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import { SearchCategoriesProps } from "@forkfacts/models";
import { SearchCategory } from "@forkfacts/components";
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
        {categoryOptions.map(({ label, Icon }, index: number) => {
          return (
            <Grid key={index} item>
              <SearchCategory
                index={index}
                onSelectCategory={onSelectCategory}
                label={label}
                Icon={Icon}
                setSelectedIndex={setSelectedIndex}
                selectedIndex={selectedIndex}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
