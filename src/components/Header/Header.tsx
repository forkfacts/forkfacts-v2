import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import classnames from "classnames";
import MenuIcon from "@mui/icons-material/Menu";
import { useStyles } from "./headerStyles";
import { useMediaQuery, useTheme } from "@mui/material";
import { navigate } from "gatsby";
import { Forkfactslogo } from "@forkfacts/icons";

interface HeaderProps {
  handleToggleButton: () => void;
}

export default function Header({ handleToggleButton }: HeaderProps) {
  const classes = useStyles();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  const onSelectItem = () => {
    navigate("/");
  };

  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: "none",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: ({ palette }) => palette.common.white,
          paddingY: mobile ? theme.spacing(2) : theme.spacing(1),
          paddingX: theme.spacing(0),
        }}
      >
        <Toolbar sx={{ position: "relative" }}>
          <IconButton size="large" edge="start" aria-label="menu" onClick={handleToggleButton}>
            <MenuIcon
              sx={{
                color: theme.palette.customGray.main,
                width: theme.spacing(3),
                height: theme.spacing(3),
                cursor: "pointer",
              }}
            />
          </IconButton>
          <Forkfactslogo onClick={onSelectItem} />
          <Box className={classes.rightContent}>
            <Button color="primary" variant="contained" className={classnames(classes.authBtn)}>
              Sign in
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
