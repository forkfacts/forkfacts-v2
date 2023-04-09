import { Layout, RdiViewNutrients } from "@forkfacts/components";
import { Box, Grid, Typography, useTheme, useMediaQuery, Button } from "@mui/material";
import {
  MenuItem,
  RdiAge,
  RdiNutritionTableRow,
  SelectedNutrient,
  lifeStageItem,
} from "@forkfacts/models";
import React, { useState } from "react";
import { useStyles } from "../toolsScrenStyles";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import { customTheme } from "../../../themes/theme";
import { ForLoops } from "@forkfacts/helpers";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import Checkbox from "@mui/material/Checkbox";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const nutritionFilterItems: SelectedNutrient[] = [
  {
    name: "Vitamins",
    nutrientGroup: "Vitamins",
    rows: [
      { name: "Vitamin B1", checked: false, nutrientGroup: "Vitamins" },
      { name: "Vitamin B2", checked: false, nutrientGroup: "Vitamins" },
      { name: "Vitamin B3", checked: false, nutrientGroup: "Vitamins" },
      { name: "Vitamin B4", checked: false, nutrientGroup: "Vitamins" },
    ],
    checked: false,
  },
  {
    name: "Proteins",
    nutrientGroup: "Proteins",
    rows: [
      { name: "Protein B1", checked: false, nutrientGroup: "Proteins" },
      { name: "Protein B2", checked: false, nutrientGroup: "Proteins" },
    ],
    checked: false,
  },
  { name: "Carbohydrate", rows: [], checked: false, nutrientGroup: "" },
  { name: "Water", rows: [], checked: false, nutrientGroup: "" },
  { name: "Fats", rows: [], checked: false, nutrientGroup: "" },
  { name: "Fiber", rows: [], checked: false, nutrientGroup: "" },
  { name: "Minerals", rows: [], checked: false, nutrientGroup: "" },
];

interface RecommendedDailyIntakeProps {
  menuItems: MenuItem[];
  genders: lifeStageItem[];
  ages: RdiAge[];
  selectedAge: RdiAge;
  setSelectedAge: (age: RdiAge) => void;
  selectedGender: string;
  setSelectedGender: (gender: string) => void;
  rows: RdiNutritionTableRow[];
}

