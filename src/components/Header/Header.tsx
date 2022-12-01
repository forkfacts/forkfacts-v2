import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import classnames from "classnames";
import { flexStyles } from "@forkfacts/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { useStyles } from "./headerStyles";

interface props {
  handleToggleEvenets: () => void;
}

export default function Header({ handleToggleEvenets }: props) {
  const classes = useStyles();
  return (
    <Box>
      <AppBar position="fixed" color="transparent" sx={{ boxShadow: "none" }}>
        <Toolbar sx={{ position: "relative" }}>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 0.5 }}
            onClick={handleToggleEvenets}
          >
            <MenuIcon />
          </IconButton>
          <Typography color="primary.light" className={classes.pageTitle}>
            Forkfacts
          </Typography>
          <Box className={classes.rightContent}>
            <Button
              color="primary"
              variant="contained"
              className={classnames(flexStyles.pageFlexRowContainer, classes.authBtn)}
            >
              Sign in
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
