import './../styles/HeroHeader.css';

const HeroHeader = ( { color }) => {
    return ( 
        <h1 style={{color: color }} className="hero">Bringing you the <span>best value</span> at the <span>best prices.</span></h1>
     );
}
 
export default HeroHeader;