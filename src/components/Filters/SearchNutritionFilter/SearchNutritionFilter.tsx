import { SearchOutlined } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Checkbox,
  InputAdornment,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import DoneIcon from "@mui/icons-material/Done";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClearIcon from "@mui/icons-material/Clear";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { ForLoops } from "@forkfacts/helpers";
import { SearchNutritionFilterProps, SelectedNutrient } from "@forkfacts/models";
import { withDropdown, withoutDropdown } from "./searchNutrientStyles";
import { useStore } from "../../../store/store";

const SearchNutritionFilter: React.FC<SearchNutritionFilterProps> = ({
  nutritionFilterItems,
  isDropdown,
  margin = 0,
  displayListIcon,
}) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const newNutrients: SelectedNutrient[] = [...nutritionFilterItems].map((item) => {
    return {
      name: item.name,
      checked: item.checked,
      nutrientGroup: item.nutrientGroup,
      rows: item?.rows?.map((item2) => {
        return {
          ...item2,
          name: item2.name,
          checked: item2.checked,
          nutrientGroup: item2.nutrientGroup,
        };
      }),
    };
  });
  const [filteredNutrient, setFilterNutrient] = useState([...newNutrients]);
  const [selectedNutrientName, setSelectedNutrientName] = useState({
    name: "",
  });
  const [selectedItems, _] = useState<SelectedNutrient[]>([]);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState<string>("");
  const { setSelectedNutrient, selectedNutrients } = useStore((state) => state);

  const renderFilterNutrients = useCallback((): SelectedNutrient[] => {
    let filteredItems = [...filteredNutrient].slice();
    if (name && name !== "") {
      filteredItems = filteredItems.reduce((acc: any, item: any) => {
        const subSearch = item?.rows?.filter((subItem: any) =>
          subItem?.name.toLowerCase().includes(name.toLowerCase())
        );
        if (item.name.toLowerCase().includes(name.toLowerCase()) || subSearch?.length > 0) {
          const newItem = {
            name: item.name,
            checked: item.checked,
            rows: subSearch,
          };
          acc.push(newItem);
        }
        return acc;
      }, []);
    }

    return filteredItems;
  }, [name, filteredNutrient, selectedItems, selectedNutrientName, selectedNutrientName]);

  const onHandleSelectedItem = useCallback(
    (name: string) => {
      const itemIndex = filteredNutrient.findIndex((item) => item.name === name);
      if (itemIndex !== -1) {
        const updatedItem = {
          ...filteredNutrient[itemIndex],
          checked: !filteredNutrient[itemIndex].checked,
          rows: filteredNutrient[itemIndex]?.rows?.map((subItem) => ({
            ...subItem,
            checked: !filteredNutrient[itemIndex]?.checked,
          })),
        };
        const updatedNutrientList = Array.from(filteredNutrient);
        updatedNutrientList.splice(itemIndex, 1, updatedItem);
        setFilterNutrient(updatedNutrientList);
      }
    },
    [filteredNutrient]
  );
  const onSelectSubItem = (name1: string, name2: string) => {
    setSelectedNutrientName({
      name: name1,
    });
    const updatedNutrients = filteredNutrient.map((nutrient) => {
      if (nutrient.name === name1) {
        const updatedrows: any = nutrient?.rows?.map((subItem) => {
          if (subItem?.name === name2) {
            return { ...subItem, checked: !subItem?.checked };
          }
          return subItem;
        });
        return {
          ...nutrient,
          rows: updatedrows,
          checked: updatedrows?.some((si: any) => si?.checked!),
        };
      }
      return nutrient;
    });
    setFilterNutrient(updatedNutrients);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);

  const handleSelectItem = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, name: string) => {
    e.stopPropagation();
    onHandleSelectedItem(name);
  };

  useEffect(() => {
    const checkedNutrients = renderFilterNutrients()
      .copyWithin(0, renderFilterNutrients.length)
      .map((item) => {
        if (item.checked) {
          return {
            ...item,
            rows: item?.rows?.filter((item2) => {
              if (item2.checked) {
                return item2;
              }
            }),
          };
        }
      })
      .filter((item) => item !== undefined) as SelectedNutrient[];
    setSelectedNutrient(checkedNutrients);
  }, [filteredNutrient]);

  const onClearSelectedItem = () => {
    setSelectedNutrient([]);
    const clearNutrients: SelectedNutrient[] = [...nutritionFilterItems].map((item) => {
      return {
        name: item.name,
        checked: false,
        nutrientGroup: item.nutrientGroup,
        rows: item?.rows?.map((item2) => {
          return {
            ...item2,
            name: item2.name,
            checked: false,
          };
        }),
      };
    });
    setFilterNutrient(clearNutrients);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  useEffect(() => {
    if (open) {
      if (inputRef.current) inputRef.current.focus();
    }
  }, [open]);

  return (
    <Box sx={{ display: "block" }} ref={ref}>
      {isDropdown && (
        <>
          {displayListIcon ? (
            <Button
              startIcon={<FilterListIcon />}
              endIcon={
                selectedNutrients.length ? <ClearIcon onClick={onClearSelectedItem} /> : null
              }
              variant="outlined"
              color="primary"
              onClick={() => setOpen(!open)}
              sx={{
                fontSize: mobile
                  ? theme.typography.labelSmall.fontSize
                  : theme.typography.labelLarge.fontSize,
                fontWeight: theme.typography.fontWeightRegular,
                lineHeight: "20px",
                py: mobile ? theme.spacing(1) : theme.spacing(1.25),
                pr: mobile ? theme.spacing(1.5) : theme.spacing(3),
                pl: mobile ? theme.spacing(1) : theme.spacing(2),
              }}
            >
              Filter nutrients
            </Button>
          ) : (
            <Button
              variant={selectedNutrients[0]?.name ? "text" : "outlined"}
              onClick={() => setOpen(!open)}
              sx={{
                backgroundColor: selectedNutrients[0]?.name
                  ? theme.palette.primary.light
                  : theme.palette.background.default,
                borderColor: selectedNutrients[0]?.name
                  ? theme.palette.primary.main
                  : theme.palette.grey[700],
                textTransform: "capitalize",
                whiteSpace: "nowrap",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: theme.spacing(1),
              }}
            >
              <Typography
                variant={mobile ? "labelMedium" : "labelLarge"}
                sx={{
                  fontWeight: theme.typography.fontWeightRegular,
                  color: theme.palette.customGray.textDark,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {selectedNutrients.length && selectedNutrients[0].name ? (
                  <DoneIcon
                    sx={{
                      color: theme.palette.iconColors.main,
                      width: theme.spacing(2.25),
                      height: theme.spacing(2.25),
                      mr: theme.spacing(0.5),
                    }}
                  />
                ) : null}
                {selectedNutrients[0]?.name
                  ? `${selectedNutrients[0]?.name} ${
                      selectedNutrients?.length < 2 ? "" : `+${selectedNutrients.length - 1}`
                    }`
                  : "Nutrients"}
              </Typography>
              {open ? (
                <ArrowDropUpIcon sx={{ color: theme.palette.iconColors.main }} />
              ) : (
                <ArrowDropDownIcon sx={{ color: theme.palette.iconColors.main }} />
              )}
            </Button>
          )}
        </>
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
                fullWidth
                name="name"
                value={name}
                placeholder="Search for nutrients"
                onChange={handleChange}
                inputRef={inputRef} // Set the inputRef to focus the input field
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchOutlined />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      {name && <CloseIcon sx={{ cursor: "pointer" }} onClick={() => setName("")} />}
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              maxHeight: "500px",
              overflowY: "auto",
              zIndex: theme.zIndex.modal,
              "&::-webkit-scrollbar": {
                width: "8px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: isDropdown ? theme.palette.customGray.textLight : "",
              },
            }}
          >
            {renderFilterNutrients()?.length ? (
              <ForLoops each={renderFilterNutrients()}>
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
                      <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        sx={{ cursor: "default" }}
                        onClick={(event) => handleSelectItem(event, item.name)}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            cursor: "pointer",
                            width: "100%",
                          }}
                        >
                          <Checkbox
                            color="primary"
                            checked={item.checked}
                            checkedIcon={
                              item?.rows?.every((item3) => item3.checked === true) ? (
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
                            {!item.displayName ? item.name : item.displayName}
                          </Typography>
                        </Box>
                      </AccordionSummary>
                      <AccordionDetails sx={{ mt: theme.spacing(-2), cursor: "default" }}>
                        {item.rows && (
                          <ForLoops each={item.rows}>
                            {(item2, index2) => {
                              return (
                                <Box
                                  sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
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
                                    {!item2.displayName ? item2.name : item2.displayName}
                                  </Typography>
                                </Box>
                              );
                            }}
                          </ForLoops>
                        )}
                      </AccordionDetails>
                    </Accordion>
                  );
                }}
              </ForLoops>
            ) : (
              <Box sx={{ textAlign: "center", mt: theme.spacing(2.5) }}>
                <Typography
                  variant="labelMedium"
                  sx={{
                    textTransform: "capitalize",
                    color: theme.palette.customGray.main,
                  }}
                >
                  No matching nutrient found
                </Typography>
              </Box>
            )}
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              my: theme.spacing(2),
              pr: theme.spacing(1.5),
            }}
          >
            <Typography
              variant="labelMedium"
              sx={{
                fontWeight: theme.typography.fontWeightRegular,
                cursor: "pointer",
                color: selectedNutrients.length
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
