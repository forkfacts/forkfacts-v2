import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { Box, Typography, useTheme } from "@mui/material";
import { AllNutrientSelectsProps } from "@forkfacts/models";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const AllNutrientSelects: React.FC<AllNutrientSelectsProps> = ({
  allNutrients,
  getSelectedNutrients,
}) => {
  const theme = useTheme();
  const [open, setIsOpen] = useState(false);

  const newNutrients: { name: string; checked: boolean }[] = [...allNutrients].map((item) => {
    return {
      name: item,
      checked: false,
    };
  });
  const [selectedNutrients, setSelectNutrients] = useState<{ name: string; checked: boolean }[]>([
    ...newNutrients,
  ]);

  const onSelectButtonItem = (name: string, index: number) => {
    let checked;
    let results = selectedNutrients.map((item, index) => {
      if (item.name === name) {
        checked = true;
        if (item.checked === false) {
          let newItem = { ...item, name, checked: checked };
          return newItem;
        } else {
          checked = false;
          let newItem = { ...item, name, checked: checked };
          return newItem;
        }
      } else {
        return item;
      }
    });
    return setSelectNutrients(results);
  };

  const onSelectAll = () => {
    const checkedAll = selectedNutrients.map((item) => {
      return {
        ...item,
        checked: true,
      };
    });
    setSelectNutrients(checkedAll);
  };

  const onDoneFilter = () => {
    const checkedAll = selectedNutrients.filter((school) => {
      if (school.checked === true) {
        return {
          ...school,
          checked: true,
        };
      }
    });
    if (checkedAll.length) {
      getSelectedNutrients(
        checkedAll.map((item) => {
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
          sx={{ fontSize: theme.typography.caption.fontSize }}
        >
          All nutrients
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
            <Typography variant="caption">NUTRIENTS</Typography>
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
            {selectedNutrients.map((item, index) => (
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
                  <Checkbox checked={item.checked} color="success" />
                  <Typography component="span" sx={{ fontSize: theme.typography.caption.fontSize }}>
                    {item.name}
                  </Typography>
                </Box>
                <Typography
                  component="span"
                  sx={{
                    mr: theme.spacing(-7),
                  }}
                >
                  {index > 3 ? index : null}
                </Typography>
              </Box>
            ))}
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mr: theme.spacing(10),
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

export default AllNutrientSelects;
