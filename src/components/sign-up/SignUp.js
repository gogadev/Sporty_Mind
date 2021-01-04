import React, { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import FormButton from "../form-button/FormButton";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import { ReactComponent as FeatherImg } from "../../assets/feather.svg";

import "./sign-up.style.css";

toast.configure();
class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      toast("Passwords Do Not Match", { position: toast.POSITION.TOP_CENTER });
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });
    } catch (error) {
      return error;
    }

    this.setState({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-in-up">
        <FeatherImg className="feather-img" />
        <h2 className="form-title">I do not have an account</h2>
        <span className="span-title">
          <i className="far fa-hand-point-right"></i> Sign up with your email
          and password
        </span>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            className="input"
            type="text"
            name="displayName"
            value={displayName}
            placeholder="Name"
            onChange={this.handleChange}
            required
          />
          <input
            className="input"
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={this.handleChange}
            required
          />
          <input
            className="input"
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={this.handleChange}
            required
          />
          <input
            className="input"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm Password"
            onChange={this.handleChange}
            required
          />
          <FormButton type="submit">Sign Up</FormButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
