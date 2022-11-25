import { Box, Paper, Typography } from "@mui/material";
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
  return (
    <Box>
      {recentLists.map((item, index) => (
        <Paper
          elevation={0}
          key={index}
          sx={{ width: "100%", display: "flex", alignItems: "center", mb: 4 }}
        >
          <img src={item.image} alt={item.name} style={{ width: "24px", height: "24px" }} />
          <Typography
            sx={{
              ml: 2,
              fontStyle: "normal",
              fontSize: "16px",
              lineHeight: "24px",
              textAlign: "center",
              verticallAign: "top",
              letterSpacing: " 0.5px",
              color: "#000000",
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
