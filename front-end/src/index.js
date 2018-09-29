import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import Mainpage from "./js/mainpage";
import HomePage from "./js/homepage";
import UserPrivacy from "./js/userprivacy";

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Mainpage} />
          <Route path="/home" component={HomePage} />
          <Route path="/user&privacy" component={UserPrivacy} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
