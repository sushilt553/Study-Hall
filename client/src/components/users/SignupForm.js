import React, {useState} from 'react';
import { useMutation } from '@apollo/react-hooks';
import { SIGNUP_USER } from '../../graphql/mutations';
import { IS_LOGGED_IN, CURRENT_USER } from '../../graphql/queries';
import signupPic from './images/signup.jpg';
import signupPic0 from './images/signup(0).jpg';
import signupPic1 from './images/signup(1).jpg';
import signupPic2 from './images/signup(2).jpg';

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
        <div className="signup-div">

            <div className="signup-left-side">
                <img className="signup-img" src={signupPic2} alt="signup_img"/>
            </div>

            <div className="signup-form-div">
                <h1 className="form-title">Get Started</h1>
                {errorMessage}
                <form className="signup-form"
                    onSubmit={(e) => {
                    e.preventDefault();
                    signup();
                }}>
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
                        <input className="sbm-btn" type="submit" value="Register"/>
                    </div>

                </form>
            </div>
        </div>
    )
}