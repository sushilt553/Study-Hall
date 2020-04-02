import React from 'react';
import SignupForm from '../components/users/SignupForm';
import {Link} from 'react-router-dom';
export default () => {
    return (
      <>
        <SignupForm />
        <Link to={`/login`}>Login</Link>
      </>
    );
}