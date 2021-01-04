import React from "react";
import { Link } from "react-router-dom";

import FormButton from "../../components/form-button/FormButton";

import imageAbout from "../../assets/img3.jpeg";
import imageProduct from "../../assets/img1.jpeg";

import "./about-us.style.css";

const AboutUs = () => {
  return (
    <div className="about">
      <h1 className="about-title">Our Story</h1>
      <p align="justify" className="about-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
        laudantium assumenda repudiandae ratione vero, veritatis repellendus
        aspernatur laboriosam ab quis atque? Incidunt sequi excepturi nisi fuga,
        nostrum explicabo placeat animi blanditiis velit adipisci vel, et dolore
        suscipit? Quidem ratione, placeat maxime sit quaerat id beatae optio
        harum corporis, consequuntur natus quas consectetur? Ad eaque, vero
        natus nesciunt quo fugiat obcaecati?
      </p>
      <img className="main-img" src={imageAbout} alt="" />
      <span className="about-subtitle">Sneakers Sporty Mind</span>
      <p align="justify" className="text-about">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
        laudantium assumenda repudiandae ratione vero, veritatis repellendus
        aspernatur laboriosam ab quis atque? Incidunt sequi excepturi nisi fuga,
        nostrum explicabo placeat animi blanditiis velit adipisci vel, et dolore
        suscipit? Quidem ratione, placeat maxime sit quaerat id beatae optio
        harum corporis, consequuntur natus? <br />
        <span className="about-icon">
          <i className="fab fa-facebook-square"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter-square"></i>
        </span>
      </p>
      <img className="main-img" src={imageProduct} alt="" />
      <Link to="/shop">
        <i className="far fa-hand-point-right icon"></i>{" "}
        <FormButton>Shop</FormButton>
      </Link>
    </div>
  );
};

export default AboutUs;
