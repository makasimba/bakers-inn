import Button from './Button';
import Heading from './Heading';
import Info from './Info';
import { Link } from 'react-router-dom';

const About = ({ heading, text, buttonLabel }) => {
    return ( 
        <>
            <div className="container pt-5 about">
                <div className="row">

                    <div className="col-6 p-4">
                        <Heading content={heading} color="#2d0170" />
                    </div>

                    <div className="col-6 p-4">
                        <Info content={text} color="#2d0170" />
                        <Link to="/AboutUs">
                            <Button backgroundColor={'brown'} buttonLabel={buttonLabel} />
                        </Link>
                    </div>

                </div>
            </div>
        </>
     );
}
 
export default About;