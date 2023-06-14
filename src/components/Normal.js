import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Button from './Button';
import Heading from './Heading';
import Info from './Info';
import './../styles/Normal.css';

const Normal = ({ heading, imageUrl = null, text, buttonLabel, backgroundColor }) => {

    return (
        <>
            <div style={{ backgroundColor: backgroundColor }} className="container view py-5">
                <div className="row">
                    <div className="col-6 p-4">
                        <img src={imageUrl} alt="" className="img-fluid"/>
                    </div>
                    <div className="col-6 p-4 d-flex flex-column justify-content-center">
                        <Heading content={heading} />
                        <Info content={text} />
                        <Button color={'brown'} content={buttonLabel} />
                    </div>
                </div>
            </div>
        </>
    );

}
 
export default Normal;