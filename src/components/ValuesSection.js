import Heading from './Heading';
import ValueCard from './ValueCard';
import respect from './../assets/Images/respect.png';
import work from './../assets/Images/teamwork.png';
import commitment from './../assets/Images/commitment.png';
import excellence from './../assets/Images/excellence.png';
import integrity from './../assets/Images/integrity.png';
import './../styles/ValuesSection.css';

const ValuesSection = () => {
    return ( 
        <div className="container values">
            <div className="row">
                <div className="col-4">
                    <ValueCard heading="Team Work" info="We build self-esteem by treating each other fairly, communicating directly and respectfully. We have empathy, discipline and build on our diversity as a source of strength, creativity and innovation." picture={work} />
                </div>
                <div className="col-4">
                    <ValueCard heading="Respect" info="We build self-esteem by treating each other fairly, communicating directly and respectfully. We have empathy, discipline and build on our diversity as a source of strength, creativity and innovation." picture={respect} />
                </div>
                <div className="col-4">
                    <ValueCard heading="Integrity" info="We build self-esteem by treating each other fairly, communicating directly and respectfully. We have empathy, discipline and build on our diversity as a source of strength, creativity and innovation." picture={integrity} />
                </div>
            </div>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-4">
                    <ValueCard heading="Commitment" info="We build self-esteem by treating each other fairly, communicating directly and respectfully. We have empathy, discipline and build on our diversity as a source of strength, creativity and innovation." picture={commitment} />
                </div>
                <div className="col-4">
                    <ValueCard heading="Excellence" info="We build self-esteem by treating each other fairly, communicating directly and respectfully. We have empathy, discipline and build on our diversity as a source of strength, creativity and innovation." picture={excellence} />
                </div>
                <div className="col-2"></div>
            </div>
        </div>
     );
}
 
export default ValuesSection;