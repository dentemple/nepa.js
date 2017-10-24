import React, { Component } from "react";
import Aux from "react-aux";

import NavBar from "./NavBar";
import HeroHeader from "./HeroHeader";
import Profiles from "./Profiles";
import ReactLogo from "./ReactLogo";

/* 
  The web app's top-level container
*/

class App extends Component {
  render() {
    return (
      <Aux>
        <NavBar />
        <HeroHeader />
        <p style={{ fontSize: "1.4em" }}>
          To get started, edit <code>src/components/App.js</code> and save to
          reload.
        </p>
        <p>
          <ReactLogo />
        </p>
        <Profiles />
      </Aux>
    );
  }
}

export default App;
