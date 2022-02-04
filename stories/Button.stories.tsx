import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../components/Button";

export default {
  title: "Design System/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  value: "Click Me!",
  backgroundColor: "bg-primary",
};

export const Secondary = Template.bind({});

Secondary.args = {
  value: "Click Me!",
  backgroundColor: "bg-secondary",
};