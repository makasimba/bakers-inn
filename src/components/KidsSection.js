import Heading from './Heading';
import Info from './Info';
import Button from './Button';
import Footer from './Footer';
import './../styles/KidsSection.css';
import { Link } from 'react-router-dom';


const KidsSection = ({ heading, content, backgroundColor, image}) => {
    return ( 
        <>
            <div style={{ backgroundColor: backgroundColor }} className="container kids-section">
                <div className="row">
                    <div className="col-6 d-flex flex-column justify-content-center">
                        <Heading content={heading} color="white" />
                        <Info content={content} color="white" />
                        <Link to="/Kid">
                            <Button content="PLAY GAME" />
                        </Link>
                    </div>
                    <div className="col-6">
                        <img src={image} alt="" className="wario--image" />
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default KidsSection;