import './../styles/Header.css';

const Header = ({ children=null, heading, info, image, backgroundColor, color }) => {

    const styles = {
        backgroundColor: backgroundColor,
    }

    return ( 
        <div style={styles} className="header container">
            <div className="row">
                <div className="col-5 info-content">
                    <h1 style={{color: color}}>{heading}</h1>
                    <p style={{color: color}}>{info}</p>
                    {children}
                </div>
                <div className="col-7 image-content">
                    <img src={image} alt="image-displayed-on-header" className="img-fluid header--image"/>
                </div>
            </div>
        </div>
     );
}
 
export default Header;