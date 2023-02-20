import React, { useEffect, useState } from "react";
import {
  NutritionSummary,
  NutritionFilters,
  MeasurementFilter,
  DetailsNutritionTable,
} from "@forkfacts/components";
import { ageItem, NutritionDetailsTabProps, SearchNutritionFilterItem } from "@forkfacts/models";
import {
  Box,
  useTheme,
  FormControl,
  Select,
  SelectChangeEvent,
  MenuItem,
  TextField,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  input: {
    width: 90,
    height: 40,
  },
});

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
  const classes = useStyles();
  const [selectedAge, setSelectedAge] = useState<ageItem>({} as ageItem);
  const [selectedLifeStage, setLifeStage] = useState("");
  const [selectedNutritionFilterItems, setSelectedNutritionFilterItems] = useState<
    SearchNutritionFilterItem[]
  >([]);
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
          justifyContent: "space-between",
          alignItems: "center",
          mb: theme.spacing(7),
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            columnGap: theme.spacing(3),
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
            flexWrap: "wrap",
            columnGap: theme.spacing(3),
          }}
        >
          <Box>
            <TextField
              id="outlined-basic"
              variant="outlined"
              defaultValue={2}
              fullWidth
              InputProps={{
                className: classes.input,
              }}
            />
          </Box>
          <Box>
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={unit}
                onChange={handleChange}
                sx={{ height: theme.spacing(5) }}
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
          <MeasurementFilter
            measurementFilterItems={measurementFilterItems}
            onSelectMeasurementItem={onSelectMeasurementItem}
          />
        </Box>
      </Box>
      <Box>
        <NutritionSummary nutritionSummaryItems={nutritionSummaryItems} />
      </Box>
      <Box sx={{ mt: theme.spacing(12) }}>
        <DetailsNutritionTable nutritionTableItems={nutritionTableItems} />
      </Box>
    </Box>
  );
};

export default NutritionDetailsTab;
