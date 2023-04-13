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
import { AddBoxTwoTone } from "@mui/icons-material";

interface RdiViewNutrientsProps {
  age: string;
  nutritionFilterItems: Array<SelectedNutrient>;
  gender: string;
  onCloseRdiTable: () => void;
  rows: RdiNutritionTableRow[];
  totalRdiNutrients: number;
}

const RdiViewNutrients: React.FC<RdiViewNutrientsProps> = ({
  age,
  gender,
  nutritionFilterItems,
  onCloseRdiTable,
  rows,
  totalRdiNutrients,
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
    <Box sx={{ height: "100%", overflow: "visible" }}>
      <Box>
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
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant={mobile ? "labelLarge" : "titleMedium"}
            sx={{
              color: theme.palette.customGray.dark,
              fontWeight: theme.typography.fontWeightRegular,
              display: "flex",
            }}
          >
            Showing for&nbsp;<span style={{ color: theme.palette.primary.main }}>{gender}</span>
            &nbsp;between&nbsp;
            <span style={{ color: theme.palette.primary.main }}>{age}</span>
          </Typography>
          <Box>
            <Typography
              variant={mobile ? "labelLarge" : "titleMedium"}
              component="span"
              color="primary"
              sx={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                fontWeight: theme.typography.fontWeightRegular,
              }}
              onClick={onCloseRdiTable}
            >
              <Box
                sx={{
                  height: theme.spacing(3.5),
                  backgroundColor: theme.palette.customGray.dark,
                  width: theme.spacing(0.12),
                  mx: theme.spacing(1),
                }}
              />{" "}
              <span>Change</span>
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: mobile ? "none" : "flex",
            alignItems: "flex-end",
            flexDirection: "column",
            justifyContent: "flex-end",
            rowGap: theme.spacing(2),
            position: "relative",
          }}
        >
          <SearchNutritionFilter
            nutritionFilterItems={nutritionFilterItems}
            isDropdown={true}
            margin={theme.spacing(-35)}
            displayListIcon={true}
          />
          {selectedNutrients.length ? (
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
                {`${rows.length} of out ${totalRdiNutrients}`}
              </Typography>{" "}
              nutrients
            </Typography>
          ) : null}
        </Box>
      </Box>
      <Box sx={{ mt: theme.spacing(4) }}>
        {!mobile ? (
          <RdiDesktopTable rows={rows} />
        ) : (
          <RdiMobileTable
            rows={rows}
            nutritionFilterItems={nutritionFilterItems}
            totalRdiNutrients={totalRdiNutrients}
          />
        )}
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
            visibility: "hidden",
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
