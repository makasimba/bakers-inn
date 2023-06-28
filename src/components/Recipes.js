import Heading from './Heading';
import ProductNav from './ProductNav';


const Recipes = () => {
    
    return ( 
        <>
        <div className="container">
            <div className="row">
                <Heading content="Baker's Recipes" color="#2d0170" alignment="center" />
            </div>
            <div className="row">
                <ProductNav />
            </div>
        </div>
        </>
     );
}
 
export default Recipes;