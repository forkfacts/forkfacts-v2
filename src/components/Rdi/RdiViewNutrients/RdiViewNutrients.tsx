import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import CodeIcon from "@mui/icons-material/Code";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import {
  RdiMobileTable,
  RdiDesktopTable,
  SearchNutritionFilter,
  SharedSocialMedia,
} from "@forkfacts/components";
import { RdiNutritionTableRow, SelectedNutrient } from "@forkfacts/models";
import { customTheme } from "../../../themes/theme";
import { useStore } from "../../../store/store";

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
  const [isSharedMediaOpen, setIsSharedMediaOpen] = useState(false);
  const { selectedNutrients } = useStore((state) => state);
  let fullUrl = "";

  if (typeof window !== "undefined") {
    fullUrl = window.location.href;
  }
  return (
    <Box>
      <Box>
        {" "}
        <Typography
          variant={mobile ? "headline6" : "headline4"}
          sx={{
            fontWeight: customTheme.typography.fontWeightLight,
            color: customTheme.palette.customGray.main,
            mb: theme.spacing(4),
          }}
        >
          Recommended Daily Intake
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: theme.spacing(3),
        }}
      >
        <Typography
          variant={mobile ? "labelLarge" : "titleMedium"}
          sx={{
            color: theme.palette.customGray.dark,
            display: "flex",
            alignItems: "center",
            columnGap: theme.spacing(0.3),
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
            display: mobile ? "none" : "flex",
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
              {`${selectedNutrients.length} of out ${rows.length}`}
            </Typography>{" "}
            nutrients
          </Typography>
        </Box>
      </Box>
      <Box sx={{ mt: theme.spacing(5) }}>
        {!mobile ? <RdiDesktopTable rows={rows} /> : <RdiMobileTable rows={rows} />}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: theme.spacing(10) }}>
        <Button
          startIcon={<CodeIcon />}
          variant="outlined"
          sx={{
            pr: theme.spacing(3),
            pl: theme.spacing(2),
            py: theme.spacing(1.25),
            mr: theme.spacing(2),
            borderRadius: theme.spacing(1),
          }}
        >
          Embed
        </Button>
        <Button
          startIcon={<ShareOutlinedIcon />}
          color="primary"
          variant="contained"
          onClick={() => setIsSharedMediaOpen(true)}
          sx={{
            pr: theme.spacing(3),
            pl: theme.spacing(2),
            py: theme.spacing(1.25),
            borderRadius: theme.spacing(1),
          }}
        >
          Share
        </Button>
      </Box>
      <SharedSocialMedia
        isSharedMediaOpen={isSharedMediaOpen}
        setIsSharedMediaOpen={setIsSharedMediaOpen}
        link={fullUrl}
        shareName={" Recommended Daily Intake"}
      />
    </Box>
  );
};

export default RdiViewNutrients;
