import React from "react";
import { ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import SEO from "./Seo";
import { siteMetadataProps } from "../../models";

export default {
  title: "Components/SEO",
  component: SEO,
} as ComponentMeta<typeof SEO>;

const Template = (args: siteMetadataProps) => <SEO {...args} />;

export const Default = Template.bind({});
