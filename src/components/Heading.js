import './../styles/Heading.css';

const Heading = ({ content, color, size="3.2rem", alignment }) => {

    return ( 
        <h2 style={{ color: color, fontSize: size, textAlign: alignment }} className="heading py-2 mt-5">{content}</h2>
     );
}
 
export default Heading;