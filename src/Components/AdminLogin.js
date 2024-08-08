// src/Components/AdminLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css'; // Create and customize this CSS file for styling
import image from "../images/adminlogin1.jpeg";

function AdminLogin() {
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const navigate = useNavigate();

  const handleAdminLogin = () => {
    navigate('/Home'); // Redirect to Admin Home or another page
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle admin login logic here
    console.log('Admin Email:', adminEmail);
    console.log('Admin Password:', adminPassword);
  };

  return (
    <div className='total' style={{backgroundImage: `url(${image})`}}>   
     <div className="admin-login-container" style={{ backgroundColor: "#fcfbf7" }}>
      <h2 style={{ paddingBottom: '50px', textAlign: 'center' }}>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="admin-email">Email:</label>
          <input
            type="email"
            id="admin-email"
            value={adminEmail}
            onChange={(e) => setAdminEmail(e.target.value)}
            required
            style={{ height: '40px' }}
          />
        </div>
        <div>
          <label htmlFor="admin-password">Password:</label>
          <input
            type="password"
            id="admin-password"
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
            required
            style={{ height: '40px' }}
          />
        </div>
        <button type="submit" onClick={handleAdminLogin} style={{ marginTop: '20px' }}>Login</button>
      </form>
    </div>
    </div>
  );
}

export default AdminLogin;
