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
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { CompareSorting } from "@forkfacts/icons";
import React, { useState } from "react";
import { NutritionDesktopTableProps } from "@forkfacts/models";

const NutritionDesktopTable: React.FC<NutritionDesktopTableProps> = ({ nutritionTableItems }) => {
  const theme = useTheme();
  const [collapsedRows, setCollapsedRows] = useState<any>([]);
  const toggleCollapse = (nutrient: any) => {
    if (collapsedRows.includes(nutrient)) {
      setCollapsedRows(collapsedRows.filter((row: any) => row !== nutrient));
    } else {
      setCollapsedRows([...collapsedRows, nutrient]);
    }
  };

  const isCollapsed = (nutrient: any) => collapsedRows.includes(nutrient);
  return (
    <Box>
      <TableContainer sx={{ overflow: "hidden" }}>
        <Table sx={{ minWidth: 650, border: "none", ml: theme.spacing(3) }}>
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
                  <Typography
                    variant="labelLarge"
                    sx={{
                      color: theme.palette.customGray.dark,
                      fontWeight: theme.typography.fontWeightRegular,
                    }}
                  >
                    Nutrient
                  </Typography>
                </Box>
              </TableCell>
              <TableCell style={{ borderBottom: "none" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: theme.spacing(1),
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    variant="labelLarge"
                    sx={{
                      color: theme.palette.customGray.dark,
                      fontWeight: theme.typography.fontWeightRegular,
                    }}
                  >
                    %Daily Value
                  </Typography>
                  <CompareSorting width={theme.spacing(2.45)} height={theme.spacing(2.75)} />
                </Box>{" "}
              </TableCell>
              <TableCell style={{ borderBottom: "none" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: theme.spacing(1),
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    variant="labelLarge"
                    sx={{
                      color: theme.palette.customGray.dark,
                      fontWeight: theme.typography.fontWeightRegular,
                    }}
                  >
                    Amount
                  </Typography>
                </Box>
              </TableCell>
              <TableCell style={{ borderBottom: "none" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: theme.spacing(1),
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    variant="labelLarge"
                    sx={{
                      color: theme.palette.customGray.dark,
                      fontWeight: theme.typography.fontWeightRegular,
                    }}
                  >
                    RDI
                  </Typography>
                  <CompareSorting width={theme.spacing(2.45)} height={theme.spacing(2.75)} />
                </Box>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {nutritionTableItems.map((item, index) => (
              <React.Fragment key={index}>
                <TableRow>
                  <TableCell style={{ borderBottom: "none" }}>
                    <Box
                      sx={{ display: "flex", alignItems: "center", columnGap: theme.spacing(0.5) }}
                    >
                      {isCollapsed(item.nutrient) ? (
                        <ArrowDropUpIcon
                          onClick={() => toggleCollapse(item.nutrient)}
                          sx={{
                            cursor: "pointer",
                            width: theme.spacing(3),
                            height: theme.spacing(3),
                          }}
                        />
                      ) : (
                        <ArrowDropDownIcon
                          onClick={() => toggleCollapse(item.nutrient)}
                          sx={{ cursor: "pointer" }}
                        />
                      )}
                      <Typography
                        variant="titleMedium"
                        sx={{
                          color: theme.palette.customGray.main,
                          fontWeight: theme.typography.fontWeightRegular,
                        }}
                      >
                        {item.nutrient}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell style={{ borderBottom: "none" }}>
                    <Typography
                      variant="titleMedium"
                      sx={{
                        color: theme.palette.customGray.main,
                        fontWeight: theme.typography.fontWeightRegular,
                        marginLeft: theme.spacing(4),
                      }}
                    >
                      {item.dailyValue}%
                    </Typography>
                  </TableCell>
                  <TableCell style={{ borderBottom: "none" }}>
                    <Typography
                      variant="titleMedium"
                      sx={{
                        color: theme.palette.customGray.main,
                        fontWeight: theme.typography.fontWeightRegular,
                        marginLeft: theme.spacing(1),
                      }}
                    >
                      {item.amount}
                    </Typography>
                  </TableCell>
                  <TableCell style={{ borderBottom: "none" }}>
                    <Typography
                      variant="titleMedium"
                      sx={{
                        color: theme.palette.customGray.main,
                        fontWeight: theme.typography.fontWeightRegular,
                        marginLeft: theme.spacing(1),
                      }}
                    >
                      {`${item.rdi.value}${item.rdi.weight}`}
                    </Typography>
                  </TableCell>
                </TableRow>
                {!isCollapsed(item.nutrient) &&
                  item.nutrientContents.map((content) => (
                    <TableRow key={content.nutrient}>
                      <TableCell style={{ borderBottom: "none" }}>
                        <Typography
                          variant="bodyLarge"
                          sx={{
                            color: theme.palette.customGray.main,
                            marginLeft: theme.spacing(4),
                            fontWeight: theme.typography.fontWeightLight,
                          }}
                        >
                          {content.nutrient}
                        </Typography>
                      </TableCell>
                      <TableCell style={{ borderBottom: "none" }}>
                        <Typography
                          variant="bodyLarge"
                          sx={{
                            color: theme.palette.customGray.main,
                            marginLeft: theme.spacing(4),
                            fontWeight: theme.typography.fontWeightLight,
                          }}
                        >
                          {content.dailyValue}%
                        </Typography>
                      </TableCell>
                      <TableCell style={{ borderBottom: "none" }}>
                        <Typography
                          variant="bodyLarge"
                          sx={{
                            color: theme.palette.customGray.main,
                            marginLeft: theme.spacing(1),
                            fontWeight: theme.typography.fontWeightLight,
                          }}
                        >
                          {content.amount}
                        </Typography>
                      </TableCell>
                      <TableCell style={{ borderBottom: "none" }}>
                        <Typography
                          variant="bodyLarge"
                          sx={{
                            color: theme.palette.customGray.main,
                            marginLeft: theme.spacing(1),
                            fontWeight: theme.typography.fontWeightLight,
                          }}
                        >{`${content.rdi.value}${content.rdi.weight}`}</Typography>
                      </TableCell>
                    </TableRow>
                  ))}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default NutritionDesktopTable;
