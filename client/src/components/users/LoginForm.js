import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import {useHistory} from 'react-router-dom';
import { LOGIN_USER } from "../../graphql/mutations";
import { IS_LOGGED_IN, CURRENT_USER } from "../../graphql/queries";

export default () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [login, { loading, error }] = useMutation(
    LOGIN_USER, {
    variables: {
      username,
      password
    },
    update(cache, { data: { login } }) {
      if (!login) {
        setErrorMessage("Invalid username or password");
      } else {
        localStorage.setItem("token", login.token);
        cache.writeQuery({query: IS_LOGGED_IN, data: {isLoggedIn: true}})
        history.push("/home");
      }
    },
    onError() {
      setErrorMessage("Login unsuccessful");
    },
    refetchQueries: [{ query: CURRENT_USER }],
  });

  return (
    <>
      <h1 className="form-title">Log In</h1>
      {errorMessage}
      <form className="login-form"
        onSubmit={e => {
          e.preventDefault();
          login();
        }}
      >

        <div>
            <input
              className="username-input"
              type="text"
              value={username}
              placeholder="Username"
              onChange={e => setUsername(e.target.value)}
            />
        </div>

        <div>
          <input
            className="password-input"
            type="password"
            value={password}
            placeholder = "Password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <div>
          <input className="sbm-btn" type="submit" value="Log In"/>
        </div>

        <div className="create-account-btn">
            <button>
                Create an account?
            </button>
        </div>

      </form>
    </>
  );
};
