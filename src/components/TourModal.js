import './../styles/Modal.css';

const TourModal = ({ title, image, ingredients, directions, duration, people }) => {
    return ( 
        <>
            <div className="modal fade" id="tourModal" tabindex="-1" aria-labelledby="tourModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="tourModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <form action="">
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                                    <label for="floatingInput">Email address</label>
                                    </div>
                                    <div class="form-floating">
                                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                                    <label for="floatingPassword">Password</label>
                                </div>
                            </form>
                            
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default TourModal;