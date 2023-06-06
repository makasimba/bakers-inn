import './App.css';
import Navbar from './components/Navbar';
import Heading from './components/Heading';
import Button from './components/Button';
import Info from './components/Info';
import View from './components/View';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroHeader from './components/HeroHeader';
import Card from './components/SandwichCard';
import TallCard from './components/BreadCard';
import ValueCard from './components/ValueCard';
import Carousel from './components/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import imageOfBakers from './assets/Images/contactpeople.png';
import loaves from './assets/Images/groupheaderbread.png';
import shwarma from './assets/Images/sandwich.png';
import blueLoaf from './assets/Images/high-energy-brown.png';
import respect from './assets/Images/respect.png'

function App() {
  return (
    <div className="App">
      <Carousel />
    </div>
  );
}

export default App;
