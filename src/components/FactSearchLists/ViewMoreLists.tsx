import { Box, Button, Theme } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { makeStyles } from "@mui/styles";
import { addSpacing } from "@forkfacts/helpers";
import React from "react";

const useStyles = makeStyles(({ spacing, typography, breakpoints }: Theme) => ({
  btnWrapper: {
    [breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      paddingTop: spacing(1.2),
      paddingLeft: spacing(2),
      paddingBottom: spacing(1.2),
      paddingRight: spacing(3.9),
    },
  },
  btn: {
    [breakpoints.down("sm")]: {
      fontWeight: typography.fontWeightBold,
      fontSize: addSpacing(spacing, 4),
      textTransform: "capitalize",
    },
  },
  icon: {
    fontWeight: typography.fontWeightBold,
  },
}));

export default function ViewMoreListsBtn() {
  const styles = useStyles();
  return (
    <Box className={styles.btnWrapper}>
      <Button variant="text" color="primary" className={styles.btn}>
        View More
        <ExpandMoreIcon className={styles.icon} />
      </Button>
    </Box>
  );
}
