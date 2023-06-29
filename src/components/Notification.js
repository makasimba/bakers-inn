import './../styles/Notification.css';
import bread from './../assets/Images/bottom-bread-group.png';
import Heading from './Heading';

const Notification = () => {
    return ( 
        <div className="container notification my-5">
            <div className="row">
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <div className="row mt-3">
                        <Heading content="Get Notified About Promotions We Offer" color="white" size="2.8rem" />
                    </div>
                    <div class="input-group mb-3 form--input">
                        <div className="d-flex email--submit w-100 align-items-center p-2">
                            <input type="text" className="form-control" placeholder="your email" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                            <button className="btn submit--button py-2" type="button" id="button-addon2">SUBMIT</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 three--loaves">
                    <img src={bread} alt="brown-blue-and-green-bread" className="img-fluid bread--group" />
                </div>
            </div>
        </div>
     );
}
 
export default Notification;