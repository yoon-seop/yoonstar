import React, { Component } from "react";
import Envir from "./Envir";
import "../css/Basic.scss";
import "../css/Envir.scss";
import "../css/Home.scss";
import "../css/Profile.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="MainContainer">
          <Envir />
        </div>
      </div>
    );
  }
}
export default App;
