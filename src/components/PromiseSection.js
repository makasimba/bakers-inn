import ceo from './../assets/Images/ceo.png';
import signature from './../assets/Images/signature.png';
import Heading from './Heading';
import Info from './Info';
import './../styles/PromiseSection.css';

const PromiseSection = () => {
    
    return (
        <>
            <div className="container view py-5">
                <div className="row">
                    <div className="col-md-6 p-4">
                        <img src={ceo} alt="" className="img-fluid"/>
                    </div>
                    <div className="col-md-6 p-4 d-flex flex-column justify-content-center">
                        <Heading content="PROMISE OF QUALITY" size="2.5rem"/>
                        <Info color="#2d0170" content="Thank you for visiting our website. At Baker's Inn, we are committed to delivering quality premium bread to our customers. We work with a team of over 1500 employees nationwide. Our aim is to uphold the highest ethical standards and perpetuate excellence in the delivery of our products. For us at Baker's Inn, we aim to improve the accessibility of our bread. We are accoutable to our stakeholders to deliver what we promise.\nWe translate plans into actions; dreams into reality; strategies into achievements and tangible returns. We strive to be the best in our business and in our partnerships. We are committed to every retail outlet, tuckshop, vendor and consumer in Zimbabwe who stock or consume our nourishing bread throughout Zimbabwe. We have built our top-quality brand and continue to grow as a company because of you. Thank you for your continued support of our brand.\nWe set inspirin goals that we pursue with passion, unity and focus. We support each other, build on our strengths and ensure that every player in our team contributes fully. We play to win and realise that synergy, communication and alignment bind us together." />
                        <div className="d-flex justify-content-end">
                            <div className="d-flex align-items-end">
                                <p className="mb-0" id="ceo--title">C.E.O: </p>
                            </div>
                            <div className="p-3 ceo--signature">
                                <img src={signature} alt="" className="img-fluid" id=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default PromiseSection;