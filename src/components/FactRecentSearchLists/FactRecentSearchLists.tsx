import { Box, Paper, Typography, useTheme } from "@mui/material";
// will be use with real data
// import { StaticImage } from "gatsby-plugin-image";
import React from "react";

interface listItemTypes {
  name: string;
  path: string;
  image: string;
}
interface propsTypes {
  recentLists: Array<listItemTypes>;
}

const FactRecentSearchLists: React.FC<propsTypes> = ({ recentLists }) => {
  const theme = useTheme();
  console.log(theme.appColor.success);
  return (
    <Box>
      {recentLists.map((item, index) => (
        <Paper
          elevation={0}
          key={index}
          sx={{ width: "100%", display: "flex", alignItems: "center", mb: 5 }}
        >
          <img src={item.image} alt={item.name} style={{ width: "24px", height: "24px" }} />
          <Typography
            sx={{
              ml: 2,
              fontSize: (theme) => `${theme.spacing(2)}px`,
              lineHeight: "24px",
              verticallAign: "top",
              letterSpacing: " 0.5px",
              fontWeight: 400,
            }}
          >
            {item.name}
          </Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default FactRecentSearchLists;
