import type { Meta, StoryObj } from "@storybook/preact";
import Header from "@/components/Header";

const meta = {
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  title: "Components/Header",
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  parameters: {
    env: {
      VITE_PROJECT_NAME: "LDPR",
    },
  },
};

export const CustomProjectName: Story = {
  args: {},
  parameters: {
    env: {
      VITE_PROJECT_NAME: "My Custom Project",
    },
  },
};
