import React from "react";
import { Box, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useStyles } from "./viewMoreStyles";

type propsTypes = {
  handleViewMore: () => void;
};

export default function ViewMoreButton({ handleViewMore }: propsTypes) {
  const styles = useStyles();
  return (
    <Box className={styles.btnWrapper}>
      <Button variant="text" color="primary" className={styles.btn} onClick={handleViewMore}>
        View More
        <ExpandMoreIcon className={styles.icon} />
      </Button>
    </Box>
  );
}
