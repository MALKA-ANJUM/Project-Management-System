import React, { useState } from 'react'
import api from '../services/api';

const Register = () => {
    const [form, setForm] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        await api.post("api/auth/register", form);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <input type="text" placeholder='Name' onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <input type="email" placeholder='Email' onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <input type="password" placeholder='Password' onChange={(e) => setForm({ ...form, password: e.target.value })} />
            <button>Register</button>
        </form>
    )
}

export default Register
