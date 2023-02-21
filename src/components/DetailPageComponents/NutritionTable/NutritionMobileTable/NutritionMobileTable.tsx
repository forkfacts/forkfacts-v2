import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box, Typography, useTheme } from "@mui/material";
import { ForLoops } from "@forkfacts/helpers";
import { NutritionTableItem } from "@forkfacts/models";

interface NutritionMobileTableProps {
  nutritionTableItems: NutritionTableItem[];
}

const NutritionMobileTable: React.FC<NutritionMobileTableProps> = ({ nutritionTableItems }) => {
  const theme = useTheme();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box sx={{ mb: theme.spacing(10) }}>
      <Slider {...settings}>
        {nutritionTableItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              border: `1px solid #F3EFF4`,
              p: theme.spacing(2),
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            }}
            boxShadow={1}
          >
            <Box sx={{}}>
              <Typography>{item.nutrient}</Typography>
              <Box
                sx={{
                  backgroundColor: "#F9F9FB",
                  mt: theme.spacing(3),
                  display: "flex",
                  alignItems: "center",
                  columnGap: theme.spacing(5),
                  p: theme.spacing(1),
                }}
              >
                <Box>
                  <Typography sx={{ fontSize: theme.typography.labelMedium.fontSize }}>
                    Amount (100g)
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: theme.typography.titleSmall.fontSize,
                      color: theme.palette.customGray.main,
                      fontWeight: theme.typography.fontWeightBold,
                    }}
                  >
                    {item.amount}
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontSize: theme.typography.labelMedium.fontSize }}>
                    %Daily value
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: theme.typography.titleSmall.fontSize,
                      color: theme.palette.customGray.main,
                      fontWeight: theme.typography.fontWeightBold,
                    }}
                  >
                    {item.dailyValue}%
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: theme.spacing(4),
                  mb: theme.spacing(2),
                }}
              >
                <Typography
                  sx={{
                    fontSize: theme.typography.labelSmall.fontSize,
                    color: theme.palette.customGray.textDark,
                    fontWeight: theme.typography.fontWeightRegular,
                  }}
                >
                  Nutrients
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: theme.spacing(0.3),
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: theme.typography.titleSmall.fontSize,
                      fontWeight: theme.typography.fontWeightRegular,
                    }}
                  >
                    amount
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: theme.typography.titleSmall.fontSize,
                      fontWeight: theme.typography.fontWeightBold,
                    }}
                  >
                    (%Daily value)
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ height: theme.spacing(0.2), backgroundColor: "#F3EFF4" }} />
              <ForLoops each={item.nutrientContents}>
                {(subItem, index2) => (
                  <Box key={index2}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        my: theme.spacing(2),
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: theme.typography.labelMedium.fontSize,
                          fontWeight: theme.typography.fontWeightBold,
                        }}
                      >
                        {subItem.nutrient}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          columnGap: theme.spacing(0.3),
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: theme.typography.titleSmall.fontSize,
                            fontWeight: theme.typography.fontWeightRegular,
                          }}
                        >
                          {subItem.amount}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: theme.typography.titleSmall.fontSize,
                            fontWeight: theme.typography.fontWeightBold,
                          }}
                        >
                          ({subItem.dailyValue}%)
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                )}
              </ForLoops>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default NutritionMobileTable;
