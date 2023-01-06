import React from "react";
import { Box, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useStyles } from "./viewMoreStyles";

type ViewMoreButtonProps = {
  handleViewMore?: () => void;
  text?: string;
};

export default function ViewMoreButton({
  handleViewMore,
  text = "View more",
}: ViewMoreButtonProps) {
  const styles = useStyles();
  return (
    <Box className={styles.btnWrapper}>
      <Button
        variant="text"
        color="primary"
        sx={{ fontSize: ({ typography }) => typography.caption.fontSize }}
        className={styles.btn}
        onClick={handleViewMore}
      >
        {text}
        {text === "View more" ? (
          <ExpandMoreIcon className={styles.icon} />
        ) : (
          <ExpandLessIcon className={styles.icon} />
        )}
      </Button>
    </Box>
  );
}
