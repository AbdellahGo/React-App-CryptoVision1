import React from "react";

const Loader = () => {
  return (
    <div
      className="loader d-flex align-items-center justify-content-center">
      <div className="parent position-relative">
        <div className="p-3 rounded-pill bg-primary position-absolute"></div>
        <div className="p-3 rounded-pill bg-primary position-absolute"></div>
        <div className="p-3 rounded-pill bg-primary position-absolute"></div>
        <div className="p-3 rounded-pill bg-primary position-absolute"></div>
      </div>
    </div>
  );
};

export default Loader;
