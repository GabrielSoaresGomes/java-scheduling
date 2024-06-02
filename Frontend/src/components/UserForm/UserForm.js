import React, { useState } from 'react';
import axios from '../../services/api';
import "./UserForm.css"
import {Link} from "react-router-dom";

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
            <div className={'header'}>
                <h2 className={'header-text'}>Create User</h2>
                <Link to={"/"}>
                    <svg className={'return-icon'} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>
                </Link>
            </div>
            <form className={"form"} onSubmit={handleSubmit}>
                <label className={'input-label'}>NAME</label>
                <div className={"form-field"}>
                    <input
                        className={"form-input"}
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <label className={'input-label'}>EMAIL</label>
                <div className={"form-field"}>
                    <input
                        className={"form-input"}
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button className={'save-btn'} type="submit">Create</button>
            </form>
        </div>
    );
};

export default UserForm;