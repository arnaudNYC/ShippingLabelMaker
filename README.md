This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features

### Git hooks

On commit, project files are formatted then linted.

### Storybook

Some components are showcased using [Storybook](https://storybook.js.org/)<br>
Run `yarn storybook` to see it in action!

### Cypress

Feature files are implemented using [Cypress](https://www.cypress.io/)<br>
Run `yarn cypress:open` to see it in action!

### Unit tests

Unit tests are implemented using [Jest](https://jestjs.io/)<br>
A coverage report is also available.<br>
Run `yarn test` to see it in action!

### Lighthouse

[Lighthouse](https://developers.google.com/web/tools/lighthouse/) audit results:

- Performance: 97
- Accessibility: 100
- Best Practices: 93

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode with a coverage report.

### `yarn pretty`

Formats projects files using prettier

### `yarn lint`

Lints the code using airbnb and react:recommended

### `yarn lint:watch`

Lints the code in interactive mode

### `yarn storybook`

Launches storybook

### `yarn build-storybook`

Generate static storybook site

### `yarn cypress:open`

Launches cypress e2e tests in interactive mode

### `yarn cypress:run`

Runs cypress e2e tests in headless mode

### `yarn serve`

Builds the app for production to the `build` folder and launches a web server

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
