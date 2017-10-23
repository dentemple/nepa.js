import React, { Component } from "react";

import Header from "./Header";
import Profiles from "./Profiles";

/* 
  The web app's top-level container
*/

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <p style={{ fontSize: "1.4em" }}>
          To get started, edit <code>src/components/App.js</code> and save to
          reload.
        </p>
        <Profiles />
      </div>
    );
  }
}

export default App;
