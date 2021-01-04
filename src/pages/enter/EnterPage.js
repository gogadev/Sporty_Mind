import React from "react";
import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/SignUp";

const EnterPage = () => {
  return (
    <div className="enter-forms">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default EnterPage;
