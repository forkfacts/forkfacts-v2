import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { FilterAge, LifeStage, SearchNutritionFilter } from "@forkfacts/components";
import { RdiAge, NutritionFilterProps, SelectedNutrient } from "@forkfacts/models";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useStore } from "../../../store/store";

const AllFilters = ({ ageItems, lifeStageItems, nutritionFilterItems }: any) => {
  const { selectedAge, selectedLifeStage, selectedNutrients } = useStore((state) => state);
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  let filterStatus = 0;

  if (Object.keys(selectedAge).length > 0 || selectedLifeStage || selectedNutrients.length > 0) {
    if (
      (Object.keys(selectedAge).length === 0 && !selectedLifeStage) ||
      (Object.keys(selectedAge).length === 0 && selectedNutrients.length === 0) ||
      (!selectedLifeStage && selectedNutrients.length === 0)
    ) {
      filterStatus = 1;
    } else if (
      Object.keys(selectedAge).length > 0 &&
      selectedLifeStage &&
      selectedNutrients.length > 0
    ) {
      filterStatus = 3;
    } else {
      filterStatus = 2;
    }
  }
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <Box sx={{ display: mobile ? "none" : "block" }} ref={ref}>
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              maxHeight: "500px",
              overflowY: "auto",
              "&::-webkit-scrollbar": {
                width: "8px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: theme.palette.customGray.textLight,
                border: theme.spacing(0.5),
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
                mb: theme.spacing(3),
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
              <LifeStage lifeStageItems={lifeStageItems} isDropdown={false} />
            </Box>
            <Box sx={{ my: theme.spacing(3) }}>
              <FilterAge ageItems={ageItems} isDropdown={false} />
            </Box>
            <Box sx={{ mb: theme.spacing(3) }}>
              <SearchNutritionFilter
                nutritionFilterItems={nutritionFilterItems}
                isDropdown={false}
              />
            </Box>
            <Box sx={{ height: "10vh", width: "100%" }} />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default AllFilters;
