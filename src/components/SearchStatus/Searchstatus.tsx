import { Box, Typography } from "@mui/material";
import classnames from "classnames";
import React from "react";
import { flexStyles } from "@forkfacts/styles";
import { useStyles } from "./searchStatusStyles";

type status = "recentScreen" | "ResultsScreen";

type SearchStatusPropTypes = {
  status: status;
  onhandleClearSearch?: () => void;
};

export default function SearchStatus({ status, onhandleClearSearch }: SearchStatusPropTypes) {
  const classes = useStyles();

  const onClearSearch = () => {
    if (status === "ResultsScreen") onhandleClearSearch && onhandleClearSearch()!;
  };
  return (
    <Box className={classnames(flexStyles.pageFlexColContainer)}>
      {status === "recentScreen" ? (
        <Box className={classes.statusWrapper}>
          <Typography color="text.secondary" variant="subtitle2">
            Recent search
          </Typography>
          <Typography
            color="primary"
            variant="caption"
            className={classes.btn}
            onClick={() => onClearSearch()}
          >
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
