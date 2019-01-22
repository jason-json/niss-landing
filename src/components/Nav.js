import React, { Component } from "react";
import { Link } from "react-router-dom";

import CarsData from "../data/cars.json";
class Nav extends Component {

  getCarTitle = carId => {
    let car = CarsData.filter(carDataId => carDataId.id === carId);
    // console.log(car);
    return car[0].title;
  };
  getCarSlug = carId => {
    let car = CarsData.filter(carDataId => carDataId.id === carId);
    // console.log(car);
    return car[0].slug;
  };

  render() {
    return (
      <div className="navigation">
        <div className="navigation_item_pre">
          {this.props.prevCarId ? (
            <Link
              to={this.getCarSlug(this.props.prevCarId)}
              onClick={this.props.onClickPrev}
              className="navigation_prev"
            >
              {this.getCarTitle(this.props.prevCarId)}
            </Link>
          ) : (
            <div />
          )}
        </div>
        <div className="navigation_item_current">
          {this.getCarTitle(this.props.currentCarId)}
        </div>
        <div className="navigation_item_next">
          {this.props.nextCarId ? (
            <Link
              to={this.getCarSlug(this.props.nextCarId)}
              onClick={this.props.onClickNext}
              className="navigation_next"
            >
              {this.getCarTitle(this.props.nextCarId)}
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    );
  }
}

export default Nav;
