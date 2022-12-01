import React from "react";
import { Button } from "@mui/material";
import { SearchCategoryProps } from "@forkfacts/models";
import { useStyles } from "./styles";

// Where is the state of this button when it is selected. Refer to Figma
// Where is the state of this button when it is not selected. Refer to Figma
// Add controls as per StoryBook documentation https://storybook.js.org/docs/react/essentials/controls
// Use outlined icons
export default function SearchCategory({ label, Icon, onSelectCategory }: SearchCategoryProps) {
  const classes = useStyles();

  return (
    <Button
      className={classes.btn}
      variant="outlined"
      onClick={onSelectCategory}
      size="small"
      sx={{
        // borderWidth: "2px !important", //remove border width.
        borderColor: ({ palette }) => palette.grey[500],
        color: ({ palette }) => palette.grey[700],
      }}
      startIcon={
        <Icon
          fontSize={"medium"}
          className={classes.icon}
          sx={{
            width: ({ spacing }) => spacing(1.9),
            height: ({ spacing }) => spacing(1.9),
            // fontSize: ({ typography }) => typography.fontSize, // No need to use fontSize here
          }}
        />
      }
    >
      {label}
    </Button>
  );
}
