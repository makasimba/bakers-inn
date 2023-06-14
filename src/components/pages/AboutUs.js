import Navbar from './../Navbar';
import ImageHeader from '../ImageHeader';
import VisionMission from './../VisionMission';
import ValuesSection from './../ValuesSection';
import Heading from './../Heading';
import PromiseSection from '../PromiseSection';
import Footer from './../Footer';
import display from './../../assets/Images/about-us-header.png';

const AboutUs = () => {
    return ( 

        <>
            <Navbar/>
            <ImageHeader image={display} heading="About Us" />
            <VisionMission/>
            <Heading content="Our Core Values" color="#2d0170" size="3rem" alignment="center"/>
            <ValuesSection />
            <PromiseSection />
            <Footer/>
        </>
     );
}
 
export default AboutUs;