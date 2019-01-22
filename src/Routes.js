import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import CarsData from "./data/cars.json"; // DATA
import Layout from "./utils/Layout"; // Layout
import Car from "./components/Car"; // Main component
import { runInThisContext } from "vm";

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevCarId: 1,
      currentCarId: 2,
      nextCarId: 3
    };
  }

  onClickNext = () => {
    const current = this.state.currentCarId;
    // console.log(`Current:${current}`);

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

  render() {
    let routes = null;
    routes = (
      <div>
        {CarsData.map((carData, index) => {
          if (carData.slug !== "") {
            return (
              <Route
                path={carData.slug}
                key={carData.id}
                render={() => (
                  <Car
                    id={carData.id}
                    title={carData.title}
                    versions={carData.versions}
                    images={carData.images}
                  />
                )}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    );

    return (
      <div>
        <Switch>
          <Layout
            currentCarId={this.state.currentCarId}
            prevCarId={this.state.prevCarId}
            nextCarId={this.state.nextCarId}
            onClickPrev={this.onClickPrev}
            onClickNext={this.onClickNext}
          >
            {routes}
          </Layout>
        </Switch>
        {/* <button onClick={this.onClickPrev}>Prev</button>
        <button onClick={this.onClickNext}>Next</button> */}
      </div>
    );
  }
}

export default Routes;
