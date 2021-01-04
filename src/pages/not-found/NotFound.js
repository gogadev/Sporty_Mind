import React from "react";
import { Link } from "react-router-dom";

import FormButton from "../../components/form-button/FormButton";
import notFoundImg from "../../assets/error.jpg";
import megaphone from "../../assets/Bullhorn-Icon.htm";

import "./not-found.style.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <Link to="/">
        {" "}
        <FormButton>Go Home</FormButton>
      </Link>
      <span>
        <i className="fas fa-map-signs"></i>
      </span>
      <div className="notFound-text">
        {" "}
        <h1>Oops, nothing here...</h1>
      </div>
      <span>
        <img className="megaphone" src={megaphone} alt="Megaphone" />
      </span>
      <img className="notFound-img" src={notFoundImg} alt="Not Found" />
    </div>
  );
};

export default NotFound;
