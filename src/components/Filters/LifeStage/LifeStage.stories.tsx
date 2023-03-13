import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { LifeStage } from "@forkfacts/components";
import { lifeStageItem } from "@forkfacts/models";
import { Baby, Kids, Lactation, Male, PregnantWoman, Woman } from "@forkfacts/icons";

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
    icon: Baby,
  },
  {
    name: "Children",
    icon: Kids,
  },
  {
    name: "Male",
    icon: Male,
  },
  {
    name: "Female",
    icon: Woman,
  },
  {
    name: "Pregnant",
    icon: PregnantWoman,
  },
  {
    name: "Lactation",
    icon: Lactation,
  },
];

export const Desktop = Template.bind({});

Desktop.args = {
  lifeStageItems: lifeStageItems,
};
