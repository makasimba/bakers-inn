import './../styles/Heading.css';

const Heading = ({ content, color }) => {

    return ( 
        <h2 style={{ color: color }}>{content}</h2>
     );
}
 
export default Heading;