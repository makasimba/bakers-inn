import './../styles/ImageHeader.css';
import arrow from './../assets/Images/arrow-down.png';

const ImageHeader = ({ image, heading }) => {

    return ( 
        <div className="container about--header mb-5">
            <div className="header--container">
                <img src={image} alt="" className="img-fluid" />
                <div className="header-text">
                    <h2>{heading}</h2>
                </div>
                <div className="down-arrow" >
                    <img src={arrow} alt="" className="img-fluid" />
                </div>
            </div>
        </div>
     );
}
 
export default ImageHeader;