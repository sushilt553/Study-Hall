import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { LOGIN_USER } from "../../graphql/mutations";
import { IS_LOGGED_IN, CURRENT_USER } from "../../graphql/queries";

export default () => {
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
      }
    },
    onError() {
      setErrorMessage("Login unsuccessful");
    },
    refetchQueries: [{ query: IS_LOGGED_IN }, { query: CURRENT_USER }]
  });

  return (
    <>
      {errorMessage}
      <form
        onSubmit={e => {
          e.preventDefault();
          login();
        }}
      >
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <input type="submit" value="Login" />
      </form>
    </>
  );
};
