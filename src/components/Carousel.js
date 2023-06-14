import './../styles/Carousel.css';
import sandwich from './../assets/Images/sandwich.png';
import pie from './../assets/Images/sweet-pie.png';

import SandwichCard from './SandwichCard';
import BreadCard from './BreadCard';

const Carousel = ({ type }) => {

    if (type === "bread") {
        return (
            <div className="container p-0 carousel">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" >

                    <div className="carousel-inner">

                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-4 p-3">
                                    <BreadCard title="Shwarma Sandwich" prepTime="20 min" serves="6 people" picture={sandwich}/>
                                </div>
                                <div className="col-4 p-3">
                                    <BreadCard title="Shrimp Sandwich" prepTime="20 min" serves="6 people" picture={sandwich}/>
                                </div>
                                <div className="col-4 p-3">
                                    <BreadCard title="Shell Fish Sandwich" prepTime="20 min" serves="6 people" picture={sandwich}/>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-4 p-3">
                                    <BreadCard title="Shwarma Sandwich" prepTime="20 min" serves="6 people" picture={pie}/>
                                </div>
                                <div className="col-4 p-3">
                                    <BreadCard title="Shwarma Sandwich" prepTime="20 min" serves="6 people" picture={pie}/>
                                </div>
                                <div className="col-4 p-3">
                                    <BreadCard title="Shwarma Sandwich" prepTime="20 min" serves="6 people" picture={pie}/>
                                </div>
                            </div>
                        </div>

                    </div>

                    <button className="carousel-control-prev justify-content-start" role="button" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next justify-content-end" role="button" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
                );

    } else if (type === "sandwich") {
        return (
            <div className="container p-0">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">

                    <div className="carousel-inner">

                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-4 p-3">
                                    <SandwichCard title="Shwarma Sandwich" prepTime="20 min" serves="6 people" picture={sandwich}/>
                                </div>
                                <div className="col-4 p-3">
                                    <SandwichCard title="Shrimp Sandwich" prepTime="20 min" serves="6 people" picture={sandwich}/>
                                </div>
                                <div className="col-4 p-3">
                                    <SandwichCard title="Shell Fish Sandwich" prepTime="20 min" serves="6 people" picture={sandwich}/>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-4 p-3">
                                    <SandwichCard title="Shwarma Sandwich" prepTime="20 min" serves="6 people" picture={pie}/>
                                </div>
                                <div className="col-4 p-3">
                                    <SandwichCard title="Shwarma Sandwich" prepTime="20 min" serves="6 people" picture={pie}/>
                                </div>
                                <div className="col-4 p-3">
                                    <SandwichCard title="Shwarma Sandwich" prepTime="20 min" serves="6 people" picture={pie}/>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-4 p-3">
                                    <SandwichCard title="Shwarma Sandwich" prepTime="20 min" serves="6 people" picture={pie}/>
                                </div>
                                <div className="col-4 p-3">
                                    <SandwichCard title="Shwarma Sandwich" prepTime="20 min" serves="6 people" picture={pie}/>
                                </div>
                                <div className="col-4 p-3">
                                    <SandwichCard title="Shwarma Sandwich" prepTime="20 min" serves="6 people" picture={pie}/>
                                </div>
                            </div>
                        </div>

                    </div>

                    <button className="carousel-control-prev justify-content-start" role="button" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next justify-content-end" role="button" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        );
    }


}

export default Carousel