import React from "react";
import "../css/homepage.css";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FaceIcon from "@material-ui/icons/Face";
import Avatar from "@material-ui/core/Avatar";
import { Button } from "@material-ui/core";

import HomeContainer from "./homeContainer";
import Contact from "./contact";
import Services from "./services";

import { Route, Link } from "react-router-dom";

const styles = {
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class Homepage extends React.Component {
  state = {
    anchorEl: null
  };
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    const { anchorEl } = this.state;
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
            >
              <Button>
                <Link to="/home/">Home</Link>
              </Button>
              <Button>
                <Link to="/home/services">Services</Link>
              </Button>
              <Button>
                <Link to="/home/contact">Contact</Link>
              </Button>
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={69} color="secondary">
                <FavoriteIcon color="action" />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={16} color="secondary">
                <FaceIcon color="action" />
              </Badge>
            </IconButton>
            <IconButton
              color="inherit"
              aria-owns={anchorEl ? "simple-menu" : null}
              onClick={this.handleClick}
            >
              <Avatar
                alt="Remy Sharp"
                src="https://1enu9c17f1aj3pmqfi35l21c-wpengine.netdna-ssl.com/wp-content/uploads/2018/08/Instagram-Captions-880x450.jpg"
              />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>Profile</MenuItem>
          <MenuItem onClick={this.handleClose}>My account</MenuItem>
          <MenuItem onClick={this.handleClose}>Logout</MenuItem>
        </Menu>
        <Route exact path="/home/" component={HomeContainer} />
        <Route path="/home/contact" component={Contact} />
        <Route path="/home/services" component={Services} />
      </div>
    );
  }
}

export default withStyles(styles)(Homepage);
