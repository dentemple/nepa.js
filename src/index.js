import React from "react";
import { render } from "react-dom";
import { injectGlobal } from "styled-components";

import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

/*
  The only bypass available to the Styled Components library to add "global" CSS.
  Note: Create React App offers an out-of-the-box alternative: by importing CSS modules directly
*/
injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    text-align: center;
  }
`;

/*
  Entry point.  Imports the App component and adds it to the html file

  For a server-side rendered app, use this file to inject dependencies
  that wouldn't or shouldn't be executed by the back-end
*/
render(<App />, document.getElementById("root"));
registerServiceWorker();
