import './App.css';
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import Kid from "./components/pages/Kid";
import Products from './components/pages/Products';
import Recipes from './components/pages/Recipes';
import Contact from './components/pages/Contact';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/AboutUs" element={<AboutUs/>} />
          <Route path="/Kid" element={<Kid/>} />
          <Route path="/Products" element={<Products/>} />
          <Route path="/Recipes" element={<Recipes/>} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
