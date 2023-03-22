import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { CompareSorting } from "@forkfacts/icons";
import React, { useState } from "react";
import { NutritionDesktopTableProps } from "@forkfacts/models";

const NutritionDesktopTable: React.FC<NutritionDesktopTableProps> = ({ nutritionTableItems }) => {
  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.only("lg"));
  const desktop = useMediaQuery(theme.breakpoints.only("lg"));
  const [collapsedRows, setCollapsedRows] = useState<any>([]);
  const toggleCollapse = (nutrient: any) => {
    if (collapsedRows.includes(nutrient)) {
      setCollapsedRows(collapsedRows.filter((row: any) => row !== nutrient));
    } else {
      setCollapsedRows([...collapsedRows, nutrient]);
    }
  };
  const isCollapsed = (nutrient: any) => collapsedRows.includes(nutrient);

  function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
    return { name, calories, fat, carbs, protein };
  }

  const row = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];
  return (
    <Box>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ border: "none", backgroundColor: "#FCFCFC" }}>
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
              <TableCell
                align="right"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  borderBottom: "none",
                }}
              >
                <CompareSorting width={theme.spacing(3)} height={theme.spacing(3)} />
                <Typography
                  variant="labelLarge"
                  sx={{
                    color: theme.palette.customGray.dark,
                    fontWeight: theme.typography.fontWeightRegular,
                  }}
                >
                  %Daily Value
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
                    color: theme.palette.customGray.dark,
                    fontWeight: theme.typography.fontWeightRegular,
                  }}
                >
                  RDI
                </Typography>
                <CompareSorting
                  width={theme.spacing(3)}
                  height={theme.spacing(3)}
                  style={{ marginLeft: theme.spacing(1) }}
                />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {nutritionTableItems.map((item, index) => (
              <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row" sx={{ borderBottom: "1px solid #F3EFF4" }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    {isCollapsed(item.nutrient) ? (
                      <ArrowRightIcon
                        onClick={() => toggleCollapse(item.nutrient)}
                        sx={{
                          cursor: "pointer",
                          width: theme.spacing(3),
                          height: theme.spacing(3),
                        }}
                      />
                    ) : (
                      <>
                        {item?.nutrientContents?.length ? (
                          <ArrowDropDownIcon
                            onClick={() => toggleCollapse(item.nutrient)}
                            sx={{ cursor: "pointer" }}
                          />
                        ) : null}
                      </>
                    )}
                    <Typography
                      variant="titleMedium"
                      sx={{
                        color: theme.palette.customGray.main,
                        fontWeight: theme.typography.fontWeightLight,
                        ml: !item?.nutrientContents?.length ? theme.spacing(3) : 0,
                      }}
                    >
                      {item.nutrient}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="right" sx={{ borderBottom: "1px solid #F3EFF4" }}>
                  {item.dailyValue && (
                    <Typography
                      variant="titleMedium"
                      sx={{
                        color: theme.palette.customGray.main,
                        fontWeight: theme.typography.fontWeightLight,
                      }}
                    >
                      {item.dailyValue}%
                    </Typography>
                  )}
                </TableCell>
                <TableCell align="right" sx={{ borderBottom: "1px solid #F3EFF4" }}>
                  {!item.amount ? null : (
                    <Typography
                      variant="titleMedium"
                      sx={{
                        color: theme.palette.customGray.main,
                        fontWeight: theme.typography.fontWeightLight,
                      }}
                    >
                      {item.amount}
                      {item.amountUnit}
                    </Typography>
                  )}
                </TableCell>
                <TableCell align="right" sx={{ borderBottom: "1px solid #F3EFF4" }}>
                  {item.rdi.value && (
                    <Typography
                      variant="titleMedium"
                      sx={{
                        color: theme.palette.customGray.main,
                        fontWeight: theme.typography.fontWeightLight,
                        textTransform: "lowercase",
                      }}
                    >
                      {`${item.rdi.value}${item.rdi.weight}`}
                    </Typography>
                  )}
                </TableCell>
              </TableRow>
            ))}
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
