import React, { useState } from 'react';
import axios from '../../services/api';
import "./UserForm.css"

const UserForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://true-ghosts-tell.loca.lt/users', { name, email })
            .then(response => {
                console.log('User created:', response.data);
                setName('');
                setEmail('');
            })
            .catch(error => {
                console.error('There was an error creating the user!', error);
            });
    };

    return (
        <div>
            <h2>Create User</h2>
            <form className={"form"} onSubmit={handleSubmit}>
                <label>NAME</label>
                <div className={"form-field"}>
                    <input
                        className={"form-input"}
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <label>EMAIL</label>
                <div className={"form-field"}>
                    <input
                        className={"form-input"}
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default UserForm;