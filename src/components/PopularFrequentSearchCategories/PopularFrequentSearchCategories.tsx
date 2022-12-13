import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { blue } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import { Box, useTheme } from "@mui/material";
import { ForLoops } from "@forkfacts/helpers";
import { PopularFrequentSearchProps, extraInfo } from "@forkfacts/models";

const PopularFrequentSearchCategories = ({
  PopularFrequentSearchItems,
  PopularFrequentSearchTitle,
}: PopularFrequentSearchProps) => {
  const { spacing, palette, shadows, typography, shape } = useTheme();

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
        <Typography variant="body1" sx={{ color: palette.grey[500] }}>
          By frequently searched
        </Typography>
      </Box>
      <List
        sx={{
          width: spacing(90),
          bgcolor: "background.paper",
          borderRadius: spacing(1.5),
          boxShadow: shadows[1],
        }}
        disablePadding
      >
        <ForLoops each={PopularFrequentSearchItems}>
          {(item, idx) => (
            <ListItem sx={{ display: "flex" }} disablePadding key={idx}>
              <img src="/popular.png" alt="popular-img" />
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
          )}
        </ForLoops>
      </List>
    </Box>
  );
};

export default PopularFrequentSearchCategories;
