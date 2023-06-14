import './../styles/Heading.css';

const Heading = ({ content, color, size="3.2rem", alignment }) => {

    return ( 
        <h2 style={{ color: color, fontSize: size, textAlign: alignment }} className="heading">{content}</h2>
     );
}
 
export default Heading;