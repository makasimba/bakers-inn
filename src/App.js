import './App.css';
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import Kid from "./components/pages/Kid";
import Products from './components/pages/Products';
import Recipes from './components/pages/Recipes';
import Contact from './components/pages/Contact';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/js/bootstrap.js';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Contact />
    </div>
  );
}

export default App;
