import React, { useEffect } from "react";
import {
  NutritionSummary,
  NutritionFilters,
  MeasurementFilter,
  NutritionDesktopTable,
  NutritionMobileTable,
} from "@forkfacts/components";
import { NutritionDetailsTabProps } from "@forkfacts/models";
import {
  Box,
  useTheme,
  FormControl,
  Select,
  SelectChangeEvent,
  MenuItem,
  TextField,
  useMediaQuery,
} from "@mui/material";

const NutritionDetailsTab: React.FC<NutritionDetailsTabProps> = ({
  nutritionSummaryItems,
  lifeStageItems,
  onSelectLifeStageItem,
  onSelectAgeItem,
  ageItems,
  nutritionFilterItems,
  onSelectNutritionFilterItem,
  measurementFilterItems,
  onSelectMeasurementItem,
  onSelectUnit,
  nutritionTableItems,
  units,
}) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const [unit, setUnit] = React.useState("Cups");

  const handleChange = (event: SelectChangeEvent) => {
    setUnit(event.target.value as string);
  };

  useEffect(() => {
    onSelectUnit(unit);
  }, [unit]);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: mobile ? "column-reverse" : "column",
          rowGap: mobile ? theme.spacing(6) : theme.spacing(6),
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              columnGap: mobile ? 0 : theme.spacing(3),
              width: mobile ? "100%" : "50%",
            }}
          >
            <NutritionFilters
              lifeStageItems={lifeStageItems}
              onSelectAgeItem={onSelectAgeItem}
              ageItems={ageItems}
              onSelectLifeStageItem={onSelectLifeStageItem}
              nutritionFilterItems={nutritionFilterItems}
              onSelectNutritionFilterItem={onSelectNutritionFilterItem}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: mobile ? "nowrap" : "wrap",
              columnGap: mobile ? theme.spacing(1) : theme.spacing(2),
              width: mobile ? "100%" : "50%",
              justifyContent: mobile ? "space-between" : "flex-end",
              mt: mobile ? theme.spacing(3) : 0,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "auto",
                columnGap: theme.spacing(1),
              }}
            >
              <TextField
                id="outlined-basic"
                variant="outlined"
                defaultValue={2}
                sx={{
                  "& .MuiInputBase-root": {
                    height: 40,
                    color: theme.palette.customGray.textDark,
                    fontWeight: theme.typography.fontWeightLight,
                    lineHeight: "16px",
                    letterSpacing: "0.4px",
                  },
                  "& .MuiInputBase-input": {
                    textAlign: "center",
                    width: mobile ? "50px" : "78px",
                  },
                }}
              />
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={unit}
                  onChange={handleChange}
                  sx={{
                    height: theme.spacing(5),
                    color: theme.palette.customGray.textDark,
                    fontWeight: theme.typography.fontWeightLight,
                  }}
                >
                  {units.map((item, index) => {
                    return (
                      <MenuItem value={item} key={index}>
                        {item}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ pr: mobile ? 0 : theme.spacing(1) }}>
              <MeasurementFilter
                measurementFilterItems={measurementFilterItems}
                onSelectMeasurementItem={onSelectMeasurementItem}
              />
            </Box>
          </Box>
        </Box>
        <Box sx={{ pr: theme.spacing(1.5) }}>
          <NutritionSummary nutritionSummaryItems={nutritionSummaryItems} />
        </Box>
      </Box>
      <Box sx={{ mt: mobile ? theme.spacing(3) : theme.spacing(8) }}>
        {!mobile ? (
          <NutritionDesktopTable nutritionTableItems={nutritionTableItems} />
        ) : (
          <NutritionMobileTable nutritionTableItems={nutritionTableItems} />
        )}
      </Box>
    </Box>
  );
};

export default NutritionDetailsTab;
