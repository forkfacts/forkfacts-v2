import { Layout } from "@forkfacts/components";
import { Box, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import { MenuItem, RdiAge, lifeStageItem } from "@forkfacts/models";
import React, { useState } from "react";
import { useStyles } from "../toolsScrenStyles";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import { customTheme } from "../../../themes/theme";
import { ForLoops } from "@forkfacts/helpers";
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
}
const RecommendedDailyIntake: React.FC<RecommendedDailyIntakeProps> = ({
  menuItems,
  genders,
  ages,
  setSelectedAge,
  selectedAge,
  setSelectedGender,
  selectedGender,
}) => {
  const classes = useStyles();
  const theme = useTheme();

  const mobile = useMediaQuery(theme.breakpoints.down("md"));

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
  return (
    <Layout menuItems={menuItems}>
      <Box className={classes.desktopScreenWrapper}>
        <Typography
          variant="headline4"
          sx={{
            fontWeight: customTheme.typography.fontWeightLight,
            color: customTheme.palette.customGray.main,
          }}
        >
          Recommended Daily Intake
        </Typography>
        <Box sx={{ mt: theme.spacing(4.5) }}>
          <Typography
            variant="titleMedium"
            sx={{
              fontWeight: customTheme.typography.fontWeightLight,
              color: customTheme.palette.customGray.textDark,
            }}
          >
            Choose a life stage
          </Typography>
          <Grid container md={8} spacing={2} sx={{ mt: theme.spacing(1.5) }}>
            <ForLoops each={genders}>
              {(item, index) => (
                <Grid item key={index} md={4}>
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
                      height: theme.spacing(18.75),
                      p: theme.spacing(1.25),
                      cursor: "pointer",
                      border: "1px solid #F2EFFF",
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
                width: "15%",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <ForLoops each={ages.slice(0, 4)}>
                {(item, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
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
                )}
              </ForLoops>
            </Box>
            <Box
              sx={{
                width: "10%",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              {ages.length > 4 && (
                <ForLoops each={ages.slice(4, ages.length)}>
                  {(item, index) => (
                    <Box
                      key={index}
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
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
                  )}
                </ForLoops>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default RecommendedDailyIntake;
