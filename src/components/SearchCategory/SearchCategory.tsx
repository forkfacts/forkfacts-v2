import * as React from "react";
import { Box, Button, Grid } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

export default function SearchCategory() {
  return (
    <Box sx={{ width: { sm: "100%" } }}>
      <Grid container spacing={{ sm: 0, sx: 5 }}>
        <Grid item sm={4} xs={6}>
          <Box sx={{ p: "3px" }}>
            <Button variant="outlined" startIcon={<DeleteIcon />}>
              Delete
            </Button>
          </Box>
        </Grid>
        <Grid item sm={4} xs={6}>
          <Button variant="outlined" startIcon={<DeleteIcon />}>
            Delete
          </Button>
        </Grid>
        <Grid item sm={4} xs={6}>
          <Button variant="outlined" startIcon={<DeleteIcon />}>
            Delete
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
