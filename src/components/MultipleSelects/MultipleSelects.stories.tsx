import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import { MultipleSelects } from "@forkfacts/components";
import { filterItem } from "@forkfacts/models";
import { Box, Button, useTheme } from "@mui/material";

export default {
  title: "Components/MultipleSelects/MultipleSelects",
  component: MultipleSelects,
} as ComponentMeta<typeof MultipleSelects>;

const values: filterItem[] = [
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
  const theme = useTheme();
  return (
    <Box sx={{ width: "70%", m: "auto" }}>
      <MultipleSelects
        {...args}
        onSelectedValue={setSelectedNutrients}
        open={open}
        setIsOpen={setIsOpen}
        multiselectTitle="Filter foods"
        RenderSelectButton={
          <Button
            startIcon={<FilterListOutlinedIcon />}
            variant="outlined"
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              borderRadius: "10px",
              fontWeight: theme.typography.fontWeightRegular,
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
  values: values,
};

Main.storyName = "MultipleSelects";
