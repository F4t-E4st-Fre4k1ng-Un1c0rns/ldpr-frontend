import "@/index.css";

import type { Preview } from "@storybook/preact";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/iu,
        date: /Date$/iu,
      },
    },
  },
};

export default preview;
