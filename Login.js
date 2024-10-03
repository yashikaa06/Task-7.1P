import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase'; 
import { signInWithEmailAndPassword } from "firebase/auth"; 
import '../styles/Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password); 
            console.log('Logged in successfully');
            navigate('/');
        } catch (error) {
            console.error('Error logging in', error);
            alert(error.message); 
        }
    };

    return (
        <div className="login-container" style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
            <form onSubmit={handleLogin} className="login-form">
                <div className="header">
                    <h2 style={{ fontFamily: 'Monaco, monospace', color: '#007bff' }}>Login</h2>
                    <span className="sign-up" onClick={() => navigate('/signup')} style={{ color: '#007bff', cursor: 'pointer' }}>
                        Create a Dev@Deakin account
                    </span>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Your email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ fontFamily: 'Monaco, monospace' }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Your password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ fontFamily: 'Monaco, monospace' }}
                    />
                </div>
                <button type="submit" style={{ backgroundColor: '#007bff', color: '#fff', fontFamily: 'Monaco, monospace' }}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
