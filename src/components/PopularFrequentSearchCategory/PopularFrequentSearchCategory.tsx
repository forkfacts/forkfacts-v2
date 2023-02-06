import React from "react";
import { PopularFrequentSearchCategoryProps } from "@forkfacts/models";
import ListItem from "@mui/material/ListItem";
import { blue } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import { Box, Card, useTheme } from "@mui/material";
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
    <Card
      sx={{
        borderRadius: spacing(1),
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        backgroundColor: palette.background.default,
        width: spacing(26.5),
      }}
      onClick={handleSelectedItem}
    >
      <Box
        component="img"
        src={item.searchImg}
        alt={item.searchName}
        sx={{ objectFit: "contain" }}
      />
      <Typography
        sx={{
          color: palette.common.black,
          fontWeight: typography.fontWeightMedium,
          py: spacing(2),
          ml: "18px",
        }}
        variant="body2"
      >
        {item.searchName}
      </Typography>
      <Box
        sx={{ display: "flex", alignItems: "center", columnGap: "30px", justifyContent: "center" }}
      >
        <ForLoops each={item.extraInfo}>
          {(extraItem, extraIndex) => (
            <Box key={extraIndex} sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="caption" sx={{ color: palette.common.black }}>
                {extraItem.weight}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: palette.grey[500],
                }}
              >
                {extraItem.name}
              </Typography>
            </Box>
          )}
        </ForLoops>
      </Box>
    </Card>
  );
};

export default PopularFrequentSearchCategory;
