import '@storybook/addon-console';
import { addDecorator } from '@storybook/react';
import { configure } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

import '../src/index.css';

addDecorator(withA11y);

function loadStories() {
  const req = require.context('../src/stories', true, /\.stories\.jsx$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
