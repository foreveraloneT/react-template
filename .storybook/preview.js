import '../src/index.scss';

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'white',
    values: [
      { name: 'grey', value: '#F7F7F8' },
      { name: 'white', value: '#FFF' },
      { name: 'black', value: '#000' },
    ],
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
}