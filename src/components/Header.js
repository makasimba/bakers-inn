import './../styles/Header.css';

const Header = ({ children=null, heading, info, image, backgroundColor, color }) => {

    const styles = {
        backgroundColor: backgroundColor,
    }

    return ( 
        <div style={styles} className="header container">
            <div className="row">

                <div className="col-lg-5 info-content">
                    <h1 style={{color: color}}>{heading}</h1>
                    <p style={{color: color}}>{info}</p>
                    {children}
                </div>

                <div className="col-lg-7 d-md-none d-lg-block image-content"> 
                    <img src={image} alt="image-displayed-on-header" className="img-fluid header--image d-sm-none"/>
                </div>
            </div>
        </div>
     );
}
 
export default Header;