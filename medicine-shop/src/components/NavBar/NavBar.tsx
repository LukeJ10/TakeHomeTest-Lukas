// src/components/Navbar/Navbar.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles.css'; 

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <h1 className="navbar-title">Medicine Shop</h1>
      <ul className="navbar-links">
        <li>
          <button onClick={() => navigate('/')} className="nav-button">Home</button>
        </li>
        <li>
          <button onClick={() => navigate('/register')} className="nav-button">Register</button>
        </li>
        <li>
          <button onClick={() => navigate('/login')} className="nav-button">Login</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
