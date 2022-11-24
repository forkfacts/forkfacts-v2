import { Box, Paper } from "@mui/material";
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
  return (
    <Box>
      {recentLists.map((item, index) => (
        <Paper key={index}>
          <img src="/recentImg.png" alt={item.name} />
        </Paper>
      ))}
    </Box>
  );
};

export default FactRecentSearchLists;