function AgeColumn({
  ages,
  handleSelectAge,
  selectedAge,
}: {
  ages: RdiAge[];
  selectedAge: RdiAge;
  handleSelectAge: (age: RdiAge) => void;
}) {
  const theme = useTheme();
  return (
    <div style={{ display: "inline-block", margin: "10px" }}>
      {ages.map((item: any, index: number) => (
        <Box
          key={index}
          sx={{
            width: "auto",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            mb: theme.spacing(2),
          }}
          onClick={() => handleSelectAge(item)}
        >
          <Checkbox
            icon={<RadioButtonUncheckedIcon />}
            checkedIcon={<RadioButtonCheckedIcon />}
            checked={
              (selectedAge.start === item.start && selectedAge.end == item.end) ||
              selectedAge.start > 70
                ? true
                : false
            }
          />
          {item.end || item.end === 0 ? (
            <Typography
              variant="bodyMedium"
              sx={{
                fontWeight: customTheme.typography.fontWeightLight,
                color: customTheme.palette.customGray.main,
                cursor: "pointer",
              }}
            >
              {item.end === undefined ? 0 : item.start + "-" + item.end} {item.ageUnit}
            </Typography>
          ) : (
            <Typography
              variant="bodyMedium"
              sx={{
                fontWeight: customTheme.typography.fontWeightLight,
                color: customTheme.palette.customGray.main,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                ml: theme.spacing(-2.5),
              }}
            >
              <ChevronRightIcon
                sx={{
                  width: theme.spacing(2),
                  height: theme.spacing(2),
                  ml: theme.spacing(2),
                }}
              />
              <Typography
                variant="bodyMedium"
                sx={{
                  fontWeight: customTheme.typography.fontWeightLight,
                  color: customTheme.palette.customGray.main,
                }}
              >
                {item.start} {item.ageUnit}
              </Typography>
            </Typography>
          )}
        </Box>
      ))}
    </div>
  );
}
const RecommendedDailyIntake: React.FC<RecommendedDailyIntakeProps> = ({
  menuItems,
  genders,
  ages,
  setSelectedAge,
  selectedAge,
  setSelectedGender,
  selectedGender,
  rows,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const [isOpenRdiTable, setIsOpenRdiTable] = useState(false);
  const onSelectGender = (gender: string): void => {
    setSelectedGender(gender);
  };

  const handleSelectAge = (item: RdiAge): void => {
    let ageString = "";
    if (!item.end) {
      ageString = `>70 years`;
    } else {
      ageString = `${item.start}-${item.end} ${item.ageUnit}`;
    }
    const newAge = {
      start: item.start,
      end: item.end,
      ageUnit: item.ageUnit,
    };
    setSelectedAge(newAge);
  };

  const columns = Math.ceil(ages.length / 4);
  const ageChunks = Array(columns)
    .fill(null)
    .map((_, i) => ages.slice(i * 4, i * 4 + 4));

  const onOpenRdiTable = (): void => {
    setIsOpenRdiTable(true);
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  };

  const onCloseRdiTable = (): void => setIsOpenRdiTable(false);

  return (
    <Layout menuItems={menuItems}>
      <Box className={classes.desktopScreenWrapper}>
        <Box sx={{ px: mobile ? theme.spacing(2) : 0, pt: theme.spacing(5) }}>
          <Typography
            variant={mobile ? "headline6" : "headline4"}
            sx={{
              fontWeight: customTheme.typography.fontWeightLight,
              color: customTheme.palette.customGray.main,
            }}
          >
            Recommended Daily Intake
          </Typography>
          <Box sx={{ position: "relative", height: "100vh" }}>
            <Box sx={{ mt: mobile ? theme.spacing(3) : theme.spacing(4.5) }}>
              <Typography
                variant="titleMedium"
                sx={{
                  fontWeight: customTheme.typography.fontWeightLight,
                  color: customTheme.palette.customGray.textDark,
                }}
              >
                Choose a life stage
              </Typography>
              <Grid
                container
                md={7}
                columns={{ xs: 12, sm: 12, md: 12 }}
                spacing={2}
                sx={{ mt: theme.spacing(1.5) }}
              >
                <ForLoops each={genders}>
                  {(item, index) => (
                    <Grid item key={index} md={4} xs={4}>
                      <Box
                        sx={{
                          position: "relative",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                          backgroundColor:
                            selectedGender === item.name
                              ? customTheme.palette.primary.main
                              : customTheme.palette.common.white,
                          height: mobile ? theme.spacing(15) : theme.spacing(18.75),
                          p: theme.spacing(1.25),
                          cursor: "pointer",
                          border: "1px solid #F2EFFF",
                          borderRadius: theme.spacing(1),
                        }}
                        onClick={() => onSelectGender(item.name)}
                      >
                        <item.icon
                          color={
                            selectedGender.toLowerCase() === item.name.toLowerCase()
                              ? customTheme.palette.common.white
                              : customTheme.palette.customGray.textLight
                          }
                          style={{
                            width: theme.spacing(3.75),
                            height: theme.spacing(3.75),
                          }}
                        />
                        <Typography
                          variant={mobile ? "labelMedium" : "subhead1"}
                          sx={{
                            color:
                              selectedGender.toLowerCase() === item.name.toLowerCase()
                                ? customTheme.palette.common.white
                                : customTheme.palette.customGray.main,
                            fontWeight: theme.typography.fontWeightRegular,
                            mt: theme.spacing(1),
                            textTransform: "capitalize",
                          }}
                        >
                          {item.name}
                        </Typography>
                        <CheckCircleOutlinedIcon
                          sx={{ position: "absolute", top: 10, right: 10, color: "#fff" }}
                        />
                      </Box>
                    </Grid>
                  )}
                </ForLoops>
              </Grid>
            </Box>
            <Box sx={{ mt: theme.spacing(4.5) }}>
              <Typography
                variant="titleMedium"
                sx={{
                  fontWeight: customTheme.typography.fontWeightLight,
                  color: customTheme.palette.customGray.textDark,
                }}
              >
                Select Age
              </Typography>
              <Box
                component="div"
                sx={{
                  width: "100%",
                  display: "flex",
                  mt: theme.spacing(1),
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: isOpenRdiTable ? "none" : "flex",
                    alignItems: "flex-start",
                    columnGap: mobile ? theme.spacing(2) : theme.spacing(15),
                    border: "1px solid #F2EFFF",
                    borderRadius: theme.spacing(1),
                    p: theme.spacing(1),
                    maxWidth: theme.spacing(105),
                    flexWrap: "wrap",
                  }}
                >
                  <ForLoops each={ageChunks}>
                    {(chunk, index) => (
                      <AgeColumn
                        key={index}
                        ages={chunk}
                        selectedAge={selectedAge}
                        handleSelectAge={handleSelectAge}
                      />
                    )}
                  </ForLoops>
                </Box>
              </Box>
            </Box>
            {isOpenRdiTable ? null : (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  my: theme.spacing(8.75),
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={onOpenRdiTable}
                  disabled={selectedAge && selectedGender ? false : true}
                  sx={{
                    fontSize: customTheme.typography.labelLarge.fontSize,
                    py: theme.spacing(1.25),
                    pr: theme.spacing(3),
                    pl: theme.spacing(2),
                    borderRadius: theme.spacing(1),
                    fontWeight: customTheme.typography.fontWeightRegular,
                  }}
                  startIcon={<VisibilityOutlinedIcon />}
                >
                  View RDI
                </Button>
              </Box>
            )}
            <Box
              sx={{
                position: "absolute",
                display: isOpenRdiTable ? "block" : "none",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "#fff",
              }}
            >
              <RdiViewNutrients
                age={`${selectedAge.start}-${selectedAge.end} ${selectedAge.ageUnit}`}
                gender={selectedGender}
                nutritionFilterItems={nutritionFilterItems}
                onCloseRdiTable={onCloseRdiTable}
                rows={rows}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default RecommendedDailyIntake;
