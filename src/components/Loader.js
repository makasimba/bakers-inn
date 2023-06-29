import "./../styles/Loader.css";

function Loader() {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center loader">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export default Loader