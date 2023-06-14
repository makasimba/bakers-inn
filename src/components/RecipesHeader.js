import bun from './../assets/Images/bunrecipe.png';
import bunslices from './../assets/Images/bunslices.png';
import donuts from './../assets/Images/donuts.png';
import plate from './../assets/Images/plate.png';
import gif from './../assets/Images/gif.gif';
import Heading from './Heading';
import Info from './Info';
import './../styles/RecipesHeader.css';
import { useState, useEffect } from 'react';

const RecipesHeader = () => {

    let [viz, setViz] = useState(["show", "hidden", "hidden", "hidden"]);

    useEffect(() => {
        setInterval(() => {
            let f = viz.shift();
            viz.push(f);
            setViz(viz);
        }, 3_000);
    });

    return ( 
        <>
            <div className="container recipes-header overflow-hidden">
                <div className="row">

                    <div className="col-6 d-flex flex-column justify-content-center">
                        <Heading content="The Finest Of Baker's Inn Tik Tok Community Recipes." color="#2d0170" />
                        <Info content="Make the finest croissants worthy of 🗼 Paris from your 🇿🇼 home. #Croissant #Zimbabwe #Paris #Baker'sInn" color="#2d0170"/>
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
                                <div style={{visibility: viz[0] === "show" ? "hidden" : "show"}} className="overlay"></div>
                                <div  className="gif d-flex align-items-center">
                                    <img style={{visibility: viz[0]}} src={gif} alt="" className="img-fluid" />
                                </div>
                            </div>

                            <div className="col-6 animation p-1">
                                <div className="food-img" >
                                    <img src={plate} className="img-fluid"  alt="" />
                                </div>
                                <div style={{visibility: viz[2] === "show" ? "hidden" : "show"}} className="overlay"></div>
                                <div  className="gif d-flex align-items-center">
                                    <img style={{visibility: viz[2]}} src={gif} alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-6 animation p-1">
                                <div className="food-img" >
                                    <img src={bunslices} className="img-fluid"  alt="" />
                                </div>
                                <div style={{visibility: viz[1] === "show" ? "hidden" : "show"}} className="overlay"></div>
                                <div  className="gif d-flex align-items-center">
                                    <img style={{visibility: viz[1]}} src={gif} alt="" className="img-fluid" />
                                </div>
                            </div>

                            <div className="col-6 animation p-1">
                                <div className="food-img" >
                                    <img src={donuts} className="img-fluid"  alt="" />
                                </div>
                                <div style={{visibility: viz[3] === "show" ? "hidden" : "show"}} className="overlay"></div>
                                <div  className="gif d-flex align-items-center">
                                    <img style={{visibility: viz[3]}} src={gif} alt="" className="img-fluid" />
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