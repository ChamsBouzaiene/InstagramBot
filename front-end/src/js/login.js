import React from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Lock from "@material-ui/icons/Lock";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

import "../css/login.css";

import Joi from "joi";
import { schema } from "./inputschema";

class Loginform extends React.Component {
  state = {
    checked: true,
    passhelper: "",
    userhelper: "",
    error: false
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  logChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  validSub = () => {
    let user = this.state.user;
    let pass = this.state.pass;
    const result = Joi.validate({ user, pass }, schema, { abortEarly: false });

    if (result.error) {
      let msglegth = result.error.details.length;
      for (let i = 0; i < msglegth; i++) {
        let message = result.error.details[i].message;
        let str = message.split(`"`);
        switch (str[1]) {
          case "user":
            this.setState({ userhelper: str[2] });
            break;
          case "pass":
            this.setState({ passhelper: str[2] });
            break;
          default:
        }
      }
    }
  };

  hundelInputClick = () => {
    this.setState({
      passhelper: "",
      userhelper: ""
    });
  };
  render() {
    return (
      <div className="logincontainer">
        <h2>Login To Your Account</h2>
        <Grid container spacing={8} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField
              label="User name"
              onChange={this.logChange}
              name="user"
              helperText={this.state.userhelper}
              error={this.state.userhelper ? true : false}
              onClick={this.hundelInputClick}
            />
          </Grid>
        </Grid>
        <Grid container spacing={8} alignItems="flex-end">
          <Grid item>
            <Lock />
          </Grid>
          <Grid item>
            <TextField
              label="Password"
              type="password"
              onChange={this.logChange}
              name="pass"
              helperText={this.state.passhelper}
              error={this.state.passhelper ? true : false}
              onClick={this.hundelInputClick}
            />
          </Grid>
        </Grid>
        <div className="buton-link-container">
          <Checkbox
            checked={this.state.checked}
            onChange={this.handleChange("checked")}
            value="checked"
            color="primary"
          />

          <span>Remenber Me</span>
          <a className="forgetpassword" href="/">
            Forgot password?
          </a>
          <br />
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={this.validSub}
          >
            Login
          </Button>
          <h6 className="signin">
            <Link to="/signup">New here? Create an account.</Link>
          </h6>
        </div>
      </div>
    );
  }
}

export default Loginform;
