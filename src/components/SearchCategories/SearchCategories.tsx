import React from "react";
import { Box, Grid } from "@mui/material";
import { SearchCategoriesProps } from "@forkfacts/models";
import EggAltIcon from "@mui/icons-material/EggAlt";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import { SearchCategory } from "@forkfacts/components";
import { useStyles } from "./styles";

// Pass an array of SearchCatgeory components to this component. It should be passed from Stories file
export default function SearchCategories({ onSelectCategory }: SearchCategoriesProps) {
  const classes = useStyles();

  return (
    <Box sx={{ width: "100%", mt: ({ spacing }) => spacing(3) }} className={classes.root}>
      <Grid container justifyContent="space-between">
        <Grid item>
          <SearchCategory onSelectCategory={onSelectCategory} label="Food" Icon={EggAltIcon} />
        </Grid>
        <Grid item>
          <SearchCategory
            onSelectCategory={onSelectCategory}
            label="Recipe"
            Icon={EmojiFoodBeverageIcon}
          />
        </Grid>
        <Grid item>
          <SearchCategory
            onSelectCategory={onSelectCategory}
            label="Library"
            Icon={BookmarksIcon}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
