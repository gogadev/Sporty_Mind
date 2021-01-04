import React from "react";

import "./homepage.styles.css";

import image from "../../assets/img5.jpeg";

const Homepage = () => {
  return (
    <>
      <div>
        <h1 className="subtitle">Sporty Mind</h1>
      </div>
      <div className="rotating-box">
        <div className="single-rb">
          <div className="front-side">
            <img src={image} alt="Home" />
          </div>
          <div className="back-side">
            <img src={image} alt="Home" />
          </div>
          <div className="left-side">
            <img src={image} alt="Home" />
          </div>
          <div className="right-side">
            <img src={image} alt="Home" />
          </div>
          <div className="top-side"></div>
          <div className="bottom-side"></div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
