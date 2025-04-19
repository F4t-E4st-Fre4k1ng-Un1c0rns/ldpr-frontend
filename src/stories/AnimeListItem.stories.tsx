import type { Meta, StoryObj } from "@storybook/preact";
import AnimeListItem from "@/components/AnimeListItem";

const meta = {
  component: AnimeListItem,
  title: "Components/AnimeListItem",
} satisfies Meta<typeof AnimeListItem>;

export default meta;
type Story = StoryObj<typeof AnimeListItem>;

const sampleAnime = {
  description:
    "Humanity fights for survival against giant humanoid creatures called Titans.",
  id: "1",
  image: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
  title: "Attack on Titan",
};

export const Default: Story = {
  args: {
    anime: sampleAnime,
  },
};
