import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Button from './Button';
import Heading from './Heading';
import Info from './Info';
import './../styles/Normal.css';

const Normal = ({ heading, imageUrl = null, text, buttonLabel, backgroundColor }) => {

    return (
      <>
        <div
          style={{ backgroundColor: backgroundColor }}
          className="container view py-5"
        >
          <div className="row">
            <div className="col-md-6 p-4 d-flex align-items-center">
              <img src={imageUrl} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6 p-4 d-flex flex-column justify-content-center">
              <Heading content={heading} />
              <Info content={text} />

              <button
                type="button"
                style={{
                  borderWidth: "2px",
                  borderColor: backgroundColor,
                  backgroundColor: backgroundColor,
                }}
                className="btn donate--button btn-md btn-block"
                data-bs-toggle="modal"
                data-bs-target="#donateModal"
              >
                {buttonLabel}
              </button>

              <div
                className="modal modal-xl fade"
                id="donateModal"
                tabindex="-1"
                aria-labelledby="donateModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header d-flex align-items-start">
                      <div className="d-flex flex-column">
                        <h5 className="modal-title w-100" id="tourModalLabel">
                          Request Product Donations
                        </h5>
                        <div className="text-center donation--modal--subheading">
                          <p className="px-5">
                            You can apply for product donations by completing
                            this form, we will contact you should your
                            application be successful. Please bear in mind that
                            we will need at least 3 weeks's notice to the date
                            of your event
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="btn-close mx-0"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>

                    <div className="modal-body">
                      <form action="">
                        <div className="row">
                          <div className="col">
                            <div class="form-floating mb-3">
                              <input
                                type="email"
                                class="form-control"
                                id="floatingInput"
                                placeholder="name@example.com"
                              />
                              <label for="floatingInput">
                                Name of Organisation
                              </label>
                            </div>
                          </div>
                          <div className="col">
                            <div class="form-floating mb-3">
                              <input
                                type="email"
                                class="form-control"
                                id="floatingInput"
                                placeholder="name@example.com"
                              />
                              <label for="floatingInput">
                                Name of Contact Person
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col">
                            <div class="form-floating mb-3">
                              <input
                                type="password"
                                class="form-control"
                                id="floatingPassword"
                                placeholder="Password"
                              />
                              <label for="floatingPassword">
                                Contact Person Position
                              </label>
                            </div>
                          </div>
                          <div className="col">
                            <div class="form-floating mb-3">
                              <input
                                type="password"
                                class="form-control"
                                id="floatingPassword"
                                placeholder="Password"
                              />
                              <label for="floatingPassword">
                                Organization Address
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col">
                            <div class="form-floating mb-3">
                              <input
                                type="password"
                                class="form-control"
                                id="floatingPassword"
                                placeholder="Password"
                              />
                              <label for="floatingPassword">
                                Contact Person's Telephone
                              </label>
                            </div>
                          </div>
                          <div className="col">
                            <div class="form-floating mb-3">
                              <input
                                type="password"
                                class="form-control"
                                id="floatingPassword"
                                placeholder="Password"
                              />
                              <label for="floatingPassword">
                                Contact Person's E-mail
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col">
                            <div class="form-floating mb-3">
                              <input
                                type="password"
                                class="form-control"
                                id="floatingPassword"
                                placeholder="Password"
                              />
                              <label for="floatingPassword">
                                Date of Event
                              </label>
                            </div>
                          </div>
                          <div className="col">
                            <div class="form-floating mb-3">
                              <select id="inputState" class="form-select">
                                <option></option>
                                <option>...</option>
                              </select>
                              <label for="inputState" class="form-label">
                                Intended Use of Donation
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col">
                            <div class="form-floating mb-3">
                              <select id="inputState" class="form-select">
                                <option></option>
                                <option>...</option>
                              </select>
                              <label for="inputState" class="form-label">
                                Number of Attendants
                              </label>
                            </div>
                          </div>
                          <div className="col">
                            <div class="form-floating mb-3">
                              <select id="inputState" class="form-select">
                                <option></option>
                                <option>...</option>
                              </select>
                              <label for="inputState" class="form-label">
                                What Product Do You Need?
                              </label>
                            </div>
                          </div>
                        </div>

                        <button
                          type="button"
                          className="btn btn-primary w-100 mb-3"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                    <div className="modal-footer"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );

}
 
export default Normal;