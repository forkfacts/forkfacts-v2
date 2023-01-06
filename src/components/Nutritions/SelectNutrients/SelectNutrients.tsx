import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { ForLoops } from "@forkfacts/helpers";
import { Box, Typography, useTheme } from "@mui/material";
import { SelectNutrientsProps, filterItem } from "@forkfacts/models";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

type NutrientType = {
  checked: boolean;
} & filterItem;

const SelectNutrients: React.FC<SelectNutrientsProps> = ({
  allNutrients,
  getSelectedNutrients,
}) => {
  const theme = useTheme();
  const [open, setIsOpen] = useState(false);

  const newNutrients: NutrientType[] = [...allNutrients].map((item) => {
    return {
      name: item.name,
      checked: false,
      amount: item.amount,
    };
  });
  const [selectedNutrients, setSelectNutrients] = useState<NutrientType[]>([...newNutrients]);

  const onSelectButtonItem = (name: string, index: number) => {
    let results = selectedNutrients.map((item, index) => {
      if (item.name === name) {
        if (!item.checked) {
          let newItem = { ...item, name, checked: true };
          return newItem;
        } else {
          let newItem = { ...item, name, checked: false };
          return newItem;
        }
      } else {
        return item;
      }
    });
    return setSelectNutrients(results);
  };

  const onSelectAll = () => {
    const checkedNutrients = selectedNutrients.map((item) => {
      return {
        ...item,
        checked: true,
      };
    });
    setSelectNutrients(checkedNutrients);
  };

  const onDoneFilter = () => {
    const checkedNutrients = selectedNutrients.filter((item) => {
      if (item.checked) {
        return {
          ...item,
          checked: true,
        };
      }
    });
    if (checkedNutrients.length) {
      getSelectedNutrients(
        checkedNutrients.map((item) => {
          return item?.name as string;
        })
      );
    } else {
      getSelectedNutrients([]);
    }
    setIsOpen(false);
  };

  return (
    <Box sx={{ cursor: "pointer", position: "relative", zIndex: theme.zIndex.modal }}>
      <Typography
        sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}
        onClick={() => setIsOpen(!open)}
      >
        <Typography
          component="span"
          color="primary"
          sx={{
            fontSize: theme.typography.htmlFontSize,
            fontWeight: theme.typography.fontWeightBold,
            lineHeight: theme.spacing(3),
            letterSpacing: theme.spacing(0.05),
          }}
        >
          All Nutrients
        </Typography>
        {open ? <KeyboardArrowUpIcon color="primary" /> : <KeyboardArrowDownIcon color="primary" />}
      </Typography>
      {open && (
        <Box
          component="div"
          sx={{
            position: "absolute",
            width: "100%",
            display: "block",
            minWidth: 260,
            mt: theme.spacing(1.1),
            paddingTop: theme.spacing(1.25),
            paddingLeft: theme.spacing(1.25),
            paddingRight: theme.spacing(4.375),
            zIndex: theme.zIndex.modal,
            backgroundColor: theme.palette.common.white,
          }}
          boxShadow={1}
        >
          <Box>
            <Typography
              variant="caption"
              sx={{
                color: theme.palette.grey[600],
                fontWeight: theme.typography.fontWeightRegular,
                lineHeight: theme.spacing(2),
                letterSpacing: theme.spacing(0.05),
              }}
            >
              NUTRIENTS
            </Typography>
          </Box>
          <Box
            component="ul"
            sx={{
              width: "100%",
              display: "flex",
              justifyItems: "flex-start",
              alignItems: "center",
              listStyle: "none",
              flexDirection: "column",
            }}
          >
            <ForLoops each={selectedNutrients}>
              {(item, index) => (
                <Box
                  component="li"
                  key={index}
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mr: theme.spacing(12),
                  }}
                  onClick={() => onSelectButtonItem(item.name, index)}
                >
                  <Box>
                    <Checkbox checked={item.checked} color="primary" />
                    <Typography
                      component="span"
                      sx={{
                        fontSize: theme.typography.caption.fontSize,
                        color: theme.palette.common.black,
                        fontWeight: theme.typography.fontWeightBold,
                        lineHeight: theme.spacing(2),
                        letterSpacing: theme.spacing(0.05),
                      }}
                    >
                      {item.name}
                    </Typography>
                  </Box>
                  <Typography
                    component="span"
                    sx={{
                      mr: theme.spacing(-7),
                    }}
                  >
                    {item.amount > 0 ? item.amount : null}
                  </Typography>
                </Box>
              )}
            </ForLoops>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mr: theme.spacing(9),
                mt: theme.spacing(5),
              }}
            >
              <Box>
                <Typography color="primary" onClick={onSelectAll}>
                  Select All
                </Typography>
              </Box>
              <Box
                color="primary"
                sx={{
                  mr: theme.spacing(-7),
                }}
              >
                <Typography color="primary" onClick={onDoneFilter}>
                  Done
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default SelectNutrients;
