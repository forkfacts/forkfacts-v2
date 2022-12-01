import * as React from "react";
import { Box, Button, Grid } from "@mui/material";
import EggAltIcon from "@mui/icons-material/EggAlt";
import classnames from "classnames";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import { flexStyles } from "@forkfacts/styles";
import { useStyles } from "./styles";

const catergoryData = [
  { name: "Food", Icon: EggAltIcon },
  { name: "Recipe", Icon: EmojiFoodBeverageIcon },
  { name: "Library", Icon: BookmarksIcon },
];

export default function SearchCategory() {
  const classes = useStyles();

  return (
    <Box
      sx={{ width: "100%", mt: ({ spacing }) => spacing(3) }}
      className={classnames(flexStyles.pageFlexColContainer, classes.root)}
    >
      <Grid container justifyContent="space-between">
        {catergoryData.map(({ name, Icon }, index) => (
          <Grid key={index} item>
            <Button
              className={classes.btn}
              variant="outlined"
              size="small"
              startIcon={
                <Icon
                  sx={{
                    color: "grey.300",
                    width: ({ spacing }) => spacing(1.9),
                    height: ({ spacing }) => spacing(1.9),
                    fontSize: ({ typography }) => typography.fontSize,
                  }}
                />
              }
            >
              {name}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
