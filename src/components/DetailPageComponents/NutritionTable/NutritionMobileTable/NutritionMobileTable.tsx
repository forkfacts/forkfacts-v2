import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box, Typography, useTheme } from "@mui/material";
import { ForLoops } from "@forkfacts/helpers";
import { NutritionTableItem } from "@forkfacts/models";
import "./index.css";

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
    <Box sx={{ mb: theme.spacing(10), height: "auto !important" }}>
      <Slider {...settings}>
        {nutritionTableItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              border: `1px solid #F3EFF4`,
              p: theme.spacing(2),
              borderRadius: theme.spacing(1),
              height: "auto !important",
              boxShadow:
                !item.nutrientContents.length || !item.amount || item.nutrientContents.length === 1
                  ? "none"
                  : "0px 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Box>
              <Box>
                <Typography
                  variant="titleMedium"
                  sx={{
                    fontWeight: theme.typography.fontWeightRegular,
                    color: theme.palette.customGray.main,
                    textTransform: "uppercase",
                  }}
                >
                  {item.nutrient}
                </Typography>
                {item.amount && (
                  <Box
                    sx={{
                      backgroundColor: "#F9F9FB",
                      mt: theme.spacing(1),
                      display: "flex",
                      alignItems: "center",
                      columnGap: theme.spacing(5),
                      p: theme.spacing(1),
                      borderRadius: theme.spacing(0.5),
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        flexDirection: "column",
                        rowGap: theme.spacing(1),
                      }}
                    >
                      <Typography variant="caption" sx={{ color: theme.palette.customGray.dark }}>
                        Amount (100g)
                      </Typography>
                      <Typography
                        variant="titleSmall"
                        sx={{
                          color: theme.palette.customGray.main,
                          fontWeight: theme.typography.fontWeightRegular,
                        }}
                      >
                        {item.amount}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        flexDirection: "column",
                        rowGap: theme.spacing(1),
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          color: theme.palette.customGray.dark,
                          fontWeight: theme.typography.fontWeightRegular,
                        }}
                      >
                        %Daily value
                      </Typography>
                      <Typography
                        variant="titleSmall"
                        sx={{
                          color: theme.palette.customGray.main,
                          fontWeight: theme.typography.fontWeightRegular,
                        }}
                      >
                        {item.dailyValue}%
                      </Typography>
                    </Box>
                  </Box>
                )}
              </Box>
              {item.nutrientContents.length ? (
                <Box>
                  <Box
                    sx={{
                      display: item.nutrientContents.length ? "flex" : "none",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mt: !item.amount ? theme.spacing(2) : theme.spacing(4),
                      mb: theme.spacing(1),
                    }}
                  >
                    <Typography
                      variant="labelSmall"
                      sx={{
                        color: theme.palette.customGray.dark,
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
                        variant="labelSmall"
                        sx={{
                          color: theme.palette.customGray.dark,
                          fontWeight: theme.typography.fontWeightRegular,
                        }}
                      >
                        Amount
                      </Typography>
                      <Typography
                        variant="labelSmall"
                        sx={{
                          fontWeight: theme.typography.fontWeightRegular,
                          color: theme.palette.customGray.main,
                        }}
                      >
                        (%Daily value)
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ height: theme.spacing(0.2), backgroundColor: "#F3EFF4" }} />
                  <ForLoops each={item.nutrientContents}>
                    {(subItem, index2) => (
                      <Box
                        key={index2}
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          my: theme.spacing(2),
                          borderBottom: "1px solid #FCF8FD",
                        }}
                      >
                        <Typography
                          variant="labelMedium"
                          sx={{
                            color: theme.palette.customGray.main,
                            fontWeight: theme.typography.fontWeightRegular,
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
                            variant="titleSmall"
                            sx={{
                              fontWeight: theme.typography.fontWeightRegular,
                              color: theme.palette.customGray.dark,
                            }}
                          >
                            {subItem.amount}
                          </Typography>
                          <Typography
                            variant="titleSmall"
                            sx={{
                              fontWeight: theme.typography.fontWeightRegular,
                              color: theme.palette.customGray.main,
                            }}
                          >
                            ({subItem.dailyValue}%)
                          </Typography>
                        </Box>
                      </Box>
                    )}
                  </ForLoops>
                </Box>
              ) : null}
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default NutritionMobileTable;
