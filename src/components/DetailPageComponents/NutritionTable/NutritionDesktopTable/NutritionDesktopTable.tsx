import {
  Box,
  Table,
  TableBody,
  TableCell,
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
  return (
    <Box>
      <Table sx={{ minWidth: 1000, border: "none", ml: theme.spacing(3) }}>
        <TableHead style={{ border: "none", backgroundColor: "#FCFCFC" }}>
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
            <TableCell sx={{ borderBottom: "none" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  ml: theme.spacing(-2),
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
                <CompareSorting width={theme.spacing(3)} height={theme.spacing(3)} />
              </Box>
            </TableCell>
            <TableCell sx={{ borderBottom: "none" }}>
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
            <TableCell sx={{ borderBottom: "none" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
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
                <CompareSorting
                  width={theme.spacing(3)}
                  height={theme.spacing(3)}
                  style={{ marginLeft: theme.spacing(1) }}
                />
              </Box>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {nutritionTableItems.map((item) => (
            <React.Fragment key={item.nutrient}>
              <TableRow>
                <TableCell sx={{ borderBottom: "1px solid #F3EFF4" }}>
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
                        fontWeight: theme.typography.fontWeightRegular,
                        ml: !item?.nutrientContents?.length ? theme.spacing(3) : 0,
                      }}
                    >
                      {item.nutrient}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ borderBottom: "1px solid #F3EFF4" }}>
                  {item.dailyValue && (
                    <Typography
                      variant="titleMedium"
                      sx={{
                        color: theme.palette.customGray.main,
                        fontWeight: theme.typography.fontWeightRegular,
                      }}
                    >
                      {item.dailyValue}%
                    </Typography>
                  )}
                </TableCell>
                <TableCell sx={{ borderBottom: "1px solid #F3EFF4" }}>
                  {!item.amount ? null : (
                    <Typography
                      variant="titleMedium"
                      sx={{
                        color: theme.palette.customGray.main,
                        fontWeight: theme.typography.fontWeightRegular,
                      }}
                    >
                      {item.amount}
                      {item.amountUnit}
                    </Typography>
                  )}
                </TableCell>
                <TableCell sx={{ borderBottom: "1px solid #F3EFF4" }}>
                  {item.rdi.value && (
                    <Typography
                      variant="titleMedium"
                      sx={{
                        color: theme.palette.customGray.main,
                        fontWeight: theme.typography.fontWeightRegular,
                        textTransform: "lowercase",
                        ml: theme.spacing(1),
                      }}
                    >
                      {`${item.rdi.value}${item.rdi.weight}`}
                    </Typography>
                  )}
                </TableCell>
              </TableRow>
              {!isCollapsed(item.nutrient) &&
                item?.nutrientContents?.map((content, index2) => (
                  <TableRow
                    key={index2}
                    sx={{
                      "&:nth-of-type(odd)": {
                        backgroundColor: "#FFFBFF",
                      },
                    }}
                  >
                    <TableCell sx={{ borderBottom: "none", ml: theme.spacing(10) }} align="left">
                      <Typography
                        variant="bodyMedium"
                        sx={{
                          color: theme.palette.customGray.main,
                          fontWeight: theme.typography.fontWeightLight,
                          ml: theme.spacing(3),
                          textAlign: "right",
                        }}
                      >
                        {content.nutrient}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ borderBottom: "none" }} align="right">
                      <Box
                        sx={{
                          width: "18%",
                          textAlign: "right",
                          display: "flex",
                          justifyContent: "flex-end",
                          alignItems: "flex-end",
                        }}
                      >
                        <Typography
                          component="span"
                          variant="bodyLarge"
                          sx={{
                            color: theme.palette.customGray.main,
                            fontWeight: theme.typography.fontWeightLight,
                            textAlign: "right",
                            mr: theme.spacing(1),
                          }}
                        >
                          {content.dailyValue}%
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ borderBottom: "none" }} align="right">
                      <Box
                        sx={{
                          width: "18%",
                          textAlign: "right",
                          display: "flex",
                          justifyContent: "flex-end",
                          alignItems: "flex-end",
                        }}
                      >
                        <Typography
                          component="span"
                          variant="bodyLarge"
                          sx={{
                            color: theme.palette.customGray.main,
                            fontWeight: theme.typography.fontWeightLight,
                            mr: theme.spacing(1),
                          }}
                        >
                          {content.amount}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ borderBottom: "none", textAlign: "" }}>
                      <Box
                        sx={{
                          width: "21%",
                          textAlign: "right",
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                        }}
                      >
                        <Typography
                          variant="bodyLarge"
                          component="span"
                          sx={{
                            color: theme.palette.customGray.main,
                            fontWeight: theme.typography.fontWeightLight,
                            textAlign: "right",
                          }}
                        >
                          {`${Math.abs(content.rdi.value)}${content.rdi.weight}`}
                        </Typography>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
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
