import './../styles/BreadCard.css';

const BreadCard = ({ children, title, picture }) => {

    const heading = title.split(" ").slice(0, -2).join(" ");
    const subheading = title.split(" ").slice(-2, ).join(" ");

    return (
        <div className="card bread-card shadow-lg">

            <div className="card-picture">
                <img src={picture} className="card-img-top img-fluid" alt=""/>
            </div>

            <div className="card-body">
                <h5 className="card-title">{heading}</h5>
                <h5 className="card-title">{subheading}</h5>
                {children}
            </div>
            
        </div>
     );
}
 
export default BreadCard;