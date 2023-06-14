import wario from './../assets/Images/mariofinal.png';
import kids from './../assets/Images/Kids.png';
import corner from './../assets/Images/Corner.png';
import './../styles/Corner.css';
import Button from './../components/Button';

const Corner = () => {
    
    return ( 
        <div className="container corner">
            <div className="row">

                <div className="col-6">
                    <img src={wario} alt="" className="img-fluid"/>
                </div>

                <div className="col-6 d-flex flex-column justify-content-center">
                    <div className="row align-items-center">
                        <div className="col-6">
                            <img src={kids} alt="" className="img-fluid"/>
                        </div>
                        <div className="col-6 align-items-center">
                            <img src={corner} alt="" className="img-fluid corner-image"/>
                        </div>
                    </div>
                    <p>Let your children join the fun. Explore a place with exciting games and the top winners tand a chance towin exiciting monthly prizes!</p>
                    <Button content="Play Games" color="#ff1d43"/>
                </div>
            </div>
        </div>
     );
}
 
export default Corner;