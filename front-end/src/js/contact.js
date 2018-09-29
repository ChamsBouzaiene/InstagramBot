import React from "react";
import "../css/contact.css";

import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountBox from "@material-ui/icons/AccountBox";
import Email from "@material-ui/icons/Email";
import Folder from "@material-ui/icons/Folder";
import Comment from "@material-ui/icons/Comment";
import Button from "@material-ui/core/Button";
import Send from "@material-ui/icons/Send";
import SettingsBackupRestore from "@material-ui/icons/SettingsBackupRestore";

const Contact = () => {
  return (
    <div className="contactmain">
      <div className="contactLogo">
        <div>
          <h3>Drop us a line...</h3>
          <p>Drop us a message and we will contact you back shortly</p>
        </div>

        <div>
          <i class="fas fa-file-signature contact-logo" />
        </div>
      </div>
      <div className="contactForm">
        <form>
          <TextField
            label="User Name (required)"
            name="user-name"
            margin="dense"
            variant="outlined"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <AccountBox color={"action"} />
                </InputAdornment>
              )
            }}
          />
          <TextField
            label="Your Email (required)"
            type="email"
            name="email"
            autoComplete="email"
            margin="dense"
            variant="outlined"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Email color={"action"} />
                </InputAdornment>
              )
            }}
          />
          <TextField
            label="Subject"
            name="subject"
            margin="dense"
            variant="outlined"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Folder color={"action"} />
                </InputAdornment>
              )
            }}
          />
          <div className="textarea-container">
            <TextField
              label="Message (required)"
              name="message"
              margin="dense"
              variant="outlined"
              multiline
              rows="4"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Comment color={"action"} />
                  </InputAdornment>
                )
              }}
            />
          </div>
          <Button variant="outlined" color="primary" size="large" type="submit">
            Submit <Send />
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            type="reset"
          >
            reset
            <SettingsBackupRestore />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
