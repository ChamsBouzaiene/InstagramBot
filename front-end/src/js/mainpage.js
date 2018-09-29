import React from "react";
import CarrContainener from "./carouselcontainer";
import Particles from "react-particles-js";
import { Welcomepageform } from "./welcomepage";
import { WelcomepageSecond } from "./welcomepage";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Signupform from "./signup";

import { Route } from "react-router-dom";
import Loginform from "./login";

import "../css/App.css";

const styles = {
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

const particlesOpt = {
  particles: {
    number: {
      value: 120,
      density: { enable: true, value_area: 1000 }
    }
  }
};

const Home = props => {
  switch (props.home) {
    case "log":
      return <Loginform />;

    case "sign":
      return <Signupform />;

    default:
      return <Welcomepageform />;
  }
};

class Mainpage extends React.Component {
  state = {
    chemain: ""
  };
  hundelChangeLog = () => {
    this.setState({
      chemain: "log"
    });
  };
  hundelChangeSign = () => {
    this.setState({
      chemain: "sign"
    });
  };
  render() {
    return (
      <div className="App">
        <AppBar position="static" color="inherit">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Menu"
              className={this.props.classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              className={this.props.classes.grow}
            />
            <Button color="inherit" onClick={this.hundelChangeLog}>
              Login
            </Button>
            <Button
              color="inherit"
              name="signup"
              onClick={this.hundelChangeSign}
            >
              Sign Up
            </Button>
          </Toolbar>
        </AppBar>
        <Particles className="particle" params={particlesOpt} />
        <section className="maincontainer">
          {this.state.chemain ? <CarrContainener /> : <WelcomepageSecond />}
          <div className="formcontainer">
            <div>
              <Route
                exact
                path="/"
                component={() => <Home home={this.state.chemain} />}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default withStyles(styles)(Mainpage);
