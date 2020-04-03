import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal/Modal';
import SignupForm from '../users/SignupForm';
import LoginForm from '../users/LoginForm';
import { useQuery } from '@apollo/react-hooks';
import { IS_LOGGED_IN } from '../../graphql/queries';
import LogOutButton from '../users/LogOutButton';

export default () => {

    const [modal, setModal] = useState(null);

    const { data, loading, error } = useQuery(IS_LOGGED_IN);

    if (!data) return null;

    const buttons = data.isLoggedIn ? (
        <li>
            <LogOutButton />
        </li>
    ) : (
            <ul>
                <li>
                    <button onClick={() => setModal("signup")}>
                        Signup
          </button>
                </li>
                <li>
                    <button onClick={() => setModal("login")}>
                        Login
          </button>
                </li>
                {modal && <Modal component={modal === "signup" ? SignupForm : LoginForm} close={() => setModal(null)} />}
            </ul>
        );

    return (
        <>
            {buttons}
        </>
    )
}