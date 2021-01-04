import React, { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import FormButton from "../../components/form-button/FormButton";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils.js";

import "./sign-in.style.css";

toast.configure();
class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
      toast("You Are Signed In", { position: toast.POSITION.TOP_CENTER });
    } catch (error) {
      return error;
    }
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in-up">
        <h2 className="form-title">I already have an account</h2>
        <span className="span-title">
          <i className="far fa-hand-point-right"></i> Sign in with your email
          and password
        </span>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            className="input"
            name="email"
            type="email"
            onChange={this.handleChange}
            value={this.state.email}
            label="email"
            placeholder="Email"
            required
          />
          <input
            className="input"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            label="password"
            placeholder="Password"
            required
          />
          <FormButton type="submit">Sign in</FormButton>
          <FormButton onClick={signInWithGoogle}>
            {" "}
            Sign in with Google{" "}
          </FormButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
