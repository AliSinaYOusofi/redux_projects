import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Login from './features/auth/Login';
import Signup from './features/auth/Signup';
import Products from './features/products/Products';
import Categories from './features/productCategory/Categories';
import SinleProductPage from './features/products/SinleProductPage';
import UserCart from './features/cart/UserCart';
import Homepage from './components/Homepage';

function App() {


  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={ < Homepage />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/product/" element={<Products />} />
          <Route exact path="/product/:productId" element={<SinleProductPage />} />
          <Route exact path="/categories/:category" element={ <Categories />} />
          <Route exact path="/cart" element={<UserCart />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
