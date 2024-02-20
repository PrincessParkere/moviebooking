import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import ManageMovie from './components/ManageMovie';
import ManagePromotions from './components/ManagePromotions';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> | <Link to="/manage-movie">Manage Movies</Link> | 
          <Link to="/manage-promotions">Manage Promotions</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/manage-movie" element={<ManageMovie />} />
          <Route path="/manage-promotions" element={<ManagePromotions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

