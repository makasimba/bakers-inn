import './../styles/Info.css';

const Info = ({ content, color }) => {
    return (
            <p className="infomation" style={{color: color }}>{content}</p>
     );
}
 
export default Info;