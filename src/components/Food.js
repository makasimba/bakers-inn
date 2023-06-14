import sandwich from './../assets/Images/sandwich.png';
import pie from './../assets/Images/pie.png';
import donut from './../assets/Images/doughnut.png';
import slices from './../assets/Images/breadslices.png';
import './../styles/Food.css';


const Food = () => {
    return ( 
        <div className="container food py-5">
            <div className="row row-eq-height">
                <div className="col-3 p-3">
                    <img src={sandwich} alt="" className="img-fluid"/>
                </div>
                <div className="col-3 p-3">
                    <img src={pie} alt="" className="img-fluid"/>
                </div>
                <div className="col-3 p-3">
                    <img src={donut} alt="" className="img-fluid"/>
                </div>
                <div className="col-3 p-3">
                    <img src={slices} alt="" className="img-fluid"/>
                </div>
            </div>
        </div>
     );
}
 
export default Food;