import { FoodOverviewProps } from "@forkfacts/models";
import { Box, Typography, useMediaQuery, useTheme, Button } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import { ForLoops } from "@forkfacts/helpers";
import { SharedSocialMedia } from "@forkfacts/components";
import React, { useState } from "react";

interface FoodOverviewPropsWithLocation extends FoodOverviewProps {
  //location: Location; // todo(h2): not sure how this is used
}

const FoodOverview: React.FC<FoodOverviewPropsWithLocation> = ({ values }) => {
  const [isSharedMediaOpen, setIsSharedMediaOpen] = useState(false);
  const theme = useTheme();
  let fullUrl = "";

  if (typeof window !== "undefined") {
    fullUrl = window.location.href;
  }

  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box sx={{ position: "relative" }}>
      <SharedSocialMedia
        link={fullUrl}
        shareName={values.name}
        isSharedMediaOpen={isSharedMediaOpen}
        setIsSharedMediaOpen={setIsSharedMediaOpen}
      />
      {!mobile ? (
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "flex-start", gap: theme.spacing(4) }}>
            {/*<Box component="img" src={values.img} />*/}
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: theme.spacing(3.5),
                  position: "relative",
                  mb: theme.spacing(1),
                }}
              >
                <Typography
                  variant="headline4"
                  sx={{
                    color: theme.palette.customGray.main,
                    fontWeight: theme.typography.fontWeightLight,
                  }}
                >
                  {values.name}
                </Typography>
                <ShareIcon
                  color="primary"
                  sx={{
                    width: theme.spacing(2.25),
                    height: theme.spacing(2.25),
                    mr: theme.spacing(0.3),
                    cursor: "pointer",
                  }}
                  onClick={() => setIsSharedMediaOpen(true)}
                />
              </Box>
              <Typography
                variant="bodyMedium"
                sx={{
                  color: theme.palette.customGray.textDark,
                  fontWeight: theme.typography.fontWeightLight,
                }}
              >
                {values.category}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: theme.spacing(1.5),
                  alignItems: "center",
                  mt: theme.spacing(3),
                }}
              >
                {/*<ForLoops each={values.nutritionValues}>
                  {(item, index) => {
                    return (
                      <Box
                        key={index}
                        sx={{
                          display: "flex",
                          backgroundColor: "#F3EFF4",
                          py: theme.spacing(0.75),
                          pr: theme.spacing(2),
                          px: theme.spacing(1),
                          borderRadius: theme.spacing(1),
                        }}
                      >
                        <Box
                          component="img"
                          src={item.icon}
                          sx={{
                            mr: theme.spacing(1.4),
                            width: theme.spacing(2.25),
                            height: theme.spacing(2.25),
                          }}
                        />
                        <Typography
                          variant="labelMedium"
                          sx={{
                            color: theme.palette.customGray.main,
                            fontWeight: theme.typography.fontWeightRegular,
                          }}
                        >
                          {item.name}
                        </Typography>
                      </Box>
                    );
                  }}
                </ForLoops>*/}
              </Box>
            </Box>
          </Box>
          <Box>
            <Typography
              variant="bodyMedium"
              sx={{
                backgroundColor: "#FCF8FD",
                width: theme.spacing(46.875),
                height: theme.spacing(5),
                textAlign: "start",
                display: "flex",
                alignItems: "center",
                pl: theme.spacing(2),
                borderLeft: `3px solid ${theme.palette.primary.main}`,
                color: "#1C1B1F",
                fontWeight: theme.typography.fontWeightLight,
                visibility: "hidden",
              }}
            >
              {values.tag}
            </Typography>
          </Box>
        </Box>
      ) : (
        <>
          <Box sx={{ display: "flex", alignItems: "flex-start", gap: theme.spacing(1) }}>
            <Box component="img" src={values.img} />
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", columnGap: theme.spacing(1.5) }}>
                <Typography
                  variant="headline6"
                  sx={{
                    color: theme.palette.customGray.main,
                    fontWeight: theme.typography.fontWeightLight,
                  }}
                >
                  {values.name}
                </Typography>
                <ShareIcon
                  color="primary"
                  sx={{
                    width: theme.spacing(2.25),
                    height: theme.spacing(2.25),
                    mr: theme.spacing(0.3),
                    cursor: "pointer",
                  }}
                  onClick={() => setIsSharedMediaOpen(true)}
                />
                <SharedSocialMedia
                  link="https://www.forkfacts.app/raw-banana-23hy-ripe"
                  isSharedMediaOpen={isSharedMediaOpen}
                  setIsSharedMediaOpen={setIsSharedMediaOpen}
                  shareName={values.name}
                />
              </Box>
              <Typography
                variant="bodySmall"
                sx={{
                  color: theme.palette.customGray.textDark,
                  mt: theme.spacing(1),
                  fontWeight: theme.typography.fontWeightLight,
                }}
              >
                {values.category}
              </Typography>
              <Typography
                variant="bodySmall"
                sx={{
                  backgroundColor: "#FCF8FD",
                  width: "100%",
                  textAlign: "start",
                  display: "flex",
                  alignItems: "center",
                  px: mobile ? theme.spacing(1.5) : theme.spacing(2.5),
                  py: theme.spacing(1),
                  borderLeft: `3px solid ${theme.palette.primary.main}`,
                  color: "#1C1B1F",
                  fontWeight: theme.typography.fontWeightLight,
                  mt: theme.spacing(2),
                  visibility: "hidden",
                }}
              >
                {values.tag}
              </Typography>
            </Box>
          </Box>
          {/* <Box
            sx={{
              display: "flex",
              gap: theme.spacing(1.5),
              alignItems: "center",
              mt: theme.spacing(3),
              flexWrap: "wrap",
            }}
          >
            <ForLoops each={detailsHeaderValues.nutritionValues}>
              {(item, index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      backgroundColor: "#F3EFF4",
                      py: theme.spacing(0.75),
                      pr: theme.spacing(2),
                      px: theme.spacing(1),
                      borderRadius: theme.spacing(1),
                    }}
                  >
                    <Box
                      component="img"
                      src={item.icon}
                      sx={{
                        mr: theme.spacing(1.4),
                        width: theme.spacing(2.25),
                        height: theme.spacing(2.25),
                      }}
                    />
                    <Typography
                      variant="labelMedium"
                      sx={{
                        color: theme.palette.customGray.main,
                        fontWeight: theme.typography.fontWeightRegular,
                      }}
                    >
                      {item.name}
                    </Typography>
                  </Box>
                );
              }}
            </ForLoops>
          </Box> */}
        </>
      )}
    </Box>
  );
};

export default FoodOverview;
