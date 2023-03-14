import { Check, SearchOutlined } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Checkbox,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { ViewMoreButton } from "@forkfacts/components";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import React, { useEffect, useState } from "react";
import { ForLoops } from "@forkfacts/helpers";
import { SearchNutritionFilterProps, SearchNutritionFilterItem } from "@forkfacts/models";
import { withDropdown, withoutDropdown } from "./searchNutrientStyles";

const SearchNutritionFilter: React.FC<SearchNutritionFilterProps> = ({
  nutritionFilterItems,
  onSelectNutritionFilterItem,
  isDropdown,
  margin = 0,
}) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const newNutrients: SearchNutritionFilterItem[] = [...nutritionFilterItems].map((item) => {
    return {
      name: item.name,
      checked: item.checked,
      subItems: item.subItems.map((item2) => {
        return {
          name: item2.name,
          checked: item.checked,
        };
      }),
    };
  });
  const [filteredNutrient, setFilterNutrient] = useState([...newNutrients]);
  const [selectedNutrient, setSelectedNutrient] = useState({
    name: "",
  });
  const [open, setOpen] = useState(false);
  const [name, setName] = useState<string>("");
  const [viewMore, setViewMore] = useState({
    main: 5,
    sub: 4,
  });
  const [firstSelectedItem, setFirstSelectedItem] = useState({
    name: "",
    length: 0,
  });
  const renderFilterNutrients: SearchNutritionFilterItem[] = filteredNutrient.filter((item) => {
    if (!name) return filteredNutrient;
    if (item.name.toLowerCase().includes(name.toLowerCase())) {
      return item;
    }
  });

  const onHandleSelectedItem = (name: string, index: number) => {
    let results = renderFilterNutrients.map((item) => {
      if (item.name === name) {
        if (!item.checked) {
          let newItem = {
            ...item,
            name,
            checked: true,
            subItems: item.subItems.map((item2, i) => {
              let newItem = { ...item2, checked: true };
              return newItem;
            }),
          };
          return newItem;
        } else {
          let newItem = {
            ...item,
            name,
            checked: false,
            subItems: item.subItems.map((item2, i) => {
              let newItem = { ...item2, checked: false };
              return newItem;
            }),
          };
          return newItem;
        }
      } else {
        return item;
      }
    });
    return setFilterNutrient(results);
  };

  const onSelectSubItem = (name1: string, name2: string) => {
    setSelectedNutrient({
      name: name1,
    });
    let results = renderFilterNutrients.map((item, index) => {
      if (item.name === name1) {
        return {
          ...item,
          subItems: item.subItems.map((item2, i) => {
            if (item2.name === name2) {
              if (!item2.checked) {
                let newItem = { ...item2, checked: true };
                return newItem;
              } else {
                let newItem = { ...item2, checked: false };
                return newItem;
              }
            } else {
              return item2;
            }
          }),
        };
      } else {
        return item;
      }
    });
    return setFilterNutrient(results);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);

  const handleSelectItem = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    name: string,
    index: number
  ) => {
    e.stopPropagation();
    onHandleSelectedItem(name, index);
  };

  useEffect(() => {
    let results = renderFilterNutrients.map((item, index) => {
      if (renderFilterNutrients[index].name === selectedNutrient.name) {
        const checked = item.subItems.some((i) => i.checked === true);
        let newItem = { ...item, checked: checked };
        return newItem;
      } else {
        return item;
      }
    });
    setFilterNutrient(results);
  }, [selectedNutrient]);

  useEffect(() => {
    const checkedNutrients = renderFilterNutrients
      .copyWithin(0, renderFilterNutrients.length)
      .map((item) => {
        if (item.checked) {
          return {
            ...item,
            subItems: item.subItems.filter((item2, index) => {
              if (item2.checked === true) {
                return item2;
              }
            }),
          };
        }
      })
      .filter((item) => item !== undefined) as SearchNutritionFilterItem[];
    if (checkedNutrients) {
      setFirstSelectedItem({
        name: checkedNutrients[0]?.name,
        length: checkedNutrients.length,
      });
    }
    onSelectNutritionFilterItem(checkedNutrients);
  }, [filteredNutrient]);

  const handleMainViewMore = () => {
    if (viewMore.main === renderFilterNutrients.length) {
      setViewMore({ ...viewMore, main: 5 });
    } else setViewMore({ ...viewMore, main: renderFilterNutrients.length });
  };
  const handleSubViewMore = (sub: SearchNutritionFilterItem) => {
    if (viewMore.sub === sub.subItems.length) {
      setViewMore({ ...viewMore, sub: 4 });
    } else setViewMore({ ...viewMore, sub: sub.subItems.length });
  };

  const onClearSelectedItem = () => {
    onSelectNutritionFilterItem([]);
    setFirstSelectedItem({ name: "", length: 0 });
    const clearNutrients: SearchNutritionFilterItem[] = [...nutritionFilterItems].map((item) => {
      return {
        name: item.name,
        checked: false,
        subItems: item.subItems.map((item2) => {
          return {
            name: item2.name,
            checked: false,
          };
        }),
      };
    });
    setFilterNutrient(clearNutrients);
  };

  return (
    <Box sx={{ position: "relative" }}>
      {isDropdown && (
        <Button
          variant={firstSelectedItem.name ? "text" : "outlined"}
          onClick={() => setOpen(!open)}
          sx={{
            backgroundColor: firstSelectedItem.name
              ? theme.palette.primary.light
              : theme.palette.background.default,
            borderColor: firstSelectedItem.name
              ? theme.palette.primary.main
              : theme.palette.grey[700],
            lineHeight: theme.spacing(2),
            letterSpacing: theme.spacing(0.05),
            textTransform: "capitalize",
            whiteSpace: "nowrap",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: theme.spacing(1),
          }}
        >
          <Typography
            variant="labelLarge"
            sx={{
              fontWeight: theme.typography.fontWeightRegular,
              color: theme.palette.customGray.textDark,
            }}
          >
            {firstSelectedItem.name
              ? `${firstSelectedItem.name} ${firstSelectedItem.length <= 1 ? "" : "+1"} `
              : "Nutrients"}
          </Typography>
          {open ? (
            <ArrowDropUpIcon sx={{ color: theme.palette.customGray.textDark }} />
          ) : (
            <ArrowDropDownIcon sx={{ color: theme.palette.customGray.textDark }} />
          )}
        </Button>
      )}
      {(open || !isDropdown) && (
        <Box
          component="div"
          sx={isDropdown ? withDropdown(theme, { mobile, margin }) : withoutDropdown(theme)}
          boxShadow={isDropdown ? 1 : 0}
        >
          <Box
            sx={{
              paddingLeft: theme.spacing(1),
              paddingRight: theme.spacing(1.4),
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
                mt: theme.spacing(0.5),
                mb: theme.spacing(1.5),
              }}
            >
              <Typography
                variant="labelMedium"
                sx={{
                  color: theme.palette.customGray.textDark,
                  fontWeight: theme.typography.fontWeightRegular,
                  textTransform: "uppercase",
                }}
              >
                NUTRIENTS
              </Typography>
              {isDropdown && (
                <CloseIcon
                  sx={{
                    width: theme.spacing(2),
                    height: theme.spacing(2),
                    cursor: "pointer",
                    color: theme.palette.customGray.main,
                  }}
                  onClick={() => setOpen(false)}
                />
              )}
            </Box>
            <Box
              sx={{
                borderRadius: theme.spacing(3),
              }}
            >
              <TextField
                size="small"
                sx={{
                  width: "100%",
                  marginTop: theme.spacing(1.7),
                  color: theme.palette.customGray.textLight,
                  fontSize: theme.typography.titleSmall.fontSize,
                }}
                fullWidth
                name="name"
                value={name}
                placeholder="Search for nutrients"
                onChange={handleChange}
                InputProps={{
                  style: { borderRadius: theme.spacing(1) },
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchOutlined
                        sx={{
                          width: theme.spacing(3),
                          height: theme.spacing(3),
                          cursor: "pointer",
                          color: theme.palette.customGray.textDark,
                        }}
                      />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <Box>
                        {name ? (
                          <CloseIcon sx={{ cursor: "pointer" }} onClick={() => setName("")} />
                        ) : null}
                      </Box>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>
          <Box>
            {renderFilterNutrients.length ? (
              <ForLoops each={renderFilterNutrients.slice(0, viewMore.main)}>
                {(item, index) => {
                  return (
                    <Accordion
                      expanded={true}
                      disableGutters={true}
                      sx={{
                        boxShadow: "none",
                        boxSizing: "border-box",
                        "&:before": {
                          display: "none",
                        },
                        "& > .MuiAccordionSummary-root": {
                          padding: 0,
                        },
                        mt: theme.spacing(-3),
                      }}
                      key={index}
                    >
                      <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Checkbox
                            color="primary"
                            checked={item.checked}
                            onClick={(event) => handleSelectItem(event, item.name, index)}
                            checkedIcon={
                              item.subItems.every((item3) => item3.checked === true) ? (
                                <CheckBoxIcon color="primary" sx={{ width: theme.spacing(3) }} />
                              ) : (
                                <IndeterminateCheckBoxIcon
                                  color="primary"
                                  sx={{ width: theme.spacing(3) }}
                                />
                              )
                            }
                          />

                          <Typography
                            variant="bodyMedium"
                            sx={{
                              fontWeight: theme.typography.fontWeightLight,
                              color: theme.palette.customGray.textDark,
                            }}
                          >
                            {item.name}
                          </Typography>
                        </Box>
                      </AccordionSummary>
                      <AccordionDetails sx={{ mt: theme.spacing(-2) }}>
                        <ForLoops each={item.subItems}>
                          {(item2, index2) => {
                            return (
                              <Box
                                sx={{ display: "flex", alignItems: "center" }}
                                key={index2}
                                onClick={() => onSelectSubItem(item.name, item2.name)}
                              >
                                <Checkbox color="primary" checked={item2.checked} />
                                <Typography
                                  variant="bodyMedium"
                                  sx={{
                                    fontWeight: theme.typography.fontWeightLight,
                                    color: theme.palette.customGray.textDark,
                                  }}
                                >
                                  {item2.name}
                                </Typography>
                              </Box>
                            );
                          }}
                        </ForLoops>
                        <Box sx={{ ml: theme.spacing(-1), display: "none" }}>
                          {item.subItems.length > 4 && (
                            <Box>
                              {viewMore.sub === item.subItems.length ? (
                                <ViewMoreButton
                                  handleViewMore={() => handleSubViewMore(item)}
                                  text="View less"
                                />
                              ) : (
                                <ViewMoreButton handleViewMore={() => handleSubViewMore(item)} />
                              )}
                            </Box>
                          )}
                        </Box>
                      </AccordionDetails>
                    </Accordion>
                  );
                }}
              </ForLoops>
            ) : (
              <Box sx={{ textAlign: "center", mt: theme.spacing(2.5) }}>
                <Typography
                  sx={{
                    textTransform: "capitalize",
                    color: theme.palette.grey[600],
                    letterSpacing: theme.spacing(0.0125),
                  }}
                >
                  No matching nutrient found
                </Typography>
              </Box>
            )}
            <Box sx={{ mt: theme.spacing(-2.5), ml: theme.spacing(-1), display: "none" }}>
              {renderFilterNutrients.length > 5 && (
                <Box>
                  {viewMore.main === renderFilterNutrients.length ? (
                    <ViewMoreButton handleViewMore={handleMainViewMore} text="View less" />
                  ) : (
                    <ViewMoreButton handleViewMore={handleMainViewMore} />
                  )}
                </Box>
              )}
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              my: theme.spacing(2),
            }}
          >
            <Typography
              variant="labelMedium"
              sx={{
                fontWeight: theme.typography.fontWeightRegular,
                cursor: "pointer",
                color: firstSelectedItem.name
                  ? theme.palette.primary.main
                  : theme.palette.customGray.textDark,
              }}
              onClick={onClearSelectedItem}
            >
              Clear selection
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default SearchNutritionFilter;
