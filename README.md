## Weather Forecast and Traffic Cam Website

## Installation and Setup Instructions

#### Example:  

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Run Test Suite:  

`npm test`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3000/`  

## Reflection

For this project, I wanted to showcase my technical proficiency in React. The tasks are relatively simple, but I was not able to achieve my goals due to the project time constraints as I was busy with other engagements. Since an API was already provided, I did not make use of any backend services and frameworks such as NestJS

For state management, I opted to use the built-in `useReducer` library from React since using an external state management library such as Redux would be overkill considering the application's goals.

The technologies implemented in this project are React, Ant Design, and a significant amount of VanillaJS, JSX, and CSS. I chose to use the `create-react-app` boilerplate to minimize initial setup. In the next iteration, I would plan to improve the overall UX of the app, particularly the following:

* Improving the User Interface to show more details
* Improving the Weather Forecast Card to show more than just textual information
* Adding a loader
* Loading the initial forecast and traffic image for the current date, time, and nearest location
* Build a backend service to handle heavy application logic.
