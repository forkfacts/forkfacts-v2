import React from "react";
import { PopularFrequentSearchCategoryProps } from "@forkfacts/models";
import Typography from "@mui/material/Typography";
import { Box, Card, useMediaQuery, useTheme } from "@mui/material";
import { ForLoops } from "@forkfacts/helpers";

const PopularFrequentSearchCategory = ({ item }: PopularFrequentSearchCategoryProps) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const tablet = useMediaQuery(theme.breakpoints.only("md"));
  const handleSelectedItem = () => {};
  return (
    <Card
      sx={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme.palette.background.default,
        width: mobile ? "47%" : tablet ? "50%" : theme.spacing(26.5),
        borderRadius: theme.spacing(1),
        transition: "all 0.4s ease-out",
        "&:hover": {
          border: `2px solid ${theme.palette.primary.main}`,
          transform: "scale(1.05)",
          boxShadow: `0px 2px 16px rgba(0, 0, 0, 0.1)`,
        },
      }}
      onClick={handleSelectedItem}
    >
      <Box
        sx={{
          borderBottom: "none",
          borderRadius: theme.spacing(1),
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={item.searchImg}
          alt={item.searchName}
          sx={{ objectFit: "contain", width: "100%" }}
        />
      </Box>
      <Box>
        <Typography
          sx={{
            color: theme.palette.customGray.main,
            fontWeight: theme.typography.fontWeightRegular,
            ml: theme.spacing(1.15),
          }}
          variant="titleMedium"
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
            mt: theme.spacing(1.5),
            ml: mobile ? theme.spacing(-1.85) : 0,
          }}
        >
          <ForLoops each={item.extraInfo}>
            {(extraItem, extraIndex) => (
              <Box key={extraIndex} sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  variant="labelSmall"
                  sx={{
                    color: theme.palette.customGray.main,
                    fontWeight: theme.typography.fontWeightRegular,
                  }}
                >
                  {extraItem.weight}
                </Typography>
                <Typography
                  variant="labelMedium"
                  sx={{
                    color: theme.palette.customGray.dark,
                    mt: theme.spacing(0.4),
                    fontWeight: theme.typography.fontWeightLight,
                  }}
                >
                  {extraItem.name}
                </Typography>
              </Box>
            )}
          </ForLoops>
        </Box>
      </Box>
    </Card>
  );
};

export default PopularFrequentSearchCategory;
