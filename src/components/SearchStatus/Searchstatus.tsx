import { Box, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./searchStatusStyles";

type status = "RecentScreen" | "ResultsScreen";

type SearchStatusPropTypes = {
  status: status;
  onhandleClearSearch?: () => void;
};

export default function SearchStatus({ status, onhandleClearSearch }: SearchStatusPropTypes) {
  const classes = useStyles();

  console.log(status);

  return (
    <Box className={classes.root}>
      {status === "RecentScreen" ? (
        <Box className={classes.statusWrapper}>
          <Typography color="text.secondary" variant="subtitle2">
            Recent search
          </Typography>
          <Typography
            color="primary"
            variant="caption"
            className={classes.btn}
            onClick={onhandleClearSearch}
          >
            Clear all
          </Typography>
        </Box>
      ) : (
        <Box className={classes.statusWrapper}>
          {" "}
          <Typography color="text.secondary" variant="body2">
            I’m searching for
          </Typography>
        </Box>
      )}
    </Box>
  );
}
