import { SearchOutlined } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  InputAdornment,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { ViewMoreButton } from "@forkfacts/components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect, useState } from "react";
import { ForLoops } from "@forkfacts/helpers";
import { SearchNutritionFilterProps, SearchNutritionFilterItem } from "@forkfacts/models";

const SearchNutritionFilter: React.FC<SearchNutritionFilterProps> = ({
  nutritionFilterItems,
  onSelectNutritionFilterItem,
}) => {
  const theme = useTheme();
  const newNutrients: SearchNutritionFilterItem[] = [...nutritionFilterItems].map((item) => {
    return {
      name: item.name,
      checked:
        item.name === "Protein" || item.name === "Fats" || item.name === "Carbohydrate"
          ? true
          : false,
      subItems: item.subItems.map((item2) => {
        return {
          name: item2.name,
          checked: item.checked,
        };
      }),
    };
  });
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [filteredNutrient, setFilterNutrient] = useState(newNutrients);
  const [renderFilterNutrients, SetRenderFilterNutrients] = useState([...filteredNutrient]);
  const [selectedNutrient, setSelectedNutrient] = useState({
    name: "",
  });
  const [name, setName] = useState<string>("");
  const [viewMore, setViewMore] = useState({
    main: 5,
    sub: 4,
  });
  const handleAccordion =
    (panel: string, item: SearchNutritionFilterItem) =>
    (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded && item.subItems?.length ? panel : false);
    };

  useEffect(() => {
    const filterNutrients: SearchNutritionFilterItem[] = filteredNutrient.filter((item) => {
      if (!name) return filteredNutrient;
      else if (item.name.toLowerCase().includes(name.toLowerCase())) {
        return item;
      }
    });
    SetRenderFilterNutrients(filterNutrients);
  }, [name]);

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

    onSelectNutritionFilterItem(checkedNutrients);
  }, [filteredNutrient]);

  const handleMainViewMore = () => {
    setViewMore({ ...viewMore, main: renderFilterNutrients.length });
  };
  const handleSubViewMore = (sub: SearchNutritionFilterItem) => {
    setViewMore({ ...viewMore, sub: sub.subItems.length });
  };
  return (
    <Box sx={{ mb: theme.spacing(3) }}>
      <Box
        sx={{
          paddingLeft: theme.spacing(1),
          paddingRight: theme.spacing(1.4),
        }}
      >
        <Typography
          component="span"
          sx={{
            fontSize: theme.typography.htmlFontSize,
            fontWeight: theme.typography.fontWeightBold,
            lineHeight: theme.spacing(3),
          }}
        >
          Nutrients
        </Typography>
        <TextField
          size="small"
          sx={{
            width: "100%",
            marginTop: theme.spacing(1.7),
          }}
          fullWidth
          name="name"
          value={name}
          placeholder="Search for nutrients"
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlined />
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
      <Box sx={{ mt: theme.spacing(5) }}>
        {renderFilterNutrients.length ? (
          <ForLoops each={renderFilterNutrients.slice(0, viewMore.main)}>
            {(item, index) => {
              return (
                <Accordion
                  expanded={expanded === `panel${index + 1}`}
                  onChange={handleAccordion(`panel${index + 1}`, item)}
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
                    mt: theme.spacing(-2),
                  }}
                  key={index}
                >
                  <AccordionSummary
                    expandIcon={item.subItems.length ? <ExpandMoreIcon /> : null}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Checkbox
                        color="primary"
                        checked={item.checked}
                        onClick={(event) => handleSelectItem(event, item.name, index)}
                      />
                      <Typography variant="body1">{item.name}</Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails sx={{ mt: theme.spacing(-2) }}>
                    <ForLoops each={item.subItems.slice(0, viewMore.sub)}>
                      {(item2, index2) => {
                        return (
                          <Box
                            sx={{ display: "flex", alignItems: "center" }}
                            key={index2}
                            onClick={() => onSelectSubItem(item.name, item2.name)}
                          >
                            <Checkbox color="primary" checked={item2.checked} />
                            <Typography variant="body1">{item2.name}</Typography>
                          </Box>
                        );
                      }}
                    </ForLoops>
                    <Box sx={{ ml: theme.spacing(-1) }}>
                      {item.subItems.length > 4 && (
                        <ViewMoreButton handleViewMore={() => handleSubViewMore(item)} />
                      )}
                    </Box>
                  </AccordionDetails>
                </Accordion>
              );
            }}
          </ForLoops>
        ) : (
          <Box>No matching nutrient found</Box>
        )}
        <Box sx={{ mt: theme.spacing(-2.5), ml: theme.spacing(-1) }}>
          {renderFilterNutrients.length > 5 && (
            <ViewMoreButton handleViewMore={handleMainViewMore} />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default SearchNutritionFilter;
