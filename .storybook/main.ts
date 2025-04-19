import type { StorybookConfig } from "@storybook/preact-vite";

const config: StorybookConfig = {
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-essentials",
    "@storybook/experimental-addon-test",
  ],
  framework: {
    name: "@storybook/preact-vite",
    options: {},
  },
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
};
export default config;
