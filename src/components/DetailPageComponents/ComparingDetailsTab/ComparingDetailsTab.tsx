import {
  Box,
  Button,
  List,
  ListItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { ForLoops } from "@forkfacts/helpers";
import { CompareSorting } from "@forkfacts/icons";
import React, { useState } from "react";
import { ComparingDetailsTabProps } from "@forkfacts/models";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import { MultipleSelects } from "@forkfacts/components";

const ComparingDetailsTab: React.FC<ComparingDetailsTabProps> = ({
  compareTableItems,
  compareTableDetails,
  values,
  onSelectedValue,
}) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const tablet = useMediaQuery(theme.breakpoints.up("sm"));
  const [selectedNutrient, setSelectedNutrient] = useState("Vitamin");
  const [open, setIsOpen] = useState(false);
  const [isShowHideOpen, setShowHideOpen] = useState(false);

  const tableHeaderItems = Object.keys(compareTableItems[0])
    .filter((key) => key !== "foodName")
    .map((item) => ({ name: item }));

  const nutrientData = compareTableItems.map((item: any) => {
    return {
      foodName: item.foodName,
      value: item[selectedNutrient],
    };
  });

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            alignItems: mobile ? "flex-start" : "flex-end",
            flexDirection: mobile ? "column" : "row",
          }}
        >
          <Typography
            variant={mobile ? "labelLarge" : "titleLarge"}
            sx={{
              color: mobile ? theme.palette.customGray.main : theme.palette.customGray.textDark,
              textTransform: "uppercase",
              fontWeight: theme.typography.fontWeightRegular,
            }}
          >
            {compareTableDetails.name}
          </Typography>
          <Typography
            variant={mobile ? "extraSmall" : "labelLarge"}
            sx={{
              ml: mobile ? 0 : theme.spacing(1),
              color: theme.palette.customGray.textDark,
              mt: mobile ? theme.spacing(1) : 0,
              fontWeight: theme.typography.fontWeightRegular,
              lineHeight: mobile ? theme.typography.extraSmall.lineHeight : theme.spacing(3),
            }}
          >
            {compareTableDetails.quantityAmount}
          </Typography>
        </Box>
        <Box sx={{ mr: mobile ? 0 : theme.spacing(2), position: "relative" }}>
          <MultipleSelects
            margin={theme.spacing(-15.5)}
            values={values}
            onSelectedValue={onSelectedValue}
            open={open}
            setIsOpen={setIsOpen}
            multiselectTitle="Filter foods"
            renderSelectButton={
              <>
                <Button
                  startIcon={<FilterListOutlinedIcon />}
                  variant="outlined"
                  sx={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    borderRadius: theme.spacing(1),
                    fontWeight: theme.typography.fontWeightRegular,
                    py: mobile ? theme.spacing(1) : theme.spacing(1.25),
                    pl: mobile ? theme.spacing(2) : theme.spacing(2),
                    pr: mobile ? theme.spacing(2) : theme.spacing(3),
                  }}
                  onClick={() => setIsOpen(!open)}
                >
                  <Typography variant={mobile ? "labelSmall" : "labelLarge"}>
                    Filter foods
                  </Typography>
                </Button>
              </>
            }
          />
        </Box>
        <Box sx={{ display: "flex", columnGap: theme.spacing(3), position: "relative" }}>
          {mobile || (
            <MultipleSelects
              margin={theme.spacing(-15.5)}
              values={tableHeaderItems}
              onSelectedValue={onSelectedValue}
              open={isShowHideOpen}
              setIsOpen={setShowHideOpen}
              multiselectTitle="Show/Hide nutrients"
              renderSelectButton={
                <>
                  <Button
                    startIcon={<VisibilityOutlinedIcon />}
                    variant="outlined"
                    onClick={() => setShowHideOpen(!isShowHideOpen)}
                    sx={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      borderRadius: theme.spacing(1),
                      fontWeight: theme.typography.fontWeightRegular,
                      py: mobile ? theme.spacing(1) : theme.spacing(1.25),
                      pl: mobile ? theme.spacing(2) : theme.spacing(2),
                      pr: mobile ? theme.spacing(2) : theme.spacing(3),
                    }}
                  >
                    <Typography variant={mobile ? "labelSmall" : "labelLarge"}>
                      Show/Hide
                    </Typography>
                  </Button>
                </>
              }
            />
          )}
        </Box>
      </Box>
      {!mobile ? (
        <TableContainer sx={{ mt: theme.spacing(2), boxShadow: "none" }}>
          <Table sx={{ minWidth: 650, border: "none" }}>
            <TableHead style={{ border: "none", backgroundColor: "#FCFCFC" }}>
              <TableRow>
                <TableCell style={{ borderBottom: "none" }}>
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
                      Food name
                    </Typography>
                    <CompareSorting width={theme.spacing(2.45)} height={theme.spacing(2.45)} />
                  </Box>
                </TableCell>
                <TableCell align="right" style={{ borderBottom: "none" }}>
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
                      Calories
                    </Typography>
                    <CompareSorting width={theme.spacing(2.45)} height={theme.spacing(2.45)} />
                  </Box>
                </TableCell>
                <TableCell align="right" style={{ borderBottom: "none" }}>
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
                      Beta Carotene (mg)
                    </Typography>
                    <CompareSorting width={theme.spacing(2.45)} height={theme.spacing(2.45)} />
                  </Box>
                </TableCell>
                <TableCell align="right" style={{ borderBottom: "none" }}>
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
                      Vitamin C (mg)
                    </Typography>
                    <CompareSorting width={theme.spacing(2.45)} height={theme.spacing(2.45)} />
                  </Box>
                </TableCell>
                <TableCell align="right" style={{ borderBottom: "none" }}>
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
                      Calcium (mg)
                    </Typography>
                    <CompareSorting width={theme.spacing(2.45)} height={theme.spacing(2.45)} />
                  </Box>
                </TableCell>
                <TableCell align="right" style={{ borderBottom: "none" }}>
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
                      Iron (mg)
                    </Typography>
                    <CompareSorting width={theme.spacing(2.45)} height={theme.spacing(2.45)} />
                  </Box>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <ForLoops each={compareTableItems}>
                {(row, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell
                        style={{ borderBottom: "1px solid #F3EFF4" }}
                        component="th"
                        scope="row"
                      >
                        <Typography
                          variant="titleMedium"
                          sx={{
                            color: theme.palette.customGray.main,
                            fontWeight: theme.typography.fontWeightRegular,
                          }}
                        >
                          {row.foodName}
                        </Typography>
                      </TableCell>
                      <TableCell
                        style={{ borderBottom: "1px solid #F3EFF4", marginRight: theme.spacing(4) }}
                        align="right"
                      >
                        <Typography
                          variant="bodyLarge"
                          sx={{
                            marginRight: theme.spacing(7),
                            fontWeight: theme.typography.fontWeightLight,
                            color: theme.palette.customGray.main,
                          }}
                        >
                          {row.Calories}
                        </Typography>
                      </TableCell>
                      <TableCell
                        style={{ borderBottom: "1px solid #F3EFF4", marginRight: theme.spacing(4) }}
                        align="right"
                      >
                        <Typography
                          variant="bodyLarge"
                          sx={{
                            marginRight: theme.spacing(10),
                            fontWeight: theme.typography.fontWeightLight,
                            color: theme.palette.customGray.main,
                          }}
                        >
                          {row["Beta carotene"]}
                        </Typography>
                      </TableCell>
                      <TableCell
                        style={{ borderBottom: "1px solid #F3EFF4", marginRight: theme.spacing(4) }}
                        align="right"
                      >
                        <Typography
                          variant="bodyLarge"
                          sx={{
                            marginRight: theme.spacing(8),
                            fontWeight: theme.typography.fontWeightLight,
                            color: theme.palette.customGray.main,
                          }}
                        >
                          {row.Vitamin}
                        </Typography>
                      </TableCell>
                      <TableCell style={{ borderBottom: "1px solid #F3EFF4" }} align="right">
                        <Typography
                          variant="bodyLarge"
                          sx={{
                            marginRight: theme.spacing(8),
                            fontWeight: theme.typography.fontWeightLight,
                            color: theme.palette.customGray.main,
                          }}
                        >
                          {row.Calcium}
                        </Typography>
                      </TableCell>
                      <TableCell
                        style={{ borderBottom: "1px solid #F3EFF4", marginRight: theme.spacing(4) }}
                        align="right"
                      >
                        <Typography
                          variant="bodyLarge"
                          sx={{
                            marginRight: theme.spacing(7),
                            fontWeight: theme.typography.fontWeightLight,
                            color: theme.palette.customGray.main,
                          }}
                        >
                          {row.Iron}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  );
                }}
              </ForLoops>
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <>
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                overflowX: "auto",
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": {
                  width: "0px",
                  background: "transparent",
                },
                mt: theme.spacing(4), // increase spacing between items
              }}
            >
              <List
                sx={{
                  display: "flex",
                  "> li": { width: "auto", flexShrink: 0 },
                  justifyContent: "space-between",
                  columnGap: theme.spacing(1),
                }}
              >
                {tableHeaderItems?.map((item: { name: string }, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      backgroundColor:
                        item.name === selectedNutrient ? theme.palette.primary.light : "#FFFBFF",
                      borderRadius: theme.spacing(12.5),
                    }}
                    role="button"
                    aria-pressed={item.name === selectedNutrient ? "true" : "false"}
                    onClick={() => setSelectedNutrient(item.name)}
                  >
                    <Typography
                      variant="labelSmall"
                      component="span"
                      sx={{
                        color:
                          item.name === selectedNutrient
                            ? theme.palette.primary.main
                            : theme.palette.customGray.dark,
                        fontWeight: theme.typography.fontWeightRegular,
                        cursor: "pointer",
                      }}
                    >
                      {item.name}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: tablet ? theme.spacing(3) : theme.spacing(1),
              ml: tablet ? theme.spacing(-27) : theme.spacing(-9),
            }}
          >
            <Typography
              variant="caption"
              sx={{ color: theme.palette.customGray.dark, textAlign: "center" }}
            >
              *in mg
            </Typography>
          </Box>
          <Box sx={{ mt: theme.spacing(-2) }}>
            {nutrientData.map((item, index) => (
              <Box
                key={index}
                sx={{
                  my: theme.spacing(3),
                  width: "100%",
                  overflow: "hidden",
                }}
              >
                <Box sx={{ display: "flex", gap: theme.spacing(3), alignItems: "center" }}>
                  <Box sx={{ textAlign: "end", width: "30%" }}>
                    <Typography
                      variant="bodySmall"
                      sx={{
                        color: theme.palette.customGray.main,
                        whiteSpace: "nowrap",
                        fontWeight: theme.typography.fontWeightLight,
                      }}
                    >
                      {item.foodName}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: "70%",
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: theme.palette.primary.main,
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        width: `${item.value}%`,
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          color: theme.palette.common.white,
                          py: theme.spacing(0.5),
                          px: theme.spacing(2),
                        }}
                      >
                        {item.value}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </>
      )}
    </Box>
  );
};

export default ComparingDetailsTab;
