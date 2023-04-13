import React, { useEffect, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { RecommendedDailyIntake } from "@forkfacts/screens";
import { RdiAge } from "@forkfacts/models";
import { getAgeRangesForLifeStage, setSelectedAgeByGender } from "@forkfacts/helpers";
import { rdiAges, lifeStageItems, menuItems } from "../../../RealData/realData";

export default {
  title: "Screens/Tools/RecommendedDailyIntake",
  component: RecommendedDailyIntake,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof RecommendedDailyIntake>;

const Template: ComponentStory<typeof RecommendedDailyIntake> = (args) => {
  const [selectedAge, setSelectedAge] = useState<RdiAge>({} as RdiAge);
  const [selectedGender, setSelectedGender] = useState("");
  useEffect(() => {
    setSelectedAgeByGender(selectedGender, setSelectedAge);
  }, [selectedGender, setSelectedAge]);

  const ageRanges = getAgeRangesForLifeStage(selectedGender);
  return (
    <RecommendedDailyIntake
      {...args}
      setSelectedAge={setSelectedAge}
      selectedAge={selectedAge}
      selectedGender={selectedGender}
      setSelectedGender={setSelectedGender}
      ages={selectedGender ? ageRanges : rdiAges}
    />
  );
};
export const Desktop = Template.bind({});
Desktop.args = {
  genders: lifeStageItems,
  menuItems,
};
export const Mobile = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphonexr",
  },
};
Mobile.args = {
  genders: lifeStageItems,
  menuItems,
};
export const Tablet = Template.bind({});
Tablet.args = {
  menuItems,
  genders: lifeStageItems,
};
Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
};
