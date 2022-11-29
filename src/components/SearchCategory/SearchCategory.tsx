import * as React from "react";
import { Box, Button, Grid } from "@mui/material";
import EggAltIcon from "@mui/icons-material/EggAlt";

export default function SearchCategory() {
  return (
    <Box sx={{ width: "100%", mt: ({ spacing }) => spacing(3) }}>
      <Grid container justifyContent="space-between">
        {["Food", "Recipe", "Library"].map((value, index) => (
          <Grid key={index} item>
            <Button
              sx={{ textTransform: "capitalize", backgroundColor: "success", color: "secondary" }}
              variant="outlined"
              size="small"
              startIcon={
                <EggAltIcon
                  sx={{
                    color: "grey.300",
                    width: "15px",
                    height: "15px",
                    fontSize: ({ typography }) => typography.fontSize,
                  }}
                />
              }
            >
              {value}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
