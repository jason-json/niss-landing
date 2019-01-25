import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import CarsData from "./data/cars.json"; // DATA

import Home from './components/Home'
import Layout from "./utils/Layout"; // Layout
import Car from "./components/Car"; // Main component
import Gracias from './components/Gracias';

class Routes extends Component {

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
          } else return null;
        })}
      </div>
    );

    return (
      <div>
        <Switch>
          <Route path="/gracias/:sended" component={Gracias}/> 
          <Layout>
            <Route exact path="/" component={Home} />
            {routes}
          </Layout>
        </Switch>
        }
      </div>
    );
  }
}

export default Routes;
