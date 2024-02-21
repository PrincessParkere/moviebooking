import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import ManageMovie from './components/ManageMovie';
import ManagePromotions from './components/ManagePromotions';
import ManageUsers from './components/ManageUsers';

function App() {
  const [isAdmin, setIsAdmin] = useState(false); // Replace this with actual authentication logic

  const handleLogin = () => {
    // Placeholder function to simulate an admin login
    setIsAdmin(true);
  };

  const handleLogout = () => {
    // Placeholder function to simulate a logout
    setIsAdmin(false);
  };
  return (
    <Router>
      <div>
        <nav>
        <Link to="/">Home</Link>
          {isAdmin && <Link to="/manage-movies">Manage Movies</Link>}
          {isAdmin && <Link to="/manage-promotions">Manage Promotions</Link>}
          {isAdmin && <Link to="/manage-users">Manage Users</Link>}
          {/* Add a login/logout button for demonstration */}
          {!isAdmin ? (
            <button onClick={handleLogin}>Admin Login</button>
          ) : (
            <button onClick={handleLogout}>Logout</button>
          )}
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {isAdmin && <Route path="/manage-movies" element={<ManageMovie />} />}
          {isAdmin && <Route path="/manage-promotions" element={<ManagePromotions />} />}
          {isAdmin && <Route path="/manage-users" element={<ManageUsers />} />}
          {/* Redirect non-admin users if they try to access admin pages directly */}
          <Route path="/manage-movies" element={<p>Access denied. Admins only.</p>} />
          <Route path="/manage-promotions" element={<p>Access denied. Admins only.</p>} />
          <Route path="/manage-users" element={<p>Access denied.</p>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

