import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import { MultipleSelects } from "@forkfacts/components";
import { filterItem } from "@forkfacts/models";
import { Box, Button } from "@mui/material";

export default {
  title: "Components/MultipleSelects/MultipleSelects",
  component: MultipleSelects,
} as ComponentMeta<typeof MultipleSelects>;

const multipleSelectItems: filterItem[] = [
  {
    name: "Beta Carotene (mg)",
  },
  {
    name: "Collards",
  },
  {
    name: "Dandelion greens",
  },
  {
    name: "Kale",
  },
  {
    name: "Mustard greens",
  },
  {
    name: "Swiss chard",
  },
  {
    name: "Tumip greens",
  },
];

const Template: ComponentStory<typeof MultipleSelects> = (args) => {
  const [_, setSelectedNutrients] = useState<string[]>([]);
  const [open, setIsOpen] = useState(false);
  return (
    <Box sx={{ width: "70%", m: "auto" }}>
      <MultipleSelects
        {...args}
        getSelectedNutrients={setSelectedNutrients}
        open={open}
        setIsOpen={setIsOpen}
        multiselectTitle="Filter foods"
        renderSelectButton={
          <Button
            startIcon={<FilterListOutlinedIcon />}
            variant="outlined"
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              borderRadius: "10px",
            }}
            onClick={() => setIsOpen(!open)}
          >
            Filter foods
          </Button>
        }
      />
    </Box>
  );
};

export const Main = Template.bind({});
Main.args = {
  ...Main.args,
  multipleSelectItems: multipleSelectItems,
};

Main.storyName = "MultipleSelects";
