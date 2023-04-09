import { Layout } from "@forkfacts/components";
import { Box, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import { MenuItem, lifeStageItem } from "@forkfacts/models";
import React, { useState } from "react";
import { useStyles } from "../toolsScrenStyles";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import { customTheme } from "../../../themes/theme";
import { ForLoops } from "@forkfacts/helpers";
import { selectedItem } from "components/Filters/LifeStage/LifeStageItem/LifeStageItem.stories";

interface RecommendedDailyIntakeProps {
  menuItems: MenuItem[];
  genders: lifeStageItem[];
}
const RecommendedDailyIntake: React.FC<RecommendedDailyIntakeProps> = ({ menuItems, genders }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [selectedGender, setSelectedGender] = useState("");
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  const onSelectGender = (gender: string): void => {
    setSelectedGender(gender);
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
      </Box>
    </Layout>
  );
};

export default RecommendedDailyIntake;
