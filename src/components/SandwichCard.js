import arrow from './../assets/Images/arrow.png';
import './../styles/SandwichCard.css';

const SandwichCard = ({ title, prepTime, serves, picture }) => {
    return (
        <div className="card sandwich--card mx-1 shadow-lg d-inline-block">

            <div className="card-picture">
                <img src={picture} className="card-img-top " alt=""/>
            </div>

            <div className="card-body">

                <h5 className="card-title">{title}</h5>

                <div className="d-flex justify-content-between">
                    <div className="d-inline-block">
                        <p className="card-text">Prep Time: <span>{prepTime}</span></p>
                        <p className="card-text">Serves: <span>{serves}</span></p>
                    </div>
                    <div className="navigation-arrow-area d-inline-flex">
                        <a href="#" className="navigation--arrow">
                            <img src={arrow} alt="navigation-arrow-on-brown-bg" className="img-fluid"/>
                        </a>
                    </div>
                </div>

            </div>
        </div>
     );
}
 
export default SandwichCard;