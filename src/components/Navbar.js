
import './../styles/Navbar.css';
import logo from './../assets/Images/bakersinnlogo.png';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Button from './Button';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">

                <div>
                    <NavLink to="/" className="navbar-brand" href="#">
                        <img src={logo} alt="" className="img-fluid" width='50%'/>
                    </NavLink>
                </div>

                <NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </NavLink>

                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">

                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item mx-2">
                            <NavLink to="/AboutUs" className="nav-link" href="#">About Us</NavLink>
                        </li>

                        <li className="nav-item mx-2">
                            <NavLink to="/Products" className="nav-link" href="#">Products</NavLink>
                        </li>

                        <li className="nav-item mx-2">
                            <NavLink to="/Recipes" className="nav-link" href="#">Recipes</NavLink>
                        </li>

                        <li className="nav-item mx-2">
                            <NavLink to="/Kid" className="nav-link" href="#">Kid's Corner</NavLink>
                        </li>

                        <li>
                            <NavLink to="/Contact">
                                <Button backgroundColor='#b6923d' buttonLabel='CONTACT US'/>
                            </NavLink>
                        </li>
                    </ul>

                </div>

            </nav>
        </div>



     );
}
 
export default Navbar;