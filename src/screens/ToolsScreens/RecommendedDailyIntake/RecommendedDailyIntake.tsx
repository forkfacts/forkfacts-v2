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

interface RecommendedDailyIntakeProps {
  menuItems: MenuItem[];
  genders: lifeStageItem[];
  ages: RdiAge[];
  selectedAge: RdiAge;
  setSelectedAge: (age: RdiAge) => void;
  selectedGender: string;
  setSelectedGender: (gender: string) => void;
  rows: RdiNutritionTableRow[];
  nutritionFilters: SelectedNutrient[];
  totalRdiNutrients: number;
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
            mb: theme.spacing(4),
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
            sx={{ width: theme.spacing(2.5), height: theme.spacing(2.5) }}
          />
          {item.end || item.end === 0 ? (
            <Typography
              variant="bodyMedium"
              sx={{
                fontWeight: customTheme.typography.fontWeightLight,
                color: customTheme.palette.customGray.main,
                cursor: "pointer",
                ml: theme.spacing(2.5),
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
                ml: theme.spacing(1),
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
                  textAlign: "right",
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
  nutritionFilters,
  totalRdiNutrients,
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

  const columns = Math.ceil(ages.length / 3);
  const ageChunks = Array(columns)
    .fill(null)
    .map((_, i) => ages.slice(i * 3, i * 3 + 3));

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
        {!isOpenRdiTable ? (
          <Box
            sx={{
              px: mobile ? theme.spacing(2) : 0,
              pt: theme.spacing(3),
            }}
          >
            <Typography
              variant={mobile ? "headline6" : "headline4"}
              sx={{
                fontWeight: customTheme.typography.fontWeightLight,
                color: customTheme.palette.customGray.main,
              }}
            >
              Recommended Daily Intake
            </Typography>
            <Box sx={{ position: "relative", overflow: "hidden", width: "100%" }}>
              <Box sx={{ mt: mobile ? theme.spacing(3) : theme.spacing(3.5) }}>
                <Typography
                  variant="titleMedium"
                  sx={{
                    fontWeight: customTheme.typography.fontWeightRegular,
                    color: customTheme.palette.customGray.textDark,
                  }}
                >
                  Choose a life stage
                </Typography>
                <Grid
                  container
                  columns={{ xs: 12, sm: 12, md: 12 }}
                  spacing={2}
                  sx={{ mt: theme.spacing(0.3), maxWidth: theme.spacing(108) }}
                >
                  <ForLoops each={genders}>
                    {(item, index) => (
                      <Grid item key={index} xs={4}>
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
                            width: mobile ? "auto" : "264px",
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
                              fontWeight: customTheme.typography.fontWeightRegular,
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
              <Box sx={{ mt: theme.spacing(4) }}>
                <Typography
                  variant="titleMedium"
                  sx={{
                    fontWeight: customTheme.typography.fontWeightRegular,
                    color: customTheme.palette.customGray.textDark,
                  }}
                >
                  Select age
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
                      display: "flex",
                      alignItems: "flex-start",
                      columnGap: mobile ? theme.spacing(2) : theme.spacing(25),
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  position: "relative",
                  mt: theme.spacing(3),
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
            </Box>
          </Box>
        ) : (
          <Box
            sx={{
              display: "block",
              background: "#fff",
              pt: theme.spacing(4),
              px: mobile ? theme.spacing(2) : 0,
            }}
          >
            <RdiViewNutrients
              age={`${selectedAge.start}-${selectedAge.end} ${selectedAge.ageUnit}`}
              gender={selectedGender}
              nutritionFilterItems={nutritionFilters}
              onCloseRdiTable={onCloseRdiTable}
              rows={rows}
              totalRdiNutrients={totalRdiNutrients}
            />
          </Box>
        )}
      </Box>
    </Layout>
  );
};

export default RecommendedDailyIntake;
