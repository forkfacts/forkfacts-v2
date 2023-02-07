import React from "react";
import { Box, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useStyles } from "./viewMoreStyles";

type ViewMoreButtonProps = {
  handleViewMore?: () => void;
  text?: string;
  icon?: boolean;
};

export default function ViewMoreButton({
  handleViewMore,
  text = "See more",
  icon = false,
}: ViewMoreButtonProps) {
  const styles = useStyles();
  return (
    <Box className={styles.btnWrapper}>
      <Button variant="text" color="primary" className={styles.btn} onClick={handleViewMore}>
        {text}
        {icon && <ExpandMoreIcon className={styles.icon} />}
      </Button>
    </Box>
  );
}
