import * as React from "react";
import { Box, Button, Grid, Paper } from "@mui/material";
import EggAltIcon from "@mui/icons-material/EggAlt";

export default function SearchCategory() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container justifyContent="center" spacing={3}>
        {[0, 1, 2].map((value) => (
          <Grid key={value} item>
            <Button
              variant="outlined"
              size="small"
              startIcon={<EggAltIcon sx={{ width: "15px", height: "15px" }} />}
            >
              Small
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
