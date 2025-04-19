import ErrorDisplay, { ErrorDisplayProps } from "../components/ErrorDisplay";
import type { Meta, StoryObj } from "@storybook/preact";
import { DisplayError } from "../types/ErrorDisplay";

const meta = {
  component: ErrorDisplay,
  title: "Components/ErrorDisplay",
} satisfies Meta<typeof ErrorDisplay>;

export default meta;
type Story = StoryObj<ErrorDisplayProps>;

export const NotFound: Story = {
  args: {
    error: new DisplayError("Аниме не найдено", 404),
  },
};

export const NetworkError: Story = {
  args: {
    error: new DisplayError("Ошибка сети", 498),
  },
};

export const ServerError: Story = {
  args: {
    error: new DisplayError("Внутренняя ошибка сервера", 500),
  },
};

export const DefaultError: Story = {
  args: {
    error: new DisplayError("Произошла ошибка"),
  },
};
