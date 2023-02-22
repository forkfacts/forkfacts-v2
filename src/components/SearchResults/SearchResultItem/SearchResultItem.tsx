import { Box, ListItem, ListItemText, Typography, useTheme } from "@mui/material";
import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { SearchResultItemProps } from "@forkfacts/models";
import { useStyles } from "../../SearchResults/searchResultsStyles";

export default function SearchResultItem({ item, onSelectItem }: SearchResultItemProps) {
  const theme = useTheme();
  const styles = useStyles();

  return (
    <ListItem disablePadding onClick={() => onSelectItem(item)} sx={{ mb: theme.spacing(0.5) }}>
      <ListItemButton>
        <ListItemIcon>
          <img
            src={item.image || "/recentImg.png"}
            alt={item.name}
            style={{ width: theme.spacing(3), height: theme.spacing(3) }}
          />
        </ListItemIcon>
        <ListItemText
          primary={
            <Box className={styles.ListItemText}>
              <Typography
                variant="bodyMedium"
                sx={{
                  whiteSpace: "nowrap",
                  color: theme.palette.customGray.textLight,
                  fontWeight: theme.typography.fontWeightLight,
                }}
              >
                {item.category}
              </Typography>
              {item.category && (
                <ArrowForwardIosIcon
                  sx={{
                    width: theme.spacing(1.3),
                    height: theme.spacing(1.3),
                    color: theme.palette.customGray.textLight,
                  }}
                />
              )}
              <Typography
                variant="bodyMedium"
                sx={{
                  whiteSpace: "nowrap",
                  color: theme.palette.customGray.main,
                  fontWeight: theme.typography.fontWeightLight,
                }}
              >
                {item.name}
              </Typography>
            </Box>
          }
        />
      </ListItemButton>
    </ListItem>
  );
}
