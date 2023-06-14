import Heading from './Heading';
import Info from './Info';
import Button from './Button';
import Footer from './Footer';


const KidsSection = ({ heading, content, backgroundColor, image}) => {
    return ( 
        <>
            <div style={{ backgroundColor: backgroundColor }} className="container kids-section">
                <div className="row">
                    <div className="col-6 d-flex flex-column justify-content-center">
                        <Heading content={heading} color="white" />
                        <Info content={content} color="white" />
                        <Button content="PLAY GAME" />
                    </div>
                    <div className="col-6">
                        <img src={image} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default KidsSection;