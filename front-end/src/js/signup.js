import React from "react";

import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

import "../css/signup.css";

import Joi from "joi";
import { schema2 } from "./inputschema";

class Signupform extends React.Component {
  state = {
    checked: false,
    firstnamehelper: "",
    lastnamehelper: "",
    emailhelper: "",
    passhelper: "",
    repasshelper: ""
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  valiSign = () => {
    let firstname = this.state.firstname;
    let lastname = this.state.lastname;
    let email = this.state.email;
    let pass = this.state.pass;
    let pass_confirm = this.state.pass_confirm;
    const result = Joi.validate(
      { firstname, lastname, email, pass, pass_confirm },
      schema2,
      { abortEarly: false }
    );

    if (result.error) {
      let msglegth = result.error.details.length;
      for (let i = 0; i < msglegth; i++) {
        let message = result.error.details[i].message;
        let str = message.split(`"`);
        switch (str[1]) {
          case "firstname":
            this.setState({ firstnamehelper: str[2] });
            break;
          case "lastname":
            this.setState({ lastnamehelper: str[2] });
            break;
          case "email":
            this.setState({ emailhelper: str[2] });
            break;
          case "pass":
            this.setState({ passhelper: str[2] });
            break;
          case "pass_confirm":
            this.setState({ repasshelper: str[2] });
            break;
          default:
        }
      }
    }
  };

  hundelInputClick = event => {
    this.setState({
      firstnamehelper: "",
      lastnamehelper: "",
      emailhelper: "",
      passhelper: "",
      repasshelper: ""
    });
  };

  inputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="signuplogin">
        <h3>Register</h3>
        <span className="sign-notification">
          Create your account. it's free and only takes a minute.
        </span>
        <div className="firs-last-name">
          <TextField
            label="First Name"
            placeholder="Enter your first name"
            margin="normal"
            name="firstname"
            onChange={this.inputChange}
            helperText={this.state.firstnamehelper}
            onClick={this.hundelInputClick}
            error={this.state.firstnamehelper ? true : false}
          />
          <TextField
            label="Last Name"
            placeholder="Enter your last name"
            margin="normal"
            name="lastname"
            onChange={this.inputChange}
            helperText={this.state.lastnamehelper}
            onClick={this.hundelInputClick}
            error={this.state.lastnamehelper ? true : false}
          />
        </div>
        <TextField
          type="email"
          label="Email"
          placeholder="Enter your Email"
          fullWidth
          margin="normal"
          name="email"
          onChange={this.inputChange}
          helperText={this.state.emailhelper}
          onClick={this.hundelInputClick}
          error={this.state.emailhelper ? true : false}
        />
        <TextField
          type="password"
          label="Password"
          placeholder="Enter your Password"
          fullWidth
          margin="normal"
          name="pass"
          onChange={this.inputChange}
          helperText={this.state.passhelper}
          onClick={this.hundelInputClick}
          error={this.state.passhelper ? true : false}
        />
        <TextField
          type="password"
          label="Repeat Password"
          placeholder="Repeat your Password"
          fullWidth
          margin="normal"
          name="pass_confirm"
          onChange={this.inputChange}
          helperText={this.state.repasshelper}
          onClick={this.hundelInputClick}
          error={this.state.repasshelper ? true : false}
        />

        <Checkbox
          checked={this.state.checked}
          onChange={this.handleChange("checked")}
          value="checked"
          color="primary"
        />
        <span>
          I accept the{" "}
          <a target="_blank" href="/user&privacy">
            Term of Use
          </a>
          &
          <a target="_blank" href="/user&privacy">
            Privacy Policy
          </a>
        </span>
        <br />
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={this.valiSign}
        >
          Register Now
        </Button>
      </div>
    );
  }
}

export default Signupform;
