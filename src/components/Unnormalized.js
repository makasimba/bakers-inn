import Button from './Button';
import Heading from './Heading';
import Info from './Info';
import './../styles/Unnormalized.css';
import React, { useState } from 'react';

const Unnormalized = ({ heading, imageUrl = null, text, buttonLabel, backgroundColor }) => {

    return ( 
        <>
            <div style={{ backgroundColor: backgroundColor }} className="container py-5 my-5 view">
                <div className="row">
                    <div className="col-md-6 order-last p-4 d-flex flex-column justify-content-center">
                        <Heading content={heading}/>
                        <Info content={text}/>

                        <button type='button' style={{ borderWidth: "2px", borderColor: backgroundColor, backgroundColor: backgroundColor }} className='btn btn-md btn-block' data-bs-toggle="modal" data-bs-target="#tourModal">{buttonLabel}</button>

                        <div className="modal modal-xl fade" id="tourModal" tabindex="-1" aria-labelledby="tourModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header d-flex">
                                        <h5 className="modal-title text-center" id="tourModalLabel">BOOK A FACTORY TOUR</h5>
                                        <button type="button" className="btn-close mx-0" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">

                                        <form action="">
                                            <div className="row">
                                                <div className="col">
                                                    <div class="form-floating mb-3">
                                                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                                                        <label for="floatingInput">Name of Organisation</label>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div class="form-floating mb-3">
                                                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                                                        <label for="floatingInput">Name of Contact Person</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col">
                                                    <div class="form-floating mb-3">
                                                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                                                        <label for="floatingPassword">Organization Address</label>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div class="form-floating mb-3">
                                                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                                                        <label for="floatingPassword">Organization's Resident Town</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col">
                                                    <div class="form-floating mb-3">
                                                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                                                        <label for="floatingPassword">Contact Person's Telephone</label>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div class="form-floating mb-3">
                                                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                                                        <label for="floatingPassword">Contact Person's E-mail</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col">
                                                    <div class="form-floating mb-3">
                                                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                                                        <label for="floatingPassword">Date of Visit</label>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div class="form-floating mb-3">
                                                        <select id="inputState" class="form-select">
                                                            <option ></option>
                                                            <option>...</option>
                                                        </select>
                                                        <label for="inputState" class="form-label">Number of Participants</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col">
                                                    <div class="form-floating mb-3">
                                                        <select id="inputState" class="form-select">
                                                            <option ></option>
                                                            <option>...</option>
                                                        </select>
                                                        <label for="inputState" class="form-label">Age Range of Participants</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row w-100">
                                                <div className="col-3"></div>
                                                <div className="col-3">
                                                    <p>Plant Visit <span className="underline-text">Terms & Conditions</span></p>
                                                </div>
                                                <div className="col-3">
                                                    <p>Plant Visit <span className="underline-text">Safety Regulations</span></p>
                                                </div>
                                                <div className="col-3"></div>
                                            </div>

                                            <div className="row">
                                                <div className="col-12">
                                                    <div class="form-check mb-3">
                                                        <input class="form-check-input" type="checkbox" id="gridCheck"/>
                                                        <label class="form-check-label" for="gridCheck">
                                                            Your organisation has agreed to the submission of this application and you have authorisation to submit it. The information you have provided on behalf of your organisation is accurate, full and correct
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div class="form-check mb-3">
                                                        <input class="form-check-input" type="checkbox" id="gridCheck"/>
                                                        <label class="form-check-label" for="gridCheck">
                                                            Have Read the safety regulations
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                            <button type="button" className="btn btn-primary w-100 mb-3">Submit</button>


                                        </form>
                                        
                                    </div>
                                    <div className="modal-footer">

                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="col-md-6 order-first p-4 d-flex align-items-center">
                        <img src={imageUrl} alt="" className="img-fluid"/>
                    </div>

                </div>
            </div>
        </>
     );
}
 
export default Unnormalized;