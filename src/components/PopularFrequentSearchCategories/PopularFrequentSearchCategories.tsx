import React from "react";
import Typography from "@mui/material/Typography";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { ForLoops } from "@forkfacts/helpers";
import { PopularFrequentSearchProps } from "@forkfacts/models";
import { PopularFrequentSearchCategory } from "@forkfacts/components";

const PopularFrequentSearchCategories = ({
  PopularFrequentSearchItems,
}: PopularFrequentSearchProps) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const tablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const desktop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box>
      <Box sx={{ mb: desktop ? theme.spacing(3) : theme.spacing(2) }}>
        <Typography
          variant={mobile ? "headline6" : "headline4"}
          sx={{
            color: theme.palette.customGray.main,
            fontWeight: theme.typography.fontWeightLight,
            lineHeight: theme.spacing(4),
          }}
        >
          Popular foods
        </Typography>
      </Box>
      {PopularFrequentSearchItems?.length && (
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
          <ForLoops each={PopularFrequentSearchItems!}>
            {(item, idx) => <PopularFrequentSearchCategory item={item} key={idx} />}
          </ForLoops>
        </Box>
      )}
    </Box>
  );
};

export default PopularFrequentSearchCategories;
