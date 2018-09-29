import React from "react";
import "../css/homeContainer.css";
import "react-circular-progressbar/dist/styles.css";
import axios from "axios";
import CountUp from "react-countup";
import CircularProgressbar from "react-circular-progressbar";

import Avatar from "@material-ui/core/Avatar";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  bigAvatar: {
    width: 232,
    height: 225
  }
};

class HomeContainer extends React.Component {
  state = {
    percentage: 0,
    userInfo: {}
  };
  componentDidMount() {
    axios
      .get(`/users`)
      .then(res => this.setState({ userInfo: res.data[0] }))
      .catch(err => console.log(err));
    setInterval(() => {
      this.state.percentage < 42
        ? this.setState({ percentage: this.state.percentage + 2 })
        : false;
    }, 40);
  }
  render() {
    console.log("ss", this.state.userInfo);
    return (
      <div className="mainContainer">
        <div className="personalInfo">
          <div className="item avatar">
            <Avatar
              alt="avatar"
              src="https://1enu9c17f1aj3pmqfi35l21c-wpengine.netdna-ssl.com/wp-content/uploads/2018/08/Instagram-Captions-880x450.jpg"
              className={classNames(this.props.classes.bigAvatar)}
            />
          </div>
          <div className="perso-item">
            <h3>Likes:</h3>
            <h2>
              <i class="fas fa-heart" />
              <CountUp start={0} end={122} duration={10} separator="," />
            </h2>
          </div>
          <div className="perso-item">
            <h3>Follow:</h3>
            <h2>
              <i class="fas fa-comments" />
              {/* <CountUp start={0} end={547} duration={10} separator="," /> */}
              {this.state.userInfo.followers}
            </h2>
          </div>
          <div className="perso-item">
            <h3>Followers:</h3>
            <h2>
              <i class="fas fa-users" />
              {/* <CountUp start={0} end={1362} duration={10} separator="," /> */}
              {this.state.userInfo.following}
            </h2>
          </div>
        </div>
        <div className="progression">
          <div className="prog-item">
            <h3>
              Followers <i class="fas fa-angle-double-up" />
            </h3>
            <h2>
              <CountUp start={0} end={214} duration={10} separator="," />
            </h2>
          </div>
          <div className="prog-item">
            <h3>
              Likes <i class="fas fa-location-arrow" />
            </h3>
            <h2>
              <CountUp start={0} end={53} duration={10} separator="," />
            </h2>
          </div>
          <div className="prog-item">
            <h2>Plan</h2>
            <h2>Progression</h2>
          </div>
          <div className="prog-item" style={{ width: "126px" }}>
            <CircularProgressbar
              percentage={this.state.percentage}
              text={`${this.state.percentage}%`}
              background
              backgroundPadding={6}
              styles={{
                background: {
                  fill: "#3e98c7"
                },
                text: {
                  fill: "#fff"
                },
                path: {
                  stroke: "#fff"
                },
                trail: { stroke: "transparent" }
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(HomeContainer);
