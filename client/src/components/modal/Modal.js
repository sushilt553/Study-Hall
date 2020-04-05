import React from 'react';
import './modal.css';

export default ({ component: Component, close, modalString, setModal }) => {
    let button;
    if (modalString === "signup"){
        button = <button className="login-link-btn" 
            onClick={() => setModal("login")}>
            Already have an account?</button>
    }else{
        button = <button className="signup-link-btn" 
            onClick={() => setModal("signup")}>
            Create an account?</button>
    }
    return (
        <>
            <div className="modal-background" onClick={close}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    <Component />
                    {button}
                </div>
            </div>
        </>
    )
}