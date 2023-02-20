import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { LifeStage } from "@forkfacts/components";
import ChildCareOutlinedIcon from "@mui/icons-material/ChildCareOutlined";
import EscalatorWarningOutlinedIcon from "@mui/icons-material/EscalatorWarningOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import PregnantWomanOutlinedIcon from "@mui/icons-material/PregnantWomanOutlined";
import { lifeStageItem } from "@forkfacts/models";

export default {
  title: "Components/Filters/LifeStage",
  component: LifeStage,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof LifeStage>;

const Template: ComponentStory<typeof LifeStage> = (args) => {
  const [_, setSelectedLifeStage] = useState("");
  return <LifeStage {...args} onSelectLifeStageItem={setSelectedLifeStage} />;
};
const lifeStageItems: lifeStageItem[] = [
  {
    name: "Infant",
    icon: ChildCareOutlinedIcon,
  },
  {
    name: "Children",
    icon: EscalatorWarningOutlinedIcon,
  },
  {
    name: "Male",
    icon: PregnantWomanOutlinedIcon,
  },
  {
    name: "Female",
    icon: EscalatorWarningOutlinedIcon,
  },
  {
    name: "Pregnant",
    icon: PregnantWomanOutlinedIcon,
  },
  {
    name: "Lactation",
    icon: Person2OutlinedIcon,
  },
];

export const Desktop = Template.bind({});

Desktop.args = {
  lifeStageItems: lifeStageItems,
};
