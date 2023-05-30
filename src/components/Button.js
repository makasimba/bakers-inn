import 'bootstrap/dist/css/bootstrap.css';
import './../styles/Button.css';

const Button = ({color, content}) => {
    
    if (color === 'blue') color = '#2d0170';
    else if (color === 'brown') color = '#b6923d';

    const buttonStyle = {
        backgroundColor: color,
    }

    return (
        <button type='button' style={buttonStyle} className='btn btn-md'>{content}</button>
     );
}
 
export default Button;