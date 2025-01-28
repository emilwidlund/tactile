import * as React from "react";
import { Tabs as TabsPrimitive } from "radix-ui";
import type { ComponentProps } from "react";

export const Tabs = (props: ComponentProps<typeof TabsPrimitive.Tabs>) => {
	return <TabsPrimitive.Tabs {...props}>{props.children}</TabsPrimitive.Tabs>;
};

export const TabsTrigger = (
	props: ComponentProps<typeof TabsPrimitive.Trigger>,
) => {
	return (
		<TabsPrimitive.Trigger
			{...props}
			className="px-1 data-[state=active]:bg-slate-200"
		>
			Trigger
		</TabsPrimitive.Trigger>
	);
};
