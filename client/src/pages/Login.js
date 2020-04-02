import React from "react";
import LoginForm from "../components/users/LoginForm";
import { Link } from "react-router-dom";
export default () => {
  return (
    <>
      <LoginForm />
      <Link to={`/signup`}>Signup</Link>
    </>
  );
};
