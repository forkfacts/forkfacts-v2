import React, { useEffect, useState } from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  LifeStage,
  FilterAge,
  SearchNutritionFilter,
  MeasurementFilter,
} from "@forkfacts/components";
import { FilterPageProps, ageItem, SearchNutritionFilterItem } from "@forkfacts/models";
import { useStyles } from "./filterPageStyles";

const FilterPage: React.FC<FilterPageProps> = ({
  selectedFilters,
  lifeStageItems,
  ageItems,
  nutritionFilterItems,
  measurementFilterItems,
  openMobilePage,
  setOpenMobilePage,
  onSelectFilterPageData,
}) => {
  const theme = useTheme();
  const classes = useStyles({ openMobilePage });
  const [selectedAge, setSelectedAge] = useState<ageItem>({} as ageItem);
  const [selectedLifeStage, setSelectedLifeStage] = useState("");
  const [selectedMeasurementItem, setSelectedMeasurement] = useState("");
  const [selectedNutritionFilterItems, setSelectedNutritionFilterItems] = useState<
    SearchNutritionFilterItem[]
  >([]);

  const onSelectAgeItem = (item: ageItem) => {
    setSelectedAge(item);
  };
  const onSelectLifeStageItem = (item: string) => {
    setSelectedLifeStage(item);
  };
  const onSelectMeasurementItem = (item: string) => {
    setSelectedMeasurement(item);
  };

  const onSelectNutritionFilterItem = (items: SearchNutritionFilterItem[]) => {
    setSelectedNutritionFilterItems(items);
  };

  const getAllFilterPageData = () => {
    const item = {
      selectedAge: selectedAge,
      selectedLifeStage: selectedLifeStage,
      selectedMeasurementItem: selectedMeasurementItem,
      selectedNutritionFilterItems: selectedNutritionFilterItems,
    };
    onSelectFilterPageData(item);
  };

  return (
    <Box className={classes.root}>
      <Box sx={{ display: "flex", flexDirection: "column", position: "relative" }}>
        <Box className={classes.headerStyles}>
          <ArrowBackIcon sx={{ cursor: "pointer" }} onClick={() => setOpenMobilePage(false)} />
          <Typography sx={{ color: theme.palette.common.black }} variant="h5">
            Filter
          </Typography>
          <Box />
        </Box>
        {selectedFilters.includes("Life stage") || selectedFilters[0] === "All filters" ? (
          <Box className={classes.boxWrapper}>
            <LifeStage
              lifeStageItems={lifeStageItems}
              onSelectLifeStageItem={onSelectLifeStageItem}
            />
          </Box>
        ) : null}
        {selectedFilters.includes("Age") || selectedFilters[0] === "All filters" ? (
          <Box className={classes.boxWrapper}>
            <FilterAge ageItems={ageItems} onSelectAgeItem={onSelectAgeItem} />
          </Box>
        ) : null}
        {selectedFilters.includes("Measure Units") || selectedFilters[0] === "All filters" ? (
          <Box className={classes.boxWrapper}>
            <MeasurementFilter
              measurementFilterItems={measurementFilterItems}
              onSelectMeasurementItem={onSelectMeasurementItem}
            />
          </Box>
        ) : null}
        {selectedFilters.includes("Nutrients") || selectedFilters[0] === "All filters" ? (
          <Box className={classes.boxWrapper}>
            <SearchNutritionFilter
              onSelectNutritionFilterItem={onSelectNutritionFilterItem}
              nutritionFilterItems={nutritionFilterItems}
            />
          </Box>
        ) : null}
        <Box boxShadow={1} className={classes.footerStyles}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              padding: theme.spacing(2.5),
            }}
          >
            <Typography>{selectedFilters.length} results</Typography>
            <Box>
              <Button variant="text">Clear all</Button>
              <Button variant="contained" onClick={() => getAllFilterPageData()}>
                Done
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FilterPage;
