import React from 'react';
import {useQuery} from "@apollo/react-hooks";
import { CURRENT_USER } from '../../graphql/queries';
import SidebarCategories from './SidebarCategories';

export default ({attempts, setAttempts, home}) => {

    const { data: dataR, loading: loadingR, error: errorR } = useQuery(CURRENT_USER);

    if (loadingR) return <p>Loading...</p>
    if (errorR) return <p>ERROR</p>
    if (!dataR) return <p>Not found</p>

    const user = dataR.me;
    return (
        <SidebarCategories user={user} attempts={attempts} setAttempts={setAttempts} home={home}/>
    )
}