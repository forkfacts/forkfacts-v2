import React from "react";
import { ForLoops } from "@forkfacts/helpers";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { SearchRecommendationsProps } from "@forkfacts/models";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import SearchRecommendationItem from "./SearchRecommendationItem";

const SearchRecommendations: React.FC<SearchRecommendationsProps> = ({ recommendations }) => {
  const theme = useTheme();

  return (
    <Box>
      <Box sx={{ mb: theme.spacing(2) }}>
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: theme.typography.fontWeightBold,
            fontSize: theme.typography.subtitle2.fontSize,
          }}
        >
          Recommendations
        </Typography>
      </Box>
      <ForLoops each={recommendations}>
        {(value, idx) => {
          return (
            <Box key={idx} sx={{ mb: theme.spacing(2) }}>
              <Typography
                sx={{
                  mb: theme.spacing(1),
                  fontSize: theme.typography.caption.fontSize,
                  fontWeight: theme.typography.fontWeightMedium,
                  color: theme.palette.customGray.textLight,
                  textTransform: "uppercase",
                }}
              >
                {value.recommendationName}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: theme.spacing(1.5),
                }}
              >
                <Stack direction="row" gap={1}>
                  <ForLoops each={value.recommendationItems.slice(0, 2)}>
                    {(item, index) => {
                      return <SearchRecommendationItem item={item} key={index} />;
                    }}
                  </ForLoops>
                </Stack>
                <Box>
                  <ArrowForwardIcon
                    color="primary"
                    sx={{
                      width: theme.spacing(3),
                      height: theme.spacing(3),
                      borderRadius: "50%",
                      border: ` 1px solid ${theme.palette.primary.main}`,
                      cursor: "pointer",
                      paddingY: theme.spacing(0.5),
                      paddingX: theme.spacing(0.3),
                    }}
                  />
                </Box>
              </Box>
            </Box>
          );
        }}
      </ForLoops>
    </Box>
  );
};

export default SearchRecommendations;
