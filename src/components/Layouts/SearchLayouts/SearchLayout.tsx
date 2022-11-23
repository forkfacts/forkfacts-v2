import { PageProps } from "gatsby";
import React, { PropsWithChildren } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useStyles } from "./styles";

const SearchLayout: React.FC<PageProps | PropsWithChildren> = ({ children }) => {
  const classes = useStyles();

  return (
    <div>
      <AppBar color="transparent" position="relative" className={classes.main}>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}>
            <MenuIcon className={classes.menuStyle} />
          </IconButton>
          <Typography variant="h6" component="div" className={classes.text} sx={{ flexGrow: 1 }}>
            Forkfacts
          </Typography>
        </Toolbar>
      </AppBar>
      <Box>{children}</Box>
    </div>
  );
};

export default SearchLayout;
