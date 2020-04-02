import React from 'react';
import {Link} from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { IS_LOGGED_IN } from '../../graphql/queries';
import LogOutButton from '../users/LogOutButton';

export default () => {

    const {data, loading, error} = useQuery(IS_LOGGED_IN);

    if (!data) return null;

    const buttons = data.isLoggedIn ? 
        <li>
            <LogOutButton />
        </li>
    :
        <ul>
            <li>
                <Link to={`/signup`}>Signup</Link>
            </li>
            <li>
                <Link to={`/login`}>Login</Link>
            </li>
        </ul>

    return (
        <>
            {buttons}
        </>
    )
}