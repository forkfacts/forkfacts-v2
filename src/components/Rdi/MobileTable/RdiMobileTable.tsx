import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Typography,
  useTheme,
  TableRow,
} from "@mui/material";
import { ForLoops } from "@forkfacts/helpers";
import { RdiDesktopTableProps, RdiNutritionTableRow } from "@forkfacts/models";
import LaunchIcon from "@mui/icons-material/Launch";
import MagicSliderDots from "react-magic-slider-dots";
import "react-magic-slider-dots/dist/magic-dots.css";
import "./index.css";

interface RowsByNutrientGroup {
  nutrientGroup: string;
  rows: RdiNutritionTableRow[];
}

const RdiMobileTable: React.FC<RdiDesktopTableProps> = ({ rows }) => {
  const theme = useTheme();
  const [tableRows, setTableRows] = useState<RowsByNutrientGroup[]>([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    adaptiveHeight: true,
    appendDots: (dots: any) => {
      return <MagicSliderDots dots={dots} numDotsToShow={15} dotWidth={20} />;
    },
  };
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

  console.log(tableRows);

  return (
    <Box sx={{ mb: theme.spacing(15), background: " #FFFFFF" }}>
      <Slider {...settings}>
        {tableRows.map((item, index: any) => (
          <Box
            key={index}
            sx={{
              border: `1px solid #F3EFF4`,
              p: theme.spacing(2),
              borderRadius: theme.spacing(1),
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1) !important",
              my: theme.spacing(1),
              backgroundColor: theme.palette.common.white,
            }}
          >
            <Box>
              <Typography
                variant="titleMedium"
                sx={{
                  fontWeight: theme.typography.fontWeightRegular,
                  color: theme.palette.customGray.main,
                  textTransform: "uppercase",
                }}
              >
                {item.nutrientGroup}
              </Typography>
            </Box>
            {item.rows.length ? (
              <Box>
                <Box>
                  <Box
                    sx={{
                      display: item.rows.length ? "flex" : "none",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: theme.spacing(1),
                    }}
                  >
                    <Typography
                      variant="labelSmall"
                      sx={{
                        color: theme.palette.customGray.dark,
                        fontWeight: theme.typography.fontWeightRegular,
                      }}
                    >
                      Nutrients
                    </Typography>
                    <Typography
                      variant="labelSmall"
                      sx={{
                        color: theme.palette.customGray.dark,
                        fontWeight: theme.typography.fontWeightRegular,
                      }}
                    >
                      Recommended amount
                    </Typography>
                    <Typography
                      variant="labelSmall"
                      sx={{
                        color: theme.palette.customGray.dark,
                        fontWeight: theme.typography.fontWeightRegular,
                      }}
                    >
                      Top sources
                    </Typography>
                  </Box>
                </Box>
                <TableContainer>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          {" "}
                          <Typography
                            variant="labelSmall"
                            sx={{
                              color: theme.palette.customGray.dark,
                              fontWeight: theme.typography.fontWeightRegular,
                            }}
                          >
                            Nutrients
                          </Typography>
                        </TableCell>
                        <TableCell align="right">
                          <Typography
                            variant="labelSmall"
                            sx={{
                              color: theme.palette.customGray.dark,
                              fontWeight: theme.typography.fontWeightRegular,
                            }}
                          >
                            Recommended amount
                          </Typography>
                        </TableCell>
                        <TableCell align="right">
                          <Typography
                            variant="labelSmall"
                            sx={{
                              color: theme.palette.customGray.dark,
                              fontWeight: theme.typography.fontWeightRegular,
                            }}
                          >
                            Top sources
                          </Typography>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <ForLoops each={item.rows}>
                        {(subItem, index2) => {
                          console.log(subItem);
                          return (
                            <TableRow
                              key={index2}
                              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                              <TableCell component="th" scope="row">
                                <Typography
                                  variant="labelMedium"
                                  sx={{
                                    color: theme.palette.customGray.main,
                                    fontWeight: theme.typography.fontWeightRegular,
                                  }}
                                >
                                  {subItem.nutrient}
                                </Typography>
                              </TableCell>
                              <TableCell align="right">
                                <Typography
                                  variant="labelMedium"
                                  sx={{
                                    fontWeight: theme.typography.fontWeightRegular,
                                    color: theme.palette.customGray.dark,
                                  }}
                                >
                                  {subItem.recommendedAmount} {subItem.recommendedUnit}
                                </Typography>
                              </TableCell>
                              <TableCell align="right">
                                {" "}
                                <Typography
                                  color="primary"
                                  variant="labelMedium"
                                  sx={{
                                    fontWeight: theme.typography.fontWeightRegular,
                                  }}
                                >
                                  <LaunchIcon sx={{ mr: theme.spacing(2) }} />
                                  View
                                </Typography>
                              </TableCell>
                            </TableRow>
                          );
                        }}
                      </ForLoops>
                    </TableBody>
                  </Table>
                </TableContainer>
                <Box sx={{ height: theme.spacing(0.2), backgroundColor: "#F3EFF4" }} />
              </Box>
            ) : null}
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default RdiMobileTable;
