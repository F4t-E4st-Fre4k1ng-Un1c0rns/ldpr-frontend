import type { Meta, StoryObj } from "@storybook/preact";
import { SeasonPagination } from "@/components/SeasonPagination";
import { action } from "@storybook/addon-actions";

const meta = {
  argTypes: {
    onSeasonChange: {
      action: "seasonChanged",
      description: "Callback when season is changed",
    },
    seasons: {
      control: "object",
      defaultValue: [
        { anime: "1", id: "1", number: 1 },
        { anime: "1", id: "2", number: 2 },
        { anime: "1", id: "3", number: 3 },
        { anime: "1", id: "4", number: 4 },
      ],
      description: "Array of seasons to display",
    },
  },
  component: SeasonPagination,
  title: "Components/SeasonPagination",
} satisfies Meta<typeof SeasonPagination>;

export default meta;
type Story = StoryObj<typeof SeasonPagination>;

export const Default: Story = {
  args: {
    onSeasonChange: action("seasonChanged"),
    seasons: [
      { anime: "1", id: "1", number: 1 },
      { anime: "1", id: "2", number: 2 },
      { anime: "1", id: "3", number: 3 },
      { anime: "1", id: "4", number: 4 },
    ],
  },
};

export const SingleSeason: Story = {
  args: {
    onSeasonChange: action("seasonChanged"),
    seasons: [{ anime: "1", id: "1", number: 1 }],
  },
};

export const ManySeasons: Story = {
  args: {
    onSeasonChange: action("seasonChanged"),
    seasons: Array.from({ length: 10 }, (__, id) => ({
      anime: "1",
      id: String(id + 1),
      number: id + 1,
    })),
  },
};
