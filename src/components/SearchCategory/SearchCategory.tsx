import React from "react";
import { Box, Button, Grid } from "@mui/material";
import { SearchCategoryProps } from "@forkfacts/models";
import { useStyles } from "./styles";

export default function SearchCategory({ label, Icon, onSelectCategory }: SearchCategoryProps) {
  const classes = useStyles();

  return (
    <Box sx={{ width: "100%", mt: ({ spacing }) => spacing(3) }} className={classes.root}>
      <Button
        className={classes.btn}
        variant="outlined"
        onClick={() => onSelectCategory?.(label)}
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
    </Box>
  );
}
