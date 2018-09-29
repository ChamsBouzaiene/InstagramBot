import React from "react";
import "../css/welcomepage.css";

export class Welcomepageform extends React.Component {
  render() {
    return (
      <div className="welcomepage-container">
        <h1>
          Your <span className="instagramlogo">Instagram</span> life starts now!
        </h1>
        <ul className="spesitem">
          <li>Make your instagram popular</li>
          <li>Find the right followers !</li>
          <li>Choose the tag that interests you most</li>
        </ul>
      </div>
    );
  }
}

export class WelcomepageSecond extends React.Component {
  render() {
    return (
      <div className="welcomepage-main">
        <div className="logo-container">
          <img src="images/insta.png" alt="Insta logo" />
        </div>
        <h2>Why you need this?</h2>
        <ul>
          <li>
            If you get many followers, you will be more popular than you friends
          </li>
          <li>
            You will get attention from followers in form of likes and comments
          </li>
          <li>You will be in trend</li>
          <li>
            If you sell something on instagram, we will find clients for you
          </li>
        </ul>
      </div>
    );
  }
}
