import React, { Component } from "react";

class Carousel extends Component {
  state = {
    imgnumber: "images/car1.jpg",
    number: 2
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        imgnumber: "images/car" + this.state.number.toString() + ".jpg"
      });
      this.state.number === 4
        ? this.setState({ number: 1 })
        : this.setState({ number: this.state.number + 1 });
    }, 4000);
  }
  render() {
    return (
      <div className="container-carousel">
        <img src={this.state.imgnumber} alt="carousel" />
      </div>
    );
  }
}

export default Carousel;
