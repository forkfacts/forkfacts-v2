import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box, Typography, useTheme } from "@mui/material";
import { ForLoops } from "@forkfacts/helpers";
import { NutritionMobileTableProps, NutritionTableRow } from "@forkfacts/models";
import MagicSliderDots from "react-magic-slider-dots";
import "react-magic-slider-dots/dist/magic-dots.css";
import "./index.css";

const NutritionMobileTable: React.FC<NutritionMobileTableProps> = ({ rows }) => {
  const theme = useTheme();
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    adaptiveHeight: false,
    appendDots: (dots: any) => {
      return <MagicSliderDots dots={dots} numDotsToShow={10} dotWidth={30} />;
    },
  };

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
  const filteredNutritionFilterItems: any = rowsByNutrientGroupArray.filter(
    (item: any) => item.nutrientGroup !== ""
  );

  // const emptyNutrientGroupItems: any = rowsByNutrientGroupArray?.filter(
  //   (item: any) => item.nutrientGroup === ""
  // )[0];

  console.log(filteredNutritionFilterItems);

  return (
    <Box sx={{ mb: theme.spacing(15), background: " #FFFFFF" }}>
      <h1>dddd</h1>
    </Box>
  );
};

export default NutritionMobileTable;
