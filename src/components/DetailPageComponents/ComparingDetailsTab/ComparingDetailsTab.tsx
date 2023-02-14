import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import { ForLoops } from "@forkfacts/helpers";
import { CompareSorting } from "@forkfacts/icons";
import React, { useState } from "react";
import { ComparingDetailsTabProps } from "@forkfacts/models";

const ComparingDetailsTab: React.FC<ComparingDetailsTabProps> = ({ compareTableItems }) => {
  const theme = useTheme();
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", width: "100%", alignItems: "flex-end" }}>
          <Typography
            variant="h6"
            sx={{ color: theme.palette.customGray.textDark, textTransform: "uppercase" }}
          >
            Comparing Greens
          </Typography>
          <Typography variant="caption" sx={{ ml: theme.spacing(2) }}>
            3 1/2 OUNCES RAW (2 TO 3 CUPS)
          </Typography>
        </Box>
        <Box sx={{ display: "flex", columnGap: theme.spacing(3) }}>
          <Button
            startIcon={<FilterListOutlinedIcon />}
            variant="outlined"
            sx={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
          >
            Filter foods
          </Button>
          <Button startIcon={<VisibilityOutlinedIcon />} variant="outlined">
            Show/Hide
          </Button>
        </Box>
      </Box>
      <TableContainer sx={{ mt: theme.spacing(5), boxShadow: "none" }}>
        <Table sx={{ minWidth: 650, border: "none" }}>
          <TableHead style={{ border: "none", backgroundColor: "#FCFCFC" }}>
            <TableRow>
              <TableCell style={{ borderBottom: "none" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: theme.spacing(1),
                    cursor: "pointer",
                  }}
                >
                  <Typography>Food name</Typography>{" "}
                  <CompareSorting width={theme.spacing(2.75)} height={theme.spacing(2.75)} />
                </Box>
              </TableCell>
              <TableCell align="right" style={{ borderBottom: "none" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: theme.spacing(1),
                    cursor: "pointer",
                  }}
                >
                  <Typography> Calories</Typography>{" "}
                  <CompareSorting width={theme.spacing(2.75)} height={theme.spacing(2.75)} />
                </Box>
              </TableCell>
              <TableCell align="right" style={{ borderBottom: "none" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: theme.spacing(1),
                    cursor: "pointer",
                  }}
                >
                  <Typography>Beta Carotene (mg)</Typography>{" "}
                  <CompareSorting width={theme.spacing(2.75)} height={theme.spacing(2.75)} />
                </Box>
              </TableCell>
              <TableCell align="right" style={{ borderBottom: "none" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: theme.spacing(1),
                    cursor: "pointer",
                  }}
                >
                  <Typography>Vitamin C (mg)</Typography>{" "}
                  <CompareSorting width={theme.spacing(2.75)} height={theme.spacing(2.75)} />
                </Box>
              </TableCell>
              <TableCell align="right" style={{ borderBottom: "none" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: theme.spacing(1),
                    cursor: "pointer",
                  }}
                >
                  <Typography>Calcium (mg)</Typography>{" "}
                  <CompareSorting width={theme.spacing(2.75)} height={theme.spacing(2.75)} />
                </Box>
              </TableCell>
              <TableCell align="right" style={{ borderBottom: "none" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: theme.spacing(1),
                    cursor: "pointer",
                  }}
                >
                  <Typography>Iron (mg)</Typography>{" "}
                  <CompareSorting width={theme.spacing(2.75)} height={theme.spacing(2.75)} />
                </Box>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <ForLoops each={compareTableItems}>
              {(row, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell style={{ borderBottom: "none" }} component="th" scope="row">
                      {row.foodName}
                    </TableCell>
                    <TableCell style={{ borderBottom: "none" }} align="right">
                      {row.calories}
                    </TableCell>
                    <TableCell style={{ borderBottom: "none" }} align="right">
                      {row.betaCarotene}
                    </TableCell>
                    <TableCell style={{ borderBottom: "none" }} align="right">
                      {row.vitamin}
                    </TableCell>
                    <TableCell style={{ borderBottom: "none" }} align="right">
                      {row.calcium}
                    </TableCell>
                    <TableCell style={{ borderBottom: "none" }} align="right">
                      {row.iron}
                    </TableCell>
                  </TableRow>
                );
              }}
            </ForLoops>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ComparingDetailsTab;
