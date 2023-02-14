import { DetailsPageHeaderProps } from "@forkfacts/models";
import { Box, Typography, useTheme } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import { ForLoops } from "@forkfacts/helpers";
import React from "react";

const DetailsPageHeader: React.FC<DetailsPageHeaderProps> = ({ detailsHeaderValues }) => {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box sx={{ display: "flex", alignItems: "flex-start", gap: theme.spacing(4) }}>
        <Box component="img" src={detailsHeaderValues.img} />
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", columnGap: theme.spacing(3.5) }}>
            <Typography variant="h5">{detailsHeaderValues.name}</Typography>
            <ShareIcon
              color="primary"
              sx={{
                width: theme.spacing(2.25),
                height: theme.spacing(2.25),
                mr: theme.spacing(0.3),
              }}
            />
          </Box>
          <Typography variant="caption" sx={{ color: "#47464A" }}>
            {detailsHeaderValues.subTitle}
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: theme.spacing(1.5),
              alignItems: "center",
              mt: theme.spacing(3),
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
                    <Typography variant="caption" sx={{ color: "#1C1B1F" }}>
                      {item.name}
                    </Typography>
                  </Box>
                );
              }}
            </ForLoops>
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography
          variant="caption"
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
            fontWeight: theme.typography.fontWeightRegular,
          }}
        >
          {detailsHeaderValues.tag}
        </Typography>
      </Box>
    </Box>
  );
};

export default DetailsPageHeader;
