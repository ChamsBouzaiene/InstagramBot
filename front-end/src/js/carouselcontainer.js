import React from "react";
import Carousel from "./carousel";

class CarrContainener extends React.Component {
  render() {
    return (
      <div className="carousel-container">
        <div className="box-carousel">
          <Carousel />
        </div>
        <div className="imgcrarousel" />
      </div>
    );
  }
}
export default CarrContainener;
