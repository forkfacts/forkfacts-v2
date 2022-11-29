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
              sx={{
                textTransform: "capitalize",
                backgroundColor: index === 0 ? "success.light" : "text.200",
                color: index === 0 ? "success.main" : "text.secondary",
                fontWeight: ({ typography }) => typography.fontWeightBold,
                borderColor: index === 0 ? "success.main" : "text.secondary",
                " &:hover": {
                  borderColor: index === 0 ? "success.main" : "text.secondary",
                },
              }}
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
