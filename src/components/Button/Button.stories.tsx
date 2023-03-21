import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Button } from "./Button";

export default {
	title: "Button",
	component: Button,
	args: {
		children: "Library Button",
		onClick: action("onClick"),
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {};
