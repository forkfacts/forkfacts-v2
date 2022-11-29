import { Box, Typography } from "@mui/material";
import React from "react";

type status = "recentScreen" | "ResultsScreen";

type SearchStatusPropTypes = {
  status: status;
};

export default function SearchStatus({ status }: SearchStatusPropTypes) {
  return (
    <Box sx={{ width: "100%", my: { xs: ({ spacing }) => spacing(3) } }}>
      {status === "recentScreen" ? (
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
      ) : (
        <Box>
          {" "}
          <Typography color="text.secondary" variant="body2">
            I’m searching for
          </Typography>
        </Box>
      )}
    </Box>
  );
}
