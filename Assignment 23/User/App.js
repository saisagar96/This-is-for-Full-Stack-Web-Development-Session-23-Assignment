import React, { Component } from "react";
import "./App.css";

import Welcome from "./Welcome";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome name="Ravi" />
        <Welcome name="Sai Sagar" />
        <Welcome name="Bill" />
        <Welcome name="Sumantra" />
      </div>
    );
  }
}

export default App;
