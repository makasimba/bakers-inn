import 'bootstrap/dist/css/bootstrap.css';
import './../styles/Button.css';
import React, { useState } from 'react';

const Button = ({ backgroundColor, buttonLabel }) => {
    
    if (backgroundColor === 'blue') backgroundColor = '#2d0170';
    else if (backgroundColor === 'brown') backgroundColor = '#b6923d';

    const [hovered, setHovered] = useState(false);

    return (
        <div className="general--button">

            <button type='button' style={{ borderWidth: "2px", borderColor: backgroundColor, backgroundColor: hovered ? "transparent" : backgroundColor }} className='btn btn-md btn-block mb-3' onMouseOver={() => setHovered(true)} onMouseOut={() => setHovered(false)}>{buttonLabel}</button>

        </div>
     );
}
 
export default Button;