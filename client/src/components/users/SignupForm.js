import React, {useState} from 'react';
import { useMutation } from '@apollo/react-hooks';
import { SIGNUP_USER } from '../../graphql/mutations';
import { IS_LOGGED_IN, CURRENT_USER } from '../../graphql/queries';

export default () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("")
    const [signup, {loading, error}] = useMutation(
        SIGNUP_USER,
        {
            variables: {
                username,
                password
            },
            update(cache, {data: { signup }}){
                if (!signup){
                    setErrorMessage("Invalid username or password");
                }else{
                    localStorage.setItem('token', signup.token)
                }
            },
            onError() {
                setErrorMessage("Signup unsuccessful");
            },
            refetchQueries: [{query: IS_LOGGED_IN}, {query: CURRENT_USER}]
        }
    )

    return (
        <>
            {errorMessage}
            <form onSubmit={(e) => {
                e.preventDefault();
                signup();
            }}>
                <label>Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </label>
                <label>Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <input type="submit" value="Signup"/>
            </form>
        </>
    )
}