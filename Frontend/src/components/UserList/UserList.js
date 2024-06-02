import React, { useEffect, useState } from 'react';
import axios from '../../services/api';
import "./UserList.css"
import {Link} from "react-router-dom";

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://true-ghosts-tell.loca.lt/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the users!', error);
            });
    }, []);

    return (
        <div>
            <div className={'header'}>
                <h2 className={'header-text'}>User List</h2>
                <Link to={"/user/add"}>
                    <svg  className={'add-icon'} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M446.67-280h66.66v-166.67H680v-66.66H513.33V-680h-66.66v166.67H280v66.66h166.67V-280Zm-260 160q-27 0-46.84-19.83Q120-159.67 120-186.67v-586.66q0-27 19.83-46.84Q159.67-840 186.67-840h586.66q27 0 46.84 19.83Q840-800.33 840-773.33v586.66q0 27-19.83 46.84Q800.33-120 773.33-120H186.67Zm0-66.67h586.66v-586.66H186.67v586.66Zm0-586.66v586.66-586.66Z"/></svg>
                </Link>
            </div>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} ({user.email})</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;