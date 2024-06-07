# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## File Structure

- `src/assets`
- `src/components`
  - `layout`
    - `Footer`
    - `Navbar`
    - `SubNavbar`
  - `sections`
    - `About`
    - `Events`
    - `Libraries`
    - `Plugins`
    - `RemixIde`
    - `Rewards`
    - `Team`
  - `ui`
    - `Carousel`
    - `DocsLink`
    - `EventCard`
    - `TeamMemberCard`
    - `ThemeDropdown`
- `src/scroll-section`
  - `ScrollingProvider`: responsible to link Section and SectionLink and know which Section is selected.
  - `Section`: renders a <section /> tag that receives an ID and register itself in ScrollingProvider.
  - `useScrollSection`: React Hook given the id of the section returns if the section is selected and a callback to scroll to it. Returns an array of all the sections with id, selected and scrollTo.
- `src/locales`
  - `en` - Contains all of the original English text strings. These are uploaded to Crowdin for translation, and then translations are imported into remaining language sub-folders.
  
If you want to update the data in the Teams section visit `@/components/sections/Team` you will find there `teamMembers` array with the following structure:

```
name: 
poisition:
image:
twitterLink:
githubLink:
linkedInLink:
```

If you want to update the data in the Events section visit `@/components/sections/Events` you will find there `eventsData` array with the following structure:

```
name:
date:
image:
location: 
description:
```

## Translations

This project uses `react-intl` for internationalization. Original English text strings are stored in `src/locales/en` and are uploaded to Crowdin for translation. Translations are then imported into the remaining language sub-folders.

Strings should be referenced using the `FormattedMessage` component from `react-intl`. This component takes an `id` prop that corresponds to the key in the JSON file for the current language. For example, to reference the string `navbar.about` string which corresponds to "About", you'd use:

```jsx
import { FormattedMessage } from 'react-intl';

// ...

<FormattedMessage id='navbar.about' />
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### `npm run deploy`

This command will run `predeploy` and `deploy` scripts. Under the hood, the `predeploy` will build a distributable version of the website and store it in a `build` folder . Then, the ``deploy script will push the contents of the folder to a new commit on the `gp-pages` branch of the Github repo.
By default, the new commit on the gp=pages branch will have a commit message of "Updates". You can specify a custom commit message, like this:

    > ```shell
    > $ npm run deploy -- -m "Deploy version 1.1 to GitHub Pages"
    > ```

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Tailwinds CSS

This project uses Tailwind CSS for styling. You can learn more about Tailwind CSS in the [Tailwind CSS documentation](https://tailwindcss.com/docs).

Primary configuration can be found in `tailwind.config.js` file.

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
