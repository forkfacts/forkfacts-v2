import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import React, { useEffect, useState } from "react";
import LaunchIcon from "@mui/icons-material/Launch";
import { RdiDesktopTableProps, RdiNutritionTableRow } from "@forkfacts/models";

interface RowsByNutrientGroup {
  nutrientGroup: string;
  rows: RdiNutritionTableRow[];
}

const RdiDesktopTable: React.FC<RdiDesktopTableProps> = ({ rows }) => {
  const theme = useTheme();
  const [index, setIndex] = useState(0);
  const [collapsedRows, setCollapsedRows] = useState<any>([]);
  const [tableRows, setTableRows] = useState<RowsByNutrientGroup[]>([]);
  const toggleCollapse = (nutrient: any) => {
    if (collapsedRows.includes(nutrient)) {
      setCollapsedRows(collapsedRows.filter((row: any) => row !== nutrient));
    } else {
      setCollapsedRows([...collapsedRows, nutrient]);
    }
  };
  const isCollapsed = (nutrient: any) => collapsedRows.includes(nutrient);

  function sortRowsByNutrientGroup(rowsByGroup: RowsByNutrientGroup[]) {
    rowsByGroup.sort((a, b) => {
      if (!a.nutrientGroup) {
        return 1;
      }
      if (!b.nutrientGroup) {
        return -1;
      }
      const groupA = a.nutrientGroup.toUpperCase();
      const groupB = b.nutrientGroup.toUpperCase();
      if (groupA < groupB) {
        return -1;
      }
      if (groupA > groupB) {
        return 1;
      }
      return 0;
    });
    return rowsByGroup;
  }

  useEffect(() => {
    const rowsByNutrientGroup = rows?.reduce((acc, row) => {
      const nutrientGroup = row?.nutrientGroup || "Others";
      if (!acc.has(nutrientGroup)) {
        acc.set(nutrientGroup, [row]);
        return acc;
      }
      acc.set(nutrientGroup, [...(acc.get(nutrientGroup) as RdiNutritionTableRow[]), row]);
      return acc;
    }, new Map<string, RdiNutritionTableRow[]>());

    const rowsByNutrientGroupArray = Array.from(
      rowsByNutrientGroup.entries(),
      ([nutrientGroup, rows]) => ({
        nutrientGroup,
        rows,
      })
    );
    setTableRows(sortRowsByNutrientGroup(rowsByNutrientGroupArray));
  }, [rows]);

  const isPink = (i: number) => i % 2 === 0;

  return (
    <Box>
      <TableContainer sx={{ minWidth: 650 }}>
        <Table aria-label="simple table">
          <TableHead sx={{ border: "none", backgroundColor: "#FCFCFC", height: theme.spacing(5) }}>
            <TableRow>
              <TableCell sx={{ borderBottom: "none" }}>
                <Typography
                  variant="labelLarge"
                  sx={{
                    color: theme.palette.customGray.dark,
                    fontWeight: theme.typography.fontWeightRegular,
                  }}
                >
                  Nutrient
                </Typography>
              </TableCell>
              <TableCell align="right" sx={{ borderBottom: "none" }}>
                <Typography
                  variant="labelLarge"
                  sx={{
                    display: "inline-block",
                    color: theme.palette.customGray.dark,
                    fontWeight: theme.typography.fontWeightRegular,
                  }}
                >
                  Recommended amount
                </Typography>
              </TableCell>
              <TableCell align="right" sx={{ borderBottom: "none" }}>
                <Typography
                  variant="labelLarge"
                  sx={{
                    color: theme.palette.customGray.dark,
                    fontWeight: theme.typography.fontWeightRegular,
                    mr: theme.spacing(7),
                  }}
                >
                  Top sources
                </Typography>
              </TableCell>
              <TableCell align="right" sx={{ borderBottom: "none" }}>
                <Typography
                  variant="labelLarge"
                  sx={{
                    color: theme.palette.customGray.dark,
                    fontWeight: theme.typography.fontWeightRegular,
                    ml: theme.spacing(-3),
                  }}
                ></Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <>
              {tableRows?.map((row, index) => {
                if (row.nutrientGroup) {
                  return (
                    <React.Fragment key={index}>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          sx={{ borderBottom: "1px solid #F3EFF4", pb: "10px" }}
                        >
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            {isCollapsed(row.nutrientGroup) ? (
                              <ArrowRightIcon
                                onClick={() => toggleCollapse(row.nutrientGroup)}
                                sx={{
                                  cursor: "pointer",
                                  width: theme.spacing(3),
                                  height: theme.spacing(3),
                                }}
                              />
                            ) : (
                              <>
                                <ArrowDropDownIcon
                                  onClick={() => toggleCollapse(row.nutrientGroup)}
                                  sx={{ cursor: "pointer" }}
                                />
                              </>
                            )}
                            <Typography
                              variant="titleMedium"
                              sx={{
                                color: theme.palette.customGray.main,
                                fontWeight: theme.typography.fontWeightRegular,
                              }}
                            >
                              {row.nutrientGroup}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell
                          component="th"
                          scope="row"
                          sx={{ borderBottom: "1px solid #F3EFF4", pb: "10px" }}
                        />
                        <TableCell
                          component="th"
                          scope="row"
                          sx={{ borderBottom: "1px solid #F3EFF4", pb: "10px" }}
                        />
                      </TableRow>
                      {!isCollapsed(row.nutrientGroup) &&
                        row?.rows.map((content, index2) => (
                          <>
                            <Box mt={2} />
                            <TableRow
                              key={index2}
                              sx={{
                                "&:nth-of-type(even)": {
                                  backgroundColor: "#FFFBFF",
                                },
                              }}
                            >
                              <TableCell
                                component="th"
                                scope="row"
                                sx={{
                                  borderBottom: "none",
                                  "&:nth-of-type(even)": {
                                    backgroundColor: "#FFFBFF",
                                  },
                                }}
                              >
                                <Typography
                                  variant="bodyMedium"
                                  sx={{
                                    color: theme.palette.customGray.main,
                                    fontWeight: theme.typography.fontWeightLight,
                                    ml: theme.spacing(3),
                                    textAlign: "right",
                                  }}
                                >
                                  {content?.nutrient}
                                </Typography>
                              </TableCell>
                              <TableCell
                                align="right"
                                sx={{
                                  borderBottom: "none",
                                  "&:first-child": { borderBottom: "none" },
                                  mt: "10px",
                                }}
                              >
                                {content?.recommendedAmount && (
                                  <Typography
                                    component="span"
                                    variant="bodyMedium"
                                    sx={{
                                      color: theme.palette.customGray.main,
                                      fontWeight: theme.typography.fontWeightLight,
                                      textAlign: "right",
                                      mr: theme.spacing(1),
                                      textTransform: "lowercase",
                                    }}
                                  >
                                    {content?.recommendedAmount} {content?.recommendedUnit}
                                  </Typography>
                                )}
                              </TableCell>
                              <TableCell
                                align="right"
                                sx={{
                                  borderBottom: "none",
                                  "&:first-child": { borderBottom: "none" },
                                  mt: "10px",
                                }}
                              >
                                <Typography
                                  component="span"
                                  variant="labelLarge"
                                  color="primary"
                                  sx={{
                                    fontWeight: theme.typography.fontWeightRegular,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "flex-end",
                                    cursor: "pointer",
                                  }}
                                >
                                  <LaunchIcon sx={{ mr: theme.spacing(2) }} />
                                  Coming soon
                                </Typography>
                              </TableCell>
                            </TableRow>
                          </>
                        ))}
                    </React.Fragment>
                  );
                }
              })}
            </>
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: "flex", justifyContent: "flex-end", my: theme.spacing(7) }}>
        <Typography
          variant="labelMedium"
          sx={{
            fontWeight: theme.typography.fontWeightRegular,
            color: theme.palette.customGray.dark,
          }}
        >
          source: nih.gov
        </Typography>
      </Box>
    </Box>
  );
};

export default RdiDesktopTable;
