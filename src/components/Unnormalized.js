import Button from './Button';
import Heading from './Heading';
import Info from './Info';
import './../styles/Unnormalized.css';

const Unnormalized = ({ heading, imageUrl = null, text, buttonLabel, backgroundColor }) => {
    return ( 
        <>
            <div style={{ backgroundColor: backgroundColor }} className="container py-5 view">
                <div className="row">
                    <div className="col-6 p-4 d-flex flex-column justify-content-center">
                        <Heading content={heading} />
                        <Info content={text} />
                        <Button color={'brown'} content={buttonLabel} />
                    </div>
                    <div className="col-6 p-4">
                        <img src={imageUrl} alt="" className="img-fluid"/>
                    </div>

                </div>
            </div>
        </>
     );
}
 
export default Unnormalized;