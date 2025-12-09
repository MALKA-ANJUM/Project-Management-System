import React, { useContext, useState } from 'react';
import api from "../services/api";
import { AuthContext  } from '../context/AuthContext';

const Login = () => {
    const [email, setEmail] =useState("");
    const [password, setPassword] =useState("");
    const { login } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await api.post("/api/auth/login", {
            email, password,
        });

        login(res.data.user, res.data.token);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input type="email" name="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
            <input type="password" name='password' placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button>Login</button>
        </form>
    )
}

export default Login
