import Heading from './../components/Heading';
import FoodRange from './../components/FoodRange';
import Button from './../components/Button';
import './../styles/ProductRange.css';
import { Link } from 'react-router-dom';


const ProductRange = () => {
    return ( 
        <>
        <div className="product--range py-5">
            <Heading content="Our Product Range" color="#2d0170" />
            <FoodRange />
            <Link to="/Products">
                <Button buttonLabel="View Complete Range" backgroundColor="brown" />
            </Link>
        </div>
        </>
     );
}
 
export default ProductRange;