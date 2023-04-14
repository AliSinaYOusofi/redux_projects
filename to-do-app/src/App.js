import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import EditTodos from './features/tasks/EditTodos';

function App() {

  return (
    <div className="App relative">
      <Router>
        <Routes>
          <Route exact path="/todos/:todoId" element={<EditTodos />} />
          <Route path="/" element={<Sidebar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
