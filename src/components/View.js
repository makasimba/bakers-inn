import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Button from './../components/Button';
import Heading from './../components/Heading';
import Info from './../components/Info';
import './../styles/View.css';

const View = ({ heading, imageUrl = null, text, buttonLabel, backgroundColor }) => {

    if (imageUrl) {
            return ( 
                <>
                    <div style={{ backgroundColor: backgroundColor }} className="container">
                        <div className="row">
                            <div className="col-6 p-4">
                                <Heading content={heading} />
                            </div>
                            <div className="col-6 p-4">
                                <Info content={text} />
                                <Button color={'brown'} content={buttonLabel} />
                            </div>
                        </div>
                    </div>
                </>
            );
    } else {
        return (
            <>
                <div style={{ backgroundColor: backgroundColor }} className="container">
                    <div className="row">
                        <div className="col-6 p-4">
                            <img src={imageUrl} alt="" className="img-fluid"/>
                        </div>
                        <div className="col-6 p-4">
                            <Heading content={heading} />
                            <Info content={text} />
                            <Button color={'brown'} content={buttonLabel} />
                        </div>
                    </div>
                </div>
            </>
        );

    }

}
 
export default View;