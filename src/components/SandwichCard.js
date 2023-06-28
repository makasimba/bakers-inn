import arrow from './../assets/Images/arrow.png';
import './../styles/SandwichCard.css';
import clockicon from './../assets/Images/watch.png';
import spoonandfork from './../assets/Images/watch.png';
import sandwich from './../assets/Images/sandwich.png';
import smallersandwich from './../assets/Images/shwarma.png';


const SandwichCard = ({ title, prepTime, serves, picture }) => {
    return (
        <div className="card sandwich--card shadow-md h-100">

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
                        <a href="#" className="navigation--arrow" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <img src={arrow} alt="navigation-arrow-on-brown-bg" className="img-fluid"/>
                        </a>

                        <div class="modal modal-xl fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

                            <div class="modal-dialog">

                                <div class="modal-content">

                                    <div class="modal-header">
                                        <button type="button" class="btn-close modal--close--btn" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>

                                    <div class="modal-body">
                                        <div className="row">

                                            <div className="col-4">
                                                <div className="row">
                                                    <div className="top--image px-0">
                                                        <img src={sandwich} alt="" className="img-fluid px-0" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-8">

                                                <div className="row">
                                                    <h5 className="py-2">Shwarma Sandwich</h5>
                                                </div>

                                                <div className="row">
                                                    <div className="col-12 d-flex ">

                                                        <div className="row w-100">

                                                            <div className="col-6">
                                                                <div className="d-flex align-items-center px-0">
                                                                    <div>
                                                                        <img src={clockicon} alt="" className="img-fluid" />
                                                                    </div>
                                                                    <p className="recipe--information px-2 py-0 m-0">5 Minutes</p>
                                                                </div>
                                                            </div>

                                                            <div className="col-6">
                                                                <div className="d-flex align-items-center px-0">
                                                                    <div>
                                                                        <img src={spoonandfork} alt="" className="img-fluid" />
                                                                    </div>
                                                                    <p className="recipe--information px-2 py-0 m-0">6 People</p>
                                                                </div>
                                                            </div>

                                                        </div>

                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <h5 className="py-2">Ingredients</h5>
                                                    <div className="col-6">
                                                        <p>1/2 cup olive oil</p>
                                                        <p>1/2 cup ranch dressing</p>
                                                        <p>3 tablespoons Worcestershire sauce</p>
                                                        <p>1 tablespoon minced fresh rosemary</p>
                                                    </div>
                                                    <div className="col-6">
                                                        <p>2 teaspoons salt</p>
                                                        <p>1 teaspoon lemon</p>
                                                        <p>1 teaspoon white vinegar</p>
                                                        <p>1/4 teaspoon grounded black pepper</p>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <h5>Directions</h5>
                                                </div>
                                            </div>
                                        
                                        </div>

                                        <div className="row second--modal--row">

                                            <div className="col-4">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="row pe-0">
                                                            <div className="col-6 px-1 py-1">
                                                                <div>
                                                                    <img src={sandwich} alt="" className="img-fluid pe-0" />
                                                                </div>
                                                            </div>
                                                            <div className="col-6 px-1 py-1">
                                                                <div>
                                                                    <img src={sandwich} alt="" className="img-fluid pe-0" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row pe-0">
                                                            <div className="col-6 px-1 py-1">
                                                                <div>
                                                                    <img src={sandwich} alt="" className="img-fluid pe-0" />
                                                                </div>
                                                            </div>
                                                            <div className="col-6 px-1 py-1">
                                                                <div>
                                                                    <img src={sandwich} alt="" className="img-fluid pe-0" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-8">
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <h5>Step 1</h5>
                                                            <p>In a medium bowl, stir together the olive oil, ranch dressing, Worcestershire sauce, rosemary, salt, lemon juice, white vinegar, pepper, and sugar. Let stand for 5 minutes. Place chicken in the bowl, and stir to coat with the marinade. Cover and refrigerate for 30 minutes</p>
                                                        </div>
                                                        <div className="col-6">
                                                            <h5>Step 2</h5>
                                                            <p>Preheat the grill for medium-high heat. Thread chicken onto skewers and discard marinade.</p>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-6">
                                                            <h5>Step 3</h5>
                                                            <p>Lightly oil the grill grate. Grill skewers for 8 to 12 minutes, or until the chicken is no longer pink in the center, and the juices run clear.</p>
                                                        </div>
                                                        <div className="col-6"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
     );
}
 
export default SandwichCard;