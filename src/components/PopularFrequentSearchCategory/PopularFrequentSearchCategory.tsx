import React from "react";
import { PopularFrequentSearchCategoryProps } from "@forkfacts/models";
import Typography from "@mui/material/Typography";
import { Box, Card, useMediaQuery, useTheme } from "@mui/material";
import { ForLoops } from "@forkfacts/helpers";

const PopularFrequentSearchCategory = ({
  item,
  onSelectPopularItem,
}: PopularFrequentSearchCategoryProps) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const tablet = useMediaQuery(theme.breakpoints.only("md"));
  const desktop = useMediaQuery(theme.breakpoints.up("md"));
  const handleSelectedItem = () => {
    onSelectPopularItem(item);
  };
  return (
    <Card
      sx={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme.palette.background.default,
        width: mobile ? "47%" : tablet ? "50%" : theme.spacing(26.5),
        borderRadius: theme.spacing(1),
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
          color: theme.palette.customGray.main,
          fontWeight: theme.typography.fontWeightBold,
          py: theme.spacing(2),
          ml: mobile ? theme.spacing(1.15) : theme.spacing(2.15),
        }}
        variant="subtitle1"
      >
        {item.searchName}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          columnGap: mobile ? theme.spacing(1) : theme.spacing(3.75),
          justifyContent: "center",
          mb: theme.spacing(2),
        }}
      >
        <ForLoops each={item.extraInfo}>
          {(extraItem, extraIndex) => (
            <Box key={extraIndex} sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                sx={{
                  color: theme.palette.customGray.main,
                  fontWeight: theme.typography.fontWeightBold,
                  fontSize: theme.typography.labelSmall.fontSize,
                }}
              >
                {extraItem.weight}
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.customGray.dark,
                  fontSize: theme.typography.labelMedium.fontSize,
                  mt: theme.spacing(0.4),
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
