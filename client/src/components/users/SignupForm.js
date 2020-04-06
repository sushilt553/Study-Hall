import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { SIGNUP_USER, LOGIN_USER } from "../../graphql/mutations";
import { IS_LOGGED_IN, CURRENT_USER } from "../../graphql/queries";
import signupPic from "./images/signup.jpg";

export default ({ close }) => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [signup] = useMutation(SIGNUP_USER, {
    variables: {
      username,
      password,
    },
    update(cache, { data: { signup } }) {
      if (!signup) {
        setErrorMessage("Invalid username or password");
      } else {
        localStorage.setItem("token", signup.token);
        cache.writeQuery({ query: IS_LOGGED_IN, data: { isLoggedIn: true } });
        history.push("/home");
      }
    },
    onError() {
      setErrorMessage("Please enter a valid username and password");
    },
    refetchQueries: [{ query: CURRENT_USER }],
  });
  const [login] = useMutation(LOGIN_USER, {
    variables: {
      username: "demo",
      password: "password",
    },
    update(cache, { data: { login } }) {
      if (!login) {
        setErrorMessage("Invalid username or password");
      } else {
        localStorage.setItem("token", login.token);
        cache.writeQuery({ query: IS_LOGGED_IN, data: { isLoggedIn: true } });
        history.push("/home");
      }
    },
    refetchQueries: [{ query: CURRENT_USER }],
  });

  function demoLogin() {
    login();
    close();
  }

  return (
    <div className="signup-div">
      <div className="signup-left-side">
        <img className="signup-img" src={signupPic} alt="signup_img" />
      </div>

      <div className="signup-form-div">
        <div className="form-title-div">
          <h1 className="form-title">Get Started</h1>
        </div>
        <div className="errors-list">{errorMessage}</div>
        <form
          className="signup-form"
          onSubmit={(e) => {
            e.preventDefault();
            signup();
            close();
          }}
        >
          <div>
            <input
              className="username-input"
              type="text"
              value={username}
              placeholder="Username"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <input
              className="password-input"
              type="password"
              value={password}
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="demo-btn-div">
            <button className="demo-btn" onClick={() => demoLogin()}>
              Demo
            </button>
          </div>

          <div className="sbm-btn-div">
            <input className="sbm-btn" type="submit" value="Register" />
          </div>
        </form>
      </div>
    </div>
  );
};
