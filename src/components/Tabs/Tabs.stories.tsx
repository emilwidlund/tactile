import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Tabs, TabsTrigger } from "./Tabs";

const meta: Meta<typeof TabsTrigger> = {
	component: TabsTrigger,
	render: (props) => <Tabs value="hello">{props.children}</Tabs>,
};

export default meta;

type Story = StoryObj<typeof TabsTrigger>;

export const Primary: Story = {
	args: {
		children: "Hello",
		value: "hello",
	},
};
