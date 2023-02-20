import React, { useState } from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
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
    <Box>
      <Button
        color="primary"
        sx={{
          fontSize: theme.typography.caption.fontSize,
          fontWeight: theme.typography.fontWeightBold,
          lineHeight: theme.spacing(2),
          letterSpacing: theme.spacing(0.05),
          textTransform: "capitalize",
          whiteSpace: "nowrap",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        startIcon={<FilterListIcon />}
        onClick={() => setOpen(!open)}
      >
        All filters {filterStatus !== 0 ? filterStatus : null}
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
                mt: theme.spacing(3),
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: theme.palette.grey[600],
                  fontWeight: theme.typography.fontWeightMedium,
                  lineHeight: theme.spacing(2),
                  letterSpacing: theme.spacing(0.05),
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
