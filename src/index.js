import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

/*
  Entry point.  Imports the App component and adds it to the html file

  For a server-side rendered app, use this file to inject dependencies
  that wouldn't or shouldn't be executed by the back-end
*/

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
