import header from './../../assets/Images/kids-header.png';
import Navbar from './../Navbar';
import KidSection from './../KidsSection';
import maze from './../../assets/Images/maze.png';
import cubes from './../../assets/Images/cubes.png';
import pacman from './../../assets/Images/pacman.png';
import Footer from './../Footer';

const Kid = () => {
    return ( 
        <>
            <Navbar />

            <div className="container">

                <div className="row">
                    <div>
                        <img src={header} alt="video-game-characters" className="img-fluid" />
                    </div>
                </div>
                
                <div className="row py-5">
                    <KidSection heading="Spaceship Maze" content="Help the spaceship through the maze to get back to earth. Move through levels with increasing difficulty; each puzzle starts the ship in a different location.\nDevelop kids' skills in strategizing, spatial awareness, hand-eye coordination, problem solving and more! Free to play, priceless for learning." backgroundColor="#0083f9" image={maze} />
                </div>
                <div className="row py-5">
                    <KidSection heading="Risky Way" content="Risky Way is a free instant game. The highways of the future are risky and if you want to survive you'll need to be smarter than all of them combined. All you have to do in this nerve-tingling racing game is click, hold, and let go. Of course, if you want to be an effective driver who is able to survive you'll have to know when to click, how long to hold, and only let go at the appropriate time." backgroundColor="#ff1d43" image={cubes} />
                </div>
                <div className="row py-5">
                    <KidSection heading="Pacman" content="There's nothing like a little old school Pacman game right? The great arcade game Pac man was ported to the NES in 1988 and you can play it right here. Never played before?! What?! Eat all the pellets to complete a stage while trying to score as many points as possible by eating fruit and ghosts along the way! But there's more! Ever wonder how Pacman got started? Check out the history of Pacman below and see how it all began." backgroundColor="#2d0170" image={pacman} />
                </div>
            </div>

            <Footer/>
        </>
     );
}
 
export default Kid;