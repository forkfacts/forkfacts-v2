import React, { useState } from "react";
import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { FilterAge, LifeStage, SearchNutritionFilter } from "@forkfacts/components";
import FilterListIcon from "@mui/icons-material/FilterList";

const AllFilters = ({
  selectedAge,
  selectedLifeStage,
  selectedNutritionFilterItems,
  ageItems,
  handleSelectedAge,
  lifeStageItems,
  handleLifeStage,
  nutritionFilterItems,
  handleSelectNutritionFilterItem,
}: any) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);
  let filterStatus = 0;
  if (
    Object.keys(selectedAge).length > 0 ||
    selectedLifeStage ||
    selectedNutritionFilterItems.length > 0
  ) {
    if (
      (Object.keys(selectedAge).length === 0 && !selectedLifeStage) ||
      (Object.keys(selectedAge).length === 0 && selectedNutritionFilterItems.length === 0) ||
      (!selectedLifeStage && selectedNutritionFilterItems.length === 0)
    ) {
      filterStatus = 1;
    } else if (
      Object.keys(selectedAge).length > 0 &&
      selectedLifeStage &&
      selectedNutritionFilterItems.length > 0
    ) {
      filterStatus = 3;
    } else {
      filterStatus = 2;
    }
  }

  return (
    <Box sx={{ display: mobile ? "none" : "block" }}>
      <Button
        color="primary"
        sx={{
          fontWeight: theme.typography.fontWeightRegular,
          textTransform: "capitalize",
          whiteSpace: "nowrap",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        startIcon={<FilterListIcon />}
        onClick={() => setOpen(!open)}
      >
        <Typography variant="labelLarge" sx={{ fontWeight: theme.typography.fontWeightRegular }}>
          All Filters {filterStatus !== 0 ? `(${filterStatus})` : null}
        </Typography>
      </Button>
      {open && (
        <Box
          sx={{
            position: "absolute",
            width: 320,
            mt: theme.spacing(1.1),
            py: theme.spacing(2),
            px: theme.spacing(1),
            zIndex: theme.zIndex.modal,
            backgroundColor: theme.palette.common.white,
            display: "flex",
            flexDirection: "column",
            height: "auto",
            borderRadius: theme.spacing(1),
          }}
          boxShadow={1}
        >
          <Box sx={{ display: "flex", flexDirection: "column", height: "auto" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
              }}
            >
              <Typography
                variant="labelLarge"
                sx={{
                  color: theme.palette.customGray.textDark,
                  fontWeight: theme.typography.fontWeightRegular,
                  textTransform: "uppercase",
                }}
              >
                ALL FILTERS
              </Typography>

              <CloseIcon
                sx={{ width: theme.spacing(2), height: theme.spacing(2), cursor: "pointer" }}
                onClick={() => setOpen(false)}
              />
            </Box>
            <Box>
              <LifeStage
                lifeStageItems={lifeStageItems}
                onSelectLifeStageItem={handleLifeStage}
                isDropdown={false}
              />
            </Box>
            <Box>
              <FilterAge
                ageItems={ageItems}
                onSelectAgeItem={handleSelectedAge}
                isDropdown={false}
              />
            </Box>
            <Box sx={{ mb: theme.spacing(3) }}>
              <SearchNutritionFilter
                onSelectNutritionFilterItem={handleSelectNutritionFilterItem}
                nutritionFilterItems={nutritionFilterItems}
                isDropdown={false}
              />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default AllFilters;
