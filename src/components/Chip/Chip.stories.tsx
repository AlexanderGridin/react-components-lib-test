import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Chip } from "./Chip";

export default {
	name: "Chip",
	component: Chip,
	args: {
		children: "Chip text",
	},
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const Default = Template.bind({});
Default.args = {};
