import React from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
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
  const theme = useTheme();
  return (
    <Box className={styles.btnWrapper}>
      <Button variant="text" color="primary" onClick={handleViewMore}>
        <Typography
          variant="labelSmall"
          sx={{
            fontWeight: theme.typography.fontWeightRegular,
            textTransform: "capitalize",
          }}
        >
          {text}
        </Typography>
        {icon && <ExpandMoreIcon className={styles.icon} />}
      </Button>
    </Box>
  );
}
