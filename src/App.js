import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <>
        <NavBar title="Strivestaurant" />
        <Home />
      </>
    );
  }
}

export default App;