import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import img from '../images/loginbg2.jpeg';
import './Login.css'; // Import the CSS file

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/Home');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="pic2" style={{backgroundImage: `url(${img})`}}>
      
      <div className="login-container">
        <h2 style={{ paddingBottom: '50px', textAlign: 'center' }}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ height: '40px' }}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ height: '40px' }}
            />
          </div>
          <button type="submit" onClick={handleLogin} style={{ marginTop: '20px' }}>Login</button>
        </form>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Link to="/admin-login" style={{fontSize: 20}}>Admin-Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
