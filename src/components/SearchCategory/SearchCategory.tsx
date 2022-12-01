import * as React from "react";
import { Box, Button, Grid } from "@mui/material";
import EggAltIcon from "@mui/icons-material/EggAlt";
import classnames from "classnames";
import { flexStyles } from "@forkfacts/styles";
import { useStyles } from "./styles";

export default function SearchCategory() {
  const classes = useStyles();

  return (
    <Box
      sx={{ width: "100%", mt: ({ spacing }) => spacing(3) }}
      className={classnames(flexStyles.pageFlexColContainer, classes.root)}
    >
      <Grid
        container
        justifyContent="space-between"
        className={classnames(flexStyles.pageFlexRowContainer, classes.gridWrapper)}
      >
        {["Food", "Recipe", "Library"].map((value, index) => (
          <Grid key={index} item>
            <Button
              className={classes.btn}
              variant="outlined"
              size="small"
              startIcon={
                <EggAltIcon
                  sx={{
                    color: "grey.300",
                    width: ({ spacing }) => spacing(1.9),
                    height: ({ spacing }) => spacing(1.9),
                    fontSize: ({ typography }) => typography.fontSize,
                  }}
                />
              }
            >
              {value}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
