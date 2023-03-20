import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

const ComingSoon = () => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItem: "center",
          justifyContent: "center",
          mt: theme.spacing(10),
        }}
      >
        <Box
          sx={{
            width: theme.spacing(21.5),
            height: theme.spacing(21.5),
            mx: "auto",
            mb: theme.spacing(2),
          }}
        >
          <Box component="img" src="/comingsoon.svg" alt="comingsoon-image" />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItem: "center",
            justifyContent: "center",
            textAlign: "center",
            width: theme.spacing(46.875),
            height: theme.spacing(14.5),
            mx: "auto",
          }}
        >
          <Typography
            variant={desktop ? "titleLarge" : "titleMedium"}
            sx={{
              fontWeight: theme.typography.fontWeightRegular,
              color: theme.palette.customGray.main,
              mb: theme.spacing(2),
            }}
          >
            Coming soon
          </Typography>
          <Typography
            variant={desktop ? "bodyLarge" : "bodyMedium"}
            sx={{
              fontWeight: theme.typography.fontWeightLight,
              color: theme.palette.customGray.textDark,
            }}
          >
            The team is working hard to make this information accessible. Please come back in
            sometime.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ComingSoon;
