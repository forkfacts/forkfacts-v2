import React from "react";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { Box, useTheme } from "@mui/material";
import { ForLoops } from "@forkfacts/helpers";
import { PopularFrequentSearchProps } from "@forkfacts/models";
import { PopularFrequentSearchCategory } from "@forkfacts/components";

const PopularFrequentSearchCategories = ({
  PopularFrequentSearchItems,
  PopularFrequentSearchTitle,
  onSelectPopularItem,
}: PopularFrequentSearchProps) => {
  const { spacing, palette, typography } = useTheme();

  return (
    <Box>
      <Box sx={{ mb: spacing(5) }}>
        <Typography
          variant="h5"
          sx={{
            color: palette.common.black,
            fontWeight: typography.fontWeightMedium,
            mb: spacing(1.2),
            lineHeight: spacing(4),
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
          flexWrap: "wrap",
          gap: "60px",
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
