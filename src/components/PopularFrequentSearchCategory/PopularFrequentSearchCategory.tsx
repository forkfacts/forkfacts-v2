import React from "react";
import { PopularFrequentSearchCategoryProps, extraInfo } from "@forkfacts/models";
import ListItem from "@mui/material/ListItem";
import { blue } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import { Box, useTheme } from "@mui/material";
import { ForLoops } from "@forkfacts/helpers";

const PopularFrequentSearchCategory = ({
  item,
  onSelectPopularItem,
}: PopularFrequentSearchCategoryProps) => {
  const { spacing, palette, shadows, typography, shape } = useTheme();

  const handleSelectedItem = () => {
    onSelectPopularItem(item);
  };
  return (
    <ListItem
      sx={{
        display: "flex",
        mb: spacing(3),
        boxShadow: shadows[1],
        borderRadius: spacing(1.5),
        cursor: "pointer",
      }}
      disablePadding
      onClick={handleSelectedItem}
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
          <ForLoops each={item.searchLabels}>
            {(labelItem, labelIndex) => (
              <Typography
                key={labelIndex}
                color="primary"
                sx={{
                  backgroundColor: blue["50"],
                  padding: spacing(0.75, 1.25),
                  fontSize: typography.caption.fontSize,
                  borderRadius: shape.borderRadius,
                }}
              >
                {labelItem}
              </Typography>
            )}
          </ForLoops>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", columnGap: spacing(3) }}>
          <ForLoops each={item.extraInfo}>
            {(extraItem, extraIndex) => (
              <Box key={extraIndex}>
                <Typography variant="body1" sx={{ color: palette.grey[500] }}>
                  {extraItem.weight}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: palette.common.black,
                    fontWeight: typography.fontWeightMedium,
                  }}
                >
                  {extraItem.name}
                </Typography>
              </Box>
            )}
          </ForLoops>
        </Box>
      </Box>
    </ListItem>
  );
};

export default PopularFrequentSearchCategory;
