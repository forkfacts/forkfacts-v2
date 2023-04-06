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
import { NutritionDesktopTableProps, NutritionTableRow } from "@forkfacts/models";

interface RowsByNutrientGroup {
  nutrientGroup: string;
  rows: NutritionTableRow[];
}

const NutritionDesktopTable: React.FC<NutritionDesktopTableProps> = ({ rows }) => {
  const theme = useTheme();
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
      const nutrientGroup = row?.nutrientGroup;
      if (!acc.has(nutrientGroup)) {
        acc.set(nutrientGroup, [row]);
        return acc;
      }
      acc.set(nutrientGroup, [...(acc.get(nutrientGroup) as NutritionTableRow[]), row]);
      return acc;
    }, new Map<string, NutritionTableRow[]>());

    const rowsByNutrientGroupArray = Array.from(
      rowsByNutrientGroup.entries(),
      ([nutrientGroup, rows]) => ({
        nutrientGroup,
        rows,
      })
    );
    setTableRows(sortRowsByNutrientGroup(rowsByNutrientGroupArray));
  }, [rows]);

  function sortNutritionTableRows(rows: NutritionTableRow[]) {
    rows.sort((a, b) => {
      const nameA = a.nutrient.toUpperCase();
      const nameB = b.nutrient.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    return rows;
  }

  return (
    <Box>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
                  % Daily Value
                </Typography>
              </TableCell>
              <TableCell align="right" sx={{ borderBottom: "none" }}>
                <Typography
                  variant="labelLarge"
                  sx={{
                    color: theme.palette.customGray.dark,
                    fontWeight: theme.typography.fontWeightRegular,
                    ml: theme.spacing(-7),
                  }}
                >
                  Amount (per 100g)
                </Typography>
              </TableCell>
              <TableCell align="right" sx={{ borderBottom: "none" }}>
                <Typography
                  variant="labelLarge"
                  sx={{
                    display: "inline",
                    color: theme.palette.customGray.dark,
                    fontWeight: theme.typography.fontWeightRegular,
                  }}
                >
                  RDI
                </Typography>
              </TableCell>
              <TableCell align="right" sx={{ borderBottom: "none" }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <>
              {tableRows?.map((row, index) => {
                if (row.nutrientGroup) {
                  return (
                    <React.Fragment key={index}>
                      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                        <TableCell
                          component="th"
                          scope="row"
                          sx={{ borderBottom: "1px solid #F3EFF4" }}
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
                        <TableCell align="right" sx={{ borderBottom: "1px solid #F3EFF4" }}>
                          <Typography
                            variant="titleMedium"
                            sx={{
                              color: theme.palette.customGray.main,
                              fontWeight: theme.typography.fontWeightLight,
                              pr: "20px",
                            }}
                          />
                        </TableCell>
                        <TableCell align="right" sx={{ borderBottom: "1px solid #F3EFF4" }}>
                          <Typography
                            variant="titleMedium"
                            sx={{
                              color: theme.palette.customGray.main,
                              fontWeight: theme.typography.fontWeightLight,
                              pr: "20px",
                            }}
                          />
                        </TableCell>
                        <TableCell align="right" sx={{ borderBottom: "1px solid #F3EFF4" }}>
                          <Typography
                            variant="titleMedium"
                            sx={{
                              color: theme.palette.customGray.main,
                              fontWeight: theme.typography.fontWeightLight,
                              textTransform: "lowercase",
                              pr: "20px",
                            }}
                          />
                        </TableCell>
                      </TableRow>
                      {!isCollapsed(row.nutrientGroup) &&
                        row?.rows.map((content, index2) => (
                          <TableRow
                            key={index2}
                            sx={{
                              "&:first-of-type td": {
                                backgroundColor: "none",
                              },
                              "&:nth-of-type(odd)": {
                                backgroundColor: "#FFFBFF",
                              },
                            }}
                          >
                            <TableCell component="th" scope="row" sx={{ borderBottom: "none" }}>
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
                            <TableCell align="right" sx={{ borderBottom: "none" }}>
                              {content?.dailyValue && (
                                <Typography
                                  component="span"
                                  variant="bodyMedium"
                                  sx={{
                                    color: theme.palette.customGray.main,
                                    fontWeight: theme.typography.fontWeightLight,
                                    textAlign: "right",
                                    mr: theme.spacing(1),
                                  }}
                                >
                                  {content?.dailyValue}%
                                </Typography>
                              )}
                            </TableCell>
                            <TableCell align="right" sx={{ borderBottom: "none" }}>
                              <Typography
                                component="span"
                                variant="bodyMedium"
                                sx={{
                                  color: theme.palette.customGray.main,
                                  fontWeight: theme.typography.fontWeightLight,
                                }}
                              >
                                {content?.amount} {content?.amountUnit}
                              </Typography>
                            </TableCell>
                            <TableCell align="right" sx={{ borderBottom: "none" }}>
                              {content?.rdi?.servingUnitSize && (
                                <Typography
                                  variant="bodyMedium"
                                  component="span"
                                  sx={{
                                    color: theme.palette.customGray.main,
                                    fontWeight: theme.typography.fontWeightLight,
                                    textTransform: "lowercase",
                                  }}
                                >
                                  {`${Math.abs(content?.rdi?.servingUnitSize)} ${
                                    content?.rdi?.servingSizeUnit
                                  }`}
                                </Typography>
                              )}
                            </TableCell>
                          </TableRow>
                        ))}
                    </React.Fragment>
                  );
                }
                if (!row?.nutrientGroup) {
                  return sortNutritionTableRows(row?.rows)?.map((innerRow, index) => {
                    return (
                      <React.Fragment key={index}>
                        <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                          <TableCell
                            component="th"
                            scope="row"
                            sx={{ borderBottom: "1px solid #F3EFF4" }}
                          >
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                              {isCollapsed(row?.nutrientGroup) ? (
                                <ArrowRightIcon
                                  onClick={() => toggleCollapse(row.nutrientGroup)}
                                  sx={{
                                    cursor: "pointer",
                                    width: theme.spacing(3),
                                    height: theme.spacing(3),
                                    visibility: "hidden",
                                  }}
                                />
                              ) : (
                                <>
                                  <ArrowDropDownIcon
                                    onClick={() => toggleCollapse(row.nutrientGroup)}
                                    sx={{ cursor: "pointer", visibility: "hidden" }}
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
                                {innerRow?.nutrient}
                              </Typography>
                            </Box>
                          </TableCell>
                          <TableCell align="right" sx={{ borderBottom: "1px solid #F3EFF4" }}>
                            {innerRow?.dailyValue && (
                              <Typography
                                variant="titleMedium"
                                sx={{
                                  color: theme.palette.customGray.main,
                                  fontWeight: theme.typography.fontWeightRegular,
                                  pr: "20px",
                                }}
                              >
                                {innerRow?.dailyValue} %
                              </Typography>
                            )}
                          </TableCell>
                          <TableCell align="right" sx={{ borderBottom: "1px solid #F3EFF4" }}>
                            {!innerRow?.amount ? null : (
                              <Typography
                                variant="titleMedium"
                                sx={{
                                  color: theme.palette.customGray.main,
                                  fontWeight: theme.typography.fontWeightRegular,
                                  pr: "20px",
                                }}
                              >
                                {innerRow?.amount} {innerRow?.amountUnit}
                              </Typography>
                            )}
                          </TableCell>
                          <TableCell align="right" sx={{ borderBottom: "1px solid #F3EFF4" }}>
                            {innerRow?.rdi?.servingUnitSize && (
                              <Typography
                                variant="titleMedium"
                                sx={{
                                  color: theme.palette.customGray.main,
                                  fontWeight: theme.typography.fontWeightRegular,
                                  textTransform: "lowercase",
                                  pr: "20px",
                                }}
                              >
                                {`${innerRow?.rdi?.servingUnitSize} ${innerRow?.rdi?.servingSizeUnit}`}
                              </Typography>
                            )}
                          </TableCell>
                        </TableRow>
                      </React.Fragment>
                    );
                  });
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
            color: theme.palette.customGray.textDark,
          }}
        >
          Source: USDA
        </Typography>
      </Box>
    </Box>
  );
};

export default NutritionDesktopTable;
