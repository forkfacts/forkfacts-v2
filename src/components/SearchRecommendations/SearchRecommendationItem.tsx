import { Box, Button, Typography, useTheme } from "@mui/material";
import { SearchRecommendationItemProps } from "@forkfacts/models";
import React from "react";

const SearchRecommendationItem: React.FC<SearchRecommendationItemProps> = ({ item }) => {
  const theme = useTheme();
  return (
    <Button
      variant="outlined"
      color="primary"
      sx={{
        fontSize: theme.typography.caption.fontSize,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
    >
      {item.icon && (
        <Box
          component="img"
          src={item.icon}
          alt={item.name}
          sx={{
            width: theme.spacing(2.5),
            height: theme.spacing(2.5),
            mr: theme.spacing(1.5),
          }}
        />
      )}
      <Typography
        variant="bodySmall"
        sx={{
          fontWeight: theme.typography.fontWeightLight,
        }}
      >
        {item.name}
      </Typography>
    </Button>
  );
};

export default SearchRecommendationItem;
