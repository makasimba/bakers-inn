import bun from './../assets/Images/bunrecipe.png';
import bunslices from './../assets/Images/bunslices.png';
import donuts from './../assets/Images/donuts.png';
import plate from './../assets/Images/plate.png';
import gif from './../assets/Images/gif.gif';
import Heading from './Heading';
import Info from './Info';
import './../styles/RecipesHeader.css';
import { useState, useEffect, useRef } from 'react';

const RecipesHeader = () => {

let curr = useRef(1);
const [viz, setViz] = useState(curr.current);

useEffect( () => {
 const interval = setInterval(() => {
    setViz(old=>{

        if (old >= 4){ 
            old = 1;
        }else{
            old += 1;
        }
        return old;

    })
    }, 5_000);

return (() => { clearInterval(interval)})
})
    

    return ( 
        <>
            <div className="container recipes-header overflow-hidden">
                <div className="row">

                    <div className="col-6 d-flex flex-column justify-content-center">

                        <Heading content="The Finest Of Baker's Inn Tik Tok Community Recipes." color="#2d0170" />

                        <Info content={ viz === 1 ? "Make the finest croissants worthy of 🗼 Paris from your 🇿🇼 home. #Croissant #Zimbabwe #Paris #Baker'sInn" : (viz === 2) ? "Forget Chimodho 🥯,  here's a better recipe that makes use of those same ingredients😋 #Chimodho #Local #BakersInn": viz === 3 ? "English breakfast 🍽 done right with Baker's Inn Bread 🍞 #British #Bakers #Breakfast" : "Ever 🧇 wondered how our bread 🍞 in made? Check this out #BakersInn #Baker #Zimbabwe" } color="#2d0170"/>

                        <div className="icon-and-highlight">
                            <p><span className="brown-highlight">@The_Bakers_Inn</span></p>
                        </div>
                        
                    </div>

                    <div className="col-6">

                        <div className="row g-1">
                            <div className="col-6 animation p-1">
                                <div className="food-img" >
                                    <img src={bun} className="img-fluid"  alt="" />
                                </div>
                                <div  className={`overlay ${viz === 1 ? "hidden" : "show"}`}></div>
                                <div  className="gif d-flex align-items-center">
                                    <img src={gif} alt="" className={`img-fluid ${viz === 1? "show" : "hidden" }`} />
                                </div>
                            </div>

                            <div className="col-6 animation p-1">
                                <div className="food-img" >
                                    <img src={plate} className="img-fluid"  alt="" />
                                </div>
                                <div  className={`overlay ${viz === 2 ? "hidden" : "show"}`}></div>
                                <div  className="gif d-flex align-items-center">
                                    <img src={gif} alt="" className={`img-fluid ${viz === 2 ? "show" : "hidden" }`} />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-6 animation p-1">
                                <div className="food-img" >
                                    <img src={bunslices} className="img-fluid"  alt="" />
                                </div>
                                <div  className={`overlay ${viz === 3 ? "hidden" : "show"}`}></div>
                                <div  className="gif d-flex align-items-center">
                                    <img src={gif} alt="" className={`img-fluid ${viz === 3 ? "show" : "hidden" }`} />
                                </div>
                            </div>

                            <div className="col-6 animation p-1">
                                <div className="food-img" >
                                    <img src={donuts} className="img-fluid"  alt="" />
                                </div>
                                <div  className={`overlay ${viz === 4 ? "hidden" : "show"}`}></div>
                                <div  className="gif d-flex align-items-center">
                                    <img  src={gif} alt="" className={`img-fluid ${viz === 4 ? "show" : "hidden" }`} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
     );
}
 
export default RecipesHeader;