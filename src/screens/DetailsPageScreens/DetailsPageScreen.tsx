import { Layout } from "@forkfacts/components";
import { DetailsPageScreenProps } from "@forkfacts/models";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, Button } from "@mui/material";
import React from "react";
import { useStyles } from "./detailspageStyles";

const DetailsPageScreen: React.FC<DetailsPageScreenProps> = ({ sidebarItems }) => {
  const classes = useStyles();
  return (
    <Layout sidebarItems={sidebarItems}>
      <Box className={classes.desktopScreenWrapper}>
        <Button startIcon={<ArrowBackIosIcon />} sx={{}}>
          Go back
        </Button>
      </Box>
    </Layout>
  );
};

export default DetailsPageScreen;
