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
                  %Daily Value
                  <CompareSorting
                    width={theme.spacing(2.3)}
                    height={theme.spacing(2.3)}
                    style={{
                      marginLeft: theme.spacing(1),
                      display: "inline",
                      paddingTop: theme.spacing(0.1),
                    }}
                  />
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
                  <CompareSorting
                    width={theme.spacing(2.3)}
                    height={theme.spacing(2.3)}
                    style={{
                      marginLeft: theme.spacing(1),
                      display: "inline",
                      paddingTop: theme.spacing(0.1),
                    }}
                  />
                </Typography>
              </TableCell>
              <TableCell align="right" sx={{ borderBottom: "none" }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <>
              {nutritionTableItems.map((item, index) => (
                <React.Fragment key={index}>
                  <TableRow sx={{ "&:last-of-type td, &:last-of-type th": { border: 0 } }}>
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ borderBottom: "1px solid #F3EFF4" }}
                    >
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
                            pr: "20px",
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
                            pr: "20px",
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
                            pr: "20px",
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
                            {content.nutrient}
                          </Typography>
                        </TableCell>
                        <TableCell align="right" sx={{ borderBottom: "none" }}>
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
                        </TableCell>
                        <TableCell align="right" sx={{ borderBottom: "none" }}>
                          <Typography
                            component="span"
                            variant="bodyLarge"
                            sx={{
                              color: theme.palette.customGray.main,
                              fontWeight: theme.typography.fontWeightLight,
                            }}
                          >
                            {content.amount}
                          </Typography>
                        </TableCell>
                        <TableCell align="right" sx={{ borderBottom: "none" }}>
                          <Typography
                            variant="bodyLarge"
                            component="span"
                            sx={{
                              color: theme.palette.customGray.main,
                              fontWeight: theme.typography.fontWeightLight,
                            }}
                          >
                            {`${Math.abs(content.rdi.value)}${content.rdi.weight}`}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                </React.Fragment>
              ))}
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
