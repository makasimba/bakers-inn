import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './../styles/Navbar.css';
import logo from './../assets/Images/bakersinnlogo.png';
import Button from './Button';

const Navbar = () => {
    return (
        <div className='container-fluid'>

            <nav className="navbar navbar-expand-lg navbar-light">

                <div>
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="the-bakers-inn-company-logo" className="img-fluid" width='50%'/>
                    </a>
                </div>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto mx-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Recipes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Kid's Corner</a>
                        </li>
                        <li>
                            <Button color='#b6923d' content='CONTACT US'/>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
     );
}
 
export default Navbar;