import Navbar from '../Navbar';
import ImageHeader from '../ImageHeader';
import Heading from '../Heading';
import ProductNav from '../ProductNav';
import Footer from '../Footer';
import banner from './../../assets/Images/products-banner.png';

const Products = () => {
    return ( 
        <>
            <Navbar/>
            <ImageHeader image={banner} heading="Products" />
            <Heading content="Our Products" color="#2d0170" size="3rem" alignment="center" />
            <ProductNav />
            <Footer />
        </>
     );
}
 
export default Products;