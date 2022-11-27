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
  return (
    <Box>
      {recentLists.map((item, index) => (
        <Paper elevation={0} key={index}>
          <img src={item.image} alt={item.name} style={{ width: "24px", height: "24px" }} />
          <Typography>{item.name}</Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default FactRecentSearchLists;
