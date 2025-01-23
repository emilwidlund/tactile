import { fn } from "@storybook/test";

import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
	title: "Example/Button",
	component: Button,
	tags: ["autodocs"],
	args: { onClick: fn() },
};

export const Primary = {
	args: {
		label: "Button",
		variant: "primary",
	},
};

export const Secondary = {
	args: {
		label: "Button",
	},
};

export const Large = {
	args: {
		size: "large",
		label: "Button",
	},
};

export const Small = {
	args: {
		size: "small",
		label: "Button",
	},
};
