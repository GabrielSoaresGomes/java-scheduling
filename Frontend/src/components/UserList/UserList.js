import React, { useEffect, useState } from 'react';
import axios from '../../services/api';
import "./UserList.css"

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
            <h2>User List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} ({user.email})</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;