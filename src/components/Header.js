import './../styles/Header.css';

const Header = ({ children=null, heading, info, image, backgroundColor, color }) => {

    const styles = {
        backgroundColor: backgroundColor,
    }

    return ( 
        <div style={styles} className="header container">
            <div className="row">

                <div className="col-lg-5 col-md-12 info-content">
                    <h1 style={{color: color}}>{heading}</h1>
                    <p style={{color: color}}>{info}</p>
                    {children}
                </div>

                <div className="col-lg-7 d-none d-lg-block image-content p-0"> 
                    <img src={image} alt="image-displayed-on-header" className="img-fluid header--image"/>
                </div>
            </div>
        </div>
     );
}
 
export default Header;