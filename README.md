# SpaceX

A small React app that loads SpaceX launch data.

<!-- MarkdownTOC -->

1. [Rationale](#rationale)
    1. [Demo caveats](#demo-caveats)
    1. [Icons](#icons)
    1. [`list` or `table`?](#list-or-table)
    1. [`img srcset` over `picture` element](#img-srcset-over-picture-element)
    1. [Using `flight_number` data in addition to default list-item count](#using-flight_number-data-in-addition-to-default-list-item-count)
    1. [Storing launch data](#storing-launch-data)
1. [Requirements](#requirements)
    1. [User stories](#user-stories)
    1. [Considerations](#considerations)
1. [`create-react-app` details](#create-react-app-details)
    1. [Available Scripts](#available-scripts)
        1. [`npm start`](#npm-start)
        1. [`npm test`](#npm-test)
        1. [`npm run build`](#npm-run-build)
        1. [`npm run eject`](#npm-run-eject)
    1. [Learn More](#learn-more)
        1. [Code Splitting](#code-splitting)
        1. [Analyzing the Bundle Size](#analyzing-the-bundle-size)
        1. [Making a Progressive Web App](#making-a-progressive-web-app)
        1. [Advanced Configuration](#advanced-configuration)
        1. [Deployment](#deployment)
        1. [`npm run build` fails to minify](#npm-run-build-fails-to-minify)

<!-- /MarkdownTOC -->

---

# Rationale

## Demo caveats

For speed of development, I have ignored a number of things, including:

-   Addition of `propType` checks or `TypeScript` in `React` components
-   Unit testing
-   Style fallbacks for `CSS` `grid` & `flex` elements

I have been playing around with:

-   `CSS` `grid`, custom properties `var(--VAR_NAME)` and `hsl` values for colours

## Icons

I replaced the icon `png` files with inline `svg` equivalents, as these are more versatile and sharper on all screen types. If these icons were re-used more frequently, I would recommend building an SVG sprite.

## `list` or `table`?

Both `list` and `table` markup would be suitable for launch data.

`list` markup chosen over `table` for the following reasons:

1. Design does not include text labels that would translate into table headers; I could have made screen reader only text, but then sighted visitors miss this useful information
2. For speed of markup/styling and responsiveness, as this is a demo

## `img srcset` over `picture` element

Using light-weight `<img srcset/>` as images provided appear to be for different screen resolutions over art direction choices.

## Using `flight_number` data in addition to default list-item count

I'm not assuming that `flight_number` and list-item position would always align. I would drop request for `flight_number` data, if this _was_ a reasonable assumption.

## Storing launch data

I would not expect the past launch data we are interested in to change, so we can store it and query only for new, future launches.

Could store in either `localStorage` or as part of a `ServiceWorker` mechanism.

For the demo, I have not attempted to implement any of this. This is an idea about where I might take it with more work.

---

# Requirements

- Create a `React` application that will consume data from the SpaceX public API
- The application must retrieve historic and future SpaceX launches and present them in a list view
- Designs and assets are provided
- Use the `create-react-app` CLI tool to generate a new React project
- Use any 3rd party packages that will assist you in development
- Complete the task using a `git` source control tool such as `GitHub` or `Bitbucket`
- Commit your code regularly

**Useful links**

Designs: [https://sketch.cloud/s/yyv1b/agmoaZP](https://sketch.cloud/s/yyv1b/agmoaZP)

API documentation:

- Postman - [https://docs.spacexdata.com](https://docs.spacexdata.com/) 
- GitHub - [https://github.com/r-spacex/SpaceX-API](https://github.com/r-spacex/SpaceX-API)

## User stories

- As a user, I want the ability to load the full list of SpaceX launches from the SpaceX API
- As a user, I want the ability to reload the data to see any new changes
- As a user, I want the ability to filter the launch list by year
- As a user, I want the ability to sort all launches by date (ascending/descending)

## Considerations

- Project approach
- Accuracy of designs
- State management
- Code quality
- Network logic

---

# `create-react-app` details

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
