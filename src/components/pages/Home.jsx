import Hero from '../Hero';
import Navbar from '../Navbar';
import Button from '../Button';
import Info from '../Info';
import Header from '../Header';
import Normalized from '../Normal';
import Unnormalized from '../Unnormalized';
import Food from '../Food';
import About from '../About';
import ProductRange from '../ProductRange';
import Corner from '../Corner';
import RecipeNav from '../RecipeNav';
import Notification from '../Notification';
import Footer from '../Footer';

import differentbread from './../../assets/Images/groupheaderbread.png';
import bread from './../../assets/Images/contactusheader.png';
import bakers from './../../assets/Images/bakers.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return ( 
        <>
            <Navbar/>
            
            <Header image={differentbread} color="white" backgroundColor={"#2d0170"}>
                <Hero color="white"/>
                <Info content="The freshest sandwiches you can make are with Baker's Inn soft white loaf" color="white"/>
                <Link to="/AboutUs">
                    <Button backgroundColor="brown" buttonLabel="READ MORE" />
                </Link>
            </Header>

            <About heading="About Baker's Inn" text="It all started back in the eighties when Baker's Inn was just a small confectionary company that employed just 40 people and produced around 30 000 loaves of bread a day. We now aim to provide nourishing, convenient, and accessible answer to hunger's call." buttonLabel="READ MORE"/>
            
            <Food />

            <ProductRange/>

            <Unnormalized heading="Book A Factory Tour" imageUrl={bread} text="Keen on seeing how Baker's inn products are made? Are you interested in a field trip day for your school's class? Get in touch with us to book a tour of our factory that is closest to you. Fill in the booking form and we will get back to you." buttonLabel="book factory tour"/>

            <Normalized heading="Request A Donation" backgroundColor="whitesmoke" imageUrl={bakers} text="If you are holding an event that you wish to have us donate to, we're more than glad to help. Fill in the donation request form for us to best understand how we can increase your event's impact in the local community." buttonLabel="Request Donation"/>

            <Corner/>

            <RecipeNav/>

            <Notification/>

            <Footer/>
        </>
     );
}
 
export default Home;