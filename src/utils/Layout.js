import React from "react";
import Nav from "../components/Nav";

const Layout = props => {
  return (
    <div className="main">
      <Nav
        currentCarId={props.currentCarId}
        prevCarId={props.prevCarId}
        nextCarId={props.nextCarId}
        onClickPrev={props.onClickPrev}
        onClickNext={props.onClickNext}
      />
      {props.children}
    </div>
  );
};

export default Layout;
