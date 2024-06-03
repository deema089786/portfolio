import '../src/theme/theme.css-reset.css';
import '../src/theme/theme.font.css';

import { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#b9b9b9',
        },
        {
          name: 'dark',
          value: '#383838',
        },
        {
          name: 'white',
          value: '#ffffff',
        },
        {
          name: 'black',
          value: '#000000',
        },
      ],
    },
  },
};

export default preview;
