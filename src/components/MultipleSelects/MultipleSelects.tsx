import React, { useEffect, useRef, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { ForLoops } from "@forkfacts/helpers";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { MultipleSelectsProps, filterItem } from "@forkfacts/models";
import CloseIcon from "@mui/icons-material/Close";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
type NutrientType = {
  checked: boolean;
} & filterItem;

const MultipleSelects: React.FC<MultipleSelectsProps> = ({
  values,
  onSelectedValue,
  multiselectTitle,
  margin = 0,
  getSelectedNutrients,
}) => {
  const theme = useTheme();
  const ref = useRef<HTMLDivElement>(null);
  let newNutrients: NutrientType[] = [];
  const [open, setIsOpen] = useState(false);
  if (values?.length) {
    newNutrients = [...values]?.map((item) => {
      return {
        name: item.name,
        checked: false,
      };
    });
  }
  const [selectedNutrients, setSelectNutrients] = useState<NutrientType[]>([...newNutrients]);
  const [isSelectedLength, setIsSelectedLength] = useState<number>(0);
  const onSelectButtonItem = (name: string, index: number) => {
    let results = selectedNutrients?.map((item, index) => {
      if (item.name === name) {
        if (!item.checked) {
          let newItem = { ...item, name, checked: true };
          return newItem;
        } else {
          let newItem: NutrientType = { ...item, name, checked: false };
          return newItem;
        }
      } else {
        return item;
      }
    });
    setIsOpen(true);
    return setSelectNutrients(results);
  };

  const onSelectAll = () => {
    const checkedNutrients = selectedNutrients?.map((item) => {
      return {
        ...item,
        checked: true,
      };
    });
    setSelectNutrients(checkedNutrients);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  useEffect(() => {
    const selectedItems = selectedNutrients.filter((item) => item.checked === true);
    onSelectedValue(selectedItems);
    setIsSelectedLength(selectedItems.length);
  }, [selectedNutrients]);

  return (
    <Box sx={{ display: "block", zIndex: theme.zIndex.appBar }} ref={ref}>
      <Button
        sx={{
          py: "4px",
          pl: "12px",
          pr: "16px",
          color: theme.palette.primary.light,
          backgroundColor: isSelectedLength ? theme.palette.primary.light : "#fff",
        }}
      >
        <FilterListOutlinedIcon
          color="primary"
          onClick={() => {
            setIsOpen(!open);
            onSelectedValue([]);
          }}
        />
        {isSelectedLength ? (
          <Typography
            color="primary"
            variant="labelLarge"
            sx={{ ml: theme.spacing(1), fontWeight: theme.typography.fontWeightRegular }}
          >
            {isSelectedLength}
          </Typography>
        ) : null}
      </Button>
      {open && (
        <Box
          component="div"
          sx={{
            position: "absolute",
            width: "100%",
            display: "block",
            minWidth: 270,
            maxWidth: "100%",
            mt: theme.spacing(1.1),
            paddingTop: theme.spacing(2),
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            zIndex: theme.zIndex.appBar,
            backgroundColor: theme.palette.common.white,
            ml: margin ? margin : theme.spacing(-17.5),
            borderRadius: theme.spacing(1),
          }}
          boxShadow={1}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
              mt: theme.spacing(1),
            }}
          >
            <Typography
              variant="bodySmall"
              sx={{
                fontWeight: theme.typography.fontWeightRegular,
                textTransform: "uppercase",
                color: theme.palette.customGray.textDark,
              }}
            >
              {multiselectTitle}
            </Typography>
            <CloseIcon
              sx={{ width: theme.spacing(2), height: theme.spacing(2) }}
              onClick={() => {
                setIsOpen(false);
              }}
            />
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
              maxHeight: "480px",
              overflowY: "auto",
              overflowX: "hidden",
              "&::-webkit-scrollbar": {
                width: "8px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: theme.palette.customGray.textLight,
              },
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
                    justifyContent: "flex-start",
                    alignItems: "center",
                    mr: theme.spacing(12),
                  }}
                  onClick={() => onSelectButtonItem(item.name, index)}
                >
                  <Box>
                    <Checkbox checked={item.checked} color="primary" />
                    <Typography
                      variant="bodyMedium"
                      sx={{
                        color: theme.palette.customGray.main,
                        fontWeight: theme.typography.fontWeightLight,
                      }}
                    >
                      {item.name}
                    </Typography>
                  </Box>
                </Box>
              )}
            </ForLoops>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                mt: theme.spacing(2),
              }}
            >
              <Typography
                color="primary"
                variant="labelLarge"
                onClick={onSelectAll}
                sx={{
                  fontWeight: theme.typography.fontWeightRegular,
                }}
              >
                Select All
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default MultipleSelects;
