import type { Meta, StoryObj } from "@storybook/preact";
import { EpisodePlayer } from "@/components/EpisodePlayer";

const meta = {
  component: EpisodePlayer,
  title: "Components/EpisodePlayer",
} satisfies Meta<typeof EpisodePlayer>;

export default meta;
type Story = StoryObj<typeof EpisodePlayer>;

const sampleEpisodes = [
  {
    id: "1",
    name: "The Beginning",
    path: "http://minio.love-this.ru/api/v1/download-shared-object/aHR0cDovLzEyNy4wLjAuMTo5MDAwL2hha2F0aG9uLWp1bmsvQ2F0JTIwVmliaW5nJTIwT3JpZ2luYWwubXA0P1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9NThGUUVJQUpFUk9LM0Q1WlAyT0IlMkYyMDI1MDQxOSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTA0MTlUMTA0MzI2WiZYLUFtei1FeHBpcmVzPTQzMjAwJlgtQW16LVNlY3VyaXR5LVRva2VuPWV5SmhiR2NpT2lKSVV6VXhNaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpoWTJObGMzTkxaWGtpT2lJMU9FWlJSVWxCU2tWU1Qwc3pSRFZhVURKUFFpSXNJbVY0Y0NJNk1UYzBOVEE1TVRnd09Dd2ljR0Z5Wlc1MElqb2lhR1ZzYkc5dGFXNXBieUo5LkRZWVh1Uk90UHFfOGhVZzhGMDM5SU5oT1NUd1JKWm5sU0ZVUTVuZm9uNGRDc3V1VVE2TW5zZDc0MDFlOUVTd2ZyQ0tGR0ZGN1BjbDhqUFU3Z1htUUd3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZ2ZXJzaW9uSWQ9bnVsbCZYLUFtei1TaWduYXR1cmU9NzM3ODk4YWJiYTQzMGZkZGY2OGVjNzBkZTkzN2M4YTlmMWFlZWIxODVhNjYwNmQ0YWY3ODM5OGJiNWFiZGExZA",
  },
  {
    id: "2",
    name: "The Journey",
    path: "https://example.com/episode2.mp4",
  },
  {
    id: "3",
    name: "The Battle",
    path: "https://example.com/episode3.mp4",
  },
];

export const Default: Story = {
  args: {
    episodes: sampleEpisodes,
  },
};
