import React from "react";
import Typography from "@mui/material/Typography";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { ForLoops } from "@forkfacts/helpers";
import { PopularFrequentSearchProps } from "@forkfacts/models";
import { PopularFrequentSearchCategory } from "@forkfacts/components";

const PopularFrequentSearchCategories = ({
  PopularFrequentSearchItems,
  PopularFrequentSearchTitle,
  onSelectPopularItem,
}: PopularFrequentSearchProps) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const tablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const desktop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box>
      <Box sx={{ mb: desktop ? theme.spacing(5) : theme.spacing(2) }}>
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.common.black,
            fontWeight: theme.typography.fontWeightMedium,
            lineHeight: theme.spacing(4),
          }}
        >
          {PopularFrequentSearchTitle}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          display: "flex",
          justifyContent: mobile || desktop ? "space-between" : "normal",
          flexWrap: "wrap",
          rowGap: theme.spacing(3.5),
          columnGap: tablet ? theme.spacing(3.5) : desktop ? theme.spacing(1.5) : 0,
        }}
      >
        <ForLoops each={PopularFrequentSearchItems}>
          {(item, idx) => (
            <PopularFrequentSearchCategory
              item={item}
              key={idx}
              onSelectPopularItem={onSelectPopularItem}
            />
          )}
        </ForLoops>
      </Box>
    </Box>
  );
};

export default PopularFrequentSearchCategories;
