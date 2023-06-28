import Navbar from '../Navbar';
import OurRecipeNav from '../OurRecipeNav';
import RecipesHeader from '../RecipesHeader';
import Group from '../Group';
import Footer from '../Footer';


const Recipes = () => {
    return ( 
        <>
            <Navbar />
            <RecipesHeader />
            <OurRecipeNav heading="Our Recipes"/>
            <Footer />
        </>
     );
}
 
export default Recipes;