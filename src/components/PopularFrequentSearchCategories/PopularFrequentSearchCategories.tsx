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
}: PopularFrequentSearchProps) => {
  const { spacing, palette, typography, shape } = useTheme();

  return (
    <Box sx={{ width: spacing(90) }}>
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
        <Typography variant="body1" sx={{ color: palette.grey[500] }}>
          By frequently searched
        </Typography>
      </Box>
      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
        }}
        disablePadding
      >
        <ForLoops each={PopularFrequentSearchItems}>
          {(item, idx) => <PopularFrequentSearchCategory item={item} key={idx} />}
        </ForLoops>
      </List>
    </Box>
  );
};

export default PopularFrequentSearchCategories;
