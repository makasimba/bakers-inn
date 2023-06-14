import './../styles/Info.css';

const Info = ({ content, color, alignment }) => {
    return (
            <p className="infomation" style={{color: color, textAlign: alignment }}>{content}</p>
     );
}
 
export default Info;