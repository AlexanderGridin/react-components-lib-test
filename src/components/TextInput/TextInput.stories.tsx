import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { TextInput } from "./TextInput";

export default {
	name: "Text Input",
	component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => (
	<TextInput {...args} />
);

export const Default = Template.bind({});
Default.args = {};
