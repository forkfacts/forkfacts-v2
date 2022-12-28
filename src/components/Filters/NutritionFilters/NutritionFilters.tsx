import React, { useEffect, useState } from "react";
import { Box, useTheme } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FilterButton } from "@forkfacts/components";
import { NutritionFiltersProps } from "@forkfacts/models";
import "./carousel.css";

const NutritionFilters: React.FC<NutritionFiltersProps> = ({
  filters,
  onSelectFilterItems,
  setOpenMobilePage,
}) => {
  const theme = useTheme();
  const [selectedItemArrays, setSelectedItemArray] = useState<string[]>([]);
  const responsive = {
    desktop: {
      breakpoint: { max: theme.breakpoints.values.md, min: theme.breakpoints.values.lg },
      items: 3,
    },
    tablet: {
      breakpoint: { max: theme.breakpoints.values.sm, min: theme.breakpoints.values.md },
      items: 3,
    },
    mobile: {
      breakpoint: { max: theme.breakpoints.values.sm, min: 0 },
      items: 3,
    },
  };

  const handleSelectItem = (name: string, index: number) => {
    if (selectedItemArrays.includes(name) || index === 0) {
      setSelectedItemArray(selectedItemArrays.filter((item) => item !== name));
      return;
    } else {
      setSelectedItemArray((prev) => [...prev, name]);
    }
  };

  useEffect(() => {
    onSelectFilterItems(selectedItemArrays.length ? selectedItemArrays : ["All filters"]);
  }, [selectedItemArrays]);

  return (
    <Box>
      <Carousel
        sliderClass="react-multi-carousel-track"
        responsive={responsive}
        partialVisible={true}
        arrows={false}
      >
        {filters.map((item, index) => {
          return (
            <FilterButton
              setOpenMobilePage={setOpenMobilePage}
              name={item.name}
              key={index}
              onSelectItem={handleSelectItem}
              index={index}
              selectedItemArrays={selectedItemArrays}
            />
          );
        })}
      </Carousel>
    </Box>
  );
};

export default NutritionFilters;
