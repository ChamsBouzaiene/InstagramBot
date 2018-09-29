import React from "react";
import "../css/services.css";

import { Link } from "react-router-dom";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";

const Services = () => {
  return (
    <div className="heretotest">
      <div className="logocontainer">
        <img src="/images/erth.png" alt="erth" />
      </div>
      <section className />
      <section className="pub-offre">
        <h3 className="section-title">Why you need this?</h3>
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
      </section>
      <section className="offre">
        <h3 className="section-title">Choose a plan</h3>
        <div className="singleOffre">
          <div>
            <h3>Start</h3>
          </div>
          <div className="folowerscontainer">
            <img src="/images/folow.png" alt="folowers" />
          </div>
          <div className="pOffre">
            <h4>500 followers</h4>
            <p> (100 likes on photo)</p>
          </div>
          <div className="price">
            <h3>40$</h3>
          </div>
          <Button variant="fab" color="secondary" aria-label="Add">
            Buy
          </Button>
        </div>
        <div className="singleOffre">
          <div>
            <h3>Pro</h3>
          </div>
          <div className="folowerscontainer">
            <img src="/images/folow.png" alt="folowers" />
          </div>
          <div className="pOffre">
            <h4>1 000 followers</h4>
            <p> (300 likes on photo)</p>
          </div>
          <div className="price">
            <h3>69$</h3>
          </div>
          <Button variant="fab" color="secondary" aria-label="Add">
            Buy
          </Button>
        </div>
        <div className="singleOffre">
          <div>
            <h3>Ultra</h3>
          </div>
          <div className="folowerscontainer">
            <img src="/images/folow.png" alt="folowers" />
          </div>
          <div className="pOffre">
            <h4>2 000 followers</h4>
            <p> (500 likes on photo)</p>
          </div>
          <div className="price">
            <h3>82$</h3>
          </div>
          <Button variant="fab" color="secondary" aria-label="Add">
            Buy
          </Button>
        </div>
      </section>
      <section className="reviewsContainer">
        <h2>Reviews</h2>
        <div className="reviews">
          <div className="personal-review">
            <div className="imageContainer img1" />
            <h3>Patricia</h3>
            <p>
              I think that instagram clients is the best service in comparison
              to others. I tried 3 services that are in the top of google
              search, but none of them wasn’t as close to instagram clients,
              they do everything well and on time.
            </p>
          </div>
          <div className="personal-review">
            <div className="imageContainer img2" />
            <h3>Matthew</h3>
            <p>
              Thank you so much that you influenced so much our business in
              Instagram.
            </p>
          </div>

          <div className="personal-review">
            <div className="imageContainer img3" />
            <h3>Gladys</h3>
            <p>
              It’s been my best purchase until now. At first I was a little
              scared and bought 100 followers to try, then 1000 and after that
              5000 followers. They have a quick client service and friendly
              stuff. I hope that soon they will be helping with Facebook. I will
              be their first client lol.
            </p>
          </div>
        </div>
      </section>

      <section className="answers">
        <h3 className="section-title">Answers to frequently asked questions</h3>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>What accounts will subscribe to me?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              These are accounts of real people all over the world. If you need
              a target audience, for example for your business, choose “contact
              us”.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              Is it possible to add followers to a private account?
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              No, your account has to be opened, so that our system would be
              able to add your followers automatically.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              I want to get more than 50 thousand followers. How to get them?
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Write to us on InstaFollowers@gmail.com. We will discuss all
              options.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </section>
      <section className="contactUs">
        <h3 className="section-title">If you have any questions contact us</h3>
        <Button variant="contained" size="large" color="inherit">
          <Link to="/home/contact">CONTACT US</Link>
        </Button>
      </section>
    </div>
  );
};

export default Services;
