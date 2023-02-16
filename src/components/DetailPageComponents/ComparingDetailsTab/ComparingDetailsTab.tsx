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
  multipleSelectItems,
  getSelectedNutrients,
}) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const [selectNutrient, setSelectedNutrient] = useState("vitamin");
  const [open, setIsOpen] = useState(false);
  const [isShowHideOpen, setShowHideOpen] = useState(false);
  const data = ["calories", "betaCarotene", "vitamin", "calcium", "iron"];

  const nutrientData = compareTableItems.map((item: any) => {
    return {
      foodName: item.foodName,
      value: item[selectNutrient],
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
            sx={{
              color: theme.palette.customGray.textDark,
              textTransform: "uppercase",
              fontSize: mobile ? theme.typography.caption.fontSize : theme.typography.h6.fontSize,
              fontWeight: theme.typography.fontWeightBold,
            }}
          >
            {compareTableDetails.name}
          </Typography>
          <Typography
            sx={{
              ml: mobile ? 0 : theme.spacing(2),
              fontSize: mobile ? "10px" : theme.typography.caption.fontSize,
              mt: mobile ? theme.spacing(2) : 0,
            }}
          >
            {compareTableDetails.quantityAmount}
          </Typography>
        </Box>
        <Box sx={{ mr: mobile ? 0 : theme.spacing(2), position: "relative" }}>
          <MultipleSelects
            multipleSelectItems={multipleSelectItems}
            getSelectedNutrients={getSelectedNutrients}
            open={open}
            setIsOpen={setIsOpen}
            renderSelectButton={
              <Button
                startIcon={<FilterListOutlinedIcon />}
                variant="outlined"
                sx={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  borderRadius: theme.spacing(1),
                }}
                onClick={() => setIsOpen(!open)}
              >
                Filter foods
              </Button>
            }
          />
        </Box>
        <Box sx={{ display: "flex", columnGap: theme.spacing(3), position: "relative" }}>
          {mobile || (
            <MultipleSelects
              multipleSelectItems={multipleSelectItems}
              getSelectedNutrients={getSelectedNutrients}
              open={isShowHideOpen}
              setIsOpen={setShowHideOpen}
              renderSelectButton={
                <Button
                  startIcon={<VisibilityOutlinedIcon />}
                  variant="outlined"
                  onClick={() => setShowHideOpen(!isShowHideOpen)}
                  sx={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    borderRadius: theme.spacing(1),
                  }}
                >
                  Show/Hide
                </Button>
              }
            />
          )}
        </Box>
      </Box>
      {!mobile ? (
        <TableContainer sx={{ mt: theme.spacing(5), boxShadow: "none" }}>
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
                    <Typography>Food name</Typography>{" "}
                    <CompareSorting width={theme.spacing(2.75)} height={theme.spacing(2.75)} />
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
                    <Typography> Calories</Typography>{" "}
                    <CompareSorting width={theme.spacing(2.75)} height={theme.spacing(2.75)} />
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
                    <Typography>Beta Carotene (mg)</Typography>{" "}
                    <CompareSorting width={theme.spacing(2.75)} height={theme.spacing(2.75)} />
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
                    <Typography>Vitamin C (mg)</Typography>{" "}
                    <CompareSorting width={theme.spacing(2.75)} height={theme.spacing(2.75)} />
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
                    <Typography>Calcium (mg)</Typography>{" "}
                    <CompareSorting width={theme.spacing(2.75)} height={theme.spacing(2.75)} />
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
                    <Typography>Iron (mg)</Typography>{" "}
                    <CompareSorting width={theme.spacing(2.75)} height={theme.spacing(2.75)} />
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
                        style={{ borderBottom: "none", fontWeight: 600 }}
                        component="th"
                        scope="row"
                      >
                        {row.foodName}
                      </TableCell>
                      <TableCell style={{ borderBottom: "none" }} align="center">
                        {row.calories}
                      </TableCell>
                      <TableCell style={{ borderBottom: "none" }} align="center">
                        {row.betaCarotene}
                      </TableCell>
                      <TableCell style={{ borderBottom: "none" }} align="center">
                        {row.vitamin}
                      </TableCell>
                      <TableCell style={{ borderBottom: "none" }} align="center">
                        {row.calcium}
                      </TableCell>
                      <TableCell style={{ borderBottom: "none" }} align="center">
                        {row.iron}
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
                mt: theme.spacing(2),
              }}
            >
              <List sx={{ display: "flex" }}>
                {data.map((item, idx) => (
                  <ListItem
                    key={idx}
                    sx={{
                      width: "auto",
                      flexShrink: 0,
                      backgroundColor:
                        item === selectNutrient ? theme.palette.primary.light : "#FFFBFF",
                      p: theme.spacing(0.25),
                      borderRadius: theme.spacing(12.5),
                    }}
                    onClick={() => setSelectedNutrient(item)}
                  >
                    <Button
                      sx={{
                        color:
                          item === selectNutrient
                            ? theme.palette.primary.main
                            : theme.palette.customGray.dark,
                        fontWeight: theme.typography.fontWeightMedium,
                      }}
                    >
                      {item}
                    </Button>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
          {nutrientData.map((item, index) => (
            <Box key={index} sx={{ my: theme.spacing(3) }}>
              <Box sx={{ display: "flex", gap: theme.spacing(3), alignItems: "center" }}>
                <Box sx={{ textAlign: "end", width: "30%" }}>
                  <Typography
                    sx={{
                      whiteSpace: "nowrap",
                      fontSize: theme.typography.caption.fontSize,
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
                      py: theme.spacing(0.5),
                      px: theme.spacing(2),
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        color: theme.palette.common.white,
                      }}
                    >
                      {item.value}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </>
      )}
    </Box>
  );
};

export default ComparingDetailsTab;
