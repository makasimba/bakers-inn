import './../styles/Footer.css';
import breakfast from './../assets/Images/HOTBUN.png';
import sandwiches from './../assets/Images/insta-feed.png';
import veggies from './../assets/Images/instafeed.png';
import logo from './../assets/Images/footer-logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import facebookicon from './../assets/Images/facebook.png';
import twittericon from './../assets/Images/twitter.png';
import linkedinicon from './../assets/Images/linkedin.png';
import innscorlogo from './../assets/Images/inscor_logo.png';

const Footer = () => {
    return (
        <footer >
            <div className="container mt-5">
                <div className="row baker-logo--section">
                    <div className="col-5 white-border"></div>
                    <div className="col-2 d-flex justify-content-center image-div">
                        <img src={logo} alt="" className="img-fluid logo--image"/>
                    </div>
                    <div className="col-5 white-border"></div>
                </div>
                <div className="row d-flex company-info--section mt-4">
                    <div className="col-5">
                        <div className="row">
                            <h3>Instagram Feed</h3>
                            <div className="col-3 p-2">
                                <img src={breakfast} alt="" className="img-fluid" />
                            </div>
                            <div className="col-3 p-2">
                                <img src={sandwiches} alt="" className="img-fluid" />
                            </div>
                            <div className="col-3 p-2">
                                <img src={veggies} alt="" className="img-fluid" />
                            </div>
                            <div className="col-3 p-2"></div>
                        </div>
                    </div>
                    
                    <div className="col-7">
                        <div className="row d-flex">
                            <div className="col-3">
                                <h3>Our Location</h3>
                                <p>1 Shepperton Road,</p>
                                <p>Graniteside,</p>
                                <p>Harare,</p>
                                <p>Zimbabwe</p>
                            </div>    
                            <div className="col-1"></div>
                            <div className="col-4">
                                <h3>Get In Touch With Us</h3>
                                <p>08080151</p>
                                <p>08080152</p>
                                <p className="marketing">marketing@bakersinnzim.com</p>
                            </div> 
                            <div className="col-1"></div>
                            <div className="col-3">
                                <h3>Sitemap</h3>
                                <p>Home</p>
                                <p>About Us</p>
                                <p>Products</p>
                                <p>Recipes</p>
                                <p>Kids Corner</p>
                            </div>                       
                        </div>
                    </div>
                </div>
                <div className="row social-media--section pb-3">
                    <ul className="d-flex m-0 list-unstyled">
                        <li className="p-1">
                            <img src={twittericon} alt=""/>
                        </li>
                        <li className="p-1">
                            <img src={facebookicon} alt=""/>
                        </li>
                        <li className="p-1">
                            <img src={linkedinicon} alt=""/>
                        </li>
                    </ul>
                </div>
                <div className="row copyright--section">
                    <div className="d-flex align-items-end justify-content-between p-2">

                        <div className="d-flex align-items-end px-0">
                            <p className="mb-0 pb-1">Subsidiary of</p>
                            <div className="ps-1">
                                <img src={innscorlogo} alt="" className="img-fluid"/>
                            </div>
                        </div>

                        <div className="p-0 m-0 copyright">
                            <p className="m-0">Copyright &copy; 2023 Bakers Inn. All rights reserved. Site by <span className="creator">NoWalls Pan Africa</span> </p>
                        </div>

                    </div>

                </div>
            </div>
        </footer>
     );
}
 
export default Footer;