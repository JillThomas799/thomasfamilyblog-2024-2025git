import React from "react";
import { Link } from "react-router-dom";
import './CaminoDeSantiago.css';
import Caminologo from 'components/caminodesantiagologo';
import HwpIntro from "./imagesresized/HwpIntro.jpg";
import HWPThermometer from 'components/charityfundraisingthermometer';
import CdSHeaderPhoto from "./imagesresized/CdSHeaderPhoto.jpg";


export default function CaminoDeSantiago() {
    return (

        <div className="bodyCdS">
        <div className="CdSHeader">
          <button id="backbutton" style={{backgroundColor:"#FFD700"}}>
            <Link to="/" className="backbuttonLink" style={{color:"black"}}>Back</Link>
          </button>
          </div>
        <h1 className="CdSTitle" style={{backgroundColor:"#0000FF", color:"#FFD700", borderRadius:"0"}}>Camino de Santiago 2025
        <Caminologo />
        {/* <HWPThermometer /> */}
        <div className="introHostPhotoCdS">
        <img className="CdSIntroPhoto" src={CdSHeaderPhoto} alt="" />
        </div>

        <div className="datenewsDivCdS">
                <section className="dateCdS">6th May 2025 onwards .... Camino de Santiago Pilgrimage </section>
                <div className="newsheaderCdS">Why the Camino de Santiago?.....</div> 
                <div className="newsCdS">
                < div className="CdSDailyNarrative">
                  The Spanish Camino de Santiago is one of the world's oldest walking routes, dating back to the 9th century. The 'Camino de Santiago'
                  is composed of different pathways commencing in different locations. However they all gradually combine into one leading to the cathedral
                  of Santiago de Compostela, believed to be the last resting place of St James who was one of Jesus's 12 original disciples, 
                  whom Jesus mentored directly during his life and who took his message to the world after his death.
               
                </div> {/*Closing tab for hwpDailyNarrative div */}
                </div>  {/*Closing tab for newsCdS div */}
                </div>  {/*Closing tab for datenewsDivCdS div */}

                <div className="datenewsDivCdS">
            <section className="newsheaderCdS"><strong>A Brief History of the Camino de Santiago</strong>
            </section>
            <section className="dateCdS"></section>
             <div className="newsCdS">
             <div className="componentWalkDetails"> 
            <div className="CdSDailyNarrative">
            The pilgrimage route to Santiago de Compostela originated due to the discovery early in the 8th century of the tomb of the apostle St James.
            A legend tells of how a local shepherd was guided to a spot in a field ('campo') by a star ('stella') where he found the remains of St James ('Sant Iago').
            As a result the name Santiago de Compostela originated.
            <br />
            <br />
            Since the 9th Century the Camino de Santiago (St James' Way) has been a route of pilgrimage so its history goes back <em>a long time.....</em>    
            <br />
            <br />
            The symbol of the trail is represented by a scallop shell; this indicates the joining together of all the routes into one place, namely Santiago de Compostela.
            It is due to the symbolism of the scallop shell and what it represents that it is used as the well-recognised Camino de Santiago logo and is why 
            we have chosen to create a header design for our Camino de Santiago blog based on this symbol.      
            </div> {/*Closing tag for CdSDailyNarrative div */}
            </div>
            </div>
            </div>

        </h1>
        </div>
    );
}
