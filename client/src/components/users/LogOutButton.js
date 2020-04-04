import React from 'react';
import { useApolloClient } from '@apollo/react-hooks';

export default() => {
    const client = useApolloClient();

    return (
        <button className="logout-btn" onClick={() => {
            client.resetStore()
        }}>
            Logout
        </button>
    )
}