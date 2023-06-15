import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './../styles/Navbar.css';
import logo from './../assets/Images/bakersinnlogo.png';
import Button from './Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light justify-content-between">

            <div className="container px-0">

                <div>
                    <Link to="/" className="navbar-brand" href="#">
                        <img src={logo} alt="" className="img-fluid" width='50%'/>
                    </Link>
                </div>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">

                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item active mx-2">
                            <Link to="/AboutUs" className="nav-link" href="#">About Us</Link>
                        </li>
                        <li className="nav-item active mx-2">
                            <Link to="/Products" className="nav-link" href="#">Products</Link>
                        </li>
                        <li className="nav-item active mx-2">
                            <Link to="/Recipes" className="nav-link" href="#">Recipes</Link>
                        </li>
                        <li className="nav-item active mx-2">
                            <Link to="/Kid" className="nav-link" href="#">Kid's Corner</Link>
                        </li>
                        <li>
                            <Link to="/Contact">
                                <Button color='#b6923d' content='CONTACT US'/>
                            </Link>
                        </li>
                    </ul>

                </div>

            </div>

        </nav>
     );
}
 
export default Navbar;