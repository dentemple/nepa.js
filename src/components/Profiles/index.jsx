import React, { Component } from "react";
import Aux from "react-aux";

import Title from "./Title";
import RenderCards from "./RenderCards";
import Loading from "./Loading";

/*
  The Profiles component will be responsible for handling its own data.
  For more complicated apps, this data would handled by either Redux or MobX.
*/

class Profiles extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      profiles: []
    };
  }

  componentDidMount() {
    this.getProfiles();
  }

  getProfiles() {
    const endpoint = "https://jsonplaceholder.typicode.com";
    return fetch(endpoint + "/users/")
      .then(response => response.json())
      .then(profiles => {
        this.setState({ profiles, isLoading: false });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const { isLoading, profiles } = this.state;
    return (
      <Aux>
        <Title />
        {isLoading ? <Loading /> : <RenderCards profiles={profiles} />}
      </Aux>
    );
  }
}

export default Profiles;
