import './../styles/Notification.css';
import bread from './../assets/Images/bottom-bread-group.png';
import Heading from './Heading';

const Notification = () => {
    return ( 
        <div className="container notification my-5">
            <div className="row">
                <div className="col-6 d-flex flex-column justify-content-center">
                    <Heading content="Get Notified About Promotions We Offer" color="white" size="2.8rem" />
                    <div class="input-group mb-3 form--input">
                        <input type="text" className="form-control" placeholder="your email" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        <button className="btn submit--button my-2" type="button" id="button-addon2">SUBMIT</button>
                    </div>
                </div>
                <div className="col-6">
                    <img src={bread} alt="brown-blue-and-green-bread" className="img-fluid bread--group" />
                </div>
            </div>
        </div>
     );
}
 
export default Notification;