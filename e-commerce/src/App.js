import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Login from './features/Signup/Login';
import Signup from './features/Signup/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route path="/" element={<Navbar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
