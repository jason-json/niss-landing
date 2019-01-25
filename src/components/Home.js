import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home_wrap">
        <Link to="/march" className="btn">
          ver lista de autos
        </Link>
      </div>
    </div>
  );
};

export default Home;
