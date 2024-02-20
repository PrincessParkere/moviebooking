import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import ManageMovie from './components/ManageMovie';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> | <Link to="/manage-movie">Manage Movies</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/manage-movie" element={<ManageMovie />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

