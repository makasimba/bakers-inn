import Heading from './../components/Heading';
import FoodRange from './../components/FoodRange';
import Button from './../components/Button';
import './../styles/ProductRange.css';


const ProductRange = () => {
    return ( 
        <>
        <div className="product--range py-5">
            <Heading content="Our Product Range" color="#2d0170" />
            <FoodRange />
            <Button content="View Complete Range" color="brown" />
        </div>
        </>
     );
}
 
export default ProductRange;