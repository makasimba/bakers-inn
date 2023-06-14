import ImageHeader from './../ImageHeader';
import breadFactory from './../../assets/Images/contactusheader.png';
import bulawayoStore from './../../assets/Images/contactstore.png';
import harareStore from './../../assets/Images/about-us-header.png';
import bakers from './../../assets/Images/contactpeople.png';
import Navbar from './../Navbar';
import Heading from './../Heading';
import Info from './../Info';
import Footer from './../Footer';
import './../../styles/Contact.css';


const Contact = () => {
    
    return ( 
        <>
            <Navbar />
            <ImageHeader heading="Contact Us" image={breadFactory} />

            <div className="container factories-section my-5 py-5">
                <div className="row">
                    <div className="col-6 px-5">
                        <div>
                            <img src={bulawayoStore} alt="" className="img-fluid" />
                        </div>
                        <Heading content="Harare Bread Factory" color="#2d0170" size="2rem" />
                        <Info content="1 Shepperton Road, Graniteside, Harare" />
                        <p><span className="primary--highlight">VOIP: </span>08677006178</p>
                        <p><span className="primary--highlight">Econet Toll Free: </span>08080151, 08080152</p>
                    </div>

                    <div className="col-6 px-5">
                        <div>
                            <img src={harareStore} alt="" className="img-fluid" />
                        </div>
                        <Heading content="Bulawayo Bread Factory" color="#2d0170" size="2rem" />
                        <Info content="22 A Bellevue Road, Belmont, Bulawayo" />
                        <p><span className="primary--highlight">VOIP: </span>08677006178</p>
                        <p><span className="primary--highlight">Econet Toll Free: </span>08080151, 08080152</p>
                    </div>
                </div>
            </div>

            <div className="container depots-section py-5">
                <Heading content="List of Baker's Inn Depots" color="#2d0170" size="2.8rem" alignment="center" />
                <table className="table table-bordered my-4">
                    <thead>
                        <tr>
                        <th scope="col">Depot</th>
                        <th scope="col">Address</th>
                        <th scope="col">Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Chinhoyi Depot</th>
                            <td>94/95 Josiah Tongogara St. Industrial Site, Chinhoyi</td>
                            <td>0772 318 309</td>
                        </tr>

                        <tr>
                            <th scope="row">Bindura Depot</th>
                            <td>461 Luton Road, Industrial Site, Bindura</td>
                            <td>066 2197317</td>
                        </tr>

                        <tr>
                            <th scope="row">Murehwa Depot</th>
                            <td>Stand number 351 Murehwa Growth Point</td>
                            <td>0652 122 514</td>
                        </tr>

                        <tr>
                            <th scope="row">Mutare Depot</th>
                            <td>5-7 Glasgow Road, Industrial Site, Mutare</td>
                            <td>020 60715</td>
                        </tr>


                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                        </tr>


                        <tr>
                            <th scope="row">Hwange Depot</th>
                            <td>29 Derby Drive, Hwange Industrial Site</td>
                            <td>0281 2820105</td>
                        </tr>


                        <tr>
                            <th scope="row">Chiredzi Depot</th>
                            <td>329 Lion Drive, Chiredzi</td>
                            <td>0231 231 2709</td>
                        </tr>


                        <tr>
                            <th scope="row">Masvingo Depot</th>
                            <td>1310 Mineral Road, Masvingo</td>
                            <td>039 266 333</td>
                        </tr>


                        <tr>
                            <th scope="row">Gweru Depot</th>
                            <td>1843 Main Street Gweru</td>
                            <td>054 2220 858</td>
                        </tr>

                        <tr>
                            <th scope="row">Zvishavane Depot</th>
                            <td>Shabane Mine Club, Noelville, Zvishavane</td>
                            <td>0772 395567</td>
                        </tr>

                    </tbody>
                </table>
            </div>

            <div className="container enquiries">
                <div className="p-5 enquiries--bakers--img" >
                    <img src={bakers} alt="" className="img-fluid" />
                </div>
                <div className="row pb-4">
                    <div className="col-6 d-flex flex-column align-items-center">
                        <div>
                            <h4>For job enquiries, email your CV to</h4>
                            <p className="email">hr@bakersinnzim.com</p>
                        </div>
                    </div>
                    <div className="col-6 d-flex flex-column align-items-center">
                        <div>
                            <h4>For general enquiries, email your CV to</h4>
                            <p className="email">marketing@bakersinnzim.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container form-section py-5 my-5">
                
                <Heading content="Request A Callback" color="#2d0170" size="2.8rem" alignment="center" />
                <Info content="Complete the form below and we will respond within 24 hours" color="#2d0170" alignment="center" />
                
                <form>
                    <div className="row">
                        <div className="col-6">
                            <div className="form-floating">
                                <select className="form-select" id="titleSelect">
                                    <option selected></option>
                                    <option value="1">Mr</option>
                                    <option value="2">Mrs</option>
                                    <option value="3">Miss</option>
                                    <option value="4">Dr</option>
                                </select>
                                <label for="floatingInput">Your Title</label>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                <label for="floatingInput" className="form-label" >Your Name</label>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <div class="form-floating">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                <label for="floatingInput" className="form-label" >Your Phone Number</label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                <label for="floatingInput" className="form-label" >Your E-mail</label>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <div className="form-floating mb-3">
                                <select className="form-select" id="locationSelect">
                                    <option selected></option>
                                    <option value="1">Harare</option>
                                    <option value="2">Gweru</option>
                                    <option value="3">Bulawayo</option>
                                    <option value="4">Mutare</option>
                                </select>
                                <label for="floatingInput">Select Area of Interest</label>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <div className="form-floating mb-3">
                                <select className="form-select" id="natureSelect">
                                    <option selected></option>
                                    <option value="1">Products</option>
                                    <option value="2">Partnerships</option>
                                    <option value="3">Factory Tour</option>
                                    <option value="4">Hunger</option>
                                </select>
                                <label for="floatingInput">Nature of Enquiry</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-floating mb-3">
                                <select class="form-select" id="contactMethodSelect">
                                    <option selected></option>
                                    <option value="1">YES</option>
                                    <option value="2">NO</option>
                                </select>
                                <label for="floatingInput" >Do You Want To Be Contacted By Phone</label>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <div className="p-0 text--area--row">
                                <div className="form-floating mb-3">
                                    <label for="exampleFormControlTextarea1" className="form-label">Your Message</label>
                                    <textarea className="form-control h-100 p-0" id="exampleFormControlTextarea1" rows="10"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <button className="btn submit--button" type="submit">Submit</button>
                    </div>


                </form>

            </div>

            <Footer />

        </>
     );
}
 
export default Contact;