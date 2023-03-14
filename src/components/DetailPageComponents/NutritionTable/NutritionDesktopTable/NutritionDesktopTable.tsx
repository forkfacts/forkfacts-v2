import { Box, Typography, useTheme } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { CompareSorting } from "@forkfacts/icons";
import React, { useState } from "react";
import { NutritionDesktopTableProps } from "@forkfacts/models";

const NutritionDesktopTable: React.FC<NutritionDesktopTableProps> = ({ nutritionTableItems }) => {
  const theme = useTheme();
  const [collapsedRows, setCollapsedRows] = useState<any>([]);
  const toggleCollapse = (nutrient: any) => {
    if (collapsedRows.includes(nutrient)) {
      setCollapsedRows(collapsedRows.filter((row: any) => row !== nutrient));
    } else {
      setCollapsedRows([...collapsedRows, nutrient]);
    }
  };

  const isCollapsed = (nutrient: any) => collapsedRows.includes(nutrient);
  return (
    <Box sx={{ width: "1128px" }}>
      <Box
        sx={{
          border: "none",
          backgroundColor: "#FCFCFC",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: theme.spacing(5),
          p: theme.spacing(3),
        }}
      >
        <Box sx={{ width: "25%" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              columnGap: theme.spacing(1),
              cursor: "pointer",
            }}
          >
            <Typography
              variant="labelLarge"
              sx={{
                color: theme.palette.customGray.dark,
                fontWeight: theme.typography.fontWeightRegular,
              }}
            >
              Nutrient
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: "25%" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              columnGap: theme.spacing(1),
              cursor: "pointer",
            }}
          >
            <Typography
              variant="labelLarge"
              sx={{
                color: theme.palette.customGray.dark,
                fontWeight: theme.typography.fontWeightRegular,
              }}
            >
              %Daily Value
            </Typography>
            <CompareSorting width={theme.spacing(2.45)} height={theme.spacing(2.75)} />
          </Box>{" "}
        </Box>
        <Box style={{ width: "25%" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              columnGap: theme.spacing(1),
              cursor: "pointer",
            }}
          >
            <Typography
              variant="labelLarge"
              sx={{
                color: theme.palette.customGray.dark,
                fontWeight: theme.typography.fontWeightRegular,
              }}
            >
              Amount (per 100g)
            </Typography>
          </Box>
        </Box>
        <Box style={{ borderBottom: "none" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              columnGap: theme.spacing(1),
              cursor: "pointer",
            }}
          >
            <Typography
              variant="labelLarge"
              sx={{
                color: theme.palette.customGray.dark,
                fontWeight: theme.typography.fontWeightRegular,
              }}
            >
              RDI
            </Typography>
            <CompareSorting width={theme.spacing(2.45)} height={theme.spacing(2.75)} />
          </Box>
        </Box>
      </Box>
      <Box>
        {nutritionTableItems.map((item, index) => (
          <React.Fragment key={index}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                p: theme.spacing(3),
                borderBottom: "1px solid #F3EFF4",
                pb: "8px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: theme.spacing(0.5),
                  width: "25%",
                  pl: !item.nutrientContents.length ? theme.spacing(4) : 0,
                }}
              >
                {isCollapsed(item.nutrient) && item.nutrientContents.length ? (
                  <ArrowRightIcon
                    onClick={() => toggleCollapse(item.nutrient)}
                    sx={{
                      cursor: "pointer",
                      width: theme.spacing(3),
                      height: theme.spacing(3),
                    }}
                  />
                ) : (
                  <>
                    {item.nutrientContents.length ? (
                      <ArrowDropDownIcon
                        onClick={() => toggleCollapse(item.nutrient)}
                        sx={{ cursor: "pointer" }}
                      />
                    ) : null}
                  </>
                )}
                <Typography
                  variant="titleMedium"
                  sx={{
                    color: theme.palette.customGray.main,
                    fontWeight: theme.typography.fontWeightRegular,
                  }}
                >
                  {item.nutrient}
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "25%",
                  display: "flex",
                  justifyContent: "flex-start",
                  pl: theme.spacing(7),
                }}
              >
                {item.dailyValue ? (
                  <Typography
                    variant="bodyLarge"
                    sx={{
                      color: theme.palette.customGray.main,
                      marginLeft: theme.spacing(4),
                      fontWeight: theme.typography.fontWeightLight,
                    }}
                  >
                    {`${item.dailyValue}`}%
                  </Typography>
                ) : null}
              </Box>
              <Box
                sx={{
                  width: "25%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  pl: theme.spacing(19),
                }}
              >
                <Typography
                  variant="titleMedium"
                  sx={{
                    color: theme.palette.customGray.main,
                    fontWeight: theme.typography.fontWeightRegular,
                    textAlign: "center",
                  }}
                >
                  {item.amount}
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "25%",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                {item.rdi.value ? (
                  <Typography
                    variant="titleMedium"
                    sx={{
                      color: theme.palette.customGray.main,
                      fontWeight: theme.typography.fontWeightRegular,
                      marginLeft: theme.spacing(1),
                    }}
                  >
                    {`${item.rdi.value}${item.rdi.weight}`}
                  </Typography>
                ) : null}
              </Box>
            </Box>
            {!isCollapsed(item.nutrient) &&
              item.nutrientContents.map((content) => (
                <Box
                  key={content.nutrient}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    p: theme.spacing(3),
                    height: theme.spacing(4),
                    "&:nth-child(1)": {
                      backgroundColor: "none !important",
                    },
                    "&:nth-child(odd)": {
                      backgroundColor: "#FFFBFF",
                    },
                  }}
                >
                  <Box sx={{ width: "25%" }}>
                    <Typography
                      variant="bodyLarge"
                      sx={{
                        color: theme.palette.customGray.main,
                        marginLeft: theme.spacing(4),
                        fontWeight: theme.typography.fontWeightLight,
                      }}
                    >
                      {content.nutrient}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: "100px",
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      mr: theme.spacing(25),
                    }}
                  >
                    {content.dailyValue ? (
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          width: "100%",
                        }}
                      >
                        <Typography
                          variant="bodyLarge"
                          sx={{
                            color: theme.palette.customGray.main,
                            fontWeight: theme.typography.fontWeightLight,
                            textAlign: "end",
                          }}
                        >
                          {content.dailyValue}%
                        </Typography>
                      </Box>
                    ) : null}
                  </Box>
                  <Box
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      pl: theme.spacing(11),
                    }}
                  >
                    <Typography
                      variant="bodyLarge"
                      sx={{
                        color: theme.palette.customGray.main,
                        marginLeft: theme.spacing(1),
                        fontWeight: theme.typography.fontWeightLight,
                        textAlign: "right",
                      }}
                    >
                      {content.amount}
                    </Typography>
                  </Box>
                  <Box
                    style={{
                      width: "25%",
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                    }}
                  >
                    {content.rdi.value ? (
                      <Typography
                        variant="bodyLarge"
                        sx={{
                          color: theme.palette.customGray.main,
                          marginLeft: theme.spacing(1),
                          fontWeight: theme.typography.fontWeightLight,
                        }}
                      >{`${content.rdi.value}${content.rdi.weight}`}</Typography>
                    ) : null}
                  </Box>
                </Box>
              ))}
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default NutritionDesktopTable;
