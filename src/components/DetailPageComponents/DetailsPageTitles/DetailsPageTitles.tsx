import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { DetailsPageTitlesProps } from "@forkfacts/models";
import { ForLoops } from "@forkfacts/helpers";
import { ViewMoreButton } from "@forkfacts/components";

const DetailsPageTitles: React.FC<DetailsPageTitlesProps> = ({
  DetailsPageTitlesItems,
  onSelectDetailsPageTitleItem,
}) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const [selectedAgeIndex, setSelectedAgeIndex] = useState<number | null>(2);

  const handleDetailsPageTitlesItem = (item: string, index: number) => {
    setSelectedAgeIndex(index);
    onSelectDetailsPageTitleItem(item);
  };

  return (
    <Box>
      <Grid
        container
        sx={{
          width: mobile ? "100%" : "90%",
          mt: theme.spacing(2),
          ml: mobile ? theme.spacing(-1) : 0,
        }}
        flexDirection={mobile ? "column" : "row"}
        gap={1}
        alignItems={mobile ? "flex-start" : "center"}
      >
        <ForLoops each={DetailsPageTitlesItems}>
          {(item, index) => (
            <Grid item key={index} sx={{ mt: mobile ? theme.spacing(-2) : 0 }}>
              <Box
                key={index}
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
                onClick={() => handleDetailsPageTitlesItem(item.title, index)}
              >
                <Checkbox
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<RadioButtonCheckedIcon />}
                  checked={selectedAgeIndex === index ? true : false}
                />
                <Typography
                  variant={mobile ? "bodySmall" : "titleMedium"}
                  sx={{
                    fontWeight: mobile
                      ? theme.typography.fontWeightLight
                      : theme.typography.fontWeightRegular,
                    color: theme.palette.customGray.textDark,
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
            </Grid>
          )}
        </ForLoops>
        <Grid
          item
          sx={{
            ml: mobile ? theme.spacing(-2) : theme.spacing(2),
            mt: mobile ? theme.spacing(-3) : 0,
          }}
        >
          <ViewMoreButton text="View more" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DetailsPageTitles;
