import 'bootstrap/dist/css/bootstrap.css';
import './../styles/Button.css';
import React, { useState } from 'react';

const Button = ({ color, content }) => {
    
    if (color === 'blue') color = '#2d0170';
    else if (color === 'brown') color = '#b6923d';

    const [hovered, setHovered] = useState(false);

    return (
        <div className="">
            <button type='button' style={{ backgroundColor: hovered ? "transparent" : color }} className='btn btn-md btn-block' onMouseOver={() => setHovered(true)} onMouseOut={() => setHovered(false)}>{content} </button>
        </div>
     );
}
 
export default Button;