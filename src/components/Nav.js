import React, { Component } from "react";
import { Link } from "react-router-dom";

import CarsData from "../data/cars.json";
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevCarId: 0,
      currentCarId: 1,
      nextCarId: 2
    };
  }

  componentWillMount() {
    let path = window.location.pathname;
    let currentCar = CarsData.filter(car => car.slug === path);
    let prevCar = currentCar[0].id - 1;
    let nexCar = currentCar[0].id + 1;

    this.setState({
      prevCarId: prevCar,
      currentCarId: currentCar[0].id,
      nextCarId: nexCar
    });
  }

  onClickNext = () => {
    const current = this.state.currentCarId;
    console.log(`Current:${current}`);

    let newCurrent = current + 1;
    // console.log(`New current:${newCurrent}`);

    let newNext = newCurrent + 1;
    // console.log(`New Next:${newNext}`);

    let newPre = newCurrent - 1;
    // console.log(`New Prev:${newPre}`);

    // if exist
    let existCurrent = CarsData.filter(
      carDataId => carDataId.id === newCurrent
    );
    // console.log(`Exist Next:${existCurrent}`);

    let existNext = CarsData.filter(carDataId => carDataId.id === newNext);
    // console.log(`Exist Next:${existNext}`);

    let existPrev = CarsData.filter(carDataId => carDataId.id === newPre);
    // console.log(`Exist Prev:${existPrev}`);

    if (existCurrent.length !== 0) {
      this.setState({ currentCarId: newCurrent });

      existNext.length !== 0
        ? this.setState({ nextCarId: newNext })
        : this.setState({ nextCarId: null });

      existPrev.length !== 0
        ? this.setState({ prevCarId: newPre })
        : this.setState({ prevCarId: null });
    } else {
      this.setState({ prevCarId: 1, currentCarId: 2, nextCarId: 3 });
    }
  };

  onClickPrev = () => {
    const current = this.state.currentCarId;
    // console.log(`Current:${current}`);

    let newCurrent = current - 1;
    // console.log(`New current:${newCurrent}`);

    let newNext = newCurrent + 1;
    // console.log(`New Next:${newNext}`);

    let newPre = newCurrent - 1;
    // console.log(`New Prev:${newPre}`);

    // if exist
    let existCurrent = CarsData.filter(
      carDataId => carDataId.id === newCurrent
    );
    // console.log(`Exist Next:${existCurrent}`);

    let existNext = CarsData.filter(carDataId => carDataId.id === newNext);
    // console.log(`Exist Next:${existNext}`);

    let existPrev = CarsData.filter(carDataId => carDataId.id === newPre);
    // console.log(`Exist Prev:${existPrev}`);

    if (existCurrent.length !== 0) {
      this.setState({ currentCarId: newCurrent });

      existNext.length !== 0
        ? this.setState({ nextCarId: newNext })
        : this.setState({ nextCarId: null });

      existPrev.length !== 0
        ? this.setState({ prevCarId: newPre })
        : this.setState({ prevCarId: null });
    } else {
      this.setState({ prevCarId: 1, currentCarId: 2, nextCarId: 3 });
    }
  };


  getCarTitle = carId => {
    let car = CarsData.filter(carDataId => carDataId.id === carId);
    console.log(car);
    return car[0].title;
  };
  getCarSlug = carId => {
    let car = CarsData.filter(carDataId => carDataId.id === carId);
    console.log(car);
    return car[0].slug;
  };

  render() {
    return (
      <div className="navigation">
        <div className="navigation_item_pre">
          {this.state.prevCarId ? (
            <Link
              to={this.getCarSlug(this.state.prevCarId)}
              onClick={this.onClickPrev}
              className="navigation_prev"
            >
              {this.getCarTitle(this.state.prevCarId)}
            </Link>
          ) : (
            <div />
          )}
        </div>
        <div className="navigation_item_current">
          {this.getCarTitle(this.state.currentCarId)}
        </div>
        <div className="navigation_item_next">
          {this.state.nextCarId ? (
            <Link
              to={this.getCarSlug(this.state.nextCarId)}
              onClick={this.onClickNext}
              className="navigation_next"
            >
              {this.getCarTitle(this.state.nextCarId)}
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
