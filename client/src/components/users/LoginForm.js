import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";
import { LOGIN_USER } from "../../graphql/mutations";
import { IS_LOGGED_IN, CURRENT_USER } from "../../graphql/queries";

export default ({ close }) => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [login] = useMutation(LOGIN_USER, {
    variables: {
      username,
      password,
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
    onError() {
      setErrorMessage("Invalid Credentials");
    },
    refetchQueries: [{ query: CURRENT_USER }],
  });

  function demoLogin() {
    setUsername("demo");
    setPassword("password");
  }

  return (
    <>
      <div className="form-title-div">
        <h1 className="form-title">Log In</h1>
      </div>
      <div className="errors-list">{errorMessage}</div>
      <form
        className="login-form"
        onSubmit={(e) => {
          e.preventDefault();
          login();
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

        <div className="sbm-btn-div">
          <input className="sbm-btn" type="submit" value="Log In" />
        </div>

        <div className="demo-btn-div">
          <button className="demo-btn" onClick={() => demoLogin()}>
            Demo
          </button>
        </div>
      </form>
    </>
  );
};
