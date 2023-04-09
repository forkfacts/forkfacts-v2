import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { navigate } from "gatsby";
import { SearchNutritionFilter } from "@forkfacts/components";
import { SelectedNutrient } from "@forkfacts/models";

interface RdiViewNutrientsProps {
  age: string;
  nutritionFilterItems: Array<SelectedNutrient>;
  gender: string;
}

const RdiViewNutrients: React.FC<RdiViewNutrientsProps> = ({
  age,
  gender,
  nutritionFilterItems,
}) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  const onRoute = () => {
    navigate("/tools/recommended-daily-intake");
  };
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
            lactation{" "}
          </Typography>
          between{" "}
          <Typography component="span" color="primary">
            19-38 years{" "}
          </Typography>
          <Box
            sx={{
              height: theme.spacing(2.5),
              backgroundColor: theme.palette.customGray.dark,
              width: theme.spacing(0.2),
            }}
          />{" "}
          <Typography component="span" color="primary" sx={{ cursor: "pointer" }} onClick={onRoute}>
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
    </Box>
  );
};

export default RdiViewNutrients;
