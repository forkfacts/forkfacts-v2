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
  Button,
} from "@mui/material";
import { ForLoops } from "@forkfacts/helpers";
import { RdiDesktopTableProps, RdiNutritionTableRow, filterItem } from "@forkfacts/models";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import LaunchIcon from "@mui/icons-material/Launch";
import MagicSliderDots from "react-magic-slider-dots";
import "react-magic-slider-dots/dist/magic-dots.css";
import "./index.css";
import { MultipleSelects } from "@forkfacts/components";

interface RowsByNutrientGroup {
  nutrientGroup: string;
  rows: RdiNutritionTableRow[];
}

const RdiMobileTable: React.FC<RdiDesktopTableProps> = ({ rows }) => {
  const theme = useTheme();
  const [tableRows, setTableRows] = useState<RowsByNutrientGroup[]>([]);
  const [onSelectRows, setOnSelectedRows] = useState<filterItem[]>([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    adaptiveHeight: true,
    afterChange: () => {
      setOnSelectedRows([]);
    },
    beforeChange: () => {
      setOnSelectedRows([]);
    },
    appendDots: (dots: any) => {
      <FilterListOutlinedIcon
        color="primary"
        onClick={() => {
          setOnSelectedRows([]);
        }}
      />;
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

  return (
    <Box sx={{ mb: theme.spacing(15), background: " #FFFFFF" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          my: theme.spacing(1),
          pr: theme.spacing(1),
        }}
      >
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
            <Box sx={{ display: "flex", justifyContent: "space-between", position: "relative" }}>
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
              <Box sx={{ zIndex: theme.zIndex.modal, position: "relative" }}>
                <MultipleSelects
                  values={item.rows?.map((item) => {
                    return { name: item.nutrient };
                  })}
                  margin={theme.spacing(-30.5)}
                  multiselectTitle={item.nutrientGroup}
                  onSelectedValue={setOnSelectedRows}
                  getSelectedNutrients={onSelectRows}
                />
              </Box>
            </Box>
            {item.rows.length ? (
              <Box sx={{ mt: theme.spacing(1) }}>
                <TableContainer sx={{ maxWidth: "100%", overflow: "hidden" }}>
                  <Table aria-label="simple table">
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
                              overflow: "hidden",
                              whiteSpace: "break-spaces",
                            }}
                          >
                            Recommended
                          </Typography>
                        </TableCell>
                        <TableCell align="right">
                          <Typography
                            variant="labelSmall"
                            sx={{
                              color: theme.palette.customGray.dark,
                              fontWeight: theme.typography.fontWeightRegular,
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                            }}
                          >
                            Top sources
                          </Typography>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <ForLoops
                        each={
                          onSelectRows.length === 0
                            ? item.rows
                            : item.rows.filter((row) => {
                                return onSelectRows.some((filter) => filter.name === row.nutrient);
                              })
                        }
                      >
                        {(subItem, index2) => {
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
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
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
                                    color: theme.palette.customGray.main,
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    pr: theme.spacing(2),
                                  }}
                                >
                                  {subItem.recommendedAmount} {subItem.recommendedUnit}
                                </Typography>
                              </TableCell>
                              <TableCell align="right">
                                <Button
                                  startIcon={<LaunchIcon />}
                                  color="primary"
                                  variant="text"
                                  sx={{
                                    fontWeight: theme.typography.fontWeightRegular,
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    fontSize: theme.typography.labelMedium.fontSize,
                                  }}
                                >
                                  View
                                </Button>
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
