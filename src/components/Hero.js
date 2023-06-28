import './../styles/Hero.css';

const Hero = ( { color }) => {
    return ( 
        <h1 style={{color: color }} className="hero p-0 mb-3">Bringing you the <span>best value</span> at the <span>best prices.</span></h1>
     );
}
 
export default Hero;