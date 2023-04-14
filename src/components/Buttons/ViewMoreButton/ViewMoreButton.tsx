import React from "react";
import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
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
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box className={styles.btnWrapper}>
      <Button variant="text" color="primary" onClick={handleViewMore}>
        <Typography
          variant={!mobile ? "labelLarge" : "labelSmall"}
          color="primary"
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
