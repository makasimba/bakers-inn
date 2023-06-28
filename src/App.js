import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Loader from './components/Loader';

const Home = lazy(()=>import ("./components/pages/Home"));
const Kids = lazy(()=>import ("./components/pages/Kids"));
const Products = lazy(()=>import ("./components/pages/Products"));
const Recipes = lazy(()=>import ("./components/pages/Recipes"));
const Contact = lazy(()=>import ("./components/pages/Contact"));
const AboutUs = lazy(()=>import ("./components/pages/AboutUs"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader/>}>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/AboutUs" element={<AboutUs/>} />
            <Route path="/Kid" element={<Kids/>} />
            <Route path="/Products" element={<Products/>} />
            <Route path="/Recipes" element={<Recipes/>} />
            <Route path="/Contact" element={<Contact/>} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
