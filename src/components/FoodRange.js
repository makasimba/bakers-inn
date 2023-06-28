import sandwich from './../assets/Images/sandwich.png';
import pie from './../assets/Images/pie.png';
import donut from './../assets/Images/doughnut.png';
import slices from './../assets/Images/breadslices.png';
import './../styles/FoodRange.css';


const FoodRange = () => {
    return ( 
        <div className="container food">
            <div className="row ">
                <div className="col-md-3 col-sm-6 p-3 food--range">
                    <img src={sandwich} alt="" className="img-fluid"/>

                    <div className="overlay--content">
                        <p>Bread</p>
                    </div>
                    
                </div>
                <div className="col-md-3 col-sm-6 p-3 food--range">
                    <img src={pie} alt="" className="img-fluid"/>
                    <div className="overlay--content">
                        <p>Meat Pies</p>
                    </div>
                    
                </div>
                <div className="col-md-3 col-sm-6 p-3 food--range">
                    <img src={donut} alt="" className="img-fluid"/>
                    <div className="overlay--content">
                        <p>Scones</p>
                    </div>
                    
                </div>
                <div className="col-md-3 col-sm-6 p-3 food--range">
                    <img src={slices} alt="" className="img-fluid"/>
                    <div className="overlay--content">
                        <p>Donuts</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default FoodRange;