import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "gatsby";
import { Button } from "@mui/material";

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Gatsby example
        </Typography>
        <Box py={8}>
          <Button variant={"contained"}>Click Me</Button>
        </Box>
        <Link to="/about" color="secondary">
          Go to the about page
        </Link>
      </Box>
    </Container>
  );
}
