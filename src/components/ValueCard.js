import './../styles/ValueCard.css';

const ValueCard = ({ heading, info, picture }) => {
    return ( 
        <div className="card value">
            <div>
                <img src={picture} className="card-img-top img-fluid" alt="..."/>
            </div>
            <div className="card-body">
            <h5 className="card-title">{heading}</h5>
            <p className="card-text">{info}</p>
            </div>
        </div>
     );
}
 
export default ValueCard;