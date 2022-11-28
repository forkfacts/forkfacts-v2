import { Box, Typography } from "@mui/material";
import React from "react";

export default function ClearSearch() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Typography color="text.secondary" variant="subtitle2">
        Recent search
      </Typography>
      <Typography color="primary" variant="caption">
        Clear all
      </Typography>
    </Box>
  );
}
