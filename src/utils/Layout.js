import React from "react";
import Nav from "../components/Nav";

const Layout = props => {
  return (
    <div className="main">
      <Nav/>
      {props.children}
    </div>
  );
};

export default Layout;
