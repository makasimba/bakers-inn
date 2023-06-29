import wario from './../assets/Images/mariofinal.png';
import kids from './../assets/Images/Kids.png';
import corner from './../assets/Images/Corner.png';
import './../styles/Corner.css';
import Button from './../components/Button';

const Corner = () => {
    
    return ( 
      <div className="container corner">
            <div className="row">

                <div className="col-lg-6 d-none d-lg-block d-flex mario--image">
                    <img src={wario} alt="" className="img-fluid responsive"/>
                </div>

                <div className="col-lg-6 text-center d-flex flex-column align-items-center justify-content-center">
                    <p id="kidscorner" className="my-0">Kids Corner</p>
                    <p className="mb-4" id="corner--content" >Let your children join the fun. Explore a place with exciting games and the top winners tand a chance to win exiciting monthly prizes!</p>
                    <Button buttonLabel="Play Games" backgroundColor="#ff1d43" />
                </div>
            </div>
        </div>
     );
}
 
export default Corner;