import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Login from './features/auth/Login';
import Signup from './features/auth/Signup';
import Products from './features/products/Products';
import Footer from './components/Footer';
import Categories from './features/productCategory/Categories';
import SinleProductPage from './features/products/SinleProductPage';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/product/" element={<Products />} />
          <Route exact path="/product/:productId" element={<SinleProductPage />} />
          <Route exact path="/categories/:category" element={<Categories />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
