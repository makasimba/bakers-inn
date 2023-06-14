import Navbar from './../Navbar';
import RecipeNav from './../RecipeNav';
import RecipesHeader from './../RecipesHeader';
import Group from './../Group';
import Footer from './../Footer';


const Recipes = () => {
    return ( 
        <>
            <Navbar />
            <RecipesHeader />
            <RecipeNav />
            <Group type="sandwich" />
            <Footer />
        </>
     );
}
 
export default Recipes;