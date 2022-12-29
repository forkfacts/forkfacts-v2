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
      checked: false,
      subItems: item.subItems.map((item2) => {
        return {
          name: item2.name,
          checked: false,
        };
      }),
    };
  });
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [filteredNutrient, setFilterNutrient] = useState(newNutrients);
  const [selectedNutrient, setSelectedNutrient] = useState({
    name: "",
  });
  const [name, setName] = useState<string>("");
  const handleAccordion =
    (panel: string, item: SearchNutritionFilterItem) =>
    (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded && item.subItems?.length ? panel : false);
    };

  const renderFilterNutrients: SearchNutritionFilterItem[] = filteredNutrient.filter((item) => {
    if (item.name.toLowerCase().includes(name.toLowerCase())) {
      return item;
    }
    return null;
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

    onSelectNutritionFilterItem(checkedNutrients);
  }, [filteredNutrient]);

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
        <ForLoops each={renderFilterNutrients}>
          {(item, index) => {
            return (
              <Accordion
                expanded={expanded === `panel${index + 1}`}
                onChange={handleAccordion(`panel${index + 1}`, item)}
                disableGutters={true}
                sx={{
                  boxShadow: "none",
                  boxSizing: "border-box",
                  borderBo: "none !important",
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
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Checkbox
                      color="success"
                      checked={item.checked}
                      onClick={(event) => handleSelectItem(event, item.name, index)}
                    />
                    <Typography variant="body1">{item.name}</Typography>
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
                          <Checkbox color="success" checked={item2.checked} />
                          <Typography variant="body1">{item2.name}</Typography>
                        </Box>
                      );
                    }}
                  </ForLoops>
                </AccordionDetails>
              </Accordion>
            );
          }}
        </ForLoops>
      </Box>
    </Box>
  );
};

export default SearchNutritionFilter;
