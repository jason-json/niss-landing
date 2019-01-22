import React from "react";
import Carousel from "./Carousel";
import Versions from "./Versions";
import Form from "./Form";
import logo from "../../lib/img/logo.jpg";
const Car = props => {
  return (
    <main>
      <section className="header_section">
        <div className="header_section_logo">
          <img src={logo} alt="Nissan" />
        </div>
        <div className="header_section_item">
          <h1>{props.title}</h1>
        </div>
        <div className="header_section_item"/>
      </section>
    </main>
  );
};

export default Car;
