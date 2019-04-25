import React from "react";

const Loader = () => {
  return (
    <div className="popup_loader">
      <div className="popup_loader_center">
        <div className="lds-roller">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  );
};

export default Loader;
