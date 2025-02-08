import type { Preview } from "@storybook/react";

const preview: Preview = {
   parameters: {
      backgrounds: {
         default: 'dark',
         values: [
            {
               name: 'dark',
               value: '#121315',
            }
         ],
      },
      controls: {
         matchers: {
            color: /(background|color)$/i,
            date: /Date$/i,
         },
      },
   },
};

export default preview;
