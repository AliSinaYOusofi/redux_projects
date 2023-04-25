import React from 'react';

import './App.css';
import NewsList from './features/news/NewsList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SingleNews from './features/single/SingleNews';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<NewsList />} />
          <Route exatc path="/SingleNews/:newsTitle" element={<SingleNews />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
