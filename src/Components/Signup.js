import React, { useState } from 'react';
import img from '../images/view-ready-eat-delicious-meal-go.jpg';
import './Signup.css';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle signup logic here (e.g., API call)
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
        
        // Assuming signup is successful, navigate to Home
        navigate('/home');
    };
    const handleLogin =() =>{
        navigate('/Login');
    }
    return (
        
        <div className='pic' style={{backgroundImage: `url(${img})`}}>
        <div className="signup-container" >
            <div className="signup-form">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
                <p>Already Have an Account? <Link to="/Login" onClick={handleLogin}>Login here</Link></p>
            </div>
            
        </div>
        </div>
    );
};

export default Signup;
