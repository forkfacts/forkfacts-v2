import React from "react";
import { PopularFrequentSearchCategoryProps, extraInfo } from "@forkfacts/models";
import ListItem from "@mui/material/ListItem";
import { blue } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import { Box, useTheme } from "@mui/material";

const PopularFrequentSearchCategory = ({ item }: PopularFrequentSearchCategoryProps) => {
  const { spacing, palette, shadows, typography, shape } = useTheme();
  return (
    <ListItem
      sx={{
        display: "flex",
        mb: spacing(3),
        boxShadow: shadows[1],
        borderRadius: spacing(1.5),
      }}
      disablePadding
    >
      <img src={item.searchImg} alt={item.searchName} />
      <Box
        sx={{
          ml: spacing(5),
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          rowGap: spacing(2),
        }}
      >
        <Typography
          sx={{
            color: palette.common.black,
            fontWeight: typography.fontWeightBold,
          }}
          variant="body2"
        >
          {item.searchName}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "flex-start", columnGap: spacing(3) }}>
          {item.searchLabels.map((item, index) => (
            <Typography
              key={index}
              sx={{
                backgroundColor: blue["50"],
                padding: spacing(0.75, 1.25),
                fontSize: typography.caption.fontSize,
                borderRadius: shape.borderRadius,
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", columnGap: spacing(3) }}>
          {item.extraInfo.map((item: extraInfo, index: number) => (
            <Box key={index}>
              <Typography variant="body1" sx={{ color: palette.grey[500] }}>
                {item.weight}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: palette.common.black,
                  fontWeight: typography.fontWeightMedium,
                }}
              >
                {item.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </ListItem>
  );
};

export default PopularFrequentSearchCategory;
