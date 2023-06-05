import './../styles/Info.css';

const Info = ({ content, color }) => {
    return (
            <p style={{color: color }}>{content}</p>
     );
}
 
export default Info;