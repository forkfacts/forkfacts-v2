import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import CodeIcon from "@mui/icons-material/Code";
import { RdiDesktopTable, SearchNutritionFilter } from "@forkfacts/components";
import { RdiNutritionTableRow, SelectedNutrient } from "@forkfacts/models";

interface RdiViewNutrientsProps {
  age: string;
  nutritionFilterItems: Array<SelectedNutrient>;
  gender: string;
  onCloseRdiTable: () => void;
  rows: RdiNutritionTableRow[];
}

const RdiViewNutrients: React.FC<RdiViewNutrientsProps> = ({
  age,
  gender,
  nutritionFilterItems,
  onCloseRdiTable,
  rows,
}) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography
          variant="titleMedium"
          sx={{
            color: theme.palette.customGray.dark,
            display: "flex",
            alignItems: "center",
            columnGap: theme.spacing(0.5),
          }}
        >
          Showing for
          <Typography component="span" color="primary">
            {gender}{" "}
          </Typography>
          between{" "}
          <Typography component="span" color="primary">
            {age}{" "}
          </Typography>
          <Box
            sx={{
              height: theme.spacing(2.5),
              backgroundColor: theme.palette.customGray.dark,
              width: theme.spacing(0.2),
            }}
          />{" "}
          <Typography
            component="span"
            color="primary"
            sx={{ cursor: "pointer" }}
            onClick={onCloseRdiTable}
          >
            change
          </Typography>
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            flexDirection: "column",
            justifyContent: "flex-end",
            rowGap: theme.spacing(1),
          }}
        >
          <SearchNutritionFilter
            nutritionFilterItems={nutritionFilterItems}
            isDropdown={true}
            margin={theme.spacing(-35)}
            displayListIcon={true}
          />
          <Typography
            variant="titleMedium"
            sx={{
              color: theme.palette.customGray.dark,
            }}
          >
            Showing{" "}
            <Typography
              component="span"
              sx={{
                color: theme.palette.customGray.main,
              }}
            >
              "3 of out 50"
            </Typography>{" "}
            nutrients
          </Typography>
        </Box>
      </Box>
      <Box sx={{ mt: theme.spacing(5) }}>
        <RdiDesktopTable rows={rows} />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
        <Button startIcon={<CodeIcon />}>Embed</Button>
        <Button startIcon={<CodeIcon />}>Embed</Button>
      </Box>
      <Box sx={{ mb: theme.spacing(100) }} />
    </Box>
  );
};

export default RdiViewNutrients;
