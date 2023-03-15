import React, { useEffect, useRef, useState } from "react";
import {
  NutritionSummary,
  NutritionFilters,
  MeasurementFilter,
  NutritionDesktopTable,
  NutritionMobileTable,
} from "@forkfacts/components";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { NutritionDetailsTabProps } from "@forkfacts/models";
import { Box, useTheme, TextField, useMediaQuery, Button, Typography } from "@mui/material";

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
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const tablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Box sx={{ overflowX: "hidden" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: mobile || tablet ? "column-reverse" : "column",
          rowGap: mobile ? theme.spacing(3) : theme.spacing(6),
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: mobile || tablet ? "column" : "row",
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ width: mobile || tablet ? "100%" : "50%" }}>
            <NutritionFilters
              lifeStageItems={lifeStageItems}
              onSelectAgeItem={onSelectAgeItem}
              ageItems={ageItems}
              onSelectLifeStageItem={onSelectLifeStageItem}
              nutritionFilterItems={nutritionFilterItems}
              onSelectNutritionFilterItem={onSelectNutritionFilterItem}
            />
          </Box>
          <Box sx={{ width: mobile || tablet ? "100%" : "50%" }}>
            <NutritionDetailsRightComp
              units={units}
              onSelectMeasurementItem={onSelectMeasurementItem}
              measurementFilterItems={measurementFilterItems}
              onSelectUnit={onSelectUnit}
            />
          </Box>
        </Box>
        <Box sx={{ pr: theme.spacing(1.5) }}>
          <NutritionSummary nutritionSummaryItems={nutritionSummaryItems} />
        </Box>
      </Box>
      <Box sx={{ mt: mobile ? theme.spacing(3) : theme.spacing(8) }}>
        {mobile || tablet ? (
          <NutritionMobileTable nutritionTableItems={nutritionTableItems} />
        ) : (
          <Box sx={{ overflowX: "hidden" }}>
            <NutritionDesktopTable nutritionTableItems={nutritionTableItems} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default NutritionDetailsTab;

interface NutritionDetailsRightCompProps {
  onSelectUnit: any;
  onSelectMeasurementItem: any;
  measurementFilterItems: any;
  units: any;
}

export const NutritionDetailsRightComp: React.FC<NutritionDetailsRightCompProps> = ({
  onSelectUnit,
  onSelectMeasurementItem,
  measurementFilterItems,
  units,
}) => {
  const theme = useTheme();
  const ref = useRef<HTMLDivElement>(null);
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const tablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const [unit, setUnit] = React.useState("Cups");
  const [open, setOpen] = useState(false);

  const handleChange = (name: string) => {
    setUnit(name);
    setOpen(false);
  };

  useEffect(() => {
    onSelectUnit(unit);
  }, [unit]);

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
    <Box
      ref={ref}
      sx={{
        display: "flex",
        alignItems: "center",
        flexWrap: mobile ? "nowrap" : "wrap",
        columnGap: mobile || tablet ? theme.spacing(1) : theme.spacing(2),
        width: "100%",
        justifyContent: mobile ? "space-between" : tablet ? "flex-start" : "flex-end",
        mt: mobile || tablet ? theme.spacing(3) : 0,
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
              height: mobile ? theme.spacing(4) : theme.spacing(5),
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
        <Box>
          <Button
            variant="text"
            onClick={() => setOpen(!open)}
            sx={{
              textTransform: "capitalize",
              whiteSpace: "nowrap",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: theme.spacing(1),
              borderRadius: theme.spacing(0.5),
              height: mobile ? theme.spacing(4) : theme.spacing(5),
              width: mobile ? theme.spacing(12.5) : theme.spacing(16.375),
              cursor: "pointer",
              border: "1px solid #787680",
              zIndex: theme.zIndex.appBar,
              pr: theme.spacing(1),
            }}
          >
            <Typography
              variant="labelLarge"
              sx={{
                color: theme.palette.customGray.textDark,
                fontWeight: theme.typography.fontWeightRegular,
              }}
            >
              {unit}
            </Typography>
            {open ? (
              <ArrowDropUpIcon sx={{ color: theme.palette.customGray.textBlack }} />
            ) : (
              <ArrowDropDownIcon sx={{ color: theme.palette.customGray.textBlack }} />
            )}
          </Button>
          {open && (
            <Box
              component="div"
              sx={{
                position: "absolute",
                display: "block",
                width: mobile ? theme.spacing(12.5) : theme.spacing(16.375),
                zIndex: theme.zIndex.appBar,
                background: " #FFFBFF",
                borderRadius: theme.spacing(0.5),
                mt: theme.spacing(1),
                boxShadow: " 0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                {units.map((item: any, index: number) => (
                  <Typography
                    key={index}
                    onClick={() => handleChange(item)}
                    variant={mobile ? "bodySmall" : "bodyLarge"}
                    sx={{
                      fontWeight: theme.typography.fontWeightLight,
                      cursor: "pointer",
                      height: theme.spacing(6),
                      width: "100%",
                      background: unit === item ? "rgba(103, 80, 164, 0.12)" : "#fff",
                      pt: theme.spacing(3),
                      pb: theme.spacing(4),
                      pl: theme.spacing(2.75),
                      pr: theme.spacing(1.5),
                      boxSizing: "border-box",
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
            </Box>
          )}
        </Box>
      </Box>
      <Box sx={{ pr: mobile ? 0 : theme.spacing(1) }}>
        <MeasurementFilter
          measurementFilterItems={measurementFilterItems}
          onSelectMeasurementItem={onSelectMeasurementItem}
        />
      </Box>
    </Box>
  );
};
