import './../styles/MissionCard.css';
import Heading from './Heading';

const MissionCard = ({ icon, heading, content }) => {
    return ( 
        <>
            <div className="card mission--card border-0" style={{maxWidth: "540px"}} >
                <div className="row g-0">
                    <div className="col-md-4">
                        <div className="">
                            <img src={icon} className="img-fluid icon rounded-start" alt="..."/>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body ms-2 px-0">
                            <Heading content={heading} color="#2d0170" size="2.8rem" />
                            <p className="card-text"> {content} </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default MissionCard;