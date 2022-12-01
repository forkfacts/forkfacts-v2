import React from "react";
import { Box, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useStyles } from "./styles";

export default function ViewMoreListsBtn({ onViewMore }: { onViewMore: () => void }) {
  const styles = useStyles();
  return (
    <Box
      className={styles.btnWrapper}
      onClick={() => {
        onViewMore();
      }}
    >
      <Button variant="text" color="primary" className={styles.btn}>
        View More
        <ExpandMoreIcon className={styles.icon} />
      </Button>
    </Box>
  );
}
