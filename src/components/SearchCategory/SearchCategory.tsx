import React from "react";
import { Box, Button, Grid } from "@mui/material";
import { SearchCategoryProps, catergoryItemTypes } from "@forkfacts/models";
import { useStyles } from "./styles";

export default function SearchCategory({ categories, onSelectCategory }: SearchCategoryProps) {
  const classes = useStyles();

  return (
    <Box sx={{ width: "100%", mt: ({ spacing }) => spacing(3) }} className={classes.root}>
      <Grid container justifyContent="space-between">
        {categories.map(({ label, Icon }: catergoryItemTypes, index: number) => (
          <Grid key={index} item>
            <Button
              className={classes.btn}
              variant="outlined"
              onClick={() => onSelectCategory(label)}
              size="small"
              sx={{
                borderWidth: "2px !important",
                borderColor: ({ palette }) => palette.grey[500],
                color: ({ palette }) => palette.grey[700],
              }}
              startIcon={
                <Icon
                  className={classes.icon}
                  sx={{
                    width: ({ spacing }) => spacing(1.9),
                    height: ({ spacing }) => spacing(1.9),
                    fontSize: ({ typography }) => typography.fontSize,
                  }}
                />
              }
            >
              {label}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
