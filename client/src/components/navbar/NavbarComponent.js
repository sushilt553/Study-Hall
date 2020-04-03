import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './assets/images/logo.png';
import Modal from '../modal/Modal';
import SignupForm from '../users/SignupForm';
import LoginForm from '../users/LoginForm';
import { useQuery } from '@apollo/react-hooks';
import { IS_LOGGED_IN } from '../../graphql/queries';
import LogOutButton from '../users/LogOutButton';
import "./assets/navbar.css";

export default () => {

    const [modal, setModal] = useState(null);

    const { data, loading, error } = useQuery(IS_LOGGED_IN);

    if (!data) return null;

    const buttons = data.isLoggedIn ? (
        <div className="logout-button">
            <LogOutButton />
        </div>
    ) : (
        <section className="signup-login-button">
            <button className="login-button" onClick={() => setModal("login")}>
                Log In
            </button>
            <button className="signup-button" onClick={() => setModal("signup")}>
                Get Started
            </button>
            <div className="modal-component">{modal && <Modal component={modal === "signup" ? SignupForm : LoginForm} close={() => setModal(null)} />}</div>
        </section >
        );

    return (
        <header className="navbar-header">
            <img className="logo" src={Logo} />
            {buttons}
        </header>
    )
}