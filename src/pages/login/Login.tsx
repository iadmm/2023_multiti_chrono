import React from "react";
import PasswordLess from "./components/PasswordLess";
import EmailPassword from "./components/EmailPassword";

const Login = () => {
  return (
    <div>
      <EmailPassword />
      <PasswordLess />
    </div>
  );
};

export default Login;
